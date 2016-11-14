// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.PORT = (4444);
chart.client.CHR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join('');
chart.client.INS_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join('');
chart.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('');
chart.client.INS_TIO = (1000);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.MOV_TIO = (200);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_21884 = cljs.core.deref.call(null,vmp);
var mrk_21885 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_21884);
var vec__21881_21886 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_21884);
var lat_21887 = cljs.core.nth.call(null,vec__21881_21886,(0),null);
var lon_21888 = cljs.core.nth.call(null,vec__21881_21886,(1),null);
var pos_21889 = (new L.LatLng(lat_21887,lon_21888));
mrk_21885.setLatLng(pos_21889);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__21894_21898 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__21895_21899 = null;
var count__21896_21900 = (0);
var i__21897_21901 = (0);
while(true){
if((i__21897_21901 < count__21896_21900)){
var veh_21902 = cljs.core._nth.call(null,chunk__21895_21899,i__21897_21901);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21902)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21902)));

var G__21903 = seq__21894_21898;
var G__21904 = chunk__21895_21899;
var G__21905 = count__21896_21900;
var G__21906 = (i__21897_21901 + (1));
seq__21894_21898 = G__21903;
chunk__21895_21899 = G__21904;
count__21896_21900 = G__21905;
i__21897_21901 = G__21906;
continue;
} else {
var temp__4657__auto___21907 = cljs.core.seq.call(null,seq__21894_21898);
if(temp__4657__auto___21907){
var seq__21894_21908__$1 = temp__4657__auto___21907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21894_21908__$1)){
var c__19864__auto___21909 = cljs.core.chunk_first.call(null,seq__21894_21908__$1);
var G__21910 = cljs.core.chunk_rest.call(null,seq__21894_21908__$1);
var G__21911 = c__19864__auto___21909;
var G__21912 = cljs.core.count.call(null,c__19864__auto___21909);
var G__21913 = (0);
seq__21894_21898 = G__21910;
chunk__21895_21899 = G__21911;
count__21896_21900 = G__21912;
i__21897_21901 = G__21913;
continue;
} else {
var veh_21914 = cljs.core.first.call(null,seq__21894_21908__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21914)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21914)));

var G__21915 = cljs.core.next.call(null,seq__21894_21908__$1);
var G__21916 = null;
var G__21917 = (0);
var G__21918 = (0);
seq__21894_21898 = G__21915;
chunk__21895_21899 = G__21916;
count__21896_21900 = G__21917;
i__21897_21901 = G__21918;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__21921 = response;
var map__21921__$1 = ((((!((map__21921 == null)))?((((map__21921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21921):map__21921);
var status = cljs.core.get.call(null,map__21921__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21921__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__21927 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__21927,(0),null);
var lon = cljs.core.nth.call(null,vec__21927,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__21927,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__21927,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__21923_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__21923_SHARP_))),e.target);
});})(vec__21927,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__21927,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
var temp__4655__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var veh = temp__4655__auto__;
var old = cljs.core.deref.call(null,veh);
var mp__$1 = cljs.core.merge.call(null,old,mp);
var mp__$2 = (((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp__$1))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(mp__$1))))?cljs.core.assoc.call(null,mp__$1,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(old),mp__$1)):mp__$1);
return cljs.core.vreset_BANG_.call(null,veh,mp__$2);
} else {
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.repeater.call(null,((function (temp__4655__auto__){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(temp__4655__auto__))
,chart.client.MOV_TIO));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
}
});
chart.client.popup = (function chart$client$popup(var_args){
var args21930 = [];
var len__20158__auto___21936 = arguments.length;
var i__20159__auto___21937 = (0);
while(true){
if((i__20159__auto___21937 < len__20158__auto___21936)){
args21930.push((arguments[i__20159__auto___21937]));

var G__21938 = (i__20159__auto___21937 + (1));
i__20159__auto___21937 = G__21938;
continue;
} else {
}
break;
}

var G__21932 = args21930.length;
switch (G__21932) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21930.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__21933 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__21933,(0),null);
var lon = cljs.core.nth.call(null,vec__21933,(1),null);
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

chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__21966 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__21967 = null;
var count__21968 = (0);
var i__21969 = (0);
while(true){
if((i__21969 < count__21968)){
var map__21970 = cljs.core._nth.call(null,chunk__21967,i__21969);
var map__21970__$1 = ((((!((map__21970 == null)))?((((map__21970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21970):map__21970);
var ins = map__21970__$1;
var instruct = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21972_21992 = cljs.core._EQ_;
var expr__21973_21993 = instruct;
if(cljs.core.truth_(pred__21972_21992.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21973_21993))){
var map__21975_21994 = ins;
var map__21975_21995__$1 = ((((!((map__21975_21994 == null)))?((((map__21975_21994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21975_21994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21975_21994):map__21975_21994);
var id_21996 = cljs.core.get.call(null,map__21975_21995__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21997 = cljs.core.get.call(null,map__21975_21995__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_21996,vehicle_21997);
} else {
if(cljs.core.truth_(pred__21972_21992.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21973_21993))){
var map__21977_21998 = ins;
var map__21977_21999__$1 = ((((!((map__21977_21998 == null)))?((((map__21977_21998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21977_21998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21977_21998):map__21977_21998);
var id_22000 = cljs.core.get.call(null,map__21977_21999__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22000);
} else {
if(cljs.core.truth_(pred__21972_21992.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21973_21993))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21972_21992.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21973_21993))){
var map__21979_22001 = ins;
var map__21979_22002__$1 = ((((!((map__21979_22001 == null)))?((((map__21979_22001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21979_22001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21979_22001):map__21979_22001);
var id_22003 = cljs.core.get.call(null,map__21979_22002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22004 = cljs.core.get.call(null,map__21979_22002__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22005 = cljs.core.get.call(null,map__21979_22002__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22006 = cljs.core.get.call(null,map__21979_22002__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22007 = cljs.core.get.call(null,map__21979_22002__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22003)){
chart.client.popup.call(null,id_22003,html_22006,time_22007);
} else {
if(cljs.core.truth_((function (){var and__19038__auto__ = lat_22004;
if(cljs.core.truth_(and__19038__auto__)){
return lon_22005;
} else {
return and__19038__auto__;
}
})())){
chart.client.popup.call(null,lat_22004,lon_22005,html_22006,time_22007);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22008 = seq__21966;
var G__22009 = chunk__21967;
var G__22010 = count__21968;
var G__22011 = (i__21969 + (1));
seq__21966 = G__22008;
chunk__21967 = G__22009;
count__21968 = G__22010;
i__21969 = G__22011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21966);
if(temp__4657__auto__){
var seq__21966__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21966__$1)){
var c__19864__auto__ = cljs.core.chunk_first.call(null,seq__21966__$1);
var G__22012 = cljs.core.chunk_rest.call(null,seq__21966__$1);
var G__22013 = c__19864__auto__;
var G__22014 = cljs.core.count.call(null,c__19864__auto__);
var G__22015 = (0);
seq__21966 = G__22012;
chunk__21967 = G__22013;
count__21968 = G__22014;
i__21969 = G__22015;
continue;
} else {
var map__21981 = cljs.core.first.call(null,seq__21966__$1);
var map__21981__$1 = ((((!((map__21981 == null)))?((((map__21981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21981):map__21981);
var ins = map__21981__$1;
var instruct = cljs.core.get.call(null,map__21981__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21983_22016 = cljs.core._EQ_;
var expr__21984_22017 = instruct;
if(cljs.core.truth_(pred__21983_22016.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21984_22017))){
var map__21986_22018 = ins;
var map__21986_22019__$1 = ((((!((map__21986_22018 == null)))?((((map__21986_22018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21986_22018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21986_22018):map__21986_22018);
var id_22020 = cljs.core.get.call(null,map__21986_22019__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22021 = cljs.core.get.call(null,map__21986_22019__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22020,vehicle_22021);
} else {
if(cljs.core.truth_(pred__21983_22016.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21984_22017))){
var map__21988_22022 = ins;
var map__21988_22023__$1 = ((((!((map__21988_22022 == null)))?((((map__21988_22022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21988_22022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21988_22022):map__21988_22022);
var id_22024 = cljs.core.get.call(null,map__21988_22023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22024);
} else {
if(cljs.core.truth_(pred__21983_22016.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21984_22017))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21983_22016.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21984_22017))){
var map__21990_22025 = ins;
var map__21990_22026__$1 = ((((!((map__21990_22025 == null)))?((((map__21990_22025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21990_22025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21990_22025):map__21990_22025);
var id_22027 = cljs.core.get.call(null,map__21990_22026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22028 = cljs.core.get.call(null,map__21990_22026__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22029 = cljs.core.get.call(null,map__21990_22026__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22030 = cljs.core.get.call(null,map__21990_22026__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22031 = cljs.core.get.call(null,map__21990_22026__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22027)){
chart.client.popup.call(null,id_22027,html_22030,time_22031);
} else {
if(cljs.core.truth_((function (){var and__19038__auto__ = lat_22028;
if(cljs.core.truth_(and__19038__auto__)){
return lon_22029;
} else {
return and__19038__auto__;
}
})())){
chart.client.popup.call(null,lat_22028,lon_22029,html_22030,time_22031);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22032 = cljs.core.next.call(null,seq__21966__$1);
var G__22033 = null;
var G__22034 = (0);
var G__22035 = (0);
seq__21966 = G__22032;
chunk__21967 = G__22033;
count__21968 = G__22034;
i__21969 = G__22035;
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
return ajax.core.GET.call(null,chart.client.INS_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.watch_visible = (function chart$client$watch_visible(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__22039 = cljs.core._EQ_;
var expr__22040 = cmd;
if(cljs.core.truth_(pred__22039.call(null,"watch-visible",expr__22040))){
return chart.client.watch_visible.call(null);
} else {
return cmd;
}
})())].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map