// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25221 = [];
var len__21101__auto___25284 = arguments.length;
var i__21102__auto___25285 = (0);
while(true){
if((i__21102__auto___25285 < len__21101__auto___25284)){
args25221.push((arguments[i__21102__auto___25285]));

var G__25286 = (i__21102__auto___25285 + (1));
i__21102__auto___25285 = G__25286;
continue;
} else {
}
break;
}

var G__25223 = args25221.length;
switch (G__25223) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25221.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22056__auto__){
return (function (){
var f__22057__auto__ = (function (){var switch__22035__auto__ = ((function (c__22056__auto__){
return (function (state_25237){
var state_val_25238 = (state_25237[(1)]);
if((state_val_25238 === (1))){
var state_25237__$1 = state_25237;
var statearr_25239_25288 = state_25237__$1;
(statearr_25239_25288[(2)] = null);

(statearr_25239_25288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (2))){
var state_25237__$1 = state_25237;
var statearr_25240_25289 = state_25237__$1;
(statearr_25240_25289[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (3))){
var inst_25235 = (state_25237[(2)]);
var state_25237__$1 = state_25237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25237__$1,inst_25235);
} else {
if((state_val_25238 === (4))){
var inst_25226 = func.call(null);
var inst_25227 = cljs.core.async.timeout.call(null,time_out);
var state_25237__$1 = (function (){var statearr_25242 = state_25237;
(statearr_25242[(7)] = inst_25226);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25237__$1,(7),inst_25227);
} else {
if((state_val_25238 === (5))){
var state_25237__$1 = state_25237;
var statearr_25243_25290 = state_25237__$1;
(statearr_25243_25290[(2)] = null);

(statearr_25243_25290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (6))){
var inst_25233 = (state_25237[(2)]);
var state_25237__$1 = state_25237;
var statearr_25244_25291 = state_25237__$1;
(statearr_25244_25291[(2)] = inst_25233);

(statearr_25244_25291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (7))){
var inst_25229 = (state_25237[(2)]);
var state_25237__$1 = (function (){var statearr_25245 = state_25237;
(statearr_25245[(8)] = inst_25229);

return statearr_25245;
})();
var statearr_25246_25292 = state_25237__$1;
(statearr_25246_25292[(2)] = null);

(statearr_25246_25292[(1)] = (2));


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
});})(c__22056__auto__))
;
return ((function (switch__22035__auto__,c__22056__auto__){
return (function() {
var csasync$proc$state_machine__22036__auto__ = null;
var csasync$proc$state_machine__22036__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null,null,null];
(statearr_25250[(0)] = csasync$proc$state_machine__22036__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var csasync$proc$state_machine__22036__auto____1 = (function (state_25237){
while(true){
var ret_value__22037__auto__ = (function (){try{while(true){
var result__22038__auto__ = switch__22035__auto__.call(null,state_25237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22038__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__22039__auto__ = e25251;
var statearr_25252_25293 = state_25237;
(statearr_25252_25293[(5)] = ex__22039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25294 = state_25237;
state_25237 = G__25294;
continue;
} else {
return ret_value__22037__auto__;
}
break;
}
});
csasync$proc$state_machine__22036__auto__ = function(state_25237){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22036__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22036__auto____1.call(this,state_25237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22036__auto____0;
csasync$proc$state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22036__auto____1;
return csasync$proc$state_machine__22036__auto__;
})()
;})(switch__22035__auto__,c__22056__auto__))
})();
var state__22058__auto__ = (function (){var statearr_25253 = f__22057__auto__.call(null);
(statearr_25253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22056__auto__);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22058__auto__);
});})(c__22056__auto__))
);

return c__22056__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22056__auto__){
return (function (){
var f__22057__auto__ = (function (){var switch__22035__auto__ = ((function (c__22056__auto__){
return (function (state_25267){
var state_val_25268 = (state_25267[(1)]);
if((state_val_25268 === (1))){
var state_25267__$1 = state_25267;
var statearr_25269_25295 = state_25267__$1;
(statearr_25269_25295[(2)] = null);

(statearr_25269_25295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (2))){
var state_25267__$1 = state_25267;
var statearr_25270_25296 = state_25267__$1;
(statearr_25270_25296[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (3))){
var inst_25265 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25267__$1,inst_25265);
} else {
if((state_val_25268 === (4))){
var inst_25256 = func.call(null,param);
var inst_25257 = cljs.core.async.timeout.call(null,time_out);
var state_25267__$1 = (function (){var statearr_25272 = state_25267;
(statearr_25272[(7)] = inst_25256);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25267__$1,(7),inst_25257);
} else {
if((state_val_25268 === (5))){
var state_25267__$1 = state_25267;
var statearr_25273_25297 = state_25267__$1;
(statearr_25273_25297[(2)] = null);

(statearr_25273_25297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (6))){
var inst_25263 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
var statearr_25274_25298 = state_25267__$1;
(statearr_25274_25298[(2)] = inst_25263);

(statearr_25274_25298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (7))){
var inst_25259 = (state_25267[(2)]);
var state_25267__$1 = (function (){var statearr_25275 = state_25267;
(statearr_25275[(8)] = inst_25259);

return statearr_25275;
})();
var statearr_25276_25299 = state_25267__$1;
(statearr_25276_25299[(2)] = null);

(statearr_25276_25299[(1)] = (2));


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
});})(c__22056__auto__))
;
return ((function (switch__22035__auto__,c__22056__auto__){
return (function() {
var csasync$proc$state_machine__22036__auto__ = null;
var csasync$proc$state_machine__22036__auto____0 = (function (){
var statearr_25280 = [null,null,null,null,null,null,null,null,null];
(statearr_25280[(0)] = csasync$proc$state_machine__22036__auto__);

(statearr_25280[(1)] = (1));

return statearr_25280;
});
var csasync$proc$state_machine__22036__auto____1 = (function (state_25267){
while(true){
var ret_value__22037__auto__ = (function (){try{while(true){
var result__22038__auto__ = switch__22035__auto__.call(null,state_25267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22038__auto__;
}
break;
}
}catch (e25281){if((e25281 instanceof Object)){
var ex__22039__auto__ = e25281;
var statearr_25282_25300 = state_25267;
(statearr_25282_25300[(5)] = ex__22039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25301 = state_25267;
state_25267 = G__25301;
continue;
} else {
return ret_value__22037__auto__;
}
break;
}
});
csasync$proc$state_machine__22036__auto__ = function(state_25267){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22036__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22036__auto____1.call(this,state_25267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22036__auto____0;
csasync$proc$state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22036__auto____1;
return csasync$proc$state_machine__22036__auto__;
})()
;})(switch__22035__auto__,c__22056__auto__))
})();
var state__22058__auto__ = (function (){var statearr_25283 = f__22057__auto__.call(null);
(statearr_25283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22056__auto__);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22058__auto__);
});})(c__22056__auto__))
);

return c__22056__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22056__auto___25386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22056__auto___25386){
return (function (){
var f__22057__auto__ = (function (){var switch__22035__auto__ = ((function (c__22056__auto___25386){
return (function (state_25364){
var state_val_25365 = (state_25364[(1)]);
if((state_val_25365 === (7))){
var inst_25353 = cljs.core.async.timeout.call(null,time_out);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25364__$1,(10),inst_25353);
} else {
if((state_val_25365 === (1))){
var state_25364__$1 = state_25364;
var statearr_25366_25387 = state_25364__$1;
(statearr_25366_25387[(2)] = null);

(statearr_25366_25387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (4))){
var inst_25348 = proc_fn.call(null);
var state_25364__$1 = state_25364;
var statearr_25367_25388 = state_25364__$1;
(statearr_25367_25388[(2)] = inst_25348);

(statearr_25367_25388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (6))){
var inst_25351 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
if(cljs.core.truth_(inst_25351)){
var statearr_25368_25389 = state_25364__$1;
(statearr_25368_25389[(1)] = (7));

} else {
var statearr_25369_25390 = state_25364__$1;
(statearr_25369_25390[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (3))){
var inst_25361 = (state_25364[(2)]);
var inst_25362 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25364__$1 = (function (){var statearr_25370 = state_25364;
(statearr_25370[(7)] = inst_25361);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25364__$1,inst_25362);
} else {
if((state_val_25365 === (2))){
var inst_25346 = (state_25364[(8)]);
var inst_25345 = cljs.core.deref.call(null,status);
var inst_25346__$1 = cljs.core._EQ_.call(null,inst_25345,"RUN");
var state_25364__$1 = (function (){var statearr_25371 = state_25364;
(statearr_25371[(8)] = inst_25346__$1);

return statearr_25371;
})();
if(inst_25346__$1){
var statearr_25372_25391 = state_25364__$1;
(statearr_25372_25391[(1)] = (4));

} else {
var statearr_25373_25392 = state_25364__$1;
(statearr_25373_25392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (9))){
var inst_25359 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25374_25393 = state_25364__$1;
(statearr_25374_25393[(2)] = inst_25359);

(statearr_25374_25393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (5))){
var inst_25346 = (state_25364[(8)]);
var state_25364__$1 = state_25364;
var statearr_25375_25394 = state_25364__$1;
(statearr_25375_25394[(2)] = inst_25346);

(statearr_25375_25394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (10))){
var inst_25355 = (state_25364[(2)]);
var state_25364__$1 = (function (){var statearr_25376 = state_25364;
(statearr_25376[(9)] = inst_25355);

return statearr_25376;
})();
var statearr_25377_25395 = state_25364__$1;
(statearr_25377_25395[(2)] = null);

(statearr_25377_25395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (8))){
var state_25364__$1 = state_25364;
var statearr_25378_25396 = state_25364__$1;
(statearr_25378_25396[(2)] = null);

(statearr_25378_25396[(1)] = (9));


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
});})(c__22056__auto___25386))
;
return ((function (switch__22035__auto__,c__22056__auto___25386){
return (function() {
var csasync$proc$start_process_$_state_machine__22036__auto__ = null;
var csasync$proc$start_process_$_state_machine__22036__auto____0 = (function (){
var statearr_25382 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25382[(0)] = csasync$proc$start_process_$_state_machine__22036__auto__);

(statearr_25382[(1)] = (1));

return statearr_25382;
});
var csasync$proc$start_process_$_state_machine__22036__auto____1 = (function (state_25364){
while(true){
var ret_value__22037__auto__ = (function (){try{while(true){
var result__22038__auto__ = switch__22035__auto__.call(null,state_25364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22038__auto__;
}
break;
}
}catch (e25383){if((e25383 instanceof Object)){
var ex__22039__auto__ = e25383;
var statearr_25384_25397 = state_25364;
(statearr_25384_25397[(5)] = ex__22039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25398 = state_25364;
state_25364 = G__25398;
continue;
} else {
return ret_value__22037__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22036__auto__ = function(state_25364){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22036__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22036__auto____1.call(this,state_25364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22036__auto____0;
csasync$proc$start_process_$_state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22036__auto____1;
return csasync$proc$start_process_$_state_machine__22036__auto__;
})()
;})(switch__22035__auto__,c__22056__auto___25386))
})();
var state__22058__auto__ = (function (){var statearr_25385 = f__22057__auto__.call(null);
(statearr_25385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22056__auto___25386);

return statearr_25385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22058__auto__);
});})(c__22056__auto___25386))
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
var c__22056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22056__auto__){
return (function (){
var f__22057__auto__ = (function (){var switch__22035__auto__ = ((function (c__22056__auto__){
return (function (state_25419){
var state_val_25420 = (state_25419[(1)]);
if((state_val_25420 === (1))){
var inst_25414 = cljs.core.async.timeout.call(null,time);
var state_25419__$1 = state_25419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25419__$1,(2),inst_25414);
} else {
if((state_val_25420 === (2))){
var inst_25416 = (state_25419[(2)]);
var inst_25417 = func.call(null);
var state_25419__$1 = (function (){var statearr_25421 = state_25419;
(statearr_25421[(7)] = inst_25416);

return statearr_25421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25419__$1,inst_25417);
} else {
return null;
}
}
});})(c__22056__auto__))
;
return ((function (switch__22035__auto__,c__22056__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22036__auto__ = null;
var csasync$proc$delayer_$_state_machine__22036__auto____0 = (function (){
var statearr_25425 = [null,null,null,null,null,null,null,null];
(statearr_25425[(0)] = csasync$proc$delayer_$_state_machine__22036__auto__);

(statearr_25425[(1)] = (1));

return statearr_25425;
});
var csasync$proc$delayer_$_state_machine__22036__auto____1 = (function (state_25419){
while(true){
var ret_value__22037__auto__ = (function (){try{while(true){
var result__22038__auto__ = switch__22035__auto__.call(null,state_25419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22038__auto__;
}
break;
}
}catch (e25426){if((e25426 instanceof Object)){
var ex__22039__auto__ = e25426;
var statearr_25427_25429 = state_25419;
(statearr_25427_25429[(5)] = ex__22039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25430 = state_25419;
state_25419 = G__25430;
continue;
} else {
return ret_value__22037__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22036__auto__ = function(state_25419){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22036__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22036__auto____1.call(this,state_25419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22036__auto____0;
csasync$proc$delayer_$_state_machine__22036__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22036__auto____1;
return csasync$proc$delayer_$_state_machine__22036__auto__;
})()
;})(switch__22035__auto__,c__22056__auto__))
})();
var state__22058__auto__ = (function (){var statearr_25428 = f__22057__auto__.call(null);
(statearr_25428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22056__auto__);

return statearr_25428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22058__auto__);
});})(c__22056__auto__))
);

return c__22056__auto__;
});

//# sourceMappingURL=proc.js.map