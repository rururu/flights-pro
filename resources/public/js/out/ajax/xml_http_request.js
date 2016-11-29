// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29122,handler){
var map__29123 = p__29122;
var map__29123__$1 = ((((!((map__29123 == null)))?((((map__29123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29123):map__29123);
var uri = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29123,map__29123__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29121_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__29121_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__29123,map__29123__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___29135 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___29135)){
var response_type_29136 = temp__4657__auto___29135;
this$__$1.responseType = cljs.core.name.call(null,response_type_29136);
} else {
}

var seq__29125_29137 = cljs.core.seq.call(null,headers);
var chunk__29126_29138 = null;
var count__29127_29139 = (0);
var i__29128_29140 = (0);
while(true){
if((i__29128_29140 < count__29127_29139)){
var vec__29129_29141 = cljs.core._nth.call(null,chunk__29126_29138,i__29128_29140);
var k_29142 = cljs.core.nth.call(null,vec__29129_29141,(0),null);
var v_29143 = cljs.core.nth.call(null,vec__29129_29141,(1),null);
this$__$1.setRequestHeader(k_29142,v_29143);

var G__29144 = seq__29125_29137;
var G__29145 = chunk__29126_29138;
var G__29146 = count__29127_29139;
var G__29147 = (i__29128_29140 + (1));
seq__29125_29137 = G__29144;
chunk__29126_29138 = G__29145;
count__29127_29139 = G__29146;
i__29128_29140 = G__29147;
continue;
} else {
var temp__4657__auto___29148 = cljs.core.seq.call(null,seq__29125_29137);
if(temp__4657__auto___29148){
var seq__29125_29149__$1 = temp__4657__auto___29148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29125_29149__$1)){
var c__20438__auto___29150 = cljs.core.chunk_first.call(null,seq__29125_29149__$1);
var G__29151 = cljs.core.chunk_rest.call(null,seq__29125_29149__$1);
var G__29152 = c__20438__auto___29150;
var G__29153 = cljs.core.count.call(null,c__20438__auto___29150);
var G__29154 = (0);
seq__29125_29137 = G__29151;
chunk__29126_29138 = G__29152;
count__29127_29139 = G__29153;
i__29128_29140 = G__29154;
continue;
} else {
var vec__29132_29155 = cljs.core.first.call(null,seq__29125_29149__$1);
var k_29156 = cljs.core.nth.call(null,vec__29132_29155,(0),null);
var v_29157 = cljs.core.nth.call(null,vec__29132_29155,(1),null);
this$__$1.setRequestHeader(k_29156,v_29157);

var G__29158 = cljs.core.next.call(null,seq__29125_29149__$1);
var G__29159 = null;
var G__29160 = (0);
var G__29161 = (0);
seq__29125_29137 = G__29158;
chunk__29126_29138 = G__29159;
count__29127_29139 = G__29160;
i__29128_29140 = G__29161;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19624__auto__ = body;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
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