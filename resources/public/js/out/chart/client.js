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
var map__25780 = response;
var map__25780__$1 = ((((!((map__25780 == null)))?((((map__25780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25780):map__25780);
var status = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_25788 = cljs.core.deref.call(null,vmp);
var mrk_25789 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25788);
var vec__25785_25790 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25788);
var lat_25791 = cljs.core.nth.call(null,vec__25785_25790,(0),null);
var lon_25792 = cljs.core.nth.call(null,vec__25785_25790,(1),null);
var pos_25793 = (new L.LatLng(lat_25791,lon_25792));
mrk_25789.setLatLng(pos_25793);

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
var seq__25798_25802 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25799_25803 = null;
var count__25800_25804 = (0);
var i__25801_25805 = (0);
while(true){
if((i__25801_25805 < count__25800_25804)){
var veh_25806 = cljs.core._nth.call(null,chunk__25799_25803,i__25801_25805);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25806)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25806)));

var G__25807 = seq__25798_25802;
var G__25808 = chunk__25799_25803;
var G__25809 = count__25800_25804;
var G__25810 = (i__25801_25805 + (1));
seq__25798_25802 = G__25807;
chunk__25799_25803 = G__25808;
count__25800_25804 = G__25809;
i__25801_25805 = G__25810;
continue;
} else {
var temp__4657__auto___25811 = cljs.core.seq.call(null,seq__25798_25802);
if(temp__4657__auto___25811){
var seq__25798_25812__$1 = temp__4657__auto___25811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25798_25812__$1)){
var c__21207__auto___25813 = cljs.core.chunk_first.call(null,seq__25798_25812__$1);
var G__25814 = cljs.core.chunk_rest.call(null,seq__25798_25812__$1);
var G__25815 = c__21207__auto___25813;
var G__25816 = cljs.core.count.call(null,c__21207__auto___25813);
var G__25817 = (0);
seq__25798_25802 = G__25814;
chunk__25799_25803 = G__25815;
count__25800_25804 = G__25816;
i__25801_25805 = G__25817;
continue;
} else {
var veh_25818 = cljs.core.first.call(null,seq__25798_25812__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25818)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25818)));

var G__25819 = cljs.core.next.call(null,seq__25798_25812__$1);
var G__25820 = null;
var G__25821 = (0);
var G__25822 = (0);
seq__25798_25802 = G__25819;
chunk__25799_25803 = G__25820;
count__25800_25804 = G__25821;
i__25801_25805 = G__25822;
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

var vec__25827 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25827,(0),null);
var lon = cljs.core.nth.call(null,vec__25827,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__25827,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25827,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25823_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25823_SHARP_))),e.target);
});})(vec__25827,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25827,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20393__auto__ = url_ico;
if(cljs.core.truth_(or__20393__auto__)){
return or__20393__auto__;
} else {
var or__20393__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20393__auto____$1)){
return or__20393__auto____$1;
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
var seq__25834_25838 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__25835_25839 = null;
var count__25836_25840 = (0);
var i__25837_25841 = (0);
while(true){
if((i__25837_25841 < count__25836_25840)){
var mrk_25842 = cljs.core._nth.call(null,chunk__25835_25839,i__25837_25841);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25842);

var G__25843 = seq__25834_25838;
var G__25844 = chunk__25835_25839;
var G__25845 = count__25836_25840;
var G__25846 = (i__25837_25841 + (1));
seq__25834_25838 = G__25843;
chunk__25835_25839 = G__25844;
count__25836_25840 = G__25845;
i__25837_25841 = G__25846;
continue;
} else {
var temp__4657__auto___25847 = cljs.core.seq.call(null,seq__25834_25838);
if(temp__4657__auto___25847){
var seq__25834_25848__$1 = temp__4657__auto___25847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25834_25848__$1)){
var c__21207__auto___25849 = cljs.core.chunk_first.call(null,seq__25834_25848__$1);
var G__25850 = cljs.core.chunk_rest.call(null,seq__25834_25848__$1);
var G__25851 = c__21207__auto___25849;
var G__25852 = cljs.core.count.call(null,c__21207__auto___25849);
var G__25853 = (0);
seq__25834_25838 = G__25850;
chunk__25835_25839 = G__25851;
count__25836_25840 = G__25852;
i__25837_25841 = G__25853;
continue;
} else {
var mrk_25854 = cljs.core.first.call(null,seq__25834_25848__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25854);

var G__25855 = cljs.core.next.call(null,seq__25834_25848__$1);
var G__25856 = null;
var G__25857 = (0);
var G__25858 = (0);
seq__25834_25838 = G__25855;
chunk__25835_25839 = G__25856;
count__25836_25840 = G__25857;
i__25837_25841 = G__25858;
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
var args25859 = [];
var len__21501__auto___25865 = arguments.length;
var i__21502__auto___25866 = (0);
while(true){
if((i__21502__auto___25866 < len__21501__auto___25865)){
args25859.push((arguments[i__21502__auto___25866]));

var G__25867 = (i__21502__auto___25866 + (1));
i__21502__auto___25866 = G__25867;
continue;
} else {
}
break;
}

var G__25861 = args25859.length;
switch (G__25861) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25859.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25862 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25862,(0),null);
var lon = cljs.core.nth.call(null,vec__25862,(1),null);
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
return (function (p1__25869_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__25869_SHARP_),cljs.core.second.call(null,p1__25869_SHARP_)));
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
var vec__25873 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__25873,(0),null);
var s = cljs.core.nth.call(null,vec__25873,(1),null);
var w = cljs.core.nth.call(null,vec__25873,(2),null);
var e = cljs.core.nth.call(null,vec__25873,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__25873,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__25873,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__25876,zoom,lock){
var vec__25880 = p__25876;
var lat = cljs.core.nth.call(null,vec__25880,(0),null);
var lon = cljs.core.nth.call(null,vec__25880,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20393__auto__ = zoom;
if(cljs.core.truth_(or__20393__auto__)){
return or__20393__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__25883_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__25883_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__25884_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__25884_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__25885_SHARP_){
return p1__25885_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__25886,ops){
var vec__25890 = p__25886;
var id1 = cljs.core.nth.call(null,vec__25890,(0),null);
var id2 = cljs.core.nth.call(null,vec__25890,(1),null);
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
var args25894 = [];
var len__21501__auto___25897 = arguments.length;
var i__21502__auto___25898 = (0);
while(true){
if((i__21502__auto___25898 < len__21501__auto___25897)){
args25894.push((arguments[i__21502__auto___25898]));

var G__25899 = (i__21502__auto___25898 + (1));
i__21502__auto___25898 = G__25899;
continue;
} else {
}
break;
}

var G__25896 = args25894.length;
switch (G__25896) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25894.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25893_SHARP_){
return chart.client.select_airport.call(null,sel,p1__25893_SHARP_);
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
var seq__25957 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25958 = null;
var count__25959 = (0);
var i__25960 = (0);
while(true){
if((i__25960 < count__25959)){
var map__25961 = cljs.core._nth.call(null,chunk__25958,i__25960);
var map__25961__$1 = ((((!((map__25961 == null)))?((((map__25961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25961):map__25961);
var ins = map__25961__$1;
var instruct = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25963_26013 = cljs.core._EQ_;
var expr__25964_26014 = instruct;
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25964_26014))){
var map__25966_26015 = ins;
var map__25966_26016__$1 = ((((!((map__25966_26015 == null)))?((((map__25966_26015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25966_26015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25966_26015):map__25966_26015);
var id_26017 = cljs.core.get.call(null,map__25966_26016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26018 = cljs.core.get.call(null,map__25966_26016__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26017,vehicle_26018);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25964_26014))){
var map__25968_26019 = ins;
var map__25968_26020__$1 = ((((!((map__25968_26019 == null)))?((((map__25968_26019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25968_26019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25968_26019):map__25968_26019);
var id_26021 = cljs.core.get.call(null,map__25968_26020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26021);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25964_26014))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25964_26014))){
var map__25970_26022 = ins;
var map__25970_26023__$1 = ((((!((map__25970_26022 == null)))?((((map__25970_26022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25970_26022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25970_26022):map__25970_26022);
var id_26024 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26025 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26026 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26027 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26028 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26029 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26030 = cljs.core.get.call(null,map__25970_26023__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26024)){
chart.client.popup.call(null,id_26024,html_26027,time_26028);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_26029;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_26030;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_26025;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_26026;
} else {
return and__20381__auto____$2;
}
} else {
return and__20381__auto____$1;
}
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_26025,lon_26026,html_26027,time_26028,width_26029,height_26030);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_26025;
if(cljs.core.truth_(and__20381__auto__)){
return lon_26026;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_26025,lon_26026,html_26027,time_26028);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25964_26014))){
var map__25972_26031 = ins;
var map__25972_26032__$1 = ((((!((map__25972_26031 == null)))?((((map__25972_26031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25972_26031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25972_26031):map__25972_26031);
var id_26033 = cljs.core.get.call(null,map__25972_26032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26034 = cljs.core.get.call(null,map__25972_26032__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26035 = cljs.core.get.call(null,map__25972_26032__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26036 = cljs.core.get.call(null,map__25972_26032__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26033,points_26034,options_26035,time_26036);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25964_26014))){
var map__25974_26037 = ins;
var map__25974_26038__$1 = ((((!((map__25974_26037 == null)))?((((map__25974_26037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25974_26037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974_26037):map__25974_26037);
var coord_26039 = cljs.core.get.call(null,map__25974_26038__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26040 = cljs.core.get.call(null,map__25974_26038__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26041 = cljs.core.get.call(null,map__25974_26038__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26039,zoom_26040,lock_26041);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25964_26014))){
var map__25976_26042 = ins;
var map__25976_26043__$1 = ((((!((map__25976_26042 == null)))?((((map__25976_26042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25976_26042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25976_26042):map__25976_26042);
var iname_26044 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26045 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26046 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26047 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26048 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26049 = cljs.core.get.call(null,map__25976_26043__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26044,tip_26045,lat_26046,lon_26047,feature_26048,url_ico_26049);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25964_26014))){
var map__25978_26050 = ins;
var map__25978_26051__$1 = ((((!((map__25978_26050 == null)))?((((map__25978_26050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25978_26050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25978_26050):map__25978_26050);
var iname_26052 = cljs.core.get.call(null,map__25978_26051__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26052);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25964_26014))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25964_26014))){
var map__25980_26053 = ins;
var map__25980_26054__$1 = ((((!((map__25980_26053 == null)))?((((map__25980_26053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25980_26053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25980_26053):map__25980_26053);
var ids_26055 = cljs.core.get.call(null,map__25980_26054__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26056 = cljs.core.get.call(null,map__25980_26054__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26055,options_26056);
} else {
if(cljs.core.truth_(pred__25963_26013.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25964_26014))){
var map__25982_26057 = ins;
var map__25982_26058__$1 = ((((!((map__25982_26057 == null)))?((((map__25982_26057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25982_26057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25982_26057):map__25982_26057);
var question_26059 = cljs.core.get.call(null,map__25982_26058__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26060 = cljs.core.get.call(null,map__25982_26058__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25984_26061 = cljs.core._EQ_;
var expr__25985_26062 = question_26059;
if(cljs.core.truth_(pred__25984_26061.call(null,"city",expr__25985_26062))){
chart.client.select_city.call(null,param_26060);
} else {
if(cljs.core.truth_(pred__25984_26061.call(null,"airport",expr__25985_26062))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25985_26062)].join('')));
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

var G__26063 = seq__25957;
var G__26064 = chunk__25958;
var G__26065 = count__25959;
var G__26066 = (i__25960 + (1));
seq__25957 = G__26063;
chunk__25958 = G__26064;
count__25959 = G__26065;
i__25960 = G__26066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25957);
if(temp__4657__auto__){
var seq__25957__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25957__$1)){
var c__21207__auto__ = cljs.core.chunk_first.call(null,seq__25957__$1);
var G__26067 = cljs.core.chunk_rest.call(null,seq__25957__$1);
var G__26068 = c__21207__auto__;
var G__26069 = cljs.core.count.call(null,c__21207__auto__);
var G__26070 = (0);
seq__25957 = G__26067;
chunk__25958 = G__26068;
count__25959 = G__26069;
i__25960 = G__26070;
continue;
} else {
var map__25987 = cljs.core.first.call(null,seq__25957__$1);
var map__25987__$1 = ((((!((map__25987 == null)))?((((map__25987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25987):map__25987);
var ins = map__25987__$1;
var instruct = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25989_26071 = cljs.core._EQ_;
var expr__25990_26072 = instruct;
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25990_26072))){
var map__25992_26073 = ins;
var map__25992_26074__$1 = ((((!((map__25992_26073 == null)))?((((map__25992_26073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25992_26073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25992_26073):map__25992_26073);
var id_26075 = cljs.core.get.call(null,map__25992_26074__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26076 = cljs.core.get.call(null,map__25992_26074__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26075,vehicle_26076);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25990_26072))){
var map__25994_26077 = ins;
var map__25994_26078__$1 = ((((!((map__25994_26077 == null)))?((((map__25994_26077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25994_26077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25994_26077):map__25994_26077);
var id_26079 = cljs.core.get.call(null,map__25994_26078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26079);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25990_26072))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25990_26072))){
var map__25996_26080 = ins;
var map__25996_26081__$1 = ((((!((map__25996_26080 == null)))?((((map__25996_26080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25996_26080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25996_26080):map__25996_26080);
var id_26082 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26083 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26084 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26085 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26086 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26087 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26088 = cljs.core.get.call(null,map__25996_26081__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26082)){
chart.client.popup.call(null,id_26082,html_26085,time_26086);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = width_26087;
if(cljs.core.truth_(and__20381__auto__)){
var and__20381__auto____$1 = height_26088;
if(cljs.core.truth_(and__20381__auto____$1)){
var and__20381__auto____$2 = lat_26083;
if(cljs.core.truth_(and__20381__auto____$2)){
return lon_26084;
} else {
return and__20381__auto____$2;
}
} else {
return and__20381__auto____$1;
}
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_26083,lon_26084,html_26085,time_26086,width_26087,height_26088);
} else {
if(cljs.core.truth_((function (){var and__20381__auto__ = lat_26083;
if(cljs.core.truth_(and__20381__auto__)){
return lon_26084;
} else {
return and__20381__auto__;
}
})())){
chart.client.popup.call(null,lat_26083,lon_26084,html_26085,time_26086);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25990_26072))){
var map__25998_26089 = ins;
var map__25998_26090__$1 = ((((!((map__25998_26089 == null)))?((((map__25998_26089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25998_26089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25998_26089):map__25998_26089);
var id_26091 = cljs.core.get.call(null,map__25998_26090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26092 = cljs.core.get.call(null,map__25998_26090__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26093 = cljs.core.get.call(null,map__25998_26090__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26094 = cljs.core.get.call(null,map__25998_26090__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26091,points_26092,options_26093,time_26094);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25990_26072))){
var map__26000_26095 = ins;
var map__26000_26096__$1 = ((((!((map__26000_26095 == null)))?((((map__26000_26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26000_26095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26000_26095):map__26000_26095);
var coord_26097 = cljs.core.get.call(null,map__26000_26096__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26098 = cljs.core.get.call(null,map__26000_26096__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26099 = cljs.core.get.call(null,map__26000_26096__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26097,zoom_26098,lock_26099);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25990_26072))){
var map__26002_26100 = ins;
var map__26002_26101__$1 = ((((!((map__26002_26100 == null)))?((((map__26002_26100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26002_26100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26002_26100):map__26002_26100);
var iname_26102 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26103 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26104 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26105 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26106 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26107 = cljs.core.get.call(null,map__26002_26101__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26102,tip_26103,lat_26104,lon_26105,feature_26106,url_ico_26107);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25990_26072))){
var map__26004_26108 = ins;
var map__26004_26109__$1 = ((((!((map__26004_26108 == null)))?((((map__26004_26108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26004_26108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26004_26108):map__26004_26108);
var iname_26110 = cljs.core.get.call(null,map__26004_26109__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26110);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25990_26072))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25990_26072))){
var map__26006_26111 = ins;
var map__26006_26112__$1 = ((((!((map__26006_26111 == null)))?((((map__26006_26111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26006_26111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26006_26111):map__26006_26111);
var ids_26113 = cljs.core.get.call(null,map__26006_26112__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26114 = cljs.core.get.call(null,map__26006_26112__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26113,options_26114);
} else {
if(cljs.core.truth_(pred__25989_26071.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25990_26072))){
var map__26008_26115 = ins;
var map__26008_26116__$1 = ((((!((map__26008_26115 == null)))?((((map__26008_26115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26008_26115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26008_26115):map__26008_26115);
var question_26117 = cljs.core.get.call(null,map__26008_26116__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26118 = cljs.core.get.call(null,map__26008_26116__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26010_26119 = cljs.core._EQ_;
var expr__26011_26120 = question_26117;
if(cljs.core.truth_(pred__26010_26119.call(null,"city",expr__26011_26120))){
chart.client.select_city.call(null,param_26118);
} else {
if(cljs.core.truth_(pred__26010_26119.call(null,"airport",expr__26011_26120))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26011_26120)].join('')));
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

var G__26121 = cljs.core.next.call(null,seq__25957__$1);
var G__26122 = null;
var G__26123 = (0);
var G__26124 = (0);
seq__25957 = G__26121;
chunk__25958 = G__26122;
count__25959 = G__26123;
i__25960 = G__26124;
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
var args26126 = [];
var len__21501__auto___26129 = arguments.length;
var i__21502__auto___26130 = (0);
while(true){
if((i__21502__auto___26130 < len__21501__auto___26129)){
args26126.push((arguments[i__21502__auto___26130]));

var G__26131 = (i__21502__auto___26130 + (1));
i__21502__auto___26130 = G__26131;
continue;
} else {
}
break;
}

var G__26128 = args26126.length;
switch (G__26128) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26126.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26125_SHARP_){
return chart.client.move_to.call(null,sel,p1__26125_SHARP_);
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
var args26137 = [];
var len__21501__auto___26140 = arguments.length;
var i__21502__auto___26141 = (0);
while(true){
if((i__21502__auto___26141 < len__21501__auto___26140)){
args26137.push((arguments[i__21502__auto___26141]));

var G__26142 = (i__21502__auto___26141 + (1));
i__21502__auto___26141 = G__26142;
continue;
} else {
}
break;
}

var G__26139 = args26137.length;
switch (G__26139) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26137.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26133_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26133_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26134_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26134_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26135_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26135_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26136_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26136_SHARP_);
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
var args26147 = [];
var len__21501__auto___26150 = arguments.length;
var i__21502__auto___26151 = (0);
while(true){
if((i__21502__auto___26151 < len__21501__auto___26150)){
args26147.push((arguments[i__21502__auto___26151]));

var G__26152 = (i__21502__auto___26151 + (1));
i__21502__auto___26151 = G__26152;
continue;
} else {
}
break;
}

var G__26149 = args26147.length;
switch (G__26149) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26147.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__26144_SHARP_){
return chart.client.question.call(null,sel,p1__26144_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__26145_SHARP_){
return chart.client.question.call(null,pred,sel,p1__26145_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__26146_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__26146_SHARP_);
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
var pred__26157_26160 = cljs.core._EQ_;
var expr__26158_26161 = cmd;
if(cljs.core.truth_(pred__26157_26160.call(null,"commands",expr__26158_26161))){
} else {
if(cljs.core.truth_(pred__26157_26160.call(null,"watch-visible",expr__26158_26161))){
var bnd_26162 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_26163 = [cljs.core.str("?n="),cljs.core.str(bnd_26162.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_26162.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_26162.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_26162.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_26163)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26157_26160.call(null,"move-to",expr__26158_26161))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26157_26160.call(null,"schedule",expr__26158_26161))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__26157_26160.call(null,"question",expr__26158_26161))){
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
}catch (e26165){if((e26165 instanceof Error)){
var e_26166 = e26165;
cljs.core.println.call(null,e_26166);
} else {
throw e26165;

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