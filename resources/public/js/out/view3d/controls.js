// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__19817__auto__ = [];
var len__19810__auto___23398 = arguments.length;
var i__19811__auto___23399 = (0);
while(true){
if((i__19811__auto___23399 < len__19810__auto___23398)){
args__19817__auto__.push((arguments[i__19811__auto___23399]));

var G__23400 = (i__19811__auto___23399 + (1));
i__19811__auto___23399 = G__23400;
continue;
} else {
}
break;
}

var argseq__19818__auto__ = ((((1) < args__19817__auto__.length))?(new cljs.core.IndexedSeq(args__19817__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19818__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq23396){
var G__23397 = cljs.core.first.call(null,seq23396);
var seq23396__$1 = cljs.core.next.call(null,seq23396);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__23397,seq23396__$1);
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
var map__23403 = cljs.core.deref.call(null,carr__$1);
var map__23403__$1 = ((((!((map__23403 == null)))?((((map__23403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23403):map__23403);
var coord = cljs.core.get.call(null,map__23403__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__23403__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__23403__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__23403__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(speed)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(altitude)].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str("<option value='select'>select</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__19485__auto__ = (function view3d$controls$callsigns_$_iter__23409(s__23410){
return (new cljs.core.LazySeq(null,(function (){
var s__23410__$1 = s__23410;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23410__$1);
if(temp__4657__auto__){
var s__23410__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23410__$2)){
var c__19483__auto__ = cljs.core.chunk_first.call(null,s__23410__$2);
var size__19484__auto__ = cljs.core.count.call(null,c__19483__auto__);
var b__23412 = cljs.core.chunk_buffer.call(null,size__19484__auto__);
if((function (){var i__23411 = (0);
while(true){
if((i__23411 < size__19484__auto__)){
var e = cljs.core._nth.call(null,c__19483__auto__,i__23411);
cljs.core.chunk_append.call(null,b__23412,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__23413 = (i__23411 + (1));
i__23411 = G__23413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23412),view3d$controls$callsigns_$_iter__23409.call(null,cljs.core.chunk_rest.call(null,s__23410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23412),null);
}
} else {
var e = cljs.core.first.call(null,s__23410__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$controls$callsigns_$_iter__23409.call(null,cljs.core.rest.call(null,s__23410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19485__auto__.call(null,list);
})())),cljs.core.str("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map