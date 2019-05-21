// Compiled by ClojureScript 1.10.439 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var G__29797 = arguments.length;
switch (G__29797) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_29811){
var state_val_29812 = (state_29811[(1)]);
if((state_val_29812 === (1))){
var state_29811__$1 = state_29811;
var statearr_29813_29853 = state_29811__$1;
(statearr_29813_29853[(2)] = null);

(statearr_29813_29853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (2))){
var state_29811__$1 = state_29811;
var statearr_29814_29854 = state_29811__$1;
(statearr_29814_29854[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (3))){
var inst_29809 = (state_29811[(2)]);
var state_29811__$1 = state_29811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29811__$1,inst_29809);
} else {
if((state_val_29812 === (4))){
var inst_29800 = func.call(null);
var inst_29801 = cljs.core.async.timeout.call(null,time_out);
var state_29811__$1 = (function (){var statearr_29816 = state_29811;
(statearr_29816[(7)] = inst_29800);

return statearr_29816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29811__$1,(7),inst_29801);
} else {
if((state_val_29812 === (5))){
var state_29811__$1 = state_29811;
var statearr_29817_29855 = state_29811__$1;
(statearr_29817_29855[(2)] = null);

(statearr_29817_29855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (6))){
var inst_29807 = (state_29811[(2)]);
var state_29811__$1 = state_29811;
var statearr_29818_29856 = state_29811__$1;
(statearr_29818_29856[(2)] = inst_29807);

(statearr_29818_29856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (7))){
var inst_29803 = (state_29811[(2)]);
var state_29811__$1 = (function (){var statearr_29819 = state_29811;
(statearr_29819[(8)] = inst_29803);

return statearr_29819;
})();
var statearr_29820_29857 = state_29811__$1;
(statearr_29820_29857[(2)] = null);

(statearr_29820_29857[(1)] = (2));


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
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var csasync$proc$state_machine__4665__auto__ = null;
var csasync$proc$state_machine__4665__auto____0 = (function (){
var statearr_29821 = [null,null,null,null,null,null,null,null,null];
(statearr_29821[(0)] = csasync$proc$state_machine__4665__auto__);

(statearr_29821[(1)] = (1));

return statearr_29821;
});
var csasync$proc$state_machine__4665__auto____1 = (function (state_29811){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_29811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e29822){if((e29822 instanceof Object)){
var ex__4668__auto__ = e29822;
var statearr_29823_29858 = state_29811;
(statearr_29823_29858[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29859 = state_29811;
state_29811 = G__29859;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
csasync$proc$state_machine__4665__auto__ = function(state_29811){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__4665__auto____0.call(this);
case 1:
return csasync$proc$state_machine__4665__auto____1.call(this,state_29811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__4665__auto____0;
csasync$proc$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__4665__auto____1;
return csasync$proc$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_29824 = f__4832__auto__.call(null);
(statearr_29824[(6)] = c__4831__auto__);

return statearr_29824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_29838){
var state_val_29839 = (state_29838[(1)]);
if((state_val_29839 === (1))){
var state_29838__$1 = state_29838;
var statearr_29840_29860 = state_29838__$1;
(statearr_29840_29860[(2)] = null);

(statearr_29840_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (2))){
var state_29838__$1 = state_29838;
var statearr_29841_29861 = state_29838__$1;
(statearr_29841_29861[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (3))){
var inst_29836 = (state_29838[(2)]);
var state_29838__$1 = state_29838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29838__$1,inst_29836);
} else {
if((state_val_29839 === (4))){
var inst_29827 = func.call(null,param);
var inst_29828 = cljs.core.async.timeout.call(null,time_out);
var state_29838__$1 = (function (){var statearr_29843 = state_29838;
(statearr_29843[(7)] = inst_29827);

return statearr_29843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29838__$1,(7),inst_29828);
} else {
if((state_val_29839 === (5))){
var state_29838__$1 = state_29838;
var statearr_29844_29862 = state_29838__$1;
(statearr_29844_29862[(2)] = null);

(statearr_29844_29862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (6))){
var inst_29834 = (state_29838[(2)]);
var state_29838__$1 = state_29838;
var statearr_29845_29863 = state_29838__$1;
(statearr_29845_29863[(2)] = inst_29834);

(statearr_29845_29863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (7))){
var inst_29830 = (state_29838[(2)]);
var state_29838__$1 = (function (){var statearr_29846 = state_29838;
(statearr_29846[(8)] = inst_29830);

return statearr_29846;
})();
var statearr_29847_29864 = state_29838__$1;
(statearr_29847_29864[(2)] = null);

(statearr_29847_29864[(1)] = (2));


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
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var csasync$proc$state_machine__4665__auto__ = null;
var csasync$proc$state_machine__4665__auto____0 = (function (){
var statearr_29848 = [null,null,null,null,null,null,null,null,null];
(statearr_29848[(0)] = csasync$proc$state_machine__4665__auto__);

(statearr_29848[(1)] = (1));

return statearr_29848;
});
var csasync$proc$state_machine__4665__auto____1 = (function (state_29838){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_29838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e29849){if((e29849 instanceof Object)){
var ex__4668__auto__ = e29849;
var statearr_29850_29865 = state_29838;
(statearr_29850_29865[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29866 = state_29838;
state_29838 = G__29866;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
csasync$proc$state_machine__4665__auto__ = function(state_29838){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__4665__auto____0.call(this);
case 1:
return csasync$proc$state_machine__4665__auto____1.call(this,state_29838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__4665__auto____0;
csasync$proc$state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__4665__auto____1;
return csasync$proc$state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_29851 = f__4832__auto__.call(null);
(statearr_29851[(6)] = c__4831__auto__);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__4831__auto___29918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto___29918){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto___29918){
return (function (state_29894){
var state_val_29895 = (state_29894[(1)]);
if((state_val_29895 === (7))){
var inst_29876 = cljs.core.async.timeout.call(null,time_out);
var state_29894__$1 = state_29894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29894__$1,(10),inst_29876);
} else {
if((state_val_29895 === (1))){
var state_29894__$1 = state_29894;
var statearr_29896_29919 = state_29894__$1;
(statearr_29896_29919[(2)] = null);

(statearr_29896_29919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (4))){
var inst_29871 = proc_fn.call(null);
var state_29894__$1 = state_29894;
var statearr_29897_29920 = state_29894__$1;
(statearr_29897_29920[(2)] = inst_29871);

(statearr_29897_29920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (13))){
var inst_29891 = (state_29894[(2)]);
var inst_29892 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_29894__$1 = (function (){var statearr_29898 = state_29894;
(statearr_29898[(7)] = inst_29891);

return statearr_29898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29894__$1,inst_29892);
} else {
if((state_val_29895 === (6))){
var inst_29874 = (state_29894[(2)]);
var state_29894__$1 = state_29894;
if(cljs.core.truth_(inst_29874)){
var statearr_29899_29921 = state_29894__$1;
(statearr_29899_29921[(1)] = (7));

} else {
var statearr_29900_29922 = state_29894__$1;
(statearr_29900_29922[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (3))){
var inst_29884 = (state_29894[(2)]);
var inst_29885 = (final_fun == null);
var inst_29886 = cljs.core.not.call(null,inst_29885);
var state_29894__$1 = (function (){var statearr_29901 = state_29894;
(statearr_29901[(8)] = inst_29884);

return statearr_29901;
})();
if(inst_29886){
var statearr_29902_29923 = state_29894__$1;
(statearr_29902_29923[(1)] = (11));

} else {
var statearr_29903_29924 = state_29894__$1;
(statearr_29903_29924[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (12))){
var state_29894__$1 = state_29894;
var statearr_29904_29925 = state_29894__$1;
(statearr_29904_29925[(2)] = null);

(statearr_29904_29925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (2))){
var inst_29869 = (state_29894[(9)]);
var inst_29868 = cljs.core.deref.call(null,status);
var inst_29869__$1 = cljs.core._EQ_.call(null,inst_29868,"RUN");
var state_29894__$1 = (function (){var statearr_29905 = state_29894;
(statearr_29905[(9)] = inst_29869__$1);

return statearr_29905;
})();
if(inst_29869__$1){
var statearr_29906_29926 = state_29894__$1;
(statearr_29906_29926[(1)] = (4));

} else {
var statearr_29907_29927 = state_29894__$1;
(statearr_29907_29927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (11))){
var inst_29888 = final_fun.call(null);
var state_29894__$1 = state_29894;
var statearr_29908_29928 = state_29894__$1;
(statearr_29908_29928[(2)] = inst_29888);

(statearr_29908_29928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (9))){
var inst_29882 = (state_29894[(2)]);
var state_29894__$1 = state_29894;
var statearr_29909_29929 = state_29894__$1;
(statearr_29909_29929[(2)] = inst_29882);

(statearr_29909_29929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (5))){
var inst_29869 = (state_29894[(9)]);
var state_29894__$1 = state_29894;
var statearr_29910_29930 = state_29894__$1;
(statearr_29910_29930[(2)] = inst_29869);

(statearr_29910_29930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (10))){
var inst_29878 = (state_29894[(2)]);
var state_29894__$1 = (function (){var statearr_29911 = state_29894;
(statearr_29911[(10)] = inst_29878);

return statearr_29911;
})();
var statearr_29912_29931 = state_29894__$1;
(statearr_29912_29931[(2)] = null);

(statearr_29912_29931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29895 === (8))){
var state_29894__$1 = state_29894;
var statearr_29913_29932 = state_29894__$1;
(statearr_29913_29932[(2)] = null);

(statearr_29913_29932[(1)] = (9));


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
});})(c__4831__auto___29918))
;
return ((function (switch__4664__auto__,c__4831__auto___29918){
return (function() {
var csasync$proc$start_process_$_state_machine__4665__auto__ = null;
var csasync$proc$start_process_$_state_machine__4665__auto____0 = (function (){
var statearr_29914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29914[(0)] = csasync$proc$start_process_$_state_machine__4665__auto__);

(statearr_29914[(1)] = (1));

return statearr_29914;
});
var csasync$proc$start_process_$_state_machine__4665__auto____1 = (function (state_29894){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_29894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e29915){if((e29915 instanceof Object)){
var ex__4668__auto__ = e29915;
var statearr_29916_29933 = state_29894;
(statearr_29916_29933[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29934 = state_29894;
state_29894 = G__29934;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__4665__auto__ = function(state_29894){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__4665__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__4665__auto____1.call(this,state_29894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__4665__auto____0;
csasync$proc$start_process_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__4665__auto____1;
return csasync$proc$start_process_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto___29918))
})();
var state__4833__auto__ = (function (){var statearr_29917 = f__4832__auto__.call(null);
(statearr_29917[(6)] = c__4831__auto___29918);

return statearr_29917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto___29918))
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
var c__4831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4831__auto__){
return (function (){
var f__4832__auto__ = (function (){var switch__4664__auto__ = ((function (c__4831__auto__){
return (function (state_29940){
var state_val_29941 = (state_29940[(1)]);
if((state_val_29941 === (1))){
var inst_29935 = cljs.core.async.timeout.call(null,time);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29940__$1,(2),inst_29935);
} else {
if((state_val_29941 === (2))){
var inst_29937 = (state_29940[(2)]);
var inst_29938 = func.call(null);
var state_29940__$1 = (function (){var statearr_29942 = state_29940;
(statearr_29942[(7)] = inst_29937);

return statearr_29942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29940__$1,inst_29938);
} else {
return null;
}
}
});})(c__4831__auto__))
;
return ((function (switch__4664__auto__,c__4831__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__4665__auto__ = null;
var csasync$proc$delayer_$_state_machine__4665__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = csasync$proc$delayer_$_state_machine__4665__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var csasync$proc$delayer_$_state_machine__4665__auto____1 = (function (state_29940){
while(true){
var ret_value__4666__auto__ = (function (){try{while(true){
var result__4667__auto__ = switch__4664__auto__.call(null,state_29940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4667__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__4668__auto__ = e29944;
var statearr_29945_29947 = state_29940;
(statearr_29945_29947[(5)] = ex__4668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29948 = state_29940;
state_29940 = G__29948;
continue;
} else {
return ret_value__4666__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__4665__auto__ = function(state_29940){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__4665__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__4665__auto____1.call(this,state_29940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__4665__auto____0;
csasync$proc$delayer_$_state_machine__4665__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__4665__auto____1;
return csasync$proc$delayer_$_state_machine__4665__auto__;
})()
;})(switch__4664__auto__,c__4831__auto__))
})();
var state__4833__auto__ = (function (){var statearr_29946 = f__4832__auto__.call(null);
(statearr_29946[(6)] = c__4831__auto__);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4833__auto__);
});})(c__4831__auto__))
);

return c__4831__auto__;
});

//# sourceMappingURL=proc.js.map
