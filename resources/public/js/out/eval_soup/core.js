// Compiled by ClojureScript 1.9.293 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var args18089 = [];
var len__9613__auto___18093 = arguments.length;
var i__9614__auto___18094 = (0);
while(true){
if((i__9614__auto___18094 < len__9613__auto___18093)){
args18089.push((arguments[i__9614__auto___18094]));

var G__18095 = (i__9614__auto___18094 + (1));
i__9614__auto___18094 = G__18095;
continue;
} else {
}
break;
}

var G__18091 = args18089.length;
switch (G__18091) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18089.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__4655__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__4655__auto__)){
var extension = temp__4655__auto__;
try{return goog.net.XhrIo.send([cljs.core.str(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(extension)].join(''),((function (extension,temp__4655__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__4655__auto__))
);
}catch (e18092){if((e18092 instanceof Error)){
var _ = e18092;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e18092;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,state,current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var forms__$1 = cljs.core.atom.call(null,forms);
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__,opts,channel,forms__$1,results){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__,opts,channel,forms__$1,results){
return (function (state_18250){
var state_val_18251 = (state_18250[(1)]);
if((state_val_18251 === (7))){
var inst_18234 = (state_18250[(2)]);
var inst_18235 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_18250__$1 = (function (){var statearr_18252 = state_18250;
(statearr_18252[(7)] = inst_18234);

(statearr_18252[(8)] = inst_18235);

return statearr_18252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18250__$1,(19),channel);
} else {
if((state_val_18251 === (1))){
var state_18250__$1 = state_18250;
var statearr_18253_18285 = state_18250__$1;
(statearr_18253_18285[(2)] = null);

(statearr_18253_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (4))){
var state_18250__$1 = state_18250;
var statearr_18254_18286 = state_18250__$1;
(statearr_18254_18286[(2)] = null);

(statearr_18254_18286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (15))){
var inst_18218 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18255_18287 = state_18250__$1;
(statearr_18255_18287[(2)] = inst_18218);

(statearr_18255_18287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (13))){
var inst_18205 = (state_18250[(9)]);
var inst_18214 = cljs.core.second.call(null,inst_18205);
var inst_18215 = cljs.core.reset_BANG_.call(null,current_ns,inst_18214);
var state_18250__$1 = state_18250;
var statearr_18256_18288 = state_18250__$1;
(statearr_18256_18288[(2)] = inst_18215);

(statearr_18256_18288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (6))){
var inst_18242 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18257_18289 = state_18250__$1;
(statearr_18257_18289[(2)] = inst_18242);

(statearr_18257_18289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (17))){
var inst_18207 = (state_18250[(10)]);
var inst_18205 = (state_18250[(9)]);
var inst_18229 = (function (){var form = inst_18205;
var opts__$1 = inst_18207;
return ((function (form,opts__$1,inst_18207,inst_18205,state_val_18251,c__15259__auto__,opts,channel,forms__$1,results){
return (function (p1__18097_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__18097_SHARP_);
});
;})(form,opts__$1,inst_18207,inst_18205,state_val_18251,c__15259__auto__,opts,channel,forms__$1,results))
})();
var inst_18230 = cljs.js.eval.call(null,state,inst_18205,inst_18207,inst_18229);
var state_18250__$1 = state_18250;
var statearr_18258_18290 = state_18250__$1;
(statearr_18258_18290[(2)] = inst_18230);

(statearr_18258_18290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (3))){
var inst_18244 = (state_18250[(2)]);
var inst_18245 = (function (){return ((function (inst_18244,state_val_18251,c__15259__auto__,opts,channel,forms__$1,results){
return (function (p1__18098_SHARP_){
var or__8505__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18098_SHARP_);
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18098_SHARP_);
}
});
;})(inst_18244,state_val_18251,c__15259__auto__,opts,channel,forms__$1,results))
})();
var inst_18246 = cljs.core.deref.call(null,results);
var inst_18247 = cljs.core.mapv.call(null,inst_18245,inst_18246);
var inst_18248 = cb.call(null,inst_18247);
var state_18250__$1 = (function (){var statearr_18259 = state_18250;
(statearr_18259[(11)] = inst_18244);

return statearr_18259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18250__$1,inst_18248);
} else {
if((state_val_18251 === (12))){
var inst_18205 = (state_18250[(9)]);
var inst_18221 = (state_18250[(2)]);
var inst_18222 = (inst_18205 instanceof Error);
var state_18250__$1 = (function (){var statearr_18260 = state_18250;
(statearr_18260[(12)] = inst_18221);

return statearr_18260;
})();
if(cljs.core.truth_(inst_18222)){
var statearr_18261_18291 = state_18250__$1;
(statearr_18261_18291[(1)] = (16));

} else {
var statearr_18262_18292 = state_18250__$1;
(statearr_18262_18292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (2))){
var inst_18193 = cljs.core.deref.call(null,forms__$1);
var inst_18194 = cljs.core.seq.call(null,inst_18193);
var state_18250__$1 = state_18250;
if(inst_18194){
var statearr_18263_18293 = state_18250__$1;
(statearr_18263_18293[(1)] = (4));

} else {
var statearr_18264_18294 = state_18250__$1;
(statearr_18264_18294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (19))){
var inst_18237 = (state_18250[(2)]);
var inst_18238 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_18237);
var state_18250__$1 = (function (){var statearr_18265 = state_18250;
(statearr_18265[(13)] = inst_18238);

return statearr_18265;
})();
var statearr_18266_18295 = state_18250__$1;
(statearr_18266_18295[(2)] = null);

(statearr_18266_18295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (11))){
var state_18250__$1 = state_18250;
var statearr_18267_18296 = state_18250__$1;
(statearr_18267_18296[(2)] = null);

(statearr_18267_18296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (9))){
var inst_18205 = (state_18250[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18250,(8),Error,null,(7));
var inst_18204 = cljs.core.deref.call(null,forms__$1);
var inst_18205__$1 = cljs.core.first.call(null,inst_18204);
var inst_18206 = cljs.core.deref.call(null,current_ns);
var inst_18207 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_18206);
var inst_18208 = cljs.core.list_QMARK_.call(null,inst_18205__$1);
var state_18250__$1 = (function (){var statearr_18268 = state_18250;
(statearr_18268[(10)] = inst_18207);

(statearr_18268[(9)] = inst_18205__$1);

return statearr_18268;
})();
if(inst_18208){
var statearr_18269_18297 = state_18250__$1;
(statearr_18269_18297[(1)] = (10));

} else {
var statearr_18270_18298 = state_18250__$1;
(statearr_18270_18298[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (5))){
var state_18250__$1 = state_18250;
var statearr_18271_18299 = state_18250__$1;
(statearr_18271_18299[(2)] = null);

(statearr_18271_18299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (14))){
var state_18250__$1 = state_18250;
var statearr_18272_18300 = state_18250__$1;
(statearr_18272_18300[(2)] = null);

(statearr_18272_18300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (16))){
var inst_18205 = (state_18250[(9)]);
var inst_18224 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18225 = [inst_18205];
var inst_18226 = cljs.core.PersistentHashMap.fromArrays(inst_18224,inst_18225);
var inst_18227 = cljs.core.async.put_BANG_.call(null,channel,inst_18226);
var state_18250__$1 = state_18250;
var statearr_18273_18301 = state_18250__$1;
(statearr_18273_18301[(2)] = inst_18227);

(statearr_18273_18301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (10))){
var inst_18205 = (state_18250[(9)]);
var inst_18210 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_18211 = cljs.core.first.call(null,inst_18205);
var inst_18212 = cljs.core._EQ_.call(null,inst_18210,inst_18211);
var state_18250__$1 = state_18250;
if(inst_18212){
var statearr_18274_18302 = state_18250__$1;
(statearr_18274_18302[(1)] = (13));

} else {
var statearr_18275_18303 = state_18250__$1;
(statearr_18275_18303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (18))){
var inst_18232 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18276_18304 = state_18250__$1;
(statearr_18276_18304[(2)] = inst_18232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (8))){
var inst_18196 = (state_18250[(2)]);
var inst_18197 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18198 = [inst_18196];
var inst_18199 = cljs.core.PersistentHashMap.fromArrays(inst_18197,inst_18198);
var inst_18200 = cljs.core.async.put_BANG_.call(null,channel,inst_18199);
var state_18250__$1 = state_18250;
var statearr_18277_18305 = state_18250__$1;
(statearr_18277_18305[(2)] = inst_18200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15259__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__15147__auto__,c__15259__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__15148__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__15148__auto____0 = (function (){
var statearr_18281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18281[(0)] = eval_soup$core$eval_forms_$_state_machine__15148__auto__);

(statearr_18281[(1)] = (1));

return statearr_18281;
});
var eval_soup$core$eval_forms_$_state_machine__15148__auto____1 = (function (state_18250){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_18250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e18282){if((e18282 instanceof Object)){
var ex__15151__auto__ = e18282;
var statearr_18283_18306 = state_18250;
(statearr_18283_18306[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18307 = state_18250;
state_18250 = G__18307;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__15148__auto__ = function(state_18250){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__15148__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__15148__auto____1.call(this,state_18250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__15148__auto____0;
eval_soup$core$eval_forms_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__15148__auto____1;
return eval_soup$core$eval_forms_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__,opts,channel,forms__$1,results))
})();
var state__15261__auto__ = (function (){var statearr_18284 = f__15260__auto__.call(null);
(statearr_18284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_18284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__,opts,channel,forms__$1,results))
);

return c__15259__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e18309){if((e18309 instanceof Error)){
var _ = e18309;
return null;
} else {
throw e18309;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core._conj.call(null,(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__9288__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__18314(s__18315){
return (new cljs.core.LazySeq(null,(function (){
var s__18315__$1 = s__18315;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__18315__$1);
if(temp__4657__auto__){
var s__18315__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18315__$2)){
var c__9286__auto__ = cljs.core.chunk_first.call(null,s__18315__$2);
var size__9287__auto__ = cljs.core.count.call(null,c__9286__auto__);
var b__18317 = cljs.core.chunk_buffer.call(null,size__9287__auto__);
if((function (){var i__18316 = (0);
while(true){
if((i__18316 < size__9287__auto__)){
var i = cljs.core._nth.call(null,c__9286__auto__,i__18316);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__18317,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__18318 = (i__18316 + (1));
i__18316 = G__18318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18317),eval_soup$core$add_timeouts_if_necessary_$_iter__18314.call(null,cljs.core.chunk_rest.call(null,s__18315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18317),null);
}
} else {
var i = cljs.core.first.call(null,s__18315__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__18314.call(null,cljs.core.rest.call(null,s__18315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9288__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args18319 = [];
var len__9613__auto___18325 = arguments.length;
var i__9614__auto___18326 = (0);
while(true){
if((i__9614__auto___18326 < len__9613__auto___18325)){
args18319.push((arguments[i__9614__auto___18326]));

var G__18327 = (i__9614__auto___18326 + (1));
i__9614__auto___18326 = G__18327;
continue;
} else {
}
break;
}

var G__18321 = args18319.length;
switch (G__18321) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18319.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__18322){
var map__18323 = p__18322;
var map__18323__$1 = ((((!((map__18323 == null)))?((((map__18323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18323):map__18323);
var custom_load = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__18323__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__18323,map__18323__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__18323,map__18323__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__18323,map__18323__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__18323,map__18323__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__18323,map__18323__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__18323,map__18323__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map