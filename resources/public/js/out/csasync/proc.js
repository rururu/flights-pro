// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args29886 = [];
var len__22088__auto___29949 = arguments.length;
var i__22089__auto___29950 = (0);
while(true){
if((i__22089__auto___29950 < len__22088__auto___29949)){
args29886.push((arguments[i__22089__auto___29950]));

var G__29951 = (i__22089__auto___29950 + (1));
i__22089__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var G__29888 = args29886.length;
switch (G__29888) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29886.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__23164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23164__auto__){
return (function (){
var f__23165__auto__ = (function (){var switch__23143__auto__ = ((function (c__23164__auto__){
return (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (1))){
var state_29902__$1 = state_29902;
var statearr_29904_29953 = state_29902__$1;
(statearr_29904_29953[(2)] = null);

(statearr_29904_29953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (2))){
var state_29902__$1 = state_29902;
var statearr_29905_29954 = state_29902__$1;
(statearr_29905_29954[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (3))){
var inst_29900 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29902__$1,inst_29900);
} else {
if((state_val_29903 === (4))){
var inst_29891 = func.call(null);
var inst_29892 = cljs.core.async.timeout.call(null,time_out);
var state_29902__$1 = (function (){var statearr_29907 = state_29902;
(statearr_29907[(7)] = inst_29891);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29902__$1,(7),inst_29892);
} else {
if((state_val_29903 === (5))){
var state_29902__$1 = state_29902;
var statearr_29908_29955 = state_29902__$1;
(statearr_29908_29955[(2)] = null);

(statearr_29908_29955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (6))){
var inst_29898 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29909_29956 = state_29902__$1;
(statearr_29909_29956[(2)] = inst_29898);

(statearr_29909_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (7))){
var inst_29894 = (state_29902[(2)]);
var state_29902__$1 = (function (){var statearr_29910 = state_29902;
(statearr_29910[(8)] = inst_29894);

return statearr_29910;
})();
var statearr_29911_29957 = state_29902__$1;
(statearr_29911_29957[(2)] = null);

(statearr_29911_29957[(1)] = (2));


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
});})(c__23164__auto__))
;
return ((function (switch__23143__auto__,c__23164__auto__){
return (function() {
var csasync$proc$state_machine__23144__auto__ = null;
var csasync$proc$state_machine__23144__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null,null,null];
(statearr_29915[(0)] = csasync$proc$state_machine__23144__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var csasync$proc$state_machine__23144__auto____1 = (function (state_29902){
while(true){
var ret_value__23145__auto__ = (function (){try{while(true){
var result__23146__auto__ = switch__23143__auto__.call(null,state_29902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23146__auto__;
}
break;
}
}catch (e29916){if((e29916 instanceof Object)){
var ex__23147__auto__ = e29916;
var statearr_29917_29958 = state_29902;
(statearr_29917_29958[(5)] = ex__23147__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29959 = state_29902;
state_29902 = G__29959;
continue;
} else {
return ret_value__23145__auto__;
}
break;
}
});
csasync$proc$state_machine__23144__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23144__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23144__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23144__auto____0;
csasync$proc$state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23144__auto____1;
return csasync$proc$state_machine__23144__auto__;
})()
;})(switch__23143__auto__,c__23164__auto__))
})();
var state__23166__auto__ = (function (){var statearr_29918 = f__23165__auto__.call(null);
(statearr_29918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23164__auto__);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23166__auto__);
});})(c__23164__auto__))
);

return c__23164__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23164__auto__){
return (function (){
var f__23165__auto__ = (function (){var switch__23143__auto__ = ((function (c__23164__auto__){
return (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (1))){
var state_29932__$1 = state_29932;
var statearr_29934_29960 = state_29932__$1;
(statearr_29934_29960[(2)] = null);

(statearr_29934_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (2))){
var state_29932__$1 = state_29932;
var statearr_29935_29961 = state_29932__$1;
(statearr_29935_29961[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (3))){
var inst_29930 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29932__$1,inst_29930);
} else {
if((state_val_29933 === (4))){
var inst_29921 = func.call(null,param);
var inst_29922 = cljs.core.async.timeout.call(null,time_out);
var state_29932__$1 = (function (){var statearr_29937 = state_29932;
(statearr_29937[(7)] = inst_29921);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29932__$1,(7),inst_29922);
} else {
if((state_val_29933 === (5))){
var state_29932__$1 = state_29932;
var statearr_29938_29962 = state_29932__$1;
(statearr_29938_29962[(2)] = null);

(statearr_29938_29962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (6))){
var inst_29928 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29939_29963 = state_29932__$1;
(statearr_29939_29963[(2)] = inst_29928);

(statearr_29939_29963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (7))){
var inst_29924 = (state_29932[(2)]);
var state_29932__$1 = (function (){var statearr_29940 = state_29932;
(statearr_29940[(8)] = inst_29924);

return statearr_29940;
})();
var statearr_29941_29964 = state_29932__$1;
(statearr_29941_29964[(2)] = null);

(statearr_29941_29964[(1)] = (2));


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
});})(c__23164__auto__))
;
return ((function (switch__23143__auto__,c__23164__auto__){
return (function() {
var csasync$proc$state_machine__23144__auto__ = null;
var csasync$proc$state_machine__23144__auto____0 = (function (){
var statearr_29945 = [null,null,null,null,null,null,null,null,null];
(statearr_29945[(0)] = csasync$proc$state_machine__23144__auto__);

(statearr_29945[(1)] = (1));

return statearr_29945;
});
var csasync$proc$state_machine__23144__auto____1 = (function (state_29932){
while(true){
var ret_value__23145__auto__ = (function (){try{while(true){
var result__23146__auto__ = switch__23143__auto__.call(null,state_29932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23146__auto__;
}
break;
}
}catch (e29946){if((e29946 instanceof Object)){
var ex__23147__auto__ = e29946;
var statearr_29947_29965 = state_29932;
(statearr_29947_29965[(5)] = ex__23147__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29966 = state_29932;
state_29932 = G__29966;
continue;
} else {
return ret_value__23145__auto__;
}
break;
}
});
csasync$proc$state_machine__23144__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23144__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23144__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23144__auto____0;
csasync$proc$state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23144__auto____1;
return csasync$proc$state_machine__23144__auto__;
})()
;})(switch__23143__auto__,c__23164__auto__))
})();
var state__23166__auto__ = (function (){var statearr_29948 = f__23165__auto__.call(null);
(statearr_29948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23164__auto__);

return statearr_29948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23166__auto__);
});})(c__23164__auto__))
);

return c__23164__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__23164__auto___30051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23164__auto___30051){
return (function (){
var f__23165__auto__ = (function (){var switch__23143__auto__ = ((function (c__23164__auto___30051){
return (function (state_30029){
var state_val_30030 = (state_30029[(1)]);
if((state_val_30030 === (7))){
var inst_30018 = cljs.core.async.timeout.call(null,time_out);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30029__$1,(10),inst_30018);
} else {
if((state_val_30030 === (1))){
var state_30029__$1 = state_30029;
var statearr_30031_30052 = state_30029__$1;
(statearr_30031_30052[(2)] = null);

(statearr_30031_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (4))){
var inst_30013 = proc_fn.call(null);
var state_30029__$1 = state_30029;
var statearr_30032_30053 = state_30029__$1;
(statearr_30032_30053[(2)] = inst_30013);

(statearr_30032_30053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (6))){
var inst_30016 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
if(cljs.core.truth_(inst_30016)){
var statearr_30033_30054 = state_30029__$1;
(statearr_30033_30054[(1)] = (7));

} else {
var statearr_30034_30055 = state_30029__$1;
(statearr_30034_30055[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (3))){
var inst_30026 = (state_30029[(2)]);
var inst_30027 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_30029__$1 = (function (){var statearr_30035 = state_30029;
(statearr_30035[(7)] = inst_30026);

return statearr_30035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30029__$1,inst_30027);
} else {
if((state_val_30030 === (2))){
var inst_30011 = (state_30029[(8)]);
var inst_30010 = cljs.core.deref.call(null,status);
var inst_30011__$1 = cljs.core._EQ_.call(null,inst_30010,"RUN");
var state_30029__$1 = (function (){var statearr_30036 = state_30029;
(statearr_30036[(8)] = inst_30011__$1);

return statearr_30036;
})();
if(inst_30011__$1){
var statearr_30037_30056 = state_30029__$1;
(statearr_30037_30056[(1)] = (4));

} else {
var statearr_30038_30057 = state_30029__$1;
(statearr_30038_30057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (9))){
var inst_30024 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30039_30058 = state_30029__$1;
(statearr_30039_30058[(2)] = inst_30024);

(statearr_30039_30058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (5))){
var inst_30011 = (state_30029[(8)]);
var state_30029__$1 = state_30029;
var statearr_30040_30059 = state_30029__$1;
(statearr_30040_30059[(2)] = inst_30011);

(statearr_30040_30059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (10))){
var inst_30020 = (state_30029[(2)]);
var state_30029__$1 = (function (){var statearr_30041 = state_30029;
(statearr_30041[(9)] = inst_30020);

return statearr_30041;
})();
var statearr_30042_30060 = state_30029__$1;
(statearr_30042_30060[(2)] = null);

(statearr_30042_30060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (8))){
var state_30029__$1 = state_30029;
var statearr_30043_30061 = state_30029__$1;
(statearr_30043_30061[(2)] = null);

(statearr_30043_30061[(1)] = (9));


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
});})(c__23164__auto___30051))
;
return ((function (switch__23143__auto__,c__23164__auto___30051){
return (function() {
var csasync$proc$start_process_$_state_machine__23144__auto__ = null;
var csasync$proc$start_process_$_state_machine__23144__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = csasync$proc$start_process_$_state_machine__23144__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var csasync$proc$start_process_$_state_machine__23144__auto____1 = (function (state_30029){
while(true){
var ret_value__23145__auto__ = (function (){try{while(true){
var result__23146__auto__ = switch__23143__auto__.call(null,state_30029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23146__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__23147__auto__ = e30048;
var statearr_30049_30062 = state_30029;
(statearr_30049_30062[(5)] = ex__23147__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30063 = state_30029;
state_30029 = G__30063;
continue;
} else {
return ret_value__23145__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__23144__auto__ = function(state_30029){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__23144__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__23144__auto____1.call(this,state_30029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__23144__auto____0;
csasync$proc$start_process_$_state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__23144__auto____1;
return csasync$proc$start_process_$_state_machine__23144__auto__;
})()
;})(switch__23143__auto__,c__23164__auto___30051))
})();
var state__23166__auto__ = (function (){var statearr_30050 = f__23165__auto__.call(null);
(statearr_30050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23164__auto___30051);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23166__auto__);
});})(c__23164__auto___30051))
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
var c__23164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23164__auto__){
return (function (){
var f__23165__auto__ = (function (){var switch__23143__auto__ = ((function (c__23164__auto__){
return (function (state_30084){
var state_val_30085 = (state_30084[(1)]);
if((state_val_30085 === (1))){
var inst_30079 = cljs.core.async.timeout.call(null,time);
var state_30084__$1 = state_30084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30084__$1,(2),inst_30079);
} else {
if((state_val_30085 === (2))){
var inst_30081 = (state_30084[(2)]);
var inst_30082 = func.call(null);
var state_30084__$1 = (function (){var statearr_30086 = state_30084;
(statearr_30086[(7)] = inst_30081);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30084__$1,inst_30082);
} else {
return null;
}
}
});})(c__23164__auto__))
;
return ((function (switch__23143__auto__,c__23164__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__23144__auto__ = null;
var csasync$proc$delayer_$_state_machine__23144__auto____0 = (function (){
var statearr_30090 = [null,null,null,null,null,null,null,null];
(statearr_30090[(0)] = csasync$proc$delayer_$_state_machine__23144__auto__);

(statearr_30090[(1)] = (1));

return statearr_30090;
});
var csasync$proc$delayer_$_state_machine__23144__auto____1 = (function (state_30084){
while(true){
var ret_value__23145__auto__ = (function (){try{while(true){
var result__23146__auto__ = switch__23143__auto__.call(null,state_30084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23146__auto__;
}
break;
}
}catch (e30091){if((e30091 instanceof Object)){
var ex__23147__auto__ = e30091;
var statearr_30092_30094 = state_30084;
(statearr_30092_30094[(5)] = ex__23147__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30095 = state_30084;
state_30084 = G__30095;
continue;
} else {
return ret_value__23145__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__23144__auto__ = function(state_30084){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__23144__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__23144__auto____1.call(this,state_30084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__23144__auto____0;
csasync$proc$delayer_$_state_machine__23144__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__23144__auto____1;
return csasync$proc$delayer_$_state_machine__23144__auto__;
})()
;})(switch__23143__auto__,c__23164__auto__))
})();
var state__23166__auto__ = (function (){var statearr_30093 = f__23165__auto__.call(null);
(statearr_30093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23164__auto__);

return statearr_30093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23166__auto__);
});})(c__23164__auto__))
);

return c__23164__auto__;
});

//# sourceMappingURL=proc.js.map