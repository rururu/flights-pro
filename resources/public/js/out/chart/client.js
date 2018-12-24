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
var map__12195 = response;
var map__12195__$1 = ((((!((map__12195 == null)))?((((map__12195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12195):map__12195);
var status = cljs.core.get.call(null,map__12195__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12195__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_12203 = cljs.core.deref.call(null,vmp);
var mrk_12204 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_12203);
var vec__12200_12205 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_12203);
var lat_12206 = cljs.core.nth.call(null,vec__12200_12205,(0),null);
var lon_12207 = cljs.core.nth.call(null,vec__12200_12205,(1),null);
var pos_12208 = (new L.LatLng(lat_12206,lon_12207));
mrk_12204.setLatLng(pos_12208);

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
var seq__12213_12217 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__12214_12218 = null;
var count__12215_12219 = (0);
var i__12216_12220 = (0);
while(true){
if((i__12216_12220 < count__12215_12219)){
var veh_12221 = cljs.core._nth.call(null,chunk__12214_12218,i__12216_12220);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_12221)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_12221)));

var G__12222 = seq__12213_12217;
var G__12223 = chunk__12214_12218;
var G__12224 = count__12215_12219;
var G__12225 = (i__12216_12220 + (1));
seq__12213_12217 = G__12222;
chunk__12214_12218 = G__12223;
count__12215_12219 = G__12224;
i__12216_12220 = G__12225;
continue;
} else {
var temp__4657__auto___12226 = cljs.core.seq.call(null,seq__12213_12217);
if(temp__4657__auto___12226){
var seq__12213_12227__$1 = temp__4657__auto___12226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12213_12227__$1)){
var c__9736__auto___12228 = cljs.core.chunk_first.call(null,seq__12213_12227__$1);
var G__12229 = cljs.core.chunk_rest.call(null,seq__12213_12227__$1);
var G__12230 = c__9736__auto___12228;
var G__12231 = cljs.core.count.call(null,c__9736__auto___12228);
var G__12232 = (0);
seq__12213_12217 = G__12229;
chunk__12214_12218 = G__12230;
count__12215_12219 = G__12231;
i__12216_12220 = G__12232;
continue;
} else {
var veh_12233 = cljs.core.first.call(null,seq__12213_12227__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_12233)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_12233)));

var G__12234 = cljs.core.next.call(null,seq__12213_12227__$1);
var G__12235 = null;
var G__12236 = (0);
var G__12237 = (0);
seq__12213_12217 = G__12234;
chunk__12214_12218 = G__12235;
count__12215_12219 = G__12236;
i__12216_12220 = G__12237;
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

var vec__12242 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__12242,(0),null);
var lon = cljs.core.nth.call(null,vec__12242,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__12242,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__12242,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__12238_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__12238_SHARP_))),e.target);
});})(vec__12242,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__12242,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__8917__auto__ = url_ico;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
var or__8917__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8917__auto____$1)){
return or__8917__auto____$1;
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
var seq__12249_12253 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__12250_12254 = null;
var count__12251_12255 = (0);
var i__12252_12256 = (0);
while(true){
if((i__12252_12256 < count__12251_12255)){
var mrk_12257 = cljs.core._nth.call(null,chunk__12250_12254,i__12252_12256);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_12257);

var G__12258 = seq__12249_12253;
var G__12259 = chunk__12250_12254;
var G__12260 = count__12251_12255;
var G__12261 = (i__12252_12256 + (1));
seq__12249_12253 = G__12258;
chunk__12250_12254 = G__12259;
count__12251_12255 = G__12260;
i__12252_12256 = G__12261;
continue;
} else {
var temp__4657__auto___12262 = cljs.core.seq.call(null,seq__12249_12253);
if(temp__4657__auto___12262){
var seq__12249_12263__$1 = temp__4657__auto___12262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12249_12263__$1)){
var c__9736__auto___12264 = cljs.core.chunk_first.call(null,seq__12249_12263__$1);
var G__12265 = cljs.core.chunk_rest.call(null,seq__12249_12263__$1);
var G__12266 = c__9736__auto___12264;
var G__12267 = cljs.core.count.call(null,c__9736__auto___12264);
var G__12268 = (0);
seq__12249_12253 = G__12265;
chunk__12250_12254 = G__12266;
count__12251_12255 = G__12267;
i__12252_12256 = G__12268;
continue;
} else {
var mrk_12269 = cljs.core.first.call(null,seq__12249_12263__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_12269);

var G__12270 = cljs.core.next.call(null,seq__12249_12263__$1);
var G__12271 = null;
var G__12272 = (0);
var G__12273 = (0);
seq__12249_12253 = G__12270;
chunk__12250_12254 = G__12271;
count__12251_12255 = G__12272;
i__12252_12256 = G__12273;
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
var args12274 = [];
var len__10030__auto___12280 = arguments.length;
var i__10031__auto___12281 = (0);
while(true){
if((i__10031__auto___12281 < len__10030__auto___12280)){
args12274.push((arguments[i__10031__auto___12281]));

var G__12282 = (i__10031__auto___12281 + (1));
i__10031__auto___12281 = G__12282;
continue;
} else {
}
break;
}

var G__12276 = args12274.length;
switch (G__12276) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12274.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__12277 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__12277,(0),null);
var lon = cljs.core.nth.call(null,vec__12277,(1),null);
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
return (function (p1__12284_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__12284_SHARP_),cljs.core.second.call(null,p1__12284_SHARP_)));
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
var vec__12288 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12288,(0),null);
var s = cljs.core.nth.call(null,vec__12288,(1),null);
var w = cljs.core.nth.call(null,vec__12288,(2),null);
var e = cljs.core.nth.call(null,vec__12288,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__12288,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__12288,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__12291,zoom,lock){
var vec__12295 = p__12291;
var lat = cljs.core.nth.call(null,vec__12295,(0),null);
var lon = cljs.core.nth.call(null,vec__12295,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__8917__auto__ = zoom;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__12298_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__12298_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__12299_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__12299_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__12300_SHARP_){
return p1__12300_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__12301,ops){
var vec__12305 = p__12301;
var id1 = cljs.core.nth.call(null,vec__12305,(0),null);
var id2 = cljs.core.nth.call(null,vec__12305,(1),null);
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
var args12309 = [];
var len__10030__auto___12312 = arguments.length;
var i__10031__auto___12313 = (0);
while(true){
if((i__10031__auto___12313 < len__10030__auto___12312)){
args12309.push((arguments[i__10031__auto___12313]));

var G__12314 = (i__10031__auto___12313 + (1));
i__10031__auto___12313 = G__12314;
continue;
} else {
}
break;
}

var G__12311 = args12309.length;
switch (G__12311) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12309.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__12308_SHARP_){
return chart.client.select_airport.call(null,sel,p1__12308_SHARP_);
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
var seq__12376 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__12377 = null;
var count__12378 = (0);
var i__12379 = (0);
while(true){
if((i__12379 < count__12378)){
var map__12380 = cljs.core._nth.call(null,chunk__12377,i__12379);
var map__12380__$1 = ((((!((map__12380 == null)))?((((map__12380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12380):map__12380);
var ins = map__12380__$1;
var instruct = cljs.core.get.call(null,map__12380__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__12382_12436 = cljs.core._EQ_;
var expr__12383_12437 = instruct;
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__12383_12437))){
var map__12385_12438 = ins;
var map__12385_12439__$1 = ((((!((map__12385_12438 == null)))?((((map__12385_12438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12385_12438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12385_12438):map__12385_12438);
var id_12440 = cljs.core.get.call(null,map__12385_12439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_12441 = cljs.core.get.call(null,map__12385_12439__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_12440,vehicle_12441);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__12383_12437))){
var map__12387_12442 = ins;
var map__12387_12443__$1 = ((((!((map__12387_12442 == null)))?((((map__12387_12442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12387_12442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12387_12442):map__12387_12442);
var id_12444 = cljs.core.get.call(null,map__12387_12443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_12444);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__12383_12437))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__12383_12437))){
var map__12389_12445 = ins;
var map__12389_12446__$1 = ((((!((map__12389_12445 == null)))?((((map__12389_12445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12389_12445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12389_12445):map__12389_12445);
var id_12447 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12448 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12449 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12450 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12451 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_12452 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_12453 = cljs.core.get.call(null,map__12389_12446__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_12447)){
chart.client.popup.call(null,id_12447,html_12450,time_12451);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = width_12452;
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = height_12453;
if(cljs.core.truth_(and__8905__auto____$1)){
var and__8905__auto____$2 = lat_12448;
if(cljs.core.truth_(and__8905__auto____$2)){
return lon_12449;
} else {
return and__8905__auto____$2;
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_12448,lon_12449,html_12450,time_12451,width_12452,height_12453);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = lat_12448;
if(cljs.core.truth_(and__8905__auto__)){
return lon_12449;
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_12448,lon_12449,html_12450,time_12451);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__12383_12437))){
var map__12391_12454 = ins;
var map__12391_12455__$1 = ((((!((map__12391_12454 == null)))?((((map__12391_12454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12391_12454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12391_12454):map__12391_12454);
var id_12456 = cljs.core.get.call(null,map__12391_12455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_12457 = cljs.core.get.call(null,map__12391_12455__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_12458 = cljs.core.get.call(null,map__12391_12455__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12459 = cljs.core.get.call(null,map__12391_12455__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_12456,points_12457,options_12458,time_12459);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__12383_12437))){
var map__12393_12460 = ins;
var map__12393_12461__$1 = ((((!((map__12393_12460 == null)))?((((map__12393_12460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12393_12460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12393_12460):map__12393_12460);
var coord_12462 = cljs.core.get.call(null,map__12393_12461__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_12463 = cljs.core.get.call(null,map__12393_12461__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_12464 = cljs.core.get.call(null,map__12393_12461__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_12462,zoom_12463,lock_12464);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12383_12437))){
var map__12395_12465 = ins;
var map__12395_12466__$1 = ((((!((map__12395_12465 == null)))?((((map__12395_12465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12395_12465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12395_12465):map__12395_12465);
var iname_12467 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_12468 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_12469 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12470 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_12471 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_12472 = cljs.core.get.call(null,map__12395_12466__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_12467,tip_12468,lat_12469,lon_12470,feature_12471,url_ico_12472);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__12383_12437))){
var map__12397_12473 = ins;
var map__12397_12474__$1 = ((((!((map__12397_12473 == null)))?((((map__12397_12473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12397_12473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12397_12473):map__12397_12473);
var iname_12475 = cljs.core.get.call(null,map__12397_12474__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_12475);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12383_12437))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12383_12437))){
var map__12399_12476 = ins;
var map__12399_12477__$1 = ((((!((map__12399_12476 == null)))?((((map__12399_12476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12399_12476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12399_12476):map__12399_12476);
var ids_12478 = cljs.core.get.call(null,map__12399_12477__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12479 = cljs.core.get.call(null,map__12399_12477__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_12478,options_12479);
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__12383_12437))){
var map__12401_12480 = ins;
var map__12401_12481__$1 = ((((!((map__12401_12480 == null)))?((((map__12401_12480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12401_12480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12401_12480):map__12401_12480);
var question_12482 = cljs.core.get.call(null,map__12401_12481__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_12483 = cljs.core.get.call(null,map__12401_12481__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__12403_12484 = cljs.core._EQ_;
var expr__12404_12485 = question_12482;
if(cljs.core.truth_(pred__12403_12484.call(null,"city",expr__12404_12485))){
chart.client.select_city.call(null,param_12483);
} else {
if(cljs.core.truth_(pred__12403_12484.call(null,"airport",expr__12404_12485))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12404_12485)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__12382_12436.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__12383_12437))){
var map__12406_12486 = ins;
var map__12406_12487__$1 = ((((!((map__12406_12486 == null)))?((((map__12406_12486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12406_12486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12406_12486):map__12406_12486);
var callsign_12488 = cljs.core.get.call(null,map__12406_12487__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_12488;
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

var G__12489 = seq__12376;
var G__12490 = chunk__12377;
var G__12491 = count__12378;
var G__12492 = (i__12379 + (1));
seq__12376 = G__12489;
chunk__12377 = G__12490;
count__12378 = G__12491;
i__12379 = G__12492;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12376);
if(temp__4657__auto__){
var seq__12376__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12376__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__12376__$1);
var G__12493 = cljs.core.chunk_rest.call(null,seq__12376__$1);
var G__12494 = c__9736__auto__;
var G__12495 = cljs.core.count.call(null,c__9736__auto__);
var G__12496 = (0);
seq__12376 = G__12493;
chunk__12377 = G__12494;
count__12378 = G__12495;
i__12379 = G__12496;
continue;
} else {
var map__12408 = cljs.core.first.call(null,seq__12376__$1);
var map__12408__$1 = ((((!((map__12408 == null)))?((((map__12408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12408):map__12408);
var ins = map__12408__$1;
var instruct = cljs.core.get.call(null,map__12408__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__12410_12497 = cljs.core._EQ_;
var expr__12411_12498 = instruct;
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__12411_12498))){
var map__12413_12499 = ins;
var map__12413_12500__$1 = ((((!((map__12413_12499 == null)))?((((map__12413_12499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12413_12499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12413_12499):map__12413_12499);
var id_12501 = cljs.core.get.call(null,map__12413_12500__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_12502 = cljs.core.get.call(null,map__12413_12500__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_12501,vehicle_12502);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__12411_12498))){
var map__12415_12503 = ins;
var map__12415_12504__$1 = ((((!((map__12415_12503 == null)))?((((map__12415_12503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12415_12503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12415_12503):map__12415_12503);
var id_12505 = cljs.core.get.call(null,map__12415_12504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_12505);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__12411_12498))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__12411_12498))){
var map__12417_12506 = ins;
var map__12417_12507__$1 = ((((!((map__12417_12506 == null)))?((((map__12417_12506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12417_12506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12417_12506):map__12417_12506);
var id_12508 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12509 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12510 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12511 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12512 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_12513 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_12514 = cljs.core.get.call(null,map__12417_12507__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_12508)){
chart.client.popup.call(null,id_12508,html_12511,time_12512);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = width_12513;
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = height_12514;
if(cljs.core.truth_(and__8905__auto____$1)){
var and__8905__auto____$2 = lat_12509;
if(cljs.core.truth_(and__8905__auto____$2)){
return lon_12510;
} else {
return and__8905__auto____$2;
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_12509,lon_12510,html_12511,time_12512,width_12513,height_12514);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = lat_12509;
if(cljs.core.truth_(and__8905__auto__)){
return lon_12510;
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_12509,lon_12510,html_12511,time_12512);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__12411_12498))){
var map__12419_12515 = ins;
var map__12419_12516__$1 = ((((!((map__12419_12515 == null)))?((((map__12419_12515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12419_12515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12419_12515):map__12419_12515);
var id_12517 = cljs.core.get.call(null,map__12419_12516__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_12518 = cljs.core.get.call(null,map__12419_12516__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_12519 = cljs.core.get.call(null,map__12419_12516__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12520 = cljs.core.get.call(null,map__12419_12516__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_12517,points_12518,options_12519,time_12520);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__12411_12498))){
var map__12421_12521 = ins;
var map__12421_12522__$1 = ((((!((map__12421_12521 == null)))?((((map__12421_12521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12421_12521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12421_12521):map__12421_12521);
var coord_12523 = cljs.core.get.call(null,map__12421_12522__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_12524 = cljs.core.get.call(null,map__12421_12522__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_12525 = cljs.core.get.call(null,map__12421_12522__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_12523,zoom_12524,lock_12525);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12411_12498))){
var map__12423_12526 = ins;
var map__12423_12527__$1 = ((((!((map__12423_12526 == null)))?((((map__12423_12526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12423_12526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423_12526):map__12423_12526);
var iname_12528 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_12529 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_12530 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12531 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_12532 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_12533 = cljs.core.get.call(null,map__12423_12527__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_12528,tip_12529,lat_12530,lon_12531,feature_12532,url_ico_12533);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__12411_12498))){
var map__12425_12534 = ins;
var map__12425_12535__$1 = ((((!((map__12425_12534 == null)))?((((map__12425_12534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12425_12534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12425_12534):map__12425_12534);
var iname_12536 = cljs.core.get.call(null,map__12425_12535__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_12536);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12411_12498))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12411_12498))){
var map__12427_12537 = ins;
var map__12427_12538__$1 = ((((!((map__12427_12537 == null)))?((((map__12427_12537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12427_12537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12427_12537):map__12427_12537);
var ids_12539 = cljs.core.get.call(null,map__12427_12538__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12540 = cljs.core.get.call(null,map__12427_12538__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_12539,options_12540);
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__12411_12498))){
var map__12429_12541 = ins;
var map__12429_12542__$1 = ((((!((map__12429_12541 == null)))?((((map__12429_12541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12429_12541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12429_12541):map__12429_12541);
var question_12543 = cljs.core.get.call(null,map__12429_12542__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_12544 = cljs.core.get.call(null,map__12429_12542__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__12431_12545 = cljs.core._EQ_;
var expr__12432_12546 = question_12543;
if(cljs.core.truth_(pred__12431_12545.call(null,"city",expr__12432_12546))){
chart.client.select_city.call(null,param_12544);
} else {
if(cljs.core.truth_(pred__12431_12545.call(null,"airport",expr__12432_12546))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12432_12546)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__12410_12497.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__12411_12498))){
var map__12434_12547 = ins;
var map__12434_12548__$1 = ((((!((map__12434_12547 == null)))?((((map__12434_12547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12434_12547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12434_12547):map__12434_12547);
var callsign_12549 = cljs.core.get.call(null,map__12434_12548__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_12549;
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

var G__12550 = cljs.core.next.call(null,seq__12376__$1);
var G__12551 = null;
var G__12552 = (0);
var G__12553 = (0);
seq__12376 = G__12550;
chunk__12377 = G__12551;
count__12378 = G__12552;
i__12379 = G__12553;
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
var args12555 = [];
var len__10030__auto___12558 = arguments.length;
var i__10031__auto___12559 = (0);
while(true){
if((i__10031__auto___12559 < len__10030__auto___12558)){
args12555.push((arguments[i__10031__auto___12559]));

var G__12560 = (i__10031__auto___12559 + (1));
i__10031__auto___12559 = G__12560;
continue;
} else {
}
break;
}

var G__12557 = args12555.length;
switch (G__12557) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12555.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__12554_SHARP_){
return chart.client.move_to.call(null,sel,p1__12554_SHARP_);
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
var args12566 = [];
var len__10030__auto___12569 = arguments.length;
var i__10031__auto___12570 = (0);
while(true){
if((i__10031__auto___12570 < len__10030__auto___12569)){
args12566.push((arguments[i__10031__auto___12570]));

var G__12571 = (i__10031__auto___12570 + (1));
i__10031__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var G__12568 = args12566.length;
switch (G__12568) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12566.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__12562_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__12562_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__12563_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__12563_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__12564_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__12564_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__12565_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__12565_SHARP_);
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
var args12576 = [];
var len__10030__auto___12579 = arguments.length;
var i__10031__auto___12580 = (0);
while(true){
if((i__10031__auto___12580 < len__10030__auto___12579)){
args12576.push((arguments[i__10031__auto___12580]));

var G__12581 = (i__10031__auto___12580 + (1));
i__10031__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var G__12578 = args12576.length;
switch (G__12578) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12576.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__12573_SHARP_){
return chart.client.question.call(null,sel,p1__12573_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__12574_SHARP_){
return chart.client.question.call(null,pred,sel,p1__12574_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__12575_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__12575_SHARP_);
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
var pred__12586_12589 = cljs.core._EQ_;
var expr__12587_12590 = cmd;
if(cljs.core.truth_(pred__12586_12589.call(null,"commands",expr__12587_12590))){
} else {
if(cljs.core.truth_(pred__12586_12589.call(null,"watch-visible",expr__12587_12590))){
var bnd_12591 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_12592 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_12591.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_12591.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_12591.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_12591.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_12592)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__12586_12589.call(null,"move-to",expr__12587_12590))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12586_12589.call(null,"schedule",expr__12587_12590))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12586_12589.call(null,"question",expr__12587_12590))){
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
}catch (e12594){if((e12594 instanceof Error)){
var e_12595 = e12594;
cljs.core.println.call(null,e_12595);
} else {
throw e12594;

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