// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args24766 = [];
var len__21484__auto___24829 = arguments.length;
var i__21485__auto___24830 = (0);
while(true){
if((i__21485__auto___24830 < len__21484__auto___24829)){
args24766.push((arguments[i__21485__auto___24830]));

var G__24831 = (i__21485__auto___24830 + (1));
i__21485__auto___24830 = G__24831;
continue;
} else {
}
break;
}

var G__24768 = args24766.length;
switch (G__24768) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24766.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_24782){
var state_val_24783 = (state_24782[(1)]);
if((state_val_24783 === (1))){
var state_24782__$1 = state_24782;
var statearr_24784_24833 = state_24782__$1;
(statearr_24784_24833[(2)] = null);

(statearr_24784_24833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (2))){
var state_24782__$1 = state_24782;
var statearr_24785_24834 = state_24782__$1;
(statearr_24785_24834[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (3))){
var inst_24780 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24782__$1,inst_24780);
} else {
if((state_val_24783 === (4))){
var inst_24771 = func.call(null);
var inst_24772 = cljs.core.async.timeout.call(null,time_out);
var state_24782__$1 = (function (){var statearr_24787 = state_24782;
(statearr_24787[(7)] = inst_24771);

return statearr_24787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24782__$1,(7),inst_24772);
} else {
if((state_val_24783 === (5))){
var state_24782__$1 = state_24782;
var statearr_24788_24835 = state_24782__$1;
(statearr_24788_24835[(2)] = null);

(statearr_24788_24835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (6))){
var inst_24778 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24789_24836 = state_24782__$1;
(statearr_24789_24836[(2)] = inst_24778);

(statearr_24789_24836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (7))){
var inst_24774 = (state_24782[(2)]);
var state_24782__$1 = (function (){var statearr_24790 = state_24782;
(statearr_24790[(8)] = inst_24774);

return statearr_24790;
})();
var statearr_24791_24837 = state_24782__$1;
(statearr_24791_24837[(2)] = null);

(statearr_24791_24837[(1)] = (2));


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
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$state_machine__22540__auto__ = null;
var csasync$proc$state_machine__22540__auto____0 = (function (){
var statearr_24795 = [null,null,null,null,null,null,null,null,null];
(statearr_24795[(0)] = csasync$proc$state_machine__22540__auto__);

(statearr_24795[(1)] = (1));

return statearr_24795;
});
var csasync$proc$state_machine__22540__auto____1 = (function (state_24782){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_24782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e24796){if((e24796 instanceof Object)){
var ex__22543__auto__ = e24796;
var statearr_24797_24838 = state_24782;
(statearr_24797_24838[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24839 = state_24782;
state_24782 = G__24839;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$state_machine__22540__auto__ = function(state_24782){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22540__auto____1.call(this,state_24782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22540__auto____0;
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22540__auto____1;
return csasync$proc$state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_24798 = f__22561__auto__.call(null);
(statearr_24798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_24798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_24812){
var state_val_24813 = (state_24812[(1)]);
if((state_val_24813 === (1))){
var state_24812__$1 = state_24812;
var statearr_24814_24840 = state_24812__$1;
(statearr_24814_24840[(2)] = null);

(statearr_24814_24840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (2))){
var state_24812__$1 = state_24812;
var statearr_24815_24841 = state_24812__$1;
(statearr_24815_24841[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (3))){
var inst_24810 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else {
if((state_val_24813 === (4))){
var inst_24801 = func.call(null,param);
var inst_24802 = cljs.core.async.timeout.call(null,time_out);
var state_24812__$1 = (function (){var statearr_24817 = state_24812;
(statearr_24817[(7)] = inst_24801);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24812__$1,(7),inst_24802);
} else {
if((state_val_24813 === (5))){
var state_24812__$1 = state_24812;
var statearr_24818_24842 = state_24812__$1;
(statearr_24818_24842[(2)] = null);

(statearr_24818_24842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (6))){
var inst_24808 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24819_24843 = state_24812__$1;
(statearr_24819_24843[(2)] = inst_24808);

(statearr_24819_24843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (7))){
var inst_24804 = (state_24812[(2)]);
var state_24812__$1 = (function (){var statearr_24820 = state_24812;
(statearr_24820[(8)] = inst_24804);

return statearr_24820;
})();
var statearr_24821_24844 = state_24812__$1;
(statearr_24821_24844[(2)] = null);

(statearr_24821_24844[(1)] = (2));


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
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$state_machine__22540__auto__ = null;
var csasync$proc$state_machine__22540__auto____0 = (function (){
var statearr_24825 = [null,null,null,null,null,null,null,null,null];
(statearr_24825[(0)] = csasync$proc$state_machine__22540__auto__);

(statearr_24825[(1)] = (1));

return statearr_24825;
});
var csasync$proc$state_machine__22540__auto____1 = (function (state_24812){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_24812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e24826){if((e24826 instanceof Object)){
var ex__22543__auto__ = e24826;
var statearr_24827_24845 = state_24812;
(statearr_24827_24845[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24846 = state_24812;
state_24812 = G__24846;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$state_machine__22540__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22540__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22540__auto____0;
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22540__auto____1;
return csasync$proc$state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_24828 = f__22561__auto__.call(null);
(statearr_24828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_24828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22560__auto___24931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto___24931){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto___24931){
return (function (state_24909){
var state_val_24910 = (state_24909[(1)]);
if((state_val_24910 === (7))){
var inst_24898 = cljs.core.async.timeout.call(null,time_out);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(10),inst_24898);
} else {
if((state_val_24910 === (1))){
var state_24909__$1 = state_24909;
var statearr_24911_24932 = state_24909__$1;
(statearr_24911_24932[(2)] = null);

(statearr_24911_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (4))){
var inst_24893 = proc_fn.call(null);
var state_24909__$1 = state_24909;
var statearr_24912_24933 = state_24909__$1;
(statearr_24912_24933[(2)] = inst_24893);

(statearr_24912_24933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (6))){
var inst_24896 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
if(cljs.core.truth_(inst_24896)){
var statearr_24913_24934 = state_24909__$1;
(statearr_24913_24934[(1)] = (7));

} else {
var statearr_24914_24935 = state_24909__$1;
(statearr_24914_24935[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (3))){
var inst_24906 = (state_24909[(2)]);
var inst_24907 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24909__$1 = (function (){var statearr_24915 = state_24909;
(statearr_24915[(7)] = inst_24906);

return statearr_24915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24909__$1,inst_24907);
} else {
if((state_val_24910 === (2))){
var inst_24891 = (state_24909[(8)]);
var inst_24890 = cljs.core.deref.call(null,status);
var inst_24891__$1 = cljs.core._EQ_.call(null,inst_24890,"RUN");
var state_24909__$1 = (function (){var statearr_24916 = state_24909;
(statearr_24916[(8)] = inst_24891__$1);

return statearr_24916;
})();
if(inst_24891__$1){
var statearr_24917_24936 = state_24909__$1;
(statearr_24917_24936[(1)] = (4));

} else {
var statearr_24918_24937 = state_24909__$1;
(statearr_24918_24937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (9))){
var inst_24904 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24919_24938 = state_24909__$1;
(statearr_24919_24938[(2)] = inst_24904);

(statearr_24919_24938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (5))){
var inst_24891 = (state_24909[(8)]);
var state_24909__$1 = state_24909;
var statearr_24920_24939 = state_24909__$1;
(statearr_24920_24939[(2)] = inst_24891);

(statearr_24920_24939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (10))){
var inst_24900 = (state_24909[(2)]);
var state_24909__$1 = (function (){var statearr_24921 = state_24909;
(statearr_24921[(9)] = inst_24900);

return statearr_24921;
})();
var statearr_24922_24940 = state_24909__$1;
(statearr_24922_24940[(2)] = null);

(statearr_24922_24940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (8))){
var state_24909__$1 = state_24909;
var statearr_24923_24941 = state_24909__$1;
(statearr_24923_24941[(2)] = null);

(statearr_24923_24941[(1)] = (9));


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
});})(c__22560__auto___24931))
;
return ((function (switch__22539__auto__,c__22560__auto___24931){
return (function() {
var csasync$proc$start_process_$_state_machine__22540__auto__ = null;
var csasync$proc$start_process_$_state_machine__22540__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = csasync$proc$start_process_$_state_machine__22540__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var csasync$proc$start_process_$_state_machine__22540__auto____1 = (function (state_24909){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_24909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__22543__auto__ = e24928;
var statearr_24929_24942 = state_24909;
(statearr_24929_24942[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24943 = state_24909;
state_24909 = G__24943;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22540__auto__ = function(state_24909){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22540__auto____1.call(this,state_24909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22540__auto____0;
csasync$proc$start_process_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22540__auto____1;
return csasync$proc$start_process_$_state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto___24931))
})();
var state__22562__auto__ = (function (){var statearr_24930 = f__22561__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto___24931);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto___24931))
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
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_24964){
var state_val_24965 = (state_24964[(1)]);
if((state_val_24965 === (1))){
var inst_24959 = cljs.core.async.timeout.call(null,time);
var state_24964__$1 = state_24964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24964__$1,(2),inst_24959);
} else {
if((state_val_24965 === (2))){
var inst_24961 = (state_24964[(2)]);
var inst_24962 = func.call(null);
var state_24964__$1 = (function (){var statearr_24966 = state_24964;
(statearr_24966[(7)] = inst_24961);

return statearr_24966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24964__$1,inst_24962);
} else {
return null;
}
}
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22540__auto__ = null;
var csasync$proc$delayer_$_state_machine__22540__auto____0 = (function (){
var statearr_24970 = [null,null,null,null,null,null,null,null];
(statearr_24970[(0)] = csasync$proc$delayer_$_state_machine__22540__auto__);

(statearr_24970[(1)] = (1));

return statearr_24970;
});
var csasync$proc$delayer_$_state_machine__22540__auto____1 = (function (state_24964){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_24964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e24971){if((e24971 instanceof Object)){
var ex__22543__auto__ = e24971;
var statearr_24972_24974 = state_24964;
(statearr_24972_24974[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24975 = state_24964;
state_24964 = G__24975;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22540__auto__ = function(state_24964){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22540__auto____1.call(this,state_24964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22540__auto____0;
csasync$proc$delayer_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22540__auto____1;
return csasync$proc$delayer_$_state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_24973 = f__22561__auto__.call(null);
(statearr_24973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_24973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

//# sourceMappingURL=proc.js.map