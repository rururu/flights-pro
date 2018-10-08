# flights-pro

Air traffic control system and flight simulator - a test example for the [rete4frames](http://github.com/rururu/rete4frames) expert system shell.
It uses [Flightradar24](http://www.flightradar24.com) web service, [Leaflet](http://leafletjs.com) JavaScript library, [Cesium](https://cesiumjs.org/) WebGL virtual globe and map engine, [geonames](http://www.geonames.org) geographical data web service and [Protege-3.5](http://protege.stanford.edu) ontology editor as server-side GUI and Clojure/ClojureScript IDE.

![screenshot](screenshot1.jpeg)

```diff
- WARNING! Uncomment this line for Java 9 and above in project.clj file before the start:
;; :jvm-opts ["--add-modules" "java.xml.bind"]
```

## Start

```clj
$ cd <..>
$ git clone https://github.com/rururu/flights-pro.git
$ cd flights-pro
$ lein run
```
In a Protege GUI open a project FlightPro.pprj from a folder <..>/flights-pro/pro-projects and execute a menu item Edit -> Clojure Work.
When the Pro server starts, open two browser windows, one on the address: http://localhost:4444 (Cockpit view), second on the address: http://localhost:4444/chart (Chart view).

## Usage

### Chart view

#### Commands

In the chart view select in the "Commands" selector the item "Watch Visible Area". This begins a process of collection and display information of the flights in the visible area. Black icons means aircrafts on the ground, green ones are descending, blue ones are climbing and purple - on a level flight.

If you want to see an air traffic around some other airport, execute the command "Move to Airport", select a country and an airport in this country.

A click on the aircraft icon brings up a popup with general data of the flight and 3 buttons. The button "Trail" draws the current way of the aircraft. The button "Follow" starts moving of the visible area along this flight and periodically displays the trail of the flight. The button "Stop" ends up this moving.

You can plan your own flights. To do this, use the command "Schedule Flight". Input a call sign of your flight, a time of departure, select a country and an airport of departure and a country and an airport of arrival. That's all. When your flight starts you can follow it.

The Command "Toggle Wikipedia" starts/ends a process of search of Wikipedia articles about places of interest in the visible area. This places would be shown on the chart with the special icons and summaries of articles would be stored in Protege ontology as the instances of a class "WikiArticle". A click on the icon brings up a popup with the summary.

The command "Ask Question" gives possibility to ask Expert system different questions about environment and current situation.

The command "Clear" removes flights from the screen.

### Cockpit view

#### Camera

"Onboard" selector gives possibility to select flight to get on board, or get on board a MANUAL, flight that you control yourself through "Autopilot". If you see some flight on the chart and don't see it in the "Onboard" selector, click "select" once more. This updates list of flight callsigns in sight.

When you stay on board of the regular flight and switch on the MANUAL flight, it continues this regular flight strictly forward until you begin to maneuver yourself.

Through "View" selector and "Pitch" and "Roll" fields you control direction of the camera's view.

#### Autopilot

"Autopilot" controls gives you possibility to set target values of course, speed and altitude of the MANUAL flight. Values would be changing gradually. You can accelerate change of the corresponding value by "accel" selector.

When a longitude value changes, the MANUAL flight turns on course to a location, defined by a latitude and the longitude values, if "ins" checkbox is off. So, set the needed latitude before the longitude. If "ins" checkbox is on, that means "instantly", and thus you go to corresponding location at once.

Alternatively, you can go instantly to some location while in MANUAL mode by clicking chart view in this location.

## Programming

You can do Expert System, Clojure and ClojureScript programming and debugging in IDE based on Protege-3.5 during air traffic monitoring and simulation (see screencasts below).

## Screencasts

1. Landing of a regular Air Berlin flight in JFK airport, New-York.

    [AirBerlin Landing JFK](https://www.youtube.com/watch?v=lA3GPsUEVLE)

2. Scheduled flight simulation from Cochabamba to Santa Cruz de la Sierra, Bolivia.

    [Part 1. Takeoff](https://www.youtube.com/watch?v=HkL9MkdoSG4)

    [Part 2. Level flight](https://www.youtube.com/watch?v=1-JVObqbtcI)

    [Part 3. Continuation of the level flight](https://www.youtube.com/watch?v=hHWDM8LyrkM)

    [Part 4. Landing](https://www.youtube.com/watch?v=pzy952DoeWg)

3. Programming and debugging Expert system rules and Clojure functions:

    Adding new question to Expert System. Adding new rule to ES for answer question. Adding new function for rule's right hand side ("local-cities"). Adding second rule for answer question. Filling function's body with code. Fixing bugs using exrernal text editor ("LightTable") to locate bug places. Restarting ES. Testing new question. [Programming1](https://www.youtube.com/watch?v=bTFfXeNlGlE)

4. Programming and debugging ClojureScript, HTML and CSS.

    [Programming2](https://www.youtube.com/watch?v=14q3sFXtwGE)

## Planning of scheduled flights

Flight plan for scheduled flights is described in an active instance of a class "GeneralPlan" (active instance marked with "yellow sticker").

You can change this plan before scheduling flight or replace it with your own plan by shifting yellow sticker (removing  from the old instance and sticking on new one).

For example, to safely takeoff from Cochabamba you have to icrease and accelerate lifting by changing value of a slot "Altitude-vector" in a "Basic Takeoff Plan" from [1500 6] on [4000 8] (here the first value is a target altitude and the second value is an acceleration of lift).

![screenshot](screenshot2.jpeg)

## Airplane dynamics

You can change dynamics of your own airplanes (of manual flight and of scheduled flights). These dynamics described in the instances of "AirplaneDynamics" class. To change dynamics click on the button "Update Dynamics" on a corresponding instance.

![screenshot](screenshot3.jpeg)

You can easy create your own instances of "AirplaneDynamics" using the "Create Instance" button (with a shining diamond on it).

Copyright and license
----

Copyright © 2016 Ruslan Sorokin.

Licensed under the EPL (see the file epl.html).
# flights-pro
