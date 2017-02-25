// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args24189 = [];
var len__23068__auto___24252 = arguments.length;
var i__23069__auto___24253 = (0);
while(true){
if((i__23069__auto___24253 < len__23068__auto___24252)){
args24189.push((arguments[i__23069__auto___24253]));

var G__24254 = (i__23069__auto___24253 + (1));
i__23069__auto___24253 = G__24254;
continue;
} else {
}
break;
}

var G__24191 = args24189.length;
switch (G__24191) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24144__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24144__auto__){
return (function (){
var f__24145__auto__ = (function (){var switch__24123__auto__ = ((function (c__24144__auto__){
return (function (state_24205){
var state_val_24206 = (state_24205[(1)]);
if((state_val_24206 === (1))){
var state_24205__$1 = state_24205;
var statearr_24207_24256 = state_24205__$1;
(statearr_24207_24256[(2)] = null);

(statearr_24207_24256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24206 === (2))){
var state_24205__$1 = state_24205;
var statearr_24208_24257 = state_24205__$1;
(statearr_24208_24257[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24206 === (3))){
var inst_24203 = (state_24205[(2)]);
var state_24205__$1 = state_24205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24205__$1,inst_24203);
} else {
if((state_val_24206 === (4))){
var inst_24194 = func.call(null);
var inst_24195 = cljs.core.async.timeout.call(null,time_out);
var state_24205__$1 = (function (){var statearr_24210 = state_24205;
(statearr_24210[(7)] = inst_24194);

return statearr_24210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24205__$1,(7),inst_24195);
} else {
if((state_val_24206 === (5))){
var state_24205__$1 = state_24205;
var statearr_24211_24258 = state_24205__$1;
(statearr_24211_24258[(2)] = null);

(statearr_24211_24258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24206 === (6))){
var inst_24201 = (state_24205[(2)]);
var state_24205__$1 = state_24205;
var statearr_24212_24259 = state_24205__$1;
(statearr_24212_24259[(2)] = inst_24201);

(statearr_24212_24259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24206 === (7))){
var inst_24197 = (state_24205[(2)]);
var state_24205__$1 = (function (){var statearr_24213 = state_24205;
(statearr_24213[(8)] = inst_24197);

return statearr_24213;
})();
var statearr_24214_24260 = state_24205__$1;
(statearr_24214_24260[(2)] = null);

(statearr_24214_24260[(1)] = (2));


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
});})(c__24144__auto__))
;
return ((function (switch__24123__auto__,c__24144__auto__){
return (function() {
var csasync$proc$state_machine__24124__auto__ = null;
var csasync$proc$state_machine__24124__auto____0 = (function (){
var statearr_24218 = [null,null,null,null,null,null,null,null,null];
(statearr_24218[(0)] = csasync$proc$state_machine__24124__auto__);

(statearr_24218[(1)] = (1));

return statearr_24218;
});
var csasync$proc$state_machine__24124__auto____1 = (function (state_24205){
while(true){
var ret_value__24125__auto__ = (function (){try{while(true){
var result__24126__auto__ = switch__24123__auto__.call(null,state_24205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24126__auto__;
}
break;
}
}catch (e24219){if((e24219 instanceof Object)){
var ex__24127__auto__ = e24219;
var statearr_24220_24261 = state_24205;
(statearr_24220_24261[(5)] = ex__24127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24262 = state_24205;
state_24205 = G__24262;
continue;
} else {
return ret_value__24125__auto__;
}
break;
}
});
csasync$proc$state_machine__24124__auto__ = function(state_24205){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24124__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24124__auto____1.call(this,state_24205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24124__auto____0;
csasync$proc$state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24124__auto____1;
return csasync$proc$state_machine__24124__auto__;
})()
;})(switch__24123__auto__,c__24144__auto__))
})();
var state__24146__auto__ = (function (){var statearr_24221 = f__24145__auto__.call(null);
(statearr_24221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24144__auto__);

return statearr_24221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24146__auto__);
});})(c__24144__auto__))
);

return c__24144__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24144__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24144__auto__){
return (function (){
var f__24145__auto__ = (function (){var switch__24123__auto__ = ((function (c__24144__auto__){
return (function (state_24235){
var state_val_24236 = (state_24235[(1)]);
if((state_val_24236 === (1))){
var state_24235__$1 = state_24235;
var statearr_24237_24263 = state_24235__$1;
(statearr_24237_24263[(2)] = null);

(statearr_24237_24263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (2))){
var state_24235__$1 = state_24235;
var statearr_24238_24264 = state_24235__$1;
(statearr_24238_24264[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (3))){
var inst_24233 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24235__$1,inst_24233);
} else {
if((state_val_24236 === (4))){
var inst_24224 = func.call(null,param);
var inst_24225 = cljs.core.async.timeout.call(null,time_out);
var state_24235__$1 = (function (){var statearr_24240 = state_24235;
(statearr_24240[(7)] = inst_24224);

return statearr_24240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24235__$1,(7),inst_24225);
} else {
if((state_val_24236 === (5))){
var state_24235__$1 = state_24235;
var statearr_24241_24265 = state_24235__$1;
(statearr_24241_24265[(2)] = null);

(statearr_24241_24265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (6))){
var inst_24231 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24242_24266 = state_24235__$1;
(statearr_24242_24266[(2)] = inst_24231);

(statearr_24242_24266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (7))){
var inst_24227 = (state_24235[(2)]);
var state_24235__$1 = (function (){var statearr_24243 = state_24235;
(statearr_24243[(8)] = inst_24227);

return statearr_24243;
})();
var statearr_24244_24267 = state_24235__$1;
(statearr_24244_24267[(2)] = null);

(statearr_24244_24267[(1)] = (2));


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
});})(c__24144__auto__))
;
return ((function (switch__24123__auto__,c__24144__auto__){
return (function() {
var csasync$proc$state_machine__24124__auto__ = null;
var csasync$proc$state_machine__24124__auto____0 = (function (){
var statearr_24248 = [null,null,null,null,null,null,null,null,null];
(statearr_24248[(0)] = csasync$proc$state_machine__24124__auto__);

(statearr_24248[(1)] = (1));

return statearr_24248;
});
var csasync$proc$state_machine__24124__auto____1 = (function (state_24235){
while(true){
var ret_value__24125__auto__ = (function (){try{while(true){
var result__24126__auto__ = switch__24123__auto__.call(null,state_24235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24126__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object)){
var ex__24127__auto__ = e24249;
var statearr_24250_24268 = state_24235;
(statearr_24250_24268[(5)] = ex__24127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24269 = state_24235;
state_24235 = G__24269;
continue;
} else {
return ret_value__24125__auto__;
}
break;
}
});
csasync$proc$state_machine__24124__auto__ = function(state_24235){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24124__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24124__auto____1.call(this,state_24235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24124__auto____0;
csasync$proc$state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24124__auto____1;
return csasync$proc$state_machine__24124__auto__;
})()
;})(switch__24123__auto__,c__24144__auto__))
})();
var state__24146__auto__ = (function (){var statearr_24251 = f__24145__auto__.call(null);
(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24144__auto__);

return statearr_24251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24146__auto__);
});})(c__24144__auto__))
);

return c__24144__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24144__auto___24354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24144__auto___24354){
return (function (){
var f__24145__auto__ = (function (){var switch__24123__auto__ = ((function (c__24144__auto___24354){
return (function (state_24332){
var state_val_24333 = (state_24332[(1)]);
if((state_val_24333 === (7))){
var inst_24321 = cljs.core.async.timeout.call(null,time_out);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24332__$1,(10),inst_24321);
} else {
if((state_val_24333 === (1))){
var state_24332__$1 = state_24332;
var statearr_24334_24355 = state_24332__$1;
(statearr_24334_24355[(2)] = null);

(statearr_24334_24355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (4))){
var inst_24316 = proc_fn.call(null);
var state_24332__$1 = state_24332;
var statearr_24335_24356 = state_24332__$1;
(statearr_24335_24356[(2)] = inst_24316);

(statearr_24335_24356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (6))){
var inst_24319 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
if(cljs.core.truth_(inst_24319)){
var statearr_24336_24357 = state_24332__$1;
(statearr_24336_24357[(1)] = (7));

} else {
var statearr_24337_24358 = state_24332__$1;
(statearr_24337_24358[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (3))){
var inst_24329 = (state_24332[(2)]);
var inst_24330 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24332__$1 = (function (){var statearr_24338 = state_24332;
(statearr_24338[(7)] = inst_24329);

return statearr_24338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24332__$1,inst_24330);
} else {
if((state_val_24333 === (2))){
var inst_24314 = (state_24332[(8)]);
var inst_24313 = cljs.core.deref.call(null,status);
var inst_24314__$1 = cljs.core._EQ_.call(null,inst_24313,"RUN");
var state_24332__$1 = (function (){var statearr_24339 = state_24332;
(statearr_24339[(8)] = inst_24314__$1);

return statearr_24339;
})();
if(inst_24314__$1){
var statearr_24340_24359 = state_24332__$1;
(statearr_24340_24359[(1)] = (4));

} else {
var statearr_24341_24360 = state_24332__$1;
(statearr_24341_24360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (9))){
var inst_24327 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24342_24361 = state_24332__$1;
(statearr_24342_24361[(2)] = inst_24327);

(statearr_24342_24361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (5))){
var inst_24314 = (state_24332[(8)]);
var state_24332__$1 = state_24332;
var statearr_24343_24362 = state_24332__$1;
(statearr_24343_24362[(2)] = inst_24314);

(statearr_24343_24362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (10))){
var inst_24323 = (state_24332[(2)]);
var state_24332__$1 = (function (){var statearr_24344 = state_24332;
(statearr_24344[(9)] = inst_24323);

return statearr_24344;
})();
var statearr_24345_24363 = state_24332__$1;
(statearr_24345_24363[(2)] = null);

(statearr_24345_24363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (8))){
var state_24332__$1 = state_24332;
var statearr_24346_24364 = state_24332__$1;
(statearr_24346_24364[(2)] = null);

(statearr_24346_24364[(1)] = (9));


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
});})(c__24144__auto___24354))
;
return ((function (switch__24123__auto__,c__24144__auto___24354){
return (function() {
var csasync$proc$start_process_$_state_machine__24124__auto__ = null;
var csasync$proc$start_process_$_state_machine__24124__auto____0 = (function (){
var statearr_24350 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24350[(0)] = csasync$proc$start_process_$_state_machine__24124__auto__);

(statearr_24350[(1)] = (1));

return statearr_24350;
});
var csasync$proc$start_process_$_state_machine__24124__auto____1 = (function (state_24332){
while(true){
var ret_value__24125__auto__ = (function (){try{while(true){
var result__24126__auto__ = switch__24123__auto__.call(null,state_24332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24126__auto__;
}
break;
}
}catch (e24351){if((e24351 instanceof Object)){
var ex__24127__auto__ = e24351;
var statearr_24352_24365 = state_24332;
(statearr_24352_24365[(5)] = ex__24127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24366 = state_24332;
state_24332 = G__24366;
continue;
} else {
return ret_value__24125__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24124__auto__ = function(state_24332){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24124__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24124__auto____1.call(this,state_24332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24124__auto____0;
csasync$proc$start_process_$_state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24124__auto____1;
return csasync$proc$start_process_$_state_machine__24124__auto__;
})()
;})(switch__24123__auto__,c__24144__auto___24354))
})();
var state__24146__auto__ = (function (){var statearr_24353 = f__24145__auto__.call(null);
(statearr_24353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24144__auto___24354);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24146__auto__);
});})(c__24144__auto___24354))
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
var c__24144__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24144__auto__){
return (function (){
var f__24145__auto__ = (function (){var switch__24123__auto__ = ((function (c__24144__auto__){
return (function (state_24387){
var state_val_24388 = (state_24387[(1)]);
if((state_val_24388 === (1))){
var inst_24382 = cljs.core.async.timeout.call(null,time);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(2),inst_24382);
} else {
if((state_val_24388 === (2))){
var inst_24384 = (state_24387[(2)]);
var inst_24385 = func.call(null);
var state_24387__$1 = (function (){var statearr_24389 = state_24387;
(statearr_24389[(7)] = inst_24384);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24387__$1,inst_24385);
} else {
return null;
}
}
});})(c__24144__auto__))
;
return ((function (switch__24123__auto__,c__24144__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24124__auto__ = null;
var csasync$proc$delayer_$_state_machine__24124__auto____0 = (function (){
var statearr_24393 = [null,null,null,null,null,null,null,null];
(statearr_24393[(0)] = csasync$proc$delayer_$_state_machine__24124__auto__);

(statearr_24393[(1)] = (1));

return statearr_24393;
});
var csasync$proc$delayer_$_state_machine__24124__auto____1 = (function (state_24387){
while(true){
var ret_value__24125__auto__ = (function (){try{while(true){
var result__24126__auto__ = switch__24123__auto__.call(null,state_24387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24126__auto__;
}
break;
}
}catch (e24394){if((e24394 instanceof Object)){
var ex__24127__auto__ = e24394;
var statearr_24395_24397 = state_24387;
(statearr_24395_24397[(5)] = ex__24127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24398 = state_24387;
state_24387 = G__24398;
continue;
} else {
return ret_value__24125__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24124__auto__ = function(state_24387){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24124__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24124__auto____1.call(this,state_24387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24124__auto____0;
csasync$proc$delayer_$_state_machine__24124__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24124__auto____1;
return csasync$proc$delayer_$_state_machine__24124__auto__;
})()
;})(switch__24123__auto__,c__24144__auto__))
})();
var state__24146__auto__ = (function (){var statearr_24396 = f__24145__auto__.call(null);
(statearr_24396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24144__auto__);

return statearr_24396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24146__auto__);
});})(c__24144__auto__))
);

return c__24144__auto__;
});

//# sourceMappingURL=proc.js.map