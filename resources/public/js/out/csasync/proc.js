// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26551 = [];
var len__9665__auto___26614 = arguments.length;
var i__9666__auto___26615 = (0);
while(true){
if((i__9666__auto___26615 < len__9665__auto___26614)){
args26551.push((arguments[i__9666__auto___26615]));

var G__26616 = (i__9666__auto___26615 + (1));
i__9666__auto___26615 = G__26616;
continue;
} else {
}
break;
}

var G__26553 = args26551.length;
switch (G__26553) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26551.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_26567){
var state_val_26568 = (state_26567[(1)]);
if((state_val_26568 === (1))){
var state_26567__$1 = state_26567;
var statearr_26569_26618 = state_26567__$1;
(statearr_26569_26618[(2)] = null);

(statearr_26569_26618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (2))){
var state_26567__$1 = state_26567;
var statearr_26570_26619 = state_26567__$1;
(statearr_26570_26619[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (3))){
var inst_26565 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26567__$1,inst_26565);
} else {
if((state_val_26568 === (4))){
var inst_26556 = func.call(null);
var inst_26557 = cljs.core.async.timeout.call(null,time_out);
var state_26567__$1 = (function (){var statearr_26572 = state_26567;
(statearr_26572[(7)] = inst_26556);

return statearr_26572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26567__$1,(7),inst_26557);
} else {
if((state_val_26568 === (5))){
var state_26567__$1 = state_26567;
var statearr_26573_26620 = state_26567__$1;
(statearr_26573_26620[(2)] = null);

(statearr_26573_26620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (6))){
var inst_26563 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26574_26621 = state_26567__$1;
(statearr_26574_26621[(2)] = inst_26563);

(statearr_26574_26621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (7))){
var inst_26559 = (state_26567[(2)]);
var state_26567__$1 = (function (){var statearr_26575 = state_26567;
(statearr_26575[(8)] = inst_26559);

return statearr_26575;
})();
var statearr_26576_26622 = state_26567__$1;
(statearr_26576_26622[(2)] = null);

(statearr_26576_26622[(1)] = (2));


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
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$state_machine__11062__auto__ = null;
var csasync$proc$state_machine__11062__auto____0 = (function (){
var statearr_26580 = [null,null,null,null,null,null,null,null,null];
(statearr_26580[(0)] = csasync$proc$state_machine__11062__auto__);

(statearr_26580[(1)] = (1));

return statearr_26580;
});
var csasync$proc$state_machine__11062__auto____1 = (function (state_26567){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_26567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e26581){if((e26581 instanceof Object)){
var ex__11065__auto__ = e26581;
var statearr_26582_26623 = state_26567;
(statearr_26582_26623[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26624 = state_26567;
state_26567 = G__26624;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$state_machine__11062__auto__ = function(state_26567){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11062__auto____1.call(this,state_26567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11062__auto____0;
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11062__auto____1;
return csasync$proc$state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_26583 = f__11083__auto__.call(null);
(statearr_26583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_26583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_26597){
var state_val_26598 = (state_26597[(1)]);
if((state_val_26598 === (1))){
var state_26597__$1 = state_26597;
var statearr_26599_26625 = state_26597__$1;
(statearr_26599_26625[(2)] = null);

(statearr_26599_26625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (2))){
var state_26597__$1 = state_26597;
var statearr_26600_26626 = state_26597__$1;
(statearr_26600_26626[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (3))){
var inst_26595 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26597__$1,inst_26595);
} else {
if((state_val_26598 === (4))){
var inst_26586 = func.call(null,param);
var inst_26587 = cljs.core.async.timeout.call(null,time_out);
var state_26597__$1 = (function (){var statearr_26602 = state_26597;
(statearr_26602[(7)] = inst_26586);

return statearr_26602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(7),inst_26587);
} else {
if((state_val_26598 === (5))){
var state_26597__$1 = state_26597;
var statearr_26603_26627 = state_26597__$1;
(statearr_26603_26627[(2)] = null);

(statearr_26603_26627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (6))){
var inst_26593 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26604_26628 = state_26597__$1;
(statearr_26604_26628[(2)] = inst_26593);

(statearr_26604_26628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (7))){
var inst_26589 = (state_26597[(2)]);
var state_26597__$1 = (function (){var statearr_26605 = state_26597;
(statearr_26605[(8)] = inst_26589);

return statearr_26605;
})();
var statearr_26606_26629 = state_26597__$1;
(statearr_26606_26629[(2)] = null);

(statearr_26606_26629[(1)] = (2));


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
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$state_machine__11062__auto__ = null;
var csasync$proc$state_machine__11062__auto____0 = (function (){
var statearr_26610 = [null,null,null,null,null,null,null,null,null];
(statearr_26610[(0)] = csasync$proc$state_machine__11062__auto__);

(statearr_26610[(1)] = (1));

return statearr_26610;
});
var csasync$proc$state_machine__11062__auto____1 = (function (state_26597){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_26597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e26611){if((e26611 instanceof Object)){
var ex__11065__auto__ = e26611;
var statearr_26612_26630 = state_26597;
(statearr_26612_26630[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26631 = state_26597;
state_26597 = G__26631;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$state_machine__11062__auto__ = function(state_26597){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11062__auto____1.call(this,state_26597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11062__auto____0;
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11062__auto____1;
return csasync$proc$state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_26613 = f__11083__auto__.call(null);
(statearr_26613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11082__auto___26716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto___26716){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto___26716){
return (function (state_26694){
var state_val_26695 = (state_26694[(1)]);
if((state_val_26695 === (7))){
var inst_26683 = cljs.core.async.timeout.call(null,time_out);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26694__$1,(10),inst_26683);
} else {
if((state_val_26695 === (1))){
var state_26694__$1 = state_26694;
var statearr_26696_26717 = state_26694__$1;
(statearr_26696_26717[(2)] = null);

(statearr_26696_26717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (4))){
var inst_26678 = proc_fn.call(null);
var state_26694__$1 = state_26694;
var statearr_26697_26718 = state_26694__$1;
(statearr_26697_26718[(2)] = inst_26678);

(statearr_26697_26718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (6))){
var inst_26681 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
if(cljs.core.truth_(inst_26681)){
var statearr_26698_26719 = state_26694__$1;
(statearr_26698_26719[(1)] = (7));

} else {
var statearr_26699_26720 = state_26694__$1;
(statearr_26699_26720[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (3))){
var inst_26691 = (state_26694[(2)]);
var inst_26692 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26694__$1 = (function (){var statearr_26700 = state_26694;
(statearr_26700[(7)] = inst_26691);

return statearr_26700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26694__$1,inst_26692);
} else {
if((state_val_26695 === (2))){
var inst_26676 = (state_26694[(8)]);
var inst_26675 = cljs.core.deref.call(null,status);
var inst_26676__$1 = cljs.core._EQ_.call(null,inst_26675,"RUN");
var state_26694__$1 = (function (){var statearr_26701 = state_26694;
(statearr_26701[(8)] = inst_26676__$1);

return statearr_26701;
})();
if(inst_26676__$1){
var statearr_26702_26721 = state_26694__$1;
(statearr_26702_26721[(1)] = (4));

} else {
var statearr_26703_26722 = state_26694__$1;
(statearr_26703_26722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (9))){
var inst_26689 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
var statearr_26704_26723 = state_26694__$1;
(statearr_26704_26723[(2)] = inst_26689);

(statearr_26704_26723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (5))){
var inst_26676 = (state_26694[(8)]);
var state_26694__$1 = state_26694;
var statearr_26705_26724 = state_26694__$1;
(statearr_26705_26724[(2)] = inst_26676);

(statearr_26705_26724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (10))){
var inst_26685 = (state_26694[(2)]);
var state_26694__$1 = (function (){var statearr_26706 = state_26694;
(statearr_26706[(9)] = inst_26685);

return statearr_26706;
})();
var statearr_26707_26725 = state_26694__$1;
(statearr_26707_26725[(2)] = null);

(statearr_26707_26725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (8))){
var state_26694__$1 = state_26694;
var statearr_26708_26726 = state_26694__$1;
(statearr_26708_26726[(2)] = null);

(statearr_26708_26726[(1)] = (9));


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
});})(c__11082__auto___26716))
;
return ((function (switch__11061__auto__,c__11082__auto___26716){
return (function() {
var csasync$proc$start_process_$_state_machine__11062__auto__ = null;
var csasync$proc$start_process_$_state_machine__11062__auto____0 = (function (){
var statearr_26712 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26712[(0)] = csasync$proc$start_process_$_state_machine__11062__auto__);

(statearr_26712[(1)] = (1));

return statearr_26712;
});
var csasync$proc$start_process_$_state_machine__11062__auto____1 = (function (state_26694){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_26694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e26713){if((e26713 instanceof Object)){
var ex__11065__auto__ = e26713;
var statearr_26714_26727 = state_26694;
(statearr_26714_26727[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26728 = state_26694;
state_26694 = G__26728;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11062__auto__ = function(state_26694){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11062__auto____1.call(this,state_26694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11062__auto____0;
csasync$proc$start_process_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11062__auto____1;
return csasync$proc$start_process_$_state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto___26716))
})();
var state__11084__auto__ = (function (){var statearr_26715 = f__11083__auto__.call(null);
(statearr_26715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto___26716);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto___26716))
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
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_26749){
var state_val_26750 = (state_26749[(1)]);
if((state_val_26750 === (1))){
var inst_26744 = cljs.core.async.timeout.call(null,time);
var state_26749__$1 = state_26749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26749__$1,(2),inst_26744);
} else {
if((state_val_26750 === (2))){
var inst_26746 = (state_26749[(2)]);
var inst_26747 = func.call(null);
var state_26749__$1 = (function (){var statearr_26751 = state_26749;
(statearr_26751[(7)] = inst_26746);

return statearr_26751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26749__$1,inst_26747);
} else {
return null;
}
}
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11062__auto__ = null;
var csasync$proc$delayer_$_state_machine__11062__auto____0 = (function (){
var statearr_26755 = [null,null,null,null,null,null,null,null];
(statearr_26755[(0)] = csasync$proc$delayer_$_state_machine__11062__auto__);

(statearr_26755[(1)] = (1));

return statearr_26755;
});
var csasync$proc$delayer_$_state_machine__11062__auto____1 = (function (state_26749){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_26749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e26756){if((e26756 instanceof Object)){
var ex__11065__auto__ = e26756;
var statearr_26757_26759 = state_26749;
(statearr_26757_26759[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26760 = state_26749;
state_26749 = G__26760;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11062__auto__ = function(state_26749){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11062__auto____1.call(this,state_26749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11062__auto____0;
csasync$proc$delayer_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11062__auto____1;
return csasync$proc$delayer_$_state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_26758 = f__11083__auto__.call(null);
(statearr_26758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

//# sourceMappingURL=proc.js.map