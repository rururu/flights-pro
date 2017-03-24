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
var map__13448 = response;
var map__13448__$1 = ((((!((map__13448 == null)))?((((map__13448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13448):map__13448);
var status = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13448__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_13456 = cljs.core.deref.call(null,vmp);
var mrk_13457 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_13456);
var vec__13453_13458 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_13456);
var lat_13459 = cljs.core.nth.call(null,vec__13453_13458,(0),null);
var lon_13460 = cljs.core.nth.call(null,vec__13453_13458,(1),null);
var pos_13461 = (new L.LatLng(lat_13459,lon_13460));
mrk_13457.setLatLng(pos_13461);

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
var seq__13466_13470 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__13467_13471 = null;
var count__13468_13472 = (0);
var i__13469_13473 = (0);
while(true){
if((i__13469_13473 < count__13468_13472)){
var veh_13474 = cljs.core._nth.call(null,chunk__13467_13471,i__13469_13473);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13474)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13474)));

var G__13475 = seq__13466_13470;
var G__13476 = chunk__13467_13471;
var G__13477 = count__13468_13472;
var G__13478 = (i__13469_13473 + (1));
seq__13466_13470 = G__13475;
chunk__13467_13471 = G__13476;
count__13468_13472 = G__13477;
i__13469_13473 = G__13478;
continue;
} else {
var temp__4657__auto___13479 = cljs.core.seq.call(null,seq__13466_13470);
if(temp__4657__auto___13479){
var seq__13466_13480__$1 = temp__4657__auto___13479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13466_13480__$1)){
var c__10059__auto___13481 = cljs.core.chunk_first.call(null,seq__13466_13480__$1);
var G__13482 = cljs.core.chunk_rest.call(null,seq__13466_13480__$1);
var G__13483 = c__10059__auto___13481;
var G__13484 = cljs.core.count.call(null,c__10059__auto___13481);
var G__13485 = (0);
seq__13466_13470 = G__13482;
chunk__13467_13471 = G__13483;
count__13468_13472 = G__13484;
i__13469_13473 = G__13485;
continue;
} else {
var veh_13486 = cljs.core.first.call(null,seq__13466_13480__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13486)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13486)));

var G__13487 = cljs.core.next.call(null,seq__13466_13480__$1);
var G__13488 = null;
var G__13489 = (0);
var G__13490 = (0);
seq__13466_13470 = G__13487;
chunk__13467_13471 = G__13488;
count__13468_13472 = G__13489;
i__13469_13473 = G__13490;
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

var vec__13495 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__13495,(0),null);
var lon = cljs.core.nth.call(null,vec__13495,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__13495,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__13495,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__13491_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__13491_SHARP_))),e.target);
});})(vec__13495,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__13495,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9245__auto__ = url_ico;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
var or__9245__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9245__auto____$1)){
return or__9245__auto____$1;
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
var seq__13502_13506 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__13503_13507 = null;
var count__13504_13508 = (0);
var i__13505_13509 = (0);
while(true){
if((i__13505_13509 < count__13504_13508)){
var mrk_13510 = cljs.core._nth.call(null,chunk__13503_13507,i__13505_13509);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13510);

var G__13511 = seq__13502_13506;
var G__13512 = chunk__13503_13507;
var G__13513 = count__13504_13508;
var G__13514 = (i__13505_13509 + (1));
seq__13502_13506 = G__13511;
chunk__13503_13507 = G__13512;
count__13504_13508 = G__13513;
i__13505_13509 = G__13514;
continue;
} else {
var temp__4657__auto___13515 = cljs.core.seq.call(null,seq__13502_13506);
if(temp__4657__auto___13515){
var seq__13502_13516__$1 = temp__4657__auto___13515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13502_13516__$1)){
var c__10059__auto___13517 = cljs.core.chunk_first.call(null,seq__13502_13516__$1);
var G__13518 = cljs.core.chunk_rest.call(null,seq__13502_13516__$1);
var G__13519 = c__10059__auto___13517;
var G__13520 = cljs.core.count.call(null,c__10059__auto___13517);
var G__13521 = (0);
seq__13502_13506 = G__13518;
chunk__13503_13507 = G__13519;
count__13504_13508 = G__13520;
i__13505_13509 = G__13521;
continue;
} else {
var mrk_13522 = cljs.core.first.call(null,seq__13502_13516__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13522);

var G__13523 = cljs.core.next.call(null,seq__13502_13516__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13502_13506 = G__13523;
chunk__13503_13507 = G__13524;
count__13504_13508 = G__13525;
i__13505_13509 = G__13526;
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
var args13527 = [];
var len__10353__auto___13533 = arguments.length;
var i__10354__auto___13534 = (0);
while(true){
if((i__10354__auto___13534 < len__10353__auto___13533)){
args13527.push((arguments[i__10354__auto___13534]));

var G__13535 = (i__10354__auto___13534 + (1));
i__10354__auto___13534 = G__13535;
continue;
} else {
}
break;
}

var G__13529 = args13527.length;
switch (G__13529) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13527.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__13530 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__13530,(0),null);
var lon = cljs.core.nth.call(null,vec__13530,(1),null);
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
return (function (p1__13537_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__13537_SHARP_),cljs.core.second.call(null,p1__13537_SHARP_)));
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
var vec__13541 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__13541,(0),null);
var s = cljs.core.nth.call(null,vec__13541,(1),null);
var w = cljs.core.nth.call(null,vec__13541,(2),null);
var e = cljs.core.nth.call(null,vec__13541,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__13541,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__13541,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__13544,zoom,lock){
var vec__13548 = p__13544;
var lat = cljs.core.nth.call(null,vec__13548,(0),null);
var lon = cljs.core.nth.call(null,vec__13548,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9245__auto__ = zoom;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__13551_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__13551_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__13552_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__13552_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__13553_SHARP_){
return p1__13553_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__13554,ops){
var vec__13558 = p__13554;
var id1 = cljs.core.nth.call(null,vec__13558,(0),null);
var id2 = cljs.core.nth.call(null,vec__13558,(1),null);
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
var seq__13607 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__13608 = null;
var count__13609 = (0);
var i__13610 = (0);
while(true){
if((i__13610 < count__13609)){
var map__13611 = cljs.core._nth.call(null,chunk__13608,i__13610);
var map__13611__$1 = ((((!((map__13611 == null)))?((((map__13611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13611):map__13611);
var ins = map__13611__$1;
var instruct = cljs.core.get.call(null,map__13611__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13613_13653 = cljs.core._EQ_;
var expr__13614_13654 = instruct;
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13614_13654))){
var map__13616_13655 = ins;
var map__13616_13656__$1 = ((((!((map__13616_13655 == null)))?((((map__13616_13655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13616_13655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13616_13655):map__13616_13655);
var id_13657 = cljs.core.get.call(null,map__13616_13656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13658 = cljs.core.get.call(null,map__13616_13656__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13657,vehicle_13658);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13614_13654))){
var map__13618_13659 = ins;
var map__13618_13660__$1 = ((((!((map__13618_13659 == null)))?((((map__13618_13659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13618_13659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13618_13659):map__13618_13659);
var id_13661 = cljs.core.get.call(null,map__13618_13660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13661);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13614_13654))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13614_13654))){
var map__13620_13662 = ins;
var map__13620_13663__$1 = ((((!((map__13620_13662 == null)))?((((map__13620_13662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13620_13662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13620_13662):map__13620_13662);
var id_13664 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13665 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13666 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13667 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13668 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13669 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13670 = cljs.core.get.call(null,map__13620_13663__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13664)){
chart.client.popup.call(null,id_13664,html_13667,time_13668);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = width_13669;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = height_13670;
if(cljs.core.truth_(and__9233__auto____$1)){
var and__9233__auto____$2 = lat_13665;
if(cljs.core.truth_(and__9233__auto____$2)){
return lon_13666;
} else {
return and__9233__auto____$2;
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_13665,lon_13666,html_13667,time_13668,width_13669,height_13670);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = lat_13665;
if(cljs.core.truth_(and__9233__auto__)){
return lon_13666;
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_13665,lon_13666,html_13667,time_13668);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13614_13654))){
var map__13622_13671 = ins;
var map__13622_13672__$1 = ((((!((map__13622_13671 == null)))?((((map__13622_13671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13622_13671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13622_13671):map__13622_13671);
var id_13673 = cljs.core.get.call(null,map__13622_13672__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13674 = cljs.core.get.call(null,map__13622_13672__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13675 = cljs.core.get.call(null,map__13622_13672__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13676 = cljs.core.get.call(null,map__13622_13672__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13673,points_13674,options_13675,time_13676);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13614_13654))){
var map__13624_13677 = ins;
var map__13624_13678__$1 = ((((!((map__13624_13677 == null)))?((((map__13624_13677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13624_13677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13624_13677):map__13624_13677);
var coord_13679 = cljs.core.get.call(null,map__13624_13678__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13680 = cljs.core.get.call(null,map__13624_13678__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13681 = cljs.core.get.call(null,map__13624_13678__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13679,zoom_13680,lock_13681);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13614_13654))){
var map__13626_13682 = ins;
var map__13626_13683__$1 = ((((!((map__13626_13682 == null)))?((((map__13626_13682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13626_13682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13626_13682):map__13626_13682);
var iname_13684 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13685 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13686 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13687 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13688 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13689 = cljs.core.get.call(null,map__13626_13683__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13684,tip_13685,lat_13686,lon_13687,feature_13688,url_ico_13689);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13614_13654))){
var map__13628_13690 = ins;
var map__13628_13691__$1 = ((((!((map__13628_13690 == null)))?((((map__13628_13690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13628_13690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13628_13690):map__13628_13690);
var iname_13692 = cljs.core.get.call(null,map__13628_13691__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13692);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13614_13654))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13613_13653.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13614_13654))){
var map__13630_13693 = ins;
var map__13630_13694__$1 = ((((!((map__13630_13693 == null)))?((((map__13630_13693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13630_13693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13630_13693):map__13630_13693);
var ids_13695 = cljs.core.get.call(null,map__13630_13694__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13696 = cljs.core.get.call(null,map__13630_13694__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13695,options_13696);
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

var G__13697 = seq__13607;
var G__13698 = chunk__13608;
var G__13699 = count__13609;
var G__13700 = (i__13610 + (1));
seq__13607 = G__13697;
chunk__13608 = G__13698;
count__13609 = G__13699;
i__13610 = G__13700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13607);
if(temp__4657__auto__){
var seq__13607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13607__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__13607__$1);
var G__13701 = cljs.core.chunk_rest.call(null,seq__13607__$1);
var G__13702 = c__10059__auto__;
var G__13703 = cljs.core.count.call(null,c__10059__auto__);
var G__13704 = (0);
seq__13607 = G__13701;
chunk__13608 = G__13702;
count__13609 = G__13703;
i__13610 = G__13704;
continue;
} else {
var map__13632 = cljs.core.first.call(null,seq__13607__$1);
var map__13632__$1 = ((((!((map__13632 == null)))?((((map__13632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13632):map__13632);
var ins = map__13632__$1;
var instruct = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13634_13705 = cljs.core._EQ_;
var expr__13635_13706 = instruct;
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13635_13706))){
var map__13637_13707 = ins;
var map__13637_13708__$1 = ((((!((map__13637_13707 == null)))?((((map__13637_13707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13637_13707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13637_13707):map__13637_13707);
var id_13709 = cljs.core.get.call(null,map__13637_13708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13710 = cljs.core.get.call(null,map__13637_13708__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13709,vehicle_13710);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13635_13706))){
var map__13639_13711 = ins;
var map__13639_13712__$1 = ((((!((map__13639_13711 == null)))?((((map__13639_13711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13639_13711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639_13711):map__13639_13711);
var id_13713 = cljs.core.get.call(null,map__13639_13712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13713);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13635_13706))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13635_13706))){
var map__13641_13714 = ins;
var map__13641_13715__$1 = ((((!((map__13641_13714 == null)))?((((map__13641_13714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13641_13714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13641_13714):map__13641_13714);
var id_13716 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13717 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13718 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13719 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13720 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13721 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13722 = cljs.core.get.call(null,map__13641_13715__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13716)){
chart.client.popup.call(null,id_13716,html_13719,time_13720);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = width_13721;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = height_13722;
if(cljs.core.truth_(and__9233__auto____$1)){
var and__9233__auto____$2 = lat_13717;
if(cljs.core.truth_(and__9233__auto____$2)){
return lon_13718;
} else {
return and__9233__auto____$2;
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_13717,lon_13718,html_13719,time_13720,width_13721,height_13722);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = lat_13717;
if(cljs.core.truth_(and__9233__auto__)){
return lon_13718;
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_13717,lon_13718,html_13719,time_13720);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13635_13706))){
var map__13643_13723 = ins;
var map__13643_13724__$1 = ((((!((map__13643_13723 == null)))?((((map__13643_13723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13643_13723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13643_13723):map__13643_13723);
var id_13725 = cljs.core.get.call(null,map__13643_13724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13726 = cljs.core.get.call(null,map__13643_13724__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13727 = cljs.core.get.call(null,map__13643_13724__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13728 = cljs.core.get.call(null,map__13643_13724__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13725,points_13726,options_13727,time_13728);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13635_13706))){
var map__13645_13729 = ins;
var map__13645_13730__$1 = ((((!((map__13645_13729 == null)))?((((map__13645_13729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13645_13729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13645_13729):map__13645_13729);
var coord_13731 = cljs.core.get.call(null,map__13645_13730__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13732 = cljs.core.get.call(null,map__13645_13730__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13733 = cljs.core.get.call(null,map__13645_13730__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13731,zoom_13732,lock_13733);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13635_13706))){
var map__13647_13734 = ins;
var map__13647_13735__$1 = ((((!((map__13647_13734 == null)))?((((map__13647_13734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13647_13734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13647_13734):map__13647_13734);
var iname_13736 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13737 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13738 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13739 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13740 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13741 = cljs.core.get.call(null,map__13647_13735__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13736,tip_13737,lat_13738,lon_13739,feature_13740,url_ico_13741);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13635_13706))){
var map__13649_13742 = ins;
var map__13649_13743__$1 = ((((!((map__13649_13742 == null)))?((((map__13649_13742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13649_13742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13649_13742):map__13649_13742);
var iname_13744 = cljs.core.get.call(null,map__13649_13743__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13744);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13635_13706))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13634_13705.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13635_13706))){
var map__13651_13745 = ins;
var map__13651_13746__$1 = ((((!((map__13651_13745 == null)))?((((map__13651_13745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13651_13745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13651_13745):map__13651_13745);
var ids_13747 = cljs.core.get.call(null,map__13651_13746__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13748 = cljs.core.get.call(null,map__13651_13746__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13747,options_13748);
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

var G__13749 = cljs.core.next.call(null,seq__13607__$1);
var G__13750 = null;
var G__13751 = (0);
var G__13752 = (0);
seq__13607 = G__13749;
chunk__13608 = G__13750;
count__13609 = G__13751;
i__13610 = G__13752;
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
var args13754 = [];
var len__10353__auto___13757 = arguments.length;
var i__10354__auto___13758 = (0);
while(true){
if((i__10354__auto___13758 < len__10353__auto___13757)){
args13754.push((arguments[i__10354__auto___13758]));

var G__13759 = (i__10354__auto___13758 + (1));
i__10354__auto___13758 = G__13759;
continue;
} else {
}
break;
}

var G__13756 = args13754.length;
switch (G__13756) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13754.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13753_SHARP_){
return chart.client.move_to.call(null,sel,p1__13753_SHARP_);
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
var args13765 = [];
var len__10353__auto___13768 = arguments.length;
var i__10354__auto___13769 = (0);
while(true){
if((i__10354__auto___13769 < len__10353__auto___13768)){
args13765.push((arguments[i__10354__auto___13769]));

var G__13770 = (i__10354__auto___13769 + (1));
i__10354__auto___13769 = G__13770;
continue;
} else {
}
break;
}

var G__13767 = args13765.length;
switch (G__13767) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13765.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13761_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__13761_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13762_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__13762_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13763_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__13763_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13764_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__13764_SHARP_);
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
var args13775 = [];
var len__10353__auto___13778 = arguments.length;
var i__10354__auto___13779 = (0);
while(true){
if((i__10354__auto___13779 < len__10353__auto___13778)){
args13775.push((arguments[i__10354__auto___13779]));

var G__13780 = (i__10354__auto___13779 + (1));
i__10354__auto___13779 = G__13780;
continue;
} else {
}
break;
}

var G__13777 = args13775.length;
switch (G__13777) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13775.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__13772_SHARP_){
return chart.client.question.call(null,sel,p1__13772_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__13773_SHARP_){
return chart.client.question.call(null,pred,sel,p1__13773_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__13774_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__13774_SHARP_);
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
var pred__13785_13788 = cljs.core._EQ_;
var expr__13786_13789 = cmd;
if(cljs.core.truth_(pred__13785_13788.call(null,"commands",expr__13786_13789))){
} else {
if(cljs.core.truth_(pred__13785_13788.call(null,"watch-visible",expr__13786_13789))){
var bnd_13790 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_13791 = [cljs.core.str("?n="),cljs.core.str(bnd_13790.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_13790.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_13790.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_13790.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_13791)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__13785_13788.call(null,"move-to",expr__13786_13789))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__13785_13788.call(null,"schedule",expr__13786_13789))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__13785_13788.call(null,"question",expr__13786_13789))){
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
}catch (e13793){if((e13793 instanceof Error)){
var e_13794 = e13793;
cljs.core.println.call(null,e_13794);
} else {
throw e13793;

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