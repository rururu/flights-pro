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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),"COUNTER",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),"FOLLOWING",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__25801 = response;
var map__25801__$1 = ((((!((map__25801 == null)))?((((map__25801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25801):map__25801);
var status = cljs.core.get.call(null,map__25801__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25801__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_25809 = cljs.core.deref.call(null,vmp);
var mrk_25810 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25809);
var vec__25806_25811 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25809);
var lat_25812 = cljs.core.nth.call(null,vec__25806_25811,(0),null);
var lon_25813 = cljs.core.nth.call(null,vec__25806_25811,(1),null);
var pos_25814 = (new L.LatLng(lat_25812,lon_25813));
mrk_25810.setLatLng(pos_25814);

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
var seq__25819_25823 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25820_25824 = null;
var count__25821_25825 = (0);
var i__25822_25826 = (0);
while(true){
if((i__25822_25826 < count__25821_25825)){
var veh_25827 = cljs.core._nth.call(null,chunk__25820_25824,i__25822_25826);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25827)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25827)));

var G__25828 = seq__25819_25823;
var G__25829 = chunk__25820_25824;
var G__25830 = count__25821_25825;
var G__25831 = (i__25822_25826 + (1));
seq__25819_25823 = G__25828;
chunk__25820_25824 = G__25829;
count__25821_25825 = G__25830;
i__25822_25826 = G__25831;
continue;
} else {
var temp__4657__auto___25832 = cljs.core.seq.call(null,seq__25819_25823);
if(temp__4657__auto___25832){
var seq__25819_25833__$1 = temp__4657__auto___25832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25819_25833__$1)){
var c__22572__auto___25834 = cljs.core.chunk_first.call(null,seq__25819_25833__$1);
var G__25835 = cljs.core.chunk_rest.call(null,seq__25819_25833__$1);
var G__25836 = c__22572__auto___25834;
var G__25837 = cljs.core.count.call(null,c__22572__auto___25834);
var G__25838 = (0);
seq__25819_25823 = G__25835;
chunk__25820_25824 = G__25836;
count__25821_25825 = G__25837;
i__25822_25826 = G__25838;
continue;
} else {
var veh_25839 = cljs.core.first.call(null,seq__25819_25833__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25839)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25839)));

var G__25840 = cljs.core.next.call(null,seq__25819_25833__$1);
var G__25841 = null;
var G__25842 = (0);
var G__25843 = (0);
seq__25819_25823 = G__25840;
chunk__25820_25824 = G__25841;
count__25821_25825 = G__25842;
i__25822_25826 = G__25843;
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

var vec__25848 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25848,(0),null);
var lon = cljs.core.nth.call(null,vec__25848,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__25848,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25848,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25844_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25844_SHARP_))),e.target);
});})(vec__25848,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25848,lat,lon,pos,ico,opt,mrk__$1))
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
var args25851 = [];
var len__22866__auto___25857 = arguments.length;
var i__22867__auto___25858 = (0);
while(true){
if((i__22867__auto___25858 < len__22866__auto___25857)){
args25851.push((arguments[i__22867__auto___25858]));

var G__25859 = (i__22867__auto___25858 + (1));
i__22867__auto___25858 = G__25859;
continue;
} else {
}
break;
}

var G__25853 = args25851.length;
switch (G__25853) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25851.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25854 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25854,(0),null);
var lon = cljs.core.nth.call(null,vec__25854,(1),null);
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
return (function (p1__25861_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__25861_SHARP_),cljs.core.second.call(null,p1__25861_SHARP_)));
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
var vec__25865 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__25865,(0),null);
var s = cljs.core.nth.call(null,vec__25865,(1),null);
var w = cljs.core.nth.call(null,vec__25865,(2),null);
var e = cljs.core.nth.call(null,vec__25865,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__25865,n,s,w,e,url){
return (function (response){
return null;
});})(vec__25865,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__25868){
var vec__25872 = p__25868;
var lat = cljs.core.nth.call(null,vec__25872,(0),null);
var lon = cljs.core.nth.call(null,vec__25872,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__25909 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25910 = null;
var count__25911 = (0);
var i__25912 = (0);
while(true){
if((i__25912 < count__25911)){
var map__25913 = cljs.core._nth.call(null,chunk__25910,i__25912);
var map__25913__$1 = ((((!((map__25913 == null)))?((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);
var ins = map__25913__$1;
var instruct = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25915_25943 = cljs.core._EQ_;
var expr__25916_25944 = instruct;
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25916_25944))){
var map__25918_25945 = ins;
var map__25918_25946__$1 = ((((!((map__25918_25945 == null)))?((((map__25918_25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25918_25945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25918_25945):map__25918_25945);
var id_25947 = cljs.core.get.call(null,map__25918_25946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25948 = cljs.core.get.call(null,map__25918_25946__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25947,vehicle_25948);
} else {
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25916_25944))){
var map__25920_25949 = ins;
var map__25920_25950__$1 = ((((!((map__25920_25949 == null)))?((((map__25920_25949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25920_25949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25920_25949):map__25920_25949);
var id_25951 = cljs.core.get.call(null,map__25920_25950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25951);
} else {
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25916_25944))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25916_25944))){
var map__25922_25952 = ins;
var map__25922_25953__$1 = ((((!((map__25922_25952 == null)))?((((map__25922_25952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25922_25952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922_25952):map__25922_25952);
var id_25954 = cljs.core.get.call(null,map__25922_25953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25955 = cljs.core.get.call(null,map__25922_25953__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25956 = cljs.core.get.call(null,map__25922_25953__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25957 = cljs.core.get.call(null,map__25922_25953__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25958 = cljs.core.get.call(null,map__25922_25953__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25954)){
chart.client.popup.call(null,id_25954,html_25957,time_25958);
} else {
if(cljs.core.truth_((function (){var and__21746__auto__ = lat_25955;
if(cljs.core.truth_(and__21746__auto__)){
return lon_25956;
} else {
return and__21746__auto__;
}
})())){
chart.client.popup.call(null,lat_25955,lon_25956,html_25957,time_25958);
} else {
}
}
} else {
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25916_25944))){
var map__25924_25959 = ins;
var map__25924_25960__$1 = ((((!((map__25924_25959 == null)))?((((map__25924_25959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25924_25959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25924_25959):map__25924_25959);
var id_25961 = cljs.core.get.call(null,map__25924_25960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25962 = cljs.core.get.call(null,map__25924_25960__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25963 = cljs.core.get.call(null,map__25924_25960__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25964 = cljs.core.get.call(null,map__25924_25960__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25961,points_25962,options_25963,time_25964);
} else {
if(cljs.core.truth_(pred__25915_25943.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25916_25944))){
var map__25926_25965 = ins;
var map__25926_25966__$1 = ((((!((map__25926_25965 == null)))?((((map__25926_25965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25926_25965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25926_25965):map__25926_25965);
var coord_25967 = cljs.core.get.call(null,map__25926_25966__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_25967);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__25968 = seq__25909;
var G__25969 = chunk__25910;
var G__25970 = count__25911;
var G__25971 = (i__25912 + (1));
seq__25909 = G__25968;
chunk__25910 = G__25969;
count__25911 = G__25970;
i__25912 = G__25971;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25909);
if(temp__4657__auto__){
var seq__25909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25909__$1)){
var c__22572__auto__ = cljs.core.chunk_first.call(null,seq__25909__$1);
var G__25972 = cljs.core.chunk_rest.call(null,seq__25909__$1);
var G__25973 = c__22572__auto__;
var G__25974 = cljs.core.count.call(null,c__22572__auto__);
var G__25975 = (0);
seq__25909 = G__25972;
chunk__25910 = G__25973;
count__25911 = G__25974;
i__25912 = G__25975;
continue;
} else {
var map__25928 = cljs.core.first.call(null,seq__25909__$1);
var map__25928__$1 = ((((!((map__25928 == null)))?((((map__25928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25928):map__25928);
var ins = map__25928__$1;
var instruct = cljs.core.get.call(null,map__25928__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25930_25976 = cljs.core._EQ_;
var expr__25931_25977 = instruct;
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25931_25977))){
var map__25933_25978 = ins;
var map__25933_25979__$1 = ((((!((map__25933_25978 == null)))?((((map__25933_25978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25933_25978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25933_25978):map__25933_25978);
var id_25980 = cljs.core.get.call(null,map__25933_25979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25981 = cljs.core.get.call(null,map__25933_25979__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25980,vehicle_25981);
} else {
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25931_25977))){
var map__25935_25982 = ins;
var map__25935_25983__$1 = ((((!((map__25935_25982 == null)))?((((map__25935_25982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25935_25982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935_25982):map__25935_25982);
var id_25984 = cljs.core.get.call(null,map__25935_25983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25984);
} else {
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25931_25977))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25931_25977))){
var map__25937_25985 = ins;
var map__25937_25986__$1 = ((((!((map__25937_25985 == null)))?((((map__25937_25985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25937_25985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937_25985):map__25937_25985);
var id_25987 = cljs.core.get.call(null,map__25937_25986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25988 = cljs.core.get.call(null,map__25937_25986__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25989 = cljs.core.get.call(null,map__25937_25986__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25990 = cljs.core.get.call(null,map__25937_25986__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25991 = cljs.core.get.call(null,map__25937_25986__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25987)){
chart.client.popup.call(null,id_25987,html_25990,time_25991);
} else {
if(cljs.core.truth_((function (){var and__21746__auto__ = lat_25988;
if(cljs.core.truth_(and__21746__auto__)){
return lon_25989;
} else {
return and__21746__auto__;
}
})())){
chart.client.popup.call(null,lat_25988,lon_25989,html_25990,time_25991);
} else {
}
}
} else {
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25931_25977))){
var map__25939_25992 = ins;
var map__25939_25993__$1 = ((((!((map__25939_25992 == null)))?((((map__25939_25992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25939_25992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25939_25992):map__25939_25992);
var id_25994 = cljs.core.get.call(null,map__25939_25993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25995 = cljs.core.get.call(null,map__25939_25993__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25996 = cljs.core.get.call(null,map__25939_25993__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25997 = cljs.core.get.call(null,map__25939_25993__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25994,points_25995,options_25996,time_25997);
} else {
if(cljs.core.truth_(pred__25930_25976.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25931_25977))){
var map__25941_25998 = ins;
var map__25941_25999__$1 = ((((!((map__25941_25998 == null)))?((((map__25941_25998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25941_25998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25941_25998):map__25941_25998);
var coord_26000 = cljs.core.get.call(null,map__25941_25999__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_26000);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__26001 = cljs.core.next.call(null,seq__25909__$1);
var G__26002 = null;
var G__26003 = (0);
var G__26004 = (0);
seq__25909 = G__26001;
chunk__25910 = G__26002;
count__25911 = G__26003;
i__25912 = G__26004;
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
var args26006 = [];
var len__22866__auto___26009 = arguments.length;
var i__22867__auto___26010 = (0);
while(true){
if((i__22867__auto___26010 < len__22866__auto___26009)){
args26006.push((arguments[i__22867__auto___26010]));

var G__26011 = (i__22867__auto___26010 + (1));
i__22867__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__26005_SHARP_){
return chart.client.move_to.call(null,sel,p1__26005_SHARP_);
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
var args26017 = [];
var len__22866__auto___26020 = arguments.length;
var i__22867__auto___26021 = (0);
while(true){
if((i__22867__auto___26021 < len__22866__auto___26020)){
args26017.push((arguments[i__22867__auto___26021]));

var G__26022 = (i__22867__auto___26021 + (1));
i__22867__auto___26021 = G__26022;
continue;
} else {
}
break;
}

var G__26019 = args26017.length;
switch (G__26019) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26017.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__26013_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26013_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__26014_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26014_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__26015_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26015_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__26016_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26016_SHARP_);
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
var pred__26027 = cljs.core._EQ_;
var expr__26028 = cmd;
if(cljs.core.truth_(pred__26027.call(null,"watch-visible",expr__26028))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26027.call(null,"move-to",expr__26028))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26027.call(null,"schedule",expr__26028))){
return chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__26027.call(null,"wikipedia",expr__26028))){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26028)].join('')));
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