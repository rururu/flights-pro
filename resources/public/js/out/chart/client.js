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
var map__13550 = response;
var map__13550__$1 = ((((!((map__13550 == null)))?((((map__13550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13550):map__13550);
var status = cljs.core.get.call(null,map__13550__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13550__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.ONBOARD = "MANUAL";
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_13558 = cljs.core.deref.call(null,vmp);
var mrk_13559 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_13558);
var vec__13555_13560 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_13558);
var lat_13561 = cljs.core.nth.call(null,vec__13555_13560,(0),null);
var lon_13562 = cljs.core.nth.call(null,vec__13555_13560,(1),null);
var pos_13563 = (new L.LatLng(lat_13561,lon_13562));
mrk_13559.setLatLng(pos_13563);

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
var seq__13568_13572 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__13569_13573 = null;
var count__13570_13574 = (0);
var i__13571_13575 = (0);
while(true){
if((i__13571_13575 < count__13570_13574)){
var veh_13576 = cljs.core._nth.call(null,chunk__13569_13573,i__13571_13575);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13576)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13576)));

var G__13577 = seq__13568_13572;
var G__13578 = chunk__13569_13573;
var G__13579 = count__13570_13574;
var G__13580 = (i__13571_13575 + (1));
seq__13568_13572 = G__13577;
chunk__13569_13573 = G__13578;
count__13570_13574 = G__13579;
i__13571_13575 = G__13580;
continue;
} else {
var temp__4657__auto___13581 = cljs.core.seq.call(null,seq__13568_13572);
if(temp__4657__auto___13581){
var seq__13568_13582__$1 = temp__4657__auto___13581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13568_13582__$1)){
var c__10768__auto___13583 = cljs.core.chunk_first.call(null,seq__13568_13582__$1);
var G__13584 = cljs.core.chunk_rest.call(null,seq__13568_13582__$1);
var G__13585 = c__10768__auto___13583;
var G__13586 = cljs.core.count.call(null,c__10768__auto___13583);
var G__13587 = (0);
seq__13568_13572 = G__13584;
chunk__13569_13573 = G__13585;
count__13570_13574 = G__13586;
i__13571_13575 = G__13587;
continue;
} else {
var veh_13588 = cljs.core.first.call(null,seq__13568_13582__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13588)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13588)));

var G__13589 = cljs.core.next.call(null,seq__13568_13582__$1);
var G__13590 = null;
var G__13591 = (0);
var G__13592 = (0);
seq__13568_13572 = G__13589;
chunk__13569_13573 = G__13590;
count__13570_13574 = G__13591;
i__13571_13575 = G__13592;
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

var vec__13597 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__13597,(0),null);
var lon = cljs.core.nth.call(null,vec__13597,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__13597,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__13597,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__13593_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__13593_SHARP_))),e.target);
});})(vec__13597,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__13597,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9949__auto__ = url_ico;
if(cljs.core.truth_(or__9949__auto__)){
return or__9949__auto__;
} else {
var or__9949__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9949__auto____$1)){
return or__9949__auto____$1;
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
var seq__13604_13608 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__13605_13609 = null;
var count__13606_13610 = (0);
var i__13607_13611 = (0);
while(true){
if((i__13607_13611 < count__13606_13610)){
var mrk_13612 = cljs.core._nth.call(null,chunk__13605_13609,i__13607_13611);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13612);

var G__13613 = seq__13604_13608;
var G__13614 = chunk__13605_13609;
var G__13615 = count__13606_13610;
var G__13616 = (i__13607_13611 + (1));
seq__13604_13608 = G__13613;
chunk__13605_13609 = G__13614;
count__13606_13610 = G__13615;
i__13607_13611 = G__13616;
continue;
} else {
var temp__4657__auto___13617 = cljs.core.seq.call(null,seq__13604_13608);
if(temp__4657__auto___13617){
var seq__13604_13618__$1 = temp__4657__auto___13617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13604_13618__$1)){
var c__10768__auto___13619 = cljs.core.chunk_first.call(null,seq__13604_13618__$1);
var G__13620 = cljs.core.chunk_rest.call(null,seq__13604_13618__$1);
var G__13621 = c__10768__auto___13619;
var G__13622 = cljs.core.count.call(null,c__10768__auto___13619);
var G__13623 = (0);
seq__13604_13608 = G__13620;
chunk__13605_13609 = G__13621;
count__13606_13610 = G__13622;
i__13607_13611 = G__13623;
continue;
} else {
var mrk_13624 = cljs.core.first.call(null,seq__13604_13618__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13624);

var G__13625 = cljs.core.next.call(null,seq__13604_13618__$1);
var G__13626 = null;
var G__13627 = (0);
var G__13628 = (0);
seq__13604_13608 = G__13625;
chunk__13605_13609 = G__13626;
count__13606_13610 = G__13627;
i__13607_13611 = G__13628;
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
var args13629 = [];
var len__11062__auto___13635 = arguments.length;
var i__11063__auto___13636 = (0);
while(true){
if((i__11063__auto___13636 < len__11062__auto___13635)){
args13629.push((arguments[i__11063__auto___13636]));

var G__13637 = (i__11063__auto___13636 + (1));
i__11063__auto___13636 = G__13637;
continue;
} else {
}
break;
}

var G__13631 = args13629.length;
switch (G__13631) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13629.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__13632 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__13632,(0),null);
var lon = cljs.core.nth.call(null,vec__13632,(1),null);
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
return (function (p1__13639_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__13639_SHARP_),cljs.core.second.call(null,p1__13639_SHARP_)));
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
var vec__13643 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__13643,(0),null);
var s = cljs.core.nth.call(null,vec__13643,(1),null);
var w = cljs.core.nth.call(null,vec__13643,(2),null);
var e = cljs.core.nth.call(null,vec__13643,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__13643,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__13643,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__13646,zoom,lock){
var vec__13650 = p__13646;
var lat = cljs.core.nth.call(null,vec__13650,(0),null);
var lon = cljs.core.nth.call(null,vec__13650,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9949__auto__ = zoom;
if(cljs.core.truth_(or__9949__auto__)){
return or__9949__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__13653_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__13653_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__13654_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__13654_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__13655_SHARP_){
return p1__13655_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__13656,ops){
var vec__13660 = p__13656;
var id1 = cljs.core.nth.call(null,vec__13660,(0),null);
var id2 = cljs.core.nth.call(null,vec__13660,(1),null);
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
var args13664 = [];
var len__11062__auto___13667 = arguments.length;
var i__11063__auto___13668 = (0);
while(true){
if((i__11063__auto___13668 < len__11062__auto___13667)){
args13664.push((arguments[i__11063__auto___13668]));

var G__13669 = (i__11063__auto___13668 + (1));
i__11063__auto___13668 = G__13669;
continue;
} else {
}
break;
}

var G__13666 = args13664.length;
switch (G__13666) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13664.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13663_SHARP_){
return chart.client.select_airport.call(null,sel,p1__13663_SHARP_);
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
var seq__13731 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__13732 = null;
var count__13733 = (0);
var i__13734 = (0);
while(true){
if((i__13734 < count__13733)){
var map__13735 = cljs.core._nth.call(null,chunk__13732,i__13734);
var map__13735__$1 = ((((!((map__13735 == null)))?((((map__13735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13735):map__13735);
var ins = map__13735__$1;
var instruct = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13737_13791 = cljs.core._EQ_;
var expr__13738_13792 = instruct;
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13738_13792))){
var map__13740_13793 = ins;
var map__13740_13794__$1 = ((((!((map__13740_13793 == null)))?((((map__13740_13793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13740_13793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13740_13793):map__13740_13793);
var id_13795 = cljs.core.get.call(null,map__13740_13794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13796 = cljs.core.get.call(null,map__13740_13794__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13795,vehicle_13796);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13738_13792))){
var map__13742_13797 = ins;
var map__13742_13798__$1 = ((((!((map__13742_13797 == null)))?((((map__13742_13797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13742_13797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13742_13797):map__13742_13797);
var id_13799 = cljs.core.get.call(null,map__13742_13798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13799);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13738_13792))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13738_13792))){
var map__13744_13800 = ins;
var map__13744_13801__$1 = ((((!((map__13744_13800 == null)))?((((map__13744_13800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13744_13800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13744_13800):map__13744_13800);
var id_13802 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13803 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13804 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13805 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13806 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13807 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13808 = cljs.core.get.call(null,map__13744_13801__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13802)){
chart.client.popup.call(null,id_13802,html_13805,time_13806);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = width_13807;
if(cljs.core.truth_(and__9937__auto__)){
var and__9937__auto____$1 = height_13808;
if(cljs.core.truth_(and__9937__auto____$1)){
var and__9937__auto____$2 = lat_13803;
if(cljs.core.truth_(and__9937__auto____$2)){
return lon_13804;
} else {
return and__9937__auto____$2;
}
} else {
return and__9937__auto____$1;
}
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13803,lon_13804,html_13805,time_13806,width_13807,height_13808);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = lat_13803;
if(cljs.core.truth_(and__9937__auto__)){
return lon_13804;
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13803,lon_13804,html_13805,time_13806);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13738_13792))){
var map__13746_13809 = ins;
var map__13746_13810__$1 = ((((!((map__13746_13809 == null)))?((((map__13746_13809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13746_13809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13746_13809):map__13746_13809);
var id_13811 = cljs.core.get.call(null,map__13746_13810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13812 = cljs.core.get.call(null,map__13746_13810__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13813 = cljs.core.get.call(null,map__13746_13810__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13814 = cljs.core.get.call(null,map__13746_13810__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13811,points_13812,options_13813,time_13814);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13738_13792))){
var map__13748_13815 = ins;
var map__13748_13816__$1 = ((((!((map__13748_13815 == null)))?((((map__13748_13815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13748_13815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13748_13815):map__13748_13815);
var coord_13817 = cljs.core.get.call(null,map__13748_13816__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13818 = cljs.core.get.call(null,map__13748_13816__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13819 = cljs.core.get.call(null,map__13748_13816__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13817,zoom_13818,lock_13819);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13738_13792))){
var map__13750_13820 = ins;
var map__13750_13821__$1 = ((((!((map__13750_13820 == null)))?((((map__13750_13820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13750_13820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13750_13820):map__13750_13820);
var iname_13822 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13823 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13824 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13825 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13826 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13827 = cljs.core.get.call(null,map__13750_13821__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13822,tip_13823,lat_13824,lon_13825,feature_13826,url_ico_13827);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13738_13792))){
var map__13752_13828 = ins;
var map__13752_13829__$1 = ((((!((map__13752_13828 == null)))?((((map__13752_13828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13752_13828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13752_13828):map__13752_13828);
var iname_13830 = cljs.core.get.call(null,map__13752_13829__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13830);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13738_13792))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13738_13792))){
var map__13754_13831 = ins;
var map__13754_13832__$1 = ((((!((map__13754_13831 == null)))?((((map__13754_13831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13754_13831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13754_13831):map__13754_13831);
var ids_13833 = cljs.core.get.call(null,map__13754_13832__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13834 = cljs.core.get.call(null,map__13754_13832__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13833,options_13834);
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__13738_13792))){
var map__13756_13835 = ins;
var map__13756_13836__$1 = ((((!((map__13756_13835 == null)))?((((map__13756_13835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13756_13835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13756_13835):map__13756_13835);
var question_13837 = cljs.core.get.call(null,map__13756_13836__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_13838 = cljs.core.get.call(null,map__13756_13836__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__13758_13839 = cljs.core._EQ_;
var expr__13759_13840 = question_13837;
if(cljs.core.truth_(pred__13758_13839.call(null,"city",expr__13759_13840))){
chart.client.select_city.call(null,param_13838);
} else {
if(cljs.core.truth_(pred__13758_13839.call(null,"airport",expr__13759_13840))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13759_13840)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__13737_13791.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__13738_13792))){
var map__13761_13841 = ins;
var map__13761_13842__$1 = ((((!((map__13761_13841 == null)))?((((map__13761_13841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13761_13841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13761_13841):map__13761_13841);
var callsign_13843 = cljs.core.get.call(null,map__13761_13842__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_13843;
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
}

var G__13844 = seq__13731;
var G__13845 = chunk__13732;
var G__13846 = count__13733;
var G__13847 = (i__13734 + (1));
seq__13731 = G__13844;
chunk__13732 = G__13845;
count__13733 = G__13846;
i__13734 = G__13847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13731);
if(temp__4657__auto__){
var seq__13731__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13731__$1)){
var c__10768__auto__ = cljs.core.chunk_first.call(null,seq__13731__$1);
var G__13848 = cljs.core.chunk_rest.call(null,seq__13731__$1);
var G__13849 = c__10768__auto__;
var G__13850 = cljs.core.count.call(null,c__10768__auto__);
var G__13851 = (0);
seq__13731 = G__13848;
chunk__13732 = G__13849;
count__13733 = G__13850;
i__13734 = G__13851;
continue;
} else {
var map__13763 = cljs.core.first.call(null,seq__13731__$1);
var map__13763__$1 = ((((!((map__13763 == null)))?((((map__13763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13763):map__13763);
var ins = map__13763__$1;
var instruct = cljs.core.get.call(null,map__13763__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13765_13852 = cljs.core._EQ_;
var expr__13766_13853 = instruct;
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13766_13853))){
var map__13768_13854 = ins;
var map__13768_13855__$1 = ((((!((map__13768_13854 == null)))?((((map__13768_13854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13768_13854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13768_13854):map__13768_13854);
var id_13856 = cljs.core.get.call(null,map__13768_13855__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13857 = cljs.core.get.call(null,map__13768_13855__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13856,vehicle_13857);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13766_13853))){
var map__13770_13858 = ins;
var map__13770_13859__$1 = ((((!((map__13770_13858 == null)))?((((map__13770_13858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13770_13858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13770_13858):map__13770_13858);
var id_13860 = cljs.core.get.call(null,map__13770_13859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13860);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13766_13853))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13766_13853))){
var map__13772_13861 = ins;
var map__13772_13862__$1 = ((((!((map__13772_13861 == null)))?((((map__13772_13861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13772_13861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13772_13861):map__13772_13861);
var id_13863 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13864 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13865 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13866 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13867 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13868 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13869 = cljs.core.get.call(null,map__13772_13862__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13863)){
chart.client.popup.call(null,id_13863,html_13866,time_13867);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = width_13868;
if(cljs.core.truth_(and__9937__auto__)){
var and__9937__auto____$1 = height_13869;
if(cljs.core.truth_(and__9937__auto____$1)){
var and__9937__auto____$2 = lat_13864;
if(cljs.core.truth_(and__9937__auto____$2)){
return lon_13865;
} else {
return and__9937__auto____$2;
}
} else {
return and__9937__auto____$1;
}
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13864,lon_13865,html_13866,time_13867,width_13868,height_13869);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = lat_13864;
if(cljs.core.truth_(and__9937__auto__)){
return lon_13865;
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13864,lon_13865,html_13866,time_13867);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13766_13853))){
var map__13774_13870 = ins;
var map__13774_13871__$1 = ((((!((map__13774_13870 == null)))?((((map__13774_13870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13774_13870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13774_13870):map__13774_13870);
var id_13872 = cljs.core.get.call(null,map__13774_13871__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13873 = cljs.core.get.call(null,map__13774_13871__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13874 = cljs.core.get.call(null,map__13774_13871__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13875 = cljs.core.get.call(null,map__13774_13871__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13872,points_13873,options_13874,time_13875);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13766_13853))){
var map__13776_13876 = ins;
var map__13776_13877__$1 = ((((!((map__13776_13876 == null)))?((((map__13776_13876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13776_13876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13776_13876):map__13776_13876);
var coord_13878 = cljs.core.get.call(null,map__13776_13877__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13879 = cljs.core.get.call(null,map__13776_13877__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13880 = cljs.core.get.call(null,map__13776_13877__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13878,zoom_13879,lock_13880);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13766_13853))){
var map__13778_13881 = ins;
var map__13778_13882__$1 = ((((!((map__13778_13881 == null)))?((((map__13778_13881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13778_13881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13778_13881):map__13778_13881);
var iname_13883 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13884 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13885 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13886 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13887 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13888 = cljs.core.get.call(null,map__13778_13882__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13883,tip_13884,lat_13885,lon_13886,feature_13887,url_ico_13888);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13766_13853))){
var map__13780_13889 = ins;
var map__13780_13890__$1 = ((((!((map__13780_13889 == null)))?((((map__13780_13889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13780_13889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13780_13889):map__13780_13889);
var iname_13891 = cljs.core.get.call(null,map__13780_13890__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13891);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13766_13853))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13766_13853))){
var map__13782_13892 = ins;
var map__13782_13893__$1 = ((((!((map__13782_13892 == null)))?((((map__13782_13892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13782_13892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13782_13892):map__13782_13892);
var ids_13894 = cljs.core.get.call(null,map__13782_13893__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13895 = cljs.core.get.call(null,map__13782_13893__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13894,options_13895);
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__13766_13853))){
var map__13784_13896 = ins;
var map__13784_13897__$1 = ((((!((map__13784_13896 == null)))?((((map__13784_13896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13784_13896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13784_13896):map__13784_13896);
var question_13898 = cljs.core.get.call(null,map__13784_13897__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_13899 = cljs.core.get.call(null,map__13784_13897__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__13786_13900 = cljs.core._EQ_;
var expr__13787_13901 = question_13898;
if(cljs.core.truth_(pred__13786_13900.call(null,"city",expr__13787_13901))){
chart.client.select_city.call(null,param_13899);
} else {
if(cljs.core.truth_(pred__13786_13900.call(null,"airport",expr__13787_13901))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13787_13901)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__13765_13852.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__13766_13853))){
var map__13789_13902 = ins;
var map__13789_13903__$1 = ((((!((map__13789_13902 == null)))?((((map__13789_13902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13789_13902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13789_13902):map__13789_13902);
var callsign_13904 = cljs.core.get.call(null,map__13789_13903__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_13904;
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
}

var G__13905 = cljs.core.next.call(null,seq__13731__$1);
var G__13906 = null;
var G__13907 = (0);
var G__13908 = (0);
seq__13731 = G__13905;
chunk__13732 = G__13906;
count__13733 = G__13907;
i__13734 = G__13908;
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
var args13910 = [];
var len__11062__auto___13913 = arguments.length;
var i__11063__auto___13914 = (0);
while(true){
if((i__11063__auto___13914 < len__11062__auto___13913)){
args13910.push((arguments[i__11063__auto___13914]));

var G__13915 = (i__11063__auto___13914 + (1));
i__11063__auto___13914 = G__13915;
continue;
} else {
}
break;
}

var G__13912 = args13910.length;
switch (G__13912) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13910.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13909_SHARP_){
return chart.client.move_to.call(null,sel,p1__13909_SHARP_);
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
var args13921 = [];
var len__11062__auto___13924 = arguments.length;
var i__11063__auto___13925 = (0);
while(true){
if((i__11063__auto___13925 < len__11062__auto___13924)){
args13921.push((arguments[i__11063__auto___13925]));

var G__13926 = (i__11063__auto___13925 + (1));
i__11063__auto___13925 = G__13926;
continue;
} else {
}
break;
}

var G__13923 = args13921.length;
switch (G__13923) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13921.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13917_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__13917_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13918_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__13918_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13919_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__13919_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13920_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__13920_SHARP_);
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
var args13931 = [];
var len__11062__auto___13934 = arguments.length;
var i__11063__auto___13935 = (0);
while(true){
if((i__11063__auto___13935 < len__11062__auto___13934)){
args13931.push((arguments[i__11063__auto___13935]));

var G__13936 = (i__11063__auto___13935 + (1));
i__11063__auto___13935 = G__13936;
continue;
} else {
}
break;
}

var G__13933 = args13931.length;
switch (G__13933) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13931.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__13928_SHARP_){
return chart.client.question.call(null,sel,p1__13928_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__13929_SHARP_){
return chart.client.question.call(null,pred,sel,p1__13929_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__13930_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__13930_SHARP_);
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
var pred__13941_13944 = cljs.core._EQ_;
var expr__13942_13945 = cmd;
if(cljs.core.truth_(pred__13941_13944.call(null,"commands",expr__13942_13945))){
} else {
if(cljs.core.truth_(pred__13941_13944.call(null,"watch-visible",expr__13942_13945))){
var bnd_13946 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_13947 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13946.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13946.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13946.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13946.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_13947)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__13941_13944.call(null,"move-to",expr__13942_13945))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__13941_13944.call(null,"schedule",expr__13942_13945))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__13941_13944.call(null,"question",expr__13942_13945))){
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
chart.client.mouse_click = (function chart$client$mouse_click(lat,lng){
var htm = ((cljs.core._EQ_.call(null,chart.client.ONBOARD,"MANUAL"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("MANUAL instantly goes to this location?<br><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<input type='button' \n\t value='Go!'\n\t style='color:blue;display:block;margin:auto;'\n\t onclick='chart.client.mangoinst("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")' >")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Now on board "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.ONBOARD)].join(''));
return chart.client.popup.call(null,lat,lng,htm,(8000),(240),(100));
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
}catch (e13949){if((e13949 instanceof Error)){
var e_13950 = e13949;
cljs.core.println.call(null,e_13950);
} else {
throw e13949;

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

m.on("click",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.client.mouse_click.call(null,e.latlng.lat,e.latlng.lng);
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
chart.client.mangoinst = (function chart$client$mangoinst(lat,lon){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("goto?lat="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&lon="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&from=CHART")].join(''));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map