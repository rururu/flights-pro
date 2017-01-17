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
var map__11778 = response;
var map__11778__$1 = ((((!((map__11778 == null)))?((((map__11778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11778):map__11778);
var status = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11778__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_11786 = cljs.core.deref.call(null,vmp);
var mrk_11787 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_11786);
var vec__11783_11788 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_11786);
var lat_11789 = cljs.core.nth.call(null,vec__11783_11788,(0),null);
var lon_11790 = cljs.core.nth.call(null,vec__11783_11788,(1),null);
var pos_11791 = (new L.LatLng(lat_11789,lon_11790));
mrk_11787.setLatLng(pos_11791);

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
var seq__11796_11800 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__11797_11801 = null;
var count__11798_11802 = (0);
var i__11799_11803 = (0);
while(true){
if((i__11799_11803 < count__11798_11802)){
var veh_11804 = cljs.core._nth.call(null,chunk__11797_11801,i__11799_11803);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11804)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11804)));

var G__11805 = seq__11796_11800;
var G__11806 = chunk__11797_11801;
var G__11807 = count__11798_11802;
var G__11808 = (i__11799_11803 + (1));
seq__11796_11800 = G__11805;
chunk__11797_11801 = G__11806;
count__11798_11802 = G__11807;
i__11799_11803 = G__11808;
continue;
} else {
var temp__4657__auto___11809 = cljs.core.seq.call(null,seq__11796_11800);
if(temp__4657__auto___11809){
var seq__11796_11810__$1 = temp__4657__auto___11809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11796_11810__$1)){
var c__9319__auto___11811 = cljs.core.chunk_first.call(null,seq__11796_11810__$1);
var G__11812 = cljs.core.chunk_rest.call(null,seq__11796_11810__$1);
var G__11813 = c__9319__auto___11811;
var G__11814 = cljs.core.count.call(null,c__9319__auto___11811);
var G__11815 = (0);
seq__11796_11800 = G__11812;
chunk__11797_11801 = G__11813;
count__11798_11802 = G__11814;
i__11799_11803 = G__11815;
continue;
} else {
var veh_11816 = cljs.core.first.call(null,seq__11796_11810__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11816)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11816)));

var G__11817 = cljs.core.next.call(null,seq__11796_11810__$1);
var G__11818 = null;
var G__11819 = (0);
var G__11820 = (0);
seq__11796_11800 = G__11817;
chunk__11797_11801 = G__11818;
count__11798_11802 = G__11819;
i__11799_11803 = G__11820;
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

var vec__11825 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__11825,(0),null);
var lon = cljs.core.nth.call(null,vec__11825,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__11825,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__11825,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__11821_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__11821_SHARP_))),e.target);
});})(vec__11825,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__11825,lat,lon,pos,ico,opt,mrk__$1))
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
var args11828 = [];
var len__9613__auto___11834 = arguments.length;
var i__9614__auto___11835 = (0);
while(true){
if((i__9614__auto___11835 < len__9613__auto___11834)){
args11828.push((arguments[i__9614__auto___11835]));

var G__11836 = (i__9614__auto___11835 + (1));
i__9614__auto___11835 = G__11836;
continue;
} else {
}
break;
}

var G__11830 = args11828.length;
switch (G__11830) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11828.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__11831 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__11831,(0),null);
var lon = cljs.core.nth.call(null,vec__11831,(1),null);
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
return (function (p1__11838_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11838_SHARP_),cljs.core.second.call(null,p1__11838_SHARP_)));
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
var vec__11842 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__11842,(0),null);
var s = cljs.core.nth.call(null,vec__11842,(1),null);
var w = cljs.core.nth.call(null,vec__11842,(2),null);
var e = cljs.core.nth.call(null,vec__11842,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__11842,n,s,w,e,url){
return (function (response){
return null;
});})(vec__11842,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__11845){
var vec__11849 = p__11845;
var lat = cljs.core.nth.call(null,vec__11849,(0),null);
var lon = cljs.core.nth.call(null,vec__11849,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__11886 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__11887 = null;
var count__11888 = (0);
var i__11889 = (0);
while(true){
if((i__11889 < count__11888)){
var map__11890 = cljs.core._nth.call(null,chunk__11887,i__11889);
var map__11890__$1 = ((((!((map__11890 == null)))?((((map__11890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11890):map__11890);
var ins = map__11890__$1;
var instruct = cljs.core.get.call(null,map__11890__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__11892_11920 = cljs.core._EQ_;
var expr__11893_11921 = instruct;
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__11893_11921))){
var map__11895_11922 = ins;
var map__11895_11923__$1 = ((((!((map__11895_11922 == null)))?((((map__11895_11922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11895_11922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11895_11922):map__11895_11922);
var id_11924 = cljs.core.get.call(null,map__11895_11923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_11925 = cljs.core.get.call(null,map__11895_11923__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_11924,vehicle_11925);
} else {
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__11893_11921))){
var map__11897_11926 = ins;
var map__11897_11927__$1 = ((((!((map__11897_11926 == null)))?((((map__11897_11926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11897_11926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11897_11926):map__11897_11926);
var id_11928 = cljs.core.get.call(null,map__11897_11927__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_11928);
} else {
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__11893_11921))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__11893_11921))){
var map__11899_11929 = ins;
var map__11899_11930__$1 = ((((!((map__11899_11929 == null)))?((((map__11899_11929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11899_11929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11899_11929):map__11899_11929);
var id_11931 = cljs.core.get.call(null,map__11899_11930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_11932 = cljs.core.get.call(null,map__11899_11930__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_11933 = cljs.core.get.call(null,map__11899_11930__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_11934 = cljs.core.get.call(null,map__11899_11930__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_11935 = cljs.core.get.call(null,map__11899_11930__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_11931)){
chart.client.popup.call(null,id_11931,html_11934,time_11935);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_11932;
if(cljs.core.truth_(and__8493__auto__)){
return lon_11933;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_11932,lon_11933,html_11934,time_11935);
} else {
}
}
} else {
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__11893_11921))){
var map__11901_11936 = ins;
var map__11901_11937__$1 = ((((!((map__11901_11936 == null)))?((((map__11901_11936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11901_11936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11901_11936):map__11901_11936);
var id_11938 = cljs.core.get.call(null,map__11901_11937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_11939 = cljs.core.get.call(null,map__11901_11937__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_11940 = cljs.core.get.call(null,map__11901_11937__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_11941 = cljs.core.get.call(null,map__11901_11937__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_11938,points_11939,options_11940,time_11941);
} else {
if(cljs.core.truth_(pred__11892_11920.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__11893_11921))){
var map__11903_11942 = ins;
var map__11903_11943__$1 = ((((!((map__11903_11942 == null)))?((((map__11903_11942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903_11942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903_11942):map__11903_11942);
var coord_11944 = cljs.core.get.call(null,map__11903_11943__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_11944);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__11945 = seq__11886;
var G__11946 = chunk__11887;
var G__11947 = count__11888;
var G__11948 = (i__11889 + (1));
seq__11886 = G__11945;
chunk__11887 = G__11946;
count__11888 = G__11947;
i__11889 = G__11948;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11886);
if(temp__4657__auto__){
var seq__11886__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11886__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__11886__$1);
var G__11949 = cljs.core.chunk_rest.call(null,seq__11886__$1);
var G__11950 = c__9319__auto__;
var G__11951 = cljs.core.count.call(null,c__9319__auto__);
var G__11952 = (0);
seq__11886 = G__11949;
chunk__11887 = G__11950;
count__11888 = G__11951;
i__11889 = G__11952;
continue;
} else {
var map__11905 = cljs.core.first.call(null,seq__11886__$1);
var map__11905__$1 = ((((!((map__11905 == null)))?((((map__11905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11905):map__11905);
var ins = map__11905__$1;
var instruct = cljs.core.get.call(null,map__11905__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__11907_11953 = cljs.core._EQ_;
var expr__11908_11954 = instruct;
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__11908_11954))){
var map__11910_11955 = ins;
var map__11910_11956__$1 = ((((!((map__11910_11955 == null)))?((((map__11910_11955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11910_11955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11910_11955):map__11910_11955);
var id_11957 = cljs.core.get.call(null,map__11910_11956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_11958 = cljs.core.get.call(null,map__11910_11956__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_11957,vehicle_11958);
} else {
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__11908_11954))){
var map__11912_11959 = ins;
var map__11912_11960__$1 = ((((!((map__11912_11959 == null)))?((((map__11912_11959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11912_11959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11912_11959):map__11912_11959);
var id_11961 = cljs.core.get.call(null,map__11912_11960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_11961);
} else {
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__11908_11954))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__11908_11954))){
var map__11914_11962 = ins;
var map__11914_11963__$1 = ((((!((map__11914_11962 == null)))?((((map__11914_11962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11914_11962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11914_11962):map__11914_11962);
var id_11964 = cljs.core.get.call(null,map__11914_11963__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_11965 = cljs.core.get.call(null,map__11914_11963__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_11966 = cljs.core.get.call(null,map__11914_11963__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_11967 = cljs.core.get.call(null,map__11914_11963__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_11968 = cljs.core.get.call(null,map__11914_11963__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_11964)){
chart.client.popup.call(null,id_11964,html_11967,time_11968);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_11965;
if(cljs.core.truth_(and__8493__auto__)){
return lon_11966;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_11965,lon_11966,html_11967,time_11968);
} else {
}
}
} else {
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__11908_11954))){
var map__11916_11969 = ins;
var map__11916_11970__$1 = ((((!((map__11916_11969 == null)))?((((map__11916_11969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11916_11969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11916_11969):map__11916_11969);
var id_11971 = cljs.core.get.call(null,map__11916_11970__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_11972 = cljs.core.get.call(null,map__11916_11970__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_11973 = cljs.core.get.call(null,map__11916_11970__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_11974 = cljs.core.get.call(null,map__11916_11970__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_11971,points_11972,options_11973,time_11974);
} else {
if(cljs.core.truth_(pred__11907_11953.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__11908_11954))){
var map__11918_11975 = ins;
var map__11918_11976__$1 = ((((!((map__11918_11975 == null)))?((((map__11918_11975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11918_11975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11918_11975):map__11918_11975);
var coord_11977 = cljs.core.get.call(null,map__11918_11976__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_11977);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__11978 = cljs.core.next.call(null,seq__11886__$1);
var G__11979 = null;
var G__11980 = (0);
var G__11981 = (0);
seq__11886 = G__11978;
chunk__11887 = G__11979;
count__11888 = G__11980;
i__11889 = G__11981;
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
var args11983 = [];
var len__9613__auto___11986 = arguments.length;
var i__9614__auto___11987 = (0);
while(true){
if((i__9614__auto___11987 < len__9613__auto___11986)){
args11983.push((arguments[i__9614__auto___11987]));

var G__11988 = (i__9614__auto___11987 + (1));
i__9614__auto___11987 = G__11988;
continue;
} else {
}
break;
}

var G__11985 = args11983.length;
switch (G__11985) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11983.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__11982_SHARP_){
return chart.client.move_to.call(null,sel,p1__11982_SHARP_);
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
var args11994 = [];
var len__9613__auto___11997 = arguments.length;
var i__9614__auto___11998 = (0);
while(true){
if((i__9614__auto___11998 < len__9613__auto___11997)){
args11994.push((arguments[i__9614__auto___11998]));

var G__11999 = (i__9614__auto___11998 + (1));
i__9614__auto___11998 = G__11999;
continue;
} else {
}
break;
}

var G__11996 = args11994.length;
switch (G__11996) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11994.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__11990_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__11990_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__11991_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__11991_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__11992_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__11992_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__11993_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__11993_SHARP_);
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
var pred__12004 = cljs.core._EQ_;
var expr__12005 = cmd;
if(cljs.core.truth_(pred__12004.call(null,"watch-visible",expr__12005))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__12004.call(null,"move-to",expr__12005))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12004.call(null,"schedule",expr__12005))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12005)].join('')));
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