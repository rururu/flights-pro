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

var mp_31780 = cljs.core.deref.call(null,vmp);
var mrk_31781 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_31780);
var vec__31777_31782 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_31780);
var lat_31783 = cljs.core.nth.call(null,vec__31777_31782,(0),null);
var lon_31784 = cljs.core.nth.call(null,vec__31777_31782,(1),null);
var pos_31785 = (new L.LatLng(lat_31783,lon_31784));
mrk_31781.setLatLng(pos_31785);

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
var seq__31790_31794 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__31791_31795 = null;
var count__31792_31796 = (0);
var i__31793_31797 = (0);
while(true){
if((i__31793_31797 < count__31792_31796)){
var veh_31798 = cljs.core._nth.call(null,chunk__31791_31795,i__31793_31797);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31798)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31798)));

var G__31799 = seq__31790_31794;
var G__31800 = chunk__31791_31795;
var G__31801 = count__31792_31796;
var G__31802 = (i__31793_31797 + (1));
seq__31790_31794 = G__31799;
chunk__31791_31795 = G__31800;
count__31792_31796 = G__31801;
i__31793_31797 = G__31802;
continue;
} else {
var temp__4657__auto___31803 = cljs.core.seq.call(null,seq__31790_31794);
if(temp__4657__auto___31803){
var seq__31790_31804__$1 = temp__4657__auto___31803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31790_31804__$1)){
var c__20438__auto___31805 = cljs.core.chunk_first.call(null,seq__31790_31804__$1);
var G__31806 = cljs.core.chunk_rest.call(null,seq__31790_31804__$1);
var G__31807 = c__20438__auto___31805;
var G__31808 = cljs.core.count.call(null,c__20438__auto___31805);
var G__31809 = (0);
seq__31790_31794 = G__31806;
chunk__31791_31795 = G__31807;
count__31792_31796 = G__31808;
i__31793_31797 = G__31809;
continue;
} else {
var veh_31810 = cljs.core.first.call(null,seq__31790_31804__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31810)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31810)));

var G__31811 = cljs.core.next.call(null,seq__31790_31804__$1);
var G__31812 = null;
var G__31813 = (0);
var G__31814 = (0);
seq__31790_31794 = G__31811;
chunk__31791_31795 = G__31812;
count__31792_31796 = G__31813;
i__31793_31797 = G__31814;
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
var map__31817 = response;
var map__31817__$1 = ((((!((map__31817 == null)))?((((map__31817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31817):map__31817);
var status = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__31823 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__31823,(0),null);
var lon = cljs.core.nth.call(null,vec__31823,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__31823,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__31823,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__31819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__31819_SHARP_))),e.target);
});})(vec__31823,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__31823,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,chart.client.MOV_TIO));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.popup = (function chart$client$popup(var_args){
var args31826 = [];
var len__20732__auto___31832 = arguments.length;
var i__20733__auto___31833 = (0);
while(true){
if((i__20733__auto___31833 < len__20732__auto___31832)){
args31826.push((arguments[i__20733__auto___31833]));

var G__31834 = (i__20733__auto___31833 + (1));
i__20733__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31828 = args31826.length;
switch (G__31828) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31826.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__31829 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__31829,(0),null);
var lon = cljs.core.nth.call(null,vec__31829,(1),null);
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
var seq__31862 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__31863 = null;
var count__31864 = (0);
var i__31865 = (0);
while(true){
if((i__31865 < count__31864)){
var map__31866 = cljs.core._nth.call(null,chunk__31863,i__31865);
var map__31866__$1 = ((((!((map__31866 == null)))?((((map__31866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31866):map__31866);
var ins = map__31866__$1;
var instruct = cljs.core.get.call(null,map__31866__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31868_31888 = cljs.core._EQ_;
var expr__31869_31889 = instruct;
if(cljs.core.truth_(pred__31868_31888.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31869_31889))){
var map__31871_31890 = ins;
var map__31871_31891__$1 = ((((!((map__31871_31890 == null)))?((((map__31871_31890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31871_31890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31871_31890):map__31871_31890);
var id_31892 = cljs.core.get.call(null,map__31871_31891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31893 = cljs.core.get.call(null,map__31871_31891__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31892,vehicle_31893);
} else {
if(cljs.core.truth_(pred__31868_31888.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31869_31889))){
var map__31873_31894 = ins;
var map__31873_31895__$1 = ((((!((map__31873_31894 == null)))?((((map__31873_31894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31873_31894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31873_31894):map__31873_31894);
var id_31896 = cljs.core.get.call(null,map__31873_31895__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31896);
} else {
if(cljs.core.truth_(pred__31868_31888.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31869_31889))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31868_31888.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31869_31889))){
var map__31875_31897 = ins;
var map__31875_31898__$1 = ((((!((map__31875_31897 == null)))?((((map__31875_31897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31875_31897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31875_31897):map__31875_31897);
var id_31899 = cljs.core.get.call(null,map__31875_31898__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31900 = cljs.core.get.call(null,map__31875_31898__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31901 = cljs.core.get.call(null,map__31875_31898__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31902 = cljs.core.get.call(null,map__31875_31898__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31903 = cljs.core.get.call(null,map__31875_31898__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31899)){
chart.client.popup.call(null,id_31899,html_31902,time_31903);
} else {
if(cljs.core.truth_((function (){var and__19612__auto__ = lat_31900;
if(cljs.core.truth_(and__19612__auto__)){
return lon_31901;
} else {
return and__19612__auto__;
}
})())){
chart.client.popup.call(null,lat_31900,lon_31901,html_31902,time_31903);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__31904 = seq__31862;
var G__31905 = chunk__31863;
var G__31906 = count__31864;
var G__31907 = (i__31865 + (1));
seq__31862 = G__31904;
chunk__31863 = G__31905;
count__31864 = G__31906;
i__31865 = G__31907;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31862);
if(temp__4657__auto__){
var seq__31862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31862__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__31862__$1);
var G__31908 = cljs.core.chunk_rest.call(null,seq__31862__$1);
var G__31909 = c__20438__auto__;
var G__31910 = cljs.core.count.call(null,c__20438__auto__);
var G__31911 = (0);
seq__31862 = G__31908;
chunk__31863 = G__31909;
count__31864 = G__31910;
i__31865 = G__31911;
continue;
} else {
var map__31877 = cljs.core.first.call(null,seq__31862__$1);
var map__31877__$1 = ((((!((map__31877 == null)))?((((map__31877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31877):map__31877);
var ins = map__31877__$1;
var instruct = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31879_31912 = cljs.core._EQ_;
var expr__31880_31913 = instruct;
if(cljs.core.truth_(pred__31879_31912.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31880_31913))){
var map__31882_31914 = ins;
var map__31882_31915__$1 = ((((!((map__31882_31914 == null)))?((((map__31882_31914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882_31914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882_31914):map__31882_31914);
var id_31916 = cljs.core.get.call(null,map__31882_31915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31917 = cljs.core.get.call(null,map__31882_31915__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31916,vehicle_31917);
} else {
if(cljs.core.truth_(pred__31879_31912.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31880_31913))){
var map__31884_31918 = ins;
var map__31884_31919__$1 = ((((!((map__31884_31918 == null)))?((((map__31884_31918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31884_31918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884_31918):map__31884_31918);
var id_31920 = cljs.core.get.call(null,map__31884_31919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31920);
} else {
if(cljs.core.truth_(pred__31879_31912.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31880_31913))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31879_31912.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31880_31913))){
var map__31886_31921 = ins;
var map__31886_31922__$1 = ((((!((map__31886_31921 == null)))?((((map__31886_31921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31886_31921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31886_31921):map__31886_31921);
var id_31923 = cljs.core.get.call(null,map__31886_31922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31924 = cljs.core.get.call(null,map__31886_31922__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31925 = cljs.core.get.call(null,map__31886_31922__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31926 = cljs.core.get.call(null,map__31886_31922__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31927 = cljs.core.get.call(null,map__31886_31922__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31923)){
chart.client.popup.call(null,id_31923,html_31926,time_31927);
} else {
if(cljs.core.truth_((function (){var and__19612__auto__ = lat_31924;
if(cljs.core.truth_(and__19612__auto__)){
return lon_31925;
} else {
return and__19612__auto__;
}
})())){
chart.client.popup.call(null,lat_31924,lon_31925,html_31926,time_31927);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__31928 = cljs.core.next.call(null,seq__31862__$1);
var G__31929 = null;
var G__31930 = (0);
var G__31931 = (0);
seq__31862 = G__31928;
chunk__31863 = G__31929;
count__31864 = G__31930;
i__31865 = G__31931;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__31935 = cljs.core._EQ_;
var expr__31936 = cmd;
if(cljs.core.truth_(pred__31935.call(null,"watch-visible",expr__31936))){
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