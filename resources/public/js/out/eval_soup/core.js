// Compiled by ClojureScript 1.9.521 {}
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
var args21229 = [];
var len__11449__auto___21233 = arguments.length;
var i__11450__auto___21234 = (0);
while(true){
if((i__11450__auto___21234 < len__11449__auto___21233)){
args21229.push((arguments[i__11450__auto___21234]));

var G__21235 = (i__11450__auto___21234 + (1));
i__11450__auto___21234 = G__21235;
continue;
} else {
}
break;
}

var G__21231 = args21229.length;
switch (G__21231) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21229.length)].join('')));

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
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__4655__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__4655__auto__))
);
}catch (e21232){if((e21232 instanceof Error)){
var _ = e21232;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e21232;

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
var c__14031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14031__auto__,opts,channel,forms__$1,results){
return (function (){
var f__14032__auto__ = (function (){var switch__13919__auto__ = ((function (c__14031__auto__,opts,channel,forms__$1,results){
return (function (state_21390){
var state_val_21391 = (state_21390[(1)]);
if((state_val_21391 === (7))){
var inst_21374 = (state_21390[(2)]);
var inst_21375 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_21390__$1 = (function (){var statearr_21392 = state_21390;
(statearr_21392[(7)] = inst_21375);

(statearr_21392[(8)] = inst_21374);

return statearr_21392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21390__$1,(19),channel);
} else {
if((state_val_21391 === (1))){
var state_21390__$1 = state_21390;
var statearr_21393_21425 = state_21390__$1;
(statearr_21393_21425[(2)] = null);

(statearr_21393_21425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (4))){
var state_21390__$1 = state_21390;
var statearr_21394_21426 = state_21390__$1;
(statearr_21394_21426[(2)] = null);

(statearr_21394_21426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (15))){
var inst_21358 = (state_21390[(2)]);
var state_21390__$1 = state_21390;
var statearr_21395_21427 = state_21390__$1;
(statearr_21395_21427[(2)] = inst_21358);

(statearr_21395_21427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (13))){
var inst_21345 = (state_21390[(9)]);
var inst_21354 = cljs.core.second.call(null,inst_21345);
var inst_21355 = cljs.core.reset_BANG_.call(null,current_ns,inst_21354);
var state_21390__$1 = state_21390;
var statearr_21396_21428 = state_21390__$1;
(statearr_21396_21428[(2)] = inst_21355);

(statearr_21396_21428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (6))){
var inst_21382 = (state_21390[(2)]);
var state_21390__$1 = state_21390;
var statearr_21397_21429 = state_21390__$1;
(statearr_21397_21429[(2)] = inst_21382);

(statearr_21397_21429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (17))){
var inst_21345 = (state_21390[(9)]);
var inst_21347 = (state_21390[(10)]);
var inst_21369 = (function (){var form = inst_21345;
var opts__$1 = inst_21347;
return ((function (form,opts__$1,inst_21345,inst_21347,state_val_21391,c__14031__auto__,opts,channel,forms__$1,results){
return (function (p1__21237_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__21237_SHARP_);
});
;})(form,opts__$1,inst_21345,inst_21347,state_val_21391,c__14031__auto__,opts,channel,forms__$1,results))
})();
var inst_21370 = cljs.js.eval.call(null,state,inst_21345,inst_21347,inst_21369);
var state_21390__$1 = state_21390;
var statearr_21398_21430 = state_21390__$1;
(statearr_21398_21430[(2)] = inst_21370);

(statearr_21398_21430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (3))){
var inst_21384 = (state_21390[(2)]);
var inst_21385 = (function (){return ((function (inst_21384,state_val_21391,c__14031__auto__,opts,channel,forms__$1,results){
return (function (p1__21238_SHARP_){
var or__10336__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__21238_SHARP_);
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__21238_SHARP_);
}
});
;})(inst_21384,state_val_21391,c__14031__auto__,opts,channel,forms__$1,results))
})();
var inst_21386 = cljs.core.deref.call(null,results);
var inst_21387 = cljs.core.mapv.call(null,inst_21385,inst_21386);
var inst_21388 = cb.call(null,inst_21387);
var state_21390__$1 = (function (){var statearr_21399 = state_21390;
(statearr_21399[(11)] = inst_21384);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21390__$1,inst_21388);
} else {
if((state_val_21391 === (12))){
var inst_21345 = (state_21390[(9)]);
var inst_21361 = (state_21390[(2)]);
var inst_21362 = (inst_21345 instanceof Error);
var state_21390__$1 = (function (){var statearr_21400 = state_21390;
(statearr_21400[(12)] = inst_21361);

return statearr_21400;
})();
if(cljs.core.truth_(inst_21362)){
var statearr_21401_21431 = state_21390__$1;
(statearr_21401_21431[(1)] = (16));

} else {
var statearr_21402_21432 = state_21390__$1;
(statearr_21402_21432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (2))){
var inst_21333 = cljs.core.deref.call(null,forms__$1);
var inst_21334 = cljs.core.seq.call(null,inst_21333);
var state_21390__$1 = state_21390;
if(inst_21334){
var statearr_21403_21433 = state_21390__$1;
(statearr_21403_21433[(1)] = (4));

} else {
var statearr_21404_21434 = state_21390__$1;
(statearr_21404_21434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (19))){
var inst_21377 = (state_21390[(2)]);
var inst_21378 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_21377);
var state_21390__$1 = (function (){var statearr_21405 = state_21390;
(statearr_21405[(13)] = inst_21378);

return statearr_21405;
})();
var statearr_21406_21435 = state_21390__$1;
(statearr_21406_21435[(2)] = null);

(statearr_21406_21435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (11))){
var state_21390__$1 = state_21390;
var statearr_21407_21436 = state_21390__$1;
(statearr_21407_21436[(2)] = null);

(statearr_21407_21436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (9))){
var inst_21345 = (state_21390[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21390,(8),Error,null,(7));
var inst_21344 = cljs.core.deref.call(null,forms__$1);
var inst_21345__$1 = cljs.core.first.call(null,inst_21344);
var inst_21346 = cljs.core.deref.call(null,current_ns);
var inst_21347 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_21346);
var inst_21348 = cljs.core.list_QMARK_.call(null,inst_21345__$1);
var state_21390__$1 = (function (){var statearr_21408 = state_21390;
(statearr_21408[(9)] = inst_21345__$1);

(statearr_21408[(10)] = inst_21347);

return statearr_21408;
})();
if(inst_21348){
var statearr_21409_21437 = state_21390__$1;
(statearr_21409_21437[(1)] = (10));

} else {
var statearr_21410_21438 = state_21390__$1;
(statearr_21410_21438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (5))){
var state_21390__$1 = state_21390;
var statearr_21411_21439 = state_21390__$1;
(statearr_21411_21439[(2)] = null);

(statearr_21411_21439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (14))){
var state_21390__$1 = state_21390;
var statearr_21412_21440 = state_21390__$1;
(statearr_21412_21440[(2)] = null);

(statearr_21412_21440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (16))){
var inst_21345 = (state_21390[(9)]);
var inst_21364 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_21365 = [inst_21345];
var inst_21366 = cljs.core.PersistentHashMap.fromArrays(inst_21364,inst_21365);
var inst_21367 = cljs.core.async.put_BANG_.call(null,channel,inst_21366);
var state_21390__$1 = state_21390;
var statearr_21413_21441 = state_21390__$1;
(statearr_21413_21441[(2)] = inst_21367);

(statearr_21413_21441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (10))){
var inst_21345 = (state_21390[(9)]);
var inst_21350 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_21351 = cljs.core.first.call(null,inst_21345);
var inst_21352 = cljs.core._EQ_.call(null,inst_21350,inst_21351);
var state_21390__$1 = state_21390;
if(inst_21352){
var statearr_21414_21442 = state_21390__$1;
(statearr_21414_21442[(1)] = (13));

} else {
var statearr_21415_21443 = state_21390__$1;
(statearr_21415_21443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (18))){
var inst_21372 = (state_21390[(2)]);
var state_21390__$1 = state_21390;
var statearr_21416_21444 = state_21390__$1;
(statearr_21416_21444[(2)] = inst_21372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21391 === (8))){
var inst_21336 = (state_21390[(2)]);
var inst_21337 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_21338 = [inst_21336];
var inst_21339 = cljs.core.PersistentHashMap.fromArrays(inst_21337,inst_21338);
var inst_21340 = cljs.core.async.put_BANG_.call(null,channel,inst_21339);
var state_21390__$1 = state_21390;
var statearr_21417_21445 = state_21390__$1;
(statearr_21417_21445[(2)] = inst_21340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21390__$1);

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
});})(c__14031__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__13919__auto__,c__14031__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__13920__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__13920__auto____0 = (function (){
var statearr_21421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21421[(0)] = eval_soup$core$eval_forms_$_state_machine__13920__auto__);

(statearr_21421[(1)] = (1));

return statearr_21421;
});
var eval_soup$core$eval_forms_$_state_machine__13920__auto____1 = (function (state_21390){
while(true){
var ret_value__13921__auto__ = (function (){try{while(true){
var result__13922__auto__ = switch__13919__auto__.call(null,state_21390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13922__auto__;
}
break;
}
}catch (e21422){if((e21422 instanceof Object)){
var ex__13923__auto__ = e21422;
var statearr_21423_21446 = state_21390;
(statearr_21423_21446[(5)] = ex__13923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21447 = state_21390;
state_21390 = G__21447;
continue;
} else {
return ret_value__13921__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__13920__auto__ = function(state_21390){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__13920__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__13920__auto____1.call(this,state_21390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__13920__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__13920__auto____0;
eval_soup$core$eval_forms_$_state_machine__13920__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__13920__auto____1;
return eval_soup$core$eval_forms_$_state_machine__13920__auto__;
})()
;})(switch__13919__auto__,c__14031__auto__,opts,channel,forms__$1,results))
})();
var state__14033__auto__ = (function (){var statearr_21424 = f__14032__auto__.call(null);
(statearr_21424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14031__auto__);

return statearr_21424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14033__auto__);
});})(c__14031__auto__,opts,channel,forms__$1,results))
);

return c__14031__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e21449){if((e21449 instanceof Error)){
var _ = e21449;
return null;
} else {
throw e21449;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core._conj.call(null,(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__11124__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__21454(s__21455){
return (new cljs.core.LazySeq(null,(function (){
var s__21455__$1 = s__21455;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21455__$1);
if(temp__4657__auto__){
var s__21455__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21455__$2)){
var c__11122__auto__ = cljs.core.chunk_first.call(null,s__21455__$2);
var size__11123__auto__ = cljs.core.count.call(null,c__11122__auto__);
var b__21457 = cljs.core.chunk_buffer.call(null,size__11123__auto__);
if((function (){var i__21456 = (0);
while(true){
if((i__21456 < size__11123__auto__)){
var i = cljs.core._nth.call(null,c__11122__auto__,i__21456);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__21457,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__21458 = (i__21456 + (1));
i__21456 = G__21458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21457),eval_soup$core$add_timeouts_if_necessary_$_iter__21454.call(null,cljs.core.chunk_rest.call(null,s__21455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21457),null);
}
} else {
var i = cljs.core.first.call(null,s__21455__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__21454.call(null,cljs.core.rest.call(null,s__21455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11124__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args21459 = [];
var len__11449__auto___21465 = arguments.length;
var i__11450__auto___21466 = (0);
while(true){
if((i__11450__auto___21466 < len__11449__auto___21465)){
args21459.push((arguments[i__11450__auto___21466]));

var G__21467 = (i__11450__auto___21466 + (1));
i__11450__auto___21466 = G__21467;
continue;
} else {
}
break;
}

var G__21461 = args21459.length;
switch (G__21461) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21459.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__21462){
var map__21463 = p__21462;
var map__21463__$1 = ((((!((map__21463 == null)))?((((map__21463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21463):map__21463);
var custom_load = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__21463,map__21463__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__21463,map__21463__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__21463,map__21463__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__21463,map__21463__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__21463,map__21463__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__21463,map__21463__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map