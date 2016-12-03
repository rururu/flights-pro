// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args29017 = [];
var len__9613__auto___29080 = arguments.length;
var i__9614__auto___29081 = (0);
while(true){
if((i__9614__auto___29081 < len__9613__auto___29080)){
args29017.push((arguments[i__9614__auto___29081]));

var G__29082 = (i__9614__auto___29081 + (1));
i__9614__auto___29081 = G__29082;
continue;
} else {
}
break;
}

var G__29019 = args29017.length;
switch (G__29019) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29017.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_29033){
var state_val_29034 = (state_29033[(1)]);
if((state_val_29034 === (1))){
var state_29033__$1 = state_29033;
var statearr_29035_29084 = state_29033__$1;
(statearr_29035_29084[(2)] = null);

(statearr_29035_29084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (2))){
var state_29033__$1 = state_29033;
var statearr_29036_29085 = state_29033__$1;
(statearr_29036_29085[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (3))){
var inst_29031 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29033__$1,inst_29031);
} else {
if((state_val_29034 === (4))){
var inst_29022 = func.call(null);
var inst_29023 = cljs.core.async.timeout.call(null,time_out);
var state_29033__$1 = (function (){var statearr_29038 = state_29033;
(statearr_29038[(7)] = inst_29022);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29033__$1,(7),inst_29023);
} else {
if((state_val_29034 === (5))){
var state_29033__$1 = state_29033;
var statearr_29039_29086 = state_29033__$1;
(statearr_29039_29086[(2)] = null);

(statearr_29039_29086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (6))){
var inst_29029 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29040_29087 = state_29033__$1;
(statearr_29040_29087[(2)] = inst_29029);

(statearr_29040_29087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (7))){
var inst_29025 = (state_29033[(2)]);
var state_29033__$1 = (function (){var statearr_29041 = state_29033;
(statearr_29041[(8)] = inst_29025);

return statearr_29041;
})();
var statearr_29042_29088 = state_29033__$1;
(statearr_29042_29088[(2)] = null);

(statearr_29042_29088[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_29046 = [null,null,null,null,null,null,null,null,null];
(statearr_29046[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_29046[(1)] = (1));

return statearr_29046;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_29033){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_29033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e29047){if((e29047 instanceof Object)){
var ex__10892__auto__ = e29047;
var statearr_29048_29089 = state_29033;
(statearr_29048_29089[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29090 = state_29033;
state_29033 = G__29090;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_29033){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_29033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_29049 = f__10910__auto__.call(null);
(statearr_29049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_29049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_29063){
var state_val_29064 = (state_29063[(1)]);
if((state_val_29064 === (1))){
var state_29063__$1 = state_29063;
var statearr_29065_29091 = state_29063__$1;
(statearr_29065_29091[(2)] = null);

(statearr_29065_29091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29064 === (2))){
var state_29063__$1 = state_29063;
var statearr_29066_29092 = state_29063__$1;
(statearr_29066_29092[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29064 === (3))){
var inst_29061 = (state_29063[(2)]);
var state_29063__$1 = state_29063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29063__$1,inst_29061);
} else {
if((state_val_29064 === (4))){
var inst_29052 = func.call(null,param);
var inst_29053 = cljs.core.async.timeout.call(null,time_out);
var state_29063__$1 = (function (){var statearr_29068 = state_29063;
(statearr_29068[(7)] = inst_29052);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29063__$1,(7),inst_29053);
} else {
if((state_val_29064 === (5))){
var state_29063__$1 = state_29063;
var statearr_29069_29093 = state_29063__$1;
(statearr_29069_29093[(2)] = null);

(statearr_29069_29093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29064 === (6))){
var inst_29059 = (state_29063[(2)]);
var state_29063__$1 = state_29063;
var statearr_29070_29094 = state_29063__$1;
(statearr_29070_29094[(2)] = inst_29059);

(statearr_29070_29094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29064 === (7))){
var inst_29055 = (state_29063[(2)]);
var state_29063__$1 = (function (){var statearr_29071 = state_29063;
(statearr_29071[(8)] = inst_29055);

return statearr_29071;
})();
var statearr_29072_29095 = state_29063__$1;
(statearr_29072_29095[(2)] = null);

(statearr_29072_29095[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_29076 = [null,null,null,null,null,null,null,null,null];
(statearr_29076[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_29076[(1)] = (1));

return statearr_29076;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_29063){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_29063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e29077){if((e29077 instanceof Object)){
var ex__10892__auto__ = e29077;
var statearr_29078_29096 = state_29063;
(statearr_29078_29096[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29097 = state_29063;
state_29063 = G__29097;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_29063){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_29063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_29079 = f__10910__auto__.call(null);
(statearr_29079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_29079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__10909__auto___29182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto___29182){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto___29182){
return (function (state_29160){
var state_val_29161 = (state_29160[(1)]);
if((state_val_29161 === (7))){
var inst_29149 = cljs.core.async.timeout.call(null,time_out);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29160__$1,(10),inst_29149);
} else {
if((state_val_29161 === (1))){
var state_29160__$1 = state_29160;
var statearr_29162_29183 = state_29160__$1;
(statearr_29162_29183[(2)] = null);

(statearr_29162_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (4))){
var inst_29144 = proc_fn.call(null);
var state_29160__$1 = state_29160;
var statearr_29163_29184 = state_29160__$1;
(statearr_29163_29184[(2)] = inst_29144);

(statearr_29163_29184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (6))){
var inst_29147 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
if(cljs.core.truth_(inst_29147)){
var statearr_29164_29185 = state_29160__$1;
(statearr_29164_29185[(1)] = (7));

} else {
var statearr_29165_29186 = state_29160__$1;
(statearr_29165_29186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (3))){
var inst_29157 = (state_29160[(2)]);
var inst_29158 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_29160__$1 = (function (){var statearr_29166 = state_29160;
(statearr_29166[(7)] = inst_29157);

return statearr_29166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29160__$1,inst_29158);
} else {
if((state_val_29161 === (2))){
var inst_29142 = (state_29160[(8)]);
var inst_29141 = cljs.core.deref.call(null,status);
var inst_29142__$1 = cljs.core._EQ_.call(null,inst_29141,"RUN");
var state_29160__$1 = (function (){var statearr_29167 = state_29160;
(statearr_29167[(8)] = inst_29142__$1);

return statearr_29167;
})();
if(inst_29142__$1){
var statearr_29168_29187 = state_29160__$1;
(statearr_29168_29187[(1)] = (4));

} else {
var statearr_29169_29188 = state_29160__$1;
(statearr_29169_29188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (9))){
var inst_29155 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29170_29189 = state_29160__$1;
(statearr_29170_29189[(2)] = inst_29155);

(statearr_29170_29189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (5))){
var inst_29142 = (state_29160[(8)]);
var state_29160__$1 = state_29160;
var statearr_29171_29190 = state_29160__$1;
(statearr_29171_29190[(2)] = inst_29142);

(statearr_29171_29190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (10))){
var inst_29151 = (state_29160[(2)]);
var state_29160__$1 = (function (){var statearr_29172 = state_29160;
(statearr_29172[(9)] = inst_29151);

return statearr_29172;
})();
var statearr_29173_29191 = state_29160__$1;
(statearr_29173_29191[(2)] = null);

(statearr_29173_29191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (8))){
var state_29160__$1 = state_29160;
var statearr_29174_29192 = state_29160__$1;
(statearr_29174_29192[(2)] = null);

(statearr_29174_29192[(1)] = (9));


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
});})(c__10909__auto___29182))
;
return ((function (switch__10888__auto__,c__10909__auto___29182){
return (function() {
var csasync$proc$start_process_$_state_machine__10889__auto__ = null;
var csasync$proc$start_process_$_state_machine__10889__auto____0 = (function (){
var statearr_29178 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29178[(0)] = csasync$proc$start_process_$_state_machine__10889__auto__);

(statearr_29178[(1)] = (1));

return statearr_29178;
});
var csasync$proc$start_process_$_state_machine__10889__auto____1 = (function (state_29160){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_29160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e29179){if((e29179 instanceof Object)){
var ex__10892__auto__ = e29179;
var statearr_29180_29193 = state_29160;
(statearr_29180_29193[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29160;
state_29160 = G__29194;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__10889__auto__ = function(state_29160){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__10889__auto____1.call(this,state_29160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__10889__auto____0;
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__10889__auto____1;
return csasync$proc$start_process_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto___29182))
})();
var state__10911__auto__ = (function (){var statearr_29181 = f__10910__auto__.call(null);
(statearr_29181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto___29182);

return statearr_29181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto___29182))
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
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_29215){
var state_val_29216 = (state_29215[(1)]);
if((state_val_29216 === (1))){
var inst_29210 = cljs.core.async.timeout.call(null,time);
var state_29215__$1 = state_29215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29215__$1,(2),inst_29210);
} else {
if((state_val_29216 === (2))){
var inst_29212 = (state_29215[(2)]);
var inst_29213 = func.call(null);
var state_29215__$1 = (function (){var statearr_29217 = state_29215;
(statearr_29217[(7)] = inst_29212);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29215__$1,inst_29213);
} else {
return null;
}
}
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__10889__auto__ = null;
var csasync$proc$delayer_$_state_machine__10889__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null,null];
(statearr_29221[(0)] = csasync$proc$delayer_$_state_machine__10889__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var csasync$proc$delayer_$_state_machine__10889__auto____1 = (function (state_29215){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_29215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__10892__auto__ = e29222;
var statearr_29223_29225 = state_29215;
(statearr_29223_29225[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29226 = state_29215;
state_29215 = G__29226;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__10889__auto__ = function(state_29215){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__10889__auto____1.call(this,state_29215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__10889__auto____0;
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__10889__auto____1;
return csasync$proc$delayer_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_29224 = f__10910__auto__.call(null);
(statearr_29224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

//# sourceMappingURL=proc.js.map