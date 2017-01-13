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
var map__31794 = response;
var map__31794__$1 = ((((!((map__31794 == null)))?((((map__31794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31794):map__31794);
var status = cljs.core.get.call(null,map__31794__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31794__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_31802 = cljs.core.deref.call(null,vmp);
var mrk_31803 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_31802);
var vec__31799_31804 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_31802);
var lat_31805 = cljs.core.nth.call(null,vec__31799_31804,(0),null);
var lon_31806 = cljs.core.nth.call(null,vec__31799_31804,(1),null);
var pos_31807 = (new L.LatLng(lat_31805,lon_31806));
mrk_31803.setLatLng(pos_31807);

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
var seq__31812_31816 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__31813_31817 = null;
var count__31814_31818 = (0);
var i__31815_31819 = (0);
while(true){
if((i__31815_31819 < count__31814_31818)){
var veh_31820 = cljs.core._nth.call(null,chunk__31813_31817,i__31815_31819);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31820)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31820)));

var G__31821 = seq__31812_31816;
var G__31822 = chunk__31813_31817;
var G__31823 = count__31814_31818;
var G__31824 = (i__31815_31819 + (1));
seq__31812_31816 = G__31821;
chunk__31813_31817 = G__31822;
count__31814_31818 = G__31823;
i__31815_31819 = G__31824;
continue;
} else {
var temp__4657__auto___31825 = cljs.core.seq.call(null,seq__31812_31816);
if(temp__4657__auto___31825){
var seq__31812_31826__$1 = temp__4657__auto___31825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31812_31826__$1)){
var c__20244__auto___31827 = cljs.core.chunk_first.call(null,seq__31812_31826__$1);
var G__31828 = cljs.core.chunk_rest.call(null,seq__31812_31826__$1);
var G__31829 = c__20244__auto___31827;
var G__31830 = cljs.core.count.call(null,c__20244__auto___31827);
var G__31831 = (0);
seq__31812_31816 = G__31828;
chunk__31813_31817 = G__31829;
count__31814_31818 = G__31830;
i__31815_31819 = G__31831;
continue;
} else {
var veh_31832 = cljs.core.first.call(null,seq__31812_31826__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31832)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31832)));

var G__31833 = cljs.core.next.call(null,seq__31812_31826__$1);
var G__31834 = null;
var G__31835 = (0);
var G__31836 = (0);
seq__31812_31816 = G__31833;
chunk__31813_31817 = G__31834;
count__31814_31818 = G__31835;
i__31815_31819 = G__31836;
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

var vec__31841 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__31841,(0),null);
var lon = cljs.core.nth.call(null,vec__31841,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__31841,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__31841,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__31837_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__31837_SHARP_))),e.target);
});})(vec__31841,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__31841,lat,lon,pos,ico,opt,mrk__$1))
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
var args31844 = [];
var len__20538__auto___31850 = arguments.length;
var i__20539__auto___31851 = (0);
while(true){
if((i__20539__auto___31851 < len__20538__auto___31850)){
args31844.push((arguments[i__20539__auto___31851]));

var G__31852 = (i__20539__auto___31851 + (1));
i__20539__auto___31851 = G__31852;
continue;
} else {
}
break;
}

var G__31846 = args31844.length;
switch (G__31846) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31844.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__31847 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__31847,(0),null);
var lon = cljs.core.nth.call(null,vec__31847,(1),null);
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
return (function (p1__31854_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__31854_SHARP_),cljs.core.second.call(null,p1__31854_SHARP_)));
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
var vec__31858 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__31858,(0),null);
var s = cljs.core.nth.call(null,vec__31858,(1),null);
var w = cljs.core.nth.call(null,vec__31858,(2),null);
var e = cljs.core.nth.call(null,vec__31858,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__31858,n,s,w,e,url){
return (function (response){
return null;
});})(vec__31858,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__31861){
var vec__31865 = p__31861;
var lat = cljs.core.nth.call(null,vec__31865,(0),null);
var lon = cljs.core.nth.call(null,vec__31865,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__31902 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__31903 = null;
var count__31904 = (0);
var i__31905 = (0);
while(true){
if((i__31905 < count__31904)){
var map__31906 = cljs.core._nth.call(null,chunk__31903,i__31905);
var map__31906__$1 = ((((!((map__31906 == null)))?((((map__31906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31906):map__31906);
var ins = map__31906__$1;
var instruct = cljs.core.get.call(null,map__31906__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31908_31936 = cljs.core._EQ_;
var expr__31909_31937 = instruct;
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31909_31937))){
var map__31911_31938 = ins;
var map__31911_31939__$1 = ((((!((map__31911_31938 == null)))?((((map__31911_31938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31911_31938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31911_31938):map__31911_31938);
var id_31940 = cljs.core.get.call(null,map__31911_31939__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31941 = cljs.core.get.call(null,map__31911_31939__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31940,vehicle_31941);
} else {
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31909_31937))){
var map__31913_31942 = ins;
var map__31913_31943__$1 = ((((!((map__31913_31942 == null)))?((((map__31913_31942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31913_31942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31913_31942):map__31913_31942);
var id_31944 = cljs.core.get.call(null,map__31913_31943__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31944);
} else {
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31909_31937))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31909_31937))){
var map__31915_31945 = ins;
var map__31915_31946__$1 = ((((!((map__31915_31945 == null)))?((((map__31915_31945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31915_31945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31915_31945):map__31915_31945);
var id_31947 = cljs.core.get.call(null,map__31915_31946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31948 = cljs.core.get.call(null,map__31915_31946__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31949 = cljs.core.get.call(null,map__31915_31946__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31950 = cljs.core.get.call(null,map__31915_31946__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31951 = cljs.core.get.call(null,map__31915_31946__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31947)){
chart.client.popup.call(null,id_31947,html_31950,time_31951);
} else {
if(cljs.core.truth_((function (){var and__19418__auto__ = lat_31948;
if(cljs.core.truth_(and__19418__auto__)){
return lon_31949;
} else {
return and__19418__auto__;
}
})())){
chart.client.popup.call(null,lat_31948,lon_31949,html_31950,time_31951);
} else {
}
}
} else {
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__31909_31937))){
var map__31917_31952 = ins;
var map__31917_31953__$1 = ((((!((map__31917_31952 == null)))?((((map__31917_31952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31917_31952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31917_31952):map__31917_31952);
var id_31954 = cljs.core.get.call(null,map__31917_31953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_31955 = cljs.core.get.call(null,map__31917_31953__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_31956 = cljs.core.get.call(null,map__31917_31953__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_31957 = cljs.core.get.call(null,map__31917_31953__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_31954,points_31955,options_31956,time_31957);
} else {
if(cljs.core.truth_(pred__31908_31936.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__31909_31937))){
var map__31919_31958 = ins;
var map__31919_31959__$1 = ((((!((map__31919_31958 == null)))?((((map__31919_31958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31919_31958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31919_31958):map__31919_31958);
var coord_31960 = cljs.core.get.call(null,map__31919_31959__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_31960);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__31961 = seq__31902;
var G__31962 = chunk__31903;
var G__31963 = count__31904;
var G__31964 = (i__31905 + (1));
seq__31902 = G__31961;
chunk__31903 = G__31962;
count__31904 = G__31963;
i__31905 = G__31964;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31902);
if(temp__4657__auto__){
var seq__31902__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31902__$1)){
var c__20244__auto__ = cljs.core.chunk_first.call(null,seq__31902__$1);
var G__31965 = cljs.core.chunk_rest.call(null,seq__31902__$1);
var G__31966 = c__20244__auto__;
var G__31967 = cljs.core.count.call(null,c__20244__auto__);
var G__31968 = (0);
seq__31902 = G__31965;
chunk__31903 = G__31966;
count__31904 = G__31967;
i__31905 = G__31968;
continue;
} else {
var map__31921 = cljs.core.first.call(null,seq__31902__$1);
var map__31921__$1 = ((((!((map__31921 == null)))?((((map__31921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31921):map__31921);
var ins = map__31921__$1;
var instruct = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31923_31969 = cljs.core._EQ_;
var expr__31924_31970 = instruct;
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31924_31970))){
var map__31926_31971 = ins;
var map__31926_31972__$1 = ((((!((map__31926_31971 == null)))?((((map__31926_31971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31926_31971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926_31971):map__31926_31971);
var id_31973 = cljs.core.get.call(null,map__31926_31972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31974 = cljs.core.get.call(null,map__31926_31972__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31973,vehicle_31974);
} else {
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31924_31970))){
var map__31928_31975 = ins;
var map__31928_31976__$1 = ((((!((map__31928_31975 == null)))?((((map__31928_31975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31928_31975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31928_31975):map__31928_31975);
var id_31977 = cljs.core.get.call(null,map__31928_31976__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31977);
} else {
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31924_31970))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31924_31970))){
var map__31930_31978 = ins;
var map__31930_31979__$1 = ((((!((map__31930_31978 == null)))?((((map__31930_31978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31930_31978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31930_31978):map__31930_31978);
var id_31980 = cljs.core.get.call(null,map__31930_31979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31981 = cljs.core.get.call(null,map__31930_31979__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31982 = cljs.core.get.call(null,map__31930_31979__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31983 = cljs.core.get.call(null,map__31930_31979__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31984 = cljs.core.get.call(null,map__31930_31979__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31980)){
chart.client.popup.call(null,id_31980,html_31983,time_31984);
} else {
if(cljs.core.truth_((function (){var and__19418__auto__ = lat_31981;
if(cljs.core.truth_(and__19418__auto__)){
return lon_31982;
} else {
return and__19418__auto__;
}
})())){
chart.client.popup.call(null,lat_31981,lon_31982,html_31983,time_31984);
} else {
}
}
} else {
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__31924_31970))){
var map__31932_31985 = ins;
var map__31932_31986__$1 = ((((!((map__31932_31985 == null)))?((((map__31932_31985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31932_31985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31932_31985):map__31932_31985);
var id_31987 = cljs.core.get.call(null,map__31932_31986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_31988 = cljs.core.get.call(null,map__31932_31986__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_31989 = cljs.core.get.call(null,map__31932_31986__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_31990 = cljs.core.get.call(null,map__31932_31986__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_31987,points_31988,options_31989,time_31990);
} else {
if(cljs.core.truth_(pred__31923_31969.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__31924_31970))){
var map__31934_31991 = ins;
var map__31934_31992__$1 = ((((!((map__31934_31991 == null)))?((((map__31934_31991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31934_31991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31934_31991):map__31934_31991);
var coord_31993 = cljs.core.get.call(null,map__31934_31992__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_31993);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__31994 = cljs.core.next.call(null,seq__31902__$1);
var G__31995 = null;
var G__31996 = (0);
var G__31997 = (0);
seq__31902 = G__31994;
chunk__31903 = G__31995;
count__31904 = G__31996;
i__31905 = G__31997;
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
var args31999 = [];
var len__20538__auto___32002 = arguments.length;
var i__20539__auto___32003 = (0);
while(true){
if((i__20539__auto___32003 < len__20538__auto___32002)){
args31999.push((arguments[i__20539__auto___32003]));

var G__32004 = (i__20539__auto___32003 + (1));
i__20539__auto___32003 = G__32004;
continue;
} else {
}
break;
}

var G__32001 = args31999.length;
switch (G__32001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31999.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__31998_SHARP_){
return chart.client.move_to.call(null,sel,p1__31998_SHARP_);
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
var args32010 = [];
var len__20538__auto___32013 = arguments.length;
var i__20539__auto___32014 = (0);
while(true){
if((i__20539__auto___32014 < len__20538__auto___32013)){
args32010.push((arguments[i__20539__auto___32014]));

var G__32015 = (i__20539__auto___32014 + (1));
i__20539__auto___32014 = G__32015;
continue;
} else {
}
break;
}

var G__32012 = args32010.length;
switch (G__32012) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32010.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__32006_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__32006_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__32007_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__32007_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__32008_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__32008_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__32009_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__32009_SHARP_);
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
var pred__32020 = cljs.core._EQ_;
var expr__32021 = cmd;
if(cljs.core.truth_(pred__32020.call(null,"watch-visible",expr__32021))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__32020.call(null,"move-to",expr__32021))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__32020.call(null,"schedule",expr__32021))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32021)].join('')));
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