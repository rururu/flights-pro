// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19106,handler){
var map__19107 = p__19106;
var map__19107__$1 = ((((!((map__19107 == null)))?((((map__19107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19107):map__19107);
var uri = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19107,map__19107__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19105_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19105_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19107,map__19107__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___19119 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___19119)){
var response_type_19120 = temp__4657__auto___19119;
this$__$1.responseType = cljs.core.name.call(null,response_type_19120);
} else {
}

var seq__19109_19121 = cljs.core.seq.call(null,headers);
var chunk__19110_19122 = null;
var count__19111_19123 = (0);
var i__19112_19124 = (0);
while(true){
if((i__19112_19124 < count__19111_19123)){
var vec__19113_19125 = cljs.core._nth.call(null,chunk__19110_19122,i__19112_19124);
var k_19126 = cljs.core.nth.call(null,vec__19113_19125,(0),null);
var v_19127 = cljs.core.nth.call(null,vec__19113_19125,(1),null);
this$__$1.setRequestHeader(k_19126,v_19127);

var G__19128 = seq__19109_19121;
var G__19129 = chunk__19110_19122;
var G__19130 = count__19111_19123;
var G__19131 = (i__19112_19124 + (1));
seq__19109_19121 = G__19128;
chunk__19110_19122 = G__19129;
count__19111_19123 = G__19130;
i__19112_19124 = G__19131;
continue;
} else {
var temp__4657__auto___19132 = cljs.core.seq.call(null,seq__19109_19121);
if(temp__4657__auto___19132){
var seq__19109_19133__$1 = temp__4657__auto___19132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19109_19133__$1)){
var c__10059__auto___19134 = cljs.core.chunk_first.call(null,seq__19109_19133__$1);
var G__19135 = cljs.core.chunk_rest.call(null,seq__19109_19133__$1);
var G__19136 = c__10059__auto___19134;
var G__19137 = cljs.core.count.call(null,c__10059__auto___19134);
var G__19138 = (0);
seq__19109_19121 = G__19135;
chunk__19110_19122 = G__19136;
count__19111_19123 = G__19137;
i__19112_19124 = G__19138;
continue;
} else {
var vec__19116_19139 = cljs.core.first.call(null,seq__19109_19133__$1);
var k_19140 = cljs.core.nth.call(null,vec__19116_19139,(0),null);
var v_19141 = cljs.core.nth.call(null,vec__19116_19139,(1),null);
this$__$1.setRequestHeader(k_19140,v_19141);

var G__19142 = cljs.core.next.call(null,seq__19109_19133__$1);
var G__19143 = null;
var G__19144 = (0);
var G__19145 = (0);
seq__19109_19121 = G__19142;
chunk__19110_19122 = G__19143;
count__19111_19123 = G__19144;
i__19112_19124 = G__19145;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__9245__auto__ = body;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map