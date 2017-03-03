// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('ask.master');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__26404 = response;
var map__26404__$1 = ((((!((map__26404 == null)))?((((map__26404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404):map__26404);
var status = cljs.core.get.call(null,map__26404__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26404__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
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

var mp_26412 = cljs.core.deref.call(null,vmp);
var mrk_26413 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26412);
var vec__26409_26414 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26412);
var lat_26415 = cljs.core.nth.call(null,vec__26409_26414,(0),null);
var lon_26416 = cljs.core.nth.call(null,vec__26409_26414,(1),null);
var pos_26417 = (new L.LatLng(lat_26415,lon_26416));
mrk_26413.setLatLng(pos_26417);

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
var seq__26422_26426 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__26423_26427 = null;
var count__26424_26428 = (0);
var i__26425_26429 = (0);
while(true){
if((i__26425_26429 < count__26424_26428)){
var veh_26430 = cljs.core._nth.call(null,chunk__26423_26427,i__26425_26429);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26430)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26430)));

var G__26431 = seq__26422_26426;
var G__26432 = chunk__26423_26427;
var G__26433 = count__26424_26428;
var G__26434 = (i__26425_26429 + (1));
seq__26422_26426 = G__26431;
chunk__26423_26427 = G__26432;
count__26424_26428 = G__26433;
i__26425_26429 = G__26434;
continue;
} else {
var temp__4657__auto___26435 = cljs.core.seq.call(null,seq__26422_26426);
if(temp__4657__auto___26435){
var seq__26422_26436__$1 = temp__4657__auto___26435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26422_26436__$1)){
var c__24275__auto___26437 = cljs.core.chunk_first.call(null,seq__26422_26436__$1);
var G__26438 = cljs.core.chunk_rest.call(null,seq__26422_26436__$1);
var G__26439 = c__24275__auto___26437;
var G__26440 = cljs.core.count.call(null,c__24275__auto___26437);
var G__26441 = (0);
seq__26422_26426 = G__26438;
chunk__26423_26427 = G__26439;
count__26424_26428 = G__26440;
i__26425_26429 = G__26441;
continue;
} else {
var veh_26442 = cljs.core.first.call(null,seq__26422_26436__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26442)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26442)));

var G__26443 = cljs.core.next.call(null,seq__26422_26436__$1);
var G__26444 = null;
var G__26445 = (0);
var G__26446 = (0);
seq__26422_26426 = G__26443;
chunk__26423_26427 = G__26444;
count__26424_26428 = G__26445;
i__26425_26429 = G__26446;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__26451 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__26451,(0),null);
var lon = cljs.core.nth.call(null,vec__26451,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__26451,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__26451,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__26447_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__26447_SHARP_))),e.target);
});})(vec__26451,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__26451,lat,lon,pos,ico,opt,mrk__$1))
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
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO)));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__23461__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__23461__auto__)){
return or__23461__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__26458_26462 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__26459_26463 = null;
var count__26460_26464 = (0);
var i__26461_26465 = (0);
while(true){
if((i__26461_26465 < count__26460_26464)){
var mrk_26466 = cljs.core._nth.call(null,chunk__26459_26463,i__26461_26465);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26466);

var G__26467 = seq__26458_26462;
var G__26468 = chunk__26459_26463;
var G__26469 = count__26460_26464;
var G__26470 = (i__26461_26465 + (1));
seq__26458_26462 = G__26467;
chunk__26459_26463 = G__26468;
count__26460_26464 = G__26469;
i__26461_26465 = G__26470;
continue;
} else {
var temp__4657__auto___26471 = cljs.core.seq.call(null,seq__26458_26462);
if(temp__4657__auto___26471){
var seq__26458_26472__$1 = temp__4657__auto___26471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26458_26472__$1)){
var c__24275__auto___26473 = cljs.core.chunk_first.call(null,seq__26458_26472__$1);
var G__26474 = cljs.core.chunk_rest.call(null,seq__26458_26472__$1);
var G__26475 = c__24275__auto___26473;
var G__26476 = cljs.core.count.call(null,c__24275__auto___26473);
var G__26477 = (0);
seq__26458_26462 = G__26474;
chunk__26459_26463 = G__26475;
count__26460_26464 = G__26476;
i__26461_26465 = G__26477;
continue;
} else {
var mrk_26478 = cljs.core.first.call(null,seq__26458_26472__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26478);

var G__26479 = cljs.core.next.call(null,seq__26458_26472__$1);
var G__26480 = null;
var G__26481 = (0);
var G__26482 = (0);
seq__26458_26462 = G__26479;
chunk__26459_26463 = G__26480;
count__26460_26464 = G__26481;
i__26461_26465 = G__26482;
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
var args26483 = [];
var len__24569__auto___26489 = arguments.length;
var i__24570__auto___26490 = (0);
while(true){
if((i__24570__auto___26490 < len__24569__auto___26489)){
args26483.push((arguments[i__24570__auto___26490]));

var G__26491 = (i__24570__auto___26490 + (1));
i__24570__auto___26490 = G__26491;
continue;
} else {
}
break;
}

var G__26485 = args26483.length;
switch (G__26485) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26483.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__26486 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__26486,(0),null);
var lon = cljs.core.nth.call(null,vec__26486,(1),null);
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
return (function (p1__26493_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__26493_SHARP_),cljs.core.second.call(null,p1__26493_SHARP_)));
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
var vec__26497 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__26497,(0),null);
var s = cljs.core.nth.call(null,vec__26497,(1),null);
var w = cljs.core.nth.call(null,vec__26497,(2),null);
var e = cljs.core.nth.call(null,vec__26497,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__26497,n,s,w,e,url){
return (function (response){
return null;
});})(vec__26497,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__26500){
var vec__26504 = p__26500;
var lat = cljs.core.nth.call(null,vec__26504,(0),null);
var lon = cljs.core.nth.call(null,vec__26504,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__26507_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__26507_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__26508_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26508_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__26509_SHARP_){
return p1__26509_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__26510,ops){
var vec__26514 = p__26510;
var id1 = cljs.core.nth.call(null,vec__26514,(0),null);
var id2 = cljs.core.nth.call(null,vec__26514,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
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
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__26559 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__26560 = null;
var count__26561 = (0);
var i__26562 = (0);
while(true){
if((i__26562 < count__26561)){
var map__26563 = cljs.core._nth.call(null,chunk__26560,i__26562);
var map__26563__$1 = ((((!((map__26563 == null)))?((((map__26563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
var ins = map__26563__$1;
var instruct = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26565_26601 = cljs.core._EQ_;
var expr__26566_26602 = instruct;
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26566_26602))){
var map__26568_26603 = ins;
var map__26568_26604__$1 = ((((!((map__26568_26603 == null)))?((((map__26568_26603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26568_26603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26568_26603):map__26568_26603);
var id_26605 = cljs.core.get.call(null,map__26568_26604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26606 = cljs.core.get.call(null,map__26568_26604__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26605,vehicle_26606);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26566_26602))){
var map__26570_26607 = ins;
var map__26570_26608__$1 = ((((!((map__26570_26607 == null)))?((((map__26570_26607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26570_26607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570_26607):map__26570_26607);
var id_26609 = cljs.core.get.call(null,map__26570_26608__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26609);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26566_26602))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26566_26602))){
var map__26572_26610 = ins;
var map__26572_26611__$1 = ((((!((map__26572_26610 == null)))?((((map__26572_26610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26572_26610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26572_26610):map__26572_26610);
var id_26612 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26613 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26614 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26615 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26616 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26617 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26618 = cljs.core.get.call(null,map__26572_26611__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26612)){
chart.client.popup.call(null,id_26612,html_26615,time_26616);
} else {
if(cljs.core.truth_((function (){var and__23449__auto__ = width_26617;
if(cljs.core.truth_(and__23449__auto__)){
var and__23449__auto____$1 = height_26618;
if(cljs.core.truth_(and__23449__auto____$1)){
var and__23449__auto____$2 = lat_26613;
if(cljs.core.truth_(and__23449__auto____$2)){
return lon_26614;
} else {
return and__23449__auto____$2;
}
} else {
return and__23449__auto____$1;
}
} else {
return and__23449__auto__;
}
})())){
chart.client.popup.call(null,lat_26613,lon_26614,html_26615,time_26616,width_26617,height_26618);
} else {
if(cljs.core.truth_((function (){var and__23449__auto__ = lat_26613;
if(cljs.core.truth_(and__23449__auto__)){
return lon_26614;
} else {
return and__23449__auto__;
}
})())){
chart.client.popup.call(null,lat_26613,lon_26614,html_26615,time_26616);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26566_26602))){
var map__26574_26619 = ins;
var map__26574_26620__$1 = ((((!((map__26574_26619 == null)))?((((map__26574_26619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26574_26619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26574_26619):map__26574_26619);
var id_26621 = cljs.core.get.call(null,map__26574_26620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26622 = cljs.core.get.call(null,map__26574_26620__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26623 = cljs.core.get.call(null,map__26574_26620__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26624 = cljs.core.get.call(null,map__26574_26620__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26621,points_26622,options_26623,time_26624);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26566_26602))){
var map__26576_26625 = ins;
var map__26576_26626__$1 = ((((!((map__26576_26625 == null)))?((((map__26576_26625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26576_26625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26576_26625):map__26576_26625);
var coord_26627 = cljs.core.get.call(null,map__26576_26626__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_26627);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26566_26602))){
var map__26578_26628 = ins;
var map__26578_26629__$1 = ((((!((map__26578_26628 == null)))?((((map__26578_26628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26578_26628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26578_26628):map__26578_26628);
var iname_26630 = cljs.core.get.call(null,map__26578_26629__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26631 = cljs.core.get.call(null,map__26578_26629__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26632 = cljs.core.get.call(null,map__26578_26629__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26633 = cljs.core.get.call(null,map__26578_26629__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26634 = cljs.core.get.call(null,map__26578_26629__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_26630,tip_26631,lat_26632,lon_26633,feature_26634);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26566_26602))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26565_26601.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26566_26602))){
var map__26580_26635 = ins;
var map__26580_26636__$1 = ((((!((map__26580_26635 == null)))?((((map__26580_26635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26580_26635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580_26635):map__26580_26635);
var ids_26637 = cljs.core.get.call(null,map__26580_26636__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26638 = cljs.core.get.call(null,map__26580_26636__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26637,options_26638);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__26639 = seq__26559;
var G__26640 = chunk__26560;
var G__26641 = count__26561;
var G__26642 = (i__26562 + (1));
seq__26559 = G__26639;
chunk__26560 = G__26640;
count__26561 = G__26641;
i__26562 = G__26642;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26559);
if(temp__4657__auto__){
var seq__26559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26559__$1)){
var c__24275__auto__ = cljs.core.chunk_first.call(null,seq__26559__$1);
var G__26643 = cljs.core.chunk_rest.call(null,seq__26559__$1);
var G__26644 = c__24275__auto__;
var G__26645 = cljs.core.count.call(null,c__24275__auto__);
var G__26646 = (0);
seq__26559 = G__26643;
chunk__26560 = G__26644;
count__26561 = G__26645;
i__26562 = G__26646;
continue;
} else {
var map__26582 = cljs.core.first.call(null,seq__26559__$1);
var map__26582__$1 = ((((!((map__26582 == null)))?((((map__26582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26582):map__26582);
var ins = map__26582__$1;
var instruct = cljs.core.get.call(null,map__26582__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26584_26647 = cljs.core._EQ_;
var expr__26585_26648 = instruct;
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26585_26648))){
var map__26587_26649 = ins;
var map__26587_26650__$1 = ((((!((map__26587_26649 == null)))?((((map__26587_26649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26587_26649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26587_26649):map__26587_26649);
var id_26651 = cljs.core.get.call(null,map__26587_26650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26652 = cljs.core.get.call(null,map__26587_26650__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26651,vehicle_26652);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26585_26648))){
var map__26589_26653 = ins;
var map__26589_26654__$1 = ((((!((map__26589_26653 == null)))?((((map__26589_26653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26589_26653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26589_26653):map__26589_26653);
var id_26655 = cljs.core.get.call(null,map__26589_26654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26655);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26585_26648))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26585_26648))){
var map__26591_26656 = ins;
var map__26591_26657__$1 = ((((!((map__26591_26656 == null)))?((((map__26591_26656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26591_26656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26591_26656):map__26591_26656);
var id_26658 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26659 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26660 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26661 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26662 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26663 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26664 = cljs.core.get.call(null,map__26591_26657__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26658)){
chart.client.popup.call(null,id_26658,html_26661,time_26662);
} else {
if(cljs.core.truth_((function (){var and__23449__auto__ = width_26663;
if(cljs.core.truth_(and__23449__auto__)){
var and__23449__auto____$1 = height_26664;
if(cljs.core.truth_(and__23449__auto____$1)){
var and__23449__auto____$2 = lat_26659;
if(cljs.core.truth_(and__23449__auto____$2)){
return lon_26660;
} else {
return and__23449__auto____$2;
}
} else {
return and__23449__auto____$1;
}
} else {
return and__23449__auto__;
}
})())){
chart.client.popup.call(null,lat_26659,lon_26660,html_26661,time_26662,width_26663,height_26664);
} else {
if(cljs.core.truth_((function (){var and__23449__auto__ = lat_26659;
if(cljs.core.truth_(and__23449__auto__)){
return lon_26660;
} else {
return and__23449__auto__;
}
})())){
chart.client.popup.call(null,lat_26659,lon_26660,html_26661,time_26662);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26585_26648))){
var map__26593_26665 = ins;
var map__26593_26666__$1 = ((((!((map__26593_26665 == null)))?((((map__26593_26665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26593_26665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26593_26665):map__26593_26665);
var id_26667 = cljs.core.get.call(null,map__26593_26666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26668 = cljs.core.get.call(null,map__26593_26666__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26669 = cljs.core.get.call(null,map__26593_26666__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26670 = cljs.core.get.call(null,map__26593_26666__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26667,points_26668,options_26669,time_26670);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26585_26648))){
var map__26595_26671 = ins;
var map__26595_26672__$1 = ((((!((map__26595_26671 == null)))?((((map__26595_26671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26595_26671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26595_26671):map__26595_26671);
var coord_26673 = cljs.core.get.call(null,map__26595_26672__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_26673);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26585_26648))){
var map__26597_26674 = ins;
var map__26597_26675__$1 = ((((!((map__26597_26674 == null)))?((((map__26597_26674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26597_26674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26597_26674):map__26597_26674);
var iname_26676 = cljs.core.get.call(null,map__26597_26675__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26677 = cljs.core.get.call(null,map__26597_26675__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26678 = cljs.core.get.call(null,map__26597_26675__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26679 = cljs.core.get.call(null,map__26597_26675__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26680 = cljs.core.get.call(null,map__26597_26675__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_26676,tip_26677,lat_26678,lon_26679,feature_26680);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26585_26648))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26584_26647.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26585_26648))){
var map__26599_26681 = ins;
var map__26599_26682__$1 = ((((!((map__26599_26681 == null)))?((((map__26599_26681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26599_26681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26599_26681):map__26599_26681);
var ids_26683 = cljs.core.get.call(null,map__26599_26682__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26684 = cljs.core.get.call(null,map__26599_26682__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26683,options_26684);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__26685 = cljs.core.next.call(null,seq__26559__$1);
var G__26686 = null;
var G__26687 = (0);
var G__26688 = (0);
seq__26559 = G__26685;
chunk__26560 = G__26686;
count__26561 = G__26687;
i__26562 = G__26688;
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
var args26690 = [];
var len__24569__auto___26693 = arguments.length;
var i__24570__auto___26694 = (0);
while(true){
if((i__24570__auto___26694 < len__24569__auto___26693)){
args26690.push((arguments[i__24570__auto___26694]));

var G__26695 = (i__24570__auto___26694 + (1));
i__24570__auto___26694 = G__26695;
continue;
} else {
}
break;
}

var G__26692 = args26690.length;
switch (G__26692) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26690.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__26689_SHARP_){
return chart.client.move_to.call(null,sel,p1__26689_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str("?country="),cljs.core.str(cnt),cljs.core.str("&airport="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("move-to"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args26701 = [];
var len__24569__auto___26704 = arguments.length;
var i__24570__auto___26705 = (0);
while(true){
if((i__24570__auto___26705 < len__24569__auto___26704)){
args26701.push((arguments[i__24570__auto___26705]));

var G__26706 = (i__24570__auto___26705 + (1));
i__24570__auto___26705 = G__26706;
continue;
} else {
}
break;
}

var G__26703 = args26701.length;
switch (G__26703) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26701.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__26697_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26697_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__26698_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26698_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__26699_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26699_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__26700_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26700_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.command = (function chart$client$command(cmd){
var pred__26711 = cljs.core._EQ_;
var expr__26712 = cmd;
if(cljs.core.truth_(pred__26711.call(null,"commands",expr__26712))){
return null;
} else {
if(cljs.core.truth_(pred__26711.call(null,"watch-visible",expr__26712))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26711.call(null,"move-to",expr__26712))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26711.call(null,"schedule",expr__26712))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e26715){if((e26715 instanceof Error)){
var e_26716 = e26715;
cljs.core.println.call(null,e_26716);
} else {
throw e26715;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("follow?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("trail?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.question = (function chart$client$question(q){
var pred__26720 = cljs.core._EQ_;
var expr__26721 = q;
if(cljs.core.truth_(pred__26720.call(null,"questions",expr__26721))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map