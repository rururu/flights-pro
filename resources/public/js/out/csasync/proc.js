// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26531 = [];
var len__23408__auto___26594 = arguments.length;
var i__23409__auto___26595 = (0);
while(true){
if((i__23409__auto___26595 < len__23408__auto___26594)){
args26531.push((arguments[i__23409__auto___26595]));

var G__26596 = (i__23409__auto___26595 + (1));
i__23409__auto___26595 = G__26596;
continue;
} else {
}
break;
}

var G__26533 = args26531.length;
switch (G__26533) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26531.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24387__auto__){
return (function (){
var f__24388__auto__ = (function (){var switch__24366__auto__ = ((function (c__24387__auto__){
return (function (state_26547){
var state_val_26548 = (state_26547[(1)]);
if((state_val_26548 === (1))){
var state_26547__$1 = state_26547;
var statearr_26549_26598 = state_26547__$1;
(statearr_26549_26598[(2)] = null);

(statearr_26549_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26548 === (2))){
var state_26547__$1 = state_26547;
var statearr_26550_26599 = state_26547__$1;
(statearr_26550_26599[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26548 === (3))){
var inst_26545 = (state_26547[(2)]);
var state_26547__$1 = state_26547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26547__$1,inst_26545);
} else {
if((state_val_26548 === (4))){
var inst_26536 = func.call(null);
var inst_26537 = cljs.core.async.timeout.call(null,time_out);
var state_26547__$1 = (function (){var statearr_26552 = state_26547;
(statearr_26552[(7)] = inst_26536);

return statearr_26552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26547__$1,(7),inst_26537);
} else {
if((state_val_26548 === (5))){
var state_26547__$1 = state_26547;
var statearr_26553_26600 = state_26547__$1;
(statearr_26553_26600[(2)] = null);

(statearr_26553_26600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26548 === (6))){
var inst_26543 = (state_26547[(2)]);
var state_26547__$1 = state_26547;
var statearr_26554_26601 = state_26547__$1;
(statearr_26554_26601[(2)] = inst_26543);

(statearr_26554_26601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26548 === (7))){
var inst_26539 = (state_26547[(2)]);
var state_26547__$1 = (function (){var statearr_26555 = state_26547;
(statearr_26555[(8)] = inst_26539);

return statearr_26555;
})();
var statearr_26556_26602 = state_26547__$1;
(statearr_26556_26602[(2)] = null);

(statearr_26556_26602[(1)] = (2));


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
});})(c__24387__auto__))
;
return ((function (switch__24366__auto__,c__24387__auto__){
return (function() {
var csasync$proc$state_machine__24367__auto__ = null;
var csasync$proc$state_machine__24367__auto____0 = (function (){
var statearr_26560 = [null,null,null,null,null,null,null,null,null];
(statearr_26560[(0)] = csasync$proc$state_machine__24367__auto__);

(statearr_26560[(1)] = (1));

return statearr_26560;
});
var csasync$proc$state_machine__24367__auto____1 = (function (state_26547){
while(true){
var ret_value__24368__auto__ = (function (){try{while(true){
var result__24369__auto__ = switch__24366__auto__.call(null,state_26547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24369__auto__;
}
break;
}
}catch (e26561){if((e26561 instanceof Object)){
var ex__24370__auto__ = e26561;
var statearr_26562_26603 = state_26547;
(statearr_26562_26603[(5)] = ex__24370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26604 = state_26547;
state_26547 = G__26604;
continue;
} else {
return ret_value__24368__auto__;
}
break;
}
});
csasync$proc$state_machine__24367__auto__ = function(state_26547){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24367__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24367__auto____1.call(this,state_26547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24367__auto____0;
csasync$proc$state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24367__auto____1;
return csasync$proc$state_machine__24367__auto__;
})()
;})(switch__24366__auto__,c__24387__auto__))
})();
var state__24389__auto__ = (function (){var statearr_26563 = f__24388__auto__.call(null);
(statearr_26563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24387__auto__);

return statearr_26563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24389__auto__);
});})(c__24387__auto__))
);

return c__24387__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24387__auto__){
return (function (){
var f__24388__auto__ = (function (){var switch__24366__auto__ = ((function (c__24387__auto__){
return (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (1))){
var state_26577__$1 = state_26577;
var statearr_26579_26605 = state_26577__$1;
(statearr_26579_26605[(2)] = null);

(statearr_26579_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
var statearr_26580_26606 = state_26577__$1;
(statearr_26580_26606[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (4))){
var inst_26566 = func.call(null,param);
var inst_26567 = cljs.core.async.timeout.call(null,time_out);
var state_26577__$1 = (function (){var statearr_26582 = state_26577;
(statearr_26582[(7)] = inst_26566);

return statearr_26582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(7),inst_26567);
} else {
if((state_val_26578 === (5))){
var state_26577__$1 = state_26577;
var statearr_26583_26607 = state_26577__$1;
(statearr_26583_26607[(2)] = null);

(statearr_26583_26607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26584_26608 = state_26577__$1;
(statearr_26584_26608[(2)] = inst_26573);

(statearr_26584_26608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (7))){
var inst_26569 = (state_26577[(2)]);
var state_26577__$1 = (function (){var statearr_26585 = state_26577;
(statearr_26585[(8)] = inst_26569);

return statearr_26585;
})();
var statearr_26586_26609 = state_26577__$1;
(statearr_26586_26609[(2)] = null);

(statearr_26586_26609[(1)] = (2));


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
});})(c__24387__auto__))
;
return ((function (switch__24366__auto__,c__24387__auto__){
return (function() {
var csasync$proc$state_machine__24367__auto__ = null;
var csasync$proc$state_machine__24367__auto____0 = (function (){
var statearr_26590 = [null,null,null,null,null,null,null,null,null];
(statearr_26590[(0)] = csasync$proc$state_machine__24367__auto__);

(statearr_26590[(1)] = (1));

return statearr_26590;
});
var csasync$proc$state_machine__24367__auto____1 = (function (state_26577){
while(true){
var ret_value__24368__auto__ = (function (){try{while(true){
var result__24369__auto__ = switch__24366__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24369__auto__;
}
break;
}
}catch (e26591){if((e26591 instanceof Object)){
var ex__24370__auto__ = e26591;
var statearr_26592_26610 = state_26577;
(statearr_26592_26610[(5)] = ex__24370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26611 = state_26577;
state_26577 = G__26611;
continue;
} else {
return ret_value__24368__auto__;
}
break;
}
});
csasync$proc$state_machine__24367__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24367__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24367__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24367__auto____0;
csasync$proc$state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24367__auto____1;
return csasync$proc$state_machine__24367__auto__;
})()
;})(switch__24366__auto__,c__24387__auto__))
})();
var state__24389__auto__ = (function (){var statearr_26593 = f__24388__auto__.call(null);
(statearr_26593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24387__auto__);

return statearr_26593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24389__auto__);
});})(c__24387__auto__))
);

return c__24387__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24387__auto___26720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24387__auto___26720){
return (function (){
var f__24388__auto__ = (function (){var switch__24366__auto__ = ((function (c__24387__auto___26720){
return (function (state_26693){
var state_val_26694 = (state_26693[(1)]);
if((state_val_26694 === (7))){
var inst_26675 = cljs.core.async.timeout.call(null,time_out);
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26693__$1,(10),inst_26675);
} else {
if((state_val_26694 === (1))){
var state_26693__$1 = state_26693;
var statearr_26695_26721 = state_26693__$1;
(statearr_26695_26721[(2)] = null);

(statearr_26695_26721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (4))){
var inst_26670 = proc_fn.call(null);
var state_26693__$1 = state_26693;
var statearr_26696_26722 = state_26693__$1;
(statearr_26696_26722[(2)] = inst_26670);

(statearr_26696_26722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (13))){
var inst_26690 = (state_26693[(2)]);
var inst_26691 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26693__$1 = (function (){var statearr_26697 = state_26693;
(statearr_26697[(7)] = inst_26690);

return statearr_26697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26693__$1,inst_26691);
} else {
if((state_val_26694 === (6))){
var inst_26673 = (state_26693[(2)]);
var state_26693__$1 = state_26693;
if(cljs.core.truth_(inst_26673)){
var statearr_26698_26723 = state_26693__$1;
(statearr_26698_26723[(1)] = (7));

} else {
var statearr_26699_26724 = state_26693__$1;
(statearr_26699_26724[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (3))){
var inst_26683 = (state_26693[(2)]);
var inst_26684 = (final_fun == null);
var inst_26685 = cljs.core.not.call(null,inst_26684);
var state_26693__$1 = (function (){var statearr_26700 = state_26693;
(statearr_26700[(8)] = inst_26683);

return statearr_26700;
})();
if(inst_26685){
var statearr_26701_26725 = state_26693__$1;
(statearr_26701_26725[(1)] = (11));

} else {
var statearr_26702_26726 = state_26693__$1;
(statearr_26702_26726[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (12))){
var state_26693__$1 = state_26693;
var statearr_26703_26727 = state_26693__$1;
(statearr_26703_26727[(2)] = null);

(statearr_26703_26727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (2))){
var inst_26668 = (state_26693[(9)]);
var inst_26667 = cljs.core.deref.call(null,status);
var inst_26668__$1 = cljs.core._EQ_.call(null,inst_26667,"RUN");
var state_26693__$1 = (function (){var statearr_26704 = state_26693;
(statearr_26704[(9)] = inst_26668__$1);

return statearr_26704;
})();
if(inst_26668__$1){
var statearr_26705_26728 = state_26693__$1;
(statearr_26705_26728[(1)] = (4));

} else {
var statearr_26706_26729 = state_26693__$1;
(statearr_26706_26729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (11))){
var inst_26687 = final_fun.call(null);
var state_26693__$1 = state_26693;
var statearr_26707_26730 = state_26693__$1;
(statearr_26707_26730[(2)] = inst_26687);

(statearr_26707_26730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (9))){
var inst_26681 = (state_26693[(2)]);
var state_26693__$1 = state_26693;
var statearr_26708_26731 = state_26693__$1;
(statearr_26708_26731[(2)] = inst_26681);

(statearr_26708_26731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (5))){
var inst_26668 = (state_26693[(9)]);
var state_26693__$1 = state_26693;
var statearr_26709_26732 = state_26693__$1;
(statearr_26709_26732[(2)] = inst_26668);

(statearr_26709_26732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (10))){
var inst_26677 = (state_26693[(2)]);
var state_26693__$1 = (function (){var statearr_26710 = state_26693;
(statearr_26710[(10)] = inst_26677);

return statearr_26710;
})();
var statearr_26711_26733 = state_26693__$1;
(statearr_26711_26733[(2)] = null);

(statearr_26711_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26694 === (8))){
var state_26693__$1 = state_26693;
var statearr_26712_26734 = state_26693__$1;
(statearr_26712_26734[(2)] = null);

(statearr_26712_26734[(1)] = (9));


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
});})(c__24387__auto___26720))
;
return ((function (switch__24366__auto__,c__24387__auto___26720){
return (function() {
var csasync$proc$start_process_$_state_machine__24367__auto__ = null;
var csasync$proc$start_process_$_state_machine__24367__auto____0 = (function (){
var statearr_26716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26716[(0)] = csasync$proc$start_process_$_state_machine__24367__auto__);

(statearr_26716[(1)] = (1));

return statearr_26716;
});
var csasync$proc$start_process_$_state_machine__24367__auto____1 = (function (state_26693){
while(true){
var ret_value__24368__auto__ = (function (){try{while(true){
var result__24369__auto__ = switch__24366__auto__.call(null,state_26693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24369__auto__;
}
break;
}
}catch (e26717){if((e26717 instanceof Object)){
var ex__24370__auto__ = e26717;
var statearr_26718_26735 = state_26693;
(statearr_26718_26735[(5)] = ex__24370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26736 = state_26693;
state_26693 = G__26736;
continue;
} else {
return ret_value__24368__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24367__auto__ = function(state_26693){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24367__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24367__auto____1.call(this,state_26693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24367__auto____0;
csasync$proc$start_process_$_state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24367__auto____1;
return csasync$proc$start_process_$_state_machine__24367__auto__;
})()
;})(switch__24366__auto__,c__24387__auto___26720))
})();
var state__24389__auto__ = (function (){var statearr_26719 = f__24388__auto__.call(null);
(statearr_26719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24387__auto___26720);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24389__auto__);
});})(c__24387__auto___26720))
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
var c__24387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24387__auto__){
return (function (){
var f__24388__auto__ = (function (){var switch__24366__auto__ = ((function (c__24387__auto__){
return (function (state_26757){
var state_val_26758 = (state_26757[(1)]);
if((state_val_26758 === (1))){
var inst_26752 = cljs.core.async.timeout.call(null,time);
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(2),inst_26752);
} else {
if((state_val_26758 === (2))){
var inst_26754 = (state_26757[(2)]);
var inst_26755 = func.call(null);
var state_26757__$1 = (function (){var statearr_26759 = state_26757;
(statearr_26759[(7)] = inst_26754);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else {
return null;
}
}
});})(c__24387__auto__))
;
return ((function (switch__24366__auto__,c__24387__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24367__auto__ = null;
var csasync$proc$delayer_$_state_machine__24367__auto____0 = (function (){
var statearr_26763 = [null,null,null,null,null,null,null,null];
(statearr_26763[(0)] = csasync$proc$delayer_$_state_machine__24367__auto__);

(statearr_26763[(1)] = (1));

return statearr_26763;
});
var csasync$proc$delayer_$_state_machine__24367__auto____1 = (function (state_26757){
while(true){
var ret_value__24368__auto__ = (function (){try{while(true){
var result__24369__auto__ = switch__24366__auto__.call(null,state_26757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24369__auto__;
}
break;
}
}catch (e26764){if((e26764 instanceof Object)){
var ex__24370__auto__ = e26764;
var statearr_26765_26767 = state_26757;
(statearr_26765_26767[(5)] = ex__24370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26768 = state_26757;
state_26757 = G__26768;
continue;
} else {
return ret_value__24368__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24367__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24367__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24367__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24367__auto____0;
csasync$proc$delayer_$_state_machine__24367__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24367__auto____1;
return csasync$proc$delayer_$_state_machine__24367__auto__;
})()
;})(switch__24366__auto__,c__24387__auto__))
})();
var state__24389__auto__ = (function (){var statearr_26766 = f__24388__auto__.call(null);
(statearr_26766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24387__auto__);

return statearr_26766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24389__auto__);
});})(c__24387__auto__))
);

return c__24387__auto__;
});

//# sourceMappingURL=proc.js.map