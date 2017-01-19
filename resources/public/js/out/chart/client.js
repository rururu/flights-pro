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
var map__33782 = response;
var map__33782__$1 = ((((!((map__33782 == null)))?((((map__33782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33782):map__33782);
var status = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_33790 = cljs.core.deref.call(null,vmp);
var mrk_33791 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_33790);
var vec__33787_33792 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_33790);
var lat_33793 = cljs.core.nth.call(null,vec__33787_33792,(0),null);
var lon_33794 = cljs.core.nth.call(null,vec__33787_33792,(1),null);
var pos_33795 = (new L.LatLng(lat_33793,lon_33794));
mrk_33791.setLatLng(pos_33795);

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
var seq__33800_33804 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__33801_33805 = null;
var count__33802_33806 = (0);
var i__33803_33807 = (0);
while(true){
if((i__33803_33807 < count__33802_33806)){
var veh_33808 = cljs.core._nth.call(null,chunk__33801_33805,i__33803_33807);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33808)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33808)));

var G__33809 = seq__33800_33804;
var G__33810 = chunk__33801_33805;
var G__33811 = count__33802_33806;
var G__33812 = (i__33803_33807 + (1));
seq__33800_33804 = G__33809;
chunk__33801_33805 = G__33810;
count__33802_33806 = G__33811;
i__33803_33807 = G__33812;
continue;
} else {
var temp__4657__auto___33813 = cljs.core.seq.call(null,seq__33800_33804);
if(temp__4657__auto___33813){
var seq__33800_33814__$1 = temp__4657__auto___33813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33800_33814__$1)){
var c__31665__auto___33815 = cljs.core.chunk_first.call(null,seq__33800_33814__$1);
var G__33816 = cljs.core.chunk_rest.call(null,seq__33800_33814__$1);
var G__33817 = c__31665__auto___33815;
var G__33818 = cljs.core.count.call(null,c__31665__auto___33815);
var G__33819 = (0);
seq__33800_33804 = G__33816;
chunk__33801_33805 = G__33817;
count__33802_33806 = G__33818;
i__33803_33807 = G__33819;
continue;
} else {
var veh_33820 = cljs.core.first.call(null,seq__33800_33814__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33820)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33820)));

var G__33821 = cljs.core.next.call(null,seq__33800_33814__$1);
var G__33822 = null;
var G__33823 = (0);
var G__33824 = (0);
seq__33800_33804 = G__33821;
chunk__33801_33805 = G__33822;
count__33802_33806 = G__33823;
i__33803_33807 = G__33824;
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

var vec__33829 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__33829,(0),null);
var lon = cljs.core.nth.call(null,vec__33829,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__33829,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__33829,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__33825_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__33825_SHARP_))),e.target);
});})(vec__33829,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__33829,lat,lon,pos,ico,opt,mrk__$1))
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
var args33832 = [];
var len__31959__auto___33838 = arguments.length;
var i__31960__auto___33839 = (0);
while(true){
if((i__31960__auto___33839 < len__31959__auto___33838)){
args33832.push((arguments[i__31960__auto___33839]));

var G__33840 = (i__31960__auto___33839 + (1));
i__31960__auto___33839 = G__33840;
continue;
} else {
}
break;
}

var G__33834 = args33832.length;
switch (G__33834) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33832.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__33835 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__33835,(0),null);
var lon = cljs.core.nth.call(null,vec__33835,(1),null);
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
return (function (p1__33842_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__33842_SHARP_),cljs.core.second.call(null,p1__33842_SHARP_)));
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
var vec__33846 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__33846,(0),null);
var s = cljs.core.nth.call(null,vec__33846,(1),null);
var w = cljs.core.nth.call(null,vec__33846,(2),null);
var e = cljs.core.nth.call(null,vec__33846,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__33846,n,s,w,e,url){
return (function (response){
return null;
});})(vec__33846,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__33849){
var vec__33853 = p__33849;
var lat = cljs.core.nth.call(null,vec__33853,(0),null);
var lon = cljs.core.nth.call(null,vec__33853,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__33890 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__33891 = null;
var count__33892 = (0);
var i__33893 = (0);
while(true){
if((i__33893 < count__33892)){
var map__33894 = cljs.core._nth.call(null,chunk__33891,i__33893);
var map__33894__$1 = ((((!((map__33894 == null)))?((((map__33894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33894):map__33894);
var ins = map__33894__$1;
var instruct = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33896_33924 = cljs.core._EQ_;
var expr__33897_33925 = instruct;
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33897_33925))){
var map__33899_33926 = ins;
var map__33899_33927__$1 = ((((!((map__33899_33926 == null)))?((((map__33899_33926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33899_33926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33899_33926):map__33899_33926);
var id_33928 = cljs.core.get.call(null,map__33899_33927__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33929 = cljs.core.get.call(null,map__33899_33927__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33928,vehicle_33929);
} else {
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33897_33925))){
var map__33901_33930 = ins;
var map__33901_33931__$1 = ((((!((map__33901_33930 == null)))?((((map__33901_33930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901_33930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901_33930):map__33901_33930);
var id_33932 = cljs.core.get.call(null,map__33901_33931__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33932);
} else {
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33897_33925))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33897_33925))){
var map__33903_33933 = ins;
var map__33903_33934__$1 = ((((!((map__33903_33933 == null)))?((((map__33903_33933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33903_33933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33903_33933):map__33903_33933);
var id_33935 = cljs.core.get.call(null,map__33903_33934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33936 = cljs.core.get.call(null,map__33903_33934__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33937 = cljs.core.get.call(null,map__33903_33934__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33938 = cljs.core.get.call(null,map__33903_33934__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33939 = cljs.core.get.call(null,map__33903_33934__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_33935)){
chart.client.popup.call(null,id_33935,html_33938,time_33939);
} else {
if(cljs.core.truth_((function (){var and__30839__auto__ = lat_33936;
if(cljs.core.truth_(and__30839__auto__)){
return lon_33937;
} else {
return and__30839__auto__;
}
})())){
chart.client.popup.call(null,lat_33936,lon_33937,html_33938,time_33939);
} else {
}
}
} else {
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33897_33925))){
var map__33905_33940 = ins;
var map__33905_33941__$1 = ((((!((map__33905_33940 == null)))?((((map__33905_33940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33905_33940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33905_33940):map__33905_33940);
var id_33942 = cljs.core.get.call(null,map__33905_33941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33943 = cljs.core.get.call(null,map__33905_33941__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33944 = cljs.core.get.call(null,map__33905_33941__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33945 = cljs.core.get.call(null,map__33905_33941__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33942,points_33943,options_33944,time_33945);
} else {
if(cljs.core.truth_(pred__33896_33924.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33897_33925))){
var map__33907_33946 = ins;
var map__33907_33947__$1 = ((((!((map__33907_33946 == null)))?((((map__33907_33946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33907_33946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33907_33946):map__33907_33946);
var coord_33948 = cljs.core.get.call(null,map__33907_33947__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_33948);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__33949 = seq__33890;
var G__33950 = chunk__33891;
var G__33951 = count__33892;
var G__33952 = (i__33893 + (1));
seq__33890 = G__33949;
chunk__33891 = G__33950;
count__33892 = G__33951;
i__33893 = G__33952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33890);
if(temp__4657__auto__){
var seq__33890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33890__$1)){
var c__31665__auto__ = cljs.core.chunk_first.call(null,seq__33890__$1);
var G__33953 = cljs.core.chunk_rest.call(null,seq__33890__$1);
var G__33954 = c__31665__auto__;
var G__33955 = cljs.core.count.call(null,c__31665__auto__);
var G__33956 = (0);
seq__33890 = G__33953;
chunk__33891 = G__33954;
count__33892 = G__33955;
i__33893 = G__33956;
continue;
} else {
var map__33909 = cljs.core.first.call(null,seq__33890__$1);
var map__33909__$1 = ((((!((map__33909 == null)))?((((map__33909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33909):map__33909);
var ins = map__33909__$1;
var instruct = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33911_33957 = cljs.core._EQ_;
var expr__33912_33958 = instruct;
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33912_33958))){
var map__33914_33959 = ins;
var map__33914_33960__$1 = ((((!((map__33914_33959 == null)))?((((map__33914_33959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33914_33959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33914_33959):map__33914_33959);
var id_33961 = cljs.core.get.call(null,map__33914_33960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33962 = cljs.core.get.call(null,map__33914_33960__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33961,vehicle_33962);
} else {
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33912_33958))){
var map__33916_33963 = ins;
var map__33916_33964__$1 = ((((!((map__33916_33963 == null)))?((((map__33916_33963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33916_33963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33916_33963):map__33916_33963);
var id_33965 = cljs.core.get.call(null,map__33916_33964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33965);
} else {
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33912_33958))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33912_33958))){
var map__33918_33966 = ins;
var map__33918_33967__$1 = ((((!((map__33918_33966 == null)))?((((map__33918_33966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33918_33966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33918_33966):map__33918_33966);
var id_33968 = cljs.core.get.call(null,map__33918_33967__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33969 = cljs.core.get.call(null,map__33918_33967__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33970 = cljs.core.get.call(null,map__33918_33967__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33971 = cljs.core.get.call(null,map__33918_33967__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33972 = cljs.core.get.call(null,map__33918_33967__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_33968)){
chart.client.popup.call(null,id_33968,html_33971,time_33972);
} else {
if(cljs.core.truth_((function (){var and__30839__auto__ = lat_33969;
if(cljs.core.truth_(and__30839__auto__)){
return lon_33970;
} else {
return and__30839__auto__;
}
})())){
chart.client.popup.call(null,lat_33969,lon_33970,html_33971,time_33972);
} else {
}
}
} else {
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33912_33958))){
var map__33920_33973 = ins;
var map__33920_33974__$1 = ((((!((map__33920_33973 == null)))?((((map__33920_33973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33920_33973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33920_33973):map__33920_33973);
var id_33975 = cljs.core.get.call(null,map__33920_33974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33976 = cljs.core.get.call(null,map__33920_33974__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33977 = cljs.core.get.call(null,map__33920_33974__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33978 = cljs.core.get.call(null,map__33920_33974__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33975,points_33976,options_33977,time_33978);
} else {
if(cljs.core.truth_(pred__33911_33957.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33912_33958))){
var map__33922_33979 = ins;
var map__33922_33980__$1 = ((((!((map__33922_33979 == null)))?((((map__33922_33979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33922_33979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33922_33979):map__33922_33979);
var coord_33981 = cljs.core.get.call(null,map__33922_33980__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_33981);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__33982 = cljs.core.next.call(null,seq__33890__$1);
var G__33983 = null;
var G__33984 = (0);
var G__33985 = (0);
seq__33890 = G__33982;
chunk__33891 = G__33983;
count__33892 = G__33984;
i__33893 = G__33985;
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
var args33987 = [];
var len__31959__auto___33990 = arguments.length;
var i__31960__auto___33991 = (0);
while(true){
if((i__31960__auto___33991 < len__31959__auto___33990)){
args33987.push((arguments[i__31960__auto___33991]));

var G__33992 = (i__31960__auto___33991 + (1));
i__31960__auto___33991 = G__33992;
continue;
} else {
}
break;
}

var G__33989 = args33987.length;
switch (G__33989) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33987.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__33986_SHARP_){
return chart.client.move_to.call(null,sel,p1__33986_SHARP_);
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
var args33998 = [];
var len__31959__auto___34001 = arguments.length;
var i__31960__auto___34002 = (0);
while(true){
if((i__31960__auto___34002 < len__31959__auto___34001)){
args33998.push((arguments[i__31960__auto___34002]));

var G__34003 = (i__31960__auto___34002 + (1));
i__31960__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var G__34000 = args33998.length;
switch (G__34000) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33998.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","h:m",(80));

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

return ask.master.get_answer.call(null,(function (p1__33994_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__33994_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__33995_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__33995_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__33996_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__33996_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__33997_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__33997_SHARP_);
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
var pred__34008 = cljs.core._EQ_;
var expr__34009 = cmd;
if(cljs.core.truth_(pred__34008.call(null,"watch-visible",expr__34009))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__34008.call(null,"move-to",expr__34009))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__34008.call(null,"schedule",expr__34009))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34009)].join('')));
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.0,30.0],(10));
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