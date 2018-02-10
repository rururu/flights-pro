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
var map__13811 = response;
var map__13811__$1 = ((((!((map__13811 == null)))?((((map__13811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13811):map__13811);
var status = cljs.core.get.call(null,map__13811__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13811__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_13819 = cljs.core.deref.call(null,vmp);
var mrk_13820 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_13819);
var vec__13816_13821 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_13819);
var lat_13822 = cljs.core.nth.call(null,vec__13816_13821,(0),null);
var lon_13823 = cljs.core.nth.call(null,vec__13816_13821,(1),null);
var pos_13824 = (new L.LatLng(lat_13822,lon_13823));
mrk_13820.setLatLng(pos_13824);

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
var seq__13829_13833 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__13830_13834 = null;
var count__13831_13835 = (0);
var i__13832_13836 = (0);
while(true){
if((i__13832_13836 < count__13831_13835)){
var veh_13837 = cljs.core._nth.call(null,chunk__13830_13834,i__13832_13836);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13837)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13837)));

var G__13838 = seq__13829_13833;
var G__13839 = chunk__13830_13834;
var G__13840 = count__13831_13835;
var G__13841 = (i__13832_13836 + (1));
seq__13829_13833 = G__13838;
chunk__13830_13834 = G__13839;
count__13831_13835 = G__13840;
i__13832_13836 = G__13841;
continue;
} else {
var temp__4657__auto___13842 = cljs.core.seq.call(null,seq__13829_13833);
if(temp__4657__auto___13842){
var seq__13829_13843__$1 = temp__4657__auto___13842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13829_13843__$1)){
var c__10080__auto___13844 = cljs.core.chunk_first.call(null,seq__13829_13843__$1);
var G__13845 = cljs.core.chunk_rest.call(null,seq__13829_13843__$1);
var G__13846 = c__10080__auto___13844;
var G__13847 = cljs.core.count.call(null,c__10080__auto___13844);
var G__13848 = (0);
seq__13829_13833 = G__13845;
chunk__13830_13834 = G__13846;
count__13831_13835 = G__13847;
i__13832_13836 = G__13848;
continue;
} else {
var veh_13849 = cljs.core.first.call(null,seq__13829_13843__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13849)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13849)));

var G__13850 = cljs.core.next.call(null,seq__13829_13843__$1);
var G__13851 = null;
var G__13852 = (0);
var G__13853 = (0);
seq__13829_13833 = G__13850;
chunk__13830_13834 = G__13851;
count__13831_13835 = G__13852;
i__13832_13836 = G__13853;
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

var vec__13858 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__13858,(0),null);
var lon = cljs.core.nth.call(null,vec__13858,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__13858,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__13858,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__13854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__13854_SHARP_))),e.target);
});})(vec__13858,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__13858,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9261__auto__ = url_ico;
if(cljs.core.truth_(or__9261__auto__)){
return or__9261__auto__;
} else {
var or__9261__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9261__auto____$1)){
return or__9261__auto____$1;
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
var seq__13865_13869 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__13866_13870 = null;
var count__13867_13871 = (0);
var i__13868_13872 = (0);
while(true){
if((i__13868_13872 < count__13867_13871)){
var mrk_13873 = cljs.core._nth.call(null,chunk__13866_13870,i__13868_13872);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13873);

var G__13874 = seq__13865_13869;
var G__13875 = chunk__13866_13870;
var G__13876 = count__13867_13871;
var G__13877 = (i__13868_13872 + (1));
seq__13865_13869 = G__13874;
chunk__13866_13870 = G__13875;
count__13867_13871 = G__13876;
i__13868_13872 = G__13877;
continue;
} else {
var temp__4657__auto___13878 = cljs.core.seq.call(null,seq__13865_13869);
if(temp__4657__auto___13878){
var seq__13865_13879__$1 = temp__4657__auto___13878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13865_13879__$1)){
var c__10080__auto___13880 = cljs.core.chunk_first.call(null,seq__13865_13879__$1);
var G__13881 = cljs.core.chunk_rest.call(null,seq__13865_13879__$1);
var G__13882 = c__10080__auto___13880;
var G__13883 = cljs.core.count.call(null,c__10080__auto___13880);
var G__13884 = (0);
seq__13865_13869 = G__13881;
chunk__13866_13870 = G__13882;
count__13867_13871 = G__13883;
i__13868_13872 = G__13884;
continue;
} else {
var mrk_13885 = cljs.core.first.call(null,seq__13865_13879__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13885);

var G__13886 = cljs.core.next.call(null,seq__13865_13879__$1);
var G__13887 = null;
var G__13888 = (0);
var G__13889 = (0);
seq__13865_13869 = G__13886;
chunk__13866_13870 = G__13887;
count__13867_13871 = G__13888;
i__13868_13872 = G__13889;
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
var args13890 = [];
var len__10374__auto___13896 = arguments.length;
var i__10375__auto___13897 = (0);
while(true){
if((i__10375__auto___13897 < len__10374__auto___13896)){
args13890.push((arguments[i__10375__auto___13897]));

var G__13898 = (i__10375__auto___13897 + (1));
i__10375__auto___13897 = G__13898;
continue;
} else {
}
break;
}

var G__13892 = args13890.length;
switch (G__13892) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13890.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__13893 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__13893,(0),null);
var lon = cljs.core.nth.call(null,vec__13893,(1),null);
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
return (function (p1__13900_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__13900_SHARP_),cljs.core.second.call(null,p1__13900_SHARP_)));
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
var vec__13904 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__13904,(0),null);
var s = cljs.core.nth.call(null,vec__13904,(1),null);
var w = cljs.core.nth.call(null,vec__13904,(2),null);
var e = cljs.core.nth.call(null,vec__13904,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__13904,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__13904,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__13907,zoom,lock){
var vec__13911 = p__13907;
var lat = cljs.core.nth.call(null,vec__13911,(0),null);
var lon = cljs.core.nth.call(null,vec__13911,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9261__auto__ = zoom;
if(cljs.core.truth_(or__9261__auto__)){
return or__9261__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__13914_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__13914_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__13915_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__13915_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__13916_SHARP_){
return p1__13916_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__13917,ops){
var vec__13921 = p__13917;
var id1 = cljs.core.nth.call(null,vec__13921,(0),null);
var id2 = cljs.core.nth.call(null,vec__13921,(1),null);
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
var args13925 = [];
var len__10374__auto___13928 = arguments.length;
var i__10375__auto___13929 = (0);
while(true){
if((i__10375__auto___13929 < len__10374__auto___13928)){
args13925.push((arguments[i__10375__auto___13929]));

var G__13930 = (i__10375__auto___13929 + (1));
i__10375__auto___13929 = G__13930;
continue;
} else {
}
break;
}

var G__13927 = args13925.length;
switch (G__13927) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13925.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13924_SHARP_){
return chart.client.select_airport.call(null,sel,p1__13924_SHARP_);
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
var seq__13992 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__13993 = null;
var count__13994 = (0);
var i__13995 = (0);
while(true){
if((i__13995 < count__13994)){
var map__13996 = cljs.core._nth.call(null,chunk__13993,i__13995);
var map__13996__$1 = ((((!((map__13996 == null)))?((((map__13996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13996):map__13996);
var ins = map__13996__$1;
var instruct = cljs.core.get.call(null,map__13996__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13998_14052 = cljs.core._EQ_;
var expr__13999_14053 = instruct;
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13999_14053))){
var map__14001_14054 = ins;
var map__14001_14055__$1 = ((((!((map__14001_14054 == null)))?((((map__14001_14054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14001_14054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14001_14054):map__14001_14054);
var id_14056 = cljs.core.get.call(null,map__14001_14055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_14057 = cljs.core.get.call(null,map__14001_14055__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_14056,vehicle_14057);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13999_14053))){
var map__14003_14058 = ins;
var map__14003_14059__$1 = ((((!((map__14003_14058 == null)))?((((map__14003_14058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14003_14058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14003_14058):map__14003_14058);
var id_14060 = cljs.core.get.call(null,map__14003_14059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_14060);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13999_14053))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13999_14053))){
var map__14005_14061 = ins;
var map__14005_14062__$1 = ((((!((map__14005_14061 == null)))?((((map__14005_14061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14005_14061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14005_14061):map__14005_14061);
var id_14063 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_14064 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14065 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_14066 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_14067 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_14068 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_14069 = cljs.core.get.call(null,map__14005_14062__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_14063)){
chart.client.popup.call(null,id_14063,html_14066,time_14067);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = width_14068;
if(cljs.core.truth_(and__9249__auto__)){
var and__9249__auto____$1 = height_14069;
if(cljs.core.truth_(and__9249__auto____$1)){
var and__9249__auto____$2 = lat_14064;
if(cljs.core.truth_(and__9249__auto____$2)){
return lon_14065;
} else {
return and__9249__auto____$2;
}
} else {
return and__9249__auto____$1;
}
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_14064,lon_14065,html_14066,time_14067,width_14068,height_14069);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = lat_14064;
if(cljs.core.truth_(and__9249__auto__)){
return lon_14065;
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_14064,lon_14065,html_14066,time_14067);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13999_14053))){
var map__14007_14070 = ins;
var map__14007_14071__$1 = ((((!((map__14007_14070 == null)))?((((map__14007_14070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14007_14070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14007_14070):map__14007_14070);
var id_14072 = cljs.core.get.call(null,map__14007_14071__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_14073 = cljs.core.get.call(null,map__14007_14071__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_14074 = cljs.core.get.call(null,map__14007_14071__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_14075 = cljs.core.get.call(null,map__14007_14071__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_14072,points_14073,options_14074,time_14075);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13999_14053))){
var map__14009_14076 = ins;
var map__14009_14077__$1 = ((((!((map__14009_14076 == null)))?((((map__14009_14076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14009_14076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14009_14076):map__14009_14076);
var coord_14078 = cljs.core.get.call(null,map__14009_14077__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_14079 = cljs.core.get.call(null,map__14009_14077__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_14080 = cljs.core.get.call(null,map__14009_14077__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_14078,zoom_14079,lock_14080);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13999_14053))){
var map__14011_14081 = ins;
var map__14011_14082__$1 = ((((!((map__14011_14081 == null)))?((((map__14011_14081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14011_14081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14011_14081):map__14011_14081);
var iname_14083 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_14084 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_14085 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14086 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_14087 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_14088 = cljs.core.get.call(null,map__14011_14082__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_14083,tip_14084,lat_14085,lon_14086,feature_14087,url_ico_14088);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13999_14053))){
var map__14013_14089 = ins;
var map__14013_14090__$1 = ((((!((map__14013_14089 == null)))?((((map__14013_14089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14013_14089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14013_14089):map__14013_14089);
var iname_14091 = cljs.core.get.call(null,map__14013_14090__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_14091);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13999_14053))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13999_14053))){
var map__14015_14092 = ins;
var map__14015_14093__$1 = ((((!((map__14015_14092 == null)))?((((map__14015_14092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14015_14092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14015_14092):map__14015_14092);
var ids_14094 = cljs.core.get.call(null,map__14015_14093__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_14095 = cljs.core.get.call(null,map__14015_14093__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_14094,options_14095);
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__13999_14053))){
var map__14017_14096 = ins;
var map__14017_14097__$1 = ((((!((map__14017_14096 == null)))?((((map__14017_14096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14017_14096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14017_14096):map__14017_14096);
var question_14098 = cljs.core.get.call(null,map__14017_14097__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_14099 = cljs.core.get.call(null,map__14017_14097__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__14019_14100 = cljs.core._EQ_;
var expr__14020_14101 = question_14098;
if(cljs.core.truth_(pred__14019_14100.call(null,"city",expr__14020_14101))){
chart.client.select_city.call(null,param_14099);
} else {
if(cljs.core.truth_(pred__14019_14100.call(null,"airport",expr__14020_14101))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14020_14101)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__13998_14052.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__13999_14053))){
var map__14022_14102 = ins;
var map__14022_14103__$1 = ((((!((map__14022_14102 == null)))?((((map__14022_14102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14022_14102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14022_14102):map__14022_14102);
var callsign_14104 = cljs.core.get.call(null,map__14022_14103__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_14104;
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

var G__14105 = seq__13992;
var G__14106 = chunk__13993;
var G__14107 = count__13994;
var G__14108 = (i__13995 + (1));
seq__13992 = G__14105;
chunk__13993 = G__14106;
count__13994 = G__14107;
i__13995 = G__14108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13992);
if(temp__4657__auto__){
var seq__13992__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13992__$1)){
var c__10080__auto__ = cljs.core.chunk_first.call(null,seq__13992__$1);
var G__14109 = cljs.core.chunk_rest.call(null,seq__13992__$1);
var G__14110 = c__10080__auto__;
var G__14111 = cljs.core.count.call(null,c__10080__auto__);
var G__14112 = (0);
seq__13992 = G__14109;
chunk__13993 = G__14110;
count__13994 = G__14111;
i__13995 = G__14112;
continue;
} else {
var map__14024 = cljs.core.first.call(null,seq__13992__$1);
var map__14024__$1 = ((((!((map__14024 == null)))?((((map__14024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14024):map__14024);
var ins = map__14024__$1;
var instruct = cljs.core.get.call(null,map__14024__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__14026_14113 = cljs.core._EQ_;
var expr__14027_14114 = instruct;
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__14027_14114))){
var map__14029_14115 = ins;
var map__14029_14116__$1 = ((((!((map__14029_14115 == null)))?((((map__14029_14115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14029_14115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14029_14115):map__14029_14115);
var id_14117 = cljs.core.get.call(null,map__14029_14116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_14118 = cljs.core.get.call(null,map__14029_14116__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_14117,vehicle_14118);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__14027_14114))){
var map__14031_14119 = ins;
var map__14031_14120__$1 = ((((!((map__14031_14119 == null)))?((((map__14031_14119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14031_14119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031_14119):map__14031_14119);
var id_14121 = cljs.core.get.call(null,map__14031_14120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_14121);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__14027_14114))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__14027_14114))){
var map__14033_14122 = ins;
var map__14033_14123__$1 = ((((!((map__14033_14122 == null)))?((((map__14033_14122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14033_14122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14033_14122):map__14033_14122);
var id_14124 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_14125 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14126 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_14127 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_14128 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_14129 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_14130 = cljs.core.get.call(null,map__14033_14123__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_14124)){
chart.client.popup.call(null,id_14124,html_14127,time_14128);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = width_14129;
if(cljs.core.truth_(and__9249__auto__)){
var and__9249__auto____$1 = height_14130;
if(cljs.core.truth_(and__9249__auto____$1)){
var and__9249__auto____$2 = lat_14125;
if(cljs.core.truth_(and__9249__auto____$2)){
return lon_14126;
} else {
return and__9249__auto____$2;
}
} else {
return and__9249__auto____$1;
}
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_14125,lon_14126,html_14127,time_14128,width_14129,height_14130);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = lat_14125;
if(cljs.core.truth_(and__9249__auto__)){
return lon_14126;
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_14125,lon_14126,html_14127,time_14128);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__14027_14114))){
var map__14035_14131 = ins;
var map__14035_14132__$1 = ((((!((map__14035_14131 == null)))?((((map__14035_14131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14035_14131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14035_14131):map__14035_14131);
var id_14133 = cljs.core.get.call(null,map__14035_14132__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_14134 = cljs.core.get.call(null,map__14035_14132__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_14135 = cljs.core.get.call(null,map__14035_14132__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_14136 = cljs.core.get.call(null,map__14035_14132__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_14133,points_14134,options_14135,time_14136);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__14027_14114))){
var map__14037_14137 = ins;
var map__14037_14138__$1 = ((((!((map__14037_14137 == null)))?((((map__14037_14137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14037_14137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14037_14137):map__14037_14137);
var coord_14139 = cljs.core.get.call(null,map__14037_14138__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_14140 = cljs.core.get.call(null,map__14037_14138__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_14141 = cljs.core.get.call(null,map__14037_14138__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_14139,zoom_14140,lock_14141);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__14027_14114))){
var map__14039_14142 = ins;
var map__14039_14143__$1 = ((((!((map__14039_14142 == null)))?((((map__14039_14142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14039_14142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14039_14142):map__14039_14142);
var iname_14144 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_14145 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_14146 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14147 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_14148 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_14149 = cljs.core.get.call(null,map__14039_14143__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_14144,tip_14145,lat_14146,lon_14147,feature_14148,url_ico_14149);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__14027_14114))){
var map__14041_14150 = ins;
var map__14041_14151__$1 = ((((!((map__14041_14150 == null)))?((((map__14041_14150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14041_14150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14041_14150):map__14041_14150);
var iname_14152 = cljs.core.get.call(null,map__14041_14151__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_14152);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__14027_14114))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__14027_14114))){
var map__14043_14153 = ins;
var map__14043_14154__$1 = ((((!((map__14043_14153 == null)))?((((map__14043_14153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14043_14153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14043_14153):map__14043_14153);
var ids_14155 = cljs.core.get.call(null,map__14043_14154__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_14156 = cljs.core.get.call(null,map__14043_14154__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_14155,options_14156);
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__14027_14114))){
var map__14045_14157 = ins;
var map__14045_14158__$1 = ((((!((map__14045_14157 == null)))?((((map__14045_14157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14045_14157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14045_14157):map__14045_14157);
var question_14159 = cljs.core.get.call(null,map__14045_14158__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_14160 = cljs.core.get.call(null,map__14045_14158__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__14047_14161 = cljs.core._EQ_;
var expr__14048_14162 = question_14159;
if(cljs.core.truth_(pred__14047_14161.call(null,"city",expr__14048_14162))){
chart.client.select_city.call(null,param_14160);
} else {
if(cljs.core.truth_(pred__14047_14161.call(null,"airport",expr__14048_14162))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14048_14162)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__14026_14113.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__14027_14114))){
var map__14050_14163 = ins;
var map__14050_14164__$1 = ((((!((map__14050_14163 == null)))?((((map__14050_14163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14050_14163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14050_14163):map__14050_14163);
var callsign_14165 = cljs.core.get.call(null,map__14050_14164__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_14165;
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

var G__14166 = cljs.core.next.call(null,seq__13992__$1);
var G__14167 = null;
var G__14168 = (0);
var G__14169 = (0);
seq__13992 = G__14166;
chunk__13993 = G__14167;
count__13994 = G__14168;
i__13995 = G__14169;
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
var args14171 = [];
var len__10374__auto___14174 = arguments.length;
var i__10375__auto___14175 = (0);
while(true){
if((i__10375__auto___14175 < len__10374__auto___14174)){
args14171.push((arguments[i__10375__auto___14175]));

var G__14176 = (i__10375__auto___14175 + (1));
i__10375__auto___14175 = G__14176;
continue;
} else {
}
break;
}

var G__14173 = args14171.length;
switch (G__14173) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14171.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14170_SHARP_){
return chart.client.move_to.call(null,sel,p1__14170_SHARP_);
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
var args14182 = [];
var len__10374__auto___14185 = arguments.length;
var i__10375__auto___14186 = (0);
while(true){
if((i__10375__auto___14186 < len__10374__auto___14185)){
args14182.push((arguments[i__10375__auto___14186]));

var G__14187 = (i__10375__auto___14186 + (1));
i__10375__auto___14186 = G__14187;
continue;
} else {
}
break;
}

var G__14184 = args14182.length;
switch (G__14184) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14182.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__14178_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__14178_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14179_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__14179_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__14180_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__14180_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14181_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__14181_SHARP_);
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
var args14192 = [];
var len__10374__auto___14195 = arguments.length;
var i__10375__auto___14196 = (0);
while(true){
if((i__10375__auto___14196 < len__10374__auto___14195)){
args14192.push((arguments[i__10375__auto___14196]));

var G__14197 = (i__10375__auto___14196 + (1));
i__10375__auto___14196 = G__14197;
continue;
} else {
}
break;
}

var G__14194 = args14192.length;
switch (G__14194) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14192.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__14189_SHARP_){
return chart.client.question.call(null,sel,p1__14189_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__14190_SHARP_){
return chart.client.question.call(null,pred,sel,p1__14190_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__14191_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__14191_SHARP_);
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
var pred__14202_14205 = cljs.core._EQ_;
var expr__14203_14206 = cmd;
if(cljs.core.truth_(pred__14202_14205.call(null,"commands",expr__14203_14206))){
} else {
if(cljs.core.truth_(pred__14202_14205.call(null,"watch-visible",expr__14203_14206))){
var bnd_14207 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_14208 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_14207.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_14207.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_14207.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_14207.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_14208)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__14202_14205.call(null,"move-to",expr__14203_14206))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__14202_14205.call(null,"schedule",expr__14203_14206))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__14202_14205.call(null,"question",expr__14203_14206))){
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
}catch (e14210){if((e14210 instanceof Error)){
var e_14211 = e14210;
cljs.core.println.call(null,e_14211);
} else {
throw e14210;

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