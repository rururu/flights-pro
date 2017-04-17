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
var map__26583 = response;
var map__26583__$1 = ((((!((map__26583 == null)))?((((map__26583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26583):map__26583);
var status = cljs.core.get.call(null,map__26583__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26583__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_26591 = cljs.core.deref.call(null,vmp);
var mrk_26592 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26591);
var vec__26588_26593 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26591);
var lat_26594 = cljs.core.nth.call(null,vec__26588_26593,(0),null);
var lon_26595 = cljs.core.nth.call(null,vec__26588_26593,(1),null);
var pos_26596 = (new L.LatLng(lat_26594,lon_26595));
mrk_26592.setLatLng(pos_26596);

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
var seq__26601_26605 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__26602_26606 = null;
var count__26603_26607 = (0);
var i__26604_26608 = (0);
while(true){
if((i__26604_26608 < count__26603_26607)){
var veh_26609 = cljs.core._nth.call(null,chunk__26602_26606,i__26604_26608);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26609)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26609)));

var G__26610 = seq__26601_26605;
var G__26611 = chunk__26602_26606;
var G__26612 = count__26603_26607;
var G__26613 = (i__26604_26608 + (1));
seq__26601_26605 = G__26610;
chunk__26602_26606 = G__26611;
count__26603_26607 = G__26612;
i__26604_26608 = G__26613;
continue;
} else {
var temp__4657__auto___26614 = cljs.core.seq.call(null,seq__26601_26605);
if(temp__4657__auto___26614){
var seq__26601_26615__$1 = temp__4657__auto___26614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26601_26615__$1)){
var c__21206__auto___26616 = cljs.core.chunk_first.call(null,seq__26601_26615__$1);
var G__26617 = cljs.core.chunk_rest.call(null,seq__26601_26615__$1);
var G__26618 = c__21206__auto___26616;
var G__26619 = cljs.core.count.call(null,c__21206__auto___26616);
var G__26620 = (0);
seq__26601_26605 = G__26617;
chunk__26602_26606 = G__26618;
count__26603_26607 = G__26619;
i__26604_26608 = G__26620;
continue;
} else {
var veh_26621 = cljs.core.first.call(null,seq__26601_26615__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26621)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26621)));

var G__26622 = cljs.core.next.call(null,seq__26601_26615__$1);
var G__26623 = null;
var G__26624 = (0);
var G__26625 = (0);
seq__26601_26605 = G__26622;
chunk__26602_26606 = G__26623;
count__26603_26607 = G__26624;
i__26604_26608 = G__26625;
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

var vec__26630 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__26630,(0),null);
var lon = cljs.core.nth.call(null,vec__26630,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__26630,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__26630,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__26626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__26626_SHARP_))),e.target);
});})(vec__26630,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__26630,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20392__auto__ = url_ico;
if(cljs.core.truth_(or__20392__auto__)){
return or__20392__auto__;
} else {
var or__20392__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20392__auto____$1)){
return or__20392__auto____$1;
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
var seq__26637_26641 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__26638_26642 = null;
var count__26639_26643 = (0);
var i__26640_26644 = (0);
while(true){
if((i__26640_26644 < count__26639_26643)){
var mrk_26645 = cljs.core._nth.call(null,chunk__26638_26642,i__26640_26644);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26645);

var G__26646 = seq__26637_26641;
var G__26647 = chunk__26638_26642;
var G__26648 = count__26639_26643;
var G__26649 = (i__26640_26644 + (1));
seq__26637_26641 = G__26646;
chunk__26638_26642 = G__26647;
count__26639_26643 = G__26648;
i__26640_26644 = G__26649;
continue;
} else {
var temp__4657__auto___26650 = cljs.core.seq.call(null,seq__26637_26641);
if(temp__4657__auto___26650){
var seq__26637_26651__$1 = temp__4657__auto___26650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26637_26651__$1)){
var c__21206__auto___26652 = cljs.core.chunk_first.call(null,seq__26637_26651__$1);
var G__26653 = cljs.core.chunk_rest.call(null,seq__26637_26651__$1);
var G__26654 = c__21206__auto___26652;
var G__26655 = cljs.core.count.call(null,c__21206__auto___26652);
var G__26656 = (0);
seq__26637_26641 = G__26653;
chunk__26638_26642 = G__26654;
count__26639_26643 = G__26655;
i__26640_26644 = G__26656;
continue;
} else {
var mrk_26657 = cljs.core.first.call(null,seq__26637_26651__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26657);

var G__26658 = cljs.core.next.call(null,seq__26637_26651__$1);
var G__26659 = null;
var G__26660 = (0);
var G__26661 = (0);
seq__26637_26641 = G__26658;
chunk__26638_26642 = G__26659;
count__26639_26643 = G__26660;
i__26640_26644 = G__26661;
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
var args26662 = [];
var len__21500__auto___26668 = arguments.length;
var i__21501__auto___26669 = (0);
while(true){
if((i__21501__auto___26669 < len__21500__auto___26668)){
args26662.push((arguments[i__21501__auto___26669]));

var G__26670 = (i__21501__auto___26669 + (1));
i__21501__auto___26669 = G__26670;
continue;
} else {
}
break;
}

var G__26664 = args26662.length;
switch (G__26664) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26662.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__26665 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__26665,(0),null);
var lon = cljs.core.nth.call(null,vec__26665,(1),null);
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
return (function (p1__26672_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__26672_SHARP_),cljs.core.second.call(null,p1__26672_SHARP_)));
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
var vec__26676 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__26676,(0),null);
var s = cljs.core.nth.call(null,vec__26676,(1),null);
var w = cljs.core.nth.call(null,vec__26676,(2),null);
var e = cljs.core.nth.call(null,vec__26676,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__26676,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__26676,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__26679,zoom,lock){
var vec__26683 = p__26679;
var lat = cljs.core.nth.call(null,vec__26683,(0),null);
var lon = cljs.core.nth.call(null,vec__26683,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20392__auto__ = zoom;
if(cljs.core.truth_(or__20392__auto__)){
return or__20392__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__26686_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__26686_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__26687_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26687_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__26688_SHARP_){
return p1__26688_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__26689,ops){
var vec__26693 = p__26689;
var id1 = cljs.core.nth.call(null,vec__26693,(0),null);
var id2 = cljs.core.nth.call(null,vec__26693,(1),null);
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
var args26697 = [];
var len__21500__auto___26700 = arguments.length;
var i__21501__auto___26701 = (0);
while(true){
if((i__21501__auto___26701 < len__21500__auto___26700)){
args26697.push((arguments[i__21501__auto___26701]));

var G__26702 = (i__21501__auto___26701 + (1));
i__21501__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var G__26699 = args26697.length;
switch (G__26699) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26697.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26696_SHARP_){
return chart.client.select_airport.call(null,sel,p1__26696_SHARP_);
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
var seq__26760 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__26761 = null;
var count__26762 = (0);
var i__26763 = (0);
while(true){
if((i__26763 < count__26762)){
var map__26764 = cljs.core._nth.call(null,chunk__26761,i__26763);
var map__26764__$1 = ((((!((map__26764 == null)))?((((map__26764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26764):map__26764);
var ins = map__26764__$1;
var instruct = cljs.core.get.call(null,map__26764__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26766_26816 = cljs.core._EQ_;
var expr__26767_26817 = instruct;
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26767_26817))){
var map__26769_26818 = ins;
var map__26769_26819__$1 = ((((!((map__26769_26818 == null)))?((((map__26769_26818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26769_26818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26769_26818):map__26769_26818);
var id_26820 = cljs.core.get.call(null,map__26769_26819__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26821 = cljs.core.get.call(null,map__26769_26819__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26820,vehicle_26821);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26767_26817))){
var map__26771_26822 = ins;
var map__26771_26823__$1 = ((((!((map__26771_26822 == null)))?((((map__26771_26822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26771_26822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26771_26822):map__26771_26822);
var id_26824 = cljs.core.get.call(null,map__26771_26823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26824);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26767_26817))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26767_26817))){
var map__26773_26825 = ins;
var map__26773_26826__$1 = ((((!((map__26773_26825 == null)))?((((map__26773_26825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26773_26825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26773_26825):map__26773_26825);
var id_26827 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26828 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26829 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26830 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26831 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26832 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26833 = cljs.core.get.call(null,map__26773_26826__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26827)){
chart.client.popup.call(null,id_26827,html_26830,time_26831);
} else {
if(cljs.core.truth_((function (){var and__20380__auto__ = width_26832;
if(cljs.core.truth_(and__20380__auto__)){
var and__20380__auto____$1 = height_26833;
if(cljs.core.truth_(and__20380__auto____$1)){
var and__20380__auto____$2 = lat_26828;
if(cljs.core.truth_(and__20380__auto____$2)){
return lon_26829;
} else {
return and__20380__auto____$2;
}
} else {
return and__20380__auto____$1;
}
} else {
return and__20380__auto__;
}
})())){
chart.client.popup.call(null,lat_26828,lon_26829,html_26830,time_26831,width_26832,height_26833);
} else {
if(cljs.core.truth_((function (){var and__20380__auto__ = lat_26828;
if(cljs.core.truth_(and__20380__auto__)){
return lon_26829;
} else {
return and__20380__auto__;
}
})())){
chart.client.popup.call(null,lat_26828,lon_26829,html_26830,time_26831);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26767_26817))){
var map__26775_26834 = ins;
var map__26775_26835__$1 = ((((!((map__26775_26834 == null)))?((((map__26775_26834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26775_26834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26775_26834):map__26775_26834);
var id_26836 = cljs.core.get.call(null,map__26775_26835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26837 = cljs.core.get.call(null,map__26775_26835__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26838 = cljs.core.get.call(null,map__26775_26835__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26839 = cljs.core.get.call(null,map__26775_26835__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26836,points_26837,options_26838,time_26839);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26767_26817))){
var map__26777_26840 = ins;
var map__26777_26841__$1 = ((((!((map__26777_26840 == null)))?((((map__26777_26840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26777_26840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777_26840):map__26777_26840);
var coord_26842 = cljs.core.get.call(null,map__26777_26841__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26843 = cljs.core.get.call(null,map__26777_26841__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26844 = cljs.core.get.call(null,map__26777_26841__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26842,zoom_26843,lock_26844);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26767_26817))){
var map__26779_26845 = ins;
var map__26779_26846__$1 = ((((!((map__26779_26845 == null)))?((((map__26779_26845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26779_26845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26779_26845):map__26779_26845);
var iname_26847 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26848 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26849 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26850 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26851 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26852 = cljs.core.get.call(null,map__26779_26846__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26847,tip_26848,lat_26849,lon_26850,feature_26851,url_ico_26852);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26767_26817))){
var map__26781_26853 = ins;
var map__26781_26854__$1 = ((((!((map__26781_26853 == null)))?((((map__26781_26853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26781_26853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781_26853):map__26781_26853);
var iname_26855 = cljs.core.get.call(null,map__26781_26854__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26855);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26767_26817))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26767_26817))){
var map__26783_26856 = ins;
var map__26783_26857__$1 = ((((!((map__26783_26856 == null)))?((((map__26783_26856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26783_26856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26783_26856):map__26783_26856);
var ids_26858 = cljs.core.get.call(null,map__26783_26857__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26859 = cljs.core.get.call(null,map__26783_26857__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26858,options_26859);
} else {
if(cljs.core.truth_(pred__26766_26816.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26767_26817))){
var map__26785_26860 = ins;
var map__26785_26861__$1 = ((((!((map__26785_26860 == null)))?((((map__26785_26860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26785_26860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26785_26860):map__26785_26860);
var question_26862 = cljs.core.get.call(null,map__26785_26861__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26863 = cljs.core.get.call(null,map__26785_26861__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26787_26864 = cljs.core._EQ_;
var expr__26788_26865 = question_26862;
if(cljs.core.truth_(pred__26787_26864.call(null,"city",expr__26788_26865))){
chart.client.select_city.call(null,param_26863);
} else {
if(cljs.core.truth_(pred__26787_26864.call(null,"airport",expr__26788_26865))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26788_26865)].join('')));
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

var G__26866 = seq__26760;
var G__26867 = chunk__26761;
var G__26868 = count__26762;
var G__26869 = (i__26763 + (1));
seq__26760 = G__26866;
chunk__26761 = G__26867;
count__26762 = G__26868;
i__26763 = G__26869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26760);
if(temp__4657__auto__){
var seq__26760__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26760__$1)){
var c__21206__auto__ = cljs.core.chunk_first.call(null,seq__26760__$1);
var G__26870 = cljs.core.chunk_rest.call(null,seq__26760__$1);
var G__26871 = c__21206__auto__;
var G__26872 = cljs.core.count.call(null,c__21206__auto__);
var G__26873 = (0);
seq__26760 = G__26870;
chunk__26761 = G__26871;
count__26762 = G__26872;
i__26763 = G__26873;
continue;
} else {
var map__26790 = cljs.core.first.call(null,seq__26760__$1);
var map__26790__$1 = ((((!((map__26790 == null)))?((((map__26790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26790):map__26790);
var ins = map__26790__$1;
var instruct = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26792_26874 = cljs.core._EQ_;
var expr__26793_26875 = instruct;
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26793_26875))){
var map__26795_26876 = ins;
var map__26795_26877__$1 = ((((!((map__26795_26876 == null)))?((((map__26795_26876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26795_26876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26795_26876):map__26795_26876);
var id_26878 = cljs.core.get.call(null,map__26795_26877__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26879 = cljs.core.get.call(null,map__26795_26877__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26878,vehicle_26879);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26793_26875))){
var map__26797_26880 = ins;
var map__26797_26881__$1 = ((((!((map__26797_26880 == null)))?((((map__26797_26880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26797_26880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26797_26880):map__26797_26880);
var id_26882 = cljs.core.get.call(null,map__26797_26881__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26882);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26793_26875))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26793_26875))){
var map__26799_26883 = ins;
var map__26799_26884__$1 = ((((!((map__26799_26883 == null)))?((((map__26799_26883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26799_26883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799_26883):map__26799_26883);
var id_26885 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26886 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26887 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26888 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26889 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26890 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26891 = cljs.core.get.call(null,map__26799_26884__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26885)){
chart.client.popup.call(null,id_26885,html_26888,time_26889);
} else {
if(cljs.core.truth_((function (){var and__20380__auto__ = width_26890;
if(cljs.core.truth_(and__20380__auto__)){
var and__20380__auto____$1 = height_26891;
if(cljs.core.truth_(and__20380__auto____$1)){
var and__20380__auto____$2 = lat_26886;
if(cljs.core.truth_(and__20380__auto____$2)){
return lon_26887;
} else {
return and__20380__auto____$2;
}
} else {
return and__20380__auto____$1;
}
} else {
return and__20380__auto__;
}
})())){
chart.client.popup.call(null,lat_26886,lon_26887,html_26888,time_26889,width_26890,height_26891);
} else {
if(cljs.core.truth_((function (){var and__20380__auto__ = lat_26886;
if(cljs.core.truth_(and__20380__auto__)){
return lon_26887;
} else {
return and__20380__auto__;
}
})())){
chart.client.popup.call(null,lat_26886,lon_26887,html_26888,time_26889);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26793_26875))){
var map__26801_26892 = ins;
var map__26801_26893__$1 = ((((!((map__26801_26892 == null)))?((((map__26801_26892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26801_26892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801_26892):map__26801_26892);
var id_26894 = cljs.core.get.call(null,map__26801_26893__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26895 = cljs.core.get.call(null,map__26801_26893__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26896 = cljs.core.get.call(null,map__26801_26893__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26897 = cljs.core.get.call(null,map__26801_26893__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26894,points_26895,options_26896,time_26897);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26793_26875))){
var map__26803_26898 = ins;
var map__26803_26899__$1 = ((((!((map__26803_26898 == null)))?((((map__26803_26898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26803_26898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26803_26898):map__26803_26898);
var coord_26900 = cljs.core.get.call(null,map__26803_26899__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26901 = cljs.core.get.call(null,map__26803_26899__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26902 = cljs.core.get.call(null,map__26803_26899__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26900,zoom_26901,lock_26902);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26793_26875))){
var map__26805_26903 = ins;
var map__26805_26904__$1 = ((((!((map__26805_26903 == null)))?((((map__26805_26903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26805_26903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805_26903):map__26805_26903);
var iname_26905 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26906 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26907 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26908 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26909 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26910 = cljs.core.get.call(null,map__26805_26904__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26905,tip_26906,lat_26907,lon_26908,feature_26909,url_ico_26910);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26793_26875))){
var map__26807_26911 = ins;
var map__26807_26912__$1 = ((((!((map__26807_26911 == null)))?((((map__26807_26911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26807_26911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26807_26911):map__26807_26911);
var iname_26913 = cljs.core.get.call(null,map__26807_26912__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26913);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26793_26875))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26793_26875))){
var map__26809_26914 = ins;
var map__26809_26915__$1 = ((((!((map__26809_26914 == null)))?((((map__26809_26914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26809_26914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26809_26914):map__26809_26914);
var ids_26916 = cljs.core.get.call(null,map__26809_26915__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26917 = cljs.core.get.call(null,map__26809_26915__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26916,options_26917);
} else {
if(cljs.core.truth_(pred__26792_26874.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26793_26875))){
var map__26811_26918 = ins;
var map__26811_26919__$1 = ((((!((map__26811_26918 == null)))?((((map__26811_26918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26811_26918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26811_26918):map__26811_26918);
var question_26920 = cljs.core.get.call(null,map__26811_26919__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26921 = cljs.core.get.call(null,map__26811_26919__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26813_26922 = cljs.core._EQ_;
var expr__26814_26923 = question_26920;
if(cljs.core.truth_(pred__26813_26922.call(null,"city",expr__26814_26923))){
chart.client.select_city.call(null,param_26921);
} else {
if(cljs.core.truth_(pred__26813_26922.call(null,"airport",expr__26814_26923))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26814_26923)].join('')));
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

var G__26924 = cljs.core.next.call(null,seq__26760__$1);
var G__26925 = null;
var G__26926 = (0);
var G__26927 = (0);
seq__26760 = G__26924;
chunk__26761 = G__26925;
count__26762 = G__26926;
i__26763 = G__26927;
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
var args26929 = [];
var len__21500__auto___26932 = arguments.length;
var i__21501__auto___26933 = (0);
while(true){
if((i__21501__auto___26933 < len__21500__auto___26932)){
args26929.push((arguments[i__21501__auto___26933]));

var G__26934 = (i__21501__auto___26933 + (1));
i__21501__auto___26933 = G__26934;
continue;
} else {
}
break;
}

var G__26931 = args26929.length;
switch (G__26931) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26929.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26928_SHARP_){
return chart.client.move_to.call(null,sel,p1__26928_SHARP_);
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
var args26940 = [];
var len__21500__auto___26943 = arguments.length;
var i__21501__auto___26944 = (0);
while(true){
if((i__21501__auto___26944 < len__21500__auto___26943)){
args26940.push((arguments[i__21501__auto___26944]));

var G__26945 = (i__21501__auto___26944 + (1));
i__21501__auto___26944 = G__26945;
continue;
} else {
}
break;
}

var G__26942 = args26940.length;
switch (G__26942) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26940.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26936_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26936_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26937_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26937_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26938_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26938_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26939_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26939_SHARP_);
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
var args26950 = [];
var len__21500__auto___26953 = arguments.length;
var i__21501__auto___26954 = (0);
while(true){
if((i__21501__auto___26954 < len__21500__auto___26953)){
args26950.push((arguments[i__21501__auto___26954]));

var G__26955 = (i__21501__auto___26954 + (1));
i__21501__auto___26954 = G__26955;
continue;
} else {
}
break;
}

var G__26952 = args26950.length;
switch (G__26952) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26950.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__26947_SHARP_){
return chart.client.question.call(null,sel,p1__26947_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__26948_SHARP_){
return chart.client.question.call(null,pred,sel,p1__26948_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__26949_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__26949_SHARP_);
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
var pred__26960_26963 = cljs.core._EQ_;
var expr__26961_26964 = cmd;
if(cljs.core.truth_(pred__26960_26963.call(null,"commands",expr__26961_26964))){
} else {
if(cljs.core.truth_(pred__26960_26963.call(null,"watch-visible",expr__26961_26964))){
var bnd_26965 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_26966 = [cljs.core.str("?n="),cljs.core.str(bnd_26965.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_26965.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_26965.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_26965.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_26966)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26960_26963.call(null,"move-to",expr__26961_26964))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26960_26963.call(null,"schedule",expr__26961_26964))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__26960_26963.call(null,"question",expr__26961_26964))){
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
}catch (e26968){if((e26968 instanceof Error)){
var e_26969 = e26968;
cljs.core.println.call(null,e_26969);
} else {
throw e26968;

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