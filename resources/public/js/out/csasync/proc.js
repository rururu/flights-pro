// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25788 = [];
var len__23044__auto___25851 = arguments.length;
var i__23045__auto___25852 = (0);
while(true){
if((i__23045__auto___25852 < len__23044__auto___25851)){
args25788.push((arguments[i__23045__auto___25852]));

var G__25853 = (i__23045__auto___25852 + (1));
i__23045__auto___25852 = G__25853;
continue;
} else {
}
break;
}

var G__25790 = args25788.length;
switch (G__25790) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25788.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24023__auto__){
return (function (){
var f__24024__auto__ = (function (){var switch__24002__auto__ = ((function (c__24023__auto__){
return (function (state_25804){
var state_val_25805 = (state_25804[(1)]);
if((state_val_25805 === (1))){
var state_25804__$1 = state_25804;
var statearr_25806_25855 = state_25804__$1;
(statearr_25806_25855[(2)] = null);

(statearr_25806_25855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (2))){
var state_25804__$1 = state_25804;
var statearr_25807_25856 = state_25804__$1;
(statearr_25807_25856[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (3))){
var inst_25802 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25804__$1,inst_25802);
} else {
if((state_val_25805 === (4))){
var inst_25793 = func.call(null);
var inst_25794 = cljs.core.async.timeout.call(null,time_out);
var state_25804__$1 = (function (){var statearr_25809 = state_25804;
(statearr_25809[(7)] = inst_25793);

return statearr_25809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25804__$1,(7),inst_25794);
} else {
if((state_val_25805 === (5))){
var state_25804__$1 = state_25804;
var statearr_25810_25857 = state_25804__$1;
(statearr_25810_25857[(2)] = null);

(statearr_25810_25857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (6))){
var inst_25800 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25811_25858 = state_25804__$1;
(statearr_25811_25858[(2)] = inst_25800);

(statearr_25811_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (7))){
var inst_25796 = (state_25804[(2)]);
var state_25804__$1 = (function (){var statearr_25812 = state_25804;
(statearr_25812[(8)] = inst_25796);

return statearr_25812;
})();
var statearr_25813_25859 = state_25804__$1;
(statearr_25813_25859[(2)] = null);

(statearr_25813_25859[(1)] = (2));


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
});})(c__24023__auto__))
;
return ((function (switch__24002__auto__,c__24023__auto__){
return (function() {
var csasync$proc$state_machine__24003__auto__ = null;
var csasync$proc$state_machine__24003__auto____0 = (function (){
var statearr_25817 = [null,null,null,null,null,null,null,null,null];
(statearr_25817[(0)] = csasync$proc$state_machine__24003__auto__);

(statearr_25817[(1)] = (1));

return statearr_25817;
});
var csasync$proc$state_machine__24003__auto____1 = (function (state_25804){
while(true){
var ret_value__24004__auto__ = (function (){try{while(true){
var result__24005__auto__ = switch__24002__auto__.call(null,state_25804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24005__auto__;
}
break;
}
}catch (e25818){if((e25818 instanceof Object)){
var ex__24006__auto__ = e25818;
var statearr_25819_25860 = state_25804;
(statearr_25819_25860[(5)] = ex__24006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25861 = state_25804;
state_25804 = G__25861;
continue;
} else {
return ret_value__24004__auto__;
}
break;
}
});
csasync$proc$state_machine__24003__auto__ = function(state_25804){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24003__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24003__auto____1.call(this,state_25804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24003__auto____0;
csasync$proc$state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24003__auto____1;
return csasync$proc$state_machine__24003__auto__;
})()
;})(switch__24002__auto__,c__24023__auto__))
})();
var state__24025__auto__ = (function (){var statearr_25820 = f__24024__auto__.call(null);
(statearr_25820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24023__auto__);

return statearr_25820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24025__auto__);
});})(c__24023__auto__))
);

return c__24023__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24023__auto__){
return (function (){
var f__24024__auto__ = (function (){var switch__24002__auto__ = ((function (c__24023__auto__){
return (function (state_25834){
var state_val_25835 = (state_25834[(1)]);
if((state_val_25835 === (1))){
var state_25834__$1 = state_25834;
var statearr_25836_25862 = state_25834__$1;
(statearr_25836_25862[(2)] = null);

(statearr_25836_25862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (2))){
var state_25834__$1 = state_25834;
var statearr_25837_25863 = state_25834__$1;
(statearr_25837_25863[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (3))){
var inst_25832 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25834__$1,inst_25832);
} else {
if((state_val_25835 === (4))){
var inst_25823 = func.call(null,param);
var inst_25824 = cljs.core.async.timeout.call(null,time_out);
var state_25834__$1 = (function (){var statearr_25839 = state_25834;
(statearr_25839[(7)] = inst_25823);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25834__$1,(7),inst_25824);
} else {
if((state_val_25835 === (5))){
var state_25834__$1 = state_25834;
var statearr_25840_25864 = state_25834__$1;
(statearr_25840_25864[(2)] = null);

(statearr_25840_25864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (6))){
var inst_25830 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25841_25865 = state_25834__$1;
(statearr_25841_25865[(2)] = inst_25830);

(statearr_25841_25865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (7))){
var inst_25826 = (state_25834[(2)]);
var state_25834__$1 = (function (){var statearr_25842 = state_25834;
(statearr_25842[(8)] = inst_25826);

return statearr_25842;
})();
var statearr_25843_25866 = state_25834__$1;
(statearr_25843_25866[(2)] = null);

(statearr_25843_25866[(1)] = (2));


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
});})(c__24023__auto__))
;
return ((function (switch__24002__auto__,c__24023__auto__){
return (function() {
var csasync$proc$state_machine__24003__auto__ = null;
var csasync$proc$state_machine__24003__auto____0 = (function (){
var statearr_25847 = [null,null,null,null,null,null,null,null,null];
(statearr_25847[(0)] = csasync$proc$state_machine__24003__auto__);

(statearr_25847[(1)] = (1));

return statearr_25847;
});
var csasync$proc$state_machine__24003__auto____1 = (function (state_25834){
while(true){
var ret_value__24004__auto__ = (function (){try{while(true){
var result__24005__auto__ = switch__24002__auto__.call(null,state_25834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24005__auto__;
}
break;
}
}catch (e25848){if((e25848 instanceof Object)){
var ex__24006__auto__ = e25848;
var statearr_25849_25867 = state_25834;
(statearr_25849_25867[(5)] = ex__24006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25868 = state_25834;
state_25834 = G__25868;
continue;
} else {
return ret_value__24004__auto__;
}
break;
}
});
csasync$proc$state_machine__24003__auto__ = function(state_25834){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24003__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24003__auto____1.call(this,state_25834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24003__auto____0;
csasync$proc$state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24003__auto____1;
return csasync$proc$state_machine__24003__auto__;
})()
;})(switch__24002__auto__,c__24023__auto__))
})();
var state__24025__auto__ = (function (){var statearr_25850 = f__24024__auto__.call(null);
(statearr_25850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24023__auto__);

return statearr_25850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24025__auto__);
});})(c__24023__auto__))
);

return c__24023__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24023__auto___25977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24023__auto___25977){
return (function (){
var f__24024__auto__ = (function (){var switch__24002__auto__ = ((function (c__24023__auto___25977){
return (function (state_25950){
var state_val_25951 = (state_25950[(1)]);
if((state_val_25951 === (7))){
var inst_25932 = cljs.core.async.timeout.call(null,time_out);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25950__$1,(10),inst_25932);
} else {
if((state_val_25951 === (1))){
var state_25950__$1 = state_25950;
var statearr_25952_25978 = state_25950__$1;
(statearr_25952_25978[(2)] = null);

(statearr_25952_25978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (4))){
var inst_25927 = proc_fn.call(null);
var state_25950__$1 = state_25950;
var statearr_25953_25979 = state_25950__$1;
(statearr_25953_25979[(2)] = inst_25927);

(statearr_25953_25979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (13))){
var inst_25947 = (state_25950[(2)]);
var inst_25948 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25950__$1 = (function (){var statearr_25954 = state_25950;
(statearr_25954[(7)] = inst_25947);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25950__$1,inst_25948);
} else {
if((state_val_25951 === (6))){
var inst_25930 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25930)){
var statearr_25955_25980 = state_25950__$1;
(statearr_25955_25980[(1)] = (7));

} else {
var statearr_25956_25981 = state_25950__$1;
(statearr_25956_25981[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (3))){
var inst_25940 = (state_25950[(2)]);
var inst_25941 = (final_fun == null);
var inst_25942 = cljs.core.not.call(null,inst_25941);
var state_25950__$1 = (function (){var statearr_25957 = state_25950;
(statearr_25957[(8)] = inst_25940);

return statearr_25957;
})();
if(inst_25942){
var statearr_25958_25982 = state_25950__$1;
(statearr_25958_25982[(1)] = (11));

} else {
var statearr_25959_25983 = state_25950__$1;
(statearr_25959_25983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (12))){
var state_25950__$1 = state_25950;
var statearr_25960_25984 = state_25950__$1;
(statearr_25960_25984[(2)] = null);

(statearr_25960_25984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (2))){
var inst_25925 = (state_25950[(9)]);
var inst_25924 = cljs.core.deref.call(null,status);
var inst_25925__$1 = cljs.core._EQ_.call(null,inst_25924,"RUN");
var state_25950__$1 = (function (){var statearr_25961 = state_25950;
(statearr_25961[(9)] = inst_25925__$1);

return statearr_25961;
})();
if(inst_25925__$1){
var statearr_25962_25985 = state_25950__$1;
(statearr_25962_25985[(1)] = (4));

} else {
var statearr_25963_25986 = state_25950__$1;
(statearr_25963_25986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (11))){
var inst_25944 = final_fun.call(null);
var state_25950__$1 = state_25950;
var statearr_25964_25987 = state_25950__$1;
(statearr_25964_25987[(2)] = inst_25944);

(statearr_25964_25987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (9))){
var inst_25938 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25965_25988 = state_25950__$1;
(statearr_25965_25988[(2)] = inst_25938);

(statearr_25965_25988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (5))){
var inst_25925 = (state_25950[(9)]);
var state_25950__$1 = state_25950;
var statearr_25966_25989 = state_25950__$1;
(statearr_25966_25989[(2)] = inst_25925);

(statearr_25966_25989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (10))){
var inst_25934 = (state_25950[(2)]);
var state_25950__$1 = (function (){var statearr_25967 = state_25950;
(statearr_25967[(10)] = inst_25934);

return statearr_25967;
})();
var statearr_25968_25990 = state_25950__$1;
(statearr_25968_25990[(2)] = null);

(statearr_25968_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (8))){
var state_25950__$1 = state_25950;
var statearr_25969_25991 = state_25950__$1;
(statearr_25969_25991[(2)] = null);

(statearr_25969_25991[(1)] = (9));


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
});})(c__24023__auto___25977))
;
return ((function (switch__24002__auto__,c__24023__auto___25977){
return (function() {
var csasync$proc$start_process_$_state_machine__24003__auto__ = null;
var csasync$proc$start_process_$_state_machine__24003__auto____0 = (function (){
var statearr_25973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25973[(0)] = csasync$proc$start_process_$_state_machine__24003__auto__);

(statearr_25973[(1)] = (1));

return statearr_25973;
});
var csasync$proc$start_process_$_state_machine__24003__auto____1 = (function (state_25950){
while(true){
var ret_value__24004__auto__ = (function (){try{while(true){
var result__24005__auto__ = switch__24002__auto__.call(null,state_25950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24005__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object)){
var ex__24006__auto__ = e25974;
var statearr_25975_25992 = state_25950;
(statearr_25975_25992[(5)] = ex__24006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25993 = state_25950;
state_25950 = G__25993;
continue;
} else {
return ret_value__24004__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24003__auto__ = function(state_25950){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24003__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24003__auto____1.call(this,state_25950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24003__auto____0;
csasync$proc$start_process_$_state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24003__auto____1;
return csasync$proc$start_process_$_state_machine__24003__auto__;
})()
;})(switch__24002__auto__,c__24023__auto___25977))
})();
var state__24025__auto__ = (function (){var statearr_25976 = f__24024__auto__.call(null);
(statearr_25976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24023__auto___25977);

return statearr_25976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24025__auto__);
});})(c__24023__auto___25977))
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
var c__24023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24023__auto__){
return (function (){
var f__24024__auto__ = (function (){var switch__24002__auto__ = ((function (c__24023__auto__){
return (function (state_26014){
var state_val_26015 = (state_26014[(1)]);
if((state_val_26015 === (1))){
var inst_26009 = cljs.core.async.timeout.call(null,time);
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26014__$1,(2),inst_26009);
} else {
if((state_val_26015 === (2))){
var inst_26011 = (state_26014[(2)]);
var inst_26012 = func.call(null);
var state_26014__$1 = (function (){var statearr_26016 = state_26014;
(statearr_26016[(7)] = inst_26011);

return statearr_26016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26014__$1,inst_26012);
} else {
return null;
}
}
});})(c__24023__auto__))
;
return ((function (switch__24002__auto__,c__24023__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24003__auto__ = null;
var csasync$proc$delayer_$_state_machine__24003__auto____0 = (function (){
var statearr_26020 = [null,null,null,null,null,null,null,null];
(statearr_26020[(0)] = csasync$proc$delayer_$_state_machine__24003__auto__);

(statearr_26020[(1)] = (1));

return statearr_26020;
});
var csasync$proc$delayer_$_state_machine__24003__auto____1 = (function (state_26014){
while(true){
var ret_value__24004__auto__ = (function (){try{while(true){
var result__24005__auto__ = switch__24002__auto__.call(null,state_26014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24005__auto__;
}
break;
}
}catch (e26021){if((e26021 instanceof Object)){
var ex__24006__auto__ = e26021;
var statearr_26022_26024 = state_26014;
(statearr_26022_26024[(5)] = ex__24006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26025 = state_26014;
state_26014 = G__26025;
continue;
} else {
return ret_value__24004__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24003__auto__ = function(state_26014){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24003__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24003__auto____1.call(this,state_26014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24003__auto____0;
csasync$proc$delayer_$_state_machine__24003__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24003__auto____1;
return csasync$proc$delayer_$_state_machine__24003__auto__;
})()
;})(switch__24002__auto__,c__24023__auto__))
})();
var state__24025__auto__ = (function (){var statearr_26023 = f__24024__auto__.call(null);
(statearr_26023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24023__auto__);

return statearr_26023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24025__auto__);
});})(c__24023__auto__))
);

return c__24023__auto__;
});

//# sourceMappingURL=proc.js.map