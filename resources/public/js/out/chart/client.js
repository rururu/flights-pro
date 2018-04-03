// Compiled by ClojureScript 1.9.521 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('csasync.proc');
goog.require('chart.controls');
goog.require('carr.move');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('ask.master');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greenpln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/river.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/edu.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/landmark.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/city.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greypln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/event.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/waterbody.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/r.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/isle.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/place3.jpeg")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/railwaystation.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/mountain.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/bluepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/airport.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/purplepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/b.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/info.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__27184 = response;
var map__27184__$1 = ((((!((map__27184 == null)))?((((map__27184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27184):map__27184);
var status = cljs.core.get.call(null,map__27184__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27184__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.ONBOARD = "MANUAL";
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_27192 = cljs.core.deref.call(null,vmp);
var mrk_27193 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_27192);
var vec__27189_27194 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_27192);
var lat_27195 = cljs.core.nth.call(null,vec__27189_27194,(0),null);
var lon_27196 = cljs.core.nth.call(null,vec__27189_27194,(1),null);
var pos_27197 = (new L.LatLng(lat_27195,lon_27196));
mrk_27193.setLatLng(pos_27197);

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
var seq__27202_27206 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27203_27207 = null;
var count__27204_27208 = (0);
var i__27205_27209 = (0);
while(true){
if((i__27205_27209 < count__27204_27208)){
var veh_27210 = cljs.core._nth.call(null,chunk__27203_27207,i__27205_27209);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27210)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27210)));

var G__27211 = seq__27202_27206;
var G__27212 = chunk__27203_27207;
var G__27213 = count__27204_27208;
var G__27214 = (i__27205_27209 + (1));
seq__27202_27206 = G__27211;
chunk__27203_27207 = G__27212;
count__27204_27208 = G__27213;
i__27205_27209 = G__27214;
continue;
} else {
var temp__4657__auto___27215 = cljs.core.seq.call(null,seq__27202_27206);
if(temp__4657__auto___27215){
var seq__27202_27216__$1 = temp__4657__auto___27215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27202_27216__$1)){
var c__23782__auto___27217 = cljs.core.chunk_first.call(null,seq__27202_27216__$1);
var G__27218 = cljs.core.chunk_rest.call(null,seq__27202_27216__$1);
var G__27219 = c__23782__auto___27217;
var G__27220 = cljs.core.count.call(null,c__23782__auto___27217);
var G__27221 = (0);
seq__27202_27206 = G__27218;
chunk__27203_27207 = G__27219;
count__27204_27208 = G__27220;
i__27205_27209 = G__27221;
continue;
} else {
var veh_27222 = cljs.core.first.call(null,seq__27202_27216__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27222)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27222)));

var G__27223 = cljs.core.next.call(null,seq__27202_27216__$1);
var G__27224 = null;
var G__27225 = (0);
var G__27226 = (0);
seq__27202_27206 = G__27223;
chunk__27203_27207 = G__27224;
count__27204_27208 = G__27225;
i__27205_27209 = G__27226;
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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("info?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__27231 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27231,(0),null);
var lon = cljs.core.nth.call(null,vec__27231,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__27231,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27231,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27227_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27227_SHARP_))),e.target);
});})(vec__27231,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27231,lat,lon,pos,ico,opt,mrk__$1))
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
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO),null));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__22963__auto__ = url_ico;
if(cljs.core.truth_(or__22963__auto__)){
return or__22963__auto__;
} else {
var or__22963__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__22963__auto____$1)){
return or__22963__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pm"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(iname)].join(''));
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
var seq__27238_27242 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__27239_27243 = null;
var count__27240_27244 = (0);
var i__27241_27245 = (0);
while(true){
if((i__27241_27245 < count__27240_27244)){
var mrk_27246 = cljs.core._nth.call(null,chunk__27239_27243,i__27241_27245);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27246);

var G__27247 = seq__27238_27242;
var G__27248 = chunk__27239_27243;
var G__27249 = count__27240_27244;
var G__27250 = (i__27241_27245 + (1));
seq__27238_27242 = G__27247;
chunk__27239_27243 = G__27248;
count__27240_27244 = G__27249;
i__27241_27245 = G__27250;
continue;
} else {
var temp__4657__auto___27251 = cljs.core.seq.call(null,seq__27238_27242);
if(temp__4657__auto___27251){
var seq__27238_27252__$1 = temp__4657__auto___27251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27238_27252__$1)){
var c__23782__auto___27253 = cljs.core.chunk_first.call(null,seq__27238_27252__$1);
var G__27254 = cljs.core.chunk_rest.call(null,seq__27238_27252__$1);
var G__27255 = c__23782__auto___27253;
var G__27256 = cljs.core.count.call(null,c__23782__auto___27253);
var G__27257 = (0);
seq__27238_27242 = G__27254;
chunk__27239_27243 = G__27255;
count__27240_27244 = G__27256;
i__27241_27245 = G__27257;
continue;
} else {
var mrk_27258 = cljs.core.first.call(null,seq__27238_27252__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27258);

var G__27259 = cljs.core.next.call(null,seq__27238_27252__$1);
var G__27260 = null;
var G__27261 = (0);
var G__27262 = (0);
seq__27238_27242 = G__27259;
chunk__27239_27243 = G__27260;
count__27240_27244 = G__27261;
i__27241_27245 = G__27262;
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
var args27263 = [];
var len__24076__auto___27269 = arguments.length;
var i__24077__auto___27270 = (0);
while(true){
if((i__24077__auto___27270 < len__24076__auto___27269)){
args27263.push((arguments[i__24077__auto___27270]));

var G__27271 = (i__24077__auto___27270 + (1));
i__24077__auto___27270 = G__27271;
continue;
} else {
}
break;
}

var G__27265 = args27263.length;
switch (G__27265) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27263.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27266 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27266,(0),null);
var lon = cljs.core.nth.call(null,vec__27266,(1),null);
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
return (function (p1__27273_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__27273_SHARP_),cljs.core.second.call(null,p1__27273_SHARP_)));
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
var vec__27277 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__27277,(0),null);
var s = cljs.core.nth.call(null,vec__27277,(1),null);
var w = cljs.core.nth.call(null,vec__27277,(2),null);
var e = cljs.core.nth.call(null,vec__27277,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__27277,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__27277,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__27280,zoom,lock){
var vec__27284 = p__27280;
var lat = cljs.core.nth.call(null,vec__27284,(0),null);
var lon = cljs.core.nth.call(null,vec__27284,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__22963__auto__ = zoom;
if(cljs.core.truth_(or__22963__auto__)){
return or__22963__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__27287_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__27287_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__27288_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__27288_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__27289_SHARP_){
return p1__27289_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__27290,ops){
var vec__27294 = p__27290;
var id1 = cljs.core.nth.call(null,vec__27294,(0),null);
var id2 = cljs.core.nth.call(null,vec__27294,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(titl),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<table>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Dmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" m</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Tmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" min</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Alt-diff</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(adif),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ft</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</table>")].join('');
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
var args27298 = [];
var len__24076__auto___27301 = arguments.length;
var i__24077__auto___27302 = (0);
while(true){
if((i__24077__auto___27302 < len__24076__auto___27301)){
args27298.push((arguments[i__24077__auto___27302]));

var G__27303 = (i__24077__auto___27302 + (1));
i__24077__auto___27302 = G__27303;
continue;
} else {
}
break;
}

var G__27300 = args27298.length;
switch (G__27300) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27298.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27297_SHARP_){
return chart.client.select_airport.call(null,sel,p1__27297_SHARP_);
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
var seq__27365 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__27366 = null;
var count__27367 = (0);
var i__27368 = (0);
while(true){
if((i__27368 < count__27367)){
var map__27369 = cljs.core._nth.call(null,chunk__27366,i__27368);
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var ins = map__27369__$1;
var instruct = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27371_27425 = cljs.core._EQ_;
var expr__27372_27426 = instruct;
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27372_27426))){
var map__27374_27427 = ins;
var map__27374_27428__$1 = ((((!((map__27374_27427 == null)))?((((map__27374_27427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27374_27427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27374_27427):map__27374_27427);
var id_27429 = cljs.core.get.call(null,map__27374_27428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27430 = cljs.core.get.call(null,map__27374_27428__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27429,vehicle_27430);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27372_27426))){
var map__27376_27431 = ins;
var map__27376_27432__$1 = ((((!((map__27376_27431 == null)))?((((map__27376_27431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27376_27431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376_27431):map__27376_27431);
var id_27433 = cljs.core.get.call(null,map__27376_27432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27433);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27372_27426))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27372_27426))){
var map__27378_27434 = ins;
var map__27378_27435__$1 = ((((!((map__27378_27434 == null)))?((((map__27378_27434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27378_27434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378_27434):map__27378_27434);
var id_27436 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27437 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27438 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27439 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27440 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27441 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27442 = cljs.core.get.call(null,map__27378_27435__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27436)){
chart.client.popup.call(null,id_27436,html_27439,time_27440);
} else {
if(cljs.core.truth_((function (){var and__22951__auto__ = width_27441;
if(cljs.core.truth_(and__22951__auto__)){
var and__22951__auto____$1 = height_27442;
if(cljs.core.truth_(and__22951__auto____$1)){
var and__22951__auto____$2 = lat_27437;
if(cljs.core.truth_(and__22951__auto____$2)){
return lon_27438;
} else {
return and__22951__auto____$2;
}
} else {
return and__22951__auto____$1;
}
} else {
return and__22951__auto__;
}
})())){
chart.client.popup.call(null,lat_27437,lon_27438,html_27439,time_27440,width_27441,height_27442);
} else {
if(cljs.core.truth_((function (){var and__22951__auto__ = lat_27437;
if(cljs.core.truth_(and__22951__auto__)){
return lon_27438;
} else {
return and__22951__auto__;
}
})())){
chart.client.popup.call(null,lat_27437,lon_27438,html_27439,time_27440);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27372_27426))){
var map__27380_27443 = ins;
var map__27380_27444__$1 = ((((!((map__27380_27443 == null)))?((((map__27380_27443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27380_27443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27380_27443):map__27380_27443);
var id_27445 = cljs.core.get.call(null,map__27380_27444__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27446 = cljs.core.get.call(null,map__27380_27444__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27447 = cljs.core.get.call(null,map__27380_27444__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27448 = cljs.core.get.call(null,map__27380_27444__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27445,points_27446,options_27447,time_27448);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27372_27426))){
var map__27382_27449 = ins;
var map__27382_27450__$1 = ((((!((map__27382_27449 == null)))?((((map__27382_27449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27382_27449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27382_27449):map__27382_27449);
var coord_27451 = cljs.core.get.call(null,map__27382_27450__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27452 = cljs.core.get.call(null,map__27382_27450__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27453 = cljs.core.get.call(null,map__27382_27450__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27451,zoom_27452,lock_27453);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27372_27426))){
var map__27384_27454 = ins;
var map__27384_27455__$1 = ((((!((map__27384_27454 == null)))?((((map__27384_27454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27384_27454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27384_27454):map__27384_27454);
var iname_27456 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27457 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27458 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27459 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27460 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27461 = cljs.core.get.call(null,map__27384_27455__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27456,tip_27457,lat_27458,lon_27459,feature_27460,url_ico_27461);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27372_27426))){
var map__27386_27462 = ins;
var map__27386_27463__$1 = ((((!((map__27386_27462 == null)))?((((map__27386_27462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27386_27462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27386_27462):map__27386_27462);
var iname_27464 = cljs.core.get.call(null,map__27386_27463__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27464);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27372_27426))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27372_27426))){
var map__27388_27465 = ins;
var map__27388_27466__$1 = ((((!((map__27388_27465 == null)))?((((map__27388_27465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27388_27465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27388_27465):map__27388_27465);
var ids_27467 = cljs.core.get.call(null,map__27388_27466__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27468 = cljs.core.get.call(null,map__27388_27466__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27467,options_27468);
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27372_27426))){
var map__27390_27469 = ins;
var map__27390_27470__$1 = ((((!((map__27390_27469 == null)))?((((map__27390_27469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27390_27469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27390_27469):map__27390_27469);
var question_27471 = cljs.core.get.call(null,map__27390_27470__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27472 = cljs.core.get.call(null,map__27390_27470__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27392_27473 = cljs.core._EQ_;
var expr__27393_27474 = question_27471;
if(cljs.core.truth_(pred__27392_27473.call(null,"city",expr__27393_27474))){
chart.client.select_city.call(null,param_27472);
} else {
if(cljs.core.truth_(pred__27392_27473.call(null,"airport",expr__27393_27474))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27393_27474)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__27371_27425.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__27372_27426))){
var map__27395_27475 = ins;
var map__27395_27476__$1 = ((((!((map__27395_27475 == null)))?((((map__27395_27475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27395_27475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27395_27475):map__27395_27475);
var callsign_27477 = cljs.core.get.call(null,map__27395_27476__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_27477;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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
}

var G__27478 = seq__27365;
var G__27479 = chunk__27366;
var G__27480 = count__27367;
var G__27481 = (i__27368 + (1));
seq__27365 = G__27478;
chunk__27366 = G__27479;
count__27367 = G__27480;
i__27368 = G__27481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27365);
if(temp__4657__auto__){
var seq__27365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27365__$1)){
var c__23782__auto__ = cljs.core.chunk_first.call(null,seq__27365__$1);
var G__27482 = cljs.core.chunk_rest.call(null,seq__27365__$1);
var G__27483 = c__23782__auto__;
var G__27484 = cljs.core.count.call(null,c__23782__auto__);
var G__27485 = (0);
seq__27365 = G__27482;
chunk__27366 = G__27483;
count__27367 = G__27484;
i__27368 = G__27485;
continue;
} else {
var map__27397 = cljs.core.first.call(null,seq__27365__$1);
var map__27397__$1 = ((((!((map__27397 == null)))?((((map__27397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27397):map__27397);
var ins = map__27397__$1;
var instruct = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27399_27486 = cljs.core._EQ_;
var expr__27400_27487 = instruct;
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27400_27487))){
var map__27402_27488 = ins;
var map__27402_27489__$1 = ((((!((map__27402_27488 == null)))?((((map__27402_27488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27402_27488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402_27488):map__27402_27488);
var id_27490 = cljs.core.get.call(null,map__27402_27489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27491 = cljs.core.get.call(null,map__27402_27489__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27490,vehicle_27491);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27400_27487))){
var map__27404_27492 = ins;
var map__27404_27493__$1 = ((((!((map__27404_27492 == null)))?((((map__27404_27492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27404_27492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404_27492):map__27404_27492);
var id_27494 = cljs.core.get.call(null,map__27404_27493__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27494);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27400_27487))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27400_27487))){
var map__27406_27495 = ins;
var map__27406_27496__$1 = ((((!((map__27406_27495 == null)))?((((map__27406_27495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406_27495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406_27495):map__27406_27495);
var id_27497 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27498 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27499 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27500 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27501 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27502 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27503 = cljs.core.get.call(null,map__27406_27496__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27497)){
chart.client.popup.call(null,id_27497,html_27500,time_27501);
} else {
if(cljs.core.truth_((function (){var and__22951__auto__ = width_27502;
if(cljs.core.truth_(and__22951__auto__)){
var and__22951__auto____$1 = height_27503;
if(cljs.core.truth_(and__22951__auto____$1)){
var and__22951__auto____$2 = lat_27498;
if(cljs.core.truth_(and__22951__auto____$2)){
return lon_27499;
} else {
return and__22951__auto____$2;
}
} else {
return and__22951__auto____$1;
}
} else {
return and__22951__auto__;
}
})())){
chart.client.popup.call(null,lat_27498,lon_27499,html_27500,time_27501,width_27502,height_27503);
} else {
if(cljs.core.truth_((function (){var and__22951__auto__ = lat_27498;
if(cljs.core.truth_(and__22951__auto__)){
return lon_27499;
} else {
return and__22951__auto__;
}
})())){
chart.client.popup.call(null,lat_27498,lon_27499,html_27500,time_27501);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27400_27487))){
var map__27408_27504 = ins;
var map__27408_27505__$1 = ((((!((map__27408_27504 == null)))?((((map__27408_27504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408_27504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408_27504):map__27408_27504);
var id_27506 = cljs.core.get.call(null,map__27408_27505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27507 = cljs.core.get.call(null,map__27408_27505__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27508 = cljs.core.get.call(null,map__27408_27505__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27509 = cljs.core.get.call(null,map__27408_27505__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27506,points_27507,options_27508,time_27509);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27400_27487))){
var map__27410_27510 = ins;
var map__27410_27511__$1 = ((((!((map__27410_27510 == null)))?((((map__27410_27510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27410_27510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410_27510):map__27410_27510);
var coord_27512 = cljs.core.get.call(null,map__27410_27511__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27513 = cljs.core.get.call(null,map__27410_27511__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27514 = cljs.core.get.call(null,map__27410_27511__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27512,zoom_27513,lock_27514);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27400_27487))){
var map__27412_27515 = ins;
var map__27412_27516__$1 = ((((!((map__27412_27515 == null)))?((((map__27412_27515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412_27515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412_27515):map__27412_27515);
var iname_27517 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27518 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27519 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27520 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27521 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27522 = cljs.core.get.call(null,map__27412_27516__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27517,tip_27518,lat_27519,lon_27520,feature_27521,url_ico_27522);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27400_27487))){
var map__27414_27523 = ins;
var map__27414_27524__$1 = ((((!((map__27414_27523 == null)))?((((map__27414_27523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27414_27523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27414_27523):map__27414_27523);
var iname_27525 = cljs.core.get.call(null,map__27414_27524__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27525);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27400_27487))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27400_27487))){
var map__27416_27526 = ins;
var map__27416_27527__$1 = ((((!((map__27416_27526 == null)))?((((map__27416_27526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27416_27526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27416_27526):map__27416_27526);
var ids_27528 = cljs.core.get.call(null,map__27416_27527__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27529 = cljs.core.get.call(null,map__27416_27527__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27528,options_27529);
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27400_27487))){
var map__27418_27530 = ins;
var map__27418_27531__$1 = ((((!((map__27418_27530 == null)))?((((map__27418_27530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27418_27530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418_27530):map__27418_27530);
var question_27532 = cljs.core.get.call(null,map__27418_27531__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27533 = cljs.core.get.call(null,map__27418_27531__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27420_27534 = cljs.core._EQ_;
var expr__27421_27535 = question_27532;
if(cljs.core.truth_(pred__27420_27534.call(null,"city",expr__27421_27535))){
chart.client.select_city.call(null,param_27533);
} else {
if(cljs.core.truth_(pred__27420_27534.call(null,"airport",expr__27421_27535))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27421_27535)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__27399_27486.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__27400_27487))){
var map__27423_27536 = ins;
var map__27423_27537__$1 = ((((!((map__27423_27536 == null)))?((((map__27423_27536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27423_27536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27423_27536):map__27423_27536);
var callsign_27538 = cljs.core.get.call(null,map__27423_27537__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_27538;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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
}

var G__27539 = cljs.core.next.call(null,seq__27365__$1);
var G__27540 = null;
var G__27541 = (0);
var G__27542 = (0);
seq__27365 = G__27539;
chunk__27366 = G__27540;
count__27367 = G__27541;
i__27368 = G__27542;
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
var args27544 = [];
var len__24076__auto___27547 = arguments.length;
var i__24077__auto___27548 = (0);
while(true){
if((i__24077__auto___27548 < len__24076__auto___27547)){
args27544.push((arguments[i__24077__auto___27548]));

var G__27549 = (i__24077__auto___27548 + (1));
i__24077__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var G__27546 = args27544.length;
switch (G__27546) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27544.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27543_SHARP_){
return chart.client.move_to.call(null,sel,p1__27543_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?country="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("move-to"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args27555 = [];
var len__24076__auto___27558 = arguments.length;
var i__24077__auto___27559 = (0);
while(true){
if((i__24077__auto___27559 < len__24076__auto___27558)){
args27555.push((arguments[i__24077__auto___27559]));

var G__27560 = (i__24077__auto___27559 + (1));
i__24077__auto___27559 = G__27560;
continue;
} else {
}
break;
}

var G__27557 = args27555.length;
switch (G__27557) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27555.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27551_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__27551_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27552_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__27552_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27553_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__27553_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27554_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__27554_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?callsign="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(call),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&time="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tim),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(apt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("schedule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args27565 = [];
var len__24076__auto___27568 = arguments.length;
var i__24077__auto___27569 = (0);
while(true){
if((i__24077__auto___27569 < len__24076__auto___27568)){
args27565.push((arguments[i__24077__auto___27569]));

var G__27570 = (i__24077__auto___27569 + (1));
i__24077__auto___27569 = G__27570;
continue;
} else {
}
break;
}

var G__27567 = args27565.length;
switch (G__27567) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27565.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__27562_SHARP_){
return chart.client.question.call(null,sel,p1__27562_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__27563_SHARP_){
return chart.client.question.call(null,pred,sel,p1__27563_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__27564_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__27564_SHARP_);
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
var pred__27575_27578 = cljs.core._EQ_;
var expr__27576_27579 = cmd;
if(cljs.core.truth_(pred__27575_27578.call(null,"commands",expr__27576_27579))){
} else {
if(cljs.core.truth_(pred__27575_27578.call(null,"watch-visible",expr__27576_27579))){
var bnd_27580 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_27581 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27580.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27580.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27580.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27580.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_27581)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__27575_27578.call(null,"move-to",expr__27576_27579))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__27575_27578.call(null,"schedule",expr__27576_27579))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__27575_27578.call(null,"question",expr__27576_27579))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)].join(''),chart.client.no_handler);
}
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.mouse_click = (function chart$client$mouse_click(lat,lng){
var htm = ((cljs.core._EQ_.call(null,chart.client.ONBOARD,"MANUAL"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("MANUAL instantly goes to this location?<br><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<input type='button' \n\t value='Go!'\n\t style='color:blue;display:block;margin:auto;'\n\t onclick='chart.client.mangoinst("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")' >")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Now on board "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.ONBOARD)].join(''));
return chart.client.popup.call(null,lat,lng,htm,(8000),(240),(100));
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
}catch (e27583){if((e27583 instanceof Error)){
var e_27584 = e27583;
cljs.core.println.call(null,e_27584);
} else {
throw e27583;

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

m.on("click",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.client.mouse_click.call(null,e.latlng.lat,e.latlng.lng);
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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("follow?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("trail?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.mangoinst = (function chart$client$mangoinst(lat,lon){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("goto?lat="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&lon="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&from=CHART")].join(''));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map