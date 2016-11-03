// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.BSE_URL = "http://localhost:4444/";
view3d.client.DIR_URL = "http://localhost:4444/directives/";
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.HUD_TIO = (831);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__38508 = response;
var map__38508__$1 = ((((!((map__38508 == null)))?((((map__38508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38508):map__38508);
var status = cljs.core.get.call(null,map__38508__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__38508__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__38536 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__38537 = null;
var count__38538 = (0);
var i__38539 = (0);
while(true){
if((i__38539 < count__38538)){
var map__38540 = cljs.core._nth.call(null,chunk__38537,i__38539);
var map__38540__$1 = ((((!((map__38540 == null)))?((((map__38540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38540):map__38540);
var dir = map__38540__$1;
var directive = cljs.core.get.call(null,map__38540__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__38542_38562 = cljs.core._EQ_;
var expr__38543_38563 = directive;
if(cljs.core.truth_(pred__38542_38562.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__38543_38563))){
var map__38545_38564 = dir;
var map__38545_38565__$1 = ((((!((map__38545_38564 == null)))?((((map__38545_38564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38545_38564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38545_38564):map__38545_38564);
var lat_38566 = cljs.core.get.call(null,map__38545_38565__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_38567 = cljs.core.get.call(null,map__38545_38565__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_38568 = cljs.core.get.call(null,map__38545_38565__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_38569 = cljs.core.get.call(null,map__38545_38565__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_38570 = cljs.core.get.call(null,map__38545_38565__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_38566,lon_38567,alt_38569,crs_38568,period_38570);
} else {
if(cljs.core.truth_(pred__38542_38562.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__38543_38563))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__38542_38562.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__38543_38563))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__38542_38562.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__38543_38563))){
var map__38547_38571 = dir;
var map__38547_38572__$1 = ((((!((map__38547_38571 == null)))?((((map__38547_38571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38547_38571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38547_38571):map__38547_38571);
var course_38573 = cljs.core.get.call(null,map__38547_38572__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_38573);
} else {
if(cljs.core.truth_(pred__38542_38562.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__38543_38563))){
var map__38549_38574 = dir;
var map__38549_38575__$1 = ((((!((map__38549_38574 == null)))?((((map__38549_38574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38549_38574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38549_38574):map__38549_38574);
var speed_38576 = cljs.core.get.call(null,map__38549_38575__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_38577 = cljs.core.get.call(null,map__38549_38575__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_38576,temp_38577);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__38578 = seq__38536;
var G__38579 = chunk__38537;
var G__38580 = count__38538;
var G__38581 = (i__38539 + (1));
seq__38536 = G__38578;
chunk__38537 = G__38579;
count__38538 = G__38580;
i__38539 = G__38581;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38536);
if(temp__4657__auto__){
var seq__38536__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38536__$1)){
var c__19985__auto__ = cljs.core.chunk_first.call(null,seq__38536__$1);
var G__38582 = cljs.core.chunk_rest.call(null,seq__38536__$1);
var G__38583 = c__19985__auto__;
var G__38584 = cljs.core.count.call(null,c__19985__auto__);
var G__38585 = (0);
seq__38536 = G__38582;
chunk__38537 = G__38583;
count__38538 = G__38584;
i__38539 = G__38585;
continue;
} else {
var map__38551 = cljs.core.first.call(null,seq__38536__$1);
var map__38551__$1 = ((((!((map__38551 == null)))?((((map__38551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38551):map__38551);
var dir = map__38551__$1;
var directive = cljs.core.get.call(null,map__38551__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__38553_38586 = cljs.core._EQ_;
var expr__38554_38587 = directive;
if(cljs.core.truth_(pred__38553_38586.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__38554_38587))){
var map__38556_38588 = dir;
var map__38556_38589__$1 = ((((!((map__38556_38588 == null)))?((((map__38556_38588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38556_38588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38556_38588):map__38556_38588);
var lat_38590 = cljs.core.get.call(null,map__38556_38589__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_38591 = cljs.core.get.call(null,map__38556_38589__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_38592 = cljs.core.get.call(null,map__38556_38589__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_38593 = cljs.core.get.call(null,map__38556_38589__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_38594 = cljs.core.get.call(null,map__38556_38589__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_38590,lon_38591,alt_38593,crs_38592,period_38594);
} else {
if(cljs.core.truth_(pred__38553_38586.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__38554_38587))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__38553_38586.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__38554_38587))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__38553_38586.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__38554_38587))){
var map__38558_38595 = dir;
var map__38558_38596__$1 = ((((!((map__38558_38595 == null)))?((((map__38558_38595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38558_38595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38558_38595):map__38558_38595);
var course_38597 = cljs.core.get.call(null,map__38558_38596__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_38597);
} else {
if(cljs.core.truth_(pred__38553_38586.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__38554_38587))){
var map__38560_38598 = dir;
var map__38560_38599__$1 = ((((!((map__38560_38598 == null)))?((((map__38560_38598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38560_38598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38560_38598):map__38560_38598);
var speed_38600 = cljs.core.get.call(null,map__38560_38599__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_38601 = cljs.core.get.call(null,map__38560_38599__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_38600,temp_38601);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__38602 = cljs.core.next.call(null,seq__38536__$1);
var G__38603 = null;
var G__38604 = (0);
var G__38605 = (0);
seq__38536 = G__38602;
chunk__38537 = G__38603;
count__38538 = G__38604;
i__38539 = G__38605;
continue;
}
} else {
return null;
}
}
break;
}
});
view3d.client.receive_directives = (function view3d$client$receive_directives(){
return ajax.core.GET.call(null,view3d.client.DIR_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.camera_move = (function view3d$client$camera_move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
var vec__38609 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__38609,(0),null);
var lon = cljs.core.nth.call(null,vec__38609,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step","step",1288888124),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
view3d.client.onboard = (function view3d$client$onboard(call){
return null;
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
if((((-180) <= deg)) && ((deg <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
if((((-180) <= deg)) && ((deg <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
if((((0) <= crs)) && ((crs <= (360)))){
return carr.move.turn_and_bank.call(null,view3d.client.CARRIER,crs);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1000)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt,tmp);
});
window.onload = view3d.client.on_load.call(null);
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(10000),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null)));

//# sourceMappingURL=client.js.map