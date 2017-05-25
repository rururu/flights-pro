// Compiled by ClojureScript 1.9.521 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('csasync.proc');
goog.require('czm.core');
goog.require('view3d.controls');
goog.require('carr.move');
goog.require('calc.core');
goog.require('calc.dynamic');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('nightlight.repl_server');
view3d.client.HOST = "http://localhost:";
view3d.client.PORT = (4444);
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),(160),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"MANUAL",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),(270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(2),(16),(64),(2)], null),(4000)]));
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__32875 = response;
var map__32875__$1 = ((((!((map__32875 == null)))?((((map__32875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32875):map__32875);
var status = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__32875__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
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
var vec__32880 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var mb = cljs.core.nth.call(null,vec__32880,(0),null);
var sa = cljs.core.nth.call(null,vec__32880,(1),null);
var ma = cljs.core.nth.call(null,vec__32880,(2),null);
var ba = cljs.core.nth.call(null,vec__32880,(3),null);
var fa = cljs.core.nth.call(null,vec__32880,(4),null);
var bps = vec__32880;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((spd < (100))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1),null);
} else {
var accel = (((calc.core.abs.call(null,bnk) > mb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

return carr.move.turn.call(null,carr__$1,course,accel,((function (accel,vec__32880,mb,sa,ma,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__32880,mb,sa,ma,ba,fa,bps,bnk,spd))
);
}
});
view3d.client.onboard = (function view3d$client$onboard(call){
if(cljs.core._EQ_.call(null,call,"MANUAL")){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),cljs.core.deref.call(null,view3d.client.VEHICLE)));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),call));
}

return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("onboard?callsign="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
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
return null;
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var lon__$1 = view3d.client.num_val.call(null,lon);
var lat = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat"));
var bea = carr.move.bear_deg_js.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null));
return view3d.client.course.call(null,(bea | (0)));
} else {
return null;
}
});
view3d.client.camera_vehicle = (function view3d$client$camera_vehicle(vehicle,per){
var vec__32886 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__32886,(0),null);
var lon = cljs.core.nth.call(null,vec__32886,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

if((per <= (0))){
return czm.core.move_to.call(null,lat,lon,((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));
} else {
return czm.core.fly_to.call(null,lat,lon,((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),per);
}
});
view3d.client.camera_manual = (function view3d$client$camera_manual(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return view3d.client.camera_vehicle.call(null,car,((new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)) | (0)));
} else {
return null;
}
});
view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.bank_vehicle = (function view3d$client$bank_vehicle(vehicle){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle) > (120)))?calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"old-course","old-course",1700271327).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))):(0)));
});
view3d.client.dynamics = (function view3d$client$dynamics(dm){
var bk_32889 = dm.call(null,"bank");
var bk_32890__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bk_32889.call(null,"middle-bank"),bk_32889.call(null,"small-arc"),bk_32889.call(null,"middle-arc"),bk_32889.call(null,"big-arc"),bk_32889.call(null,"factor")], null);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),bk_32890__$1));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"propeller-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"propeller-time-out")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"elevator-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"elevator-time-out")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"rudder-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"rudder-time-out")));

return cljs.core.println.call(null,new cljs.core.Keyword(null,"new-dynamics","new-dynamics",888099005),cljs.core.deref.call(null,view3d.client.CARRIER));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__32917 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__32918 = null;
var count__32919 = (0);
var i__32920 = (0);
while(true){
if((i__32920 < count__32919)){
var map__32921 = cljs.core._nth.call(null,chunk__32918,i__32920);
var map__32921__$1 = ((((!((map__32921 == null)))?((((map__32921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32921):map__32921);
var dir = map__32921__$1;
var directive = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__32923_32943 = cljs.core._EQ_;
var expr__32924_32944 = directive;
if(cljs.core.truth_(pred__32923_32943.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__32924_32944))){
var map__32926_32945 = dir;
var map__32926_32946__$1 = ((((!((map__32926_32945 == null)))?((((map__32926_32945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32926_32945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32926_32945):map__32926_32945);
var list_32947 = cljs.core.get.call(null,map__32926_32946__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_32947);
} else {
if(cljs.core.truth_(pred__32923_32943.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__32924_32944))){
var map__32928_32948 = dir;
var map__32928_32949__$1 = ((((!((map__32928_32948 == null)))?((((map__32928_32948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32928_32948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32928_32948):map__32928_32948);
var vehicle_32950 = cljs.core.get.call(null,map__32928_32949__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_32951 = cljs.core.get.call(null,map__32928_32949__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.bank_vehicle.call(null,vehicle_32950);

view3d.client.camera_vehicle.call(null,vehicle_32950,period_32951);

view3d.controls.show_flight_data.call(null,vehicle_32950);
} else {
if(cljs.core.truth_(pred__32923_32943.call(null,new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),expr__32924_32944))){
var map__32930_32952 = dir;
var map__32930_32953__$1 = ((((!((map__32930_32952 == null)))?((((map__32930_32952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32930_32952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32930_32952):map__32930_32952);
var dynamo_32954 = cljs.core.get.call(null,map__32930_32953__$1,new cljs.core.Keyword(null,"dynamo","dynamo",-1383622723));
view3d.client.dynamics.call(null,dynamo_32954);
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown directive: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}

var G__32955 = seq__32917;
var G__32956 = chunk__32918;
var G__32957 = count__32919;
var G__32958 = (i__32920 + (1));
seq__32917 = G__32955;
chunk__32918 = G__32956;
count__32919 = G__32957;
i__32920 = G__32958;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32917);
if(temp__4657__auto__){
var seq__32917__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32917__$1)){
var c__22771__auto__ = cljs.core.chunk_first.call(null,seq__32917__$1);
var G__32959 = cljs.core.chunk_rest.call(null,seq__32917__$1);
var G__32960 = c__22771__auto__;
var G__32961 = cljs.core.count.call(null,c__22771__auto__);
var G__32962 = (0);
seq__32917 = G__32959;
chunk__32918 = G__32960;
count__32919 = G__32961;
i__32920 = G__32962;
continue;
} else {
var map__32932 = cljs.core.first.call(null,seq__32917__$1);
var map__32932__$1 = ((((!((map__32932 == null)))?((((map__32932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32932):map__32932);
var dir = map__32932__$1;
var directive = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__32934_32963 = cljs.core._EQ_;
var expr__32935_32964 = directive;
if(cljs.core.truth_(pred__32934_32963.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__32935_32964))){
var map__32937_32965 = dir;
var map__32937_32966__$1 = ((((!((map__32937_32965 == null)))?((((map__32937_32965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32937_32965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32937_32965):map__32937_32965);
var list_32967 = cljs.core.get.call(null,map__32937_32966__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_32967);
} else {
if(cljs.core.truth_(pred__32934_32963.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__32935_32964))){
var map__32939_32968 = dir;
var map__32939_32969__$1 = ((((!((map__32939_32968 == null)))?((((map__32939_32968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32939_32968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939_32968):map__32939_32968);
var vehicle_32970 = cljs.core.get.call(null,map__32939_32969__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_32971 = cljs.core.get.call(null,map__32939_32969__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.bank_vehicle.call(null,vehicle_32970);

view3d.client.camera_vehicle.call(null,vehicle_32970,period_32971);

view3d.controls.show_flight_data.call(null,vehicle_32970);
} else {
if(cljs.core.truth_(pred__32934_32963.call(null,new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),expr__32935_32964))){
var map__32941_32972 = dir;
var map__32941_32973__$1 = ((((!((map__32941_32972 == null)))?((((map__32941_32972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32941_32972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32941_32972):map__32941_32972);
var dynamo_32974 = cljs.core.get.call(null,map__32941_32973__$1,new cljs.core.Keyword(null,"dynamo","dynamo",-1383622723));
view3d.client.dynamics.call(null,dynamo_32974);
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown directive: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}

var G__32975 = cljs.core.next.call(null,seq__32917__$1);
var G__32976 = null;
var G__32977 = (0);
var G__32978 = (0);
seq__32917 = G__32975;
chunk__32918 = G__32976;
count__32919 = G__32977;
i__32920 = G__32978;
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
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?coord="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&course="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&speed= "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&altitude="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (car){
return (function (response){
return null;
});})(car))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
} else {
return null;
}
});
view3d.client.flight_data_manual = (function view3d$client$flight_data_manual(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return view3d.controls.show_flight_data.call(null,car);
} else {
return null;
}
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("terrain")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("new-czml-doc")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.flight_data_manual,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.camera_manual,view3d.client.CARRIER,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map