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

var mp_19791 = cljs.core.deref.call(null,vmp);
var mrk_19792 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_19791);
var vec__19788_19793 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_19791);
var lat_19794 = cljs.core.nth.call(null,vec__19788_19793,(0),null);
var lon_19795 = cljs.core.nth.call(null,vec__19788_19793,(1),null);
var pos_19796 = (new L.LatLng(lat_19794,lon_19795));
mrk_19792.setLatLng(pos_19796);

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
var seq__19801_19805 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__19802_19806 = null;
var count__19803_19807 = (0);
var i__19804_19808 = (0);
while(true){
if((i__19804_19808 < count__19803_19807)){
var veh_19809 = cljs.core._nth.call(null,chunk__19802_19806,i__19804_19808);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_19809)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_19809)));

var G__19810 = seq__19801_19805;
var G__19811 = chunk__19802_19806;
var G__19812 = count__19803_19807;
var G__19813 = (i__19804_19808 + (1));
seq__19801_19805 = G__19810;
chunk__19802_19806 = G__19811;
count__19803_19807 = G__19812;
i__19804_19808 = G__19813;
continue;
} else {
var temp__4657__auto___19814 = cljs.core.seq.call(null,seq__19801_19805);
if(temp__4657__auto___19814){
var seq__19801_19815__$1 = temp__4657__auto___19814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19801_19815__$1)){
var c__9796__auto___19816 = cljs.core.chunk_first.call(null,seq__19801_19815__$1);
var G__19817 = cljs.core.chunk_rest.call(null,seq__19801_19815__$1);
var G__19818 = c__9796__auto___19816;
var G__19819 = cljs.core.count.call(null,c__9796__auto___19816);
var G__19820 = (0);
seq__19801_19805 = G__19817;
chunk__19802_19806 = G__19818;
count__19803_19807 = G__19819;
i__19804_19808 = G__19820;
continue;
} else {
var veh_19821 = cljs.core.first.call(null,seq__19801_19815__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_19821)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_19821)));

var G__19822 = cljs.core.next.call(null,seq__19801_19815__$1);
var G__19823 = null;
var G__19824 = (0);
var G__19825 = (0);
seq__19801_19805 = G__19822;
chunk__19802_19806 = G__19823;
count__19803_19807 = G__19824;
i__19804_19808 = G__19825;
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
var map__19828 = response;
var map__19828__$1 = ((((!((map__19828 == null)))?((((map__19828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19828):map__19828);
var status = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__19834 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__19834,(0),null);
var lon = cljs.core.nth.call(null,vec__19834,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__19834,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__19834,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__19830_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__19830_SHARP_))),e.target);
});})(vec__19834,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__19834,lat,lon,pos,ico,opt,mrk__$1))
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
var args19837 = [];
var len__10090__auto___19843 = arguments.length;
var i__10091__auto___19844 = (0);
while(true){
if((i__10091__auto___19844 < len__10090__auto___19843)){
args19837.push((arguments[i__10091__auto___19844]));

var G__19845 = (i__10091__auto___19844 + (1));
i__10091__auto___19844 = G__19845;
continue;
} else {
}
break;
}

var G__19839 = args19837.length;
switch (G__19839) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19837.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__19840 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__19840,(0),null);
var lon = cljs.core.nth.call(null,vec__19840,(1),null);
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
return (function (p1__19847_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__19847_SHARP_),cljs.core.second.call(null,p1__19847_SHARP_)));
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
var vec__19851 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__19851,(0),null);
var s = cljs.core.nth.call(null,vec__19851,(1),null);
var w = cljs.core.nth.call(null,vec__19851,(2),null);
var e = cljs.core.nth.call(null,vec__19851,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__19851,n,s,w,e,url){
return (function (response){
return null;
});})(vec__19851,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__19854){
var vec__19858 = p__19854;
var lat = cljs.core.nth.call(null,vec__19858,(0),null);
var lon = cljs.core.nth.call(null,vec__19858,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__19895 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__19896 = null;
var count__19897 = (0);
var i__19898 = (0);
while(true){
if((i__19898 < count__19897)){
var map__19899 = cljs.core._nth.call(null,chunk__19896,i__19898);
var map__19899__$1 = ((((!((map__19899 == null)))?((((map__19899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19899):map__19899);
var ins = map__19899__$1;
var instruct = cljs.core.get.call(null,map__19899__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__19901_19929 = cljs.core._EQ_;
var expr__19902_19930 = instruct;
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__19902_19930))){
var map__19904_19931 = ins;
var map__19904_19932__$1 = ((((!((map__19904_19931 == null)))?((((map__19904_19931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19904_19931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19904_19931):map__19904_19931);
var id_19933 = cljs.core.get.call(null,map__19904_19932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_19934 = cljs.core.get.call(null,map__19904_19932__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_19933,vehicle_19934);
} else {
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__19902_19930))){
var map__19906_19935 = ins;
var map__19906_19936__$1 = ((((!((map__19906_19935 == null)))?((((map__19906_19935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19906_19935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19906_19935):map__19906_19935);
var id_19937 = cljs.core.get.call(null,map__19906_19936__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_19937);
} else {
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__19902_19930))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__19902_19930))){
var map__19908_19938 = ins;
var map__19908_19939__$1 = ((((!((map__19908_19938 == null)))?((((map__19908_19938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19908_19938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19908_19938):map__19908_19938);
var id_19940 = cljs.core.get.call(null,map__19908_19939__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_19941 = cljs.core.get.call(null,map__19908_19939__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_19942 = cljs.core.get.call(null,map__19908_19939__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_19943 = cljs.core.get.call(null,map__19908_19939__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_19944 = cljs.core.get.call(null,map__19908_19939__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_19940)){
chart.client.popup.call(null,id_19940,html_19943,time_19944);
} else {
if(cljs.core.truth_((function (){var and__8970__auto__ = lat_19941;
if(cljs.core.truth_(and__8970__auto__)){
return lon_19942;
} else {
return and__8970__auto__;
}
})())){
chart.client.popup.call(null,lat_19941,lon_19942,html_19943,time_19944);
} else {
}
}
} else {
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__19902_19930))){
var map__19910_19945 = ins;
var map__19910_19946__$1 = ((((!((map__19910_19945 == null)))?((((map__19910_19945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19910_19945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19910_19945):map__19910_19945);
var id_19947 = cljs.core.get.call(null,map__19910_19946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_19948 = cljs.core.get.call(null,map__19910_19946__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_19949 = cljs.core.get.call(null,map__19910_19946__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_19950 = cljs.core.get.call(null,map__19910_19946__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_19947,points_19948,options_19949,time_19950);
} else {
if(cljs.core.truth_(pred__19901_19929.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__19902_19930))){
var map__19912_19951 = ins;
var map__19912_19952__$1 = ((((!((map__19912_19951 == null)))?((((map__19912_19951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19912_19951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19912_19951):map__19912_19951);
var coord_19953 = cljs.core.get.call(null,map__19912_19952__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_19953);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__19954 = seq__19895;
var G__19955 = chunk__19896;
var G__19956 = count__19897;
var G__19957 = (i__19898 + (1));
seq__19895 = G__19954;
chunk__19896 = G__19955;
count__19897 = G__19956;
i__19898 = G__19957;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19895);
if(temp__4657__auto__){
var seq__19895__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19895__$1)){
var c__9796__auto__ = cljs.core.chunk_first.call(null,seq__19895__$1);
var G__19958 = cljs.core.chunk_rest.call(null,seq__19895__$1);
var G__19959 = c__9796__auto__;
var G__19960 = cljs.core.count.call(null,c__9796__auto__);
var G__19961 = (0);
seq__19895 = G__19958;
chunk__19896 = G__19959;
count__19897 = G__19960;
i__19898 = G__19961;
continue;
} else {
var map__19914 = cljs.core.first.call(null,seq__19895__$1);
var map__19914__$1 = ((((!((map__19914 == null)))?((((map__19914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19914):map__19914);
var ins = map__19914__$1;
var instruct = cljs.core.get.call(null,map__19914__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__19916_19962 = cljs.core._EQ_;
var expr__19917_19963 = instruct;
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__19917_19963))){
var map__19919_19964 = ins;
var map__19919_19965__$1 = ((((!((map__19919_19964 == null)))?((((map__19919_19964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19919_19964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19919_19964):map__19919_19964);
var id_19966 = cljs.core.get.call(null,map__19919_19965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_19967 = cljs.core.get.call(null,map__19919_19965__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_19966,vehicle_19967);
} else {
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__19917_19963))){
var map__19921_19968 = ins;
var map__19921_19969__$1 = ((((!((map__19921_19968 == null)))?((((map__19921_19968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19921_19968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19921_19968):map__19921_19968);
var id_19970 = cljs.core.get.call(null,map__19921_19969__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_19970);
} else {
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__19917_19963))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__19917_19963))){
var map__19923_19971 = ins;
var map__19923_19972__$1 = ((((!((map__19923_19971 == null)))?((((map__19923_19971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19923_19971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19923_19971):map__19923_19971);
var id_19973 = cljs.core.get.call(null,map__19923_19972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_19974 = cljs.core.get.call(null,map__19923_19972__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_19975 = cljs.core.get.call(null,map__19923_19972__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_19976 = cljs.core.get.call(null,map__19923_19972__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_19977 = cljs.core.get.call(null,map__19923_19972__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_19973)){
chart.client.popup.call(null,id_19973,html_19976,time_19977);
} else {
if(cljs.core.truth_((function (){var and__8970__auto__ = lat_19974;
if(cljs.core.truth_(and__8970__auto__)){
return lon_19975;
} else {
return and__8970__auto__;
}
})())){
chart.client.popup.call(null,lat_19974,lon_19975,html_19976,time_19977);
} else {
}
}
} else {
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__19917_19963))){
var map__19925_19978 = ins;
var map__19925_19979__$1 = ((((!((map__19925_19978 == null)))?((((map__19925_19978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19925_19978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19925_19978):map__19925_19978);
var id_19980 = cljs.core.get.call(null,map__19925_19979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_19981 = cljs.core.get.call(null,map__19925_19979__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_19982 = cljs.core.get.call(null,map__19925_19979__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_19983 = cljs.core.get.call(null,map__19925_19979__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_19980,points_19981,options_19982,time_19983);
} else {
if(cljs.core.truth_(pred__19916_19962.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__19917_19963))){
var map__19927_19984 = ins;
var map__19927_19985__$1 = ((((!((map__19927_19984 == null)))?((((map__19927_19984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19927_19984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19927_19984):map__19927_19984);
var coord_19986 = cljs.core.get.call(null,map__19927_19985__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_19986);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__19987 = cljs.core.next.call(null,seq__19895__$1);
var G__19988 = null;
var G__19989 = (0);
var G__19990 = (0);
seq__19895 = G__19987;
chunk__19896 = G__19988;
count__19897 = G__19989;
i__19898 = G__19990;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__19994 = cljs.core._EQ_;
var expr__19995 = cmd;
if(cljs.core.truth_(pred__19994.call(null,"watch-visible",expr__19995))){
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