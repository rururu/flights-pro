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
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_27933 = cljs.core.deref.call(null,vmp);
var mrk_27934 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_27933);
var vec__27930_27935 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_27933);
var lat_27936 = cljs.core.nth.call(null,vec__27930_27935,(0),null);
var lon_27937 = cljs.core.nth.call(null,vec__27930_27935,(1),null);
var pos_27938 = (new L.LatLng(lat_27936,lon_27937));
mrk_27934.setLatLng(pos_27938);

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
var seq__27943_27947 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27944_27948 = null;
var count__27945_27949 = (0);
var i__27946_27950 = (0);
while(true){
if((i__27946_27950 < count__27945_27949)){
var veh_27951 = cljs.core._nth.call(null,chunk__27944_27948,i__27946_27950);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27951)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27951)));

var G__27952 = seq__27943_27947;
var G__27953 = chunk__27944_27948;
var G__27954 = count__27945_27949;
var G__27955 = (i__27946_27950 + (1));
seq__27943_27947 = G__27952;
chunk__27944_27948 = G__27953;
count__27945_27949 = G__27954;
i__27946_27950 = G__27955;
continue;
} else {
var temp__4657__auto___27956 = cljs.core.seq.call(null,seq__27943_27947);
if(temp__4657__auto___27956){
var seq__27943_27957__$1 = temp__4657__auto___27956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27943_27957__$1)){
var c__20189__auto___27958 = cljs.core.chunk_first.call(null,seq__27943_27957__$1);
var G__27959 = cljs.core.chunk_rest.call(null,seq__27943_27957__$1);
var G__27960 = c__20189__auto___27958;
var G__27961 = cljs.core.count.call(null,c__20189__auto___27958);
var G__27962 = (0);
seq__27943_27947 = G__27959;
chunk__27944_27948 = G__27960;
count__27945_27949 = G__27961;
i__27946_27950 = G__27962;
continue;
} else {
var veh_27963 = cljs.core.first.call(null,seq__27943_27957__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27963)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27963)));

var G__27964 = cljs.core.next.call(null,seq__27943_27957__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27943_27947 = G__27964;
chunk__27944_27948 = G__27965;
count__27945_27949 = G__27966;
i__27946_27950 = G__27967;
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
var map__27970 = response;
var map__27970__$1 = ((((!((map__27970 == null)))?((((map__27970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27970):map__27970);
var status = cljs.core.get.call(null,map__27970__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27970__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__27976 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27976,(0),null);
var lon = cljs.core.nth.call(null,vec__27976,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__27976,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27976,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27972_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27972_SHARP_))),e.target);
});})(vec__27976,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27976,lat,lon,pos,ico,opt,mrk__$1))
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
var args27979 = [];
var len__20483__auto___27985 = arguments.length;
var i__20484__auto___27986 = (0);
while(true){
if((i__20484__auto___27986 < len__20483__auto___27985)){
args27979.push((arguments[i__20484__auto___27986]));

var G__27987 = (i__20484__auto___27986 + (1));
i__20484__auto___27986 = G__27987;
continue;
} else {
}
break;
}

var G__27981 = args27979.length;
switch (G__27981) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27979.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27982 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27982,(0),null);
var lon = cljs.core.nth.call(null,vec__27982,(1),null);
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
return (function (p1__27989_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__27989_SHARP_),cljs.core.second.call(null,p1__27989_SHARP_)));
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
var vec__27993 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__27993,(0),null);
var s = cljs.core.nth.call(null,vec__27993,(1),null);
var w = cljs.core.nth.call(null,vec__27993,(2),null);
var e = cljs.core.nth.call(null,vec__27993,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__27993,n,s,w,e,url){
return (function (response){
return null;
});})(vec__27993,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__27996){
var vec__28000 = p__27996;
var lat = cljs.core.nth.call(null,vec__28000,(0),null);
var lon = cljs.core.nth.call(null,vec__28000,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.move_to = (function chart$client$move_to(ins){
cljs.core.println.call(null,new cljs.core.Keyword(null,"MOVE-TO","MOVE-TO",-334464044),ins);

var cts = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(ins);
var aps = new cljs.core.Keyword(null,"airports","airports",-21430890).cljs$core$IFn$_invoke$arity$1(ins);
if(cljs.core.truth_(cts)){
ask.master.selector1.call(null,"chart.client","countries",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cts,aps){
return (function chart$client$move_to_$_handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});})(cts,aps))
)
;
} else {
if(cljs.core.truth_(aps)){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = ((function (cts,aps){
return (function chart$client$move_to_$_handler2(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"move-to",new cljs.core.Keyword(null,"airport","airport",648512212),sel], null));

return ask.master.clear_dialog.call(null);
});})(cts,aps))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__28037 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__28038 = null;
var count__28039 = (0);
var i__28040 = (0);
while(true){
if((i__28040 < count__28039)){
var map__28041 = cljs.core._nth.call(null,chunk__28038,i__28040);
var map__28041__$1 = ((((!((map__28041 == null)))?((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var ins = map__28041__$1;
var instruct = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__28043_28071 = cljs.core._EQ_;
var expr__28044_28072 = instruct;
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__28044_28072))){
var map__28046_28073 = ins;
var map__28046_28074__$1 = ((((!((map__28046_28073 == null)))?((((map__28046_28073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28046_28073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046_28073):map__28046_28073);
var id_28075 = cljs.core.get.call(null,map__28046_28074__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_28076 = cljs.core.get.call(null,map__28046_28074__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_28075,vehicle_28076);
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__28044_28072))){
var map__28048_28077 = ins;
var map__28048_28078__$1 = ((((!((map__28048_28077 == null)))?((((map__28048_28077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28048_28077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048_28077):map__28048_28077);
var id_28079 = cljs.core.get.call(null,map__28048_28078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_28079);
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__28044_28072))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__28044_28072))){
var map__28050_28080 = ins;
var map__28050_28081__$1 = ((((!((map__28050_28080 == null)))?((((map__28050_28080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28050_28080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28050_28080):map__28050_28080);
var id_28082 = cljs.core.get.call(null,map__28050_28081__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_28083 = cljs.core.get.call(null,map__28050_28081__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_28084 = cljs.core.get.call(null,map__28050_28081__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_28085 = cljs.core.get.call(null,map__28050_28081__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_28086 = cljs.core.get.call(null,map__28050_28081__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_28082)){
chart.client.popup.call(null,id_28082,html_28085,time_28086);
} else {
if(cljs.core.truth_((function (){var and__19363__auto__ = lat_28083;
if(cljs.core.truth_(and__19363__auto__)){
return lon_28084;
} else {
return and__19363__auto__;
}
})())){
chart.client.popup.call(null,lat_28083,lon_28084,html_28085,time_28086);
} else {
}
}
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__28044_28072))){
var map__28052_28087 = ins;
var map__28052_28088__$1 = ((((!((map__28052_28087 == null)))?((((map__28052_28087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28052_28087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28052_28087):map__28052_28087);
var id_28089 = cljs.core.get.call(null,map__28052_28088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_28090 = cljs.core.get.call(null,map__28052_28088__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_28091 = cljs.core.get.call(null,map__28052_28088__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_28092 = cljs.core.get.call(null,map__28052_28088__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_28089,points_28090,options_28091,time_28092);
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__28044_28072))){
var map__28054_28093 = ins;
var map__28054_28094__$1 = ((((!((map__28054_28093 == null)))?((((map__28054_28093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28054_28093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28054_28093):map__28054_28093);
var coord_28095 = cljs.core.get.call(null,map__28054_28094__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_28095);
} else {
if(cljs.core.truth_(pred__28043_28071.call(null,new cljs.core.Keyword(null,"move-to","move-to",-127537048),expr__28044_28072))){
chart.client.move_to.call(null,ins);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}

var G__28096 = seq__28037;
var G__28097 = chunk__28038;
var G__28098 = count__28039;
var G__28099 = (i__28040 + (1));
seq__28037 = G__28096;
chunk__28038 = G__28097;
count__28039 = G__28098;
i__28040 = G__28099;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28037);
if(temp__4657__auto__){
var seq__28037__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28037__$1)){
var c__20189__auto__ = cljs.core.chunk_first.call(null,seq__28037__$1);
var G__28100 = cljs.core.chunk_rest.call(null,seq__28037__$1);
var G__28101 = c__20189__auto__;
var G__28102 = cljs.core.count.call(null,c__20189__auto__);
var G__28103 = (0);
seq__28037 = G__28100;
chunk__28038 = G__28101;
count__28039 = G__28102;
i__28040 = G__28103;
continue;
} else {
var map__28056 = cljs.core.first.call(null,seq__28037__$1);
var map__28056__$1 = ((((!((map__28056 == null)))?((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var ins = map__28056__$1;
var instruct = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__28058_28104 = cljs.core._EQ_;
var expr__28059_28105 = instruct;
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__28059_28105))){
var map__28061_28106 = ins;
var map__28061_28107__$1 = ((((!((map__28061_28106 == null)))?((((map__28061_28106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28061_28106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061_28106):map__28061_28106);
var id_28108 = cljs.core.get.call(null,map__28061_28107__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_28109 = cljs.core.get.call(null,map__28061_28107__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_28108,vehicle_28109);
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__28059_28105))){
var map__28063_28110 = ins;
var map__28063_28111__$1 = ((((!((map__28063_28110 == null)))?((((map__28063_28110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28063_28110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28063_28110):map__28063_28110);
var id_28112 = cljs.core.get.call(null,map__28063_28111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_28112);
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__28059_28105))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__28059_28105))){
var map__28065_28113 = ins;
var map__28065_28114__$1 = ((((!((map__28065_28113 == null)))?((((map__28065_28113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28065_28113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28065_28113):map__28065_28113);
var id_28115 = cljs.core.get.call(null,map__28065_28114__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_28116 = cljs.core.get.call(null,map__28065_28114__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_28117 = cljs.core.get.call(null,map__28065_28114__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_28118 = cljs.core.get.call(null,map__28065_28114__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_28119 = cljs.core.get.call(null,map__28065_28114__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_28115)){
chart.client.popup.call(null,id_28115,html_28118,time_28119);
} else {
if(cljs.core.truth_((function (){var and__19363__auto__ = lat_28116;
if(cljs.core.truth_(and__19363__auto__)){
return lon_28117;
} else {
return and__19363__auto__;
}
})())){
chart.client.popup.call(null,lat_28116,lon_28117,html_28118,time_28119);
} else {
}
}
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__28059_28105))){
var map__28067_28120 = ins;
var map__28067_28121__$1 = ((((!((map__28067_28120 == null)))?((((map__28067_28120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28067_28120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28067_28120):map__28067_28120);
var id_28122 = cljs.core.get.call(null,map__28067_28121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_28123 = cljs.core.get.call(null,map__28067_28121__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_28124 = cljs.core.get.call(null,map__28067_28121__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_28125 = cljs.core.get.call(null,map__28067_28121__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_28122,points_28123,options_28124,time_28125);
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__28059_28105))){
var map__28069_28126 = ins;
var map__28069_28127__$1 = ((((!((map__28069_28126 == null)))?((((map__28069_28126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28069_28126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069_28126):map__28069_28126);
var coord_28128 = cljs.core.get.call(null,map__28069_28127__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_28128);
} else {
if(cljs.core.truth_(pred__28058_28104.call(null,new cljs.core.Keyword(null,"move-to","move-to",-127537048),expr__28059_28105))){
chart.client.move_to.call(null,ins);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}

var G__28129 = cljs.core.next.call(null,seq__28037__$1);
var G__28130 = null;
var G__28131 = (0);
var G__28132 = (0);
seq__28037 = G__28129;
chunk__28038 = G__28130;
count__28039 = G__28131;
i__28040 = G__28132;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__28136 = cljs.core._EQ_;
var expr__28137 = cmd;
if(cljs.core.truth_(pred__28136.call(null,"watch-visible",expr__28137))){
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