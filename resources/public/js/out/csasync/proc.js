// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23811 = [];
var len__20540__auto___23874 = arguments.length;
var i__20541__auto___23875 = (0);
while(true){
if((i__20541__auto___23875 < len__20540__auto___23874)){
args23811.push((arguments[i__20541__auto___23875]));

var G__23876 = (i__20541__auto___23875 + (1));
i__20541__auto___23875 = G__23876;
continue;
} else {
}
break;
}

var G__23813 = args23811.length;
switch (G__23813) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23811.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21495__auto__){
return (function (){
var f__21496__auto__ = (function (){var switch__21474__auto__ = ((function (c__21495__auto__){
return (function (state_23827){
var state_val_23828 = (state_23827[(1)]);
if((state_val_23828 === (1))){
var state_23827__$1 = state_23827;
var statearr_23829_23878 = state_23827__$1;
(statearr_23829_23878[(2)] = null);

(statearr_23829_23878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (2))){
var state_23827__$1 = state_23827;
var statearr_23830_23879 = state_23827__$1;
(statearr_23830_23879[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (3))){
var inst_23825 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23827__$1,inst_23825);
} else {
if((state_val_23828 === (4))){
var inst_23816 = func.call(null);
var inst_23817 = cljs.core.async.timeout.call(null,time_out);
var state_23827__$1 = (function (){var statearr_23832 = state_23827;
(statearr_23832[(7)] = inst_23816);

return statearr_23832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23827__$1,(7),inst_23817);
} else {
if((state_val_23828 === (5))){
var state_23827__$1 = state_23827;
var statearr_23833_23880 = state_23827__$1;
(statearr_23833_23880[(2)] = null);

(statearr_23833_23880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (6))){
var inst_23823 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
var statearr_23834_23881 = state_23827__$1;
(statearr_23834_23881[(2)] = inst_23823);

(statearr_23834_23881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (7))){
var inst_23819 = (state_23827[(2)]);
var state_23827__$1 = (function (){var statearr_23835 = state_23827;
(statearr_23835[(8)] = inst_23819);

return statearr_23835;
})();
var statearr_23836_23882 = state_23827__$1;
(statearr_23836_23882[(2)] = null);

(statearr_23836_23882[(1)] = (2));


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
});})(c__21495__auto__))
;
return ((function (switch__21474__auto__,c__21495__auto__){
return (function() {
var csasync$proc$state_machine__21475__auto__ = null;
var csasync$proc$state_machine__21475__auto____0 = (function (){
var statearr_23840 = [null,null,null,null,null,null,null,null,null];
(statearr_23840[(0)] = csasync$proc$state_machine__21475__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var csasync$proc$state_machine__21475__auto____1 = (function (state_23827){
while(true){
var ret_value__21476__auto__ = (function (){try{while(true){
var result__21477__auto__ = switch__21474__auto__.call(null,state_23827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21477__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__21478__auto__ = e23841;
var statearr_23842_23883 = state_23827;
(statearr_23842_23883[(5)] = ex__21478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23884 = state_23827;
state_23827 = G__23884;
continue;
} else {
return ret_value__21476__auto__;
}
break;
}
});
csasync$proc$state_machine__21475__auto__ = function(state_23827){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21475__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21475__auto____1.call(this,state_23827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21475__auto____0;
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21475__auto____1;
return csasync$proc$state_machine__21475__auto__;
})()
;})(switch__21474__auto__,c__21495__auto__))
})();
var state__21497__auto__ = (function (){var statearr_23843 = f__21496__auto__.call(null);
(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21495__auto__);

return statearr_23843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21497__auto__);
});})(c__21495__auto__))
);

return c__21495__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21495__auto__){
return (function (){
var f__21496__auto__ = (function (){var switch__21474__auto__ = ((function (c__21495__auto__){
return (function (state_23857){
var state_val_23858 = (state_23857[(1)]);
if((state_val_23858 === (1))){
var state_23857__$1 = state_23857;
var statearr_23859_23885 = state_23857__$1;
(statearr_23859_23885[(2)] = null);

(statearr_23859_23885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23858 === (2))){
var state_23857__$1 = state_23857;
var statearr_23860_23886 = state_23857__$1;
(statearr_23860_23886[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23858 === (3))){
var inst_23855 = (state_23857[(2)]);
var state_23857__$1 = state_23857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23857__$1,inst_23855);
} else {
if((state_val_23858 === (4))){
var inst_23846 = func.call(null,param);
var inst_23847 = cljs.core.async.timeout.call(null,time_out);
var state_23857__$1 = (function (){var statearr_23862 = state_23857;
(statearr_23862[(7)] = inst_23846);

return statearr_23862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23857__$1,(7),inst_23847);
} else {
if((state_val_23858 === (5))){
var state_23857__$1 = state_23857;
var statearr_23863_23887 = state_23857__$1;
(statearr_23863_23887[(2)] = null);

(statearr_23863_23887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23858 === (6))){
var inst_23853 = (state_23857[(2)]);
var state_23857__$1 = state_23857;
var statearr_23864_23888 = state_23857__$1;
(statearr_23864_23888[(2)] = inst_23853);

(statearr_23864_23888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23858 === (7))){
var inst_23849 = (state_23857[(2)]);
var state_23857__$1 = (function (){var statearr_23865 = state_23857;
(statearr_23865[(8)] = inst_23849);

return statearr_23865;
})();
var statearr_23866_23889 = state_23857__$1;
(statearr_23866_23889[(2)] = null);

(statearr_23866_23889[(1)] = (2));


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
});})(c__21495__auto__))
;
return ((function (switch__21474__auto__,c__21495__auto__){
return (function() {
var csasync$proc$state_machine__21475__auto__ = null;
var csasync$proc$state_machine__21475__auto____0 = (function (){
var statearr_23870 = [null,null,null,null,null,null,null,null,null];
(statearr_23870[(0)] = csasync$proc$state_machine__21475__auto__);

(statearr_23870[(1)] = (1));

return statearr_23870;
});
var csasync$proc$state_machine__21475__auto____1 = (function (state_23857){
while(true){
var ret_value__21476__auto__ = (function (){try{while(true){
var result__21477__auto__ = switch__21474__auto__.call(null,state_23857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21477__auto__;
}
break;
}
}catch (e23871){if((e23871 instanceof Object)){
var ex__21478__auto__ = e23871;
var statearr_23872_23890 = state_23857;
(statearr_23872_23890[(5)] = ex__21478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23891 = state_23857;
state_23857 = G__23891;
continue;
} else {
return ret_value__21476__auto__;
}
break;
}
});
csasync$proc$state_machine__21475__auto__ = function(state_23857){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21475__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21475__auto____1.call(this,state_23857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21475__auto____0;
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21475__auto____1;
return csasync$proc$state_machine__21475__auto__;
})()
;})(switch__21474__auto__,c__21495__auto__))
})();
var state__21497__auto__ = (function (){var statearr_23873 = f__21496__auto__.call(null);
(statearr_23873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21495__auto__);

return statearr_23873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21497__auto__);
});})(c__21495__auto__))
);

return c__21495__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args23892 = [];
var len__20540__auto___23979 = arguments.length;
var i__20541__auto___23980 = (0);
while(true){
if((i__20541__auto___23980 < len__20540__auto___23979)){
args23892.push((arguments[i__20541__auto___23980]));

var G__23981 = (i__20541__auto___23980 + (1));
i__20541__auto___23980 = G__23981;
continue;
} else {
}
break;
}

var G__23894 = args23892.length;
switch (G__23894) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23892.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21495__auto___23983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21495__auto___23983){
return (function (){
var f__21496__auto__ = (function (){var switch__21474__auto__ = ((function (c__21495__auto___23983){
return (function (state_23915){
var state_val_23916 = (state_23915[(1)]);
if((state_val_23916 === (7))){
var inst_23904 = cljs.core.async.timeout.call(null,time_out);
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23915__$1,(10),inst_23904);
} else {
if((state_val_23916 === (1))){
var state_23915__$1 = state_23915;
var statearr_23917_23984 = state_23915__$1;
(statearr_23917_23984[(2)] = null);

(statearr_23917_23984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (4))){
var inst_23899 = proc_fn.call(null);
var state_23915__$1 = state_23915;
var statearr_23918_23985 = state_23915__$1;
(statearr_23918_23985[(2)] = inst_23899);

(statearr_23918_23985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (6))){
var inst_23902 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
if(cljs.core.truth_(inst_23902)){
var statearr_23919_23986 = state_23915__$1;
(statearr_23919_23986[(1)] = (7));

} else {
var statearr_23920_23987 = state_23915__$1;
(statearr_23920_23987[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (3))){
var inst_23912 = (state_23915[(2)]);
var inst_23913 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23915__$1 = (function (){var statearr_23921 = state_23915;
(statearr_23921[(7)] = inst_23912);

return statearr_23921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else {
if((state_val_23916 === (2))){
var inst_23897 = (state_23915[(8)]);
var inst_23896 = cljs.core.deref.call(null,status);
var inst_23897__$1 = cljs.core._EQ_.call(null,inst_23896,"RUN");
var state_23915__$1 = (function (){var statearr_23922 = state_23915;
(statearr_23922[(8)] = inst_23897__$1);

return statearr_23922;
})();
if(inst_23897__$1){
var statearr_23923_23988 = state_23915__$1;
(statearr_23923_23988[(1)] = (4));

} else {
var statearr_23924_23989 = state_23915__$1;
(statearr_23924_23989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (9))){
var inst_23910 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23925_23990 = state_23915__$1;
(statearr_23925_23990[(2)] = inst_23910);

(statearr_23925_23990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (5))){
var inst_23897 = (state_23915[(8)]);
var state_23915__$1 = state_23915;
var statearr_23926_23991 = state_23915__$1;
(statearr_23926_23991[(2)] = inst_23897);

(statearr_23926_23991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (10))){
var inst_23906 = (state_23915[(2)]);
var state_23915__$1 = (function (){var statearr_23927 = state_23915;
(statearr_23927[(9)] = inst_23906);

return statearr_23927;
})();
var statearr_23928_23992 = state_23915__$1;
(statearr_23928_23992[(2)] = null);

(statearr_23928_23992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (8))){
var state_23915__$1 = state_23915;
var statearr_23929_23993 = state_23915__$1;
(statearr_23929_23993[(2)] = null);

(statearr_23929_23993[(1)] = (9));


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
});})(c__21495__auto___23983))
;
return ((function (switch__21474__auto__,c__21495__auto___23983){
return (function() {
var csasync$proc$state_machine__21475__auto__ = null;
var csasync$proc$state_machine__21475__auto____0 = (function (){
var statearr_23933 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23933[(0)] = csasync$proc$state_machine__21475__auto__);

(statearr_23933[(1)] = (1));

return statearr_23933;
});
var csasync$proc$state_machine__21475__auto____1 = (function (state_23915){
while(true){
var ret_value__21476__auto__ = (function (){try{while(true){
var result__21477__auto__ = switch__21474__auto__.call(null,state_23915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21477__auto__;
}
break;
}
}catch (e23934){if((e23934 instanceof Object)){
var ex__21478__auto__ = e23934;
var statearr_23935_23994 = state_23915;
(statearr_23935_23994[(5)] = ex__21478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23995 = state_23915;
state_23915 = G__23995;
continue;
} else {
return ret_value__21476__auto__;
}
break;
}
});
csasync$proc$state_machine__21475__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21475__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21475__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21475__auto____0;
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21475__auto____1;
return csasync$proc$state_machine__21475__auto__;
})()
;})(switch__21474__auto__,c__21495__auto___23983))
})();
var state__21497__auto__ = (function (){var statearr_23936 = f__21496__auto__.call(null);
(statearr_23936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21495__auto___23983);

return statearr_23936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21497__auto__);
});})(c__21495__auto___23983))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21495__auto___23996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21495__auto___23996){
return (function (){
var f__21496__auto__ = (function (){var switch__21474__auto__ = ((function (c__21495__auto___23996){
return (function (state_23957){
var state_val_23958 = (state_23957[(1)]);
if((state_val_23958 === (7))){
var inst_23946 = cljs.core.async.timeout.call(null,time_out);
var state_23957__$1 = state_23957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23957__$1,(10),inst_23946);
} else {
if((state_val_23958 === (1))){
var state_23957__$1 = state_23957;
var statearr_23959_23997 = state_23957__$1;
(statearr_23959_23997[(2)] = null);

(statearr_23959_23997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (4))){
var inst_23941 = proc_fn.call(null,param);
var state_23957__$1 = state_23957;
var statearr_23960_23998 = state_23957__$1;
(statearr_23960_23998[(2)] = inst_23941);

(statearr_23960_23998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (6))){
var inst_23944 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
if(cljs.core.truth_(inst_23944)){
var statearr_23961_23999 = state_23957__$1;
(statearr_23961_23999[(1)] = (7));

} else {
var statearr_23962_24000 = state_23957__$1;
(statearr_23962_24000[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (3))){
var inst_23954 = (state_23957[(2)]);
var inst_23955 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23957__$1 = (function (){var statearr_23963 = state_23957;
(statearr_23963[(7)] = inst_23954);

return statearr_23963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23957__$1,inst_23955);
} else {
if((state_val_23958 === (2))){
var inst_23939 = (state_23957[(8)]);
var inst_23938 = cljs.core.deref.call(null,status);
var inst_23939__$1 = cljs.core._EQ_.call(null,inst_23938,"RUN");
var state_23957__$1 = (function (){var statearr_23964 = state_23957;
(statearr_23964[(8)] = inst_23939__$1);

return statearr_23964;
})();
if(inst_23939__$1){
var statearr_23965_24001 = state_23957__$1;
(statearr_23965_24001[(1)] = (4));

} else {
var statearr_23966_24002 = state_23957__$1;
(statearr_23966_24002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (9))){
var inst_23952 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
var statearr_23967_24003 = state_23957__$1;
(statearr_23967_24003[(2)] = inst_23952);

(statearr_23967_24003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (5))){
var inst_23939 = (state_23957[(8)]);
var state_23957__$1 = state_23957;
var statearr_23968_24004 = state_23957__$1;
(statearr_23968_24004[(2)] = inst_23939);

(statearr_23968_24004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (10))){
var inst_23948 = (state_23957[(2)]);
var state_23957__$1 = (function (){var statearr_23969 = state_23957;
(statearr_23969[(9)] = inst_23948);

return statearr_23969;
})();
var statearr_23970_24005 = state_23957__$1;
(statearr_23970_24005[(2)] = null);

(statearr_23970_24005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (8))){
var state_23957__$1 = state_23957;
var statearr_23971_24006 = state_23957__$1;
(statearr_23971_24006[(2)] = null);

(statearr_23971_24006[(1)] = (9));


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
});})(c__21495__auto___23996))
;
return ((function (switch__21474__auto__,c__21495__auto___23996){
return (function() {
var csasync$proc$state_machine__21475__auto__ = null;
var csasync$proc$state_machine__21475__auto____0 = (function (){
var statearr_23975 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23975[(0)] = csasync$proc$state_machine__21475__auto__);

(statearr_23975[(1)] = (1));

return statearr_23975;
});
var csasync$proc$state_machine__21475__auto____1 = (function (state_23957){
while(true){
var ret_value__21476__auto__ = (function (){try{while(true){
var result__21477__auto__ = switch__21474__auto__.call(null,state_23957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21477__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object)){
var ex__21478__auto__ = e23976;
var statearr_23977_24007 = state_23957;
(statearr_23977_24007[(5)] = ex__21478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24008 = state_23957;
state_23957 = G__24008;
continue;
} else {
return ret_value__21476__auto__;
}
break;
}
});
csasync$proc$state_machine__21475__auto__ = function(state_23957){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21475__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21475__auto____1.call(this,state_23957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21475__auto____0;
csasync$proc$state_machine__21475__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21475__auto____1;
return csasync$proc$state_machine__21475__auto__;
})()
;})(switch__21474__auto__,c__21495__auto___23996))
})();
var state__21497__auto__ = (function (){var statearr_23978 = f__21496__auto__.call(null);
(statearr_23978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21495__auto___23996);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21497__auto__);
});})(c__21495__auto___23996))
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

//# sourceMappingURL=proc.js.map