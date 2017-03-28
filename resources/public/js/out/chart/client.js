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
var map__25203 = response;
var map__25203__$1 = ((((!((map__25203 == null)))?((((map__25203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25203):map__25203);
var status = cljs.core.get.call(null,map__25203__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25203__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_25211 = cljs.core.deref.call(null,vmp);
var mrk_25212 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25211);
var vec__25208_25213 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25211);
var lat_25214 = cljs.core.nth.call(null,vec__25208_25213,(0),null);
var lon_25215 = cljs.core.nth.call(null,vec__25208_25213,(1),null);
var pos_25216 = (new L.LatLng(lat_25214,lon_25215));
mrk_25212.setLatLng(pos_25216);

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
var seq__25221_25225 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25222_25226 = null;
var count__25223_25227 = (0);
var i__25224_25228 = (0);
while(true){
if((i__25224_25228 < count__25223_25227)){
var veh_25229 = cljs.core._nth.call(null,chunk__25222_25226,i__25224_25228);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25229)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25229)));

var G__25230 = seq__25221_25225;
var G__25231 = chunk__25222_25226;
var G__25232 = count__25223_25227;
var G__25233 = (i__25224_25228 + (1));
seq__25221_25225 = G__25230;
chunk__25222_25226 = G__25231;
count__25223_25227 = G__25232;
i__25224_25228 = G__25233;
continue;
} else {
var temp__4657__auto___25234 = cljs.core.seq.call(null,seq__25221_25225);
if(temp__4657__auto___25234){
var seq__25221_25235__$1 = temp__4657__auto___25234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25221_25235__$1)){
var c__21190__auto___25236 = cljs.core.chunk_first.call(null,seq__25221_25235__$1);
var G__25237 = cljs.core.chunk_rest.call(null,seq__25221_25235__$1);
var G__25238 = c__21190__auto___25236;
var G__25239 = cljs.core.count.call(null,c__21190__auto___25236);
var G__25240 = (0);
seq__25221_25225 = G__25237;
chunk__25222_25226 = G__25238;
count__25223_25227 = G__25239;
i__25224_25228 = G__25240;
continue;
} else {
var veh_25241 = cljs.core.first.call(null,seq__25221_25235__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25241)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25241)));

var G__25242 = cljs.core.next.call(null,seq__25221_25235__$1);
var G__25243 = null;
var G__25244 = (0);
var G__25245 = (0);
seq__25221_25225 = G__25242;
chunk__25222_25226 = G__25243;
count__25223_25227 = G__25244;
i__25224_25228 = G__25245;
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

var vec__25250 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25250,(0),null);
var lon = cljs.core.nth.call(null,vec__25250,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__25250,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25250,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25246_SHARP_))),e.target);
});})(vec__25250,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25250,lat,lon,pos,ico,opt,mrk__$1))
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
var seq__25257_25261 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__25258_25262 = null;
var count__25259_25263 = (0);
var i__25260_25264 = (0);
while(true){
if((i__25260_25264 < count__25259_25263)){
var mrk_25265 = cljs.core._nth.call(null,chunk__25258_25262,i__25260_25264);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25265);

var G__25266 = seq__25257_25261;
var G__25267 = chunk__25258_25262;
var G__25268 = count__25259_25263;
var G__25269 = (i__25260_25264 + (1));
seq__25257_25261 = G__25266;
chunk__25258_25262 = G__25267;
count__25259_25263 = G__25268;
i__25260_25264 = G__25269;
continue;
} else {
var temp__4657__auto___25270 = cljs.core.seq.call(null,seq__25257_25261);
if(temp__4657__auto___25270){
var seq__25257_25271__$1 = temp__4657__auto___25270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25257_25271__$1)){
var c__21190__auto___25272 = cljs.core.chunk_first.call(null,seq__25257_25271__$1);
var G__25273 = cljs.core.chunk_rest.call(null,seq__25257_25271__$1);
var G__25274 = c__21190__auto___25272;
var G__25275 = cljs.core.count.call(null,c__21190__auto___25272);
var G__25276 = (0);
seq__25257_25261 = G__25273;
chunk__25258_25262 = G__25274;
count__25259_25263 = G__25275;
i__25260_25264 = G__25276;
continue;
} else {
var mrk_25277 = cljs.core.first.call(null,seq__25257_25271__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25277);

var G__25278 = cljs.core.next.call(null,seq__25257_25271__$1);
var G__25279 = null;
var G__25280 = (0);
var G__25281 = (0);
seq__25257_25261 = G__25278;
chunk__25258_25262 = G__25279;
count__25259_25263 = G__25280;
i__25260_25264 = G__25281;
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
var args25282 = [];
var len__21484__auto___25288 = arguments.length;
var i__21485__auto___25289 = (0);
while(true){
if((i__21485__auto___25289 < len__21484__auto___25288)){
args25282.push((arguments[i__21485__auto___25289]));

var G__25290 = (i__21485__auto___25289 + (1));
i__21485__auto___25289 = G__25290;
continue;
} else {
}
break;
}

var G__25284 = args25282.length;
switch (G__25284) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25282.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25285 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25285,(0),null);
var lon = cljs.core.nth.call(null,vec__25285,(1),null);
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
return (function (p1__25292_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__25292_SHARP_),cljs.core.second.call(null,p1__25292_SHARP_)));
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
var vec__25296 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__25296,(0),null);
var s = cljs.core.nth.call(null,vec__25296,(1),null);
var w = cljs.core.nth.call(null,vec__25296,(2),null);
var e = cljs.core.nth.call(null,vec__25296,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__25296,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__25296,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__25299,zoom,lock){
var vec__25303 = p__25299;
var lat = cljs.core.nth.call(null,vec__25303,(0),null);
var lon = cljs.core.nth.call(null,vec__25303,(1),null);
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__25306_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__25306_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__25307_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__25307_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__25308_SHARP_){
return p1__25308_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__25309,ops){
var vec__25313 = p__25309;
var id1 = cljs.core.nth.call(null,vec__25313,(0),null);
var id2 = cljs.core.nth.call(null,vec__25313,(1),null);
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
var args25317 = [];
var len__21484__auto___25320 = arguments.length;
var i__21485__auto___25321 = (0);
while(true){
if((i__21485__auto___25321 < len__21484__auto___25320)){
args25317.push((arguments[i__21485__auto___25321]));

var G__25322 = (i__21485__auto___25321 + (1));
i__21485__auto___25321 = G__25322;
continue;
} else {
}
break;
}

var G__25319 = args25317.length;
switch (G__25319) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25317.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25316_SHARP_){
return chart.client.select_airport.call(null,sel,p1__25316_SHARP_);
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
var seq__25380 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25381 = null;
var count__25382 = (0);
var i__25383 = (0);
while(true){
if((i__25383 < count__25382)){
var map__25384 = cljs.core._nth.call(null,chunk__25381,i__25383);
var map__25384__$1 = ((((!((map__25384 == null)))?((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var ins = map__25384__$1;
var instruct = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25386_25436 = cljs.core._EQ_;
var expr__25387_25437 = instruct;
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25387_25437))){
var map__25389_25438 = ins;
var map__25389_25439__$1 = ((((!((map__25389_25438 == null)))?((((map__25389_25438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25389_25438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25389_25438):map__25389_25438);
var id_25440 = cljs.core.get.call(null,map__25389_25439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25441 = cljs.core.get.call(null,map__25389_25439__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25440,vehicle_25441);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25387_25437))){
var map__25391_25442 = ins;
var map__25391_25443__$1 = ((((!((map__25391_25442 == null)))?((((map__25391_25442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25391_25442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391_25442):map__25391_25442);
var id_25444 = cljs.core.get.call(null,map__25391_25443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25444);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25387_25437))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25387_25437))){
var map__25393_25445 = ins;
var map__25393_25446__$1 = ((((!((map__25393_25445 == null)))?((((map__25393_25445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25393_25445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25393_25445):map__25393_25445);
var id_25447 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25448 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25449 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25450 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25451 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25452 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25453 = cljs.core.get.call(null,map__25393_25446__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25447)){
chart.client.popup.call(null,id_25447,html_25450,time_25451);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = width_25452;
if(cljs.core.truth_(and__20364__auto__)){
var and__20364__auto____$1 = height_25453;
if(cljs.core.truth_(and__20364__auto____$1)){
var and__20364__auto____$2 = lat_25448;
if(cljs.core.truth_(and__20364__auto____$2)){
return lon_25449;
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
chart.client.popup.call(null,lat_25448,lon_25449,html_25450,time_25451,width_25452,height_25453);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = lat_25448;
if(cljs.core.truth_(and__20364__auto__)){
return lon_25449;
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_25448,lon_25449,html_25450,time_25451);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25387_25437))){
var map__25395_25454 = ins;
var map__25395_25455__$1 = ((((!((map__25395_25454 == null)))?((((map__25395_25454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25395_25454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25395_25454):map__25395_25454);
var id_25456 = cljs.core.get.call(null,map__25395_25455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25457 = cljs.core.get.call(null,map__25395_25455__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25458 = cljs.core.get.call(null,map__25395_25455__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25459 = cljs.core.get.call(null,map__25395_25455__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25456,points_25457,options_25458,time_25459);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25387_25437))){
var map__25397_25460 = ins;
var map__25397_25461__$1 = ((((!((map__25397_25460 == null)))?((((map__25397_25460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25397_25460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397_25460):map__25397_25460);
var coord_25462 = cljs.core.get.call(null,map__25397_25461__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25463 = cljs.core.get.call(null,map__25397_25461__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25464 = cljs.core.get.call(null,map__25397_25461__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25462,zoom_25463,lock_25464);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25387_25437))){
var map__25399_25465 = ins;
var map__25399_25466__$1 = ((((!((map__25399_25465 == null)))?((((map__25399_25465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25399_25465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25399_25465):map__25399_25465);
var iname_25467 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25468 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25469 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25470 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25471 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25472 = cljs.core.get.call(null,map__25399_25466__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25467,tip_25468,lat_25469,lon_25470,feature_25471,url_ico_25472);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25387_25437))){
var map__25401_25473 = ins;
var map__25401_25474__$1 = ((((!((map__25401_25473 == null)))?((((map__25401_25473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25401_25473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25401_25473):map__25401_25473);
var iname_25475 = cljs.core.get.call(null,map__25401_25474__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25475);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25387_25437))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25387_25437))){
var map__25403_25476 = ins;
var map__25403_25477__$1 = ((((!((map__25403_25476 == null)))?((((map__25403_25476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25403_25476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25403_25476):map__25403_25476);
var ids_25478 = cljs.core.get.call(null,map__25403_25477__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25479 = cljs.core.get.call(null,map__25403_25477__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25478,options_25479);
} else {
if(cljs.core.truth_(pred__25386_25436.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25387_25437))){
var map__25405_25480 = ins;
var map__25405_25481__$1 = ((((!((map__25405_25480 == null)))?((((map__25405_25480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25405_25480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25405_25480):map__25405_25480);
var question_25482 = cljs.core.get.call(null,map__25405_25481__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25483 = cljs.core.get.call(null,map__25405_25481__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25407_25484 = cljs.core._EQ_;
var expr__25408_25485 = question_25482;
if(cljs.core.truth_(pred__25407_25484.call(null,"city",expr__25408_25485))){
chart.client.select_city.call(null,param_25483);
} else {
if(cljs.core.truth_(pred__25407_25484.call(null,"airport",expr__25408_25485))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25408_25485)].join('')));
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

var G__25486 = seq__25380;
var G__25487 = chunk__25381;
var G__25488 = count__25382;
var G__25489 = (i__25383 + (1));
seq__25380 = G__25486;
chunk__25381 = G__25487;
count__25382 = G__25488;
i__25383 = G__25489;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25380);
if(temp__4657__auto__){
var seq__25380__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25380__$1)){
var c__21190__auto__ = cljs.core.chunk_first.call(null,seq__25380__$1);
var G__25490 = cljs.core.chunk_rest.call(null,seq__25380__$1);
var G__25491 = c__21190__auto__;
var G__25492 = cljs.core.count.call(null,c__21190__auto__);
var G__25493 = (0);
seq__25380 = G__25490;
chunk__25381 = G__25491;
count__25382 = G__25492;
i__25383 = G__25493;
continue;
} else {
var map__25410 = cljs.core.first.call(null,seq__25380__$1);
var map__25410__$1 = ((((!((map__25410 == null)))?((((map__25410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25410):map__25410);
var ins = map__25410__$1;
var instruct = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25412_25494 = cljs.core._EQ_;
var expr__25413_25495 = instruct;
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25413_25495))){
var map__25415_25496 = ins;
var map__25415_25497__$1 = ((((!((map__25415_25496 == null)))?((((map__25415_25496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25415_25496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25415_25496):map__25415_25496);
var id_25498 = cljs.core.get.call(null,map__25415_25497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25499 = cljs.core.get.call(null,map__25415_25497__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25498,vehicle_25499);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25413_25495))){
var map__25417_25500 = ins;
var map__25417_25501__$1 = ((((!((map__25417_25500 == null)))?((((map__25417_25500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25417_25500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25417_25500):map__25417_25500);
var id_25502 = cljs.core.get.call(null,map__25417_25501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25502);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25413_25495))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25413_25495))){
var map__25419_25503 = ins;
var map__25419_25504__$1 = ((((!((map__25419_25503 == null)))?((((map__25419_25503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25419_25503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25419_25503):map__25419_25503);
var id_25505 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25506 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25507 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25508 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25509 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25510 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25511 = cljs.core.get.call(null,map__25419_25504__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25505)){
chart.client.popup.call(null,id_25505,html_25508,time_25509);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = width_25510;
if(cljs.core.truth_(and__20364__auto__)){
var and__20364__auto____$1 = height_25511;
if(cljs.core.truth_(and__20364__auto____$1)){
var and__20364__auto____$2 = lat_25506;
if(cljs.core.truth_(and__20364__auto____$2)){
return lon_25507;
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
chart.client.popup.call(null,lat_25506,lon_25507,html_25508,time_25509,width_25510,height_25511);
} else {
if(cljs.core.truth_((function (){var and__20364__auto__ = lat_25506;
if(cljs.core.truth_(and__20364__auto__)){
return lon_25507;
} else {
return and__20364__auto__;
}
})())){
chart.client.popup.call(null,lat_25506,lon_25507,html_25508,time_25509);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25413_25495))){
var map__25421_25512 = ins;
var map__25421_25513__$1 = ((((!((map__25421_25512 == null)))?((((map__25421_25512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25421_25512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25421_25512):map__25421_25512);
var id_25514 = cljs.core.get.call(null,map__25421_25513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25515 = cljs.core.get.call(null,map__25421_25513__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25516 = cljs.core.get.call(null,map__25421_25513__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25517 = cljs.core.get.call(null,map__25421_25513__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25514,points_25515,options_25516,time_25517);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25413_25495))){
var map__25423_25518 = ins;
var map__25423_25519__$1 = ((((!((map__25423_25518 == null)))?((((map__25423_25518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25423_25518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25423_25518):map__25423_25518);
var coord_25520 = cljs.core.get.call(null,map__25423_25519__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25521 = cljs.core.get.call(null,map__25423_25519__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25522 = cljs.core.get.call(null,map__25423_25519__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25520,zoom_25521,lock_25522);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25413_25495))){
var map__25425_25523 = ins;
var map__25425_25524__$1 = ((((!((map__25425_25523 == null)))?((((map__25425_25523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25425_25523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25425_25523):map__25425_25523);
var iname_25525 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25526 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25527 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25528 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25529 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25530 = cljs.core.get.call(null,map__25425_25524__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25525,tip_25526,lat_25527,lon_25528,feature_25529,url_ico_25530);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25413_25495))){
var map__25427_25531 = ins;
var map__25427_25532__$1 = ((((!((map__25427_25531 == null)))?((((map__25427_25531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25427_25531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25427_25531):map__25427_25531);
var iname_25533 = cljs.core.get.call(null,map__25427_25532__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25533);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25413_25495))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25413_25495))){
var map__25429_25534 = ins;
var map__25429_25535__$1 = ((((!((map__25429_25534 == null)))?((((map__25429_25534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25429_25534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25429_25534):map__25429_25534);
var ids_25536 = cljs.core.get.call(null,map__25429_25535__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25537 = cljs.core.get.call(null,map__25429_25535__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25536,options_25537);
} else {
if(cljs.core.truth_(pred__25412_25494.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25413_25495))){
var map__25431_25538 = ins;
var map__25431_25539__$1 = ((((!((map__25431_25538 == null)))?((((map__25431_25538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25431_25538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25431_25538):map__25431_25538);
var question_25540 = cljs.core.get.call(null,map__25431_25539__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25541 = cljs.core.get.call(null,map__25431_25539__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25433_25542 = cljs.core._EQ_;
var expr__25434_25543 = question_25540;
if(cljs.core.truth_(pred__25433_25542.call(null,"city",expr__25434_25543))){
chart.client.select_city.call(null,param_25541);
} else {
if(cljs.core.truth_(pred__25433_25542.call(null,"airport",expr__25434_25543))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25434_25543)].join('')));
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

var G__25544 = cljs.core.next.call(null,seq__25380__$1);
var G__25545 = null;
var G__25546 = (0);
var G__25547 = (0);
seq__25380 = G__25544;
chunk__25381 = G__25545;
count__25382 = G__25546;
i__25383 = G__25547;
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
var args25549 = [];
var len__21484__auto___25552 = arguments.length;
var i__21485__auto___25553 = (0);
while(true){
if((i__21485__auto___25553 < len__21484__auto___25552)){
args25549.push((arguments[i__21485__auto___25553]));

var G__25554 = (i__21485__auto___25553 + (1));
i__21485__auto___25553 = G__25554;
continue;
} else {
}
break;
}

var G__25551 = args25549.length;
switch (G__25551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25549.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25548_SHARP_){
return chart.client.move_to.call(null,sel,p1__25548_SHARP_);
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
var args25560 = [];
var len__21484__auto___25563 = arguments.length;
var i__21485__auto___25564 = (0);
while(true){
if((i__21485__auto___25564 < len__21484__auto___25563)){
args25560.push((arguments[i__21485__auto___25564]));

var G__25565 = (i__21485__auto___25564 + (1));
i__21485__auto___25564 = G__25565;
continue;
} else {
}
break;
}

var G__25562 = args25560.length;
switch (G__25562) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25560.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25556_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__25556_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25557_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__25557_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25558_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__25558_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25559_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__25559_SHARP_);
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
var args25570 = [];
var len__21484__auto___25573 = arguments.length;
var i__21485__auto___25574 = (0);
while(true){
if((i__21485__auto___25574 < len__21484__auto___25573)){
args25570.push((arguments[i__21485__auto___25574]));

var G__25575 = (i__21485__auto___25574 + (1));
i__21485__auto___25574 = G__25575;
continue;
} else {
}
break;
}

var G__25572 = args25570.length;
switch (G__25572) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25570.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__25567_SHARP_){
return chart.client.question.call(null,sel,p1__25567_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__25568_SHARP_){
return chart.client.question.call(null,pred,sel,p1__25568_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__25569_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__25569_SHARP_);
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
var pred__25580_25583 = cljs.core._EQ_;
var expr__25581_25584 = cmd;
if(cljs.core.truth_(pred__25580_25583.call(null,"commands",expr__25581_25584))){
} else {
if(cljs.core.truth_(pred__25580_25583.call(null,"watch-visible",expr__25581_25584))){
var bnd_25585 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_25586 = [cljs.core.str("?n="),cljs.core.str(bnd_25585.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_25585.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_25585.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_25585.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_25586)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__25580_25583.call(null,"move-to",expr__25581_25584))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__25580_25583.call(null,"schedule",expr__25581_25584))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__25580_25583.call(null,"question",expr__25581_25584))){
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
}catch (e25588){if((e25588 instanceof Error)){
var e_25589 = e25588;
cljs.core.println.call(null,e_25589);
} else {
throw e25588;

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