// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),(0),new cljs.core.Keyword(null,"course","course",1455432948),(0),new cljs.core.Keyword(null,"step","step",1288888124),(0),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.volatile_BANG_.call(null,"STOP"),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1000)], null),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.volatile_BANG_.call(null,"STOP"),new cljs.core.Keyword(null,"step","step",1288888124),0.25,new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1000)], null)], null));
view3d.client.BSE_URL = "http://localhost:4444/";
view3d.client.DIR_URL = "http://localhost:4444/directives/";
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__24066 = response;
var map__24066__$1 = ((((!((map__24066 == null)))?((((map__24066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24066):map__24066);
var status = cljs.core.get.call(null,map__24066__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24066__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__24094 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__24095 = null;
var count__24096 = (0);
var i__24097 = (0);
while(true){
if((i__24097 < count__24096)){
var map__24098 = cljs.core._nth.call(null,chunk__24095,i__24097);
var map__24098__$1 = ((((!((map__24098 == null)))?((((map__24098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24098):map__24098);
var dir = map__24098__$1;
var directive = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__24100_24120 = cljs.core._EQ_;
var expr__24101_24121 = directive;
if(cljs.core.truth_(pred__24100_24120.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__24101_24121))){
var map__24103_24122 = dir;
var map__24103_24123__$1 = ((((!((map__24103_24122 == null)))?((((map__24103_24122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24103_24122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24103_24122):map__24103_24122);
var lat_24124 = cljs.core.get.call(null,map__24103_24123__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24125 = cljs.core.get.call(null,map__24103_24123__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_24126 = cljs.core.get.call(null,map__24103_24123__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_24127 = cljs.core.get.call(null,map__24103_24123__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_24128 = cljs.core.get.call(null,map__24103_24123__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_24124,lon_24125,alt_24127,crs_24126,period_24128);
} else {
if(cljs.core.truth_(pred__24100_24120.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__24101_24121))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__24100_24120.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__24101_24121))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__24100_24120.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__24101_24121))){
var map__24105_24129 = dir;
var map__24105_24130__$1 = ((((!((map__24105_24129 == null)))?((((map__24105_24129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24105_24129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24105_24129):map__24105_24129);
var course_24131 = cljs.core.get.call(null,map__24105_24130__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn.call(null,view3d.client.CARRIER,course_24131);
} else {
if(cljs.core.truth_(pred__24100_24120.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__24101_24121))){
var map__24107_24132 = dir;
var map__24107_24133__$1 = ((((!((map__24107_24132 == null)))?((((map__24107_24132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24107_24132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24107_24132):map__24107_24132);
var speed_24134 = cljs.core.get.call(null,map__24107_24133__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
carr.move.accel.call(null,view3d.client.CARRIER,speed_24134);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__24135 = seq__24094;
var G__24136 = chunk__24095;
var G__24137 = count__24096;
var G__24138 = (i__24097 + (1));
seq__24094 = G__24135;
chunk__24095 = G__24136;
count__24096 = G__24137;
i__24097 = G__24138;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24094);
if(temp__4657__auto__){
var seq__24094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24094__$1)){
var c__20246__auto__ = cljs.core.chunk_first.call(null,seq__24094__$1);
var G__24139 = cljs.core.chunk_rest.call(null,seq__24094__$1);
var G__24140 = c__20246__auto__;
var G__24141 = cljs.core.count.call(null,c__20246__auto__);
var G__24142 = (0);
seq__24094 = G__24139;
chunk__24095 = G__24140;
count__24096 = G__24141;
i__24097 = G__24142;
continue;
} else {
var map__24109 = cljs.core.first.call(null,seq__24094__$1);
var map__24109__$1 = ((((!((map__24109 == null)))?((((map__24109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24109):map__24109);
var dir = map__24109__$1;
var directive = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__24111_24143 = cljs.core._EQ_;
var expr__24112_24144 = directive;
if(cljs.core.truth_(pred__24111_24143.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__24112_24144))){
var map__24114_24145 = dir;
var map__24114_24146__$1 = ((((!((map__24114_24145 == null)))?((((map__24114_24145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24114_24145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24114_24145):map__24114_24145);
var lat_24147 = cljs.core.get.call(null,map__24114_24146__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24148 = cljs.core.get.call(null,map__24114_24146__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_24149 = cljs.core.get.call(null,map__24114_24146__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_24150 = cljs.core.get.call(null,map__24114_24146__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_24151 = cljs.core.get.call(null,map__24114_24146__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_24147,lon_24148,alt_24150,crs_24149,period_24151);
} else {
if(cljs.core.truth_(pred__24111_24143.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__24112_24144))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__24111_24143.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__24112_24144))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__24111_24143.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__24112_24144))){
var map__24116_24152 = dir;
var map__24116_24153__$1 = ((((!((map__24116_24152 == null)))?((((map__24116_24152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24116_24152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24116_24152):map__24116_24152);
var course_24154 = cljs.core.get.call(null,map__24116_24153__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn.call(null,view3d.client.CARRIER,course_24154);
} else {
if(cljs.core.truth_(pred__24111_24143.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__24112_24144))){
var map__24118_24155 = dir;
var map__24118_24156__$1 = ((((!((map__24118_24155 == null)))?((((map__24118_24155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24118_24155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24118_24155):map__24118_24155);
var speed_24157 = cljs.core.get.call(null,map__24118_24156__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
carr.move.accel.call(null,view3d.client.CARRIER,speed_24157);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__24158 = cljs.core.next.call(null,seq__24094__$1);
var G__24159 = null;
var G__24160 = (0);
var G__24161 = (0);
seq__24094 = G__24158;
chunk__24095 = G__24159;
count__24096 = G__24160;
i__24097 = G__24161;
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
var vec__24165 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__24165,(0),null);
var lon = cljs.core.nth.call(null,vec__24165,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.on_load = (function view3d$client$on_load(){
czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step","step",1288888124),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

return csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map