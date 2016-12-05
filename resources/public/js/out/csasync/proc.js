// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args30799 = [];
var len__20745__auto___30862 = arguments.length;
var i__20746__auto___30863 = (0);
while(true){
if((i__20746__auto___30863 < len__20745__auto___30862)){
args30799.push((arguments[i__20746__auto___30863]));

var G__30864 = (i__20746__auto___30863 + (1));
i__20746__auto___30863 = G__30864;
continue;
} else {
}
break;
}

var G__30801 = args30799.length;
switch (G__30801) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30799.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21700__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21700__auto__){
return (function (){
var f__21701__auto__ = (function (){var switch__21679__auto__ = ((function (c__21700__auto__){
return (function (state_30815){
var state_val_30816 = (state_30815[(1)]);
if((state_val_30816 === (1))){
var state_30815__$1 = state_30815;
var statearr_30817_30866 = state_30815__$1;
(statearr_30817_30866[(2)] = null);

(statearr_30817_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (2))){
var state_30815__$1 = state_30815;
var statearr_30818_30867 = state_30815__$1;
(statearr_30818_30867[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (3))){
var inst_30813 = (state_30815[(2)]);
var state_30815__$1 = state_30815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30815__$1,inst_30813);
} else {
if((state_val_30816 === (4))){
var inst_30804 = func.call(null);
var inst_30805 = cljs.core.async.timeout.call(null,time_out);
var state_30815__$1 = (function (){var statearr_30820 = state_30815;
(statearr_30820[(7)] = inst_30804);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30815__$1,(7),inst_30805);
} else {
if((state_val_30816 === (5))){
var state_30815__$1 = state_30815;
var statearr_30821_30868 = state_30815__$1;
(statearr_30821_30868[(2)] = null);

(statearr_30821_30868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (6))){
var inst_30811 = (state_30815[(2)]);
var state_30815__$1 = state_30815;
var statearr_30822_30869 = state_30815__$1;
(statearr_30822_30869[(2)] = inst_30811);

(statearr_30822_30869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30816 === (7))){
var inst_30807 = (state_30815[(2)]);
var state_30815__$1 = (function (){var statearr_30823 = state_30815;
(statearr_30823[(8)] = inst_30807);

return statearr_30823;
})();
var statearr_30824_30870 = state_30815__$1;
(statearr_30824_30870[(2)] = null);

(statearr_30824_30870[(1)] = (2));


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
});})(c__21700__auto__))
;
return ((function (switch__21679__auto__,c__21700__auto__){
return (function() {
var csasync$proc$state_machine__21680__auto__ = null;
var csasync$proc$state_machine__21680__auto____0 = (function (){
var statearr_30828 = [null,null,null,null,null,null,null,null,null];
(statearr_30828[(0)] = csasync$proc$state_machine__21680__auto__);

(statearr_30828[(1)] = (1));

return statearr_30828;
});
var csasync$proc$state_machine__21680__auto____1 = (function (state_30815){
while(true){
var ret_value__21681__auto__ = (function (){try{while(true){
var result__21682__auto__ = switch__21679__auto__.call(null,state_30815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21682__auto__;
}
break;
}
}catch (e30829){if((e30829 instanceof Object)){
var ex__21683__auto__ = e30829;
var statearr_30830_30871 = state_30815;
(statearr_30830_30871[(5)] = ex__21683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30872 = state_30815;
state_30815 = G__30872;
continue;
} else {
return ret_value__21681__auto__;
}
break;
}
});
csasync$proc$state_machine__21680__auto__ = function(state_30815){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21680__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21680__auto____1.call(this,state_30815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21680__auto____0;
csasync$proc$state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21680__auto____1;
return csasync$proc$state_machine__21680__auto__;
})()
;})(switch__21679__auto__,c__21700__auto__))
})();
var state__21702__auto__ = (function (){var statearr_30831 = f__21701__auto__.call(null);
(statearr_30831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21700__auto__);

return statearr_30831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21702__auto__);
});})(c__21700__auto__))
);

return c__21700__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21700__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21700__auto__){
return (function (){
var f__21701__auto__ = (function (){var switch__21679__auto__ = ((function (c__21700__auto__){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (1))){
var state_30845__$1 = state_30845;
var statearr_30847_30873 = state_30845__$1;
(statearr_30847_30873[(2)] = null);

(statearr_30847_30873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (2))){
var state_30845__$1 = state_30845;
var statearr_30848_30874 = state_30845__$1;
(statearr_30848_30874[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (3))){
var inst_30843 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
if((state_val_30846 === (4))){
var inst_30834 = func.call(null,param);
var inst_30835 = cljs.core.async.timeout.call(null,time_out);
var state_30845__$1 = (function (){var statearr_30850 = state_30845;
(statearr_30850[(7)] = inst_30834);

return statearr_30850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(7),inst_30835);
} else {
if((state_val_30846 === (5))){
var state_30845__$1 = state_30845;
var statearr_30851_30875 = state_30845__$1;
(statearr_30851_30875[(2)] = null);

(statearr_30851_30875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (6))){
var inst_30841 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30852_30876 = state_30845__$1;
(statearr_30852_30876[(2)] = inst_30841);

(statearr_30852_30876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (7))){
var inst_30837 = (state_30845[(2)]);
var state_30845__$1 = (function (){var statearr_30853 = state_30845;
(statearr_30853[(8)] = inst_30837);

return statearr_30853;
})();
var statearr_30854_30877 = state_30845__$1;
(statearr_30854_30877[(2)] = null);

(statearr_30854_30877[(1)] = (2));


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
});})(c__21700__auto__))
;
return ((function (switch__21679__auto__,c__21700__auto__){
return (function() {
var csasync$proc$state_machine__21680__auto__ = null;
var csasync$proc$state_machine__21680__auto____0 = (function (){
var statearr_30858 = [null,null,null,null,null,null,null,null,null];
(statearr_30858[(0)] = csasync$proc$state_machine__21680__auto__);

(statearr_30858[(1)] = (1));

return statearr_30858;
});
var csasync$proc$state_machine__21680__auto____1 = (function (state_30845){
while(true){
var ret_value__21681__auto__ = (function (){try{while(true){
var result__21682__auto__ = switch__21679__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21682__auto__;
}
break;
}
}catch (e30859){if((e30859 instanceof Object)){
var ex__21683__auto__ = e30859;
var statearr_30860_30878 = state_30845;
(statearr_30860_30878[(5)] = ex__21683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30879 = state_30845;
state_30845 = G__30879;
continue;
} else {
return ret_value__21681__auto__;
}
break;
}
});
csasync$proc$state_machine__21680__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21680__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21680__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21680__auto____0;
csasync$proc$state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21680__auto____1;
return csasync$proc$state_machine__21680__auto__;
})()
;})(switch__21679__auto__,c__21700__auto__))
})();
var state__21702__auto__ = (function (){var statearr_30861 = f__21701__auto__.call(null);
(statearr_30861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21700__auto__);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21702__auto__);
});})(c__21700__auto__))
);

return c__21700__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21700__auto___30964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21700__auto___30964){
return (function (){
var f__21701__auto__ = (function (){var switch__21679__auto__ = ((function (c__21700__auto___30964){
return (function (state_30942){
var state_val_30943 = (state_30942[(1)]);
if((state_val_30943 === (7))){
var inst_30931 = cljs.core.async.timeout.call(null,time_out);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30942__$1,(10),inst_30931);
} else {
if((state_val_30943 === (1))){
var state_30942__$1 = state_30942;
var statearr_30944_30965 = state_30942__$1;
(statearr_30944_30965[(2)] = null);

(statearr_30944_30965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (4))){
var inst_30926 = proc_fn.call(null);
var state_30942__$1 = state_30942;
var statearr_30945_30966 = state_30942__$1;
(statearr_30945_30966[(2)] = inst_30926);

(statearr_30945_30966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (6))){
var inst_30929 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30929)){
var statearr_30946_30967 = state_30942__$1;
(statearr_30946_30967[(1)] = (7));

} else {
var statearr_30947_30968 = state_30942__$1;
(statearr_30947_30968[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (3))){
var inst_30939 = (state_30942[(2)]);
var inst_30940 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_30942__$1 = (function (){var statearr_30948 = state_30942;
(statearr_30948[(7)] = inst_30939);

return statearr_30948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30942__$1,inst_30940);
} else {
if((state_val_30943 === (2))){
var inst_30924 = (state_30942[(8)]);
var inst_30923 = cljs.core.deref.call(null,status);
var inst_30924__$1 = cljs.core._EQ_.call(null,inst_30923,"RUN");
var state_30942__$1 = (function (){var statearr_30949 = state_30942;
(statearr_30949[(8)] = inst_30924__$1);

return statearr_30949;
})();
if(inst_30924__$1){
var statearr_30950_30969 = state_30942__$1;
(statearr_30950_30969[(1)] = (4));

} else {
var statearr_30951_30970 = state_30942__$1;
(statearr_30951_30970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (9))){
var inst_30937 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30952_30971 = state_30942__$1;
(statearr_30952_30971[(2)] = inst_30937);

(statearr_30952_30971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (5))){
var inst_30924 = (state_30942[(8)]);
var state_30942__$1 = state_30942;
var statearr_30953_30972 = state_30942__$1;
(statearr_30953_30972[(2)] = inst_30924);

(statearr_30953_30972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (10))){
var inst_30933 = (state_30942[(2)]);
var state_30942__$1 = (function (){var statearr_30954 = state_30942;
(statearr_30954[(9)] = inst_30933);

return statearr_30954;
})();
var statearr_30955_30973 = state_30942__$1;
(statearr_30955_30973[(2)] = null);

(statearr_30955_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (8))){
var state_30942__$1 = state_30942;
var statearr_30956_30974 = state_30942__$1;
(statearr_30956_30974[(2)] = null);

(statearr_30956_30974[(1)] = (9));


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
});})(c__21700__auto___30964))
;
return ((function (switch__21679__auto__,c__21700__auto___30964){
return (function() {
var csasync$proc$start_process_$_state_machine__21680__auto__ = null;
var csasync$proc$start_process_$_state_machine__21680__auto____0 = (function (){
var statearr_30960 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30960[(0)] = csasync$proc$start_process_$_state_machine__21680__auto__);

(statearr_30960[(1)] = (1));

return statearr_30960;
});
var csasync$proc$start_process_$_state_machine__21680__auto____1 = (function (state_30942){
while(true){
var ret_value__21681__auto__ = (function (){try{while(true){
var result__21682__auto__ = switch__21679__auto__.call(null,state_30942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21682__auto__;
}
break;
}
}catch (e30961){if((e30961 instanceof Object)){
var ex__21683__auto__ = e30961;
var statearr_30962_30975 = state_30942;
(statearr_30962_30975[(5)] = ex__21683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30976 = state_30942;
state_30942 = G__30976;
continue;
} else {
return ret_value__21681__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21680__auto__ = function(state_30942){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21680__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21680__auto____1.call(this,state_30942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21680__auto____0;
csasync$proc$start_process_$_state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21680__auto____1;
return csasync$proc$start_process_$_state_machine__21680__auto__;
})()
;})(switch__21679__auto__,c__21700__auto___30964))
})();
var state__21702__auto__ = (function (){var statearr_30963 = f__21701__auto__.call(null);
(statearr_30963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21700__auto___30964);

return statearr_30963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21702__auto__);
});})(c__21700__auto___30964))
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
var c__21700__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21700__auto__){
return (function (){
var f__21701__auto__ = (function (){var switch__21679__auto__ = ((function (c__21700__auto__){
return (function (state_30997){
var state_val_30998 = (state_30997[(1)]);
if((state_val_30998 === (1))){
var inst_30992 = cljs.core.async.timeout.call(null,time);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(2),inst_30992);
} else {
if((state_val_30998 === (2))){
var inst_30994 = (state_30997[(2)]);
var inst_30995 = func.call(null);
var state_30997__$1 = (function (){var statearr_30999 = state_30997;
(statearr_30999[(7)] = inst_30994);

return statearr_30999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30997__$1,inst_30995);
} else {
return null;
}
}
});})(c__21700__auto__))
;
return ((function (switch__21679__auto__,c__21700__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21680__auto__ = null;
var csasync$proc$delayer_$_state_machine__21680__auto____0 = (function (){
var statearr_31003 = [null,null,null,null,null,null,null,null];
(statearr_31003[(0)] = csasync$proc$delayer_$_state_machine__21680__auto__);

(statearr_31003[(1)] = (1));

return statearr_31003;
});
var csasync$proc$delayer_$_state_machine__21680__auto____1 = (function (state_30997){
while(true){
var ret_value__21681__auto__ = (function (){try{while(true){
var result__21682__auto__ = switch__21679__auto__.call(null,state_30997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21682__auto__;
}
break;
}
}catch (e31004){if((e31004 instanceof Object)){
var ex__21683__auto__ = e31004;
var statearr_31005_31007 = state_30997;
(statearr_31005_31007[(5)] = ex__21683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31008 = state_30997;
state_30997 = G__31008;
continue;
} else {
return ret_value__21681__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21680__auto__ = function(state_30997){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21680__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21680__auto____1.call(this,state_30997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21680__auto____0;
csasync$proc$delayer_$_state_machine__21680__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21680__auto____1;
return csasync$proc$delayer_$_state_machine__21680__auto__;
})()
;})(switch__21679__auto__,c__21700__auto__))
})();
var state__21702__auto__ = (function (){var statearr_31006 = f__21701__auto__.call(null);
(statearr_31006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21700__auto__);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21702__auto__);
});})(c__21700__auto__))
);

return c__21700__auto__;
});

//# sourceMappingURL=proc.js.map