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
var args15428 = [];
var len__9926__auto___15432 = arguments.length;
var i__9927__auto___15433 = (0);
while(true){
if((i__9927__auto___15433 < len__9926__auto___15432)){
args15428.push((arguments[i__9927__auto___15433]));

var G__15434 = (i__9927__auto___15433 + (1));
i__9927__auto___15433 = G__15434;
continue;
} else {
}
break;
}

var G__15430 = args15428.length;
switch (G__15430) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15428.length)].join('')));

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
}catch (e15431){if((e15431 instanceof Error)){
var _ = e15431;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e15431;

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
var c__15383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15383__auto__,opts,channel,forms__$1,results){
return (function (){
var f__15384__auto__ = (function (){var switch__15362__auto__ = ((function (c__15383__auto__,opts,channel,forms__$1,results){
return (function (state_15589){
var state_val_15590 = (state_15589[(1)]);
if((state_val_15590 === (7))){
var inst_15573 = (state_15589[(2)]);
var inst_15574 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_15589__$1 = (function (){var statearr_15591 = state_15589;
(statearr_15591[(7)] = inst_15574);

(statearr_15591[(8)] = inst_15573);

return statearr_15591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15589__$1,(19),channel);
} else {
if((state_val_15590 === (1))){
var state_15589__$1 = state_15589;
var statearr_15592_15624 = state_15589__$1;
(statearr_15592_15624[(2)] = null);

(statearr_15592_15624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (4))){
var state_15589__$1 = state_15589;
var statearr_15593_15625 = state_15589__$1;
(statearr_15593_15625[(2)] = null);

(statearr_15593_15625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (15))){
var inst_15557 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15594_15626 = state_15589__$1;
(statearr_15594_15626[(2)] = inst_15557);

(statearr_15594_15626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (13))){
var inst_15544 = (state_15589[(9)]);
var inst_15553 = cljs.core.second.call(null,inst_15544);
var inst_15554 = cljs.core.reset_BANG_.call(null,current_ns,inst_15553);
var state_15589__$1 = state_15589;
var statearr_15595_15627 = state_15589__$1;
(statearr_15595_15627[(2)] = inst_15554);

(statearr_15595_15627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (6))){
var inst_15581 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15596_15628 = state_15589__$1;
(statearr_15596_15628[(2)] = inst_15581);

(statearr_15596_15628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (17))){
var inst_15546 = (state_15589[(10)]);
var inst_15544 = (state_15589[(9)]);
var inst_15568 = (function (){var form = inst_15544;
var opts__$1 = inst_15546;
return ((function (form,opts__$1,inst_15546,inst_15544,state_val_15590,c__15383__auto__,opts,channel,forms__$1,results){
return (function (p1__15436_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__15436_SHARP_);
});
;})(form,opts__$1,inst_15546,inst_15544,state_val_15590,c__15383__auto__,opts,channel,forms__$1,results))
})();
var inst_15569 = cljs.js.eval.call(null,state,inst_15544,inst_15546,inst_15568);
var state_15589__$1 = state_15589;
var statearr_15597_15629 = state_15589__$1;
(statearr_15597_15629[(2)] = inst_15569);

(statearr_15597_15629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (3))){
var inst_15583 = (state_15589[(2)]);
var inst_15584 = (function (){return ((function (inst_15583,state_val_15590,c__15383__auto__,opts,channel,forms__$1,results){
return (function (p1__15437_SHARP_){
var or__8818__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__15437_SHARP_);
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__15437_SHARP_);
}
});
;})(inst_15583,state_val_15590,c__15383__auto__,opts,channel,forms__$1,results))
})();
var inst_15585 = cljs.core.deref.call(null,results);
var inst_15586 = cljs.core.mapv.call(null,inst_15584,inst_15585);
var inst_15587 = cb.call(null,inst_15586);
var state_15589__$1 = (function (){var statearr_15598 = state_15589;
(statearr_15598[(11)] = inst_15583);

return statearr_15598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15589__$1,inst_15587);
} else {
if((state_val_15590 === (12))){
var inst_15544 = (state_15589[(9)]);
var inst_15560 = (state_15589[(2)]);
var inst_15561 = (inst_15544 instanceof Error);
var state_15589__$1 = (function (){var statearr_15599 = state_15589;
(statearr_15599[(12)] = inst_15560);

return statearr_15599;
})();
if(cljs.core.truth_(inst_15561)){
var statearr_15600_15630 = state_15589__$1;
(statearr_15600_15630[(1)] = (16));

} else {
var statearr_15601_15631 = state_15589__$1;
(statearr_15601_15631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (2))){
var inst_15532 = cljs.core.deref.call(null,forms__$1);
var inst_15533 = cljs.core.seq.call(null,inst_15532);
var state_15589__$1 = state_15589;
if(inst_15533){
var statearr_15602_15632 = state_15589__$1;
(statearr_15602_15632[(1)] = (4));

} else {
var statearr_15603_15633 = state_15589__$1;
(statearr_15603_15633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (19))){
var inst_15576 = (state_15589[(2)]);
var inst_15577 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_15576);
var state_15589__$1 = (function (){var statearr_15604 = state_15589;
(statearr_15604[(13)] = inst_15577);

return statearr_15604;
})();
var statearr_15605_15634 = state_15589__$1;
(statearr_15605_15634[(2)] = null);

(statearr_15605_15634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (11))){
var state_15589__$1 = state_15589;
var statearr_15606_15635 = state_15589__$1;
(statearr_15606_15635[(2)] = null);

(statearr_15606_15635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (9))){
var inst_15544 = (state_15589[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15589,(8),Error,null,(7));
var inst_15543 = cljs.core.deref.call(null,forms__$1);
var inst_15544__$1 = cljs.core.first.call(null,inst_15543);
var inst_15545 = cljs.core.deref.call(null,current_ns);
var inst_15546 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_15545);
var inst_15547 = cljs.core.list_QMARK_.call(null,inst_15544__$1);
var state_15589__$1 = (function (){var statearr_15607 = state_15589;
(statearr_15607[(10)] = inst_15546);

(statearr_15607[(9)] = inst_15544__$1);

return statearr_15607;
})();
if(inst_15547){
var statearr_15608_15636 = state_15589__$1;
(statearr_15608_15636[(1)] = (10));

} else {
var statearr_15609_15637 = state_15589__$1;
(statearr_15609_15637[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (5))){
var state_15589__$1 = state_15589;
var statearr_15610_15638 = state_15589__$1;
(statearr_15610_15638[(2)] = null);

(statearr_15610_15638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (14))){
var state_15589__$1 = state_15589;
var statearr_15611_15639 = state_15589__$1;
(statearr_15611_15639[(2)] = null);

(statearr_15611_15639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (16))){
var inst_15544 = (state_15589[(9)]);
var inst_15563 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15564 = [inst_15544];
var inst_15565 = cljs.core.PersistentHashMap.fromArrays(inst_15563,inst_15564);
var inst_15566 = cljs.core.async.put_BANG_.call(null,channel,inst_15565);
var state_15589__$1 = state_15589;
var statearr_15612_15640 = state_15589__$1;
(statearr_15612_15640[(2)] = inst_15566);

(statearr_15612_15640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (10))){
var inst_15544 = (state_15589[(9)]);
var inst_15549 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_15550 = cljs.core.first.call(null,inst_15544);
var inst_15551 = cljs.core._EQ_.call(null,inst_15549,inst_15550);
var state_15589__$1 = state_15589;
if(inst_15551){
var statearr_15613_15641 = state_15589__$1;
(statearr_15613_15641[(1)] = (13));

} else {
var statearr_15614_15642 = state_15589__$1;
(statearr_15614_15642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (18))){
var inst_15571 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15615_15643 = state_15589__$1;
(statearr_15615_15643[(2)] = inst_15571);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (8))){
var inst_15535 = (state_15589[(2)]);
var inst_15536 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15537 = [inst_15535];
var inst_15538 = cljs.core.PersistentHashMap.fromArrays(inst_15536,inst_15537);
var inst_15539 = cljs.core.async.put_BANG_.call(null,channel,inst_15538);
var state_15589__$1 = state_15589;
var statearr_15616_15644 = state_15589__$1;
(statearr_15616_15644[(2)] = inst_15539);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15589__$1);

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
});})(c__15383__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__15362__auto__,c__15383__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__15363__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__15363__auto____0 = (function (){
var statearr_15620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15620[(0)] = eval_soup$core$eval_forms_$_state_machine__15363__auto__);

(statearr_15620[(1)] = (1));

return statearr_15620;
});
var eval_soup$core$eval_forms_$_state_machine__15363__auto____1 = (function (state_15589){
while(true){
var ret_value__15364__auto__ = (function (){try{while(true){
var result__15365__auto__ = switch__15362__auto__.call(null,state_15589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15365__auto__;
}
break;
}
}catch (e15621){if((e15621 instanceof Object)){
var ex__15366__auto__ = e15621;
var statearr_15622_15645 = state_15589;
(statearr_15622_15645[(5)] = ex__15366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15646 = state_15589;
state_15589 = G__15646;
continue;
} else {
return ret_value__15364__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__15363__auto__ = function(state_15589){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__15363__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__15363__auto____1.call(this,state_15589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__15363__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__15363__auto____0;
eval_soup$core$eval_forms_$_state_machine__15363__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__15363__auto____1;
return eval_soup$core$eval_forms_$_state_machine__15363__auto__;
})()
;})(switch__15362__auto__,c__15383__auto__,opts,channel,forms__$1,results))
})();
var state__15385__auto__ = (function (){var statearr_15623 = f__15384__auto__.call(null);
(statearr_15623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15383__auto__);

return statearr_15623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15385__auto__);
});})(c__15383__auto__,opts,channel,forms__$1,results))
);

return c__15383__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e15648){if((e15648 instanceof Error)){
var _ = e15648;
return null;
} else {
throw e15648;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core._conj.call(null,(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__9601__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__15653(s__15654){
return (new cljs.core.LazySeq(null,(function (){
var s__15654__$1 = s__15654;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15654__$1);
if(temp__4657__auto__){
var s__15654__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15654__$2)){
var c__9599__auto__ = cljs.core.chunk_first.call(null,s__15654__$2);
var size__9600__auto__ = cljs.core.count.call(null,c__9599__auto__);
var b__15656 = cljs.core.chunk_buffer.call(null,size__9600__auto__);
if((function (){var i__15655 = (0);
while(true){
if((i__15655 < size__9600__auto__)){
var i = cljs.core._nth.call(null,c__9599__auto__,i__15655);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__15656,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__15657 = (i__15655 + (1));
i__15655 = G__15657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15656),eval_soup$core$add_timeouts_if_necessary_$_iter__15653.call(null,cljs.core.chunk_rest.call(null,s__15654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15656),null);
}
} else {
var i = cljs.core.first.call(null,s__15654__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__15653.call(null,cljs.core.rest.call(null,s__15654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9601__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args15658 = [];
var len__9926__auto___15664 = arguments.length;
var i__9927__auto___15665 = (0);
while(true){
if((i__9927__auto___15665 < len__9926__auto___15664)){
args15658.push((arguments[i__9927__auto___15665]));

var G__15666 = (i__9927__auto___15665 + (1));
i__9927__auto___15665 = G__15666;
continue;
} else {
}
break;
}

var G__15660 = args15658.length;
switch (G__15660) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15658.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__15661){
var map__15662 = p__15661;
var map__15662__$1 = ((((!((map__15662 == null)))?((((map__15662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15662):map__15662);
var custom_load = cljs.core.get.call(null,map__15662__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__15662__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__15662,map__15662__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__15662,map__15662__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__15662,map__15662__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__15662,map__15662__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__15662,map__15662__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__15662,map__15662__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map