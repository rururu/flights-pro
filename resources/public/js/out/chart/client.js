// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.PORT = (4444);
chart.client.CHR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join('');
chart.client.INS_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join('');
chart.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('');
chart.client.INS_TIO = (1000);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.MOV_TIO = (200);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_22152 = cljs.core.deref.call(null,vmp);
var mrk_22153 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22152);
var vec__22149_22154 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22152);
var lat_22155 = cljs.core.nth.call(null,vec__22149_22154,(0),null);
var lon_22156 = cljs.core.nth.call(null,vec__22149_22154,(1),null);
var pos_22157 = (new L.LatLng(lat_22155,lon_22156));
mrk_22153.setLatLng(pos_22157);

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
var seq__22162_22166 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22163_22167 = null;
var count__22164_22168 = (0);
var i__22165_22169 = (0);
while(true){
if((i__22165_22169 < count__22164_22168)){
var veh_22170 = cljs.core._nth.call(null,chunk__22163_22167,i__22165_22169);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22170)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22170)));

var G__22171 = seq__22162_22166;
var G__22172 = chunk__22163_22167;
var G__22173 = count__22164_22168;
var G__22174 = (i__22165_22169 + (1));
seq__22162_22166 = G__22171;
chunk__22163_22167 = G__22172;
count__22164_22168 = G__22173;
i__22165_22169 = G__22174;
continue;
} else {
var temp__4657__auto___22175 = cljs.core.seq.call(null,seq__22162_22166);
if(temp__4657__auto___22175){
var seq__22162_22176__$1 = temp__4657__auto___22175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22162_22176__$1)){
var c__20131__auto___22177 = cljs.core.chunk_first.call(null,seq__22162_22176__$1);
var G__22178 = cljs.core.chunk_rest.call(null,seq__22162_22176__$1);
var G__22179 = c__20131__auto___22177;
var G__22180 = cljs.core.count.call(null,c__20131__auto___22177);
var G__22181 = (0);
seq__22162_22166 = G__22178;
chunk__22163_22167 = G__22179;
count__22164_22168 = G__22180;
i__22165_22169 = G__22181;
continue;
} else {
var veh_22182 = cljs.core.first.call(null,seq__22162_22176__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22182)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22182)));

var G__22183 = cljs.core.next.call(null,seq__22162_22176__$1);
var G__22184 = null;
var G__22185 = (0);
var G__22186 = (0);
seq__22162_22166 = G__22183;
chunk__22163_22167 = G__22184;
count__22164_22168 = G__22185;
i__22165_22169 = G__22186;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__22189 = response;
var map__22189__$1 = ((((!((map__22189 == null)))?((((map__22189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22189):map__22189);
var status = cljs.core.get.call(null,map__22189__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22189__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__22195 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22195,(0),null);
var lon = cljs.core.nth.call(null,vec__22195,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22195,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22195,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22191_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22191_SHARP_))),e.target);
});})(vec__22195,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22195,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,chart.client.MOV_TIO));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.popup = (function chart$client$popup(var_args){
var args22198 = [];
var len__20425__auto___22204 = arguments.length;
var i__20426__auto___22205 = (0);
while(true){
if((i__20426__auto___22205 < len__20425__auto___22204)){
args22198.push((arguments[i__20426__auto___22205]));

var G__22206 = (i__20426__auto___22205 + (1));
i__20426__auto___22205 = G__22206;
continue;
} else {
}
break;
}

var G__22200 = args22198.length;
switch (G__22200) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22198.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22201 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22201,(0),null);
var lon = cljs.core.nth.call(null,vec__22201,(1),null);
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

chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__22234 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22235 = null;
var count__22236 = (0);
var i__22237 = (0);
while(true){
if((i__22237 < count__22236)){
var map__22238 = cljs.core._nth.call(null,chunk__22235,i__22237);
var map__22238__$1 = ((((!((map__22238 == null)))?((((map__22238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22238):map__22238);
var ins = map__22238__$1;
var instruct = cljs.core.get.call(null,map__22238__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22240_22260 = cljs.core._EQ_;
var expr__22241_22261 = instruct;
if(cljs.core.truth_(pred__22240_22260.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22241_22261))){
var map__22243_22262 = ins;
var map__22243_22263__$1 = ((((!((map__22243_22262 == null)))?((((map__22243_22262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22243_22262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22243_22262):map__22243_22262);
var id_22264 = cljs.core.get.call(null,map__22243_22263__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22265 = cljs.core.get.call(null,map__22243_22263__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22264,vehicle_22265);
} else {
if(cljs.core.truth_(pred__22240_22260.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22241_22261))){
var map__22245_22266 = ins;
var map__22245_22267__$1 = ((((!((map__22245_22266 == null)))?((((map__22245_22266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22245_22266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22245_22266):map__22245_22266);
var id_22268 = cljs.core.get.call(null,map__22245_22267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22268);
} else {
if(cljs.core.truth_(pred__22240_22260.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22241_22261))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22240_22260.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22241_22261))){
var map__22247_22269 = ins;
var map__22247_22270__$1 = ((((!((map__22247_22269 == null)))?((((map__22247_22269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22247_22269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22247_22269):map__22247_22269);
var id_22271 = cljs.core.get.call(null,map__22247_22270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22272 = cljs.core.get.call(null,map__22247_22270__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22273 = cljs.core.get.call(null,map__22247_22270__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22274 = cljs.core.get.call(null,map__22247_22270__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22275 = cljs.core.get.call(null,map__22247_22270__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22271)){
chart.client.popup.call(null,id_22271,html_22274,time_22275);
} else {
if(cljs.core.truth_((function (){var and__19305__auto__ = lat_22272;
if(cljs.core.truth_(and__19305__auto__)){
return lon_22273;
} else {
return and__19305__auto__;
}
})())){
chart.client.popup.call(null,lat_22272,lon_22273,html_22274,time_22275);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22276 = seq__22234;
var G__22277 = chunk__22235;
var G__22278 = count__22236;
var G__22279 = (i__22237 + (1));
seq__22234 = G__22276;
chunk__22235 = G__22277;
count__22236 = G__22278;
i__22237 = G__22279;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22234);
if(temp__4657__auto__){
var seq__22234__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22234__$1)){
var c__20131__auto__ = cljs.core.chunk_first.call(null,seq__22234__$1);
var G__22280 = cljs.core.chunk_rest.call(null,seq__22234__$1);
var G__22281 = c__20131__auto__;
var G__22282 = cljs.core.count.call(null,c__20131__auto__);
var G__22283 = (0);
seq__22234 = G__22280;
chunk__22235 = G__22281;
count__22236 = G__22282;
i__22237 = G__22283;
continue;
} else {
var map__22249 = cljs.core.first.call(null,seq__22234__$1);
var map__22249__$1 = ((((!((map__22249 == null)))?((((map__22249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22249):map__22249);
var ins = map__22249__$1;
var instruct = cljs.core.get.call(null,map__22249__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22251_22284 = cljs.core._EQ_;
var expr__22252_22285 = instruct;
if(cljs.core.truth_(pred__22251_22284.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22252_22285))){
var map__22254_22286 = ins;
var map__22254_22287__$1 = ((((!((map__22254_22286 == null)))?((((map__22254_22286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22254_22286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22254_22286):map__22254_22286);
var id_22288 = cljs.core.get.call(null,map__22254_22287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22289 = cljs.core.get.call(null,map__22254_22287__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22288,vehicle_22289);
} else {
if(cljs.core.truth_(pred__22251_22284.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22252_22285))){
var map__22256_22290 = ins;
var map__22256_22291__$1 = ((((!((map__22256_22290 == null)))?((((map__22256_22290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22256_22290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22256_22290):map__22256_22290);
var id_22292 = cljs.core.get.call(null,map__22256_22291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22292);
} else {
if(cljs.core.truth_(pred__22251_22284.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22252_22285))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22251_22284.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22252_22285))){
var map__22258_22293 = ins;
var map__22258_22294__$1 = ((((!((map__22258_22293 == null)))?((((map__22258_22293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22258_22293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22258_22293):map__22258_22293);
var id_22295 = cljs.core.get.call(null,map__22258_22294__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22296 = cljs.core.get.call(null,map__22258_22294__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22297 = cljs.core.get.call(null,map__22258_22294__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22298 = cljs.core.get.call(null,map__22258_22294__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22299 = cljs.core.get.call(null,map__22258_22294__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22295)){
chart.client.popup.call(null,id_22295,html_22298,time_22299);
} else {
if(cljs.core.truth_((function (){var and__19305__auto__ = lat_22296;
if(cljs.core.truth_(and__19305__auto__)){
return lon_22297;
} else {
return and__19305__auto__;
}
})())){
chart.client.popup.call(null,lat_22296,lon_22297,html_22298,time_22299);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22300 = cljs.core.next.call(null,seq__22234__$1);
var G__22301 = null;
var G__22302 = (0);
var G__22303 = (0);
seq__22234 = G__22300;
chunk__22235 = G__22301;
count__22236 = G__22302;
i__22237 = G__22303;
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
return ajax.core.GET.call(null,chart.client.INS_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.watch_visible = (function chart$client$watch_visible(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__22307 = cljs.core._EQ_;
var expr__22308 = cmd;
if(cljs.core.truth_(pred__22307.call(null,"watch-visible",expr__22308))){
return chart.client.watch_visible.call(null);
} else {
return cmd;
}
})())].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([50.04,8.55],(10));
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map