// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__19861__auto__ = [];
var len__19854__auto___25748 = arguments.length;
var i__19855__auto___25749 = (0);
while(true){
if((i__19855__auto___25749 < len__19854__auto___25748)){
args__19861__auto__.push((arguments[i__19855__auto___25749]));

var G__25750 = (i__19855__auto___25749 + (1));
i__19855__auto___25749 = G__25750;
continue;
} else {
}
break;
}

var argseq__19862__auto__ = ((((1) < args__19861__auto__.length))?(new cljs.core.IndexedSeq(args__19861__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19862__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq25746){
var G__25747 = cljs.core.first.call(null,seq25746);
var seq25746__$1 = cljs.core.next.call(null,seq25746);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__25747,seq25746__$1);
});

view3d.controls.by_id = (function view3d$controls$by_id(id){
return document.getElementById(id);
});
view3d.controls.set_html_BANG_ = (function view3d$controls$set_html_BANG_(id,msg){
return view3d.controls.by_id.call(null,id).innerHTML = msg;
});
view3d.controls.show_controls = (function view3d$controls$show_controls(){
view3d.controls.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

view3d.controls.set_html_BANG_.call(null,"course","Course: 000");

view3d.controls.set_html_BANG_.call(null,"speed","Speed: 000");

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.controls.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.controls.set_html_BANG_.call(null,"onboard-fld","<input value='callsign' style='width:90px'\n               onchange='javascript:view3d.client.onboard(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"view","View:");

view3d.controls.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD'>BACKWARD</option>\n   <option value='RIGHT'>RIGHT</option>\n   <option value='LEFT'>LEFT</option>\n   <option value='UP'>UP</option>\n   <option value='DOWN'>DOWN</option>\n   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>\n   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>\n   </select>");

view3d.controls.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.controls.set_html_BANG_.call(null,"pitch-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

view3d.controls.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.roll(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='0' style='width:40px'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='0' style='width:40px'\n               onchange='javascript:view3d.client.speed(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='0' style='width:40px'\n               onchange='javascript:view3d.client.altitude(this.value)'>");
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(carr__$1){
var map__25753 = cljs.core.deref.call(null,carr__$1);
var map__25753__$1 = ((((!((map__25753 == null)))?((((map__25753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25753):map__25753);
var coord = cljs.core.get.call(null,map__25753__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__25753__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__25753__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__25753__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(speed)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(altitude)].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});

//# sourceMappingURL=controls.js.map