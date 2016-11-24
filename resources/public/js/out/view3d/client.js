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
var vec__33470 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__33470,(0),null);
var temp = cljs.core.nth.call(null,vec__33470,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__33470,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__33470,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__33475 = response;
var map__33475__$1 = ((((!((map__33475 == null)))?((((map__33475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33475):map__33475);
var status = cljs.core.get.call(null,map__33475__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33475__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var veh = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) < (20)))?cljs.core.assoc.call(null,vehicle,new cljs.core.Keyword(null,"altitude","altitude",463588637),(20)):vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),veh));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if((calc.dynamic.abs.call(null,(old_crs - new_crs)) > (10))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__33511 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__33512 = null;
var count__33513 = (0);
var i__33514 = (0);
while(true){
if((i__33514 < count__33513)){
var map__33515 = cljs.core._nth.call(null,chunk__33512,i__33514);
var map__33515__$1 = ((((!((map__33515 == null)))?((((map__33515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33515):map__33515);
var dir = map__33515__$1;
var directive = cljs.core.get.call(null,map__33515__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__33517_33545 = cljs.core._EQ_;
var expr__33518_33546 = directive;
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__33518_33546))){
var map__33520_33547 = dir;
var map__33520_33548__$1 = ((((!((map__33520_33547 == null)))?((((map__33520_33547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33520_33547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33520_33547):map__33520_33547);
var list_33549 = cljs.core.get.call(null,map__33520_33548__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_33549);
} else {
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__33518_33546))){
var map__33522_33550 = dir;
var map__33522_33551__$1 = ((((!((map__33522_33550 == null)))?((((map__33522_33550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33522_33550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522_33550):map__33522_33550);
var callsign_33552 = cljs.core.get.call(null,map__33522_33551__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_33553 = cljs.core.get.call(null,map__33522_33551__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_33552,vehicle_33553);
} else {
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__33518_33546))){
var map__33524_33554 = dir;
var map__33524_33555__$1 = ((((!((map__33524_33554 == null)))?((((map__33524_33554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33524_33554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524_33554):map__33524_33554);
var lat_33556 = cljs.core.get.call(null,map__33524_33555__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33557 = cljs.core.get.call(null,map__33524_33555__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_33558 = cljs.core.get.call(null,map__33524_33555__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_33559 = cljs.core.get.call(null,map__33524_33555__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_33560 = cljs.core.get.call(null,map__33524_33555__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_33556,lon_33557,alt_33559,crs_33558,period_33560);
} else {
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__33518_33546))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__33518_33546))){
var map__33526_33561 = dir;
var map__33526_33562__$1 = ((((!((map__33526_33561 == null)))?((((map__33526_33561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33526_33561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33526_33561):map__33526_33561);
var course_33563 = cljs.core.get.call(null,map__33526_33562__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_33563);
} else {
if(cljs.core.truth_(pred__33517_33545.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__33518_33546))){
var map__33528_33564 = dir;
var map__33528_33565__$1 = ((((!((map__33528_33564 == null)))?((((map__33528_33564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33528_33564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33528_33564):map__33528_33564);
var speed_33566 = cljs.core.get.call(null,map__33528_33565__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_33567 = cljs.core.get.call(null,map__33528_33565__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_33566,temp_33567);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__33568 = seq__33511;
var G__33569 = chunk__33512;
var G__33570 = count__33513;
var G__33571 = (i__33514 + (1));
seq__33511 = G__33568;
chunk__33512 = G__33569;
count__33513 = G__33570;
i__33514 = G__33571;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33511);
if(temp__4657__auto__){
var seq__33511__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33511__$1)){
var c__24297__auto__ = cljs.core.chunk_first.call(null,seq__33511__$1);
var G__33572 = cljs.core.chunk_rest.call(null,seq__33511__$1);
var G__33573 = c__24297__auto__;
var G__33574 = cljs.core.count.call(null,c__24297__auto__);
var G__33575 = (0);
seq__33511 = G__33572;
chunk__33512 = G__33573;
count__33513 = G__33574;
i__33514 = G__33575;
continue;
} else {
var map__33530 = cljs.core.first.call(null,seq__33511__$1);
var map__33530__$1 = ((((!((map__33530 == null)))?((((map__33530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33530):map__33530);
var dir = map__33530__$1;
var directive = cljs.core.get.call(null,map__33530__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__33532_33576 = cljs.core._EQ_;
var expr__33533_33577 = directive;
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__33533_33577))){
var map__33535_33578 = dir;
var map__33535_33579__$1 = ((((!((map__33535_33578 == null)))?((((map__33535_33578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33535_33578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33535_33578):map__33535_33578);
var list_33580 = cljs.core.get.call(null,map__33535_33579__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_33580);
} else {
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__33533_33577))){
var map__33537_33581 = dir;
var map__33537_33582__$1 = ((((!((map__33537_33581 == null)))?((((map__33537_33581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33537_33581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33537_33581):map__33537_33581);
var callsign_33583 = cljs.core.get.call(null,map__33537_33582__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_33584 = cljs.core.get.call(null,map__33537_33582__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_33583,vehicle_33584);
} else {
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__33533_33577))){
var map__33539_33585 = dir;
var map__33539_33586__$1 = ((((!((map__33539_33585 == null)))?((((map__33539_33585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33539_33585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33539_33585):map__33539_33585);
var lat_33587 = cljs.core.get.call(null,map__33539_33586__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33588 = cljs.core.get.call(null,map__33539_33586__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_33589 = cljs.core.get.call(null,map__33539_33586__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_33590 = cljs.core.get.call(null,map__33539_33586__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_33591 = cljs.core.get.call(null,map__33539_33586__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_33587,lon_33588,alt_33590,crs_33589,period_33591);
} else {
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__33533_33577))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__33533_33577))){
var map__33541_33592 = dir;
var map__33541_33593__$1 = ((((!((map__33541_33592 == null)))?((((map__33541_33592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33541_33592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33541_33592):map__33541_33592);
var course_33594 = cljs.core.get.call(null,map__33541_33593__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_33594);
} else {
if(cljs.core.truth_(pred__33532_33576.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__33533_33577))){
var map__33543_33595 = dir;
var map__33543_33596__$1 = ((((!((map__33543_33595 == null)))?((((map__33543_33595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33543_33595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33543_33595):map__33543_33595);
var speed_33597 = cljs.core.get.call(null,map__33543_33596__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_33598 = cljs.core.get.call(null,map__33543_33596__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_33597,temp_33598);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__33599 = cljs.core.next.call(null,seq__33511__$1);
var G__33600 = null;
var G__33601 = (0);
var G__33602 = (0);
seq__33511 = G__33599;
chunk__33512 = G__33600;
count__33513 = G__33601;
i__33514 = G__33602;
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
var vec__33606 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__33606,(0),null);
var lon = cljs.core.nth.call(null,vec__33606,(1),null);
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