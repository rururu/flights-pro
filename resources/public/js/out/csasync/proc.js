// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26671 = [];
var len__24076__auto___26734 = arguments.length;
var i__24077__auto___26735 = (0);
while(true){
if((i__24077__auto___26735 < len__24076__auto___26734)){
args26671.push((arguments[i__24077__auto___26735]));

var G__26736 = (i__24077__auto___26735 + (1));
i__24077__auto___26735 = G__26736;
continue;
} else {
}
break;
}

var G__26673 = args26671.length;
switch (G__26673) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26671.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__25055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25055__auto__){
return (function (){
var f__25056__auto__ = (function (){var switch__25034__auto__ = ((function (c__25055__auto__){
return (function (state_26687){
var state_val_26688 = (state_26687[(1)]);
if((state_val_26688 === (1))){
var state_26687__$1 = state_26687;
var statearr_26689_26738 = state_26687__$1;
(statearr_26689_26738[(2)] = null);

(statearr_26689_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (2))){
var state_26687__$1 = state_26687;
var statearr_26690_26739 = state_26687__$1;
(statearr_26690_26739[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (3))){
var inst_26685 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26687__$1,inst_26685);
} else {
if((state_val_26688 === (4))){
var inst_26676 = func.call(null);
var inst_26677 = cljs.core.async.timeout.call(null,time_out);
var state_26687__$1 = (function (){var statearr_26692 = state_26687;
(statearr_26692[(7)] = inst_26676);

return statearr_26692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26687__$1,(7),inst_26677);
} else {
if((state_val_26688 === (5))){
var state_26687__$1 = state_26687;
var statearr_26693_26740 = state_26687__$1;
(statearr_26693_26740[(2)] = null);

(statearr_26693_26740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (6))){
var inst_26683 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26694_26741 = state_26687__$1;
(statearr_26694_26741[(2)] = inst_26683);

(statearr_26694_26741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (7))){
var inst_26679 = (state_26687[(2)]);
var state_26687__$1 = (function (){var statearr_26695 = state_26687;
(statearr_26695[(8)] = inst_26679);

return statearr_26695;
})();
var statearr_26696_26742 = state_26687__$1;
(statearr_26696_26742[(2)] = null);

(statearr_26696_26742[(1)] = (2));


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
});})(c__25055__auto__))
;
return ((function (switch__25034__auto__,c__25055__auto__){
return (function() {
var csasync$proc$state_machine__25035__auto__ = null;
var csasync$proc$state_machine__25035__auto____0 = (function (){
var statearr_26700 = [null,null,null,null,null,null,null,null,null];
(statearr_26700[(0)] = csasync$proc$state_machine__25035__auto__);

(statearr_26700[(1)] = (1));

return statearr_26700;
});
var csasync$proc$state_machine__25035__auto____1 = (function (state_26687){
while(true){
var ret_value__25036__auto__ = (function (){try{while(true){
var result__25037__auto__ = switch__25034__auto__.call(null,state_26687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25037__auto__;
}
break;
}
}catch (e26701){if((e26701 instanceof Object)){
var ex__25038__auto__ = e26701;
var statearr_26702_26743 = state_26687;
(statearr_26702_26743[(5)] = ex__25038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26744 = state_26687;
state_26687 = G__26744;
continue;
} else {
return ret_value__25036__auto__;
}
break;
}
});
csasync$proc$state_machine__25035__auto__ = function(state_26687){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25035__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25035__auto____1.call(this,state_26687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25035__auto____0;
csasync$proc$state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25035__auto____1;
return csasync$proc$state_machine__25035__auto__;
})()
;})(switch__25034__auto__,c__25055__auto__))
})();
var state__25057__auto__ = (function (){var statearr_26703 = f__25056__auto__.call(null);
(statearr_26703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25055__auto__);

return statearr_26703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25057__auto__);
});})(c__25055__auto__))
);

return c__25055__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__25055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25055__auto__){
return (function (){
var f__25056__auto__ = (function (){var switch__25034__auto__ = ((function (c__25055__auto__){
return (function (state_26717){
var state_val_26718 = (state_26717[(1)]);
if((state_val_26718 === (1))){
var state_26717__$1 = state_26717;
var statearr_26719_26745 = state_26717__$1;
(statearr_26719_26745[(2)] = null);

(statearr_26719_26745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (2))){
var state_26717__$1 = state_26717;
var statearr_26720_26746 = state_26717__$1;
(statearr_26720_26746[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (3))){
var inst_26715 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26717__$1,inst_26715);
} else {
if((state_val_26718 === (4))){
var inst_26706 = func.call(null,param);
var inst_26707 = cljs.core.async.timeout.call(null,time_out);
var state_26717__$1 = (function (){var statearr_26722 = state_26717;
(statearr_26722[(7)] = inst_26706);

return statearr_26722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26717__$1,(7),inst_26707);
} else {
if((state_val_26718 === (5))){
var state_26717__$1 = state_26717;
var statearr_26723_26747 = state_26717__$1;
(statearr_26723_26747[(2)] = null);

(statearr_26723_26747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (6))){
var inst_26713 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26724_26748 = state_26717__$1;
(statearr_26724_26748[(2)] = inst_26713);

(statearr_26724_26748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (7))){
var inst_26709 = (state_26717[(2)]);
var state_26717__$1 = (function (){var statearr_26725 = state_26717;
(statearr_26725[(8)] = inst_26709);

return statearr_26725;
})();
var statearr_26726_26749 = state_26717__$1;
(statearr_26726_26749[(2)] = null);

(statearr_26726_26749[(1)] = (2));


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
});})(c__25055__auto__))
;
return ((function (switch__25034__auto__,c__25055__auto__){
return (function() {
var csasync$proc$state_machine__25035__auto__ = null;
var csasync$proc$state_machine__25035__auto____0 = (function (){
var statearr_26730 = [null,null,null,null,null,null,null,null,null];
(statearr_26730[(0)] = csasync$proc$state_machine__25035__auto__);

(statearr_26730[(1)] = (1));

return statearr_26730;
});
var csasync$proc$state_machine__25035__auto____1 = (function (state_26717){
while(true){
var ret_value__25036__auto__ = (function (){try{while(true){
var result__25037__auto__ = switch__25034__auto__.call(null,state_26717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25037__auto__;
}
break;
}
}catch (e26731){if((e26731 instanceof Object)){
var ex__25038__auto__ = e26731;
var statearr_26732_26750 = state_26717;
(statearr_26732_26750[(5)] = ex__25038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26751 = state_26717;
state_26717 = G__26751;
continue;
} else {
return ret_value__25036__auto__;
}
break;
}
});
csasync$proc$state_machine__25035__auto__ = function(state_26717){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25035__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25035__auto____1.call(this,state_26717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25035__auto____0;
csasync$proc$state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25035__auto____1;
return csasync$proc$state_machine__25035__auto__;
})()
;})(switch__25034__auto__,c__25055__auto__))
})();
var state__25057__auto__ = (function (){var statearr_26733 = f__25056__auto__.call(null);
(statearr_26733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25055__auto__);

return statearr_26733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25057__auto__);
});})(c__25055__auto__))
);

return c__25055__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__25055__auto___26860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25055__auto___26860){
return (function (){
var f__25056__auto__ = (function (){var switch__25034__auto__ = ((function (c__25055__auto___26860){
return (function (state_26833){
var state_val_26834 = (state_26833[(1)]);
if((state_val_26834 === (7))){
var inst_26815 = cljs.core.async.timeout.call(null,time_out);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26833__$1,(10),inst_26815);
} else {
if((state_val_26834 === (1))){
var state_26833__$1 = state_26833;
var statearr_26835_26861 = state_26833__$1;
(statearr_26835_26861[(2)] = null);

(statearr_26835_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (4))){
var inst_26810 = proc_fn.call(null);
var state_26833__$1 = state_26833;
var statearr_26836_26862 = state_26833__$1;
(statearr_26836_26862[(2)] = inst_26810);

(statearr_26836_26862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (13))){
var inst_26830 = (state_26833[(2)]);
var inst_26831 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26833__$1 = (function (){var statearr_26837 = state_26833;
(statearr_26837[(7)] = inst_26830);

return statearr_26837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26833__$1,inst_26831);
} else {
if((state_val_26834 === (6))){
var inst_26813 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
if(cljs.core.truth_(inst_26813)){
var statearr_26838_26863 = state_26833__$1;
(statearr_26838_26863[(1)] = (7));

} else {
var statearr_26839_26864 = state_26833__$1;
(statearr_26839_26864[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (3))){
var inst_26823 = (state_26833[(2)]);
var inst_26824 = (final_fun == null);
var inst_26825 = cljs.core.not.call(null,inst_26824);
var state_26833__$1 = (function (){var statearr_26840 = state_26833;
(statearr_26840[(8)] = inst_26823);

return statearr_26840;
})();
if(inst_26825){
var statearr_26841_26865 = state_26833__$1;
(statearr_26841_26865[(1)] = (11));

} else {
var statearr_26842_26866 = state_26833__$1;
(statearr_26842_26866[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (12))){
var state_26833__$1 = state_26833;
var statearr_26843_26867 = state_26833__$1;
(statearr_26843_26867[(2)] = null);

(statearr_26843_26867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (2))){
var inst_26808 = (state_26833[(9)]);
var inst_26807 = cljs.core.deref.call(null,status);
var inst_26808__$1 = cljs.core._EQ_.call(null,inst_26807,"RUN");
var state_26833__$1 = (function (){var statearr_26844 = state_26833;
(statearr_26844[(9)] = inst_26808__$1);

return statearr_26844;
})();
if(inst_26808__$1){
var statearr_26845_26868 = state_26833__$1;
(statearr_26845_26868[(1)] = (4));

} else {
var statearr_26846_26869 = state_26833__$1;
(statearr_26846_26869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (11))){
var inst_26827 = final_fun.call(null);
var state_26833__$1 = state_26833;
var statearr_26847_26870 = state_26833__$1;
(statearr_26847_26870[(2)] = inst_26827);

(statearr_26847_26870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (9))){
var inst_26821 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26848_26871 = state_26833__$1;
(statearr_26848_26871[(2)] = inst_26821);

(statearr_26848_26871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (5))){
var inst_26808 = (state_26833[(9)]);
var state_26833__$1 = state_26833;
var statearr_26849_26872 = state_26833__$1;
(statearr_26849_26872[(2)] = inst_26808);

(statearr_26849_26872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (10))){
var inst_26817 = (state_26833[(2)]);
var state_26833__$1 = (function (){var statearr_26850 = state_26833;
(statearr_26850[(10)] = inst_26817);

return statearr_26850;
})();
var statearr_26851_26873 = state_26833__$1;
(statearr_26851_26873[(2)] = null);

(statearr_26851_26873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (8))){
var state_26833__$1 = state_26833;
var statearr_26852_26874 = state_26833__$1;
(statearr_26852_26874[(2)] = null);

(statearr_26852_26874[(1)] = (9));


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
});})(c__25055__auto___26860))
;
return ((function (switch__25034__auto__,c__25055__auto___26860){
return (function() {
var csasync$proc$start_process_$_state_machine__25035__auto__ = null;
var csasync$proc$start_process_$_state_machine__25035__auto____0 = (function (){
var statearr_26856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26856[(0)] = csasync$proc$start_process_$_state_machine__25035__auto__);

(statearr_26856[(1)] = (1));

return statearr_26856;
});
var csasync$proc$start_process_$_state_machine__25035__auto____1 = (function (state_26833){
while(true){
var ret_value__25036__auto__ = (function (){try{while(true){
var result__25037__auto__ = switch__25034__auto__.call(null,state_26833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25037__auto__;
}
break;
}
}catch (e26857){if((e26857 instanceof Object)){
var ex__25038__auto__ = e26857;
var statearr_26858_26875 = state_26833;
(statearr_26858_26875[(5)] = ex__25038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26876 = state_26833;
state_26833 = G__26876;
continue;
} else {
return ret_value__25036__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25035__auto__ = function(state_26833){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25035__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25035__auto____1.call(this,state_26833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25035__auto____0;
csasync$proc$start_process_$_state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25035__auto____1;
return csasync$proc$start_process_$_state_machine__25035__auto__;
})()
;})(switch__25034__auto__,c__25055__auto___26860))
})();
var state__25057__auto__ = (function (){var statearr_26859 = f__25056__auto__.call(null);
(statearr_26859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25055__auto___26860);

return statearr_26859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25057__auto__);
});})(c__25055__auto___26860))
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
var c__25055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25055__auto__){
return (function (){
var f__25056__auto__ = (function (){var switch__25034__auto__ = ((function (c__25055__auto__){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (1))){
var inst_26892 = cljs.core.async.timeout.call(null,time);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26897__$1,(2),inst_26892);
} else {
if((state_val_26898 === (2))){
var inst_26894 = (state_26897[(2)]);
var inst_26895 = func.call(null);
var state_26897__$1 = (function (){var statearr_26899 = state_26897;
(statearr_26899[(7)] = inst_26894);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else {
return null;
}
}
});})(c__25055__auto__))
;
return ((function (switch__25034__auto__,c__25055__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25035__auto__ = null;
var csasync$proc$delayer_$_state_machine__25035__auto____0 = (function (){
var statearr_26903 = [null,null,null,null,null,null,null,null];
(statearr_26903[(0)] = csasync$proc$delayer_$_state_machine__25035__auto__);

(statearr_26903[(1)] = (1));

return statearr_26903;
});
var csasync$proc$delayer_$_state_machine__25035__auto____1 = (function (state_26897){
while(true){
var ret_value__25036__auto__ = (function (){try{while(true){
var result__25037__auto__ = switch__25034__auto__.call(null,state_26897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25037__auto__;
}
break;
}
}catch (e26904){if((e26904 instanceof Object)){
var ex__25038__auto__ = e26904;
var statearr_26905_26907 = state_26897;
(statearr_26905_26907[(5)] = ex__25038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26897;
state_26897 = G__26908;
continue;
} else {
return ret_value__25036__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25035__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25035__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25035__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25035__auto____0;
csasync$proc$delayer_$_state_machine__25035__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25035__auto____1;
return csasync$proc$delayer_$_state_machine__25035__auto__;
})()
;})(switch__25034__auto__,c__25055__auto__))
})();
var state__25057__auto__ = (function (){var statearr_26906 = f__25056__auto__.call(null);
(statearr_26906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25055__auto__);

return statearr_26906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25057__auto__);
});})(c__25055__auto__))
);

return c__25055__auto__;
});

//# sourceMappingURL=proc.js.map