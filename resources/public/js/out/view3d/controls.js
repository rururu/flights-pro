// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__21696__auto__ = [];
var len__21689__auto___24128 = arguments.length;
var i__21690__auto___24129 = (0);
while(true){
if((i__21690__auto___24129 < len__21689__auto___24128)){
args__21696__auto__.push((arguments[i__21690__auto___24129]));

var G__24130 = (i__21690__auto___24129 + (1));
i__21690__auto___24129 = G__24130;
continue;
} else {
}
break;
}

var argseq__21697__auto__ = ((((1) < args__21696__auto__.length))?(new cljs.core.IndexedSeq(args__21696__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21697__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq24126){
var G__24127 = cljs.core.first.call(null,seq24126);
var seq24126__$1 = cljs.core.next.call(null,seq24126);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__24127,seq24126__$1);
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

view3d.controls.set_html_BANG_.call(null,"pitch-fld","<input value='-20' style='width:90px'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

view3d.controls.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.roll(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='180' style='width:38px' id='input-crs'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='210' style='width:38px' id='input-spd'\n               onchange='javascript:view3d.client.speed(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-acl",[cljs.core.str("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__21364__auto__ = (function view3d$controls$show_controls_$_iter__24139(s__24140){
return (new cljs.core.LazySeq(null,(function (){
var s__24140__$1 = s__24140;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24140__$1);
if(temp__4657__auto__){
var s__24140__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24140__$2)){
var c__21362__auto__ = cljs.core.chunk_first.call(null,s__24140__$2);
var size__21363__auto__ = cljs.core.count.call(null,c__21362__auto__);
var b__24142 = cljs.core.chunk_buffer.call(null,size__21363__auto__);
if((function (){var i__24141 = (0);
while(true){
if((i__24141 < size__21363__auto__)){
var n = cljs.core._nth.call(null,c__21362__auto__,i__24141);
cljs.core.chunk_append.call(null,b__24142,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''));

var G__24147 = (i__24141 + (1));
i__24141 = G__24147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24142),view3d$controls$show_controls_$_iter__24139.call(null,cljs.core.chunk_rest.call(null,s__24140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24142),null);
}
} else {
var n = cljs.core.first.call(null,s__24140__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''),view3d$controls$show_controls_$_iter__24139.call(null,cljs.core.rest.call(null,s__24140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21364__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude-acl",[cljs.core.str("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__21364__auto__ = (function view3d$controls$show_controls_$_iter__24143(s__24144){
return (new cljs.core.LazySeq(null,(function (){
var s__24144__$1 = s__24144;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24144__$1);
if(temp__4657__auto__){
var s__24144__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24144__$2)){
var c__21362__auto__ = cljs.core.chunk_first.call(null,s__24144__$2);
var size__21363__auto__ = cljs.core.count.call(null,c__21362__auto__);
var b__24146 = cljs.core.chunk_buffer.call(null,size__21363__auto__);
if((function (){var i__24145 = (0);
while(true){
if((i__24145 < size__21363__auto__)){
var n = cljs.core._nth.call(null,c__21362__auto__,i__24145);
cljs.core.chunk_append.call(null,b__24146,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''));

var G__24148 = (i__24145 + (1));
i__24145 = G__24148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24146),view3d$controls$show_controls_$_iter__24143.call(null,cljs.core.chunk_rest.call(null,s__24144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24146),null);
}
} else {
var n = cljs.core.first.call(null,s__24144__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''),view3d$controls$show_controls_$_iter__24143.call(null,cljs.core.rest.call(null,s__24144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21364__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:84px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:84px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(carr__$1){
var map__24151 = cljs.core.deref.call(null,carr__$1);
var map__24151__$1 = ((((!((map__24151 == null)))?((((map__24151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24151):map__24151);
var coord = cljs.core.get.call(null,map__24151__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__24151__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__24151__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__24151__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(speed)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(altitude)].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str("<option value='select'>select</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__21364__auto__ = (function view3d$controls$callsigns_$_iter__24157(s__24158){
return (new cljs.core.LazySeq(null,(function (){
var s__24158__$1 = s__24158;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24158__$1);
if(temp__4657__auto__){
var s__24158__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24158__$2)){
var c__21362__auto__ = cljs.core.chunk_first.call(null,s__24158__$2);
var size__21363__auto__ = cljs.core.count.call(null,c__21362__auto__);
var b__24160 = cljs.core.chunk_buffer.call(null,size__21363__auto__);
if((function (){var i__24159 = (0);
while(true){
if((i__24159 < size__21363__auto__)){
var e = cljs.core._nth.call(null,c__21362__auto__,i__24159);
cljs.core.chunk_append.call(null,b__24160,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__24161 = (i__24159 + (1));
i__24159 = G__24161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24160),view3d$controls$callsigns_$_iter__24157.call(null,cljs.core.chunk_rest.call(null,s__24158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24160),null);
}
} else {
var e = cljs.core.first.call(null,s__24158__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$controls$callsigns_$_iter__24157.call(null,cljs.core.rest.call(null,s__24158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21364__auto__.call(null,list);
})()))].join(''))),cljs.core.str("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map