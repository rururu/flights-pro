// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('calc.dynamic');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.PORT = (4444);
view3d.client.BSE_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join('');
view3d.client.DIR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join('');
view3d.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join('');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),"-",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.HUD_TIO = (831);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var arc = calc.dynamic.abs.call(null,(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)) - course));
if((arc < (10))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var bank = (cljs.core.truth_(calc.dynamic.turn_right_QMARK_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course))?new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)):(- new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1))));
var vec__23419 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__23419,(0),null);
var temp = cljs.core.nth.call(null,vec__23419,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__23419,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__23419,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__23424 = response;
var map__23424__$1 = ((((!((map__23424 == null)))?((((map__23424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23424):map__23424);
var status = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.onboard = (function view3d$client$onboard(call){
return ajax.core.GET.call(null,[cljs.core.str(view3d.client.CMD_URL),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"name","name",1843675177),callsign));
} else {
}

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),vehicle));

return carr.move.set_turn_point.call(null,view3d.client.CARRIER);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__23460 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__23461 = null;
var count__23462 = (0);
var i__23463 = (0);
while(true){
if((i__23463 < count__23462)){
var map__23464 = cljs.core._nth.call(null,chunk__23461,i__23463);
var map__23464__$1 = ((((!((map__23464 == null)))?((((map__23464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23464):map__23464);
var dir = map__23464__$1;
var directive = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__23466_23494 = cljs.core._EQ_;
var expr__23467_23495 = directive;
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__23467_23495))){
var map__23469_23496 = dir;
var map__23469_23497__$1 = ((((!((map__23469_23496 == null)))?((((map__23469_23496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23469_23496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23469_23496):map__23469_23496);
var list_23498 = cljs.core.get.call(null,map__23469_23497__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_23498);
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23467_23495))){
var map__23471_23499 = dir;
var map__23471_23500__$1 = ((((!((map__23471_23499 == null)))?((((map__23471_23499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23471_23499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23471_23499):map__23471_23499);
var callsign_23501 = cljs.core.get.call(null,map__23471_23500__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23502 = cljs.core.get.call(null,map__23471_23500__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_23501,vehicle_23502);
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__23467_23495))){
var map__23473_23503 = dir;
var map__23473_23504__$1 = ((((!((map__23473_23503 == null)))?((((map__23473_23503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23473_23503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23473_23503):map__23473_23503);
var lat_23505 = cljs.core.get.call(null,map__23473_23504__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23506 = cljs.core.get.call(null,map__23473_23504__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_23507 = cljs.core.get.call(null,map__23473_23504__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_23508 = cljs.core.get.call(null,map__23473_23504__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_23509 = cljs.core.get.call(null,map__23473_23504__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_23505,lon_23506,alt_23508,crs_23507,period_23509);
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23467_23495))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__23467_23495))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__23467_23495))){
var map__23475_23510 = dir;
var map__23475_23511__$1 = ((((!((map__23475_23510 == null)))?((((map__23475_23510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23475_23510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23475_23510):map__23475_23510);
var course_23512 = cljs.core.get.call(null,map__23475_23511__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_23512);
} else {
if(cljs.core.truth_(pred__23466_23494.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__23467_23495))){
var map__23477_23513 = dir;
var map__23477_23514__$1 = ((((!((map__23477_23513 == null)))?((((map__23477_23513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23477_23513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23477_23513):map__23477_23513);
var speed_23515 = cljs.core.get.call(null,map__23477_23514__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_23516 = cljs.core.get.call(null,map__23477_23514__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_23515,temp_23516);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__23517 = seq__23460;
var G__23518 = chunk__23461;
var G__23519 = count__23462;
var G__23520 = (i__23463 + (1));
seq__23460 = G__23517;
chunk__23461 = G__23518;
count__23462 = G__23519;
i__23463 = G__23520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23460);
if(temp__4657__auto__){
var seq__23460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23460__$1)){
var c__19516__auto__ = cljs.core.chunk_first.call(null,seq__23460__$1);
var G__23521 = cljs.core.chunk_rest.call(null,seq__23460__$1);
var G__23522 = c__19516__auto__;
var G__23523 = cljs.core.count.call(null,c__19516__auto__);
var G__23524 = (0);
seq__23460 = G__23521;
chunk__23461 = G__23522;
count__23462 = G__23523;
i__23463 = G__23524;
continue;
} else {
var map__23479 = cljs.core.first.call(null,seq__23460__$1);
var map__23479__$1 = ((((!((map__23479 == null)))?((((map__23479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23479):map__23479);
var dir = map__23479__$1;
var directive = cljs.core.get.call(null,map__23479__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__23481_23525 = cljs.core._EQ_;
var expr__23482_23526 = directive;
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__23482_23526))){
var map__23484_23527 = dir;
var map__23484_23528__$1 = ((((!((map__23484_23527 == null)))?((((map__23484_23527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23484_23527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23484_23527):map__23484_23527);
var list_23529 = cljs.core.get.call(null,map__23484_23528__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_23529);
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23482_23526))){
var map__23486_23530 = dir;
var map__23486_23531__$1 = ((((!((map__23486_23530 == null)))?((((map__23486_23530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23486_23530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23486_23530):map__23486_23530);
var callsign_23532 = cljs.core.get.call(null,map__23486_23531__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23533 = cljs.core.get.call(null,map__23486_23531__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_23532,vehicle_23533);
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__23482_23526))){
var map__23488_23534 = dir;
var map__23488_23535__$1 = ((((!((map__23488_23534 == null)))?((((map__23488_23534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23488_23534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23488_23534):map__23488_23534);
var lat_23536 = cljs.core.get.call(null,map__23488_23535__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23537 = cljs.core.get.call(null,map__23488_23535__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_23538 = cljs.core.get.call(null,map__23488_23535__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_23539 = cljs.core.get.call(null,map__23488_23535__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_23540 = cljs.core.get.call(null,map__23488_23535__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_23536,lon_23537,alt_23539,crs_23538,period_23540);
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23482_23526))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__23482_23526))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__23482_23526))){
var map__23490_23541 = dir;
var map__23490_23542__$1 = ((((!((map__23490_23541 == null)))?((((map__23490_23541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23490_23541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23490_23541):map__23490_23541);
var course_23543 = cljs.core.get.call(null,map__23490_23542__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_23543);
} else {
if(cljs.core.truth_(pred__23481_23525.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__23482_23526))){
var map__23492_23544 = dir;
var map__23492_23545__$1 = ((((!((map__23492_23544 == null)))?((((map__23492_23544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23492_23544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492_23544):map__23492_23544);
var speed_23546 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_23547 = cljs.core.get.call(null,map__23492_23545__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_23546,temp_23547);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__23548 = cljs.core.next.call(null,seq__23460__$1);
var G__23549 = null;
var G__23550 = (0);
var G__23551 = (0);
seq__23460 = G__23548;
chunk__23461 = G__23549;
count__23462 = G__23550;
i__23463 = G__23551;
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
var vec__23555 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__23555,(0),null);
var lon = cljs.core.nth.call(null,vec__23555,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
var crs__$1 = cljs.reader.read_string.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var spd__$1 = cljs.reader.read_string.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var alt__$1 = cljs.reader.read_string.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1000)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map