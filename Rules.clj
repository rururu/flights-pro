(af:SwitchOnboard 0
(Flight time ?t
           callsign ?cs
           coord ?crd 
           course ?crs
           speed ?spd
           altitude ?alt)
?ob1 (Onboard)
?ob2 (Onboard callsign ?cs time 0
	(not= ?cs "STOP"))
=>
(retract ?ob1)
(modify ?ob2 time ?t)
(es/onboard ?cs ?crd ?crs ?spd ?alt))

(af:StartOnboard 0
(Flight time ?t
           callsign ?cs
           coord ?crd 
           course ?crs
           speed ?spd
           altitude ?alt)
?ob (Onboard callsign ?cs time 0)
(not Onboard)
=>
(modify ?ob time ?t)
(es/onboard ?cs ?crd ?crs ?spd ?alt))

(af:FlyOnboardTo 0
?ob (Onboard time ?t0 callsign ?cs)
(Flight age "CURRENT" time ?t1 callsign ?cs course ?crs1
	(<= ?t0 ?t1))
(Flight age "NEW"
           callsign ?cs
           course ?crs2 
           coord ?crd2 
           speed ?spd2 
           altitude ?alt2
           status ?s2
           time ?t2)
=>
(modify ?ob time ?t2)
(es/fly-onboard-to ?cs ?crs1 ?crs2 ?crd2 ?spd2 ?alt2 (- ?t2 ?t1))
;; (println [:ONBOARD ?cs ?t2 ?crd2 ?alt2 ?crs2 ?spd2 ?s2]))

(mf:ClimbStart 0
(FlightPlan id ?id
	takeoff "DONE"
	climb ?cli
	descend ?dnd
	((map? ?cli)
	 (map? ?dnd)
	 (not= (:status ?dnd) "ON")))
=>
(println [:ClimbStart ?id ?cli])
(my.flights.move/control ?id my.flights.move/elevate (:climb-alt ?cli))
(my.flights.move/control ?id my.flights.move/accel (:climb-spd ?cli)))

(mf:ClimbDone 0
?fp (FlightPlan id ?id
	takeoff "DONE"
	climb ?cli
	(map? ?cli))
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	((= ?alt (:climb-alt ?cli))
	 (= ?spd (:climb-spd ?cli))))
=>
(println [:ClimbDone ?id ?alt])
(modify ?fp climb "DONE"))

(af:PutFlightOnMap 0
(Flight id ?id
           coord ?crd
           course ?crs
           speed ?spd
           status ?sts
           age "NEW")
=>
(es/put-on-map ?id ?crd ?crs ?spd ?sts))

(af:FlightHistory3 1
?of1 (Flight id ?id age "OLD" time ?t1)
?of2 (Flight id ?id age "OLD" time ?t2
	(> ?t2 ?t1))
=>
(retract ?of1))

(af:DescendMark 0
(Flight id ?id altitude ?a1 age "OLD")
(Flight id ?id altitude ?a2 age "CURRENT")
?fl (Flight id ?id altitude ?a3 age "NEW"
	status ?s3 
	coord ?crd3 
	course ?crs3
	speed ?spd3
	((not= ?s3 "DESCEND")
	 (> ?a1 ?a2 ?a3)))
=>
(modify ?fl status "DESCEND")
(es/put-on-map ?id ?crd3 ?crs3 ?spd3 ?s3))

(af:ClimbMark 0
(Flight id ?id altitude ?a1 age "OLD")
(Flight id ?id altitude ?a2 age "CURRENT")
?fl (Flight id ?id altitude ?a3 age "NEW"
	status ?s3 
	coord ?crd3 
	course ?crs3
	speed ?spd3
	((not= ?s3 "CLIMB")
	 (< ?a1 ?a2 ?a3)))
=>
(modify ?fl status "CLIMB")
(es/put-on-map ?id ?crd3 ?crs3 ?spd3 ?s3))

(mf:TakeoffDone 0
?fp (FlightPlan id ?id
	takeoff ?tof
	(map? ?tof))
(Flight age "CURRENT" 
	id ?id
	course ?crs
	(= ?crs (first (:general-crs ?tof))))
=>
(println [:TakeoffDone ?id ?crs])
(modify ?fp takeoff "DONE"))

(mf:TakeoffStart 0
?fp (FlightPlan id ?id
	start-time ?stm
	takeoff ?tof
	((number? ?stm)
	 (map? ?tof)))
(Flight age "CURRENT"
	id ?id
	time ?tim
	(>= ?tim ?stm))
=>
(println [:TakeoffStart ?id ?tof])
(my.flights.move/control ?id my.flights.move/elevate (:takeoff-alt ?tof))
(my.flights.move/control ?id my.flights.move/accel (:takeoff-spd ?tof))
(modify ?fp start-time "PASSED"))

(mf:FlightPlan 0
?sd (Schedule callsign ?csn
	time ?tim
	from ?frm
	to ?to)
=>
(if-let [stm (es/start-time ?tim)]
  (let [tof (es/takeoff-plan ?frm ?to)
         lnd (es/landing-plan tof ?to)]
     (my.flights.move/add-my-flight 
	?csn ?csn (:from-crd tof) (first (:initial-crs tof)) 0 (:from-alt tof))
     (asser FlightPlan id ?csn
	start-time stm
	takeoff tof
	climb (es/climb-plan)
	cruise (es/cruise-plan lnd)
                        descend (es/descend-plan lnd)
	landing lnd)
     (pro.commands/set-my-flight-info ?csn ?tim ?frm ?to))))

(af:FollowFlight 0
?f (Follow id ?id time ?t0)
(Flight id ?id coord ?crd1 altitude ?alt1 age "OLD" time ?t1
	(<= ?t0 ?t1))
(Flight id ?id coord ?crd2 altitude ?alt2 age "CURRENT")
(Flight id ?id coord ?crd3 altitude ?alt3 age "NEW" time ?t3 callsign ?cs)
=>
(println [:FOLLOW ?cs])
(let [[lat1 lon1] ?crd1
       [lat2 lon2] ?crd2
       [lat3 lon3] ?crd3]
  (pro.commands/set-map-view ?crd3)
  (pro.commands/do-trail ?id 
	[lat3 lon3 ?alt3
	 lat2 lon2 ?alt2
	 lat1 lon1 ?alt1])
  (modify ?f time ?t3)))

(af:StopOnboard 0
?ob1 (Onboard)
?ob2 (Onboard callsign "STOP")
=>
(retract ?ob1 ?ob2))

(af:StopOrSwitchFollow 0
?f1 (Follow  id ?id1 time ?t1)
?f2 (Follow  id ?id2 time ?t2
	((not= ?id1 ?id2)
	 (= ?t2 0)))
=>
(retract ?f1)
(if (= ?id2 "STOP")
   (retract ?f2)))

(af:CZML-LegGeneration 0
(Onboard callsign ?cs1)
(Flight callsign ?cs1 coord ?c1 course ?crs1 age "NEW")
(Flight id ?id2 coord ?c2 altitude ?a2 age "CURRENT" point4d ?p2 callsign ?cs2)
(Flight id ?id2 coord ?c3 altitude ?a3 age "NEW" point4d ?p3 course ?crs3 
	(< (calc.geo/distance-nm ?c1 ?c3) 10)))
=>
(cesium.core/leg ?cs2
	(if (calc.geo/following? ?crs1 ?crs3)
	  (es/URL-ICO "FOLLOWING")
	  (es/URL-ICO "COUNTER")) 
	(calc.core/smooth-tabfun (calc.geo/distance-nm ?c1 ?c3) [[0 1.0][20 0.1]])
	?p2
	?p3))

(af:FlightHistory1 1
?nf1 (Flight id ?id age "NEW" time ?t1)
?nf2 (Flight id ?id age "NEW" time ?t2
	(> ?t2 ?t1))
=>
(modify ?nf1 age "CURRENT"))

(af:FlightHistory2 1
?cf1 (Flight id ?id age "CURRENT" time ?t1)
?cf2 (Flight id ?id age "CURRENT" time ?t2
	(> ?t2 ?t1))
=>
(modify ?cf1 age "OLD"))

(af:StartFollow 0
(Flight id ?id age "OLD" time ?t1)
?f (Follow id ?id time 0)
(not Follow)
=>
(modify ?f time ?t1))

(af:ForgetOldFlight 0
?f1 (Flight id ?id time ?t1)
(Flight age "NEW" time ?t2
	(> (- ?t2 ?t1) 120))
=>
(es/put-off-map ?id)
(retract ?f1))

(mf:Cruise 0
(FlightPlan id ?id
	takeoff "DONE"
	cruise ?cru
	(map? ?cru))
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	(not= ?crs (int (calc.geo/bear-deg ?crd (:target-crd ?cru)))))
=>
(let [newc (int (calc.geo/bear-deg ?crd (:target-crd ?cru)))]
  (println [:Cruise ?id newc])
  (my.flights.move/control ?id my.flights.move/turn [newc 1])))

(mf:InitialTurnStart 0
?fp (FlightPlan id ?id
	takeoff ?tof
	((map? ?tof)
	 (= (:initial-turn ?tof) "OFF")))
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	((>= ?alt (first (:takeoff-alt ?tof)))
	 (>= ?spd (first (:takeoff-spd ?tof)))))
=>
(println [:InitialTurnStart ?id ?alt ?spd])
(my.flights.move/control ?id my.flights.move/turn (:general-crs ?tof))
(modify ?fp takeoff (assoc ?tof :initial-turn "ON")))

(mf:DescendStart 0
?fp (FlightPlan id ?id
	takeoff "DONE"
	descend ?dnd
	((map? ?dnd)
	 (= (:status ?dnd) "OFF")))
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	(<= (calc.geo/distance-nm ?crd (:target-crd ?dnd))
	  (:alt-dist ?dnd)))
=>
(println [:DescendStart ?id ?dnd])
(my.flights.move/control ?id my.flights.move/elevate (:alt-target ?dnd))
(modify ?fp descend (assoc ?dnd :status "ON")))

(mf:CruiseDone 0
?fp (FlightPlan id ?id
	takeoff "DONE"
	cruise ?cru
	(map? ?cru))
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	(calc.geo/abaft ?crs ?crd (:target-crd ?cru)))
=>
(println [:CruiseDone ?id ?crd ?cru])
(modify ?fp cruise "DONE"))

(mf:FinalTurnStart 0
(FlightPlan id ?id
	cruise "DONE"
	landing ?lnd
	(map? ?lnd))
=>
(println [:FinalTurnStart ?id ?lnd])
(my.flights.move/control ?id my.flights.move/accel (:lannding-spd ?lnd))
(my.flights.move/control ?id my.flights.move/turn (:landing-crs ?lnd)))

(mf:LandingStart 0
?fp (FlightPlan id ?id
	cruise "DONE"
	landing ?lnd
	((map? ?lnd)
	 (= (:status ?lnd) "OFF")))
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	course ?crs
	(= ?crs (first (:landing-crs ?lnd))))
=>
(println [:LandingStart ?id ?alt ?spd ?crs])
(modify ?fp landing (assoc ?lnd :status "ON")))

(mf:BrakeStart 0
?fp (FlightPlan id ?id
	takeoff "DONE"
	descend ?dnd
	((map? ?dnd)
	 (= (:status ?dnd) "ON")))
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	(<= (calc.geo/distance-nm ?crd (:target-crd ?dnd))
	  (:spd-dist ?dnd)))
=>
(println [:BrakeStart ?id ?dnd])
(my.flights.move/control ?id my.flights.move/accel (:spd-target ?dnd))
(modify ?fp descend "DOING"))

(mf:OnLandingCourse 0
?fp (FlightPlan id ?id
	cruise "DONE"
	landing ?lnd
	((map? ?lnd)
	 (= (:status ?lnd) "ON")))
(Flight age "CURRENT" 
	id ?id
	coord ?crd)
=>
(let [tcrd (:stop-crd ?lnd)
       dist (calc.geo/distance-nm ?crd tcrd)
       bear (calc.geo/bear-deg ?crd tcrd)
       alt (calc.core/smooth-tabfun dist (:table-alt ?lnd))
       spd (calc.core/smooth-tabfun dist (:table-spd ?lnd))]
   (my.flights.move/control ?id my.flights.move/turn [bear 2])
   (my.flights.move/control ?id my.flights.move/elevate [alt 6])
   (my.flights.move/control ?id my.flights.move/accel [spd 8])))

(mf:LandingDone 0
?fp (FlightPlan id ?id
	cruise "DONE"
	landing ?lnd
	((map? ?lnd)
	 (= (:status ?lnd) "ON")))
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	(calc.geo/abaft ?crs ?crd (:stop-crd ?lnd)))
=>
(println [:LandingDone ?id ?crd])
(my.flights.move/rem-my-flight ?id)
(modify ?fp landing "DONE"))

