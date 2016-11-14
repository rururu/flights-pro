// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21158 = [];
var len__20158__auto___21221 = arguments.length;
var i__20159__auto___21222 = (0);
while(true){
if((i__20159__auto___21222 < len__20158__auto___21221)){
args21158.push((arguments[i__20159__auto___21222]));

var G__21223 = (i__20159__auto___21222 + (1));
i__20159__auto___21222 = G__21223;
continue;
} else {
}
break;
}

var G__21160 = args21158.length;
switch (G__21160) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21158.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21113__auto__){
return (function (){
var f__21114__auto__ = (function (){var switch__21092__auto__ = ((function (c__21113__auto__){
return (function (state_21174){
var state_val_21175 = (state_21174[(1)]);
if((state_val_21175 === (1))){
var state_21174__$1 = state_21174;
var statearr_21176_21225 = state_21174__$1;
(statearr_21176_21225[(2)] = null);

(statearr_21176_21225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (2))){
var state_21174__$1 = state_21174;
var statearr_21177_21226 = state_21174__$1;
(statearr_21177_21226[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (3))){
var inst_21172 = (state_21174[(2)]);
var state_21174__$1 = state_21174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21174__$1,inst_21172);
} else {
if((state_val_21175 === (4))){
var inst_21163 = func.call(null);
var inst_21164 = cljs.core.async.timeout.call(null,time_out);
var state_21174__$1 = (function (){var statearr_21179 = state_21174;
(statearr_21179[(7)] = inst_21163);

return statearr_21179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21174__$1,(7),inst_21164);
} else {
if((state_val_21175 === (5))){
var state_21174__$1 = state_21174;
var statearr_21180_21227 = state_21174__$1;
(statearr_21180_21227[(2)] = null);

(statearr_21180_21227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (6))){
var inst_21170 = (state_21174[(2)]);
var state_21174__$1 = state_21174;
var statearr_21181_21228 = state_21174__$1;
(statearr_21181_21228[(2)] = inst_21170);

(statearr_21181_21228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21175 === (7))){
var inst_21166 = (state_21174[(2)]);
var state_21174__$1 = (function (){var statearr_21182 = state_21174;
(statearr_21182[(8)] = inst_21166);

return statearr_21182;
})();
var statearr_21183_21229 = state_21174__$1;
(statearr_21183_21229[(2)] = null);

(statearr_21183_21229[(1)] = (2));


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
});})(c__21113__auto__))
;
return ((function (switch__21092__auto__,c__21113__auto__){
return (function() {
var csasync$proc$state_machine__21093__auto__ = null;
var csasync$proc$state_machine__21093__auto____0 = (function (){
var statearr_21187 = [null,null,null,null,null,null,null,null,null];
(statearr_21187[(0)] = csasync$proc$state_machine__21093__auto__);

(statearr_21187[(1)] = (1));

return statearr_21187;
});
var csasync$proc$state_machine__21093__auto____1 = (function (state_21174){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21188){if((e21188 instanceof Object)){
var ex__21096__auto__ = e21188;
var statearr_21189_21230 = state_21174;
(statearr_21189_21230[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21231 = state_21174;
state_21174 = G__21231;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
csasync$proc$state_machine__21093__auto__ = function(state_21174){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21093__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21093__auto____1.call(this,state_21174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21093__auto____0;
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21093__auto____1;
return csasync$proc$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21113__auto__))
})();
var state__21115__auto__ = (function (){var statearr_21190 = f__21114__auto__.call(null);
(statearr_21190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21113__auto__);

return statearr_21190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21115__auto__);
});})(c__21113__auto__))
);

return c__21113__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21113__auto__){
return (function (){
var f__21114__auto__ = (function (){var switch__21092__auto__ = ((function (c__21113__auto__){
return (function (state_21204){
var state_val_21205 = (state_21204[(1)]);
if((state_val_21205 === (1))){
var state_21204__$1 = state_21204;
var statearr_21206_21232 = state_21204__$1;
(statearr_21206_21232[(2)] = null);

(statearr_21206_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21205 === (2))){
var state_21204__$1 = state_21204;
var statearr_21207_21233 = state_21204__$1;
(statearr_21207_21233[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21205 === (3))){
var inst_21202 = (state_21204[(2)]);
var state_21204__$1 = state_21204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21204__$1,inst_21202);
} else {
if((state_val_21205 === (4))){
var inst_21193 = func.call(null,param);
var inst_21194 = cljs.core.async.timeout.call(null,time_out);
var state_21204__$1 = (function (){var statearr_21209 = state_21204;
(statearr_21209[(7)] = inst_21193);

return statearr_21209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21204__$1,(7),inst_21194);
} else {
if((state_val_21205 === (5))){
var state_21204__$1 = state_21204;
var statearr_21210_21234 = state_21204__$1;
(statearr_21210_21234[(2)] = null);

(statearr_21210_21234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21205 === (6))){
var inst_21200 = (state_21204[(2)]);
var state_21204__$1 = state_21204;
var statearr_21211_21235 = state_21204__$1;
(statearr_21211_21235[(2)] = inst_21200);

(statearr_21211_21235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21205 === (7))){
var inst_21196 = (state_21204[(2)]);
var state_21204__$1 = (function (){var statearr_21212 = state_21204;
(statearr_21212[(8)] = inst_21196);

return statearr_21212;
})();
var statearr_21213_21236 = state_21204__$1;
(statearr_21213_21236[(2)] = null);

(statearr_21213_21236[(1)] = (2));


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
});})(c__21113__auto__))
;
return ((function (switch__21092__auto__,c__21113__auto__){
return (function() {
var csasync$proc$state_machine__21093__auto__ = null;
var csasync$proc$state_machine__21093__auto____0 = (function (){
var statearr_21217 = [null,null,null,null,null,null,null,null,null];
(statearr_21217[(0)] = csasync$proc$state_machine__21093__auto__);

(statearr_21217[(1)] = (1));

return statearr_21217;
});
var csasync$proc$state_machine__21093__auto____1 = (function (state_21204){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21218){if((e21218 instanceof Object)){
var ex__21096__auto__ = e21218;
var statearr_21219_21237 = state_21204;
(statearr_21219_21237[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21238 = state_21204;
state_21204 = G__21238;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
csasync$proc$state_machine__21093__auto__ = function(state_21204){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21093__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21093__auto____1.call(this,state_21204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21093__auto____0;
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21093__auto____1;
return csasync$proc$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21113__auto__))
})();
var state__21115__auto__ = (function (){var statearr_21220 = f__21114__auto__.call(null);
(statearr_21220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21113__auto__);

return statearr_21220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21115__auto__);
});})(c__21113__auto__))
);

return c__21113__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args21239 = [];
var len__20158__auto___21326 = arguments.length;
var i__20159__auto___21327 = (0);
while(true){
if((i__20159__auto___21327 < len__20158__auto___21326)){
args21239.push((arguments[i__20159__auto___21327]));

var G__21328 = (i__20159__auto___21327 + (1));
i__20159__auto___21327 = G__21328;
continue;
} else {
}
break;
}

var G__21241 = args21239.length;
switch (G__21241) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21239.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21113__auto___21330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21113__auto___21330){
return (function (){
var f__21114__auto__ = (function (){var switch__21092__auto__ = ((function (c__21113__auto___21330){
return (function (state_21262){
var state_val_21263 = (state_21262[(1)]);
if((state_val_21263 === (7))){
var inst_21251 = cljs.core.async.timeout.call(null,time_out);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21262__$1,(10),inst_21251);
} else {
if((state_val_21263 === (1))){
var state_21262__$1 = state_21262;
var statearr_21264_21331 = state_21262__$1;
(statearr_21264_21331[(2)] = null);

(statearr_21264_21331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (4))){
var inst_21246 = proc_fn.call(null);
var state_21262__$1 = state_21262;
var statearr_21265_21332 = state_21262__$1;
(statearr_21265_21332[(2)] = inst_21246);

(statearr_21265_21332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (6))){
var inst_21249 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21249)){
var statearr_21266_21333 = state_21262__$1;
(statearr_21266_21333[(1)] = (7));

} else {
var statearr_21267_21334 = state_21262__$1;
(statearr_21267_21334[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (3))){
var inst_21259 = (state_21262[(2)]);
var inst_21260 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21262__$1 = (function (){var statearr_21268 = state_21262;
(statearr_21268[(7)] = inst_21259);

return statearr_21268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21262__$1,inst_21260);
} else {
if((state_val_21263 === (2))){
var inst_21244 = (state_21262[(8)]);
var inst_21243 = cljs.core.deref.call(null,status);
var inst_21244__$1 = cljs.core._EQ_.call(null,inst_21243,"RUN");
var state_21262__$1 = (function (){var statearr_21269 = state_21262;
(statearr_21269[(8)] = inst_21244__$1);

return statearr_21269;
})();
if(inst_21244__$1){
var statearr_21270_21335 = state_21262__$1;
(statearr_21270_21335[(1)] = (4));

} else {
var statearr_21271_21336 = state_21262__$1;
(statearr_21271_21336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (9))){
var inst_21257 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21272_21337 = state_21262__$1;
(statearr_21272_21337[(2)] = inst_21257);

(statearr_21272_21337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (5))){
var inst_21244 = (state_21262[(8)]);
var state_21262__$1 = state_21262;
var statearr_21273_21338 = state_21262__$1;
(statearr_21273_21338[(2)] = inst_21244);

(statearr_21273_21338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (10))){
var inst_21253 = (state_21262[(2)]);
var state_21262__$1 = (function (){var statearr_21274 = state_21262;
(statearr_21274[(9)] = inst_21253);

return statearr_21274;
})();
var statearr_21275_21339 = state_21262__$1;
(statearr_21275_21339[(2)] = null);

(statearr_21275_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (8))){
var state_21262__$1 = state_21262;
var statearr_21276_21340 = state_21262__$1;
(statearr_21276_21340[(2)] = null);

(statearr_21276_21340[(1)] = (9));


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
});})(c__21113__auto___21330))
;
return ((function (switch__21092__auto__,c__21113__auto___21330){
return (function() {
var csasync$proc$state_machine__21093__auto__ = null;
var csasync$proc$state_machine__21093__auto____0 = (function (){
var statearr_21280 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21280[(0)] = csasync$proc$state_machine__21093__auto__);

(statearr_21280[(1)] = (1));

return statearr_21280;
});
var csasync$proc$state_machine__21093__auto____1 = (function (state_21262){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21281){if((e21281 instanceof Object)){
var ex__21096__auto__ = e21281;
var statearr_21282_21341 = state_21262;
(statearr_21282_21341[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21342 = state_21262;
state_21262 = G__21342;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
csasync$proc$state_machine__21093__auto__ = function(state_21262){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21093__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21093__auto____1.call(this,state_21262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21093__auto____0;
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21093__auto____1;
return csasync$proc$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21113__auto___21330))
})();
var state__21115__auto__ = (function (){var statearr_21283 = f__21114__auto__.call(null);
(statearr_21283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21113__auto___21330);

return statearr_21283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21115__auto__);
});})(c__21113__auto___21330))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21113__auto___21343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21113__auto___21343){
return (function (){
var f__21114__auto__ = (function (){var switch__21092__auto__ = ((function (c__21113__auto___21343){
return (function (state_21304){
var state_val_21305 = (state_21304[(1)]);
if((state_val_21305 === (7))){
var inst_21293 = cljs.core.async.timeout.call(null,time_out);
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21304__$1,(10),inst_21293);
} else {
if((state_val_21305 === (1))){
var state_21304__$1 = state_21304;
var statearr_21306_21344 = state_21304__$1;
(statearr_21306_21344[(2)] = null);

(statearr_21306_21344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (4))){
var inst_21288 = proc_fn.call(null,param);
var state_21304__$1 = state_21304;
var statearr_21307_21345 = state_21304__$1;
(statearr_21307_21345[(2)] = inst_21288);

(statearr_21307_21345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (6))){
var inst_21291 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
if(cljs.core.truth_(inst_21291)){
var statearr_21308_21346 = state_21304__$1;
(statearr_21308_21346[(1)] = (7));

} else {
var statearr_21309_21347 = state_21304__$1;
(statearr_21309_21347[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (3))){
var inst_21301 = (state_21304[(2)]);
var inst_21302 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21304__$1 = (function (){var statearr_21310 = state_21304;
(statearr_21310[(7)] = inst_21301);

return statearr_21310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21304__$1,inst_21302);
} else {
if((state_val_21305 === (2))){
var inst_21286 = (state_21304[(8)]);
var inst_21285 = cljs.core.deref.call(null,status);
var inst_21286__$1 = cljs.core._EQ_.call(null,inst_21285,"RUN");
var state_21304__$1 = (function (){var statearr_21311 = state_21304;
(statearr_21311[(8)] = inst_21286__$1);

return statearr_21311;
})();
if(inst_21286__$1){
var statearr_21312_21348 = state_21304__$1;
(statearr_21312_21348[(1)] = (4));

} else {
var statearr_21313_21349 = state_21304__$1;
(statearr_21313_21349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (9))){
var inst_21299 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21314_21350 = state_21304__$1;
(statearr_21314_21350[(2)] = inst_21299);

(statearr_21314_21350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (5))){
var inst_21286 = (state_21304[(8)]);
var state_21304__$1 = state_21304;
var statearr_21315_21351 = state_21304__$1;
(statearr_21315_21351[(2)] = inst_21286);

(statearr_21315_21351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (10))){
var inst_21295 = (state_21304[(2)]);
var state_21304__$1 = (function (){var statearr_21316 = state_21304;
(statearr_21316[(9)] = inst_21295);

return statearr_21316;
})();
var statearr_21317_21352 = state_21304__$1;
(statearr_21317_21352[(2)] = null);

(statearr_21317_21352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (8))){
var state_21304__$1 = state_21304;
var statearr_21318_21353 = state_21304__$1;
(statearr_21318_21353[(2)] = null);

(statearr_21318_21353[(1)] = (9));


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
});})(c__21113__auto___21343))
;
return ((function (switch__21092__auto__,c__21113__auto___21343){
return (function() {
var csasync$proc$state_machine__21093__auto__ = null;
var csasync$proc$state_machine__21093__auto____0 = (function (){
var statearr_21322 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21322[(0)] = csasync$proc$state_machine__21093__auto__);

(statearr_21322[(1)] = (1));

return statearr_21322;
});
var csasync$proc$state_machine__21093__auto____1 = (function (state_21304){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21323){if((e21323 instanceof Object)){
var ex__21096__auto__ = e21323;
var statearr_21324_21354 = state_21304;
(statearr_21324_21354[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21355 = state_21304;
state_21304 = G__21355;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
csasync$proc$state_machine__21093__auto__ = function(state_21304){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21093__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21093__auto____1.call(this,state_21304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21093__auto____0;
csasync$proc$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21093__auto____1;
return csasync$proc$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21113__auto___21343))
})();
var state__21115__auto__ = (function (){var statearr_21325 = f__21114__auto__.call(null);
(statearr_21325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21113__auto___21343);

return statearr_21325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21115__auto__);
});})(c__21113__auto___21343))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$lang$maxFixedArity = 4;

csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"STOP");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});
csasync.proc.delayer = (function csasync$proc$delayer(func,time){
var c__21113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21113__auto__){
return (function (){
var f__21114__auto__ = (function (){var switch__21092__auto__ = ((function (c__21113__auto__){
return (function (state_21376){
var state_val_21377 = (state_21376[(1)]);
if((state_val_21377 === (1))){
var inst_21371 = cljs.core.async.timeout.call(null,time);
var state_21376__$1 = state_21376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21376__$1,(2),inst_21371);
} else {
if((state_val_21377 === (2))){
var inst_21373 = (state_21376[(2)]);
var inst_21374 = func.call(null);
var state_21376__$1 = (function (){var statearr_21378 = state_21376;
(statearr_21378[(7)] = inst_21373);

return statearr_21378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21376__$1,inst_21374);
} else {
return null;
}
}
});})(c__21113__auto__))
;
return ((function (switch__21092__auto__,c__21113__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21093__auto__ = null;
var csasync$proc$delayer_$_state_machine__21093__auto____0 = (function (){
var statearr_21382 = [null,null,null,null,null,null,null,null];
(statearr_21382[(0)] = csasync$proc$delayer_$_state_machine__21093__auto__);

(statearr_21382[(1)] = (1));

return statearr_21382;
});
var csasync$proc$delayer_$_state_machine__21093__auto____1 = (function (state_21376){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21383){if((e21383 instanceof Object)){
var ex__21096__auto__ = e21383;
var statearr_21384_21386 = state_21376;
(statearr_21384_21386[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21387 = state_21376;
state_21376 = G__21387;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21093__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21093__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21093__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21093__auto____0;
csasync$proc$delayer_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21093__auto____1;
return csasync$proc$delayer_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21113__auto__))
})();
var state__21115__auto__ = (function (){var statearr_21385 = f__21114__auto__.call(null);
(statearr_21385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21113__auto__);

return statearr_21385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21115__auto__);
});})(c__21113__auto__))
);

return c__21113__auto__;
});

//# sourceMappingURL=proc.js.map