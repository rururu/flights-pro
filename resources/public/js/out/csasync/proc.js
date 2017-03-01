// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23466 = [];
var len__9661__auto___23529 = arguments.length;
var i__9662__auto___23530 = (0);
while(true){
if((i__9662__auto___23530 < len__9661__auto___23529)){
args23466.push((arguments[i__9662__auto___23530]));

var G__23531 = (i__9662__auto___23530 + (1));
i__9662__auto___23530 = G__23531;
continue;
} else {
}
break;
}

var G__23468 = args23466.length;
switch (G__23468) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23466.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (1))){
var state_23482__$1 = state_23482;
var statearr_23484_23533 = state_23482__$1;
(statearr_23484_23533[(2)] = null);

(statearr_23484_23533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (2))){
var state_23482__$1 = state_23482;
var statearr_23485_23534 = state_23482__$1;
(statearr_23485_23534[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (3))){
var inst_23480 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else {
if((state_val_23483 === (4))){
var inst_23471 = func.call(null);
var inst_23472 = cljs.core.async.timeout.call(null,time_out);
var state_23482__$1 = (function (){var statearr_23487 = state_23482;
(statearr_23487[(7)] = inst_23471);

return statearr_23487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23482__$1,(7),inst_23472);
} else {
if((state_val_23483 === (5))){
var state_23482__$1 = state_23482;
var statearr_23488_23535 = state_23482__$1;
(statearr_23488_23535[(2)] = null);

(statearr_23488_23535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (6))){
var inst_23478 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23489_23536 = state_23482__$1;
(statearr_23489_23536[(2)] = inst_23478);

(statearr_23489_23536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (7))){
var inst_23474 = (state_23482[(2)]);
var state_23482__$1 = (function (){var statearr_23490 = state_23482;
(statearr_23490[(8)] = inst_23474);

return statearr_23490;
})();
var statearr_23491_23537 = state_23482__$1;
(statearr_23491_23537[(2)] = null);

(statearr_23491_23537[(1)] = (2));


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
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$state_machine__11058__auto__ = null;
var csasync$proc$state_machine__11058__auto____0 = (function (){
var statearr_23495 = [null,null,null,null,null,null,null,null,null];
(statearr_23495[(0)] = csasync$proc$state_machine__11058__auto__);

(statearr_23495[(1)] = (1));

return statearr_23495;
});
var csasync$proc$state_machine__11058__auto____1 = (function (state_23482){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_23482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e23496){if((e23496 instanceof Object)){
var ex__11061__auto__ = e23496;
var statearr_23497_23538 = state_23482;
(statearr_23497_23538[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23539 = state_23482;
state_23482 = G__23539;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$state_machine__11058__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11058__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11058__auto____0;
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11058__auto____1;
return csasync$proc$state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_23498 = f__11079__auto__.call(null);
(statearr_23498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_23498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_23512){
var state_val_23513 = (state_23512[(1)]);
if((state_val_23513 === (1))){
var state_23512__$1 = state_23512;
var statearr_23514_23540 = state_23512__$1;
(statearr_23514_23540[(2)] = null);

(statearr_23514_23540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23513 === (2))){
var state_23512__$1 = state_23512;
var statearr_23515_23541 = state_23512__$1;
(statearr_23515_23541[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23513 === (3))){
var inst_23510 = (state_23512[(2)]);
var state_23512__$1 = state_23512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23512__$1,inst_23510);
} else {
if((state_val_23513 === (4))){
var inst_23501 = func.call(null,param);
var inst_23502 = cljs.core.async.timeout.call(null,time_out);
var state_23512__$1 = (function (){var statearr_23517 = state_23512;
(statearr_23517[(7)] = inst_23501);

return statearr_23517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23512__$1,(7),inst_23502);
} else {
if((state_val_23513 === (5))){
var state_23512__$1 = state_23512;
var statearr_23518_23542 = state_23512__$1;
(statearr_23518_23542[(2)] = null);

(statearr_23518_23542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23513 === (6))){
var inst_23508 = (state_23512[(2)]);
var state_23512__$1 = state_23512;
var statearr_23519_23543 = state_23512__$1;
(statearr_23519_23543[(2)] = inst_23508);

(statearr_23519_23543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23513 === (7))){
var inst_23504 = (state_23512[(2)]);
var state_23512__$1 = (function (){var statearr_23520 = state_23512;
(statearr_23520[(8)] = inst_23504);

return statearr_23520;
})();
var statearr_23521_23544 = state_23512__$1;
(statearr_23521_23544[(2)] = null);

(statearr_23521_23544[(1)] = (2));


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
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$state_machine__11058__auto__ = null;
var csasync$proc$state_machine__11058__auto____0 = (function (){
var statearr_23525 = [null,null,null,null,null,null,null,null,null];
(statearr_23525[(0)] = csasync$proc$state_machine__11058__auto__);

(statearr_23525[(1)] = (1));

return statearr_23525;
});
var csasync$proc$state_machine__11058__auto____1 = (function (state_23512){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_23512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e23526){if((e23526 instanceof Object)){
var ex__11061__auto__ = e23526;
var statearr_23527_23545 = state_23512;
(statearr_23527_23545[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23546 = state_23512;
state_23512 = G__23546;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$state_machine__11058__auto__ = function(state_23512){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11058__auto____1.call(this,state_23512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11058__auto____0;
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11058__auto____1;
return csasync$proc$state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_23528 = f__11079__auto__.call(null);
(statearr_23528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_23528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11078__auto___23631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto___23631){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto___23631){
return (function (state_23609){
var state_val_23610 = (state_23609[(1)]);
if((state_val_23610 === (7))){
var inst_23598 = cljs.core.async.timeout.call(null,time_out);
var state_23609__$1 = state_23609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23609__$1,(10),inst_23598);
} else {
if((state_val_23610 === (1))){
var state_23609__$1 = state_23609;
var statearr_23611_23632 = state_23609__$1;
(statearr_23611_23632[(2)] = null);

(statearr_23611_23632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (4))){
var inst_23593 = proc_fn.call(null);
var state_23609__$1 = state_23609;
var statearr_23612_23633 = state_23609__$1;
(statearr_23612_23633[(2)] = inst_23593);

(statearr_23612_23633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (6))){
var inst_23596 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
if(cljs.core.truth_(inst_23596)){
var statearr_23613_23634 = state_23609__$1;
(statearr_23613_23634[(1)] = (7));

} else {
var statearr_23614_23635 = state_23609__$1;
(statearr_23614_23635[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (3))){
var inst_23606 = (state_23609[(2)]);
var inst_23607 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23609__$1 = (function (){var statearr_23615 = state_23609;
(statearr_23615[(7)] = inst_23606);

return statearr_23615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23609__$1,inst_23607);
} else {
if((state_val_23610 === (2))){
var inst_23591 = (state_23609[(8)]);
var inst_23590 = cljs.core.deref.call(null,status);
var inst_23591__$1 = cljs.core._EQ_.call(null,inst_23590,"RUN");
var state_23609__$1 = (function (){var statearr_23616 = state_23609;
(statearr_23616[(8)] = inst_23591__$1);

return statearr_23616;
})();
if(inst_23591__$1){
var statearr_23617_23636 = state_23609__$1;
(statearr_23617_23636[(1)] = (4));

} else {
var statearr_23618_23637 = state_23609__$1;
(statearr_23618_23637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (9))){
var inst_23604 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23619_23638 = state_23609__$1;
(statearr_23619_23638[(2)] = inst_23604);

(statearr_23619_23638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (5))){
var inst_23591 = (state_23609[(8)]);
var state_23609__$1 = state_23609;
var statearr_23620_23639 = state_23609__$1;
(statearr_23620_23639[(2)] = inst_23591);

(statearr_23620_23639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (10))){
var inst_23600 = (state_23609[(2)]);
var state_23609__$1 = (function (){var statearr_23621 = state_23609;
(statearr_23621[(9)] = inst_23600);

return statearr_23621;
})();
var statearr_23622_23640 = state_23609__$1;
(statearr_23622_23640[(2)] = null);

(statearr_23622_23640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (8))){
var state_23609__$1 = state_23609;
var statearr_23623_23641 = state_23609__$1;
(statearr_23623_23641[(2)] = null);

(statearr_23623_23641[(1)] = (9));


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
});})(c__11078__auto___23631))
;
return ((function (switch__11057__auto__,c__11078__auto___23631){
return (function() {
var csasync$proc$start_process_$_state_machine__11058__auto__ = null;
var csasync$proc$start_process_$_state_machine__11058__auto____0 = (function (){
var statearr_23627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23627[(0)] = csasync$proc$start_process_$_state_machine__11058__auto__);

(statearr_23627[(1)] = (1));

return statearr_23627;
});
var csasync$proc$start_process_$_state_machine__11058__auto____1 = (function (state_23609){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_23609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e23628){if((e23628 instanceof Object)){
var ex__11061__auto__ = e23628;
var statearr_23629_23642 = state_23609;
(statearr_23629_23642[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23643 = state_23609;
state_23609 = G__23643;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11058__auto__ = function(state_23609){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11058__auto____1.call(this,state_23609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11058__auto____0;
csasync$proc$start_process_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11058__auto____1;
return csasync$proc$start_process_$_state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto___23631))
})();
var state__11080__auto__ = (function (){var statearr_23630 = f__11079__auto__.call(null);
(statearr_23630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto___23631);

return statearr_23630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto___23631))
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
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_23664){
var state_val_23665 = (state_23664[(1)]);
if((state_val_23665 === (1))){
var inst_23659 = cljs.core.async.timeout.call(null,time);
var state_23664__$1 = state_23664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23664__$1,(2),inst_23659);
} else {
if((state_val_23665 === (2))){
var inst_23661 = (state_23664[(2)]);
var inst_23662 = func.call(null);
var state_23664__$1 = (function (){var statearr_23666 = state_23664;
(statearr_23666[(7)] = inst_23661);

return statearr_23666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23664__$1,inst_23662);
} else {
return null;
}
}
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11058__auto__ = null;
var csasync$proc$delayer_$_state_machine__11058__auto____0 = (function (){
var statearr_23670 = [null,null,null,null,null,null,null,null];
(statearr_23670[(0)] = csasync$proc$delayer_$_state_machine__11058__auto__);

(statearr_23670[(1)] = (1));

return statearr_23670;
});
var csasync$proc$delayer_$_state_machine__11058__auto____1 = (function (state_23664){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_23664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e23671){if((e23671 instanceof Object)){
var ex__11061__auto__ = e23671;
var statearr_23672_23674 = state_23664;
(statearr_23672_23674[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23675 = state_23664;
state_23664 = G__23675;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11058__auto__ = function(state_23664){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11058__auto____1.call(this,state_23664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11058__auto____0;
csasync$proc$delayer_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11058__auto____1;
return csasync$proc$delayer_$_state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_23673 = f__11079__auto__.call(null);
(statearr_23673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_23673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

//# sourceMappingURL=proc.js.map