// Compiled by ClojureScript 1.9.521 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20063,handler){
var map__20064 = p__20063;
var map__20064__$1 = ((((!((map__20064 == null)))?((((map__20064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20064):map__20064);
var uri = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20064,map__20064__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20062_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20062_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20064,map__20064__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___20076 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___20076)){
var response_type_20077 = temp__4657__auto___20076;
this$__$1.responseType = cljs.core.name.call(null,response_type_20077);
} else {
}

var seq__20066_20078 = cljs.core.seq.call(null,headers);
var chunk__20067_20079 = null;
var count__20068_20080 = (0);
var i__20069_20081 = (0);
while(true){
if((i__20069_20081 < count__20068_20080)){
var vec__20070_20082 = cljs.core._nth.call(null,chunk__20067_20079,i__20069_20081);
var k_20083 = cljs.core.nth.call(null,vec__20070_20082,(0),null);
var v_20084 = cljs.core.nth.call(null,vec__20070_20082,(1),null);
this$__$1.setRequestHeader(k_20083,v_20084);

var G__20085 = seq__20066_20078;
var G__20086 = chunk__20067_20079;
var G__20087 = count__20068_20080;
var G__20088 = (i__20069_20081 + (1));
seq__20066_20078 = G__20085;
chunk__20067_20079 = G__20086;
count__20068_20080 = G__20087;
i__20069_20081 = G__20088;
continue;
} else {
var temp__4657__auto___20089 = cljs.core.seq.call(null,seq__20066_20078);
if(temp__4657__auto___20089){
var seq__20066_20090__$1 = temp__4657__auto___20089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20066_20090__$1)){
var c__9736__auto___20091 = cljs.core.chunk_first.call(null,seq__20066_20090__$1);
var G__20092 = cljs.core.chunk_rest.call(null,seq__20066_20090__$1);
var G__20093 = c__9736__auto___20091;
var G__20094 = cljs.core.count.call(null,c__9736__auto___20091);
var G__20095 = (0);
seq__20066_20078 = G__20092;
chunk__20067_20079 = G__20093;
count__20068_20080 = G__20094;
i__20069_20081 = G__20095;
continue;
} else {
var vec__20073_20096 = cljs.core.first.call(null,seq__20066_20090__$1);
var k_20097 = cljs.core.nth.call(null,vec__20073_20096,(0),null);
var v_20098 = cljs.core.nth.call(null,vec__20073_20096,(1),null);
this$__$1.setRequestHeader(k_20097,v_20098);

var G__20099 = cljs.core.next.call(null,seq__20066_20090__$1);
var G__20100 = null;
var G__20101 = (0);
var G__20102 = (0);
seq__20066_20078 = G__20099;
chunk__20067_20079 = G__20100;
count__20068_20080 = G__20101;
i__20069_20081 = G__20102;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8917__auto__ = body;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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