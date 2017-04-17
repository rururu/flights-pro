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
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"?",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),(270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16),(64),(2)], null),(0)]));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__26465 = response;
var map__26465__$1 = ((((!((map__26465 == null)))?((((map__26465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26465):map__26465);
var status = cljs.core.get.call(null,map__26465__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26465__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var vec__26470 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__26470,(0),null);
var sa = cljs.core.nth.call(null,vec__26470,(1),null);
var ba = cljs.core.nth.call(null,vec__26470,(2),null);
var fa = cljs.core.nth.call(null,vec__26470,(3),null);
var bps = vec__26470;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((spd < (100))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var accel = (((calc.core.abs.call(null,bnk) > rb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

carr.move.turn.call(null,carr__$1,course,accel);

return calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (accel,vec__26470,rb,sa,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__26470,rb,sa,ba,fa,bps,bnk,spd))
);
}
});
view3d.client.onboard = (function view3d$client$onboard(call){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier_interpol = (function view3d$client$carrier_interpol(callsign,vehicle){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign));
} else {
}

var ocrs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var ncrs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var vec__26479 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var olat = cljs.core.nth.call(null,vec__26479,(0),null);
var olon = cljs.core.nth.call(null,vec__26479,(1),null);
var vec__26482 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var nlat = cljs.core.nth.call(null,vec__26482,(0),null);
var nlon = cljs.core.nth.call(null,vec__26482,(1),null);
var ospd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car);
var nspd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((olat + nlat) / (2)),((olon + nlon) / (2))], null),new cljs.core.Keyword(null,"speed","speed",1257663751),((cljs.core._EQ_.call(null,nspd,(0)))?(0):((cljs.core._EQ_.call(null,ospd,(0)))?nspd:nspd
))));

carr.move.elevate.call(null,view3d.client.CARRIER,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle),(2));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if(cljs.core.not_EQ_.call(null,ncrs,ocrs)){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,ncrs);
} else {
return null;
}
});
view3d.client.carrier_exact = (function view3d$client$carrier_exact(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign));
} else {
}

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),vehicle));

return carr.move.set_turn_point.call(null,view3d.client.CARRIER);
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
var vec__26488 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__26488,(0),null);
var lon = cljs.core.nth.call(null,vec__26488,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__26494 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__26494,(0),null);
var _ = cljs.core.nth.call(null,vec__26494,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
var vec__26500 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__26500,(0),null);
var lon = cljs.core.nth.call(null,vec__26500,(1),null);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car);
var crs = (((spd < (100)))?new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rudder","rudder",1071257290).cljs$core$IFn$_invoke$arity$1(car)):new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car));
var alt = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car) / 3.28084) | (0));
var k = (((spd < (100)))?(200):(600));
var per = ((new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / k) | (0));
return czm.core.fly_to.call(null,lat,lon,alt,crs,per);
});
view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__26525 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__26526 = null;
var count__26527 = (0);
var i__26528 = (0);
while(true){
if((i__26528 < count__26527)){
var map__26529 = cljs.core._nth.call(null,chunk__26526,i__26528);
var map__26529__$1 = ((((!((map__26529 == null)))?((((map__26529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529):map__26529);
var dir = map__26529__$1;
var directive = cljs.core.get.call(null,map__26529__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__26531_26547 = cljs.core._EQ_;
var expr__26532_26548 = directive;
if(cljs.core.truth_(pred__26531_26547.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__26532_26548))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier_exact.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}
} else {
if(cljs.core.truth_(pred__26531_26547.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__26532_26548))){
var map__26534_26549 = dir;
var map__26534_26550__$1 = ((((!((map__26534_26549 == null)))?((((map__26534_26549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26534_26549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534_26549):map__26534_26549);
var list_26551 = cljs.core.get.call(null,map__26534_26550__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_26551,"manual"));
} else {
if(cljs.core.truth_(pred__26531_26547.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__26532_26548))){
var map__26536_26552 = dir;
var map__26536_26553__$1 = ((((!((map__26536_26552 == null)))?((((map__26536_26552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26536_26552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26536_26552):map__26536_26552);
var callsign_26554 = cljs.core.get.call(null,map__26536_26553__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_26555 = cljs.core.get.call(null,map__26536_26553__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var go_onboard_26556 = cljs.core.get.call(null,map__26536_26553__$1,new cljs.core.Keyword(null,"go-onboard","go-onboard",1995600194));
if(cljs.core.truth_(go_onboard_26556)){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign_26554));
} else {
}

if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
if(cljs.core.truth_(go_onboard_26556)){
view3d.client.carrier_exact.call(null,callsign_26554,vehicle_26555);
} else {
view3d.client.carrier_interpol.call(null,callsign_26554,vehicle_26555);
}
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}

var G__26557 = seq__26525;
var G__26558 = chunk__26526;
var G__26559 = count__26527;
var G__26560 = (i__26528 + (1));
seq__26525 = G__26557;
chunk__26526 = G__26558;
count__26527 = G__26559;
i__26528 = G__26560;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26525);
if(temp__4657__auto__){
var seq__26525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26525__$1)){
var c__21206__auto__ = cljs.core.chunk_first.call(null,seq__26525__$1);
var G__26561 = cljs.core.chunk_rest.call(null,seq__26525__$1);
var G__26562 = c__21206__auto__;
var G__26563 = cljs.core.count.call(null,c__21206__auto__);
var G__26564 = (0);
seq__26525 = G__26561;
chunk__26526 = G__26562;
count__26527 = G__26563;
i__26528 = G__26564;
continue;
} else {
var map__26538 = cljs.core.first.call(null,seq__26525__$1);
var map__26538__$1 = ((((!((map__26538 == null)))?((((map__26538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26538):map__26538);
var dir = map__26538__$1;
var directive = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__26540_26565 = cljs.core._EQ_;
var expr__26541_26566 = directive;
if(cljs.core.truth_(pred__26540_26565.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__26541_26566))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier_exact.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}
} else {
if(cljs.core.truth_(pred__26540_26565.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__26541_26566))){
var map__26543_26567 = dir;
var map__26543_26568__$1 = ((((!((map__26543_26567 == null)))?((((map__26543_26567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26543_26567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26543_26567):map__26543_26567);
var list_26569 = cljs.core.get.call(null,map__26543_26568__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_26569,"manual"));
} else {
if(cljs.core.truth_(pred__26540_26565.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__26541_26566))){
var map__26545_26570 = dir;
var map__26545_26571__$1 = ((((!((map__26545_26570 == null)))?((((map__26545_26570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26545_26570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26545_26570):map__26545_26570);
var callsign_26572 = cljs.core.get.call(null,map__26545_26571__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_26573 = cljs.core.get.call(null,map__26545_26571__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var go_onboard_26574 = cljs.core.get.call(null,map__26545_26571__$1,new cljs.core.Keyword(null,"go-onboard","go-onboard",1995600194));
if(cljs.core.truth_(go_onboard_26574)){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign_26572));
} else {
}

if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
if(cljs.core.truth_(go_onboard_26574)){
view3d.client.carrier_exact.call(null,callsign_26572,vehicle_26573);
} else {
view3d.client.carrier_interpol.call(null,callsign_26572,vehicle_26573);
}
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}

var G__26575 = cljs.core.next.call(null,seq__26525__$1);
var G__26576 = null;
var G__26577 = (0);
var G__26578 = (0);
seq__26525 = G__26575;
chunk__26526 = G__26576;
count__26527 = G__26577;
i__26528 = G__26578;
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

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("new-czml-doc")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

view3d.client.carrier_exact.call(null,"MANUAL",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map