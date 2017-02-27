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
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__30333 = response;
var map__30333__$1 = ((((!((map__30333 == null)))?((((map__30333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30333):map__30333);
var status = cljs.core.get.call(null,map__30333__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30333__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_30341 = cljs.core.deref.call(null,vmp);
var mrk_30342 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_30341);
var vec__30338_30343 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_30341);
var lat_30344 = cljs.core.nth.call(null,vec__30338_30343,(0),null);
var lon_30345 = cljs.core.nth.call(null,vec__30338_30343,(1),null);
var pos_30346 = (new L.LatLng(lat_30344,lon_30345));
mrk_30342.setLatLng(pos_30346);

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
var seq__30351_30355 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__30352_30356 = null;
var count__30353_30357 = (0);
var i__30354_30358 = (0);
while(true){
if((i__30354_30358 < count__30353_30357)){
var veh_30359 = cljs.core._nth.call(null,chunk__30352_30356,i__30354_30358);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30359)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30359)));

var G__30360 = seq__30351_30355;
var G__30361 = chunk__30352_30356;
var G__30362 = count__30353_30357;
var G__30363 = (i__30354_30358 + (1));
seq__30351_30355 = G__30360;
chunk__30352_30356 = G__30361;
count__30353_30357 = G__30362;
i__30354_30358 = G__30363;
continue;
} else {
var temp__4657__auto___30364 = cljs.core.seq.call(null,seq__30351_30355);
if(temp__4657__auto___30364){
var seq__30351_30365__$1 = temp__4657__auto___30364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30351_30365__$1)){
var c__21794__auto___30366 = cljs.core.chunk_first.call(null,seq__30351_30365__$1);
var G__30367 = cljs.core.chunk_rest.call(null,seq__30351_30365__$1);
var G__30368 = c__21794__auto___30366;
var G__30369 = cljs.core.count.call(null,c__21794__auto___30366);
var G__30370 = (0);
seq__30351_30355 = G__30367;
chunk__30352_30356 = G__30368;
count__30353_30357 = G__30369;
i__30354_30358 = G__30370;
continue;
} else {
var veh_30371 = cljs.core.first.call(null,seq__30351_30365__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30371)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30371)));

var G__30372 = cljs.core.next.call(null,seq__30351_30365__$1);
var G__30373 = null;
var G__30374 = (0);
var G__30375 = (0);
seq__30351_30355 = G__30372;
chunk__30352_30356 = G__30373;
count__30353_30357 = G__30374;
i__30354_30358 = G__30375;
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

var vec__30380 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__30380,(0),null);
var lon = cljs.core.nth.call(null,vec__30380,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__30380,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__30380,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__30376_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__30376_SHARP_))),e.target);
});})(vec__30380,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__30380,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

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
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20980__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20980__auto__)){
return or__20980__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
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
var seq__30387_30391 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__30388_30392 = null;
var count__30389_30393 = (0);
var i__30390_30394 = (0);
while(true){
if((i__30390_30394 < count__30389_30393)){
var mrk_30395 = cljs.core._nth.call(null,chunk__30388_30392,i__30390_30394);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_30395);

var G__30396 = seq__30387_30391;
var G__30397 = chunk__30388_30392;
var G__30398 = count__30389_30393;
var G__30399 = (i__30390_30394 + (1));
seq__30387_30391 = G__30396;
chunk__30388_30392 = G__30397;
count__30389_30393 = G__30398;
i__30390_30394 = G__30399;
continue;
} else {
var temp__4657__auto___30400 = cljs.core.seq.call(null,seq__30387_30391);
if(temp__4657__auto___30400){
var seq__30387_30401__$1 = temp__4657__auto___30400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30387_30401__$1)){
var c__21794__auto___30402 = cljs.core.chunk_first.call(null,seq__30387_30401__$1);
var G__30403 = cljs.core.chunk_rest.call(null,seq__30387_30401__$1);
var G__30404 = c__21794__auto___30402;
var G__30405 = cljs.core.count.call(null,c__21794__auto___30402);
var G__30406 = (0);
seq__30387_30391 = G__30403;
chunk__30388_30392 = G__30404;
count__30389_30393 = G__30405;
i__30390_30394 = G__30406;
continue;
} else {
var mrk_30407 = cljs.core.first.call(null,seq__30387_30401__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_30407);

var G__30408 = cljs.core.next.call(null,seq__30387_30401__$1);
var G__30409 = null;
var G__30410 = (0);
var G__30411 = (0);
seq__30387_30391 = G__30408;
chunk__30388_30392 = G__30409;
count__30389_30393 = G__30410;
i__30390_30394 = G__30411;
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
var args30412 = [];
var len__22088__auto___30418 = arguments.length;
var i__22089__auto___30419 = (0);
while(true){
if((i__22089__auto___30419 < len__22088__auto___30418)){
args30412.push((arguments[i__22089__auto___30419]));

var G__30420 = (i__22089__auto___30419 + (1));
i__22089__auto___30419 = G__30420;
continue;
} else {
}
break;
}

var G__30414 = args30412.length;
switch (G__30414) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30412.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__30415 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__30415,(0),null);
var lon = cljs.core.nth.call(null,vec__30415,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(600),(800));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),w,new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),h], null)).setLatLng([lat,lon]).setContent(html);
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
return (function (p1__30422_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__30422_SHARP_),cljs.core.second.call(null,p1__30422_SHARP_)));
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
var vec__30426 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__30426,(0),null);
var s = cljs.core.nth.call(null,vec__30426,(1),null);
var w = cljs.core.nth.call(null,vec__30426,(2),null);
var e = cljs.core.nth.call(null,vec__30426,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__30426,n,s,w,e,url){
return (function (response){
return null;
});})(vec__30426,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__30429){
var vec__30433 = p__30429;
var lat = cljs.core.nth.call(null,vec__30433,(0),null);
var lon = cljs.core.nth.call(null,vec__30433,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__30436_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__30436_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__30437_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__30437_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__30438_SHARP_){
return p1__30438_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__30439,ops){
var vec__30443 = p__30439;
var id1 = cljs.core.nth.call(null,vec__30443,(0),null);
var id2 = cljs.core.nth.call(null,vec__30443,(1),null);
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
var seq__30488 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__30489 = null;
var count__30490 = (0);
var i__30491 = (0);
while(true){
if((i__30491 < count__30490)){
var map__30492 = cljs.core._nth.call(null,chunk__30489,i__30491);
var map__30492__$1 = ((((!((map__30492 == null)))?((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);
var ins = map__30492__$1;
var instruct = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30494_30530 = cljs.core._EQ_;
var expr__30495_30531 = instruct;
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30495_30531))){
var map__30497_30532 = ins;
var map__30497_30533__$1 = ((((!((map__30497_30532 == null)))?((((map__30497_30532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30497_30532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30497_30532):map__30497_30532);
var id_30534 = cljs.core.get.call(null,map__30497_30533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30535 = cljs.core.get.call(null,map__30497_30533__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30534,vehicle_30535);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30495_30531))){
var map__30499_30536 = ins;
var map__30499_30537__$1 = ((((!((map__30499_30536 == null)))?((((map__30499_30536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30499_30536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30499_30536):map__30499_30536);
var id_30538 = cljs.core.get.call(null,map__30499_30537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30538);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30495_30531))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30495_30531))){
var map__30501_30539 = ins;
var map__30501_30540__$1 = ((((!((map__30501_30539 == null)))?((((map__30501_30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30501_30539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501_30539):map__30501_30539);
var id_30541 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30542 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30543 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30544 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30545 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_30546 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_30547 = cljs.core.get.call(null,map__30501_30540__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_30541)){
chart.client.popup.call(null,id_30541,html_30544,time_30545);
} else {
if(cljs.core.truth_((function (){var and__20968__auto__ = width_30546;
if(cljs.core.truth_(and__20968__auto__)){
var and__20968__auto____$1 = height_30547;
if(cljs.core.truth_(and__20968__auto____$1)){
var and__20968__auto____$2 = lat_30542;
if(cljs.core.truth_(and__20968__auto____$2)){
return lon_30543;
} else {
return and__20968__auto____$2;
}
} else {
return and__20968__auto____$1;
}
} else {
return and__20968__auto__;
}
})())){
chart.client.popup.call(null,lat_30542,lon_30543,html_30544,time_30545,width_30546,height_30547);
} else {
if(cljs.core.truth_((function (){var and__20968__auto__ = lat_30542;
if(cljs.core.truth_(and__20968__auto__)){
return lon_30543;
} else {
return and__20968__auto__;
}
})())){
chart.client.popup.call(null,lat_30542,lon_30543,html_30544,time_30545);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__30495_30531))){
var map__30503_30548 = ins;
var map__30503_30549__$1 = ((((!((map__30503_30548 == null)))?((((map__30503_30548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30503_30548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30503_30548):map__30503_30548);
var id_30550 = cljs.core.get.call(null,map__30503_30549__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_30551 = cljs.core.get.call(null,map__30503_30549__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_30552 = cljs.core.get.call(null,map__30503_30549__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_30553 = cljs.core.get.call(null,map__30503_30549__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_30550,points_30551,options_30552,time_30553);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__30495_30531))){
var map__30505_30554 = ins;
var map__30505_30555__$1 = ((((!((map__30505_30554 == null)))?((((map__30505_30554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30505_30554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30505_30554):map__30505_30554);
var coord_30556 = cljs.core.get.call(null,map__30505_30555__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_30556);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__30495_30531))){
var map__30507_30557 = ins;
var map__30507_30558__$1 = ((((!((map__30507_30557 == null)))?((((map__30507_30557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30507_30557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507_30557):map__30507_30557);
var iname_30559 = cljs.core.get.call(null,map__30507_30558__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_30560 = cljs.core.get.call(null,map__30507_30558__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30561 = cljs.core.get.call(null,map__30507_30558__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_30562 = cljs.core.get.call(null,map__30507_30558__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_30559,lat_30560,lon_30561,feature_30562);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__30495_30531))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__30494_30530.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__30495_30531))){
var map__30509_30563 = ins;
var map__30509_30564__$1 = ((((!((map__30509_30563 == null)))?((((map__30509_30563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509_30563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509_30563):map__30509_30563);
var ids_30565 = cljs.core.get.call(null,map__30509_30564__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_30566 = cljs.core.get.call(null,map__30509_30564__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_30565,options_30566);
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

var G__30567 = seq__30488;
var G__30568 = chunk__30489;
var G__30569 = count__30490;
var G__30570 = (i__30491 + (1));
seq__30488 = G__30567;
chunk__30489 = G__30568;
count__30490 = G__30569;
i__30491 = G__30570;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30488);
if(temp__4657__auto__){
var seq__30488__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30488__$1)){
var c__21794__auto__ = cljs.core.chunk_first.call(null,seq__30488__$1);
var G__30571 = cljs.core.chunk_rest.call(null,seq__30488__$1);
var G__30572 = c__21794__auto__;
var G__30573 = cljs.core.count.call(null,c__21794__auto__);
var G__30574 = (0);
seq__30488 = G__30571;
chunk__30489 = G__30572;
count__30490 = G__30573;
i__30491 = G__30574;
continue;
} else {
var map__30511 = cljs.core.first.call(null,seq__30488__$1);
var map__30511__$1 = ((((!((map__30511 == null)))?((((map__30511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);
var ins = map__30511__$1;
var instruct = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30513_30575 = cljs.core._EQ_;
var expr__30514_30576 = instruct;
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30514_30576))){
var map__30516_30577 = ins;
var map__30516_30578__$1 = ((((!((map__30516_30577 == null)))?((((map__30516_30577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30516_30577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30516_30577):map__30516_30577);
var id_30579 = cljs.core.get.call(null,map__30516_30578__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30580 = cljs.core.get.call(null,map__30516_30578__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30579,vehicle_30580);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30514_30576))){
var map__30518_30581 = ins;
var map__30518_30582__$1 = ((((!((map__30518_30581 == null)))?((((map__30518_30581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30518_30581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30518_30581):map__30518_30581);
var id_30583 = cljs.core.get.call(null,map__30518_30582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30583);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30514_30576))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30514_30576))){
var map__30520_30584 = ins;
var map__30520_30585__$1 = ((((!((map__30520_30584 == null)))?((((map__30520_30584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30520_30584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520_30584):map__30520_30584);
var id_30586 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30587 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30588 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30589 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30590 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_30591 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_30592 = cljs.core.get.call(null,map__30520_30585__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_30586)){
chart.client.popup.call(null,id_30586,html_30589,time_30590);
} else {
if(cljs.core.truth_((function (){var and__20968__auto__ = width_30591;
if(cljs.core.truth_(and__20968__auto__)){
var and__20968__auto____$1 = height_30592;
if(cljs.core.truth_(and__20968__auto____$1)){
var and__20968__auto____$2 = lat_30587;
if(cljs.core.truth_(and__20968__auto____$2)){
return lon_30588;
} else {
return and__20968__auto____$2;
}
} else {
return and__20968__auto____$1;
}
} else {
return and__20968__auto__;
}
})())){
chart.client.popup.call(null,lat_30587,lon_30588,html_30589,time_30590,width_30591,height_30592);
} else {
if(cljs.core.truth_((function (){var and__20968__auto__ = lat_30587;
if(cljs.core.truth_(and__20968__auto__)){
return lon_30588;
} else {
return and__20968__auto__;
}
})())){
chart.client.popup.call(null,lat_30587,lon_30588,html_30589,time_30590);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__30514_30576))){
var map__30522_30593 = ins;
var map__30522_30594__$1 = ((((!((map__30522_30593 == null)))?((((map__30522_30593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30522_30593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30522_30593):map__30522_30593);
var id_30595 = cljs.core.get.call(null,map__30522_30594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_30596 = cljs.core.get.call(null,map__30522_30594__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_30597 = cljs.core.get.call(null,map__30522_30594__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_30598 = cljs.core.get.call(null,map__30522_30594__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_30595,points_30596,options_30597,time_30598);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__30514_30576))){
var map__30524_30599 = ins;
var map__30524_30600__$1 = ((((!((map__30524_30599 == null)))?((((map__30524_30599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30524_30599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30524_30599):map__30524_30599);
var coord_30601 = cljs.core.get.call(null,map__30524_30600__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_30601);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__30514_30576))){
var map__30526_30602 = ins;
var map__30526_30603__$1 = ((((!((map__30526_30602 == null)))?((((map__30526_30602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30526_30602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30526_30602):map__30526_30602);
var iname_30604 = cljs.core.get.call(null,map__30526_30603__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_30605 = cljs.core.get.call(null,map__30526_30603__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30606 = cljs.core.get.call(null,map__30526_30603__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_30607 = cljs.core.get.call(null,map__30526_30603__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_30604,lat_30605,lon_30606,feature_30607);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__30514_30576))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__30513_30575.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__30514_30576))){
var map__30528_30608 = ins;
var map__30528_30609__$1 = ((((!((map__30528_30608 == null)))?((((map__30528_30608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528_30608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528_30608):map__30528_30608);
var ids_30610 = cljs.core.get.call(null,map__30528_30609__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_30611 = cljs.core.get.call(null,map__30528_30609__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_30610,options_30611);
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

var G__30612 = cljs.core.next.call(null,seq__30488__$1);
var G__30613 = null;
var G__30614 = (0);
var G__30615 = (0);
seq__30488 = G__30612;
chunk__30489 = G__30613;
count__30490 = G__30614;
i__30491 = G__30615;
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
var args30617 = [];
var len__22088__auto___30620 = arguments.length;
var i__22089__auto___30621 = (0);
while(true){
if((i__22089__auto___30621 < len__22088__auto___30620)){
args30617.push((arguments[i__22089__auto___30621]));

var G__30622 = (i__22089__auto___30621 + (1));
i__22089__auto___30621 = G__30622;
continue;
} else {
}
break;
}

var G__30619 = args30617.length;
switch (G__30619) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30617.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__30616_SHARP_){
return chart.client.move_to.call(null,sel,p1__30616_SHARP_);
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
var args30628 = [];
var len__22088__auto___30631 = arguments.length;
var i__22089__auto___30632 = (0);
while(true){
if((i__22089__auto___30632 < len__22088__auto___30631)){
args30628.push((arguments[i__22089__auto___30632]));

var G__30633 = (i__22089__auto___30632 + (1));
i__22089__auto___30632 = G__30633;
continue;
} else {
}
break;
}

var G__30630 = args30628.length;
switch (G__30630) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30628.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__30624_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__30624_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__30625_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__30625_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__30626_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__30626_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__30627_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__30627_SHARP_);
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
var pred__30638 = cljs.core._EQ_;
var expr__30639 = cmd;
if(cljs.core.truth_(pred__30638.call(null,"commands",expr__30639))){
return null;
} else {
if(cljs.core.truth_(pred__30638.call(null,"watch-visible",expr__30639))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__30638.call(null,"move-to",expr__30639))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__30638.call(null,"schedule",expr__30639))){
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
tile1.addTo(m);

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
var pred__30644 = cljs.core._EQ_;
var expr__30645 = q;
if(cljs.core.truth_(pred__30644.call(null,"questions",expr__30645))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map