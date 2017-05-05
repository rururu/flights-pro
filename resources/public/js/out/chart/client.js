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
var map__23319 = response;
var map__23319__$1 = ((((!((map__23319 == null)))?((((map__23319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23319):map__23319);
var status = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_23327 = cljs.core.deref.call(null,vmp);
var mrk_23328 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23327);
var vec__23324_23329 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23327);
var lat_23330 = cljs.core.nth.call(null,vec__23324_23329,(0),null);
var lon_23331 = cljs.core.nth.call(null,vec__23324_23329,(1),null);
var pos_23332 = (new L.LatLng(lat_23330,lon_23331));
mrk_23328.setLatLng(pos_23332);

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
var seq__23337_23341 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23338_23342 = null;
var count__23339_23343 = (0);
var i__23340_23344 = (0);
while(true){
if((i__23340_23344 < count__23339_23343)){
var veh_23345 = cljs.core._nth.call(null,chunk__23338_23342,i__23340_23344);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23345)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23345)));

var G__23346 = seq__23337_23341;
var G__23347 = chunk__23338_23342;
var G__23348 = count__23339_23343;
var G__23349 = (i__23340_23344 + (1));
seq__23337_23341 = G__23346;
chunk__23338_23342 = G__23347;
count__23339_23343 = G__23348;
i__23340_23344 = G__23349;
continue;
} else {
var temp__4657__auto___23350 = cljs.core.seq.call(null,seq__23337_23341);
if(temp__4657__auto___23350){
var seq__23337_23351__$1 = temp__4657__auto___23350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23337_23351__$1)){
var c__21207__auto___23352 = cljs.core.chunk_first.call(null,seq__23337_23351__$1);
var G__23353 = cljs.core.chunk_rest.call(null,seq__23337_23351__$1);
var G__23354 = c__21207__auto___23352;
var G__23355 = cljs.core.count.call(null,c__21207__auto___23352);
var G__23356 = (0);
seq__23337_23341 = G__23353;
chunk__23338_23342 = G__23354;
count__23339_23343 = G__23355;
i__23340_23344 = G__23356;
continue;
} else {
var veh_23357 = cljs.core.first.call(null,seq__23337_23351__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23357)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23357)));

var G__23358 = cljs.core.next.call(null,seq__23337_23351__$1);
var G__23359 = null;
var G__23360 = (0);
var G__23361 = (0);
seq__23337_23341 = G__23358;
chunk__23338_23342 = G__23359;
count__23339_23343 = G__23360;
i__23340_23344 = G__23361;
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

var vec__23366 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23366,(0),null);
var lon = cljs.core.nth.call(null,vec__23366,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__23366,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23366,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23362_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23362_SHARP_))),e.target);
});})(vec__23366,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23366,lat,lon,pos,ico,opt,mrk__$1))
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
var seq__23373_23377 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__23374_23378 = null;
var count__23375_23379 = (0);
var i__23376_23380 = (0);
while(true){
if((i__23376_23380 < count__23375_23379)){
var mrk_23381 = cljs.core._nth.call(null,chunk__23374_23378,i__23376_23380);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23381);

var G__23382 = seq__23373_23377;
var G__23383 = chunk__23374_23378;
var G__23384 = count__23375_23379;
var G__23385 = (i__23376_23380 + (1));
seq__23373_23377 = G__23382;
chunk__23374_23378 = G__23383;
count__23375_23379 = G__23384;
i__23376_23380 = G__23385;
continue;
} else {
var temp__4657__auto___23386 = cljs.core.seq.call(null,seq__23373_23377);
if(temp__4657__auto___23386){
var seq__23373_23387__$1 = temp__4657__auto___23386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23373_23387__$1)){
var c__21207__auto___23388 = cljs.core.chunk_first.call(null,seq__23373_23387__$1);
var G__23389 = cljs.core.chunk_rest.call(null,seq__23373_23387__$1);
var G__23390 = c__21207__auto___23388;
var G__23391 = cljs.core.count.call(null,c__21207__auto___23388);
var G__23392 = (0);
seq__23373_23377 = G__23389;
chunk__23374_23378 = G__23390;
count__23375_23379 = G__23391;
i__23376_23380 = G__23392;
continue;
} else {
var mrk_23393 = cljs.core.first.call(null,seq__23373_23387__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23393);

var G__23394 = cljs.core.next.call(null,seq__23373_23387__$1);
var G__23395 = null;
var G__23396 = (0);
var G__23397 = (0);
seq__23373_23377 = G__23394;
chunk__23374_23378 = G__23395;
count__23375_23379 = G__23396;
i__23376_23380 = G__23397;
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
var args23398 = [];
var len__21501__auto___23404 = arguments.length;
var i__21502__auto___23405 = (0);
while(true){
if((i__21502__auto___23405 < len__21501__auto___23404)){
args23398.push((arguments[i__21502__auto___23405]));

var G__23406 = (i__21502__auto___23405 + (1));
i__21502__auto___23405 = G__23406;
continue;
} else {
}
break;
}

var G__23400 = args23398.length;
switch (G__23400) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23398.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23401 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23401,(0),null);
var lon = cljs.core.nth.call(null,vec__23401,(1),null);
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
return (function (p1__23408_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__23408_SHARP_),cljs.core.second.call(null,p1__23408_SHARP_)));
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
var vec__23412 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__23412,(0),null);
var s = cljs.core.nth.call(null,vec__23412,(1),null);
var w = cljs.core.nth.call(null,vec__23412,(2),null);
var e = cljs.core.nth.call(null,vec__23412,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__23412,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__23412,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23415,zoom,lock){
var vec__23419 = p__23415;
var lat = cljs.core.nth.call(null,vec__23419,(0),null);
var lon = cljs.core.nth.call(null,vec__23419,(1),null);
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__23422_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__23422_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__23423_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__23423_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__23424_SHARP_){
return p1__23424_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__23425,ops){
var vec__23429 = p__23425;
var id1 = cljs.core.nth.call(null,vec__23429,(0),null);
var id2 = cljs.core.nth.call(null,vec__23429,(1),null);
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
var args23433 = [];
var len__21501__auto___23436 = arguments.length;
var i__21502__auto___23437 = (0);
while(true){
if((i__21502__auto___23437 < len__21501__auto___23436)){
args23433.push((arguments[i__21502__auto___23437]));

var G__23438 = (i__21502__auto___23437 + (1));
i__21502__auto___23437 = G__23438;
continue;
} else {
}
break;
}

var G__23435 = args23433.length;
switch (G__23435) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23433.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23432_SHARP_){
return chart.client.select_airport.call(null,sel,p1__23432_SHARP_);
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
var seq__23496 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23497 = null;
var count__23498 = (0);
var i__23499 = (0);
while(true){
if((i__23499 < count__23498)){
var map__23500 = cljs.core._nth.call(null,chunk__23497,i__23499);
var map__23500__$1 = ((((!((map__23500 == null)))?((((map__23500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500):map__23500);
var ins = map__23500__$1;
var instruct = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23502_23552 = cljs.core._EQ_;
var expr__23503_23553 = instruct;
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23503_23553))){
var map__23505_23554 = ins;
var map__23505_23555__$1 = ((((!((map__23505_23554 == null)))?((((map__23505_23554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23505_23554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505_23554):map__23505_23554);
var id_23556 = cljs.core.get.call(null,map__23505_23555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23557 = cljs.core.get.call(null,map__23505_23555__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23556,vehicle_23557);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23503_23553))){
var map__23507_23558 = ins;
var map__23507_23559__$1 = ((((!((map__23507_23558 == null)))?((((map__23507_23558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23507_23558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23507_23558):map__23507_23558);
var id_23560 = cljs.core.get.call(null,map__23507_23559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23560);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23503_23553))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23503_23553))){
var map__23509_23561 = ins;
var map__23509_23562__$1 = ((((!((map__23509_23561 == null)))?((((map__23509_23561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509_23561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23509_23561):map__23509_23561);
var id_23563 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23564 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23565 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23566 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23567 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23568 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23569 = cljs.core.get.call(null,map__23509_23562__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23563)){
chart.client.popup.call(null,id_23563,html_23566,time_23567);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_23568;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_23569;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_23564;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_23565;
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
chart.client.popup.call(null,lat_23564,lon_23565,html_23566,time_23567,width_23568,height_23569);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_23564;
if(cljs.core.truth_(and__20381__auto__)){
return lon_23565;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23564,lon_23565,html_23566,time_23567);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23503_23553))){
var map__23511_23570 = ins;
var map__23511_23571__$1 = ((((!((map__23511_23570 == null)))?((((map__23511_23570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23511_23570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23511_23570):map__23511_23570);
var id_23572 = cljs.core.get.call(null,map__23511_23571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23573 = cljs.core.get.call(null,map__23511_23571__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23574 = cljs.core.get.call(null,map__23511_23571__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23575 = cljs.core.get.call(null,map__23511_23571__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23572,points_23573,options_23574,time_23575);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23503_23553))){
var map__23513_23576 = ins;
var map__23513_23577__$1 = ((((!((map__23513_23576 == null)))?((((map__23513_23576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23513_23576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23513_23576):map__23513_23576);
var coord_23578 = cljs.core.get.call(null,map__23513_23577__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23579 = cljs.core.get.call(null,map__23513_23577__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23580 = cljs.core.get.call(null,map__23513_23577__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23578,zoom_23579,lock_23580);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23503_23553))){
var map__23515_23581 = ins;
var map__23515_23582__$1 = ((((!((map__23515_23581 == null)))?((((map__23515_23581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23515_23581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23515_23581):map__23515_23581);
var iname_23583 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23584 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23585 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23586 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23587 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23588 = cljs.core.get.call(null,map__23515_23582__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23583,tip_23584,lat_23585,lon_23586,feature_23587,url_ico_23588);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23503_23553))){
var map__23517_23589 = ins;
var map__23517_23590__$1 = ((((!((map__23517_23589 == null)))?((((map__23517_23589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23517_23589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23517_23589):map__23517_23589);
var iname_23591 = cljs.core.get.call(null,map__23517_23590__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23591);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23503_23553))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23503_23553))){
var map__23519_23592 = ins;
var map__23519_23593__$1 = ((((!((map__23519_23592 == null)))?((((map__23519_23592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23519_23592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23519_23592):map__23519_23592);
var ids_23594 = cljs.core.get.call(null,map__23519_23593__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23595 = cljs.core.get.call(null,map__23519_23593__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23594,options_23595);
} else {
if(cljs.core.truth_(pred__23502_23552.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23503_23553))){
var map__23521_23596 = ins;
var map__23521_23597__$1 = ((((!((map__23521_23596 == null)))?((((map__23521_23596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23521_23596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521_23596):map__23521_23596);
var question_23598 = cljs.core.get.call(null,map__23521_23597__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23599 = cljs.core.get.call(null,map__23521_23597__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23523_23600 = cljs.core._EQ_;
var expr__23524_23601 = question_23598;
if(cljs.core.truth_(pred__23523_23600.call(null,"city",expr__23524_23601))){
chart.client.select_city.call(null,param_23599);
} else {
if(cljs.core.truth_(pred__23523_23600.call(null,"airport",expr__23524_23601))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23524_23601)].join('')));
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

var G__23602 = seq__23496;
var G__23603 = chunk__23497;
var G__23604 = count__23498;
var G__23605 = (i__23499 + (1));
seq__23496 = G__23602;
chunk__23497 = G__23603;
count__23498 = G__23604;
i__23499 = G__23605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23496);
if(temp__4657__auto__){
var seq__23496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23496__$1)){
var c__21207__auto__ = cljs.core.chunk_first.call(null,seq__23496__$1);
var G__23606 = cljs.core.chunk_rest.call(null,seq__23496__$1);
var G__23607 = c__21207__auto__;
var G__23608 = cljs.core.count.call(null,c__21207__auto__);
var G__23609 = (0);
seq__23496 = G__23606;
chunk__23497 = G__23607;
count__23498 = G__23608;
i__23499 = G__23609;
continue;
} else {
var map__23526 = cljs.core.first.call(null,seq__23496__$1);
var map__23526__$1 = ((((!((map__23526 == null)))?((((map__23526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23526):map__23526);
var ins = map__23526__$1;
var instruct = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23528_23610 = cljs.core._EQ_;
var expr__23529_23611 = instruct;
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23529_23611))){
var map__23531_23612 = ins;
var map__23531_23613__$1 = ((((!((map__23531_23612 == null)))?((((map__23531_23612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531_23612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23531_23612):map__23531_23612);
var id_23614 = cljs.core.get.call(null,map__23531_23613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23615 = cljs.core.get.call(null,map__23531_23613__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23614,vehicle_23615);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23529_23611))){
var map__23533_23616 = ins;
var map__23533_23617__$1 = ((((!((map__23533_23616 == null)))?((((map__23533_23616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23533_23616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23533_23616):map__23533_23616);
var id_23618 = cljs.core.get.call(null,map__23533_23617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23618);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23529_23611))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23529_23611))){
var map__23535_23619 = ins;
var map__23535_23620__$1 = ((((!((map__23535_23619 == null)))?((((map__23535_23619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23535_23619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535_23619):map__23535_23619);
var id_23621 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23622 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23623 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23624 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23625 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23626 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23627 = cljs.core.get.call(null,map__23535_23620__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23621)){
chart.client.popup.call(null,id_23621,html_23624,time_23625);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_23626;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_23627;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_23622;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_23623;
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
chart.client.popup.call(null,lat_23622,lon_23623,html_23624,time_23625,width_23626,height_23627);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_23622;
if(cljs.core.truth_(and__20381__auto__)){
return lon_23623;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_23622,lon_23623,html_23624,time_23625);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23529_23611))){
var map__23537_23628 = ins;
var map__23537_23629__$1 = ((((!((map__23537_23628 == null)))?((((map__23537_23628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23537_23628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23537_23628):map__23537_23628);
var id_23630 = cljs.core.get.call(null,map__23537_23629__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23631 = cljs.core.get.call(null,map__23537_23629__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23632 = cljs.core.get.call(null,map__23537_23629__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23633 = cljs.core.get.call(null,map__23537_23629__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23630,points_23631,options_23632,time_23633);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23529_23611))){
var map__23539_23634 = ins;
var map__23539_23635__$1 = ((((!((map__23539_23634 == null)))?((((map__23539_23634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23539_23634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23539_23634):map__23539_23634);
var coord_23636 = cljs.core.get.call(null,map__23539_23635__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23637 = cljs.core.get.call(null,map__23539_23635__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23638 = cljs.core.get.call(null,map__23539_23635__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23636,zoom_23637,lock_23638);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23529_23611))){
var map__23541_23639 = ins;
var map__23541_23640__$1 = ((((!((map__23541_23639 == null)))?((((map__23541_23639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23541_23639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23541_23639):map__23541_23639);
var iname_23641 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23642 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23643 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23644 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23645 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23646 = cljs.core.get.call(null,map__23541_23640__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23641,tip_23642,lat_23643,lon_23644,feature_23645,url_ico_23646);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23529_23611))){
var map__23543_23647 = ins;
var map__23543_23648__$1 = ((((!((map__23543_23647 == null)))?((((map__23543_23647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23543_23647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23543_23647):map__23543_23647);
var iname_23649 = cljs.core.get.call(null,map__23543_23648__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23649);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23529_23611))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23529_23611))){
var map__23545_23650 = ins;
var map__23545_23651__$1 = ((((!((map__23545_23650 == null)))?((((map__23545_23650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23545_23650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23545_23650):map__23545_23650);
var ids_23652 = cljs.core.get.call(null,map__23545_23651__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23653 = cljs.core.get.call(null,map__23545_23651__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23652,options_23653);
} else {
if(cljs.core.truth_(pred__23528_23610.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23529_23611))){
var map__23547_23654 = ins;
var map__23547_23655__$1 = ((((!((map__23547_23654 == null)))?((((map__23547_23654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23547_23654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23547_23654):map__23547_23654);
var question_23656 = cljs.core.get.call(null,map__23547_23655__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23657 = cljs.core.get.call(null,map__23547_23655__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23549_23658 = cljs.core._EQ_;
var expr__23550_23659 = question_23656;
if(cljs.core.truth_(pred__23549_23658.call(null,"city",expr__23550_23659))){
chart.client.select_city.call(null,param_23657);
} else {
if(cljs.core.truth_(pred__23549_23658.call(null,"airport",expr__23550_23659))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23550_23659)].join('')));
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

var G__23660 = cljs.core.next.call(null,seq__23496__$1);
var G__23661 = null;
var G__23662 = (0);
var G__23663 = (0);
seq__23496 = G__23660;
chunk__23497 = G__23661;
count__23498 = G__23662;
i__23499 = G__23663;
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
var args23665 = [];
var len__21501__auto___23668 = arguments.length;
var i__21502__auto___23669 = (0);
while(true){
if((i__21502__auto___23669 < len__21501__auto___23668)){
args23665.push((arguments[i__21502__auto___23669]));

var G__23670 = (i__21502__auto___23669 + (1));
i__21502__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23667 = args23665.length;
switch (G__23667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23665.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23664_SHARP_){
return chart.client.move_to.call(null,sel,p1__23664_SHARP_);
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23672_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__23672_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23673_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__23673_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23674_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__23674_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23675_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__23675_SHARP_);
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
var args23686 = [];
var len__21501__auto___23689 = arguments.length;
var i__21502__auto___23690 = (0);
while(true){
if((i__21502__auto___23690 < len__21501__auto___23689)){
args23686.push((arguments[i__21502__auto___23690]));

var G__23691 = (i__21502__auto___23690 + (1));
i__21502__auto___23690 = G__23691;
continue;
} else {
}
break;
}

var G__23688 = args23686.length;
switch (G__23688) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23686.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__23683_SHARP_){
return chart.client.question.call(null,sel,p1__23683_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__23684_SHARP_){
return chart.client.question.call(null,pred,sel,p1__23684_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__23685_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__23685_SHARP_);
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
var pred__23696_23699 = cljs.core._EQ_;
var expr__23697_23700 = cmd;
if(cljs.core.truth_(pred__23696_23699.call(null,"commands",expr__23697_23700))){
} else {
if(cljs.core.truth_(pred__23696_23699.call(null,"watch-visible",expr__23697_23700))){
var bnd_23701 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_23702 = [cljs.core.str("?n="),cljs.core.str(bnd_23701.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_23701.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_23701.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_23701.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_23702)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__23696_23699.call(null,"move-to",expr__23697_23700))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__23696_23699.call(null,"schedule",expr__23697_23700))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__23696_23699.call(null,"question",expr__23697_23700))){
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
}catch (e23704){if((e23704 instanceof Error)){
var e_23705 = e23704;
cljs.core.println.call(null,e_23705);
} else {
throw e23704;

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