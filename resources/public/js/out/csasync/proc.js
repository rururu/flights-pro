// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args40793 = [];
var len__36245__auto___40856 = arguments.length;
var i__36246__auto___40857 = (0);
while(true){
if((i__36246__auto___40857 < len__36245__auto___40856)){
args40793.push((arguments[i__36246__auto___40857]));

var G__40858 = (i__36246__auto___40857 + (1));
i__36246__auto___40857 = G__40858;
continue;
} else {
}
break;
}

var G__40795 = args40793.length;
switch (G__40795) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40793.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__37321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37321__auto__){
return (function (){
var f__37322__auto__ = (function (){var switch__37300__auto__ = ((function (c__37321__auto__){
return (function (state_40809){
var state_val_40810 = (state_40809[(1)]);
if((state_val_40810 === (1))){
var state_40809__$1 = state_40809;
var statearr_40811_40860 = state_40809__$1;
(statearr_40811_40860[(2)] = null);

(statearr_40811_40860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (2))){
var state_40809__$1 = state_40809;
var statearr_40812_40861 = state_40809__$1;
(statearr_40812_40861[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (3))){
var inst_40807 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40809__$1,inst_40807);
} else {
if((state_val_40810 === (4))){
var inst_40798 = func.call(null);
var inst_40799 = cljs.core.async.timeout.call(null,time_out);
var state_40809__$1 = (function (){var statearr_40814 = state_40809;
(statearr_40814[(7)] = inst_40798);

return statearr_40814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40809__$1,(7),inst_40799);
} else {
if((state_val_40810 === (5))){
var state_40809__$1 = state_40809;
var statearr_40815_40862 = state_40809__$1;
(statearr_40815_40862[(2)] = null);

(statearr_40815_40862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (6))){
var inst_40805 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
var statearr_40816_40863 = state_40809__$1;
(statearr_40816_40863[(2)] = inst_40805);

(statearr_40816_40863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (7))){
var inst_40801 = (state_40809[(2)]);
var state_40809__$1 = (function (){var statearr_40817 = state_40809;
(statearr_40817[(8)] = inst_40801);

return statearr_40817;
})();
var statearr_40818_40864 = state_40809__$1;
(statearr_40818_40864[(2)] = null);

(statearr_40818_40864[(1)] = (2));


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
});})(c__37321__auto__))
;
return ((function (switch__37300__auto__,c__37321__auto__){
return (function() {
var csasync$proc$state_machine__37301__auto__ = null;
var csasync$proc$state_machine__37301__auto____0 = (function (){
var statearr_40822 = [null,null,null,null,null,null,null,null,null];
(statearr_40822[(0)] = csasync$proc$state_machine__37301__auto__);

(statearr_40822[(1)] = (1));

return statearr_40822;
});
var csasync$proc$state_machine__37301__auto____1 = (function (state_40809){
while(true){
var ret_value__37302__auto__ = (function (){try{while(true){
var result__37303__auto__ = switch__37300__auto__.call(null,state_40809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37303__auto__;
}
break;
}
}catch (e40823){if((e40823 instanceof Object)){
var ex__37304__auto__ = e40823;
var statearr_40824_40865 = state_40809;
(statearr_40824_40865[(5)] = ex__37304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40866 = state_40809;
state_40809 = G__40866;
continue;
} else {
return ret_value__37302__auto__;
}
break;
}
});
csasync$proc$state_machine__37301__auto__ = function(state_40809){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__37301__auto____0.call(this);
case 1:
return csasync$proc$state_machine__37301__auto____1.call(this,state_40809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__37301__auto____0;
csasync$proc$state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__37301__auto____1;
return csasync$proc$state_machine__37301__auto__;
})()
;})(switch__37300__auto__,c__37321__auto__))
})();
var state__37323__auto__ = (function (){var statearr_40825 = f__37322__auto__.call(null);
(statearr_40825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37321__auto__);

return statearr_40825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37323__auto__);
});})(c__37321__auto__))
);

return c__37321__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__37321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37321__auto__){
return (function (){
var f__37322__auto__ = (function (){var switch__37300__auto__ = ((function (c__37321__auto__){
return (function (state_40839){
var state_val_40840 = (state_40839[(1)]);
if((state_val_40840 === (1))){
var state_40839__$1 = state_40839;
var statearr_40841_40867 = state_40839__$1;
(statearr_40841_40867[(2)] = null);

(statearr_40841_40867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (2))){
var state_40839__$1 = state_40839;
var statearr_40842_40868 = state_40839__$1;
(statearr_40842_40868[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (3))){
var inst_40837 = (state_40839[(2)]);
var state_40839__$1 = state_40839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40839__$1,inst_40837);
} else {
if((state_val_40840 === (4))){
var inst_40828 = func.call(null,param);
var inst_40829 = cljs.core.async.timeout.call(null,time_out);
var state_40839__$1 = (function (){var statearr_40844 = state_40839;
(statearr_40844[(7)] = inst_40828);

return statearr_40844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40839__$1,(7),inst_40829);
} else {
if((state_val_40840 === (5))){
var state_40839__$1 = state_40839;
var statearr_40845_40869 = state_40839__$1;
(statearr_40845_40869[(2)] = null);

(statearr_40845_40869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (6))){
var inst_40835 = (state_40839[(2)]);
var state_40839__$1 = state_40839;
var statearr_40846_40870 = state_40839__$1;
(statearr_40846_40870[(2)] = inst_40835);

(statearr_40846_40870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40840 === (7))){
var inst_40831 = (state_40839[(2)]);
var state_40839__$1 = (function (){var statearr_40847 = state_40839;
(statearr_40847[(8)] = inst_40831);

return statearr_40847;
})();
var statearr_40848_40871 = state_40839__$1;
(statearr_40848_40871[(2)] = null);

(statearr_40848_40871[(1)] = (2));


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
});})(c__37321__auto__))
;
return ((function (switch__37300__auto__,c__37321__auto__){
return (function() {
var csasync$proc$state_machine__37301__auto__ = null;
var csasync$proc$state_machine__37301__auto____0 = (function (){
var statearr_40852 = [null,null,null,null,null,null,null,null,null];
(statearr_40852[(0)] = csasync$proc$state_machine__37301__auto__);

(statearr_40852[(1)] = (1));

return statearr_40852;
});
var csasync$proc$state_machine__37301__auto____1 = (function (state_40839){
while(true){
var ret_value__37302__auto__ = (function (){try{while(true){
var result__37303__auto__ = switch__37300__auto__.call(null,state_40839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37303__auto__;
}
break;
}
}catch (e40853){if((e40853 instanceof Object)){
var ex__37304__auto__ = e40853;
var statearr_40854_40872 = state_40839;
(statearr_40854_40872[(5)] = ex__37304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40873 = state_40839;
state_40839 = G__40873;
continue;
} else {
return ret_value__37302__auto__;
}
break;
}
});
csasync$proc$state_machine__37301__auto__ = function(state_40839){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__37301__auto____0.call(this);
case 1:
return csasync$proc$state_machine__37301__auto____1.call(this,state_40839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__37301__auto____0;
csasync$proc$state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__37301__auto____1;
return csasync$proc$state_machine__37301__auto__;
})()
;})(switch__37300__auto__,c__37321__auto__))
})();
var state__37323__auto__ = (function (){var statearr_40855 = f__37322__auto__.call(null);
(statearr_40855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37321__auto__);

return statearr_40855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37323__auto__);
});})(c__37321__auto__))
);

return c__37321__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__37321__auto___40958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37321__auto___40958){
return (function (){
var f__37322__auto__ = (function (){var switch__37300__auto__ = ((function (c__37321__auto___40958){
return (function (state_40936){
var state_val_40937 = (state_40936[(1)]);
if((state_val_40937 === (7))){
var inst_40925 = cljs.core.async.timeout.call(null,time_out);
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40936__$1,(10),inst_40925);
} else {
if((state_val_40937 === (1))){
var state_40936__$1 = state_40936;
var statearr_40938_40959 = state_40936__$1;
(statearr_40938_40959[(2)] = null);

(statearr_40938_40959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (4))){
var inst_40920 = proc_fn.call(null);
var state_40936__$1 = state_40936;
var statearr_40939_40960 = state_40936__$1;
(statearr_40939_40960[(2)] = inst_40920);

(statearr_40939_40960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (6))){
var inst_40923 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
if(cljs.core.truth_(inst_40923)){
var statearr_40940_40961 = state_40936__$1;
(statearr_40940_40961[(1)] = (7));

} else {
var statearr_40941_40962 = state_40936__$1;
(statearr_40941_40962[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (3))){
var inst_40933 = (state_40936[(2)]);
var inst_40934 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_40936__$1 = (function (){var statearr_40942 = state_40936;
(statearr_40942[(7)] = inst_40933);

return statearr_40942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40936__$1,inst_40934);
} else {
if((state_val_40937 === (2))){
var inst_40918 = (state_40936[(8)]);
var inst_40917 = cljs.core.deref.call(null,status);
var inst_40918__$1 = cljs.core._EQ_.call(null,inst_40917,"RUN");
var state_40936__$1 = (function (){var statearr_40943 = state_40936;
(statearr_40943[(8)] = inst_40918__$1);

return statearr_40943;
})();
if(inst_40918__$1){
var statearr_40944_40963 = state_40936__$1;
(statearr_40944_40963[(1)] = (4));

} else {
var statearr_40945_40964 = state_40936__$1;
(statearr_40945_40964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (9))){
var inst_40931 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40946_40965 = state_40936__$1;
(statearr_40946_40965[(2)] = inst_40931);

(statearr_40946_40965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (5))){
var inst_40918 = (state_40936[(8)]);
var state_40936__$1 = state_40936;
var statearr_40947_40966 = state_40936__$1;
(statearr_40947_40966[(2)] = inst_40918);

(statearr_40947_40966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (10))){
var inst_40927 = (state_40936[(2)]);
var state_40936__$1 = (function (){var statearr_40948 = state_40936;
(statearr_40948[(9)] = inst_40927);

return statearr_40948;
})();
var statearr_40949_40967 = state_40936__$1;
(statearr_40949_40967[(2)] = null);

(statearr_40949_40967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (8))){
var state_40936__$1 = state_40936;
var statearr_40950_40968 = state_40936__$1;
(statearr_40950_40968[(2)] = null);

(statearr_40950_40968[(1)] = (9));


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
});})(c__37321__auto___40958))
;
return ((function (switch__37300__auto__,c__37321__auto___40958){
return (function() {
var csasync$proc$start_process_$_state_machine__37301__auto__ = null;
var csasync$proc$start_process_$_state_machine__37301__auto____0 = (function (){
var statearr_40954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40954[(0)] = csasync$proc$start_process_$_state_machine__37301__auto__);

(statearr_40954[(1)] = (1));

return statearr_40954;
});
var csasync$proc$start_process_$_state_machine__37301__auto____1 = (function (state_40936){
while(true){
var ret_value__37302__auto__ = (function (){try{while(true){
var result__37303__auto__ = switch__37300__auto__.call(null,state_40936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37303__auto__;
}
break;
}
}catch (e40955){if((e40955 instanceof Object)){
var ex__37304__auto__ = e40955;
var statearr_40956_40969 = state_40936;
(statearr_40956_40969[(5)] = ex__37304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40970 = state_40936;
state_40936 = G__40970;
continue;
} else {
return ret_value__37302__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__37301__auto__ = function(state_40936){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__37301__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__37301__auto____1.call(this,state_40936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__37301__auto____0;
csasync$proc$start_process_$_state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__37301__auto____1;
return csasync$proc$start_process_$_state_machine__37301__auto__;
})()
;})(switch__37300__auto__,c__37321__auto___40958))
})();
var state__37323__auto__ = (function (){var statearr_40957 = f__37322__auto__.call(null);
(statearr_40957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37321__auto___40958);

return statearr_40957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37323__auto__);
});})(c__37321__auto___40958))
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
var c__37321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37321__auto__){
return (function (){
var f__37322__auto__ = (function (){var switch__37300__auto__ = ((function (c__37321__auto__){
return (function (state_40991){
var state_val_40992 = (state_40991[(1)]);
if((state_val_40992 === (1))){
var inst_40986 = cljs.core.async.timeout.call(null,time);
var state_40991__$1 = state_40991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40991__$1,(2),inst_40986);
} else {
if((state_val_40992 === (2))){
var inst_40988 = (state_40991[(2)]);
var inst_40989 = func.call(null);
var state_40991__$1 = (function (){var statearr_40993 = state_40991;
(statearr_40993[(7)] = inst_40988);

return statearr_40993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40991__$1,inst_40989);
} else {
return null;
}
}
});})(c__37321__auto__))
;
return ((function (switch__37300__auto__,c__37321__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__37301__auto__ = null;
var csasync$proc$delayer_$_state_machine__37301__auto____0 = (function (){
var statearr_40997 = [null,null,null,null,null,null,null,null];
(statearr_40997[(0)] = csasync$proc$delayer_$_state_machine__37301__auto__);

(statearr_40997[(1)] = (1));

return statearr_40997;
});
var csasync$proc$delayer_$_state_machine__37301__auto____1 = (function (state_40991){
while(true){
var ret_value__37302__auto__ = (function (){try{while(true){
var result__37303__auto__ = switch__37300__auto__.call(null,state_40991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37303__auto__;
}
break;
}
}catch (e40998){if((e40998 instanceof Object)){
var ex__37304__auto__ = e40998;
var statearr_40999_41001 = state_40991;
(statearr_40999_41001[(5)] = ex__37304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41002 = state_40991;
state_40991 = G__41002;
continue;
} else {
return ret_value__37302__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__37301__auto__ = function(state_40991){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__37301__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__37301__auto____1.call(this,state_40991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__37301__auto____0;
csasync$proc$delayer_$_state_machine__37301__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__37301__auto____1;
return csasync$proc$delayer_$_state_machine__37301__auto__;
})()
;})(switch__37300__auto__,c__37321__auto__))
})();
var state__37323__auto__ = (function (){var statearr_41000 = f__37322__auto__.call(null);
(statearr_41000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37321__auto__);

return statearr_41000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37323__auto__);
});})(c__37321__auto__))
);

return c__37321__auto__;
});

//# sourceMappingURL=proc.js.map