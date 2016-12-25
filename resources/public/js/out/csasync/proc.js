// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args27501 = [];
var len__20483__auto___27564 = arguments.length;
var i__20484__auto___27565 = (0);
while(true){
if((i__20484__auto___27565 < len__20483__auto___27564)){
args27501.push((arguments[i__20484__auto___27565]));

var G__27566 = (i__20484__auto___27565 + (1));
i__20484__auto___27565 = G__27566;
continue;
} else {
}
break;
}

var G__27503 = args27501.length;
switch (G__27503) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27501.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21545__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21545__auto__){
return (function (){
var f__21546__auto__ = (function (){var switch__21524__auto__ = ((function (c__21545__auto__){
return (function (state_27517){
var state_val_27518 = (state_27517[(1)]);
if((state_val_27518 === (1))){
var state_27517__$1 = state_27517;
var statearr_27519_27568 = state_27517__$1;
(statearr_27519_27568[(2)] = null);

(statearr_27519_27568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (2))){
var state_27517__$1 = state_27517;
var statearr_27520_27569 = state_27517__$1;
(statearr_27520_27569[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (3))){
var inst_27515 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27517__$1,inst_27515);
} else {
if((state_val_27518 === (4))){
var inst_27506 = func.call(null);
var inst_27507 = cljs.core.async.timeout.call(null,time_out);
var state_27517__$1 = (function (){var statearr_27522 = state_27517;
(statearr_27522[(7)] = inst_27506);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27517__$1,(7),inst_27507);
} else {
if((state_val_27518 === (5))){
var state_27517__$1 = state_27517;
var statearr_27523_27570 = state_27517__$1;
(statearr_27523_27570[(2)] = null);

(statearr_27523_27570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (6))){
var inst_27513 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27524_27571 = state_27517__$1;
(statearr_27524_27571[(2)] = inst_27513);

(statearr_27524_27571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (7))){
var inst_27509 = (state_27517[(2)]);
var state_27517__$1 = (function (){var statearr_27525 = state_27517;
(statearr_27525[(8)] = inst_27509);

return statearr_27525;
})();
var statearr_27526_27572 = state_27517__$1;
(statearr_27526_27572[(2)] = null);

(statearr_27526_27572[(1)] = (2));


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
});})(c__21545__auto__))
;
return ((function (switch__21524__auto__,c__21545__auto__){
return (function() {
var csasync$proc$state_machine__21525__auto__ = null;
var csasync$proc$state_machine__21525__auto____0 = (function (){
var statearr_27530 = [null,null,null,null,null,null,null,null,null];
(statearr_27530[(0)] = csasync$proc$state_machine__21525__auto__);

(statearr_27530[(1)] = (1));

return statearr_27530;
});
var csasync$proc$state_machine__21525__auto____1 = (function (state_27517){
while(true){
var ret_value__21526__auto__ = (function (){try{while(true){
var result__21527__auto__ = switch__21524__auto__.call(null,state_27517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21527__auto__;
}
break;
}
}catch (e27531){if((e27531 instanceof Object)){
var ex__21528__auto__ = e27531;
var statearr_27532_27573 = state_27517;
(statearr_27532_27573[(5)] = ex__21528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27574 = state_27517;
state_27517 = G__27574;
continue;
} else {
return ret_value__21526__auto__;
}
break;
}
});
csasync$proc$state_machine__21525__auto__ = function(state_27517){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21525__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21525__auto____1.call(this,state_27517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21525__auto____0;
csasync$proc$state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21525__auto____1;
return csasync$proc$state_machine__21525__auto__;
})()
;})(switch__21524__auto__,c__21545__auto__))
})();
var state__21547__auto__ = (function (){var statearr_27533 = f__21546__auto__.call(null);
(statearr_27533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21545__auto__);

return statearr_27533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21547__auto__);
});})(c__21545__auto__))
);

return c__21545__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21545__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21545__auto__){
return (function (){
var f__21546__auto__ = (function (){var switch__21524__auto__ = ((function (c__21545__auto__){
return (function (state_27547){
var state_val_27548 = (state_27547[(1)]);
if((state_val_27548 === (1))){
var state_27547__$1 = state_27547;
var statearr_27549_27575 = state_27547__$1;
(statearr_27549_27575[(2)] = null);

(statearr_27549_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (2))){
var state_27547__$1 = state_27547;
var statearr_27550_27576 = state_27547__$1;
(statearr_27550_27576[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (3))){
var inst_27545 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27547__$1,inst_27545);
} else {
if((state_val_27548 === (4))){
var inst_27536 = func.call(null,param);
var inst_27537 = cljs.core.async.timeout.call(null,time_out);
var state_27547__$1 = (function (){var statearr_27552 = state_27547;
(statearr_27552[(7)] = inst_27536);

return statearr_27552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(7),inst_27537);
} else {
if((state_val_27548 === (5))){
var state_27547__$1 = state_27547;
var statearr_27553_27577 = state_27547__$1;
(statearr_27553_27577[(2)] = null);

(statearr_27553_27577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (6))){
var inst_27543 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27554_27578 = state_27547__$1;
(statearr_27554_27578[(2)] = inst_27543);

(statearr_27554_27578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (7))){
var inst_27539 = (state_27547[(2)]);
var state_27547__$1 = (function (){var statearr_27555 = state_27547;
(statearr_27555[(8)] = inst_27539);

return statearr_27555;
})();
var statearr_27556_27579 = state_27547__$1;
(statearr_27556_27579[(2)] = null);

(statearr_27556_27579[(1)] = (2));


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
});})(c__21545__auto__))
;
return ((function (switch__21524__auto__,c__21545__auto__){
return (function() {
var csasync$proc$state_machine__21525__auto__ = null;
var csasync$proc$state_machine__21525__auto____0 = (function (){
var statearr_27560 = [null,null,null,null,null,null,null,null,null];
(statearr_27560[(0)] = csasync$proc$state_machine__21525__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var csasync$proc$state_machine__21525__auto____1 = (function (state_27547){
while(true){
var ret_value__21526__auto__ = (function (){try{while(true){
var result__21527__auto__ = switch__21524__auto__.call(null,state_27547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21527__auto__;
}
break;
}
}catch (e27561){if((e27561 instanceof Object)){
var ex__21528__auto__ = e27561;
var statearr_27562_27580 = state_27547;
(statearr_27562_27580[(5)] = ex__21528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27547;
state_27547 = G__27581;
continue;
} else {
return ret_value__21526__auto__;
}
break;
}
});
csasync$proc$state_machine__21525__auto__ = function(state_27547){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21525__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21525__auto____1.call(this,state_27547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21525__auto____0;
csasync$proc$state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21525__auto____1;
return csasync$proc$state_machine__21525__auto__;
})()
;})(switch__21524__auto__,c__21545__auto__))
})();
var state__21547__auto__ = (function (){var statearr_27563 = f__21546__auto__.call(null);
(statearr_27563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21545__auto__);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21547__auto__);
});})(c__21545__auto__))
);

return c__21545__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21545__auto___27666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21545__auto___27666){
return (function (){
var f__21546__auto__ = (function (){var switch__21524__auto__ = ((function (c__21545__auto___27666){
return (function (state_27644){
var state_val_27645 = (state_27644[(1)]);
if((state_val_27645 === (7))){
var inst_27633 = cljs.core.async.timeout.call(null,time_out);
var state_27644__$1 = state_27644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27644__$1,(10),inst_27633);
} else {
if((state_val_27645 === (1))){
var state_27644__$1 = state_27644;
var statearr_27646_27667 = state_27644__$1;
(statearr_27646_27667[(2)] = null);

(statearr_27646_27667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (4))){
var inst_27628 = proc_fn.call(null);
var state_27644__$1 = state_27644;
var statearr_27647_27668 = state_27644__$1;
(statearr_27647_27668[(2)] = inst_27628);

(statearr_27647_27668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (6))){
var inst_27631 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
if(cljs.core.truth_(inst_27631)){
var statearr_27648_27669 = state_27644__$1;
(statearr_27648_27669[(1)] = (7));

} else {
var statearr_27649_27670 = state_27644__$1;
(statearr_27649_27670[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (3))){
var inst_27641 = (state_27644[(2)]);
var inst_27642 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_27644__$1 = (function (){var statearr_27650 = state_27644;
(statearr_27650[(7)] = inst_27641);

return statearr_27650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27644__$1,inst_27642);
} else {
if((state_val_27645 === (2))){
var inst_27626 = (state_27644[(8)]);
var inst_27625 = cljs.core.deref.call(null,status);
var inst_27626__$1 = cljs.core._EQ_.call(null,inst_27625,"RUN");
var state_27644__$1 = (function (){var statearr_27651 = state_27644;
(statearr_27651[(8)] = inst_27626__$1);

return statearr_27651;
})();
if(inst_27626__$1){
var statearr_27652_27671 = state_27644__$1;
(statearr_27652_27671[(1)] = (4));

} else {
var statearr_27653_27672 = state_27644__$1;
(statearr_27653_27672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (9))){
var inst_27639 = (state_27644[(2)]);
var state_27644__$1 = state_27644;
var statearr_27654_27673 = state_27644__$1;
(statearr_27654_27673[(2)] = inst_27639);

(statearr_27654_27673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (5))){
var inst_27626 = (state_27644[(8)]);
var state_27644__$1 = state_27644;
var statearr_27655_27674 = state_27644__$1;
(statearr_27655_27674[(2)] = inst_27626);

(statearr_27655_27674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (10))){
var inst_27635 = (state_27644[(2)]);
var state_27644__$1 = (function (){var statearr_27656 = state_27644;
(statearr_27656[(9)] = inst_27635);

return statearr_27656;
})();
var statearr_27657_27675 = state_27644__$1;
(statearr_27657_27675[(2)] = null);

(statearr_27657_27675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27645 === (8))){
var state_27644__$1 = state_27644;
var statearr_27658_27676 = state_27644__$1;
(statearr_27658_27676[(2)] = null);

(statearr_27658_27676[(1)] = (9));


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
});})(c__21545__auto___27666))
;
return ((function (switch__21524__auto__,c__21545__auto___27666){
return (function() {
var csasync$proc$start_process_$_state_machine__21525__auto__ = null;
var csasync$proc$start_process_$_state_machine__21525__auto____0 = (function (){
var statearr_27662 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27662[(0)] = csasync$proc$start_process_$_state_machine__21525__auto__);

(statearr_27662[(1)] = (1));

return statearr_27662;
});
var csasync$proc$start_process_$_state_machine__21525__auto____1 = (function (state_27644){
while(true){
var ret_value__21526__auto__ = (function (){try{while(true){
var result__21527__auto__ = switch__21524__auto__.call(null,state_27644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21527__auto__;
}
break;
}
}catch (e27663){if((e27663 instanceof Object)){
var ex__21528__auto__ = e27663;
var statearr_27664_27677 = state_27644;
(statearr_27664_27677[(5)] = ex__21528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27678 = state_27644;
state_27644 = G__27678;
continue;
} else {
return ret_value__21526__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21525__auto__ = function(state_27644){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21525__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21525__auto____1.call(this,state_27644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21525__auto____0;
csasync$proc$start_process_$_state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21525__auto____1;
return csasync$proc$start_process_$_state_machine__21525__auto__;
})()
;})(switch__21524__auto__,c__21545__auto___27666))
})();
var state__21547__auto__ = (function (){var statearr_27665 = f__21546__auto__.call(null);
(statearr_27665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21545__auto___27666);

return statearr_27665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21547__auto__);
});})(c__21545__auto___27666))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});
csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"FINISH");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});
csasync.proc.delayer = (function csasync$proc$delayer(func,time){
var c__21545__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21545__auto__){
return (function (){
var f__21546__auto__ = (function (){var switch__21524__auto__ = ((function (c__21545__auto__){
return (function (state_27699){
var state_val_27700 = (state_27699[(1)]);
if((state_val_27700 === (1))){
var inst_27694 = cljs.core.async.timeout.call(null,time);
var state_27699__$1 = state_27699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27699__$1,(2),inst_27694);
} else {
if((state_val_27700 === (2))){
var inst_27696 = (state_27699[(2)]);
var inst_27697 = func.call(null);
var state_27699__$1 = (function (){var statearr_27701 = state_27699;
(statearr_27701[(7)] = inst_27696);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27699__$1,inst_27697);
} else {
return null;
}
}
});})(c__21545__auto__))
;
return ((function (switch__21524__auto__,c__21545__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21525__auto__ = null;
var csasync$proc$delayer_$_state_machine__21525__auto____0 = (function (){
var statearr_27705 = [null,null,null,null,null,null,null,null];
(statearr_27705[(0)] = csasync$proc$delayer_$_state_machine__21525__auto__);

(statearr_27705[(1)] = (1));

return statearr_27705;
});
var csasync$proc$delayer_$_state_machine__21525__auto____1 = (function (state_27699){
while(true){
var ret_value__21526__auto__ = (function (){try{while(true){
var result__21527__auto__ = switch__21524__auto__.call(null,state_27699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21527__auto__;
}
break;
}
}catch (e27706){if((e27706 instanceof Object)){
var ex__21528__auto__ = e27706;
var statearr_27707_27709 = state_27699;
(statearr_27707_27709[(5)] = ex__21528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27710 = state_27699;
state_27699 = G__27710;
continue;
} else {
return ret_value__21526__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21525__auto__ = function(state_27699){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21525__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21525__auto____1.call(this,state_27699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21525__auto____0;
csasync$proc$delayer_$_state_machine__21525__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21525__auto____1;
return csasync$proc$delayer_$_state_machine__21525__auto__;
})()
;})(switch__21524__auto__,c__21545__auto__))
})();
var state__21547__auto__ = (function (){var statearr_27708 = f__21546__auto__.call(null);
(statearr_27708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21545__auto__);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21547__auto__);
});})(c__21545__auto__))
);

return c__21545__auto__;
});

//# sourceMappingURL=proc.js.map