// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23669 = [];
var len__19546__auto___23732 = arguments.length;
var i__19547__auto___23733 = (0);
while(true){
if((i__19547__auto___23733 < len__19546__auto___23732)){
args23669.push((arguments[i__19547__auto___23733]));

var G__23734 = (i__19547__auto___23733 + (1));
i__19547__auto___23733 = G__23734;
continue;
} else {
}
break;
}

var G__23671 = args23669.length;
switch (G__23671) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23669.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20501__auto__){
return (function (){
var f__20502__auto__ = (function (){var switch__20480__auto__ = ((function (c__20501__auto__){
return (function (state_23685){
var state_val_23686 = (state_23685[(1)]);
if((state_val_23686 === (1))){
var state_23685__$1 = state_23685;
var statearr_23687_23736 = state_23685__$1;
(statearr_23687_23736[(2)] = null);

(statearr_23687_23736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (2))){
var state_23685__$1 = state_23685;
var statearr_23688_23737 = state_23685__$1;
(statearr_23688_23737[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (3))){
var inst_23683 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23685__$1,inst_23683);
} else {
if((state_val_23686 === (4))){
var inst_23674 = func.call(null);
var inst_23675 = cljs.core.async.timeout.call(null,time_out);
var state_23685__$1 = (function (){var statearr_23690 = state_23685;
(statearr_23690[(7)] = inst_23674);

return statearr_23690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23685__$1,(7),inst_23675);
} else {
if((state_val_23686 === (5))){
var state_23685__$1 = state_23685;
var statearr_23691_23738 = state_23685__$1;
(statearr_23691_23738[(2)] = null);

(statearr_23691_23738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (6))){
var inst_23681 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
var statearr_23692_23739 = state_23685__$1;
(statearr_23692_23739[(2)] = inst_23681);

(statearr_23692_23739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (7))){
var inst_23677 = (state_23685[(2)]);
var state_23685__$1 = (function (){var statearr_23693 = state_23685;
(statearr_23693[(8)] = inst_23677);

return statearr_23693;
})();
var statearr_23694_23740 = state_23685__$1;
(statearr_23694_23740[(2)] = null);

(statearr_23694_23740[(1)] = (2));


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
});})(c__20501__auto__))
;
return ((function (switch__20480__auto__,c__20501__auto__){
return (function() {
var csasync$proc$state_machine__20481__auto__ = null;
var csasync$proc$state_machine__20481__auto____0 = (function (){
var statearr_23698 = [null,null,null,null,null,null,null,null,null];
(statearr_23698[(0)] = csasync$proc$state_machine__20481__auto__);

(statearr_23698[(1)] = (1));

return statearr_23698;
});
var csasync$proc$state_machine__20481__auto____1 = (function (state_23685){
while(true){
var ret_value__20482__auto__ = (function (){try{while(true){
var result__20483__auto__ = switch__20480__auto__.call(null,state_23685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20483__auto__;
}
break;
}
}catch (e23699){if((e23699 instanceof Object)){
var ex__20484__auto__ = e23699;
var statearr_23700_23741 = state_23685;
(statearr_23700_23741[(5)] = ex__20484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23742 = state_23685;
state_23685 = G__23742;
continue;
} else {
return ret_value__20482__auto__;
}
break;
}
});
csasync$proc$state_machine__20481__auto__ = function(state_23685){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20481__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20481__auto____1.call(this,state_23685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20481__auto____0;
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20481__auto____1;
return csasync$proc$state_machine__20481__auto__;
})()
;})(switch__20480__auto__,c__20501__auto__))
})();
var state__20503__auto__ = (function (){var statearr_23701 = f__20502__auto__.call(null);
(statearr_23701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20501__auto__);

return statearr_23701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20503__auto__);
});})(c__20501__auto__))
);

return c__20501__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20501__auto__){
return (function (){
var f__20502__auto__ = (function (){var switch__20480__auto__ = ((function (c__20501__auto__){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (1))){
var state_23715__$1 = state_23715;
var statearr_23717_23743 = state_23715__$1;
(statearr_23717_23743[(2)] = null);

(statearr_23717_23743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (2))){
var state_23715__$1 = state_23715;
var statearr_23718_23744 = state_23715__$1;
(statearr_23718_23744[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (3))){
var inst_23713 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
if((state_val_23716 === (4))){
var inst_23704 = func.call(null,param);
var inst_23705 = cljs.core.async.timeout.call(null,time_out);
var state_23715__$1 = (function (){var statearr_23720 = state_23715;
(statearr_23720[(7)] = inst_23704);

return statearr_23720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23715__$1,(7),inst_23705);
} else {
if((state_val_23716 === (5))){
var state_23715__$1 = state_23715;
var statearr_23721_23745 = state_23715__$1;
(statearr_23721_23745[(2)] = null);

(statearr_23721_23745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (6))){
var inst_23711 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23722_23746 = state_23715__$1;
(statearr_23722_23746[(2)] = inst_23711);

(statearr_23722_23746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (7))){
var inst_23707 = (state_23715[(2)]);
var state_23715__$1 = (function (){var statearr_23723 = state_23715;
(statearr_23723[(8)] = inst_23707);

return statearr_23723;
})();
var statearr_23724_23747 = state_23715__$1;
(statearr_23724_23747[(2)] = null);

(statearr_23724_23747[(1)] = (2));


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
});})(c__20501__auto__))
;
return ((function (switch__20480__auto__,c__20501__auto__){
return (function() {
var csasync$proc$state_machine__20481__auto__ = null;
var csasync$proc$state_machine__20481__auto____0 = (function (){
var statearr_23728 = [null,null,null,null,null,null,null,null,null];
(statearr_23728[(0)] = csasync$proc$state_machine__20481__auto__);

(statearr_23728[(1)] = (1));

return statearr_23728;
});
var csasync$proc$state_machine__20481__auto____1 = (function (state_23715){
while(true){
var ret_value__20482__auto__ = (function (){try{while(true){
var result__20483__auto__ = switch__20480__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20483__auto__;
}
break;
}
}catch (e23729){if((e23729 instanceof Object)){
var ex__20484__auto__ = e23729;
var statearr_23730_23748 = state_23715;
(statearr_23730_23748[(5)] = ex__20484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23749 = state_23715;
state_23715 = G__23749;
continue;
} else {
return ret_value__20482__auto__;
}
break;
}
});
csasync$proc$state_machine__20481__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20481__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20481__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20481__auto____0;
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20481__auto____1;
return csasync$proc$state_machine__20481__auto__;
})()
;})(switch__20480__auto__,c__20501__auto__))
})();
var state__20503__auto__ = (function (){var statearr_23731 = f__20502__auto__.call(null);
(statearr_23731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20501__auto__);

return statearr_23731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20503__auto__);
});})(c__20501__auto__))
);

return c__20501__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args23750 = [];
var len__19546__auto___23837 = arguments.length;
var i__19547__auto___23838 = (0);
while(true){
if((i__19547__auto___23838 < len__19546__auto___23837)){
args23750.push((arguments[i__19547__auto___23838]));

var G__23839 = (i__19547__auto___23838 + (1));
i__19547__auto___23838 = G__23839;
continue;
} else {
}
break;
}

var G__23752 = args23750.length;
switch (G__23752) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23750.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20501__auto___23841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20501__auto___23841){
return (function (){
var f__20502__auto__ = (function (){var switch__20480__auto__ = ((function (c__20501__auto___23841){
return (function (state_23773){
var state_val_23774 = (state_23773[(1)]);
if((state_val_23774 === (7))){
var inst_23762 = cljs.core.async.timeout.call(null,time_out);
var state_23773__$1 = state_23773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23773__$1,(10),inst_23762);
} else {
if((state_val_23774 === (1))){
var state_23773__$1 = state_23773;
var statearr_23775_23842 = state_23773__$1;
(statearr_23775_23842[(2)] = null);

(statearr_23775_23842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (4))){
var inst_23757 = proc_fn.call(null);
var state_23773__$1 = state_23773;
var statearr_23776_23843 = state_23773__$1;
(statearr_23776_23843[(2)] = inst_23757);

(statearr_23776_23843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (6))){
var inst_23760 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
if(cljs.core.truth_(inst_23760)){
var statearr_23777_23844 = state_23773__$1;
(statearr_23777_23844[(1)] = (7));

} else {
var statearr_23778_23845 = state_23773__$1;
(statearr_23778_23845[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (3))){
var inst_23770 = (state_23773[(2)]);
var inst_23771 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23773__$1 = (function (){var statearr_23779 = state_23773;
(statearr_23779[(7)] = inst_23770);

return statearr_23779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23773__$1,inst_23771);
} else {
if((state_val_23774 === (2))){
var inst_23755 = (state_23773[(8)]);
var inst_23754 = cljs.core.deref.call(null,status);
var inst_23755__$1 = cljs.core._EQ_.call(null,inst_23754,"RUN");
var state_23773__$1 = (function (){var statearr_23780 = state_23773;
(statearr_23780[(8)] = inst_23755__$1);

return statearr_23780;
})();
if(inst_23755__$1){
var statearr_23781_23846 = state_23773__$1;
(statearr_23781_23846[(1)] = (4));

} else {
var statearr_23782_23847 = state_23773__$1;
(statearr_23782_23847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (9))){
var inst_23768 = (state_23773[(2)]);
var state_23773__$1 = state_23773;
var statearr_23783_23848 = state_23773__$1;
(statearr_23783_23848[(2)] = inst_23768);

(statearr_23783_23848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (5))){
var inst_23755 = (state_23773[(8)]);
var state_23773__$1 = state_23773;
var statearr_23784_23849 = state_23773__$1;
(statearr_23784_23849[(2)] = inst_23755);

(statearr_23784_23849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (10))){
var inst_23764 = (state_23773[(2)]);
var state_23773__$1 = (function (){var statearr_23785 = state_23773;
(statearr_23785[(9)] = inst_23764);

return statearr_23785;
})();
var statearr_23786_23850 = state_23773__$1;
(statearr_23786_23850[(2)] = null);

(statearr_23786_23850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23774 === (8))){
var state_23773__$1 = state_23773;
var statearr_23787_23851 = state_23773__$1;
(statearr_23787_23851[(2)] = null);

(statearr_23787_23851[(1)] = (9));


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
});})(c__20501__auto___23841))
;
return ((function (switch__20480__auto__,c__20501__auto___23841){
return (function() {
var csasync$proc$state_machine__20481__auto__ = null;
var csasync$proc$state_machine__20481__auto____0 = (function (){
var statearr_23791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23791[(0)] = csasync$proc$state_machine__20481__auto__);

(statearr_23791[(1)] = (1));

return statearr_23791;
});
var csasync$proc$state_machine__20481__auto____1 = (function (state_23773){
while(true){
var ret_value__20482__auto__ = (function (){try{while(true){
var result__20483__auto__ = switch__20480__auto__.call(null,state_23773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20483__auto__;
}
break;
}
}catch (e23792){if((e23792 instanceof Object)){
var ex__20484__auto__ = e23792;
var statearr_23793_23852 = state_23773;
(statearr_23793_23852[(5)] = ex__20484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23853 = state_23773;
state_23773 = G__23853;
continue;
} else {
return ret_value__20482__auto__;
}
break;
}
});
csasync$proc$state_machine__20481__auto__ = function(state_23773){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20481__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20481__auto____1.call(this,state_23773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20481__auto____0;
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20481__auto____1;
return csasync$proc$state_machine__20481__auto__;
})()
;})(switch__20480__auto__,c__20501__auto___23841))
})();
var state__20503__auto__ = (function (){var statearr_23794 = f__20502__auto__.call(null);
(statearr_23794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20501__auto___23841);

return statearr_23794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20503__auto__);
});})(c__20501__auto___23841))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20501__auto___23854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20501__auto___23854){
return (function (){
var f__20502__auto__ = (function (){var switch__20480__auto__ = ((function (c__20501__auto___23854){
return (function (state_23815){
var state_val_23816 = (state_23815[(1)]);
if((state_val_23816 === (7))){
var inst_23804 = cljs.core.async.timeout.call(null,time_out);
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23815__$1,(10),inst_23804);
} else {
if((state_val_23816 === (1))){
var state_23815__$1 = state_23815;
var statearr_23817_23855 = state_23815__$1;
(statearr_23817_23855[(2)] = null);

(statearr_23817_23855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (4))){
var inst_23799 = proc_fn.call(null,param);
var state_23815__$1 = state_23815;
var statearr_23818_23856 = state_23815__$1;
(statearr_23818_23856[(2)] = inst_23799);

(statearr_23818_23856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (6))){
var inst_23802 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
if(cljs.core.truth_(inst_23802)){
var statearr_23819_23857 = state_23815__$1;
(statearr_23819_23857[(1)] = (7));

} else {
var statearr_23820_23858 = state_23815__$1;
(statearr_23820_23858[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (3))){
var inst_23812 = (state_23815[(2)]);
var inst_23813 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23815__$1 = (function (){var statearr_23821 = state_23815;
(statearr_23821[(7)] = inst_23812);

return statearr_23821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23815__$1,inst_23813);
} else {
if((state_val_23816 === (2))){
var inst_23797 = (state_23815[(8)]);
var inst_23796 = cljs.core.deref.call(null,status);
var inst_23797__$1 = cljs.core._EQ_.call(null,inst_23796,"RUN");
var state_23815__$1 = (function (){var statearr_23822 = state_23815;
(statearr_23822[(8)] = inst_23797__$1);

return statearr_23822;
})();
if(inst_23797__$1){
var statearr_23823_23859 = state_23815__$1;
(statearr_23823_23859[(1)] = (4));

} else {
var statearr_23824_23860 = state_23815__$1;
(statearr_23824_23860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (9))){
var inst_23810 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23825_23861 = state_23815__$1;
(statearr_23825_23861[(2)] = inst_23810);

(statearr_23825_23861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (5))){
var inst_23797 = (state_23815[(8)]);
var state_23815__$1 = state_23815;
var statearr_23826_23862 = state_23815__$1;
(statearr_23826_23862[(2)] = inst_23797);

(statearr_23826_23862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (10))){
var inst_23806 = (state_23815[(2)]);
var state_23815__$1 = (function (){var statearr_23827 = state_23815;
(statearr_23827[(9)] = inst_23806);

return statearr_23827;
})();
var statearr_23828_23863 = state_23815__$1;
(statearr_23828_23863[(2)] = null);

(statearr_23828_23863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (8))){
var state_23815__$1 = state_23815;
var statearr_23829_23864 = state_23815__$1;
(statearr_23829_23864[(2)] = null);

(statearr_23829_23864[(1)] = (9));


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
});})(c__20501__auto___23854))
;
return ((function (switch__20480__auto__,c__20501__auto___23854){
return (function() {
var csasync$proc$state_machine__20481__auto__ = null;
var csasync$proc$state_machine__20481__auto____0 = (function (){
var statearr_23833 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23833[(0)] = csasync$proc$state_machine__20481__auto__);

(statearr_23833[(1)] = (1));

return statearr_23833;
});
var csasync$proc$state_machine__20481__auto____1 = (function (state_23815){
while(true){
var ret_value__20482__auto__ = (function (){try{while(true){
var result__20483__auto__ = switch__20480__auto__.call(null,state_23815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20483__auto__;
}
break;
}
}catch (e23834){if((e23834 instanceof Object)){
var ex__20484__auto__ = e23834;
var statearr_23835_23865 = state_23815;
(statearr_23835_23865[(5)] = ex__20484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23866 = state_23815;
state_23815 = G__23866;
continue;
} else {
return ret_value__20482__auto__;
}
break;
}
});
csasync$proc$state_machine__20481__auto__ = function(state_23815){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20481__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20481__auto____1.call(this,state_23815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20481__auto____0;
csasync$proc$state_machine__20481__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20481__auto____1;
return csasync$proc$state_machine__20481__auto__;
})()
;})(switch__20480__auto__,c__20501__auto___23854))
})();
var state__20503__auto__ = (function (){var statearr_23836 = f__20502__auto__.call(null);
(statearr_23836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20501__auto___23854);

return statearr_23836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20503__auto__);
});})(c__20501__auto___23854))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$lang$maxFixedArity = 4;

csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"STOP");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});

//# sourceMappingURL=proc.js.map