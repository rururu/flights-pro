(ns view3d.controls
(:require
 [goog.string :as gstring]
 [goog.string.format]))

(defn format [fmt & args]
  (apply gstring/format fmt args))

(defn by-id  [id]
  (.getElementById js/document id))

(defn get-value [id]
  (.-value (by-id id)))

(defn get-html [id]
  (.-innerHTML (by-id id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn left-controls []
  (set-html! "camera" "<h4>Camera</h4>")
(set-html! "onboard" "Onboard:")
(set-html! "onboard-fld" 
  "<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>
   <option value='MANUAL'>MANUAL</option>
   <option value='select'>select</option>")
(set-html! "view" "View:")
(set-html! "view-fld" 0)
(set-html! "view-sld" 
  "<input type='range' style='width:150px' id='roll-vals'
               min='-180' value='0' max='180'
               oninput='javascript:view3d.client.view(this.value)'>")
(set-html! "pitch" "Pitch:")
(set-html! "pitch-fld" 0)
(set-html! "pitch-sld" 
  "<input type='range' style='width:150px' id='pitch-vals'
               min='-90' value='0' max='90'
               oninput='javascript:view3d.client.pitch(this.value)'>")
(set-html! "roll" "Roll:")
(set-html! "roll-fld" 0)
(set-html! "roll-sld" 
  "<input type='range' style='width:150px' id='roll-vals'
               min='-180' value='0' max='180'
               oninput='javascript:view3d.client.roll(this.value)'>"))

(defn right-controls []
  (set-html! "autopilot" "<h4>Autopilot</h4>")
(set-html! "accel" "accel")
(set-html! "course" "Course: 000")
(set-html! "course-fld" 
  "<input value='180' style='width:38px' id='input-crs'
                     onchange='javascript:view3d.client.course(this.value)'>")
(set-html! "speed" "Speed: 000")
(set-html! "speed-fld" 
  "<input value='210' style='width:38px' id='input-spd'
               onchange='javascript:view3d.client.speed(this.value)'>")
(set-html! "speed-acl" 
  (str "<select style='width:44px'
                onchange='javascript:view3d.client.accel_speed(this.value)'>"
         (apply str (for [n (range 1 11)]
                           (str "<option value='" n "'>" n "</option>")))))
(set-html! "altitude" "Altitude: 00000")
(set-html! "altitude-fld" 
  "<input value='4000' style='width:38px' id='input-alt'
               onchange='javascript:view3d.client.altitude(this.value)'>")
(set-html! "altitude-acl" 
  (str "<select style='width:44px'
                onchange='javascript:view3d.client.accel_altitude(this.value)'>"
         (apply str (for [n (range 1 11)]
                           (str "<option value='" n "'>" n "</option>")))))
(set-html! "lat" "Latitude: 00.0000")
(set-html! "latitude-fld" 
  "<input value='40.8' style='width:56px' id='input-lat'
               onchange='javascript:view3d.client.latitude(this.value)'>")
(set-html! "instant" "ins")
(set-html! "lon" "Longitude: 00.0000")
(set-html! "longitude-fld" 
  "<input value='-74.0' style='width:56px' id='input-lon'
               onchange='javascript:view3d.client.longitude(this.value)'>")
(set-html! "instant-rdo" 
  "<input type='checkbox' id='input-instant'>"))

(defn show-controls []
  (left-controls)
(right-controls))

(defn show-flight-data [car]
  (let [{:keys [coord course speed altitude]} car
      spd (int speed)]
  (set-html! "course" (str "Course: " course))
  (set-html! "speed" (str "Speed: " spd))
  (set-html! "altitude" (str "Altitude: " (int altitude)))
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

