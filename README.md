# flights-pro

Air traffic control system and flight simulator - a test example for the [rete4frames] (http://github.com/rururu/rete4frames) expert system shell.
It uses [Flightradar24] (http://www.flightradar24.com) web service, [Leaflet] (http://leafletjs.com) JavaScript library, [Cesium] (https://cesiumjs.org/) WebGL virtual globe and map engine, [geonames] (http://www.geonames.org) geographical data web service and [Protege-3.5] (http://protege.stanford.edu) ontology editor as server-side GUI and Clojure/ClojureScript IDE.

![screenshot](screenshot.jpg)

## Start

```clj
$ cd <..>/flights-pro
$ lein run
```
In the opened Protege GUI execute the menu item Edit -> Clojure Work.
When the Pro server starts, open two browser windows, one on the address: http://localhost:4444 (Cockpit view), second on the address: http://localhost:4444/chart (Chart view).

## Usage

### Chart view

#### Commands

In the chart view select in the "Commands" selector the item "Watch Visible Area". This begins a process of collection and display information of flights in the visible area. Black icons means aircrafts on the ground, green ones are descending, blue ones are climbing and purple - on a level flight.

If you want to see an air traffic around any other airport, execute the command "Move to Airport", select a country and an airport in this country.

A click on the aircraft icon brings up a popup with general data of the flight and 3 buttons. The button "Trail" draws the current way of the aircraft. The button "Follow" starts moving of the visible area along this flight and periodically displays the trail of the flight. The button "Stop" ends up this moving.

You can plan your own flights. To do this, use the command "Schedule Flight". Input a call sign of your flight, a time of departure, select a country and an airport of departure and a country and an airport of arrival. That's all. When your flight starts you can follow it.

The Command "Toggle Wikipedia" starts/ends a process of search of Wikipedia articles about places of interest in the visible area. This places would be shown on the chart with the special icons and summaries of articles would be stored in Protege ontology as the instances of a class "WikiArticle". A click on the icon brings up a popup with the summary.

Copyright and license
----

Copyright © 2016 Ruslan Sorokin.

Licensed under the EPL (see the file epl.html).
# rete4flights
