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
var map__34857 = response;
var map__34857__$1 = ((((!((map__34857 == null)))?((((map__34857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34857):map__34857);
var status = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_34865 = cljs.core.deref.call(null,vmp);
var mrk_34866 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_34865);
var vec__34862_34867 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_34865);
var lat_34868 = cljs.core.nth.call(null,vec__34862_34867,(0),null);
var lon_34869 = cljs.core.nth.call(null,vec__34862_34867,(1),null);
var pos_34870 = (new L.LatLng(lat_34868,lon_34869));
mrk_34866.setLatLng(pos_34870);

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
var seq__34875_34879 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__34876_34880 = null;
var count__34877_34881 = (0);
var i__34878_34882 = (0);
while(true){
if((i__34878_34882 < count__34877_34881)){
var veh_34883 = cljs.core._nth.call(null,chunk__34876_34880,i__34878_34882);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34883)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34883)));

var G__34884 = seq__34875_34879;
var G__34885 = chunk__34876_34880;
var G__34886 = count__34877_34881;
var G__34887 = (i__34878_34882 + (1));
seq__34875_34879 = G__34884;
chunk__34876_34880 = G__34885;
count__34877_34881 = G__34886;
i__34878_34882 = G__34887;
continue;
} else {
var temp__4657__auto___34888 = cljs.core.seq.call(null,seq__34875_34879);
if(temp__4657__auto___34888){
var seq__34875_34889__$1 = temp__4657__auto___34888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34875_34889__$1)){
var c__10059__auto___34890 = cljs.core.chunk_first.call(null,seq__34875_34889__$1);
var G__34891 = cljs.core.chunk_rest.call(null,seq__34875_34889__$1);
var G__34892 = c__10059__auto___34890;
var G__34893 = cljs.core.count.call(null,c__10059__auto___34890);
var G__34894 = (0);
seq__34875_34879 = G__34891;
chunk__34876_34880 = G__34892;
count__34877_34881 = G__34893;
i__34878_34882 = G__34894;
continue;
} else {
var veh_34895 = cljs.core.first.call(null,seq__34875_34889__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34895)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34895)));

var G__34896 = cljs.core.next.call(null,seq__34875_34889__$1);
var G__34897 = null;
var G__34898 = (0);
var G__34899 = (0);
seq__34875_34879 = G__34896;
chunk__34876_34880 = G__34897;
count__34877_34881 = G__34898;
i__34878_34882 = G__34899;
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

var vec__34904 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__34904,(0),null);
var lon = cljs.core.nth.call(null,vec__34904,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__34904,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__34904,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__34900_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__34900_SHARP_))),e.target);
});})(vec__34904,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__34904,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9245__auto__ = url_ico;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
var or__9245__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9245__auto____$1)){
return or__9245__auto____$1;
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
var seq__34911_34915 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__34912_34916 = null;
var count__34913_34917 = (0);
var i__34914_34918 = (0);
while(true){
if((i__34914_34918 < count__34913_34917)){
var mrk_34919 = cljs.core._nth.call(null,chunk__34912_34916,i__34914_34918);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34919);

var G__34920 = seq__34911_34915;
var G__34921 = chunk__34912_34916;
var G__34922 = count__34913_34917;
var G__34923 = (i__34914_34918 + (1));
seq__34911_34915 = G__34920;
chunk__34912_34916 = G__34921;
count__34913_34917 = G__34922;
i__34914_34918 = G__34923;
continue;
} else {
var temp__4657__auto___34924 = cljs.core.seq.call(null,seq__34911_34915);
if(temp__4657__auto___34924){
var seq__34911_34925__$1 = temp__4657__auto___34924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34911_34925__$1)){
var c__10059__auto___34926 = cljs.core.chunk_first.call(null,seq__34911_34925__$1);
var G__34927 = cljs.core.chunk_rest.call(null,seq__34911_34925__$1);
var G__34928 = c__10059__auto___34926;
var G__34929 = cljs.core.count.call(null,c__10059__auto___34926);
var G__34930 = (0);
seq__34911_34915 = G__34927;
chunk__34912_34916 = G__34928;
count__34913_34917 = G__34929;
i__34914_34918 = G__34930;
continue;
} else {
var mrk_34931 = cljs.core.first.call(null,seq__34911_34925__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34931);

var G__34932 = cljs.core.next.call(null,seq__34911_34925__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__34911_34915 = G__34932;
chunk__34912_34916 = G__34933;
count__34913_34917 = G__34934;
i__34914_34918 = G__34935;
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
var args34936 = [];
var len__10353__auto___34942 = arguments.length;
var i__10354__auto___34943 = (0);
while(true){
if((i__10354__auto___34943 < len__10353__auto___34942)){
args34936.push((arguments[i__10354__auto___34943]));

var G__34944 = (i__10354__auto___34943 + (1));
i__10354__auto___34943 = G__34944;
continue;
} else {
}
break;
}

var G__34938 = args34936.length;
switch (G__34938) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34936.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__34939 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__34939,(0),null);
var lon = cljs.core.nth.call(null,vec__34939,(1),null);
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
return (function (p1__34946_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__34946_SHARP_),cljs.core.second.call(null,p1__34946_SHARP_)));
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
var vec__34950 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__34950,(0),null);
var s = cljs.core.nth.call(null,vec__34950,(1),null);
var w = cljs.core.nth.call(null,vec__34950,(2),null);
var e = cljs.core.nth.call(null,vec__34950,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__34950,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__34950,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__34953,zoom,lock){
var vec__34957 = p__34953;
var lat = cljs.core.nth.call(null,vec__34957,(0),null);
var lon = cljs.core.nth.call(null,vec__34957,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9245__auto__ = zoom;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__34960_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__34960_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__34961_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__34961_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__34962_SHARP_){
return p1__34962_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__34963,ops){
var vec__34967 = p__34963;
var id1 = cljs.core.nth.call(null,vec__34967,(0),null);
var id2 = cljs.core.nth.call(null,vec__34967,(1),null);
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
var args34971 = [];
var len__10353__auto___34974 = arguments.length;
var i__10354__auto___34975 = (0);
while(true){
if((i__10354__auto___34975 < len__10353__auto___34974)){
args34971.push((arguments[i__10354__auto___34975]));

var G__34976 = (i__10354__auto___34975 + (1));
i__10354__auto___34975 = G__34976;
continue;
} else {
}
break;
}

var G__34973 = args34971.length;
switch (G__34973) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34971.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__34970_SHARP_){
return chart.client.select_airport.call(null,sel,p1__34970_SHARP_);
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
var seq__35034 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__35035 = null;
var count__35036 = (0);
var i__35037 = (0);
while(true){
if((i__35037 < count__35036)){
var map__35038 = cljs.core._nth.call(null,chunk__35035,i__35037);
var map__35038__$1 = ((((!((map__35038 == null)))?((((map__35038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);
var ins = map__35038__$1;
var instruct = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__35040_35090 = cljs.core._EQ_;
var expr__35041_35091 = instruct;
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__35041_35091))){
var map__35043_35092 = ins;
var map__35043_35093__$1 = ((((!((map__35043_35092 == null)))?((((map__35043_35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35043_35092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043_35092):map__35043_35092);
var id_35094 = cljs.core.get.call(null,map__35043_35093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_35095 = cljs.core.get.call(null,map__35043_35093__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_35094,vehicle_35095);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__35041_35091))){
var map__35045_35096 = ins;
var map__35045_35097__$1 = ((((!((map__35045_35096 == null)))?((((map__35045_35096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35045_35096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35045_35096):map__35045_35096);
var id_35098 = cljs.core.get.call(null,map__35045_35097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_35098);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__35041_35091))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__35041_35091))){
var map__35047_35099 = ins;
var map__35047_35100__$1 = ((((!((map__35047_35099 == null)))?((((map__35047_35099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35047_35099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35047_35099):map__35047_35099);
var id_35101 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_35102 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35103 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_35104 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_35105 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_35106 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_35107 = cljs.core.get.call(null,map__35047_35100__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_35101)){
chart.client.popup.call(null,id_35101,html_35104,time_35105);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = width_35106;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = height_35107;
if(cljs.core.truth_(and__9233__auto____$1)){
var and__9233__auto____$2 = lat_35102;
if(cljs.core.truth_(and__9233__auto____$2)){
return lon_35103;
} else {
return and__9233__auto____$2;
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_35102,lon_35103,html_35104,time_35105,width_35106,height_35107);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = lat_35102;
if(cljs.core.truth_(and__9233__auto__)){
return lon_35103;
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_35102,lon_35103,html_35104,time_35105);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__35041_35091))){
var map__35049_35108 = ins;
var map__35049_35109__$1 = ((((!((map__35049_35108 == null)))?((((map__35049_35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35049_35108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35049_35108):map__35049_35108);
var id_35110 = cljs.core.get.call(null,map__35049_35109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_35111 = cljs.core.get.call(null,map__35049_35109__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_35112 = cljs.core.get.call(null,map__35049_35109__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_35113 = cljs.core.get.call(null,map__35049_35109__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_35110,points_35111,options_35112,time_35113);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__35041_35091))){
var map__35051_35114 = ins;
var map__35051_35115__$1 = ((((!((map__35051_35114 == null)))?((((map__35051_35114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35051_35114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35051_35114):map__35051_35114);
var coord_35116 = cljs.core.get.call(null,map__35051_35115__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_35117 = cljs.core.get.call(null,map__35051_35115__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_35118 = cljs.core.get.call(null,map__35051_35115__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_35116,zoom_35117,lock_35118);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__35041_35091))){
var map__35053_35119 = ins;
var map__35053_35120__$1 = ((((!((map__35053_35119 == null)))?((((map__35053_35119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35053_35119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35053_35119):map__35053_35119);
var iname_35121 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_35122 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_35123 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35124 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_35125 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_35126 = cljs.core.get.call(null,map__35053_35120__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_35121,tip_35122,lat_35123,lon_35124,feature_35125,url_ico_35126);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__35041_35091))){
var map__35055_35127 = ins;
var map__35055_35128__$1 = ((((!((map__35055_35127 == null)))?((((map__35055_35127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35055_35127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055_35127):map__35055_35127);
var iname_35129 = cljs.core.get.call(null,map__35055_35128__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_35129);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__35041_35091))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__35041_35091))){
var map__35057_35130 = ins;
var map__35057_35131__$1 = ((((!((map__35057_35130 == null)))?((((map__35057_35130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35057_35130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35057_35130):map__35057_35130);
var ids_35132 = cljs.core.get.call(null,map__35057_35131__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_35133 = cljs.core.get.call(null,map__35057_35131__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_35132,options_35133);
} else {
if(cljs.core.truth_(pred__35040_35090.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__35041_35091))){
var map__35059_35134 = ins;
var map__35059_35135__$1 = ((((!((map__35059_35134 == null)))?((((map__35059_35134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35059_35134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35059_35134):map__35059_35134);
var question_35136 = cljs.core.get.call(null,map__35059_35135__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_35137 = cljs.core.get.call(null,map__35059_35135__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__35061_35138 = cljs.core._EQ_;
var expr__35062_35139 = question_35136;
if(cljs.core.truth_(pred__35061_35138.call(null,"city",expr__35062_35139))){
chart.client.select_city.call(null,param_35137);
} else {
if(cljs.core.truth_(pred__35061_35138.call(null,"airport",expr__35062_35139))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35062_35139)].join('')));
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

var G__35140 = seq__35034;
var G__35141 = chunk__35035;
var G__35142 = count__35036;
var G__35143 = (i__35037 + (1));
seq__35034 = G__35140;
chunk__35035 = G__35141;
count__35036 = G__35142;
i__35037 = G__35143;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35034);
if(temp__4657__auto__){
var seq__35034__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35034__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__35034__$1);
var G__35144 = cljs.core.chunk_rest.call(null,seq__35034__$1);
var G__35145 = c__10059__auto__;
var G__35146 = cljs.core.count.call(null,c__10059__auto__);
var G__35147 = (0);
seq__35034 = G__35144;
chunk__35035 = G__35145;
count__35036 = G__35146;
i__35037 = G__35147;
continue;
} else {
var map__35064 = cljs.core.first.call(null,seq__35034__$1);
var map__35064__$1 = ((((!((map__35064 == null)))?((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var ins = map__35064__$1;
var instruct = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__35066_35148 = cljs.core._EQ_;
var expr__35067_35149 = instruct;
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__35067_35149))){
var map__35069_35150 = ins;
var map__35069_35151__$1 = ((((!((map__35069_35150 == null)))?((((map__35069_35150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35069_35150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069_35150):map__35069_35150);
var id_35152 = cljs.core.get.call(null,map__35069_35151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_35153 = cljs.core.get.call(null,map__35069_35151__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_35152,vehicle_35153);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__35067_35149))){
var map__35071_35154 = ins;
var map__35071_35155__$1 = ((((!((map__35071_35154 == null)))?((((map__35071_35154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35071_35154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35071_35154):map__35071_35154);
var id_35156 = cljs.core.get.call(null,map__35071_35155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_35156);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__35067_35149))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__35067_35149))){
var map__35073_35157 = ins;
var map__35073_35158__$1 = ((((!((map__35073_35157 == null)))?((((map__35073_35157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35073_35157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35073_35157):map__35073_35157);
var id_35159 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_35160 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35161 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_35162 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_35163 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_35164 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_35165 = cljs.core.get.call(null,map__35073_35158__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_35159)){
chart.client.popup.call(null,id_35159,html_35162,time_35163);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = width_35164;
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = height_35165;
if(cljs.core.truth_(and__9233__auto____$1)){
var and__9233__auto____$2 = lat_35160;
if(cljs.core.truth_(and__9233__auto____$2)){
return lon_35161;
} else {
return and__9233__auto____$2;
}
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_35160,lon_35161,html_35162,time_35163,width_35164,height_35165);
} else {
if(cljs.core.truth_((function (){var and__9233__auto__ = lat_35160;
if(cljs.core.truth_(and__9233__auto__)){
return lon_35161;
} else {
return and__9233__auto__;
}
})())){
chart.client.popup.call(null,lat_35160,lon_35161,html_35162,time_35163);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__35067_35149))){
var map__35075_35166 = ins;
var map__35075_35167__$1 = ((((!((map__35075_35166 == null)))?((((map__35075_35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35075_35166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35075_35166):map__35075_35166);
var id_35168 = cljs.core.get.call(null,map__35075_35167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_35169 = cljs.core.get.call(null,map__35075_35167__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_35170 = cljs.core.get.call(null,map__35075_35167__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_35171 = cljs.core.get.call(null,map__35075_35167__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_35168,points_35169,options_35170,time_35171);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__35067_35149))){
var map__35077_35172 = ins;
var map__35077_35173__$1 = ((((!((map__35077_35172 == null)))?((((map__35077_35172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35077_35172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35077_35172):map__35077_35172);
var coord_35174 = cljs.core.get.call(null,map__35077_35173__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_35175 = cljs.core.get.call(null,map__35077_35173__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_35176 = cljs.core.get.call(null,map__35077_35173__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_35174,zoom_35175,lock_35176);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__35067_35149))){
var map__35079_35177 = ins;
var map__35079_35178__$1 = ((((!((map__35079_35177 == null)))?((((map__35079_35177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35079_35177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35079_35177):map__35079_35177);
var iname_35179 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_35180 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_35181 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35182 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_35183 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_35184 = cljs.core.get.call(null,map__35079_35178__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_35179,tip_35180,lat_35181,lon_35182,feature_35183,url_ico_35184);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__35067_35149))){
var map__35081_35185 = ins;
var map__35081_35186__$1 = ((((!((map__35081_35185 == null)))?((((map__35081_35185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35081_35185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35081_35185):map__35081_35185);
var iname_35187 = cljs.core.get.call(null,map__35081_35186__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_35187);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__35067_35149))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__35067_35149))){
var map__35083_35188 = ins;
var map__35083_35189__$1 = ((((!((map__35083_35188 == null)))?((((map__35083_35188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35083_35188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35083_35188):map__35083_35188);
var ids_35190 = cljs.core.get.call(null,map__35083_35189__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_35191 = cljs.core.get.call(null,map__35083_35189__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_35190,options_35191);
} else {
if(cljs.core.truth_(pred__35066_35148.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__35067_35149))){
var map__35085_35192 = ins;
var map__35085_35193__$1 = ((((!((map__35085_35192 == null)))?((((map__35085_35192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35085_35192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35085_35192):map__35085_35192);
var question_35194 = cljs.core.get.call(null,map__35085_35193__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_35195 = cljs.core.get.call(null,map__35085_35193__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__35087_35196 = cljs.core._EQ_;
var expr__35088_35197 = question_35194;
if(cljs.core.truth_(pred__35087_35196.call(null,"city",expr__35088_35197))){
chart.client.select_city.call(null,param_35195);
} else {
if(cljs.core.truth_(pred__35087_35196.call(null,"airport",expr__35088_35197))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35088_35197)].join('')));
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

var G__35198 = cljs.core.next.call(null,seq__35034__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__35034 = G__35198;
chunk__35035 = G__35199;
count__35036 = G__35200;
i__35037 = G__35201;
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
var args35203 = [];
var len__10353__auto___35206 = arguments.length;
var i__10354__auto___35207 = (0);
while(true){
if((i__10354__auto___35207 < len__10353__auto___35206)){
args35203.push((arguments[i__10354__auto___35207]));

var G__35208 = (i__10354__auto___35207 + (1));
i__10354__auto___35207 = G__35208;
continue;
} else {
}
break;
}

var G__35205 = args35203.length;
switch (G__35205) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35203.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__35202_SHARP_){
return chart.client.move_to.call(null,sel,p1__35202_SHARP_);
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
var args35214 = [];
var len__10353__auto___35217 = arguments.length;
var i__10354__auto___35218 = (0);
while(true){
if((i__10354__auto___35218 < len__10353__auto___35217)){
args35214.push((arguments[i__10354__auto___35218]));

var G__35219 = (i__10354__auto___35218 + (1));
i__10354__auto___35218 = G__35219;
continue;
} else {
}
break;
}

var G__35216 = args35214.length;
switch (G__35216) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35214.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__35210_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__35210_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__35211_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__35211_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__35212_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__35212_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__35213_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__35213_SHARP_);
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
var args35224 = [];
var len__10353__auto___35227 = arguments.length;
var i__10354__auto___35228 = (0);
while(true){
if((i__10354__auto___35228 < len__10353__auto___35227)){
args35224.push((arguments[i__10354__auto___35228]));

var G__35229 = (i__10354__auto___35228 + (1));
i__10354__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var G__35226 = args35224.length;
switch (G__35226) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35224.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__35221_SHARP_){
return chart.client.question.call(null,sel,p1__35221_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__35222_SHARP_){
return chart.client.question.call(null,pred,sel,p1__35222_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__35223_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__35223_SHARP_);
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
var pred__35234_35237 = cljs.core._EQ_;
var expr__35235_35238 = cmd;
if(cljs.core.truth_(pred__35234_35237.call(null,"commands",expr__35235_35238))){
} else {
if(cljs.core.truth_(pred__35234_35237.call(null,"watch-visible",expr__35235_35238))){
var bnd_35239 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_35240 = [cljs.core.str("?n="),cljs.core.str(bnd_35239.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_35239.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_35239.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_35239.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_35240)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__35234_35237.call(null,"move-to",expr__35235_35238))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__35234_35237.call(null,"schedule",expr__35235_35238))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__35234_35237.call(null,"question",expr__35235_35238))){
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
}catch (e35242){if((e35242 instanceof Error)){
var e_35243 = e35242;
cljs.core.println.call(null,e_35243);
} else {
throw e35242;

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