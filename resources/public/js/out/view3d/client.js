// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),(0),new cljs.core.Keyword(null,"course","course",1455432948),(0),new cljs.core.Keyword(null,"step","step",1288888124),(0),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),(20),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1000)], null),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),0.25,new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1000)], null)], null));
view3d.client.BSE_URL = "http://localhost:4444/";
view3d.client.DIR_URL = "http://localhost:4444/directives/";
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__32759 = response;
var map__32759__$1 = ((((!((map__32759 == null)))?((((map__32759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);
var status = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__32787 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__32788 = null;
var count__32789 = (0);
var i__32790 = (0);
while(true){
if((i__32790 < count__32789)){
var map__32791 = cljs.core._nth.call(null,chunk__32788,i__32790);
var map__32791__$1 = ((((!((map__32791 == null)))?((((map__32791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);
var dir = map__32791__$1;
var directive = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__32793_32813 = cljs.core._EQ_;
var expr__32794_32814 = directive;
if(cljs.core.truth_(pred__32793_32813.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__32794_32814))){
var map__32796_32815 = dir;
var map__32796_32816__$1 = ((((!((map__32796_32815 == null)))?((((map__32796_32815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32796_32815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796_32815):map__32796_32815);
var lat_32817 = cljs.core.get.call(null,map__32796_32816__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_32818 = cljs.core.get.call(null,map__32796_32816__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_32819 = cljs.core.get.call(null,map__32796_32816__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_32820 = cljs.core.get.call(null,map__32796_32816__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_32821 = cljs.core.get.call(null,map__32796_32816__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_32817,lon_32818,alt_32820,crs_32819,period_32821);
} else {
if(cljs.core.truth_(pred__32793_32813.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__32794_32814))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__32793_32813.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__32794_32814))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__32793_32813.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__32794_32814))){
var map__32798_32822 = dir;
var map__32798_32823__$1 = ((((!((map__32798_32822 == null)))?((((map__32798_32822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32798_32822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32798_32822):map__32798_32822);
var course_32824 = cljs.core.get.call(null,map__32798_32823__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_32824);
} else {
if(cljs.core.truth_(pred__32793_32813.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__32794_32814))){
var map__32800_32825 = dir;
var map__32800_32826__$1 = ((((!((map__32800_32825 == null)))?((((map__32800_32825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32800_32825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32800_32825):map__32800_32825);
var speed_32827 = cljs.core.get.call(null,map__32800_32826__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_32828 = cljs.core.get.call(null,map__32800_32826__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_32827,temp_32828);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__32829 = seq__32787;
var G__32830 = chunk__32788;
var G__32831 = count__32789;
var G__32832 = (i__32790 + (1));
seq__32787 = G__32829;
chunk__32788 = G__32830;
count__32789 = G__32831;
i__32790 = G__32832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32787);
if(temp__4657__auto__){
var seq__32787__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32787__$1)){
var c__19242__auto__ = cljs.core.chunk_first.call(null,seq__32787__$1);
var G__32833 = cljs.core.chunk_rest.call(null,seq__32787__$1);
var G__32834 = c__19242__auto__;
var G__32835 = cljs.core.count.call(null,c__19242__auto__);
var G__32836 = (0);
seq__32787 = G__32833;
chunk__32788 = G__32834;
count__32789 = G__32835;
i__32790 = G__32836;
continue;
} else {
var map__32802 = cljs.core.first.call(null,seq__32787__$1);
var map__32802__$1 = ((((!((map__32802 == null)))?((((map__32802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32802):map__32802);
var dir = map__32802__$1;
var directive = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__32804_32837 = cljs.core._EQ_;
var expr__32805_32838 = directive;
if(cljs.core.truth_(pred__32804_32837.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__32805_32838))){
var map__32807_32839 = dir;
var map__32807_32840__$1 = ((((!((map__32807_32839 == null)))?((((map__32807_32839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32807_32839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32807_32839):map__32807_32839);
var lat_32841 = cljs.core.get.call(null,map__32807_32840__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_32842 = cljs.core.get.call(null,map__32807_32840__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_32843 = cljs.core.get.call(null,map__32807_32840__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_32844 = cljs.core.get.call(null,map__32807_32840__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_32845 = cljs.core.get.call(null,map__32807_32840__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_32841,lon_32842,alt_32844,crs_32843,period_32845);
} else {
if(cljs.core.truth_(pred__32804_32837.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__32805_32838))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__32804_32837.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__32805_32838))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__32804_32837.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__32805_32838))){
var map__32809_32846 = dir;
var map__32809_32847__$1 = ((((!((map__32809_32846 == null)))?((((map__32809_32846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32809_32846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32809_32846):map__32809_32846);
var course_32848 = cljs.core.get.call(null,map__32809_32847__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_32848);
} else {
if(cljs.core.truth_(pred__32804_32837.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__32805_32838))){
var map__32811_32849 = dir;
var map__32811_32850__$1 = ((((!((map__32811_32849 == null)))?((((map__32811_32849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32811_32849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32811_32849):map__32811_32849);
var speed_32851 = cljs.core.get.call(null,map__32811_32850__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_32852 = cljs.core.get.call(null,map__32811_32850__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_32851,temp_32852);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__32853 = cljs.core.next.call(null,seq__32787__$1);
var G__32854 = null;
var G__32855 = (0);
var G__32856 = (0);
seq__32787 = G__32853;
chunk__32788 = G__32854;
count__32789 = G__32855;
i__32790 = G__32856;
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
var vec__32860 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__32860,(0),null);
var lon = cljs.core.nth.call(null,vec__32860,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step","step",1288888124),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

return csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);
});
window.onload = view3d.client.on_load.call(null);
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(10000),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null)));

//# sourceMappingURL=client.js.map