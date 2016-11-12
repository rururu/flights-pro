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

var mp_23566 = cljs.core.deref.call(null,vmp);
var mrk_23567 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23566);
var vec__23563_23568 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23566);
var lat_23569 = cljs.core.nth.call(null,vec__23563_23568,(0),null);
var lon_23570 = cljs.core.nth.call(null,vec__23563_23568,(1),null);
var pos_23571 = (new L.LatLng(lat_23569,lon_23570));
mrk_23567.setLatLng(pos_23571);

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
var seq__23576_23580 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23577_23581 = null;
var count__23578_23582 = (0);
var i__23579_23583 = (0);
while(true){
if((i__23579_23583 < count__23578_23582)){
var veh_23584 = cljs.core._nth.call(null,chunk__23577_23581,i__23579_23583);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23584)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23584)));

var G__23585 = seq__23576_23580;
var G__23586 = chunk__23577_23581;
var G__23587 = count__23578_23582;
var G__23588 = (i__23579_23583 + (1));
seq__23576_23580 = G__23585;
chunk__23577_23581 = G__23586;
count__23578_23582 = G__23587;
i__23579_23583 = G__23588;
continue;
} else {
var temp__4657__auto___23589 = cljs.core.seq.call(null,seq__23576_23580);
if(temp__4657__auto___23589){
var seq__23576_23590__$1 = temp__4657__auto___23589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23576_23590__$1)){
var c__19516__auto___23591 = cljs.core.chunk_first.call(null,seq__23576_23590__$1);
var G__23592 = cljs.core.chunk_rest.call(null,seq__23576_23590__$1);
var G__23593 = c__19516__auto___23591;
var G__23594 = cljs.core.count.call(null,c__19516__auto___23591);
var G__23595 = (0);
seq__23576_23580 = G__23592;
chunk__23577_23581 = G__23593;
count__23578_23582 = G__23594;
i__23579_23583 = G__23595;
continue;
} else {
var veh_23596 = cljs.core.first.call(null,seq__23576_23590__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23596)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23596)));

var G__23597 = cljs.core.next.call(null,seq__23576_23590__$1);
var G__23598 = null;
var G__23599 = (0);
var G__23600 = (0);
seq__23576_23580 = G__23597;
chunk__23577_23581 = G__23598;
count__23578_23582 = G__23599;
i__23579_23583 = G__23600;
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
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INFO","INFO",-1061657090),id], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__23605 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23605,(0),null);
var lon = cljs.core.nth.call(null,vec__23605,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__23605,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23605,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23601_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23601_SHARP_))),e.target);
});})(vec__23605,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23605,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.error_handler = (function chart$client$error_handler(response){
var map__23610 = response;
var map__23610__$1 = ((((!((map__23610 == null)))?((((map__23610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23610):map__23610);
var status = cljs.core.get.call(null,map__23610__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23610__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__23634 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23635 = null;
var count__23636 = (0);
var i__23637 = (0);
while(true){
if((i__23637 < count__23636)){
var map__23638 = cljs.core._nth.call(null,chunk__23635,i__23637);
var map__23638__$1 = ((((!((map__23638 == null)))?((((map__23638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23638):map__23638);
var ins = map__23638__$1;
var instruct = cljs.core.get.call(null,map__23638__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23640_23656 = cljs.core._EQ_;
var expr__23641_23657 = instruct;
if(cljs.core.truth_(pred__23640_23656.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23641_23657))){
var map__23643_23658 = ins;
var map__23643_23659__$1 = ((((!((map__23643_23658 == null)))?((((map__23643_23658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23643_23658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23643_23658):map__23643_23658);
var id_23660 = cljs.core.get.call(null,map__23643_23659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23661 = cljs.core.get.call(null,map__23643_23659__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23660,vehicle_23661);
} else {
if(cljs.core.truth_(pred__23640_23656.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23641_23657))){
var map__23645_23662 = ins;
var map__23645_23663__$1 = ((((!((map__23645_23662 == null)))?((((map__23645_23662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23645_23662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23645_23662):map__23645_23662);
var id_23664 = cljs.core.get.call(null,map__23645_23663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23664);
} else {
if(cljs.core.truth_(pred__23640_23656.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23641_23657))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__23665 = seq__23634;
var G__23666 = chunk__23635;
var G__23667 = count__23636;
var G__23668 = (i__23637 + (1));
seq__23634 = G__23665;
chunk__23635 = G__23666;
count__23636 = G__23667;
i__23637 = G__23668;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23634);
if(temp__4657__auto__){
var seq__23634__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23634__$1)){
var c__19516__auto__ = cljs.core.chunk_first.call(null,seq__23634__$1);
var G__23669 = cljs.core.chunk_rest.call(null,seq__23634__$1);
var G__23670 = c__19516__auto__;
var G__23671 = cljs.core.count.call(null,c__19516__auto__);
var G__23672 = (0);
seq__23634 = G__23669;
chunk__23635 = G__23670;
count__23636 = G__23671;
i__23637 = G__23672;
continue;
} else {
var map__23647 = cljs.core.first.call(null,seq__23634__$1);
var map__23647__$1 = ((((!((map__23647 == null)))?((((map__23647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);
var ins = map__23647__$1;
var instruct = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23649_23673 = cljs.core._EQ_;
var expr__23650_23674 = instruct;
if(cljs.core.truth_(pred__23649_23673.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23650_23674))){
var map__23652_23675 = ins;
var map__23652_23676__$1 = ((((!((map__23652_23675 == null)))?((((map__23652_23675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23652_23675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23652_23675):map__23652_23675);
var id_23677 = cljs.core.get.call(null,map__23652_23676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23678 = cljs.core.get.call(null,map__23652_23676__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23677,vehicle_23678);
} else {
if(cljs.core.truth_(pred__23649_23673.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23650_23674))){
var map__23654_23679 = ins;
var map__23654_23680__$1 = ((((!((map__23654_23679 == null)))?((((map__23654_23679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23654_23679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23654_23679):map__23654_23679);
var id_23681 = cljs.core.get.call(null,map__23654_23680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23681);
} else {
if(cljs.core.truth_(pred__23649_23673.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23650_23674))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__23682 = cljs.core.next.call(null,seq__23634__$1);
var G__23683 = null;
var G__23684 = (0);
var G__23685 = (0);
seq__23634 = G__23682;
chunk__23635 = G__23683;
count__23636 = G__23684;
i__23637 = G__23685;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__23689 = cljs.core._EQ_;
var expr__23690 = cmd;
if(cljs.core.truth_(pred__23689.call(null,"watch-visible",expr__23690))){
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

var m = L.map("map").setView([60.0,30.0],(10));
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