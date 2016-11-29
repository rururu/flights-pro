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
var vec__31637 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__31637,(0),null);
var temp = cljs.core.nth.call(null,vec__31637,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__31637,bank__$1,temp,arc,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__31637,bank__$1,temp,arc,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__31642 = response;
var map__31642__$1 = ((((!((map__31642 == null)))?((((map__31642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31642):map__31642);
var status = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var seq__31678 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__31679 = null;
var count__31680 = (0);
var i__31681 = (0);
while(true){
if((i__31681 < count__31680)){
var map__31682 = cljs.core._nth.call(null,chunk__31679,i__31681);
var map__31682__$1 = ((((!((map__31682 == null)))?((((map__31682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);
var dir = map__31682__$1;
var directive = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__31684_31712 = cljs.core._EQ_;
var expr__31685_31713 = directive;
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__31685_31713))){
var map__31687_31714 = dir;
var map__31687_31715__$1 = ((((!((map__31687_31714 == null)))?((((map__31687_31714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31687_31714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31687_31714):map__31687_31714);
var list_31716 = cljs.core.get.call(null,map__31687_31715__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_31716);
} else {
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__31685_31713))){
var map__31689_31717 = dir;
var map__31689_31718__$1 = ((((!((map__31689_31717 == null)))?((((map__31689_31717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31689_31717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31689_31717):map__31689_31717);
var callsign_31719 = cljs.core.get.call(null,map__31689_31718__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_31720 = cljs.core.get.call(null,map__31689_31718__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_31719,vehicle_31720);
} else {
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__31685_31713))){
var map__31691_31721 = dir;
var map__31691_31722__$1 = ((((!((map__31691_31721 == null)))?((((map__31691_31721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31691_31721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31691_31721):map__31691_31721);
var crs_31723 = cljs.core.get.call(null,map__31691_31722__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_31724 = cljs.core.get.call(null,map__31691_31722__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_31725 = cljs.core.get.call(null,map__31691_31722__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_31723);

view3d.client.speed.call(null,spd_31724);

view3d.client.altitude.call(null,alt_31725);
} else {
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__31685_31713))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__31685_31713))){
var map__31693_31726 = dir;
var map__31693_31727__$1 = ((((!((map__31693_31726 == null)))?((((map__31693_31726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31693_31726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693_31726):map__31693_31726);
var course_31728 = cljs.core.get.call(null,map__31693_31727__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_31728);
} else {
if(cljs.core.truth_(pred__31684_31712.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__31685_31713))){
var map__31695_31729 = dir;
var map__31695_31730__$1 = ((((!((map__31695_31729 == null)))?((((map__31695_31729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31695_31729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31695_31729):map__31695_31729);
var speed_31731 = cljs.core.get.call(null,map__31695_31730__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_31732 = cljs.core.get.call(null,map__31695_31730__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_31731,temp_31732);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__31733 = seq__31678;
var G__31734 = chunk__31679;
var G__31735 = count__31680;
var G__31736 = (i__31681 + (1));
seq__31678 = G__31733;
chunk__31679 = G__31734;
count__31680 = G__31735;
i__31681 = G__31736;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31678);
if(temp__4657__auto__){
var seq__31678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31678__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__31678__$1);
var G__31737 = cljs.core.chunk_rest.call(null,seq__31678__$1);
var G__31738 = c__20438__auto__;
var G__31739 = cljs.core.count.call(null,c__20438__auto__);
var G__31740 = (0);
seq__31678 = G__31737;
chunk__31679 = G__31738;
count__31680 = G__31739;
i__31681 = G__31740;
continue;
} else {
var map__31697 = cljs.core.first.call(null,seq__31678__$1);
var map__31697__$1 = ((((!((map__31697 == null)))?((((map__31697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31697):map__31697);
var dir = map__31697__$1;
var directive = cljs.core.get.call(null,map__31697__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__31699_31741 = cljs.core._EQ_;
var expr__31700_31742 = directive;
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__31700_31742))){
var map__31702_31743 = dir;
var map__31702_31744__$1 = ((((!((map__31702_31743 == null)))?((((map__31702_31743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31702_31743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702_31743):map__31702_31743);
var list_31745 = cljs.core.get.call(null,map__31702_31744__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_31745);
} else {
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__31700_31742))){
var map__31704_31746 = dir;
var map__31704_31747__$1 = ((((!((map__31704_31746 == null)))?((((map__31704_31746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31704_31746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704_31746):map__31704_31746);
var callsign_31748 = cljs.core.get.call(null,map__31704_31747__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_31749 = cljs.core.get.call(null,map__31704_31747__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_31748,vehicle_31749);
} else {
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__31700_31742))){
var map__31706_31750 = dir;
var map__31706_31751__$1 = ((((!((map__31706_31750 == null)))?((((map__31706_31750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706_31750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31706_31750):map__31706_31750);
var crs_31752 = cljs.core.get.call(null,map__31706_31751__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_31753 = cljs.core.get.call(null,map__31706_31751__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_31754 = cljs.core.get.call(null,map__31706_31751__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_31752);

view3d.client.speed.call(null,spd_31753);

view3d.client.altitude.call(null,alt_31754);
} else {
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__31700_31742))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__31700_31742))){
var map__31708_31755 = dir;
var map__31708_31756__$1 = ((((!((map__31708_31755 == null)))?((((map__31708_31755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31708_31755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31708_31755):map__31708_31755);
var course_31757 = cljs.core.get.call(null,map__31708_31756__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_31757);
} else {
if(cljs.core.truth_(pred__31699_31741.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__31700_31742))){
var map__31710_31758 = dir;
var map__31710_31759__$1 = ((((!((map__31710_31758 == null)))?((((map__31710_31758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31710_31758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31710_31758):map__31710_31758);
var speed_31760 = cljs.core.get.call(null,map__31710_31759__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_31761 = cljs.core.get.call(null,map__31710_31759__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_31760,temp_31761);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__31762 = cljs.core.next.call(null,seq__31678__$1);
var G__31763 = null;
var G__31764 = (0);
var G__31765 = (0);
seq__31678 = G__31762;
chunk__31679 = G__31763;
count__31680 = G__31764;
i__31681 = G__31765;
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
var vec__31769 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__31769,(0),null);
var lon = cljs.core.nth.call(null,vec__31769,(1),null);
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