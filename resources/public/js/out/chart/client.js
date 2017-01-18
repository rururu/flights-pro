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
var map__27097 = response;
var map__27097__$1 = ((((!((map__27097 == null)))?((((map__27097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27097):map__27097);
var status = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_27105 = cljs.core.deref.call(null,vmp);
var mrk_27106 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_27105);
var vec__27102_27107 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_27105);
var lat_27108 = cljs.core.nth.call(null,vec__27102_27107,(0),null);
var lon_27109 = cljs.core.nth.call(null,vec__27102_27107,(1),null);
var pos_27110 = (new L.LatLng(lat_27108,lon_27109));
mrk_27106.setLatLng(pos_27110);

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
var seq__27115_27119 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27116_27120 = null;
var count__27117_27121 = (0);
var i__27118_27122 = (0);
while(true){
if((i__27118_27122 < count__27117_27121)){
var veh_27123 = cljs.core._nth.call(null,chunk__27116_27120,i__27118_27122);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27123)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27123)));

var G__27124 = seq__27115_27119;
var G__27125 = chunk__27116_27120;
var G__27126 = count__27117_27121;
var G__27127 = (i__27118_27122 + (1));
seq__27115_27119 = G__27124;
chunk__27116_27120 = G__27125;
count__27117_27121 = G__27126;
i__27118_27122 = G__27127;
continue;
} else {
var temp__4657__auto___27128 = cljs.core.seq.call(null,seq__27115_27119);
if(temp__4657__auto___27128){
var seq__27115_27129__$1 = temp__4657__auto___27128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27115_27129__$1)){
var c__24980__auto___27130 = cljs.core.chunk_first.call(null,seq__27115_27129__$1);
var G__27131 = cljs.core.chunk_rest.call(null,seq__27115_27129__$1);
var G__27132 = c__24980__auto___27130;
var G__27133 = cljs.core.count.call(null,c__24980__auto___27130);
var G__27134 = (0);
seq__27115_27119 = G__27131;
chunk__27116_27120 = G__27132;
count__27117_27121 = G__27133;
i__27118_27122 = G__27134;
continue;
} else {
var veh_27135 = cljs.core.first.call(null,seq__27115_27129__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27135)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27135)));

var G__27136 = cljs.core.next.call(null,seq__27115_27129__$1);
var G__27137 = null;
var G__27138 = (0);
var G__27139 = (0);
seq__27115_27119 = G__27136;
chunk__27116_27120 = G__27137;
count__27117_27121 = G__27138;
i__27118_27122 = G__27139;
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

var vec__27144 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27144,(0),null);
var lon = cljs.core.nth.call(null,vec__27144,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__27144,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27144,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27140_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27140_SHARP_))),e.target);
});})(vec__27144,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27144,lat,lon,pos,ico,opt,mrk__$1))
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
var args27147 = [];
var len__25274__auto___27153 = arguments.length;
var i__25275__auto___27154 = (0);
while(true){
if((i__25275__auto___27154 < len__25274__auto___27153)){
args27147.push((arguments[i__25275__auto___27154]));

var G__27155 = (i__25275__auto___27154 + (1));
i__25275__auto___27154 = G__27155;
continue;
} else {
}
break;
}

var G__27149 = args27147.length;
switch (G__27149) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27147.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27150 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27150,(0),null);
var lon = cljs.core.nth.call(null,vec__27150,(1),null);
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
return (function (p1__27157_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__27157_SHARP_),cljs.core.second.call(null,p1__27157_SHARP_)));
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
var vec__27161 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__27161,(0),null);
var s = cljs.core.nth.call(null,vec__27161,(1),null);
var w = cljs.core.nth.call(null,vec__27161,(2),null);
var e = cljs.core.nth.call(null,vec__27161,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__27161,n,s,w,e,url){
return (function (response){
return null;
});})(vec__27161,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__27164){
var vec__27168 = p__27164;
var lat = cljs.core.nth.call(null,vec__27168,(0),null);
var lon = cljs.core.nth.call(null,vec__27168,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__27205 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__27206 = null;
var count__27207 = (0);
var i__27208 = (0);
while(true){
if((i__27208 < count__27207)){
var map__27209 = cljs.core._nth.call(null,chunk__27206,i__27208);
var map__27209__$1 = ((((!((map__27209 == null)))?((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209):map__27209);
var ins = map__27209__$1;
var instruct = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27211_27239 = cljs.core._EQ_;
var expr__27212_27240 = instruct;
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27212_27240))){
var map__27214_27241 = ins;
var map__27214_27242__$1 = ((((!((map__27214_27241 == null)))?((((map__27214_27241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27214_27241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214_27241):map__27214_27241);
var id_27243 = cljs.core.get.call(null,map__27214_27242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27244 = cljs.core.get.call(null,map__27214_27242__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27243,vehicle_27244);
} else {
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27212_27240))){
var map__27216_27245 = ins;
var map__27216_27246__$1 = ((((!((map__27216_27245 == null)))?((((map__27216_27245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27216_27245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216_27245):map__27216_27245);
var id_27247 = cljs.core.get.call(null,map__27216_27246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27247);
} else {
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27212_27240))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27212_27240))){
var map__27218_27248 = ins;
var map__27218_27249__$1 = ((((!((map__27218_27248 == null)))?((((map__27218_27248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27218_27248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27218_27248):map__27218_27248);
var id_27250 = cljs.core.get.call(null,map__27218_27249__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27251 = cljs.core.get.call(null,map__27218_27249__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27252 = cljs.core.get.call(null,map__27218_27249__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27253 = cljs.core.get.call(null,map__27218_27249__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27254 = cljs.core.get.call(null,map__27218_27249__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_27250)){
chart.client.popup.call(null,id_27250,html_27253,time_27254);
} else {
if(cljs.core.truth_((function (){var and__24154__auto__ = lat_27251;
if(cljs.core.truth_(and__24154__auto__)){
return lon_27252;
} else {
return and__24154__auto__;
}
})())){
chart.client.popup.call(null,lat_27251,lon_27252,html_27253,time_27254);
} else {
}
}
} else {
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27212_27240))){
var map__27220_27255 = ins;
var map__27220_27256__$1 = ((((!((map__27220_27255 == null)))?((((map__27220_27255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27220_27255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27220_27255):map__27220_27255);
var id_27257 = cljs.core.get.call(null,map__27220_27256__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27258 = cljs.core.get.call(null,map__27220_27256__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27259 = cljs.core.get.call(null,map__27220_27256__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27260 = cljs.core.get.call(null,map__27220_27256__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27257,points_27258,options_27259,time_27260);
} else {
if(cljs.core.truth_(pred__27211_27239.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27212_27240))){
var map__27222_27261 = ins;
var map__27222_27262__$1 = ((((!((map__27222_27261 == null)))?((((map__27222_27261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27222_27261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222_27261):map__27222_27261);
var coord_27263 = cljs.core.get.call(null,map__27222_27262__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_27263);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__27264 = seq__27205;
var G__27265 = chunk__27206;
var G__27266 = count__27207;
var G__27267 = (i__27208 + (1));
seq__27205 = G__27264;
chunk__27206 = G__27265;
count__27207 = G__27266;
i__27208 = G__27267;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27205);
if(temp__4657__auto__){
var seq__27205__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27205__$1)){
var c__24980__auto__ = cljs.core.chunk_first.call(null,seq__27205__$1);
var G__27268 = cljs.core.chunk_rest.call(null,seq__27205__$1);
var G__27269 = c__24980__auto__;
var G__27270 = cljs.core.count.call(null,c__24980__auto__);
var G__27271 = (0);
seq__27205 = G__27268;
chunk__27206 = G__27269;
count__27207 = G__27270;
i__27208 = G__27271;
continue;
} else {
var map__27224 = cljs.core.first.call(null,seq__27205__$1);
var map__27224__$1 = ((((!((map__27224 == null)))?((((map__27224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27224):map__27224);
var ins = map__27224__$1;
var instruct = cljs.core.get.call(null,map__27224__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27226_27272 = cljs.core._EQ_;
var expr__27227_27273 = instruct;
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27227_27273))){
var map__27229_27274 = ins;
var map__27229_27275__$1 = ((((!((map__27229_27274 == null)))?((((map__27229_27274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27229_27274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229_27274):map__27229_27274);
var id_27276 = cljs.core.get.call(null,map__27229_27275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27277 = cljs.core.get.call(null,map__27229_27275__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27276,vehicle_27277);
} else {
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27227_27273))){
var map__27231_27278 = ins;
var map__27231_27279__$1 = ((((!((map__27231_27278 == null)))?((((map__27231_27278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27231_27278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27231_27278):map__27231_27278);
var id_27280 = cljs.core.get.call(null,map__27231_27279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27280);
} else {
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27227_27273))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27227_27273))){
var map__27233_27281 = ins;
var map__27233_27282__$1 = ((((!((map__27233_27281 == null)))?((((map__27233_27281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27233_27281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233_27281):map__27233_27281);
var id_27283 = cljs.core.get.call(null,map__27233_27282__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27284 = cljs.core.get.call(null,map__27233_27282__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27285 = cljs.core.get.call(null,map__27233_27282__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27286 = cljs.core.get.call(null,map__27233_27282__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27287 = cljs.core.get.call(null,map__27233_27282__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_27283)){
chart.client.popup.call(null,id_27283,html_27286,time_27287);
} else {
if(cljs.core.truth_((function (){var and__24154__auto__ = lat_27284;
if(cljs.core.truth_(and__24154__auto__)){
return lon_27285;
} else {
return and__24154__auto__;
}
})())){
chart.client.popup.call(null,lat_27284,lon_27285,html_27286,time_27287);
} else {
}
}
} else {
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27227_27273))){
var map__27235_27288 = ins;
var map__27235_27289__$1 = ((((!((map__27235_27288 == null)))?((((map__27235_27288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27235_27288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235_27288):map__27235_27288);
var id_27290 = cljs.core.get.call(null,map__27235_27289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27291 = cljs.core.get.call(null,map__27235_27289__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27292 = cljs.core.get.call(null,map__27235_27289__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27293 = cljs.core.get.call(null,map__27235_27289__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27290,points_27291,options_27292,time_27293);
} else {
if(cljs.core.truth_(pred__27226_27272.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27227_27273))){
var map__27237_27294 = ins;
var map__27237_27295__$1 = ((((!((map__27237_27294 == null)))?((((map__27237_27294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27237_27294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237_27294):map__27237_27294);
var coord_27296 = cljs.core.get.call(null,map__27237_27295__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_27296);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__27297 = cljs.core.next.call(null,seq__27205__$1);
var G__27298 = null;
var G__27299 = (0);
var G__27300 = (0);
seq__27205 = G__27297;
chunk__27206 = G__27298;
count__27207 = G__27299;
i__27208 = G__27300;
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
var args27302 = [];
var len__25274__auto___27305 = arguments.length;
var i__25275__auto___27306 = (0);
while(true){
if((i__25275__auto___27306 < len__25274__auto___27305)){
args27302.push((arguments[i__25275__auto___27306]));

var G__27307 = (i__25275__auto___27306 + (1));
i__25275__auto___27306 = G__27307;
continue;
} else {
}
break;
}

var G__27304 = args27302.length;
switch (G__27304) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27302.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__27301_SHARP_){
return chart.client.move_to.call(null,sel,p1__27301_SHARP_);
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
var args27313 = [];
var len__25274__auto___27316 = arguments.length;
var i__25275__auto___27317 = (0);
while(true){
if((i__25275__auto___27317 < len__25274__auto___27316)){
args27313.push((arguments[i__25275__auto___27317]));

var G__27318 = (i__25275__auto___27317 + (1));
i__25275__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var G__27315 = args27313.length;
switch (G__27315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27313.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__27309_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__27309_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__27310_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__27310_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__27311_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__27311_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__27312_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__27312_SHARP_);
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
var pred__27323 = cljs.core._EQ_;
var expr__27324 = cmd;
if(cljs.core.truth_(pred__27323.call(null,"watch-visible",expr__27324))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__27323.call(null,"move-to",expr__27324))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__27323.call(null,"schedule",expr__27324))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27324)].join('')));
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.0,30.0],(10));
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