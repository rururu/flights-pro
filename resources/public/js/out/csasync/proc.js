// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args28999 = [];
var len__11371__auto___29062 = arguments.length;
var i__11372__auto___29063 = (0);
while(true){
if((i__11372__auto___29063 < len__11371__auto___29062)){
args28999.push((arguments[i__11372__auto___29063]));

var G__29064 = (i__11372__auto___29063 + (1));
i__11372__auto___29063 = G__29064;
continue;
} else {
}
break;
}

var G__29001 = args28999.length;
switch (G__29001) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28999.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12788__auto__){
return (function (){
var f__12789__auto__ = (function (){var switch__12767__auto__ = ((function (c__12788__auto__){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (1))){
var state_29015__$1 = state_29015;
var statearr_29017_29066 = state_29015__$1;
(statearr_29017_29066[(2)] = null);

(statearr_29017_29066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (2))){
var state_29015__$1 = state_29015;
var statearr_29018_29067 = state_29015__$1;
(statearr_29018_29067[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (3))){
var inst_29013 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (4))){
var inst_29004 = func.call(null);
var inst_29005 = cljs.core.async.timeout.call(null,time_out);
var state_29015__$1 = (function (){var statearr_29020 = state_29015;
(statearr_29020[(7)] = inst_29004);

return statearr_29020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,(7),inst_29005);
} else {
if((state_val_29016 === (5))){
var state_29015__$1 = state_29015;
var statearr_29021_29068 = state_29015__$1;
(statearr_29021_29068[(2)] = null);

(statearr_29021_29068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (6))){
var inst_29011 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29022_29069 = state_29015__$1;
(statearr_29022_29069[(2)] = inst_29011);

(statearr_29022_29069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (7))){
var inst_29007 = (state_29015[(2)]);
var state_29015__$1 = (function (){var statearr_29023 = state_29015;
(statearr_29023[(8)] = inst_29007);

return statearr_29023;
})();
var statearr_29024_29070 = state_29015__$1;
(statearr_29024_29070[(2)] = null);

(statearr_29024_29070[(1)] = (2));


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
});})(c__12788__auto__))
;
return ((function (switch__12767__auto__,c__12788__auto__){
return (function() {
var csasync$proc$state_machine__12768__auto__ = null;
var csasync$proc$state_machine__12768__auto____0 = (function (){
var statearr_29028 = [null,null,null,null,null,null,null,null,null];
(statearr_29028[(0)] = csasync$proc$state_machine__12768__auto__);

(statearr_29028[(1)] = (1));

return statearr_29028;
});
var csasync$proc$state_machine__12768__auto____1 = (function (state_29015){
while(true){
var ret_value__12769__auto__ = (function (){try{while(true){
var result__12770__auto__ = switch__12767__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12770__auto__;
}
break;
}
}catch (e29029){if((e29029 instanceof Object)){
var ex__12771__auto__ = e29029;
var statearr_29030_29071 = state_29015;
(statearr_29030_29071[(5)] = ex__12771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29072 = state_29015;
state_29015 = G__29072;
continue;
} else {
return ret_value__12769__auto__;
}
break;
}
});
csasync$proc$state_machine__12768__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12768__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12768__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12768__auto____0;
csasync$proc$state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12768__auto____1;
return csasync$proc$state_machine__12768__auto__;
})()
;})(switch__12767__auto__,c__12788__auto__))
})();
var state__12790__auto__ = (function (){var statearr_29031 = f__12789__auto__.call(null);
(statearr_29031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12788__auto__);

return statearr_29031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12790__auto__);
});})(c__12788__auto__))
);

return c__12788__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12788__auto__){
return (function (){
var f__12789__auto__ = (function (){var switch__12767__auto__ = ((function (c__12788__auto__){
return (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (1))){
var state_29045__$1 = state_29045;
var statearr_29047_29073 = state_29045__$1;
(statearr_29047_29073[(2)] = null);

(statearr_29047_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (2))){
var state_29045__$1 = state_29045;
var statearr_29048_29074 = state_29045__$1;
(statearr_29048_29074[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (3))){
var inst_29043 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29045__$1,inst_29043);
} else {
if((state_val_29046 === (4))){
var inst_29034 = func.call(null,param);
var inst_29035 = cljs.core.async.timeout.call(null,time_out);
var state_29045__$1 = (function (){var statearr_29050 = state_29045;
(statearr_29050[(7)] = inst_29034);

return statearr_29050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29045__$1,(7),inst_29035);
} else {
if((state_val_29046 === (5))){
var state_29045__$1 = state_29045;
var statearr_29051_29075 = state_29045__$1;
(statearr_29051_29075[(2)] = null);

(statearr_29051_29075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (6))){
var inst_29041 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29052_29076 = state_29045__$1;
(statearr_29052_29076[(2)] = inst_29041);

(statearr_29052_29076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (7))){
var inst_29037 = (state_29045[(2)]);
var state_29045__$1 = (function (){var statearr_29053 = state_29045;
(statearr_29053[(8)] = inst_29037);

return statearr_29053;
})();
var statearr_29054_29077 = state_29045__$1;
(statearr_29054_29077[(2)] = null);

(statearr_29054_29077[(1)] = (2));


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
});})(c__12788__auto__))
;
return ((function (switch__12767__auto__,c__12788__auto__){
return (function() {
var csasync$proc$state_machine__12768__auto__ = null;
var csasync$proc$state_machine__12768__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = csasync$proc$state_machine__12768__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var csasync$proc$state_machine__12768__auto____1 = (function (state_29045){
while(true){
var ret_value__12769__auto__ = (function (){try{while(true){
var result__12770__auto__ = switch__12767__auto__.call(null,state_29045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12770__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__12771__auto__ = e29059;
var statearr_29060_29078 = state_29045;
(statearr_29060_29078[(5)] = ex__12771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29079 = state_29045;
state_29045 = G__29079;
continue;
} else {
return ret_value__12769__auto__;
}
break;
}
});
csasync$proc$state_machine__12768__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12768__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12768__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12768__auto____0;
csasync$proc$state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12768__auto____1;
return csasync$proc$state_machine__12768__auto__;
})()
;})(switch__12767__auto__,c__12788__auto__))
})();
var state__12790__auto__ = (function (){var statearr_29061 = f__12789__auto__.call(null);
(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12788__auto__);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12790__auto__);
});})(c__12788__auto__))
);

return c__12788__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12788__auto___29164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12788__auto___29164){
return (function (){
var f__12789__auto__ = (function (){var switch__12767__auto__ = ((function (c__12788__auto___29164){
return (function (state_29142){
var state_val_29143 = (state_29142[(1)]);
if((state_val_29143 === (7))){
var inst_29131 = cljs.core.async.timeout.call(null,time_out);
var state_29142__$1 = state_29142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29142__$1,(10),inst_29131);
} else {
if((state_val_29143 === (1))){
var state_29142__$1 = state_29142;
var statearr_29144_29165 = state_29142__$1;
(statearr_29144_29165[(2)] = null);

(statearr_29144_29165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (4))){
var inst_29126 = proc_fn.call(null);
var state_29142__$1 = state_29142;
var statearr_29145_29166 = state_29142__$1;
(statearr_29145_29166[(2)] = inst_29126);

(statearr_29145_29166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (6))){
var inst_29129 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
if(cljs.core.truth_(inst_29129)){
var statearr_29146_29167 = state_29142__$1;
(statearr_29146_29167[(1)] = (7));

} else {
var statearr_29147_29168 = state_29142__$1;
(statearr_29147_29168[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (3))){
var inst_29139 = (state_29142[(2)]);
var inst_29140 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_29142__$1 = (function (){var statearr_29148 = state_29142;
(statearr_29148[(7)] = inst_29139);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29142__$1,inst_29140);
} else {
if((state_val_29143 === (2))){
var inst_29124 = (state_29142[(8)]);
var inst_29123 = cljs.core.deref.call(null,status);
var inst_29124__$1 = cljs.core._EQ_.call(null,inst_29123,"RUN");
var state_29142__$1 = (function (){var statearr_29149 = state_29142;
(statearr_29149[(8)] = inst_29124__$1);

return statearr_29149;
})();
if(inst_29124__$1){
var statearr_29150_29169 = state_29142__$1;
(statearr_29150_29169[(1)] = (4));

} else {
var statearr_29151_29170 = state_29142__$1;
(statearr_29151_29170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (9))){
var inst_29137 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29152_29171 = state_29142__$1;
(statearr_29152_29171[(2)] = inst_29137);

(statearr_29152_29171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (5))){
var inst_29124 = (state_29142[(8)]);
var state_29142__$1 = state_29142;
var statearr_29153_29172 = state_29142__$1;
(statearr_29153_29172[(2)] = inst_29124);

(statearr_29153_29172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (10))){
var inst_29133 = (state_29142[(2)]);
var state_29142__$1 = (function (){var statearr_29154 = state_29142;
(statearr_29154[(9)] = inst_29133);

return statearr_29154;
})();
var statearr_29155_29173 = state_29142__$1;
(statearr_29155_29173[(2)] = null);

(statearr_29155_29173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (8))){
var state_29142__$1 = state_29142;
var statearr_29156_29174 = state_29142__$1;
(statearr_29156_29174[(2)] = null);

(statearr_29156_29174[(1)] = (9));


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
});})(c__12788__auto___29164))
;
return ((function (switch__12767__auto__,c__12788__auto___29164){
return (function() {
var csasync$proc$start_process_$_state_machine__12768__auto__ = null;
var csasync$proc$start_process_$_state_machine__12768__auto____0 = (function (){
var statearr_29160 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29160[(0)] = csasync$proc$start_process_$_state_machine__12768__auto__);

(statearr_29160[(1)] = (1));

return statearr_29160;
});
var csasync$proc$start_process_$_state_machine__12768__auto____1 = (function (state_29142){
while(true){
var ret_value__12769__auto__ = (function (){try{while(true){
var result__12770__auto__ = switch__12767__auto__.call(null,state_29142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12770__auto__;
}
break;
}
}catch (e29161){if((e29161 instanceof Object)){
var ex__12771__auto__ = e29161;
var statearr_29162_29175 = state_29142;
(statearr_29162_29175[(5)] = ex__12771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29176 = state_29142;
state_29142 = G__29176;
continue;
} else {
return ret_value__12769__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12768__auto__ = function(state_29142){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12768__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12768__auto____1.call(this,state_29142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12768__auto____0;
csasync$proc$start_process_$_state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12768__auto____1;
return csasync$proc$start_process_$_state_machine__12768__auto__;
})()
;})(switch__12767__auto__,c__12788__auto___29164))
})();
var state__12790__auto__ = (function (){var statearr_29163 = f__12789__auto__.call(null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12788__auto___29164);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12790__auto__);
});})(c__12788__auto___29164))
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
var c__12788__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12788__auto__){
return (function (){
var f__12789__auto__ = (function (){var switch__12767__auto__ = ((function (c__12788__auto__){
return (function (state_29197){
var state_val_29198 = (state_29197[(1)]);
if((state_val_29198 === (1))){
var inst_29192 = cljs.core.async.timeout.call(null,time);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29197__$1,(2),inst_29192);
} else {
if((state_val_29198 === (2))){
var inst_29194 = (state_29197[(2)]);
var inst_29195 = func.call(null);
var state_29197__$1 = (function (){var statearr_29199 = state_29197;
(statearr_29199[(7)] = inst_29194);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29197__$1,inst_29195);
} else {
return null;
}
}
});})(c__12788__auto__))
;
return ((function (switch__12767__auto__,c__12788__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12768__auto__ = null;
var csasync$proc$delayer_$_state_machine__12768__auto____0 = (function (){
var statearr_29203 = [null,null,null,null,null,null,null,null];
(statearr_29203[(0)] = csasync$proc$delayer_$_state_machine__12768__auto__);

(statearr_29203[(1)] = (1));

return statearr_29203;
});
var csasync$proc$delayer_$_state_machine__12768__auto____1 = (function (state_29197){
while(true){
var ret_value__12769__auto__ = (function (){try{while(true){
var result__12770__auto__ = switch__12767__auto__.call(null,state_29197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12770__auto__;
}
break;
}
}catch (e29204){if((e29204 instanceof Object)){
var ex__12771__auto__ = e29204;
var statearr_29205_29207 = state_29197;
(statearr_29205_29207[(5)] = ex__12771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29197;
state_29197 = G__29208;
continue;
} else {
return ret_value__12769__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12768__auto__ = function(state_29197){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12768__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12768__auto____1.call(this,state_29197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12768__auto____0;
csasync$proc$delayer_$_state_machine__12768__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12768__auto____1;
return csasync$proc$delayer_$_state_machine__12768__auto__;
})()
;})(switch__12767__auto__,c__12788__auto__))
})();
var state__12790__auto__ = (function (){var statearr_29206 = f__12789__auto__.call(null);
(statearr_29206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12788__auto__);

return statearr_29206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12790__auto__);
});})(c__12788__auto__))
);

return c__12788__auto__;
});

//# sourceMappingURL=proc.js.map