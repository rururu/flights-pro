/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-a55a8a4c","./Math-73a8bd13","./Cartesian2-8c9f79ed","./EllipsoidTangentPlane-7f2f6dd6","./PolygonPipeline-c12287cd","./PolylinePipeline-a7e2c020"],function(e,C,A,w,E,O,b){"use strict";var i={};var M=new w.Cartographic,L=new w.Cartographic;var F=new Array(2),H=new Array(2),T={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};i.computePositions=function(e,i,t,n,r,o){var a=function(e,i,t,n){var r=i.length;if(!(r<2)){var o=C.defined(n),a=C.defined(t),l=!0,h=new Array(r),s=new Array(r),g=new Array(r),p=i[0];h[0]=p;var d=e.cartesianToCartographic(p,M);a&&(d.height=t[0]),l=l&&d.height<=0,s[0]=d.height,g[0]=o?n[0]:0;for(var P,c,u=1,v=1;v<r;++v){var f=i[v],y=e.cartesianToCartographic(f,L);a&&(y.height=t[v]),l=l&&y.height<=0,P=d,c=y,A.CesiumMath.equalsEpsilon(P.latitude,c.latitude,A.CesiumMath.EPSILON14)&&A.CesiumMath.equalsEpsilon(P.longitude,c.longitude,A.CesiumMath.EPSILON14)?d.height<y.height&&(s[u-1]=y.height):(h[u]=f,s[u]=y.height,g[u]=o?n[v]:0,w.Cartographic.clone(y,d),++u)}if(!(l||u<2))return h.length=u,s.length=u,g.length=u,{positions:h,topHeights:s,bottomHeights:g}}}(e,i,t,n);if(C.defined(a)){if(i=a.positions,t=a.topHeights,n=a.bottomHeights,3<=i.length){var l=E.EllipsoidTangentPlane.fromPoints(i,e).projectPointsOntoPlane(i);O.PolygonPipeline.computeWindingOrder2D(l)===O.WindingOrder.CLOCKWISE&&(i.reverse(),t.reverse(),n.reverse())}var h,s,g=i.length,p=g-2,d=A.CesiumMath.chordLength(r,e.maximumRadius),P=T;if(P.minDistance=d,P.ellipsoid=e,o){var c,u=0;for(c=0;c<g-1;c++)u+=b.PolylinePipeline.numberOfPoints(i[c],i[c+1],d)+1;h=new Float64Array(3*u),s=new Float64Array(3*u);var v=F,f=H;P.positions=v,P.height=f;var y=0;for(c=0;c<g-1;c++){v[0]=i[c],v[1]=i[c+1],f[0]=t[c],f[1]=t[c+1];var m=b.PolylinePipeline.generateArc(P);h.set(m,y),f[0]=n[c],f[1]=n[c+1],s.set(b.PolylinePipeline.generateArc(P),y),y+=m.length}}else P.positions=i,P.height=t,h=new Float64Array(b.PolylinePipeline.generateArc(P)),P.height=n,s=new Float64Array(b.PolylinePipeline.generateArc(P));return{bottomPositions:s,topPositions:h,numCorners:p}}},e.WallGeometryLibrary=i});
