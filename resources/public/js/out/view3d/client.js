// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('calc.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('calc.dynamic');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.HOST = "http://localhost:";
view3d.client.PORT = (4444);
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
view3d.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"?",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16),(64),(2)], null),(0)]));
view3d.client.CAM_PROC = cljs.core.volatile_BANG_.call(null,"STOP");
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__35575 = response;
var map__35575__$1 = ((((!((map__35575 == null)))?((((map__35575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35575):map__35575);
var status = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
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
var vec__35580 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__35580,(0),null);
var sa = cljs.core.nth.call(null,vec__35580,(1),null);
var ba = cljs.core.nth.call(null,vec__35580,(2),null);
var fa = cljs.core.nth.call(null,vec__35580,(3),null);
var bps = vec__35580;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((spd < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var accel = (((calc.core.abs.call(null,bnk) > rb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

carr.move.turn.call(null,carr__$1,course,accel);

return calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (accel,vec__35580,rb,sa,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__35580,rb,sa,ba,fa,bps,bnk,spd))
);
}
});
view3d.client.onboard = (function view3d$client$onboard(call){
if(cljs.core._EQ_.call(null,call,"manual")){
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);
} else {
}

return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign));
} else {
}

var old_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var new_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),vehicle));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if(cljs.core.not_EQ_.call(null,new_crs,old_crs)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var crs__$1 = view3d.client.num_val.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return carr.move.accel.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,spd));
} else {
return null;
}
});
view3d.client.altitude = (function view3d$client$altitude(alt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return carr.move.elevate.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,alt));
} else {
return null;
}
});
view3d.client.accel_speed = (function view3d$client$accel_speed(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.accel_altitude = (function view3d$client$accel_altitude(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.latitude = (function view3d$client$latitude(lat){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__35586 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__35586,(0),null);
var lon = cljs.core.nth.call(null,vec__35586,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__35592 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__35592,(0),null);
var _ = cljs.core.nth.call(null,vec__35592,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args35595 = [];
var len__21990__auto___35601 = arguments.length;
var i__21991__auto___35602 = (0);
while(true){
if((i__21991__auto___35602 < len__21990__auto___35601)){
args35595.push((arguments[i__21991__auto___35602]));

var G__35603 = (i__21991__auto___35602 + (1));
i__21991__auto___35602 = G__35603;
continue;
} else {
}
break;
}

var G__35597 = args35595.length;
switch (G__35597) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35595.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car_35605 = cljs.core.deref.call(null,carr__$1);
var vec__35598_35606 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car_35605);
var lat_35607 = cljs.core.nth.call(null,vec__35598_35606,(0),null);
var lon_35608 = cljs.core.nth.call(null,vec__35598_35606,(1),null);
var crs_35609 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car_35605);
var alt_35610 = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car_35605) / 3.28084) | (0));
var alt_35611__$1 = (((alt_35610 < (20)))?(20):alt_35610);
czm.core.fly_to.call(null,lat_35607,lon_35608,alt_35611__$1,crs_35609,period);

return true;
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__35638 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__35639 = null;
var count__35640 = (0);
var i__35641 = (0);
while(true){
if((i__35641 < count__35640)){
var map__35642 = cljs.core._nth.call(null,chunk__35639,i__35641);
var map__35642__$1 = ((((!((map__35642 == null)))?((((map__35642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35642):map__35642);
var dir = map__35642__$1;
var directive = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__35644_35664 = cljs.core._EQ_;
var expr__35645_35665 = directive;
if(cljs.core.truth_(pred__35644_35664.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__35645_35665))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__35638,chunk__35639,count__35640,i__35641,pred__35644_35664,expr__35645_35665,map__35642,map__35642__$1,dir,directive){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__35638,chunk__35639,count__35640,i__35641,pred__35644_35664,expr__35645_35665,map__35642,map__35642__$1,dir,directive))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__35644_35664.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__35645_35665))){
var map__35647_35666 = dir;
var map__35647_35667__$1 = ((((!((map__35647_35666 == null)))?((((map__35647_35666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35647_35666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35647_35666):map__35647_35666);
var list_35668 = cljs.core.get.call(null,map__35647_35667__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_35668,"manual"));
} else {
if(cljs.core.truth_(pred__35644_35664.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__35645_35665))){
var map__35649_35669 = dir;
var map__35649_35670__$1 = ((((!((map__35649_35669 == null)))?((((map__35649_35669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35649_35669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35649_35669):map__35649_35669);
var callsign_35671 = cljs.core.get.call(null,map__35649_35670__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_35672 = cljs.core.get.call(null,map__35649_35670__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_35671,vehicle_35672);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__35644_35664.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__35645_35665))){
var map__35651_35673 = dir;
var map__35651_35674__$1 = ((((!((map__35651_35673 == null)))?((((map__35651_35673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35651_35673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35651_35673):map__35651_35673);
var callsign_35675 = cljs.core.get.call(null,map__35651_35674__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_35676 = cljs.core.get.call(null,map__35651_35674__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_35677 = cljs.core.get.call(null,map__35651_35674__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_35675,vehicle_35676);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_35677);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__35678 = seq__35638;
var G__35679 = chunk__35639;
var G__35680 = count__35640;
var G__35681 = (i__35641 + (1));
seq__35638 = G__35678;
chunk__35639 = G__35679;
count__35640 = G__35680;
i__35641 = G__35681;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35638);
if(temp__4657__auto__){
var seq__35638__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35638__$1)){
var c__21696__auto__ = cljs.core.chunk_first.call(null,seq__35638__$1);
var G__35682 = cljs.core.chunk_rest.call(null,seq__35638__$1);
var G__35683 = c__21696__auto__;
var G__35684 = cljs.core.count.call(null,c__21696__auto__);
var G__35685 = (0);
seq__35638 = G__35682;
chunk__35639 = G__35683;
count__35640 = G__35684;
i__35641 = G__35685;
continue;
} else {
var map__35653 = cljs.core.first.call(null,seq__35638__$1);
var map__35653__$1 = ((((!((map__35653 == null)))?((((map__35653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35653):map__35653);
var dir = map__35653__$1;
var directive = cljs.core.get.call(null,map__35653__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__35655_35686 = cljs.core._EQ_;
var expr__35656_35687 = directive;
if(cljs.core.truth_(pred__35655_35686.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__35656_35687))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__35638,chunk__35639,count__35640,i__35641,pred__35655_35686,expr__35656_35687,map__35653,map__35653__$1,dir,directive,seq__35638__$1,temp__4657__auto__){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__35638,chunk__35639,count__35640,i__35641,pred__35655_35686,expr__35656_35687,map__35653,map__35653__$1,dir,directive,seq__35638__$1,temp__4657__auto__))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__35655_35686.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__35656_35687))){
var map__35658_35688 = dir;
var map__35658_35689__$1 = ((((!((map__35658_35688 == null)))?((((map__35658_35688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35658_35688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35658_35688):map__35658_35688);
var list_35690 = cljs.core.get.call(null,map__35658_35689__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_35690,"manual"));
} else {
if(cljs.core.truth_(pred__35655_35686.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__35656_35687))){
var map__35660_35691 = dir;
var map__35660_35692__$1 = ((((!((map__35660_35691 == null)))?((((map__35660_35691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35660_35691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35660_35691):map__35660_35691);
var callsign_35693 = cljs.core.get.call(null,map__35660_35692__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_35694 = cljs.core.get.call(null,map__35660_35692__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_35693,vehicle_35694);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__35655_35686.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__35656_35687))){
var map__35662_35695 = dir;
var map__35662_35696__$1 = ((((!((map__35662_35695 == null)))?((((map__35662_35695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35662_35695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35662_35695):map__35662_35695);
var callsign_35697 = cljs.core.get.call(null,map__35662_35696__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_35698 = cljs.core.get.call(null,map__35662_35696__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_35699 = cljs.core.get.call(null,map__35662_35696__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_35697,vehicle_35698);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_35699);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__35700 = cljs.core.next.call(null,seq__35638__$1);
var G__35701 = null;
var G__35702 = (0);
var G__35703 = (0);
seq__35638 = G__35700;
chunk__35639 = G__35701;
count__35640 = G__35702;
i__35641 = G__35703;
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
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.send_manual_data = (function view3d$client$send_manual_data(){
var carr__$1 = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(carr__$1),"MANUAL")){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("?coord="),cljs.core.str(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&course="),cljs.core.str(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&speed= "),cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&altitude="),cljs.core.str(new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(carr__$1))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (carr__$1){
return (function (response){
return null;
});})(carr__$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
} else {
return null;
}
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("terrain")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map