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
var map__41240 = response;
var map__41240__$1 = ((((!((map__41240 == null)))?((((map__41240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41240):map__41240);
var status = cljs.core.get.call(null,map__41240__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__41240__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_41248 = cljs.core.deref.call(null,vmp);
var mrk_41249 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_41248);
var vec__41245_41250 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_41248);
var lat_41251 = cljs.core.nth.call(null,vec__41245_41250,(0),null);
var lon_41252 = cljs.core.nth.call(null,vec__41245_41250,(1),null);
var pos_41253 = (new L.LatLng(lat_41251,lon_41252));
mrk_41249.setLatLng(pos_41253);

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
var seq__41258_41262 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__41259_41263 = null;
var count__41260_41264 = (0);
var i__41261_41265 = (0);
while(true){
if((i__41261_41265 < count__41260_41264)){
var veh_41266 = cljs.core._nth.call(null,chunk__41259_41263,i__41261_41265);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_41266)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_41266)));

var G__41267 = seq__41258_41262;
var G__41268 = chunk__41259_41263;
var G__41269 = count__41260_41264;
var G__41270 = (i__41261_41265 + (1));
seq__41258_41262 = G__41267;
chunk__41259_41263 = G__41268;
count__41260_41264 = G__41269;
i__41261_41265 = G__41270;
continue;
} else {
var temp__4657__auto___41271 = cljs.core.seq.call(null,seq__41258_41262);
if(temp__4657__auto___41271){
var seq__41258_41272__$1 = temp__4657__auto___41271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41258_41272__$1)){
var c__35951__auto___41273 = cljs.core.chunk_first.call(null,seq__41258_41272__$1);
var G__41274 = cljs.core.chunk_rest.call(null,seq__41258_41272__$1);
var G__41275 = c__35951__auto___41273;
var G__41276 = cljs.core.count.call(null,c__35951__auto___41273);
var G__41277 = (0);
seq__41258_41262 = G__41274;
chunk__41259_41263 = G__41275;
count__41260_41264 = G__41276;
i__41261_41265 = G__41277;
continue;
} else {
var veh_41278 = cljs.core.first.call(null,seq__41258_41272__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_41278)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_41278)));

var G__41279 = cljs.core.next.call(null,seq__41258_41272__$1);
var G__41280 = null;
var G__41281 = (0);
var G__41282 = (0);
seq__41258_41262 = G__41279;
chunk__41259_41263 = G__41280;
count__41260_41264 = G__41281;
i__41261_41265 = G__41282;
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

var vec__41287 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__41287,(0),null);
var lon = cljs.core.nth.call(null,vec__41287,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__41287,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__41287,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__41283_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__41283_SHARP_))),e.target);
});})(vec__41287,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__41287,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__35137__auto__ = url_ico;
if(cljs.core.truth_(or__35137__auto__)){
return or__35137__auto__;
} else {
var or__35137__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__35137__auto____$1)){
return or__35137__auto____$1;
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
var seq__41294_41298 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__41295_41299 = null;
var count__41296_41300 = (0);
var i__41297_41301 = (0);
while(true){
if((i__41297_41301 < count__41296_41300)){
var mrk_41302 = cljs.core._nth.call(null,chunk__41295_41299,i__41297_41301);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_41302);

var G__41303 = seq__41294_41298;
var G__41304 = chunk__41295_41299;
var G__41305 = count__41296_41300;
var G__41306 = (i__41297_41301 + (1));
seq__41294_41298 = G__41303;
chunk__41295_41299 = G__41304;
count__41296_41300 = G__41305;
i__41297_41301 = G__41306;
continue;
} else {
var temp__4657__auto___41307 = cljs.core.seq.call(null,seq__41294_41298);
if(temp__4657__auto___41307){
var seq__41294_41308__$1 = temp__4657__auto___41307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41294_41308__$1)){
var c__35951__auto___41309 = cljs.core.chunk_first.call(null,seq__41294_41308__$1);
var G__41310 = cljs.core.chunk_rest.call(null,seq__41294_41308__$1);
var G__41311 = c__35951__auto___41309;
var G__41312 = cljs.core.count.call(null,c__35951__auto___41309);
var G__41313 = (0);
seq__41294_41298 = G__41310;
chunk__41295_41299 = G__41311;
count__41296_41300 = G__41312;
i__41297_41301 = G__41313;
continue;
} else {
var mrk_41314 = cljs.core.first.call(null,seq__41294_41308__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_41314);

var G__41315 = cljs.core.next.call(null,seq__41294_41308__$1);
var G__41316 = null;
var G__41317 = (0);
var G__41318 = (0);
seq__41294_41298 = G__41315;
chunk__41295_41299 = G__41316;
count__41296_41300 = G__41317;
i__41297_41301 = G__41318;
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
var args41319 = [];
var len__36245__auto___41325 = arguments.length;
var i__36246__auto___41326 = (0);
while(true){
if((i__36246__auto___41326 < len__36245__auto___41325)){
args41319.push((arguments[i__36246__auto___41326]));

var G__41327 = (i__36246__auto___41326 + (1));
i__36246__auto___41326 = G__41327;
continue;
} else {
}
break;
}

var G__41321 = args41319.length;
switch (G__41321) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41319.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__41322 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__41322,(0),null);
var lon = cljs.core.nth.call(null,vec__41322,(1),null);
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
return (function (p1__41329_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__41329_SHARP_),cljs.core.second.call(null,p1__41329_SHARP_)));
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
var vec__41333 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__41333,(0),null);
var s = cljs.core.nth.call(null,vec__41333,(1),null);
var w = cljs.core.nth.call(null,vec__41333,(2),null);
var e = cljs.core.nth.call(null,vec__41333,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__41333,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__41333,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__41336,zoom,lock){
var vec__41340 = p__41336;
var lat = cljs.core.nth.call(null,vec__41340,(0),null);
var lon = cljs.core.nth.call(null,vec__41340,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__35137__auto__ = zoom;
if(cljs.core.truth_(or__35137__auto__)){
return or__35137__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__41343_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__41343_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__41344_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__41344_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__41345_SHARP_){
return p1__41345_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__41346,ops){
var vec__41350 = p__41346;
var id1 = cljs.core.nth.call(null,vec__41350,(0),null);
var id2 = cljs.core.nth.call(null,vec__41350,(1),null);
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
var args41354 = [];
var len__36245__auto___41357 = arguments.length;
var i__36246__auto___41358 = (0);
while(true){
if((i__36246__auto___41358 < len__36245__auto___41357)){
args41354.push((arguments[i__36246__auto___41358]));

var G__41359 = (i__36246__auto___41358 + (1));
i__36246__auto___41358 = G__41359;
continue;
} else {
}
break;
}

var G__41356 = args41354.length;
switch (G__41356) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41354.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__41353_SHARP_){
return chart.client.select_airport.call(null,sel,p1__41353_SHARP_);
}));
}))
;
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected airport",new cljs.core.Keyword(null,"object","object",1474613949),sel,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),cnt], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.select_airport.cljs$lang$maxFixedArity = 2;

chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__41417 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__41418 = null;
var count__41419 = (0);
var i__41420 = (0);
while(true){
if((i__41420 < count__41419)){
var map__41421 = cljs.core._nth.call(null,chunk__41418,i__41420);
var map__41421__$1 = ((((!((map__41421 == null)))?((((map__41421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41421):map__41421);
var ins = map__41421__$1;
var instruct = cljs.core.get.call(null,map__41421__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__41423_41473 = cljs.core._EQ_;
var expr__41424_41474 = instruct;
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__41424_41474))){
var map__41426_41475 = ins;
var map__41426_41476__$1 = ((((!((map__41426_41475 == null)))?((((map__41426_41475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41426_41475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41426_41475):map__41426_41475);
var id_41477 = cljs.core.get.call(null,map__41426_41476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_41478 = cljs.core.get.call(null,map__41426_41476__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_41477,vehicle_41478);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__41424_41474))){
var map__41428_41479 = ins;
var map__41428_41480__$1 = ((((!((map__41428_41479 == null)))?((((map__41428_41479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41428_41479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41428_41479):map__41428_41479);
var id_41481 = cljs.core.get.call(null,map__41428_41480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_41481);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__41424_41474))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__41424_41474))){
var map__41430_41482 = ins;
var map__41430_41483__$1 = ((((!((map__41430_41482 == null)))?((((map__41430_41482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41430_41482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41430_41482):map__41430_41482);
var id_41484 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_41485 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41486 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_41487 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_41488 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_41489 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_41490 = cljs.core.get.call(null,map__41430_41483__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_41484)){
chart.client.popup.call(null,id_41484,html_41487,time_41488);
} else {
if(cljs.core.truth_((function (){var and__35125__auto__ = width_41489;
if(cljs.core.truth_(and__35125__auto__)){
var and__35125__auto____$1 = height_41490;
if(cljs.core.truth_(and__35125__auto____$1)){
var and__35125__auto____$2 = lat_41485;
if(cljs.core.truth_(and__35125__auto____$2)){
return lon_41486;
} else {
return and__35125__auto____$2;
}
} else {
return and__35125__auto____$1;
}
} else {
return and__35125__auto__;
}
})())){
chart.client.popup.call(null,lat_41485,lon_41486,html_41487,time_41488,width_41489,height_41490);
} else {
if(cljs.core.truth_((function (){var and__35125__auto__ = lat_41485;
if(cljs.core.truth_(and__35125__auto__)){
return lon_41486;
} else {
return and__35125__auto__;
}
})())){
chart.client.popup.call(null,lat_41485,lon_41486,html_41487,time_41488);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__41424_41474))){
var map__41432_41491 = ins;
var map__41432_41492__$1 = ((((!((map__41432_41491 == null)))?((((map__41432_41491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41432_41491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41432_41491):map__41432_41491);
var id_41493 = cljs.core.get.call(null,map__41432_41492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_41494 = cljs.core.get.call(null,map__41432_41492__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_41495 = cljs.core.get.call(null,map__41432_41492__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_41496 = cljs.core.get.call(null,map__41432_41492__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_41493,points_41494,options_41495,time_41496);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__41424_41474))){
var map__41434_41497 = ins;
var map__41434_41498__$1 = ((((!((map__41434_41497 == null)))?((((map__41434_41497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41434_41497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41434_41497):map__41434_41497);
var coord_41499 = cljs.core.get.call(null,map__41434_41498__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_41500 = cljs.core.get.call(null,map__41434_41498__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_41501 = cljs.core.get.call(null,map__41434_41498__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_41499,zoom_41500,lock_41501);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__41424_41474))){
var map__41436_41502 = ins;
var map__41436_41503__$1 = ((((!((map__41436_41502 == null)))?((((map__41436_41502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41436_41502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41436_41502):map__41436_41502);
var iname_41504 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_41505 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_41506 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41507 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_41508 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_41509 = cljs.core.get.call(null,map__41436_41503__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_41504,tip_41505,lat_41506,lon_41507,feature_41508,url_ico_41509);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__41424_41474))){
var map__41438_41510 = ins;
var map__41438_41511__$1 = ((((!((map__41438_41510 == null)))?((((map__41438_41510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41438_41510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41438_41510):map__41438_41510);
var iname_41512 = cljs.core.get.call(null,map__41438_41511__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_41512);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__41424_41474))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__41424_41474))){
var map__41440_41513 = ins;
var map__41440_41514__$1 = ((((!((map__41440_41513 == null)))?((((map__41440_41513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41440_41513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41440_41513):map__41440_41513);
var ids_41515 = cljs.core.get.call(null,map__41440_41514__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_41516 = cljs.core.get.call(null,map__41440_41514__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_41515,options_41516);
} else {
if(cljs.core.truth_(pred__41423_41473.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__41424_41474))){
var map__41442_41517 = ins;
var map__41442_41518__$1 = ((((!((map__41442_41517 == null)))?((((map__41442_41517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41442_41517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41442_41517):map__41442_41517);
var question_41519 = cljs.core.get.call(null,map__41442_41518__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var pred__41444_41520 = cljs.core._EQ_;
var expr__41445_41521 = "airport";
chart.client.select_airport.call(null);
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

var G__41522 = seq__41417;
var G__41523 = chunk__41418;
var G__41524 = count__41419;
var G__41525 = (i__41420 + (1));
seq__41417 = G__41522;
chunk__41418 = G__41523;
count__41419 = G__41524;
i__41420 = G__41525;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41417);
if(temp__4657__auto__){
var seq__41417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41417__$1)){
var c__35951__auto__ = cljs.core.chunk_first.call(null,seq__41417__$1);
var G__41526 = cljs.core.chunk_rest.call(null,seq__41417__$1);
var G__41527 = c__35951__auto__;
var G__41528 = cljs.core.count.call(null,c__35951__auto__);
var G__41529 = (0);
seq__41417 = G__41526;
chunk__41418 = G__41527;
count__41419 = G__41528;
i__41420 = G__41529;
continue;
} else {
var map__41447 = cljs.core.first.call(null,seq__41417__$1);
var map__41447__$1 = ((((!((map__41447 == null)))?((((map__41447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41447):map__41447);
var ins = map__41447__$1;
var instruct = cljs.core.get.call(null,map__41447__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__41449_41530 = cljs.core._EQ_;
var expr__41450_41531 = instruct;
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__41450_41531))){
var map__41452_41532 = ins;
var map__41452_41533__$1 = ((((!((map__41452_41532 == null)))?((((map__41452_41532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41452_41532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41452_41532):map__41452_41532);
var id_41534 = cljs.core.get.call(null,map__41452_41533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_41535 = cljs.core.get.call(null,map__41452_41533__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_41534,vehicle_41535);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__41450_41531))){
var map__41454_41536 = ins;
var map__41454_41537__$1 = ((((!((map__41454_41536 == null)))?((((map__41454_41536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41454_41536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41454_41536):map__41454_41536);
var id_41538 = cljs.core.get.call(null,map__41454_41537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_41538);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__41450_41531))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__41450_41531))){
var map__41456_41539 = ins;
var map__41456_41540__$1 = ((((!((map__41456_41539 == null)))?((((map__41456_41539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41456_41539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41456_41539):map__41456_41539);
var id_41541 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_41542 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41543 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_41544 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_41545 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_41546 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_41547 = cljs.core.get.call(null,map__41456_41540__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_41541)){
chart.client.popup.call(null,id_41541,html_41544,time_41545);
} else {
if(cljs.core.truth_((function (){var and__35125__auto__ = width_41546;
if(cljs.core.truth_(and__35125__auto__)){
var and__35125__auto____$1 = height_41547;
if(cljs.core.truth_(and__35125__auto____$1)){
var and__35125__auto____$2 = lat_41542;
if(cljs.core.truth_(and__35125__auto____$2)){
return lon_41543;
} else {
return and__35125__auto____$2;
}
} else {
return and__35125__auto____$1;
}
} else {
return and__35125__auto__;
}
})())){
chart.client.popup.call(null,lat_41542,lon_41543,html_41544,time_41545,width_41546,height_41547);
} else {
if(cljs.core.truth_((function (){var and__35125__auto__ = lat_41542;
if(cljs.core.truth_(and__35125__auto__)){
return lon_41543;
} else {
return and__35125__auto__;
}
})())){
chart.client.popup.call(null,lat_41542,lon_41543,html_41544,time_41545);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__41450_41531))){
var map__41458_41548 = ins;
var map__41458_41549__$1 = ((((!((map__41458_41548 == null)))?((((map__41458_41548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41458_41548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41458_41548):map__41458_41548);
var id_41550 = cljs.core.get.call(null,map__41458_41549__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_41551 = cljs.core.get.call(null,map__41458_41549__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_41552 = cljs.core.get.call(null,map__41458_41549__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_41553 = cljs.core.get.call(null,map__41458_41549__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_41550,points_41551,options_41552,time_41553);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__41450_41531))){
var map__41460_41554 = ins;
var map__41460_41555__$1 = ((((!((map__41460_41554 == null)))?((((map__41460_41554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41460_41554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41460_41554):map__41460_41554);
var coord_41556 = cljs.core.get.call(null,map__41460_41555__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_41557 = cljs.core.get.call(null,map__41460_41555__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_41558 = cljs.core.get.call(null,map__41460_41555__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_41556,zoom_41557,lock_41558);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__41450_41531))){
var map__41462_41559 = ins;
var map__41462_41560__$1 = ((((!((map__41462_41559 == null)))?((((map__41462_41559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41462_41559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41462_41559):map__41462_41559);
var iname_41561 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_41562 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_41563 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41564 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_41565 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_41566 = cljs.core.get.call(null,map__41462_41560__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_41561,tip_41562,lat_41563,lon_41564,feature_41565,url_ico_41566);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__41450_41531))){
var map__41464_41567 = ins;
var map__41464_41568__$1 = ((((!((map__41464_41567 == null)))?((((map__41464_41567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41464_41567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41464_41567):map__41464_41567);
var iname_41569 = cljs.core.get.call(null,map__41464_41568__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_41569);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__41450_41531))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__41450_41531))){
var map__41466_41570 = ins;
var map__41466_41571__$1 = ((((!((map__41466_41570 == null)))?((((map__41466_41570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41466_41570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41466_41570):map__41466_41570);
var ids_41572 = cljs.core.get.call(null,map__41466_41571__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_41573 = cljs.core.get.call(null,map__41466_41571__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_41572,options_41573);
} else {
if(cljs.core.truth_(pred__41449_41530.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__41450_41531))){
var map__41468_41574 = ins;
var map__41468_41575__$1 = ((((!((map__41468_41574 == null)))?((((map__41468_41574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41468_41574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41468_41574):map__41468_41574);
var question_41576 = cljs.core.get.call(null,map__41468_41575__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var pred__41470_41577 = cljs.core._EQ_;
var expr__41471_41578 = "airport";
chart.client.select_airport.call(null);
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

var G__41579 = cljs.core.next.call(null,seq__41417__$1);
var G__41580 = null;
var G__41581 = (0);
var G__41582 = (0);
seq__41417 = G__41579;
chunk__41418 = G__41580;
count__41419 = G__41581;
i__41420 = G__41582;
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
var args41584 = [];
var len__36245__auto___41587 = arguments.length;
var i__36246__auto___41588 = (0);
while(true){
if((i__36246__auto___41588 < len__36245__auto___41587)){
args41584.push((arguments[i__36246__auto___41588]));

var G__41589 = (i__36246__auto___41588 + (1));
i__36246__auto___41588 = G__41589;
continue;
} else {
}
break;
}

var G__41586 = args41584.length;
switch (G__41586) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41584.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__41583_SHARP_){
return chart.client.move_to.call(null,sel,p1__41583_SHARP_);
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
var args41595 = [];
var len__36245__auto___41598 = arguments.length;
var i__36246__auto___41599 = (0);
while(true){
if((i__36246__auto___41599 < len__36245__auto___41598)){
args41595.push((arguments[i__36246__auto___41599]));

var G__41600 = (i__36246__auto___41599 + (1));
i__36246__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var G__41597 = args41595.length;
switch (G__41597) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41595.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__41591_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__41591_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__41592_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__41592_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__41593_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__41593_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__41594_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__41594_SHARP_);
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
var args41605 = [];
var len__36245__auto___41608 = arguments.length;
var i__36246__auto___41609 = (0);
while(true){
if((i__36246__auto___41609 < len__36245__auto___41608)){
args41605.push((arguments[i__36246__auto___41609]));

var G__41610 = (i__36246__auto___41609 + (1));
i__36246__auto___41609 = G__41610;
continue;
} else {
}
break;
}

var G__41607 = args41605.length;
switch (G__41607) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41605.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__41602_SHARP_){
return chart.client.question.call(null,sel,p1__41602_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__41603_SHARP_){
return chart.client.question.call(null,pred,sel,p1__41603_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__41604_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__41604_SHARP_);
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
var pred__41615_41618 = cljs.core._EQ_;
var expr__41616_41619 = cmd;
if(cljs.core.truth_(pred__41615_41618.call(null,"commands",expr__41616_41619))){
} else {
if(cljs.core.truth_(pred__41615_41618.call(null,"watch-visible",expr__41616_41619))){
var bnd_41620 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_41621 = [cljs.core.str("?n="),cljs.core.str(bnd_41620.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_41620.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_41620.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_41620.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_41621)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__41615_41618.call(null,"move-to",expr__41616_41619))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__41615_41618.call(null,"schedule",expr__41616_41619))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__41615_41618.call(null,"question",expr__41616_41619))){
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
}catch (e41623){if((e41623 instanceof Error)){
var e_41624 = e41623;
cljs.core.println.call(null,e_41624);
} else {
throw e41623;

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