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
var map__33505 = response;
var map__33505__$1 = ((((!((map__33505 == null)))?((((map__33505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33505):map__33505);
var status = cljs.core.get.call(null,map__33505__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33505__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_33513 = cljs.core.deref.call(null,vmp);
var mrk_33514 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_33513);
var vec__33510_33515 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_33513);
var lat_33516 = cljs.core.nth.call(null,vec__33510_33515,(0),null);
var lon_33517 = cljs.core.nth.call(null,vec__33510_33515,(1),null);
var pos_33518 = (new L.LatLng(lat_33516,lon_33517));
mrk_33514.setLatLng(pos_33518);

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
var seq__33523_33527 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__33524_33528 = null;
var count__33525_33529 = (0);
var i__33526_33530 = (0);
while(true){
if((i__33526_33530 < count__33525_33529)){
var veh_33531 = cljs.core._nth.call(null,chunk__33524_33528,i__33526_33530);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33531)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33531)));

var G__33532 = seq__33523_33527;
var G__33533 = chunk__33524_33528;
var G__33534 = count__33525_33529;
var G__33535 = (i__33526_33530 + (1));
seq__33523_33527 = G__33532;
chunk__33524_33528 = G__33533;
count__33525_33529 = G__33534;
i__33526_33530 = G__33535;
continue;
} else {
var temp__4657__auto___33536 = cljs.core.seq.call(null,seq__33523_33527);
if(temp__4657__auto___33536){
var seq__33523_33537__$1 = temp__4657__auto___33536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33523_33537__$1)){
var c__21188__auto___33538 = cljs.core.chunk_first.call(null,seq__33523_33537__$1);
var G__33539 = cljs.core.chunk_rest.call(null,seq__33523_33537__$1);
var G__33540 = c__21188__auto___33538;
var G__33541 = cljs.core.count.call(null,c__21188__auto___33538);
var G__33542 = (0);
seq__33523_33527 = G__33539;
chunk__33524_33528 = G__33540;
count__33525_33529 = G__33541;
i__33526_33530 = G__33542;
continue;
} else {
var veh_33543 = cljs.core.first.call(null,seq__33523_33537__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33543)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33543)));

var G__33544 = cljs.core.next.call(null,seq__33523_33537__$1);
var G__33545 = null;
var G__33546 = (0);
var G__33547 = (0);
seq__33523_33527 = G__33544;
chunk__33524_33528 = G__33545;
count__33525_33529 = G__33546;
i__33526_33530 = G__33547;
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

var vec__33552 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__33552,(0),null);
var lon = cljs.core.nth.call(null,vec__33552,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__33552,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__33552,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__33548_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__33548_SHARP_))),e.target);
});})(vec__33552,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__33552,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20374__auto__ = url_ico;
if(cljs.core.truth_(or__20374__auto__)){
return or__20374__auto__;
} else {
var or__20374__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20374__auto____$1)){
return or__20374__auto____$1;
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
var seq__33559_33563 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__33560_33564 = null;
var count__33561_33565 = (0);
var i__33562_33566 = (0);
while(true){
if((i__33562_33566 < count__33561_33565)){
var mrk_33567 = cljs.core._nth.call(null,chunk__33560_33564,i__33562_33566);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_33567);

var G__33568 = seq__33559_33563;
var G__33569 = chunk__33560_33564;
var G__33570 = count__33561_33565;
var G__33571 = (i__33562_33566 + (1));
seq__33559_33563 = G__33568;
chunk__33560_33564 = G__33569;
count__33561_33565 = G__33570;
i__33562_33566 = G__33571;
continue;
} else {
var temp__4657__auto___33572 = cljs.core.seq.call(null,seq__33559_33563);
if(temp__4657__auto___33572){
var seq__33559_33573__$1 = temp__4657__auto___33572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33559_33573__$1)){
var c__21188__auto___33574 = cljs.core.chunk_first.call(null,seq__33559_33573__$1);
var G__33575 = cljs.core.chunk_rest.call(null,seq__33559_33573__$1);
var G__33576 = c__21188__auto___33574;
var G__33577 = cljs.core.count.call(null,c__21188__auto___33574);
var G__33578 = (0);
seq__33559_33563 = G__33575;
chunk__33560_33564 = G__33576;
count__33561_33565 = G__33577;
i__33562_33566 = G__33578;
continue;
} else {
var mrk_33579 = cljs.core.first.call(null,seq__33559_33573__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_33579);

var G__33580 = cljs.core.next.call(null,seq__33559_33573__$1);
var G__33581 = null;
var G__33582 = (0);
var G__33583 = (0);
seq__33559_33563 = G__33580;
chunk__33560_33564 = G__33581;
count__33561_33565 = G__33582;
i__33562_33566 = G__33583;
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
var args33584 = [];
var len__21482__auto___33590 = arguments.length;
var i__21483__auto___33591 = (0);
while(true){
if((i__21483__auto___33591 < len__21482__auto___33590)){
args33584.push((arguments[i__21483__auto___33591]));

var G__33592 = (i__21483__auto___33591 + (1));
i__21483__auto___33591 = G__33592;
continue;
} else {
}
break;
}

var G__33586 = args33584.length;
switch (G__33586) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33584.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__33587 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__33587,(0),null);
var lon = cljs.core.nth.call(null,vec__33587,(1),null);
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
return (function (p1__33594_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__33594_SHARP_),cljs.core.second.call(null,p1__33594_SHARP_)));
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
var vec__33598 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__33598,(0),null);
var s = cljs.core.nth.call(null,vec__33598,(1),null);
var w = cljs.core.nth.call(null,vec__33598,(2),null);
var e = cljs.core.nth.call(null,vec__33598,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__33598,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__33598,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__33601,zoom,lock){
var vec__33605 = p__33601;
var lat = cljs.core.nth.call(null,vec__33605,(0),null);
var lon = cljs.core.nth.call(null,vec__33605,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20374__auto__ = zoom;
if(cljs.core.truth_(or__20374__auto__)){
return or__20374__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__33608_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__33608_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__33609_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__33609_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__33610_SHARP_){
return p1__33610_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__33611,ops){
var vec__33615 = p__33611;
var id1 = cljs.core.nth.call(null,vec__33615,(0),null);
var id2 = cljs.core.nth.call(null,vec__33615,(1),null);
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
var args33619 = [];
var len__21482__auto___33622 = arguments.length;
var i__21483__auto___33623 = (0);
while(true){
if((i__21483__auto___33623 < len__21482__auto___33622)){
args33619.push((arguments[i__21483__auto___33623]));

var G__33624 = (i__21483__auto___33623 + (1));
i__21483__auto___33623 = G__33624;
continue;
} else {
}
break;
}

var G__33621 = args33619.length;
switch (G__33621) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33619.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33618_SHARP_){
return chart.client.select_airport.call(null,sel,p1__33618_SHARP_);
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
var seq__33682 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__33683 = null;
var count__33684 = (0);
var i__33685 = (0);
while(true){
if((i__33685 < count__33684)){
var map__33686 = cljs.core._nth.call(null,chunk__33683,i__33685);
var map__33686__$1 = ((((!((map__33686 == null)))?((((map__33686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33686):map__33686);
var ins = map__33686__$1;
var instruct = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33688_33738 = cljs.core._EQ_;
var expr__33689_33739 = instruct;
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33689_33739))){
var map__33691_33740 = ins;
var map__33691_33741__$1 = ((((!((map__33691_33740 == null)))?((((map__33691_33740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33691_33740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33691_33740):map__33691_33740);
var id_33742 = cljs.core.get.call(null,map__33691_33741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33743 = cljs.core.get.call(null,map__33691_33741__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33742,vehicle_33743);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33689_33739))){
var map__33693_33744 = ins;
var map__33693_33745__$1 = ((((!((map__33693_33744 == null)))?((((map__33693_33744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693_33744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693_33744):map__33693_33744);
var id_33746 = cljs.core.get.call(null,map__33693_33745__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33746);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33689_33739))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33689_33739))){
var map__33695_33747 = ins;
var map__33695_33748__$1 = ((((!((map__33695_33747 == null)))?((((map__33695_33747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33695_33747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33695_33747):map__33695_33747);
var id_33749 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33750 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33751 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33752 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33753 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_33754 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_33755 = cljs.core.get.call(null,map__33695_33748__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_33749)){
chart.client.popup.call(null,id_33749,html_33752,time_33753);
} else {
if(cljs.core.truth_((function (){var and__20362__auto__ = width_33754;
if(cljs.core.truth_(and__20362__auto__)){
var and__20362__auto____$1 = height_33755;
if(cljs.core.truth_(and__20362__auto____$1)){
var and__20362__auto____$2 = lat_33750;
if(cljs.core.truth_(and__20362__auto____$2)){
return lon_33751;
} else {
return and__20362__auto____$2;
}
} else {
return and__20362__auto____$1;
}
} else {
return and__20362__auto__;
}
})())){
chart.client.popup.call(null,lat_33750,lon_33751,html_33752,time_33753,width_33754,height_33755);
} else {
if(cljs.core.truth_((function (){var and__20362__auto__ = lat_33750;
if(cljs.core.truth_(and__20362__auto__)){
return lon_33751;
} else {
return and__20362__auto__;
}
})())){
chart.client.popup.call(null,lat_33750,lon_33751,html_33752,time_33753);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33689_33739))){
var map__33697_33756 = ins;
var map__33697_33757__$1 = ((((!((map__33697_33756 == null)))?((((map__33697_33756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33697_33756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33697_33756):map__33697_33756);
var id_33758 = cljs.core.get.call(null,map__33697_33757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33759 = cljs.core.get.call(null,map__33697_33757__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33760 = cljs.core.get.call(null,map__33697_33757__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33761 = cljs.core.get.call(null,map__33697_33757__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33758,points_33759,options_33760,time_33761);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33689_33739))){
var map__33699_33762 = ins;
var map__33699_33763__$1 = ((((!((map__33699_33762 == null)))?((((map__33699_33762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33699_33762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33699_33762):map__33699_33762);
var coord_33764 = cljs.core.get.call(null,map__33699_33763__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_33765 = cljs.core.get.call(null,map__33699_33763__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_33766 = cljs.core.get.call(null,map__33699_33763__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_33764,zoom_33765,lock_33766);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__33689_33739))){
var map__33701_33767 = ins;
var map__33701_33768__$1 = ((((!((map__33701_33767 == null)))?((((map__33701_33767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33701_33767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33701_33767):map__33701_33767);
var iname_33769 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_33770 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_33771 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33772 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_33773 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_33774 = cljs.core.get.call(null,map__33701_33768__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_33769,tip_33770,lat_33771,lon_33772,feature_33773,url_ico_33774);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__33689_33739))){
var map__33703_33775 = ins;
var map__33703_33776__$1 = ((((!((map__33703_33775 == null)))?((((map__33703_33775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33703_33775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33703_33775):map__33703_33775);
var iname_33777 = cljs.core.get.call(null,map__33703_33776__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_33777);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__33689_33739))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__33689_33739))){
var map__33705_33778 = ins;
var map__33705_33779__$1 = ((((!((map__33705_33778 == null)))?((((map__33705_33778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33705_33778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33705_33778):map__33705_33778);
var ids_33780 = cljs.core.get.call(null,map__33705_33779__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_33781 = cljs.core.get.call(null,map__33705_33779__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_33780,options_33781);
} else {
if(cljs.core.truth_(pred__33688_33738.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__33689_33739))){
var map__33707_33782 = ins;
var map__33707_33783__$1 = ((((!((map__33707_33782 == null)))?((((map__33707_33782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33707_33782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33707_33782):map__33707_33782);
var question_33784 = cljs.core.get.call(null,map__33707_33783__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_33785 = cljs.core.get.call(null,map__33707_33783__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__33709_33786 = cljs.core._EQ_;
var expr__33710_33787 = question_33784;
if(cljs.core.truth_(pred__33709_33786.call(null,"city",expr__33710_33787))){
chart.client.select_city.call(null,param_33785);
} else {
if(cljs.core.truth_(pred__33709_33786.call(null,"airport",expr__33710_33787))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33710_33787)].join('')));
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

var G__33788 = seq__33682;
var G__33789 = chunk__33683;
var G__33790 = count__33684;
var G__33791 = (i__33685 + (1));
seq__33682 = G__33788;
chunk__33683 = G__33789;
count__33684 = G__33790;
i__33685 = G__33791;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33682);
if(temp__4657__auto__){
var seq__33682__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33682__$1)){
var c__21188__auto__ = cljs.core.chunk_first.call(null,seq__33682__$1);
var G__33792 = cljs.core.chunk_rest.call(null,seq__33682__$1);
var G__33793 = c__21188__auto__;
var G__33794 = cljs.core.count.call(null,c__21188__auto__);
var G__33795 = (0);
seq__33682 = G__33792;
chunk__33683 = G__33793;
count__33684 = G__33794;
i__33685 = G__33795;
continue;
} else {
var map__33712 = cljs.core.first.call(null,seq__33682__$1);
var map__33712__$1 = ((((!((map__33712 == null)))?((((map__33712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33712):map__33712);
var ins = map__33712__$1;
var instruct = cljs.core.get.call(null,map__33712__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33714_33796 = cljs.core._EQ_;
var expr__33715_33797 = instruct;
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33715_33797))){
var map__33717_33798 = ins;
var map__33717_33799__$1 = ((((!((map__33717_33798 == null)))?((((map__33717_33798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33717_33798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33717_33798):map__33717_33798);
var id_33800 = cljs.core.get.call(null,map__33717_33799__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33801 = cljs.core.get.call(null,map__33717_33799__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33800,vehicle_33801);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33715_33797))){
var map__33719_33802 = ins;
var map__33719_33803__$1 = ((((!((map__33719_33802 == null)))?((((map__33719_33802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33719_33802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33719_33802):map__33719_33802);
var id_33804 = cljs.core.get.call(null,map__33719_33803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33804);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33715_33797))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33715_33797))){
var map__33721_33805 = ins;
var map__33721_33806__$1 = ((((!((map__33721_33805 == null)))?((((map__33721_33805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721_33805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721_33805):map__33721_33805);
var id_33807 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33808 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33809 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33810 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33811 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_33812 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_33813 = cljs.core.get.call(null,map__33721_33806__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_33807)){
chart.client.popup.call(null,id_33807,html_33810,time_33811);
} else {
if(cljs.core.truth_((function (){var and__20362__auto__ = width_33812;
if(cljs.core.truth_(and__20362__auto__)){
var and__20362__auto____$1 = height_33813;
if(cljs.core.truth_(and__20362__auto____$1)){
var and__20362__auto____$2 = lat_33808;
if(cljs.core.truth_(and__20362__auto____$2)){
return lon_33809;
} else {
return and__20362__auto____$2;
}
} else {
return and__20362__auto____$1;
}
} else {
return and__20362__auto__;
}
})())){
chart.client.popup.call(null,lat_33808,lon_33809,html_33810,time_33811,width_33812,height_33813);
} else {
if(cljs.core.truth_((function (){var and__20362__auto__ = lat_33808;
if(cljs.core.truth_(and__20362__auto__)){
return lon_33809;
} else {
return and__20362__auto__;
}
})())){
chart.client.popup.call(null,lat_33808,lon_33809,html_33810,time_33811);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33715_33797))){
var map__33723_33814 = ins;
var map__33723_33815__$1 = ((((!((map__33723_33814 == null)))?((((map__33723_33814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33723_33814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33723_33814):map__33723_33814);
var id_33816 = cljs.core.get.call(null,map__33723_33815__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33817 = cljs.core.get.call(null,map__33723_33815__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33818 = cljs.core.get.call(null,map__33723_33815__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33819 = cljs.core.get.call(null,map__33723_33815__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33816,points_33817,options_33818,time_33819);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33715_33797))){
var map__33725_33820 = ins;
var map__33725_33821__$1 = ((((!((map__33725_33820 == null)))?((((map__33725_33820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33725_33820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33725_33820):map__33725_33820);
var coord_33822 = cljs.core.get.call(null,map__33725_33821__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_33823 = cljs.core.get.call(null,map__33725_33821__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_33824 = cljs.core.get.call(null,map__33725_33821__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_33822,zoom_33823,lock_33824);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__33715_33797))){
var map__33727_33825 = ins;
var map__33727_33826__$1 = ((((!((map__33727_33825 == null)))?((((map__33727_33825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33727_33825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33727_33825):map__33727_33825);
var iname_33827 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_33828 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_33829 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33830 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_33831 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_33832 = cljs.core.get.call(null,map__33727_33826__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_33827,tip_33828,lat_33829,lon_33830,feature_33831,url_ico_33832);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__33715_33797))){
var map__33729_33833 = ins;
var map__33729_33834__$1 = ((((!((map__33729_33833 == null)))?((((map__33729_33833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33729_33833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33729_33833):map__33729_33833);
var iname_33835 = cljs.core.get.call(null,map__33729_33834__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_33835);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__33715_33797))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__33715_33797))){
var map__33731_33836 = ins;
var map__33731_33837__$1 = ((((!((map__33731_33836 == null)))?((((map__33731_33836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33731_33836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33731_33836):map__33731_33836);
var ids_33838 = cljs.core.get.call(null,map__33731_33837__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_33839 = cljs.core.get.call(null,map__33731_33837__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_33838,options_33839);
} else {
if(cljs.core.truth_(pred__33714_33796.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__33715_33797))){
var map__33733_33840 = ins;
var map__33733_33841__$1 = ((((!((map__33733_33840 == null)))?((((map__33733_33840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33733_33840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33733_33840):map__33733_33840);
var question_33842 = cljs.core.get.call(null,map__33733_33841__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_33843 = cljs.core.get.call(null,map__33733_33841__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__33735_33844 = cljs.core._EQ_;
var expr__33736_33845 = question_33842;
if(cljs.core.truth_(pred__33735_33844.call(null,"city",expr__33736_33845))){
chart.client.select_city.call(null,param_33843);
} else {
if(cljs.core.truth_(pred__33735_33844.call(null,"airport",expr__33736_33845))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33736_33845)].join('')));
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

var G__33846 = cljs.core.next.call(null,seq__33682__$1);
var G__33847 = null;
var G__33848 = (0);
var G__33849 = (0);
seq__33682 = G__33846;
chunk__33683 = G__33847;
count__33684 = G__33848;
i__33685 = G__33849;
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
var args33851 = [];
var len__21482__auto___33854 = arguments.length;
var i__21483__auto___33855 = (0);
while(true){
if((i__21483__auto___33855 < len__21482__auto___33854)){
args33851.push((arguments[i__21483__auto___33855]));

var G__33856 = (i__21483__auto___33855 + (1));
i__21483__auto___33855 = G__33856;
continue;
} else {
}
break;
}

var G__33853 = args33851.length;
switch (G__33853) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33851.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33850_SHARP_){
return chart.client.move_to.call(null,sel,p1__33850_SHARP_);
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
var args33862 = [];
var len__21482__auto___33865 = arguments.length;
var i__21483__auto___33866 = (0);
while(true){
if((i__21483__auto___33866 < len__21482__auto___33865)){
args33862.push((arguments[i__21483__auto___33866]));

var G__33867 = (i__21483__auto___33866 + (1));
i__21483__auto___33866 = G__33867;
continue;
} else {
}
break;
}

var G__33864 = args33862.length;
switch (G__33864) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33862.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__33858_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__33858_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33859_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__33859_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__33860_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__33860_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33861_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__33861_SHARP_);
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
var args33872 = [];
var len__21482__auto___33875 = arguments.length;
var i__21483__auto___33876 = (0);
while(true){
if((i__21483__auto___33876 < len__21482__auto___33875)){
args33872.push((arguments[i__21483__auto___33876]));

var G__33877 = (i__21483__auto___33876 + (1));
i__21483__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var G__33874 = args33872.length;
switch (G__33874) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33872.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__33869_SHARP_){
return chart.client.question.call(null,sel,p1__33869_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__33870_SHARP_){
return chart.client.question.call(null,pred,sel,p1__33870_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__33871_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__33871_SHARP_);
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
var pred__33882_33885 = cljs.core._EQ_;
var expr__33883_33886 = cmd;
if(cljs.core.truth_(pred__33882_33885.call(null,"commands",expr__33883_33886))){
} else {
if(cljs.core.truth_(pred__33882_33885.call(null,"watch-visible",expr__33883_33886))){
var bnd_33887 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_33888 = [cljs.core.str("?n="),cljs.core.str(bnd_33887.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_33887.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_33887.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_33887.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_33888)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__33882_33885.call(null,"move-to",expr__33883_33886))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__33882_33885.call(null,"schedule",expr__33883_33886))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__33882_33885.call(null,"question",expr__33883_33886))){
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
}catch (e33890){if((e33890 instanceof Error)){
var e_33891 = e33890;
cljs.core.println.call(null,e_33891);
} else {
throw e33890;

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