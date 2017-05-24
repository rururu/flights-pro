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
var map__38850 = response;
var map__38850__$1 = ((((!((map__38850 == null)))?((((map__38850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38850):map__38850);
var status = cljs.core.get.call(null,map__38850__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__38850__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
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

var mp_38858 = cljs.core.deref.call(null,vmp);
var mrk_38859 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_38858);
var vec__38855_38860 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_38858);
var lat_38861 = cljs.core.nth.call(null,vec__38855_38860,(0),null);
var lon_38862 = cljs.core.nth.call(null,vec__38855_38860,(1),null);
var pos_38863 = (new L.LatLng(lat_38861,lon_38862));
mrk_38859.setLatLng(pos_38863);

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
var seq__38868_38872 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__38869_38873 = null;
var count__38870_38874 = (0);
var i__38871_38875 = (0);
while(true){
if((i__38871_38875 < count__38870_38874)){
var veh_38876 = cljs.core._nth.call(null,chunk__38869_38873,i__38871_38875);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_38876)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_38876)));

var G__38877 = seq__38868_38872;
var G__38878 = chunk__38869_38873;
var G__38879 = count__38870_38874;
var G__38880 = (i__38871_38875 + (1));
seq__38868_38872 = G__38877;
chunk__38869_38873 = G__38878;
count__38870_38874 = G__38879;
i__38871_38875 = G__38880;
continue;
} else {
var temp__4657__auto___38881 = cljs.core.seq.call(null,seq__38868_38872);
if(temp__4657__auto___38881){
var seq__38868_38882__$1 = temp__4657__auto___38881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38868_38882__$1)){
var c__25923__auto___38883 = cljs.core.chunk_first.call(null,seq__38868_38882__$1);
var G__38884 = cljs.core.chunk_rest.call(null,seq__38868_38882__$1);
var G__38885 = c__25923__auto___38883;
var G__38886 = cljs.core.count.call(null,c__25923__auto___38883);
var G__38887 = (0);
seq__38868_38872 = G__38884;
chunk__38869_38873 = G__38885;
count__38870_38874 = G__38886;
i__38871_38875 = G__38887;
continue;
} else {
var veh_38888 = cljs.core.first.call(null,seq__38868_38882__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_38888)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_38888)));

var G__38889 = cljs.core.next.call(null,seq__38868_38882__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__38868_38872 = G__38889;
chunk__38869_38873 = G__38890;
count__38870_38874 = G__38891;
i__38871_38875 = G__38892;
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

var vec__38897 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__38897,(0),null);
var lon = cljs.core.nth.call(null,vec__38897,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__38897,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__38897,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__38893_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__38893_SHARP_))),e.target);
});})(vec__38897,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__38897,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__25104__auto__ = url_ico;
if(cljs.core.truth_(or__25104__auto__)){
return or__25104__auto__;
} else {
var or__25104__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__25104__auto____$1)){
return or__25104__auto____$1;
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
var seq__38904_38908 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__38905_38909 = null;
var count__38906_38910 = (0);
var i__38907_38911 = (0);
while(true){
if((i__38907_38911 < count__38906_38910)){
var mrk_38912 = cljs.core._nth.call(null,chunk__38905_38909,i__38907_38911);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_38912);

var G__38913 = seq__38904_38908;
var G__38914 = chunk__38905_38909;
var G__38915 = count__38906_38910;
var G__38916 = (i__38907_38911 + (1));
seq__38904_38908 = G__38913;
chunk__38905_38909 = G__38914;
count__38906_38910 = G__38915;
i__38907_38911 = G__38916;
continue;
} else {
var temp__4657__auto___38917 = cljs.core.seq.call(null,seq__38904_38908);
if(temp__4657__auto___38917){
var seq__38904_38918__$1 = temp__4657__auto___38917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38904_38918__$1)){
var c__25923__auto___38919 = cljs.core.chunk_first.call(null,seq__38904_38918__$1);
var G__38920 = cljs.core.chunk_rest.call(null,seq__38904_38918__$1);
var G__38921 = c__25923__auto___38919;
var G__38922 = cljs.core.count.call(null,c__25923__auto___38919);
var G__38923 = (0);
seq__38904_38908 = G__38920;
chunk__38905_38909 = G__38921;
count__38906_38910 = G__38922;
i__38907_38911 = G__38923;
continue;
} else {
var mrk_38924 = cljs.core.first.call(null,seq__38904_38918__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_38924);

var G__38925 = cljs.core.next.call(null,seq__38904_38918__$1);
var G__38926 = null;
var G__38927 = (0);
var G__38928 = (0);
seq__38904_38908 = G__38925;
chunk__38905_38909 = G__38926;
count__38906_38910 = G__38927;
i__38907_38911 = G__38928;
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
var args38929 = [];
var len__26217__auto___38935 = arguments.length;
var i__26218__auto___38936 = (0);
while(true){
if((i__26218__auto___38936 < len__26217__auto___38935)){
args38929.push((arguments[i__26218__auto___38936]));

var G__38937 = (i__26218__auto___38936 + (1));
i__26218__auto___38936 = G__38937;
continue;
} else {
}
break;
}

var G__38931 = args38929.length;
switch (G__38931) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38929.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__38932 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__38932,(0),null);
var lon = cljs.core.nth.call(null,vec__38932,(1),null);
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
return (function (p1__38939_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__38939_SHARP_),cljs.core.second.call(null,p1__38939_SHARP_)));
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
var vec__38943 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__38943,(0),null);
var s = cljs.core.nth.call(null,vec__38943,(1),null);
var w = cljs.core.nth.call(null,vec__38943,(2),null);
var e = cljs.core.nth.call(null,vec__38943,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__38943,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__38943,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__38946,zoom,lock){
var vec__38950 = p__38946;
var lat = cljs.core.nth.call(null,vec__38950,(0),null);
var lon = cljs.core.nth.call(null,vec__38950,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__25104__auto__ = zoom;
if(cljs.core.truth_(or__25104__auto__)){
return or__25104__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__38953_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__38953_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__38954_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__38954_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__38955_SHARP_){
return p1__38955_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__38956,ops){
var vec__38960 = p__38956;
var id1 = cljs.core.nth.call(null,vec__38960,(0),null);
var id2 = cljs.core.nth.call(null,vec__38960,(1),null);
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
var args38964 = [];
var len__26217__auto___38967 = arguments.length;
var i__26218__auto___38968 = (0);
while(true){
if((i__26218__auto___38968 < len__26217__auto___38967)){
args38964.push((arguments[i__26218__auto___38968]));

var G__38969 = (i__26218__auto___38968 + (1));
i__26218__auto___38968 = G__38969;
continue;
} else {
}
break;
}

var G__38966 = args38964.length;
switch (G__38966) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38964.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__38963_SHARP_){
return chart.client.select_airport.call(null,sel,p1__38963_SHARP_);
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
var seq__39027 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__39028 = null;
var count__39029 = (0);
var i__39030 = (0);
while(true){
if((i__39030 < count__39029)){
var map__39031 = cljs.core._nth.call(null,chunk__39028,i__39030);
var map__39031__$1 = ((((!((map__39031 == null)))?((((map__39031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var ins = map__39031__$1;
var instruct = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__39033_39083 = cljs.core._EQ_;
var expr__39034_39084 = instruct;
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__39034_39084))){
var map__39036_39085 = ins;
var map__39036_39086__$1 = ((((!((map__39036_39085 == null)))?((((map__39036_39085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39036_39085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39036_39085):map__39036_39085);
var id_39087 = cljs.core.get.call(null,map__39036_39086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_39088 = cljs.core.get.call(null,map__39036_39086__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_39087,vehicle_39088);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__39034_39084))){
var map__39038_39089 = ins;
var map__39038_39090__$1 = ((((!((map__39038_39089 == null)))?((((map__39038_39089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39038_39089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39038_39089):map__39038_39089);
var id_39091 = cljs.core.get.call(null,map__39038_39090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_39091);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__39034_39084))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__39034_39084))){
var map__39040_39092 = ins;
var map__39040_39093__$1 = ((((!((map__39040_39092 == null)))?((((map__39040_39092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39040_39092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39040_39092):map__39040_39092);
var id_39094 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_39095 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_39096 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_39097 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_39098 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_39099 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_39100 = cljs.core.get.call(null,map__39040_39093__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_39094)){
chart.client.popup.call(null,id_39094,html_39097,time_39098);
} else {
if(cljs.core.truth_((function (){var and__25092__auto__ = width_39099;
if(cljs.core.truth_(and__25092__auto__)){
var and__25092__auto____$1 = height_39100;
if(cljs.core.truth_(and__25092__auto____$1)){
var and__25092__auto____$2 = lat_39095;
if(cljs.core.truth_(and__25092__auto____$2)){
return lon_39096;
} else {
return and__25092__auto____$2;
}
} else {
return and__25092__auto____$1;
}
} else {
return and__25092__auto__;
}
})())){
chart.client.popup.call(null,lat_39095,lon_39096,html_39097,time_39098,width_39099,height_39100);
} else {
if(cljs.core.truth_((function (){var and__25092__auto__ = lat_39095;
if(cljs.core.truth_(and__25092__auto__)){
return lon_39096;
} else {
return and__25092__auto__;
}
})())){
chart.client.popup.call(null,lat_39095,lon_39096,html_39097,time_39098);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__39034_39084))){
var map__39042_39101 = ins;
var map__39042_39102__$1 = ((((!((map__39042_39101 == null)))?((((map__39042_39101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39042_39101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39042_39101):map__39042_39101);
var id_39103 = cljs.core.get.call(null,map__39042_39102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_39104 = cljs.core.get.call(null,map__39042_39102__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_39105 = cljs.core.get.call(null,map__39042_39102__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_39106 = cljs.core.get.call(null,map__39042_39102__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_39103,points_39104,options_39105,time_39106);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__39034_39084))){
var map__39044_39107 = ins;
var map__39044_39108__$1 = ((((!((map__39044_39107 == null)))?((((map__39044_39107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39044_39107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39044_39107):map__39044_39107);
var coord_39109 = cljs.core.get.call(null,map__39044_39108__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_39110 = cljs.core.get.call(null,map__39044_39108__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_39111 = cljs.core.get.call(null,map__39044_39108__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_39109,zoom_39110,lock_39111);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__39034_39084))){
var map__39046_39112 = ins;
var map__39046_39113__$1 = ((((!((map__39046_39112 == null)))?((((map__39046_39112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39046_39112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39046_39112):map__39046_39112);
var iname_39114 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_39115 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_39116 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_39117 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_39118 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_39119 = cljs.core.get.call(null,map__39046_39113__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_39114,tip_39115,lat_39116,lon_39117,feature_39118,url_ico_39119);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__39034_39084))){
var map__39048_39120 = ins;
var map__39048_39121__$1 = ((((!((map__39048_39120 == null)))?((((map__39048_39120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39048_39120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39048_39120):map__39048_39120);
var iname_39122 = cljs.core.get.call(null,map__39048_39121__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_39122);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__39034_39084))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__39034_39084))){
var map__39050_39123 = ins;
var map__39050_39124__$1 = ((((!((map__39050_39123 == null)))?((((map__39050_39123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39050_39123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39050_39123):map__39050_39123);
var ids_39125 = cljs.core.get.call(null,map__39050_39124__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_39126 = cljs.core.get.call(null,map__39050_39124__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_39125,options_39126);
} else {
if(cljs.core.truth_(pred__39033_39083.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__39034_39084))){
var map__39052_39127 = ins;
var map__39052_39128__$1 = ((((!((map__39052_39127 == null)))?((((map__39052_39127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39052_39127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39052_39127):map__39052_39127);
var question_39129 = cljs.core.get.call(null,map__39052_39128__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_39130 = cljs.core.get.call(null,map__39052_39128__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__39054_39131 = cljs.core._EQ_;
var expr__39055_39132 = question_39129;
if(cljs.core.truth_(pred__39054_39131.call(null,"city",expr__39055_39132))){
chart.client.select_city.call(null,param_39130);
} else {
if(cljs.core.truth_(pred__39054_39131.call(null,"airport",expr__39055_39132))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39055_39132)].join('')));
}
}
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

var G__39133 = seq__39027;
var G__39134 = chunk__39028;
var G__39135 = count__39029;
var G__39136 = (i__39030 + (1));
seq__39027 = G__39133;
chunk__39028 = G__39134;
count__39029 = G__39135;
i__39030 = G__39136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39027);
if(temp__4657__auto__){
var seq__39027__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39027__$1)){
var c__25923__auto__ = cljs.core.chunk_first.call(null,seq__39027__$1);
var G__39137 = cljs.core.chunk_rest.call(null,seq__39027__$1);
var G__39138 = c__25923__auto__;
var G__39139 = cljs.core.count.call(null,c__25923__auto__);
var G__39140 = (0);
seq__39027 = G__39137;
chunk__39028 = G__39138;
count__39029 = G__39139;
i__39030 = G__39140;
continue;
} else {
var map__39057 = cljs.core.first.call(null,seq__39027__$1);
var map__39057__$1 = ((((!((map__39057 == null)))?((((map__39057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39057):map__39057);
var ins = map__39057__$1;
var instruct = cljs.core.get.call(null,map__39057__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__39059_39141 = cljs.core._EQ_;
var expr__39060_39142 = instruct;
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__39060_39142))){
var map__39062_39143 = ins;
var map__39062_39144__$1 = ((((!((map__39062_39143 == null)))?((((map__39062_39143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39062_39143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39062_39143):map__39062_39143);
var id_39145 = cljs.core.get.call(null,map__39062_39144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_39146 = cljs.core.get.call(null,map__39062_39144__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_39145,vehicle_39146);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__39060_39142))){
var map__39064_39147 = ins;
var map__39064_39148__$1 = ((((!((map__39064_39147 == null)))?((((map__39064_39147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39064_39147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39064_39147):map__39064_39147);
var id_39149 = cljs.core.get.call(null,map__39064_39148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_39149);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__39060_39142))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__39060_39142))){
var map__39066_39150 = ins;
var map__39066_39151__$1 = ((((!((map__39066_39150 == null)))?((((map__39066_39150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39066_39150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39066_39150):map__39066_39150);
var id_39152 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_39153 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_39154 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_39155 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_39156 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_39157 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_39158 = cljs.core.get.call(null,map__39066_39151__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_39152)){
chart.client.popup.call(null,id_39152,html_39155,time_39156);
} else {
if(cljs.core.truth_((function (){var and__25092__auto__ = width_39157;
if(cljs.core.truth_(and__25092__auto__)){
var and__25092__auto____$1 = height_39158;
if(cljs.core.truth_(and__25092__auto____$1)){
var and__25092__auto____$2 = lat_39153;
if(cljs.core.truth_(and__25092__auto____$2)){
return lon_39154;
} else {
return and__25092__auto____$2;
}
} else {
return and__25092__auto____$1;
}
} else {
return and__25092__auto__;
}
})())){
chart.client.popup.call(null,lat_39153,lon_39154,html_39155,time_39156,width_39157,height_39158);
} else {
if(cljs.core.truth_((function (){var and__25092__auto__ = lat_39153;
if(cljs.core.truth_(and__25092__auto__)){
return lon_39154;
} else {
return and__25092__auto__;
}
})())){
chart.client.popup.call(null,lat_39153,lon_39154,html_39155,time_39156);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__39060_39142))){
var map__39068_39159 = ins;
var map__39068_39160__$1 = ((((!((map__39068_39159 == null)))?((((map__39068_39159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39068_39159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39068_39159):map__39068_39159);
var id_39161 = cljs.core.get.call(null,map__39068_39160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_39162 = cljs.core.get.call(null,map__39068_39160__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_39163 = cljs.core.get.call(null,map__39068_39160__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_39164 = cljs.core.get.call(null,map__39068_39160__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_39161,points_39162,options_39163,time_39164);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__39060_39142))){
var map__39070_39165 = ins;
var map__39070_39166__$1 = ((((!((map__39070_39165 == null)))?((((map__39070_39165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39070_39165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39070_39165):map__39070_39165);
var coord_39167 = cljs.core.get.call(null,map__39070_39166__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_39168 = cljs.core.get.call(null,map__39070_39166__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_39169 = cljs.core.get.call(null,map__39070_39166__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_39167,zoom_39168,lock_39169);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__39060_39142))){
var map__39072_39170 = ins;
var map__39072_39171__$1 = ((((!((map__39072_39170 == null)))?((((map__39072_39170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39072_39170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39072_39170):map__39072_39170);
var iname_39172 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_39173 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_39174 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_39175 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_39176 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_39177 = cljs.core.get.call(null,map__39072_39171__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_39172,tip_39173,lat_39174,lon_39175,feature_39176,url_ico_39177);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__39060_39142))){
var map__39074_39178 = ins;
var map__39074_39179__$1 = ((((!((map__39074_39178 == null)))?((((map__39074_39178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39074_39178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39074_39178):map__39074_39178);
var iname_39180 = cljs.core.get.call(null,map__39074_39179__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_39180);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__39060_39142))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__39060_39142))){
var map__39076_39181 = ins;
var map__39076_39182__$1 = ((((!((map__39076_39181 == null)))?((((map__39076_39181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39076_39181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39076_39181):map__39076_39181);
var ids_39183 = cljs.core.get.call(null,map__39076_39182__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_39184 = cljs.core.get.call(null,map__39076_39182__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_39183,options_39184);
} else {
if(cljs.core.truth_(pred__39059_39141.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__39060_39142))){
var map__39078_39185 = ins;
var map__39078_39186__$1 = ((((!((map__39078_39185 == null)))?((((map__39078_39185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39078_39185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39078_39185):map__39078_39185);
var question_39187 = cljs.core.get.call(null,map__39078_39186__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_39188 = cljs.core.get.call(null,map__39078_39186__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__39080_39189 = cljs.core._EQ_;
var expr__39081_39190 = question_39187;
if(cljs.core.truth_(pred__39080_39189.call(null,"city",expr__39081_39190))){
chart.client.select_city.call(null,param_39188);
} else {
if(cljs.core.truth_(pred__39080_39189.call(null,"airport",expr__39081_39190))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39081_39190)].join('')));
}
}
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

var G__39191 = cljs.core.next.call(null,seq__39027__$1);
var G__39192 = null;
var G__39193 = (0);
var G__39194 = (0);
seq__39027 = G__39191;
chunk__39028 = G__39192;
count__39029 = G__39193;
i__39030 = G__39194;
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
var args39196 = [];
var len__26217__auto___39199 = arguments.length;
var i__26218__auto___39200 = (0);
while(true){
if((i__26218__auto___39200 < len__26217__auto___39199)){
args39196.push((arguments[i__26218__auto___39200]));

var G__39201 = (i__26218__auto___39200 + (1));
i__26218__auto___39200 = G__39201;
continue;
} else {
}
break;
}

var G__39198 = args39196.length;
switch (G__39198) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39196.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__39195_SHARP_){
return chart.client.move_to.call(null,sel,p1__39195_SHARP_);
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
var args39207 = [];
var len__26217__auto___39210 = arguments.length;
var i__26218__auto___39211 = (0);
while(true){
if((i__26218__auto___39211 < len__26217__auto___39210)){
args39207.push((arguments[i__26218__auto___39211]));

var G__39212 = (i__26218__auto___39211 + (1));
i__26218__auto___39211 = G__39212;
continue;
} else {
}
break;
}

var G__39209 = args39207.length;
switch (G__39209) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39207.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__39203_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__39203_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__39204_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__39204_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__39205_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__39205_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__39206_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__39206_SHARP_);
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
var args39217 = [];
var len__26217__auto___39220 = arguments.length;
var i__26218__auto___39221 = (0);
while(true){
if((i__26218__auto___39221 < len__26217__auto___39220)){
args39217.push((arguments[i__26218__auto___39221]));

var G__39222 = (i__26218__auto___39221 + (1));
i__26218__auto___39221 = G__39222;
continue;
} else {
}
break;
}

var G__39219 = args39217.length;
switch (G__39219) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39217.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__39214_SHARP_){
return chart.client.question.call(null,sel,p1__39214_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__39215_SHARP_){
return chart.client.question.call(null,pred,sel,p1__39215_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__39216_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__39216_SHARP_);
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
var pred__39227_39230 = cljs.core._EQ_;
var expr__39228_39231 = cmd;
if(cljs.core.truth_(pred__39227_39230.call(null,"commands",expr__39228_39231))){
} else {
if(cljs.core.truth_(pred__39227_39230.call(null,"watch-visible",expr__39228_39231))){
var bnd_39232 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_39233 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_39232.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_39232.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_39232.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_39232.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_39233)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__39227_39230.call(null,"move-to",expr__39228_39231))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__39227_39230.call(null,"schedule",expr__39228_39231))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__39227_39230.call(null,"question",expr__39228_39231))){
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
}catch (e39235){if((e39235 instanceof Error)){
var e_39236 = e39235;
cljs.core.println.call(null,e_39236);
} else {
throw e39235;

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
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map