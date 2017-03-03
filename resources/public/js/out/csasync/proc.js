// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25690 = [];
var len__24569__auto___25753 = arguments.length;
var i__24570__auto___25754 = (0);
while(true){
if((i__24570__auto___25754 < len__24569__auto___25753)){
args25690.push((arguments[i__24570__auto___25754]));

var G__25755 = (i__24570__auto___25754 + (1));
i__24570__auto___25754 = G__25755;
continue;
} else {
}
break;
}

var G__25692 = args25690.length;
switch (G__25692) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25690.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__25645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25645__auto__){
return (function (){
var f__25646__auto__ = (function (){var switch__25624__auto__ = ((function (c__25645__auto__){
return (function (state_25706){
var state_val_25707 = (state_25706[(1)]);
if((state_val_25707 === (1))){
var state_25706__$1 = state_25706;
var statearr_25708_25757 = state_25706__$1;
(statearr_25708_25757[(2)] = null);

(statearr_25708_25757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25707 === (2))){
var state_25706__$1 = state_25706;
var statearr_25709_25758 = state_25706__$1;
(statearr_25709_25758[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25707 === (3))){
var inst_25704 = (state_25706[(2)]);
var state_25706__$1 = state_25706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25706__$1,inst_25704);
} else {
if((state_val_25707 === (4))){
var inst_25695 = func.call(null);
var inst_25696 = cljs.core.async.timeout.call(null,time_out);
var state_25706__$1 = (function (){var statearr_25711 = state_25706;
(statearr_25711[(7)] = inst_25695);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25706__$1,(7),inst_25696);
} else {
if((state_val_25707 === (5))){
var state_25706__$1 = state_25706;
var statearr_25712_25759 = state_25706__$1;
(statearr_25712_25759[(2)] = null);

(statearr_25712_25759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25707 === (6))){
var inst_25702 = (state_25706[(2)]);
var state_25706__$1 = state_25706;
var statearr_25713_25760 = state_25706__$1;
(statearr_25713_25760[(2)] = inst_25702);

(statearr_25713_25760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25707 === (7))){
var inst_25698 = (state_25706[(2)]);
var state_25706__$1 = (function (){var statearr_25714 = state_25706;
(statearr_25714[(8)] = inst_25698);

return statearr_25714;
})();
var statearr_25715_25761 = state_25706__$1;
(statearr_25715_25761[(2)] = null);

(statearr_25715_25761[(1)] = (2));


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
});})(c__25645__auto__))
;
return ((function (switch__25624__auto__,c__25645__auto__){
return (function() {
var csasync$proc$state_machine__25625__auto__ = null;
var csasync$proc$state_machine__25625__auto____0 = (function (){
var statearr_25719 = [null,null,null,null,null,null,null,null,null];
(statearr_25719[(0)] = csasync$proc$state_machine__25625__auto__);

(statearr_25719[(1)] = (1));

return statearr_25719;
});
var csasync$proc$state_machine__25625__auto____1 = (function (state_25706){
while(true){
var ret_value__25626__auto__ = (function (){try{while(true){
var result__25627__auto__ = switch__25624__auto__.call(null,state_25706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25627__auto__;
}
break;
}
}catch (e25720){if((e25720 instanceof Object)){
var ex__25628__auto__ = e25720;
var statearr_25721_25762 = state_25706;
(statearr_25721_25762[(5)] = ex__25628__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25763 = state_25706;
state_25706 = G__25763;
continue;
} else {
return ret_value__25626__auto__;
}
break;
}
});
csasync$proc$state_machine__25625__auto__ = function(state_25706){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25625__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25625__auto____1.call(this,state_25706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25625__auto____0;
csasync$proc$state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25625__auto____1;
return csasync$proc$state_machine__25625__auto__;
})()
;})(switch__25624__auto__,c__25645__auto__))
})();
var state__25647__auto__ = (function (){var statearr_25722 = f__25646__auto__.call(null);
(statearr_25722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25645__auto__);

return statearr_25722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25647__auto__);
});})(c__25645__auto__))
);

return c__25645__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__25645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25645__auto__){
return (function (){
var f__25646__auto__ = (function (){var switch__25624__auto__ = ((function (c__25645__auto__){
return (function (state_25736){
var state_val_25737 = (state_25736[(1)]);
if((state_val_25737 === (1))){
var state_25736__$1 = state_25736;
var statearr_25738_25764 = state_25736__$1;
(statearr_25738_25764[(2)] = null);

(statearr_25738_25764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (2))){
var state_25736__$1 = state_25736;
var statearr_25739_25765 = state_25736__$1;
(statearr_25739_25765[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (3))){
var inst_25734 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25736__$1,inst_25734);
} else {
if((state_val_25737 === (4))){
var inst_25725 = func.call(null,param);
var inst_25726 = cljs.core.async.timeout.call(null,time_out);
var state_25736__$1 = (function (){var statearr_25741 = state_25736;
(statearr_25741[(7)] = inst_25725);

return statearr_25741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25736__$1,(7),inst_25726);
} else {
if((state_val_25737 === (5))){
var state_25736__$1 = state_25736;
var statearr_25742_25766 = state_25736__$1;
(statearr_25742_25766[(2)] = null);

(statearr_25742_25766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (6))){
var inst_25732 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25743_25767 = state_25736__$1;
(statearr_25743_25767[(2)] = inst_25732);

(statearr_25743_25767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (7))){
var inst_25728 = (state_25736[(2)]);
var state_25736__$1 = (function (){var statearr_25744 = state_25736;
(statearr_25744[(8)] = inst_25728);

return statearr_25744;
})();
var statearr_25745_25768 = state_25736__$1;
(statearr_25745_25768[(2)] = null);

(statearr_25745_25768[(1)] = (2));


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
});})(c__25645__auto__))
;
return ((function (switch__25624__auto__,c__25645__auto__){
return (function() {
var csasync$proc$state_machine__25625__auto__ = null;
var csasync$proc$state_machine__25625__auto____0 = (function (){
var statearr_25749 = [null,null,null,null,null,null,null,null,null];
(statearr_25749[(0)] = csasync$proc$state_machine__25625__auto__);

(statearr_25749[(1)] = (1));

return statearr_25749;
});
var csasync$proc$state_machine__25625__auto____1 = (function (state_25736){
while(true){
var ret_value__25626__auto__ = (function (){try{while(true){
var result__25627__auto__ = switch__25624__auto__.call(null,state_25736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25627__auto__;
}
break;
}
}catch (e25750){if((e25750 instanceof Object)){
var ex__25628__auto__ = e25750;
var statearr_25751_25769 = state_25736;
(statearr_25751_25769[(5)] = ex__25628__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25770 = state_25736;
state_25736 = G__25770;
continue;
} else {
return ret_value__25626__auto__;
}
break;
}
});
csasync$proc$state_machine__25625__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25625__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25625__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25625__auto____0;
csasync$proc$state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25625__auto____1;
return csasync$proc$state_machine__25625__auto__;
})()
;})(switch__25624__auto__,c__25645__auto__))
})();
var state__25647__auto__ = (function (){var statearr_25752 = f__25646__auto__.call(null);
(statearr_25752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25645__auto__);

return statearr_25752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25647__auto__);
});})(c__25645__auto__))
);

return c__25645__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__25645__auto___25855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25645__auto___25855){
return (function (){
var f__25646__auto__ = (function (){var switch__25624__auto__ = ((function (c__25645__auto___25855){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (7))){
var inst_25822 = cljs.core.async.timeout.call(null,time_out);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(10),inst_25822);
} else {
if((state_val_25834 === (1))){
var state_25833__$1 = state_25833;
var statearr_25835_25856 = state_25833__$1;
(statearr_25835_25856[(2)] = null);

(statearr_25835_25856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (4))){
var inst_25817 = proc_fn.call(null);
var state_25833__$1 = state_25833;
var statearr_25836_25857 = state_25833__$1;
(statearr_25836_25857[(2)] = inst_25817);

(statearr_25836_25857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (6))){
var inst_25820 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
if(cljs.core.truth_(inst_25820)){
var statearr_25837_25858 = state_25833__$1;
(statearr_25837_25858[(1)] = (7));

} else {
var statearr_25838_25859 = state_25833__$1;
(statearr_25838_25859[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (3))){
var inst_25830 = (state_25833[(2)]);
var inst_25831 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25833__$1 = (function (){var statearr_25839 = state_25833;
(statearr_25839[(7)] = inst_25830);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
if((state_val_25834 === (2))){
var inst_25815 = (state_25833[(8)]);
var inst_25814 = cljs.core.deref.call(null,status);
var inst_25815__$1 = cljs.core._EQ_.call(null,inst_25814,"RUN");
var state_25833__$1 = (function (){var statearr_25840 = state_25833;
(statearr_25840[(8)] = inst_25815__$1);

return statearr_25840;
})();
if(inst_25815__$1){
var statearr_25841_25860 = state_25833__$1;
(statearr_25841_25860[(1)] = (4));

} else {
var statearr_25842_25861 = state_25833__$1;
(statearr_25842_25861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (9))){
var inst_25828 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25843_25862 = state_25833__$1;
(statearr_25843_25862[(2)] = inst_25828);

(statearr_25843_25862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (5))){
var inst_25815 = (state_25833[(8)]);
var state_25833__$1 = state_25833;
var statearr_25844_25863 = state_25833__$1;
(statearr_25844_25863[(2)] = inst_25815);

(statearr_25844_25863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (10))){
var inst_25824 = (state_25833[(2)]);
var state_25833__$1 = (function (){var statearr_25845 = state_25833;
(statearr_25845[(9)] = inst_25824);

return statearr_25845;
})();
var statearr_25846_25864 = state_25833__$1;
(statearr_25846_25864[(2)] = null);

(statearr_25846_25864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (8))){
var state_25833__$1 = state_25833;
var statearr_25847_25865 = state_25833__$1;
(statearr_25847_25865[(2)] = null);

(statearr_25847_25865[(1)] = (9));


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
});})(c__25645__auto___25855))
;
return ((function (switch__25624__auto__,c__25645__auto___25855){
return (function() {
var csasync$proc$start_process_$_state_machine__25625__auto__ = null;
var csasync$proc$start_process_$_state_machine__25625__auto____0 = (function (){
var statearr_25851 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25851[(0)] = csasync$proc$start_process_$_state_machine__25625__auto__);

(statearr_25851[(1)] = (1));

return statearr_25851;
});
var csasync$proc$start_process_$_state_machine__25625__auto____1 = (function (state_25833){
while(true){
var ret_value__25626__auto__ = (function (){try{while(true){
var result__25627__auto__ = switch__25624__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25627__auto__;
}
break;
}
}catch (e25852){if((e25852 instanceof Object)){
var ex__25628__auto__ = e25852;
var statearr_25853_25866 = state_25833;
(statearr_25853_25866[(5)] = ex__25628__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25867 = state_25833;
state_25833 = G__25867;
continue;
} else {
return ret_value__25626__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25625__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25625__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25625__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25625__auto____0;
csasync$proc$start_process_$_state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25625__auto____1;
return csasync$proc$start_process_$_state_machine__25625__auto__;
})()
;})(switch__25624__auto__,c__25645__auto___25855))
})();
var state__25647__auto__ = (function (){var statearr_25854 = f__25646__auto__.call(null);
(statearr_25854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25645__auto___25855);

return statearr_25854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25647__auto__);
});})(c__25645__auto___25855))
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
var c__25645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25645__auto__){
return (function (){
var f__25646__auto__ = (function (){var switch__25624__auto__ = ((function (c__25645__auto__){
return (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (1))){
var inst_25883 = cljs.core.async.timeout.call(null,time);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25888__$1,(2),inst_25883);
} else {
if((state_val_25889 === (2))){
var inst_25885 = (state_25888[(2)]);
var inst_25886 = func.call(null);
var state_25888__$1 = (function (){var statearr_25890 = state_25888;
(statearr_25890[(7)] = inst_25885);

return statearr_25890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
return null;
}
}
});})(c__25645__auto__))
;
return ((function (switch__25624__auto__,c__25645__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25625__auto__ = null;
var csasync$proc$delayer_$_state_machine__25625__auto____0 = (function (){
var statearr_25894 = [null,null,null,null,null,null,null,null];
(statearr_25894[(0)] = csasync$proc$delayer_$_state_machine__25625__auto__);

(statearr_25894[(1)] = (1));

return statearr_25894;
});
var csasync$proc$delayer_$_state_machine__25625__auto____1 = (function (state_25888){
while(true){
var ret_value__25626__auto__ = (function (){try{while(true){
var result__25627__auto__ = switch__25624__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25627__auto__;
}
break;
}
}catch (e25895){if((e25895 instanceof Object)){
var ex__25628__auto__ = e25895;
var statearr_25896_25898 = state_25888;
(statearr_25896_25898[(5)] = ex__25628__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25899 = state_25888;
state_25888 = G__25899;
continue;
} else {
return ret_value__25626__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25625__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25625__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25625__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25625__auto____0;
csasync$proc$delayer_$_state_machine__25625__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25625__auto____1;
return csasync$proc$delayer_$_state_machine__25625__auto__;
})()
;})(switch__25624__auto__,c__25645__auto__))
})();
var state__25647__auto__ = (function (){var statearr_25897 = f__25646__auto__.call(null);
(statearr_25897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25645__auto__);

return statearr_25897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25647__auto__);
});})(c__25645__auto__))
);

return c__25645__auto__;
});

//# sourceMappingURL=proc.js.map