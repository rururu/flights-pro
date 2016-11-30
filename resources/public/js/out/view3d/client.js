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
var vec__24239 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__24239,(0),null);
var temp = cljs.core.nth.call(null,vec__24239,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__24239,bank__$1,temp,arc,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__24239,bank__$1,temp,arc,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__24244 = response;
var map__24244__$1 = ((((!((map__24244 == null)))?((((map__24244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24244):map__24244);
var status = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var seq__24286 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__24287 = null;
var count__24288 = (0);
var i__24289 = (0);
while(true){
if((i__24289 < count__24288)){
var map__24290 = cljs.core._nth.call(null,chunk__24287,i__24289);
var map__24290__$1 = ((((!((map__24290 == null)))?((((map__24290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24290):map__24290);
var dir = map__24290__$1;
var directive = cljs.core.get.call(null,map__24290__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__24292_24326 = cljs.core._EQ_;
var expr__24293_24327 = directive;
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__24293_24327))){
var map__24295_24328 = dir;
var map__24295_24329__$1 = ((((!((map__24295_24328 == null)))?((((map__24295_24328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24295_24328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24295_24328):map__24295_24328);
var list_24330 = cljs.core.get.call(null,map__24295_24329__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_24330);
} else {
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__24293_24327))){
var map__24297_24331 = dir;
var map__24297_24332__$1 = ((((!((map__24297_24331 == null)))?((((map__24297_24331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24297_24331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24297_24331):map__24297_24331);
var callsign_24333 = cljs.core.get.call(null,map__24297_24332__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_24334 = cljs.core.get.call(null,map__24297_24332__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_24333,vehicle_24334);
} else {
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__24293_24327))){
var map__24299_24335 = dir;
var map__24299_24336__$1 = ((((!((map__24299_24335 == null)))?((((map__24299_24335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24299_24335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299_24335):map__24299_24335);
var coord_24337 = cljs.core.get.call(null,map__24299_24336__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var altitude_24338 = cljs.core.get.call(null,map__24299_24336__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var course_24339 = cljs.core.get.call(null,map__24299_24336__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var period_24340 = cljs.core.get.call(null,map__24299_24336__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var vec__24300_24341 = coord_24337;
var lat_24342 = cljs.core.nth.call(null,vec__24300_24341,(0),null);
var lon_24343 = cljs.core.nth.call(null,vec__24300_24341,(1),null);
czm.core.fly_to.call(null,lat_24342,lon_24343,altitude_24338,course_24339,period_24340);
} else {
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__24293_24327))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__24293_24327))){
var map__24304_24344 = dir;
var map__24304_24345__$1 = ((((!((map__24304_24344 == null)))?((((map__24304_24344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24304_24344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24304_24344):map__24304_24344);
var course_24346 = cljs.core.get.call(null,map__24304_24345__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_24346);
} else {
if(cljs.core.truth_(pred__24292_24326.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__24293_24327))){
var map__24306_24347 = dir;
var map__24306_24348__$1 = ((((!((map__24306_24347 == null)))?((((map__24306_24347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24306_24347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24306_24347):map__24306_24347);
var speed_24349 = cljs.core.get.call(null,map__24306_24348__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_24350 = cljs.core.get.call(null,map__24306_24348__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_24349,temp_24350);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__24351 = seq__24286;
var G__24352 = chunk__24287;
var G__24353 = count__24288;
var G__24354 = (i__24289 + (1));
seq__24286 = G__24351;
chunk__24287 = G__24352;
count__24288 = G__24353;
i__24289 = G__24354;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24286);
if(temp__4657__auto__){
var seq__24286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24286__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__24286__$1);
var G__24355 = cljs.core.chunk_rest.call(null,seq__24286__$1);
var G__24356 = c__9319__auto__;
var G__24357 = cljs.core.count.call(null,c__9319__auto__);
var G__24358 = (0);
seq__24286 = G__24355;
chunk__24287 = G__24356;
count__24288 = G__24357;
i__24289 = G__24358;
continue;
} else {
var map__24308 = cljs.core.first.call(null,seq__24286__$1);
var map__24308__$1 = ((((!((map__24308 == null)))?((((map__24308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24308):map__24308);
var dir = map__24308__$1;
var directive = cljs.core.get.call(null,map__24308__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__24310_24359 = cljs.core._EQ_;
var expr__24311_24360 = directive;
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__24311_24360))){
var map__24313_24361 = dir;
var map__24313_24362__$1 = ((((!((map__24313_24361 == null)))?((((map__24313_24361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24313_24361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24313_24361):map__24313_24361);
var list_24363 = cljs.core.get.call(null,map__24313_24362__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_24363);
} else {
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__24311_24360))){
var map__24315_24364 = dir;
var map__24315_24365__$1 = ((((!((map__24315_24364 == null)))?((((map__24315_24364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24315_24364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24315_24364):map__24315_24364);
var callsign_24366 = cljs.core.get.call(null,map__24315_24365__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_24367 = cljs.core.get.call(null,map__24315_24365__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_24366,vehicle_24367);
} else {
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__24311_24360))){
var map__24317_24368 = dir;
var map__24317_24369__$1 = ((((!((map__24317_24368 == null)))?((((map__24317_24368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24317_24368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24317_24368):map__24317_24368);
var coord_24370 = cljs.core.get.call(null,map__24317_24369__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var altitude_24371 = cljs.core.get.call(null,map__24317_24369__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var course_24372 = cljs.core.get.call(null,map__24317_24369__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var period_24373 = cljs.core.get.call(null,map__24317_24369__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var vec__24318_24374 = coord_24370;
var lat_24375 = cljs.core.nth.call(null,vec__24318_24374,(0),null);
var lon_24376 = cljs.core.nth.call(null,vec__24318_24374,(1),null);
czm.core.fly_to.call(null,lat_24375,lon_24376,altitude_24371,course_24372,period_24373);
} else {
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__24311_24360))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__24311_24360))){
var map__24322_24377 = dir;
var map__24322_24378__$1 = ((((!((map__24322_24377 == null)))?((((map__24322_24377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24322_24377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322_24377):map__24322_24377);
var course_24379 = cljs.core.get.call(null,map__24322_24378__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_24379);
} else {
if(cljs.core.truth_(pred__24310_24359.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__24311_24360))){
var map__24324_24380 = dir;
var map__24324_24381__$1 = ((((!((map__24324_24380 == null)))?((((map__24324_24380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24324_24380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24324_24380):map__24324_24380);
var speed_24382 = cljs.core.get.call(null,map__24324_24381__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_24383 = cljs.core.get.call(null,map__24324_24381__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_24382,temp_24383);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__24384 = cljs.core.next.call(null,seq__24286__$1);
var G__24385 = null;
var G__24386 = (0);
var G__24387 = (0);
seq__24286 = G__24384;
chunk__24287 = G__24385;
count__24288 = G__24386;
i__24289 = G__24387;
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
var vec__24391 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__24391,(0),null);
var lon = cljs.core.nth.call(null,vec__24391,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car) / 3.281) | (0));
var alt__$1 = (((alt < (10)))?(10):alt);
return czm.core.fly_to.call(null,lat,lon,alt__$1,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"no-terrain","no-terrain",-2110718690));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);
view3d.client.carrier.call(null,"R1",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(315),new cljs.core.Keyword(null,"altitude","altitude",463588637),(3000)], null));

//# sourceMappingURL=client.js.map