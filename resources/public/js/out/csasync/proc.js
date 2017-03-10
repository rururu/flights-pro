// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args59905 = [];
var len__48239__auto___59968 = arguments.length;
var i__48240__auto___59969 = (0);
while(true){
if((i__48240__auto___59969 < len__48239__auto___59968)){
args59905.push((arguments[i__48240__auto___59969]));

var G__59970 = (i__48240__auto___59969 + (1));
i__48240__auto___59969 = G__59970;
continue;
} else {
}
break;
}

var G__59907 = args59905.length;
switch (G__59907) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59905.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_59921){
var state_val_59922 = (state_59921[(1)]);
if((state_val_59922 === (1))){
var state_59921__$1 = state_59921;
var statearr_59923_59972 = state_59921__$1;
(statearr_59923_59972[(2)] = null);

(statearr_59923_59972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59922 === (2))){
var state_59921__$1 = state_59921;
var statearr_59924_59973 = state_59921__$1;
(statearr_59924_59973[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59922 === (3))){
var inst_59919 = (state_59921[(2)]);
var state_59921__$1 = state_59921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59921__$1,inst_59919);
} else {
if((state_val_59922 === (4))){
var inst_59910 = func.call(null);
var inst_59911 = cljs.core.async.timeout.call(null,time_out);
var state_59921__$1 = (function (){var statearr_59926 = state_59921;
(statearr_59926[(7)] = inst_59910);

return statearr_59926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59921__$1,(7),inst_59911);
} else {
if((state_val_59922 === (5))){
var state_59921__$1 = state_59921;
var statearr_59927_59974 = state_59921__$1;
(statearr_59927_59974[(2)] = null);

(statearr_59927_59974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59922 === (6))){
var inst_59917 = (state_59921[(2)]);
var state_59921__$1 = state_59921;
var statearr_59928_59975 = state_59921__$1;
(statearr_59928_59975[(2)] = inst_59917);

(statearr_59928_59975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59922 === (7))){
var inst_59913 = (state_59921[(2)]);
var state_59921__$1 = (function (){var statearr_59929 = state_59921;
(statearr_59929[(8)] = inst_59913);

return statearr_59929;
})();
var statearr_59930_59976 = state_59921__$1;
(statearr_59930_59976[(2)] = null);

(statearr_59930_59976[(1)] = (2));


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
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var csasync$proc$state_machine__53457__auto__ = null;
var csasync$proc$state_machine__53457__auto____0 = (function (){
var statearr_59934 = [null,null,null,null,null,null,null,null,null];
(statearr_59934[(0)] = csasync$proc$state_machine__53457__auto__);

(statearr_59934[(1)] = (1));

return statearr_59934;
});
var csasync$proc$state_machine__53457__auto____1 = (function (state_59921){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_59921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e59935){if((e59935 instanceof Object)){
var ex__53460__auto__ = e59935;
var statearr_59936_59977 = state_59921;
(statearr_59936_59977[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59978 = state_59921;
state_59921 = G__59978;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
csasync$proc$state_machine__53457__auto__ = function(state_59921){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__53457__auto____0.call(this);
case 1:
return csasync$proc$state_machine__53457__auto____1.call(this,state_59921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__53457__auto____0;
csasync$proc$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__53457__auto____1;
return csasync$proc$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_59937 = f__53569__auto__.call(null);
(statearr_59937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_59937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_59951){
var state_val_59952 = (state_59951[(1)]);
if((state_val_59952 === (1))){
var state_59951__$1 = state_59951;
var statearr_59953_59979 = state_59951__$1;
(statearr_59953_59979[(2)] = null);

(statearr_59953_59979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59952 === (2))){
var state_59951__$1 = state_59951;
var statearr_59954_59980 = state_59951__$1;
(statearr_59954_59980[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59952 === (3))){
var inst_59949 = (state_59951[(2)]);
var state_59951__$1 = state_59951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59951__$1,inst_59949);
} else {
if((state_val_59952 === (4))){
var inst_59940 = func.call(null,param);
var inst_59941 = cljs.core.async.timeout.call(null,time_out);
var state_59951__$1 = (function (){var statearr_59956 = state_59951;
(statearr_59956[(7)] = inst_59940);

return statearr_59956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59951__$1,(7),inst_59941);
} else {
if((state_val_59952 === (5))){
var state_59951__$1 = state_59951;
var statearr_59957_59981 = state_59951__$1;
(statearr_59957_59981[(2)] = null);

(statearr_59957_59981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59952 === (6))){
var inst_59947 = (state_59951[(2)]);
var state_59951__$1 = state_59951;
var statearr_59958_59982 = state_59951__$1;
(statearr_59958_59982[(2)] = inst_59947);

(statearr_59958_59982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59952 === (7))){
var inst_59943 = (state_59951[(2)]);
var state_59951__$1 = (function (){var statearr_59959 = state_59951;
(statearr_59959[(8)] = inst_59943);

return statearr_59959;
})();
var statearr_59960_59983 = state_59951__$1;
(statearr_59960_59983[(2)] = null);

(statearr_59960_59983[(1)] = (2));


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
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var csasync$proc$state_machine__53457__auto__ = null;
var csasync$proc$state_machine__53457__auto____0 = (function (){
var statearr_59964 = [null,null,null,null,null,null,null,null,null];
(statearr_59964[(0)] = csasync$proc$state_machine__53457__auto__);

(statearr_59964[(1)] = (1));

return statearr_59964;
});
var csasync$proc$state_machine__53457__auto____1 = (function (state_59951){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_59951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e59965){if((e59965 instanceof Object)){
var ex__53460__auto__ = e59965;
var statearr_59966_59984 = state_59951;
(statearr_59966_59984[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59985 = state_59951;
state_59951 = G__59985;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
csasync$proc$state_machine__53457__auto__ = function(state_59951){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__53457__auto____0.call(this);
case 1:
return csasync$proc$state_machine__53457__auto____1.call(this,state_59951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__53457__auto____0;
csasync$proc$state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__53457__auto____1;
return csasync$proc$state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_59967 = f__53569__auto__.call(null);
(statearr_59967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_59967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__53568__auto___60070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto___60070){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto___60070){
return (function (state_60048){
var state_val_60049 = (state_60048[(1)]);
if((state_val_60049 === (7))){
var inst_60037 = cljs.core.async.timeout.call(null,time_out);
var state_60048__$1 = state_60048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60048__$1,(10),inst_60037);
} else {
if((state_val_60049 === (1))){
var state_60048__$1 = state_60048;
var statearr_60050_60071 = state_60048__$1;
(statearr_60050_60071[(2)] = null);

(statearr_60050_60071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (4))){
var inst_60032 = proc_fn.call(null);
var state_60048__$1 = state_60048;
var statearr_60051_60072 = state_60048__$1;
(statearr_60051_60072[(2)] = inst_60032);

(statearr_60051_60072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (6))){
var inst_60035 = (state_60048[(2)]);
var state_60048__$1 = state_60048;
if(cljs.core.truth_(inst_60035)){
var statearr_60052_60073 = state_60048__$1;
(statearr_60052_60073[(1)] = (7));

} else {
var statearr_60053_60074 = state_60048__$1;
(statearr_60053_60074[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (3))){
var inst_60045 = (state_60048[(2)]);
var inst_60046 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_60048__$1 = (function (){var statearr_60054 = state_60048;
(statearr_60054[(7)] = inst_60045);

return statearr_60054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60048__$1,inst_60046);
} else {
if((state_val_60049 === (2))){
var inst_60030 = (state_60048[(8)]);
var inst_60029 = cljs.core.deref.call(null,status);
var inst_60030__$1 = cljs.core._EQ_.call(null,inst_60029,"RUN");
var state_60048__$1 = (function (){var statearr_60055 = state_60048;
(statearr_60055[(8)] = inst_60030__$1);

return statearr_60055;
})();
if(inst_60030__$1){
var statearr_60056_60075 = state_60048__$1;
(statearr_60056_60075[(1)] = (4));

} else {
var statearr_60057_60076 = state_60048__$1;
(statearr_60057_60076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (9))){
var inst_60043 = (state_60048[(2)]);
var state_60048__$1 = state_60048;
var statearr_60058_60077 = state_60048__$1;
(statearr_60058_60077[(2)] = inst_60043);

(statearr_60058_60077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (5))){
var inst_60030 = (state_60048[(8)]);
var state_60048__$1 = state_60048;
var statearr_60059_60078 = state_60048__$1;
(statearr_60059_60078[(2)] = inst_60030);

(statearr_60059_60078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (10))){
var inst_60039 = (state_60048[(2)]);
var state_60048__$1 = (function (){var statearr_60060 = state_60048;
(statearr_60060[(9)] = inst_60039);

return statearr_60060;
})();
var statearr_60061_60079 = state_60048__$1;
(statearr_60061_60079[(2)] = null);

(statearr_60061_60079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60049 === (8))){
var state_60048__$1 = state_60048;
var statearr_60062_60080 = state_60048__$1;
(statearr_60062_60080[(2)] = null);

(statearr_60062_60080[(1)] = (9));


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
});})(c__53568__auto___60070))
;
return ((function (switch__53456__auto__,c__53568__auto___60070){
return (function() {
var csasync$proc$start_process_$_state_machine__53457__auto__ = null;
var csasync$proc$start_process_$_state_machine__53457__auto____0 = (function (){
var statearr_60066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60066[(0)] = csasync$proc$start_process_$_state_machine__53457__auto__);

(statearr_60066[(1)] = (1));

return statearr_60066;
});
var csasync$proc$start_process_$_state_machine__53457__auto____1 = (function (state_60048){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_60048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e60067){if((e60067 instanceof Object)){
var ex__53460__auto__ = e60067;
var statearr_60068_60081 = state_60048;
(statearr_60068_60081[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60082 = state_60048;
state_60048 = G__60082;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__53457__auto__ = function(state_60048){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__53457__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__53457__auto____1.call(this,state_60048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__53457__auto____0;
csasync$proc$start_process_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__53457__auto____1;
return csasync$proc$start_process_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto___60070))
})();
var state__53570__auto__ = (function (){var statearr_60069 = f__53569__auto__.call(null);
(statearr_60069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto___60070);

return statearr_60069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto___60070))
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
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__){
return (function (state_60103){
var state_val_60104 = (state_60103[(1)]);
if((state_val_60104 === (1))){
var inst_60098 = cljs.core.async.timeout.call(null,time);
var state_60103__$1 = state_60103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60103__$1,(2),inst_60098);
} else {
if((state_val_60104 === (2))){
var inst_60100 = (state_60103[(2)]);
var inst_60101 = func.call(null);
var state_60103__$1 = (function (){var statearr_60105 = state_60103;
(statearr_60105[(7)] = inst_60100);

return statearr_60105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60103__$1,inst_60101);
} else {
return null;
}
}
});})(c__53568__auto__))
;
return ((function (switch__53456__auto__,c__53568__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__53457__auto__ = null;
var csasync$proc$delayer_$_state_machine__53457__auto____0 = (function (){
var statearr_60109 = [null,null,null,null,null,null,null,null];
(statearr_60109[(0)] = csasync$proc$delayer_$_state_machine__53457__auto__);

(statearr_60109[(1)] = (1));

return statearr_60109;
});
var csasync$proc$delayer_$_state_machine__53457__auto____1 = (function (state_60103){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_60103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e60110){if((e60110 instanceof Object)){
var ex__53460__auto__ = e60110;
var statearr_60111_60113 = state_60103;
(statearr_60111_60113[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60114 = state_60103;
state_60103 = G__60114;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__53457__auto__ = function(state_60103){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__53457__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__53457__auto____1.call(this,state_60103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__53457__auto____0;
csasync$proc$delayer_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__53457__auto____1;
return csasync$proc$delayer_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__))
})();
var state__53570__auto__ = (function (){var statearr_60112 = f__53569__auto__.call(null);
(statearr_60112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_60112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__))
);

return c__53568__auto__;
});

//# sourceMappingURL=proc.js.map