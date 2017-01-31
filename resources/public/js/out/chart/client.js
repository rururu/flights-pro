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
var map__22935 = response;
var map__22935__$1 = ((((!((map__22935 == null)))?((((map__22935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22935):map__22935);
var status = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_22943 = cljs.core.deref.call(null,vmp);
var mrk_22944 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22943);
var vec__22940_22945 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22943);
var lat_22946 = cljs.core.nth.call(null,vec__22940_22945,(0),null);
var lon_22947 = cljs.core.nth.call(null,vec__22940_22945,(1),null);
var pos_22948 = (new L.LatLng(lat_22946,lon_22947));
mrk_22944.setLatLng(pos_22948);

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
var seq__22953_22957 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22954_22958 = null;
var count__22955_22959 = (0);
var i__22956_22960 = (0);
while(true){
if((i__22956_22960 < count__22955_22959)){
var veh_22961 = cljs.core._nth.call(null,chunk__22954_22958,i__22956_22960);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22961)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22961)));

var G__22962 = seq__22953_22957;
var G__22963 = chunk__22954_22958;
var G__22964 = count__22955_22959;
var G__22965 = (i__22956_22960 + (1));
seq__22953_22957 = G__22962;
chunk__22954_22958 = G__22963;
count__22955_22959 = G__22964;
i__22956_22960 = G__22965;
continue;
} else {
var temp__4657__auto___22966 = cljs.core.seq.call(null,seq__22953_22957);
if(temp__4657__auto___22966){
var seq__22953_22967__$1 = temp__4657__auto___22966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22953_22967__$1)){
var c__20817__auto___22968 = cljs.core.chunk_first.call(null,seq__22953_22967__$1);
var G__22969 = cljs.core.chunk_rest.call(null,seq__22953_22967__$1);
var G__22970 = c__20817__auto___22968;
var G__22971 = cljs.core.count.call(null,c__20817__auto___22968);
var G__22972 = (0);
seq__22953_22957 = G__22969;
chunk__22954_22958 = G__22970;
count__22955_22959 = G__22971;
i__22956_22960 = G__22972;
continue;
} else {
var veh_22973 = cljs.core.first.call(null,seq__22953_22967__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22973)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22973)));

var G__22974 = cljs.core.next.call(null,seq__22953_22967__$1);
var G__22975 = null;
var G__22976 = (0);
var G__22977 = (0);
seq__22953_22957 = G__22974;
chunk__22954_22958 = G__22975;
count__22955_22959 = G__22976;
i__22956_22960 = G__22977;
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

var vec__22982 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22982,(0),null);
var lon = cljs.core.nth.call(null,vec__22982,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22982,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22982,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22978_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22978_SHARP_))),e.target);
});})(vec__22982,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22982,lat,lon,pos,ico,opt,mrk__$1))
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
var args22985 = [];
var len__21111__auto___22991 = arguments.length;
var i__21112__auto___22992 = (0);
while(true){
if((i__21112__auto___22992 < len__21111__auto___22991)){
args22985.push((arguments[i__21112__auto___22992]));

var G__22993 = (i__21112__auto___22992 + (1));
i__21112__auto___22992 = G__22993;
continue;
} else {
}
break;
}

var G__22987 = args22985.length;
switch (G__22987) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22985.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22988 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22988,(0),null);
var lon = cljs.core.nth.call(null,vec__22988,(1),null);
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
return (function (p1__22995_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__22995_SHARP_),cljs.core.second.call(null,p1__22995_SHARP_)));
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
var vec__22999 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__22999,(0),null);
var s = cljs.core.nth.call(null,vec__22999,(1),null);
var w = cljs.core.nth.call(null,vec__22999,(2),null);
var e = cljs.core.nth.call(null,vec__22999,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__22999,n,s,w,e,url){
return (function (response){
return null;
});})(vec__22999,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23002){
var vec__23006 = p__23002;
var lat = cljs.core.nth.call(null,vec__23006,(0),null);
var lon = cljs.core.nth.call(null,vec__23006,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__23043 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23044 = null;
var count__23045 = (0);
var i__23046 = (0);
while(true){
if((i__23046 < count__23045)){
var map__23047 = cljs.core._nth.call(null,chunk__23044,i__23046);
var map__23047__$1 = ((((!((map__23047 == null)))?((((map__23047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23047):map__23047);
var ins = map__23047__$1;
var instruct = cljs.core.get.call(null,map__23047__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23049_23077 = cljs.core._EQ_;
var expr__23050_23078 = instruct;
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23050_23078))){
var map__23052_23079 = ins;
var map__23052_23080__$1 = ((((!((map__23052_23079 == null)))?((((map__23052_23079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23052_23079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052_23079):map__23052_23079);
var id_23081 = cljs.core.get.call(null,map__23052_23080__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23082 = cljs.core.get.call(null,map__23052_23080__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23081,vehicle_23082);
} else {
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23050_23078))){
var map__23054_23083 = ins;
var map__23054_23084__$1 = ((((!((map__23054_23083 == null)))?((((map__23054_23083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23054_23083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23054_23083):map__23054_23083);
var id_23085 = cljs.core.get.call(null,map__23054_23084__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23085);
} else {
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23050_23078))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23050_23078))){
var map__23056_23086 = ins;
var map__23056_23087__$1 = ((((!((map__23056_23086 == null)))?((((map__23056_23086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23056_23086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23056_23086):map__23056_23086);
var id_23088 = cljs.core.get.call(null,map__23056_23087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23089 = cljs.core.get.call(null,map__23056_23087__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23090 = cljs.core.get.call(null,map__23056_23087__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23091 = cljs.core.get.call(null,map__23056_23087__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23092 = cljs.core.get.call(null,map__23056_23087__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23088)){
chart.client.popup.call(null,id_23088,html_23091,time_23092);
} else {
if(cljs.core.truth_((function (){var and__19991__auto__ = lat_23089;
if(cljs.core.truth_(and__19991__auto__)){
return lon_23090;
} else {
return and__19991__auto__;
}
})())){
chart.client.popup.call(null,lat_23089,lon_23090,html_23091,time_23092);
} else {
}
}
} else {
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23050_23078))){
var map__23058_23093 = ins;
var map__23058_23094__$1 = ((((!((map__23058_23093 == null)))?((((map__23058_23093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23058_23093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23058_23093):map__23058_23093);
var id_23095 = cljs.core.get.call(null,map__23058_23094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23096 = cljs.core.get.call(null,map__23058_23094__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23097 = cljs.core.get.call(null,map__23058_23094__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23098 = cljs.core.get.call(null,map__23058_23094__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23095,points_23096,options_23097,time_23098);
} else {
if(cljs.core.truth_(pred__23049_23077.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23050_23078))){
var map__23060_23099 = ins;
var map__23060_23100__$1 = ((((!((map__23060_23099 == null)))?((((map__23060_23099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060_23099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060_23099):map__23060_23099);
var coord_23101 = cljs.core.get.call(null,map__23060_23100__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23101);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__23102 = seq__23043;
var G__23103 = chunk__23044;
var G__23104 = count__23045;
var G__23105 = (i__23046 + (1));
seq__23043 = G__23102;
chunk__23044 = G__23103;
count__23045 = G__23104;
i__23046 = G__23105;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23043);
if(temp__4657__auto__){
var seq__23043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23043__$1)){
var c__20817__auto__ = cljs.core.chunk_first.call(null,seq__23043__$1);
var G__23106 = cljs.core.chunk_rest.call(null,seq__23043__$1);
var G__23107 = c__20817__auto__;
var G__23108 = cljs.core.count.call(null,c__20817__auto__);
var G__23109 = (0);
seq__23043 = G__23106;
chunk__23044 = G__23107;
count__23045 = G__23108;
i__23046 = G__23109;
continue;
} else {
var map__23062 = cljs.core.first.call(null,seq__23043__$1);
var map__23062__$1 = ((((!((map__23062 == null)))?((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23062):map__23062);
var ins = map__23062__$1;
var instruct = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23064_23110 = cljs.core._EQ_;
var expr__23065_23111 = instruct;
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23065_23111))){
var map__23067_23112 = ins;
var map__23067_23113__$1 = ((((!((map__23067_23112 == null)))?((((map__23067_23112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23067_23112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23067_23112):map__23067_23112);
var id_23114 = cljs.core.get.call(null,map__23067_23113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23115 = cljs.core.get.call(null,map__23067_23113__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23114,vehicle_23115);
} else {
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23065_23111))){
var map__23069_23116 = ins;
var map__23069_23117__$1 = ((((!((map__23069_23116 == null)))?((((map__23069_23116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23069_23116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23069_23116):map__23069_23116);
var id_23118 = cljs.core.get.call(null,map__23069_23117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23118);
} else {
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23065_23111))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23065_23111))){
var map__23071_23119 = ins;
var map__23071_23120__$1 = ((((!((map__23071_23119 == null)))?((((map__23071_23119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23071_23119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23071_23119):map__23071_23119);
var id_23121 = cljs.core.get.call(null,map__23071_23120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23122 = cljs.core.get.call(null,map__23071_23120__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23123 = cljs.core.get.call(null,map__23071_23120__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23124 = cljs.core.get.call(null,map__23071_23120__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23125 = cljs.core.get.call(null,map__23071_23120__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23121)){
chart.client.popup.call(null,id_23121,html_23124,time_23125);
} else {
if(cljs.core.truth_((function (){var and__19991__auto__ = lat_23122;
if(cljs.core.truth_(and__19991__auto__)){
return lon_23123;
} else {
return and__19991__auto__;
}
})())){
chart.client.popup.call(null,lat_23122,lon_23123,html_23124,time_23125);
} else {
}
}
} else {
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23065_23111))){
var map__23073_23126 = ins;
var map__23073_23127__$1 = ((((!((map__23073_23126 == null)))?((((map__23073_23126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23073_23126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23073_23126):map__23073_23126);
var id_23128 = cljs.core.get.call(null,map__23073_23127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23129 = cljs.core.get.call(null,map__23073_23127__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23130 = cljs.core.get.call(null,map__23073_23127__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23131 = cljs.core.get.call(null,map__23073_23127__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23128,points_23129,options_23130,time_23131);
} else {
if(cljs.core.truth_(pred__23064_23110.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23065_23111))){
var map__23075_23132 = ins;
var map__23075_23133__$1 = ((((!((map__23075_23132 == null)))?((((map__23075_23132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23075_23132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23075_23132):map__23075_23132);
var coord_23134 = cljs.core.get.call(null,map__23075_23133__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23134);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__23135 = cljs.core.next.call(null,seq__23043__$1);
var G__23136 = null;
var G__23137 = (0);
var G__23138 = (0);
seq__23043 = G__23135;
chunk__23044 = G__23136;
count__23045 = G__23137;
i__23046 = G__23138;
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
var args23140 = [];
var len__21111__auto___23143 = arguments.length;
var i__21112__auto___23144 = (0);
while(true){
if((i__21112__auto___23144 < len__21111__auto___23143)){
args23140.push((arguments[i__21112__auto___23144]));

var G__23145 = (i__21112__auto___23144 + (1));
i__21112__auto___23144 = G__23145;
continue;
} else {
}
break;
}

var G__23142 = args23140.length;
switch (G__23142) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23140.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__23139_SHARP_){
return chart.client.move_to.call(null,sel,p1__23139_SHARP_);
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
var args23151 = [];
var len__21111__auto___23154 = arguments.length;
var i__21112__auto___23155 = (0);
while(true){
if((i__21112__auto___23155 < len__21111__auto___23154)){
args23151.push((arguments[i__21112__auto___23155]));

var G__23156 = (i__21112__auto___23155 + (1));
i__21112__auto___23155 = G__23156;
continue;
} else {
}
break;
}

var G__23153 = args23151.length;
switch (G__23153) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23151.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__23147_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__23147_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__23148_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__23148_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__23149_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__23149_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__23150_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__23150_SHARP_);
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
var pred__23161 = cljs.core._EQ_;
var expr__23162 = cmd;
if(cljs.core.truth_(pred__23161.call(null,"watch-visible",expr__23162))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__23161.call(null,"move-to",expr__23162))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__23161.call(null,"schedule",expr__23162))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23162)].join('')));
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