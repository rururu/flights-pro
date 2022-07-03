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
define(["./when-a55a8a4c","./Check-bc1d37d9","./Math-73a8bd13","./Cartesian2-8c9f79ed","./Transforms-7a81c8c2","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-c2c50230","./GeometryAttribute-f9641809","./GeometryAttributes-1c7ce91d","./GeometryOffsetAttribute-9ecab91f"],function(c,e,t,d,p,a,n,y,C,l,b){"use strict";var A=new d.Cartesian3;function u(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=d.Cartesian3.clone(t),this._max=d.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}u.fromDimensions=function(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).dimensions,a=d.Cartesian3.multiplyByScalar(t,.5,new d.Cartesian3);return new u({minimum:d.Cartesian3.negate(a,new d.Cartesian3),maximum:a,offsetAttribute:e.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(e){return new u({minimum:e.minimum,maximum:e.maximum})},u.packedLength=2*d.Cartesian3.packedLength+1,u.pack=function(e,t,a){return a=c.defaultValue(a,0),d.Cartesian3.pack(e._min,t,a),d.Cartesian3.pack(e._max,t,a+d.Cartesian3.packedLength),t[a+2*d.Cartesian3.packedLength]=c.defaultValue(e._offsetAttribute,-1),t};var m=new d.Cartesian3,o=new d.Cartesian3,s={minimum:m,maximum:o,offsetAttribute:void 0};return u.unpack=function(e,t,a){t=c.defaultValue(t,0);var n=d.Cartesian3.unpack(e,t,m),i=d.Cartesian3.unpack(e,t+d.Cartesian3.packedLength,o),r=e[t+2*d.Cartesian3.packedLength];return c.defined(a)?(a._min=d.Cartesian3.clone(n,a._min),a._max=d.Cartesian3.clone(i,a._max),a._offsetAttribute=-1===r?void 0:r,a):(s.offsetAttribute=-1===r?void 0:r,new u(s))},u.createGeometry=function(e){var t=e._min,a=e._max;if(!d.Cartesian3.equals(t,a)){var n=new l.GeometryAttributes,i=new Uint16Array(24),r=new Float64Array(24);r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=a.x,r[4]=t.y,r[5]=t.z,r[6]=a.x,r[7]=a.y,r[8]=t.z,r[9]=t.x,r[10]=a.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=a.z,r[15]=a.x,r[16]=t.y,r[17]=a.z,r[18]=a.x,r[19]=a.y,r[20]=a.z,r[21]=t.x,r[22]=a.y,r[23]=a.z,n.position=new C.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),i[0]=4,i[1]=5,i[2]=5,i[3]=6,i[4]=6,i[5]=7,i[6]=7,i[7]=4,i[8]=0,i[9]=1,i[10]=1,i[11]=2,i[12]=2,i[13]=3,i[14]=3,i[15]=0,i[16]=0,i[17]=4,i[18]=1,i[19]=5,i[20]=2,i[21]=6,i[22]=3,i[23]=7;var u=d.Cartesian3.subtract(a,t,A),m=.5*d.Cartesian3.magnitude(u);if(c.defined(e._offsetAttribute)){var o=r.length,s=new Uint8Array(o/3),f=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1;b.arrayFill(s,f),n.applyOffset=new C.GeometryAttribute({componentDatatype:y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})}return new C.Geometry({attributes:n,indices:i,primitiveType:C.PrimitiveType.LINES,boundingSphere:new p.BoundingSphere(d.Cartesian3.ZERO,m),offsetAttribute:e._offsetAttribute})}},function(e,t){return c.defined(t)&&(e=u.unpack(e,t)),u.createGeometry(e)}});
