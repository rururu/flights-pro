// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args30634 = [];
var len__21677__auto___30697 = arguments.length;
var i__21678__auto___30698 = (0);
while(true){
if((i__21678__auto___30698 < len__21677__auto___30697)){
args30634.push((arguments[i__21678__auto___30698]));

var G__30699 = (i__21678__auto___30698 + (1));
i__21678__auto___30698 = G__30699;
continue;
} else {
}
break;
}

var G__30636 = args30634.length;
switch (G__30636) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30634.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22753__auto__){
return (function (){
var f__22754__auto__ = (function (){var switch__22732__auto__ = ((function (c__22753__auto__){
return (function (state_30650){
var state_val_30651 = (state_30650[(1)]);
if((state_val_30651 === (1))){
var state_30650__$1 = state_30650;
var statearr_30652_30701 = state_30650__$1;
(statearr_30652_30701[(2)] = null);

(statearr_30652_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (2))){
var state_30650__$1 = state_30650;
var statearr_30653_30702 = state_30650__$1;
(statearr_30653_30702[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30648 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30650__$1,inst_30648);
} else {
if((state_val_30651 === (4))){
var inst_30639 = func.call(null);
var inst_30640 = cljs.core.async.timeout.call(null,time_out);
var state_30650__$1 = (function (){var statearr_30655 = state_30650;
(statearr_30655[(7)] = inst_30639);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(7),inst_30640);
} else {
if((state_val_30651 === (5))){
var state_30650__$1 = state_30650;
var statearr_30656_30703 = state_30650__$1;
(statearr_30656_30703[(2)] = null);

(statearr_30656_30703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (6))){
var inst_30646 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30657_30704 = state_30650__$1;
(statearr_30657_30704[(2)] = inst_30646);

(statearr_30657_30704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (7))){
var inst_30642 = (state_30650[(2)]);
var state_30650__$1 = (function (){var statearr_30658 = state_30650;
(statearr_30658[(8)] = inst_30642);

return statearr_30658;
})();
var statearr_30659_30705 = state_30650__$1;
(statearr_30659_30705[(2)] = null);

(statearr_30659_30705[(1)] = (2));


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
});})(c__22753__auto__))
;
return ((function (switch__22732__auto__,c__22753__auto__){
return (function() {
var csasync$proc$state_machine__22733__auto__ = null;
var csasync$proc$state_machine__22733__auto____0 = (function (){
var statearr_30663 = [null,null,null,null,null,null,null,null,null];
(statearr_30663[(0)] = csasync$proc$state_machine__22733__auto__);

(statearr_30663[(1)] = (1));

return statearr_30663;
});
var csasync$proc$state_machine__22733__auto____1 = (function (state_30650){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30664){if((e30664 instanceof Object)){
var ex__22736__auto__ = e30664;
var statearr_30665_30706 = state_30650;
(statearr_30665_30706[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30707 = state_30650;
state_30650 = G__30707;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
csasync$proc$state_machine__22733__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22733__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22733__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22733__auto____0;
csasync$proc$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22733__auto____1;
return csasync$proc$state_machine__22733__auto__;
})()
;})(switch__22732__auto__,c__22753__auto__))
})();
var state__22755__auto__ = (function (){var statearr_30666 = f__22754__auto__.call(null);
(statearr_30666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22753__auto__);

return statearr_30666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22755__auto__);
});})(c__22753__auto__))
);

return c__22753__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22753__auto__){
return (function (){
var f__22754__auto__ = (function (){var switch__22732__auto__ = ((function (c__22753__auto__){
return (function (state_30680){
var state_val_30681 = (state_30680[(1)]);
if((state_val_30681 === (1))){
var state_30680__$1 = state_30680;
var statearr_30682_30708 = state_30680__$1;
(statearr_30682_30708[(2)] = null);

(statearr_30682_30708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (2))){
var state_30680__$1 = state_30680;
var statearr_30683_30709 = state_30680__$1;
(statearr_30683_30709[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (3))){
var inst_30678 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30680__$1,inst_30678);
} else {
if((state_val_30681 === (4))){
var inst_30669 = func.call(null,param);
var inst_30670 = cljs.core.async.timeout.call(null,time_out);
var state_30680__$1 = (function (){var statearr_30685 = state_30680;
(statearr_30685[(7)] = inst_30669);

return statearr_30685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30680__$1,(7),inst_30670);
} else {
if((state_val_30681 === (5))){
var state_30680__$1 = state_30680;
var statearr_30686_30710 = state_30680__$1;
(statearr_30686_30710[(2)] = null);

(statearr_30686_30710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (6))){
var inst_30676 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30687_30711 = state_30680__$1;
(statearr_30687_30711[(2)] = inst_30676);

(statearr_30687_30711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (7))){
var inst_30672 = (state_30680[(2)]);
var state_30680__$1 = (function (){var statearr_30688 = state_30680;
(statearr_30688[(8)] = inst_30672);

return statearr_30688;
})();
var statearr_30689_30712 = state_30680__$1;
(statearr_30689_30712[(2)] = null);

(statearr_30689_30712[(1)] = (2));


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
});})(c__22753__auto__))
;
return ((function (switch__22732__auto__,c__22753__auto__){
return (function() {
var csasync$proc$state_machine__22733__auto__ = null;
var csasync$proc$state_machine__22733__auto____0 = (function (){
var statearr_30693 = [null,null,null,null,null,null,null,null,null];
(statearr_30693[(0)] = csasync$proc$state_machine__22733__auto__);

(statearr_30693[(1)] = (1));

return statearr_30693;
});
var csasync$proc$state_machine__22733__auto____1 = (function (state_30680){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30694){if((e30694 instanceof Object)){
var ex__22736__auto__ = e30694;
var statearr_30695_30713 = state_30680;
(statearr_30695_30713[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30714 = state_30680;
state_30680 = G__30714;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
csasync$proc$state_machine__22733__auto__ = function(state_30680){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22733__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22733__auto____1.call(this,state_30680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22733__auto____0;
csasync$proc$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22733__auto____1;
return csasync$proc$state_machine__22733__auto__;
})()
;})(switch__22732__auto__,c__22753__auto__))
})();
var state__22755__auto__ = (function (){var statearr_30696 = f__22754__auto__.call(null);
(statearr_30696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22753__auto__);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22755__auto__);
});})(c__22753__auto__))
);

return c__22753__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22753__auto___30799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22753__auto___30799){
return (function (){
var f__22754__auto__ = (function (){var switch__22732__auto__ = ((function (c__22753__auto___30799){
return (function (state_30777){
var state_val_30778 = (state_30777[(1)]);
if((state_val_30778 === (7))){
var inst_30766 = cljs.core.async.timeout.call(null,time_out);
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30777__$1,(10),inst_30766);
} else {
if((state_val_30778 === (1))){
var state_30777__$1 = state_30777;
var statearr_30779_30800 = state_30777__$1;
(statearr_30779_30800[(2)] = null);

(statearr_30779_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (4))){
var inst_30761 = proc_fn.call(null);
var state_30777__$1 = state_30777;
var statearr_30780_30801 = state_30777__$1;
(statearr_30780_30801[(2)] = inst_30761);

(statearr_30780_30801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (6))){
var inst_30764 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30764)){
var statearr_30781_30802 = state_30777__$1;
(statearr_30781_30802[(1)] = (7));

} else {
var statearr_30782_30803 = state_30777__$1;
(statearr_30782_30803[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (3))){
var inst_30774 = (state_30777[(2)]);
var inst_30775 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_30777__$1 = (function (){var statearr_30783 = state_30777;
(statearr_30783[(7)] = inst_30774);

return statearr_30783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30777__$1,inst_30775);
} else {
if((state_val_30778 === (2))){
var inst_30759 = (state_30777[(8)]);
var inst_30758 = cljs.core.deref.call(null,status);
var inst_30759__$1 = cljs.core._EQ_.call(null,inst_30758,"RUN");
var state_30777__$1 = (function (){var statearr_30784 = state_30777;
(statearr_30784[(8)] = inst_30759__$1);

return statearr_30784;
})();
if(inst_30759__$1){
var statearr_30785_30804 = state_30777__$1;
(statearr_30785_30804[(1)] = (4));

} else {
var statearr_30786_30805 = state_30777__$1;
(statearr_30786_30805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (9))){
var inst_30772 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30787_30806 = state_30777__$1;
(statearr_30787_30806[(2)] = inst_30772);

(statearr_30787_30806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (5))){
var inst_30759 = (state_30777[(8)]);
var state_30777__$1 = state_30777;
var statearr_30788_30807 = state_30777__$1;
(statearr_30788_30807[(2)] = inst_30759);

(statearr_30788_30807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (10))){
var inst_30768 = (state_30777[(2)]);
var state_30777__$1 = (function (){var statearr_30789 = state_30777;
(statearr_30789[(9)] = inst_30768);

return statearr_30789;
})();
var statearr_30790_30808 = state_30777__$1;
(statearr_30790_30808[(2)] = null);

(statearr_30790_30808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (8))){
var state_30777__$1 = state_30777;
var statearr_30791_30809 = state_30777__$1;
(statearr_30791_30809[(2)] = null);

(statearr_30791_30809[(1)] = (9));


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
});})(c__22753__auto___30799))
;
return ((function (switch__22732__auto__,c__22753__auto___30799){
return (function() {
var csasync$proc$start_process_$_state_machine__22733__auto__ = null;
var csasync$proc$start_process_$_state_machine__22733__auto____0 = (function (){
var statearr_30795 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30795[(0)] = csasync$proc$start_process_$_state_machine__22733__auto__);

(statearr_30795[(1)] = (1));

return statearr_30795;
});
var csasync$proc$start_process_$_state_machine__22733__auto____1 = (function (state_30777){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30796){if((e30796 instanceof Object)){
var ex__22736__auto__ = e30796;
var statearr_30797_30810 = state_30777;
(statearr_30797_30810[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30811 = state_30777;
state_30777 = G__30811;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22733__auto__ = function(state_30777){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22733__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22733__auto____1.call(this,state_30777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22733__auto____0;
csasync$proc$start_process_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22733__auto____1;
return csasync$proc$start_process_$_state_machine__22733__auto__;
})()
;})(switch__22732__auto__,c__22753__auto___30799))
})();
var state__22755__auto__ = (function (){var statearr_30798 = f__22754__auto__.call(null);
(statearr_30798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22753__auto___30799);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22755__auto__);
});})(c__22753__auto___30799))
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
var c__22753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22753__auto__){
return (function (){
var f__22754__auto__ = (function (){var switch__22732__auto__ = ((function (c__22753__auto__){
return (function (state_30832){
var state_val_30833 = (state_30832[(1)]);
if((state_val_30833 === (1))){
var inst_30827 = cljs.core.async.timeout.call(null,time);
var state_30832__$1 = state_30832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30832__$1,(2),inst_30827);
} else {
if((state_val_30833 === (2))){
var inst_30829 = (state_30832[(2)]);
var inst_30830 = func.call(null);
var state_30832__$1 = (function (){var statearr_30834 = state_30832;
(statearr_30834[(7)] = inst_30829);

return statearr_30834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30832__$1,inst_30830);
} else {
return null;
}
}
});})(c__22753__auto__))
;
return ((function (switch__22732__auto__,c__22753__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22733__auto__ = null;
var csasync$proc$delayer_$_state_machine__22733__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = csasync$proc$delayer_$_state_machine__22733__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var csasync$proc$delayer_$_state_machine__22733__auto____1 = (function (state_30832){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30839){if((e30839 instanceof Object)){
var ex__22736__auto__ = e30839;
var statearr_30840_30842 = state_30832;
(statearr_30840_30842[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30843 = state_30832;
state_30832 = G__30843;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22733__auto__ = function(state_30832){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22733__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22733__auto____1.call(this,state_30832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22733__auto____0;
csasync$proc$delayer_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22733__auto____1;
return csasync$proc$delayer_$_state_machine__22733__auto__;
})()
;})(switch__22732__auto__,c__22753__auto__))
})();
var state__22755__auto__ = (function (){var statearr_30841 = f__22754__auto__.call(null);
(statearr_30841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22753__auto__);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22755__auto__);
});})(c__22753__auto__))
);

return c__22753__auto__;
});

//# sourceMappingURL=proc.js.map