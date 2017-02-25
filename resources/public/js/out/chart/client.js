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
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__24903 = response;
var map__24903__$1 = ((((!((map__24903 == null)))?((((map__24903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24903):map__24903);
var status = cljs.core.get.call(null,map__24903__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24903__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_24911 = cljs.core.deref.call(null,vmp);
var mrk_24912 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_24911);
var vec__24908_24913 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_24911);
var lat_24914 = cljs.core.nth.call(null,vec__24908_24913,(0),null);
var lon_24915 = cljs.core.nth.call(null,vec__24908_24913,(1),null);
var pos_24916 = (new L.LatLng(lat_24914,lon_24915));
mrk_24912.setLatLng(pos_24916);

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
var seq__24921_24925 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__24922_24926 = null;
var count__24923_24927 = (0);
var i__24924_24928 = (0);
while(true){
if((i__24924_24928 < count__24923_24927)){
var veh_24929 = cljs.core._nth.call(null,chunk__24922_24926,i__24924_24928);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24929)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24929)));

var G__24930 = seq__24921_24925;
var G__24931 = chunk__24922_24926;
var G__24932 = count__24923_24927;
var G__24933 = (i__24924_24928 + (1));
seq__24921_24925 = G__24930;
chunk__24922_24926 = G__24931;
count__24923_24927 = G__24932;
i__24924_24928 = G__24933;
continue;
} else {
var temp__4657__auto___24934 = cljs.core.seq.call(null,seq__24921_24925);
if(temp__4657__auto___24934){
var seq__24921_24935__$1 = temp__4657__auto___24934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24921_24935__$1)){
var c__22774__auto___24936 = cljs.core.chunk_first.call(null,seq__24921_24935__$1);
var G__24937 = cljs.core.chunk_rest.call(null,seq__24921_24935__$1);
var G__24938 = c__22774__auto___24936;
var G__24939 = cljs.core.count.call(null,c__22774__auto___24936);
var G__24940 = (0);
seq__24921_24925 = G__24937;
chunk__24922_24926 = G__24938;
count__24923_24927 = G__24939;
i__24924_24928 = G__24940;
continue;
} else {
var veh_24941 = cljs.core.first.call(null,seq__24921_24935__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24941)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24941)));

var G__24942 = cljs.core.next.call(null,seq__24921_24935__$1);
var G__24943 = null;
var G__24944 = (0);
var G__24945 = (0);
seq__24921_24925 = G__24942;
chunk__24922_24926 = G__24943;
count__24923_24927 = G__24944;
i__24924_24928 = G__24945;
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

var vec__24950 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__24950,(0),null);
var lon = cljs.core.nth.call(null,vec__24950,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__24950,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__24950,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__24946_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__24946_SHARP_))),e.target);
});})(vec__24950,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__24950,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__21960__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__21960__auto__)){
return or__21960__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__24957_24961 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__24958_24962 = null;
var count__24959_24963 = (0);
var i__24960_24964 = (0);
while(true){
if((i__24960_24964 < count__24959_24963)){
var mrk_24965 = cljs.core._nth.call(null,chunk__24958_24962,i__24960_24964);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_24965);

var G__24966 = seq__24957_24961;
var G__24967 = chunk__24958_24962;
var G__24968 = count__24959_24963;
var G__24969 = (i__24960_24964 + (1));
seq__24957_24961 = G__24966;
chunk__24958_24962 = G__24967;
count__24959_24963 = G__24968;
i__24960_24964 = G__24969;
continue;
} else {
var temp__4657__auto___24970 = cljs.core.seq.call(null,seq__24957_24961);
if(temp__4657__auto___24970){
var seq__24957_24971__$1 = temp__4657__auto___24970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24957_24971__$1)){
var c__22774__auto___24972 = cljs.core.chunk_first.call(null,seq__24957_24971__$1);
var G__24973 = cljs.core.chunk_rest.call(null,seq__24957_24971__$1);
var G__24974 = c__22774__auto___24972;
var G__24975 = cljs.core.count.call(null,c__22774__auto___24972);
var G__24976 = (0);
seq__24957_24961 = G__24973;
chunk__24958_24962 = G__24974;
count__24959_24963 = G__24975;
i__24960_24964 = G__24976;
continue;
} else {
var mrk_24977 = cljs.core.first.call(null,seq__24957_24971__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_24977);

var G__24978 = cljs.core.next.call(null,seq__24957_24971__$1);
var G__24979 = null;
var G__24980 = (0);
var G__24981 = (0);
seq__24957_24961 = G__24978;
chunk__24958_24962 = G__24979;
count__24959_24963 = G__24980;
i__24960_24964 = G__24981;
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
var args24982 = [];
var len__23068__auto___24988 = arguments.length;
var i__23069__auto___24989 = (0);
while(true){
if((i__23069__auto___24989 < len__23068__auto___24988)){
args24982.push((arguments[i__23069__auto___24989]));

var G__24990 = (i__23069__auto___24989 + (1));
i__23069__auto___24989 = G__24990;
continue;
} else {
}
break;
}

var G__24984 = args24982.length;
switch (G__24984) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24982.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__24985 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__24985,(0),null);
var lon = cljs.core.nth.call(null,vec__24985,(1),null);
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
return (function (p1__24992_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__24992_SHARP_),cljs.core.second.call(null,p1__24992_SHARP_)));
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
var vec__24996 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__24996,(0),null);
var s = cljs.core.nth.call(null,vec__24996,(1),null);
var w = cljs.core.nth.call(null,vec__24996,(2),null);
var e = cljs.core.nth.call(null,vec__24996,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__24996,n,s,w,e,url){
return (function (response){
return null;
});})(vec__24996,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__24999){
var vec__25003 = p__24999;
var lat = cljs.core.nth.call(null,vec__25003,(0),null);
var lon = cljs.core.nth.call(null,vec__25003,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__25006_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__25006_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__25007_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__25007_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__25008_SHARP_){
return p1__25008_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__25009,ops){
var vec__25013 = p__25009;
var id1 = cljs.core.nth.call(null,vec__25013,(0),null);
var id2 = cljs.core.nth.call(null,vec__25013,(1),null);
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
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__25058 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25059 = null;
var count__25060 = (0);
var i__25061 = (0);
while(true){
if((i__25061 < count__25060)){
var map__25062 = cljs.core._nth.call(null,chunk__25059,i__25061);
var map__25062__$1 = ((((!((map__25062 == null)))?((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25062):map__25062);
var ins = map__25062__$1;
var instruct = cljs.core.get.call(null,map__25062__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25064_25100 = cljs.core._EQ_;
var expr__25065_25101 = instruct;
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25065_25101))){
var map__25067_25102 = ins;
var map__25067_25103__$1 = ((((!((map__25067_25102 == null)))?((((map__25067_25102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25067_25102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25067_25102):map__25067_25102);
var id_25104 = cljs.core.get.call(null,map__25067_25103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25105 = cljs.core.get.call(null,map__25067_25103__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25104,vehicle_25105);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25065_25101))){
var map__25069_25106 = ins;
var map__25069_25107__$1 = ((((!((map__25069_25106 == null)))?((((map__25069_25106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25069_25106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069_25106):map__25069_25106);
var id_25108 = cljs.core.get.call(null,map__25069_25107__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25108);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25065_25101))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25065_25101))){
var map__25071_25109 = ins;
var map__25071_25110__$1 = ((((!((map__25071_25109 == null)))?((((map__25071_25109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25071_25109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25071_25109):map__25071_25109);
var id_25111 = cljs.core.get.call(null,map__25071_25110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25112 = cljs.core.get.call(null,map__25071_25110__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25113 = cljs.core.get.call(null,map__25071_25110__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25114 = cljs.core.get.call(null,map__25071_25110__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25115 = cljs.core.get.call(null,map__25071_25110__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25111)){
chart.client.popup.call(null,id_25111,html_25114,time_25115);
} else {
if(cljs.core.truth_((function (){var and__21948__auto__ = lat_25112;
if(cljs.core.truth_(and__21948__auto__)){
return lon_25113;
} else {
return and__21948__auto__;
}
})())){
chart.client.popup.call(null,lat_25112,lon_25113,html_25114,time_25115);
} else {
}
}
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25065_25101))){
var map__25073_25116 = ins;
var map__25073_25117__$1 = ((((!((map__25073_25116 == null)))?((((map__25073_25116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25073_25116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073_25116):map__25073_25116);
var id_25118 = cljs.core.get.call(null,map__25073_25117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25119 = cljs.core.get.call(null,map__25073_25117__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25120 = cljs.core.get.call(null,map__25073_25117__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25121 = cljs.core.get.call(null,map__25073_25117__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25118,points_25119,options_25120,time_25121);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25065_25101))){
var map__25075_25122 = ins;
var map__25075_25123__$1 = ((((!((map__25075_25122 == null)))?((((map__25075_25122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25075_25122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25075_25122):map__25075_25122);
var coord_25124 = cljs.core.get.call(null,map__25075_25123__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_25124);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25065_25101))){
var map__25077_25125 = ins;
var map__25077_25126__$1 = ((((!((map__25077_25125 == null)))?((((map__25077_25125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25077_25125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25077_25125):map__25077_25125);
var iname_25127 = cljs.core.get.call(null,map__25077_25126__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_25128 = cljs.core.get.call(null,map__25077_25126__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25129 = cljs.core.get.call(null,map__25077_25126__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25130 = cljs.core.get.call(null,map__25077_25126__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_25127,lat_25128,lon_25129,feature_25130);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25065_25101))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25064_25100.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25065_25101))){
var map__25079_25131 = ins;
var map__25079_25132__$1 = ((((!((map__25079_25131 == null)))?((((map__25079_25131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25079_25131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25079_25131):map__25079_25131);
var ids_25133 = cljs.core.get.call(null,map__25079_25132__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25134 = cljs.core.get.call(null,map__25079_25132__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25133,options_25134);
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

var G__25135 = seq__25058;
var G__25136 = chunk__25059;
var G__25137 = count__25060;
var G__25138 = (i__25061 + (1));
seq__25058 = G__25135;
chunk__25059 = G__25136;
count__25060 = G__25137;
i__25061 = G__25138;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25058);
if(temp__4657__auto__){
var seq__25058__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25058__$1)){
var c__22774__auto__ = cljs.core.chunk_first.call(null,seq__25058__$1);
var G__25139 = cljs.core.chunk_rest.call(null,seq__25058__$1);
var G__25140 = c__22774__auto__;
var G__25141 = cljs.core.count.call(null,c__22774__auto__);
var G__25142 = (0);
seq__25058 = G__25139;
chunk__25059 = G__25140;
count__25060 = G__25141;
i__25061 = G__25142;
continue;
} else {
var map__25081 = cljs.core.first.call(null,seq__25058__$1);
var map__25081__$1 = ((((!((map__25081 == null)))?((((map__25081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25081):map__25081);
var ins = map__25081__$1;
var instruct = cljs.core.get.call(null,map__25081__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25083_25143 = cljs.core._EQ_;
var expr__25084_25144 = instruct;
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25084_25144))){
var map__25086_25145 = ins;
var map__25086_25146__$1 = ((((!((map__25086_25145 == null)))?((((map__25086_25145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25086_25145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25086_25145):map__25086_25145);
var id_25147 = cljs.core.get.call(null,map__25086_25146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25148 = cljs.core.get.call(null,map__25086_25146__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25147,vehicle_25148);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25084_25144))){
var map__25088_25149 = ins;
var map__25088_25150__$1 = ((((!((map__25088_25149 == null)))?((((map__25088_25149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25088_25149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25088_25149):map__25088_25149);
var id_25151 = cljs.core.get.call(null,map__25088_25150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25151);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25084_25144))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25084_25144))){
var map__25090_25152 = ins;
var map__25090_25153__$1 = ((((!((map__25090_25152 == null)))?((((map__25090_25152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25090_25152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25090_25152):map__25090_25152);
var id_25154 = cljs.core.get.call(null,map__25090_25153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25155 = cljs.core.get.call(null,map__25090_25153__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25156 = cljs.core.get.call(null,map__25090_25153__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25157 = cljs.core.get.call(null,map__25090_25153__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25158 = cljs.core.get.call(null,map__25090_25153__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25154)){
chart.client.popup.call(null,id_25154,html_25157,time_25158);
} else {
if(cljs.core.truth_((function (){var and__21948__auto__ = lat_25155;
if(cljs.core.truth_(and__21948__auto__)){
return lon_25156;
} else {
return and__21948__auto__;
}
})())){
chart.client.popup.call(null,lat_25155,lon_25156,html_25157,time_25158);
} else {
}
}
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25084_25144))){
var map__25092_25159 = ins;
var map__25092_25160__$1 = ((((!((map__25092_25159 == null)))?((((map__25092_25159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25092_25159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25092_25159):map__25092_25159);
var id_25161 = cljs.core.get.call(null,map__25092_25160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25162 = cljs.core.get.call(null,map__25092_25160__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25163 = cljs.core.get.call(null,map__25092_25160__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25164 = cljs.core.get.call(null,map__25092_25160__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25161,points_25162,options_25163,time_25164);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25084_25144))){
var map__25094_25165 = ins;
var map__25094_25166__$1 = ((((!((map__25094_25165 == null)))?((((map__25094_25165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25094_25165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094_25165):map__25094_25165);
var coord_25167 = cljs.core.get.call(null,map__25094_25166__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_25167);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25084_25144))){
var map__25096_25168 = ins;
var map__25096_25169__$1 = ((((!((map__25096_25168 == null)))?((((map__25096_25168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25096_25168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25096_25168):map__25096_25168);
var iname_25170 = cljs.core.get.call(null,map__25096_25169__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_25171 = cljs.core.get.call(null,map__25096_25169__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25172 = cljs.core.get.call(null,map__25096_25169__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25173 = cljs.core.get.call(null,map__25096_25169__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_25170,lat_25171,lon_25172,feature_25173);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25084_25144))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25083_25143.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25084_25144))){
var map__25098_25174 = ins;
var map__25098_25175__$1 = ((((!((map__25098_25174 == null)))?((((map__25098_25174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25098_25174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25098_25174):map__25098_25174);
var ids_25176 = cljs.core.get.call(null,map__25098_25175__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25177 = cljs.core.get.call(null,map__25098_25175__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25176,options_25177);
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

var G__25178 = cljs.core.next.call(null,seq__25058__$1);
var G__25179 = null;
var G__25180 = (0);
var G__25181 = (0);
seq__25058 = G__25178;
chunk__25059 = G__25179;
count__25060 = G__25180;
i__25061 = G__25181;
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
var args25183 = [];
var len__23068__auto___25186 = arguments.length;
var i__23069__auto___25187 = (0);
while(true){
if((i__23069__auto___25187 < len__23068__auto___25186)){
args25183.push((arguments[i__23069__auto___25187]));

var G__25188 = (i__23069__auto___25187 + (1));
i__23069__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var G__25185 = args25183.length;
switch (G__25185) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25183.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__25182_SHARP_){
return chart.client.move_to.call(null,sel,p1__25182_SHARP_);
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
var args25194 = [];
var len__23068__auto___25197 = arguments.length;
var i__23069__auto___25198 = (0);
while(true){
if((i__23069__auto___25198 < len__23068__auto___25197)){
args25194.push((arguments[i__23069__auto___25198]));

var G__25199 = (i__23069__auto___25198 + (1));
i__23069__auto___25198 = G__25199;
continue;
} else {
}
break;
}

var G__25196 = args25194.length;
switch (G__25196) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25194.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__25190_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__25190_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__25191_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__25191_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__25192_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__25192_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__25193_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__25193_SHARP_);
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
var pred__25204 = cljs.core._EQ_;
var expr__25205 = cmd;
if(cljs.core.truth_(pred__25204.call(null,"commands",expr__25205))){
return null;
} else {
if(cljs.core.truth_(pred__25204.call(null,"watch-visible",expr__25205))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__25204.call(null,"move-to",expr__25205))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__25204.call(null,"schedule",expr__25205))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
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
chart.client.question = (function chart$client$question(q){
var pred__25210 = cljs.core._EQ_;
var expr__25211 = q;
if(cljs.core.truth_(pred__25210.call(null,"questions",expr__25211))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map