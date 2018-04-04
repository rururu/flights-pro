// Compiled by ClojureScript 1.9.521 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__23051__auto__ = [];
var len__23044__auto___26125 = arguments.length;
var i__23045__auto___26126 = (0);
while(true){
if((i__23045__auto___26126 < len__23044__auto___26125)){
args__23051__auto__.push((arguments[i__23045__auto___26126]));

var G__26127 = (i__23045__auto___26126 + (1));
i__23045__auto___26126 = G__26127;
continue;
} else {
}
break;
}

var argseq__23052__auto__ = ((((1) < args__23051__auto__.length))?(new cljs.core.IndexedSeq(args__23051__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23052__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq26123){
var G__26124 = cljs.core.first.call(null,seq26123);
var seq26123__$1 = cljs.core.next.call(null,seq26123);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__26124,seq26123__$1);
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

view3d.controls.set_html_BANG_.call(null,"pitch-fld","<input value='-10' style='width:90px' id='pitch-val'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

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

view3d.controls.set_html_BANG_.call(null,"speed-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__22719__auto__ = (function view3d$controls$right_controls_$_iter__26136(s__26137){
return (new cljs.core.LazySeq(null,(function (){
var s__26137__$1 = s__26137;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26137__$1);
if(temp__4657__auto__){
var s__26137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26137__$2)){
var c__22717__auto__ = cljs.core.chunk_first.call(null,s__26137__$2);
var size__22718__auto__ = cljs.core.count.call(null,c__22717__auto__);
var b__26139 = cljs.core.chunk_buffer.call(null,size__22718__auto__);
if((function (){var i__26138 = (0);
while(true){
if((i__26138 < size__22718__auto__)){
var n = cljs.core._nth.call(null,c__22717__auto__,i__26138);
cljs.core.chunk_append.call(null,b__26139,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__26144 = (i__26138 + (1));
i__26138 = G__26144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26139),view3d$controls$right_controls_$_iter__26136.call(null,cljs.core.chunk_rest.call(null,s__26137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26139),null);
}
} else {
var n = cljs.core.first.call(null,s__26137__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__26136.call(null,cljs.core.rest.call(null,s__26137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22719__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"altitude-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__22719__auto__ = (function view3d$controls$right_controls_$_iter__26140(s__26141){
return (new cljs.core.LazySeq(null,(function (){
var s__26141__$1 = s__26141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26141__$1);
if(temp__4657__auto__){
var s__26141__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26141__$2)){
var c__22717__auto__ = cljs.core.chunk_first.call(null,s__26141__$2);
var size__22718__auto__ = cljs.core.count.call(null,c__22717__auto__);
var b__26143 = cljs.core.chunk_buffer.call(null,size__22718__auto__);
if((function (){var i__26142 = (0);
while(true){
if((i__26142 < size__22718__auto__)){
var n = cljs.core._nth.call(null,c__22717__auto__,i__26142);
cljs.core.chunk_append.call(null,b__26143,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__26145 = (i__26142 + (1));
i__26142 = G__26145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26143),view3d$controls$right_controls_$_iter__26140.call(null,cljs.core.chunk_rest.call(null,s__26141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26143),null);
}
} else {
var n = cljs.core.first.call(null,s__26141__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__26140.call(null,cljs.core.rest.call(null,s__26141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22719__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:56px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"instant","ins");

view3d.controls.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:56px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"instant-rdo","<input type='checkbox' id='input-instant'>");
});
view3d.controls.show_controls = (function view3d$controls$show_controls(){
view3d.controls.left_controls.call(null);

return view3d.controls.right_controls.call(null);
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(car){
var map__26148 = car;
var map__26148__$1 = ((((!((map__26148 == null)))?((((map__26148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26148):map__26148);
var coord = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var spd = (speed | (0));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Course: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Speed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spd)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Altitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((altitude | (0)))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Latitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Longitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='select'>select</option>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__22719__auto__ = (function view3d$controls$callsigns_$_iter__26154(s__26155){
return (new cljs.core.LazySeq(null,(function (){
var s__26155__$1 = s__26155;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26155__$1);
if(temp__4657__auto__){
var s__26155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26155__$2)){
var c__22717__auto__ = cljs.core.chunk_first.call(null,s__26155__$2);
var size__22718__auto__ = cljs.core.count.call(null,c__22717__auto__);
var b__26157 = cljs.core.chunk_buffer.call(null,size__22718__auto__);
if((function (){var i__26156 = (0);
while(true){
if((i__26156 < size__22718__auto__)){
var e = cljs.core._nth.call(null,c__22717__auto__,i__26156);
cljs.core.chunk_append.call(null,b__26157,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__26158 = (i__26156 + (1));
i__26156 = G__26158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26157),view3d$controls$callsigns_$_iter__26154.call(null,cljs.core.chunk_rest.call(null,s__26155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26157),null);
}
} else {
var e = cljs.core.first.call(null,s__26155__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$callsigns_$_iter__26154.call(null,cljs.core.rest.call(null,s__26155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22719__auto__.call(null,list);
})()))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map