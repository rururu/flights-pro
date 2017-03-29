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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(2222),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__28930 = response;
var map__28930__$1 = ((((!((map__28930 == null)))?((((map__28930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28930):map__28930);
var status = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_28938 = cljs.core.deref.call(null,vmp);
var mrk_28939 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_28938);
var vec__28935_28940 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_28938);
var lat_28941 = cljs.core.nth.call(null,vec__28935_28940,(0),null);
var lon_28942 = cljs.core.nth.call(null,vec__28935_28940,(1),null);
var pos_28943 = (new L.LatLng(lat_28941,lon_28942));
mrk_28939.setLatLng(pos_28943);

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
var seq__28948_28952 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__28949_28953 = null;
var count__28950_28954 = (0);
var i__28951_28955 = (0);
while(true){
if((i__28951_28955 < count__28950_28954)){
var veh_28956 = cljs.core._nth.call(null,chunk__28949_28953,i__28951_28955);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_28956)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_28956)));

var G__28957 = seq__28948_28952;
var G__28958 = chunk__28949_28953;
var G__28959 = count__28950_28954;
var G__28960 = (i__28951_28955 + (1));
seq__28948_28952 = G__28957;
chunk__28949_28953 = G__28958;
count__28950_28954 = G__28959;
i__28951_28955 = G__28960;
continue;
} else {
var temp__4657__auto___28961 = cljs.core.seq.call(null,seq__28948_28952);
if(temp__4657__auto___28961){
var seq__28948_28962__$1 = temp__4657__auto___28961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28948_28962__$1)){
var c__21190__auto___28963 = cljs.core.chunk_first.call(null,seq__28948_28962__$1);
var G__28964 = cljs.core.chunk_rest.call(null,seq__28948_28962__$1);
var G__28965 = c__21190__auto___28963;
var G__28966 = cljs.core.count.call(null,c__21190__auto___28963);
var G__28967 = (0);
seq__28948_28952 = G__28964;
chunk__28949_28953 = G__28965;
count__28950_28954 = G__28966;
i__28951_28955 = G__28967;
continue;
} else {
var veh_28968 = cljs.core.first.call(null,seq__28948_28962__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_28968)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_28968)));

var G__28969 = cljs.core.next.call(null,seq__28948_28962__$1);
var G__28970 = null;
var G__28971 = (0);
var G__28972 = (0);
seq__28948_28952 = G__28969;
chunk__28949_28953 = G__28970;
count__28950_28954 = G__28971;
i__28951_28955 = G__28972;
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

var vec__28977 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__28977,(0),null);
var lon = cljs.core.nth.call(null,vec__28977,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__28977,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__28977,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__28973_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__28973_SHARP_))),e.target);
});})(vec__28977,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__28977,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

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
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20376__auto__ = url_ico;
if(cljs.core.truth_(or__20376__auto__)){
return or__20376__auto__;
} else {
var or__20376__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20376__auto____$1)){
return or__20376__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.delete_placemark = (function chart$client$delete_placemark(iname){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.PLACEMARKS).call(null,iname);
if(cljs.core.truth_(temp__4657__auto__)){
var mrk = temp__4657__auto__;
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname));
} else {
return null;
}
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__28984_28988 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__28985_28989 = null;
var count__28986_28990 = (0);
var i__28987_28991 = (0);
while(true){
if((i__28987_28991 < count__28986_28990)){
var mrk_28992 = cljs.core._nth.call(null,chunk__28985_28989,i__28987_28991);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_28992);

var G__28993 = seq__28984_28988;
var G__28994 = chunk__28985_28989;
var G__28995 = count__28986_28990;
var G__28996 = (i__28987_28991 + (1));
seq__28984_28988 = G__28993;
chunk__28985_28989 = G__28994;
count__28986_28990 = G__28995;
i__28987_28991 = G__28996;
continue;
} else {
var temp__4657__auto___28997 = cljs.core.seq.call(null,seq__28984_28988);
if(temp__4657__auto___28997){
var seq__28984_28998__$1 = temp__4657__auto___28997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28984_28998__$1)){
var c__21190__auto___28999 = cljs.core.chunk_first.call(null,seq__28984_28998__$1);
var G__29000 = cljs.core.chunk_rest.call(null,seq__28984_28998__$1);
var G__29001 = c__21190__auto___28999;
var G__29002 = cljs.core.count.call(null,c__21190__auto___28999);
var G__29003 = (0);
seq__28984_28988 = G__29000;
chunk__28985_28989 = G__29001;
count__28986_28990 = G__29002;
i__28987_28991 = G__29003;
continue;
} else {
var mrk_29004 = cljs.core.first.call(null,seq__28984_28998__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_29004);

var G__29005 = cljs.core.next.call(null,seq__28984_28998__$1);
var G__29006 = null;
var G__29007 = (0);
var G__29008 = (0);
seq__28984_28988 = G__29005;
chunk__28985_28989 = G__29006;
count__28986_28990 = G__29007;
i__28987_28991 = G__29008;
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
var args29009 = [];
var len__21484__auto___29015 = arguments.length;
var i__21485__auto___29016 = (0);
while(true){
if((i__21485__auto___29016 < len__21484__auto___29015)){
args29009.push((arguments[i__21485__auto___29016]));

var G__29017 = (i__21485__auto___29016 + (1));
i__21485__auto___29016 = G__29017;
continue;
} else {
}
break;
}

var G__29011 = args29009.length;
switch (G__29011) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return chart.client.popup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29009.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__29012 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__29012,(0),null);
var lon = cljs.core.nth.call(null,vec__29012,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(240),(480));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(({"maxWidth": w, "maxHeight": h})).setLatLng([lat,lon]).setContent(html);
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

chart.client.popup.cljs$lang$maxFixedArity = 6;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__29019_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__29019_SHARP_),cljs.core.second.call(null,p1__29019_SHARP_)));
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
var vec__29023 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__29023,(0),null);
var s = cljs.core.nth.call(null,vec__29023,(1),null);
var w = cljs.core.nth.call(null,vec__29023,(2),null);
var e = cljs.core.nth.call(null,vec__29023,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__29023,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__29023,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__29026,zoom,lock){
var vec__29030 = p__29026;
var lat = cljs.core.nth.call(null,vec__29030,(0),null);
var lon = cljs.core.nth.call(null,vec__29030,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20376__auto__ = zoom;
if(cljs.core.truth_(or__20376__auto__)){
return or__20376__auto__;
} else {
return cljs.core.deref.call(null,chart.client.CHART).getZoom();
}
})();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.not.call(null,lock)){
return chart.client.new_visible.call(null);
} else {
return null;
}
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__29033_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__29033_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__29034_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29034_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__29035_SHARP_){
return p1__29035_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__29036,ops){
var vec__29040 = p__29036;
var id1 = cljs.core.nth.call(null,vec__29040,(0),null);
var id2 = cljs.core.nth.call(null,vec__29040,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
});
chart.client.add_link = (function chart$client$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(options);
var del = ((typeof tmin === 'number')?(((60000) * tmin) | (0)):(30000));
var llg = chart.client.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(lnk);

lnk.bindPopup(chart.client.linkPopup.call(null,ids,options));

cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids,lnk));

if((del > (0))){
return csasync.proc.delayer.call(null,((function (ops,tmin,del,llg,lnk){
return (function (){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(lnk);

return cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids));
});})(ops,tmin,del,llg,lnk))
,del);
} else {
return null;
}
});
chart.client.select_airport = (function chart$client$select_airport(var_args){
var args29044 = [];
var len__21484__auto___29047 = arguments.length;
var i__21485__auto___29048 = (0);
while(true){
if((i__21485__auto___29048 < len__21484__auto___29047)){
args29044.push((arguments[i__21485__auto___29048]));

var G__29049 = (i__21485__auto___29048 + (1));
i__21485__auto___29048 = G__29049;
continue;
} else {
}
break;
}

var G__29046 = args29044.length;
switch (G__29046) {
case 0:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29044.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__29043_SHARP_){
return chart.client.select_airport.call(null,sel,p1__29043_SHARP_);
}));
}))
;
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(20),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected airport",new cljs.core.Keyword(null,"object","object",1474613949),sel,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),cnt], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.select_airport.cljs$lang$maxFixedArity = 2;

chart.client.select_city = (function chart$client$select_city(param){
var temp__4655__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto__)){
var cns = temp__4655__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__4655__auto__){
return (function chart$client$select_city_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected country",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cns,temp__4655__auto__){
return (function (r){
return null;
});})(cns,temp__4655__auto__))
);
});})(cns,temp__4655__auto__))
)
;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cts = temp__4655__auto____$1;
ask.master.selector.call(null,"element",(20),"chart.client","cities",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = ((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function chart$client$select_city_$_handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected city",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function (r){
return null;
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
);

return ask.master.clear_dialog.call(null);
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__29107 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__29108 = null;
var count__29109 = (0);
var i__29110 = (0);
while(true){
if((i__29110 < count__29109)){
var map__29111 = cljs.core._nth.call(null,chunk__29108,i__29110);
var map__29111__$1 = ((((!((map__29111 == null)))?((((map__29111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29111):map__29111);
var ins = map__29111__$1;
var instruct = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29113_29163 = cljs.core._EQ_;
var expr__29114_29164 = instruct;
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29114_29164))){
var map__29116_29165 = ins;
var map__29116_29166__$1 = ((((!((map__29116_29165 == null)))?((((map__29116_29165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29116_29165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116_29165):map__29116_29165);
var id_29167 = cljs.core.get.call(null,map__29116_29166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29168 = cljs.core.get.call(null,map__29116_29166__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29167,vehicle_29168);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29114_29164))){
var map__29118_29169 = ins;
var map__29118_29170__$1 = ((((!((map__29118_29169 == null)))?((((map__29118_29169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29118_29169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29118_29169):map__29118_29169);
var id_29171 = cljs.core.get.call(null,map__29118_29170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29171);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29114_29164))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29114_29164))){
var map__29120_29172 = ins;
var map__29120_29173__$1 = ((((!((map__29120_29172 == null)))?((((map__29120_29172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29120_29172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29120_29172):map__29120_29172);
var id_29174 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29175 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29176 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29177 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29178 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_29179 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_29180 = cljs.core.get.call(null,map__29120_29173__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_29174)){
chart.client.popup.call(null,id_29174,html_29177,time_29178);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = width_29179;
if(cljs.core.truth_(and__20364__auto__)){
var and__20364__auto____$1 = height_29180;
if(cljs.core.truth_(and__20364__auto____$1)){
var and__20364__auto____$2 = lat_29175;
if(cljs.core.truth_(and__20364__auto____$2)){
return lon_29176;
} else {
return and__20364__auto____$2;
}
} else {
return and__20364__auto____$1;
}
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_29175,lon_29176,html_29177,time_29178,width_29179,height_29180);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = lat_29175;
if(cljs.core.truth_(and__20364__auto__)){
return lon_29176;
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_29175,lon_29176,html_29177,time_29178);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__29114_29164))){
var map__29122_29181 = ins;
var map__29122_29182__$1 = ((((!((map__29122_29181 == null)))?((((map__29122_29181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29122_29181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29122_29181):map__29122_29181);
var id_29183 = cljs.core.get.call(null,map__29122_29182__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_29184 = cljs.core.get.call(null,map__29122_29182__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_29185 = cljs.core.get.call(null,map__29122_29182__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_29186 = cljs.core.get.call(null,map__29122_29182__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_29183,points_29184,options_29185,time_29186);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__29114_29164))){
var map__29124_29187 = ins;
var map__29124_29188__$1 = ((((!((map__29124_29187 == null)))?((((map__29124_29187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29124_29187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124_29187):map__29124_29187);
var coord_29189 = cljs.core.get.call(null,map__29124_29188__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_29190 = cljs.core.get.call(null,map__29124_29188__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_29191 = cljs.core.get.call(null,map__29124_29188__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_29189,zoom_29190,lock_29191);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__29114_29164))){
var map__29126_29192 = ins;
var map__29126_29193__$1 = ((((!((map__29126_29192 == null)))?((((map__29126_29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29126_29192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29126_29192):map__29126_29192);
var iname_29194 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_29195 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_29196 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29197 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_29198 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_29199 = cljs.core.get.call(null,map__29126_29193__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_29194,tip_29195,lat_29196,lon_29197,feature_29198,url_ico_29199);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__29114_29164))){
var map__29128_29200 = ins;
var map__29128_29201__$1 = ((((!((map__29128_29200 == null)))?((((map__29128_29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29128_29200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128_29200):map__29128_29200);
var iname_29202 = cljs.core.get.call(null,map__29128_29201__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_29202);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__29114_29164))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__29114_29164))){
var map__29130_29203 = ins;
var map__29130_29204__$1 = ((((!((map__29130_29203 == null)))?((((map__29130_29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29130_29203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29130_29203):map__29130_29203);
var ids_29205 = cljs.core.get.call(null,map__29130_29204__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_29206 = cljs.core.get.call(null,map__29130_29204__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_29205,options_29206);
} else {
if(cljs.core.truth_(pred__29113_29163.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__29114_29164))){
var map__29132_29207 = ins;
var map__29132_29208__$1 = ((((!((map__29132_29207 == null)))?((((map__29132_29207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29132_29207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29132_29207):map__29132_29207);
var question_29209 = cljs.core.get.call(null,map__29132_29208__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_29210 = cljs.core.get.call(null,map__29132_29208__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__29134_29211 = cljs.core._EQ_;
var expr__29135_29212 = question_29209;
if(cljs.core.truth_(pred__29134_29211.call(null,"city",expr__29135_29212))){
chart.client.select_city.call(null,param_29210);
} else {
if(cljs.core.truth_(pred__29134_29211.call(null,"airport",expr__29135_29212))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29135_29212)].join('')));
}
}
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
}
}
}

var G__29213 = seq__29107;
var G__29214 = chunk__29108;
var G__29215 = count__29109;
var G__29216 = (i__29110 + (1));
seq__29107 = G__29213;
chunk__29108 = G__29214;
count__29109 = G__29215;
i__29110 = G__29216;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29107);
if(temp__4657__auto__){
var seq__29107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29107__$1)){
var c__21190__auto__ = cljs.core.chunk_first.call(null,seq__29107__$1);
var G__29217 = cljs.core.chunk_rest.call(null,seq__29107__$1);
var G__29218 = c__21190__auto__;
var G__29219 = cljs.core.count.call(null,c__21190__auto__);
var G__29220 = (0);
seq__29107 = G__29217;
chunk__29108 = G__29218;
count__29109 = G__29219;
i__29110 = G__29220;
continue;
} else {
var map__29137 = cljs.core.first.call(null,seq__29107__$1);
var map__29137__$1 = ((((!((map__29137 == null)))?((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var ins = map__29137__$1;
var instruct = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29139_29221 = cljs.core._EQ_;
var expr__29140_29222 = instruct;
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29140_29222))){
var map__29142_29223 = ins;
var map__29142_29224__$1 = ((((!((map__29142_29223 == null)))?((((map__29142_29223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29142_29223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142_29223):map__29142_29223);
var id_29225 = cljs.core.get.call(null,map__29142_29224__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29226 = cljs.core.get.call(null,map__29142_29224__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29225,vehicle_29226);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29140_29222))){
var map__29144_29227 = ins;
var map__29144_29228__$1 = ((((!((map__29144_29227 == null)))?((((map__29144_29227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29144_29227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29144_29227):map__29144_29227);
var id_29229 = cljs.core.get.call(null,map__29144_29228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29229);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29140_29222))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29140_29222))){
var map__29146_29230 = ins;
var map__29146_29231__$1 = ((((!((map__29146_29230 == null)))?((((map__29146_29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146_29230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146_29230):map__29146_29230);
var id_29232 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29233 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29234 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29235 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29236 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_29237 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_29238 = cljs.core.get.call(null,map__29146_29231__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_29232)){
chart.client.popup.call(null,id_29232,html_29235,time_29236);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = width_29237;
if(cljs.core.truth_(and__20364__auto__)){
var and__20364__auto____$1 = height_29238;
if(cljs.core.truth_(and__20364__auto____$1)){
var and__20364__auto____$2 = lat_29233;
if(cljs.core.truth_(and__20364__auto____$2)){
return lon_29234;
} else {
return and__20364__auto____$2;
}
} else {
return and__20364__auto____$1;
}
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_29233,lon_29234,html_29235,time_29236,width_29237,height_29238);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = lat_29233;
if(cljs.core.truth_(and__20364__auto__)){
return lon_29234;
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_29233,lon_29234,html_29235,time_29236);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__29140_29222))){
var map__29148_29239 = ins;
var map__29148_29240__$1 = ((((!((map__29148_29239 == null)))?((((map__29148_29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29148_29239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29148_29239):map__29148_29239);
var id_29241 = cljs.core.get.call(null,map__29148_29240__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_29242 = cljs.core.get.call(null,map__29148_29240__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_29243 = cljs.core.get.call(null,map__29148_29240__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_29244 = cljs.core.get.call(null,map__29148_29240__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_29241,points_29242,options_29243,time_29244);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__29140_29222))){
var map__29150_29245 = ins;
var map__29150_29246__$1 = ((((!((map__29150_29245 == null)))?((((map__29150_29245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29150_29245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29150_29245):map__29150_29245);
var coord_29247 = cljs.core.get.call(null,map__29150_29246__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_29248 = cljs.core.get.call(null,map__29150_29246__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_29249 = cljs.core.get.call(null,map__29150_29246__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_29247,zoom_29248,lock_29249);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__29140_29222))){
var map__29152_29250 = ins;
var map__29152_29251__$1 = ((((!((map__29152_29250 == null)))?((((map__29152_29250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29152_29250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29152_29250):map__29152_29250);
var iname_29252 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_29253 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_29254 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29255 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_29256 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_29257 = cljs.core.get.call(null,map__29152_29251__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_29252,tip_29253,lat_29254,lon_29255,feature_29256,url_ico_29257);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__29140_29222))){
var map__29154_29258 = ins;
var map__29154_29259__$1 = ((((!((map__29154_29258 == null)))?((((map__29154_29258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29154_29258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29154_29258):map__29154_29258);
var iname_29260 = cljs.core.get.call(null,map__29154_29259__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_29260);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__29140_29222))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__29140_29222))){
var map__29156_29261 = ins;
var map__29156_29262__$1 = ((((!((map__29156_29261 == null)))?((((map__29156_29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29156_29261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29156_29261):map__29156_29261);
var ids_29263 = cljs.core.get.call(null,map__29156_29262__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_29264 = cljs.core.get.call(null,map__29156_29262__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_29263,options_29264);
} else {
if(cljs.core.truth_(pred__29139_29221.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__29140_29222))){
var map__29158_29265 = ins;
var map__29158_29266__$1 = ((((!((map__29158_29265 == null)))?((((map__29158_29265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29158_29265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29158_29265):map__29158_29265);
var question_29267 = cljs.core.get.call(null,map__29158_29266__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_29268 = cljs.core.get.call(null,map__29158_29266__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__29160_29269 = cljs.core._EQ_;
var expr__29161_29270 = question_29267;
if(cljs.core.truth_(pred__29160_29269.call(null,"city",expr__29161_29270))){
chart.client.select_city.call(null,param_29268);
} else {
if(cljs.core.truth_(pred__29160_29269.call(null,"airport",expr__29161_29270))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29161_29270)].join('')));
}
}
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
}
}
}

var G__29271 = cljs.core.next.call(null,seq__29107__$1);
var G__29272 = null;
var G__29273 = (0);
var G__29274 = (0);
seq__29107 = G__29271;
chunk__29108 = G__29272;
count__29109 = G__29273;
i__29110 = G__29274;
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
var args29276 = [];
var len__21484__auto___29279 = arguments.length;
var i__21485__auto___29280 = (0);
while(true){
if((i__21485__auto___29280 < len__21484__auto___29279)){
args29276.push((arguments[i__21485__auto___29280]));

var G__29281 = (i__21485__auto___29280 + (1));
i__21485__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var G__29278 = args29276.length;
switch (G__29278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29276.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__29275_SHARP_){
return chart.client.move_to.call(null,sel,p1__29275_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

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
var args29287 = [];
var len__21484__auto___29290 = arguments.length;
var i__21485__auto___29291 = (0);
while(true){
if((i__21485__auto___29291 < len__21484__auto___29290)){
args29287.push((arguments[i__21485__auto___29291]));

var G__29292 = (i__21485__auto___29291 + (1));
i__21485__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29289 = args29287.length;
switch (G__29289) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29287.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input.call(null,"element",(1),"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input.call(null,"element",(2),"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__29283_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__29283_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__29284_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__29284_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__29285_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__29285_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__29286_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__29286_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args29297 = [];
var len__21484__auto___29300 = arguments.length;
var i__21485__auto___29301 = (0);
while(true){
if((i__21485__auto___29301 < len__21484__auto___29300)){
args29297.push((arguments[i__21485__auto___29301]));

var G__29302 = (i__21485__auto___29301 + (1));
i__21485__auto___29301 = G__29302;
continue;
} else {
}
break;
}

var G__29299 = args29297.length;
switch (G__29299) {
case 0:
return chart.client.question.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.question.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.question.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.question.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.question.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29297.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__29294_SHARP_){
return chart.client.question.call(null,sel,p1__29294_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__29295_SHARP_){
return chart.client.question.call(null,pred,sel,p1__29295_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__29296_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__29296_SHARP_);
}));
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$core$IFn$_invoke$arity$4 = (function (pred,subj,obj,adjuncts){
if(cljs.core.truth_(adjuncts)){
ask.master.selector.call(null,"element",(40),"chart.client","?",adjuncts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler40 = (function chart$client$handler40(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),sel], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$lang$maxFixedArity = 4;

chart.client.command = (function chart$client$command(cmd){
var pred__29307_29310 = cljs.core._EQ_;
var expr__29308_29311 = cmd;
if(cljs.core.truth_(pred__29307_29310.call(null,"commands",expr__29308_29311))){
} else {
if(cljs.core.truth_(pred__29307_29310.call(null,"watch-visible",expr__29308_29311))){
var bnd_29312 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_29313 = [cljs.core.str("?n="),cljs.core.str(bnd_29312.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_29312.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_29312.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_29312.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_29313)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__29307_29310.call(null,"move-to",expr__29308_29311))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__29307_29310.call(null,"schedule",expr__29308_29311))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__29307_29310.call(null,"question",expr__29308_29311))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e29315){if((e29315 instanceof Error)){
var e_29316 = e29315;
cljs.core.println.call(null,e_29316);
} else {
throw e29315;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

m.on("zoomend",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.display_zoom.call(null,m.getZoom());
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

chart.controls.display_zoom.call(null,m.getZoom());

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