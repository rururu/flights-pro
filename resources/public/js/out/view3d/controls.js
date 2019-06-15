// Compiled by ClojureScript 1.9.521 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__11112__auto__ = [];
var len__11105__auto___16550 = arguments.length;
var i__11106__auto___16551 = (0);
while(true){
if((i__11106__auto___16551 < len__11105__auto___16550)){
args__11112__auto__.push((arguments[i__11106__auto___16551]));

var G__16552 = (i__11106__auto___16551 + (1));
i__11106__auto___16551 = G__16552;
continue;
} else {
}
break;
}

var argseq__11113__auto__ = ((((1) < args__11112__auto__.length))?(new cljs.core.IndexedSeq(args__11112__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11113__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

view3d.controls.format.cljs$lang$applyTo = (function (seq16548){
var G__16549 = cljs.core.first.call(null,seq16548);
var seq16548__$1 = cljs.core.next.call(null,seq16548);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__16549,seq16548__$1);
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

view3d.controls.set_html_BANG_.call(null,"view-fld",(0));

view3d.controls.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.view(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.controls.set_html_BANG_.call(null,"pitch-fld",(0));

view3d.controls.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

view3d.controls.set_html_BANG_.call(null,"roll-fld",(0));

return view3d.controls.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.roll(this.value)'>");
});
view3d.controls.right_controls = (function view3d$controls$right_controls(){
view3d.controls.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

view3d.controls.set_html_BANG_.call(null,"accel","accel");

view3d.controls.set_html_BANG_.call(null,"course","Course: 000");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='180' style='width:38px' id='input-crs'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed","Speed: 000");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='210' style='width:38px' id='input-spd'\n               onchange='javascript:view3d.client.speed(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__10780__auto__ = (function view3d$controls$right_controls_$_iter__16561(s__16562){
return (new cljs.core.LazySeq(null,(function (){
var s__16562__$1 = s__16562;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16562__$1);
if(temp__4657__auto__){
var s__16562__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16562__$2)){
var c__10778__auto__ = cljs.core.chunk_first.call(null,s__16562__$2);
var size__10779__auto__ = cljs.core.count.call(null,c__10778__auto__);
var b__16564 = cljs.core.chunk_buffer.call(null,size__10779__auto__);
if((function (){var i__16563 = (0);
while(true){
if((i__16563 < size__10779__auto__)){
var n = cljs.core._nth.call(null,c__10778__auto__,i__16563);
cljs.core.chunk_append.call(null,b__16564,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__16569 = (i__16563 + (1));
i__16563 = G__16569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16564),view3d$controls$right_controls_$_iter__16561.call(null,cljs.core.chunk_rest.call(null,s__16562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16564),null);
}
} else {
var n = cljs.core.first.call(null,s__16562__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__16561.call(null,cljs.core.rest.call(null,s__16562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10780__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"altitude-acl",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__10780__auto__ = (function view3d$controls$right_controls_$_iter__16565(s__16566){
return (new cljs.core.LazySeq(null,(function (){
var s__16566__$1 = s__16566;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16566__$1);
if(temp__4657__auto__){
var s__16566__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16566__$2)){
var c__10778__auto__ = cljs.core.chunk_first.call(null,s__16566__$2);
var size__10779__auto__ = cljs.core.count.call(null,c__10778__auto__);
var b__16568 = cljs.core.chunk_buffer.call(null,size__10779__auto__);
if((function (){var i__16567 = (0);
while(true){
if((i__16567 < size__10779__auto__)){
var n = cljs.core._nth.call(null,c__10778__auto__,i__16567);
cljs.core.chunk_append.call(null,b__16568,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__16570 = (i__16567 + (1));
i__16567 = G__16570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16568),view3d$controls$right_controls_$_iter__16565.call(null,cljs.core.chunk_rest.call(null,s__16566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16568),null);
}
} else {
var n = cljs.core.first.call(null,s__16566__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$right_controls_$_iter__16565.call(null,cljs.core.rest.call(null,s__16566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10780__auto__.call(null,cljs.core.range.call(null,(1),(11)));
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
var map__16573 = car;
var map__16573__$1 = ((((!((map__16573 == null)))?((((map__16573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16573):map__16573);
var coord = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var spd = (speed | (0));
view3d.controls.set_html_BANG_.call(null,"course",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Course: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Speed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spd)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Altitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((altitude | (0)))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Latitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Longitude: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,list))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='select'>select</option>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__10780__auto__ = (function view3d$controls$callsigns_$_iter__16579(s__16580){
return (new cljs.core.LazySeq(null,(function (){
var s__16580__$1 = s__16580;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16580__$1);
if(temp__4657__auto__){
var s__16580__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16580__$2)){
var c__10778__auto__ = cljs.core.chunk_first.call(null,s__16580__$2);
var size__10779__auto__ = cljs.core.count.call(null,c__10778__auto__);
var b__16582 = cljs.core.chunk_buffer.call(null,size__10779__auto__);
if((function (){var i__16581 = (0);
while(true){
if((i__16581 < size__10779__auto__)){
var e = cljs.core._nth.call(null,c__10778__auto__,i__16581);
cljs.core.chunk_append.call(null,b__16582,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__16583 = (i__16581 + (1));
i__16581 = G__16583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16582),view3d$controls$callsigns_$_iter__16579.call(null,cljs.core.chunk_rest.call(null,s__16580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16582),null);
}
} else {
var e = cljs.core.first.call(null,s__16580__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),view3d$controls$callsigns_$_iter__16579.call(null,cljs.core.rest.call(null,s__16580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10780__auto__.call(null,list);
})()))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</select>")].join(''));
});

//# sourceMappingURL=controls.js.map