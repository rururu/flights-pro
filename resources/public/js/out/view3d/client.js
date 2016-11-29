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
var vec__20857 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__20857,(0),null);
var temp = cljs.core.nth.call(null,vec__20857,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__20857,bank__$1,temp,arc,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__20857,bank__$1,temp,arc,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__20862 = response;
var map__20862__$1 = ((((!((map__20862 == null)))?((((map__20862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20862):map__20862);
var status = cljs.core.get.call(null,map__20862__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20862__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var seq__20898 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__20899 = null;
var count__20900 = (0);
var i__20901 = (0);
while(true){
if((i__20901 < count__20900)){
var map__20902 = cljs.core._nth.call(null,chunk__20899,i__20901);
var map__20902__$1 = ((((!((map__20902 == null)))?((((map__20902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);
var dir = map__20902__$1;
var directive = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__20904_20932 = cljs.core._EQ_;
var expr__20905_20933 = directive;
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__20905_20933))){
var map__20907_20934 = dir;
var map__20907_20935__$1 = ((((!((map__20907_20934 == null)))?((((map__20907_20934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20907_20934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20907_20934):map__20907_20934);
var list_20936 = cljs.core.get.call(null,map__20907_20935__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_20936);
} else {
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__20905_20933))){
var map__20909_20937 = dir;
var map__20909_20938__$1 = ((((!((map__20909_20937 == null)))?((((map__20909_20937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20909_20937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20909_20937):map__20909_20937);
var callsign_20939 = cljs.core.get.call(null,map__20909_20938__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_20940 = cljs.core.get.call(null,map__20909_20938__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_20939,vehicle_20940);
} else {
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__20905_20933))){
var map__20911_20941 = dir;
var map__20911_20942__$1 = ((((!((map__20911_20941 == null)))?((((map__20911_20941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20911_20941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20911_20941):map__20911_20941);
var crs_20943 = cljs.core.get.call(null,map__20911_20942__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_20944 = cljs.core.get.call(null,map__20911_20942__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_20945 = cljs.core.get.call(null,map__20911_20942__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_20943);

view3d.client.speed.call(null,spd_20944);

view3d.client.altitude.call(null,alt_20945);
} else {
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__20905_20933))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__20905_20933))){
var map__20913_20946 = dir;
var map__20913_20947__$1 = ((((!((map__20913_20946 == null)))?((((map__20913_20946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20913_20946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20913_20946):map__20913_20946);
var course_20948 = cljs.core.get.call(null,map__20913_20947__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_20948);
} else {
if(cljs.core.truth_(pred__20904_20932.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__20905_20933))){
var map__20915_20949 = dir;
var map__20915_20950__$1 = ((((!((map__20915_20949 == null)))?((((map__20915_20949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20915_20949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20915_20949):map__20915_20949);
var speed_20951 = cljs.core.get.call(null,map__20915_20950__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_20952 = cljs.core.get.call(null,map__20915_20950__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_20951,temp_20952);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__20953 = seq__20898;
var G__20954 = chunk__20899;
var G__20955 = count__20900;
var G__20956 = (i__20901 + (1));
seq__20898 = G__20953;
chunk__20899 = G__20954;
count__20900 = G__20955;
i__20901 = G__20956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20898);
if(temp__4657__auto__){
var seq__20898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20898__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__20898__$1);
var G__20957 = cljs.core.chunk_rest.call(null,seq__20898__$1);
var G__20958 = c__9319__auto__;
var G__20959 = cljs.core.count.call(null,c__9319__auto__);
var G__20960 = (0);
seq__20898 = G__20957;
chunk__20899 = G__20958;
count__20900 = G__20959;
i__20901 = G__20960;
continue;
} else {
var map__20917 = cljs.core.first.call(null,seq__20898__$1);
var map__20917__$1 = ((((!((map__20917 == null)))?((((map__20917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20917):map__20917);
var dir = map__20917__$1;
var directive = cljs.core.get.call(null,map__20917__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__20919_20961 = cljs.core._EQ_;
var expr__20920_20962 = directive;
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__20920_20962))){
var map__20922_20963 = dir;
var map__20922_20964__$1 = ((((!((map__20922_20963 == null)))?((((map__20922_20963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20922_20963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922_20963):map__20922_20963);
var list_20965 = cljs.core.get.call(null,map__20922_20964__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_20965);
} else {
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__20920_20962))){
var map__20924_20966 = dir;
var map__20924_20967__$1 = ((((!((map__20924_20966 == null)))?((((map__20924_20966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20924_20966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924_20966):map__20924_20966);
var callsign_20968 = cljs.core.get.call(null,map__20924_20967__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_20969 = cljs.core.get.call(null,map__20924_20967__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_20968,vehicle_20969);
} else {
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__20920_20962))){
var map__20926_20970 = dir;
var map__20926_20971__$1 = ((((!((map__20926_20970 == null)))?((((map__20926_20970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20926_20970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20926_20970):map__20926_20970);
var crs_20972 = cljs.core.get.call(null,map__20926_20971__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_20973 = cljs.core.get.call(null,map__20926_20971__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_20974 = cljs.core.get.call(null,map__20926_20971__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
view3d.client.course.call(null,crs_20972);

view3d.client.speed.call(null,spd_20973);

view3d.client.altitude.call(null,alt_20974);
} else {
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__20920_20962))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__20920_20962))){
var map__20928_20975 = dir;
var map__20928_20976__$1 = ((((!((map__20928_20975 == null)))?((((map__20928_20975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20928_20975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20928_20975):map__20928_20975);
var course_20977 = cljs.core.get.call(null,map__20928_20976__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_20977);
} else {
if(cljs.core.truth_(pred__20919_20961.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__20920_20962))){
var map__20930_20978 = dir;
var map__20930_20979__$1 = ((((!((map__20930_20978 == null)))?((((map__20930_20978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20930_20978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20930_20978):map__20930_20978);
var speed_20980 = cljs.core.get.call(null,map__20930_20979__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_20981 = cljs.core.get.call(null,map__20930_20979__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_20980,temp_20981);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__20982 = cljs.core.next.call(null,seq__20898__$1);
var G__20983 = null;
var G__20984 = (0);
var G__20985 = (0);
seq__20898 = G__20982;
chunk__20899 = G__20983;
count__20900 = G__20984;
i__20901 = G__20985;
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
var vec__20989 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__20989,(0),null);
var lon = cljs.core.nth.call(null,vec__20989,(1),null);
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