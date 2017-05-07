// Compiled by ClojureScript 1.9.521 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__10037__auto__ = [];
var len__10030__auto___36676 = arguments.length;
var i__10031__auto___36677 = (0);
while(true){
if((i__10031__auto___36677 < len__10030__auto___36676)){
args__10037__auto__.push((arguments[i__10031__auto___36677]));

var G__36678 = (i__10031__auto___36677 + (1));
i__10031__auto___36677 = G__36678;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((1) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10038__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq36674){
var G__36675 = cljs.core.first.call(null,seq36674);
var seq36674__$1 = cljs.core.next.call(null,seq36674);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__36675,seq36674__$1);
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
view3d.controls.left_controls = (function view3d$controls$left_controls(){
view3d.controls.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.controls.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.controls.set_html_BANG_.call(null,"onboard-fld","<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>\n   <option value='MANUAL'>MANUAL</option>\n   <option value='select'>select</option>");

view3d.controls.set_html_BANG_.call(null,"view","View:");

view3d.controls.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD'>BACKWARD</option>\n   <option value='RIGHT'>RIGHT</option>\n   <option value='LEFT'>LEFT</option>\n   <option value='UP'>UP</option>\n   <option value='DOWN'>DOWN</option>\n   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>\n   <option value='FORWARD-LEFT'>FORWARD-LEFT</option>\n   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>\n   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>\n   </select>");

view3d.controls.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.controls.set_html_BANG_.call(null,"pitch-fld","<input value='-20' style='width:90px'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

return view3d.controls.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.roll(this.value)'>");
});
view3d.controls.right_controls = (function view3d$controls$right_controls(){
view3d.controls.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

view3d.controls.set_html_BANG_.call(null,"accel","accel");

view3d.controls.set_html_BANG_.call(null,"course","Course: 000");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='180' style='width:38px' id='input-crs'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed","Speed: 000");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='210' style='width:38px' id='input-spd'\n               onchange='javascript:view3d.client.speed(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9705__auto__ = (function view3d$controls$right_controls_$_iter__36687(s__36688){
return (new cljs.core.LazySeq(null,(function (){
var s__36688__$1 = s__36688;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36688__$1);
if(temp__4657__auto__){
var s__36688__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36688__$2)){
var c__9703__auto__ = cljs.core.chunk_first.call(null,s__36688__$2);
var size__9704__auto__ = cljs.core.count.call(null,c__9703__auto__);
var b__36690 = cljs.core.chunk_buffer.call(null,size__9704__auto__);
if((function (){var i__36689 = (0);
while(true){
if((i__36689 < size__9704__auto__)){
var n = cljs.core._nth.call(null,c__9703__auto__,i__36689);
cljs.core.chunk_append.call(null,b__36690,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__36695 = (i__36689 + (1));
i__36689 = G__36695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36690),view3d$controls$right_controls_$_iter__36687.call(null,cljs.core.chunk_rest.call(null,s__36688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36690),null);
}
} else {
var n = cljs.core.first.call(null,s__36688__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__36687.call(null,cljs.core.rest.call(null,s__36688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9705__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"altitude-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9705__auto__ = (function view3d$controls$right_controls_$_iter__36691(s__36692){
return (new cljs.core.LazySeq(null,(function (){
var s__36692__$1 = s__36692;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36692__$1);
if(temp__4657__auto__){
var s__36692__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36692__$2)){
var c__9703__auto__ = cljs.core.chunk_first.call(null,s__36692__$2);
var size__9704__auto__ = cljs.core.count.call(null,c__9703__auto__);
var b__36694 = cljs.core.chunk_buffer.call(null,size__9704__auto__);
if((function (){var i__36693 = (0);
while(true){
if((i__36693 < size__9704__auto__)){
var n = cljs.core._nth.call(null,c__9703__auto__,i__36693);
cljs.core.chunk_append.call(null,b__36694,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__36696 = (i__36693 + (1));
i__36693 = G__36696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36694),view3d$controls$right_controls_$_iter__36691.call(null,cljs.core.chunk_rest.call(null,s__36692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36694),null);
}
} else {
var n = cljs.core.first.call(null,s__36692__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__36691.call(null,cljs.core.rest.call(null,s__36692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9705__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:84px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

return view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:84px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");
});
view3d.controls.show_controls = (function view3d$controls$show_controls(){
view3d.controls.left_controls.call(null);

return view3d.controls.right_controls.call(null);
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(car){
var map__36699 = car;
var map__36699__$1 = ((((!((map__36699 == null)))?((((map__36699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36699):map__36699);
var coord = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var spd = (speed | (0));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Course: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Speed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spd)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Altitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((altitude | (0)))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Latitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Longitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='select'>select</option>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__9705__auto__ = (function view3d$controls$callsigns_$_iter__36705(s__36706){
return (new cljs.core.LazySeq(null,(function (){
var s__36706__$1 = s__36706;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36706__$1);
if(temp__4657__auto__){
var s__36706__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36706__$2)){
var c__9703__auto__ = cljs.core.chunk_first.call(null,s__36706__$2);
var size__9704__auto__ = cljs.core.count.call(null,c__9703__auto__);
var b__36708 = cljs.core.chunk_buffer.call(null,size__9704__auto__);
if((function (){var i__36707 = (0);
while(true){
if((i__36707 < size__9704__auto__)){
var e = cljs.core._nth.call(null,c__9703__auto__,i__36707);
cljs.core.chunk_append.call(null,b__36708,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__36709 = (i__36707 + (1));
i__36707 = G__36709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36708),view3d$controls$callsigns_$_iter__36705.call(null,cljs.core.chunk_rest.call(null,s__36706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36708),null);
}
} else {
var e = cljs.core.first.call(null,s__36706__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$callsigns_$_iter__36705.call(null,cljs.core.rest.call(null,s__36706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9705__auto__.call(null,list);
})()))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map