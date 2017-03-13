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
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__42474 = response;
var map__42474__$1 = ((((!((map__42474 == null)))?((((map__42474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42474):map__42474);
var status = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_42482 = cljs.core.deref.call(null,vmp);
var mrk_42483 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_42482);
var vec__42479_42484 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_42482);
var lat_42485 = cljs.core.nth.call(null,vec__42479_42484,(0),null);
var lon_42486 = cljs.core.nth.call(null,vec__42479_42484,(1),null);
var pos_42487 = (new L.LatLng(lat_42485,lon_42486));
mrk_42483.setLatLng(pos_42487);

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
var seq__42492_42496 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__42493_42497 = null;
var count__42494_42498 = (0);
var i__42495_42499 = (0);
while(true){
if((i__42495_42499 < count__42494_42498)){
var veh_42500 = cljs.core._nth.call(null,chunk__42493_42497,i__42495_42499);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_42500)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_42500)));

var G__42501 = seq__42492_42496;
var G__42502 = chunk__42493_42497;
var G__42503 = count__42494_42498;
var G__42504 = (i__42495_42499 + (1));
seq__42492_42496 = G__42501;
chunk__42493_42497 = G__42502;
count__42494_42498 = G__42503;
i__42495_42499 = G__42504;
continue;
} else {
var temp__4657__auto___42505 = cljs.core.seq.call(null,seq__42492_42496);
if(temp__4657__auto___42505){
var seq__42492_42506__$1 = temp__4657__auto___42505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42492_42506__$1)){
var c__24044__auto___42507 = cljs.core.chunk_first.call(null,seq__42492_42506__$1);
var G__42508 = cljs.core.chunk_rest.call(null,seq__42492_42506__$1);
var G__42509 = c__24044__auto___42507;
var G__42510 = cljs.core.count.call(null,c__24044__auto___42507);
var G__42511 = (0);
seq__42492_42496 = G__42508;
chunk__42493_42497 = G__42509;
count__42494_42498 = G__42510;
i__42495_42499 = G__42511;
continue;
} else {
var veh_42512 = cljs.core.first.call(null,seq__42492_42506__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_42512)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_42512)));

var G__42513 = cljs.core.next.call(null,seq__42492_42506__$1);
var G__42514 = null;
var G__42515 = (0);
var G__42516 = (0);
seq__42492_42496 = G__42513;
chunk__42493_42497 = G__42514;
count__42494_42498 = G__42515;
i__42495_42499 = G__42516;
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

var vec__42521 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__42521,(0),null);
var lon = cljs.core.nth.call(null,vec__42521,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__42521,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__42521,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__42517_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__42517_SHARP_))),e.target);
});})(vec__42521,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__42521,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__23230__auto__ = url_ico;
if(cljs.core.truth_(or__23230__auto__)){
return or__23230__auto__;
} else {
var or__23230__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__23230__auto____$1)){
return or__23230__auto____$1;
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
var seq__42528_42532 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__42529_42533 = null;
var count__42530_42534 = (0);
var i__42531_42535 = (0);
while(true){
if((i__42531_42535 < count__42530_42534)){
var mrk_42536 = cljs.core._nth.call(null,chunk__42529_42533,i__42531_42535);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_42536);

var G__42537 = seq__42528_42532;
var G__42538 = chunk__42529_42533;
var G__42539 = count__42530_42534;
var G__42540 = (i__42531_42535 + (1));
seq__42528_42532 = G__42537;
chunk__42529_42533 = G__42538;
count__42530_42534 = G__42539;
i__42531_42535 = G__42540;
continue;
} else {
var temp__4657__auto___42541 = cljs.core.seq.call(null,seq__42528_42532);
if(temp__4657__auto___42541){
var seq__42528_42542__$1 = temp__4657__auto___42541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42528_42542__$1)){
var c__24044__auto___42543 = cljs.core.chunk_first.call(null,seq__42528_42542__$1);
var G__42544 = cljs.core.chunk_rest.call(null,seq__42528_42542__$1);
var G__42545 = c__24044__auto___42543;
var G__42546 = cljs.core.count.call(null,c__24044__auto___42543);
var G__42547 = (0);
seq__42528_42532 = G__42544;
chunk__42529_42533 = G__42545;
count__42530_42534 = G__42546;
i__42531_42535 = G__42547;
continue;
} else {
var mrk_42548 = cljs.core.first.call(null,seq__42528_42542__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_42548);

var G__42549 = cljs.core.next.call(null,seq__42528_42542__$1);
var G__42550 = null;
var G__42551 = (0);
var G__42552 = (0);
seq__42528_42532 = G__42549;
chunk__42529_42533 = G__42550;
count__42530_42534 = G__42551;
i__42531_42535 = G__42552;
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
var args42553 = [];
var len__24338__auto___42559 = arguments.length;
var i__24339__auto___42560 = (0);
while(true){
if((i__24339__auto___42560 < len__24338__auto___42559)){
args42553.push((arguments[i__24339__auto___42560]));

var G__42561 = (i__24339__auto___42560 + (1));
i__24339__auto___42560 = G__42561;
continue;
} else {
}
break;
}

var G__42555 = args42553.length;
switch (G__42555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42553.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__42556 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__42556,(0),null);
var lon = cljs.core.nth.call(null,vec__42556,(1),null);
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
return (function (p1__42563_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__42563_SHARP_),cljs.core.second.call(null,p1__42563_SHARP_)));
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
var vec__42567 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__42567,(0),null);
var s = cljs.core.nth.call(null,vec__42567,(1),null);
var w = cljs.core.nth.call(null,vec__42567,(2),null);
var e = cljs.core.nth.call(null,vec__42567,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__42567,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__42567,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__42570,zoom,lock){
var vec__42574 = p__42570;
var lat = cljs.core.nth.call(null,vec__42574,(0),null);
var lon = cljs.core.nth.call(null,vec__42574,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__23230__auto__ = zoom;
if(cljs.core.truth_(or__23230__auto__)){
return or__23230__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__42577_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__42577_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__42578_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__42578_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__42579_SHARP_){
return p1__42579_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__42580,ops){
var vec__42584 = p__42580;
var id1 = cljs.core.nth.call(null,vec__42584,(0),null);
var id2 = cljs.core.nth.call(null,vec__42584,(1),null);
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
var seq__42633 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__42634 = null;
var count__42635 = (0);
var i__42636 = (0);
while(true){
if((i__42636 < count__42635)){
var map__42637 = cljs.core._nth.call(null,chunk__42634,i__42636);
var map__42637__$1 = ((((!((map__42637 == null)))?((((map__42637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42637):map__42637);
var ins = map__42637__$1;
var instruct = cljs.core.get.call(null,map__42637__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__42639_42679 = cljs.core._EQ_;
var expr__42640_42680 = instruct;
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__42640_42680))){
var map__42642_42681 = ins;
var map__42642_42682__$1 = ((((!((map__42642_42681 == null)))?((((map__42642_42681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42642_42681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42642_42681):map__42642_42681);
var id_42683 = cljs.core.get.call(null,map__42642_42682__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_42684 = cljs.core.get.call(null,map__42642_42682__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_42683,vehicle_42684);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__42640_42680))){
var map__42644_42685 = ins;
var map__42644_42686__$1 = ((((!((map__42644_42685 == null)))?((((map__42644_42685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42644_42685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42644_42685):map__42644_42685);
var id_42687 = cljs.core.get.call(null,map__42644_42686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_42687);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__42640_42680))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__42640_42680))){
var map__42646_42688 = ins;
var map__42646_42689__$1 = ((((!((map__42646_42688 == null)))?((((map__42646_42688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42646_42688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42646_42688):map__42646_42688);
var id_42690 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_42691 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_42692 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_42693 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_42694 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_42695 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_42696 = cljs.core.get.call(null,map__42646_42689__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_42690)){
chart.client.popup.call(null,id_42690,html_42693,time_42694);
} else {
if(cljs.core.truth_((function (){var and__23218__auto__ = width_42695;
if(cljs.core.truth_(and__23218__auto__)){
var and__23218__auto____$1 = height_42696;
if(cljs.core.truth_(and__23218__auto____$1)){
var and__23218__auto____$2 = lat_42691;
if(cljs.core.truth_(and__23218__auto____$2)){
return lon_42692;
} else {
return and__23218__auto____$2;
}
} else {
return and__23218__auto____$1;
}
} else {
return and__23218__auto__;
}
})())){
chart.client.popup.call(null,lat_42691,lon_42692,html_42693,time_42694,width_42695,height_42696);
} else {
if(cljs.core.truth_((function (){var and__23218__auto__ = lat_42691;
if(cljs.core.truth_(and__23218__auto__)){
return lon_42692;
} else {
return and__23218__auto__;
}
})())){
chart.client.popup.call(null,lat_42691,lon_42692,html_42693,time_42694);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__42640_42680))){
var map__42648_42697 = ins;
var map__42648_42698__$1 = ((((!((map__42648_42697 == null)))?((((map__42648_42697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42648_42697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42648_42697):map__42648_42697);
var id_42699 = cljs.core.get.call(null,map__42648_42698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_42700 = cljs.core.get.call(null,map__42648_42698__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_42701 = cljs.core.get.call(null,map__42648_42698__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_42702 = cljs.core.get.call(null,map__42648_42698__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_42699,points_42700,options_42701,time_42702);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__42640_42680))){
var map__42650_42703 = ins;
var map__42650_42704__$1 = ((((!((map__42650_42703 == null)))?((((map__42650_42703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42650_42703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42650_42703):map__42650_42703);
var coord_42705 = cljs.core.get.call(null,map__42650_42704__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_42706 = cljs.core.get.call(null,map__42650_42704__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_42707 = cljs.core.get.call(null,map__42650_42704__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_42705,zoom_42706,lock_42707);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__42640_42680))){
var map__42652_42708 = ins;
var map__42652_42709__$1 = ((((!((map__42652_42708 == null)))?((((map__42652_42708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42652_42708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42652_42708):map__42652_42708);
var iname_42710 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_42711 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_42712 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_42713 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_42714 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_42715 = cljs.core.get.call(null,map__42652_42709__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_42710,tip_42711,lat_42712,lon_42713,feature_42714,url_ico_42715);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__42640_42680))){
var map__42654_42716 = ins;
var map__42654_42717__$1 = ((((!((map__42654_42716 == null)))?((((map__42654_42716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42654_42716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42654_42716):map__42654_42716);
var iname_42718 = cljs.core.get.call(null,map__42654_42717__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_42718);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__42640_42680))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__42639_42679.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__42640_42680))){
var map__42656_42719 = ins;
var map__42656_42720__$1 = ((((!((map__42656_42719 == null)))?((((map__42656_42719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42656_42719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42656_42719):map__42656_42719);
var ids_42721 = cljs.core.get.call(null,map__42656_42720__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_42722 = cljs.core.get.call(null,map__42656_42720__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_42721,options_42722);
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

var G__42723 = seq__42633;
var G__42724 = chunk__42634;
var G__42725 = count__42635;
var G__42726 = (i__42636 + (1));
seq__42633 = G__42723;
chunk__42634 = G__42724;
count__42635 = G__42725;
i__42636 = G__42726;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42633);
if(temp__4657__auto__){
var seq__42633__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42633__$1)){
var c__24044__auto__ = cljs.core.chunk_first.call(null,seq__42633__$1);
var G__42727 = cljs.core.chunk_rest.call(null,seq__42633__$1);
var G__42728 = c__24044__auto__;
var G__42729 = cljs.core.count.call(null,c__24044__auto__);
var G__42730 = (0);
seq__42633 = G__42727;
chunk__42634 = G__42728;
count__42635 = G__42729;
i__42636 = G__42730;
continue;
} else {
var map__42658 = cljs.core.first.call(null,seq__42633__$1);
var map__42658__$1 = ((((!((map__42658 == null)))?((((map__42658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42658):map__42658);
var ins = map__42658__$1;
var instruct = cljs.core.get.call(null,map__42658__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__42660_42731 = cljs.core._EQ_;
var expr__42661_42732 = instruct;
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__42661_42732))){
var map__42663_42733 = ins;
var map__42663_42734__$1 = ((((!((map__42663_42733 == null)))?((((map__42663_42733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42663_42733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42663_42733):map__42663_42733);
var id_42735 = cljs.core.get.call(null,map__42663_42734__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_42736 = cljs.core.get.call(null,map__42663_42734__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_42735,vehicle_42736);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__42661_42732))){
var map__42665_42737 = ins;
var map__42665_42738__$1 = ((((!((map__42665_42737 == null)))?((((map__42665_42737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42665_42737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42665_42737):map__42665_42737);
var id_42739 = cljs.core.get.call(null,map__42665_42738__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_42739);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__42661_42732))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__42661_42732))){
var map__42667_42740 = ins;
var map__42667_42741__$1 = ((((!((map__42667_42740 == null)))?((((map__42667_42740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42667_42740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42667_42740):map__42667_42740);
var id_42742 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_42743 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_42744 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_42745 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_42746 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_42747 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_42748 = cljs.core.get.call(null,map__42667_42741__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_42742)){
chart.client.popup.call(null,id_42742,html_42745,time_42746);
} else {
if(cljs.core.truth_((function (){var and__23218__auto__ = width_42747;
if(cljs.core.truth_(and__23218__auto__)){
var and__23218__auto____$1 = height_42748;
if(cljs.core.truth_(and__23218__auto____$1)){
var and__23218__auto____$2 = lat_42743;
if(cljs.core.truth_(and__23218__auto____$2)){
return lon_42744;
} else {
return and__23218__auto____$2;
}
} else {
return and__23218__auto____$1;
}
} else {
return and__23218__auto__;
}
})())){
chart.client.popup.call(null,lat_42743,lon_42744,html_42745,time_42746,width_42747,height_42748);
} else {
if(cljs.core.truth_((function (){var and__23218__auto__ = lat_42743;
if(cljs.core.truth_(and__23218__auto__)){
return lon_42744;
} else {
return and__23218__auto__;
}
})())){
chart.client.popup.call(null,lat_42743,lon_42744,html_42745,time_42746);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__42661_42732))){
var map__42669_42749 = ins;
var map__42669_42750__$1 = ((((!((map__42669_42749 == null)))?((((map__42669_42749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42669_42749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42669_42749):map__42669_42749);
var id_42751 = cljs.core.get.call(null,map__42669_42750__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_42752 = cljs.core.get.call(null,map__42669_42750__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_42753 = cljs.core.get.call(null,map__42669_42750__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_42754 = cljs.core.get.call(null,map__42669_42750__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_42751,points_42752,options_42753,time_42754);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__42661_42732))){
var map__42671_42755 = ins;
var map__42671_42756__$1 = ((((!((map__42671_42755 == null)))?((((map__42671_42755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42671_42755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42671_42755):map__42671_42755);
var coord_42757 = cljs.core.get.call(null,map__42671_42756__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_42758 = cljs.core.get.call(null,map__42671_42756__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_42759 = cljs.core.get.call(null,map__42671_42756__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_42757,zoom_42758,lock_42759);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__42661_42732))){
var map__42673_42760 = ins;
var map__42673_42761__$1 = ((((!((map__42673_42760 == null)))?((((map__42673_42760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42673_42760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42673_42760):map__42673_42760);
var iname_42762 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_42763 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_42764 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_42765 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_42766 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_42767 = cljs.core.get.call(null,map__42673_42761__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_42762,tip_42763,lat_42764,lon_42765,feature_42766,url_ico_42767);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__42661_42732))){
var map__42675_42768 = ins;
var map__42675_42769__$1 = ((((!((map__42675_42768 == null)))?((((map__42675_42768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42675_42768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42675_42768):map__42675_42768);
var iname_42770 = cljs.core.get.call(null,map__42675_42769__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_42770);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__42661_42732))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__42660_42731.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__42661_42732))){
var map__42677_42771 = ins;
var map__42677_42772__$1 = ((((!((map__42677_42771 == null)))?((((map__42677_42771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42677_42771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42677_42771):map__42677_42771);
var ids_42773 = cljs.core.get.call(null,map__42677_42772__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_42774 = cljs.core.get.call(null,map__42677_42772__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_42773,options_42774);
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

var G__42775 = cljs.core.next.call(null,seq__42633__$1);
var G__42776 = null;
var G__42777 = (0);
var G__42778 = (0);
seq__42633 = G__42775;
chunk__42634 = G__42776;
count__42635 = G__42777;
i__42636 = G__42778;
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
var args42780 = [];
var len__24338__auto___42783 = arguments.length;
var i__24339__auto___42784 = (0);
while(true){
if((i__24339__auto___42784 < len__24338__auto___42783)){
args42780.push((arguments[i__24339__auto___42784]));

var G__42785 = (i__24339__auto___42784 + (1));
i__24339__auto___42784 = G__42785;
continue;
} else {
}
break;
}

var G__42782 = args42780.length;
switch (G__42782) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42780.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__42779_SHARP_){
return chart.client.move_to.call(null,sel,p1__42779_SHARP_);
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
var args42791 = [];
var len__24338__auto___42794 = arguments.length;
var i__24339__auto___42795 = (0);
while(true){
if((i__24339__auto___42795 < len__24338__auto___42794)){
args42791.push((arguments[i__24339__auto___42795]));

var G__42796 = (i__24339__auto___42795 + (1));
i__24339__auto___42795 = G__42796;
continue;
} else {
}
break;
}

var G__42793 = args42791.length;
switch (G__42793) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42791.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__42787_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__42787_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__42788_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__42788_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__42789_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__42789_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__42790_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__42790_SHARP_);
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
var pred__42801_42804 = cljs.core._EQ_;
var expr__42802_42805 = cmd;
if(cljs.core.truth_(pred__42801_42804.call(null,"commands",expr__42802_42805))){
} else {
if(cljs.core.truth_(pred__42801_42804.call(null,"watch-visible",expr__42802_42805))){
var bnd_42806 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_42807 = [cljs.core.str("?n="),cljs.core.str(bnd_42806.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_42806.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_42806.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_42806.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_42807)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__42801_42804.call(null,"move-to",expr__42802_42805))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__42801_42804.call(null,"schedule",expr__42802_42805))){
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
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e42809){if((e42809 instanceof Error)){
var e_42810 = e42809;
cljs.core.println.call(null,e_42810);
} else {
throw e42809;

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
var pred__42814_42817 = cljs.core._EQ_;
var expr__42815_42818 = q;
if(cljs.core.truth_(pred__42814_42817.call(null,"questions",expr__42815_42818))){
} else {
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map