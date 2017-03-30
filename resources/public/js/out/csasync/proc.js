// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args33084 = [];
var len__21482__auto___33147 = arguments.length;
var i__21483__auto___33148 = (0);
while(true){
if((i__21483__auto___33148 < len__21482__auto___33147)){
args33084.push((arguments[i__21483__auto___33148]));

var G__33149 = (i__21483__auto___33148 + (1));
i__21483__auto___33148 = G__33149;
continue;
} else {
}
break;
}

var G__33086 = args33084.length;
switch (G__33086) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33084.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22558__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22558__auto__){
return (function (){
var f__22559__auto__ = (function (){var switch__22537__auto__ = ((function (c__22558__auto__){
return (function (state_33100){
var state_val_33101 = (state_33100[(1)]);
if((state_val_33101 === (1))){
var state_33100__$1 = state_33100;
var statearr_33102_33151 = state_33100__$1;
(statearr_33102_33151[(2)] = null);

(statearr_33102_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (2))){
var state_33100__$1 = state_33100;
var statearr_33103_33152 = state_33100__$1;
(statearr_33103_33152[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (3))){
var inst_33098 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33100__$1,inst_33098);
} else {
if((state_val_33101 === (4))){
var inst_33089 = func.call(null);
var inst_33090 = cljs.core.async.timeout.call(null,time_out);
var state_33100__$1 = (function (){var statearr_33105 = state_33100;
(statearr_33105[(7)] = inst_33089);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33100__$1,(7),inst_33090);
} else {
if((state_val_33101 === (5))){
var state_33100__$1 = state_33100;
var statearr_33106_33153 = state_33100__$1;
(statearr_33106_33153[(2)] = null);

(statearr_33106_33153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (6))){
var inst_33096 = (state_33100[(2)]);
var state_33100__$1 = state_33100;
var statearr_33107_33154 = state_33100__$1;
(statearr_33107_33154[(2)] = inst_33096);

(statearr_33107_33154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33101 === (7))){
var inst_33092 = (state_33100[(2)]);
var state_33100__$1 = (function (){var statearr_33108 = state_33100;
(statearr_33108[(8)] = inst_33092);

return statearr_33108;
})();
var statearr_33109_33155 = state_33100__$1;
(statearr_33109_33155[(2)] = null);

(statearr_33109_33155[(1)] = (2));


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
});})(c__22558__auto__))
;
return ((function (switch__22537__auto__,c__22558__auto__){
return (function() {
var csasync$proc$state_machine__22538__auto__ = null;
var csasync$proc$state_machine__22538__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = csasync$proc$state_machine__22538__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var csasync$proc$state_machine__22538__auto____1 = (function (state_33100){
while(true){
var ret_value__22539__auto__ = (function (){try{while(true){
var result__22540__auto__ = switch__22537__auto__.call(null,state_33100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22540__auto__;
}
break;
}
}catch (e33114){if((e33114 instanceof Object)){
var ex__22541__auto__ = e33114;
var statearr_33115_33156 = state_33100;
(statearr_33115_33156[(5)] = ex__22541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33100;
state_33100 = G__33157;
continue;
} else {
return ret_value__22539__auto__;
}
break;
}
});
csasync$proc$state_machine__22538__auto__ = function(state_33100){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22538__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22538__auto____1.call(this,state_33100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22538__auto____0;
csasync$proc$state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22538__auto____1;
return csasync$proc$state_machine__22538__auto__;
})()
;})(switch__22537__auto__,c__22558__auto__))
})();
var state__22560__auto__ = (function (){var statearr_33116 = f__22559__auto__.call(null);
(statearr_33116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22558__auto__);

return statearr_33116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22560__auto__);
});})(c__22558__auto__))
);

return c__22558__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22558__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22558__auto__){
return (function (){
var f__22559__auto__ = (function (){var switch__22537__auto__ = ((function (c__22558__auto__){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (1))){
var state_33130__$1 = state_33130;
var statearr_33132_33158 = state_33130__$1;
(statearr_33132_33158[(2)] = null);

(statearr_33132_33158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
var statearr_33133_33159 = state_33130__$1;
(statearr_33133_33159[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (3))){
var inst_33128 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (4))){
var inst_33119 = func.call(null,param);
var inst_33120 = cljs.core.async.timeout.call(null,time_out);
var state_33130__$1 = (function (){var statearr_33135 = state_33130;
(statearr_33135[(7)] = inst_33119);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33130__$1,(7),inst_33120);
} else {
if((state_val_33131 === (5))){
var state_33130__$1 = state_33130;
var statearr_33136_33160 = state_33130__$1;
(statearr_33136_33160[(2)] = null);

(statearr_33136_33160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var inst_33126 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33137_33161 = state_33130__$1;
(statearr_33137_33161[(2)] = inst_33126);

(statearr_33137_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (7))){
var inst_33122 = (state_33130[(2)]);
var state_33130__$1 = (function (){var statearr_33138 = state_33130;
(statearr_33138[(8)] = inst_33122);

return statearr_33138;
})();
var statearr_33139_33162 = state_33130__$1;
(statearr_33139_33162[(2)] = null);

(statearr_33139_33162[(1)] = (2));


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
});})(c__22558__auto__))
;
return ((function (switch__22537__auto__,c__22558__auto__){
return (function() {
var csasync$proc$state_machine__22538__auto__ = null;
var csasync$proc$state_machine__22538__auto____0 = (function (){
var statearr_33143 = [null,null,null,null,null,null,null,null,null];
(statearr_33143[(0)] = csasync$proc$state_machine__22538__auto__);

(statearr_33143[(1)] = (1));

return statearr_33143;
});
var csasync$proc$state_machine__22538__auto____1 = (function (state_33130){
while(true){
var ret_value__22539__auto__ = (function (){try{while(true){
var result__22540__auto__ = switch__22537__auto__.call(null,state_33130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22540__auto__;
}
break;
}
}catch (e33144){if((e33144 instanceof Object)){
var ex__22541__auto__ = e33144;
var statearr_33145_33163 = state_33130;
(statearr_33145_33163[(5)] = ex__22541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33164 = state_33130;
state_33130 = G__33164;
continue;
} else {
return ret_value__22539__auto__;
}
break;
}
});
csasync$proc$state_machine__22538__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22538__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22538__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22538__auto____0;
csasync$proc$state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22538__auto____1;
return csasync$proc$state_machine__22538__auto__;
})()
;})(switch__22537__auto__,c__22558__auto__))
})();
var state__22560__auto__ = (function (){var statearr_33146 = f__22559__auto__.call(null);
(statearr_33146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22558__auto__);

return statearr_33146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22560__auto__);
});})(c__22558__auto__))
);

return c__22558__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22558__auto___33249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22558__auto___33249){
return (function (){
var f__22559__auto__ = (function (){var switch__22537__auto__ = ((function (c__22558__auto___33249){
return (function (state_33227){
var state_val_33228 = (state_33227[(1)]);
if((state_val_33228 === (7))){
var inst_33216 = cljs.core.async.timeout.call(null,time_out);
var state_33227__$1 = state_33227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33227__$1,(10),inst_33216);
} else {
if((state_val_33228 === (1))){
var state_33227__$1 = state_33227;
var statearr_33229_33250 = state_33227__$1;
(statearr_33229_33250[(2)] = null);

(statearr_33229_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (4))){
var inst_33211 = proc_fn.call(null);
var state_33227__$1 = state_33227;
var statearr_33230_33251 = state_33227__$1;
(statearr_33230_33251[(2)] = inst_33211);

(statearr_33230_33251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (6))){
var inst_33214 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
if(cljs.core.truth_(inst_33214)){
var statearr_33231_33252 = state_33227__$1;
(statearr_33231_33252[(1)] = (7));

} else {
var statearr_33232_33253 = state_33227__$1;
(statearr_33232_33253[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (3))){
var inst_33224 = (state_33227[(2)]);
var inst_33225 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_33227__$1 = (function (){var statearr_33233 = state_33227;
(statearr_33233[(7)] = inst_33224);

return statearr_33233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33227__$1,inst_33225);
} else {
if((state_val_33228 === (2))){
var inst_33209 = (state_33227[(8)]);
var inst_33208 = cljs.core.deref.call(null,status);
var inst_33209__$1 = cljs.core._EQ_.call(null,inst_33208,"RUN");
var state_33227__$1 = (function (){var statearr_33234 = state_33227;
(statearr_33234[(8)] = inst_33209__$1);

return statearr_33234;
})();
if(inst_33209__$1){
var statearr_33235_33254 = state_33227__$1;
(statearr_33235_33254[(1)] = (4));

} else {
var statearr_33236_33255 = state_33227__$1;
(statearr_33236_33255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (9))){
var inst_33222 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33237_33256 = state_33227__$1;
(statearr_33237_33256[(2)] = inst_33222);

(statearr_33237_33256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (5))){
var inst_33209 = (state_33227[(8)]);
var state_33227__$1 = state_33227;
var statearr_33238_33257 = state_33227__$1;
(statearr_33238_33257[(2)] = inst_33209);

(statearr_33238_33257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (10))){
var inst_33218 = (state_33227[(2)]);
var state_33227__$1 = (function (){var statearr_33239 = state_33227;
(statearr_33239[(9)] = inst_33218);

return statearr_33239;
})();
var statearr_33240_33258 = state_33227__$1;
(statearr_33240_33258[(2)] = null);

(statearr_33240_33258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (8))){
var state_33227__$1 = state_33227;
var statearr_33241_33259 = state_33227__$1;
(statearr_33241_33259[(2)] = null);

(statearr_33241_33259[(1)] = (9));


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
});})(c__22558__auto___33249))
;
return ((function (switch__22537__auto__,c__22558__auto___33249){
return (function() {
var csasync$proc$start_process_$_state_machine__22538__auto__ = null;
var csasync$proc$start_process_$_state_machine__22538__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33245[(0)] = csasync$proc$start_process_$_state_machine__22538__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var csasync$proc$start_process_$_state_machine__22538__auto____1 = (function (state_33227){
while(true){
var ret_value__22539__auto__ = (function (){try{while(true){
var result__22540__auto__ = switch__22537__auto__.call(null,state_33227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22540__auto__;
}
break;
}
}catch (e33246){if((e33246 instanceof Object)){
var ex__22541__auto__ = e33246;
var statearr_33247_33260 = state_33227;
(statearr_33247_33260[(5)] = ex__22541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_33227;
state_33227 = G__33261;
continue;
} else {
return ret_value__22539__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22538__auto__ = function(state_33227){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22538__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22538__auto____1.call(this,state_33227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22538__auto____0;
csasync$proc$start_process_$_state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22538__auto____1;
return csasync$proc$start_process_$_state_machine__22538__auto__;
})()
;})(switch__22537__auto__,c__22558__auto___33249))
})();
var state__22560__auto__ = (function (){var statearr_33248 = f__22559__auto__.call(null);
(statearr_33248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22558__auto___33249);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22560__auto__);
});})(c__22558__auto___33249))
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
var c__22558__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22558__auto__){
return (function (){
var f__22559__auto__ = (function (){var switch__22537__auto__ = ((function (c__22558__auto__){
return (function (state_33282){
var state_val_33283 = (state_33282[(1)]);
if((state_val_33283 === (1))){
var inst_33277 = cljs.core.async.timeout.call(null,time);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33282__$1,(2),inst_33277);
} else {
if((state_val_33283 === (2))){
var inst_33279 = (state_33282[(2)]);
var inst_33280 = func.call(null);
var state_33282__$1 = (function (){var statearr_33284 = state_33282;
(statearr_33284[(7)] = inst_33279);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33282__$1,inst_33280);
} else {
return null;
}
}
});})(c__22558__auto__))
;
return ((function (switch__22537__auto__,c__22558__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22538__auto__ = null;
var csasync$proc$delayer_$_state_machine__22538__auto____0 = (function (){
var statearr_33288 = [null,null,null,null,null,null,null,null];
(statearr_33288[(0)] = csasync$proc$delayer_$_state_machine__22538__auto__);

(statearr_33288[(1)] = (1));

return statearr_33288;
});
var csasync$proc$delayer_$_state_machine__22538__auto____1 = (function (state_33282){
while(true){
var ret_value__22539__auto__ = (function (){try{while(true){
var result__22540__auto__ = switch__22537__auto__.call(null,state_33282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22540__auto__;
}
break;
}
}catch (e33289){if((e33289 instanceof Object)){
var ex__22541__auto__ = e33289;
var statearr_33290_33292 = state_33282;
(statearr_33290_33292[(5)] = ex__22541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33293 = state_33282;
state_33282 = G__33293;
continue;
} else {
return ret_value__22539__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22538__auto__ = function(state_33282){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22538__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22538__auto____1.call(this,state_33282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22538__auto____0;
csasync$proc$delayer_$_state_machine__22538__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22538__auto____1;
return csasync$proc$delayer_$_state_machine__22538__auto__;
})()
;})(switch__22537__auto__,c__22558__auto__))
})();
var state__22560__auto__ = (function (){var statearr_33291 = f__22559__auto__.call(null);
(statearr_33291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22558__auto__);

return statearr_33291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22560__auto__);
});})(c__22558__auto__))
);

return c__22558__auto__;
});

//# sourceMappingURL=proc.js.map