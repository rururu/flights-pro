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

var mp_40035 = cljs.core.deref.call(null,vmp);
var mrk_40036 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_40035);
var vec__40032_40037 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_40035);
var lat_40038 = cljs.core.nth.call(null,vec__40032_40037,(0),null);
var lon_40039 = cljs.core.nth.call(null,vec__40032_40037,(1),null);
var pos_40040 = (new L.LatLng(lat_40038,lon_40039));
mrk_40036.setLatLng(pos_40040);

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
var seq__40045_40049 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__40046_40050 = null;
var count__40047_40051 = (0);
var i__40048_40052 = (0);
while(true){
if((i__40048_40052 < count__40047_40051)){
var veh_40053 = cljs.core._nth.call(null,chunk__40046_40050,i__40048_40052);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40053)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40053)));

var G__40054 = seq__40045_40049;
var G__40055 = chunk__40046_40050;
var G__40056 = count__40047_40051;
var G__40057 = (i__40048_40052 + (1));
seq__40045_40049 = G__40054;
chunk__40046_40050 = G__40055;
count__40047_40051 = G__40056;
i__40048_40052 = G__40057;
continue;
} else {
var temp__4657__auto___40058 = cljs.core.seq.call(null,seq__40045_40049);
if(temp__4657__auto___40058){
var seq__40045_40059__$1 = temp__4657__auto___40058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40045_40059__$1)){
var c__9319__auto___40060 = cljs.core.chunk_first.call(null,seq__40045_40059__$1);
var G__40061 = cljs.core.chunk_rest.call(null,seq__40045_40059__$1);
var G__40062 = c__9319__auto___40060;
var G__40063 = cljs.core.count.call(null,c__9319__auto___40060);
var G__40064 = (0);
seq__40045_40049 = G__40061;
chunk__40046_40050 = G__40062;
count__40047_40051 = G__40063;
i__40048_40052 = G__40064;
continue;
} else {
var veh_40065 = cljs.core.first.call(null,seq__40045_40059__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40065)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40065)));

var G__40066 = cljs.core.next.call(null,seq__40045_40059__$1);
var G__40067 = null;
var G__40068 = (0);
var G__40069 = (0);
seq__40045_40049 = G__40066;
chunk__40046_40050 = G__40067;
count__40047_40051 = G__40068;
i__40048_40052 = G__40069;
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
var map__40072 = response;
var map__40072__$1 = ((((!((map__40072 == null)))?((((map__40072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40072):map__40072);
var status = cljs.core.get.call(null,map__40072__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__40072__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__40078 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__40078,(0),null);
var lon = cljs.core.nth.call(null,vec__40078,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__40078,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__40078,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__40074_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__40074_SHARP_))),e.target);
});})(vec__40078,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__40078,lat,lon,pos,ico,opt,mrk__$1))
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
var args40081 = [];
var len__9613__auto___40087 = arguments.length;
var i__9614__auto___40088 = (0);
while(true){
if((i__9614__auto___40088 < len__9613__auto___40087)){
args40081.push((arguments[i__9614__auto___40088]));

var G__40089 = (i__9614__auto___40088 + (1));
i__9614__auto___40088 = G__40089;
continue;
} else {
}
break;
}

var G__40083 = args40081.length;
switch (G__40083) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40081.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__40084 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__40084,(0),null);
var lon = cljs.core.nth.call(null,vec__40084,(1),null);
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
var seq__40117 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__40118 = null;
var count__40119 = (0);
var i__40120 = (0);
while(true){
if((i__40120 < count__40119)){
var map__40121 = cljs.core._nth.call(null,chunk__40118,i__40120);
var map__40121__$1 = ((((!((map__40121 == null)))?((((map__40121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40121):map__40121);
var ins = map__40121__$1;
var instruct = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__40123_40143 = cljs.core._EQ_;
var expr__40124_40144 = instruct;
if(cljs.core.truth_(pred__40123_40143.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__40124_40144))){
var map__40126_40145 = ins;
var map__40126_40146__$1 = ((((!((map__40126_40145 == null)))?((((map__40126_40145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40126_40145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40126_40145):map__40126_40145);
var id_40147 = cljs.core.get.call(null,map__40126_40146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_40148 = cljs.core.get.call(null,map__40126_40146__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_40147,vehicle_40148);
} else {
if(cljs.core.truth_(pred__40123_40143.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__40124_40144))){
var map__40128_40149 = ins;
var map__40128_40150__$1 = ((((!((map__40128_40149 == null)))?((((map__40128_40149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40128_40149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40128_40149):map__40128_40149);
var id_40151 = cljs.core.get.call(null,map__40128_40150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_40151);
} else {
if(cljs.core.truth_(pred__40123_40143.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__40124_40144))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__40123_40143.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__40124_40144))){
var map__40130_40152 = ins;
var map__40130_40153__$1 = ((((!((map__40130_40152 == null)))?((((map__40130_40152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40130_40152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40130_40152):map__40130_40152);
var id_40154 = cljs.core.get.call(null,map__40130_40153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_40155 = cljs.core.get.call(null,map__40130_40153__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_40156 = cljs.core.get.call(null,map__40130_40153__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_40157 = cljs.core.get.call(null,map__40130_40153__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_40158 = cljs.core.get.call(null,map__40130_40153__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_40154)){
chart.client.popup.call(null,id_40154,html_40157,time_40158);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_40155;
if(cljs.core.truth_(and__8493__auto__)){
return lon_40156;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_40155,lon_40156,html_40157,time_40158);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__40159 = seq__40117;
var G__40160 = chunk__40118;
var G__40161 = count__40119;
var G__40162 = (i__40120 + (1));
seq__40117 = G__40159;
chunk__40118 = G__40160;
count__40119 = G__40161;
i__40120 = G__40162;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40117);
if(temp__4657__auto__){
var seq__40117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40117__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__40117__$1);
var G__40163 = cljs.core.chunk_rest.call(null,seq__40117__$1);
var G__40164 = c__9319__auto__;
var G__40165 = cljs.core.count.call(null,c__9319__auto__);
var G__40166 = (0);
seq__40117 = G__40163;
chunk__40118 = G__40164;
count__40119 = G__40165;
i__40120 = G__40166;
continue;
} else {
var map__40132 = cljs.core.first.call(null,seq__40117__$1);
var map__40132__$1 = ((((!((map__40132 == null)))?((((map__40132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40132):map__40132);
var ins = map__40132__$1;
var instruct = cljs.core.get.call(null,map__40132__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__40134_40167 = cljs.core._EQ_;
var expr__40135_40168 = instruct;
if(cljs.core.truth_(pred__40134_40167.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__40135_40168))){
var map__40137_40169 = ins;
var map__40137_40170__$1 = ((((!((map__40137_40169 == null)))?((((map__40137_40169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40137_40169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40137_40169):map__40137_40169);
var id_40171 = cljs.core.get.call(null,map__40137_40170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_40172 = cljs.core.get.call(null,map__40137_40170__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_40171,vehicle_40172);
} else {
if(cljs.core.truth_(pred__40134_40167.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__40135_40168))){
var map__40139_40173 = ins;
var map__40139_40174__$1 = ((((!((map__40139_40173 == null)))?((((map__40139_40173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40139_40173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40139_40173):map__40139_40173);
var id_40175 = cljs.core.get.call(null,map__40139_40174__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_40175);
} else {
if(cljs.core.truth_(pred__40134_40167.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__40135_40168))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__40134_40167.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__40135_40168))){
var map__40141_40176 = ins;
var map__40141_40177__$1 = ((((!((map__40141_40176 == null)))?((((map__40141_40176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40141_40176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40141_40176):map__40141_40176);
var id_40178 = cljs.core.get.call(null,map__40141_40177__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_40179 = cljs.core.get.call(null,map__40141_40177__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_40180 = cljs.core.get.call(null,map__40141_40177__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_40181 = cljs.core.get.call(null,map__40141_40177__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_40182 = cljs.core.get.call(null,map__40141_40177__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_40178)){
chart.client.popup.call(null,id_40178,html_40181,time_40182);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_40179;
if(cljs.core.truth_(and__8493__auto__)){
return lon_40180;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_40179,lon_40180,html_40181,time_40182);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__40183 = cljs.core.next.call(null,seq__40117__$1);
var G__40184 = null;
var G__40185 = (0);
var G__40186 = (0);
seq__40117 = G__40183;
chunk__40118 = G__40184;
count__40119 = G__40185;
i__40120 = G__40186;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__40190 = cljs.core._EQ_;
var expr__40191 = cmd;
if(cljs.core.truth_(pred__40190.call(null,"watch-visible",expr__40191))){
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map