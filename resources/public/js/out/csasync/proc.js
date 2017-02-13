// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21885 = [];
var len__20778__auto___21948 = arguments.length;
var i__20779__auto___21949 = (0);
while(true){
if((i__20779__auto___21949 < len__20778__auto___21948)){
args21885.push((arguments[i__20779__auto___21949]));

var G__21950 = (i__20779__auto___21949 + (1));
i__20779__auto___21949 = G__21950;
continue;
} else {
}
break;
}

var G__21887 = args21885.length;
switch (G__21887) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21885.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21840__auto__){
return (function (){
var f__21841__auto__ = (function (){var switch__21819__auto__ = ((function (c__21840__auto__){
return (function (state_21901){
var state_val_21902 = (state_21901[(1)]);
if((state_val_21902 === (1))){
var state_21901__$1 = state_21901;
var statearr_21903_21952 = state_21901__$1;
(statearr_21903_21952[(2)] = null);

(statearr_21903_21952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (2))){
var state_21901__$1 = state_21901;
var statearr_21904_21953 = state_21901__$1;
(statearr_21904_21953[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (3))){
var inst_21899 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21901__$1,inst_21899);
} else {
if((state_val_21902 === (4))){
var inst_21890 = func.call(null);
var inst_21891 = cljs.core.async.timeout.call(null,time_out);
var state_21901__$1 = (function (){var statearr_21906 = state_21901;
(statearr_21906[(7)] = inst_21890);

return statearr_21906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21901__$1,(7),inst_21891);
} else {
if((state_val_21902 === (5))){
var state_21901__$1 = state_21901;
var statearr_21907_21954 = state_21901__$1;
(statearr_21907_21954[(2)] = null);

(statearr_21907_21954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (6))){
var inst_21897 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21908_21955 = state_21901__$1;
(statearr_21908_21955[(2)] = inst_21897);

(statearr_21908_21955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (7))){
var inst_21893 = (state_21901[(2)]);
var state_21901__$1 = (function (){var statearr_21909 = state_21901;
(statearr_21909[(8)] = inst_21893);

return statearr_21909;
})();
var statearr_21910_21956 = state_21901__$1;
(statearr_21910_21956[(2)] = null);

(statearr_21910_21956[(1)] = (2));


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
});})(c__21840__auto__))
;
return ((function (switch__21819__auto__,c__21840__auto__){
return (function() {
var csasync$proc$state_machine__21820__auto__ = null;
var csasync$proc$state_machine__21820__auto____0 = (function (){
var statearr_21914 = [null,null,null,null,null,null,null,null,null];
(statearr_21914[(0)] = csasync$proc$state_machine__21820__auto__);

(statearr_21914[(1)] = (1));

return statearr_21914;
});
var csasync$proc$state_machine__21820__auto____1 = (function (state_21901){
while(true){
var ret_value__21821__auto__ = (function (){try{while(true){
var result__21822__auto__ = switch__21819__auto__.call(null,state_21901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21822__auto__;
}
break;
}
}catch (e21915){if((e21915 instanceof Object)){
var ex__21823__auto__ = e21915;
var statearr_21916_21957 = state_21901;
(statearr_21916_21957[(5)] = ex__21823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21958 = state_21901;
state_21901 = G__21958;
continue;
} else {
return ret_value__21821__auto__;
}
break;
}
});
csasync$proc$state_machine__21820__auto__ = function(state_21901){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21820__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21820__auto____1.call(this,state_21901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21820__auto____0;
csasync$proc$state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21820__auto____1;
return csasync$proc$state_machine__21820__auto__;
})()
;})(switch__21819__auto__,c__21840__auto__))
})();
var state__21842__auto__ = (function (){var statearr_21917 = f__21841__auto__.call(null);
(statearr_21917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21840__auto__);

return statearr_21917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21842__auto__);
});})(c__21840__auto__))
);

return c__21840__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21840__auto__){
return (function (){
var f__21841__auto__ = (function (){var switch__21819__auto__ = ((function (c__21840__auto__){
return (function (state_21931){
var state_val_21932 = (state_21931[(1)]);
if((state_val_21932 === (1))){
var state_21931__$1 = state_21931;
var statearr_21933_21959 = state_21931__$1;
(statearr_21933_21959[(2)] = null);

(statearr_21933_21959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21932 === (2))){
var state_21931__$1 = state_21931;
var statearr_21934_21960 = state_21931__$1;
(statearr_21934_21960[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21932 === (3))){
var inst_21929 = (state_21931[(2)]);
var state_21931__$1 = state_21931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21931__$1,inst_21929);
} else {
if((state_val_21932 === (4))){
var inst_21920 = func.call(null,param);
var inst_21921 = cljs.core.async.timeout.call(null,time_out);
var state_21931__$1 = (function (){var statearr_21936 = state_21931;
(statearr_21936[(7)] = inst_21920);

return statearr_21936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21931__$1,(7),inst_21921);
} else {
if((state_val_21932 === (5))){
var state_21931__$1 = state_21931;
var statearr_21937_21961 = state_21931__$1;
(statearr_21937_21961[(2)] = null);

(statearr_21937_21961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21932 === (6))){
var inst_21927 = (state_21931[(2)]);
var state_21931__$1 = state_21931;
var statearr_21938_21962 = state_21931__$1;
(statearr_21938_21962[(2)] = inst_21927);

(statearr_21938_21962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21932 === (7))){
var inst_21923 = (state_21931[(2)]);
var state_21931__$1 = (function (){var statearr_21939 = state_21931;
(statearr_21939[(8)] = inst_21923);

return statearr_21939;
})();
var statearr_21940_21963 = state_21931__$1;
(statearr_21940_21963[(2)] = null);

(statearr_21940_21963[(1)] = (2));


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
});})(c__21840__auto__))
;
return ((function (switch__21819__auto__,c__21840__auto__){
return (function() {
var csasync$proc$state_machine__21820__auto__ = null;
var csasync$proc$state_machine__21820__auto____0 = (function (){
var statearr_21944 = [null,null,null,null,null,null,null,null,null];
(statearr_21944[(0)] = csasync$proc$state_machine__21820__auto__);

(statearr_21944[(1)] = (1));

return statearr_21944;
});
var csasync$proc$state_machine__21820__auto____1 = (function (state_21931){
while(true){
var ret_value__21821__auto__ = (function (){try{while(true){
var result__21822__auto__ = switch__21819__auto__.call(null,state_21931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21822__auto__;
}
break;
}
}catch (e21945){if((e21945 instanceof Object)){
var ex__21823__auto__ = e21945;
var statearr_21946_21964 = state_21931;
(statearr_21946_21964[(5)] = ex__21823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21965 = state_21931;
state_21931 = G__21965;
continue;
} else {
return ret_value__21821__auto__;
}
break;
}
});
csasync$proc$state_machine__21820__auto__ = function(state_21931){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21820__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21820__auto____1.call(this,state_21931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21820__auto____0;
csasync$proc$state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21820__auto____1;
return csasync$proc$state_machine__21820__auto__;
})()
;})(switch__21819__auto__,c__21840__auto__))
})();
var state__21842__auto__ = (function (){var statearr_21947 = f__21841__auto__.call(null);
(statearr_21947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21840__auto__);

return statearr_21947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21842__auto__);
});})(c__21840__auto__))
);

return c__21840__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21840__auto___22050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21840__auto___22050){
return (function (){
var f__21841__auto__ = (function (){var switch__21819__auto__ = ((function (c__21840__auto___22050){
return (function (state_22028){
var state_val_22029 = (state_22028[(1)]);
if((state_val_22029 === (7))){
var inst_22017 = cljs.core.async.timeout.call(null,time_out);
var state_22028__$1 = state_22028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22028__$1,(10),inst_22017);
} else {
if((state_val_22029 === (1))){
var state_22028__$1 = state_22028;
var statearr_22030_22051 = state_22028__$1;
(statearr_22030_22051[(2)] = null);

(statearr_22030_22051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (4))){
var inst_22012 = proc_fn.call(null);
var state_22028__$1 = state_22028;
var statearr_22031_22052 = state_22028__$1;
(statearr_22031_22052[(2)] = inst_22012);

(statearr_22031_22052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (6))){
var inst_22015 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
if(cljs.core.truth_(inst_22015)){
var statearr_22032_22053 = state_22028__$1;
(statearr_22032_22053[(1)] = (7));

} else {
var statearr_22033_22054 = state_22028__$1;
(statearr_22033_22054[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (3))){
var inst_22025 = (state_22028[(2)]);
var inst_22026 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22028__$1 = (function (){var statearr_22034 = state_22028;
(statearr_22034[(7)] = inst_22025);

return statearr_22034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22028__$1,inst_22026);
} else {
if((state_val_22029 === (2))){
var inst_22010 = (state_22028[(8)]);
var inst_22009 = cljs.core.deref.call(null,status);
var inst_22010__$1 = cljs.core._EQ_.call(null,inst_22009,"RUN");
var state_22028__$1 = (function (){var statearr_22035 = state_22028;
(statearr_22035[(8)] = inst_22010__$1);

return statearr_22035;
})();
if(inst_22010__$1){
var statearr_22036_22055 = state_22028__$1;
(statearr_22036_22055[(1)] = (4));

} else {
var statearr_22037_22056 = state_22028__$1;
(statearr_22037_22056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (9))){
var inst_22023 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
var statearr_22038_22057 = state_22028__$1;
(statearr_22038_22057[(2)] = inst_22023);

(statearr_22038_22057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (5))){
var inst_22010 = (state_22028[(8)]);
var state_22028__$1 = state_22028;
var statearr_22039_22058 = state_22028__$1;
(statearr_22039_22058[(2)] = inst_22010);

(statearr_22039_22058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (10))){
var inst_22019 = (state_22028[(2)]);
var state_22028__$1 = (function (){var statearr_22040 = state_22028;
(statearr_22040[(9)] = inst_22019);

return statearr_22040;
})();
var statearr_22041_22059 = state_22028__$1;
(statearr_22041_22059[(2)] = null);

(statearr_22041_22059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (8))){
var state_22028__$1 = state_22028;
var statearr_22042_22060 = state_22028__$1;
(statearr_22042_22060[(2)] = null);

(statearr_22042_22060[(1)] = (9));


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
});})(c__21840__auto___22050))
;
return ((function (switch__21819__auto__,c__21840__auto___22050){
return (function() {
var csasync$proc$start_process_$_state_machine__21820__auto__ = null;
var csasync$proc$start_process_$_state_machine__21820__auto____0 = (function (){
var statearr_22046 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22046[(0)] = csasync$proc$start_process_$_state_machine__21820__auto__);

(statearr_22046[(1)] = (1));

return statearr_22046;
});
var csasync$proc$start_process_$_state_machine__21820__auto____1 = (function (state_22028){
while(true){
var ret_value__21821__auto__ = (function (){try{while(true){
var result__21822__auto__ = switch__21819__auto__.call(null,state_22028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21822__auto__;
}
break;
}
}catch (e22047){if((e22047 instanceof Object)){
var ex__21823__auto__ = e22047;
var statearr_22048_22061 = state_22028;
(statearr_22048_22061[(5)] = ex__21823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22062 = state_22028;
state_22028 = G__22062;
continue;
} else {
return ret_value__21821__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21820__auto__ = function(state_22028){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21820__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21820__auto____1.call(this,state_22028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21820__auto____0;
csasync$proc$start_process_$_state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21820__auto____1;
return csasync$proc$start_process_$_state_machine__21820__auto__;
})()
;})(switch__21819__auto__,c__21840__auto___22050))
})();
var state__21842__auto__ = (function (){var statearr_22049 = f__21841__auto__.call(null);
(statearr_22049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21840__auto___22050);

return statearr_22049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21842__auto__);
});})(c__21840__auto___22050))
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
var c__21840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21840__auto__){
return (function (){
var f__21841__auto__ = (function (){var switch__21819__auto__ = ((function (c__21840__auto__){
return (function (state_22083){
var state_val_22084 = (state_22083[(1)]);
if((state_val_22084 === (1))){
var inst_22078 = cljs.core.async.timeout.call(null,time);
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22083__$1,(2),inst_22078);
} else {
if((state_val_22084 === (2))){
var inst_22080 = (state_22083[(2)]);
var inst_22081 = func.call(null);
var state_22083__$1 = (function (){var statearr_22085 = state_22083;
(statearr_22085[(7)] = inst_22080);

return statearr_22085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22083__$1,inst_22081);
} else {
return null;
}
}
});})(c__21840__auto__))
;
return ((function (switch__21819__auto__,c__21840__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21820__auto__ = null;
var csasync$proc$delayer_$_state_machine__21820__auto____0 = (function (){
var statearr_22089 = [null,null,null,null,null,null,null,null];
(statearr_22089[(0)] = csasync$proc$delayer_$_state_machine__21820__auto__);

(statearr_22089[(1)] = (1));

return statearr_22089;
});
var csasync$proc$delayer_$_state_machine__21820__auto____1 = (function (state_22083){
while(true){
var ret_value__21821__auto__ = (function (){try{while(true){
var result__21822__auto__ = switch__21819__auto__.call(null,state_22083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21822__auto__;
}
break;
}
}catch (e22090){if((e22090 instanceof Object)){
var ex__21823__auto__ = e22090;
var statearr_22091_22093 = state_22083;
(statearr_22091_22093[(5)] = ex__21823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22094 = state_22083;
state_22083 = G__22094;
continue;
} else {
return ret_value__21821__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21820__auto__ = function(state_22083){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21820__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21820__auto____1.call(this,state_22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21820__auto____0;
csasync$proc$delayer_$_state_machine__21820__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21820__auto____1;
return csasync$proc$delayer_$_state_machine__21820__auto__;
})()
;})(switch__21819__auto__,c__21840__auto__))
})();
var state__21842__auto__ = (function (){var statearr_22092 = f__21841__auto__.call(null);
(statearr_22092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21840__auto__);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21842__auto__);
});})(c__21840__auto__))
);

return c__21840__auto__;
});

//# sourceMappingURL=proc.js.map