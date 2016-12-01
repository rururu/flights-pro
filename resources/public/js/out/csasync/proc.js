// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21113 = [];
var len__20113__auto___21176 = arguments.length;
var i__20114__auto___21177 = (0);
while(true){
if((i__20114__auto___21177 < len__20113__auto___21176)){
args21113.push((arguments[i__20114__auto___21177]));

var G__21178 = (i__20114__auto___21177 + (1));
i__20114__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var G__21115 = args21113.length;
switch (G__21115) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21113.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21068__auto__){
return (function (){
var f__21069__auto__ = (function (){var switch__21047__auto__ = ((function (c__21068__auto__){
return (function (state_21129){
var state_val_21130 = (state_21129[(1)]);
if((state_val_21130 === (1))){
var state_21129__$1 = state_21129;
var statearr_21131_21180 = state_21129__$1;
(statearr_21131_21180[(2)] = null);

(statearr_21131_21180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (2))){
var state_21129__$1 = state_21129;
var statearr_21132_21181 = state_21129__$1;
(statearr_21132_21181[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (3))){
var inst_21127 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21129__$1,inst_21127);
} else {
if((state_val_21130 === (4))){
var inst_21118 = func.call(null);
var inst_21119 = cljs.core.async.timeout.call(null,time_out);
var state_21129__$1 = (function (){var statearr_21134 = state_21129;
(statearr_21134[(7)] = inst_21118);

return statearr_21134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21129__$1,(7),inst_21119);
} else {
if((state_val_21130 === (5))){
var state_21129__$1 = state_21129;
var statearr_21135_21182 = state_21129__$1;
(statearr_21135_21182[(2)] = null);

(statearr_21135_21182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (6))){
var inst_21125 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
var statearr_21136_21183 = state_21129__$1;
(statearr_21136_21183[(2)] = inst_21125);

(statearr_21136_21183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (7))){
var inst_21121 = (state_21129[(2)]);
var state_21129__$1 = (function (){var statearr_21137 = state_21129;
(statearr_21137[(8)] = inst_21121);

return statearr_21137;
})();
var statearr_21138_21184 = state_21129__$1;
(statearr_21138_21184[(2)] = null);

(statearr_21138_21184[(1)] = (2));


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
});})(c__21068__auto__))
;
return ((function (switch__21047__auto__,c__21068__auto__){
return (function() {
var csasync$proc$state_machine__21048__auto__ = null;
var csasync$proc$state_machine__21048__auto____0 = (function (){
var statearr_21142 = [null,null,null,null,null,null,null,null,null];
(statearr_21142[(0)] = csasync$proc$state_machine__21048__auto__);

(statearr_21142[(1)] = (1));

return statearr_21142;
});
var csasync$proc$state_machine__21048__auto____1 = (function (state_21129){
while(true){
var ret_value__21049__auto__ = (function (){try{while(true){
var result__21050__auto__ = switch__21047__auto__.call(null,state_21129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21050__auto__;
}
break;
}
}catch (e21143){if((e21143 instanceof Object)){
var ex__21051__auto__ = e21143;
var statearr_21144_21185 = state_21129;
(statearr_21144_21185[(5)] = ex__21051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21186 = state_21129;
state_21129 = G__21186;
continue;
} else {
return ret_value__21049__auto__;
}
break;
}
});
csasync$proc$state_machine__21048__auto__ = function(state_21129){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21048__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21048__auto____1.call(this,state_21129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21048__auto____0;
csasync$proc$state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21048__auto____1;
return csasync$proc$state_machine__21048__auto__;
})()
;})(switch__21047__auto__,c__21068__auto__))
})();
var state__21070__auto__ = (function (){var statearr_21145 = f__21069__auto__.call(null);
(statearr_21145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21068__auto__);

return statearr_21145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21070__auto__);
});})(c__21068__auto__))
);

return c__21068__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21068__auto__){
return (function (){
var f__21069__auto__ = (function (){var switch__21047__auto__ = ((function (c__21068__auto__){
return (function (state_21159){
var state_val_21160 = (state_21159[(1)]);
if((state_val_21160 === (1))){
var state_21159__$1 = state_21159;
var statearr_21161_21187 = state_21159__$1;
(statearr_21161_21187[(2)] = null);

(statearr_21161_21187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21160 === (2))){
var state_21159__$1 = state_21159;
var statearr_21162_21188 = state_21159__$1;
(statearr_21162_21188[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21160 === (3))){
var inst_21157 = (state_21159[(2)]);
var state_21159__$1 = state_21159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21159__$1,inst_21157);
} else {
if((state_val_21160 === (4))){
var inst_21148 = func.call(null,param);
var inst_21149 = cljs.core.async.timeout.call(null,time_out);
var state_21159__$1 = (function (){var statearr_21164 = state_21159;
(statearr_21164[(7)] = inst_21148);

return statearr_21164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21159__$1,(7),inst_21149);
} else {
if((state_val_21160 === (5))){
var state_21159__$1 = state_21159;
var statearr_21165_21189 = state_21159__$1;
(statearr_21165_21189[(2)] = null);

(statearr_21165_21189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21160 === (6))){
var inst_21155 = (state_21159[(2)]);
var state_21159__$1 = state_21159;
var statearr_21166_21190 = state_21159__$1;
(statearr_21166_21190[(2)] = inst_21155);

(statearr_21166_21190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21160 === (7))){
var inst_21151 = (state_21159[(2)]);
var state_21159__$1 = (function (){var statearr_21167 = state_21159;
(statearr_21167[(8)] = inst_21151);

return statearr_21167;
})();
var statearr_21168_21191 = state_21159__$1;
(statearr_21168_21191[(2)] = null);

(statearr_21168_21191[(1)] = (2));


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
});})(c__21068__auto__))
;
return ((function (switch__21047__auto__,c__21068__auto__){
return (function() {
var csasync$proc$state_machine__21048__auto__ = null;
var csasync$proc$state_machine__21048__auto____0 = (function (){
var statearr_21172 = [null,null,null,null,null,null,null,null,null];
(statearr_21172[(0)] = csasync$proc$state_machine__21048__auto__);

(statearr_21172[(1)] = (1));

return statearr_21172;
});
var csasync$proc$state_machine__21048__auto____1 = (function (state_21159){
while(true){
var ret_value__21049__auto__ = (function (){try{while(true){
var result__21050__auto__ = switch__21047__auto__.call(null,state_21159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21050__auto__;
}
break;
}
}catch (e21173){if((e21173 instanceof Object)){
var ex__21051__auto__ = e21173;
var statearr_21174_21192 = state_21159;
(statearr_21174_21192[(5)] = ex__21051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21193 = state_21159;
state_21159 = G__21193;
continue;
} else {
return ret_value__21049__auto__;
}
break;
}
});
csasync$proc$state_machine__21048__auto__ = function(state_21159){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21048__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21048__auto____1.call(this,state_21159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21048__auto____0;
csasync$proc$state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21048__auto____1;
return csasync$proc$state_machine__21048__auto__;
})()
;})(switch__21047__auto__,c__21068__auto__))
})();
var state__21070__auto__ = (function (){var statearr_21175 = f__21069__auto__.call(null);
(statearr_21175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21068__auto__);

return statearr_21175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21070__auto__);
});})(c__21068__auto__))
);

return c__21068__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21068__auto___21278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21068__auto___21278){
return (function (){
var f__21069__auto__ = (function (){var switch__21047__auto__ = ((function (c__21068__auto___21278){
return (function (state_21256){
var state_val_21257 = (state_21256[(1)]);
if((state_val_21257 === (7))){
var inst_21245 = cljs.core.async.timeout.call(null,time_out);
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21256__$1,(10),inst_21245);
} else {
if((state_val_21257 === (1))){
var state_21256__$1 = state_21256;
var statearr_21258_21279 = state_21256__$1;
(statearr_21258_21279[(2)] = null);

(statearr_21258_21279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (4))){
var inst_21240 = proc_fn.call(null);
var state_21256__$1 = state_21256;
var statearr_21259_21280 = state_21256__$1;
(statearr_21259_21280[(2)] = inst_21240);

(statearr_21259_21280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (6))){
var inst_21243 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
if(cljs.core.truth_(inst_21243)){
var statearr_21260_21281 = state_21256__$1;
(statearr_21260_21281[(1)] = (7));

} else {
var statearr_21261_21282 = state_21256__$1;
(statearr_21261_21282[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (3))){
var inst_21253 = (state_21256[(2)]);
var inst_21254 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21256__$1 = (function (){var statearr_21262 = state_21256;
(statearr_21262[(7)] = inst_21253);

return statearr_21262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21256__$1,inst_21254);
} else {
if((state_val_21257 === (2))){
var inst_21238 = (state_21256[(8)]);
var inst_21237 = cljs.core.deref.call(null,status);
var inst_21238__$1 = cljs.core._EQ_.call(null,inst_21237,"RUN");
var state_21256__$1 = (function (){var statearr_21263 = state_21256;
(statearr_21263[(8)] = inst_21238__$1);

return statearr_21263;
})();
if(inst_21238__$1){
var statearr_21264_21283 = state_21256__$1;
(statearr_21264_21283[(1)] = (4));

} else {
var statearr_21265_21284 = state_21256__$1;
(statearr_21265_21284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (9))){
var inst_21251 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21266_21285 = state_21256__$1;
(statearr_21266_21285[(2)] = inst_21251);

(statearr_21266_21285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (5))){
var inst_21238 = (state_21256[(8)]);
var state_21256__$1 = state_21256;
var statearr_21267_21286 = state_21256__$1;
(statearr_21267_21286[(2)] = inst_21238);

(statearr_21267_21286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (10))){
var inst_21247 = (state_21256[(2)]);
var state_21256__$1 = (function (){var statearr_21268 = state_21256;
(statearr_21268[(9)] = inst_21247);

return statearr_21268;
})();
var statearr_21269_21287 = state_21256__$1;
(statearr_21269_21287[(2)] = null);

(statearr_21269_21287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (8))){
var state_21256__$1 = state_21256;
var statearr_21270_21288 = state_21256__$1;
(statearr_21270_21288[(2)] = null);

(statearr_21270_21288[(1)] = (9));


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
});})(c__21068__auto___21278))
;
return ((function (switch__21047__auto__,c__21068__auto___21278){
return (function() {
var csasync$proc$start_process_$_state_machine__21048__auto__ = null;
var csasync$proc$start_process_$_state_machine__21048__auto____0 = (function (){
var statearr_21274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21274[(0)] = csasync$proc$start_process_$_state_machine__21048__auto__);

(statearr_21274[(1)] = (1));

return statearr_21274;
});
var csasync$proc$start_process_$_state_machine__21048__auto____1 = (function (state_21256){
while(true){
var ret_value__21049__auto__ = (function (){try{while(true){
var result__21050__auto__ = switch__21047__auto__.call(null,state_21256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21050__auto__;
}
break;
}
}catch (e21275){if((e21275 instanceof Object)){
var ex__21051__auto__ = e21275;
var statearr_21276_21289 = state_21256;
(statearr_21276_21289[(5)] = ex__21051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21290 = state_21256;
state_21256 = G__21290;
continue;
} else {
return ret_value__21049__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21048__auto__ = function(state_21256){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21048__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21048__auto____1.call(this,state_21256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21048__auto____0;
csasync$proc$start_process_$_state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21048__auto____1;
return csasync$proc$start_process_$_state_machine__21048__auto__;
})()
;})(switch__21047__auto__,c__21068__auto___21278))
})();
var state__21070__auto__ = (function (){var statearr_21277 = f__21069__auto__.call(null);
(statearr_21277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21068__auto___21278);

return statearr_21277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21070__auto__);
});})(c__21068__auto___21278))
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
var c__21068__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21068__auto__){
return (function (){
var f__21069__auto__ = (function (){var switch__21047__auto__ = ((function (c__21068__auto__){
return (function (state_21311){
var state_val_21312 = (state_21311[(1)]);
if((state_val_21312 === (1))){
var inst_21306 = cljs.core.async.timeout.call(null,time);
var state_21311__$1 = state_21311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21311__$1,(2),inst_21306);
} else {
if((state_val_21312 === (2))){
var inst_21308 = (state_21311[(2)]);
var inst_21309 = func.call(null);
var state_21311__$1 = (function (){var statearr_21313 = state_21311;
(statearr_21313[(7)] = inst_21308);

return statearr_21313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21311__$1,inst_21309);
} else {
return null;
}
}
});})(c__21068__auto__))
;
return ((function (switch__21047__auto__,c__21068__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21048__auto__ = null;
var csasync$proc$delayer_$_state_machine__21048__auto____0 = (function (){
var statearr_21317 = [null,null,null,null,null,null,null,null];
(statearr_21317[(0)] = csasync$proc$delayer_$_state_machine__21048__auto__);

(statearr_21317[(1)] = (1));

return statearr_21317;
});
var csasync$proc$delayer_$_state_machine__21048__auto____1 = (function (state_21311){
while(true){
var ret_value__21049__auto__ = (function (){try{while(true){
var result__21050__auto__ = switch__21047__auto__.call(null,state_21311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21050__auto__;
}
break;
}
}catch (e21318){if((e21318 instanceof Object)){
var ex__21051__auto__ = e21318;
var statearr_21319_21321 = state_21311;
(statearr_21319_21321[(5)] = ex__21051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21322 = state_21311;
state_21311 = G__21322;
continue;
} else {
return ret_value__21049__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21048__auto__ = function(state_21311){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21048__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21048__auto____1.call(this,state_21311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21048__auto____0;
csasync$proc$delayer_$_state_machine__21048__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21048__auto____1;
return csasync$proc$delayer_$_state_machine__21048__auto__;
})()
;})(switch__21047__auto__,c__21068__auto__))
})();
var state__21070__auto__ = (function (){var statearr_21320 = f__21069__auto__.call(null);
(statearr_21320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21068__auto__);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21070__auto__);
});})(c__21068__auto__))
);

return c__21068__auto__;
});

//# sourceMappingURL=proc.js.map