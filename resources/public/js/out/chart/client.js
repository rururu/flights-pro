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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__23309 = response;
var map__23309__$1 = ((((!((map__23309 == null)))?((((map__23309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23309):map__23309);
var status = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_23317 = cljs.core.deref.call(null,vmp);
var mrk_23318 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23317);
var vec__23314_23319 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23317);
var lat_23320 = cljs.core.nth.call(null,vec__23314_23319,(0),null);
var lon_23321 = cljs.core.nth.call(null,vec__23314_23319,(1),null);
var pos_23322 = (new L.LatLng(lat_23320,lon_23321));
mrk_23318.setLatLng(pos_23322);

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
var seq__23327_23331 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23328_23332 = null;
var count__23329_23333 = (0);
var i__23330_23334 = (0);
while(true){
if((i__23330_23334 < count__23329_23333)){
var veh_23335 = cljs.core._nth.call(null,chunk__23328_23332,i__23330_23334);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23335)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23335)));

var G__23336 = seq__23327_23331;
var G__23337 = chunk__23328_23332;
var G__23338 = count__23329_23333;
var G__23339 = (i__23330_23334 + (1));
seq__23327_23331 = G__23336;
chunk__23328_23332 = G__23337;
count__23329_23333 = G__23338;
i__23330_23334 = G__23339;
continue;
} else {
var temp__4657__auto___23340 = cljs.core.seq.call(null,seq__23327_23331);
if(temp__4657__auto___23340){
var seq__23327_23341__$1 = temp__4657__auto___23340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23327_23341__$1)){
var c__21207__auto___23342 = cljs.core.chunk_first.call(null,seq__23327_23341__$1);
var G__23343 = cljs.core.chunk_rest.call(null,seq__23327_23341__$1);
var G__23344 = c__21207__auto___23342;
var G__23345 = cljs.core.count.call(null,c__21207__auto___23342);
var G__23346 = (0);
seq__23327_23331 = G__23343;
chunk__23328_23332 = G__23344;
count__23329_23333 = G__23345;
i__23330_23334 = G__23346;
continue;
} else {
var veh_23347 = cljs.core.first.call(null,seq__23327_23341__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23347)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23347)));

var G__23348 = cljs.core.next.call(null,seq__23327_23341__$1);
var G__23349 = null;
var G__23350 = (0);
var G__23351 = (0);
seq__23327_23331 = G__23348;
chunk__23328_23332 = G__23349;
count__23329_23333 = G__23350;
i__23330_23334 = G__23351;
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

var vec__23356 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23356,(0),null);
var lon = cljs.core.nth.call(null,vec__23356,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__23356,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23356,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23352_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23352_SHARP_))),e.target);
});})(vec__23356,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23356,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20393__auto__ = url_ico;
if(cljs.core.truth_(or__20393__auto__)){
return or__20393__auto__;
} else {
var or__20393__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20393__auto____$1)){
return or__20393__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
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
var seq__23363_23367 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__23364_23368 = null;
var count__23365_23369 = (0);
var i__23366_23370 = (0);
while(true){
if((i__23366_23370 < count__23365_23369)){
var mrk_23371 = cljs.core._nth.call(null,chunk__23364_23368,i__23366_23370);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23371);

var G__23372 = seq__23363_23367;
var G__23373 = chunk__23364_23368;
var G__23374 = count__23365_23369;
var G__23375 = (i__23366_23370 + (1));
seq__23363_23367 = G__23372;
chunk__23364_23368 = G__23373;
count__23365_23369 = G__23374;
i__23366_23370 = G__23375;
continue;
} else {
var temp__4657__auto___23376 = cljs.core.seq.call(null,seq__23363_23367);
if(temp__4657__auto___23376){
var seq__23363_23377__$1 = temp__4657__auto___23376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23363_23377__$1)){
var c__21207__auto___23378 = cljs.core.chunk_first.call(null,seq__23363_23377__$1);
var G__23379 = cljs.core.chunk_rest.call(null,seq__23363_23377__$1);
var G__23380 = c__21207__auto___23378;
var G__23381 = cljs.core.count.call(null,c__21207__auto___23378);
var G__23382 = (0);
seq__23363_23367 = G__23379;
chunk__23364_23368 = G__23380;
count__23365_23369 = G__23381;
i__23366_23370 = G__23382;
continue;
} else {
var mrk_23383 = cljs.core.first.call(null,seq__23363_23377__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23383);

var G__23384 = cljs.core.next.call(null,seq__23363_23377__$1);
var G__23385 = null;
var G__23386 = (0);
var G__23387 = (0);
seq__23363_23367 = G__23384;
chunk__23364_23368 = G__23385;
count__23365_23369 = G__23386;
i__23366_23370 = G__23387;
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
var args23388 = [];
var len__21501__auto___23394 = arguments.length;
var i__21502__auto___23395 = (0);
while(true){
if((i__21502__auto___23395 < len__21501__auto___23394)){
args23388.push((arguments[i__21502__auto___23395]));

var G__23396 = (i__21502__auto___23395 + (1));
i__21502__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var G__23390 = args23388.length;
switch (G__23390) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23388.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23391 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23391,(0),null);
var lon = cljs.core.nth.call(null,vec__23391,(1),null);
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
return (function (p1__23398_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__23398_SHARP_),cljs.core.second.call(null,p1__23398_SHARP_)));
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
var vec__23402 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__23402,(0),null);
var s = cljs.core.nth.call(null,vec__23402,(1),null);
var w = cljs.core.nth.call(null,vec__23402,(2),null);
var e = cljs.core.nth.call(null,vec__23402,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__23402,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__23402,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23405,zoom,lock){
var vec__23409 = p__23405;
var lat = cljs.core.nth.call(null,vec__23409,(0),null);
var lon = cljs.core.nth.call(null,vec__23409,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20393__auto__ = zoom;
if(cljs.core.truth_(or__20393__auto__)){
return or__20393__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__23412_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__23412_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__23413_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__23413_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__23414_SHARP_){
return p1__23414_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__23415,ops){
var vec__23419 = p__23415;
var id1 = cljs.core.nth.call(null,vec__23419,(0),null);
var id2 = cljs.core.nth.call(null,vec__23419,(1),null);
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
chart.client.select_airport = (function chart$client$select_airport(var_args){
var args23423 = [];
var len__21501__auto___23426 = arguments.length;
var i__21502__auto___23427 = (0);
while(true){
if((i__21502__auto___23427 < len__21501__auto___23426)){
args23423.push((arguments[i__21502__auto___23427]));

var G__23428 = (i__21502__auto___23427 + (1));
i__21502__auto___23427 = G__23428;
continue;
} else {
}
break;
}

var G__23425 = args23423.length;
switch (G__23425) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23423.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23422_SHARP_){
return chart.client.select_airport.call(null,sel,p1__23422_SHARP_);
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
var seq__23486 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23487 = null;
var count__23488 = (0);
var i__23489 = (0);
while(true){
if((i__23489 < count__23488)){
var map__23490 = cljs.core._nth.call(null,chunk__23487,i__23489);
var map__23490__$1 = ((((!((map__23490 == null)))?((((map__23490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23490):map__23490);
var ins = map__23490__$1;
var instruct = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23492_23542 = cljs.core._EQ_;
var expr__23493_23543 = instruct;
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23493_23543))){
var map__23495_23544 = ins;
var map__23495_23545__$1 = ((((!((map__23495_23544 == null)))?((((map__23495_23544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23495_23544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495_23544):map__23495_23544);
var id_23546 = cljs.core.get.call(null,map__23495_23545__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23547 = cljs.core.get.call(null,map__23495_23545__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23546,vehicle_23547);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23493_23543))){
var map__23497_23548 = ins;
var map__23497_23549__$1 = ((((!((map__23497_23548 == null)))?((((map__23497_23548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23497_23548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497_23548):map__23497_23548);
var id_23550 = cljs.core.get.call(null,map__23497_23549__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23550);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23493_23543))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23493_23543))){
var map__23499_23551 = ins;
var map__23499_23552__$1 = ((((!((map__23499_23551 == null)))?((((map__23499_23551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23499_23551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23499_23551):map__23499_23551);
var id_23553 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23554 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23555 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23556 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23557 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23558 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23559 = cljs.core.get.call(null,map__23499_23552__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23553)){
chart.client.popup.call(null,id_23553,html_23556,time_23557);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_23558;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_23559;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_23554;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_23555;
} else {
return and__20381__auto____$2;
}
} else {
return and__20381__auto____$1;
}
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23554,lon_23555,html_23556,time_23557,width_23558,height_23559);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_23554;
if(cljs.core.truth_(and__20381__auto__)){
return lon_23555;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23554,lon_23555,html_23556,time_23557);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23493_23543))){
var map__23501_23560 = ins;
var map__23501_23561__$1 = ((((!((map__23501_23560 == null)))?((((map__23501_23560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23501_23560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23501_23560):map__23501_23560);
var id_23562 = cljs.core.get.call(null,map__23501_23561__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23563 = cljs.core.get.call(null,map__23501_23561__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23564 = cljs.core.get.call(null,map__23501_23561__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23565 = cljs.core.get.call(null,map__23501_23561__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23562,points_23563,options_23564,time_23565);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23493_23543))){
var map__23503_23566 = ins;
var map__23503_23567__$1 = ((((!((map__23503_23566 == null)))?((((map__23503_23566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23503_23566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23503_23566):map__23503_23566);
var coord_23568 = cljs.core.get.call(null,map__23503_23567__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23569 = cljs.core.get.call(null,map__23503_23567__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23570 = cljs.core.get.call(null,map__23503_23567__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23568,zoom_23569,lock_23570);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23493_23543))){
var map__23505_23571 = ins;
var map__23505_23572__$1 = ((((!((map__23505_23571 == null)))?((((map__23505_23571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23505_23571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505_23571):map__23505_23571);
var iname_23573 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23574 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23575 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23576 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23577 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23578 = cljs.core.get.call(null,map__23505_23572__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23573,tip_23574,lat_23575,lon_23576,feature_23577,url_ico_23578);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23493_23543))){
var map__23507_23579 = ins;
var map__23507_23580__$1 = ((((!((map__23507_23579 == null)))?((((map__23507_23579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23507_23579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23507_23579):map__23507_23579);
var iname_23581 = cljs.core.get.call(null,map__23507_23580__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23581);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23493_23543))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23493_23543))){
var map__23509_23582 = ins;
var map__23509_23583__$1 = ((((!((map__23509_23582 == null)))?((((map__23509_23582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509_23582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23509_23582):map__23509_23582);
var ids_23584 = cljs.core.get.call(null,map__23509_23583__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23585 = cljs.core.get.call(null,map__23509_23583__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23584,options_23585);
} else {
if(cljs.core.truth_(pred__23492_23542.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23493_23543))){
var map__23511_23586 = ins;
var map__23511_23587__$1 = ((((!((map__23511_23586 == null)))?((((map__23511_23586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23511_23586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23511_23586):map__23511_23586);
var question_23588 = cljs.core.get.call(null,map__23511_23587__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23589 = cljs.core.get.call(null,map__23511_23587__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23513_23590 = cljs.core._EQ_;
var expr__23514_23591 = question_23588;
if(cljs.core.truth_(pred__23513_23590.call(null,"city",expr__23514_23591))){
chart.client.select_city.call(null,param_23589);
} else {
if(cljs.core.truth_(pred__23513_23590.call(null,"airport",expr__23514_23591))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23514_23591)].join('')));
}
}
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
}
}

var G__23592 = seq__23486;
var G__23593 = chunk__23487;
var G__23594 = count__23488;
var G__23595 = (i__23489 + (1));
seq__23486 = G__23592;
chunk__23487 = G__23593;
count__23488 = G__23594;
i__23489 = G__23595;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23486);
if(temp__4657__auto__){
var seq__23486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23486__$1)){
var c__21207__auto__ = cljs.core.chunk_first.call(null,seq__23486__$1);
var G__23596 = cljs.core.chunk_rest.call(null,seq__23486__$1);
var G__23597 = c__21207__auto__;
var G__23598 = cljs.core.count.call(null,c__21207__auto__);
var G__23599 = (0);
seq__23486 = G__23596;
chunk__23487 = G__23597;
count__23488 = G__23598;
i__23489 = G__23599;
continue;
} else {
var map__23516 = cljs.core.first.call(null,seq__23486__$1);
var map__23516__$1 = ((((!((map__23516 == null)))?((((map__23516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23516):map__23516);
var ins = map__23516__$1;
var instruct = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23518_23600 = cljs.core._EQ_;
var expr__23519_23601 = instruct;
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23519_23601))){
var map__23521_23602 = ins;
var map__23521_23603__$1 = ((((!((map__23521_23602 == null)))?((((map__23521_23602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23521_23602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521_23602):map__23521_23602);
var id_23604 = cljs.core.get.call(null,map__23521_23603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23605 = cljs.core.get.call(null,map__23521_23603__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23604,vehicle_23605);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23519_23601))){
var map__23523_23606 = ins;
var map__23523_23607__$1 = ((((!((map__23523_23606 == null)))?((((map__23523_23606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23523_23606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23523_23606):map__23523_23606);
var id_23608 = cljs.core.get.call(null,map__23523_23607__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23608);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23519_23601))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23519_23601))){
var map__23525_23609 = ins;
var map__23525_23610__$1 = ((((!((map__23525_23609 == null)))?((((map__23525_23609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23525_23609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23525_23609):map__23525_23609);
var id_23611 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23612 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23613 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23614 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23615 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23616 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23617 = cljs.core.get.call(null,map__23525_23610__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23611)){
chart.client.popup.call(null,id_23611,html_23614,time_23615);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_23616;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_23617;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_23612;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_23613;
} else {
return and__20381__auto____$2;
}
} else {
return and__20381__auto____$1;
}
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23612,lon_23613,html_23614,time_23615,width_23616,height_23617);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_23612;
if(cljs.core.truth_(and__20381__auto__)){
return lon_23613;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23612,lon_23613,html_23614,time_23615);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23519_23601))){
var map__23527_23618 = ins;
var map__23527_23619__$1 = ((((!((map__23527_23618 == null)))?((((map__23527_23618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23527_23618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23527_23618):map__23527_23618);
var id_23620 = cljs.core.get.call(null,map__23527_23619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23621 = cljs.core.get.call(null,map__23527_23619__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23622 = cljs.core.get.call(null,map__23527_23619__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23623 = cljs.core.get.call(null,map__23527_23619__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23620,points_23621,options_23622,time_23623);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23519_23601))){
var map__23529_23624 = ins;
var map__23529_23625__$1 = ((((!((map__23529_23624 == null)))?((((map__23529_23624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23529_23624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529_23624):map__23529_23624);
var coord_23626 = cljs.core.get.call(null,map__23529_23625__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23627 = cljs.core.get.call(null,map__23529_23625__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23628 = cljs.core.get.call(null,map__23529_23625__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23626,zoom_23627,lock_23628);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23519_23601))){
var map__23531_23629 = ins;
var map__23531_23630__$1 = ((((!((map__23531_23629 == null)))?((((map__23531_23629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531_23629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23531_23629):map__23531_23629);
var iname_23631 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23632 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23633 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23634 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23635 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23636 = cljs.core.get.call(null,map__23531_23630__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23631,tip_23632,lat_23633,lon_23634,feature_23635,url_ico_23636);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23519_23601))){
var map__23533_23637 = ins;
var map__23533_23638__$1 = ((((!((map__23533_23637 == null)))?((((map__23533_23637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23533_23637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23533_23637):map__23533_23637);
var iname_23639 = cljs.core.get.call(null,map__23533_23638__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23639);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23519_23601))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23519_23601))){
var map__23535_23640 = ins;
var map__23535_23641__$1 = ((((!((map__23535_23640 == null)))?((((map__23535_23640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23535_23640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535_23640):map__23535_23640);
var ids_23642 = cljs.core.get.call(null,map__23535_23641__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23643 = cljs.core.get.call(null,map__23535_23641__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23642,options_23643);
} else {
if(cljs.core.truth_(pred__23518_23600.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23519_23601))){
var map__23537_23644 = ins;
var map__23537_23645__$1 = ((((!((map__23537_23644 == null)))?((((map__23537_23644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23537_23644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23537_23644):map__23537_23644);
var question_23646 = cljs.core.get.call(null,map__23537_23645__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23647 = cljs.core.get.call(null,map__23537_23645__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23539_23648 = cljs.core._EQ_;
var expr__23540_23649 = question_23646;
if(cljs.core.truth_(pred__23539_23648.call(null,"city",expr__23540_23649))){
chart.client.select_city.call(null,param_23647);
} else {
if(cljs.core.truth_(pred__23539_23648.call(null,"airport",expr__23540_23649))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23540_23649)].join('')));
}
}
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
}
}

var G__23650 = cljs.core.next.call(null,seq__23486__$1);
var G__23651 = null;
var G__23652 = (0);
var G__23653 = (0);
seq__23486 = G__23650;
chunk__23487 = G__23651;
count__23488 = G__23652;
i__23489 = G__23653;
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
var args23655 = [];
var len__21501__auto___23658 = arguments.length;
var i__21502__auto___23659 = (0);
while(true){
if((i__21502__auto___23659 < len__21501__auto___23658)){
args23655.push((arguments[i__21502__auto___23659]));

var G__23660 = (i__21502__auto___23659 + (1));
i__21502__auto___23659 = G__23660;
continue;
} else {
}
break;
}

var G__23657 = args23655.length;
switch (G__23657) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23655.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23654_SHARP_){
return chart.client.move_to.call(null,sel,p1__23654_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

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
var args23666 = [];
var len__21501__auto___23669 = arguments.length;
var i__21502__auto___23670 = (0);
while(true){
if((i__21502__auto___23670 < len__21501__auto___23669)){
args23666.push((arguments[i__21502__auto___23670]));

var G__23671 = (i__21502__auto___23670 + (1));
i__21502__auto___23670 = G__23671;
continue;
} else {
}
break;
}

var G__23668 = args23666.length;
switch (G__23668) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23666.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23662_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__23662_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23663_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__23663_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23664_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__23664_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23665_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__23665_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args23676 = [];
var len__21501__auto___23679 = arguments.length;
var i__21502__auto___23680 = (0);
while(true){
if((i__21502__auto___23680 < len__21501__auto___23679)){
args23676.push((arguments[i__21502__auto___23680]));

var G__23681 = (i__21502__auto___23680 + (1));
i__21502__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__23673_SHARP_){
return chart.client.question.call(null,sel,p1__23673_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__23674_SHARP_){
return chart.client.question.call(null,pred,sel,p1__23674_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__23675_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__23675_SHARP_);
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
var pred__23686_23689 = cljs.core._EQ_;
var expr__23687_23690 = cmd;
if(cljs.core.truth_(pred__23686_23689.call(null,"commands",expr__23687_23690))){
} else {
if(cljs.core.truth_(pred__23686_23689.call(null,"watch-visible",expr__23687_23690))){
var bnd_23691 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_23692 = [cljs.core.str("?n="),cljs.core.str(bnd_23691.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_23691.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_23691.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_23691.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_23692)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__23686_23689.call(null,"move-to",expr__23687_23690))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__23686_23689.call(null,"schedule",expr__23687_23690))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__23686_23689.call(null,"question",expr__23687_23690))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
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
}catch (e23694){if((e23694 instanceof Error)){
var e_23695 = e23694;
cljs.core.println.call(null,e_23695);
} else {
throw e23694;

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
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map