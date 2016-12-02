(ns view3d.controls
(:require
 [goog.string :as gstring]
 [goog.string.format]))

(defn format [fmt & args]
  (apply gstring/format fmt args))

(defn by-id  [id]
  (.getElementById js/document id))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn show-controls []
  (set-html! "autopilot" "<h4>Autopilot</h4>")
(set-html! "course" "Course: 000")
(set-html! "speed" "Speed: 000")
(set-html! "altitude" "Altitude: 00000")
(set-html! "lat" "Latitude: 00.0000")
(set-html! "lon" "Longitude: 00.0000")
(set-html! "camera" "<h4>Camera</h4>")
(set-html! "onboard" "Onboard:")
(set-html! "onboard-fld" 
  "<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>
   <option value='callsign'>callsign</option>
   <option value='select'>select</option>")
(set-html! "view" "View:")
(set-html! "view-fld" 
  "<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>
   <option value='FORWARD'>FORWARD</option>
   <option value='BACKWARD'>BACKWARD</option>
   <option value='RIGHT'>RIGHT</option>
   <option value='LEFT'>LEFT</option>
   <option value='UP'>UP</option>
   <option value='DOWN'>DOWN</option>
   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>
   <option value='FORWARD'>FORWARD</option>
   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>
   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>
   </select>")
(set-html! "pitch" "Pitch:")
(set-html! "pitch-fld" 
  "<input value='0' style='width:90px'
               onchange='javascript:view3d.client.pitch(this.value)'>")
(set-html! "roll" "Roll:")
(set-html! "roll-fld" 
  "<input value='0' style='width:90px'
               onchange='javascript:view3d.client.roll(this.value)'>")
(set-html! "course-fld" 
  "<input value='0' style='width:40px'
                     onchange='javascript:view3d.client.course(this.value)'>")
(set-html! "speed-fld" 
  "<input value='0' style='width:40px'
               onchange='javascript:view3d.client.speed(this.value)'>")
(set-html! "altitude-fld" 
  "<input value='0' style='width:40px'
               onchange='javascript:view3d.client.altitude(this.value)'>")
(set-html! "latitude-fld" 
  "<input value='0' style='width:40px'
               onchange='javascript:view3d.client.latitude(this.value)'>")
(set-html! "longitude-fld" 
  "<input value='0' style='width:40px'
               onchange='javascript:view3d.client.longitude(this.value)'>"))

(defn show-flight-data [carr]
  (let [{:keys [coord course speed altitude]} @carr]
  (set-html! "course" (str "Course: " course))
  (set-html! "speed" (str "Speed: " speed))
  (set-html! "altitude" (str "Altitude: " altitude))
  (set-html! "lat" (str "Latitude: " (format "%.4f" (first coord))))
  (set-html! "lon" (str "Longitude: " (format "%.4f" (second coord))))))

(defn callsigns [list]
  (set-html! "onboard-fld" 
  (str "<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"
          (if (empty? list)
            (str "<option value='callsign'>callsign</option>
                   <option value='select'>select</option>")
            (str "<option value='select'>select</option>"
              (apply str (for [e list]
                                (str "<option value='" e "'>" e "</option>")))))
        "</select>")))

