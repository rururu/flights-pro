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
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(4200),(831),(200),(15000),(911)]);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),"COUNTER",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),"FOLLOWING",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__93962 = response;
var map__93962__$1 = ((((!((map__93962 == null)))?((((map__93962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93962):map__93962);
var status = cljs.core.get.call(null,map__93962__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__93962__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_93970 = cljs.core.deref.call(null,vmp);
var mrk_93971 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_93970);
var vec__93967_93972 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_93970);
var lat_93973 = cljs.core.nth.call(null,vec__93967_93972,(0),null);
var lon_93974 = cljs.core.nth.call(null,vec__93967_93972,(1),null);
var pos_93975 = (new L.LatLng(lat_93973,lon_93974));
mrk_93971.setLatLng(pos_93975);

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
var seq__93980_93984 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__93981_93985 = null;
var count__93982_93986 = (0);
var i__93983_93987 = (0);
while(true){
if((i__93983_93987 < count__93982_93986)){
var veh_93988 = cljs.core._nth.call(null,chunk__93981_93985,i__93983_93987);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_93988)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_93988)));

var G__93989 = seq__93980_93984;
var G__93990 = chunk__93981_93985;
var G__93991 = count__93982_93986;
var G__93992 = (i__93983_93987 + (1));
seq__93980_93984 = G__93989;
chunk__93981_93985 = G__93990;
count__93982_93986 = G__93991;
i__93983_93987 = G__93992;
continue;
} else {
var temp__4657__auto___93993 = cljs.core.seq.call(null,seq__93980_93984);
if(temp__4657__auto___93993){
var seq__93980_93994__$1 = temp__4657__auto___93993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93980_93994__$1)){
var c__89561__auto___93995 = cljs.core.chunk_first.call(null,seq__93980_93994__$1);
var G__93996 = cljs.core.chunk_rest.call(null,seq__93980_93994__$1);
var G__93997 = c__89561__auto___93995;
var G__93998 = cljs.core.count.call(null,c__89561__auto___93995);
var G__93999 = (0);
seq__93980_93984 = G__93996;
chunk__93981_93985 = G__93997;
count__93982_93986 = G__93998;
i__93983_93987 = G__93999;
continue;
} else {
var veh_94000 = cljs.core.first.call(null,seq__93980_93994__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_94000)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_94000)));

var G__94001 = cljs.core.next.call(null,seq__93980_93994__$1);
var G__94002 = null;
var G__94003 = (0);
var G__94004 = (0);
seq__93980_93984 = G__94001;
chunk__93981_93985 = G__94002;
count__93982_93986 = G__94003;
i__93983_93987 = G__94004;
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

var vec__94009 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__94009,(0),null);
var lon = cljs.core.nth.call(null,vec__94009,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__94009,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__94009,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__94005_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__94005_SHARP_))),e.target);
});})(vec__94009,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__94009,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,feature), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__94016_94020 = cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS));
var chunk__94017_94021 = null;
var count__94018_94022 = (0);
var i__94019_94023 = (0);
while(true){
if((i__94019_94023 < count__94018_94022)){
var mrk_94024 = cljs.core._nth.call(null,chunk__94017_94021,i__94019_94023);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_94024);

var G__94025 = seq__94016_94020;
var G__94026 = chunk__94017_94021;
var G__94027 = count__94018_94022;
var G__94028 = (i__94019_94023 + (1));
seq__94016_94020 = G__94025;
chunk__94017_94021 = G__94026;
count__94018_94022 = G__94027;
i__94019_94023 = G__94028;
continue;
} else {
var temp__4657__auto___94029 = cljs.core.seq.call(null,seq__94016_94020);
if(temp__4657__auto___94029){
var seq__94016_94030__$1 = temp__4657__auto___94029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__94016_94030__$1)){
var c__89561__auto___94031 = cljs.core.chunk_first.call(null,seq__94016_94030__$1);
var G__94032 = cljs.core.chunk_rest.call(null,seq__94016_94030__$1);
var G__94033 = c__89561__auto___94031;
var G__94034 = cljs.core.count.call(null,c__89561__auto___94031);
var G__94035 = (0);
seq__94016_94020 = G__94032;
chunk__94017_94021 = G__94033;
count__94018_94022 = G__94034;
i__94019_94023 = G__94035;
continue;
} else {
var mrk_94036 = cljs.core.first.call(null,seq__94016_94030__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_94036);

var G__94037 = cljs.core.next.call(null,seq__94016_94030__$1);
var G__94038 = null;
var G__94039 = (0);
var G__94040 = (0);
seq__94016_94020 = G__94037;
chunk__94017_94021 = G__94038;
count__94018_94022 = G__94039;
i__94019_94023 = G__94040;
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
var args94041 = [];
var len__89855__auto___94047 = arguments.length;
var i__89856__auto___94048 = (0);
while(true){
if((i__89856__auto___94048 < len__89855__auto___94047)){
args94041.push((arguments[i__89856__auto___94048]));

var G__94049 = (i__89856__auto___94048 + (1));
i__89856__auto___94048 = G__94049;
continue;
} else {
}
break;
}

var G__94043 = args94041.length;
switch (G__94043) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94041.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__94044 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__94044,(0),null);
var lon = cljs.core.nth.call(null,vec__94044,(1),null);
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
return (function (p1__94051_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__94051_SHARP_),cljs.core.second.call(null,p1__94051_SHARP_)));
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
var vec__94055 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__94055,(0),null);
var s = cljs.core.nth.call(null,vec__94055,(1),null);
var w = cljs.core.nth.call(null,vec__94055,(2),null);
var e = cljs.core.nth.call(null,vec__94055,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__94055,n,s,w,e,url){
return (function (response){
return null;
});})(vec__94055,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__94058){
var vec__94062 = p__94058;
var lat = cljs.core.nth.call(null,vec__94062,(0),null);
var lon = cljs.core.nth.call(null,vec__94062,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__94103 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__94104 = null;
var count__94105 = (0);
var i__94106 = (0);
while(true){
if((i__94106 < count__94105)){
var map__94107 = cljs.core._nth.call(null,chunk__94104,i__94106);
var map__94107__$1 = ((((!((map__94107 == null)))?((((map__94107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94107):map__94107);
var ins = map__94107__$1;
var instruct = cljs.core.get.call(null,map__94107__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__94109_94141 = cljs.core._EQ_;
var expr__94110_94142 = instruct;
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__94110_94142))){
var map__94112_94143 = ins;
var map__94112_94144__$1 = ((((!((map__94112_94143 == null)))?((((map__94112_94143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94112_94143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94112_94143):map__94112_94143);
var id_94145 = cljs.core.get.call(null,map__94112_94144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_94146 = cljs.core.get.call(null,map__94112_94144__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_94145,vehicle_94146);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__94110_94142))){
var map__94114_94147 = ins;
var map__94114_94148__$1 = ((((!((map__94114_94147 == null)))?((((map__94114_94147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94114_94147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94114_94147):map__94114_94147);
var id_94149 = cljs.core.get.call(null,map__94114_94148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_94149);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__94110_94142))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__94110_94142))){
var map__94116_94150 = ins;
var map__94116_94151__$1 = ((((!((map__94116_94150 == null)))?((((map__94116_94150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94116_94150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94116_94150):map__94116_94150);
var id_94152 = cljs.core.get.call(null,map__94116_94151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_94153 = cljs.core.get.call(null,map__94116_94151__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_94154 = cljs.core.get.call(null,map__94116_94151__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_94155 = cljs.core.get.call(null,map__94116_94151__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_94156 = cljs.core.get.call(null,map__94116_94151__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_94152)){
chart.client.popup.call(null,id_94152,html_94155,time_94156);
} else {
if(cljs.core.truth_((function (){var and__88735__auto__ = lat_94153;
if(cljs.core.truth_(and__88735__auto__)){
return lon_94154;
} else {
return and__88735__auto__;
}
})())){
chart.client.popup.call(null,lat_94153,lon_94154,html_94155,time_94156);
} else {
}
}
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__94110_94142))){
var map__94118_94157 = ins;
var map__94118_94158__$1 = ((((!((map__94118_94157 == null)))?((((map__94118_94157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94118_94157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94118_94157):map__94118_94157);
var id_94159 = cljs.core.get.call(null,map__94118_94158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_94160 = cljs.core.get.call(null,map__94118_94158__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_94161 = cljs.core.get.call(null,map__94118_94158__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_94162 = cljs.core.get.call(null,map__94118_94158__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_94159,points_94160,options_94161,time_94162);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__94110_94142))){
var map__94120_94163 = ins;
var map__94120_94164__$1 = ((((!((map__94120_94163 == null)))?((((map__94120_94163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94120_94163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94120_94163):map__94120_94163);
var coord_94165 = cljs.core.get.call(null,map__94120_94164__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_94165);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__94110_94142))){
var map__94122_94166 = ins;
var map__94122_94167__$1 = ((((!((map__94122_94166 == null)))?((((map__94122_94166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94122_94166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94122_94166):map__94122_94166);
var iname_94168 = cljs.core.get.call(null,map__94122_94167__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_94169 = cljs.core.get.call(null,map__94122_94167__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_94170 = cljs.core.get.call(null,map__94122_94167__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_94171 = cljs.core.get.call(null,map__94122_94167__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_94168,lat_94169,lon_94170,feature_94171);
} else {
if(cljs.core.truth_(pred__94109_94141.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__94110_94142))){
chart.client.clear_placemarks.call(null);
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

var G__94172 = seq__94103;
var G__94173 = chunk__94104;
var G__94174 = count__94105;
var G__94175 = (i__94106 + (1));
seq__94103 = G__94172;
chunk__94104 = G__94173;
count__94105 = G__94174;
i__94106 = G__94175;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__94103);
if(temp__4657__auto__){
var seq__94103__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__94103__$1)){
var c__89561__auto__ = cljs.core.chunk_first.call(null,seq__94103__$1);
var G__94176 = cljs.core.chunk_rest.call(null,seq__94103__$1);
var G__94177 = c__89561__auto__;
var G__94178 = cljs.core.count.call(null,c__89561__auto__);
var G__94179 = (0);
seq__94103 = G__94176;
chunk__94104 = G__94177;
count__94105 = G__94178;
i__94106 = G__94179;
continue;
} else {
var map__94124 = cljs.core.first.call(null,seq__94103__$1);
var map__94124__$1 = ((((!((map__94124 == null)))?((((map__94124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94124):map__94124);
var ins = map__94124__$1;
var instruct = cljs.core.get.call(null,map__94124__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__94126_94180 = cljs.core._EQ_;
var expr__94127_94181 = instruct;
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__94127_94181))){
var map__94129_94182 = ins;
var map__94129_94183__$1 = ((((!((map__94129_94182 == null)))?((((map__94129_94182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94129_94182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94129_94182):map__94129_94182);
var id_94184 = cljs.core.get.call(null,map__94129_94183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_94185 = cljs.core.get.call(null,map__94129_94183__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_94184,vehicle_94185);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__94127_94181))){
var map__94131_94186 = ins;
var map__94131_94187__$1 = ((((!((map__94131_94186 == null)))?((((map__94131_94186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94131_94186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94131_94186):map__94131_94186);
var id_94188 = cljs.core.get.call(null,map__94131_94187__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_94188);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__94127_94181))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__94127_94181))){
var map__94133_94189 = ins;
var map__94133_94190__$1 = ((((!((map__94133_94189 == null)))?((((map__94133_94189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94133_94189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94133_94189):map__94133_94189);
var id_94191 = cljs.core.get.call(null,map__94133_94190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_94192 = cljs.core.get.call(null,map__94133_94190__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_94193 = cljs.core.get.call(null,map__94133_94190__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_94194 = cljs.core.get.call(null,map__94133_94190__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_94195 = cljs.core.get.call(null,map__94133_94190__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_94191)){
chart.client.popup.call(null,id_94191,html_94194,time_94195);
} else {
if(cljs.core.truth_((function (){var and__88735__auto__ = lat_94192;
if(cljs.core.truth_(and__88735__auto__)){
return lon_94193;
} else {
return and__88735__auto__;
}
})())){
chart.client.popup.call(null,lat_94192,lon_94193,html_94194,time_94195);
} else {
}
}
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__94127_94181))){
var map__94135_94196 = ins;
var map__94135_94197__$1 = ((((!((map__94135_94196 == null)))?((((map__94135_94196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94135_94196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94135_94196):map__94135_94196);
var id_94198 = cljs.core.get.call(null,map__94135_94197__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_94199 = cljs.core.get.call(null,map__94135_94197__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_94200 = cljs.core.get.call(null,map__94135_94197__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_94201 = cljs.core.get.call(null,map__94135_94197__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_94198,points_94199,options_94200,time_94201);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__94127_94181))){
var map__94137_94202 = ins;
var map__94137_94203__$1 = ((((!((map__94137_94202 == null)))?((((map__94137_94202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94137_94202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94137_94202):map__94137_94202);
var coord_94204 = cljs.core.get.call(null,map__94137_94203__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_94204);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__94127_94181))){
var map__94139_94205 = ins;
var map__94139_94206__$1 = ((((!((map__94139_94205 == null)))?((((map__94139_94205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94139_94205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94139_94205):map__94139_94205);
var iname_94207 = cljs.core.get.call(null,map__94139_94206__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_94208 = cljs.core.get.call(null,map__94139_94206__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_94209 = cljs.core.get.call(null,map__94139_94206__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_94210 = cljs.core.get.call(null,map__94139_94206__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_94207,lat_94208,lon_94209,feature_94210);
} else {
if(cljs.core.truth_(pred__94126_94180.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__94127_94181))){
chart.client.clear_placemarks.call(null);
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

var G__94211 = cljs.core.next.call(null,seq__94103__$1);
var G__94212 = null;
var G__94213 = (0);
var G__94214 = (0);
seq__94103 = G__94211;
chunk__94104 = G__94212;
count__94105 = G__94213;
i__94106 = G__94214;
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
var args94216 = [];
var len__89855__auto___94219 = arguments.length;
var i__89856__auto___94220 = (0);
while(true){
if((i__89856__auto___94220 < len__89855__auto___94219)){
args94216.push((arguments[i__89856__auto___94220]));

var G__94221 = (i__89856__auto___94220 + (1));
i__89856__auto___94220 = G__94221;
continue;
} else {
}
break;
}

var G__94218 = args94216.length;
switch (G__94218) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94216.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__94215_SHARP_){
return chart.client.move_to.call(null,sel,p1__94215_SHARP_);
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
var args94227 = [];
var len__89855__auto___94230 = arguments.length;
var i__89856__auto___94231 = (0);
while(true){
if((i__89856__auto___94231 < len__89855__auto___94230)){
args94227.push((arguments[i__89856__auto___94231]));

var G__94232 = (i__89856__auto___94231 + (1));
i__89856__auto___94231 = G__94232;
continue;
} else {
}
break;
}

var G__94229 = args94227.length;
switch (G__94229) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94227.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__94223_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__94223_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__94224_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__94224_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__94225_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__94225_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__94226_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__94226_SHARP_);
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
var pred__94237 = cljs.core._EQ_;
var expr__94238 = cmd;
if(cljs.core.truth_(pred__94237.call(null,"watch-visible",expr__94238))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__94237.call(null,"move-to",expr__94238))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__94237.call(null,"schedule",expr__94238))){
return chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__94237.call(null,"wikipedia",expr__94238))){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__94238)].join('')));
}
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