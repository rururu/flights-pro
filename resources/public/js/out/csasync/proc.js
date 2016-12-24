// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22655 = [];
var len__20533__auto___22718 = arguments.length;
var i__20534__auto___22719 = (0);
while(true){
if((i__20534__auto___22719 < len__20533__auto___22718)){
args22655.push((arguments[i__20534__auto___22719]));

var G__22720 = (i__20534__auto___22719 + (1));
i__20534__auto___22719 = G__22720;
continue;
} else {
}
break;
}

var G__22657 = args22655.length;
switch (G__22657) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22655.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21595__auto__){
return (function (){
var f__21596__auto__ = (function (){var switch__21574__auto__ = ((function (c__21595__auto__){
return (function (state_22671){
var state_val_22672 = (state_22671[(1)]);
if((state_val_22672 === (1))){
var state_22671__$1 = state_22671;
var statearr_22673_22722 = state_22671__$1;
(statearr_22673_22722[(2)] = null);

(statearr_22673_22722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (2))){
var state_22671__$1 = state_22671;
var statearr_22674_22723 = state_22671__$1;
(statearr_22674_22723[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (3))){
var inst_22669 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22671__$1,inst_22669);
} else {
if((state_val_22672 === (4))){
var inst_22660 = func.call(null);
var inst_22661 = cljs.core.async.timeout.call(null,time_out);
var state_22671__$1 = (function (){var statearr_22676 = state_22671;
(statearr_22676[(7)] = inst_22660);

return statearr_22676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22671__$1,(7),inst_22661);
} else {
if((state_val_22672 === (5))){
var state_22671__$1 = state_22671;
var statearr_22677_22724 = state_22671__$1;
(statearr_22677_22724[(2)] = null);

(statearr_22677_22724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (6))){
var inst_22667 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22678_22725 = state_22671__$1;
(statearr_22678_22725[(2)] = inst_22667);

(statearr_22678_22725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (7))){
var inst_22663 = (state_22671[(2)]);
var state_22671__$1 = (function (){var statearr_22679 = state_22671;
(statearr_22679[(8)] = inst_22663);

return statearr_22679;
})();
var statearr_22680_22726 = state_22671__$1;
(statearr_22680_22726[(2)] = null);

(statearr_22680_22726[(1)] = (2));


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
});})(c__21595__auto__))
;
return ((function (switch__21574__auto__,c__21595__auto__){
return (function() {
var csasync$proc$state_machine__21575__auto__ = null;
var csasync$proc$state_machine__21575__auto____0 = (function (){
var statearr_22684 = [null,null,null,null,null,null,null,null,null];
(statearr_22684[(0)] = csasync$proc$state_machine__21575__auto__);

(statearr_22684[(1)] = (1));

return statearr_22684;
});
var csasync$proc$state_machine__21575__auto____1 = (function (state_22671){
while(true){
var ret_value__21576__auto__ = (function (){try{while(true){
var result__21577__auto__ = switch__21574__auto__.call(null,state_22671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21577__auto__;
}
break;
}
}catch (e22685){if((e22685 instanceof Object)){
var ex__21578__auto__ = e22685;
var statearr_22686_22727 = state_22671;
(statearr_22686_22727[(5)] = ex__21578__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22728 = state_22671;
state_22671 = G__22728;
continue;
} else {
return ret_value__21576__auto__;
}
break;
}
});
csasync$proc$state_machine__21575__auto__ = function(state_22671){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21575__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21575__auto____1.call(this,state_22671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21575__auto____0;
csasync$proc$state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21575__auto____1;
return csasync$proc$state_machine__21575__auto__;
})()
;})(switch__21574__auto__,c__21595__auto__))
})();
var state__21597__auto__ = (function (){var statearr_22687 = f__21596__auto__.call(null);
(statearr_22687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21595__auto__);

return statearr_22687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21597__auto__);
});})(c__21595__auto__))
);

return c__21595__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21595__auto__){
return (function (){
var f__21596__auto__ = (function (){var switch__21574__auto__ = ((function (c__21595__auto__){
return (function (state_22701){
var state_val_22702 = (state_22701[(1)]);
if((state_val_22702 === (1))){
var state_22701__$1 = state_22701;
var statearr_22703_22729 = state_22701__$1;
(statearr_22703_22729[(2)] = null);

(statearr_22703_22729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22702 === (2))){
var state_22701__$1 = state_22701;
var statearr_22704_22730 = state_22701__$1;
(statearr_22704_22730[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22702 === (3))){
var inst_22699 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22701__$1,inst_22699);
} else {
if((state_val_22702 === (4))){
var inst_22690 = func.call(null,param);
var inst_22691 = cljs.core.async.timeout.call(null,time_out);
var state_22701__$1 = (function (){var statearr_22706 = state_22701;
(statearr_22706[(7)] = inst_22690);

return statearr_22706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22701__$1,(7),inst_22691);
} else {
if((state_val_22702 === (5))){
var state_22701__$1 = state_22701;
var statearr_22707_22731 = state_22701__$1;
(statearr_22707_22731[(2)] = null);

(statearr_22707_22731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22702 === (6))){
var inst_22697 = (state_22701[(2)]);
var state_22701__$1 = state_22701;
var statearr_22708_22732 = state_22701__$1;
(statearr_22708_22732[(2)] = inst_22697);

(statearr_22708_22732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22702 === (7))){
var inst_22693 = (state_22701[(2)]);
var state_22701__$1 = (function (){var statearr_22709 = state_22701;
(statearr_22709[(8)] = inst_22693);

return statearr_22709;
})();
var statearr_22710_22733 = state_22701__$1;
(statearr_22710_22733[(2)] = null);

(statearr_22710_22733[(1)] = (2));


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
});})(c__21595__auto__))
;
return ((function (switch__21574__auto__,c__21595__auto__){
return (function() {
var csasync$proc$state_machine__21575__auto__ = null;
var csasync$proc$state_machine__21575__auto____0 = (function (){
var statearr_22714 = [null,null,null,null,null,null,null,null,null];
(statearr_22714[(0)] = csasync$proc$state_machine__21575__auto__);

(statearr_22714[(1)] = (1));

return statearr_22714;
});
var csasync$proc$state_machine__21575__auto____1 = (function (state_22701){
while(true){
var ret_value__21576__auto__ = (function (){try{while(true){
var result__21577__auto__ = switch__21574__auto__.call(null,state_22701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21577__auto__;
}
break;
}
}catch (e22715){if((e22715 instanceof Object)){
var ex__21578__auto__ = e22715;
var statearr_22716_22734 = state_22701;
(statearr_22716_22734[(5)] = ex__21578__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_22701;
state_22701 = G__22735;
continue;
} else {
return ret_value__21576__auto__;
}
break;
}
});
csasync$proc$state_machine__21575__auto__ = function(state_22701){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21575__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21575__auto____1.call(this,state_22701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21575__auto____0;
csasync$proc$state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21575__auto____1;
return csasync$proc$state_machine__21575__auto__;
})()
;})(switch__21574__auto__,c__21595__auto__))
})();
var state__21597__auto__ = (function (){var statearr_22717 = f__21596__auto__.call(null);
(statearr_22717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21595__auto__);

return statearr_22717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21597__auto__);
});})(c__21595__auto__))
);

return c__21595__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21595__auto___22820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21595__auto___22820){
return (function (){
var f__21596__auto__ = (function (){var switch__21574__auto__ = ((function (c__21595__auto___22820){
return (function (state_22798){
var state_val_22799 = (state_22798[(1)]);
if((state_val_22799 === (7))){
var inst_22787 = cljs.core.async.timeout.call(null,time_out);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22798__$1,(10),inst_22787);
} else {
if((state_val_22799 === (1))){
var state_22798__$1 = state_22798;
var statearr_22800_22821 = state_22798__$1;
(statearr_22800_22821[(2)] = null);

(statearr_22800_22821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (4))){
var inst_22782 = proc_fn.call(null);
var state_22798__$1 = state_22798;
var statearr_22801_22822 = state_22798__$1;
(statearr_22801_22822[(2)] = inst_22782);

(statearr_22801_22822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (6))){
var inst_22785 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22785)){
var statearr_22802_22823 = state_22798__$1;
(statearr_22802_22823[(1)] = (7));

} else {
var statearr_22803_22824 = state_22798__$1;
(statearr_22803_22824[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (3))){
var inst_22795 = (state_22798[(2)]);
var inst_22796 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22798__$1 = (function (){var statearr_22804 = state_22798;
(statearr_22804[(7)] = inst_22795);

return statearr_22804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22798__$1,inst_22796);
} else {
if((state_val_22799 === (2))){
var inst_22780 = (state_22798[(8)]);
var inst_22779 = cljs.core.deref.call(null,status);
var inst_22780__$1 = cljs.core._EQ_.call(null,inst_22779,"RUN");
var state_22798__$1 = (function (){var statearr_22805 = state_22798;
(statearr_22805[(8)] = inst_22780__$1);

return statearr_22805;
})();
if(inst_22780__$1){
var statearr_22806_22825 = state_22798__$1;
(statearr_22806_22825[(1)] = (4));

} else {
var statearr_22807_22826 = state_22798__$1;
(statearr_22807_22826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (9))){
var inst_22793 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22808_22827 = state_22798__$1;
(statearr_22808_22827[(2)] = inst_22793);

(statearr_22808_22827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (5))){
var inst_22780 = (state_22798[(8)]);
var state_22798__$1 = state_22798;
var statearr_22809_22828 = state_22798__$1;
(statearr_22809_22828[(2)] = inst_22780);

(statearr_22809_22828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (10))){
var inst_22789 = (state_22798[(2)]);
var state_22798__$1 = (function (){var statearr_22810 = state_22798;
(statearr_22810[(9)] = inst_22789);

return statearr_22810;
})();
var statearr_22811_22829 = state_22798__$1;
(statearr_22811_22829[(2)] = null);

(statearr_22811_22829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (8))){
var state_22798__$1 = state_22798;
var statearr_22812_22830 = state_22798__$1;
(statearr_22812_22830[(2)] = null);

(statearr_22812_22830[(1)] = (9));


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
});})(c__21595__auto___22820))
;
return ((function (switch__21574__auto__,c__21595__auto___22820){
return (function() {
var csasync$proc$start_process_$_state_machine__21575__auto__ = null;
var csasync$proc$start_process_$_state_machine__21575__auto____0 = (function (){
var statearr_22816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22816[(0)] = csasync$proc$start_process_$_state_machine__21575__auto__);

(statearr_22816[(1)] = (1));

return statearr_22816;
});
var csasync$proc$start_process_$_state_machine__21575__auto____1 = (function (state_22798){
while(true){
var ret_value__21576__auto__ = (function (){try{while(true){
var result__21577__auto__ = switch__21574__auto__.call(null,state_22798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21577__auto__;
}
break;
}
}catch (e22817){if((e22817 instanceof Object)){
var ex__21578__auto__ = e22817;
var statearr_22818_22831 = state_22798;
(statearr_22818_22831[(5)] = ex__21578__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22832 = state_22798;
state_22798 = G__22832;
continue;
} else {
return ret_value__21576__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21575__auto__ = function(state_22798){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21575__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21575__auto____1.call(this,state_22798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21575__auto____0;
csasync$proc$start_process_$_state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21575__auto____1;
return csasync$proc$start_process_$_state_machine__21575__auto__;
})()
;})(switch__21574__auto__,c__21595__auto___22820))
})();
var state__21597__auto__ = (function (){var statearr_22819 = f__21596__auto__.call(null);
(statearr_22819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21595__auto___22820);

return statearr_22819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21597__auto__);
});})(c__21595__auto___22820))
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
var c__21595__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21595__auto__){
return (function (){
var f__21596__auto__ = (function (){var switch__21574__auto__ = ((function (c__21595__auto__){
return (function (state_22853){
var state_val_22854 = (state_22853[(1)]);
if((state_val_22854 === (1))){
var inst_22848 = cljs.core.async.timeout.call(null,time);
var state_22853__$1 = state_22853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22853__$1,(2),inst_22848);
} else {
if((state_val_22854 === (2))){
var inst_22850 = (state_22853[(2)]);
var inst_22851 = func.call(null);
var state_22853__$1 = (function (){var statearr_22855 = state_22853;
(statearr_22855[(7)] = inst_22850);

return statearr_22855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22853__$1,inst_22851);
} else {
return null;
}
}
});})(c__21595__auto__))
;
return ((function (switch__21574__auto__,c__21595__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21575__auto__ = null;
var csasync$proc$delayer_$_state_machine__21575__auto____0 = (function (){
var statearr_22859 = [null,null,null,null,null,null,null,null];
(statearr_22859[(0)] = csasync$proc$delayer_$_state_machine__21575__auto__);

(statearr_22859[(1)] = (1));

return statearr_22859;
});
var csasync$proc$delayer_$_state_machine__21575__auto____1 = (function (state_22853){
while(true){
var ret_value__21576__auto__ = (function (){try{while(true){
var result__21577__auto__ = switch__21574__auto__.call(null,state_22853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21577__auto__;
}
break;
}
}catch (e22860){if((e22860 instanceof Object)){
var ex__21578__auto__ = e22860;
var statearr_22861_22863 = state_22853;
(statearr_22861_22863[(5)] = ex__21578__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22864 = state_22853;
state_22853 = G__22864;
continue;
} else {
return ret_value__21576__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21575__auto__ = function(state_22853){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21575__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21575__auto____1.call(this,state_22853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21575__auto____0;
csasync$proc$delayer_$_state_machine__21575__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21575__auto____1;
return csasync$proc$delayer_$_state_machine__21575__auto__;
})()
;})(switch__21574__auto__,c__21595__auto__))
})();
var state__21597__auto__ = (function (){var statearr_22862 = f__21596__auto__.call(null);
(statearr_22862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21595__auto__);

return statearr_22862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21597__auto__);
});})(c__21595__auto__))
);

return c__21595__auto__;
});

//# sourceMappingURL=proc.js.map