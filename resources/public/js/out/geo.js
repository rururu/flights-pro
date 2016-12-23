// Compiled by ClojureScript 1.9.293 {}
goog.provide('geo');
goog.require('cljs.core');
geo.spherical_between = (function geo$spherical_between(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
geo.spherical_distance = (function geo$spherical_distance(phi1,lambda0,phi,lambda){
var pdiff = Math.sin(((phi - phi1) / 2.0));
var ldiff = Math.sin(((lambda - lambda0) / 2.0));
var rval = Math.sqrt(((pdiff * pdiff) + (((Math.cos(phi1) * Math.cos(phi)) * ldiff) * ldiff)));
return (2.0 * Math.asin(rval));
});
geo.spherical_azimuth = (function geo$spherical_azimuth(phi1,lambda0,phi,lambda){
var ldiff = (lambda - lambda0);
var cosphi = Math.cos(phi);
return Math.atan2((cosphi * Math.sin(ldiff)),((Math.cos(phi1) * Math.sin(phi)) - ((Math.sin(phi1) * cosphi) * Math.cos(ldiff))));
});
geo.future_pos = (function geo$future_pos(p__17354,crs,spd,tim){
var vec__17361 = p__17354;
var lat = cljs.core.nth.call(null,vec__17361,(0),null);
var lon = cljs.core.nth.call(null,vec__17361,(1),null);
var phi = Math.toRadians(lat);
var lam = Math.toRadians(lon);
var dir = Math.toRadians(crs);
var way = (spd * tim);
var way__$1 = Math.toRadians((way / (60)));
var vec__17364 = geo.spherical_between.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__17364,(0),null);
var lam2 = cljs.core.nth.call(null,vec__17364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.toDegrees(phi2),Math.toDegrees(lam2)], null);
});
geo.distance_nm = (function geo$distance_nm(p__17367,p__17368){
var vec__17375 = p__17367;
var la1 = cljs.core.nth.call(null,vec__17375,(0),null);
var lo1 = cljs.core.nth.call(null,vec__17375,(1),null);
var vec__17378 = p__17368;
var la2 = cljs.core.nth.call(null,vec__17378,(0),null);
var lo2 = cljs.core.nth.call(null,vec__17378,(1),null);
var fi1 = Math.toRadians(la1);
var ld1 = Math.toRadians(lo1);
var fi2 = Math.toRadians(la2);
var ld2 = Math.toRadians(lo2);
var rad = geo.spherical_distance.call(null,fi1,ld1,fi2,ld2);
return (Math.toDegrees(rad) * (60));
});
geo.bear_deg = (function geo$bear_deg(p__17381,p__17382){
var vec__17389 = p__17381;
var la1 = cljs.core.nth.call(null,vec__17389,(0),null);
var lo1 = cljs.core.nth.call(null,vec__17389,(1),null);
var vec__17392 = p__17382;
var la2 = cljs.core.nth.call(null,vec__17392,(0),null);
var lo2 = cljs.core.nth.call(null,vec__17392,(1),null);
var fi1 = Math.toRadians(la1);
var ld1 = Math.toRadians(lo1);
var fi2 = Math.toRadians(la2);
var ld2 = Math.toRadians(lo2);
var rad = geo.spherical_azimuth.call(null,fi1,ld1,fi2,ld2);
var deg = Math.toDegrees(rad);
if((deg < (0))){
return (deg + 360.0);
} else {
if((deg > 360.0)){
return (deg - 360.0);
} else {
return deg;

}
}
});
geo.seg_intersect = (function geo$seg_intersect(x1,y1,x2,y2,x3,y3,x4,y4){
var denom = (((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1)));
if(!((denom === 0.0))){
var ua = ((((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3))) / denom);
var ub = ((((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3))) / denom);
if((((0.0 <= ua)) && ((ua <= 1.0))) && (((0.0 <= ub)) && ((ub <= 1.0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y1 + (ua * (y2 - y1))),(x1 + (ua * (x2 - x1)))], null);
} else {
return null;
}
} else {
return null;
}
});
geo.future_intersect = (function geo$future_intersect(p__17395,crs1,spd1,p__17396,crs2,spd2,tim){
var vec__17409 = p__17395;
var la1 = cljs.core.nth.call(null,vec__17409,(0),null);
var lo1 = cljs.core.nth.call(null,vec__17409,(1),null);
var vec__17412 = p__17396;
var la2 = cljs.core.nth.call(null,vec__17412,(0),null);
var lo2 = cljs.core.nth.call(null,vec__17412,(1),null);
var vec__17415 = geo.future_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [la1,lo1], null),crs1,spd1,tim);
var la3 = cljs.core.nth.call(null,vec__17415,(0),null);
var lo3 = cljs.core.nth.call(null,vec__17415,(1),null);
var vec__17418 = geo.future_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [la2,lo2], null),crs2,spd2,tim);
var la4 = cljs.core.nth.call(null,vec__17418,(0),null);
var lo4 = cljs.core.nth.call(null,vec__17418,(1),null);
return geo.seg_intersect.call(null,lo1,la1,lo3,la3,lo2,la2,lo4,la4);
});
geo.rev_bear = (function geo$rev_bear(b){
var rb = (b + (180));
if((rb > (360))){
return (rb - (360));
} else {
return rb;
}
});
geo.course_angle = (function geo$course_angle(crs,p__17421,p__17422){
var vec__17429 = p__17421;
var lat1 = cljs.core.nth.call(null,vec__17429,(0),null);
var lon1 = cljs.core.nth.call(null,vec__17429,(1),null);
var vec__17432 = p__17422;
var lat2 = cljs.core.nth.call(null,vec__17432,(0),null);
var lon2 = cljs.core.nth.call(null,vec__17432,(1),null);
var bea = geo.bear_deg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat1,lon1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat2,lon2], null));
var ca1 = (bea - crs);
if((ca1 > (180))){
return (ca1 - (360));
} else {
if((ca1 < (-180))){
return (ca1 + (360));
} else {
return ca1;

}
}
});
geo.abaft = (function geo$abaft(crs,crd1,crd2){
var ca = geo.course_angle.call(null,crs,crd1,crd2);
return ((ca > (90))) || ((ca < (-90)));
});
geo.following_QMARK_ = (function geo$following_QMARK_(crs1,crs2){
var dif = Math.abs((crs2 - crs1));
return ((dif < (90))) || ((dif > (270)));
});
geo.norm_crs = (function geo$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});

//# sourceMappingURL=geo.js.map