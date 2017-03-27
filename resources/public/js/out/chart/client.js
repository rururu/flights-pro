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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(2222),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__23302 = response;
var map__23302__$1 = ((((!((map__23302 == null)))?((((map__23302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23302):map__23302);
var status = cljs.core.get.call(null,map__23302__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23302__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_23310 = cljs.core.deref.call(null,vmp);
var mrk_23311 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23310);
var vec__23307_23312 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23310);
var lat_23313 = cljs.core.nth.call(null,vec__23307_23312,(0),null);
var lon_23314 = cljs.core.nth.call(null,vec__23307_23312,(1),null);
var pos_23315 = (new L.LatLng(lat_23313,lon_23314));
mrk_23311.setLatLng(pos_23315);

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
var seq__23320_23324 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23321_23325 = null;
var count__23322_23326 = (0);
var i__23323_23327 = (0);
while(true){
if((i__23323_23327 < count__23322_23326)){
var veh_23328 = cljs.core._nth.call(null,chunk__23321_23325,i__23323_23327);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23328)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23328)));

var G__23329 = seq__23320_23324;
var G__23330 = chunk__23321_23325;
var G__23331 = count__23322_23326;
var G__23332 = (i__23323_23327 + (1));
seq__23320_23324 = G__23329;
chunk__23321_23325 = G__23330;
count__23322_23326 = G__23331;
i__23323_23327 = G__23332;
continue;
} else {
var temp__4657__auto___23333 = cljs.core.seq.call(null,seq__23320_23324);
if(temp__4657__auto___23333){
var seq__23320_23334__$1 = temp__4657__auto___23333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23320_23334__$1)){
var c__21173__auto___23335 = cljs.core.chunk_first.call(null,seq__23320_23334__$1);
var G__23336 = cljs.core.chunk_rest.call(null,seq__23320_23334__$1);
var G__23337 = c__21173__auto___23335;
var G__23338 = cljs.core.count.call(null,c__21173__auto___23335);
var G__23339 = (0);
seq__23320_23324 = G__23336;
chunk__23321_23325 = G__23337;
count__23322_23326 = G__23338;
i__23323_23327 = G__23339;
continue;
} else {
var veh_23340 = cljs.core.first.call(null,seq__23320_23334__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23340)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23340)));

var G__23341 = cljs.core.next.call(null,seq__23320_23334__$1);
var G__23342 = null;
var G__23343 = (0);
var G__23344 = (0);
seq__23320_23324 = G__23341;
chunk__23321_23325 = G__23342;
count__23322_23326 = G__23343;
i__23323_23327 = G__23344;
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

var vec__23349 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23349,(0),null);
var lon = cljs.core.nth.call(null,vec__23349,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__23349,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23349,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23345_SHARP_))),e.target);
});})(vec__23349,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23349,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20359__auto__ = url_ico;
if(cljs.core.truth_(or__20359__auto__)){
return or__20359__auto__;
} else {
var or__20359__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20359__auto____$1)){
return or__20359__auto____$1;
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
var seq__23356_23360 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__23357_23361 = null;
var count__23358_23362 = (0);
var i__23359_23363 = (0);
while(true){
if((i__23359_23363 < count__23358_23362)){
var mrk_23364 = cljs.core._nth.call(null,chunk__23357_23361,i__23359_23363);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23364);

var G__23365 = seq__23356_23360;
var G__23366 = chunk__23357_23361;
var G__23367 = count__23358_23362;
var G__23368 = (i__23359_23363 + (1));
seq__23356_23360 = G__23365;
chunk__23357_23361 = G__23366;
count__23358_23362 = G__23367;
i__23359_23363 = G__23368;
continue;
} else {
var temp__4657__auto___23369 = cljs.core.seq.call(null,seq__23356_23360);
if(temp__4657__auto___23369){
var seq__23356_23370__$1 = temp__4657__auto___23369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23356_23370__$1)){
var c__21173__auto___23371 = cljs.core.chunk_first.call(null,seq__23356_23370__$1);
var G__23372 = cljs.core.chunk_rest.call(null,seq__23356_23370__$1);
var G__23373 = c__21173__auto___23371;
var G__23374 = cljs.core.count.call(null,c__21173__auto___23371);
var G__23375 = (0);
seq__23356_23360 = G__23372;
chunk__23357_23361 = G__23373;
count__23358_23362 = G__23374;
i__23359_23363 = G__23375;
continue;
} else {
var mrk_23376 = cljs.core.first.call(null,seq__23356_23370__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23376);

var G__23377 = cljs.core.next.call(null,seq__23356_23370__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23356_23360 = G__23377;
chunk__23357_23361 = G__23378;
count__23358_23362 = G__23379;
i__23359_23363 = G__23380;
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
var args23381 = [];
var len__21467__auto___23387 = arguments.length;
var i__21468__auto___23388 = (0);
while(true){
if((i__21468__auto___23388 < len__21467__auto___23387)){
args23381.push((arguments[i__21468__auto___23388]));

var G__23389 = (i__21468__auto___23388 + (1));
i__21468__auto___23388 = G__23389;
continue;
} else {
}
break;
}

var G__23383 = args23381.length;
switch (G__23383) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23381.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23384 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23384,(0),null);
var lon = cljs.core.nth.call(null,vec__23384,(1),null);
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
return (function (p1__23391_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__23391_SHARP_),cljs.core.second.call(null,p1__23391_SHARP_)));
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
var vec__23395 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__23395,(0),null);
var s = cljs.core.nth.call(null,vec__23395,(1),null);
var w = cljs.core.nth.call(null,vec__23395,(2),null);
var e = cljs.core.nth.call(null,vec__23395,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__23395,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__23395,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23398,zoom,lock){
var vec__23402 = p__23398;
var lat = cljs.core.nth.call(null,vec__23402,(0),null);
var lon = cljs.core.nth.call(null,vec__23402,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20359__auto__ = zoom;
if(cljs.core.truth_(or__20359__auto__)){
return or__20359__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__23405_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__23405_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__23406_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__23406_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__23407_SHARP_){
return p1__23407_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__23408,ops){
var vec__23412 = p__23408;
var id1 = cljs.core.nth.call(null,vec__23412,(0),null);
var id2 = cljs.core.nth.call(null,vec__23412,(1),null);
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
var args23416 = [];
var len__21467__auto___23419 = arguments.length;
var i__21468__auto___23420 = (0);
while(true){
if((i__21468__auto___23420 < len__21467__auto___23419)){
args23416.push((arguments[i__21468__auto___23420]));

var G__23421 = (i__21468__auto___23420 + (1));
i__21468__auto___23420 = G__23421;
continue;
} else {
}
break;
}

var G__23418 = args23416.length;
switch (G__23418) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23416.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23415_SHARP_){
return chart.client.select_airport.call(null,sel,p1__23415_SHARP_);
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

chart.client.select_global_city = (function chart$client$select_global_city(param){
var temp__4655__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto__)){
var cns = temp__4655__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__4655__auto__){
return (function chart$client$select_global_city_$_handler1(sel){
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
return (function chart$client$select_global_city_$_handler20(sel){
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
var seq__23479 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23480 = null;
var count__23481 = (0);
var i__23482 = (0);
while(true){
if((i__23482 < count__23481)){
var map__23483 = cljs.core._nth.call(null,chunk__23480,i__23482);
var map__23483__$1 = ((((!((map__23483 == null)))?((((map__23483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23483):map__23483);
var ins = map__23483__$1;
var instruct = cljs.core.get.call(null,map__23483__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23485_23535 = cljs.core._EQ_;
var expr__23486_23536 = instruct;
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23486_23536))){
var map__23488_23537 = ins;
var map__23488_23538__$1 = ((((!((map__23488_23537 == null)))?((((map__23488_23537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23488_23537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23488_23537):map__23488_23537);
var id_23539 = cljs.core.get.call(null,map__23488_23538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23540 = cljs.core.get.call(null,map__23488_23538__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23539,vehicle_23540);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23486_23536))){
var map__23490_23541 = ins;
var map__23490_23542__$1 = ((((!((map__23490_23541 == null)))?((((map__23490_23541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23490_23541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23490_23541):map__23490_23541);
var id_23543 = cljs.core.get.call(null,map__23490_23542__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23543);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23486_23536))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23486_23536))){
var map__23492_23544 = ins;
var map__23492_23545__$1 = ((((!((map__23492_23544 == null)))?((((map__23492_23544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23492_23544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492_23544):map__23492_23544);
var id_23546 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23547 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23548 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23549 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23550 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23551 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23552 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23546)){
chart.client.popup.call(null,id_23546,html_23549,time_23550);
} else {
if(cljs.core.truth_((function (){var and__20347__auto__ = width_23551;
if(cljs.core.truth_(and__20347__auto__)){
var and__20347__auto____$1 = height_23552;
if(cljs.core.truth_(and__20347__auto____$1)){
var and__20347__auto____$2 = lat_23547;
if(cljs.core.truth_(and__20347__auto____$2)){
return lon_23548;
} else {
return and__20347__auto____$2;
}
} else {
return and__20347__auto____$1;
}
} else {
return and__20347__auto__;
}
})())){
chart.client.popup.call(null,lat_23547,lon_23548,html_23549,time_23550,width_23551,height_23552);
} else {
if(cljs.core.truth_((function (){var and__20347__auto__ = lat_23547;
if(cljs.core.truth_(and__20347__auto__)){
return lon_23548;
} else {
return and__20347__auto__;
}
})())){
chart.client.popup.call(null,lat_23547,lon_23548,html_23549,time_23550);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23486_23536))){
var map__23494_23553 = ins;
var map__23494_23554__$1 = ((((!((map__23494_23553 == null)))?((((map__23494_23553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23494_23553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23494_23553):map__23494_23553);
var id_23555 = cljs.core.get.call(null,map__23494_23554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23556 = cljs.core.get.call(null,map__23494_23554__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23557 = cljs.core.get.call(null,map__23494_23554__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23558 = cljs.core.get.call(null,map__23494_23554__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23555,points_23556,options_23557,time_23558);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23486_23536))){
var map__23496_23559 = ins;
var map__23496_23560__$1 = ((((!((map__23496_23559 == null)))?((((map__23496_23559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23496_23559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23496_23559):map__23496_23559);
var coord_23561 = cljs.core.get.call(null,map__23496_23560__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23562 = cljs.core.get.call(null,map__23496_23560__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23563 = cljs.core.get.call(null,map__23496_23560__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23561,zoom_23562,lock_23563);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23486_23536))){
var map__23498_23564 = ins;
var map__23498_23565__$1 = ((((!((map__23498_23564 == null)))?((((map__23498_23564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23498_23564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498_23564):map__23498_23564);
var iname_23566 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23567 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23568 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23569 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23570 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23571 = cljs.core.get.call(null,map__23498_23565__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23566,tip_23567,lat_23568,lon_23569,feature_23570,url_ico_23571);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23486_23536))){
var map__23500_23572 = ins;
var map__23500_23573__$1 = ((((!((map__23500_23572 == null)))?((((map__23500_23572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23500_23572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500_23572):map__23500_23572);
var iname_23574 = cljs.core.get.call(null,map__23500_23573__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23574);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23486_23536))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23486_23536))){
var map__23502_23575 = ins;
var map__23502_23576__$1 = ((((!((map__23502_23575 == null)))?((((map__23502_23575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23502_23575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23502_23575):map__23502_23575);
var ids_23577 = cljs.core.get.call(null,map__23502_23576__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23578 = cljs.core.get.call(null,map__23502_23576__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23577,options_23578);
} else {
if(cljs.core.truth_(pred__23485_23535.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23486_23536))){
var map__23504_23579 = ins;
var map__23504_23580__$1 = ((((!((map__23504_23579 == null)))?((((map__23504_23579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23504_23579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23504_23579):map__23504_23579);
var question_23581 = cljs.core.get.call(null,map__23504_23580__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23582 = cljs.core.get.call(null,map__23504_23580__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23506_23583 = cljs.core._EQ_;
var expr__23507_23584 = question_23581;
if(cljs.core.truth_(pred__23506_23583.call(null,"global city",expr__23507_23584))){
chart.client.select_global_city.call(null,param_23582);
} else {
if(cljs.core.truth_(pred__23506_23583.call(null,"airport",expr__23507_23584))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23507_23584)].join('')));
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

var G__23585 = seq__23479;
var G__23586 = chunk__23480;
var G__23587 = count__23481;
var G__23588 = (i__23482 + (1));
seq__23479 = G__23585;
chunk__23480 = G__23586;
count__23481 = G__23587;
i__23482 = G__23588;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23479);
if(temp__4657__auto__){
var seq__23479__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23479__$1)){
var c__21173__auto__ = cljs.core.chunk_first.call(null,seq__23479__$1);
var G__23589 = cljs.core.chunk_rest.call(null,seq__23479__$1);
var G__23590 = c__21173__auto__;
var G__23591 = cljs.core.count.call(null,c__21173__auto__);
var G__23592 = (0);
seq__23479 = G__23589;
chunk__23480 = G__23590;
count__23481 = G__23591;
i__23482 = G__23592;
continue;
} else {
var map__23509 = cljs.core.first.call(null,seq__23479__$1);
var map__23509__$1 = ((((!((map__23509 == null)))?((((map__23509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23509):map__23509);
var ins = map__23509__$1;
var instruct = cljs.core.get.call(null,map__23509__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23511_23593 = cljs.core._EQ_;
var expr__23512_23594 = instruct;
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23512_23594))){
var map__23514_23595 = ins;
var map__23514_23596__$1 = ((((!((map__23514_23595 == null)))?((((map__23514_23595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23514_23595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23514_23595):map__23514_23595);
var id_23597 = cljs.core.get.call(null,map__23514_23596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23598 = cljs.core.get.call(null,map__23514_23596__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23597,vehicle_23598);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23512_23594))){
var map__23516_23599 = ins;
var map__23516_23600__$1 = ((((!((map__23516_23599 == null)))?((((map__23516_23599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23516_23599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23516_23599):map__23516_23599);
var id_23601 = cljs.core.get.call(null,map__23516_23600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23601);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23512_23594))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23512_23594))){
var map__23518_23602 = ins;
var map__23518_23603__$1 = ((((!((map__23518_23602 == null)))?((((map__23518_23602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23518_23602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518_23602):map__23518_23602);
var id_23604 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23605 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23606 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23607 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23608 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23609 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23610 = cljs.core.get.call(null,map__23518_23603__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23604)){
chart.client.popup.call(null,id_23604,html_23607,time_23608);
} else {
if(cljs.core.truth_((function (){var and__20347__auto__ = width_23609;
if(cljs.core.truth_(and__20347__auto__)){
var and__20347__auto____$1 = height_23610;
if(cljs.core.truth_(and__20347__auto____$1)){
var and__20347__auto____$2 = lat_23605;
if(cljs.core.truth_(and__20347__auto____$2)){
return lon_23606;
} else {
return and__20347__auto____$2;
}
} else {
return and__20347__auto____$1;
}
} else {
return and__20347__auto__;
}
})())){
chart.client.popup.call(null,lat_23605,lon_23606,html_23607,time_23608,width_23609,height_23610);
} else {
if(cljs.core.truth_((function (){var and__20347__auto__ = lat_23605;
if(cljs.core.truth_(and__20347__auto__)){
return lon_23606;
} else {
return and__20347__auto__;
}
})())){
chart.client.popup.call(null,lat_23605,lon_23606,html_23607,time_23608);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23512_23594))){
var map__23520_23611 = ins;
var map__23520_23612__$1 = ((((!((map__23520_23611 == null)))?((((map__23520_23611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23520_23611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520_23611):map__23520_23611);
var id_23613 = cljs.core.get.call(null,map__23520_23612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23614 = cljs.core.get.call(null,map__23520_23612__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23615 = cljs.core.get.call(null,map__23520_23612__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23616 = cljs.core.get.call(null,map__23520_23612__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23613,points_23614,options_23615,time_23616);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23512_23594))){
var map__23522_23617 = ins;
var map__23522_23618__$1 = ((((!((map__23522_23617 == null)))?((((map__23522_23617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23522_23617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23522_23617):map__23522_23617);
var coord_23619 = cljs.core.get.call(null,map__23522_23618__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_23620 = cljs.core.get.call(null,map__23522_23618__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_23621 = cljs.core.get.call(null,map__23522_23618__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_23619,zoom_23620,lock_23621);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23512_23594))){
var map__23524_23622 = ins;
var map__23524_23623__$1 = ((((!((map__23524_23622 == null)))?((((map__23524_23622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23524_23622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23524_23622):map__23524_23622);
var iname_23624 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23625 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23626 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23627 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23628 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_23629 = cljs.core.get.call(null,map__23524_23623__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_23624,tip_23625,lat_23626,lon_23627,feature_23628,url_ico_23629);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__23512_23594))){
var map__23526_23630 = ins;
var map__23526_23631__$1 = ((((!((map__23526_23630 == null)))?((((map__23526_23630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23526_23630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23526_23630):map__23526_23630);
var iname_23632 = cljs.core.get.call(null,map__23526_23631__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_23632);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23512_23594))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23512_23594))){
var map__23528_23633 = ins;
var map__23528_23634__$1 = ((((!((map__23528_23633 == null)))?((((map__23528_23633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23528_23633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528_23633):map__23528_23633);
var ids_23635 = cljs.core.get.call(null,map__23528_23634__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23636 = cljs.core.get.call(null,map__23528_23634__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23635,options_23636);
} else {
if(cljs.core.truth_(pred__23511_23593.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__23512_23594))){
var map__23530_23637 = ins;
var map__23530_23638__$1 = ((((!((map__23530_23637 == null)))?((((map__23530_23637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23530_23637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23530_23637):map__23530_23637);
var question_23639 = cljs.core.get.call(null,map__23530_23638__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_23640 = cljs.core.get.call(null,map__23530_23638__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__23532_23641 = cljs.core._EQ_;
var expr__23533_23642 = question_23639;
if(cljs.core.truth_(pred__23532_23641.call(null,"global city",expr__23533_23642))){
chart.client.select_global_city.call(null,param_23640);
} else {
if(cljs.core.truth_(pred__23532_23641.call(null,"airport",expr__23533_23642))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23533_23642)].join('')));
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

var G__23643 = cljs.core.next.call(null,seq__23479__$1);
var G__23644 = null;
var G__23645 = (0);
var G__23646 = (0);
seq__23479 = G__23643;
chunk__23480 = G__23644;
count__23481 = G__23645;
i__23482 = G__23646;
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
var args23648 = [];
var len__21467__auto___23651 = arguments.length;
var i__21468__auto___23652 = (0);
while(true){
if((i__21468__auto___23652 < len__21467__auto___23651)){
args23648.push((arguments[i__21468__auto___23652]));

var G__23653 = (i__21468__auto___23652 + (1));
i__21468__auto___23652 = G__23653;
continue;
} else {
}
break;
}

var G__23650 = args23648.length;
switch (G__23650) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23648.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23647_SHARP_){
return chart.client.move_to.call(null,sel,p1__23647_SHARP_);
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
var args23659 = [];
var len__21467__auto___23662 = arguments.length;
var i__21468__auto___23663 = (0);
while(true){
if((i__21468__auto___23663 < len__21467__auto___23662)){
args23659.push((arguments[i__21468__auto___23663]));

var G__23664 = (i__21468__auto___23663 + (1));
i__21468__auto___23663 = G__23664;
continue;
} else {
}
break;
}

var G__23661 = args23659.length;
switch (G__23661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23659.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23655_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__23655_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23656_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__23656_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__23657_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__23657_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__23658_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__23658_SHARP_);
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
var args23669 = [];
var len__21467__auto___23672 = arguments.length;
var i__21468__auto___23673 = (0);
while(true){
if((i__21468__auto___23673 < len__21467__auto___23672)){
args23669.push((arguments[i__21468__auto___23673]));

var G__23674 = (i__21468__auto___23673 + (1));
i__21468__auto___23673 = G__23674;
continue;
} else {
}
break;
}

var G__23671 = args23669.length;
switch (G__23671) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23669.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__23666_SHARP_){
return chart.client.question.call(null,sel,p1__23666_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__23667_SHARP_){
return chart.client.question.call(null,pred,sel,p1__23667_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__23668_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__23668_SHARP_);
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
var pred__23679_23682 = cljs.core._EQ_;
var expr__23680_23683 = cmd;
if(cljs.core.truth_(pred__23679_23682.call(null,"commands",expr__23680_23683))){
} else {
if(cljs.core.truth_(pred__23679_23682.call(null,"watch-visible",expr__23680_23683))){
var bnd_23684 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_23685 = [cljs.core.str("?n="),cljs.core.str(bnd_23684.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_23684.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_23684.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_23684.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_23685)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__23679_23682.call(null,"move-to",expr__23680_23683))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__23679_23682.call(null,"schedule",expr__23680_23683))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__23679_23682.call(null,"question",expr__23680_23683))){
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
}catch (e23687){if((e23687 instanceof Error)){
var e_23688 = e23687;
cljs.core.println.call(null,e_23688);
} else {
throw e23687;

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