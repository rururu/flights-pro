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
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),"-",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(8),(64),(2)], null),(0),(0)]));
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
var vec__21666 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__21666,(0),null);
var sa = cljs.core.nth.call(null,vec__21666,(1),null);
var ba = cljs.core.nth.call(null,vec__21666,(2),null);
var fa = cljs.core.nth.call(null,vec__21666,(3),null);
var bps = vec__21666;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((alt < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var temp = (((calc.dynamic.abs.call(null,bnk) > rb))?(2):(1));
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (temp,vec__21666,rb,sa,ba,fa,bps,bnk,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(temp,vec__21666,rb,sa,ba,fa,bps,bnk,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__21671 = response;
var map__21671__$1 = ((((!((map__21671 == null)))?((((map__21671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21671):map__21671);
var status = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args21673 = [];
var len__20113__auto___21679 = arguments.length;
var i__20114__auto___21680 = (0);
while(true){
if((i__20114__auto___21680 < len__20113__auto___21679)){
args21673.push((arguments[i__20114__auto___21680]));

var G__21681 = (i__20114__auto___21680 + (1));
i__20114__auto___21680 = G__21681;
continue;
} else {
}
break;
}

var G__21675 = args21673.length;
switch (G__21675) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21673.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(view3d.client.CAM_TIO / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car = cljs.core.deref.call(null,carr__$1);
var vec__21676 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__21676,(0),null);
var lon = cljs.core.nth.call(null,vec__21676,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car) / 3.28084) | (0));
var alt__$1 = (((alt < (10)))?(10):alt);
return czm.core.fly_to.call(null,lat,lon,alt__$1,crs,period);
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__21717 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__21718 = null;
var count__21719 = (0);
var i__21720 = (0);
while(true){
if((i__21720 < count__21719)){
var map__21721 = cljs.core._nth.call(null,chunk__21718,i__21720);
var map__21721__$1 = ((((!((map__21721 == null)))?((((map__21721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21721):map__21721);
var dir = map__21721__$1;
var directive = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21723_21751 = cljs.core._EQ_;
var expr__21724_21752 = directive;
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__21724_21752))){
var map__21726_21753 = dir;
var map__21726_21754__$1 = ((((!((map__21726_21753 == null)))?((((map__21726_21753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21726_21753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21726_21753):map__21726_21753);
var list_21755 = cljs.core.get.call(null,map__21726_21754__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_21755);
} else {
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21724_21752))){
var map__21728_21756 = dir;
var map__21728_21757__$1 = ((((!((map__21728_21756 == null)))?((((map__21728_21756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21728_21756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21728_21756):map__21728_21756);
var callsign_21758 = cljs.core.get.call(null,map__21728_21757__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21759 = cljs.core.get.call(null,map__21728_21757__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_21758,vehicle_21759);
} else {
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__21724_21752))){
var map__21730_21760 = dir;
var map__21730_21761__$1 = ((((!((map__21730_21760 == null)))?((((map__21730_21760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21730_21760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730_21760):map__21730_21760);
var callsign_21762 = cljs.core.get.call(null,map__21730_21761__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21763 = cljs.core.get.call(null,map__21730_21761__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_21764 = cljs.core.get.call(null,map__21730_21761__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_21765 = cljs.core.get.call(null,map__21730_21761__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_21762,vehicle_21763);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_21765);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_21763) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_21764,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_21763),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21724_21752))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21724_21752))){
var map__21732_21766 = dir;
var map__21732_21767__$1 = ((((!((map__21732_21766 == null)))?((((map__21732_21766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21732_21766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21732_21766):map__21732_21766);
var course_21768 = cljs.core.get.call(null,map__21732_21767__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21768);
} else {
if(cljs.core.truth_(pred__21723_21751.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21724_21752))){
var map__21734_21769 = dir;
var map__21734_21770__$1 = ((((!((map__21734_21769 == null)))?((((map__21734_21769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21734_21769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21734_21769):map__21734_21769);
var speed_21771 = cljs.core.get.call(null,map__21734_21770__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21772 = cljs.core.get.call(null,map__21734_21770__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21771,temp_21772);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__21773 = seq__21717;
var G__21774 = chunk__21718;
var G__21775 = count__21719;
var G__21776 = (i__21720 + (1));
seq__21717 = G__21773;
chunk__21718 = G__21774;
count__21719 = G__21775;
i__21720 = G__21776;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21717);
if(temp__4657__auto__){
var seq__21717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21717__$1)){
var c__19819__auto__ = cljs.core.chunk_first.call(null,seq__21717__$1);
var G__21777 = cljs.core.chunk_rest.call(null,seq__21717__$1);
var G__21778 = c__19819__auto__;
var G__21779 = cljs.core.count.call(null,c__19819__auto__);
var G__21780 = (0);
seq__21717 = G__21777;
chunk__21718 = G__21778;
count__21719 = G__21779;
i__21720 = G__21780;
continue;
} else {
var map__21736 = cljs.core.first.call(null,seq__21717__$1);
var map__21736__$1 = ((((!((map__21736 == null)))?((((map__21736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21736):map__21736);
var dir = map__21736__$1;
var directive = cljs.core.get.call(null,map__21736__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21738_21781 = cljs.core._EQ_;
var expr__21739_21782 = directive;
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__21739_21782))){
var map__21741_21783 = dir;
var map__21741_21784__$1 = ((((!((map__21741_21783 == null)))?((((map__21741_21783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21741_21783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21741_21783):map__21741_21783);
var list_21785 = cljs.core.get.call(null,map__21741_21784__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_21785);
} else {
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21739_21782))){
var map__21743_21786 = dir;
var map__21743_21787__$1 = ((((!((map__21743_21786 == null)))?((((map__21743_21786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21743_21786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21743_21786):map__21743_21786);
var callsign_21788 = cljs.core.get.call(null,map__21743_21787__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21789 = cljs.core.get.call(null,map__21743_21787__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_21788,vehicle_21789);
} else {
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__21739_21782))){
var map__21745_21790 = dir;
var map__21745_21791__$1 = ((((!((map__21745_21790 == null)))?((((map__21745_21790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21745_21790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21745_21790):map__21745_21790);
var callsign_21792 = cljs.core.get.call(null,map__21745_21791__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21793 = cljs.core.get.call(null,map__21745_21791__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_21794 = cljs.core.get.call(null,map__21745_21791__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_21795 = cljs.core.get.call(null,map__21745_21791__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_21792,vehicle_21793);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_21795);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_21793) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_21794,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_21793),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21739_21782))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21739_21782))){
var map__21747_21796 = dir;
var map__21747_21797__$1 = ((((!((map__21747_21796 == null)))?((((map__21747_21796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21747_21796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21747_21796):map__21747_21796);
var course_21798 = cljs.core.get.call(null,map__21747_21797__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21798);
} else {
if(cljs.core.truth_(pred__21738_21781.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21739_21782))){
var map__21749_21799 = dir;
var map__21749_21800__$1 = ((((!((map__21749_21799 == null)))?((((map__21749_21799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749_21799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749_21799):map__21749_21799);
var speed_21801 = cljs.core.get.call(null,map__21749_21800__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21802 = cljs.core.get.call(null,map__21749_21800__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21801,temp_21802);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__21803 = cljs.core.next.call(null,seq__21717__$1);
var G__21804 = null;
var G__21805 = (0);
var G__21806 = (0);
seq__21717 = G__21803;
chunk__21718 = G__21804;
count__21719 = G__21805;
i__21720 = G__21806;
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
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"no-terrain","no-terrain",-2110718690));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);
view3d.client.carrier.call(null,"R1",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(315),new cljs.core.Keyword(null,"altitude","altitude",463588637),(3000)], null));

//# sourceMappingURL=client.js.map