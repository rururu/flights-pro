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
(es/go-onboard ?cs ?crd ?crs ?spd ?alt))

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
(es/go-onboard ?cs ?crd ?crs ?spd ?alt))

(af:FlyOnboardTo 0
?ob (Onboard time ?t0 callsign ?cs)
(Flight age "CURRENT" time ?t1 callsign ?cs
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
(es/fly-onboard-to ?cs ?crs2 ?crd2 ?spd2 ?alt2 (- ?t2 ?t1)))

(mf:ClimbStart 0
?fp (FlightPlan id ?id
	status "CRUISE"
	vertical-status "OFF"
	cruise ?cru)
=>
(println [:ClimbStart ?id ?cru])
(my.flights.move/control ?id my.flights.move/elevate (:altitude ?cru))
(my.flights.move/control ?id my.flights.move/accel (:speed ?cru))
(modify ?fp vertical-status "CLIMB"))

(mf:ClimbDone 0
?fp (FlightPlan id ?id
	vertical-status "CLIMB"
	cruise ?cru)
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	((= ?alt (:altitude ?cru))
	 (= ?spd (:spdeed ?cru))))
=>
(println [:ClimbDone ?id ?alt])
(modify ?fp vertical-status "LEVEL"))

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
	status "INITIAL-TURN"
	takeoff ?tof)
(Flight age "CURRENT" 
	id ?id
	course ?crs
	(= ?crs (first (:to-crs ?tof))))
=>
(println [:TakeoffDone ?id ?crs])
(modify ?fp takeoff "DONE"
	status "CRUISE"))

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
(my.flights.move/control ?id my.flights.move/elevate (:altitude ?tof))
(my.flights.move/control ?id my.flights.move/accel (:speed ?tof))
(modify ?fp start-time "PASSED"
	status "TAKEOFF"))

(mf:FlightPlan 0
?sd (Schedule callsign ?csn
	time ?tim
	from ?frm
	to ?to)
=>
(if-let [stm (es/start-time ?tim)]
  (let [spp (es/specific-plan es/GENPLAN ?frm ?to)]
     (my.flights.move/add-my-flight 
	?csn ?csn (:start-crd spp) (:start-run spp) 0 (:start-alt spp))
     (asser FlightPlan id ?csn
	start-time stm
	spec-plan spp
	takeoff (es/takeoff-plan spp)
	cruise (es/cruise-plan spp)
	landing (es/landing-plan spp)
	status "READY"
	vertical-status "OFF")
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
	status "CRUISE"
	landing ?lnd
	cruise ?cru)
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	(not= ?crs (int (calc.geo/bear-deg ?crd (:final-turn-crd ?lnd)))))
=>
(let [newc (int (calc.geo/bear-deg ?crd (:final-turn-crd ?lnd)))]
  (println [:Cruise ?id newc])
  (my.flights.move/control ?id my.flights.move/turn [newc 1])))

(mf:InitialTurnStart 0
?fp (FlightPlan id ?id
	status "TAKEOFF"
	takeoff ?tof)
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	((>= ?alt (first (:altitude ?tof)))
	 (>= ?spd (first (:speed ?tof)))))
=>
(println [:InitialTurnStart ?id (:to-crs ?tof) ?alt ?spd])
(my.flights.move/control ?id my.flights.move/turn (:to-crs ?tof))
(modify ?fp status "INITIAL-TURN"))

(mf:DescendStart 0
?fp (FlightPlan id ?id
	landing ?lnd
	cruise ?cru
	vertical-status  ?vst
	[(= ?vst "CLIMB")
	 (= ?vst "LEVEL")])
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	(<= (calc.geo/distance-nm ?crd (:final-turn-crd ?lnd))
	  (:descend-dist ?cru)))
=>
(println [:DescendStart ?id ?dnd])
(my.flights.move/control ?id my.flights.move/elevate (:altitude ?lnd))
(modify ?fp vertical-status "DESCEND"))

(mf:CruiseDone 0
?fp (FlightPlan id ?id
	status "CRUISE"
	landing ?lnd
	cruise ?cru)
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	(calc.geo/abaft ?crs ?crd (:final-turn-crd ?lnd)))
=>
(println [:CruiseDone ?id ?crd ?cru])
(modify ?fp cruise "DONE"
	status "FINAL-TURN"))

(mf:FinalTurnStart 0
(FlightPlan id ?id
	status "FINAL-TURN"
	landing ?lnd)
=>
(println [:FinalTurnStart ?id ?lnd])
(my.flights.move/control ?id my.flights.move/accel (:lannding-spd ?lnd))
(my.flights.move/control ?id my.flights.move/turn (:landing-crs ?lnd)))

(mf:LandingStart 0
?fp (FlightPlan id ?id
	status "FINAL-TURN"
	landing ?lnd)
(Flight age "CURRENT" 
	id ?id
	altitude ?alt
	speed ?spd
	course ?crs
	(= ?crs (first (:landing-crs ?lnd))))
=>
(println [:LandingStart ?id ?alt ?spd ?crs])
(modify ?fp status "LANDING"))

(mf:BrakeStart 0
?fp (FlightPlan id ?id
	landing ?lnd
	cruise ?cru
	vertical-status "DESCEND")
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	(<= (calc.geo/distance-nm ?crd (:final-turn-crd ?lnd))
	  (:brake-dist ?cru)))
=>
(println [:BrakeStart ?id ?dnd])
(my.flights.move/control ?id my.flights.move/accel (:speed ?lnd))
(modify ?fp vertical-status "DESCEND&BRAKE"))

(mf:OnLandingCourse 0
?fp (FlightPlan id ?id
	status "LANDING"
	landing ?lnd
	spec-plan ?spp)
(Flight age "CURRENT" 
	id ?id
	coord ?crd)
=>
(let [fcrd (:finish-crd ?spp)
       dist (calc.geo/distance-nm ?crd fcrd)
       bear (int (calc.geo/bear-deg ?crd fcrd))
       alt (int (calc.core/smooth-tabfun dist (:altitude-graph ?lnd)))
       spd (int (calc.core/smooth-tabfun dist (:spdeed-graph ?lnd)))]
   (my.flights.move/control ?id my.flights.move/turn [bear 2])
   (my.flights.move/control ?id my.flights.move/elevate [alt 8])
   (my.flights.move/control ?id my.flights.move/accel [spd 10])))

(mf:LandingDone 1
?fp (FlightPlan id ?id
	status "LANDING"
	spec-plan ?spp
	landing ?lnd)
(Flight age "CURRENT" 
	id ?id
	coord ?crd
	course ?crs
	speed ?spd
                        [(= ?spd 0)
	 (calc.geo/abaft ?crs ?crd (:finish-crd ?spp))])
=>
(println [:LandingDone ?id ?crd])
(es/put-off-map ?id)
(my.flights.move/rem-my-flight ?id)
(modify ?fp status "GROUND" 
	landing "DONE"))

(qq:Check2FlightsIntersection 0
?q (Question predicate "intersect")
(Flight id ?id1
           callsign ?cs1
           coord ?crd1
           course ?crs1
           speed ?spd1
           altitude ?a1
           age "CURRENT")
(Flight id ?id2
           callsign ?cs2
           coord ?crd2
           course ?crs2
           speed ?spd2
           altitude ?a2
           age "CURRENT"
           ((<= (.compareTo ?id1 ?id2) 0)
            (and (> ?spd1 0) (> ?spd2 0))
            [(and (> ?a1 0) (> ?a2 0) (< (Math/abs (- ?a1 ?a2)) 10000))
             (and (== ?a1 0) (== ?a2 0))]
            (< (calc.geo/distance-nm ?crd1 ?crd2)
               (es/max-distance ?spd1 ?spd2))))
=>
(when-let [[dmin tmin] (es/intersect? ?crd1 ?crs1 ?spd1 ?crd2 ?crs2 ?spd2 ?id1 ?id2)]
  (println [:Dmin dmin :Tmin tmin :Who ?cs1 ?cs2])
  (es/pom-and-link ?id1 ?crd1 ?crs1 ?spd1 ?cs1 ?id2 ?crd2 ?crs2 ?spd2 ?cs2 dmin tmin)))

(qq:RetractQuestion -1
?q (Question)
=>
(retract ?q))

