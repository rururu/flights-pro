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
chart.client.URL = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),"COUNTER",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),"FOLLOWING",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__17493 = response;
var map__17493__$1 = ((((!((map__17493 == null)))?((((map__17493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17493):map__17493);
var status = cljs.core.get.call(null,map__17493__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__17493__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_17501 = cljs.core.deref.call(null,vmp);
var mrk_17502 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_17501);
var vec__17498_17503 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_17501);
var lat_17504 = cljs.core.nth.call(null,vec__17498_17503,(0),null);
var lon_17505 = cljs.core.nth.call(null,vec__17498_17503,(1),null);
var pos_17506 = (new L.LatLng(lat_17504,lon_17505));
mrk_17502.setLatLng(pos_17506);

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
var seq__17511_17515 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__17512_17516 = null;
var count__17513_17517 = (0);
var i__17514_17518 = (0);
while(true){
if((i__17514_17518 < count__17513_17517)){
var veh_17519 = cljs.core._nth.call(null,chunk__17512_17516,i__17514_17518);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_17519)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_17519)));

var G__17520 = seq__17511_17515;
var G__17521 = chunk__17512_17516;
var G__17522 = count__17513_17517;
var G__17523 = (i__17514_17518 + (1));
seq__17511_17515 = G__17520;
chunk__17512_17516 = G__17521;
count__17513_17517 = G__17522;
i__17514_17518 = G__17523;
continue;
} else {
var temp__4657__auto___17524 = cljs.core.seq.call(null,seq__17511_17515);
if(temp__4657__auto___17524){
var seq__17511_17525__$1 = temp__4657__auto___17524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17511_17525__$1)){
var c__10591__auto___17526 = cljs.core.chunk_first.call(null,seq__17511_17525__$1);
var G__17527 = cljs.core.chunk_rest.call(null,seq__17511_17525__$1);
var G__17528 = c__10591__auto___17526;
var G__17529 = cljs.core.count.call(null,c__10591__auto___17526);
var G__17530 = (0);
seq__17511_17515 = G__17527;
chunk__17512_17516 = G__17528;
count__17513_17517 = G__17529;
i__17514_17518 = G__17530;
continue;
} else {
var veh_17531 = cljs.core.first.call(null,seq__17511_17525__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_17531)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_17531)));

var G__17532 = cljs.core.next.call(null,seq__17511_17525__$1);
var G__17533 = null;
var G__17534 = (0);
var G__17535 = (0);
seq__17511_17515 = G__17532;
chunk__17512_17516 = G__17533;
count__17513_17517 = G__17534;
i__17514_17518 = G__17535;
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

var vec__17540 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__17540,(0),null);
var lon = cljs.core.nth.call(null,vec__17540,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__17540,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__17540,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__17536_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__17536_SHARP_))),e.target);
});})(vec__17540,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__17540,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.popup = (function chart$client$popup(var_args){
var args17543 = [];
var len__10885__auto___17549 = arguments.length;
var i__10886__auto___17550 = (0);
while(true){
if((i__10886__auto___17550 < len__10885__auto___17549)){
args17543.push((arguments[i__10886__auto___17550]));

var G__17551 = (i__10886__auto___17550 + (1));
i__10886__auto___17550 = G__17551;
continue;
} else {
}
break;
}

var G__17545 = args17543.length;
switch (G__17545) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17543.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__17546 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__17546,(0),null);
var lon = cljs.core.nth.call(null,vec__17546,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
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

chart.client.popup.cljs$lang$maxFixedArity = 4;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__17553_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__17553_SHARP_),cljs.core.second.call(null,p1__17553_SHARP_)));
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
var vec__17557 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__17557,(0),null);
var s = cljs.core.nth.call(null,vec__17557,(1),null);
var w = cljs.core.nth.call(null,vec__17557,(2),null);
var e = cljs.core.nth.call(null,vec__17557,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__17557,n,s,w,e,url){
return (function (response){
return null;
});})(vec__17557,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__17560){
var vec__17564 = p__17560;
var lat = cljs.core.nth.call(null,vec__17564,(0),null);
var lon = cljs.core.nth.call(null,vec__17564,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__17601 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__17602 = null;
var count__17603 = (0);
var i__17604 = (0);
while(true){
if((i__17604 < count__17603)){
var map__17605 = cljs.core._nth.call(null,chunk__17602,i__17604);
var map__17605__$1 = ((((!((map__17605 == null)))?((((map__17605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17605):map__17605);
var ins = map__17605__$1;
var instruct = cljs.core.get.call(null,map__17605__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__17607_17635 = cljs.core._EQ_;
var expr__17608_17636 = instruct;
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__17608_17636))){
var map__17610_17637 = ins;
var map__17610_17638__$1 = ((((!((map__17610_17637 == null)))?((((map__17610_17637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17610_17637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17610_17637):map__17610_17637);
var id_17639 = cljs.core.get.call(null,map__17610_17638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_17640 = cljs.core.get.call(null,map__17610_17638__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_17639,vehicle_17640);
} else {
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__17608_17636))){
var map__17612_17641 = ins;
var map__17612_17642__$1 = ((((!((map__17612_17641 == null)))?((((map__17612_17641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17612_17641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17612_17641):map__17612_17641);
var id_17643 = cljs.core.get.call(null,map__17612_17642__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_17643);
} else {
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__17608_17636))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__17608_17636))){
var map__17614_17644 = ins;
var map__17614_17645__$1 = ((((!((map__17614_17644 == null)))?((((map__17614_17644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17614_17644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17614_17644):map__17614_17644);
var id_17646 = cljs.core.get.call(null,map__17614_17645__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_17647 = cljs.core.get.call(null,map__17614_17645__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17648 = cljs.core.get.call(null,map__17614_17645__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_17649 = cljs.core.get.call(null,map__17614_17645__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_17650 = cljs.core.get.call(null,map__17614_17645__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_17646)){
chart.client.popup.call(null,id_17646,html_17649,time_17650);
} else {
if(cljs.core.truth_((function (){var and__9765__auto__ = lat_17647;
if(cljs.core.truth_(and__9765__auto__)){
return lon_17648;
} else {
return and__9765__auto__;
}
})())){
chart.client.popup.call(null,lat_17647,lon_17648,html_17649,time_17650);
} else {
}
}
} else {
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__17608_17636))){
var map__17616_17651 = ins;
var map__17616_17652__$1 = ((((!((map__17616_17651 == null)))?((((map__17616_17651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17616_17651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17616_17651):map__17616_17651);
var id_17653 = cljs.core.get.call(null,map__17616_17652__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_17654 = cljs.core.get.call(null,map__17616_17652__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_17655 = cljs.core.get.call(null,map__17616_17652__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_17656 = cljs.core.get.call(null,map__17616_17652__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_17653,points_17654,options_17655,time_17656);
} else {
if(cljs.core.truth_(pred__17607_17635.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__17608_17636))){
var map__17618_17657 = ins;
var map__17618_17658__$1 = ((((!((map__17618_17657 == null)))?((((map__17618_17657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17618_17657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17618_17657):map__17618_17657);
var coord_17659 = cljs.core.get.call(null,map__17618_17658__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_17659);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__17660 = seq__17601;
var G__17661 = chunk__17602;
var G__17662 = count__17603;
var G__17663 = (i__17604 + (1));
seq__17601 = G__17660;
chunk__17602 = G__17661;
count__17603 = G__17662;
i__17604 = G__17663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17601);
if(temp__4657__auto__){
var seq__17601__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17601__$1)){
var c__10591__auto__ = cljs.core.chunk_first.call(null,seq__17601__$1);
var G__17664 = cljs.core.chunk_rest.call(null,seq__17601__$1);
var G__17665 = c__10591__auto__;
var G__17666 = cljs.core.count.call(null,c__10591__auto__);
var G__17667 = (0);
seq__17601 = G__17664;
chunk__17602 = G__17665;
count__17603 = G__17666;
i__17604 = G__17667;
continue;
} else {
var map__17620 = cljs.core.first.call(null,seq__17601__$1);
var map__17620__$1 = ((((!((map__17620 == null)))?((((map__17620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17620):map__17620);
var ins = map__17620__$1;
var instruct = cljs.core.get.call(null,map__17620__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__17622_17668 = cljs.core._EQ_;
var expr__17623_17669 = instruct;
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__17623_17669))){
var map__17625_17670 = ins;
var map__17625_17671__$1 = ((((!((map__17625_17670 == null)))?((((map__17625_17670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17625_17670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17625_17670):map__17625_17670);
var id_17672 = cljs.core.get.call(null,map__17625_17671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_17673 = cljs.core.get.call(null,map__17625_17671__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_17672,vehicle_17673);
} else {
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__17623_17669))){
var map__17627_17674 = ins;
var map__17627_17675__$1 = ((((!((map__17627_17674 == null)))?((((map__17627_17674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17627_17674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17627_17674):map__17627_17674);
var id_17676 = cljs.core.get.call(null,map__17627_17675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_17676);
} else {
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__17623_17669))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__17623_17669))){
var map__17629_17677 = ins;
var map__17629_17678__$1 = ((((!((map__17629_17677 == null)))?((((map__17629_17677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17629_17677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17629_17677):map__17629_17677);
var id_17679 = cljs.core.get.call(null,map__17629_17678__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_17680 = cljs.core.get.call(null,map__17629_17678__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17681 = cljs.core.get.call(null,map__17629_17678__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_17682 = cljs.core.get.call(null,map__17629_17678__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_17683 = cljs.core.get.call(null,map__17629_17678__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_17679)){
chart.client.popup.call(null,id_17679,html_17682,time_17683);
} else {
if(cljs.core.truth_((function (){var and__9765__auto__ = lat_17680;
if(cljs.core.truth_(and__9765__auto__)){
return lon_17681;
} else {
return and__9765__auto__;
}
})())){
chart.client.popup.call(null,lat_17680,lon_17681,html_17682,time_17683);
} else {
}
}
} else {
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__17623_17669))){
var map__17631_17684 = ins;
var map__17631_17685__$1 = ((((!((map__17631_17684 == null)))?((((map__17631_17684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17631_17684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17631_17684):map__17631_17684);
var id_17686 = cljs.core.get.call(null,map__17631_17685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_17687 = cljs.core.get.call(null,map__17631_17685__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_17688 = cljs.core.get.call(null,map__17631_17685__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_17689 = cljs.core.get.call(null,map__17631_17685__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_17686,points_17687,options_17688,time_17689);
} else {
if(cljs.core.truth_(pred__17622_17668.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__17623_17669))){
var map__17633_17690 = ins;
var map__17633_17691__$1 = ((((!((map__17633_17690 == null)))?((((map__17633_17690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17633_17690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17633_17690):map__17633_17690);
var coord_17692 = cljs.core.get.call(null,map__17633_17691__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_17692);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__17693 = cljs.core.next.call(null,seq__17601__$1);
var G__17694 = null;
var G__17695 = (0);
var G__17696 = (0);
seq__17601 = G__17693;
chunk__17602 = G__17694;
count__17603 = G__17695;
i__17604 = G__17696;
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
var args17698 = [];
var len__10885__auto___17701 = arguments.length;
var i__10886__auto___17702 = (0);
while(true){
if((i__10886__auto___17702 < len__10885__auto___17701)){
args17698.push((arguments[i__10886__auto___17702]));

var G__17703 = (i__10886__auto___17702 + (1));
i__10886__auto___17702 = G__17703;
continue;
} else {
}
break;
}

var G__17700 = args17698.length;
switch (G__17700) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17698.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__17697_SHARP_){
return chart.client.move_to.call(null,sel,p1__17697_SHARP_);
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
var args17709 = [];
var len__10885__auto___17712 = arguments.length;
var i__10886__auto___17713 = (0);
while(true){
if((i__10886__auto___17713 < len__10885__auto___17712)){
args17709.push((arguments[i__10886__auto___17713]));

var G__17714 = (i__10886__auto___17713 + (1));
i__10886__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var G__17711 = args17709.length;
switch (G__17711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17709.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__17705_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__17705_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__17706_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__17706_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__17707_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__17707_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__17708_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__17708_SHARP_);
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
var pred__17719 = cljs.core._EQ_;
var expr__17720 = cmd;
if(cljs.core.truth_(pred__17719.call(null,"watch-visible",expr__17720))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__17719.call(null,"move-to",expr__17720))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__17719.call(null,"schedule",expr__17720))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17720)].join('')));
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([40.8,-74.0],(10));
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
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map