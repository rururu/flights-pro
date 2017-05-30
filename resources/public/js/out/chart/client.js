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
var map__26456 = response;
var map__26456__$1 = ((((!((map__26456 == null)))?((((map__26456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26456):map__26456);
var status = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_26464 = cljs.core.deref.call(null,vmp);
var mrk_26465 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26464);
var vec__26461_26466 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26464);
var lat_26467 = cljs.core.nth.call(null,vec__26461_26466,(0),null);
var lon_26468 = cljs.core.nth.call(null,vec__26461_26466,(1),null);
var pos_26469 = (new L.LatLng(lat_26467,lon_26468));
mrk_26465.setLatLng(pos_26469);

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
var seq__26474_26478 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__26475_26479 = null;
var count__26476_26480 = (0);
var i__26477_26481 = (0);
while(true){
if((i__26477_26481 < count__26476_26480)){
var veh_26482 = cljs.core._nth.call(null,chunk__26475_26479,i__26477_26481);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26482)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26482)));

var G__26483 = seq__26474_26478;
var G__26484 = chunk__26475_26479;
var G__26485 = count__26476_26480;
var G__26486 = (i__26477_26481 + (1));
seq__26474_26478 = G__26483;
chunk__26475_26479 = G__26484;
count__26476_26480 = G__26485;
i__26477_26481 = G__26486;
continue;
} else {
var temp__4657__auto___26487 = cljs.core.seq.call(null,seq__26474_26478);
if(temp__4657__auto___26487){
var seq__26474_26488__$1 = temp__4657__auto___26487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26474_26488__$1)){
var c__23456__auto___26489 = cljs.core.chunk_first.call(null,seq__26474_26488__$1);
var G__26490 = cljs.core.chunk_rest.call(null,seq__26474_26488__$1);
var G__26491 = c__23456__auto___26489;
var G__26492 = cljs.core.count.call(null,c__23456__auto___26489);
var G__26493 = (0);
seq__26474_26478 = G__26490;
chunk__26475_26479 = G__26491;
count__26476_26480 = G__26492;
i__26477_26481 = G__26493;
continue;
} else {
var veh_26494 = cljs.core.first.call(null,seq__26474_26488__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26494)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26494)));

var G__26495 = cljs.core.next.call(null,seq__26474_26488__$1);
var G__26496 = null;
var G__26497 = (0);
var G__26498 = (0);
seq__26474_26478 = G__26495;
chunk__26475_26479 = G__26496;
count__26476_26480 = G__26497;
i__26477_26481 = G__26498;
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

var vec__26503 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__26503,(0),null);
var lon = cljs.core.nth.call(null,vec__26503,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__26503,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__26503,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__26499_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__26499_SHARP_))),e.target);
});})(vec__26503,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__26503,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__22637__auto__ = url_ico;
if(cljs.core.truth_(or__22637__auto__)){
return or__22637__auto__;
} else {
var or__22637__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__22637__auto____$1)){
return or__22637__auto____$1;
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
var seq__26510_26514 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__26511_26515 = null;
var count__26512_26516 = (0);
var i__26513_26517 = (0);
while(true){
if((i__26513_26517 < count__26512_26516)){
var mrk_26518 = cljs.core._nth.call(null,chunk__26511_26515,i__26513_26517);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26518);

var G__26519 = seq__26510_26514;
var G__26520 = chunk__26511_26515;
var G__26521 = count__26512_26516;
var G__26522 = (i__26513_26517 + (1));
seq__26510_26514 = G__26519;
chunk__26511_26515 = G__26520;
count__26512_26516 = G__26521;
i__26513_26517 = G__26522;
continue;
} else {
var temp__4657__auto___26523 = cljs.core.seq.call(null,seq__26510_26514);
if(temp__4657__auto___26523){
var seq__26510_26524__$1 = temp__4657__auto___26523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26510_26524__$1)){
var c__23456__auto___26525 = cljs.core.chunk_first.call(null,seq__26510_26524__$1);
var G__26526 = cljs.core.chunk_rest.call(null,seq__26510_26524__$1);
var G__26527 = c__23456__auto___26525;
var G__26528 = cljs.core.count.call(null,c__23456__auto___26525);
var G__26529 = (0);
seq__26510_26514 = G__26526;
chunk__26511_26515 = G__26527;
count__26512_26516 = G__26528;
i__26513_26517 = G__26529;
continue;
} else {
var mrk_26530 = cljs.core.first.call(null,seq__26510_26524__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26530);

var G__26531 = cljs.core.next.call(null,seq__26510_26524__$1);
var G__26532 = null;
var G__26533 = (0);
var G__26534 = (0);
seq__26510_26514 = G__26531;
chunk__26511_26515 = G__26532;
count__26512_26516 = G__26533;
i__26513_26517 = G__26534;
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
var args26535 = [];
var len__23750__auto___26541 = arguments.length;
var i__23751__auto___26542 = (0);
while(true){
if((i__23751__auto___26542 < len__23750__auto___26541)){
args26535.push((arguments[i__23751__auto___26542]));

var G__26543 = (i__23751__auto___26542 + (1));
i__23751__auto___26542 = G__26543;
continue;
} else {
}
break;
}

var G__26537 = args26535.length;
switch (G__26537) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26535.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__26538 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__26538,(0),null);
var lon = cljs.core.nth.call(null,vec__26538,(1),null);
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
return (function (p1__26545_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__26545_SHARP_),cljs.core.second.call(null,p1__26545_SHARP_)));
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
var vec__26549 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__26549,(0),null);
var s = cljs.core.nth.call(null,vec__26549,(1),null);
var w = cljs.core.nth.call(null,vec__26549,(2),null);
var e = cljs.core.nth.call(null,vec__26549,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__26549,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__26549,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__26552,zoom,lock){
var vec__26556 = p__26552;
var lat = cljs.core.nth.call(null,vec__26556,(0),null);
var lon = cljs.core.nth.call(null,vec__26556,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__22637__auto__ = zoom;
if(cljs.core.truth_(or__22637__auto__)){
return or__22637__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__26559_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__26559_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__26560_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26560_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__26561_SHARP_){
return p1__26561_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__26562,ops){
var vec__26566 = p__26562;
var id1 = cljs.core.nth.call(null,vec__26566,(0),null);
var id2 = cljs.core.nth.call(null,vec__26566,(1),null);
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
var args26570 = [];
var len__23750__auto___26573 = arguments.length;
var i__23751__auto___26574 = (0);
while(true){
if((i__23751__auto___26574 < len__23750__auto___26573)){
args26570.push((arguments[i__23751__auto___26574]));

var G__26575 = (i__23751__auto___26574 + (1));
i__23751__auto___26574 = G__26575;
continue;
} else {
}
break;
}

var G__26572 = args26570.length;
switch (G__26572) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26570.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26569_SHARP_){
return chart.client.select_airport.call(null,sel,p1__26569_SHARP_);
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
var seq__26633 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__26634 = null;
var count__26635 = (0);
var i__26636 = (0);
while(true){
if((i__26636 < count__26635)){
var map__26637 = cljs.core._nth.call(null,chunk__26634,i__26636);
var map__26637__$1 = ((((!((map__26637 == null)))?((((map__26637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26637):map__26637);
var ins = map__26637__$1;
var instruct = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26639_26689 = cljs.core._EQ_;
var expr__26640_26690 = instruct;
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26640_26690))){
var map__26642_26691 = ins;
var map__26642_26692__$1 = ((((!((map__26642_26691 == null)))?((((map__26642_26691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26642_26691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642_26691):map__26642_26691);
var id_26693 = cljs.core.get.call(null,map__26642_26692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26694 = cljs.core.get.call(null,map__26642_26692__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26693,vehicle_26694);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26640_26690))){
var map__26644_26695 = ins;
var map__26644_26696__$1 = ((((!((map__26644_26695 == null)))?((((map__26644_26695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26644_26695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644_26695):map__26644_26695);
var id_26697 = cljs.core.get.call(null,map__26644_26696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26697);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26640_26690))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26640_26690))){
var map__26646_26698 = ins;
var map__26646_26699__$1 = ((((!((map__26646_26698 == null)))?((((map__26646_26698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26646_26698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26646_26698):map__26646_26698);
var id_26700 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26701 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26702 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26703 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26704 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26705 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26706 = cljs.core.get.call(null,map__26646_26699__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26700)){
chart.client.popup.call(null,id_26700,html_26703,time_26704);
} else {
if(cljs.core.truth_((function (){var and__22625__auto__ = width_26705;
if(cljs.core.truth_(and__22625__auto__)){
var and__22625__auto____$1 = height_26706;
if(cljs.core.truth_(and__22625__auto____$1)){
var and__22625__auto____$2 = lat_26701;
if(cljs.core.truth_(and__22625__auto____$2)){
return lon_26702;
} else {
return and__22625__auto____$2;
}
} else {
return and__22625__auto____$1;
}
} else {
return and__22625__auto__;
}
})())){
chart.client.popup.call(null,lat_26701,lon_26702,html_26703,time_26704,width_26705,height_26706);
} else {
if(cljs.core.truth_((function (){var and__22625__auto__ = lat_26701;
if(cljs.core.truth_(and__22625__auto__)){
return lon_26702;
} else {
return and__22625__auto__;
}
})())){
chart.client.popup.call(null,lat_26701,lon_26702,html_26703,time_26704);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26640_26690))){
var map__26648_26707 = ins;
var map__26648_26708__$1 = ((((!((map__26648_26707 == null)))?((((map__26648_26707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26648_26707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26648_26707):map__26648_26707);
var id_26709 = cljs.core.get.call(null,map__26648_26708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26710 = cljs.core.get.call(null,map__26648_26708__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26711 = cljs.core.get.call(null,map__26648_26708__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26712 = cljs.core.get.call(null,map__26648_26708__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26709,points_26710,options_26711,time_26712);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26640_26690))){
var map__26650_26713 = ins;
var map__26650_26714__$1 = ((((!((map__26650_26713 == null)))?((((map__26650_26713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26650_26713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650_26713):map__26650_26713);
var coord_26715 = cljs.core.get.call(null,map__26650_26714__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26716 = cljs.core.get.call(null,map__26650_26714__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26717 = cljs.core.get.call(null,map__26650_26714__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26715,zoom_26716,lock_26717);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26640_26690))){
var map__26652_26718 = ins;
var map__26652_26719__$1 = ((((!((map__26652_26718 == null)))?((((map__26652_26718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26652_26718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26652_26718):map__26652_26718);
var iname_26720 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26721 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26722 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26723 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26724 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26725 = cljs.core.get.call(null,map__26652_26719__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26720,tip_26721,lat_26722,lon_26723,feature_26724,url_ico_26725);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26640_26690))){
var map__26654_26726 = ins;
var map__26654_26727__$1 = ((((!((map__26654_26726 == null)))?((((map__26654_26726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26654_26726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26654_26726):map__26654_26726);
var iname_26728 = cljs.core.get.call(null,map__26654_26727__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26728);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26640_26690))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26640_26690))){
var map__26656_26729 = ins;
var map__26656_26730__$1 = ((((!((map__26656_26729 == null)))?((((map__26656_26729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26656_26729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656_26729):map__26656_26729);
var ids_26731 = cljs.core.get.call(null,map__26656_26730__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26732 = cljs.core.get.call(null,map__26656_26730__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26731,options_26732);
} else {
if(cljs.core.truth_(pred__26639_26689.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26640_26690))){
var map__26658_26733 = ins;
var map__26658_26734__$1 = ((((!((map__26658_26733 == null)))?((((map__26658_26733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26658_26733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26658_26733):map__26658_26733);
var question_26735 = cljs.core.get.call(null,map__26658_26734__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26736 = cljs.core.get.call(null,map__26658_26734__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26660_26737 = cljs.core._EQ_;
var expr__26661_26738 = question_26735;
if(cljs.core.truth_(pred__26660_26737.call(null,"city",expr__26661_26738))){
chart.client.select_city.call(null,param_26736);
} else {
if(cljs.core.truth_(pred__26660_26737.call(null,"airport",expr__26661_26738))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26661_26738)].join('')));
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

var G__26739 = seq__26633;
var G__26740 = chunk__26634;
var G__26741 = count__26635;
var G__26742 = (i__26636 + (1));
seq__26633 = G__26739;
chunk__26634 = G__26740;
count__26635 = G__26741;
i__26636 = G__26742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26633);
if(temp__4657__auto__){
var seq__26633__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26633__$1)){
var c__23456__auto__ = cljs.core.chunk_first.call(null,seq__26633__$1);
var G__26743 = cljs.core.chunk_rest.call(null,seq__26633__$1);
var G__26744 = c__23456__auto__;
var G__26745 = cljs.core.count.call(null,c__23456__auto__);
var G__26746 = (0);
seq__26633 = G__26743;
chunk__26634 = G__26744;
count__26635 = G__26745;
i__26636 = G__26746;
continue;
} else {
var map__26663 = cljs.core.first.call(null,seq__26633__$1);
var map__26663__$1 = ((((!((map__26663 == null)))?((((map__26663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26663):map__26663);
var ins = map__26663__$1;
var instruct = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26665_26747 = cljs.core._EQ_;
var expr__26666_26748 = instruct;
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26666_26748))){
var map__26668_26749 = ins;
var map__26668_26750__$1 = ((((!((map__26668_26749 == null)))?((((map__26668_26749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26668_26749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26668_26749):map__26668_26749);
var id_26751 = cljs.core.get.call(null,map__26668_26750__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26752 = cljs.core.get.call(null,map__26668_26750__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26751,vehicle_26752);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26666_26748))){
var map__26670_26753 = ins;
var map__26670_26754__$1 = ((((!((map__26670_26753 == null)))?((((map__26670_26753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26670_26753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670_26753):map__26670_26753);
var id_26755 = cljs.core.get.call(null,map__26670_26754__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26755);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26666_26748))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26666_26748))){
var map__26672_26756 = ins;
var map__26672_26757__$1 = ((((!((map__26672_26756 == null)))?((((map__26672_26756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26672_26756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672_26756):map__26672_26756);
var id_26758 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26759 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26760 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26761 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26762 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26763 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26764 = cljs.core.get.call(null,map__26672_26757__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26758)){
chart.client.popup.call(null,id_26758,html_26761,time_26762);
} else {
if(cljs.core.truth_((function (){var and__22625__auto__ = width_26763;
if(cljs.core.truth_(and__22625__auto__)){
var and__22625__auto____$1 = height_26764;
if(cljs.core.truth_(and__22625__auto____$1)){
var and__22625__auto____$2 = lat_26759;
if(cljs.core.truth_(and__22625__auto____$2)){
return lon_26760;
} else {
return and__22625__auto____$2;
}
} else {
return and__22625__auto____$1;
}
} else {
return and__22625__auto__;
}
})())){
chart.client.popup.call(null,lat_26759,lon_26760,html_26761,time_26762,width_26763,height_26764);
} else {
if(cljs.core.truth_((function (){var and__22625__auto__ = lat_26759;
if(cljs.core.truth_(and__22625__auto__)){
return lon_26760;
} else {
return and__22625__auto__;
}
})())){
chart.client.popup.call(null,lat_26759,lon_26760,html_26761,time_26762);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26666_26748))){
var map__26674_26765 = ins;
var map__26674_26766__$1 = ((((!((map__26674_26765 == null)))?((((map__26674_26765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26674_26765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26674_26765):map__26674_26765);
var id_26767 = cljs.core.get.call(null,map__26674_26766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26768 = cljs.core.get.call(null,map__26674_26766__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26769 = cljs.core.get.call(null,map__26674_26766__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26770 = cljs.core.get.call(null,map__26674_26766__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26767,points_26768,options_26769,time_26770);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26666_26748))){
var map__26676_26771 = ins;
var map__26676_26772__$1 = ((((!((map__26676_26771 == null)))?((((map__26676_26771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26676_26771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26676_26771):map__26676_26771);
var coord_26773 = cljs.core.get.call(null,map__26676_26772__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26774 = cljs.core.get.call(null,map__26676_26772__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26775 = cljs.core.get.call(null,map__26676_26772__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26773,zoom_26774,lock_26775);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26666_26748))){
var map__26678_26776 = ins;
var map__26678_26777__$1 = ((((!((map__26678_26776 == null)))?((((map__26678_26776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26678_26776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26678_26776):map__26678_26776);
var iname_26778 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26779 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26780 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26781 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26782 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26783 = cljs.core.get.call(null,map__26678_26777__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26778,tip_26779,lat_26780,lon_26781,feature_26782,url_ico_26783);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26666_26748))){
var map__26680_26784 = ins;
var map__26680_26785__$1 = ((((!((map__26680_26784 == null)))?((((map__26680_26784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26680_26784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26680_26784):map__26680_26784);
var iname_26786 = cljs.core.get.call(null,map__26680_26785__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26786);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26666_26748))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26666_26748))){
var map__26682_26787 = ins;
var map__26682_26788__$1 = ((((!((map__26682_26787 == null)))?((((map__26682_26787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26682_26787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682_26787):map__26682_26787);
var ids_26789 = cljs.core.get.call(null,map__26682_26788__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26790 = cljs.core.get.call(null,map__26682_26788__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26789,options_26790);
} else {
if(cljs.core.truth_(pred__26665_26747.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26666_26748))){
var map__26684_26791 = ins;
var map__26684_26792__$1 = ((((!((map__26684_26791 == null)))?((((map__26684_26791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26684_26791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684_26791):map__26684_26791);
var question_26793 = cljs.core.get.call(null,map__26684_26792__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26794 = cljs.core.get.call(null,map__26684_26792__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26686_26795 = cljs.core._EQ_;
var expr__26687_26796 = question_26793;
if(cljs.core.truth_(pred__26686_26795.call(null,"city",expr__26687_26796))){
chart.client.select_city.call(null,param_26794);
} else {
if(cljs.core.truth_(pred__26686_26795.call(null,"airport",expr__26687_26796))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26687_26796)].join('')));
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

var G__26797 = cljs.core.next.call(null,seq__26633__$1);
var G__26798 = null;
var G__26799 = (0);
var G__26800 = (0);
seq__26633 = G__26797;
chunk__26634 = G__26798;
count__26635 = G__26799;
i__26636 = G__26800;
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
var args26802 = [];
var len__23750__auto___26805 = arguments.length;
var i__23751__auto___26806 = (0);
while(true){
if((i__23751__auto___26806 < len__23750__auto___26805)){
args26802.push((arguments[i__23751__auto___26806]));

var G__26807 = (i__23751__auto___26806 + (1));
i__23751__auto___26806 = G__26807;
continue;
} else {
}
break;
}

var G__26804 = args26802.length;
switch (G__26804) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26802.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26801_SHARP_){
return chart.client.move_to.call(null,sel,p1__26801_SHARP_);
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
var args26813 = [];
var len__23750__auto___26816 = arguments.length;
var i__23751__auto___26817 = (0);
while(true){
if((i__23751__auto___26817 < len__23750__auto___26816)){
args26813.push((arguments[i__23751__auto___26817]));

var G__26818 = (i__23751__auto___26817 + (1));
i__23751__auto___26817 = G__26818;
continue;
} else {
}
break;
}

var G__26815 = args26813.length;
switch (G__26815) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26813.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26809_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26809_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26810_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26810_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26811_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26811_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26812_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26812_SHARP_);
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
var args26823 = [];
var len__23750__auto___26826 = arguments.length;
var i__23751__auto___26827 = (0);
while(true){
if((i__23751__auto___26827 < len__23750__auto___26826)){
args26823.push((arguments[i__23751__auto___26827]));

var G__26828 = (i__23751__auto___26827 + (1));
i__23751__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var G__26825 = args26823.length;
switch (G__26825) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26823.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__26820_SHARP_){
return chart.client.question.call(null,sel,p1__26820_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__26821_SHARP_){
return chart.client.question.call(null,pred,sel,p1__26821_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__26822_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__26822_SHARP_);
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
var pred__26833_26836 = cljs.core._EQ_;
var expr__26834_26837 = cmd;
if(cljs.core.truth_(pred__26833_26836.call(null,"commands",expr__26834_26837))){
} else {
if(cljs.core.truth_(pred__26833_26836.call(null,"watch-visible",expr__26834_26837))){
var bnd_26838 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_26839 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26838.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26838.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26838.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26838.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_26839)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26833_26836.call(null,"move-to",expr__26834_26837))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26833_26836.call(null,"schedule",expr__26834_26837))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__26833_26836.call(null,"question",expr__26834_26837))){
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
}catch (e26841){if((e26841 instanceof Error)){
var e_26842 = e26841;
cljs.core.println.call(null,e_26842);
} else {
throw e26841;

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