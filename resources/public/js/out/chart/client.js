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

var mp_21815 = cljs.core.deref.call(null,vmp);
var mrk_21816 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_21815);
var vec__21812_21817 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_21815);
var lat_21818 = cljs.core.nth.call(null,vec__21812_21817,(0),null);
var lon_21819 = cljs.core.nth.call(null,vec__21812_21817,(1),null);
var pos_21820 = (new L.LatLng(lat_21818,lon_21819));
mrk_21816.setLatLng(pos_21820);

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
var seq__21825_21829 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__21826_21830 = null;
var count__21827_21831 = (0);
var i__21828_21832 = (0);
while(true){
if((i__21828_21832 < count__21827_21831)){
var veh_21833 = cljs.core._nth.call(null,chunk__21826_21830,i__21828_21832);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21833)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21833)));

var G__21834 = seq__21825_21829;
var G__21835 = chunk__21826_21830;
var G__21836 = count__21827_21831;
var G__21837 = (i__21828_21832 + (1));
seq__21825_21829 = G__21834;
chunk__21826_21830 = G__21835;
count__21827_21831 = G__21836;
i__21828_21832 = G__21837;
continue;
} else {
var temp__4657__auto___21838 = cljs.core.seq.call(null,seq__21825_21829);
if(temp__4657__auto___21838){
var seq__21825_21839__$1 = temp__4657__auto___21838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21825_21839__$1)){
var c__19819__auto___21840 = cljs.core.chunk_first.call(null,seq__21825_21839__$1);
var G__21841 = cljs.core.chunk_rest.call(null,seq__21825_21839__$1);
var G__21842 = c__19819__auto___21840;
var G__21843 = cljs.core.count.call(null,c__19819__auto___21840);
var G__21844 = (0);
seq__21825_21829 = G__21841;
chunk__21826_21830 = G__21842;
count__21827_21831 = G__21843;
i__21828_21832 = G__21844;
continue;
} else {
var veh_21845 = cljs.core.first.call(null,seq__21825_21839__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21845)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21845)));

var G__21846 = cljs.core.next.call(null,seq__21825_21839__$1);
var G__21847 = null;
var G__21848 = (0);
var G__21849 = (0);
seq__21825_21829 = G__21846;
chunk__21826_21830 = G__21847;
count__21827_21831 = G__21848;
i__21828_21832 = G__21849;
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
var map__21852 = response;
var map__21852__$1 = ((((!((map__21852 == null)))?((((map__21852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21852):map__21852);
var status = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__21858 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__21858,(0),null);
var lon = cljs.core.nth.call(null,vec__21858,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__21858,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__21858,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__21854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__21854_SHARP_))),e.target);
});})(vec__21858,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__21858,lat,lon,pos,ico,opt,mrk__$1))
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
var args21861 = [];
var len__20113__auto___21867 = arguments.length;
var i__20114__auto___21868 = (0);
while(true){
if((i__20114__auto___21868 < len__20113__auto___21867)){
args21861.push((arguments[i__20114__auto___21868]));

var G__21869 = (i__20114__auto___21868 + (1));
i__20114__auto___21868 = G__21869;
continue;
} else {
}
break;
}

var G__21863 = args21861.length;
switch (G__21863) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21861.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__21864 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__21864,(0),null);
var lon = cljs.core.nth.call(null,vec__21864,(1),null);
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
var seq__21897 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__21898 = null;
var count__21899 = (0);
var i__21900 = (0);
while(true){
if((i__21900 < count__21899)){
var map__21901 = cljs.core._nth.call(null,chunk__21898,i__21900);
var map__21901__$1 = ((((!((map__21901 == null)))?((((map__21901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21901):map__21901);
var ins = map__21901__$1;
var instruct = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21903_21923 = cljs.core._EQ_;
var expr__21904_21924 = instruct;
if(cljs.core.truth_(pred__21903_21923.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21904_21924))){
var map__21906_21925 = ins;
var map__21906_21926__$1 = ((((!((map__21906_21925 == null)))?((((map__21906_21925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21906_21925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21906_21925):map__21906_21925);
var id_21927 = cljs.core.get.call(null,map__21906_21926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21928 = cljs.core.get.call(null,map__21906_21926__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_21927,vehicle_21928);
} else {
if(cljs.core.truth_(pred__21903_21923.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21904_21924))){
var map__21908_21929 = ins;
var map__21908_21930__$1 = ((((!((map__21908_21929 == null)))?((((map__21908_21929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21908_21929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21908_21929):map__21908_21929);
var id_21931 = cljs.core.get.call(null,map__21908_21930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_21931);
} else {
if(cljs.core.truth_(pred__21903_21923.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21904_21924))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21903_21923.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21904_21924))){
var map__21910_21932 = ins;
var map__21910_21933__$1 = ((((!((map__21910_21932 == null)))?((((map__21910_21932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21910_21932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21910_21932):map__21910_21932);
var id_21934 = cljs.core.get.call(null,map__21910_21933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_21935 = cljs.core.get.call(null,map__21910_21933__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21936 = cljs.core.get.call(null,map__21910_21933__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_21937 = cljs.core.get.call(null,map__21910_21933__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_21938 = cljs.core.get.call(null,map__21910_21933__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_21934)){
chart.client.popup.call(null,id_21934,html_21937,time_21938);
} else {
if(cljs.core.truth_((function (){var and__18993__auto__ = lat_21935;
if(cljs.core.truth_(and__18993__auto__)){
return lon_21936;
} else {
return and__18993__auto__;
}
})())){
chart.client.popup.call(null,lat_21935,lon_21936,html_21937,time_21938);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__21939 = seq__21897;
var G__21940 = chunk__21898;
var G__21941 = count__21899;
var G__21942 = (i__21900 + (1));
seq__21897 = G__21939;
chunk__21898 = G__21940;
count__21899 = G__21941;
i__21900 = G__21942;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21897);
if(temp__4657__auto__){
var seq__21897__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21897__$1)){
var c__19819__auto__ = cljs.core.chunk_first.call(null,seq__21897__$1);
var G__21943 = cljs.core.chunk_rest.call(null,seq__21897__$1);
var G__21944 = c__19819__auto__;
var G__21945 = cljs.core.count.call(null,c__19819__auto__);
var G__21946 = (0);
seq__21897 = G__21943;
chunk__21898 = G__21944;
count__21899 = G__21945;
i__21900 = G__21946;
continue;
} else {
var map__21912 = cljs.core.first.call(null,seq__21897__$1);
var map__21912__$1 = ((((!((map__21912 == null)))?((((map__21912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21912):map__21912);
var ins = map__21912__$1;
var instruct = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21914_21947 = cljs.core._EQ_;
var expr__21915_21948 = instruct;
if(cljs.core.truth_(pred__21914_21947.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21915_21948))){
var map__21917_21949 = ins;
var map__21917_21950__$1 = ((((!((map__21917_21949 == null)))?((((map__21917_21949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21917_21949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21917_21949):map__21917_21949);
var id_21951 = cljs.core.get.call(null,map__21917_21950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21952 = cljs.core.get.call(null,map__21917_21950__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_21951,vehicle_21952);
} else {
if(cljs.core.truth_(pred__21914_21947.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21915_21948))){
var map__21919_21953 = ins;
var map__21919_21954__$1 = ((((!((map__21919_21953 == null)))?((((map__21919_21953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21919_21953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21919_21953):map__21919_21953);
var id_21955 = cljs.core.get.call(null,map__21919_21954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_21955);
} else {
if(cljs.core.truth_(pred__21914_21947.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21915_21948))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21914_21947.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21915_21948))){
var map__21921_21956 = ins;
var map__21921_21957__$1 = ((((!((map__21921_21956 == null)))?((((map__21921_21956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21921_21956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21921_21956):map__21921_21956);
var id_21958 = cljs.core.get.call(null,map__21921_21957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_21959 = cljs.core.get.call(null,map__21921_21957__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21960 = cljs.core.get.call(null,map__21921_21957__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_21961 = cljs.core.get.call(null,map__21921_21957__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_21962 = cljs.core.get.call(null,map__21921_21957__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_21958)){
chart.client.popup.call(null,id_21958,html_21961,time_21962);
} else {
if(cljs.core.truth_((function (){var and__18993__auto__ = lat_21959;
if(cljs.core.truth_(and__18993__auto__)){
return lon_21960;
} else {
return and__18993__auto__;
}
})())){
chart.client.popup.call(null,lat_21959,lon_21960,html_21961,time_21962);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__21963 = cljs.core.next.call(null,seq__21897__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21897 = G__21963;
chunk__21898 = G__21964;
count__21899 = G__21965;
i__21900 = G__21966;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__21970 = cljs.core._EQ_;
var expr__21971 = cmd;
if(cljs.core.truth_(pred__21970.call(null,"watch-visible",expr__21971))){
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

var m = L.map("map").setView([50.04,8.55],(10));
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