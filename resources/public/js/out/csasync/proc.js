// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args29825 = [];
var len__27637__auto___29888 = arguments.length;
var i__27638__auto___29889 = (0);
while(true){
if((i__27638__auto___29889 < len__27637__auto___29888)){
args29825.push((arguments[i__27638__auto___29889]));

var G__29890 = (i__27638__auto___29889 + (1));
i__27638__auto___29889 = G__29890;
continue;
} else {
}
break;
}

var G__29827 = args29825.length;
switch (G__29827) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29825.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__28592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28592__auto__){
return (function (){
var f__28593__auto__ = (function (){var switch__28571__auto__ = ((function (c__28592__auto__){
return (function (state_29841){
var state_val_29842 = (state_29841[(1)]);
if((state_val_29842 === (1))){
var state_29841__$1 = state_29841;
var statearr_29843_29892 = state_29841__$1;
(statearr_29843_29892[(2)] = null);

(statearr_29843_29892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (2))){
var state_29841__$1 = state_29841;
var statearr_29844_29893 = state_29841__$1;
(statearr_29844_29893[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (3))){
var inst_29839 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29841__$1,inst_29839);
} else {
if((state_val_29842 === (4))){
var inst_29830 = func.call(null);
var inst_29831 = cljs.core.async.timeout.call(null,time_out);
var state_29841__$1 = (function (){var statearr_29846 = state_29841;
(statearr_29846[(7)] = inst_29830);

return statearr_29846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29841__$1,(7),inst_29831);
} else {
if((state_val_29842 === (5))){
var state_29841__$1 = state_29841;
var statearr_29847_29894 = state_29841__$1;
(statearr_29847_29894[(2)] = null);

(statearr_29847_29894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (6))){
var inst_29837 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29848_29895 = state_29841__$1;
(statearr_29848_29895[(2)] = inst_29837);

(statearr_29848_29895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (7))){
var inst_29833 = (state_29841[(2)]);
var state_29841__$1 = (function (){var statearr_29849 = state_29841;
(statearr_29849[(8)] = inst_29833);

return statearr_29849;
})();
var statearr_29850_29896 = state_29841__$1;
(statearr_29850_29896[(2)] = null);

(statearr_29850_29896[(1)] = (2));


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
});})(c__28592__auto__))
;
return ((function (switch__28571__auto__,c__28592__auto__){
return (function() {
var csasync$proc$state_machine__28572__auto__ = null;
var csasync$proc$state_machine__28572__auto____0 = (function (){
var statearr_29854 = [null,null,null,null,null,null,null,null,null];
(statearr_29854[(0)] = csasync$proc$state_machine__28572__auto__);

(statearr_29854[(1)] = (1));

return statearr_29854;
});
var csasync$proc$state_machine__28572__auto____1 = (function (state_29841){
while(true){
var ret_value__28573__auto__ = (function (){try{while(true){
var result__28574__auto__ = switch__28571__auto__.call(null,state_29841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28574__auto__;
}
break;
}
}catch (e29855){if((e29855 instanceof Object)){
var ex__28575__auto__ = e29855;
var statearr_29856_29897 = state_29841;
(statearr_29856_29897[(5)] = ex__28575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29898 = state_29841;
state_29841 = G__29898;
continue;
} else {
return ret_value__28573__auto__;
}
break;
}
});
csasync$proc$state_machine__28572__auto__ = function(state_29841){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__28572__auto____0.call(this);
case 1:
return csasync$proc$state_machine__28572__auto____1.call(this,state_29841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__28572__auto____0;
csasync$proc$state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__28572__auto____1;
return csasync$proc$state_machine__28572__auto__;
})()
;})(switch__28571__auto__,c__28592__auto__))
})();
var state__28594__auto__ = (function (){var statearr_29857 = f__28593__auto__.call(null);
(statearr_29857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28592__auto__);

return statearr_29857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28594__auto__);
});})(c__28592__auto__))
);

return c__28592__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__28592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28592__auto__){
return (function (){
var f__28593__auto__ = (function (){var switch__28571__auto__ = ((function (c__28592__auto__){
return (function (state_29871){
var state_val_29872 = (state_29871[(1)]);
if((state_val_29872 === (1))){
var state_29871__$1 = state_29871;
var statearr_29873_29899 = state_29871__$1;
(statearr_29873_29899[(2)] = null);

(statearr_29873_29899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (2))){
var state_29871__$1 = state_29871;
var statearr_29874_29900 = state_29871__$1;
(statearr_29874_29900[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (3))){
var inst_29869 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29871__$1,inst_29869);
} else {
if((state_val_29872 === (4))){
var inst_29860 = func.call(null,param);
var inst_29861 = cljs.core.async.timeout.call(null,time_out);
var state_29871__$1 = (function (){var statearr_29876 = state_29871;
(statearr_29876[(7)] = inst_29860);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29871__$1,(7),inst_29861);
} else {
if((state_val_29872 === (5))){
var state_29871__$1 = state_29871;
var statearr_29877_29901 = state_29871__$1;
(statearr_29877_29901[(2)] = null);

(statearr_29877_29901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (6))){
var inst_29867 = (state_29871[(2)]);
var state_29871__$1 = state_29871;
var statearr_29878_29902 = state_29871__$1;
(statearr_29878_29902[(2)] = inst_29867);

(statearr_29878_29902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29872 === (7))){
var inst_29863 = (state_29871[(2)]);
var state_29871__$1 = (function (){var statearr_29879 = state_29871;
(statearr_29879[(8)] = inst_29863);

return statearr_29879;
})();
var statearr_29880_29903 = state_29871__$1;
(statearr_29880_29903[(2)] = null);

(statearr_29880_29903[(1)] = (2));


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
});})(c__28592__auto__))
;
return ((function (switch__28571__auto__,c__28592__auto__){
return (function() {
var csasync$proc$state_machine__28572__auto__ = null;
var csasync$proc$state_machine__28572__auto____0 = (function (){
var statearr_29884 = [null,null,null,null,null,null,null,null,null];
(statearr_29884[(0)] = csasync$proc$state_machine__28572__auto__);

(statearr_29884[(1)] = (1));

return statearr_29884;
});
var csasync$proc$state_machine__28572__auto____1 = (function (state_29871){
while(true){
var ret_value__28573__auto__ = (function (){try{while(true){
var result__28574__auto__ = switch__28571__auto__.call(null,state_29871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28574__auto__;
}
break;
}
}catch (e29885){if((e29885 instanceof Object)){
var ex__28575__auto__ = e29885;
var statearr_29886_29904 = state_29871;
(statearr_29886_29904[(5)] = ex__28575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29905 = state_29871;
state_29871 = G__29905;
continue;
} else {
return ret_value__28573__auto__;
}
break;
}
});
csasync$proc$state_machine__28572__auto__ = function(state_29871){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__28572__auto____0.call(this);
case 1:
return csasync$proc$state_machine__28572__auto____1.call(this,state_29871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__28572__auto____0;
csasync$proc$state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__28572__auto____1;
return csasync$proc$state_machine__28572__auto__;
})()
;})(switch__28571__auto__,c__28592__auto__))
})();
var state__28594__auto__ = (function (){var statearr_29887 = f__28593__auto__.call(null);
(statearr_29887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28592__auto__);

return statearr_29887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28594__auto__);
});})(c__28592__auto__))
);

return c__28592__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__28592__auto___29990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28592__auto___29990){
return (function (){
var f__28593__auto__ = (function (){var switch__28571__auto__ = ((function (c__28592__auto___29990){
return (function (state_29968){
var state_val_29969 = (state_29968[(1)]);
if((state_val_29969 === (7))){
var inst_29957 = cljs.core.async.timeout.call(null,time_out);
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29968__$1,(10),inst_29957);
} else {
if((state_val_29969 === (1))){
var state_29968__$1 = state_29968;
var statearr_29970_29991 = state_29968__$1;
(statearr_29970_29991[(2)] = null);

(statearr_29970_29991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (4))){
var inst_29952 = proc_fn.call(null);
var state_29968__$1 = state_29968;
var statearr_29971_29992 = state_29968__$1;
(statearr_29971_29992[(2)] = inst_29952);

(statearr_29971_29992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (6))){
var inst_29955 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
if(cljs.core.truth_(inst_29955)){
var statearr_29972_29993 = state_29968__$1;
(statearr_29972_29993[(1)] = (7));

} else {
var statearr_29973_29994 = state_29968__$1;
(statearr_29973_29994[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (3))){
var inst_29965 = (state_29968[(2)]);
var inst_29966 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_29968__$1 = (function (){var statearr_29974 = state_29968;
(statearr_29974[(7)] = inst_29965);

return statearr_29974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29968__$1,inst_29966);
} else {
if((state_val_29969 === (2))){
var inst_29950 = (state_29968[(8)]);
var inst_29949 = cljs.core.deref.call(null,status);
var inst_29950__$1 = cljs.core._EQ_.call(null,inst_29949,"RUN");
var state_29968__$1 = (function (){var statearr_29975 = state_29968;
(statearr_29975[(8)] = inst_29950__$1);

return statearr_29975;
})();
if(inst_29950__$1){
var statearr_29976_29995 = state_29968__$1;
(statearr_29976_29995[(1)] = (4));

} else {
var statearr_29977_29996 = state_29968__$1;
(statearr_29977_29996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (9))){
var inst_29963 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
var statearr_29978_29997 = state_29968__$1;
(statearr_29978_29997[(2)] = inst_29963);

(statearr_29978_29997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (5))){
var inst_29950 = (state_29968[(8)]);
var state_29968__$1 = state_29968;
var statearr_29979_29998 = state_29968__$1;
(statearr_29979_29998[(2)] = inst_29950);

(statearr_29979_29998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (10))){
var inst_29959 = (state_29968[(2)]);
var state_29968__$1 = (function (){var statearr_29980 = state_29968;
(statearr_29980[(9)] = inst_29959);

return statearr_29980;
})();
var statearr_29981_29999 = state_29968__$1;
(statearr_29981_29999[(2)] = null);

(statearr_29981_29999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (8))){
var state_29968__$1 = state_29968;
var statearr_29982_30000 = state_29968__$1;
(statearr_29982_30000[(2)] = null);

(statearr_29982_30000[(1)] = (9));


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
});})(c__28592__auto___29990))
;
return ((function (switch__28571__auto__,c__28592__auto___29990){
return (function() {
var csasync$proc$start_process_$_state_machine__28572__auto__ = null;
var csasync$proc$start_process_$_state_machine__28572__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29986[(0)] = csasync$proc$start_process_$_state_machine__28572__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var csasync$proc$start_process_$_state_machine__28572__auto____1 = (function (state_29968){
while(true){
var ret_value__28573__auto__ = (function (){try{while(true){
var result__28574__auto__ = switch__28571__auto__.call(null,state_29968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28574__auto__;
}
break;
}
}catch (e29987){if((e29987 instanceof Object)){
var ex__28575__auto__ = e29987;
var statearr_29988_30001 = state_29968;
(statearr_29988_30001[(5)] = ex__28575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30002 = state_29968;
state_29968 = G__30002;
continue;
} else {
return ret_value__28573__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__28572__auto__ = function(state_29968){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__28572__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__28572__auto____1.call(this,state_29968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__28572__auto____0;
csasync$proc$start_process_$_state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__28572__auto____1;
return csasync$proc$start_process_$_state_machine__28572__auto__;
})()
;})(switch__28571__auto__,c__28592__auto___29990))
})();
var state__28594__auto__ = (function (){var statearr_29989 = f__28593__auto__.call(null);
(statearr_29989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28592__auto___29990);

return statearr_29989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28594__auto__);
});})(c__28592__auto___29990))
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
var c__28592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28592__auto__){
return (function (){
var f__28593__auto__ = (function (){var switch__28571__auto__ = ((function (c__28592__auto__){
return (function (state_30023){
var state_val_30024 = (state_30023[(1)]);
if((state_val_30024 === (1))){
var inst_30018 = cljs.core.async.timeout.call(null,time);
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,(2),inst_30018);
} else {
if((state_val_30024 === (2))){
var inst_30020 = (state_30023[(2)]);
var inst_30021 = func.call(null);
var state_30023__$1 = (function (){var statearr_30025 = state_30023;
(statearr_30025[(7)] = inst_30020);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30023__$1,inst_30021);
} else {
return null;
}
}
});})(c__28592__auto__))
;
return ((function (switch__28571__auto__,c__28592__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__28572__auto__ = null;
var csasync$proc$delayer_$_state_machine__28572__auto____0 = (function (){
var statearr_30029 = [null,null,null,null,null,null,null,null];
(statearr_30029[(0)] = csasync$proc$delayer_$_state_machine__28572__auto__);

(statearr_30029[(1)] = (1));

return statearr_30029;
});
var csasync$proc$delayer_$_state_machine__28572__auto____1 = (function (state_30023){
while(true){
var ret_value__28573__auto__ = (function (){try{while(true){
var result__28574__auto__ = switch__28571__auto__.call(null,state_30023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28574__auto__;
}
break;
}
}catch (e30030){if((e30030 instanceof Object)){
var ex__28575__auto__ = e30030;
var statearr_30031_30033 = state_30023;
(statearr_30031_30033[(5)] = ex__28575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30034 = state_30023;
state_30023 = G__30034;
continue;
} else {
return ret_value__28573__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__28572__auto__ = function(state_30023){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__28572__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__28572__auto____1.call(this,state_30023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__28572__auto____0;
csasync$proc$delayer_$_state_machine__28572__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__28572__auto____1;
return csasync$proc$delayer_$_state_machine__28572__auto__;
})()
;})(switch__28571__auto__,c__28592__auto__))
})();
var state__28594__auto__ = (function (){var statearr_30032 = f__28593__auto__.call(null);
(statearr_30032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28592__auto__);

return statearr_30032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28594__auto__);
});})(c__28592__auto__))
);

return c__28592__auto__;
});

//# sourceMappingURL=proc.js.map