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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__26982 = response;
var map__26982__$1 = ((((!((map__26982 == null)))?((((map__26982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982):map__26982);
var status = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_26990 = cljs.core.deref.call(null,vmp);
var mrk_26991 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26990);
var vec__26987_26992 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26990);
var lat_26993 = cljs.core.nth.call(null,vec__26987_26992,(0),null);
var lon_26994 = cljs.core.nth.call(null,vec__26987_26992,(1),null);
var pos_26995 = (new L.LatLng(lat_26993,lon_26994));
mrk_26991.setLatLng(pos_26995);

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
var seq__27000_27004 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27001_27005 = null;
var count__27002_27006 = (0);
var i__27003_27007 = (0);
while(true){
if((i__27003_27007 < count__27002_27006)){
var veh_27008 = cljs.core._nth.call(null,chunk__27001_27005,i__27003_27007);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27008)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27008)));

var G__27009 = seq__27000_27004;
var G__27010 = chunk__27001_27005;
var G__27011 = count__27002_27006;
var G__27012 = (i__27003_27007 + (1));
seq__27000_27004 = G__27009;
chunk__27001_27005 = G__27010;
count__27002_27006 = G__27011;
i__27003_27007 = G__27012;
continue;
} else {
var temp__4657__auto___27013 = cljs.core.seq.call(null,seq__27000_27004);
if(temp__4657__auto___27013){
var seq__27000_27014__$1 = temp__4657__auto___27013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27000_27014__$1)){
var c__9371__auto___27015 = cljs.core.chunk_first.call(null,seq__27000_27014__$1);
var G__27016 = cljs.core.chunk_rest.call(null,seq__27000_27014__$1);
var G__27017 = c__9371__auto___27015;
var G__27018 = cljs.core.count.call(null,c__9371__auto___27015);
var G__27019 = (0);
seq__27000_27004 = G__27016;
chunk__27001_27005 = G__27017;
count__27002_27006 = G__27018;
i__27003_27007 = G__27019;
continue;
} else {
var veh_27020 = cljs.core.first.call(null,seq__27000_27014__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27020)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27020)));

var G__27021 = cljs.core.next.call(null,seq__27000_27014__$1);
var G__27022 = null;
var G__27023 = (0);
var G__27024 = (0);
seq__27000_27004 = G__27021;
chunk__27001_27005 = G__27022;
count__27002_27006 = G__27023;
i__27003_27007 = G__27024;
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

var vec__27029 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27029,(0),null);
var lon = cljs.core.nth.call(null,vec__27029,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__27029,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27029,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27025_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27025_SHARP_))),e.target);
});})(vec__27029,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27029,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__8557__auto__ = url_ico;
if(cljs.core.truth_(or__8557__auto__)){
return or__8557__auto__;
} else {
var or__8557__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8557__auto____$1)){
return or__8557__auto____$1;
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
var seq__27036_27040 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__27037_27041 = null;
var count__27038_27042 = (0);
var i__27039_27043 = (0);
while(true){
if((i__27039_27043 < count__27038_27042)){
var mrk_27044 = cljs.core._nth.call(null,chunk__27037_27041,i__27039_27043);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27044);

var G__27045 = seq__27036_27040;
var G__27046 = chunk__27037_27041;
var G__27047 = count__27038_27042;
var G__27048 = (i__27039_27043 + (1));
seq__27036_27040 = G__27045;
chunk__27037_27041 = G__27046;
count__27038_27042 = G__27047;
i__27039_27043 = G__27048;
continue;
} else {
var temp__4657__auto___27049 = cljs.core.seq.call(null,seq__27036_27040);
if(temp__4657__auto___27049){
var seq__27036_27050__$1 = temp__4657__auto___27049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27036_27050__$1)){
var c__9371__auto___27051 = cljs.core.chunk_first.call(null,seq__27036_27050__$1);
var G__27052 = cljs.core.chunk_rest.call(null,seq__27036_27050__$1);
var G__27053 = c__9371__auto___27051;
var G__27054 = cljs.core.count.call(null,c__9371__auto___27051);
var G__27055 = (0);
seq__27036_27040 = G__27052;
chunk__27037_27041 = G__27053;
count__27038_27042 = G__27054;
i__27039_27043 = G__27055;
continue;
} else {
var mrk_27056 = cljs.core.first.call(null,seq__27036_27050__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27056);

var G__27057 = cljs.core.next.call(null,seq__27036_27050__$1);
var G__27058 = null;
var G__27059 = (0);
var G__27060 = (0);
seq__27036_27040 = G__27057;
chunk__27037_27041 = G__27058;
count__27038_27042 = G__27059;
i__27039_27043 = G__27060;
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
var args27061 = [];
var len__9665__auto___27067 = arguments.length;
var i__9666__auto___27068 = (0);
while(true){
if((i__9666__auto___27068 < len__9665__auto___27067)){
args27061.push((arguments[i__9666__auto___27068]));

var G__27069 = (i__9666__auto___27068 + (1));
i__9666__auto___27068 = G__27069;
continue;
} else {
}
break;
}

var G__27063 = args27061.length;
switch (G__27063) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27061.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27064 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27064,(0),null);
var lon = cljs.core.nth.call(null,vec__27064,(1),null);
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
return (function (p1__27071_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__27071_SHARP_),cljs.core.second.call(null,p1__27071_SHARP_)));
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
var vec__27075 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__27075,(0),null);
var s = cljs.core.nth.call(null,vec__27075,(1),null);
var w = cljs.core.nth.call(null,vec__27075,(2),null);
var e = cljs.core.nth.call(null,vec__27075,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__27075,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__27075,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__27078,zoom,lock){
var vec__27082 = p__27078;
var lat = cljs.core.nth.call(null,vec__27082,(0),null);
var lon = cljs.core.nth.call(null,vec__27082,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__8557__auto__ = zoom;
if(cljs.core.truth_(or__8557__auto__)){
return or__8557__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__27085_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__27085_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__27086_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__27086_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__27087_SHARP_){
return p1__27087_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__27088,ops){
var vec__27092 = p__27088;
var id1 = cljs.core.nth.call(null,vec__27092,(0),null);
var id2 = cljs.core.nth.call(null,vec__27092,(1),null);
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
var args27096 = [];
var len__9665__auto___27099 = arguments.length;
var i__9666__auto___27100 = (0);
while(true){
if((i__9666__auto___27100 < len__9665__auto___27099)){
args27096.push((arguments[i__9666__auto___27100]));

var G__27101 = (i__9666__auto___27100 + (1));
i__9666__auto___27100 = G__27101;
continue;
} else {
}
break;
}

var G__27098 = args27096.length;
switch (G__27098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27096.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27095_SHARP_){
return chart.client.select_airport.call(null,sel,p1__27095_SHARP_);
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
var seq__27159 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__27160 = null;
var count__27161 = (0);
var i__27162 = (0);
while(true){
if((i__27162 < count__27161)){
var map__27163 = cljs.core._nth.call(null,chunk__27160,i__27162);
var map__27163__$1 = ((((!((map__27163 == null)))?((((map__27163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27163):map__27163);
var ins = map__27163__$1;
var instruct = cljs.core.get.call(null,map__27163__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27165_27215 = cljs.core._EQ_;
var expr__27166_27216 = instruct;
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27166_27216))){
var map__27168_27217 = ins;
var map__27168_27218__$1 = ((((!((map__27168_27217 == null)))?((((map__27168_27217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27168_27217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27168_27217):map__27168_27217);
var id_27219 = cljs.core.get.call(null,map__27168_27218__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27220 = cljs.core.get.call(null,map__27168_27218__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27219,vehicle_27220);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27166_27216))){
var map__27170_27221 = ins;
var map__27170_27222__$1 = ((((!((map__27170_27221 == null)))?((((map__27170_27221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27170_27221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170_27221):map__27170_27221);
var id_27223 = cljs.core.get.call(null,map__27170_27222__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27223);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27166_27216))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27166_27216))){
var map__27172_27224 = ins;
var map__27172_27225__$1 = ((((!((map__27172_27224 == null)))?((((map__27172_27224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27172_27224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27172_27224):map__27172_27224);
var id_27226 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27227 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27228 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27229 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27230 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27231 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27232 = cljs.core.get.call(null,map__27172_27225__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27226)){
chart.client.popup.call(null,id_27226,html_27229,time_27230);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = width_27231;
if(cljs.core.truth_(and__8545__auto__)){
var and__8545__auto____$1 = height_27232;
if(cljs.core.truth_(and__8545__auto____$1)){
var and__8545__auto____$2 = lat_27227;
if(cljs.core.truth_(and__8545__auto____$2)){
return lon_27228;
} else {
return and__8545__auto____$2;
}
} else {
return and__8545__auto____$1;
}
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_27227,lon_27228,html_27229,time_27230,width_27231,height_27232);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = lat_27227;
if(cljs.core.truth_(and__8545__auto__)){
return lon_27228;
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_27227,lon_27228,html_27229,time_27230);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27166_27216))){
var map__27174_27233 = ins;
var map__27174_27234__$1 = ((((!((map__27174_27233 == null)))?((((map__27174_27233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27174_27233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174_27233):map__27174_27233);
var id_27235 = cljs.core.get.call(null,map__27174_27234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27236 = cljs.core.get.call(null,map__27174_27234__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27237 = cljs.core.get.call(null,map__27174_27234__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27238 = cljs.core.get.call(null,map__27174_27234__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27235,points_27236,options_27237,time_27238);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27166_27216))){
var map__27176_27239 = ins;
var map__27176_27240__$1 = ((((!((map__27176_27239 == null)))?((((map__27176_27239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27176_27239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27176_27239):map__27176_27239);
var coord_27241 = cljs.core.get.call(null,map__27176_27240__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27242 = cljs.core.get.call(null,map__27176_27240__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27243 = cljs.core.get.call(null,map__27176_27240__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27241,zoom_27242,lock_27243);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27166_27216))){
var map__27178_27244 = ins;
var map__27178_27245__$1 = ((((!((map__27178_27244 == null)))?((((map__27178_27244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27178_27244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27178_27244):map__27178_27244);
var iname_27246 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27247 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27248 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27249 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27250 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27251 = cljs.core.get.call(null,map__27178_27245__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27246,tip_27247,lat_27248,lon_27249,feature_27250,url_ico_27251);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27166_27216))){
var map__27180_27252 = ins;
var map__27180_27253__$1 = ((((!((map__27180_27252 == null)))?((((map__27180_27252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27180_27252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27180_27252):map__27180_27252);
var iname_27254 = cljs.core.get.call(null,map__27180_27253__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27254);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27166_27216))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27166_27216))){
var map__27182_27255 = ins;
var map__27182_27256__$1 = ((((!((map__27182_27255 == null)))?((((map__27182_27255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27182_27255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27182_27255):map__27182_27255);
var ids_27257 = cljs.core.get.call(null,map__27182_27256__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27258 = cljs.core.get.call(null,map__27182_27256__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27257,options_27258);
} else {
if(cljs.core.truth_(pred__27165_27215.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27166_27216))){
var map__27184_27259 = ins;
var map__27184_27260__$1 = ((((!((map__27184_27259 == null)))?((((map__27184_27259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27184_27259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27184_27259):map__27184_27259);
var question_27261 = cljs.core.get.call(null,map__27184_27260__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27262 = cljs.core.get.call(null,map__27184_27260__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27186_27263 = cljs.core._EQ_;
var expr__27187_27264 = question_27261;
if(cljs.core.truth_(pred__27186_27263.call(null,"city",expr__27187_27264))){
chart.client.select_city.call(null,param_27262);
} else {
if(cljs.core.truth_(pred__27186_27263.call(null,"airport",expr__27187_27264))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27187_27264)].join('')));
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

var G__27265 = seq__27159;
var G__27266 = chunk__27160;
var G__27267 = count__27161;
var G__27268 = (i__27162 + (1));
seq__27159 = G__27265;
chunk__27160 = G__27266;
count__27161 = G__27267;
i__27162 = G__27268;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27159);
if(temp__4657__auto__){
var seq__27159__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27159__$1)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,seq__27159__$1);
var G__27269 = cljs.core.chunk_rest.call(null,seq__27159__$1);
var G__27270 = c__9371__auto__;
var G__27271 = cljs.core.count.call(null,c__9371__auto__);
var G__27272 = (0);
seq__27159 = G__27269;
chunk__27160 = G__27270;
count__27161 = G__27271;
i__27162 = G__27272;
continue;
} else {
var map__27189 = cljs.core.first.call(null,seq__27159__$1);
var map__27189__$1 = ((((!((map__27189 == null)))?((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27189):map__27189);
var ins = map__27189__$1;
var instruct = cljs.core.get.call(null,map__27189__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27191_27273 = cljs.core._EQ_;
var expr__27192_27274 = instruct;
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27192_27274))){
var map__27194_27275 = ins;
var map__27194_27276__$1 = ((((!((map__27194_27275 == null)))?((((map__27194_27275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27194_27275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27194_27275):map__27194_27275);
var id_27277 = cljs.core.get.call(null,map__27194_27276__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27278 = cljs.core.get.call(null,map__27194_27276__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27277,vehicle_27278);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27192_27274))){
var map__27196_27279 = ins;
var map__27196_27280__$1 = ((((!((map__27196_27279 == null)))?((((map__27196_27279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27196_27279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27196_27279):map__27196_27279);
var id_27281 = cljs.core.get.call(null,map__27196_27280__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27281);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27192_27274))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27192_27274))){
var map__27198_27282 = ins;
var map__27198_27283__$1 = ((((!((map__27198_27282 == null)))?((((map__27198_27282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27198_27282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27198_27282):map__27198_27282);
var id_27284 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27285 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27286 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27287 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27288 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27289 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27290 = cljs.core.get.call(null,map__27198_27283__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27284)){
chart.client.popup.call(null,id_27284,html_27287,time_27288);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = width_27289;
if(cljs.core.truth_(and__8545__auto__)){
var and__8545__auto____$1 = height_27290;
if(cljs.core.truth_(and__8545__auto____$1)){
var and__8545__auto____$2 = lat_27285;
if(cljs.core.truth_(and__8545__auto____$2)){
return lon_27286;
} else {
return and__8545__auto____$2;
}
} else {
return and__8545__auto____$1;
}
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_27285,lon_27286,html_27287,time_27288,width_27289,height_27290);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = lat_27285;
if(cljs.core.truth_(and__8545__auto__)){
return lon_27286;
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_27285,lon_27286,html_27287,time_27288);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27192_27274))){
var map__27200_27291 = ins;
var map__27200_27292__$1 = ((((!((map__27200_27291 == null)))?((((map__27200_27291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27200_27291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27200_27291):map__27200_27291);
var id_27293 = cljs.core.get.call(null,map__27200_27292__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27294 = cljs.core.get.call(null,map__27200_27292__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27295 = cljs.core.get.call(null,map__27200_27292__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27296 = cljs.core.get.call(null,map__27200_27292__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27293,points_27294,options_27295,time_27296);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27192_27274))){
var map__27202_27297 = ins;
var map__27202_27298__$1 = ((((!((map__27202_27297 == null)))?((((map__27202_27297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27202_27297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27202_27297):map__27202_27297);
var coord_27299 = cljs.core.get.call(null,map__27202_27298__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27300 = cljs.core.get.call(null,map__27202_27298__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27301 = cljs.core.get.call(null,map__27202_27298__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27299,zoom_27300,lock_27301);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27192_27274))){
var map__27204_27302 = ins;
var map__27204_27303__$1 = ((((!((map__27204_27302 == null)))?((((map__27204_27302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27204_27302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27204_27302):map__27204_27302);
var iname_27304 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27305 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27306 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27307 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27308 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27309 = cljs.core.get.call(null,map__27204_27303__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27304,tip_27305,lat_27306,lon_27307,feature_27308,url_ico_27309);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27192_27274))){
var map__27206_27310 = ins;
var map__27206_27311__$1 = ((((!((map__27206_27310 == null)))?((((map__27206_27310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27206_27310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27206_27310):map__27206_27310);
var iname_27312 = cljs.core.get.call(null,map__27206_27311__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27312);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27192_27274))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27192_27274))){
var map__27208_27313 = ins;
var map__27208_27314__$1 = ((((!((map__27208_27313 == null)))?((((map__27208_27313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27208_27313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27208_27313):map__27208_27313);
var ids_27315 = cljs.core.get.call(null,map__27208_27314__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27316 = cljs.core.get.call(null,map__27208_27314__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27315,options_27316);
} else {
if(cljs.core.truth_(pred__27191_27273.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27192_27274))){
var map__27210_27317 = ins;
var map__27210_27318__$1 = ((((!((map__27210_27317 == null)))?((((map__27210_27317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27210_27317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27210_27317):map__27210_27317);
var question_27319 = cljs.core.get.call(null,map__27210_27318__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27320 = cljs.core.get.call(null,map__27210_27318__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27212_27321 = cljs.core._EQ_;
var expr__27213_27322 = question_27319;
if(cljs.core.truth_(pred__27212_27321.call(null,"city",expr__27213_27322))){
chart.client.select_city.call(null,param_27320);
} else {
if(cljs.core.truth_(pred__27212_27321.call(null,"airport",expr__27213_27322))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27213_27322)].join('')));
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

var G__27323 = cljs.core.next.call(null,seq__27159__$1);
var G__27324 = null;
var G__27325 = (0);
var G__27326 = (0);
seq__27159 = G__27323;
chunk__27160 = G__27324;
count__27161 = G__27325;
i__27162 = G__27326;
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
var args27328 = [];
var len__9665__auto___27331 = arguments.length;
var i__9666__auto___27332 = (0);
while(true){
if((i__9666__auto___27332 < len__9665__auto___27331)){
args27328.push((arguments[i__9666__auto___27332]));

var G__27333 = (i__9666__auto___27332 + (1));
i__9666__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var G__27330 = args27328.length;
switch (G__27330) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27328.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27327_SHARP_){
return chart.client.move_to.call(null,sel,p1__27327_SHARP_);
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
var args27339 = [];
var len__9665__auto___27342 = arguments.length;
var i__9666__auto___27343 = (0);
while(true){
if((i__9666__auto___27343 < len__9665__auto___27342)){
args27339.push((arguments[i__9666__auto___27343]));

var G__27344 = (i__9666__auto___27343 + (1));
i__9666__auto___27343 = G__27344;
continue;
} else {
}
break;
}

var G__27341 = args27339.length;
switch (G__27341) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27339.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27335_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__27335_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27336_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__27336_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27337_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__27337_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27338_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__27338_SHARP_);
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
var args27349 = [];
var len__9665__auto___27352 = arguments.length;
var i__9666__auto___27353 = (0);
while(true){
if((i__9666__auto___27353 < len__9665__auto___27352)){
args27349.push((arguments[i__9666__auto___27353]));

var G__27354 = (i__9666__auto___27353 + (1));
i__9666__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var G__27351 = args27349.length;
switch (G__27351) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27349.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__27346_SHARP_){
return chart.client.question.call(null,sel,p1__27346_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__27347_SHARP_){
return chart.client.question.call(null,pred,sel,p1__27347_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__27348_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__27348_SHARP_);
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
var pred__27359_27362 = cljs.core._EQ_;
var expr__27360_27363 = cmd;
if(cljs.core.truth_(pred__27359_27362.call(null,"commands",expr__27360_27363))){
} else {
if(cljs.core.truth_(pred__27359_27362.call(null,"watch-visible",expr__27360_27363))){
var bnd_27364 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_27365 = [cljs.core.str("?n="),cljs.core.str(bnd_27364.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_27364.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_27364.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_27364.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_27365)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__27359_27362.call(null,"move-to",expr__27360_27363))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__27359_27362.call(null,"schedule",expr__27360_27363))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__27359_27362.call(null,"question",expr__27360_27363))){
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
}catch (e27367){if((e27367 instanceof Error)){
var e_27368 = e27367;
cljs.core.println.call(null,e_27368);
} else {
throw e27367;

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