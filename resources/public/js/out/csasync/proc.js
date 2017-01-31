// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22218 = [];
var len__21111__auto___22281 = arguments.length;
var i__21112__auto___22282 = (0);
while(true){
if((i__21112__auto___22282 < len__21111__auto___22281)){
args22218.push((arguments[i__21112__auto___22282]));

var G__22283 = (i__21112__auto___22282 + (1));
i__21112__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var G__22220 = args22218.length;
switch (G__22220) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22218.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22173__auto__){
return (function (){
var f__22174__auto__ = (function (){var switch__22152__auto__ = ((function (c__22173__auto__){
return (function (state_22234){
var state_val_22235 = (state_22234[(1)]);
if((state_val_22235 === (1))){
var state_22234__$1 = state_22234;
var statearr_22236_22285 = state_22234__$1;
(statearr_22236_22285[(2)] = null);

(statearr_22236_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (2))){
var state_22234__$1 = state_22234;
var statearr_22237_22286 = state_22234__$1;
(statearr_22237_22286[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (3))){
var inst_22232 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22234__$1,inst_22232);
} else {
if((state_val_22235 === (4))){
var inst_22223 = func.call(null);
var inst_22224 = cljs.core.async.timeout.call(null,time_out);
var state_22234__$1 = (function (){var statearr_22239 = state_22234;
(statearr_22239[(7)] = inst_22223);

return statearr_22239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22234__$1,(7),inst_22224);
} else {
if((state_val_22235 === (5))){
var state_22234__$1 = state_22234;
var statearr_22240_22287 = state_22234__$1;
(statearr_22240_22287[(2)] = null);

(statearr_22240_22287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (6))){
var inst_22230 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22241_22288 = state_22234__$1;
(statearr_22241_22288[(2)] = inst_22230);

(statearr_22241_22288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (7))){
var inst_22226 = (state_22234[(2)]);
var state_22234__$1 = (function (){var statearr_22242 = state_22234;
(statearr_22242[(8)] = inst_22226);

return statearr_22242;
})();
var statearr_22243_22289 = state_22234__$1;
(statearr_22243_22289[(2)] = null);

(statearr_22243_22289[(1)] = (2));


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
});})(c__22173__auto__))
;
return ((function (switch__22152__auto__,c__22173__auto__){
return (function() {
var csasync$proc$state_machine__22153__auto__ = null;
var csasync$proc$state_machine__22153__auto____0 = (function (){
var statearr_22247 = [null,null,null,null,null,null,null,null,null];
(statearr_22247[(0)] = csasync$proc$state_machine__22153__auto__);

(statearr_22247[(1)] = (1));

return statearr_22247;
});
var csasync$proc$state_machine__22153__auto____1 = (function (state_22234){
while(true){
var ret_value__22154__auto__ = (function (){try{while(true){
var result__22155__auto__ = switch__22152__auto__.call(null,state_22234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22155__auto__;
}
break;
}
}catch (e22248){if((e22248 instanceof Object)){
var ex__22156__auto__ = e22248;
var statearr_22249_22290 = state_22234;
(statearr_22249_22290[(5)] = ex__22156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22291 = state_22234;
state_22234 = G__22291;
continue;
} else {
return ret_value__22154__auto__;
}
break;
}
});
csasync$proc$state_machine__22153__auto__ = function(state_22234){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22153__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22153__auto____1.call(this,state_22234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22153__auto____0;
csasync$proc$state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22153__auto____1;
return csasync$proc$state_machine__22153__auto__;
})()
;})(switch__22152__auto__,c__22173__auto__))
})();
var state__22175__auto__ = (function (){var statearr_22250 = f__22174__auto__.call(null);
(statearr_22250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22173__auto__);

return statearr_22250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22175__auto__);
});})(c__22173__auto__))
);

return c__22173__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22173__auto__){
return (function (){
var f__22174__auto__ = (function (){var switch__22152__auto__ = ((function (c__22173__auto__){
return (function (state_22264){
var state_val_22265 = (state_22264[(1)]);
if((state_val_22265 === (1))){
var state_22264__$1 = state_22264;
var statearr_22266_22292 = state_22264__$1;
(statearr_22266_22292[(2)] = null);

(statearr_22266_22292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (2))){
var state_22264__$1 = state_22264;
var statearr_22267_22293 = state_22264__$1;
(statearr_22267_22293[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (3))){
var inst_22262 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22264__$1,inst_22262);
} else {
if((state_val_22265 === (4))){
var inst_22253 = func.call(null,param);
var inst_22254 = cljs.core.async.timeout.call(null,time_out);
var state_22264__$1 = (function (){var statearr_22269 = state_22264;
(statearr_22269[(7)] = inst_22253);

return statearr_22269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22264__$1,(7),inst_22254);
} else {
if((state_val_22265 === (5))){
var state_22264__$1 = state_22264;
var statearr_22270_22294 = state_22264__$1;
(statearr_22270_22294[(2)] = null);

(statearr_22270_22294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (6))){
var inst_22260 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
var statearr_22271_22295 = state_22264__$1;
(statearr_22271_22295[(2)] = inst_22260);

(statearr_22271_22295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22265 === (7))){
var inst_22256 = (state_22264[(2)]);
var state_22264__$1 = (function (){var statearr_22272 = state_22264;
(statearr_22272[(8)] = inst_22256);

return statearr_22272;
})();
var statearr_22273_22296 = state_22264__$1;
(statearr_22273_22296[(2)] = null);

(statearr_22273_22296[(1)] = (2));


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
});})(c__22173__auto__))
;
return ((function (switch__22152__auto__,c__22173__auto__){
return (function() {
var csasync$proc$state_machine__22153__auto__ = null;
var csasync$proc$state_machine__22153__auto____0 = (function (){
var statearr_22277 = [null,null,null,null,null,null,null,null,null];
(statearr_22277[(0)] = csasync$proc$state_machine__22153__auto__);

(statearr_22277[(1)] = (1));

return statearr_22277;
});
var csasync$proc$state_machine__22153__auto____1 = (function (state_22264){
while(true){
var ret_value__22154__auto__ = (function (){try{while(true){
var result__22155__auto__ = switch__22152__auto__.call(null,state_22264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22155__auto__;
}
break;
}
}catch (e22278){if((e22278 instanceof Object)){
var ex__22156__auto__ = e22278;
var statearr_22279_22297 = state_22264;
(statearr_22279_22297[(5)] = ex__22156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22298 = state_22264;
state_22264 = G__22298;
continue;
} else {
return ret_value__22154__auto__;
}
break;
}
});
csasync$proc$state_machine__22153__auto__ = function(state_22264){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22153__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22153__auto____1.call(this,state_22264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22153__auto____0;
csasync$proc$state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22153__auto____1;
return csasync$proc$state_machine__22153__auto__;
})()
;})(switch__22152__auto__,c__22173__auto__))
})();
var state__22175__auto__ = (function (){var statearr_22280 = f__22174__auto__.call(null);
(statearr_22280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22173__auto__);

return statearr_22280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22175__auto__);
});})(c__22173__auto__))
);

return c__22173__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22173__auto___22383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22173__auto___22383){
return (function (){
var f__22174__auto__ = (function (){var switch__22152__auto__ = ((function (c__22173__auto___22383){
return (function (state_22361){
var state_val_22362 = (state_22361[(1)]);
if((state_val_22362 === (7))){
var inst_22350 = cljs.core.async.timeout.call(null,time_out);
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22361__$1,(10),inst_22350);
} else {
if((state_val_22362 === (1))){
var state_22361__$1 = state_22361;
var statearr_22363_22384 = state_22361__$1;
(statearr_22363_22384[(2)] = null);

(statearr_22363_22384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (4))){
var inst_22345 = proc_fn.call(null);
var state_22361__$1 = state_22361;
var statearr_22364_22385 = state_22361__$1;
(statearr_22364_22385[(2)] = inst_22345);

(statearr_22364_22385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (6))){
var inst_22348 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
if(cljs.core.truth_(inst_22348)){
var statearr_22365_22386 = state_22361__$1;
(statearr_22365_22386[(1)] = (7));

} else {
var statearr_22366_22387 = state_22361__$1;
(statearr_22366_22387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (3))){
var inst_22358 = (state_22361[(2)]);
var inst_22359 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22361__$1 = (function (){var statearr_22367 = state_22361;
(statearr_22367[(7)] = inst_22358);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22361__$1,inst_22359);
} else {
if((state_val_22362 === (2))){
var inst_22343 = (state_22361[(8)]);
var inst_22342 = cljs.core.deref.call(null,status);
var inst_22343__$1 = cljs.core._EQ_.call(null,inst_22342,"RUN");
var state_22361__$1 = (function (){var statearr_22368 = state_22361;
(statearr_22368[(8)] = inst_22343__$1);

return statearr_22368;
})();
if(inst_22343__$1){
var statearr_22369_22388 = state_22361__$1;
(statearr_22369_22388[(1)] = (4));

} else {
var statearr_22370_22389 = state_22361__$1;
(statearr_22370_22389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (9))){
var inst_22356 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
var statearr_22371_22390 = state_22361__$1;
(statearr_22371_22390[(2)] = inst_22356);

(statearr_22371_22390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (5))){
var inst_22343 = (state_22361[(8)]);
var state_22361__$1 = state_22361;
var statearr_22372_22391 = state_22361__$1;
(statearr_22372_22391[(2)] = inst_22343);

(statearr_22372_22391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (10))){
var inst_22352 = (state_22361[(2)]);
var state_22361__$1 = (function (){var statearr_22373 = state_22361;
(statearr_22373[(9)] = inst_22352);

return statearr_22373;
})();
var statearr_22374_22392 = state_22361__$1;
(statearr_22374_22392[(2)] = null);

(statearr_22374_22392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22362 === (8))){
var state_22361__$1 = state_22361;
var statearr_22375_22393 = state_22361__$1;
(statearr_22375_22393[(2)] = null);

(statearr_22375_22393[(1)] = (9));


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
});})(c__22173__auto___22383))
;
return ((function (switch__22152__auto__,c__22173__auto___22383){
return (function() {
var csasync$proc$start_process_$_state_machine__22153__auto__ = null;
var csasync$proc$start_process_$_state_machine__22153__auto____0 = (function (){
var statearr_22379 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22379[(0)] = csasync$proc$start_process_$_state_machine__22153__auto__);

(statearr_22379[(1)] = (1));

return statearr_22379;
});
var csasync$proc$start_process_$_state_machine__22153__auto____1 = (function (state_22361){
while(true){
var ret_value__22154__auto__ = (function (){try{while(true){
var result__22155__auto__ = switch__22152__auto__.call(null,state_22361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22155__auto__;
}
break;
}
}catch (e22380){if((e22380 instanceof Object)){
var ex__22156__auto__ = e22380;
var statearr_22381_22394 = state_22361;
(statearr_22381_22394[(5)] = ex__22156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22395 = state_22361;
state_22361 = G__22395;
continue;
} else {
return ret_value__22154__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22153__auto__ = function(state_22361){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22153__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22153__auto____1.call(this,state_22361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22153__auto____0;
csasync$proc$start_process_$_state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22153__auto____1;
return csasync$proc$start_process_$_state_machine__22153__auto__;
})()
;})(switch__22152__auto__,c__22173__auto___22383))
})();
var state__22175__auto__ = (function (){var statearr_22382 = f__22174__auto__.call(null);
(statearr_22382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22173__auto___22383);

return statearr_22382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22175__auto__);
});})(c__22173__auto___22383))
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
var c__22173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22173__auto__){
return (function (){
var f__22174__auto__ = (function (){var switch__22152__auto__ = ((function (c__22173__auto__){
return (function (state_22416){
var state_val_22417 = (state_22416[(1)]);
if((state_val_22417 === (1))){
var inst_22411 = cljs.core.async.timeout.call(null,time);
var state_22416__$1 = state_22416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22416__$1,(2),inst_22411);
} else {
if((state_val_22417 === (2))){
var inst_22413 = (state_22416[(2)]);
var inst_22414 = func.call(null);
var state_22416__$1 = (function (){var statearr_22418 = state_22416;
(statearr_22418[(7)] = inst_22413);

return statearr_22418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22416__$1,inst_22414);
} else {
return null;
}
}
});})(c__22173__auto__))
;
return ((function (switch__22152__auto__,c__22173__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22153__auto__ = null;
var csasync$proc$delayer_$_state_machine__22153__auto____0 = (function (){
var statearr_22422 = [null,null,null,null,null,null,null,null];
(statearr_22422[(0)] = csasync$proc$delayer_$_state_machine__22153__auto__);

(statearr_22422[(1)] = (1));

return statearr_22422;
});
var csasync$proc$delayer_$_state_machine__22153__auto____1 = (function (state_22416){
while(true){
var ret_value__22154__auto__ = (function (){try{while(true){
var result__22155__auto__ = switch__22152__auto__.call(null,state_22416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22155__auto__;
}
break;
}
}catch (e22423){if((e22423 instanceof Object)){
var ex__22156__auto__ = e22423;
var statearr_22424_22426 = state_22416;
(statearr_22424_22426[(5)] = ex__22156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22427 = state_22416;
state_22416 = G__22427;
continue;
} else {
return ret_value__22154__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22153__auto__ = function(state_22416){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22153__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22153__auto____1.call(this,state_22416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22153__auto____0;
csasync$proc$delayer_$_state_machine__22153__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22153__auto____1;
return csasync$proc$delayer_$_state_machine__22153__auto__;
})()
;})(switch__22152__auto__,c__22173__auto__))
})();
var state__22175__auto__ = (function (){var statearr_22425 = f__22174__auto__.call(null);
(statearr_22425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22173__auto__);

return statearr_22425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22175__auto__);
});})(c__22173__auto__))
);

return c__22173__auto__;
});

//# sourceMappingURL=proc.js.map