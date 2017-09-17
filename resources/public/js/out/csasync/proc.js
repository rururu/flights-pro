// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args50244 = [];
var len__10374__auto___50307 = arguments.length;
var i__10375__auto___50308 = (0);
while(true){
if((i__10375__auto___50308 < len__10374__auto___50307)){
args50244.push((arguments[i__10375__auto___50308]));

var G__50309 = (i__10375__auto___50308 + (1));
i__10375__auto___50308 = G__50309;
continue;
} else {
}
break;
}

var G__50246 = args50244.length;
switch (G__50246) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50244.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11791__auto__){
return (function (){
var f__11792__auto__ = (function (){var switch__11770__auto__ = ((function (c__11791__auto__){
return (function (state_50260){
var state_val_50261 = (state_50260[(1)]);
if((state_val_50261 === (1))){
var state_50260__$1 = state_50260;
var statearr_50262_50311 = state_50260__$1;
(statearr_50262_50311[(2)] = null);

(statearr_50262_50311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (2))){
var state_50260__$1 = state_50260;
var statearr_50263_50312 = state_50260__$1;
(statearr_50263_50312[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (3))){
var inst_50258 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50260__$1,inst_50258);
} else {
if((state_val_50261 === (4))){
var inst_50249 = func.call(null);
var inst_50250 = cljs.core.async.timeout.call(null,time_out);
var state_50260__$1 = (function (){var statearr_50265 = state_50260;
(statearr_50265[(7)] = inst_50249);

return statearr_50265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50260__$1,(7),inst_50250);
} else {
if((state_val_50261 === (5))){
var state_50260__$1 = state_50260;
var statearr_50266_50313 = state_50260__$1;
(statearr_50266_50313[(2)] = null);

(statearr_50266_50313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (6))){
var inst_50256 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
var statearr_50267_50314 = state_50260__$1;
(statearr_50267_50314[(2)] = inst_50256);

(statearr_50267_50314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (7))){
var inst_50252 = (state_50260[(2)]);
var state_50260__$1 = (function (){var statearr_50268 = state_50260;
(statearr_50268[(8)] = inst_50252);

return statearr_50268;
})();
var statearr_50269_50315 = state_50260__$1;
(statearr_50269_50315[(2)] = null);

(statearr_50269_50315[(1)] = (2));


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
});})(c__11791__auto__))
;
return ((function (switch__11770__auto__,c__11791__auto__){
return (function() {
var csasync$proc$state_machine__11771__auto__ = null;
var csasync$proc$state_machine__11771__auto____0 = (function (){
var statearr_50273 = [null,null,null,null,null,null,null,null,null];
(statearr_50273[(0)] = csasync$proc$state_machine__11771__auto__);

(statearr_50273[(1)] = (1));

return statearr_50273;
});
var csasync$proc$state_machine__11771__auto____1 = (function (state_50260){
while(true){
var ret_value__11772__auto__ = (function (){try{while(true){
var result__11773__auto__ = switch__11770__auto__.call(null,state_50260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11773__auto__;
}
break;
}
}catch (e50274){if((e50274 instanceof Object)){
var ex__11774__auto__ = e50274;
var statearr_50275_50316 = state_50260;
(statearr_50275_50316[(5)] = ex__11774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50317 = state_50260;
state_50260 = G__50317;
continue;
} else {
return ret_value__11772__auto__;
}
break;
}
});
csasync$proc$state_machine__11771__auto__ = function(state_50260){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11771__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11771__auto____1.call(this,state_50260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11771__auto____0;
csasync$proc$state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11771__auto____1;
return csasync$proc$state_machine__11771__auto__;
})()
;})(switch__11770__auto__,c__11791__auto__))
})();
var state__11793__auto__ = (function (){var statearr_50276 = f__11792__auto__.call(null);
(statearr_50276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11791__auto__);

return statearr_50276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11793__auto__);
});})(c__11791__auto__))
);

return c__11791__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11791__auto__){
return (function (){
var f__11792__auto__ = (function (){var switch__11770__auto__ = ((function (c__11791__auto__){
return (function (state_50290){
var state_val_50291 = (state_50290[(1)]);
if((state_val_50291 === (1))){
var state_50290__$1 = state_50290;
var statearr_50292_50318 = state_50290__$1;
(statearr_50292_50318[(2)] = null);

(statearr_50292_50318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50291 === (2))){
var state_50290__$1 = state_50290;
var statearr_50293_50319 = state_50290__$1;
(statearr_50293_50319[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50291 === (3))){
var inst_50288 = (state_50290[(2)]);
var state_50290__$1 = state_50290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50290__$1,inst_50288);
} else {
if((state_val_50291 === (4))){
var inst_50279 = func.call(null,param);
var inst_50280 = cljs.core.async.timeout.call(null,time_out);
var state_50290__$1 = (function (){var statearr_50295 = state_50290;
(statearr_50295[(7)] = inst_50279);

return statearr_50295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50290__$1,(7),inst_50280);
} else {
if((state_val_50291 === (5))){
var state_50290__$1 = state_50290;
var statearr_50296_50320 = state_50290__$1;
(statearr_50296_50320[(2)] = null);

(statearr_50296_50320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50291 === (6))){
var inst_50286 = (state_50290[(2)]);
var state_50290__$1 = state_50290;
var statearr_50297_50321 = state_50290__$1;
(statearr_50297_50321[(2)] = inst_50286);

(statearr_50297_50321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50291 === (7))){
var inst_50282 = (state_50290[(2)]);
var state_50290__$1 = (function (){var statearr_50298 = state_50290;
(statearr_50298[(8)] = inst_50282);

return statearr_50298;
})();
var statearr_50299_50322 = state_50290__$1;
(statearr_50299_50322[(2)] = null);

(statearr_50299_50322[(1)] = (2));


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
});})(c__11791__auto__))
;
return ((function (switch__11770__auto__,c__11791__auto__){
return (function() {
var csasync$proc$state_machine__11771__auto__ = null;
var csasync$proc$state_machine__11771__auto____0 = (function (){
var statearr_50303 = [null,null,null,null,null,null,null,null,null];
(statearr_50303[(0)] = csasync$proc$state_machine__11771__auto__);

(statearr_50303[(1)] = (1));

return statearr_50303;
});
var csasync$proc$state_machine__11771__auto____1 = (function (state_50290){
while(true){
var ret_value__11772__auto__ = (function (){try{while(true){
var result__11773__auto__ = switch__11770__auto__.call(null,state_50290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11773__auto__;
}
break;
}
}catch (e50304){if((e50304 instanceof Object)){
var ex__11774__auto__ = e50304;
var statearr_50305_50323 = state_50290;
(statearr_50305_50323[(5)] = ex__11774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50324 = state_50290;
state_50290 = G__50324;
continue;
} else {
return ret_value__11772__auto__;
}
break;
}
});
csasync$proc$state_machine__11771__auto__ = function(state_50290){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11771__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11771__auto____1.call(this,state_50290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11771__auto____0;
csasync$proc$state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11771__auto____1;
return csasync$proc$state_machine__11771__auto__;
})()
;})(switch__11770__auto__,c__11791__auto__))
})();
var state__11793__auto__ = (function (){var statearr_50306 = f__11792__auto__.call(null);
(statearr_50306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11791__auto__);

return statearr_50306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11793__auto__);
});})(c__11791__auto__))
);

return c__11791__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11791__auto___50433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11791__auto___50433){
return (function (){
var f__11792__auto__ = (function (){var switch__11770__auto__ = ((function (c__11791__auto___50433){
return (function (state_50406){
var state_val_50407 = (state_50406[(1)]);
if((state_val_50407 === (7))){
var inst_50388 = cljs.core.async.timeout.call(null,time_out);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50406__$1,(10),inst_50388);
} else {
if((state_val_50407 === (1))){
var state_50406__$1 = state_50406;
var statearr_50408_50434 = state_50406__$1;
(statearr_50408_50434[(2)] = null);

(statearr_50408_50434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (4))){
var inst_50383 = proc_fn.call(null);
var state_50406__$1 = state_50406;
var statearr_50409_50435 = state_50406__$1;
(statearr_50409_50435[(2)] = inst_50383);

(statearr_50409_50435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (13))){
var inst_50403 = (state_50406[(2)]);
var inst_50404 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_50406__$1 = (function (){var statearr_50410 = state_50406;
(statearr_50410[(7)] = inst_50403);

return statearr_50410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50406__$1,inst_50404);
} else {
if((state_val_50407 === (6))){
var inst_50386 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50386)){
var statearr_50411_50436 = state_50406__$1;
(statearr_50411_50436[(1)] = (7));

} else {
var statearr_50412_50437 = state_50406__$1;
(statearr_50412_50437[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (3))){
var inst_50396 = (state_50406[(2)]);
var inst_50397 = (final_fun == null);
var inst_50398 = cljs.core.not.call(null,inst_50397);
var state_50406__$1 = (function (){var statearr_50413 = state_50406;
(statearr_50413[(8)] = inst_50396);

return statearr_50413;
})();
if(inst_50398){
var statearr_50414_50438 = state_50406__$1;
(statearr_50414_50438[(1)] = (11));

} else {
var statearr_50415_50439 = state_50406__$1;
(statearr_50415_50439[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (12))){
var state_50406__$1 = state_50406;
var statearr_50416_50440 = state_50406__$1;
(statearr_50416_50440[(2)] = null);

(statearr_50416_50440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (2))){
var inst_50381 = (state_50406[(9)]);
var inst_50380 = cljs.core.deref.call(null,status);
var inst_50381__$1 = cljs.core._EQ_.call(null,inst_50380,"RUN");
var state_50406__$1 = (function (){var statearr_50417 = state_50406;
(statearr_50417[(9)] = inst_50381__$1);

return statearr_50417;
})();
if(inst_50381__$1){
var statearr_50418_50441 = state_50406__$1;
(statearr_50418_50441[(1)] = (4));

} else {
var statearr_50419_50442 = state_50406__$1;
(statearr_50419_50442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (11))){
var inst_50400 = final_fun.call(null);
var state_50406__$1 = state_50406;
var statearr_50420_50443 = state_50406__$1;
(statearr_50420_50443[(2)] = inst_50400);

(statearr_50420_50443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (9))){
var inst_50394 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50421_50444 = state_50406__$1;
(statearr_50421_50444[(2)] = inst_50394);

(statearr_50421_50444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (5))){
var inst_50381 = (state_50406[(9)]);
var state_50406__$1 = state_50406;
var statearr_50422_50445 = state_50406__$1;
(statearr_50422_50445[(2)] = inst_50381);

(statearr_50422_50445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (10))){
var inst_50390 = (state_50406[(2)]);
var state_50406__$1 = (function (){var statearr_50423 = state_50406;
(statearr_50423[(10)] = inst_50390);

return statearr_50423;
})();
var statearr_50424_50446 = state_50406__$1;
(statearr_50424_50446[(2)] = null);

(statearr_50424_50446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (8))){
var state_50406__$1 = state_50406;
var statearr_50425_50447 = state_50406__$1;
(statearr_50425_50447[(2)] = null);

(statearr_50425_50447[(1)] = (9));


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
});})(c__11791__auto___50433))
;
return ((function (switch__11770__auto__,c__11791__auto___50433){
return (function() {
var csasync$proc$start_process_$_state_machine__11771__auto__ = null;
var csasync$proc$start_process_$_state_machine__11771__auto____0 = (function (){
var statearr_50429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50429[(0)] = csasync$proc$start_process_$_state_machine__11771__auto__);

(statearr_50429[(1)] = (1));

return statearr_50429;
});
var csasync$proc$start_process_$_state_machine__11771__auto____1 = (function (state_50406){
while(true){
var ret_value__11772__auto__ = (function (){try{while(true){
var result__11773__auto__ = switch__11770__auto__.call(null,state_50406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11773__auto__;
}
break;
}
}catch (e50430){if((e50430 instanceof Object)){
var ex__11774__auto__ = e50430;
var statearr_50431_50448 = state_50406;
(statearr_50431_50448[(5)] = ex__11774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50449 = state_50406;
state_50406 = G__50449;
continue;
} else {
return ret_value__11772__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11771__auto__ = function(state_50406){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11771__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11771__auto____1.call(this,state_50406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11771__auto____0;
csasync$proc$start_process_$_state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11771__auto____1;
return csasync$proc$start_process_$_state_machine__11771__auto__;
})()
;})(switch__11770__auto__,c__11791__auto___50433))
})();
var state__11793__auto__ = (function (){var statearr_50432 = f__11792__auto__.call(null);
(statearr_50432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11791__auto___50433);

return statearr_50432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11793__auto__);
});})(c__11791__auto___50433))
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
var c__11791__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11791__auto__){
return (function (){
var f__11792__auto__ = (function (){var switch__11770__auto__ = ((function (c__11791__auto__){
return (function (state_50470){
var state_val_50471 = (state_50470[(1)]);
if((state_val_50471 === (1))){
var inst_50465 = cljs.core.async.timeout.call(null,time);
var state_50470__$1 = state_50470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50470__$1,(2),inst_50465);
} else {
if((state_val_50471 === (2))){
var inst_50467 = (state_50470[(2)]);
var inst_50468 = func.call(null);
var state_50470__$1 = (function (){var statearr_50472 = state_50470;
(statearr_50472[(7)] = inst_50467);

return statearr_50472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50470__$1,inst_50468);
} else {
return null;
}
}
});})(c__11791__auto__))
;
return ((function (switch__11770__auto__,c__11791__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11771__auto__ = null;
var csasync$proc$delayer_$_state_machine__11771__auto____0 = (function (){
var statearr_50476 = [null,null,null,null,null,null,null,null];
(statearr_50476[(0)] = csasync$proc$delayer_$_state_machine__11771__auto__);

(statearr_50476[(1)] = (1));

return statearr_50476;
});
var csasync$proc$delayer_$_state_machine__11771__auto____1 = (function (state_50470){
while(true){
var ret_value__11772__auto__ = (function (){try{while(true){
var result__11773__auto__ = switch__11770__auto__.call(null,state_50470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11773__auto__;
}
break;
}
}catch (e50477){if((e50477 instanceof Object)){
var ex__11774__auto__ = e50477;
var statearr_50478_50480 = state_50470;
(statearr_50478_50480[(5)] = ex__11774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50481 = state_50470;
state_50470 = G__50481;
continue;
} else {
return ret_value__11772__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11771__auto__ = function(state_50470){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11771__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11771__auto____1.call(this,state_50470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11771__auto____0;
csasync$proc$delayer_$_state_machine__11771__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11771__auto____1;
return csasync$proc$delayer_$_state_machine__11771__auto__;
})()
;})(switch__11770__auto__,c__11791__auto__))
})();
var state__11793__auto__ = (function (){var statearr_50479 = f__11792__auto__.call(null);
(statearr_50479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11791__auto__);

return statearr_50479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11793__auto__);
});})(c__11791__auto__))
);

return c__11791__auto__;
});

//# sourceMappingURL=proc.js.map