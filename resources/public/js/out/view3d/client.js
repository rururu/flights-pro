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
view3d.client.HUD_TIO = (831);
view3d.client.CAM_TIO = (4000);
view3d.client.num_val = (function view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var arc = calc.dynamic.abs.call(null,(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)) - course));
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((alt < (90))) || ((arc < (8)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var bank = (cljs.core.truth_(calc.dynamic.turn_right_QMARK_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course))?new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)):(- new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1))));
var vec__27477 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__27477,(0),null);
var temp = cljs.core.nth.call(null,vec__27477,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__27477,bank__$1,temp,arc,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__27477,bank__$1,temp,arc,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__27482 = response;
var map__27482__$1 = ((((!((map__27482 == null)))?((((map__27482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27482):map__27482);
var status = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var old_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var new_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),vehicle));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if((calc.dynamic.abs.call(null,(old_crs - new_crs)) > (10))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
var crs__$1 = view3d.client.num_val.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var spd__$1 = view3d.client.num_val.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var alt__$1 = view3d.client.num_val.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1500)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__27518 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__27519 = null;
var count__27520 = (0);
var i__27521 = (0);
while(true){
if((i__27521 < count__27520)){
var map__27522 = cljs.core._nth.call(null,chunk__27519,i__27521);
var map__27522__$1 = ((((!((map__27522 == null)))?((((map__27522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27522):map__27522);
var dir = map__27522__$1;
var directive = cljs.core.get.call(null,map__27522__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__27524_27552 = cljs.core._EQ_;
var expr__27525_27553 = directive;
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__27525_27553))){
var map__27527_27554 = dir;
var map__27527_27555__$1 = ((((!((map__27527_27554 == null)))?((((map__27527_27554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527_27554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527_27554):map__27527_27554);
var list_27556 = cljs.core.get.call(null,map__27527_27555__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_27556);
} else {
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__27525_27553))){
var map__27529_27557 = dir;
var map__27529_27558__$1 = ((((!((map__27529_27557 == null)))?((((map__27529_27557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27529_27557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27529_27557):map__27529_27557);
var callsign_27559 = cljs.core.get.call(null,map__27529_27558__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_27560 = cljs.core.get.call(null,map__27529_27558__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_27559,vehicle_27560);
} else {
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__27525_27553))){
var map__27531_27561 = dir;
var map__27531_27562__$1 = ((((!((map__27531_27561 == null)))?((((map__27531_27561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27531_27561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27531_27561):map__27531_27561);
var crs_27563 = cljs.core.get.call(null,map__27531_27562__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_27564 = cljs.core.get.call(null,map__27531_27562__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_27565 = cljs.core.get.call(null,map__27531_27562__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_27563);

view3d.client.speed.call(null,spd_27564);

view3d.client.altitude.call(null,alt_27565);
} else {
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__27525_27553))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__27525_27553))){
var map__27533_27566 = dir;
var map__27533_27567__$1 = ((((!((map__27533_27566 == null)))?((((map__27533_27566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27533_27566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27533_27566):map__27533_27566);
var course_27568 = cljs.core.get.call(null,map__27533_27567__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_27568);
} else {
if(cljs.core.truth_(pred__27524_27552.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__27525_27553))){
var map__27535_27569 = dir;
var map__27535_27570__$1 = ((((!((map__27535_27569 == null)))?((((map__27535_27569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27535_27569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27535_27569):map__27535_27569);
var speed_27571 = cljs.core.get.call(null,map__27535_27570__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_27572 = cljs.core.get.call(null,map__27535_27570__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_27571,temp_27572);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__27573 = seq__27518;
var G__27574 = chunk__27519;
var G__27575 = count__27520;
var G__27576 = (i__27521 + (1));
seq__27518 = G__27573;
chunk__27519 = G__27574;
count__27520 = G__27575;
i__27521 = G__27576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27518);
if(temp__4657__auto__){
var seq__27518__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27518__$1)){
var c__20120__auto__ = cljs.core.chunk_first.call(null,seq__27518__$1);
var G__27577 = cljs.core.chunk_rest.call(null,seq__27518__$1);
var G__27578 = c__20120__auto__;
var G__27579 = cljs.core.count.call(null,c__20120__auto__);
var G__27580 = (0);
seq__27518 = G__27577;
chunk__27519 = G__27578;
count__27520 = G__27579;
i__27521 = G__27580;
continue;
} else {
var map__27537 = cljs.core.first.call(null,seq__27518__$1);
var map__27537__$1 = ((((!((map__27537 == null)))?((((map__27537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27537):map__27537);
var dir = map__27537__$1;
var directive = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__27539_27581 = cljs.core._EQ_;
var expr__27540_27582 = directive;
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__27540_27582))){
var map__27542_27583 = dir;
var map__27542_27584__$1 = ((((!((map__27542_27583 == null)))?((((map__27542_27583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27542_27583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27542_27583):map__27542_27583);
var list_27585 = cljs.core.get.call(null,map__27542_27584__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_27585);
} else {
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__27540_27582))){
var map__27544_27586 = dir;
var map__27544_27587__$1 = ((((!((map__27544_27586 == null)))?((((map__27544_27586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27544_27586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27544_27586):map__27544_27586);
var callsign_27588 = cljs.core.get.call(null,map__27544_27587__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_27589 = cljs.core.get.call(null,map__27544_27587__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_27588,vehicle_27589);
} else {
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__27540_27582))){
var map__27546_27590 = dir;
var map__27546_27591__$1 = ((((!((map__27546_27590 == null)))?((((map__27546_27590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27546_27590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546_27590):map__27546_27590);
var crs_27592 = cljs.core.get.call(null,map__27546_27591__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_27593 = cljs.core.get.call(null,map__27546_27591__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_27594 = cljs.core.get.call(null,map__27546_27591__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_27592);

view3d.client.speed.call(null,spd_27593);

view3d.client.altitude.call(null,alt_27594);
} else {
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__27540_27582))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__27540_27582))){
var map__27548_27595 = dir;
var map__27548_27596__$1 = ((((!((map__27548_27595 == null)))?((((map__27548_27595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27548_27595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27548_27595):map__27548_27595);
var course_27597 = cljs.core.get.call(null,map__27548_27596__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_27597);
} else {
if(cljs.core.truth_(pred__27539_27581.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__27540_27582))){
var map__27550_27598 = dir;
var map__27550_27599__$1 = ((((!((map__27550_27598 == null)))?((((map__27550_27598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27550_27598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27550_27598):map__27550_27598);
var speed_27600 = cljs.core.get.call(null,map__27550_27599__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_27601 = cljs.core.get.call(null,map__27550_27599__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_27600,temp_27601);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__27602 = cljs.core.next.call(null,seq__27518__$1);
var G__27603 = null;
var G__27604 = (0);
var G__27605 = (0);
seq__27518 = G__27602;
chunk__27519 = G__27603;
count__27520 = G__27604;
i__27521 = G__27605;
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
var vec__27609 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__27609,(0),null);
var lon = cljs.core.nth.call(null,vec__27609,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car) / 3.281) | (0));
var alt__$1 = (((alt < (10)))?(10):alt);
return czm.core.fly_to.call(null,lat,lon,alt__$1,crs,(view3d.client.CAM_TIO / (1000)));
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
view3d.client.carrier.call(null,"R1",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(315),new cljs.core.Keyword(null,"altitude","altitude",463588637),(3000)], null));

//# sourceMappingURL=client.js.map