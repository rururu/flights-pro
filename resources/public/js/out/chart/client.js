// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.PORT = (4444);
chart.client.CHR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join('');
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.MOV_TIO = (200);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.URL_OSM = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
chart.client.URL_GSA = "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";
chart.client.URL_GST = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
chart.client.URL_GHB = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}";
chart.client.URL_GTR = "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}";
chart.client.by_id = (function chart$client$by_id(id){
return document.getElementById(id);
});
chart.client.set_html_BANG_ = (function chart$client$set_html_BANG_(id,msg){
return chart.client.by_id.call(null,id).innerHTML = msg;
});
chart.client.format = (function chart$client$format(var_args){
var args__20183__auto__ = [];
var len__20176__auto___22203 = arguments.length;
var i__20177__auto___22204 = (0);
while(true){
if((i__20177__auto___22204 < len__20176__auto___22203)){
args__20183__auto__.push((arguments[i__20177__auto___22204]));

var G__22205 = (i__20177__auto___22204 + (1));
i__20177__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var argseq__20184__auto__ = ((((1) < args__20183__auto__.length))?(new cljs.core.IndexedSeq(args__20183__auto__.slice((1)),(0),null)):null);
return chart.client.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20184__auto__);
});

chart.client.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.client.format.cljs$lang$maxFixedArity = (1);

chart.client.format.cljs$lang$applyTo = (function (seq22201){
var G__22202 = cljs.core.first.call(null,seq22201);
var seq22201__$1 = cljs.core.next.call(null,seq22201);
return chart.client.format.cljs$core$IFn$_invoke$arity$variadic(G__22202,seq22201__$1);
});

chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.mouse_move = (function chart$client$mouse_move(lat,lng){
return chart.client.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(chart.client.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(chart.client.format.call(null,"%.4f",lng))].join(''));
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__22208 = response;
var map__22208__$1 = ((((!((map__22208 == null)))?((((map__22208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22208):map__22208);
var status = cljs.core.get.call(null,map__22208__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22208__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.move_vehicle = (function chart$client$move_vehicle(mp){
carr.move.move.call(null,mp);

var mrk = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp);
var vec__22213 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22213,(0),null);
var lon = cljs.core.nth.call(null,vec__22213,(1),null);
var pos = (new L.LatLng(lat,lon));
return mrk.setLatLng(pos);
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(veh));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(veh));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.info = (function chart$client$info(id){
return id;
});
chart.client.create_marker = (function chart$client$create_marker(mp){
var vec__22220 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22220,(0),null);
var lon = cljs.core.nth.call(null,vec__22220,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (vec__22220,lat,lon,pos,ico,opt,mk){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22220,lat,lon,pos,ico,opt,mk){
return (function (p1__22216_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22216_SHARP_)),e.target);
});})(vec__22220,lat,lon,pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22220,lat,lon,pos,ico,opt,mk))
);

return mk;
});
chart.client.create_vehicle = (function chart$client$create_vehicle(id,mp){
if(cljs.core.truth_(cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id))){
chart.client.delete_vehicle.call(null,id);
} else {
}

var mrk = chart.client.create_marker.call(null,mp);
cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"marker","marker",865118313)], null),mrk));

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"mover","mover",935114769)], null),csasync.proc.repeater.call(null,chart.client.move_vehicle,mp,chart.client.MOV_TIO)));
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.0,30.0],(10));
var tile1 = L.tileLayer(chart.client.URL_OSM,({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer(chart.client.URL_GSA,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer(chart.client.URL_GST,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer(chart.client.URL_GHB,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer(chart.client.URL_GTR,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.client.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

return chart.client.init_chart.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map