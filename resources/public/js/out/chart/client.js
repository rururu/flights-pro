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
var map__24301 = response;
var map__24301__$1 = ((((!((map__24301 == null)))?((((map__24301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24301):map__24301);
var status = cljs.core.get.call(null,map__24301__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24301__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_24309 = cljs.core.deref.call(null,vmp);
var mrk_24310 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_24309);
var vec__24306_24311 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_24309);
var lat_24312 = cljs.core.nth.call(null,vec__24306_24311,(0),null);
var lon_24313 = cljs.core.nth.call(null,vec__24306_24311,(1),null);
var pos_24314 = (new L.LatLng(lat_24312,lon_24313));
mrk_24310.setLatLng(pos_24314);

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
var seq__24319_24323 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__24320_24324 = null;
var count__24321_24325 = (0);
var i__24322_24326 = (0);
while(true){
if((i__24322_24326 < count__24321_24325)){
var veh_24327 = cljs.core._nth.call(null,chunk__24320_24324,i__24322_24326);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24327)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24327)));

var G__24328 = seq__24319_24323;
var G__24329 = chunk__24320_24324;
var G__24330 = count__24321_24325;
var G__24331 = (i__24322_24326 + (1));
seq__24319_24323 = G__24328;
chunk__24320_24324 = G__24329;
count__24321_24325 = G__24330;
i__24322_24326 = G__24331;
continue;
} else {
var temp__4657__auto___24332 = cljs.core.seq.call(null,seq__24319_24323);
if(temp__4657__auto___24332){
var seq__24319_24333__$1 = temp__4657__auto___24332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24319_24333__$1)){
var c__21395__auto___24334 = cljs.core.chunk_first.call(null,seq__24319_24333__$1);
var G__24335 = cljs.core.chunk_rest.call(null,seq__24319_24333__$1);
var G__24336 = c__21395__auto___24334;
var G__24337 = cljs.core.count.call(null,c__21395__auto___24334);
var G__24338 = (0);
seq__24319_24323 = G__24335;
chunk__24320_24324 = G__24336;
count__24321_24325 = G__24337;
i__24322_24326 = G__24338;
continue;
} else {
var veh_24339 = cljs.core.first.call(null,seq__24319_24333__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24339)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24339)));

var G__24340 = cljs.core.next.call(null,seq__24319_24333__$1);
var G__24341 = null;
var G__24342 = (0);
var G__24343 = (0);
seq__24319_24323 = G__24340;
chunk__24320_24324 = G__24341;
count__24321_24325 = G__24342;
i__24322_24326 = G__24343;
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

var vec__24348 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__24348,(0),null);
var lon = cljs.core.nth.call(null,vec__24348,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__24348,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__24348,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__24344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__24344_SHARP_))),e.target);
});})(vec__24348,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__24348,lat,lon,pos,ico,opt,mrk__$1))
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
var args24351 = [];
var len__21689__auto___24357 = arguments.length;
var i__21690__auto___24358 = (0);
while(true){
if((i__21690__auto___24358 < len__21689__auto___24357)){
args24351.push((arguments[i__21690__auto___24358]));

var G__24359 = (i__21690__auto___24358 + (1));
i__21690__auto___24358 = G__24359;
continue;
} else {
}
break;
}

var G__24353 = args24351.length;
switch (G__24353) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24351.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__24354 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__24354,(0),null);
var lon = cljs.core.nth.call(null,vec__24354,(1),null);
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
return (function (p1__24361_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__24361_SHARP_),cljs.core.second.call(null,p1__24361_SHARP_)));
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
var vec__24365 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__24365,(0),null);
var s = cljs.core.nth.call(null,vec__24365,(1),null);
var w = cljs.core.nth.call(null,vec__24365,(2),null);
var e = cljs.core.nth.call(null,vec__24365,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__24365,n,s,w,e,url){
return (function (response){
return null;
});})(vec__24365,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__24368){
var vec__24372 = p__24368;
var lat = cljs.core.nth.call(null,vec__24372,(0),null);
var lon = cljs.core.nth.call(null,vec__24372,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__24409 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__24410 = null;
var count__24411 = (0);
var i__24412 = (0);
while(true){
if((i__24412 < count__24411)){
var map__24413 = cljs.core._nth.call(null,chunk__24410,i__24412);
var map__24413__$1 = ((((!((map__24413 == null)))?((((map__24413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var ins = map__24413__$1;
var instruct = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24415_24443 = cljs.core._EQ_;
var expr__24416_24444 = instruct;
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24416_24444))){
var map__24418_24445 = ins;
var map__24418_24446__$1 = ((((!((map__24418_24445 == null)))?((((map__24418_24445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24418_24445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24418_24445):map__24418_24445);
var id_24447 = cljs.core.get.call(null,map__24418_24446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24448 = cljs.core.get.call(null,map__24418_24446__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24447,vehicle_24448);
} else {
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24416_24444))){
var map__24420_24449 = ins;
var map__24420_24450__$1 = ((((!((map__24420_24449 == null)))?((((map__24420_24449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24420_24449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24420_24449):map__24420_24449);
var id_24451 = cljs.core.get.call(null,map__24420_24450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24451);
} else {
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24416_24444))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24416_24444))){
var map__24422_24452 = ins;
var map__24422_24453__$1 = ((((!((map__24422_24452 == null)))?((((map__24422_24452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24422_24452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24422_24452):map__24422_24452);
var id_24454 = cljs.core.get.call(null,map__24422_24453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24455 = cljs.core.get.call(null,map__24422_24453__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24456 = cljs.core.get.call(null,map__24422_24453__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24457 = cljs.core.get.call(null,map__24422_24453__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24458 = cljs.core.get.call(null,map__24422_24453__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24454)){
chart.client.popup.call(null,id_24454,html_24457,time_24458);
} else {
if(cljs.core.truth_((function (){var and__20569__auto__ = lat_24455;
if(cljs.core.truth_(and__20569__auto__)){
return lon_24456;
} else {
return and__20569__auto__;
}
})())){
chart.client.popup.call(null,lat_24455,lon_24456,html_24457,time_24458);
} else {
}
}
} else {
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24416_24444))){
var map__24424_24459 = ins;
var map__24424_24460__$1 = ((((!((map__24424_24459 == null)))?((((map__24424_24459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24424_24459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24424_24459):map__24424_24459);
var id_24461 = cljs.core.get.call(null,map__24424_24460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24462 = cljs.core.get.call(null,map__24424_24460__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24463 = cljs.core.get.call(null,map__24424_24460__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24464 = cljs.core.get.call(null,map__24424_24460__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24461,points_24462,options_24463,time_24464);
} else {
if(cljs.core.truth_(pred__24415_24443.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24416_24444))){
var map__24426_24465 = ins;
var map__24426_24466__$1 = ((((!((map__24426_24465 == null)))?((((map__24426_24465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24426_24465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24426_24465):map__24426_24465);
var coord_24467 = cljs.core.get.call(null,map__24426_24466__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24467);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__24468 = seq__24409;
var G__24469 = chunk__24410;
var G__24470 = count__24411;
var G__24471 = (i__24412 + (1));
seq__24409 = G__24468;
chunk__24410 = G__24469;
count__24411 = G__24470;
i__24412 = G__24471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24409);
if(temp__4657__auto__){
var seq__24409__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24409__$1)){
var c__21395__auto__ = cljs.core.chunk_first.call(null,seq__24409__$1);
var G__24472 = cljs.core.chunk_rest.call(null,seq__24409__$1);
var G__24473 = c__21395__auto__;
var G__24474 = cljs.core.count.call(null,c__21395__auto__);
var G__24475 = (0);
seq__24409 = G__24472;
chunk__24410 = G__24473;
count__24411 = G__24474;
i__24412 = G__24475;
continue;
} else {
var map__24428 = cljs.core.first.call(null,seq__24409__$1);
var map__24428__$1 = ((((!((map__24428 == null)))?((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var ins = map__24428__$1;
var instruct = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24430_24476 = cljs.core._EQ_;
var expr__24431_24477 = instruct;
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24431_24477))){
var map__24433_24478 = ins;
var map__24433_24479__$1 = ((((!((map__24433_24478 == null)))?((((map__24433_24478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24433_24478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433_24478):map__24433_24478);
var id_24480 = cljs.core.get.call(null,map__24433_24479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24481 = cljs.core.get.call(null,map__24433_24479__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24480,vehicle_24481);
} else {
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24431_24477))){
var map__24435_24482 = ins;
var map__24435_24483__$1 = ((((!((map__24435_24482 == null)))?((((map__24435_24482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24435_24482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24435_24482):map__24435_24482);
var id_24484 = cljs.core.get.call(null,map__24435_24483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24484);
} else {
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24431_24477))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24431_24477))){
var map__24437_24485 = ins;
var map__24437_24486__$1 = ((((!((map__24437_24485 == null)))?((((map__24437_24485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24437_24485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437_24485):map__24437_24485);
var id_24487 = cljs.core.get.call(null,map__24437_24486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24488 = cljs.core.get.call(null,map__24437_24486__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24489 = cljs.core.get.call(null,map__24437_24486__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24490 = cljs.core.get.call(null,map__24437_24486__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24491 = cljs.core.get.call(null,map__24437_24486__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24487)){
chart.client.popup.call(null,id_24487,html_24490,time_24491);
} else {
if(cljs.core.truth_((function (){var and__20569__auto__ = lat_24488;
if(cljs.core.truth_(and__20569__auto__)){
return lon_24489;
} else {
return and__20569__auto__;
}
})())){
chart.client.popup.call(null,lat_24488,lon_24489,html_24490,time_24491);
} else {
}
}
} else {
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24431_24477))){
var map__24439_24492 = ins;
var map__24439_24493__$1 = ((((!((map__24439_24492 == null)))?((((map__24439_24492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24439_24492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24439_24492):map__24439_24492);
var id_24494 = cljs.core.get.call(null,map__24439_24493__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24495 = cljs.core.get.call(null,map__24439_24493__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24496 = cljs.core.get.call(null,map__24439_24493__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24497 = cljs.core.get.call(null,map__24439_24493__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24494,points_24495,options_24496,time_24497);
} else {
if(cljs.core.truth_(pred__24430_24476.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24431_24477))){
var map__24441_24498 = ins;
var map__24441_24499__$1 = ((((!((map__24441_24498 == null)))?((((map__24441_24498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24441_24498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24441_24498):map__24441_24498);
var coord_24500 = cljs.core.get.call(null,map__24441_24499__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24500);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__24501 = cljs.core.next.call(null,seq__24409__$1);
var G__24502 = null;
var G__24503 = (0);
var G__24504 = (0);
seq__24409 = G__24501;
chunk__24410 = G__24502;
count__24411 = G__24503;
i__24412 = G__24504;
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
var args24506 = [];
var len__21689__auto___24509 = arguments.length;
var i__21690__auto___24510 = (0);
while(true){
if((i__21690__auto___24510 < len__21689__auto___24509)){
args24506.push((arguments[i__21690__auto___24510]));

var G__24511 = (i__21690__auto___24510 + (1));
i__21690__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var G__24508 = args24506.length;
switch (G__24508) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24506.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__24505_SHARP_){
return chart.client.move_to.call(null,sel,p1__24505_SHARP_);
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
var args24517 = [];
var len__21689__auto___24520 = arguments.length;
var i__21690__auto___24521 = (0);
while(true){
if((i__21690__auto___24521 < len__21689__auto___24520)){
args24517.push((arguments[i__21690__auto___24521]));

var G__24522 = (i__21690__auto___24521 + (1));
i__21690__auto___24521 = G__24522;
continue;
} else {
}
break;
}

var G__24519 = args24517.length;
switch (G__24519) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24517.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__24513_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__24513_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24514_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__24514_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__24515_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__24515_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24516_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__24516_SHARP_);
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
var pred__24527 = cljs.core._EQ_;
var expr__24528 = cmd;
if(cljs.core.truth_(pred__24527.call(null,"watch-visible",expr__24528))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__24527.call(null,"move-to",expr__24528))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__24527.call(null,"schedule",expr__24528))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24528)].join('')));
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
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