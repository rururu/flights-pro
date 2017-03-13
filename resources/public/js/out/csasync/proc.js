// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args42027 = [];
var len__24338__auto___42090 = arguments.length;
var i__24339__auto___42091 = (0);
while(true){
if((i__24339__auto___42091 < len__24338__auto___42090)){
args42027.push((arguments[i__24339__auto___42091]));

var G__42092 = (i__24339__auto___42091 + (1));
i__24339__auto___42091 = G__42092;
continue;
} else {
}
break;
}

var G__42029 = args42027.length;
switch (G__42029) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42027.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__25414__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25414__auto__){
return (function (){
var f__25415__auto__ = (function (){var switch__25393__auto__ = ((function (c__25414__auto__){
return (function (state_42043){
var state_val_42044 = (state_42043[(1)]);
if((state_val_42044 === (1))){
var state_42043__$1 = state_42043;
var statearr_42045_42094 = state_42043__$1;
(statearr_42045_42094[(2)] = null);

(statearr_42045_42094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42044 === (2))){
var state_42043__$1 = state_42043;
var statearr_42046_42095 = state_42043__$1;
(statearr_42046_42095[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42044 === (3))){
var inst_42041 = (state_42043[(2)]);
var state_42043__$1 = state_42043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42043__$1,inst_42041);
} else {
if((state_val_42044 === (4))){
var inst_42032 = func.call(null);
var inst_42033 = cljs.core.async.timeout.call(null,time_out);
var state_42043__$1 = (function (){var statearr_42048 = state_42043;
(statearr_42048[(7)] = inst_42032);

return statearr_42048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42043__$1,(7),inst_42033);
} else {
if((state_val_42044 === (5))){
var state_42043__$1 = state_42043;
var statearr_42049_42096 = state_42043__$1;
(statearr_42049_42096[(2)] = null);

(statearr_42049_42096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42044 === (6))){
var inst_42039 = (state_42043[(2)]);
var state_42043__$1 = state_42043;
var statearr_42050_42097 = state_42043__$1;
(statearr_42050_42097[(2)] = inst_42039);

(statearr_42050_42097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42044 === (7))){
var inst_42035 = (state_42043[(2)]);
var state_42043__$1 = (function (){var statearr_42051 = state_42043;
(statearr_42051[(8)] = inst_42035);

return statearr_42051;
})();
var statearr_42052_42098 = state_42043__$1;
(statearr_42052_42098[(2)] = null);

(statearr_42052_42098[(1)] = (2));


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
});})(c__25414__auto__))
;
return ((function (switch__25393__auto__,c__25414__auto__){
return (function() {
var csasync$proc$state_machine__25394__auto__ = null;
var csasync$proc$state_machine__25394__auto____0 = (function (){
var statearr_42056 = [null,null,null,null,null,null,null,null,null];
(statearr_42056[(0)] = csasync$proc$state_machine__25394__auto__);

(statearr_42056[(1)] = (1));

return statearr_42056;
});
var csasync$proc$state_machine__25394__auto____1 = (function (state_42043){
while(true){
var ret_value__25395__auto__ = (function (){try{while(true){
var result__25396__auto__ = switch__25393__auto__.call(null,state_42043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25396__auto__;
}
break;
}
}catch (e42057){if((e42057 instanceof Object)){
var ex__25397__auto__ = e42057;
var statearr_42058_42099 = state_42043;
(statearr_42058_42099[(5)] = ex__25397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42100 = state_42043;
state_42043 = G__42100;
continue;
} else {
return ret_value__25395__auto__;
}
break;
}
});
csasync$proc$state_machine__25394__auto__ = function(state_42043){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25394__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25394__auto____1.call(this,state_42043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25394__auto____0;
csasync$proc$state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25394__auto____1;
return csasync$proc$state_machine__25394__auto__;
})()
;})(switch__25393__auto__,c__25414__auto__))
})();
var state__25416__auto__ = (function (){var statearr_42059 = f__25415__auto__.call(null);
(statearr_42059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25414__auto__);

return statearr_42059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25416__auto__);
});})(c__25414__auto__))
);

return c__25414__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__25414__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25414__auto__){
return (function (){
var f__25415__auto__ = (function (){var switch__25393__auto__ = ((function (c__25414__auto__){
return (function (state_42073){
var state_val_42074 = (state_42073[(1)]);
if((state_val_42074 === (1))){
var state_42073__$1 = state_42073;
var statearr_42075_42101 = state_42073__$1;
(statearr_42075_42101[(2)] = null);

(statearr_42075_42101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42074 === (2))){
var state_42073__$1 = state_42073;
var statearr_42076_42102 = state_42073__$1;
(statearr_42076_42102[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42074 === (3))){
var inst_42071 = (state_42073[(2)]);
var state_42073__$1 = state_42073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42073__$1,inst_42071);
} else {
if((state_val_42074 === (4))){
var inst_42062 = func.call(null,param);
var inst_42063 = cljs.core.async.timeout.call(null,time_out);
var state_42073__$1 = (function (){var statearr_42078 = state_42073;
(statearr_42078[(7)] = inst_42062);

return statearr_42078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42073__$1,(7),inst_42063);
} else {
if((state_val_42074 === (5))){
var state_42073__$1 = state_42073;
var statearr_42079_42103 = state_42073__$1;
(statearr_42079_42103[(2)] = null);

(statearr_42079_42103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42074 === (6))){
var inst_42069 = (state_42073[(2)]);
var state_42073__$1 = state_42073;
var statearr_42080_42104 = state_42073__$1;
(statearr_42080_42104[(2)] = inst_42069);

(statearr_42080_42104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42074 === (7))){
var inst_42065 = (state_42073[(2)]);
var state_42073__$1 = (function (){var statearr_42081 = state_42073;
(statearr_42081[(8)] = inst_42065);

return statearr_42081;
})();
var statearr_42082_42105 = state_42073__$1;
(statearr_42082_42105[(2)] = null);

(statearr_42082_42105[(1)] = (2));


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
});})(c__25414__auto__))
;
return ((function (switch__25393__auto__,c__25414__auto__){
return (function() {
var csasync$proc$state_machine__25394__auto__ = null;
var csasync$proc$state_machine__25394__auto____0 = (function (){
var statearr_42086 = [null,null,null,null,null,null,null,null,null];
(statearr_42086[(0)] = csasync$proc$state_machine__25394__auto__);

(statearr_42086[(1)] = (1));

return statearr_42086;
});
var csasync$proc$state_machine__25394__auto____1 = (function (state_42073){
while(true){
var ret_value__25395__auto__ = (function (){try{while(true){
var result__25396__auto__ = switch__25393__auto__.call(null,state_42073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25396__auto__;
}
break;
}
}catch (e42087){if((e42087 instanceof Object)){
var ex__25397__auto__ = e42087;
var statearr_42088_42106 = state_42073;
(statearr_42088_42106[(5)] = ex__25397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42107 = state_42073;
state_42073 = G__42107;
continue;
} else {
return ret_value__25395__auto__;
}
break;
}
});
csasync$proc$state_machine__25394__auto__ = function(state_42073){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25394__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25394__auto____1.call(this,state_42073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25394__auto____0;
csasync$proc$state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25394__auto____1;
return csasync$proc$state_machine__25394__auto__;
})()
;})(switch__25393__auto__,c__25414__auto__))
})();
var state__25416__auto__ = (function (){var statearr_42089 = f__25415__auto__.call(null);
(statearr_42089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25414__auto__);

return statearr_42089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25416__auto__);
});})(c__25414__auto__))
);

return c__25414__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__25414__auto___42192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25414__auto___42192){
return (function (){
var f__25415__auto__ = (function (){var switch__25393__auto__ = ((function (c__25414__auto___42192){
return (function (state_42170){
var state_val_42171 = (state_42170[(1)]);
if((state_val_42171 === (7))){
var inst_42159 = cljs.core.async.timeout.call(null,time_out);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42170__$1,(10),inst_42159);
} else {
if((state_val_42171 === (1))){
var state_42170__$1 = state_42170;
var statearr_42172_42193 = state_42170__$1;
(statearr_42172_42193[(2)] = null);

(statearr_42172_42193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (4))){
var inst_42154 = proc_fn.call(null);
var state_42170__$1 = state_42170;
var statearr_42173_42194 = state_42170__$1;
(statearr_42173_42194[(2)] = inst_42154);

(statearr_42173_42194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (6))){
var inst_42157 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
if(cljs.core.truth_(inst_42157)){
var statearr_42174_42195 = state_42170__$1;
(statearr_42174_42195[(1)] = (7));

} else {
var statearr_42175_42196 = state_42170__$1;
(statearr_42175_42196[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (3))){
var inst_42167 = (state_42170[(2)]);
var inst_42168 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_42170__$1 = (function (){var statearr_42176 = state_42170;
(statearr_42176[(7)] = inst_42167);

return statearr_42176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42170__$1,inst_42168);
} else {
if((state_val_42171 === (2))){
var inst_42152 = (state_42170[(8)]);
var inst_42151 = cljs.core.deref.call(null,status);
var inst_42152__$1 = cljs.core._EQ_.call(null,inst_42151,"RUN");
var state_42170__$1 = (function (){var statearr_42177 = state_42170;
(statearr_42177[(8)] = inst_42152__$1);

return statearr_42177;
})();
if(inst_42152__$1){
var statearr_42178_42197 = state_42170__$1;
(statearr_42178_42197[(1)] = (4));

} else {
var statearr_42179_42198 = state_42170__$1;
(statearr_42179_42198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (9))){
var inst_42165 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42180_42199 = state_42170__$1;
(statearr_42180_42199[(2)] = inst_42165);

(statearr_42180_42199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (5))){
var inst_42152 = (state_42170[(8)]);
var state_42170__$1 = state_42170;
var statearr_42181_42200 = state_42170__$1;
(statearr_42181_42200[(2)] = inst_42152);

(statearr_42181_42200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (10))){
var inst_42161 = (state_42170[(2)]);
var state_42170__$1 = (function (){var statearr_42182 = state_42170;
(statearr_42182[(9)] = inst_42161);

return statearr_42182;
})();
var statearr_42183_42201 = state_42170__$1;
(statearr_42183_42201[(2)] = null);

(statearr_42183_42201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (8))){
var state_42170__$1 = state_42170;
var statearr_42184_42202 = state_42170__$1;
(statearr_42184_42202[(2)] = null);

(statearr_42184_42202[(1)] = (9));


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
});})(c__25414__auto___42192))
;
return ((function (switch__25393__auto__,c__25414__auto___42192){
return (function() {
var csasync$proc$start_process_$_state_machine__25394__auto__ = null;
var csasync$proc$start_process_$_state_machine__25394__auto____0 = (function (){
var statearr_42188 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42188[(0)] = csasync$proc$start_process_$_state_machine__25394__auto__);

(statearr_42188[(1)] = (1));

return statearr_42188;
});
var csasync$proc$start_process_$_state_machine__25394__auto____1 = (function (state_42170){
while(true){
var ret_value__25395__auto__ = (function (){try{while(true){
var result__25396__auto__ = switch__25393__auto__.call(null,state_42170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25396__auto__;
}
break;
}
}catch (e42189){if((e42189 instanceof Object)){
var ex__25397__auto__ = e42189;
var statearr_42190_42203 = state_42170;
(statearr_42190_42203[(5)] = ex__25397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42204 = state_42170;
state_42170 = G__42204;
continue;
} else {
return ret_value__25395__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25394__auto__ = function(state_42170){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25394__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25394__auto____1.call(this,state_42170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25394__auto____0;
csasync$proc$start_process_$_state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25394__auto____1;
return csasync$proc$start_process_$_state_machine__25394__auto__;
})()
;})(switch__25393__auto__,c__25414__auto___42192))
})();
var state__25416__auto__ = (function (){var statearr_42191 = f__25415__auto__.call(null);
(statearr_42191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25414__auto___42192);

return statearr_42191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25416__auto__);
});})(c__25414__auto___42192))
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
var c__25414__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25414__auto__){
return (function (){
var f__25415__auto__ = (function (){var switch__25393__auto__ = ((function (c__25414__auto__){
return (function (state_42225){
var state_val_42226 = (state_42225[(1)]);
if((state_val_42226 === (1))){
var inst_42220 = cljs.core.async.timeout.call(null,time);
var state_42225__$1 = state_42225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42225__$1,(2),inst_42220);
} else {
if((state_val_42226 === (2))){
var inst_42222 = (state_42225[(2)]);
var inst_42223 = func.call(null);
var state_42225__$1 = (function (){var statearr_42227 = state_42225;
(statearr_42227[(7)] = inst_42222);

return statearr_42227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42225__$1,inst_42223);
} else {
return null;
}
}
});})(c__25414__auto__))
;
return ((function (switch__25393__auto__,c__25414__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25394__auto__ = null;
var csasync$proc$delayer_$_state_machine__25394__auto____0 = (function (){
var statearr_42231 = [null,null,null,null,null,null,null,null];
(statearr_42231[(0)] = csasync$proc$delayer_$_state_machine__25394__auto__);

(statearr_42231[(1)] = (1));

return statearr_42231;
});
var csasync$proc$delayer_$_state_machine__25394__auto____1 = (function (state_42225){
while(true){
var ret_value__25395__auto__ = (function (){try{while(true){
var result__25396__auto__ = switch__25393__auto__.call(null,state_42225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25396__auto__;
}
break;
}
}catch (e42232){if((e42232 instanceof Object)){
var ex__25397__auto__ = e42232;
var statearr_42233_42235 = state_42225;
(statearr_42233_42235[(5)] = ex__25397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42236 = state_42225;
state_42225 = G__42236;
continue;
} else {
return ret_value__25395__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25394__auto__ = function(state_42225){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25394__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25394__auto____1.call(this,state_42225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25394__auto____0;
csasync$proc$delayer_$_state_machine__25394__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25394__auto____1;
return csasync$proc$delayer_$_state_machine__25394__auto__;
})()
;})(switch__25393__auto__,c__25414__auto__))
})();
var state__25416__auto__ = (function (){var statearr_42234 = f__25415__auto__.call(null);
(statearr_42234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25414__auto__);

return statearr_42234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25416__auto__);
});})(c__25414__auto__))
);

return c__25414__auto__;
});

//# sourceMappingURL=proc.js.map