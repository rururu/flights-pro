// Compiled by ClojureScript 1.9.521 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('csasync.proc');
goog.require('chart.controls');
goog.require('carr.move');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('ask.master');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greenpln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/river.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/edu.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/landmark.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/city.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greypln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/event.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/waterbody.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/r.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/isle.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/place3.jpeg")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/railwaystation.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/mountain.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/bluepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/airport.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/purplepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/b.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/info.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__25083 = response;
var map__25083__$1 = ((((!((map__25083 == null)))?((((map__25083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25083):map__25083);
var status = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_25091 = cljs.core.deref.call(null,vmp);
var mrk_25092 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25091);
var vec__25088_25093 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25091);
var lat_25094 = cljs.core.nth.call(null,vec__25088_25093,(0),null);
var lon_25095 = cljs.core.nth.call(null,vec__25088_25093,(1),null);
var pos_25096 = (new L.LatLng(lat_25094,lon_25095));
mrk_25092.setLatLng(pos_25096);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__25101_25105 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25102_25106 = null;
var count__25103_25107 = (0);
var i__25104_25108 = (0);
while(true){
if((i__25104_25108 < count__25103_25107)){
var veh_25109 = cljs.core._nth.call(null,chunk__25102_25106,i__25104_25108);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25109)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25109)));

var G__25110 = seq__25101_25105;
var G__25111 = chunk__25102_25106;
var G__25112 = count__25103_25107;
var G__25113 = (i__25104_25108 + (1));
seq__25101_25105 = G__25110;
chunk__25102_25106 = G__25111;
count__25103_25107 = G__25112;
i__25104_25108 = G__25113;
continue;
} else {
var temp__4657__auto___25114 = cljs.core.seq.call(null,seq__25101_25105);
if(temp__4657__auto___25114){
var seq__25101_25115__$1 = temp__4657__auto___25114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25101_25115__$1)){
var c__23019__auto___25116 = cljs.core.chunk_first.call(null,seq__25101_25115__$1);
var G__25117 = cljs.core.chunk_rest.call(null,seq__25101_25115__$1);
var G__25118 = c__23019__auto___25116;
var G__25119 = cljs.core.count.call(null,c__23019__auto___25116);
var G__25120 = (0);
seq__25101_25105 = G__25117;
chunk__25102_25106 = G__25118;
count__25103_25107 = G__25119;
i__25104_25108 = G__25120;
continue;
} else {
var veh_25121 = cljs.core.first.call(null,seq__25101_25115__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25121)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25121)));

var G__25122 = cljs.core.next.call(null,seq__25101_25115__$1);
var G__25123 = null;
var G__25124 = (0);
var G__25125 = (0);
seq__25101_25105 = G__25122;
chunk__25102_25106 = G__25123;
count__25103_25107 = G__25124;
i__25104_25108 = G__25125;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("info?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__25130 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25130,(0),null);
var lon = cljs.core.nth.call(null,vec__25130,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__25130,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25130,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25126_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25126_SHARP_))),e.target);
});})(vec__25130,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25130,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO) / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO),null));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__22200__auto__ = url_ico;
if(cljs.core.truth_(or__22200__auto__)){
return or__22200__auto__;
} else {
var or__22200__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__22200__auto____$1)){
return or__22200__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pm"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.delete_placemark = (function chart$client$delete_placemark(iname){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.PLACEMARKS).call(null,iname);
if(cljs.core.truth_(temp__4657__auto__)){
var mrk = temp__4657__auto__;
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname));
} else {
return null;
}
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__25137_25141 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__25138_25142 = null;
var count__25139_25143 = (0);
var i__25140_25144 = (0);
while(true){
if((i__25140_25144 < count__25139_25143)){
var mrk_25145 = cljs.core._nth.call(null,chunk__25138_25142,i__25140_25144);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25145);

var G__25146 = seq__25137_25141;
var G__25147 = chunk__25138_25142;
var G__25148 = count__25139_25143;
var G__25149 = (i__25140_25144 + (1));
seq__25137_25141 = G__25146;
chunk__25138_25142 = G__25147;
count__25139_25143 = G__25148;
i__25140_25144 = G__25149;
continue;
} else {
var temp__4657__auto___25150 = cljs.core.seq.call(null,seq__25137_25141);
if(temp__4657__auto___25150){
var seq__25137_25151__$1 = temp__4657__auto___25150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25137_25151__$1)){
var c__23019__auto___25152 = cljs.core.chunk_first.call(null,seq__25137_25151__$1);
var G__25153 = cljs.core.chunk_rest.call(null,seq__25137_25151__$1);
var G__25154 = c__23019__auto___25152;
var G__25155 = cljs.core.count.call(null,c__23019__auto___25152);
var G__25156 = (0);
seq__25137_25141 = G__25153;
chunk__25138_25142 = G__25154;
count__25139_25143 = G__25155;
i__25140_25144 = G__25156;
continue;
} else {
var mrk_25157 = cljs.core.first.call(null,seq__25137_25151__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25157);

var G__25158 = cljs.core.next.call(null,seq__25137_25151__$1);
var G__25159 = null;
var G__25160 = (0);
var G__25161 = (0);
seq__25137_25141 = G__25158;
chunk__25138_25142 = G__25159;
count__25139_25143 = G__25160;
i__25140_25144 = G__25161;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.popup = (function chart$client$popup(var_args){
var args25162 = [];
var len__23313__auto___25168 = arguments.length;
var i__23314__auto___25169 = (0);
while(true){
if((i__23314__auto___25169 < len__23313__auto___25168)){
args25162.push((arguments[i__23314__auto___25169]));

var G__25170 = (i__23314__auto___25169 + (1));
i__23314__auto___25169 = G__25170;
continue;
} else {
}
break;
}

var G__25164 = args25162.length;
switch (G__25164) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return chart.client.popup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25162.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25165 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25165,(0),null);
var lon = cljs.core.nth.call(null,vec__25165,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(240),(480));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(({"maxWidth": w, "maxHeight": h})).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,chart.client.CHART).addLayer(pop);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (pop){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(pop);
});})(pop))
,time);
} else {
return null;
}
});

chart.client.popup.cljs$lang$maxFixedArity = 6;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__25172_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__25172_SHARP_),cljs.core.second.call(null,p1__25172_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),points));
var pts__$1 = cljs.core.clj__GT_js.call(null,pts);
var trl = L.polyline(pts__$1,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(trl);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (ops,pts,pts__$1,trl){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(trl);
});})(ops,pts,pts__$1,trl))
,time);
} else {
return null;
}
});
chart.client.visible_map = (function chart$client$visible_map(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
chart.client.new_visible = (function chart$client$new_visible(){
var vec__25176 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__25176,(0),null);
var s = cljs.core.nth.call(null,vec__25176,(1),null);
var w = cljs.core.nth.call(null,vec__25176,(2),null);
var e = cljs.core.nth.call(null,vec__25176,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__25176,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__25176,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__25179,zoom,lock){
var vec__25183 = p__25179;
var lat = cljs.core.nth.call(null,vec__25183,(0),null);
var lon = cljs.core.nth.call(null,vec__25183,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__22200__auto__ = zoom;
if(cljs.core.truth_(or__22200__auto__)){
return or__22200__auto__;
} else {
return cljs.core.deref.call(null,chart.client.CHART).getZoom();
}
})();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.not.call(null,lock)){
return chart.client.new_visible.call(null);
} else {
return null;
}
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__25186_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__25186_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__25187_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__25187_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__25188_SHARP_){
return p1__25188_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__25189,ops){
var vec__25193 = p__25189;
var id1 = cljs.core.nth.call(null,vec__25193,(0),null);
var id2 = cljs.core.nth.call(null,vec__25193,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(titl),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<table>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Dmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" m</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Tmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" min</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Alt-diff</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(adif),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ft</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</table>")].join('');
});
chart.client.add_link = (function chart$client$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(options);
var del = ((typeof tmin === 'number')?(((60000) * tmin) | (0)):(30000));
var llg = chart.client.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(lnk);

lnk.bindPopup(chart.client.linkPopup.call(null,ids,options));

cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids,lnk));

if((del > (0))){
return csasync.proc.delayer.call(null,((function (ops,tmin,del,llg,lnk){
return (function (){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(lnk);

return cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids));
});})(ops,tmin,del,llg,lnk))
,del);
} else {
return null;
}
});
chart.client.select_airport = (function chart$client$select_airport(var_args){
var args25197 = [];
var len__23313__auto___25200 = arguments.length;
var i__23314__auto___25201 = (0);
while(true){
if((i__23314__auto___25201 < len__23313__auto___25200)){
args25197.push((arguments[i__23314__auto___25201]));

var G__25202 = (i__23314__auto___25201 + (1));
i__23314__auto___25201 = G__25202;
continue;
} else {
}
break;
}

var G__25199 = args25197.length;
switch (G__25199) {
case 0:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25197.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25196_SHARP_){
return chart.client.select_airport.call(null,sel,p1__25196_SHARP_);
}));
}))
;
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(20),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected airport",new cljs.core.Keyword(null,"object","object",1474613949),sel,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),cnt], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.select_airport.cljs$lang$maxFixedArity = 2;

chart.client.select_city = (function chart$client$select_city(param){
var temp__4655__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto__)){
var cns = temp__4655__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__4655__auto__){
return (function chart$client$select_city_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected country",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cns,temp__4655__auto__){
return (function (r){
return null;
});})(cns,temp__4655__auto__))
);
});})(cns,temp__4655__auto__))
)
;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cts = temp__4655__auto____$1;
ask.master.selector.call(null,"element",(20),"chart.client","cities",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = ((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function chart$client$select_city_$_handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected city",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function (r){
return null;
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
);

return ask.master.clear_dialog.call(null);
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__25260 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25261 = null;
var count__25262 = (0);
var i__25263 = (0);
while(true){
if((i__25263 < count__25262)){
var map__25264 = cljs.core._nth.call(null,chunk__25261,i__25263);
var map__25264__$1 = ((((!((map__25264 == null)))?((((map__25264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25264):map__25264);
var ins = map__25264__$1;
var instruct = cljs.core.get.call(null,map__25264__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25266_25316 = cljs.core._EQ_;
var expr__25267_25317 = instruct;
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25267_25317))){
var map__25269_25318 = ins;
var map__25269_25319__$1 = ((((!((map__25269_25318 == null)))?((((map__25269_25318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25269_25318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25269_25318):map__25269_25318);
var id_25320 = cljs.core.get.call(null,map__25269_25319__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25321 = cljs.core.get.call(null,map__25269_25319__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25320,vehicle_25321);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25267_25317))){
var map__25271_25322 = ins;
var map__25271_25323__$1 = ((((!((map__25271_25322 == null)))?((((map__25271_25322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25271_25322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271_25322):map__25271_25322);
var id_25324 = cljs.core.get.call(null,map__25271_25323__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25324);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25267_25317))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25267_25317))){
var map__25273_25325 = ins;
var map__25273_25326__$1 = ((((!((map__25273_25325 == null)))?((((map__25273_25325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25273_25325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25273_25325):map__25273_25325);
var id_25327 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25328 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25329 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25330 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25331 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25332 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25333 = cljs.core.get.call(null,map__25273_25326__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25327)){
chart.client.popup.call(null,id_25327,html_25330,time_25331);
} else {
if(cljs.core.truth_((function (){var and__22188__auto__ = width_25332;
if(cljs.core.truth_(and__22188__auto__)){
var and__22188__auto____$1 = height_25333;
if(cljs.core.truth_(and__22188__auto____$1)){
var and__22188__auto____$2 = lat_25328;
if(cljs.core.truth_(and__22188__auto____$2)){
return lon_25329;
} else {
return and__22188__auto____$2;
}
} else {
return and__22188__auto____$1;
}
} else {
return and__22188__auto__;
}
})())){
chart.client.popup.call(null,lat_25328,lon_25329,html_25330,time_25331,width_25332,height_25333);
} else {
if(cljs.core.truth_((function (){var and__22188__auto__ = lat_25328;
if(cljs.core.truth_(and__22188__auto__)){
return lon_25329;
} else {
return and__22188__auto__;
}
})())){
chart.client.popup.call(null,lat_25328,lon_25329,html_25330,time_25331);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25267_25317))){
var map__25275_25334 = ins;
var map__25275_25335__$1 = ((((!((map__25275_25334 == null)))?((((map__25275_25334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25275_25334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25275_25334):map__25275_25334);
var id_25336 = cljs.core.get.call(null,map__25275_25335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25337 = cljs.core.get.call(null,map__25275_25335__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25338 = cljs.core.get.call(null,map__25275_25335__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25339 = cljs.core.get.call(null,map__25275_25335__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25336,points_25337,options_25338,time_25339);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25267_25317))){
var map__25277_25340 = ins;
var map__25277_25341__$1 = ((((!((map__25277_25340 == null)))?((((map__25277_25340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25277_25340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25277_25340):map__25277_25340);
var coord_25342 = cljs.core.get.call(null,map__25277_25341__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25343 = cljs.core.get.call(null,map__25277_25341__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25344 = cljs.core.get.call(null,map__25277_25341__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25342,zoom_25343,lock_25344);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25267_25317))){
var map__25279_25345 = ins;
var map__25279_25346__$1 = ((((!((map__25279_25345 == null)))?((((map__25279_25345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25279_25345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25279_25345):map__25279_25345);
var iname_25347 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25348 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25349 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25350 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25351 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25352 = cljs.core.get.call(null,map__25279_25346__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25347,tip_25348,lat_25349,lon_25350,feature_25351,url_ico_25352);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25267_25317))){
var map__25281_25353 = ins;
var map__25281_25354__$1 = ((((!((map__25281_25353 == null)))?((((map__25281_25353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25281_25353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281_25353):map__25281_25353);
var iname_25355 = cljs.core.get.call(null,map__25281_25354__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25355);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25267_25317))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25267_25317))){
var map__25283_25356 = ins;
var map__25283_25357__$1 = ((((!((map__25283_25356 == null)))?((((map__25283_25356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25283_25356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25283_25356):map__25283_25356);
var ids_25358 = cljs.core.get.call(null,map__25283_25357__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25359 = cljs.core.get.call(null,map__25283_25357__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25358,options_25359);
} else {
if(cljs.core.truth_(pred__25266_25316.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25267_25317))){
var map__25285_25360 = ins;
var map__25285_25361__$1 = ((((!((map__25285_25360 == null)))?((((map__25285_25360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25285_25360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25285_25360):map__25285_25360);
var question_25362 = cljs.core.get.call(null,map__25285_25361__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25363 = cljs.core.get.call(null,map__25285_25361__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25287_25364 = cljs.core._EQ_;
var expr__25288_25365 = question_25362;
if(cljs.core.truth_(pred__25287_25364.call(null,"city",expr__25288_25365))){
chart.client.select_city.call(null,param_25363);
} else {
if(cljs.core.truth_(pred__25287_25364.call(null,"airport",expr__25288_25365))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25288_25365)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}
}
}

var G__25366 = seq__25260;
var G__25367 = chunk__25261;
var G__25368 = count__25262;
var G__25369 = (i__25263 + (1));
seq__25260 = G__25366;
chunk__25261 = G__25367;
count__25262 = G__25368;
i__25263 = G__25369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25260);
if(temp__4657__auto__){
var seq__25260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25260__$1)){
var c__23019__auto__ = cljs.core.chunk_first.call(null,seq__25260__$1);
var G__25370 = cljs.core.chunk_rest.call(null,seq__25260__$1);
var G__25371 = c__23019__auto__;
var G__25372 = cljs.core.count.call(null,c__23019__auto__);
var G__25373 = (0);
seq__25260 = G__25370;
chunk__25261 = G__25371;
count__25262 = G__25372;
i__25263 = G__25373;
continue;
} else {
var map__25290 = cljs.core.first.call(null,seq__25260__$1);
var map__25290__$1 = ((((!((map__25290 == null)))?((((map__25290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25290):map__25290);
var ins = map__25290__$1;
var instruct = cljs.core.get.call(null,map__25290__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25292_25374 = cljs.core._EQ_;
var expr__25293_25375 = instruct;
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25293_25375))){
var map__25295_25376 = ins;
var map__25295_25377__$1 = ((((!((map__25295_25376 == null)))?((((map__25295_25376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25295_25376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25295_25376):map__25295_25376);
var id_25378 = cljs.core.get.call(null,map__25295_25377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25379 = cljs.core.get.call(null,map__25295_25377__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25378,vehicle_25379);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25293_25375))){
var map__25297_25380 = ins;
var map__25297_25381__$1 = ((((!((map__25297_25380 == null)))?((((map__25297_25380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25297_25380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25297_25380):map__25297_25380);
var id_25382 = cljs.core.get.call(null,map__25297_25381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25382);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25293_25375))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25293_25375))){
var map__25299_25383 = ins;
var map__25299_25384__$1 = ((((!((map__25299_25383 == null)))?((((map__25299_25383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25299_25383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25299_25383):map__25299_25383);
var id_25385 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25386 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25387 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25388 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25389 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25390 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25391 = cljs.core.get.call(null,map__25299_25384__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25385)){
chart.client.popup.call(null,id_25385,html_25388,time_25389);
} else {
if(cljs.core.truth_((function (){var and__22188__auto__ = width_25390;
if(cljs.core.truth_(and__22188__auto__)){
var and__22188__auto____$1 = height_25391;
if(cljs.core.truth_(and__22188__auto____$1)){
var and__22188__auto____$2 = lat_25386;
if(cljs.core.truth_(and__22188__auto____$2)){
return lon_25387;
} else {
return and__22188__auto____$2;
}
} else {
return and__22188__auto____$1;
}
} else {
return and__22188__auto__;
}
})())){
chart.client.popup.call(null,lat_25386,lon_25387,html_25388,time_25389,width_25390,height_25391);
} else {
if(cljs.core.truth_((function (){var and__22188__auto__ = lat_25386;
if(cljs.core.truth_(and__22188__auto__)){
return lon_25387;
} else {
return and__22188__auto__;
}
})())){
chart.client.popup.call(null,lat_25386,lon_25387,html_25388,time_25389);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25293_25375))){
var map__25301_25392 = ins;
var map__25301_25393__$1 = ((((!((map__25301_25392 == null)))?((((map__25301_25392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25301_25392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25301_25392):map__25301_25392);
var id_25394 = cljs.core.get.call(null,map__25301_25393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25395 = cljs.core.get.call(null,map__25301_25393__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25396 = cljs.core.get.call(null,map__25301_25393__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25397 = cljs.core.get.call(null,map__25301_25393__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25394,points_25395,options_25396,time_25397);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25293_25375))){
var map__25303_25398 = ins;
var map__25303_25399__$1 = ((((!((map__25303_25398 == null)))?((((map__25303_25398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25303_25398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303_25398):map__25303_25398);
var coord_25400 = cljs.core.get.call(null,map__25303_25399__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25401 = cljs.core.get.call(null,map__25303_25399__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25402 = cljs.core.get.call(null,map__25303_25399__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25400,zoom_25401,lock_25402);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25293_25375))){
var map__25305_25403 = ins;
var map__25305_25404__$1 = ((((!((map__25305_25403 == null)))?((((map__25305_25403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25305_25403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25305_25403):map__25305_25403);
var iname_25405 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25406 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25407 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25408 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25409 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25410 = cljs.core.get.call(null,map__25305_25404__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25405,tip_25406,lat_25407,lon_25408,feature_25409,url_ico_25410);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25293_25375))){
var map__25307_25411 = ins;
var map__25307_25412__$1 = ((((!((map__25307_25411 == null)))?((((map__25307_25411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25307_25411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25307_25411):map__25307_25411);
var iname_25413 = cljs.core.get.call(null,map__25307_25412__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25413);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25293_25375))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25293_25375))){
var map__25309_25414 = ins;
var map__25309_25415__$1 = ((((!((map__25309_25414 == null)))?((((map__25309_25414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25309_25414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25309_25414):map__25309_25414);
var ids_25416 = cljs.core.get.call(null,map__25309_25415__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25417 = cljs.core.get.call(null,map__25309_25415__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25416,options_25417);
} else {
if(cljs.core.truth_(pred__25292_25374.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25293_25375))){
var map__25311_25418 = ins;
var map__25311_25419__$1 = ((((!((map__25311_25418 == null)))?((((map__25311_25418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25311_25418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25311_25418):map__25311_25418);
var question_25420 = cljs.core.get.call(null,map__25311_25419__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25421 = cljs.core.get.call(null,map__25311_25419__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25313_25422 = cljs.core._EQ_;
var expr__25314_25423 = question_25420;
if(cljs.core.truth_(pred__25313_25422.call(null,"city",expr__25314_25423))){
chart.client.select_city.call(null,param_25421);
} else {
if(cljs.core.truth_(pred__25313_25422.call(null,"airport",expr__25314_25423))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25314_25423)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}
}
}

var G__25424 = cljs.core.next.call(null,seq__25260__$1);
var G__25425 = null;
var G__25426 = (0);
var G__25427 = (0);
seq__25260 = G__25424;
chunk__25261 = G__25425;
count__25262 = G__25426;
i__25263 = G__25427;
continue;
}
} else {
return null;
}
}
break;
}
});
chart.client.receive_instructions = (function chart$client$receive_instructions(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.move_to = (function chart$client$move_to(var_args){
var args25429 = [];
var len__23313__auto___25432 = arguments.length;
var i__23314__auto___25433 = (0);
while(true){
if((i__23314__auto___25433 < len__23313__auto___25432)){
args25429.push((arguments[i__23314__auto___25433]));

var G__25434 = (i__23314__auto___25433 + (1));
i__23314__auto___25433 = G__25434;
continue;
} else {
}
break;
}

var G__25431 = args25429.length;
switch (G__25431) {
case 0:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25429.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25428_SHARP_){
return chart.client.move_to.call(null,sel,p1__25428_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?country="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("move-to"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args25440 = [];
var len__23313__auto___25443 = arguments.length;
var i__23314__auto___25444 = (0);
while(true){
if((i__23314__auto___25444 < len__23313__auto___25443)){
args25440.push((arguments[i__23314__auto___25444]));

var G__25445 = (i__23314__auto___25444 + (1));
i__23314__auto___25444 = G__25445;
continue;
} else {
}
break;
}

var G__25442 = args25440.length;
switch (G__25442) {
case 0:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25440.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input.call(null,"element",(1),"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input.call(null,"element",(2),"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25436_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__25436_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25437_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__25437_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25438_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__25438_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25439_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__25439_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?callsign="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(call),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&time="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tim),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(apt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("schedule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args25450 = [];
var len__23313__auto___25453 = arguments.length;
var i__23314__auto___25454 = (0);
while(true){
if((i__23314__auto___25454 < len__23313__auto___25453)){
args25450.push((arguments[i__23314__auto___25454]));

var G__25455 = (i__23314__auto___25454 + (1));
i__23314__auto___25454 = G__25455;
continue;
} else {
}
break;
}

var G__25452 = args25450.length;
switch (G__25452) {
case 0:
return chart.client.question.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.question.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.question.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.question.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.question.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25450.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__25447_SHARP_){
return chart.client.question.call(null,sel,p1__25447_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__25448_SHARP_){
return chart.client.question.call(null,pred,sel,p1__25448_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__25449_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__25449_SHARP_);
}));
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$core$IFn$_invoke$arity$4 = (function (pred,subj,obj,adjuncts){
if(cljs.core.truth_(adjuncts)){
ask.master.selector.call(null,"element",(40),"chart.client","?",adjuncts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler40 = (function chart$client$handler40(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),sel], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$lang$maxFixedArity = 4;

chart.client.command = (function chart$client$command(cmd){
var pred__25460_25463 = cljs.core._EQ_;
var expr__25461_25464 = cmd;
if(cljs.core.truth_(pred__25460_25463.call(null,"commands",expr__25461_25464))){
} else {
if(cljs.core.truth_(pred__25460_25463.call(null,"watch-visible",expr__25461_25464))){
var bnd_25465 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_25466 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_25465.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_25465.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_25465.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_25465.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_25466)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__25460_25463.call(null,"move-to",expr__25461_25464))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__25460_25463.call(null,"schedule",expr__25461_25464))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__25460_25463.call(null,"question",expr__25461_25464))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)].join(''),chart.client.no_handler);
}
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e25468){if((e25468 instanceof Error)){
var e_25469 = e25468;
cljs.core.println.call(null,e_25469);
} else {
throw e25468;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

m.on("zoomend",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.display_zoom.call(null,m.getZoom());
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

chart.controls.display_zoom.call(null,m.getZoom());

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("follow?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("trail?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map