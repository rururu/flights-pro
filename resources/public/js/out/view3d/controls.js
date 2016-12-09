// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__9938__auto__ = [];
var len__9931__auto___23243 = arguments.length;
var i__9932__auto___23244 = (0);
while(true){
if((i__9932__auto___23244 < len__9931__auto___23243)){
args__9938__auto__.push((arguments[i__9932__auto___23244]));

var G__23245 = (i__9932__auto___23244 + (1));
i__9932__auto___23244 = G__23245;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((1) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9939__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq23241){
var G__23242 = cljs.core.first.call(null,seq23241);
var seq23241__$1 = cljs.core.next.call(null,seq23241);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__23242,seq23241__$1);
});

view3d.controls.by_id = (function view3d$controls$by_id(id){
return document.getElementById(id);
});
view3d.controls.get_value = (function view3d$controls$get_value(id){
return view3d.controls.by_id.call(null,id).value;
});
view3d.controls.get_html = (function view3d$controls$get_html(id){
return view3d.controls.by_id.call(null,id).innerHTML;
});
view3d.controls.set_html_BANG_ = (function view3d$controls$set_html_BANG_(id,msg){
return view3d.controls.by_id.call(null,id).innerHTML = msg;
});
view3d.controls.show_controls = (function view3d$controls$show_controls(){
view3d.controls.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

view3d.controls.set_html_BANG_.call(null,"accel","accel");

view3d.controls.set_html_BANG_.call(null,"course","Course: 000");

view3d.controls.set_html_BANG_.call(null,"speed","Speed: 000");

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.controls.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.controls.set_html_BANG_.call(null,"onboard-fld","<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>\n   <option value='callsign'>callsign</option>\n   <option value='manual'>manual</option>\n   <option value='select'>select</option>");

view3d.controls.set_html_BANG_.call(null,"view","View:");

view3d.controls.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD'>BACKWARD</option>\n   <option value='RIGHT'>RIGHT</option>\n   <option value='LEFT'>LEFT</option>\n   <option value='UP'>UP</option>\n   <option value='DOWN'>DOWN</option>\n   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>\n   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>\n   </select>");

view3d.controls.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.controls.set_html_BANG_.call(null,"pitch-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

view3d.controls.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.roll(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='180' style='width:38px' id='input-crs'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='210' style='width:38px' id='input-spd'\n               onchange='javascript:view3d.client.speed()'>");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude()'>");

view3d.controls.set_html_BANG_.call(null,"speed-acl","<select style='width:40px' id='input-spdacl'\n                onchange='javascript:view3d.client.speed()'>\n   <option value='1'>1</option>\n   <option value='2'>2</option>\n   <option value='3'>3</option>\n   <option value='4'>4</option>\n   <option value='5'>5</option>");

view3d.controls.set_html_BANG_.call(null,"altitude-acl","<select style='width:40px' id='input-altacl'\n                onchange='javascript:view3d.client.altitude()'>\n   <option value='1'>1</option>\n   <option value='2'>2</option>\n   <option value='3'>3</option>\n   <option value='4'>4</option>\n   <option value='5'>5</option>");

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:78px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:78px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(carr__$1){
var map__23248 = cljs.core.deref.call(null,carr__$1);
var map__23248__$1 = ((((!((map__23248 == null)))?((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23248):map__23248);
var coord = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(speed)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(altitude)].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str("<option value='select'>select</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9606__auto__ = (function view3d$controls$callsigns_$_iter__23254(s__23255){
return (new cljs.core.LazySeq(null,(function (){
var s__23255__$1 = s__23255;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23255__$1);
if(temp__4657__auto__){
var s__23255__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23255__$2)){
var c__9604__auto__ = cljs.core.chunk_first.call(null,s__23255__$2);
var size__9605__auto__ = cljs.core.count.call(null,c__9604__auto__);
var b__23257 = cljs.core.chunk_buffer.call(null,size__9605__auto__);
if((function (){var i__23256 = (0);
while(true){
if((i__23256 < size__9605__auto__)){
var e = cljs.core._nth.call(null,c__9604__auto__,i__23256);
cljs.core.chunk_append.call(null,b__23257,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__23258 = (i__23256 + (1));
i__23256 = G__23258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23257),view3d$controls$callsigns_$_iter__23254.call(null,cljs.core.chunk_rest.call(null,s__23255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23257),null);
}
} else {
var e = cljs.core.first.call(null,s__23255__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$controls$callsigns_$_iter__23254.call(null,cljs.core.rest.call(null,s__23255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9606__auto__.call(null,list);
})()))].join(''))),cljs.core.str("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map