// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args40478 = [];
var len__24596__auto___40541 = arguments.length;
var i__24597__auto___40542 = (0);
while(true){
if((i__24597__auto___40542 < len__24596__auto___40541)){
args40478.push((arguments[i__24597__auto___40542]));

var G__40543 = (i__24597__auto___40542 + (1));
i__24597__auto___40542 = G__40543;
continue;
} else {
}
break;
}

var G__40480 = args40478.length;
switch (G__40480) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40478.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__25672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25672__auto__){
return (function (){
var f__25673__auto__ = (function (){var switch__25651__auto__ = ((function (c__25672__auto__){
return (function (state_40494){
var state_val_40495 = (state_40494[(1)]);
if((state_val_40495 === (1))){
var state_40494__$1 = state_40494;
var statearr_40496_40545 = state_40494__$1;
(statearr_40496_40545[(2)] = null);

(statearr_40496_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (2))){
var state_40494__$1 = state_40494;
var statearr_40497_40546 = state_40494__$1;
(statearr_40497_40546[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (3))){
var inst_40492 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40494__$1,inst_40492);
} else {
if((state_val_40495 === (4))){
var inst_40483 = func.call(null);
var inst_40484 = cljs.core.async.timeout.call(null,time_out);
var state_40494__$1 = (function (){var statearr_40499 = state_40494;
(statearr_40499[(7)] = inst_40483);

return statearr_40499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40494__$1,(7),inst_40484);
} else {
if((state_val_40495 === (5))){
var state_40494__$1 = state_40494;
var statearr_40500_40547 = state_40494__$1;
(statearr_40500_40547[(2)] = null);

(statearr_40500_40547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (6))){
var inst_40490 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
var statearr_40501_40548 = state_40494__$1;
(statearr_40501_40548[(2)] = inst_40490);

(statearr_40501_40548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (7))){
var inst_40486 = (state_40494[(2)]);
var state_40494__$1 = (function (){var statearr_40502 = state_40494;
(statearr_40502[(8)] = inst_40486);

return statearr_40502;
})();
var statearr_40503_40549 = state_40494__$1;
(statearr_40503_40549[(2)] = null);

(statearr_40503_40549[(1)] = (2));


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
});})(c__25672__auto__))
;
return ((function (switch__25651__auto__,c__25672__auto__){
return (function() {
var csasync$proc$state_machine__25652__auto__ = null;
var csasync$proc$state_machine__25652__auto____0 = (function (){
var statearr_40507 = [null,null,null,null,null,null,null,null,null];
(statearr_40507[(0)] = csasync$proc$state_machine__25652__auto__);

(statearr_40507[(1)] = (1));

return statearr_40507;
});
var csasync$proc$state_machine__25652__auto____1 = (function (state_40494){
while(true){
var ret_value__25653__auto__ = (function (){try{while(true){
var result__25654__auto__ = switch__25651__auto__.call(null,state_40494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25654__auto__;
}
break;
}
}catch (e40508){if((e40508 instanceof Object)){
var ex__25655__auto__ = e40508;
var statearr_40509_40550 = state_40494;
(statearr_40509_40550[(5)] = ex__25655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40551 = state_40494;
state_40494 = G__40551;
continue;
} else {
return ret_value__25653__auto__;
}
break;
}
});
csasync$proc$state_machine__25652__auto__ = function(state_40494){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25652__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25652__auto____1.call(this,state_40494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25652__auto____0;
csasync$proc$state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25652__auto____1;
return csasync$proc$state_machine__25652__auto__;
})()
;})(switch__25651__auto__,c__25672__auto__))
})();
var state__25674__auto__ = (function (){var statearr_40510 = f__25673__auto__.call(null);
(statearr_40510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25672__auto__);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25674__auto__);
});})(c__25672__auto__))
);

return c__25672__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__25672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25672__auto__){
return (function (){
var f__25673__auto__ = (function (){var switch__25651__auto__ = ((function (c__25672__auto__){
return (function (state_40524){
var state_val_40525 = (state_40524[(1)]);
if((state_val_40525 === (1))){
var state_40524__$1 = state_40524;
var statearr_40526_40552 = state_40524__$1;
(statearr_40526_40552[(2)] = null);

(statearr_40526_40552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (2))){
var state_40524__$1 = state_40524;
var statearr_40527_40553 = state_40524__$1;
(statearr_40527_40553[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (3))){
var inst_40522 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40524__$1,inst_40522);
} else {
if((state_val_40525 === (4))){
var inst_40513 = func.call(null,param);
var inst_40514 = cljs.core.async.timeout.call(null,time_out);
var state_40524__$1 = (function (){var statearr_40529 = state_40524;
(statearr_40529[(7)] = inst_40513);

return statearr_40529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40524__$1,(7),inst_40514);
} else {
if((state_val_40525 === (5))){
var state_40524__$1 = state_40524;
var statearr_40530_40554 = state_40524__$1;
(statearr_40530_40554[(2)] = null);

(statearr_40530_40554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (6))){
var inst_40520 = (state_40524[(2)]);
var state_40524__$1 = state_40524;
var statearr_40531_40555 = state_40524__$1;
(statearr_40531_40555[(2)] = inst_40520);

(statearr_40531_40555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40525 === (7))){
var inst_40516 = (state_40524[(2)]);
var state_40524__$1 = (function (){var statearr_40532 = state_40524;
(statearr_40532[(8)] = inst_40516);

return statearr_40532;
})();
var statearr_40533_40556 = state_40524__$1;
(statearr_40533_40556[(2)] = null);

(statearr_40533_40556[(1)] = (2));


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
});})(c__25672__auto__))
;
return ((function (switch__25651__auto__,c__25672__auto__){
return (function() {
var csasync$proc$state_machine__25652__auto__ = null;
var csasync$proc$state_machine__25652__auto____0 = (function (){
var statearr_40537 = [null,null,null,null,null,null,null,null,null];
(statearr_40537[(0)] = csasync$proc$state_machine__25652__auto__);

(statearr_40537[(1)] = (1));

return statearr_40537;
});
var csasync$proc$state_machine__25652__auto____1 = (function (state_40524){
while(true){
var ret_value__25653__auto__ = (function (){try{while(true){
var result__25654__auto__ = switch__25651__auto__.call(null,state_40524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25654__auto__;
}
break;
}
}catch (e40538){if((e40538 instanceof Object)){
var ex__25655__auto__ = e40538;
var statearr_40539_40557 = state_40524;
(statearr_40539_40557[(5)] = ex__25655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40558 = state_40524;
state_40524 = G__40558;
continue;
} else {
return ret_value__25653__auto__;
}
break;
}
});
csasync$proc$state_machine__25652__auto__ = function(state_40524){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25652__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25652__auto____1.call(this,state_40524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25652__auto____0;
csasync$proc$state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25652__auto____1;
return csasync$proc$state_machine__25652__auto__;
})()
;})(switch__25651__auto__,c__25672__auto__))
})();
var state__25674__auto__ = (function (){var statearr_40540 = f__25673__auto__.call(null);
(statearr_40540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25672__auto__);

return statearr_40540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25674__auto__);
});})(c__25672__auto__))
);

return c__25672__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__25672__auto___40643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25672__auto___40643){
return (function (){
var f__25673__auto__ = (function (){var switch__25651__auto__ = ((function (c__25672__auto___40643){
return (function (state_40621){
var state_val_40622 = (state_40621[(1)]);
if((state_val_40622 === (7))){
var inst_40610 = cljs.core.async.timeout.call(null,time_out);
var state_40621__$1 = state_40621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40621__$1,(10),inst_40610);
} else {
if((state_val_40622 === (1))){
var state_40621__$1 = state_40621;
var statearr_40623_40644 = state_40621__$1;
(statearr_40623_40644[(2)] = null);

(statearr_40623_40644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (4))){
var inst_40605 = proc_fn.call(null);
var state_40621__$1 = state_40621;
var statearr_40624_40645 = state_40621__$1;
(statearr_40624_40645[(2)] = inst_40605);

(statearr_40624_40645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (6))){
var inst_40608 = (state_40621[(2)]);
var state_40621__$1 = state_40621;
if(cljs.core.truth_(inst_40608)){
var statearr_40625_40646 = state_40621__$1;
(statearr_40625_40646[(1)] = (7));

} else {
var statearr_40626_40647 = state_40621__$1;
(statearr_40626_40647[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (3))){
var inst_40618 = (state_40621[(2)]);
var inst_40619 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_40621__$1 = (function (){var statearr_40627 = state_40621;
(statearr_40627[(7)] = inst_40618);

return statearr_40627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40621__$1,inst_40619);
} else {
if((state_val_40622 === (2))){
var inst_40603 = (state_40621[(8)]);
var inst_40602 = cljs.core.deref.call(null,status);
var inst_40603__$1 = cljs.core._EQ_.call(null,inst_40602,"RUN");
var state_40621__$1 = (function (){var statearr_40628 = state_40621;
(statearr_40628[(8)] = inst_40603__$1);

return statearr_40628;
})();
if(inst_40603__$1){
var statearr_40629_40648 = state_40621__$1;
(statearr_40629_40648[(1)] = (4));

} else {
var statearr_40630_40649 = state_40621__$1;
(statearr_40630_40649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (9))){
var inst_40616 = (state_40621[(2)]);
var state_40621__$1 = state_40621;
var statearr_40631_40650 = state_40621__$1;
(statearr_40631_40650[(2)] = inst_40616);

(statearr_40631_40650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (5))){
var inst_40603 = (state_40621[(8)]);
var state_40621__$1 = state_40621;
var statearr_40632_40651 = state_40621__$1;
(statearr_40632_40651[(2)] = inst_40603);

(statearr_40632_40651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (10))){
var inst_40612 = (state_40621[(2)]);
var state_40621__$1 = (function (){var statearr_40633 = state_40621;
(statearr_40633[(9)] = inst_40612);

return statearr_40633;
})();
var statearr_40634_40652 = state_40621__$1;
(statearr_40634_40652[(2)] = null);

(statearr_40634_40652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40622 === (8))){
var state_40621__$1 = state_40621;
var statearr_40635_40653 = state_40621__$1;
(statearr_40635_40653[(2)] = null);

(statearr_40635_40653[(1)] = (9));


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
});})(c__25672__auto___40643))
;
return ((function (switch__25651__auto__,c__25672__auto___40643){
return (function() {
var csasync$proc$start_process_$_state_machine__25652__auto__ = null;
var csasync$proc$start_process_$_state_machine__25652__auto____0 = (function (){
var statearr_40639 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40639[(0)] = csasync$proc$start_process_$_state_machine__25652__auto__);

(statearr_40639[(1)] = (1));

return statearr_40639;
});
var csasync$proc$start_process_$_state_machine__25652__auto____1 = (function (state_40621){
while(true){
var ret_value__25653__auto__ = (function (){try{while(true){
var result__25654__auto__ = switch__25651__auto__.call(null,state_40621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25654__auto__;
}
break;
}
}catch (e40640){if((e40640 instanceof Object)){
var ex__25655__auto__ = e40640;
var statearr_40641_40654 = state_40621;
(statearr_40641_40654[(5)] = ex__25655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40655 = state_40621;
state_40621 = G__40655;
continue;
} else {
return ret_value__25653__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25652__auto__ = function(state_40621){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25652__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25652__auto____1.call(this,state_40621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25652__auto____0;
csasync$proc$start_process_$_state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25652__auto____1;
return csasync$proc$start_process_$_state_machine__25652__auto__;
})()
;})(switch__25651__auto__,c__25672__auto___40643))
})();
var state__25674__auto__ = (function (){var statearr_40642 = f__25673__auto__.call(null);
(statearr_40642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25672__auto___40643);

return statearr_40642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25674__auto__);
});})(c__25672__auto___40643))
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
var c__25672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25672__auto__){
return (function (){
var f__25673__auto__ = (function (){var switch__25651__auto__ = ((function (c__25672__auto__){
return (function (state_40676){
var state_val_40677 = (state_40676[(1)]);
if((state_val_40677 === (1))){
var inst_40671 = cljs.core.async.timeout.call(null,time);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(2),inst_40671);
} else {
if((state_val_40677 === (2))){
var inst_40673 = (state_40676[(2)]);
var inst_40674 = func.call(null);
var state_40676__$1 = (function (){var statearr_40678 = state_40676;
(statearr_40678[(7)] = inst_40673);

return statearr_40678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40676__$1,inst_40674);
} else {
return null;
}
}
});})(c__25672__auto__))
;
return ((function (switch__25651__auto__,c__25672__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25652__auto__ = null;
var csasync$proc$delayer_$_state_machine__25652__auto____0 = (function (){
var statearr_40682 = [null,null,null,null,null,null,null,null];
(statearr_40682[(0)] = csasync$proc$delayer_$_state_machine__25652__auto__);

(statearr_40682[(1)] = (1));

return statearr_40682;
});
var csasync$proc$delayer_$_state_machine__25652__auto____1 = (function (state_40676){
while(true){
var ret_value__25653__auto__ = (function (){try{while(true){
var result__25654__auto__ = switch__25651__auto__.call(null,state_40676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25654__auto__;
}
break;
}
}catch (e40683){if((e40683 instanceof Object)){
var ex__25655__auto__ = e40683;
var statearr_40684_40686 = state_40676;
(statearr_40684_40686[(5)] = ex__25655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40687 = state_40676;
state_40676 = G__40687;
continue;
} else {
return ret_value__25653__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25652__auto__ = function(state_40676){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25652__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25652__auto____1.call(this,state_40676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25652__auto____0;
csasync$proc$delayer_$_state_machine__25652__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25652__auto____1;
return csasync$proc$delayer_$_state_machine__25652__auto__;
})()
;})(switch__25651__auto__,c__25672__auto__))
})();
var state__25674__auto__ = (function (){var statearr_40685 = f__25673__auto__.call(null);
(statearr_40685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25672__auto__);

return statearr_40685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25674__auto__);
});})(c__25672__auto__))
);

return c__25672__auto__;
});

//# sourceMappingURL=proc.js.map