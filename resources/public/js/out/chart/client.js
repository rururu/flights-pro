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

var mp_23087 = cljs.core.deref.call(null,vmp);
var mrk_23088 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23087);
var vec__23084_23089 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23087);
var lat_23090 = cljs.core.nth.call(null,vec__23084_23089,(0),null);
var lon_23091 = cljs.core.nth.call(null,vec__23084_23089,(1),null);
var pos_23092 = (new L.LatLng(lat_23090,lon_23091));
mrk_23088.setLatLng(pos_23092);

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
var seq__23097_23101 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23098_23102 = null;
var count__23099_23103 = (0);
var i__23100_23104 = (0);
while(true){
if((i__23100_23104 < count__23099_23103)){
var veh_23105 = cljs.core._nth.call(null,chunk__23098_23102,i__23100_23104);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23105)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23105)));

var G__23106 = seq__23097_23101;
var G__23107 = chunk__23098_23102;
var G__23108 = count__23099_23103;
var G__23109 = (i__23100_23104 + (1));
seq__23097_23101 = G__23106;
chunk__23098_23102 = G__23107;
count__23099_23103 = G__23108;
i__23100_23104 = G__23109;
continue;
} else {
var temp__4657__auto___23110 = cljs.core.seq.call(null,seq__23097_23101);
if(temp__4657__auto___23110){
var seq__23097_23111__$1 = temp__4657__auto___23110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23097_23111__$1)){
var c__20239__auto___23112 = cljs.core.chunk_first.call(null,seq__23097_23111__$1);
var G__23113 = cljs.core.chunk_rest.call(null,seq__23097_23111__$1);
var G__23114 = c__20239__auto___23112;
var G__23115 = cljs.core.count.call(null,c__20239__auto___23112);
var G__23116 = (0);
seq__23097_23101 = G__23113;
chunk__23098_23102 = G__23114;
count__23099_23103 = G__23115;
i__23100_23104 = G__23116;
continue;
} else {
var veh_23117 = cljs.core.first.call(null,seq__23097_23111__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23117)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23117)));

var G__23118 = cljs.core.next.call(null,seq__23097_23111__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__23097_23101 = G__23118;
chunk__23098_23102 = G__23119;
count__23099_23103 = G__23120;
i__23100_23104 = G__23121;
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
var map__23124 = response;
var map__23124__$1 = ((((!((map__23124 == null)))?((((map__23124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23124):map__23124);
var status = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__23130 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23130,(0),null);
var lon = cljs.core.nth.call(null,vec__23130,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__23130,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23130,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23126_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23126_SHARP_))),e.target);
});})(vec__23130,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23130,lat,lon,pos,ico,opt,mrk__$1))
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
var args23133 = [];
var len__20533__auto___23139 = arguments.length;
var i__20534__auto___23140 = (0);
while(true){
if((i__20534__auto___23140 < len__20533__auto___23139)){
args23133.push((arguments[i__20534__auto___23140]));

var G__23141 = (i__20534__auto___23140 + (1));
i__20534__auto___23140 = G__23141;
continue;
} else {
}
break;
}

var G__23135 = args23133.length;
switch (G__23135) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23133.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23136 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23136,(0),null);
var lon = cljs.core.nth.call(null,vec__23136,(1),null);
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
return (function (p1__23143_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__23143_SHARP_),cljs.core.second.call(null,p1__23143_SHARP_)));
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
var vec__23147 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__23147,(0),null);
var s = cljs.core.nth.call(null,vec__23147,(1),null);
var w = cljs.core.nth.call(null,vec__23147,(2),null);
var e = cljs.core.nth.call(null,vec__23147,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__23147,n,s,w,e,url){
return (function (response){
return null;
});})(vec__23147,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23150){
var vec__23154 = p__23150;
var lat = cljs.core.nth.call(null,vec__23154,(0),null);
var lon = cljs.core.nth.call(null,vec__23154,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.move_to = (function chart$client$move_to(ins){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"MOVE-TO","MOVE-TO",-334464044),ins], null));

var cts = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(ins);
var aps = new cljs.core.Keyword(null,"airports","airports",-21430890).cljs$core$IFn$_invoke$arity$1(ins);
if(cljs.core.truth_(cts)){
ask.master.selector1.call(null,"chart.client","countries",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cts,aps){
return (function chart$client$move_to_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),ask.master.get_answer.call(null,chart.client.move_to));
});})(cts,aps))
)
;
} else {
if(cljs.core.truth_(aps)){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = ((function (cts,aps){
return (function chart$client$move_to_$_handler2(sel){
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"AIRPORT","AIRPORT",-1038841235),sel], null));
});})(cts,aps))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__23191 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23192 = null;
var count__23193 = (0);
var i__23194 = (0);
while(true){
if((i__23194 < count__23193)){
var map__23195 = cljs.core._nth.call(null,chunk__23192,i__23194);
var map__23195__$1 = ((((!((map__23195 == null)))?((((map__23195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23195):map__23195);
var ins = map__23195__$1;
var instruct = cljs.core.get.call(null,map__23195__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23197_23225 = cljs.core._EQ_;
var expr__23198_23226 = instruct;
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23198_23226))){
var map__23200_23227 = ins;
var map__23200_23228__$1 = ((((!((map__23200_23227 == null)))?((((map__23200_23227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23200_23227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23200_23227):map__23200_23227);
var id_23229 = cljs.core.get.call(null,map__23200_23228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23230 = cljs.core.get.call(null,map__23200_23228__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23229,vehicle_23230);
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23198_23226))){
var map__23202_23231 = ins;
var map__23202_23232__$1 = ((((!((map__23202_23231 == null)))?((((map__23202_23231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23202_23231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23202_23231):map__23202_23231);
var id_23233 = cljs.core.get.call(null,map__23202_23232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23233);
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23198_23226))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23198_23226))){
var map__23204_23234 = ins;
var map__23204_23235__$1 = ((((!((map__23204_23234 == null)))?((((map__23204_23234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23204_23234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23204_23234):map__23204_23234);
var id_23236 = cljs.core.get.call(null,map__23204_23235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23237 = cljs.core.get.call(null,map__23204_23235__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23238 = cljs.core.get.call(null,map__23204_23235__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23239 = cljs.core.get.call(null,map__23204_23235__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23240 = cljs.core.get.call(null,map__23204_23235__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23236)){
chart.client.popup.call(null,id_23236,html_23239,time_23240);
} else {
if(cljs.core.truth_((function (){var and__19413__auto__ = lat_23237;
if(cljs.core.truth_(and__19413__auto__)){
return lon_23238;
} else {
return and__19413__auto__;
}
})())){
chart.client.popup.call(null,lat_23237,lon_23238,html_23239,time_23240);
} else {
}
}
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23198_23226))){
var map__23206_23241 = ins;
var map__23206_23242__$1 = ((((!((map__23206_23241 == null)))?((((map__23206_23241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23206_23241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23206_23241):map__23206_23241);
var id_23243 = cljs.core.get.call(null,map__23206_23242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23244 = cljs.core.get.call(null,map__23206_23242__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23245 = cljs.core.get.call(null,map__23206_23242__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23246 = cljs.core.get.call(null,map__23206_23242__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23243,points_23244,options_23245,time_23246);
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23198_23226))){
var map__23208_23247 = ins;
var map__23208_23248__$1 = ((((!((map__23208_23247 == null)))?((((map__23208_23247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23208_23247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23208_23247):map__23208_23247);
var coord_23249 = cljs.core.get.call(null,map__23208_23248__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23249);
} else {
if(cljs.core.truth_(pred__23197_23225.call(null,new cljs.core.Keyword(null,"move-to","move-to",-127537048),expr__23198_23226))){
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

var G__23250 = seq__23191;
var G__23251 = chunk__23192;
var G__23252 = count__23193;
var G__23253 = (i__23194 + (1));
seq__23191 = G__23250;
chunk__23192 = G__23251;
count__23193 = G__23252;
i__23194 = G__23253;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23191);
if(temp__4657__auto__){
var seq__23191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23191__$1)){
var c__20239__auto__ = cljs.core.chunk_first.call(null,seq__23191__$1);
var G__23254 = cljs.core.chunk_rest.call(null,seq__23191__$1);
var G__23255 = c__20239__auto__;
var G__23256 = cljs.core.count.call(null,c__20239__auto__);
var G__23257 = (0);
seq__23191 = G__23254;
chunk__23192 = G__23255;
count__23193 = G__23256;
i__23194 = G__23257;
continue;
} else {
var map__23210 = cljs.core.first.call(null,seq__23191__$1);
var map__23210__$1 = ((((!((map__23210 == null)))?((((map__23210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23210):map__23210);
var ins = map__23210__$1;
var instruct = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23212_23258 = cljs.core._EQ_;
var expr__23213_23259 = instruct;
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23213_23259))){
var map__23215_23260 = ins;
var map__23215_23261__$1 = ((((!((map__23215_23260 == null)))?((((map__23215_23260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23215_23260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23215_23260):map__23215_23260);
var id_23262 = cljs.core.get.call(null,map__23215_23261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23263 = cljs.core.get.call(null,map__23215_23261__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23262,vehicle_23263);
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23213_23259))){
var map__23217_23264 = ins;
var map__23217_23265__$1 = ((((!((map__23217_23264 == null)))?((((map__23217_23264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23217_23264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23217_23264):map__23217_23264);
var id_23266 = cljs.core.get.call(null,map__23217_23265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23266);
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23213_23259))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23213_23259))){
var map__23219_23267 = ins;
var map__23219_23268__$1 = ((((!((map__23219_23267 == null)))?((((map__23219_23267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23219_23267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23219_23267):map__23219_23267);
var id_23269 = cljs.core.get.call(null,map__23219_23268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23270 = cljs.core.get.call(null,map__23219_23268__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23271 = cljs.core.get.call(null,map__23219_23268__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23272 = cljs.core.get.call(null,map__23219_23268__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23273 = cljs.core.get.call(null,map__23219_23268__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23269)){
chart.client.popup.call(null,id_23269,html_23272,time_23273);
} else {
if(cljs.core.truth_((function (){var and__19413__auto__ = lat_23270;
if(cljs.core.truth_(and__19413__auto__)){
return lon_23271;
} else {
return and__19413__auto__;
}
})())){
chart.client.popup.call(null,lat_23270,lon_23271,html_23272,time_23273);
} else {
}
}
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23213_23259))){
var map__23221_23274 = ins;
var map__23221_23275__$1 = ((((!((map__23221_23274 == null)))?((((map__23221_23274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23221_23274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23221_23274):map__23221_23274);
var id_23276 = cljs.core.get.call(null,map__23221_23275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23277 = cljs.core.get.call(null,map__23221_23275__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23278 = cljs.core.get.call(null,map__23221_23275__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23279 = cljs.core.get.call(null,map__23221_23275__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23276,points_23277,options_23278,time_23279);
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23213_23259))){
var map__23223_23280 = ins;
var map__23223_23281__$1 = ((((!((map__23223_23280 == null)))?((((map__23223_23280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23223_23280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23223_23280):map__23223_23280);
var coord_23282 = cljs.core.get.call(null,map__23223_23281__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23282);
} else {
if(cljs.core.truth_(pred__23212_23258.call(null,new cljs.core.Keyword(null,"move-to","move-to",-127537048),expr__23213_23259))){
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

var G__23283 = cljs.core.next.call(null,seq__23191__$1);
var G__23284 = null;
var G__23285 = (0);
var G__23286 = (0);
seq__23191 = G__23283;
chunk__23192 = G__23284;
count__23193 = G__23285;
i__23194 = G__23286;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__23290 = cljs.core._EQ_;
var expr__23291 = cmd;
if(cljs.core.truth_(pred__23290.call(null,"watch-visible",expr__23291))){
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