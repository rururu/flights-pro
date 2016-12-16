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
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_22198 = cljs.core.deref.call(null,vmp);
var mrk_22199 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22198);
var vec__22195_22200 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22198);
var lat_22201 = cljs.core.nth.call(null,vec__22195_22200,(0),null);
var lon_22202 = cljs.core.nth.call(null,vec__22195_22200,(1),null);
var pos_22203 = (new L.LatLng(lat_22201,lon_22202));
mrk_22199.setLatLng(pos_22203);

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
var seq__22208_22212 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22209_22213 = null;
var count__22210_22214 = (0);
var i__22211_22215 = (0);
while(true){
if((i__22211_22215 < count__22210_22214)){
var veh_22216 = cljs.core._nth.call(null,chunk__22209_22213,i__22211_22215);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22216)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22216)));

var G__22217 = seq__22208_22212;
var G__22218 = chunk__22209_22213;
var G__22219 = count__22210_22214;
var G__22220 = (i__22211_22215 + (1));
seq__22208_22212 = G__22217;
chunk__22209_22213 = G__22218;
count__22210_22214 = G__22219;
i__22211_22215 = G__22220;
continue;
} else {
var temp__4657__auto___22221 = cljs.core.seq.call(null,seq__22208_22212);
if(temp__4657__auto___22221){
var seq__22208_22222__$1 = temp__4657__auto___22221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22208_22222__$1)){
var c__20182__auto___22223 = cljs.core.chunk_first.call(null,seq__22208_22222__$1);
var G__22224 = cljs.core.chunk_rest.call(null,seq__22208_22222__$1);
var G__22225 = c__20182__auto___22223;
var G__22226 = cljs.core.count.call(null,c__20182__auto___22223);
var G__22227 = (0);
seq__22208_22212 = G__22224;
chunk__22209_22213 = G__22225;
count__22210_22214 = G__22226;
i__22211_22215 = G__22227;
continue;
} else {
var veh_22228 = cljs.core.first.call(null,seq__22208_22222__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22228)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22228)));

var G__22229 = cljs.core.next.call(null,seq__22208_22222__$1);
var G__22230 = null;
var G__22231 = (0);
var G__22232 = (0);
seq__22208_22212 = G__22229;
chunk__22209_22213 = G__22230;
count__22210_22214 = G__22231;
i__22211_22215 = G__22232;
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
var map__22235 = response;
var map__22235__$1 = ((((!((map__22235 == null)))?((((map__22235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22235):map__22235);
var status = cljs.core.get.call(null,map__22235__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22235__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
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

var vec__22241 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22241,(0),null);
var lon = cljs.core.nth.call(null,vec__22241,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22241,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22241,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22237_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22237_SHARP_))),e.target);
});})(vec__22241,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22241,lat,lon,pos,ico,opt,mrk__$1))
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
var args22244 = [];
var len__20476__auto___22250 = arguments.length;
var i__20477__auto___22251 = (0);
while(true){
if((i__20477__auto___22251 < len__20476__auto___22250)){
args22244.push((arguments[i__20477__auto___22251]));

var G__22252 = (i__20477__auto___22251 + (1));
i__20477__auto___22251 = G__22252;
continue;
} else {
}
break;
}

var G__22246 = args22244.length;
switch (G__22246) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22244.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22247 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22247,(0),null);
var lon = cljs.core.nth.call(null,vec__22247,(1),null);
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
var seq__22280 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22281 = null;
var count__22282 = (0);
var i__22283 = (0);
while(true){
if((i__22283 < count__22282)){
var map__22284 = cljs.core._nth.call(null,chunk__22281,i__22283);
var map__22284__$1 = ((((!((map__22284 == null)))?((((map__22284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22284):map__22284);
var ins = map__22284__$1;
var instruct = cljs.core.get.call(null,map__22284__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22286_22306 = cljs.core._EQ_;
var expr__22287_22307 = instruct;
if(cljs.core.truth_(pred__22286_22306.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22287_22307))){
var map__22289_22308 = ins;
var map__22289_22309__$1 = ((((!((map__22289_22308 == null)))?((((map__22289_22308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22289_22308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22289_22308):map__22289_22308);
var id_22310 = cljs.core.get.call(null,map__22289_22309__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22311 = cljs.core.get.call(null,map__22289_22309__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22310,vehicle_22311);
} else {
if(cljs.core.truth_(pred__22286_22306.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22287_22307))){
var map__22291_22312 = ins;
var map__22291_22313__$1 = ((((!((map__22291_22312 == null)))?((((map__22291_22312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22291_22312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22291_22312):map__22291_22312);
var id_22314 = cljs.core.get.call(null,map__22291_22313__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22314);
} else {
if(cljs.core.truth_(pred__22286_22306.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22287_22307))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22286_22306.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22287_22307))){
var map__22293_22315 = ins;
var map__22293_22316__$1 = ((((!((map__22293_22315 == null)))?((((map__22293_22315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22293_22315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22293_22315):map__22293_22315);
var id_22317 = cljs.core.get.call(null,map__22293_22316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22318 = cljs.core.get.call(null,map__22293_22316__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22319 = cljs.core.get.call(null,map__22293_22316__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22320 = cljs.core.get.call(null,map__22293_22316__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22321 = cljs.core.get.call(null,map__22293_22316__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22317)){
chart.client.popup.call(null,id_22317,html_22320,time_22321);
} else {
if(cljs.core.truth_((function (){var and__19356__auto__ = lat_22318;
if(cljs.core.truth_(and__19356__auto__)){
return lon_22319;
} else {
return and__19356__auto__;
}
})())){
chart.client.popup.call(null,lat_22318,lon_22319,html_22320,time_22321);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22322 = seq__22280;
var G__22323 = chunk__22281;
var G__22324 = count__22282;
var G__22325 = (i__22283 + (1));
seq__22280 = G__22322;
chunk__22281 = G__22323;
count__22282 = G__22324;
i__22283 = G__22325;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22280);
if(temp__4657__auto__){
var seq__22280__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22280__$1)){
var c__20182__auto__ = cljs.core.chunk_first.call(null,seq__22280__$1);
var G__22326 = cljs.core.chunk_rest.call(null,seq__22280__$1);
var G__22327 = c__20182__auto__;
var G__22328 = cljs.core.count.call(null,c__20182__auto__);
var G__22329 = (0);
seq__22280 = G__22326;
chunk__22281 = G__22327;
count__22282 = G__22328;
i__22283 = G__22329;
continue;
} else {
var map__22295 = cljs.core.first.call(null,seq__22280__$1);
var map__22295__$1 = ((((!((map__22295 == null)))?((((map__22295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22295):map__22295);
var ins = map__22295__$1;
var instruct = cljs.core.get.call(null,map__22295__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22297_22330 = cljs.core._EQ_;
var expr__22298_22331 = instruct;
if(cljs.core.truth_(pred__22297_22330.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22298_22331))){
var map__22300_22332 = ins;
var map__22300_22333__$1 = ((((!((map__22300_22332 == null)))?((((map__22300_22332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22300_22332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22300_22332):map__22300_22332);
var id_22334 = cljs.core.get.call(null,map__22300_22333__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22335 = cljs.core.get.call(null,map__22300_22333__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22334,vehicle_22335);
} else {
if(cljs.core.truth_(pred__22297_22330.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22298_22331))){
var map__22302_22336 = ins;
var map__22302_22337__$1 = ((((!((map__22302_22336 == null)))?((((map__22302_22336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22302_22336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22302_22336):map__22302_22336);
var id_22338 = cljs.core.get.call(null,map__22302_22337__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22338);
} else {
if(cljs.core.truth_(pred__22297_22330.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22298_22331))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22297_22330.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22298_22331))){
var map__22304_22339 = ins;
var map__22304_22340__$1 = ((((!((map__22304_22339 == null)))?((((map__22304_22339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22304_22339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22304_22339):map__22304_22339);
var id_22341 = cljs.core.get.call(null,map__22304_22340__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22342 = cljs.core.get.call(null,map__22304_22340__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22343 = cljs.core.get.call(null,map__22304_22340__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22344 = cljs.core.get.call(null,map__22304_22340__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22345 = cljs.core.get.call(null,map__22304_22340__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22341)){
chart.client.popup.call(null,id_22341,html_22344,time_22345);
} else {
if(cljs.core.truth_((function (){var and__19356__auto__ = lat_22342;
if(cljs.core.truth_(and__19356__auto__)){
return lon_22343;
} else {
return and__19356__auto__;
}
})())){
chart.client.popup.call(null,lat_22342,lon_22343,html_22344,time_22345);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22346 = cljs.core.next.call(null,seq__22280__$1);
var G__22347 = null;
var G__22348 = (0);
var G__22349 = (0);
seq__22280 = G__22346;
chunk__22281 = G__22347;
count__22282 = G__22348;
i__22283 = G__22349;
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
chart.client.watch_visible = (function chart$client$watch_visible(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__22353 = cljs.core._EQ_;
var expr__22354 = cmd;
if(cljs.core.truth_(pred__22353.call(null,"watch-visible",expr__22354))){
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
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map