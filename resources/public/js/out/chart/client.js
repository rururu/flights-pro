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
var map__29447 = response;
var map__29447__$1 = ((((!((map__29447 == null)))?((((map__29447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29447):map__29447);
var status = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_29455 = cljs.core.deref.call(null,vmp);
var mrk_29456 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_29455);
var vec__29452_29457 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_29455);
var lat_29458 = cljs.core.nth.call(null,vec__29452_29457,(0),null);
var lon_29459 = cljs.core.nth.call(null,vec__29452_29457,(1),null);
var pos_29460 = (new L.LatLng(lat_29458,lon_29459));
mrk_29456.setLatLng(pos_29460);

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
var seq__29465_29469 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__29466_29470 = null;
var count__29467_29471 = (0);
var i__29468_29472 = (0);
while(true){
if((i__29468_29472 < count__29467_29471)){
var veh_29473 = cljs.core._nth.call(null,chunk__29466_29470,i__29468_29472);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29473)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29473)));

var G__29474 = seq__29465_29469;
var G__29475 = chunk__29466_29470;
var G__29476 = count__29467_29471;
var G__29477 = (i__29468_29472 + (1));
seq__29465_29469 = G__29474;
chunk__29466_29470 = G__29475;
count__29467_29471 = G__29476;
i__29468_29472 = G__29477;
continue;
} else {
var temp__4657__auto___29478 = cljs.core.seq.call(null,seq__29465_29469);
if(temp__4657__auto___29478){
var seq__29465_29479__$1 = temp__4657__auto___29478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29465_29479__$1)){
var c__11077__auto___29480 = cljs.core.chunk_first.call(null,seq__29465_29479__$1);
var G__29481 = cljs.core.chunk_rest.call(null,seq__29465_29479__$1);
var G__29482 = c__11077__auto___29480;
var G__29483 = cljs.core.count.call(null,c__11077__auto___29480);
var G__29484 = (0);
seq__29465_29469 = G__29481;
chunk__29466_29470 = G__29482;
count__29467_29471 = G__29483;
i__29468_29472 = G__29484;
continue;
} else {
var veh_29485 = cljs.core.first.call(null,seq__29465_29479__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29485)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29485)));

var G__29486 = cljs.core.next.call(null,seq__29465_29479__$1);
var G__29487 = null;
var G__29488 = (0);
var G__29489 = (0);
seq__29465_29469 = G__29486;
chunk__29466_29470 = G__29487;
count__29467_29471 = G__29488;
i__29468_29472 = G__29489;
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

var vec__29494 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__29494,(0),null);
var lon = cljs.core.nth.call(null,vec__29494,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__29494,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__29494,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__29490_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__29490_SHARP_))),e.target);
});})(vec__29494,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__29494,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__10263__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__10263__auto__)){
return or__10263__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__29501_29505 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__29502_29506 = null;
var count__29503_29507 = (0);
var i__29504_29508 = (0);
while(true){
if((i__29504_29508 < count__29503_29507)){
var mrk_29509 = cljs.core._nth.call(null,chunk__29502_29506,i__29504_29508);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_29509);

var G__29510 = seq__29501_29505;
var G__29511 = chunk__29502_29506;
var G__29512 = count__29503_29507;
var G__29513 = (i__29504_29508 + (1));
seq__29501_29505 = G__29510;
chunk__29502_29506 = G__29511;
count__29503_29507 = G__29512;
i__29504_29508 = G__29513;
continue;
} else {
var temp__4657__auto___29514 = cljs.core.seq.call(null,seq__29501_29505);
if(temp__4657__auto___29514){
var seq__29501_29515__$1 = temp__4657__auto___29514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29501_29515__$1)){
var c__11077__auto___29516 = cljs.core.chunk_first.call(null,seq__29501_29515__$1);
var G__29517 = cljs.core.chunk_rest.call(null,seq__29501_29515__$1);
var G__29518 = c__11077__auto___29516;
var G__29519 = cljs.core.count.call(null,c__11077__auto___29516);
var G__29520 = (0);
seq__29501_29505 = G__29517;
chunk__29502_29506 = G__29518;
count__29503_29507 = G__29519;
i__29504_29508 = G__29520;
continue;
} else {
var mrk_29521 = cljs.core.first.call(null,seq__29501_29515__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_29521);

var G__29522 = cljs.core.next.call(null,seq__29501_29515__$1);
var G__29523 = null;
var G__29524 = (0);
var G__29525 = (0);
seq__29501_29505 = G__29522;
chunk__29502_29506 = G__29523;
count__29503_29507 = G__29524;
i__29504_29508 = G__29525;
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
var args29526 = [];
var len__11371__auto___29532 = arguments.length;
var i__11372__auto___29533 = (0);
while(true){
if((i__11372__auto___29533 < len__11371__auto___29532)){
args29526.push((arguments[i__11372__auto___29533]));

var G__29534 = (i__11372__auto___29533 + (1));
i__11372__auto___29533 = G__29534;
continue;
} else {
}
break;
}

var G__29528 = args29526.length;
switch (G__29528) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29526.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__29529 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__29529,(0),null);
var lon = cljs.core.nth.call(null,vec__29529,(1),null);
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
return (function (p1__29536_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__29536_SHARP_),cljs.core.second.call(null,p1__29536_SHARP_)));
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
var vec__29540 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__29540,(0),null);
var s = cljs.core.nth.call(null,vec__29540,(1),null);
var w = cljs.core.nth.call(null,vec__29540,(2),null);
var e = cljs.core.nth.call(null,vec__29540,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__29540,n,s,w,e,url){
return (function (response){
return null;
});})(vec__29540,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__29543){
var vec__29547 = p__29543;
var lat = cljs.core.nth.call(null,vec__29547,(0),null);
var lon = cljs.core.nth.call(null,vec__29547,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__29550_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__29550_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__29551_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29551_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__29552_SHARP_){
return p1__29552_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__29553,ops){
var vec__29557 = p__29553;
var id1 = cljs.core.nth.call(null,vec__29557,(0),null);
var id2 = cljs.core.nth.call(null,vec__29557,(1),null);
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
var seq__29602 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__29603 = null;
var count__29604 = (0);
var i__29605 = (0);
while(true){
if((i__29605 < count__29604)){
var map__29606 = cljs.core._nth.call(null,chunk__29603,i__29605);
var map__29606__$1 = ((((!((map__29606 == null)))?((((map__29606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);
var ins = map__29606__$1;
var instruct = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29608_29644 = cljs.core._EQ_;
var expr__29609_29645 = instruct;
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29609_29645))){
var map__29611_29646 = ins;
var map__29611_29647__$1 = ((((!((map__29611_29646 == null)))?((((map__29611_29646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29611_29646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29611_29646):map__29611_29646);
var id_29648 = cljs.core.get.call(null,map__29611_29647__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29649 = cljs.core.get.call(null,map__29611_29647__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29648,vehicle_29649);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29609_29645))){
var map__29613_29650 = ins;
var map__29613_29651__$1 = ((((!((map__29613_29650 == null)))?((((map__29613_29650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29613_29650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29613_29650):map__29613_29650);
var id_29652 = cljs.core.get.call(null,map__29613_29651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29652);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29609_29645))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29609_29645))){
var map__29615_29653 = ins;
var map__29615_29654__$1 = ((((!((map__29615_29653 == null)))?((((map__29615_29653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615_29653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615_29653):map__29615_29653);
var id_29655 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29656 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29657 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29658 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29659 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_29660 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_29661 = cljs.core.get.call(null,map__29615_29654__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_29655)){
chart.client.popup.call(null,id_29655,html_29658,time_29659);
} else {
if(cljs.core.truth_((function (){var and__10251__auto__ = width_29660;
if(cljs.core.truth_(and__10251__auto__)){
var and__10251__auto____$1 = height_29661;
if(cljs.core.truth_(and__10251__auto____$1)){
var and__10251__auto____$2 = lat_29656;
if(cljs.core.truth_(and__10251__auto____$2)){
return lon_29657;
} else {
return and__10251__auto____$2;
}
} else {
return and__10251__auto____$1;
}
} else {
return and__10251__auto__;
}
})())){
chart.client.popup.call(null,lat_29656,lon_29657,html_29658,time_29659,width_29660,height_29661);
} else {
if(cljs.core.truth_((function (){var and__10251__auto__ = lat_29656;
if(cljs.core.truth_(and__10251__auto__)){
return lon_29657;
} else {
return and__10251__auto__;
}
})())){
chart.client.popup.call(null,lat_29656,lon_29657,html_29658,time_29659);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__29609_29645))){
var map__29617_29662 = ins;
var map__29617_29663__$1 = ((((!((map__29617_29662 == null)))?((((map__29617_29662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617_29662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617_29662):map__29617_29662);
var id_29664 = cljs.core.get.call(null,map__29617_29663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_29665 = cljs.core.get.call(null,map__29617_29663__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_29666 = cljs.core.get.call(null,map__29617_29663__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_29667 = cljs.core.get.call(null,map__29617_29663__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_29664,points_29665,options_29666,time_29667);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__29609_29645))){
var map__29619_29668 = ins;
var map__29619_29669__$1 = ((((!((map__29619_29668 == null)))?((((map__29619_29668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29619_29668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619_29668):map__29619_29668);
var coord_29670 = cljs.core.get.call(null,map__29619_29669__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_29670);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__29609_29645))){
var map__29621_29671 = ins;
var map__29621_29672__$1 = ((((!((map__29621_29671 == null)))?((((map__29621_29671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29621_29671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29621_29671):map__29621_29671);
var iname_29673 = cljs.core.get.call(null,map__29621_29672__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_29674 = cljs.core.get.call(null,map__29621_29672__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_29675 = cljs.core.get.call(null,map__29621_29672__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29676 = cljs.core.get.call(null,map__29621_29672__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_29677 = cljs.core.get.call(null,map__29621_29672__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_29673,tip_29674,lat_29675,lon_29676,feature_29677);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__29609_29645))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__29608_29644.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__29609_29645))){
var map__29623_29678 = ins;
var map__29623_29679__$1 = ((((!((map__29623_29678 == null)))?((((map__29623_29678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623_29678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623_29678):map__29623_29678);
var ids_29680 = cljs.core.get.call(null,map__29623_29679__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_29681 = cljs.core.get.call(null,map__29623_29679__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_29680,options_29681);
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

var G__29682 = seq__29602;
var G__29683 = chunk__29603;
var G__29684 = count__29604;
var G__29685 = (i__29605 + (1));
seq__29602 = G__29682;
chunk__29603 = G__29683;
count__29604 = G__29684;
i__29605 = G__29685;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29602);
if(temp__4657__auto__){
var seq__29602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29602__$1)){
var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__29602__$1);
var G__29686 = cljs.core.chunk_rest.call(null,seq__29602__$1);
var G__29687 = c__11077__auto__;
var G__29688 = cljs.core.count.call(null,c__11077__auto__);
var G__29689 = (0);
seq__29602 = G__29686;
chunk__29603 = G__29687;
count__29604 = G__29688;
i__29605 = G__29689;
continue;
} else {
var map__29625 = cljs.core.first.call(null,seq__29602__$1);
var map__29625__$1 = ((((!((map__29625 == null)))?((((map__29625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29625):map__29625);
var ins = map__29625__$1;
var instruct = cljs.core.get.call(null,map__29625__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29627_29690 = cljs.core._EQ_;
var expr__29628_29691 = instruct;
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29628_29691))){
var map__29630_29692 = ins;
var map__29630_29693__$1 = ((((!((map__29630_29692 == null)))?((((map__29630_29692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29630_29692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29630_29692):map__29630_29692);
var id_29694 = cljs.core.get.call(null,map__29630_29693__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29695 = cljs.core.get.call(null,map__29630_29693__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29694,vehicle_29695);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29628_29691))){
var map__29632_29696 = ins;
var map__29632_29697__$1 = ((((!((map__29632_29696 == null)))?((((map__29632_29696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29632_29696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632_29696):map__29632_29696);
var id_29698 = cljs.core.get.call(null,map__29632_29697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29698);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29628_29691))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29628_29691))){
var map__29634_29699 = ins;
var map__29634_29700__$1 = ((((!((map__29634_29699 == null)))?((((map__29634_29699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29634_29699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634_29699):map__29634_29699);
var id_29701 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29702 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29703 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29704 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29705 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_29706 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_29707 = cljs.core.get.call(null,map__29634_29700__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_29701)){
chart.client.popup.call(null,id_29701,html_29704,time_29705);
} else {
if(cljs.core.truth_((function (){var and__10251__auto__ = width_29706;
if(cljs.core.truth_(and__10251__auto__)){
var and__10251__auto____$1 = height_29707;
if(cljs.core.truth_(and__10251__auto____$1)){
var and__10251__auto____$2 = lat_29702;
if(cljs.core.truth_(and__10251__auto____$2)){
return lon_29703;
} else {
return and__10251__auto____$2;
}
} else {
return and__10251__auto____$1;
}
} else {
return and__10251__auto__;
}
})())){
chart.client.popup.call(null,lat_29702,lon_29703,html_29704,time_29705,width_29706,height_29707);
} else {
if(cljs.core.truth_((function (){var and__10251__auto__ = lat_29702;
if(cljs.core.truth_(and__10251__auto__)){
return lon_29703;
} else {
return and__10251__auto__;
}
})())){
chart.client.popup.call(null,lat_29702,lon_29703,html_29704,time_29705);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__29628_29691))){
var map__29636_29708 = ins;
var map__29636_29709__$1 = ((((!((map__29636_29708 == null)))?((((map__29636_29708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29636_29708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636_29708):map__29636_29708);
var id_29710 = cljs.core.get.call(null,map__29636_29709__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_29711 = cljs.core.get.call(null,map__29636_29709__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_29712 = cljs.core.get.call(null,map__29636_29709__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_29713 = cljs.core.get.call(null,map__29636_29709__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_29710,points_29711,options_29712,time_29713);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__29628_29691))){
var map__29638_29714 = ins;
var map__29638_29715__$1 = ((((!((map__29638_29714 == null)))?((((map__29638_29714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29638_29714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638_29714):map__29638_29714);
var coord_29716 = cljs.core.get.call(null,map__29638_29715__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_29716);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__29628_29691))){
var map__29640_29717 = ins;
var map__29640_29718__$1 = ((((!((map__29640_29717 == null)))?((((map__29640_29717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29640_29717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640_29717):map__29640_29717);
var iname_29719 = cljs.core.get.call(null,map__29640_29718__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_29720 = cljs.core.get.call(null,map__29640_29718__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_29721 = cljs.core.get.call(null,map__29640_29718__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29722 = cljs.core.get.call(null,map__29640_29718__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_29723 = cljs.core.get.call(null,map__29640_29718__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_29719,tip_29720,lat_29721,lon_29722,feature_29723);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__29628_29691))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__29627_29690.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__29628_29691))){
var map__29642_29724 = ins;
var map__29642_29725__$1 = ((((!((map__29642_29724 == null)))?((((map__29642_29724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29642_29724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642_29724):map__29642_29724);
var ids_29726 = cljs.core.get.call(null,map__29642_29725__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_29727 = cljs.core.get.call(null,map__29642_29725__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_29726,options_29727);
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

var G__29728 = cljs.core.next.call(null,seq__29602__$1);
var G__29729 = null;
var G__29730 = (0);
var G__29731 = (0);
seq__29602 = G__29728;
chunk__29603 = G__29729;
count__29604 = G__29730;
i__29605 = G__29731;
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
var args29733 = [];
var len__11371__auto___29736 = arguments.length;
var i__11372__auto___29737 = (0);
while(true){
if((i__11372__auto___29737 < len__11371__auto___29736)){
args29733.push((arguments[i__11372__auto___29737]));

var G__29738 = (i__11372__auto___29737 + (1));
i__11372__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29735 = args29733.length;
switch (G__29735) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29733.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__29732_SHARP_){
return chart.client.move_to.call(null,sel,p1__29732_SHARP_);
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
var args29744 = [];
var len__11371__auto___29747 = arguments.length;
var i__11372__auto___29748 = (0);
while(true){
if((i__11372__auto___29748 < len__11371__auto___29747)){
args29744.push((arguments[i__11372__auto___29748]));

var G__29749 = (i__11372__auto___29748 + (1));
i__11372__auto___29748 = G__29749;
continue;
} else {
}
break;
}

var G__29746 = args29744.length;
switch (G__29746) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29744.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__29740_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__29740_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__29741_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__29741_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__29742_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__29742_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__29743_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__29743_SHARP_);
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
var pred__29754_29757 = cljs.core._EQ_;
var expr__29755_29758 = cmd;
if(cljs.core.truth_(pred__29754_29757.call(null,"commands",expr__29755_29758))){
} else {
if(cljs.core.truth_(pred__29754_29757.call(null,"watch-visible",expr__29755_29758))){
var bnd_29759 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_29760 = [cljs.core.str("?n="),cljs.core.str(bnd_29759.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_29759.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_29759.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_29759.getEast())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_29760)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__29754_29757.call(null,"move-to",expr__29755_29758))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__29754_29757.call(null,"schedule",expr__29755_29758))){
chart.client.schedule.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}

return chart.controls.show_chart_controls.call(null);
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
}catch (e29762){if((e29762 instanceof Error)){
var e_29763 = e29762;
cljs.core.println.call(null,e_29763);
} else {
throw e29762;

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
var pred__29767_29770 = cljs.core._EQ_;
var expr__29768_29771 = q;
if(cljs.core.truth_(pred__29767_29770.call(null,"questions",expr__29768_29771))){
} else {
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map