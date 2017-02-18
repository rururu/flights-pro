// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__10296__auto__ = [];
var len__10289__auto___34566 = arguments.length;
var i__10290__auto___34567 = (0);
while(true){
if((i__10290__auto___34567 < len__10289__auto___34566)){
args__10296__auto__.push((arguments[i__10290__auto___34567]));

var G__34568 = (i__10290__auto___34567 + (1));
i__10290__auto___34567 = G__34568;
continue;
} else {
}
break;
}

var argseq__10297__auto__ = ((((1) < args__10296__auto__.length))?(new cljs.core.IndexedSeq(args__10296__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10297__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq34564){
var G__34565 = cljs.core.first.call(null,seq34564);
var seq34564__$1 = cljs.core.next.call(null,seq34564);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__34565,seq34564__$1);
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

view3d.controls.set_html_BANG_.call(null,"speed-acl",[cljs.core.str("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9964__auto__ = (function view3d$controls$show_controls_$_iter__34577(s__34578){
return (new cljs.core.LazySeq(null,(function (){
var s__34578__$1 = s__34578;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34578__$1);
if(temp__4657__auto__){
var s__34578__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34578__$2)){
var c__9962__auto__ = cljs.core.chunk_first.call(null,s__34578__$2);
var size__9963__auto__ = cljs.core.count.call(null,c__9962__auto__);
var b__34580 = cljs.core.chunk_buffer.call(null,size__9963__auto__);
if((function (){var i__34579 = (0);
while(true){
if((i__34579 < size__9963__auto__)){
var n = cljs.core._nth.call(null,c__9962__auto__,i__34579);
cljs.core.chunk_append.call(null,b__34580,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''));

var G__34585 = (i__34579 + (1));
i__34579 = G__34585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34580),view3d$controls$show_controls_$_iter__34577.call(null,cljs.core.chunk_rest.call(null,s__34578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34580),null);
}
} else {
var n = cljs.core.first.call(null,s__34578__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''),view3d$controls$show_controls_$_iter__34577.call(null,cljs.core.rest.call(null,s__34578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9964__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude-acl",[cljs.core.str("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9964__auto__ = (function view3d$controls$show_controls_$_iter__34581(s__34582){
return (new cljs.core.LazySeq(null,(function (){
var s__34582__$1 = s__34582;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34582__$1);
if(temp__4657__auto__){
var s__34582__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34582__$2)){
var c__9962__auto__ = cljs.core.chunk_first.call(null,s__34582__$2);
var size__9963__auto__ = cljs.core.count.call(null,c__9962__auto__);
var b__34584 = cljs.core.chunk_buffer.call(null,size__9963__auto__);
if((function (){var i__34583 = (0);
while(true){
if((i__34583 < size__9963__auto__)){
var n = cljs.core._nth.call(null,c__9962__auto__,i__34583);
cljs.core.chunk_append.call(null,b__34584,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''));

var G__34586 = (i__34583 + (1));
i__34583 = G__34586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34584),view3d$controls$show_controls_$_iter__34581.call(null,cljs.core.chunk_rest.call(null,s__34582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34584),null);
}
} else {
var n = cljs.core.first.call(null,s__34582__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(n),cljs.core.str("'>"),cljs.core.str(n),cljs.core.str("</option>")].join(''),view3d$controls$show_controls_$_iter__34581.call(null,cljs.core.rest.call(null,s__34582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9964__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:84px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:84px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(carr__$1){
var map__34589 = cljs.core.deref.call(null,carr__$1);
var map__34589__$1 = ((((!((map__34589 == null)))?((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34589):map__34589);
var coord = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(speed)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(altitude)].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str("<option value='select'>select</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9964__auto__ = (function view3d$controls$callsigns_$_iter__34595(s__34596){
return (new cljs.core.LazySeq(null,(function (){
var s__34596__$1 = s__34596;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34596__$1);
if(temp__4657__auto__){
var s__34596__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34596__$2)){
var c__9962__auto__ = cljs.core.chunk_first.call(null,s__34596__$2);
var size__9963__auto__ = cljs.core.count.call(null,c__9962__auto__);
var b__34598 = cljs.core.chunk_buffer.call(null,size__9963__auto__);
if((function (){var i__34597 = (0);
while(true){
if((i__34597 < size__9963__auto__)){
var e = cljs.core._nth.call(null,c__9962__auto__,i__34597);
cljs.core.chunk_append.call(null,b__34598,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__34599 = (i__34597 + (1));
i__34597 = G__34599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34598),view3d$controls$callsigns_$_iter__34595.call(null,cljs.core.chunk_rest.call(null,s__34596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34598),null);
}
} else {
var e = cljs.core.first.call(null,s__34596__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$controls$callsigns_$_iter__34595.call(null,cljs.core.rest.call(null,s__34596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9964__auto__.call(null,list);
})()))].join(''))),cljs.core.str("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map