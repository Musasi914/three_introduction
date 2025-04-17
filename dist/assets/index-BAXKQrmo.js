(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uu="174",Cp=0,Zu=1,Pp=2,Ch=1,Dp=2,Pi=3,or=0,bn=1,Ui=2,nr=0,Ms=1,jl=2,ju=3,Ju=4,Lp=5,Cr=100,Up=101,Ip=102,Np=103,Fp=104,Op=200,Bp=201,zp=202,kp=203,Jl=204,Ql=205,Hp=206,Vp=207,Gp=208,Wp=209,Xp=210,Yp=211,qp=212,$p=213,Kp=214,ec=0,tc=1,nc=2,Cs=3,ic=4,rc=5,sc=6,ac=7,fu=0,Zp=1,jp=2,ir=0,Jp=1,Qp=2,em=3,tm=4,nm=5,im=6,rm=7,Ph=300,Ps=301,Ds=302,oc=303,lc=304,Ko=306,cc=1e3,Dr=1001,uc=1002,ci=1003,sm=1004,Ba=1005,mi=1006,sl=1007,Lr=1008,ki=1009,Dh=1010,Lh=1011,Sa=1012,hu=1013,Vr=1014,Ni=1015,La=1016,du=1017,pu=1018,Ls=1020,Uh=35902,Ih=1021,Nh=1022,li=1023,Fh=1024,Oh=1025,Ss=1026,Us=1027,Bh=1028,mu=1029,zh=1030,_u=1031,gu=1033,xo=33776,Mo=33777,So=33778,yo=33779,fc=35840,hc=35841,dc=35842,pc=35843,mc=36196,_c=37492,gc=37496,vc=37808,xc=37809,Mc=37810,Sc=37811,yc=37812,Ec=37813,Tc=37814,bc=37815,Ac=37816,wc=37817,Rc=37818,Cc=37819,Pc=37820,Dc=37821,Eo=36492,Lc=36494,Uc=36495,kh=36283,Ic=36284,Nc=36285,Fc=36286,am=3200,om=3201,vu=0,lm=1,Zi="",Zn="srgb",Is="srgb-linear",Io="linear",mt="srgb",jr=7680,Qu=519,cm=512,um=513,fm=514,Hh=515,hm=516,dm=517,pm=518,mm=519,ef=35044,tf="300 es",Fi=2e3,No=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=Math.PI/180,Oc=180/Math.PI;function Ua(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function _m(r,e){return(r%e+e)%e}function ol(r,e,t){return(1-t)*r+t*e}function qs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],T=i[4],v=i[7],R=i[2],w=i[5],b=i[8];return s[0]=a*_+o*E+l*R,s[3]=a*m+o*T+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*E+f*R,s[4]=c*m+u*T+f*w,s[7]=c*p+u*v+f*b,s[2]=d*_+h*E+g*R,s[5]=d*m+h*T+g*w,s[8]=d*p+h*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Xe;function Vh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gm(){const r=ya("canvas");return r.style.display="block",r}const nf={};function Er(r){r in nf||(nf[r]=!0,console.warn(r))}function vm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){const r={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Is]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:rf,fromXYZ:sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:rf,fromXYZ:sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const ct=Sm();function Bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=ya("canvas")),Jr.width=e.width,Jr.height=e.height;const n=Jr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Em=0;class xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(cl(i[a].image)):s.push(cl(i[a]))}else s=cl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ym.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class Mn extends Gs{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Dr,i=Dr,s=mi,a=Lr,o=li,l=ki,c=Mn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ua(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cc:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cc:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Ph;Mn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(h+1)/2,R=(p+1)/2,w=(u+d)/4,b=(f+_)/4,C=(g+m)/4;return T>v&&T>R?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=b/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=C/s),this.set(n,i,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bm extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gh extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ci,this.minFilter=ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Am extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ci,this.minFilter=ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-o;const p=l*d+c*h+u*g+f*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const R=Math.sqrt(T),w=Math.atan2(R,p*E);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*E;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new X,af=new Ia;class Na{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),ka.subVectors(this.max,$s),Qr.subVectors(e.a,$s),es.subVectors(e.b,$s),ts.subVectors(e.c,$s),Gi.subVectors(es,Qr),Wi.subVectors(ts,es),mr.subVectors(Qr,ts);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-mr.z,mr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,mr.z,0,-mr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-mr.y,mr.x,0];return!fl(t,Qr,es,ts,ka)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Qr,es,ts,ka))?!1:(Ha.crossVectors(Gi,Wi),t=[Ha.x,Ha.y,Ha.z],fl(t,Qr,es,ts,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new X,new X,new X,new X,new X,new X,new X,new X],ii=new X,za=new Na,Qr=new X,es=new X,ts=new X,Gi=new X,Wi=new X,mr=new X,$s=new X,ka=new X,Ha=new X,_r=new X;function fl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_r.fromArray(r,s);const o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wm=new Na,Ks=new X,hl=new X;class Mu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(hl)),this.expandByPoint(Ks.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new X,dl=new X,Va=new X,Xi=new X,pl=new X,Ga=new X,ml=new X;class Rm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dl.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Va),o=Xi.dot(this.direction),l=-Xi.dot(Va),c=Xi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(dl).addScaledVector(Va,d),h}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){pl.subVectors(t,e),Ga.subVectors(n,e),ml.crossVectors(pl,Ga);let a=this.direction.dot(ml),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(Ga.crossVectors(Xi,Ga));if(l<0)return null;const c=o*this.direction.dot(pl.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Pm)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Yi.crossVectors(n,Un),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Yi.crossVectors(n,Un)),Yi.normalize(),Wa.crossVectors(Un,Yi),i[0]=Yi.x,i[4]=Wa.x,i[8]=Un.x,i[1]=Yi.y,i[5]=Wa.y,i[9]=Un.y,i[2]=Yi.z,i[6]=Wa.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],R=n[15],w=i[0],b=i[4],C=i[8],M=i[12],x=i[1],P=i[5],N=i[9],B=i[13],Y=i[2],$=i[6],G=i[10],W=i[14],H=i[3],te=i[7],D=i[11],ce=i[15];return s[0]=a*w+o*x+l*Y+c*H,s[4]=a*b+o*P+l*$+c*te,s[8]=a*C+o*N+l*G+c*D,s[12]=a*M+o*B+l*W+c*ce,s[1]=u*w+f*x+d*Y+h*H,s[5]=u*b+f*P+d*$+h*te,s[9]=u*C+f*N+d*G+h*D,s[13]=u*M+f*B+d*W+h*ce,s[2]=g*w+_*x+m*Y+p*H,s[6]=g*b+_*P+m*$+p*te,s[10]=g*C+_*N+m*G+p*D,s[14]=g*M+_*B+m*W+p*ce,s[3]=E*w+T*x+v*Y+R*H,s[7]=E*b+T*P+v*$+R*te,s[11]=E*C+T*N+v*G+R*D,s[15]=E*M+T*B+v*W+R*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*h-n*l*h)+_*(+t*l*h-t*c*d+s*a*d-i*a*h+i*c*u-s*l*u)+m*(+t*c*f-t*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+p*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,T=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,v=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,R=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,w=t*E+n*T+i*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*b,e[4]=T*b,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*h+t*l*h)*b,e[8]=v*b,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*b,e[12]=R*b,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,E=l*c,T=l*u,v=l*f,R=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*R,i[1]=(h+v)*R,i[2]=(g-T)*R,i[3]=0,i[4]=(h-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+T)*b,i[9]=(m-E)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);const c=1/s,u=1/a,f=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let h,g;if(o===Fi)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===No)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),d=(t+e)*c,h=(n+i)*u;let g,_;if(o===Fi)g=(a+s)*f,_=-2*f;else if(o===No)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new X,ri=new Dt,Cm=new X(0,0,0),Pm=new X(1,1,1),Yi=new X,Wa=new X,Un=new X,of=new Dt,lf=new Ia;class ui{constructor(e=0,t=0,n=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const cf=new X,is=new Ia,wi=new Dt,Xa=new X,Zs=new X,Lm=new X,Um=new Ia,uf=new X(1,0,0),ff=new X(0,1,0),hf=new X(0,0,1),df={type:"added"},Im={type:"removed"},rs={type:"childadded",child:null},_l={type:"childremoved",child:null};class ln extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new X,t=new ui,n=new Ia,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Xe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Zs,Xa,this.up):wi.lookAt(Xa,Zs,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),is.setFromRotationMatrix(wi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Im),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ln.DEFAULT_UP=new X(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new X,Ri=new X,gl=new X,Ci=new X,ss=new X,as=new X,pf=new X,vl=new X,xl=new X,Ml=new X,Sl=new Ct,yl=new Ct,El=new Ct;class oi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),si.subVectors(e,t),i.cross(si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){si.subVectors(i,t),Ri.subVectors(n,t),gl.subVectors(e,t);const a=si.dot(si),o=si.dot(Ri),l=si.dot(gl),c=Ri.dot(Ri),u=Ri.dot(gl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Sl.setScalar(0),yl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Sl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(El,s.z),a}static isFrontFacing(e,t,n,i){return si.subVectors(n,t),Ri.subVectors(e,t),si.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),si.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ss.subVectors(i,n),as.subVectors(s,n),vl.subVectors(e,n);const l=ss.dot(vl),c=as.dot(vl);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,i);const u=ss.dot(xl),f=as.dot(xl);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ss,a);Ml.subVectors(e,s);const h=ss.dot(Ml),g=as.dot(Ml);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(as,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return pf.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(pf,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(ss,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Tl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=_m(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Tl(a,s,e+1/3),this.g=Tl(a,s,e),this.b=Tl(a,s,e-1/3)}return ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return ct.fromWorkingColorSpace(tn.copy(this),e),Math.round(it(tn.r*255,0,255))*65536+Math.round(it(tn.g*255,0,255))*256+Math.round(it(tn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,s=tn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Zn){ct.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ya);const n=ol(qi.h,Ya.h,t),i=ol(qi.s,Ya.s,t),s=ol(qi.l,Ya.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new rt;rt.NAMES=Xh;let Nm=0;class Ws extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=Ms,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yh extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new X,qa=new ut;let Fm=0;class xi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ef&&(e.usage=this.usage),e}}class qh extends xi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends xi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mi extends xi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Om=0;const $n=new Dt,bl=new ln,os=new X,In=new Na,js=new Na,qt=new X;class hr extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?$h:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(In.min,js.min),In.expandByPoint(qt),qt.addVectors(In.max,js.max),In.expandByPoint(qt)):(In.expandByPoint(js.min),In.expandByPoint(js.max))}In.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),qt.add(os)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new X,l[C]=new X;const c=new X,u=new X,f=new X,d=new ut,h=new ut,g=new ut,_=new X,m=new X;function p(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[M].add(_),o[x].add(_),l[C].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,M=E.length;C<M;++C){const x=E[C],P=x.start,N=x.count;for(let B=P,Y=P+N;B<Y;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new X,v=new X,R=new X,w=new X;function b(C){R.fromBufferAttribute(i,C),w.copy(R);const M=o[C];T.copy(M),T.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(w,M);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,P)}for(let C=0,M=E.length;C<M;++C){const x=E[C],P=x.start,N=x.count;for(let B=P,Y=P+N;B<Y;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new xi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mf=new Dt,gr=new Rm,$a=new Mu,_f=new X,Ka=new X,Za=new X,ja=new X,Al=new X,Ja=new X,gf=new X,Qa=new X;class Tn extends ln{constructor(e=new hr,t=new Yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Al.fromBufferAttribute(f,e),a?Ja.addScaledVector(Al,u):Ja.addScaledVector(Al.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!($a.containsPoint(gr.origin)===!1&&(gr.intersectSphere($a,_f)===null||gr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(mf.copy(s).invert(),gr.copy(e.ray).applyMatrix4(mf),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=E,R=T;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);i=eo(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=eo(this,a,e,n,c,u,f,E,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=E,R=T;v<R;v+=3){const w=v,b=v+1,C=v+2;i=eo(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,v=m+2;i=eo(this,a,e,n,c,u,f,E,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bm(r,e,t,n,i,s,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===or,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:r}}function eo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ka),r.getVertexPosition(l,Za),r.getVertexPosition(c,ja);const u=Bm(r,e,t,n,Ka,Za,ja,gf);if(u){const f=new X;oi.getBarycoord(gf,Ka,Za,ja,f),i&&(u.uv=oi.getInterpolatedAttribute(i,o,l,c,f,new ut)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,l,c,f,new ut)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};oi.getNormal(Ka,Za,ja,d.normal),u.face=d,u.barycoord=f}return u}class Fa extends hr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(u,3)),this.setAttribute("uv",new Mi(f,2));function g(_,m,p,E,T,v,R,w,b,C,M){const x=v/b,P=R/C,N=v/2,B=R/2,Y=w/2,$=b+1,G=C+1;let W=0,H=0;const te=new X;for(let D=0;D<G;D++){const ce=D*P-B;for(let Le=0;Le<$;Le++){const qe=Le*x-N;te[_]=qe*E,te[m]=ce*T,te[p]=Y,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),f.push(Le/b),f.push(1-D/C),W+=1}}for(let D=0;D<C;D++)for(let ce=0;ce<b;ce++){const Le=d+ce+$*D,qe=d+ce+$*(D+1),K=d+(ce+1)+$*(D+1),ne=d+(ce+1)+$*D;l.push(Le,qe,ne),l.push(qe,K,ne),H+=6}o.addGroup(h,H,M),h+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Ns(r[t]);for(const i in n)e[i]=n[i]}return e}function zm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const km={clone:Ns,merge:pn};var Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zh extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new X,vf=new ut,xf=new ut;class jn extends Zh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,vf,xf),t.subVectors(xf,vf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(al*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class Gm extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jn(ls,cs,e,t);i.layers=this.layers,this.add(i);const s=new jn(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new jn(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new jn(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new jn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new jn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jh extends Mn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wm extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fa(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:nr});s.uniforms.tEquirect.value=t;const a=new Tn(i,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=mi),new Gm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class _i extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Su{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new Su(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ym extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rl=new X,qm=new X,$m=new Xe;class Tr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rl.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$m.getNormalMatrix(e),i=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Mu,to=new X;class yu{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,a=new Tr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],T=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-h,v-p).normalize(),n[1].setComponents(l+s,d+c,m+h,v+p).normalize(),n[2].setComponents(l+a,d+u,m+g,v+E).normalize(),n[3].setComponents(l-a,d-u,m-g,v-E).normalize(),n[4].setComponents(l-o,d-f,m-_,v-T).normalize(),t===Fi)n[5].setComponents(l+o,d+f,m+_,v+T).normalize();else if(t===No)n[5].setComponents(o,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends Mn{constructor(e,t,n,i,s,a,o,l,c,u=Ss){if(u!==Ss&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ss&&(n=Vr),n===void 0&&u===Us&&(n=Ls),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zo extends hr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let T=0;T<c;T++){const v=T*f-s;g.push(v,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,v=E+c*(p+1),R=E+1+c*(p+1),w=E+1+c*p;h.push(T,v,w),h.push(v,R,w)}this.setIndex(h),this.setAttribute("position",new Mi(g,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wr extends hr{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new X,d=new X,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],T=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const w=R/t;f.x=-e*Math.cos(i+w*s)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(i+w*s)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-T),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const T=u[p][E+1],v=u[p][E],R=u[p+1][E],w=u[p+1][E+1];(p!==0||a>0)&&h.push(T,v,w),(p!==n-1||l<Math.PI)&&h.push(v,R,w)}this.setIndex(h),this.setAttribute("position",new Mi(g,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jo extends Ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Km extends Ws{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jm extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Qh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const Jm=new Qh;class Eu{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Eu.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qm extends Eu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mf.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ya("img");function l(){u(),Mf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Jo extends Eu{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,a=new Qm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class e_ extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cl=new Dt,Sf=new X,yf=new X;class t_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ed extends Zh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n_ extends t_{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i_ extends e_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r_ extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Ef(r,e,t,n){const i=s_(n);switch(t){case Ih:return r*e;case Fh:return r*e;case Oh:return r*e*2;case Bh:return r*e/i.components*i.byteLength;case mu:return r*e/i.components*i.byteLength;case zh:return r*e*2/i.components*i.byteLength;case _u:return r*e*2/i.components*i.byteLength;case Nh:return r*e*3/i.components*i.byteLength;case li:return r*e*4/i.components*i.byteLength;case gu:return r*e*4/i.components*i.byteLength;case xo:case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case So:case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hc:case pc:return Math.max(r,16)*Math.max(e,8)/4;case fc:case dc:return Math.max(r,8)*Math.max(e,8)/2;case mc:case _c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Lc:case Uc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kh:case Ic:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Nc:case Fc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s_(r){switch(r){case ki:case Dh:return{byteLength:1,components:1};case Sa:case Lh:case La:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case Vr:case hu:case Ni:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function td(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function a_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:o_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:f_,alphatest_pars_fragment:h_,aomap_fragment:d_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:__,begin_vertex:g_,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:M_,bumpmap_pars_fragment:S_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:b_,color_fragment:A_,color_pars_fragment:w_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:L_,displacementmap_pars_vertex:U_,displacementmap_vertex:I_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:k_,envmap_pars_fragment:H_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:Q_,envmap_vertex:G_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:q_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:K_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:j_,lights_pars_begin:J_,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:sg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:_g,metalnessmap_fragment:gg,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:Mg,morphnormal_vertex:Sg,morphtarget_pars_vertex:yg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:bg,normal_pars_fragment:Ag,normal_pars_vertex:wg,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ug,opaque_fragment:Ig,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:Yg,skinning_pars_vertex:qg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Zg,specularmap_pars_fragment:jg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:r0,worldpos_vertex:s0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:f0,depth_vert:h0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:_0,equirect_frag:g0,linedashed_vert:v0,linedashed_frag:x0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:y0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:b0,meshnormal_vert:A0,meshnormal_frag:w0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:D0,meshtoon_vert:L0,meshtoon_frag:U0,points_vert:I0,points_frag:N0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},_e={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},di={basic:{uniforms:pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:pn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:pn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:pn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:pn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:pn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:pn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:pn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:pn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:pn([_e.common,_e.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:pn([_e.lights,_e.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const no={r:0,b:0,g:0},xr=new ui,k0=new Dt;function H0(r,e,t,n,i,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const R=g(T);R===null?p(o,l):R&&R.isColor&&(p(R,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Ko)?(u===void 0&&(u=new Tn(new Fa(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Ns(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xr.copy(v.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(xr)),u.material.toneMapped=ct.getTransfer(R.colorSpace)!==mt,(f!==R||d!==R.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,h=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Tn(new Zo(2,2),new lr({name:"BackgroundMaterial",uniforms:Ns(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(R.colorSpace)!==mt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,h=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,v){T.getRGB(no,Kh(r)),n.buffers.color.setClear(no.r,no.g,no.b,v,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,v=1){o.set(T),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:m,dispose:E}}function V0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,P,N,B,Y){let $=!1;const G=f(B,N,P);s!==G&&(s=G,c(s.object)),$=h(x,B,N,Y),$&&g(x,B,N,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(x,P,N,B),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,P,N){const B=N.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let $=Y[P.id];$===void 0&&($={},Y[P.id]=$);let G=$[B];return G===void 0&&(G=d(l()),$[B]=G),G}function d(x){const P=[],N=[],B=[];for(let Y=0;Y<t;Y++)P[Y]=0,N[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,P,N,B){const Y=s.attributes,$=P.attributes;let G=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){const D=Y[H];let ce=$[H];if(ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(x,P,N,B){const Y={},$=P.attributes;let G=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){let D=$[H];D===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),Y[H]=ce,G++}s.attributes=Y,s.attributesNum=G,s.index=B}function _(){const x=s.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const N=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;N[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),Y[x]!==P&&(r.vertexAttribDivisor(x,P),Y[x]=P)}function E(){const x=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==x[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function T(x,P,N,B,Y,$,G){G===!0?r.vertexAttribIPointer(x,P,N,Y,$):r.vertexAttribPointer(x,P,N,B,Y,$)}function v(x,P,N,B){_();const Y=B.attributes,$=N.getAttributes(),G=P.defaultAttributeValues;for(const W in $){const H=$[W];if(H.location>=0){let te=Y[W];if(te===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const D=te.normalized,ce=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const qe=Le.buffer,K=Le.type,ne=Le.bytesPerElement,me=K===r.INT||K===r.UNSIGNED_INT||te.gpuType===hu;if(te.isInterleavedBufferAttribute){const ie=te.data,Te=ie.stride,Oe=te.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,ie.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)m(H.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Pe=0;Pe<H.locationSize;Pe++)T(H.location+Pe,ce/H.locationSize,K,D,Te*ne,(Oe+ce/H.locationSize*Pe)*ne,me)}else{if(te.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)p(H.location+ie,te.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<H.locationSize;ie++)m(H.location+ie);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ie=0;ie<H.locationSize;ie++)T(H.location+ie,ce/H.locationSize,K,D,ce*ne,ce/H.locationSize*ie*ne,me)}}else if(G!==void 0){const D=G[W];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}E()}function R(){C();for(const x in n){const P=n[x];for(const N in P){const B=P[N];for(const Y in B)u(B[Y].object),delete B[Y];delete P[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const N in P){const B=P[N];for(const Y in B)u(B[Y].object),delete B[Y];delete P[N]}delete n[x.id]}function b(x){for(const P in n){const N=n[P];if(N[x.id]===void 0)continue;const B=N[x.id];for(const Y in B)u(B[Y].object),delete B[Y];delete N[x.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function G0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==li&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ki&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ni&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function X0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Tr,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let v=p.clippingState||null;l.value=v,v=u(g,d,T,h);for(let R=0;R!==T;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=h;T!==_;++T,v+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Y0(r){let e=new WeakMap;function t(a,o){return o===oc?a.mapping=Ps:o===lc&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oc||o===lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const _s=4,Tf=[.125,.215,.35,.446,.526,.582],Pr=20,Pl=new ed,bf=new rt;let Dl=null,Ll=0,Ul=0,Il=!1;const br=(1+Math.sqrt(5))/2,us=1/br,Af=[new X(-br,us,0),new X(br,us,0),new X(-us,0,br),new X(us,0,br),new X(0,br,-us),new X(0,br,us),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],q0=new X;class wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=q0}=s;Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Ll,Ul),this._renderer.xr.enabled=Il,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:La,format:li,colorSpace:Is,depthBuffer:!1},i=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(s)),this._blurMaterial=K0(s,e,t)}return i}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,i,s){const l=new jn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(bf),f.toneMapping=ir,f.autoClear=!1;const g=new Yh({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Tn(new Fa,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(bf),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const v=this._cubeSize;io(i,T*v,E>2?v:0,v,v),f.setRenderTarget(i),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ps||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Af[(i-s-1)%Af.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Tn(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Pr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);const p=[];let E=0;for(let b=0;b<Pr;++b){const C=b/_,M=Math.exp(-C*C/2);p.push(M),b===0?E+=M:b<m&&(E+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const v=this._sizeLods[i],R=3*v*(i>T-_s?i-T+_s:0),w=4*(this._cubeSize-v);io(t,R,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Pl)}}function $0(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Tf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-_s?l=Tf[a-r+_s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*h),T=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let w=0;w<h;w++){const b=w%3*2/3-1,C=w>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(M,_*g*w),T.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const R=new hr;R.setAttribute("position",new xi(E,_)),R.setAttribute("uv",new xi(T,m)),R.setAttribute("faceIndex",new xi(v,p)),e.push(R),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(r,e,t){const n=new Gr(r,e,t);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function K0(r,e,t){const n=new Float32Array(Pr),i=new X(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Cf(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Pf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oc||l===lc,u=l===Ps||l===Ds;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wf(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new wf(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function j0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let T=0,v=E.length;T<v;T+=3){const R=E[T+0],w=E[T+1],b=E[T+2];d.push(R,w,w,b,b,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){const R=T+0,w=T+1,b=T+2;d.push(R,w,w,b,b,R)}}else return;const m=new(Vh(d)?$h:qh)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Q0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=h[E]*_[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ev(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tv(r,e,t){const n=new WeakMap,i=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var h=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*w*4*f),C=new Gh(b,R,w,f);C.type=Ni,C.needsUpdate=!0;const M=v*4;for(let P=0;P<f;P++){const N=p[P],B=E[P],Y=T[P],$=R*w*4*P;for(let G=0;G<N.count;G++){const W=G*M;g===!0&&(i.fromBufferAttribute(N,G),b[$+W+0]=i.x,b[$+W+1]=i.y,b[$+W+2]=i.z,b[$+W+3]=0),_===!0&&(i.fromBufferAttribute(B,G),b[$+W+4]=i.x,b[$+W+5]=i.y,b[$+W+6]=i.z,b[$+W+7]=0),m===!0&&(i.fromBufferAttribute(Y,G),b[$+W+8]=i.x,b[$+W+9]=i.y,b[$+W+10]=i.z,b[$+W+11]=Y.itemSize===4?i.w:1)}}d={count:f,texture:C,size:new ut(R,w)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function nv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const nd=new Mn,Df=new Jh(1,1),id=new Gh,rd=new Am,sd=new jh,Lf=[],Uf=[],If=new Float32Array(16),Nf=new Float32Array(9),Ff=new Float32Array(4);function Xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Lf[i];if(s===void 0&&(s=new Float32Array(i),Lf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qo(r,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2fv(this.addr,e),Yt(t,e)}}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;r.uniform3fv(this.addr,e),Yt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4fv(this.addr,e),Yt(t,e)}}function ov(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Ff.set(n),r.uniformMatrix2fv(this.addr,!1,Ff),Yt(t,n)}}function lv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Nf.set(n),r.uniformMatrix3fv(this.addr,!1,Nf),Yt(t,n)}}function cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;If.set(n),r.uniformMatrix4fv(this.addr,!1,If),Yt(t,n)}}function uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2iv(this.addr,e),Yt(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3iv(this.addr,e),Yt(t,e)}}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4iv(this.addr,e),Yt(t,e)}}function pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2uiv(this.addr,e),Yt(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3uiv(this.addr,e),Yt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4uiv(this.addr,e),Yt(t,e)}}function vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Df.compareFunction=Hh,s=Df):s=nd,t.setTexture2D(e||s,i)}function xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rd,i)}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function Sv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||id,i)}function yv(r){switch(r){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}function Ev(r,e){r.uniform1fv(this.addr,e)}function Tv(r,e){const t=Xs(e,this.size,2);r.uniform2fv(this.addr,t)}function bv(r,e){const t=Xs(e,this.size,3);r.uniform3fv(this.addr,t)}function Av(r,e){const t=Xs(e,this.size,4);r.uniform4fv(this.addr,t)}function wv(r,e){const t=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rv(r,e){const t=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cv(r,e){const t=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pv(r,e){r.uniform1iv(this.addr,e)}function Dv(r,e){r.uniform2iv(this.addr,e)}function Lv(r,e){r.uniform3iv(this.addr,e)}function Uv(r,e){r.uniform4iv(this.addr,e)}function Iv(r,e){r.uniform1uiv(this.addr,e)}function Nv(r,e){r.uniform2uiv(this.addr,e)}function Fv(r,e){r.uniform3uiv(this.addr,e)}function Ov(r,e){r.uniform4uiv(this.addr,e)}function Bv(r,e,t){const n=this.cache,i=e.length,s=Qo(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||nd,s[a])}function zv(r,e,t){const n=this.cache,i=e.length,s=Qo(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rd,s[a])}function kv(r,e,t){const n=this.cache,i=e.length,s=Qo(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sd,s[a])}function Hv(r,e,t){const n=this.cache,i=e.length,s=Qo(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||id,s[a])}function Vv(r){switch(r){case 5126:return Ev;case 35664:return Tv;case 35665:return bv;case 35666:return Av;case 35674:return wv;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Uv;case 5125:return Iv;case 36294:return Nv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}class Gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class Xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Of(r,e){r.seq.push(e),r.map[e.id]=e}function Yv(r,e,t){const n=r.name,i=n.length;for(Nl.lastIndex=0;;){const s=Nl.exec(n),a=Nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Of(t,c===void 0?new Gv(o,r,e):new Wv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Xv(o),Of(t,f)),t=f}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Yv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Bf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qv=37297;let $v=0;function Kv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zf=new Xe;function Zv(r){ct._getMatrix(zf,ct.workingColorSpace,r);const e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case Io:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Kv(r.getShaderSource(e),a)}else return i}function jv(r,e){const t=Zv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(r,e){let t;switch(e){case Jp:t="Linear";break;case Qp:t="Reinhard";break;case em:t="Cineon";break;case tm:t="ACESFilmic";break;case im:t="AgX";break;case rm:t="Neutral";break;case nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new X;function Qv(){ct.getLuminanceCoefficients(ro);const r=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function tx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ta(r){return r!==""}function Hf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(r){return r.replace(ix,sx)}const rx=new Map;function sx(r,e){let t=Ye[e];if(t===void 0){const n=rx.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(r){return r.replace(ax,ox)}function ox(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ps:case Ds:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function fx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function hx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lx(t),c=cx(t),u=ux(t),f=fx(t),d=hx(t),h=ex(t),g=tx(s),_=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(m=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ir?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Bc(a),a=Hf(a,t),a=Vf(a,t),o=Bc(o),o=Hf(o,t),o=Vf(o,t),a=Gf(a),o=Gf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,v=E+p+o,R=Bf(i,i.VERTEX_SHADER,T),w=Bf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),Y=i.getShaderInfoLog(w).trim();let $=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const W=kf(i,R,"vertex"),H=kf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+W+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||Y==="")&&(G=!1);G&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(R),i.deleteShader(w),C=new To(i,_),M=nx(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,qv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _x(e),t.set(e,n)),n}}class _x{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function gx(r,e,t,n,i,s,a){const o=new Wh,l=new mx,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,N,B){const Y=N.fog,$=B.geometry,G=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),H=W&&W.mapping===Ko?W.image.height:null,te=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=D!==void 0?D.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let qe,K,ne,me;if(te){const ge=di[te];qe=ge.vertexShader,K=ge.fragmentShader}else qe=M.vertexShader,K=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const ie=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,et=!!M.map,Ze=!!M.matcap,Me=!!W,L=!!M.aoMap,_t=!!M.lightMap,Be=!!M.bumpMap,O=!!M.normalMap,ye=!!M.displacementMap,nt=!!M.emissiveMap,be=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,z=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,ue=M.transmission>0,ae=S&&!!M.anisotropyMap,he=z&&!!M.clearcoatMap,Ve=z&&!!M.clearcoatNormalMap,re=z&&!!M.clearcoatRoughnessMap,se=J&&!!M.iridescenceMap,Ue=J&&!!M.iridescenceThicknessMap,De=Z&&!!M.sheenColorMap,ve=Z&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,Fe=!!M.specularColorMap,at=!!M.specularIntensityMap,U=ue&&!!M.transmissionMap,le=ue&&!!M.thicknessMap,q=!!M.gradientMap,j=!!M.alphaMap,oe=M.alphaTest>0,fe=!!M.alphaHash,ze=!!M.extensions;let ot=ir;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ot=r.toneMapping);const wt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:K,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Is,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Ze,envMap:Me,envMapMode:Me&&W.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:_t,bumpMap:Be,normalMap:O,displacementMap:d&&ye,emissiveMap:nt,normalMapObjectSpace:O&&M.normalMapType===lm,normalMapTangentSpace:O&&M.normalMapType===vu,metalnessMap:be,roughnessMap:A,anisotropy:S,anisotropyMap:ae,clearcoat:z,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:re,dispersion:Q,iridescence:J,iridescenceMap:se,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:at,transmission:ue,transmissionMap:U,thicknessMap:le,gradientMap:q,opaque:M.transparent===!1&&M.blending===Ms&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:oe,alphaHash:fe,combine:M.combine,mapUv:et&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:_t&&_(M.lightMap.channel),bumpMapUv:Be&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:ye&&_(M.displacementMap.channel),emissiveMapUv:nt&&_(M.emissiveMap.channel),metalnessMapUv:be&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:he&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Ge&&_(M.specularMap.channel),specularColorMapUv:Fe&&_(M.specularColorMap.channel),specularIntensityMapUv:at&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(O||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(et||j),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&ct.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ui,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(x,M),T(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function T(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=g[M.type];let P;if(x){const N=di[x];P=km.clone(N.uniforms)}else P=M.uniforms;return P}function R(M,x){let P;for(let N=0,B=u.length;N<B;N++){const Y=u[N];if(Y.cacheKey===x){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new dx(r,x,M,s),u.push(P)),P}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function vx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function xx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||xx),n.length>1&&n.sort(d||Xf),i.length>1&&i.sort(d||Xf)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Mx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Yf,r.set(n,[a])):i>=s.length?(a=new Yf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Sx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function yx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ex=0;function Tx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bx(r){const e=new Sx,t=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Dt,a=new Dt;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,E=0,T=0,v=0,R=0,w=0,b=0;c.sort(Tx);for(let M=0,x=c.length;M<x;M++){const P=c[M],N=P.color,B=P.intensity,Y=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*B,f+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);b++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,H=t.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=$,n.directionalShadowMatrix[h]=P.shadow.matrix,E++}n.directional[h]=G,h++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const W=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,W.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const W=P.shadow,H=t.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,n.version=Ex++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(T.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function qf(r){const e=new bx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ax(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new qf(r),e.set(i,[o])):s>=a.length?(o=new qf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cx(r,e,t){let n=new yu;const i=new ut,s=new ut,a=new Ct,o=new Zm({depthPacking:om}),l=new jm,c={},u=t.maxTextureSize,f={[or]:bn,[bn]:or,[Ui]:Ui},d=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:wx,fragmentShader:Rx}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new hr;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(nr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Pi&&this.type===Pi,Y=p===Pi&&this.type!==Pi;for(let $=0,G=w.length;$<G;$++){const W=w[$],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||B===!0||Y===!0){const ce=this.type!==Pi?{minFilter:ci,magFilter:ci}:{};H.map!==null&&H.map.dispose(),H.map=new Gr(i.x,i.y,ce),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let ce=0;ce<D;ce++){const Le=H.getViewport(ce);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),N.viewport(a),H.updateMatrices(W,ce),n=H.getFrustum(),v(b,C,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Pi&&E(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function E(w,b){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,h,_,null)}function T(w,b,C,M){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=x.uuid,B=b.uuid;let Y=c[N];Y===void 0&&(Y={},c[N]=Y);let $=Y[B];$===void 0&&($=x.clone(),Y[B]=$,b.addEventListener("dispose",R)),x=$}if(x.visible=b.visible,x.wireframe=b.wireframe,M===Pi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=C}return x}function v(w,b,C,M,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),Y=w.material;if(Array.isArray(Y)){const $=B.groups;for(let G=0,W=$.length;G<W;G++){const H=$[G],te=Y[H.materialIndex];if(te&&te.visible){const D=T(w,te,M,x);w.onBeforeShadow(r,w,b,C,B,D,H),r.renderBufferDirect(C,null,B,D,w,H),w.onAfterShadow(r,w,b,C,B,D,H)}}}else if(Y.visible){const $=T(w,Y,M,x);w.onBeforeShadow(r,w,b,C,B,$,null),r.renderBufferDirect(C,null,B,$,w,null),w.onAfterShadow(r,w,b,C,B,$,null)}}const N=w.children;for(let B=0,Y=N.length;B<Y;B++)v(N[B],b,C,M,x)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const M=c[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Px={[ec]:tc,[nc]:sc,[ic]:ac,[Cs]:rc,[tc]:ec,[sc]:nc,[ac]:ic,[rc]:Cs};function Dx(r,e){function t(){let U=!1;const le=new Ct;let q=null;const j=new Ct(0,0,0,0);return{setMask:function(oe){q!==oe&&!U&&(r.colorMask(oe,oe,oe,oe),q=oe)},setLocked:function(oe){U=oe},setClear:function(oe,fe,ze,ot,wt){wt===!0&&(oe*=ot,fe*=ot,ze*=ot),le.set(oe,fe,ze,ot),j.equals(le)===!1&&(r.clearColor(oe,fe,ze,ot),j.copy(le))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,q=null,j=null,oe=null;return{setReversed:function(fe){if(le!==fe){const ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ot=oe;oe=null,this.setClear(ot)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?ie(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(fe){q!==fe&&!U&&(r.depthMask(fe),q=fe)},setFunc:function(fe){if(le&&(fe=Px[fe]),j!==fe){switch(fe){case ec:r.depthFunc(r.NEVER);break;case tc:r.depthFunc(r.ALWAYS);break;case nc:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case ic:r.depthFunc(r.EQUAL);break;case rc:r.depthFunc(r.GEQUAL);break;case sc:r.depthFunc(r.GREATER);break;case ac:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=fe}},setLocked:function(fe){U=fe},setClear:function(fe){oe!==fe&&(le&&(fe=1-fe),r.clearDepth(fe),oe=fe)},reset:function(){U=!1,q=null,j=null,oe=null,le=!1}}}function i(){let U=!1,le=null,q=null,j=null,oe=null,fe=null,ze=null,ot=null,wt=null;return{setTest:function(ge){U||(ge?ie(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(ge){le!==ge&&!U&&(r.stencilMask(ge),le=ge)},setFunc:function(ge,Ae,We){(q!==ge||j!==Ae||oe!==We)&&(r.stencilFunc(ge,Ae,We),q=ge,j=Ae,oe=We)},setOp:function(ge,Ae,We){(fe!==ge||ze!==Ae||ot!==We)&&(r.stencilOp(ge,Ae,We),fe=ge,ze=Ae,ot=We)},setLocked:function(ge){U=ge},setClear:function(ge){wt!==ge&&(r.clearStencil(ge),wt=ge)},reset:function(){U=!1,le=null,q=null,j=null,oe=null,fe=null,ze=null,ot=null,wt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,R=null,w=null,b=new rt(0,0,0),C=0,M=!1,x=null,P=null,N=null,B=null,Y=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=W>=2);let te=null,D={};const ce=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),qe=new Ct().fromArray(ce),K=new Ct().fromArray(Le);function ne(U,le,q,j){const oe=new Uint8Array(4),fe=r.createTexture();r.bindTexture(U,fe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<q;ze++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(le+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return fe}const me={};me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(Cs),Be(!1),O(Zu),ie(r.CULL_FACE),L(nr);function ie(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function Te(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Oe(U,le){return f[U]!==le?(r.bindFramebuffer(U,le),f[U]=le,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(U,le){let q=h,j=!1;if(U){q=d.get(le),q===void 0&&(q=[],d.set(le,q));const oe=U.textures;if(q.length!==oe.length||q[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,ze=oe.length;fe<ze;fe++)q[fe]=r.COLOR_ATTACHMENT0+fe;q.length=oe.length,j=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,j=!0);j&&r.drawBuffers(q)}function et(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Ze={[Cr]:r.FUNC_ADD,[Up]:r.FUNC_SUBTRACT,[Ip]:r.FUNC_REVERSE_SUBTRACT};Ze[Np]=r.MIN,Ze[Fp]=r.MAX;const Me={[Op]:r.ZERO,[Bp]:r.ONE,[zp]:r.SRC_COLOR,[Jl]:r.SRC_ALPHA,[Xp]:r.SRC_ALPHA_SATURATE,[Gp]:r.DST_COLOR,[Hp]:r.DST_ALPHA,[kp]:r.ONE_MINUS_SRC_COLOR,[Ql]:r.ONE_MINUS_SRC_ALPHA,[Wp]:r.ONE_MINUS_DST_COLOR,[Vp]:r.ONE_MINUS_DST_ALPHA,[Yp]:r.CONSTANT_COLOR,[qp]:r.ONE_MINUS_CONSTANT_COLOR,[$p]:r.CONSTANT_ALPHA,[Kp]:r.ONE_MINUS_CONSTANT_ALPHA};function L(U,le,q,j,oe,fe,ze,ot,wt,ge){if(U===nr){_===!0&&(Te(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),U!==Lp){if(U!==m||ge!==M){if((p!==Cr||v!==Cr)&&(r.blendEquation(r.FUNC_ADD),p=Cr,v=Cr),ge)switch(U){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jl:r.blendFunc(r.ONE,r.ONE);break;case ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ju:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ju:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,T=null,R=null,w=null,b.set(0,0,0),C=0,m=U,M=ge}return}oe=oe||le,fe=fe||q,ze=ze||j,(le!==p||oe!==v)&&(r.blendEquationSeparate(Ze[le],Ze[oe]),p=le,v=oe),(q!==E||j!==T||fe!==R||ze!==w)&&(r.blendFuncSeparate(Me[q],Me[j],Me[fe],Me[ze]),E=q,T=j,R=fe,w=ze),(ot.equals(b)===!1||wt!==C)&&(r.blendColor(ot.r,ot.g,ot.b,wt),b.copy(ot),C=wt),m=U,M=!1}function _t(U,le){U.side===Ui?Te(r.CULL_FACE):ie(r.CULL_FACE);let q=U.side===bn;le&&(q=!q),Be(q),U.blending===Ms&&U.transparent===!1?L(nr):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){x!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),x=U)}function O(U){U!==Cp?(ie(r.CULL_FACE),U!==P&&(U===Zu?r.cullFace(r.BACK):U===Pp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),P=U}function ye(U){U!==N&&(G&&r.lineWidth(U),N=U)}function nt(U,le,q){U?(ie(r.POLYGON_OFFSET_FILL),(B!==le||Y!==q)&&(r.polygonOffset(le,q),B=le,Y=q)):Te(r.POLYGON_OFFSET_FILL)}function be(U){U?ie(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function A(U){U===void 0&&(U=r.TEXTURE0+$-1),te!==U&&(r.activeTexture(U),te=U)}function S(U,le,q){q===void 0&&(te===null?q=r.TEXTURE0+$-1:q=te);let j=D[q];j===void 0&&(j={type:void 0,texture:void 0},D[q]=j),(j.type!==U||j.texture!==le)&&(te!==q&&(r.activeTexture(q),te=q),r.bindTexture(U,le||me[U]),j.type=U,j.texture=le)}function z(){const U=D[te];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){qe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),qe.copy(U))}function ve(U){K.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Ge(U,le){let q=c.get(le);q===void 0&&(q=new WeakMap,c.set(le,q));let j=q.get(U);j===void 0&&(j=r.getUniformBlockIndex(le,U.name),q.set(U,j))}function Fe(U,le){const j=c.get(le).get(U);l.get(le)!==j&&(r.uniformBlockBinding(le,j,U.__bindingPointIndex),l.set(le,j))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,D={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,R=null,w=null,b=new rt(0,0,0),C=0,M=!1,x=null,P=null,N=null,B=null,Y=null,qe.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Te,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:et,setBlending:L,setMaterial:_t,setFlipSided:Be,setCullFace:O,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:be,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:se,texImage3D:Ue,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:Ve,texStorage3D:re,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:De,viewport:ve,reset:at}}function Lx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return h?new OffscreenCanvas(A,S):ya("canvas")}function _(A,S,z){let Q=1;const J=be(A);if((J.width>z||J.height>z)&&(Q=z/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*J.width),ue=Math.floor(Q*J.height);f===void 0&&(f=g(Z,ue));const ae=S?g(Z,ue):f;return ae.width=Z,ae.height=ue,ae.getContext("2d").drawImage(A,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ue+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(A,S,z,Q,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),S===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),z===r.UNSIGNED_INT&&(Z=r.RGB32UI),z===r.BYTE&&(Z=r.RGB8I),z===r.SHORT&&(Z=r.RGB16I),z===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),z===r.UNSIGNED_INT&&(Z=r.RGBA32UI),z===r.BYTE&&(Z=r.RGBA8I),z===r.SHORT&&(Z=r.RGBA16I),z===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const ue=J?Io:ct.getTransfer(Q);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ue===mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,S){let z;return A?S===null||S===Vr||S===Ls?z=r.DEPTH24_STENCIL8:S===Ni?z=r.DEPTH32F_STENCIL8:S===Sa&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vr||S===Ls?z=r.DEPTH_COMPONENT24:S===Ni?z=r.DEPTH_COMPONENT32F:S===Sa&&(z=r.DEPTH_COMPONENT16),z}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ci&&A.minFilter!==mi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&u.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),x(S)}function C(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,Q=d.get(z);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(Q).length===0&&d.delete(z)}n.remove(A)}function M(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const z=A.source,Q=d.get(z);delete Q[S.__cacheKey],a.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let J=0;J<S.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let Q=0,J=z.length;Q<J;Q++){const Z=n.get(z[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[Q])}n.remove(A)}let P=0;function N(){P=0}function B(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function Y(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const z=n.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,A,S);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function G(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function W(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function H(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ne(z,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const te={[cc]:r.REPEAT,[Dr]:r.CLAMP_TO_EDGE,[uc]:r.MIRRORED_REPEAT},D={[ci]:r.NEAREST,[sm]:r.NEAREST_MIPMAP_NEAREST,[Ba]:r.NEAREST_MIPMAP_LINEAR,[mi]:r.LINEAR,[sl]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},ce={[cm]:r.NEVER,[mm]:r.ALWAYS,[um]:r.LESS,[Hh]:r.LEQUAL,[fm]:r.EQUAL,[pm]:r.GEQUAL,[hm]:r.GREATER,[dm]:r.NOTEQUAL};function Le(A,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mi||S.magFilter===sl||S.magFilter===Ba||S.magFilter===Lr||S.minFilter===mi||S.minFilter===sl||S.minFilter===Ba||S.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,te[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,te[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,te[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ci||S.minFilter!==Ba&&S.minFilter!==Lr||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qe(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const Z=Y(S);if(Z!==A.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Z].usedTimes++;const ue=J[A.__cacheKey];ue!==void 0&&(J[A.__cacheKey].usedTimes--,ue.usedTimes===0&&M(S)),A.__cacheKey=Z,A.__webglTexture=J[Z].texture}return z}function K(A,S,z){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const J=qe(A,S),Z=S.source;t.bindTexture(Q,A.__webglTexture,r.TEXTURE0+z);const ue=n.get(Z);if(Z.version!==ue.__version||J===!0){t.activeTexture(r.TEXTURE0+z);const ae=ct.getPrimaries(ct.workingColorSpace),he=S.colorSpace===Zi?null:ct.getPrimaries(S.colorSpace),Ve=S.colorSpace===Zi||ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let re=_(S.image,!1,i.maxTextureSize);re=nt(S,re);const se=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let De=T(S.internalFormat,se,Ue,S.colorSpace,S.isVideoTexture);Le(Q,S);let ve;const Ge=S.mipmaps,Fe=S.isVideoTexture!==!0,at=ue.__version===void 0||J===!0,U=Z.dataReady,le=R(S,re);if(S.isDepthTexture)De=v(S.format===Us,S.type),at&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,se,Ue,null));else if(S.isDataTexture)if(Ge.length>0){Fe&&at&&t.texStorage2D(r.TEXTURE_2D,le,De,Ge[0].width,Ge[0].height);for(let q=0,j=Ge.length;q<j;q++)ve=Ge[q],Fe?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,se,Ue,ve.data):t.texImage2D(r.TEXTURE_2D,q,De,ve.width,ve.height,0,se,Ue,ve.data);S.generateMipmaps=!1}else Fe?(at&&t.texStorage2D(r.TEXTURE_2D,le,De,re.width,re.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,se,Ue,re.data)):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,se,Ue,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,Ge[0].width,Ge[0].height,re.depth);for(let q=0,j=Ge.length;q<j;q++)if(ve=Ge[q],S.format!==li)if(se!==null)if(Fe){if(U)if(S.layerUpdates.size>0){const oe=Ef(ve.width,ve.height,S.format,S.type);for(const fe of S.layerUpdates){const ze=ve.data.subarray(fe*oe/ve.data.BYTES_PER_ELEMENT,(fe+1)*oe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,fe,ve.width,ve.height,1,se,ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,se,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,De,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,se,Ue,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,De,ve.width,ve.height,re.depth,0,se,Ue,ve.data)}else{Fe&&at&&t.texStorage2D(r.TEXTURE_2D,le,De,Ge[0].width,Ge[0].height);for(let q=0,j=Ge.length;q<j;q++)ve=Ge[q],S.format!==li?se!==null?Fe?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,se,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,q,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve.width,ve.height,se,Ue,ve.data):t.texImage2D(r.TEXTURE_2D,q,De,ve.width,ve.height,0,se,Ue,ve.data)}else if(S.isDataArrayTexture)if(Fe){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,re.width,re.height,re.depth),U)if(S.layerUpdates.size>0){const q=Ef(re.width,re.height,S.format,S.type);for(const j of S.layerUpdates){const oe=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,se,Ue,oe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,se,Ue,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,se,Ue,re.data);else if(S.isData3DTexture)Fe?(at&&t.texStorage3D(r.TEXTURE_3D,le,De,re.width,re.height,re.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,se,Ue,re.data)):t.texImage3D(r.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,se,Ue,re.data);else if(S.isFramebufferTexture){if(at)if(Fe)t.texStorage2D(r.TEXTURE_2D,le,De,re.width,re.height);else{let q=re.width,j=re.height;for(let oe=0;oe<le;oe++)t.texImage2D(r.TEXTURE_2D,oe,De,q,j,0,se,Ue,null),q>>=1,j>>=1}}else if(Ge.length>0){if(Fe&&at){const q=be(Ge[0]);t.texStorage2D(r.TEXTURE_2D,le,De,q.width,q.height)}for(let q=0,j=Ge.length;q<j;q++)ve=Ge[q],Fe?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,se,Ue,ve):t.texImage2D(r.TEXTURE_2D,q,De,se,Ue,ve);S.generateMipmaps=!1}else if(Fe){if(at){const q=be(re);t.texStorage2D(r.TEXTURE_2D,le,De,q.width,q.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Ue,re)}else t.texImage2D(r.TEXTURE_2D,0,De,se,Ue,re);m(S)&&p(Q),ue.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ne(A,S,z){if(S.image.length!==6)return;const Q=qe(A,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);const ue=ct.getPrimaries(ct.workingColorSpace),ae=S.colorSpace===Zi?null:ct.getPrimaries(S.colorSpace),he=S.colorSpace===Zi||ue===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!Ve&&!re?se[j]=_(S.image[j],!0,i.maxCubemapSize):se[j]=re?S.image[j].image:S.image[j],se[j]=nt(S,se[j]);const Ue=se[0],De=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ge=T(S.internalFormat,De,ve,S.colorSpace),Fe=S.isVideoTexture!==!0,at=Z.__version===void 0||Q===!0,U=J.dataReady;let le=R(S,Ue);Le(r.TEXTURE_CUBE_MAP,S);let q;if(Ve){Fe&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ge,Ue.width,Ue.height);for(let j=0;j<6;j++){q=se[j].mipmaps;for(let oe=0;oe<q.length;oe++){const fe=q[oe];S.format!==li?De!==null?Fe?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,fe.width,fe.height,De,ve,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ge,fe.width,fe.height,0,De,ve,fe.data)}}}else{if(q=S.mipmaps,Fe&&at){q.length>0&&le++;const j=be(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(re){Fe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,De,ve,se[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,se[j].width,se[j].height,0,De,ve,se[j].data);for(let oe=0;oe<q.length;oe++){const ze=q[oe].image[j].image;Fe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,ze.width,ze.height,De,ve,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ge,ze.width,ze.height,0,De,ve,ze.data)}}else{Fe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,ve,se[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,De,ve,se[j]);for(let oe=0;oe<q.length;oe++){const fe=q[oe];Fe?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,De,ve,fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ge,De,ve,fe.image[j])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,z,Q,J,Z){const ue=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),he=T(z.internalFormat,ue,ae,z.colorSpace),Ve=n.get(S),re=n.get(z);if(re.__renderTarget=S,!Ve.__hasExternalTextures){const se=Math.max(1,S.width>>Z),Ue=Math.max(1,S.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,he,se,Ue,S.depth,0,ue,ae,null):t.texImage2D(J,Z,he,se,Ue,0,ue,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,re.__webglTexture,0,Be(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,re.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(A,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(S.stencilBuffer,J),ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Be(S);O(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,Z,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,A)}else{const Q=S.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ue=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),he=T(Z.internalFormat,ue,ae,Z.colorSpace),Ve=Be(S);z&&O(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,he,S.width,S.height):O(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,he,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,he,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const J=Q.__webglTexture,Z=Be(S);if(S.depthTexture.format===Ss)O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Us)O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),ie(S.__webglDepthbuffer[Q],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ie(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(A,S,z){const Q=n.get(A);S!==void 0&&me(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Oe(A)}function et(A){const S=A.texture,z=n.get(A),Q=n.get(S);A.addEventListener("dispose",b);const J=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let he=0;he<S.mipmaps.length;he++)z.__webglFramebuffer[ae][he]=r.createFramebuffer()}else z.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)z.__webglFramebuffer[ae]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ue)for(let ae=0,he=J.length;ae<he;ae++){const Ve=n.get(J[ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&O(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const he=J[ae];z.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ve=s.convert(he.format,he.colorSpace),re=s.convert(he.type),se=T(he.internalFormat,Ve,re,he.colorSpace,A.isXRRenderTarget===!0),Ue=Be(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,se,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(z.__webglFramebuffer[ae][he],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(z.__webglFramebuffer[ae],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ae=0,he=J.length;ae<he;ae++){const Ve=J[ae],re=n.get(Ve);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),Le(r.TEXTURE_2D,Ve),me(z.__webglFramebuffer,A,Ve,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(Ve)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Le(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)me(z.__webglFramebuffer[he],A,S,r.COLOR_ATTACHMENT0,ae,he);else me(z.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Ze(A){const S=A.textures;for(let z=0,Q=S.length;z<Q;z++){const J=S[z];if(m(J)){const Z=E(A),ue=n.get(J).__webglTexture;t.bindTexture(Z,ue),p(Z),t.unbindTexture()}}}const Me=[],L=[];function _t(A){if(A.samples>0){if(O(A)===!1){const S=A.textures,z=A.width,Q=A.height;let J=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(A),ae=S.length>1;if(ae)for(let he=0;he<S.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<S.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Ve=n.get(S[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,z,Q,0,0,z,Q,J,r.NEAREST),l===!0&&(Me.length=0,L.length=0,Me.push(r.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Me.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<S.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Ve=n.get(S[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Be(A){return Math.min(i.maxSamples,A.samples)}function O(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function nt(A,S){const z=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Is&&z!==Zi&&(ct.getTransfer(z)===mt?(Q!==li||J!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=O}function Ux(r,e){function t(n,i=Zi){let s;const a=ct.getTransfer(i);if(n===ki)return r.UNSIGNED_BYTE;if(n===du)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return r.BYTE;if(n===Lh)return r.SHORT;if(n===Sa)return r.UNSIGNED_SHORT;if(n===hu)return r.INT;if(n===Vr)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===La)return r.HALF_FLOAT;if(n===Ih)return r.ALPHA;if(n===Nh)return r.RGB;if(n===li)return r.RGBA;if(n===Fh)return r.LUMINANCE;if(n===Oh)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===Bh)return r.RED;if(n===mu)return r.RED_INTEGER;if(n===zh)return r.RG;if(n===_u)return r.RG_INTEGER;if(n===gu)return r.RGBA_INTEGER;if(n===xo||n===Mo||n===So||n===yo)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===hc||n===dc||n===pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===_c||n===gc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===mc||n===_c)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===xc||n===Mc||n===Sc||n===yc||n===Ec||n===Tc||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Lc||n===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===Ic||n===Nc||n===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new lr({vertexShader:Ix,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends Gs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new Fx,m=t.getContextAttributes();let p=null,E=null;const T=[],v=[],R=new ut;let w=null;const b=new jn;b.viewport=new Ct;const C=new jn;C.viewport=new Ct;const M=[b,C],x=new r_;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=T[K];return ne===void 0&&(ne=new wl,T[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=T[K];return ne===void 0&&(ne=new wl,T[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=T[K];return ne===void 0&&(ne=new wl,T[K]=ne),ne.getHandSpace()};function B(K){const ne=v.indexOf(K.inputSource);if(ne===-1)return;const me=T[ne];me!==void 0&&(me.update(K.inputSource,K.frame,c||a),me.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",$);for(let K=0;K<T.length;K++){const ne=v[K];ne!==null&&(v[K]=null,T[K].disconnect(ne))}P=null,N=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,i=null,E=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ie=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Us:Ss,ie=m.stencil?Ls:Vr);const Oe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Gr(d.textureWidth,d.textureHeight,{format:li,type:ki,depthTexture:new Jh(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Gr(h.framebufferWidth,h.framebufferHeight,{format:li,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let ne=0;ne<K.removed.length;ne++){const me=K.removed[ne],ie=v.indexOf(me);ie>=0&&(v[ie]=null,T[ie].disconnect(me))}for(let ne=0;ne<K.added.length;ne++){const me=K.added[ne];let ie=v.indexOf(me);if(ie===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=v.length){v.push(me),ie=Oe;break}else if(v[Oe]===null){v[Oe]=me,ie=Oe;break}if(ie===-1)break}const Te=T[ie];Te&&Te.connect(me)}}const G=new X,W=new X;function H(K,ne,me){G.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(me.matrixWorld);const ie=G.distanceTo(W),Te=ne.projectionMatrix.elements,Oe=me.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),et=Te[14]/(Te[10]+1),Ze=(Te[9]+1)/Te[5],Me=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],_t=(Oe[8]+1)/Oe[0],Be=Pe*L,O=Pe*_t,ye=ie/(-L+_t),nt=ye*-L;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const be=Pe+ye,A=et+ye,S=Be-nt,z=O+(ie-nt),Q=Ze*et/A*be,J=Me*et/A*be;K.projectionMatrix.makePerspective(S,z,Q,J,be,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,me=K.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(me=_.depthFar)),x.near=C.near=b.near=ne,x.far=C.far=b.far=me,(P!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far),b.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const ie=K.parent,Te=x.cameras;te(x,ie);for(let Oe=0;Oe<Te.length;Oe++)te(Te[Oe],ie);Te.length===2?H(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),D(K,x,ie)};function D(K,ne,me){me===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Oc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function Le(K,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const me=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ie=!1;me.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Pe=0;Pe<me.length;Pe++){const et=me[Pe];let Ze=null;if(h!==null)Ze=h.getViewport(et);else{const L=f.getViewSubImage(d,et);Ze=L.viewport,Pe===0&&(e.setRenderTargetTextures(E,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let Me=M[Pe];Me===void 0&&(Me=new jn,Me.layers.enable(Pe),Me.viewport=new Ct,M[Pe]=Me),Me.matrix.fromArray(et.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(et.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Pe===0&&(x.matrix.copy(Me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(Me)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const Pe=f.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,i.renderState)}}for(let me=0;me<T.length;me++){const ie=v[me],Te=T[me];ie!==null&&Te!==void 0&&Te.update(ie,ne,c||a)}ce&&ce(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const qe=new td;qe.setAnimationLoop(Le),this.setAnimationLoop=function(K){ce=K},this.dispose=function(){}}}const Mr=new ui,Bx=new Dt;function zx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Mr.copy(v),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(Mr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const v=T.program;n.uniformBlockBinding(E,v)}function c(E,T){let v=i[E.id];v===void 0&&(g(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(E,R);const w=e.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const T=f();E.__bindingPointIndex=T;const v=r.createBuffer(),R=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,v),v}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],v=E.uniforms,R=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const P=C[M];if(h(P,w,M,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let $=0;$<B.length;$++){const G=B[$],W=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+Y,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(E,T,v,R){const w=E.value,b=T+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const T=E.uniforms;let v=0;const R=16;for(let b=0,C=T.length;b<C;b++){const M=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,P=M.length;x<P;x++){const N=M[x],B=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,$=B.length;Y<$;Y++){const G=B[Y],W=_(G),H=v%R,te=H%W.boundary,D=H+te;v+=te,D!==0&&R-D<W.storage&&(v+=R-D),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=W.storage}}}const w=v%R;return w>0&&(v+=R-w),E.__size=v,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Hx{constructor(e={}){const{canvas:t=gm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=ir,this.toneMappingExposure=1;const v=this;let R=!1,w=0,b=0,C=null,M=-1,x=null;const P=new Ct,N=new Ct;let B=null;const Y=new rt(0);let $=0,G=t.width,W=t.height,H=1,te=null,D=null;const ce=new Ct(0,0,G,W),Le=new Ct(0,0,G,W);let qe=!1;const K=new yu;let ne=!1,me=!1;this.transmissionResolutionScale=1;const ie=new Dt,Te=new Dt,Oe=new X,Pe=new Ct,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Me(){return C===null?H:1}let L=n;function _t(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uu}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const F="webgl2";if(L=_t(F,y),L===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Be,O,ye,nt,be,A,S,z,Q,J,Z,ue,ae,he,Ve,re,se,Ue,De,ve,Ge,Fe,at,U;function le(){Be=new j0(L),Be.init(),Fe=new Ux(L,Be),O=new W0(L,Be,e,Fe),ye=new Dx(L,Be),O.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),nt=new ev(L),be=new vx,A=new Lx(L,Be,ye,be,O,Fe,nt),S=new Y0(v),z=new Z0(v),Q=new a_(L),at=new V0(L,Q),J=new J0(L,Q,nt,at),Z=new nv(L,J,Q,nt),De=new tv(L,O,A),re=new X0(be),ue=new gx(v,S,z,Be,O,at,re),ae=new zx(v,be),he=new Mx,Ve=new Ax(Be),Ue=new H0(v,S,z,ye,Z,h,l),se=new Cx(v,Z,O),U=new kx(L,nt,O,ye),ve=new G0(L,Be,nt),Ge=new Q0(L,Be,nt),nt.programs=ue.programs,v.capabilities=O,v.extensions=Be,v.properties=be,v.renderLists=he,v.shadowMap=se,v.state=ye,v.info=nt}le();const q=new Ox(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,W,!1))},this.getSize=function(y){return y.set(G,W)},this.setSize=function(y,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,W=F,t.width=Math.floor(y*H),t.height=Math.floor(F*H),V===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(G*H,W*H).floor()},this.setDrawingBufferSize=function(y,F,V){G=y,W=F,H=V,t.width=Math.floor(y*V),t.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(ce)},this.setViewport=function(y,F,V,k){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,F,V,k),ye.viewport(P.copy(ce).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Le)},this.setScissor=function(y,F,V,k){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,F,V,k),ye.scissor(N.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){ye.setScissorTest(qe=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){D=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,V=!0){let k=0;if(y){let I=!1;if(C!==null){const ee=C.texture.format;I=ee===gu||ee===_u||ee===mu}if(I){const ee=C.texture.type,pe=ee===ki||ee===Vr||ee===Sa||ee===Ls||ee===du||ee===pu,Se=Ue.getClearColor(),xe=Ue.getClearAlpha(),Ce=Se.r,Ne=Se.g,Re=Se.b;pe?(g[0]=Ce,g[1]=Ne,g[2]=Re,g[3]=xe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ce,_[1]=Ne,_[2]=Re,_[3]=xe,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}F&&(k|=L.DEPTH_BUFFER_BIT),V&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ue.dispose(),he.dispose(),Ve.dispose(),be.dispose(),S.dispose(),z.dispose(),Z.dispose(),at.dispose(),U.dispose(),ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",de),q.removeEventListener("sessionend",He),we.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=nt.autoReset,F=se.enabled,V=se.autoUpdate,k=se.needsUpdate,I=se.type;le(),nt.autoReset=y,se.enabled=F,se.autoUpdate=V,se.needsUpdate=k,se.type=I}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){const F=y.target;F.removeEventListener("dispose",ze),ot(F)}function ot(y){wt(y),be.remove(y)}function wt(y){const F=be.get(y).programs;F!==void 0&&(F.forEach(function(V){ue.releaseProgram(V)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,k,I,ee){F===null&&(F=et);const pe=I.isMesh&&I.matrixWorld.determinant()<0,Se=Dn(y,F,V,k,I);ye.setMaterial(k,pe);let xe=V.index,Ce=1;if(k.wireframe===!0){if(xe=J.getWireframeAttribute(V),xe===void 0)return;Ce=2}const Ne=V.drawRange,Re=V.attributes.position;let $e=Ne.start*Ce,ht=(Ne.start+Ne.count)*Ce;ee!==null&&($e=Math.max($e,ee.start*Ce),ht=Math.min(ht,(ee.start+ee.count)*Ce)),xe!==null?($e=Math.max($e,0),ht=Math.min(ht,xe.count)):Re!=null&&($e=Math.max($e,0),ht=Math.min(ht,Re.count));const Nt=ht-$e;if(Nt<0||Nt===1/0)return;at.setup(I,k,Se,V,xe);let Rt,lt=ve;if(xe!==null&&(Rt=Q.get(xe),lt=Ge,lt.setIndex(Rt)),I.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*Me()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(I.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),ye.setLineWidth(Ie*Me()),I.isLineSegments?lt.setMode(L.LINES):I.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else I.isPoints?lt.setMode(L.POINTS):I.isSprite&&lt.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ie=I._multiDrawStarts,jt=I._multiDrawCounts,dt=I._multiDrawCount,ni=xe?Q.get(xe).bytesPerElement:1,Zr=be.get(k).currentProgram.getUniforms();for(let Ln=0;Ln<dt;Ln++)Zr.setValue(L,"_gl_DrawID",Ln),lt.render(Ie[Ln]/ni,jt[Ln])}else if(I.isInstancedMesh)lt.renderInstances($e,Nt,I.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jt=Math.min(V.instanceCount,Ie);lt.renderInstances($e,Nt,jt)}else lt.render($e,Nt)};function ge(y,F,V){y.transparent===!0&&y.side===Ui&&y.forceSinglePass===!1?(y.side=bn,y.needsUpdate=!0,gt(y,F,V),y.side=or,y.needsUpdate=!0,gt(y,F,V),y.side=Ui):gt(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),p=Ve.get(V),p.init(F),T.push(p),V.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),y!==V&&y.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let pe=0;pe<ee.length;pe++){const Se=ee[pe];ge(Se,V,I),k.add(Se)}else ge(ee,V,I),k.add(ee)}),p=T.pop(),k},this.compileAsync=function(y,F,V=null){const k=this.compile(y,F,V);return new Promise(I=>{function ee(){if(k.forEach(function(pe){be.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){I(y);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ae=null;function We(y){Ae&&Ae(y)}function de(){we.stop()}function He(){we.start()}const we=new td;we.setAnimationLoop(We),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(y){Ae=y,q.setAnimationLoop(y),y===null?we.stop():we.start()},q.addEventListener("sessionstart",de),q.addEventListener("sessionend",He),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,C),p=Ve.get(y,T.length),p.init(F),T.push(p),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Te),me=this.localClippingEnabled,ne=re.init(this.clippingPlanes,me),m=he.get(y,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&ke(ee,F,-1/0,v.sortObjects)}ke(y,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,D),Ze=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ze&&Ue.addToRenderList(m,y),this.info.render.frame++,ne===!0&&re.beginShadows();const V=p.state.shadowsArray;se.render(V,y,F),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(I.length>0)for(let pe=0,Se=ee.length;pe<Se;pe++){const xe=ee[pe];je(k,I,y,xe)}Ze&&Ue.render(y);for(let pe=0,Se=ee.length;pe<Se;pe++){const xe=ee[pe];Lt(m,y,xe,xe.viewport)}}else I.length>0&&je(k,I,y,F),Ze&&Ue.render(y),Lt(m,y,F);C!==null&&b===0&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(v,y,F),at.resetDefaultState(),M=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],ne===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ke(y,F,V,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){k&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const pe=Z.update(y),Se=y.material;Se.visible&&m.push(y,pe,Se,V,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const pe=Z.update(y),Se=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(Se)){const xe=pe.groups;for(let Ce=0,Ne=xe.length;Ce<Ne;Ce++){const Re=xe[Ce],$e=Se[Re.materialIndex];$e&&$e.visible&&m.push(y,pe,$e,V,Pe.z,Re)}}else Se.visible&&m.push(y,pe,Se,V,Pe.z,null)}}const ee=y.children;for(let pe=0,Se=ee.length;pe<Se;pe++)ke(ee[pe],F,V,k)}function Lt(y,F,V,k){const I=y.opaque,ee=y.transmissive,pe=y.transparent;p.setupLightsView(V),ne===!0&&re.setGlobalState(v.clippingPlanes,V),k&&ye.viewport(P.copy(k)),I.length>0&&Mt(I,F,V),ee.length>0&&Mt(ee,F,V),pe.length>0&&Mt(pe,F,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function je(y,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Gr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?La:ki,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ee=p.state.transmissionRenderTarget[k.id],pe=k.viewport||P;ee.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);const Se=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(Y),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Ue.render(V);const xe=v.toneMapping;v.toneMapping=ir;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ne===!0&&re.setGlobalState(v.clippingPlanes,k),Mt(y,V,k),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,$e=F.length;Re<$e;Re++){const ht=F[Re],Nt=ht.object,Rt=ht.geometry,lt=ht.material,Ie=ht.group;if(lt.side===Ui&&Nt.layers.test(k.layers)){const jt=lt.side;lt.side=bn,lt.needsUpdate=!0,kt(Nt,V,k,Rt,lt,Ie),lt.side=jt,lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}v.setRenderTarget(Se),v.setClearColor(Y,$),Ce!==void 0&&(k.viewport=Ce),v.toneMapping=xe}function Mt(y,F,V){const k=F.isScene===!0?F.overrideMaterial:null;for(let I=0,ee=y.length;I<ee;I++){const pe=y[I],Se=pe.object,xe=pe.geometry,Ce=k===null?pe.material:k,Ne=pe.group;Se.layers.test(V.layers)&&kt(Se,F,V,xe,Ce,Ne)}}function kt(y,F,V,k,I,ee){y.onBeforeRender(v,F,V,k,I,ee),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(v,F,V,k,y,ee),I.transparent===!0&&I.side===Ui&&I.forceSinglePass===!1?(I.side=bn,I.needsUpdate=!0,v.renderBufferDirect(V,F,k,I,y,ee),I.side=or,I.needsUpdate=!0,v.renderBufferDirect(V,F,k,I,y,ee),I.side=Ui):v.renderBufferDirect(V,F,k,I,y,ee),y.onAfterRender(v,F,V,k,I,ee)}function gt(y,F,V){F.isScene!==!0&&(F=et);const k=be.get(y),I=p.state.lights,ee=p.state.shadowsArray,pe=I.state.version,Se=ue.getParameters(y,I.state,ee,F,V),xe=ue.getProgramCacheKey(Se);let Ce=k.programs;k.environment=y.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(y.isMeshStandardMaterial?z:S).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",ze),Ce=new Map,k.programs=Ce);let Ne=Ce.get(xe);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===pe)return ft(y,Se),Ne}else Se.uniforms=ue.getUniforms(y),y.onBeforeCompile(Se,v),Ne=ue.acquireProgram(Se,xe),Ce.set(xe,Ne),k.uniforms=Se.uniforms;const Re=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=re.uniform),ft(y,Se),k.needsLights=un(y),k.lightsStateVersion=pe,k.needsLights&&(Re.ambientLightColor.value=I.state.ambient,Re.lightProbe.value=I.state.probe,Re.directionalLights.value=I.state.directional,Re.directionalLightShadows.value=I.state.directionalShadow,Re.spotLights.value=I.state.spot,Re.spotLightShadows.value=I.state.spotShadow,Re.rectAreaLights.value=I.state.rectArea,Re.ltc_1.value=I.state.rectAreaLTC1,Re.ltc_2.value=I.state.rectAreaLTC2,Re.pointLights.value=I.state.point,Re.pointLightShadows.value=I.state.pointShadow,Re.hemisphereLights.value=I.state.hemi,Re.directionalShadowMap.value=I.state.directionalShadowMap,Re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Re.spotShadowMap.value=I.state.spotShadowMap,Re.spotLightMatrix.value=I.state.spotLightMatrix,Re.spotLightMap.value=I.state.spotLightMap,Re.pointShadowMap.value=I.state.pointShadowMap,Re.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function vt(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=To.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function ft(y,F){const V=be.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Dn(y,F,V,k,I){F.isScene!==!0&&(F=et),A.resetTextureUnits();const ee=F.fog,pe=k.isMeshStandardMaterial?F.environment:null,Se=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Is,xe=(k.isMeshStandardMaterial?z:S).get(k.envMap||pe),Ce=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let Nt=ir;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=Rt!==void 0?Rt.length:0,Ie=be.get(k),jt=p.state.lights;if(ne===!0&&(me===!0||y!==x)){const fn=y===x&&k.id===M;re.setState(k,y,fn)}let dt=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==jt.state.version||Ie.outputColorSpace!==Se||I.isBatchedMesh&&Ie.batching===!1||!I.isBatchedMesh&&Ie.batching===!0||I.isBatchedMesh&&Ie.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ie.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ie.instancing===!1||!I.isInstancedMesh&&Ie.instancing===!0||I.isSkinnedMesh&&Ie.skinning===!1||!I.isSkinnedMesh&&Ie.skinning===!0||I.isInstancedMesh&&Ie.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ie.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ie.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ie.instancingMorph===!1&&I.morphTexture!==null||Ie.envMap!==xe||k.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Ce||Ie.vertexTangents!==Ne||Ie.morphTargets!==Re||Ie.morphNormals!==$e||Ie.morphColors!==ht||Ie.toneMapping!==Nt||Ie.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,Ie.__version=k.version);let ni=Ie.currentProgram;dt===!0&&(ni=gt(k,F,I));let Zr=!1,Ln=!1,Ys=!1;const Et=ni.getUniforms(),Yn=Ie.uniforms;if(ye.useProgram(ni.program)&&(Zr=!0,Ln=!0,Ys=!0),k.id!==M&&(M=k.id,Ln=!0),Zr||x!==y){ye.buffers.depth.getReversed()?(ie.copy(y.projectionMatrix),xm(ie),Mm(ie),Et.setValue(L,"projectionMatrix",ie)):Et.setValue(L,"projectionMatrix",y.projectionMatrix),Et.setValue(L,"viewMatrix",y.matrixWorldInverse);const Sn=Et.map.cameraPosition;Sn!==void 0&&Sn.setValue(L,Oe.setFromMatrixPosition(y.matrixWorld)),O.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ln=!0,Ys=!0)}if(I.isSkinnedMesh){Et.setOptional(L,I,"bindMatrix"),Et.setOptional(L,I,"bindMatrixInverse");const fn=I.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Et.setValue(L,"boneTexture",fn.boneTexture,A))}I.isBatchedMesh&&(Et.setOptional(L,I,"batchingTexture"),Et.setValue(L,"batchingTexture",I._matricesTexture,A),Et.setOptional(L,I,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",I._indirectTexture,A),Et.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",I._colorsTexture,A));const qn=V.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&De.update(I,V,ni),(Ln||Ie.receiveShadow!==I.receiveShadow)&&(Ie.receiveShadow=I.receiveShadow,Et.setValue(L,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yn.envMap.value=xe,Yn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(Yn.envMapIntensity.value=F.environmentIntensity),Ln&&(Et.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&yt(Yn,Ys),ee&&k.fog===!0&&ae.refreshFogUniforms(Yn,ee),ae.refreshMaterialUniforms(Yn,k,H,W,p.state.transmissionRenderTarget[y.id]),To.upload(L,vt(Ie),Yn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(To.upload(L,vt(Ie),Yn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(L,"center",I.center),Et.setValue(L,"modelViewMatrix",I.modelViewMatrix),Et.setValue(L,"normalMatrix",I.normalMatrix),Et.setValue(L,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let Sn=0,rl=fn.length;Sn<rl;Sn++){const pr=fn[Sn];U.update(pr,ni),U.bind(pr,ni)}}return ni}function yt(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function un(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,F,V){be.get(y.texture).__webglTexture=F,be.get(y.depthTexture).__webglTexture=V;const k=be.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const V=be.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Xn=L.createFramebuffer();this.setRenderTarget=function(y,F=0,V=0){C=y,w=F,b=V;let k=!0,I=null,ee=!1,pe=!1;if(y){const xe=be.get(y);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(xe.__hasExternalTextures)A.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(pe=!0);const Ne=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?I=Ne[F][V]:I=Ne[F],ee=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?I=be.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?I=Ne[V]:I=Ne,P.copy(y.viewport),N.copy(y.scissor),B=y.scissorTest}else P.copy(ce).multiplyScalar(H).floor(),N.copy(Le).multiplyScalar(H).floor(),B=qe;if(V!==0&&(I=Xn),ye.bindFramebuffer(L.FRAMEBUFFER,I)&&k&&ye.drawBuffers(y,I),ye.viewport(P),ye.scissor(N),ye.setScissorTest(B),ee){const xe=be.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,V)}else if(pe){const xe=be.get(y.texture),Ce=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,V,Ce)}else if(y!==null&&V!==0){const xe=be.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(y,F,V,k,I,ee,pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){ye.bindFramebuffer(L.FRAMEBUFFER,Se);try{const xe=y.texture,Ce=xe.format,Ne=xe.type;if(!O.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&V>=0&&V<=y.height-I&&L.readPixels(F,V,k,I,Fe.convert(Ce),Fe.convert(Ne),ee)}finally{const xe=C!==null?be.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,k,I,ee,pe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const xe=y.texture,Ce=xe.format,Ne=xe.type;if(!O.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-k&&V>=0&&V<=y.height-I){ye.bindFramebuffer(L.FRAMEBUFFER,Se);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(F,V,k,I,Fe.convert(Ce),Fe.convert(Ne),0);const $e=C!==null?be.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,$e);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vm(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Re),L.deleteSync(ht),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,V=0){y.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-V),I=Math.floor(y.image.width*k),ee=Math.floor(y.image.height*k),pe=F!==null?F.x:0,Se=F!==null?F.y:0;A.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pe,Se,I,ee),ye.unbindTexture()};const Ht=L.createFramebuffer(),Vt=L.createFramebuffer();this.copyTextureToTexture=function(y,F,V=null,k=null,I=0,ee=null){y.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],F=arguments[2],ee=arguments[3]||0,V=null),ee===null&&(I!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=I,I=0):ee=0);let pe,Se,xe,Ce,Ne,Re,$e,ht,Nt;const Rt=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(V!==null)pe=V.max.x-V.min.x,Se=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ne=V.min.y,Re=V.isBox3?V.min.z:0;else{const qn=Math.pow(2,-I);pe=Math.floor(Rt.width*qn),Se=Math.floor(Rt.height*qn),y.isDataArrayTexture?xe=Rt.depth:y.isData3DTexture?xe=Math.floor(Rt.depth*qn):xe=1,Ce=0,Ne=0,Re=0}k!==null?($e=k.x,ht=k.y,Nt=k.z):($e=0,ht=0,Nt=0);const lt=Fe.convert(F.format),Ie=Fe.convert(F.type);let jt;F.isData3DTexture?(A.setTexture3D(F,0),jt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),jt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),jt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=L.getParameter(L.UNPACK_ROW_LENGTH),ni=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zr=L.getParameter(L.UNPACK_SKIP_PIXELS),Ln=L.getParameter(L.UNPACK_SKIP_ROWS),Ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const Et=y.isDataArrayTexture||y.isData3DTexture,Yn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const qn=be.get(y),fn=be.get(F),Sn=be.get(qn.__renderTarget),rl=be.get(fn.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let pr=0;pr<xe;pr++)Et&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(y).__webglTexture,I,Re+pr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ee,Nt+pr)),L.blitFramebuffer(Ce,Ne,pe,Se,$e,ht,pe,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(I!==0||y.isRenderTargetTexture||be.has(y)){const qn=be.get(y),fn=be.get(F);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Ht),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vt);for(let Sn=0;Sn<xe;Sn++)Et?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qn.__webglTexture,I,Re+Sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qn.__webglTexture,I),Yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fn.__webglTexture,ee,Nt+Sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fn.__webglTexture,ee),I!==0?L.blitFramebuffer(Ce,Ne,pe,Se,$e,ht,pe,Se,L.COLOR_BUFFER_BIT,L.NEAREST):Yn?L.copyTexSubImage3D(jt,ee,$e,ht,Nt+Sn,Ce,Ne,pe,Se):L.copyTexSubImage2D(jt,ee,$e,ht,Ce,Ne,pe,Se);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Yn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(jt,ee,$e,ht,Nt,pe,Se,xe,lt,Ie,Rt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(jt,ee,$e,ht,Nt,pe,Se,xe,lt,Rt.data):L.texSubImage3D(jt,ee,$e,ht,Nt,pe,Se,xe,lt,Ie,Rt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,$e,ht,pe,Se,lt,Ie,Rt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,$e,ht,Rt.width,Rt.height,lt,Rt.data):L.texSubImage2D(L.TEXTURE_2D,ee,$e,ht,pe,Se,lt,Ie,Rt);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ni),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ys),ee===0&&F.generateMipmaps&&L.generateMipmap(jt),ye.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V=null,k=null,I=0){return y.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,y=arguments[2],F=arguments[3],I=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,V,k,I)},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,ye.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class Vx{constructor(){this.canvasWidth=window.innerWidth,this.canvasHeight=window.innerHeight,this.scene=new Ym,this.scene.fog=new Su(0,200,2e3),this.camera=new jn(45,this.canvasWidth/this.canvasHeight,1,2e5),this.camera.position.set(900,50,0),this.camera.lookAt(0,0,0),this.renderer=new Hx({antialias:window.devicePixelRatio===1}),this.renderer.setClearColor(0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.canvasWidth,this.canvasHeight),this.containerEl=document.createElement("div"),this.containerEl.classList.add("canvasWrapper"),this.renderer.domElement.classList.add("canvas-3d"),this.containerEl.appendChild(this.renderer.domElement),document.body.appendChild(this.containerEl),window.addEventListener("resize",()=>{this.handleResize()})}handleResize(){this.canvasWidth=window.innerWidth,this.canvasHeight=window.innerHeight,this.camera.aspect=this.canvasWidth/this.canvasHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvasWidth,this.canvasHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}startRendering(){this.update()}update(){this.onAnimate(),this.renderer.render(this.scene,this.camera),this.renderer.setAnimationLoop(this.update.bind(this))}onAnimate(){}}class Gx extends _i{constructor(){super();const e=new i_(16777215,1);e.position.set(1,1,1),this.add(e)}}class Wx extends _i{constructor(e){super();const t=new Jo(e),n=new Wr(100,60,60),i=new jo({map:t.load("/earth/ground.jpg"),bumpMap:t.load("/earth/bump.jpg"),bumpScale:1,metalnessMap:t.load("/earth/specular.png"),roughness:.5});this.earth=new Tn(n,i),this.add(this.earth);const s=new Wr(100.5,60,60),a=new Km({map:t.load("/earth/cloud.jpg"),transparent:!0,blending:jl});this.cloud=new Tn(s,a),this.add(this.cloud)}update(){this.earth.rotation.y+=6e-4,this.cloud.rotation.y+=.0012}}class Xx extends _i{constructor(e){super();const t=new Jo(e),n=new Wr(100,60,60),i=new jo({map:t.load("/mars/mars.png"),normalMap:t.load("/mars/mars_1k_normal.jpg"),bumpMap:t.load("/mars/marsbump1k.jpg"),bumpScale:1,metalnessMap:t.load("/earth/specular.png"),roughness:.5});this.mars=new Tn(n,i),this.add(this.mars)}update(){this.mars.rotation.y+=.001}}class Yx extends _i{constructor(e){super();const t=new Jo(e),n=new Wr(100,60,60),i=new jo({map:t.load("/venus/venusmap.png"),bumpMap:t.load("/venus/venusbump.jpg"),bumpScale:1,roughness:.5});this.venus=new Tn(n,i),this.add(this.venus)}update(){this.venus.rotation.y+=.002}}class qx extends _i{constructor(e){super();const t=new Jo(e),n=new Wr(100,60,60),i=new jo({map:t.load("/pluto/plutomap2k.jpg"),bumpMap:t.load("/pluto/plutobump2k.jpg"),bumpScale:1,roughness:.5});this.pluto=new Tn(n,i),this.add(this.pluto)}update(){this.pluto.rotation.y+=.003}}function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ad(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fs={duration:.5,overwrite:!1,delay:0},bu,Qt,Tt,Si=1e8,on=1/Si,zc=Math.PI*2,$x=zc/4,Kx=0,od=Math.sqrt,Zx=Math.cos,jx=Math.sin,Zt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Hi=function(e){return typeof e=="number"},Au=function(e){return typeof e>"u"},Ti=function(e){return typeof e=="object"},An=function(e){return e!==!1},wu=function(){return typeof window<"u"},so=function(e){return Pt(e)||Zt(e)},ld=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,kc=/(?:-?\.?\d|\.)+/gi,cd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ud=/[+-]=-?[.\d]+/,fd=/[^,'"\[\]\s]+/gi,Jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,fi,Hc,Ru,Gn={},Fo={},hd,dd=function(e){return(Fo=Os(e,Gn))&&Pn},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},pd=function(e,t){return e&&(Gn[e]=t)&&Fo&&(Fo[e]=t)||Gn},Ta=function(){return 0},Qx={suppressEvents:!0,isStart:!0,kill:!1},bo={suppressEvents:!0,kill:!1},eM={suppressEvents:!0},Pu={},rr=[],Vc={},md,On={},Ol={},$f=30,Ao=[],Du="",Lu=function(e){var t=e[0],n,i;if(Ti(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ao.length;i--&&!Ao[i].targetTest(t););n=Ao[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zd(e[i],n)))||e.splice(i,1);return e},Nr=function(e){return e._gsap||Lu(ei(e))[0]._gsap},_d=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():Au(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Es=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Oo=function(){var e=rr.length,t=rr.slice(0),n,i;for(Vc={},rr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gd=function(e,t,n,i){rr.length&&!Qt&&Oo(),e.render(t,n,Qt&&t<0&&(e._initted||e._startAt)),rr.length&&!Qt&&Oo()},vd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fd).length<2?t:Zt(e)?e.trim():e},xd=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Os=function(e,t){for(var n in t)e[n]=t[n];return e},Kf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ti(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Bo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||bt,n=e.keyframes?nM(cn(e.keyframes)):Wn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Md=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},el=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gc=function(e,t,n,i){return e._startAt&&(Qt?e._startAt.revert(bo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},sM=function r(e){return!e||e._ts&&r(e.parent)},Zf=function(e){return e._repeat?Bs(e._tTime,e=e.duration()+e._rDelay)*e:0},Bs=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},zo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tl=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||on)||0))},nl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tl(e),n._dirty||Fr(n,e)),e},Sd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zo(e.rawTime(),t),(!t._dur||Oa(0,t.totalDuration(),n)-t._tTime>on)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},pi=function(e,t,n,i){return t.parent&&cr(t),t._start=zt((Hi(n)?n:n||e!==bt?Kn(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Md(e,t,"_first","_last",e._sort?"_start":0),Wc(t)||(e._recent=t),i||Sd(e,t),e._ts<0&&nl(e,e._tTime),e},yd=function(e,t){return(Gn.ScrollTrigger||Cu("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},Ed=function(e,t,n,i,s){if(Iu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&md!==zn.frame)return rr.push(e),e._lazy=[s,i],1},aM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Wc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&aM(e)&&!(!e._initted&&Wc(e))||(e._ts<0||e._dp._ts<0)&&!Wc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Oa(0,e._tDur,t),u=Bs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Bs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Qt||i||e._zTime===on||!t&&e._zTime){if(!e._initted&&Ed(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?on:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gc(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&cr(e,1),!n&&!Qt&&(Hn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},zs=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&nl(e,e._tTime=e._tDur*o),e.parent&&tl(e),n||Fr(e.parent,e),e},jf=function(e){return e instanceof vn?Fr(e):zs(e,e._dur)},cM={_start:0,endTime:Ta,totalDuration:Ta},Kn=function r(e,t,n){var i=e.labels,s=e._recent||cM,a=e.duration()>=Si?s.endTime(!1):e._dur,o,l,c;return Zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ua=function(e,t,n){var i=Hi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;a.immediateRender=An(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Bt(t[0],a,t[s+1])},dr=function(e,t){return e||e===0?t(e):t},Oa=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Zt(e)||!(t=Jx.exec(e))?"":t[1]},uM=function(e,t,n){return dr(n,function(i){return Oa(e,t,i)})},Xc=[].slice,Td=function(e,t){return e&&Ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ti(e[0]))&&!e.nodeType&&e!==fi},fM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Zt(i)&&!t||Td(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):Zt(e)&&!n&&(Hc||!ks())?Xc.call((t||Ru).querySelectorAll(e),0):cn(e)?fM(e,n):Td(e)?Xc.call(e,0):e?[e]:[]},Yc=function(e){return e=ei(e)[0]||Ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Ea("Invalid scope")||Ru.createElement("div"):e)}},bd=function(e){return e.sort(function(){return .5-Math.random()})},Ad=function(e){if(Pt(e))return e;var t=Ti(e)?e:{each:e},n=Or(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return Zt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,E,T,v,R,w,b,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Si])[1],!M){for(b=-1e8;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:i%M,E=M===Si?0:l?_*f/M-.5:i/M|0,b=0,C=Si,w=0;w<_;w++)T=w%M-p,v=E-(w/M|0),m[w]=R=c?Math.abs(c==="y"?v:T):od(T*T+v*v),R>b&&(b=R),R<C&&(C=R);i==="random"&&bd(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=sn(t.amount||t.each)||0,n=n&&_<0?Fd(n):n}return _=(m[d]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},qc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Hi(n)?0:sn(n))}},wd=function(e,t){var n=cn(e),i,s;return!n&&Ti(e)&&(i=n=e.radius||Si,e.values?(e=ei(e.values),(s=!Hi(e[0]))&&(i*=i)):e=qc(e.increment)),dr(t,n?Pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Si,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Hi(a)?u:u+sn(a)}:qc(e))},Rd=function(e,t,n,i){return dr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},hM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},dM=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},pM=function(e,t,n){return Pd(e,t,0,1,n)},Cd=function(e,t,n){return dr(n,function(i){return e[~~t(i)]})},mM=function r(e,t,n){var i=t-e;return cn(e)?Cd(e,r(0,e.length),t):dr(n,function(s){return(i+(s-e)%i)%i+e})},_M=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?Cd(e,r(0,e.length-1),t):dr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ba=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?fd:kc),n+=e.substr(t,i-t)+Rd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Pd=function(e,t,n,i,s){var a=t-e,o=i-n;return dr(s,function(l){return n+((l-e)/a*o||0)})},gM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=Zt(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Os(cn(e)?[]:{},e));if(!u){for(l in t)Uu.call(o,e,l,"get",t[l]);s=function(g){return Ou(g,o)||(a?e.p:e)}}}return dr(n,s)},Jf=function(e,t,n){var i=e.labels,s=Si,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],a=Tt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&rr.length&&Oo(),o&&(Tt=o),u=l?s.apply(c,l):s.call(c),Tt=a,u},na=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Hn(e,"onInterrupt"),e},vs,Dd=[],Ld=function(e){if(e)if(e=!e.name&&e.default||e,wu()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:Ou,add:Uu,kill:UM,modifier:LM,rawVars:0},a={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(ks(),e!==i){if(On[t])return;Wn(i,Wn(Bo(e,s),a)),Os(i.prototype,Os(s,Bo(e,a))),On[i.prop=t]=i,e.targetTest&&(Ao.push(i),Pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pd(t,i),e.register&&e.register(Pn,i,Rn)}else Dd.push(e)},xt=255,ia={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Ud=function(e,t,n){var i=e?Hi(e)?[e>>16,e>>8&xt,e&xt]:0:ia.black,s,a,o,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(kc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Bl(l+1/3,s,a),i[1]=Bl(l,s,a),i[2]=Bl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(cd),n&&i.length<4&&(i[3]=1),i}else i=e.match(kc)||ia.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Id=function(e){var t=[],n=[],i=-1;return e.split(sr).forEach(function(s){var a=s.match(gs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Qf=function(e,t,n){var i="",s=(e+i).match(sr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Ud(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Id(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(sr,"1").split(gs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(sr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),vM=/hsl[a]?\(/,Nd=function(e){var t=e.join(" "),n;if(sr.lastIndex=0,sr.test(t))return n=vM.test(t),e[1]=Qf(e[1],n),e[0]=Qf(e[0],n,Id(e[1])),!0},Aa,zn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function _(m){var p=r()-i,E=m===!0,T,v,R,w;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,T=R-a,(T>0||E)&&(w=++f.frame,d=R-f.time*1e3,f.time=R=R/1e3,a+=T+(T>=s?4:s-T),v=1),E||(l=c(_)),v)for(h=0;h<o.length;h++)o[h](R,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){hd&&(!Hc&&wu()&&(fi=Hc=window,Ru=fi.document||{},Gn.gsap=Pn,(fi.gsapVersions||(fi.gsapVersions=[])).push(Pn.version),dd(Fo||fi.GreenSockGlobals||!fi.gsap&&fi||{}),Dd.forEach(Ld)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ta},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,E){var T=p?function(v,R,w,b){m(v,R,w,b),f.remove(T)}:m;return f.remove(m),o[E?"unshift":"push"](T),ks(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f}(),ks=function(){return!Aa&&zn.wake()},st={},xM=/^[\d.\-M][\d.\-,\s]/,MM=/["']/g,SM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(MM,"").trim():+c,i=l.substr(o+1).trim();return t},yM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},EM=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[SM(t[1])]:yM(e).split(",").map(vd)):st._CE&&xM.test(e)?st._CE("",e):n},Fd=function(e){return function(t){return 1-e(1-t)}},Od=function r(e,t){for(var n=e._first,i;n;)n instanceof vn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Or=function(e,t){return e&&(Pt(e)?e:st[e]||EM(e))||t},Kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return wn(e,function(o){st[o]=Gn[o]=s,st[a=o.toLowerCase()]=n;for(var l in s)st[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[o+"."+l]=s[l]}),s},Bd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/zc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*jx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Bd(o);return s=zc/s,l.config=function(c,u){return r(e,c,u)},l},kl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bd(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Kr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Kr("Elastic",zl("in"),zl("out"),zl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(od(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-Zx(r*$x)+1});Kr("Back",kl("in"),kl("out"),kl());st.SteppedEase=st.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-on;return function(o){return((i*Oa(0,a,o)|0)+s)*n}}};Fs.ease=st["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Du+=r+","+r+"Params,"});var zd=function(e,t){this.id=Kx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_d,this.set=t?t.getSetter:Fu},wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zs(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Aa||zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nl(this,n),!s._dp||s.parent||Sd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===on||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Bs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Oa(-Math.abs(this._delay),this._tDur,s),i!==!1),tl(this),rM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==on&&(this._tTime-=on)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=eM);var i=Qt;return Qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-on)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Pt(n)?n:xd,o=function(){var c=i.then;i.then=null,Pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){na(this)},r}();Wn(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var vn=function(r){ad(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),bt&&pi(n.parent||bt,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yd(Di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ua(0,arguments,this),this},t.from=function(i,s,a){return ua(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ua(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Bt(i,s,Kn(this,a),1),this},t.call=function(i,s,a){return pi(this,Bt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Bt(i,a,Kn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ca(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,ca(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,m,p,E,T,v,R,w,b;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,T=this._ts,p=!T,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=zt(u%m),u===l?(_=this._repeat,d=c):(R=zt(u/m),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=Bs(this._tTime,m),!o&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(d=c-d,b=1),_!==R&&!this._lock){var C=w&&R&1,M=C===(w&&_&1);if(_<R&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Od(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=lM(this,zt(o),zt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(Hn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-1e-8);break}}h=g}else{h=this._last;for(var x=i<0?i:d;h;){if(g=h._prev,(h._act||x<=h._end)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,s,a||Qt&&(h._initted||h._startAt)),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=x?-1e-8:on);break}}h=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-1e-8)._zTime=d>=o?1:-1,this._ts))return this._start=v,tl(this),this.render(i,s,a);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Hi(s)||(s=Kn(this,s,i)),!(i instanceof wa)){if(cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Zt(i))return this.addLabel(i,s);if(Pt(i))i=Bt.delayedCall(0,i);else return this}return this!==i?pi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Bt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Zt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(i.parent===this&&el(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Bt.delayedCall(0,s||Ta,a);return o.data="isPause",this._hasPause=1,pi(this,o,Kn(this,i))},t.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ei(i),l=this._first,c=Hi(s),u;l;)l instanceof Bt?tM(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Kn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Bt.to(a,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||on,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&zs(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Wn({startAt:{time:Kn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jf(this,Kn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jf(this,Kn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+on)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Si,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,pi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zs(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(bt._ts&&(gd(bt,zo(i,bt)),md=zn.frame),zn.frame>=$f){$f+=Vn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(wa);Wn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var TM=function(e,t,n,i,s,a,o){var l=new Rn(this._pt,e,t,0,1,Xd,null,s),c=0,u=0,f,d,h,g,_,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ba(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),d=n.match(Fl)||[];f=Fl.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Es(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Fl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ud.test(i)||p)&&(l.e=0),this._pt=l,l},Uu=function(e,t,n,i,s,a,o,l,c,u){Pt(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Pt(f)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Pt(f)?c?CM:Gd:Nu,g;if(Zt(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(g=Es(d,i)+(sn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||$c)return!isNaN(d*i)&&i!==""?(g=new Rn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?DM:Wd,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Cu(t,i),TM.call(this,e,t,d,i,h,l||Vn.stringFilter,c))},bM=function(e,t,n,i,s){if(Pt(e)&&(e=fa(e,s,t,n,i)),!Ti(e)||e.style&&e.nodeType||cn(e)||ld(e))return Zt(e)?fa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fa(e[o],s,t,n,i);return a},kd=function(e,t,n,i,s,a){var o,l,c,u;if(On[e]&&(o=new On[e]).init(s,o.rawVars?t[e]:bM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==vs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,$c,Iu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!bu,v=e.timeline,R,w,b,C,M,x,P,N,B,Y,$,G,W;if(v&&(!d||!s)&&(s="none"),e._ease=Or(s,Fs.ease),e._yEase=f?Fd(Or(f===!0?s:f,Fs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(N=m[0]?Nr(m[0]).harness:0,G=N&&i[N.prop],R=Bo(i,Pu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?bo:Qx),_._lazy=0),a){if(cr(e._startAt=Bt.set(m,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!h)&&e._startAt.revert(bo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&An(l),immediateRender:o,stagger:0,parent:p},R),G&&(b[N.prop]=G),cr(e._startAt=Bt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(bo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,on,on);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&An(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],P=M._gsap||Lu(m)[w]._gsap,e._ptLookup[w]=Y={},Vc[P.id]&&rr.length&&Oo(),$=E===m?w:E.indexOf(M),N&&(B=new N).init(M,G||R,e,$,E)!==!1&&(e._pt=C=new Rn(e._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(H){Y[H]=C}),B.priority&&(x=1)),!N||G)for(b in R)On[b]&&(B=kd(b,R,e,$,M,E))?B.priority&&(x=1):Y[b]=C=Uu.call(e,M,b,"get",R[b],$,E,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),T&&e._pt&&(ji=e,bt.killTweensOf(M,Y,e.globalTime(t)),W=!e.parent,ji=0),e._pt&&l&&(Vc[P.id]=1)}x&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&v.render(Si,!0,!0)},AM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return $c=1,e.vars[t]="+=0",Iu(e,o),$c=0,l?Ea(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ut(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},wM=function(e,t){var n=e[0]?Nr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Os({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},RM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},fa=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):Zt(e)&&~e.indexOf("random(")?ba(e):e},Hd=Du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vd={};wn(Hd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vd[r]=1});var Bt=function(r){ad(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ca(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=i.parent||bt,T=(cn(n)||ld(n)?Hi(n[0]):"length"in i)?[n]:ei(n),v,R,w,b,C,M,x,P;if(o._targets=T.length?Lu(T):Ea("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||so(c)||so(u)){if(i=o.vars,v=o.timeline=new vn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:T}),v.kill(),v.parent=v._dp=Di(o),v._start=0,d||so(c)||so(u)){if(b=T.length,x=d&&Ad(d),Ti(d))for(C in d)~Hd.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(R=0;R<b;R++)w=Bo(i,Vd),w.stagger=0,p&&(w.yoyoEase=p),P&&Os(w,P),M=T[R],w.duration=+fa(c,Di(o),R,M,T),w.delay=(+fa(u,Di(o),R,M,T)||0)-o._delay,!d&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(M,w,x?x(R,M,T):0),v._ease=st.none;v.duration()?c=u=0:o.timeline=0}else if(g){ca(Wn(v.vars.defaults,{ease:"none"})),v._ease=Or(g.ease||i.ease||"none");var N=0,B,Y,$;if(cn(g))g.forEach(function(G){return v.to(T,G,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||RM(C,g[C],w,g.easeEach);for(C in w)for(B=w[C].sort(function(G,W){return G.t-W.t}),N=0,R=0;R<B.length;R++)Y=B[R],$={ease:Y.e,duration:(Y.t-(R?B[R-1].t:0))/100*c},$[C]=Y.v,v.to(T,$,N),N+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return h===!0&&!bu&&(ji=Di(o),bt.killTweensOf(T),ji=0),pi(E,Di(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===zt(E._time)&&An(f)&&sM(Di(o))&&E.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),m&&yd(Di(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-on&&!u?l:i<on?0:i,d,h,g,_,m,p,E,T,v;if(!c)oM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=zt(f%_),f===l?(g=this._repeat,d=c):(m=zt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=Bs(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(T&&this._yEase&&Od(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ed(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(d/c),this._from&&(this.ratio=E=1-E),d&&!o&&!s&&!g&&(Hn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(E,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gc(this,i,s,a),Hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Gc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Aa||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Iu(this,c),u=this._ease(c/this._dur),AM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(nl(this,0),this.parent||Md(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ji&&ji.vars.overwrite!==!0)._first||na(this),this.parent&&a!==this.timeline.totalDuration()&&zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ei(i):o,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&iM(o,l))return s==="all"&&(this._pt=0),na(this);for(f=this._op=this._op||[],s!=="all"&&(Zt(s)&&(_={},wn(s,function(E){return _[E]=1}),s=_),s=wM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&el(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ua(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ua(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return bt.killTweensOf(i,s,a)},e}(wa);Wn(Bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Bt[r]=function(){var e=new vn,t=Xc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nu=function(e,t,n){return e[t]=n},Gd=function(e,t,n){return e[t](n)},CM=function(e,t,n,i){return e[t](i.fp,n)},PM=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Pt(e[t])?Gd:Au(e[t])&&e.setAttribute?PM:Nu},Wd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ou=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},LM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},UM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?el(this,t,"_pt"):t.dep||(n=1),t=i;return!n},IM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Rn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wd,this.d=l||this,this.set=c||Nu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=IM,this.m=n,this.mt=s,this.tween=i},r}();wn(Du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Pu[r]=1});Gn.TweenMax=Gn.TweenLite=Bt;Gn.TimelineLite=Gn.TimelineMax=vn;bt=new vn({sortChildren:!1,defaults:Fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Nd;var Br=[],wo={},NM=[],eh=0,FM=0,Hl=function(e){return(wo[e]||NM).map(function(t){return t()})},Kc=function(){var e=Date.now(),t=[];e-eh>2&&(Hl("matchMediaInit"),Br.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=fi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Hl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),eh=e,Hl("matchMedia"))},qd=function(){function r(t,n){this.selector=n&&Yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=FM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var a=this,o=function(){var c=Tt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Yc(s)),Tt=a,f=i.apply(a,arguments),Pt(f)&&a._r.push(f),Tt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Tt;Tt=null,n(this),Tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Bt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Br.length;a--;)Br[a].id===this.id&&Br.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),OM=function(){function r(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ti(n)||(n={matches:n});var a=new qd(0,s||this.scope),o=a.conditions={},l,c,u;Tt&&!a.selector&&(a.selector=Tt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=fi.matchMedia(n[c]),l&&(Br.indexOf(a)<0&&Br.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Kc):l.addEventListener("change",Kc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ld(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Zt(e)&&(e=ei(e)[0]);var s=Nr(e||{}).get,a=n?xd:vd;return n==="native"&&(n=""),e&&(t?a((On[t]&&On[t].get||s)(e,t,n,i)):function(o,l,c){return a((On[o]&&On[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=On[t],o=Nr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;vs._pt=0,f.init(e,n?u+n:u,vs,0,[e]),f.render(1,f),vs._pt&&Ou(1,vs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Pn.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Or(e.ease,Fs.ease)),Kf(Fs,e||{})},config:function(e){return Kf(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!On[o]&&!Gn[o]&&Ea(t+" effect requires "+o+" plugin.")}),Ol[t]=function(o,l,c){return n(ei(o),Wn(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(Ol[t](o,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=Or(t)},parseEase:function(e,t){return arguments.length?Or(e,t):st},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Bt&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=s;return pi(bt,n,0),n},context:function(e,t){return e?new qd(e,t):Tt},matchMedia:function(e){return new OM(e)},matchMediaRefresh:function(){return Br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Kc()},addEventListener:function(e,t){var n=wo[e]||(wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mM,wrapYoyo:_M,distribute:Ad,random:Rd,snap:wd,normalize:pM,getUnit:sn,clamp:uM,splitColor:Ud,toArray:ei,selector:Yc,mapRange:Pd,pipe:hM,unitize:dM,interpolate:gM,shuffle:bd},install:dd,effects:Ol,ticker:zn,updateRoot:vn.updateRoot,plugins:On,globalTimeline:bt,core:{PropTween:Rn,globals:pd,Tween:Bt,Timeline:vn,Animation:wa,getCache:Nr,_removeLinkedListItem:el,reverting:function(){return Qt},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return bu=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ko[r]=Bt[r]});zn.add(vn.updateRoot);vs=ko.to({},{duration:0});var BM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=BM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Vl=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Zt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}zM(o,s)}}}},Pn=ko.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vl("roundProps",qc),Vl("modifiers"),Vl("snap",wd))||ko;Bt.version=vn.version=Pn.version="3.12.7";hd=1;wu()&&ks();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var th,Ji,Ts,Bu,Ur,nh,zu,kM=function(){return typeof window<"u"},Vi={},Ar=180/Math.PI,bs=Math.PI/180,fs=Math.atan2,ih=1e8,ku=/([A-Z])/g,HM=/(left|right|width|margin|padding|x)/i,VM=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$d=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YM=function(e,t,n){return e.style[t]=n},qM=function(e,t,n){return e.style.setProperty(t,n)},$M=function(e,t,n){return e._gsap[t]=n},KM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ZM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},jM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},At="transform",Cn=At+"Origin",JM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Vi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Li(i,o)}):this.tfm[e]=a.x?a[e]:Li(i,e),e===Cn&&(this.tfm.zOrigin=a.zOrigin);else return gi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(At)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},Zd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},QM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ku,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zu(),(!s||!s.isStart)&&!n[At]&&(Zd(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},jd=function(e,t){var n={target:e,props:[],revert:QM,save:JM};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Jd,jc=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},yi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ku,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hs(t)||t,1)||""},rh="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,n){var i=t||Ur,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(rh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?rh[a]:"")+e},Jc=function(){kM()&&window.document&&(th=window,Ji=th.document,Ts=Ji.documentElement,Ur=jc("div")||{style:{}},jc("div"),At=Hs(At),Cn=At+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jd=!!Hs("perspective"),zu=Pn.core.reverting,Bu=1)},sh=function(e){var t=e.ownerSVGElement,n=jc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ts.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ts.removeChild(n),s},ah=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qd=function(e){var t,n;try{t=e.getBBox()}catch{t=sh(e),n=1}return t&&(t.width||t.height)||n||(t=sh(e)),t&&!t.width&&!t.x&&!t.y?{x:+ah(e,["x","cx","x1"])||0,y:+ah(e,["y","cy","y1"])||0,width:0,height:0}:t},ep=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qd(e))},Xr=function(e,t){if(t){var n=e.style,i;t in Vi&&t!==Cn&&(t=At),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ku,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,s,a){var o=new Rn(e._pt,t,n,0,1,a?Kd:$d);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},oh={deg:1,rad:1,turn:1},eS={grid:1,flex:1},ur=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ur.style,l=HM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,m,p;if(i===a||!s||oh[i]||oh[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&ep(e),(h||a==="%")&&(Vi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ut(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),m=_._gsap,m&&h&&m.width&&l&&m.time===zn.time&&!m.uncache)return Ut(s/m.width*f);if(h&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+i,g=e[u],E?e.style[t]=E:Xr(e,t)}else(h||a==="%")&&!eS[yi(_,"display")]&&(o.position=yi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ur),g=Ur[u],_.removeChild(Ur),o.position="absolute";return l&&h&&(m=Nr(_),m.time=zn.time,m.width=_[u]),Ut(d?g*s/f:g&&s?f/g*s:0)},Li=function(e,t,n,i){var s;return Bu||Jc(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vo(yi(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ho[t]&&Ho[t](e,t,n)||yi(e,t)||_d(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ur(e,t,s,n)+n:s},tS=function(e,t,n,i){if(!n||n==="none"){var s=Hs(t,e,1),a=s&&yi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=yi(e,"borderTopColor"))}var o=new Rn(this._pt,e.style,t,0,1,Xd),l=0,c=0,u,f,d,h,g,_,m,p,E,T,v,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=yi(e,t)||i,_?e.style[t]=_:Xr(e,t)),u=[n,i],Nd(u),n=u[0],i=u[1],d=n.match(gs)||[],R=i.match(gs)||[],R.length){for(;f=gs.exec(i);)m=f[0],E=i.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Es(h,m)+v),p=parseFloat(m),T=m.substr((p+"").length),l=gs.lastIndex-T.length,T||(T=T||Vn.units[t]||v,l===i.length&&(i+=T,o.e+=T)),v!==T&&(h=ur(e,t,_,T)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Kd:$d;return ud.test(i)&&(o.e=0),this._pt=o,o},lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=lh[n]||n,t[1]=lh[i]||i,t.join(" ")},iS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Vi[o]&&(l=1,o=o==="transformOrigin"?Cn:At),Xr(n,o);l&&(Xr(n,At),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ca(n,1),a.uncache=1,Zd(i)))}},Ho={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Rn(e._pt,t,n,0,0,iS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ra=[1,0,0,1,0,0],tp={},np=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ch=function(e){var t=yi(e,At);return np(t)?Ra:t.substr(7).match(cd).map(Ut)},Hu=function(e,t){var n=e._gsap||Nr(e),i=e.style,s=ch(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ra:s):(s===Ra&&!e.offsetParent&&e!==Ts&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ts.appendChild(e)),s=ch(e),l?i.display=l:Xr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Hu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],T=t.split(" "),v=parseFloat(T[0])||0,R=parseFloat(T[1])||0,w,b,C,M;n?l!==Ra&&(b=h*m-g*_)&&(C=v*(m/b)+R*(-_/b)+(_*E-m*p)/b,M=v*(-g/b)+R*(h/b)-(h*E-g*p)/b,v=C,R=M):(w=Qd(e),v=w.x+(~T[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(T[1]||T[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(p=v-c,E=R-u,o.xOffset=f+(p*h+E*_)-p,o.yOffset=d+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(Qi(a,o,"xOrigin",c,v),Qi(a,o,"yOrigin",u,R),Qi(a,o,"xOffset",f,o.xOffset),Qi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+R)},Ca=function(e,t){var n=e._gsap||new zd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=yi(e,Cn)||"0",u,f,d,h,g,_,m,p,E,T,v,R,w,b,C,M,x,P,N,B,Y,$,G,W,H,te,D,ce,Le,qe,K,ne;return u=f=d=_=m=p=E=T=v=0,h=g=1,n.svg=!!(e.getCTM&&ep(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),b=Hu(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Qc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==Ra&&(P=b[0],N=b[1],B=b[2],Y=b[3],u=$=b[4],f=G=b[5],b.length===6?(h=Math.sqrt(P*P+N*N),g=Math.sqrt(Y*Y+B*B),_=P||N?fs(N,P)*Ar:0,E=B||Y?fs(B,Y)*Ar+_:0,E&&(g*=Math.abs(Math.cos(E*bs))),n.svg&&(u-=R-(R*P+w*B),f-=w-(R*N+w*Y))):(ne=b[6],qe=b[7],D=b[8],ce=b[9],Le=b[10],K=b[11],u=b[12],f=b[13],d=b[14],C=fs(ne,Le),m=C*Ar,C&&(M=Math.cos(-C),x=Math.sin(-C),W=$*M+D*x,H=G*M+ce*x,te=ne*M+Le*x,D=$*-x+D*M,ce=G*-x+ce*M,Le=ne*-x+Le*M,K=qe*-x+K*M,$=W,G=H,ne=te),C=fs(-B,Le),p=C*Ar,C&&(M=Math.cos(-C),x=Math.sin(-C),W=P*M-D*x,H=N*M-ce*x,te=B*M-Le*x,K=Y*x+K*M,P=W,N=H,B=te),C=fs(N,P),_=C*Ar,C&&(M=Math.cos(C),x=Math.sin(C),W=P*M+N*x,H=$*M+G*x,N=N*M-P*x,G=G*M-$*x,P=W,$=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Ut(Math.sqrt(P*P+N*N+B*B)),g=Ut(Math.sqrt(G*G+ne*ne)),C=fs($,G),E=Math.abs(C)>2e-4?C*Ar:0,v=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!np(yi(e,At)),W&&e.setAttribute("transform",W))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(h*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ut(h),n.scaleY=Ut(g),n.rotation=Ut(_)+o,n.rotationX=Ut(m)+o,n.rotationY=Ut(p)+o,n.skewX=E+o,n.skewY=T+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=Vo(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?sS:Jd?ip:rS,n.uncache=0,n},Vo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=sn(t);return Ut(parseFloat(t)+parseFloat(ur(e,"x",n+"px",i)))+i},rS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ip(e,t)},Sr="0deg",Js="0px",yr=") ",ip=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,T=n.zOrigin,v="",R=p==="auto"&&e&&e!==1||p===!0;if(T&&(f!==Sr||u!==Sr)){var w=parseFloat(u)*bs,b=Math.sin(w),C=Math.cos(w),M;w=parseFloat(f)*bs,M=Math.cos(w),a=Gl(E,a,b*M*-T),o=Gl(E,o,-Math.sin(w)*-T),l=Gl(E,l,C*M*-T+T)}m!==Js&&(v+="perspective("+m+yr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(R||a!==Js||o!==Js||l!==Js)&&(v+=l!==Js||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+yr),c!==Sr&&(v+="rotate("+c+yr),u!==Sr&&(v+="rotateY("+u+yr),f!==Sr&&(v+="rotateX("+f+yr),(d!==Sr||h!==Sr)&&(v+="skew("+d+", "+h+yr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+yr),E.style[At]=v||"translate(0, 0)"},sS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,T=parseFloat(a),v=parseFloat(o),R,w,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,R=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=bs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=Ut(R),w=Ut(w),b=Ut(b),C=Ut(C)):(R=f,C=d,w=b=0),(T&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(T=ur(h,"x",a,"px"),v=ur(h,"y",o,"px")),(g||_||m||p)&&(T=Ut(T+g-(g*R+_*b)+m),v=Ut(v+_-(g*w+_*C)+p)),(i||s)&&(M=h.getBBox(),T=Ut(T+i/100*M.width),v=Ut(v+s/100*M.height)),M="matrix("+R+","+w+","+b+","+C+","+T+","+v+")",h.setAttribute("transform",M),E&&(h.style[At]=M)},aS=function(e,t,n,i,s){var a=360,o=Zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),f==="cw"&&c<0?c=(c+a*ih)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ih)%a-~~(c/a)*a)),e._pt=d=new Rn(e._pt,t,n,i,c,GM),d.e=u,d.u="deg",e._props.push(n),d},uh=function(e,t){for(var n in t)e[n]=t[n];return e},oS=function(e,t,n){var i=uh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[At]=t,o=Ca(n,1),Xr(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],a[At]=t,o=Ca(n,1),a[At]=c);for(l in Vi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=sn(c),g=sn(u),f=h!==g?ur(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Rn(e._pt,o,l,f,d-f,Zc),e._pt.u=g||0,e._props.push(l));uh(o,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ho[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return Li(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,h,f)}});var rp={name:"css",register:Jc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,E,T,v,R,w,b,C;Bu||Jc(),this.styles=this.styles||jd(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(On[_]&&kd(_,t,n,i,e,s)))){if(h=typeof u,g=Ho[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ba(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(m=sn(c),p=sn(u)),p?m!==p&&(c=ur(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Zt(c)&&~c.indexOf("random(")&&(c=ba(c)),sn(c+"")||c==="auto"||(c+=Vn.units[_]||sn(Li(e,_))||""),(c+"").charAt(1)==="="&&(c=Li(e,_))):c=Li(e,_),d=parseFloat(c),E=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in gi&&(_==="autoAlpha"&&(d===1&&Li(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,o.visibility),Qi(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Vi,T){if(this.styles.save(_),v||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,v=this._pt=new Rn(this._pt,o,At,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new Rn(this._pt,R,"scaleY",R.scaleY,(E?Es(R.scaleY,E+f):f)-R.scaleY||0,Zc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Cn,0,o[Cn]),u=nS(u),R.svg?Qc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&Qi(this,R,"zOrigin",R.zOrigin,p),Qi(this,o,_,Vo(c),Vo(u)));continue}else if(_==="svgOrigin"){Qc(e,u,1,w,0,this);continue}else if(_ in tp){aS(this,R,_,d,E?Es(d,E+u):u);continue}else if(_==="smoothOrigin"){Qi(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){oS(this,u,e);continue}}else _ in o||(_=Hs(_)||_);if(T||(f||f===0)&&(d||d===0)&&!VM.test(u)&&_ in o)m=(c+"").substr((d+"").length),f||(f=0),p=sn(u)||(_ in Vn.units?Vn.units[_]:m),m!==p&&(d=ur(e,_,c,p)),this._pt=new Rn(this._pt,T?R:o,_,d,(E?Es(d,E+f):f)-d,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?XM:Zc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=WM);else if(_ in o)tS.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Cu(_,u);continue}T||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}b&&Yd(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:gi,getSetter:function(e,t,n){var i=gi[t];return i&&i.indexOf(",")<0&&(t=i),t in Vi&&t!==Cn&&(e._gsap.x||Li(e,"x"))?n&&nh===n?t==="scale"?KM:$M:(nh=n||{})&&(t==="scale"?ZM:jM):e.style&&!Au(e.style[t])?YM:~t.indexOf("-")?qM:Fu(e,t)},core:{_removeProperty:Xr,_getMatrix:Hu}};Pn.utils.checkPrefix=Hs;Pn.core.getStyleSaver=jd;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){Vi[s]=1});wn(e,function(s){Vn.units[s]="deg",tp[s]=1}),gi[i[13]]=r+","+e,wn(n,function(s){var a=s.split(":");gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Pn.registerPlugin(rp);var Go=Pn.registerPlugin(rp)||Pn;Go.core.Tween;function lS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function cS(r,e,t){return e&&lS(r.prototype,e),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jt,Ro,kn,er,tr,As,sp,wr,ha,ap,Oi,ai,op,lp=function(){return Jt||typeof window<"u"&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},cp=1,xs=[],Qe=[],Ei=[],da=Date.now,eu=function(e,t){return t},uS=function(){var e=ha.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,Ei),Qe=n,Ei=i,eu=function(a,o){return t[a](o)}},ar=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},pa=function(e){return!!~ap.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ao="scrollLeft",oo="scrollTop",tu=function(){return Oi&&Oi.isPressed||Qe.cache++},Wo=function(e,t){var n=function i(s){if(s||s===0){cp&&(kn.history.scrollRestoration="manual");var a=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),e(s),i.cacheID=Qe.cache,a&&eu("ss",s)}else(t||Qe.cache!==i.cacheID||eu("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},xn={s:ao,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wo(function(r){return arguments.length?kn.scrollTo(r,Wt.sc()):kn.pageXOffset||er[ao]||tr[ao]||As[ao]||0})},Wt={s:oo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:Wo(function(r){return arguments.length?kn.scrollTo(xn.sc(),r):kn.pageYOffset||er[oo]||tr[oo]||As[oo]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||Jt.utils.toArray)(e)[0]||(typeof e=="string"&&Jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},fr=function(e,t){var n=t.s,i=t.sc;pa(e)&&(e=er.scrollingElement||tr);var s=Qe.indexOf(e),a=i===Wt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||dn(e,"scroll",tu);var o=Qe[s+a],l=o||(Qe[s+a]=Wo(ar(e,n),!0)||(pa(e)?i:Wo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Jt.getProperty(e,"scrollBehavior")==="smooth"),l},nu=function(e,t,n){var i=e,s=e,a=da(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=da();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=da();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Qs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},up=function(){ha=Jt.core.globals().ScrollTrigger,ha&&ha.core&&uS()},fp=function(e){return Jt=e||lp(),!Ro&&Jt&&typeof document<"u"&&document.body&&(kn=window,er=document,tr=er.documentElement,As=er.body,ap=[kn,er,tr,As],Jt.utils.clamp,op=Jt.core.context||function(){},wr="onpointerenter"in As?"pointer":"mouse",sp=It.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=It.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cp=0},500),up(),Ro=1),Ro};xn.op=Wt;Qe.cache=0;var It=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ro||fp(Jt)||console.warn("Please gsap.registerPlugin(Observer)"),ha||up();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,T=n.onPress,v=n.onRelease,R=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,Y=n.onHover,$=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,H=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,Le=n.onEnable,qe=n.onDisable,K=n.onClick,ne=n.scrollSpeed,me=n.capture,ie=n.allowClicks,Te=n.lockAxis,Oe=n.onLockAxis;this.target=o=En(o)||tr,this.vars=n,h&&(h=Jt.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,ne=ne||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(As).lineHeight)||22);var Pe,et,Ze,Me,L,_t,Be,O=this,ye=0,nt=0,be=n.passive||!u&&n.passive!==!1,A=fr(o,xn),S=fr(o,Wt),z=A(),Q=S(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ai[0]==="pointerdown",Z=pa(o),ue=o.ownerDocument||er,ae=[0,0,0],he=[0,0,0],Ve=0,re=function(){return Ve=da()},se=function(Ae,We){return(O.event=Ae)&&h&&~h.indexOf(Ae.target)||We&&J&&Ae.pointerType!=="touch"||W&&W(Ae,We)},Ue=function(){O._vx.reset(),O._vy.reset(),et.pause(),f&&f(O)},De=function(){var Ae=O.deltaX=fh(ae),We=O.deltaY=fh(he),de=Math.abs(Ae)>=i,He=Math.abs(We)>=i;P&&(de||He)&&P(O,Ae,We,ae,he),de&&(R&&O.deltaX>0&&R(O),w&&O.deltaX<0&&w(O),M&&M(O),N&&O.deltaX<0!=ye<0&&N(O),ye=O.deltaX,ae[0]=ae[1]=ae[2]=0),He&&(C&&O.deltaY>0&&C(O),b&&O.deltaY<0&&b(O),x&&x(O),B&&O.deltaY<0!=nt<0&&B(O),nt=O.deltaY,he[0]=he[1]=he[2]=0),(Me||Ze)&&(G&&G(O),Ze&&(m&&Ze===1&&m(O),E&&E(O),Ze=0),Me=!1),_t&&!(_t=!1)&&Oe&&Oe(O),L&&(ce(O),L=!1),Pe=0},ve=function(Ae,We,de){ae[de]+=Ae,he[de]+=We,O._vx.update(Ae),O._vy.update(We),c?Pe||(Pe=requestAnimationFrame(De)):De()},Ge=function(Ae,We){Te&&!Be&&(O.axis=Be=Math.abs(Ae)>Math.abs(We)?"x":"y",_t=!0),Be!=="y"&&(ae[2]+=Ae,O._vx.update(Ae,!0)),Be!=="x"&&(he[2]+=We,O._vy.update(We,!0)),c?Pe||(Pe=requestAnimationFrame(De)):De()},Fe=function(Ae){if(!se(Ae,1)){Ae=Qs(Ae,u);var We=Ae.clientX,de=Ae.clientY,He=We-O.x,we=de-O.y,ke=O.isDragging;O.x=We,O.y=de,(ke||(He||we)&&(Math.abs(O.startX-We)>=s||Math.abs(O.startY-de)>=s))&&(Ze=ke?2:1,ke||(O.isDragging=!0),Ge(He,we))}},at=O.onPress=function(ge){se(ge,1)||ge&&ge.button||(O.axis=Be=null,et.pause(),O.isPressed=!0,ge=Qs(ge),ye=nt=0,O.startX=O.x=ge.clientX,O.startY=O.y=ge.clientY,O._vx.reset(),O._vy.reset(),dn(H?o:ue,ai[1],Fe,be,!0),O.deltaX=O.deltaY=0,T&&T(O))},U=O.onRelease=function(ge){if(!se(ge,1)){hn(H?o:ue,ai[1],Fe,!0);var Ae=!isNaN(O.y-O.startY),We=O.isDragging,de=We&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),He=Qs(ge);!de&&Ae&&(O._vx.reset(),O._vy.reset(),u&&ie&&Jt.delayedCall(.08,function(){if(da()-Ve>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(ue.createEvent){var we=ue.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,kn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(we)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&We&&!H&&et.restart(!0),Ze&&De(),p&&We&&p(O),v&&v(O,de)}},le=function(Ae){return Ae.touches&&Ae.touches.length>1&&(O.isGesturing=!0)&&te(Ae,O.isDragging)},q=function(){return(O.isGesturing=!1)||D(O)},j=function(Ae){if(!se(Ae)){var We=A(),de=S();ve((We-z)*ne,(de-Q)*ne,1),z=We,Q=de,f&&et.restart(!0)}},oe=function(Ae){if(!se(Ae)){Ae=Qs(Ae,u),ce&&(L=!0);var We=(Ae.deltaMode===1?l:Ae.deltaMode===2?kn.innerHeight:1)*g;ve(Ae.deltaX*We,Ae.deltaY*We,0),f&&!H&&et.restart(!0)}},fe=function(Ae){if(!se(Ae)){var We=Ae.clientX,de=Ae.clientY,He=We-O.x,we=de-O.y;O.x=We,O.y=de,Me=!0,f&&et.restart(!0),(He||we)&&Ge(He,we)}},ze=function(Ae){O.event=Ae,Y(O)},ot=function(Ae){O.event=Ae,$(O)},wt=function(Ae){return se(Ae)||Qs(Ae,u)&&K(O)};et=O._dc=Jt.delayedCall(d||.25,Ue).pause(),O.deltaX=O.deltaY=0,O._vx=nu(0,50,!0),O._vy=nu(0,50,!0),O.scrollX=A,O.scrollY=S,O.isDragging=O.isGesturing=O.isPressed=!1,op(this),O.enable=function(ge){return O.isEnabled||(dn(Z?ue:o,"scroll",tu),a.indexOf("scroll")>=0&&dn(Z?ue:o,"scroll",j,be,me),a.indexOf("wheel")>=0&&dn(o,"wheel",oe,be,me),(a.indexOf("touch")>=0&&sp||a.indexOf("pointer")>=0)&&(dn(o,ai[0],at,be,me),dn(ue,ai[2],U),dn(ue,ai[3],U),ie&&dn(o,"click",re,!0,!0),K&&dn(o,"click",wt),te&&dn(ue,"gesturestart",le),D&&dn(ue,"gestureend",q),Y&&dn(o,wr+"enter",ze),$&&dn(o,wr+"leave",ot),G&&dn(o,wr+"move",fe)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Me=Ze=!1,O._vx.reset(),O._vy.reset(),z=A(),Q=S(),ge&&ge.type&&at(ge),Le&&Le(O)),O},O.disable=function(){O.isEnabled&&(xs.filter(function(ge){return ge!==O&&pa(ge.target)}).length||hn(Z?ue:o,"scroll",tu),O.isPressed&&(O._vx.reset(),O._vy.reset(),hn(H?o:ue,ai[1],Fe,!0)),hn(Z?ue:o,"scroll",j,me),hn(o,"wheel",oe,me),hn(o,ai[0],at,me),hn(ue,ai[2],U),hn(ue,ai[3],U),hn(o,"click",re,!0),hn(o,"click",wt),hn(ue,"gesturestart",le),hn(ue,"gestureend",q),hn(o,wr+"enter",ze),hn(o,wr+"leave",ot),hn(o,wr+"move",fe),O.isEnabled=O.isPressed=O.isDragging=!1,qe&&qe(O))},O.kill=O.revert=function(){O.disable();var ge=xs.indexOf(O);ge>=0&&xs.splice(ge,1),Oi===O&&(Oi=0)},xs.push(O),H&&pa(o)&&(Oi=O),O.enable(_)},cS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();It.version="3.12.7";It.create=function(r){return new It(r)};It.register=fp;It.getAll=function(){return xs.slice()};It.getById=function(r){return xs.filter(function(e){return e.vars.id===r})[0]};lp()&&Jt.registerPlugin(It);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ps,Je,St,Bn,pt,Vu,Xo,Pa,ma,ra,lo,nn,il,iu,_n,hh,dh,ms,hp,Wl,dp,mn,ru,pp,mp,Ki,su,Gu,ws,Wu,Yo,au,Xl,co=1,rn=Date.now,Yl=rn(),ti=0,sa=0,ph=function(e,t,n){var i=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},mh=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fS=function r(){return sa&&requestAnimationFrame(r)},_h=function(){return il=1},gh=function(){return il=0},hi=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},_p=function(){return typeof window<"u"},gp=function(){return Ee||_p()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Yr=function(e){return!!~Vu.indexOf(e)},vp=function(e){return(e==="Height"?Wu:Je["inner"+e])||Bn["client"+e]||pt["client"+e]},xp=function(e){return ar(e,"getBoundingClientRect")||(Yr(e)?function(){return Uo.width=Je.innerWidth,Uo.height=Wu,Uo}:function(){return Ii(e)})},hS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?vp(s):e["client"+s])||0}},dS=function(e,t){return!t||~Ei.indexOf(e)?xp(e):function(){return Uo}},vi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ar(e,n))?a()-xp(e)()[s]:Yr(e)?(Bn[n]||pt[n])-vp(i):e[n]-e["offset"+i])},uo=function(e,t){for(var n=0;n<ms.length;n+=3)(!t||~t.indexOf(ms[n+1]))&&e(ms[n],ms[n+1],ms[n+2])},Fn=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},Rr=function(e){return typeof e=="object"},ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ql=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},hs=Math.abs,Mp="left",Sp="top",Xu="right",Yu="bottom",zr="width",kr="height",_a="Right",ga="Left",va="Top",xa="Bottom",Ot="padding",Jn="margin",Vs="Width",qu="Height",Gt="px",Qn=function(e){return Je.getComputedStyle(e)},pS=function(e){var t=Qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ii=function(e,t){var n=t&&Qn(e)[iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},qo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},yp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},mS=function(e){return function(t){return Ee.utils.snap(yp(e),t)}},$u=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},_S=function(e){return function(t,n){return $u(yp(e))(t,n.direction)}},fo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Kt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},$t=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ho=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},po={toggleActions:"play",anticipatePin:0},$o={top:0,left:0,center:.5,bottom:1,right:1},Co=function(e,t){if(Fn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $o?$o[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},mo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=St.createElement("div"),_=Yr(n)||ar(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n,E=e.indexOf("start")!==-1,T=E?c:u,v="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Wt?Xu:Yu)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Po(g,0,i,E),g},Po=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Vs]=1,s["border"+o+Vs]=0,s[n.p]=t+"px",Ee.set(e,s)},Ke=[],ou={},Da,Mh=function(){return rn()-ti>34&&(Da||(Da=requestAnimationFrame(zi)))},ds=function(){(!mn||!mn.isPressed||mn.startX>pt.clientWidth)&&(Qe.cache++,mn?Da||(Da=requestAnimationFrame(zi)):zi(),ti||$r("scrollStart"),ti=rn())},$l=function(){mp=Je.innerWidth,pp=Je.innerHeight},la=function(e){Qe.cache++,(e===!0||!nn&&!dp&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!ru||mp!==Je.innerWidth||Math.abs(Je.innerHeight-pp)>Je.innerHeight*.25))&&Xo.restart(!0)},qr={},gS=[],Ep=function r(){return $t(tt,"scrollEnd",r)||Ir(!0)},$r=function(e){return qr[e]&&qr[e].map(function(t){return t()})||gS},Nn=[],Tp=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},Ku=function(e,t){var n;for(_n=0;_n<Ke.length;_n++)n=Ke[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Yo=!0,t&&Tp(t),t||$r("revert")},bp=function(e,t){Qe.cache++,(t||!gn)&&Qe.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(Je.history.scrollRestoration=Gu=e)},gn,Hr=0,Sh,vS=function(){if(Sh!==Hr){var e=Sh=Hr;requestAnimationFrame(function(){return e===Hr&&Ir(!0)})}},Ap=function(){pt.appendChild(ws),Wu=!mn&&ws.offsetHeight||Je.innerHeight,pt.removeChild(ws)},yh=function(e){return Pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ir=function(e,t){if(Bn=St.documentElement,pt=St.body,Vu=[Je,St,Bn,pt],ti&&!e&&!Yo){Kt(tt,"scrollEnd",Ep);return}Ap(),gn=tt.isRefreshing=!0,Qe.forEach(function(i){return an(i)&&++i.cacheID&&(i.rec=i())});var n=$r("refreshInit");hp&&tt.sort(),t||Ku(),Qe.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),Yo=!1,Ke.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),au=1,yh(!0),Ke.forEach(function(i){var s=vi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),yh(!1),au=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bp(Gu,1),Xo.pause(),Hr++,gn=2,zi(2),Ke.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=tt.isRefreshing=!1,$r("refresh")},lu=0,Do=1,Ma,zi=function(e){if(e===2||!gn&&!Yo){tt.isUpdating=!0,Ma&&Ma.update(0);var t=Ke.length,n=rn(),i=n-Yl>=50,s=t&&Ke[0].scroll();if(Do=lu>s?-1:1,gn||(lu=s),i&&(ti&&!il&&n-ti>200&&(ti=0,$r("scrollEnd")),ra=Yl,Yl=n),Do<0){for(_n=t;_n-- >0;)Ke[_n]&&Ke[_n].update(0,i);Do=1}else for(_n=0;_n<t;_n++)Ke[_n]&&Ke[_n].update(0,i);tt.isUpdating=!1}Da=0},cu=[Mp,Sp,Yu,Xu,Jn+xa,Jn+_a,Jn+va,Jn+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lo=cu.concat([zr,kr,"boxSizing","max"+Vs,"max"+qu,"position",Jn,Ot,Ot+va,Ot+_a,Ot+xa,Ot+ga]),xS=function(e,t,n){Rs(n);var i=e._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Kl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=cu.length,a=t.style,o=e.style,l;s--;)l=cu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Yu]=o[Xu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[zr]=qo(e,xn)+Gt,a[kr]=qo(e,Wt)+Gt,a[Ot]=o[Jn]=o[Sp]=o[Mp]="0",Rs(i),o[zr]=o["max"+Vs]=n[zr],o[kr]=o["max"+qu]=n[kr],o[Ot]=n[Ot],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MS=/([A-Z])/g,Rs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(MS,"-$1").toLowerCase())}},_o=function(e){for(var t=Lo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Lo[s],n[Lo[s]]);return i.t=e,i},SS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Uo={left:0,top:0},Eh=function(e,t,n,i,s,a,o,l,c,u,f,d,h,g){an(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Co("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,E;if(h&&h.seek(0),isNaN(e)||(e=+e),oa(e))h&&(e=Ee.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Po(o,n,i,!0);else{an(t)&&(t=t(l));var T=(e||"0").split(" "),v,R,w,b;E=En(t,l)||pt,v=Ii(E)||{},(!v||!v.left&&!v.top)&&Qn(E).display==="none"&&(b=E.style.display,E.style.display="block",v=Ii(E),b?E.style.display=b:E.style.removeProperty("display")),R=Co(T[0],v[i.d]),w=Co(T[1]||"0",n),e=v[i.p]-c[i.p]-u+R+s-w,o&&Po(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var C=e+n,M=a._isStart;m="scroll"+i.d2,Po(a,C,i,M&&C>20||!M&&(f?Math.max(pt[m],Bn[m]):a.parentNode[m])<=C+1),f&&(c=Ii(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Gt))}return h&&E&&(m=Ii(E),h.seek(d),p=Ii(E),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},yS=/(webkit|moz|length|cssText|inset)/i,Th=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=Qn(e);for(a in o)!+a&&!yS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},wp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},go=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},bh=function(e,t){var n=fr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var _=wp(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&zi()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Kt(e,"wheel",n.wheelHandler),tt.isTouch&&Kt(e,"touchmove",n.wheelHandler),s},tt=function(){function r(t,n){ps||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),su(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sa){this.update=this.refresh=this.kill=hi;return}n=vh(Fn(n)||oa(n)||n.nodeType?{trigger:n}:n,po);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,T=s.once,v=s.snap,R=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Wt,P=!f&&f!==0,N=En(n.scroller||Je),B=Ee.core.getCache(N),Y=Yr(N),$=("pinType"in n?n.pinType:ar(N,"pinType")||Y&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:po.markers,te=Y?0:parseFloat(Qn(N)["border"+x.p2+Vs])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Le=hS(N,Y,x),qe=dS(N,Y),K=0,ne=0,me=0,ie=fr(N,x),Te,Oe,Pe,et,Ze,Me,L,_t,Be,O,ye,nt,be,A,S,z,Q,J,Z,ue,ae,he,Ve,re,se,Ue,De,ve,Ge,Fe,at,U,le,q,j,oe,fe,ze,ot;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=N,D.scroll=b?b.time.bind(b):ie,et=ie(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(hp=1,n.refreshPriority===-9999&&(Ma=D)),B.tweenScroll=B.tweenScroll||{top:bh(N,Wt),left:bh(N,xn)},D.tweenTo=Te=B.tweenScroll[x.p],D.scrubDuration=function(de){le=oa(de)&&de,le?U?U.duration(de):U=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Fe=0,l||(l=i.vars.id)),v&&((!Rr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&Ee.set(Y?[pt,Bn]:N,{scrollBehavior:"auto"}),Qe.forEach(function(de){return an(de)&&de.target===(Y?St.scrollingElement||Bn:N)&&(de.smooth=!1)}),Pe=an(v.snapTo)?v.snapTo:v.snapTo==="labels"?mS(i):v.snapTo==="labelsDirectional"?_S(i):v.directional!==!1?function(de,He){return $u(v.snapTo)(de,rn()-ne<500?0:He.direction)}:Ee.utils.snap(v.snapTo),q=v.duration||{min:.1,max:2},q=Rr(q)?ma(q.min,q.max):ma(q,q),j=Ee.delayedCall(v.delay||le/2||.1,function(){var de=ie(),He=rn()-ne<500,we=Te.tween;if((He||Math.abs(D.getVelocity())<10)&&!we&&!il&&K!==de){var ke=(de-Me)/A,Lt=i&&!P?i.totalProgress():ke,je=He?0:(Lt-at)/(rn()-ra)*1e3||0,Mt=Ee.utils.clamp(-ke,1-ke,hs(je/2)*je/.185),kt=ke+(v.inertia===!1?0:Mt),gt,vt,ft=v,Dn=ft.onStart,yt=ft.onInterrupt,un=ft.onComplete;if(gt=Pe(kt,D),oa(gt)||(gt=kt),vt=Math.max(0,Math.round(Me+gt*A)),de<=L&&de>=Me&&vt!==de){if(we&&!we._initted&&we.data<=hs(vt-de))return;v.inertia===!1&&(Mt=gt-ke),Te(vt,{duration:q(hs(Math.max(hs(kt-Lt),hs(gt-Lt))*.185/je/.05||0)),ease:v.ease||"power3",data:hs(vt-de),onInterrupt:function(){return j.restart(!0)&&yt&&yt(D)},onComplete:function(){D.update(),K=ie(),i&&!P&&(U?U.resetTo("totalProgress",gt,i._tTime/i._tDur):i.progress(gt)),Fe=at=i&&!P?i.totalProgress():D.progress,E&&E(D),un&&un(D)}},de,Mt*A,vt-de-Mt*A),Dn&&Dn(D,Te.tween)}}else D.isActive&&K!==de&&j.restart(!0)}).pause()),l&&(ou[l]=D),d=D.trigger=En(d||h!==!0&&h),ot=d&&d._gsap&&d._gsap.stRevert,ot&&(ot=ot(D)),h=h===!0?d:En(h),Fn(o)&&(o={targets:d,className:o}),h&&(g===!1||g===Jn||(g=!g&&h.parentNode&&h.parentNode.style&&Qn(h.parentNode).display==="flex"?!1:Ot),D.pin=h,Oe=Ee.core.getCache(h),Oe.spacer?S=Oe.pinState:(w&&(w=En(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oe.spacerIsNative=!!w,w&&(Oe.spacerState=_o(w))),Oe.spacer=J=w||St.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Oe.pinState=S=_o(h)),n.force3D!==!1&&Ee.set(h,{force3D:!0}),D.spacer=J=Oe.spacer,Ge=Qn(h),re=Ge[g+x.os2],ue=Ee.getProperty(h),ae=Ee.quickSetter(h,x.a,Gt),Kl(h,J,Ge),Q=_o(h)),H){nt=Rr(H)?vh(H,xh):xh,O=mo("scroller-start",l,N,x,nt,0),ye=mo("scroller-end",l,N,x,nt,0,O),Z=O["offset"+x.op.d2];var wt=En(ar(N,"content")||N);_t=this.markerStart=mo("start",l,wt,x,nt,Z,0,b),Be=this.markerEnd=mo("end",l,wt,x,nt,Z,0,b),b&&(ze=Ee.quickSetter([_t,Be],x.a,Gt)),!$&&!(Ei.length&&ar(N,"fixedMarkers")===!0)&&(pS(Y?pt:N),Ee.set([O,ye],{force3D:!0}),Ue=Ee.quickSetter(O,x.a,Gt),ve=Ee.quickSetter(ye,x.a,Gt))}if(b){var ge=b.vars.onUpdate,Ae=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),ge&&ge.apply(b,Ae||[])})}if(D.previous=function(){return Ke[Ke.indexOf(D)-1]},D.next=function(){return Ke[Ke.indexOf(D)+1]},D.revert=function(de,He){if(!He)return D.kill(!0);var we=de!==!1||!D.enabled,ke=nn;we!==D.isReverted&&(we&&(oe=Math.max(ie(),D.scroll.rec||0),me=D.progress,fe=i&&i.progress()),_t&&[_t,Be,O,ye].forEach(function(Lt){return Lt.style.display=we?"none":"block"}),we&&(nn=D,D.update(we)),h&&(!R||!D.isActive)&&(we?xS(h,J,S):Kl(h,J,Qn(h),se)),we||D.update(we),nn=ke,D.isReverted=we)},D.refresh=function(de,He,we,ke){if(!((nn||!D.enabled)&&!He)){if(h&&de&&ti){Kt(r,"scrollEnd",Ep);return}!gn&&ce&&ce(D),nn=D,Te.tween&&!we&&(Te.tween.kill(),Te.tween=0),U&&U.pause(),_&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Lt=Le(),je=qe(),Mt=b?b.duration():vi(N,x),kt=A<=.01,gt=0,vt=ke||0,ft=Rr(we)?we.end:n.end,Dn=n.endTrigger||d,yt=Rr(we)?we.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),un=D.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,D),Xn=d&&Math.max(0,Ke.indexOf(D))||0,Ht=Xn,Vt,y,F,V,k,I,ee,pe,Se,xe,Ce,Ne,Re;for(H&&Rr(we)&&(Ne=Ee.getProperty(O,x.p),Re=Ee.getProperty(ye,x.p));Ht-- >0;)I=Ke[Ht],I.end||I.refresh(0,1)||(nn=D),ee=I.pin,ee&&(ee===d||ee===h||ee===un)&&!I.isReverted&&(xe||(xe=[]),xe.unshift(I),I.revert(!0,!0)),I!==Ke[Ht]&&(Xn--,Ht--);for(an(yt)&&(yt=yt(D)),yt=ph(yt,"start",D),Me=Eh(yt,d,Lt,x,ie(),_t,O,D,je,te,$,Mt,b,D._startClamp&&"_startClamp")||(h?-.001:0),an(ft)&&(ft=ft(D)),Fn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Fn(yt)?yt.split(" ")[0]:"")+ft:(gt=Co(ft.substr(2),Lt),ft=Fn(yt)?yt:(b?Ee.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Me):Me)+gt,Dn=d)),ft=ph(ft,"end",D),L=Math.max(Me,Eh(ft||(Dn?"100% 0":Mt),Dn,Lt,x,ie()+gt,Be,ye,D,je,te,$,Mt,b,D._endClamp&&"_endClamp"))||-.001,gt=0,Ht=Xn;Ht--;)I=Ke[Ht],ee=I.pin,ee&&I.start-I._pinPush<=Me&&!b&&I.end>0&&(Vt=I.end-(D._startClamp?Math.max(0,I.start):I.start),(ee===d&&I.start-I._pinPush<Me||ee===un)&&isNaN(yt)&&(gt+=Vt*(1-I.progress)),ee===h&&(vt+=Vt));if(Me+=gt,L+=gt,D._startClamp&&(D._startClamp+=gt),D._endClamp&&!gn&&(D._endClamp=L||-.001,L=Math.min(L,vi(N,x))),A=L-Me||(Me-=.01)&&.001,kt&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(Me,L,oe))),D._pinPush=vt,_t&&gt&&(Vt={},Vt[x.a]="+="+gt,un&&(Vt[x.p]="-="+ie()),Ee.set([_t,Be],Vt)),h&&!(au&&D.end>=vi(N,x)))Vt=Qn(h),V=x===Wt,F=ie(),he=parseFloat(ue(x.a))+vt,!Mt&&L>1&&(Ce=(Y?St.scrollingElement||Bn:N).style,Ce={style:Ce,value:Ce["overflow"+x.a.toUpperCase()]},Y&&Qn(pt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Ce.style["overflow"+x.a.toUpperCase()]="scroll")),Kl(h,J,Vt),Q=_o(h),y=Ii(h,!0),pe=$&&fr(N,V?xn:Wt)(),g?(se=[g+x.os2,A+vt+Gt],se.t=J,Ht=g===Ot?qo(h,x)+A+vt:0,Ht&&(se.push(x.d,Ht+Gt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=Ht+Gt)),Rs(se),un&&Ke.forEach(function($e){$e.pin===un&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),$&&ie(oe)):(Ht=qo(h,x),Ht&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=Ht+Gt)),$&&(k={top:y.top+(V?F-Me:pe)+Gt,left:y.left+(V?pe:F-Me)+Gt,boxSizing:"border-box",position:"fixed"},k[zr]=k["max"+Vs]=Math.ceil(y.width)+Gt,k[kr]=k["max"+qu]=Math.ceil(y.height)+Gt,k[Jn]=k[Jn+va]=k[Jn+_a]=k[Jn+xa]=k[Jn+ga]="0",k[Ot]=Vt[Ot],k[Ot+va]=Vt[Ot+va],k[Ot+_a]=Vt[Ot+_a],k[Ot+xa]=Vt[Ot+xa],k[Ot+ga]=Vt[Ot+ga],z=SS(S,k,R),gn&&ie(0)),i?(Se=i._initted,Wl(1),i.render(i.duration(),!0,!0),Ve=ue(x.a)-he+A+vt,De=Math.abs(A-Ve)>1,$&&De&&z.splice(z.length-2,2),i.render(0,!0,!0),Se||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Wl(0)):Ve=A,Ce&&(Ce.value?Ce.style["overflow"+x.a.toUpperCase()]=Ce.value:Ce.style.removeProperty("overflow-"+x.a));else if(d&&ie()&&!b)for(y=d.parentNode;y&&y!==pt;)y._pinOffset&&(Me-=y._pinOffset,L-=y._pinOffset),y=y.parentNode;xe&&xe.forEach(function($e){return $e.revert(!1,!0)}),D.start=Me,D.end=L,et=Ze=gn?oe:ie(),!b&&!gn&&(et<oe&&ie(oe),D.scroll.rec=0),D.revert(!1,!0),ne=rn(),j&&(K=-1,j.restart(!0)),nn=0,i&&P&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe||0,!0).render(i.time(),!0,!0),(kt||me!==D.progress||b||_||i&&!i._initted)&&(i&&!P&&i.totalProgress(b&&Me<-.001&&!me?Ee.utils.normalize(Me,L,0):me,!0),D.progress=kt||(et-Me)/A===me?0:me),h&&g&&(J._pinOffset=Math.round(D.progress*Ve)),U&&U.invalidate(),isNaN(Ne)||(Ne-=Ee.getProperty(O,x.p),Re-=Ee.getProperty(ye,x.p),go(O,x,Ne),go(_t,x,Ne-(ke||0)),go(ye,x,Re),go(Be,x,Re-(ke||0))),kt&&!gn&&D.update(),u&&!gn&&!be&&(be=!0,u(D),be=!1)}},D.getVelocity=function(){return(ie()-Ze)/(rn()-ra)*1e3||0},D.endAnimation=function(){ea(D.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||ea(i,D.direction<0,1):ea(i,i.reversed()))},D.labelToScroll=function(de){return i&&i.labels&&(Me||D.refresh()||Me)+i.labels[de]/i.duration()*A||0},D.getTrailing=function(de){var He=Ke.indexOf(D),we=D.direction>0?Ke.slice(0,He).reverse():Ke.slice(He+1);return(Fn(de)?we.filter(function(ke){return ke.vars.preventOverlaps===de}):we).filter(function(ke){return D.direction>0?ke.end<=Me:ke.start>=L})},D.update=function(de,He,we){if(!(b&&!we&&!de)){var ke=gn===!0?oe:D.scroll(),Lt=de?0:(ke-Me)/A,je=Lt<0?0:Lt>1?1:Lt||0,Mt=D.progress,kt,gt,vt,ft,Dn,yt,un,Xn;if(He&&(Ze=et,et=b?ie():ke,v&&(at=Fe,Fe=i&&!P?i.totalProgress():je)),m&&h&&!nn&&!co&&ti&&(!je&&Me<ke+(ke-Ze)/(rn()-ra)*m?je=1e-4:je===1&&L>ke+(ke-Ze)/(rn()-ra)*m&&(je=.9999)),je!==Mt&&D.enabled){if(kt=D.isActive=!!je&&je<1,gt=!!Mt&&Mt<1,yt=kt!==gt,Dn=yt||!!je!=!!Mt,D.direction=je>Mt?1:-1,D.progress=je,Dn&&!nn&&(vt=je&&!Mt?0:je===1?1:Mt===1?2:3,P&&(ft=!yt&&W[vt+1]!=="none"&&W[vt+1]||W[vt],Xn=i&&(ft==="complete"||ft==="reset"||ft in i))),M&&(yt||Xn)&&(Xn||f||!i)&&(an(M)?M(D):D.getTrailing(M).forEach(function(F){return F.endAnimation()})),P||(U&&!nn&&!co?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",je,i._tTime/i._tDur):(U.vars.totalProgress=je,U.invalidate().restart())):i&&i.totalProgress(je,!!(nn&&(ne||de)))),h){if(de&&g&&(J.style[g+x.os2]=re),!$)ae(aa(he+Ve*je));else if(Dn){if(un=!de&&je>Mt&&L+1>ke&&ke+1>=vi(N,x),R)if(!de&&(kt||un)){var Ht=Ii(h,!0),Vt=ke-Me;Th(h,pt,Ht.top+(x===Wt?Vt:0)+Gt,Ht.left+(x===Wt?0:Vt)+Gt)}else Th(h,J);Rs(kt||un?z:Q),De&&je<1&&kt||ae(he+(je===1&&!un?Ve:0))}}v&&!Te.tween&&!nn&&!co&&j.restart(!0),o&&(yt||T&&je&&(je<1||!Xl))&&Pa(o.targets).forEach(function(F){return F.classList[kt||T?"add":"remove"](o.className)}),a&&!P&&!de&&a(D),Dn&&!nn?(P&&(Xn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),a&&a(D)),(yt||!Xl)&&(c&&yt&&ql(D,c),G[vt]&&ql(D,G[vt]),T&&(je===1?D.kill(!1,1):G[vt]=0),yt||(vt=je===1?1:3,G[vt]&&ql(D,G[vt]))),C&&!kt&&Math.abs(D.getVelocity())>(oa(C)?C:2500)&&(ea(D.callbackAnimation),U?U.progress(1):ea(i,ft==="reverse"?1:!je,1))):P&&a&&!nn&&a(D)}if(ve){var y=b?ke/b.duration()*(b._caScrollDist||0):ke;Ue(y+(O._isFlipped?1:0)),ve(y)}ze&&ze(-ke/b.duration()*(b._caScrollDist||0))}},D.enable=function(de,He){D.enabled||(D.enabled=!0,Kt(N,"resize",la),Y||Kt(N,"scroll",ds),ce&&Kt(r,"refreshInit",ce),de!==!1&&(D.progress=me=0,et=Ze=K=ie()),He!==!1&&D.refresh())},D.getTween=function(de){return de&&Te?Te.tween:U},D.setPositions=function(de,He,we,ke){if(b){var Lt=b.scrollTrigger,je=b.duration(),Mt=Lt.end-Lt.start;de=Lt.start+Mt*de/je,He=Lt.start+Mt*He/je}D.refresh(!1,!1,{start:mh(de,we&&!!D._startClamp),end:mh(He,we&&!!D._endClamp)},ke),D.update()},D.adjustPinSpacing=function(de){if(se&&de){var He=se.indexOf(x.d)+1;se[He]=parseFloat(se[He])+de+Gt,se[1]=parseFloat(se[1])+de+Gt,Rs(se)}},D.disable=function(de,He){if(D.enabled&&(de!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,He||U&&U.pause(),oe=0,Oe&&(Oe.uncache=1),ce&&$t(r,"refreshInit",ce),j&&(j.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!Y)){for(var we=Ke.length;we--;)if(Ke[we].scroller===N&&Ke[we]!==D)return;$t(N,"resize",la),Y||$t(N,"scroll",ds)}},D.kill=function(de,He){D.disable(de,He),U&&!He&&U.kill(),l&&delete ou[l];var we=Ke.indexOf(D);we>=0&&Ke.splice(we,1),we===_n&&Do>0&&_n--,we=0,Ke.forEach(function(ke){return ke.scroller===D.scroller&&(we=1)}),we||gn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),He||i.kill()),_t&&[_t,Be,O,ye].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Ma===D&&(Ma=0),h&&(Oe&&(Oe.uncache=1),we=0,Ke.forEach(function(ke){return ke.pin===h&&we++}),we||(Oe.spacer=0)),n.onKill&&n.onKill(D)},Ke.push(D),D.enable(!1,!1),ot&&ot(D),i&&i.add&&!A){var We=D.update;D.update=function(){D.update=We,Qe.cache++,Me||L||D.refresh()},Ee.delayedCall(.01,D.update),A=.01,Me=L=0}else D.refresh();h&&vS()},r.register=function(n){return ps||(Ee=n||gp(),_p()&&window.document&&r.enable(),ps=sa),ps},r.defaults=function(n){if(n)for(var i in n)po[i]=n[i];return po},r.disable=function(n,i){sa=0,Ke.forEach(function(a){return a[i?"kill":"disable"](n)}),$t(Je,"wheel",ds),$t(St,"scroll",ds),clearInterval(lo),$t(St,"touchcancel",hi),$t(pt,"touchstart",hi),fo($t,St,"pointerdown,touchstart,mousedown",_h),fo($t,St,"pointerup,touchend,mouseup",gh),Xo.kill(),uo($t);for(var s=0;s<Qe.length;s+=3)ho($t,Qe[s],Qe[s+1]),ho($t,Qe[s],Qe[s+2])},r.enable=function(){if(Je=window,St=document,Bn=St.documentElement,pt=St.body,Ee&&(Pa=Ee.utils.toArray,ma=Ee.utils.clamp,su=Ee.core.context||hi,Wl=Ee.core.suppressOverwrites||hi,Gu=Je.history.scrollRestoration||"auto",lu=Je.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),pt)){sa=1,ws=document.createElement("div"),ws.style.height="100vh",ws.style.position="absolute",Ap(),fS(),It.register(Ee),r.isTouch=It.isTouch,Ki=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ru=It.isTouch===1,Kt(Je,"wheel",ds),Vu=[Je,St,Bn,pt],Ee.matchMedia?(r.matchMedia=function(c){var u=Ee.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ee.addEventListener("matchMediaInit",function(){return Ku()}),Ee.addEventListener("matchMediaRevert",function(){return Tp()}),Ee.addEventListener("matchMedia",function(){Ir(0,1),$r("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return $l(),$l})):console.warn("Requires GSAP 3.11.0 or later"),$l(),Kt(St,"scroll",ds);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,a=Ee.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ii(pt),Wt.m=Math.round(o.top+Wt.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),lo=setInterval(Mh,250),Ee.delayedCall(.5,function(){return co=0}),Kt(St,"touchcancel",hi),Kt(pt,"touchstart",hi),fo(Kt,St,"pointerdown,touchstart,mousedown",_h),fo(Kt,St,"pointerup,touchend,mouseup",gh),iu=Ee.utils.checkPrefix("transform"),Lo.push(iu),ps=rn(),Xo=Ee.delayedCall(.2,Ir).pause(),ms=[St,"visibilitychange",function(){var c=Je.innerWidth,u=Je.innerHeight;St.hidden?(hh=c,dh=u):(hh!==c||dh!==u)&&la()},St,"DOMContentLoaded",Ir,Je,"load",Ir,Je,"resize",la],uo(Kt),Ke.forEach(function(c){return c.enable(0,1)}),l=0;l<Qe.length;l+=3)ho($t,Qe[l],Qe[l+1]),ho($t,Qe[l],Qe[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Xl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lo)||(lo=i)&&setInterval(Mh,i),"ignoreMobileResize"in n&&(ru=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uo($t)||uo(Kt,n.autoRefreshEvents||"none"),dp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),a=Qe.indexOf(s),o=Yr(s);~a&&Qe.splice(a,o?6:2),i&&(o?Ei.unshift(Je,i,pt,i,Bn,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Fn(n)?En(n):n).getBoundingClientRect(),o=a[s?zr:kr]*i||0;return s?a.right-o>0&&a.left+o<Je.innerWidth:a.bottom-o>0&&a.top+o<Je.innerHeight},r.positionInViewport=function(n,i,s){Fn(n)&&(n=En(n));var a=n.getBoundingClientRect(),o=a[s?zr:kr],l=i==null?o/2:i in $o?$o[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Je.innerWidth:(a.top+l)/Je.innerHeight},r.killAll=function(n){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=qr.killAll||[];qr={},i.forEach(function(s){return s()})}},r}();tt.version="3.12.7";tt.saveStyles=function(r){return r?Pa(r).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),su())}}):Nn};tt.revert=function(r,e){return Ku(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?la(!0):(ps||tt.register())&&Ir(!0)};tt.update=function(r){return++Qe.cache&&zi(r===!0?2:0)};tt.clearScrollMemory=bp;tt.maxScroll=function(r,e){return vi(r,e?xn:Wt)};tt.getScrollFunc=function(r,e){return fr(En(r),e?xn:Wt)};tt.getById=function(r){return ou[r]};tt.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!ti};tt.snapDirectional=$u;tt.addEventListener=function(r,e){var t=qr[r]||(qr[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Ee.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&an(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return an(s)&&(s=s(),Kt(tt,"refresh",function(){return s=e.batchMax()})),Pa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var Ah=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Zl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===Bn&&r(pt,t)},vo={auto:1,scroll:1},ES=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ee.core.getCache(s),o=rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vo[(l=Qn(s)).overflowY]||vo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Yr(s)&&(vo[(l=Qn(s)).overflowY]||vo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rp=function(e,t,n,i){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ES,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Kt(St,It.eventTypes[0],Rh,!1,!0)},onDisable:function(){return $t(St,It.eventTypes[0],Rh,!0)}})},TS=/(input|label|select|textarea)/i,wh,Rh=function(e){var t=TS.test(e.target.tagName);(t||wh)&&(e._gsapAllow=!0,wh=t)},bS=function(e){Rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=En(e.target)||Bn,u=Ee.core.globals().ScrollSmoother,f=u&&u.get(),d=Ki&&(e.content&&En(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=fr(c,Wt),g=fr(c,xn),_=1,m=(It.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,p=0,E=an(i)?function(){return i(o)}:function(){return i||2.8},T,v,R=Rp(c,e.type,!0,s),w=function(){return v=!1},b=hi,C=hi,M=function(){l=vi(c,Wt),C=ma(Ki?1:0,l),n&&(b=ma(0,vi(c,xn))),T=Hr},x=function(){d._gsap.y=aa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var H=aa(o.deltaY/2),te=C(h.v-H);if(d&&te!==h.v+h.offset){h.offset=te-h.v;var D=aa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",h.cacheID=Qe.cache,zi()}return!0}h.offset&&x(),v=!0},N,B,Y,$,G=function(){M(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(W){return Ki&&W.type==="touchmove"&&P()||_>1.05&&W.type!=="touchstart"||o.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){v=!1;var W=_;_=aa((Je.visualViewport&&Je.visualViewport.scale||1)/m),N.pause(),W!==_&&Zl(c,_>1.01?!0:n?!1:"x"),B=g(),Y=h(),M(),T=Hr},e.onRelease=e.onGestureStart=function(W,H){if(h.offset&&x(),!H)$.restart(!0);else{Qe.cache++;var te=E(),D,ce;n&&(D=g(),ce=D+te*.05*-W.velocityX/.227,te*=Ah(g,D,ce,vi(c,xn)),N.vars.scrollX=b(ce)),D=h(),ce=D+te*.05*-W.velocityY/.227,te*=Ah(h,D,ce,vi(c,Wt)),N.vars.scrollY=C(ce),N.invalidate().duration(te).play(.01),(Ki&&N.vars.scrollY>=l||D>=l-1)&&Ee.to({},{onUpdate:G,duration:te})}a&&a(W)},e.onWheel=function(){N._ts&&N.pause(),rn()-p>1e3&&(T=0,p=rn())},e.onChange=function(W,H,te,D,ce){if(Hr!==T&&M(),H&&n&&g(b(D[2]===H?B+(W.startX-W.x):g()+H-D[1])),te){h.offset&&x();var Le=ce[2]===te,qe=Le?Y+W.startY-W.y:h()+te-ce[1],K=C(qe);Le&&qe!==K&&(Y+=K-qe),h(K)}(te||H)&&zi()},e.onEnable=function(){Zl(c,n?!1:"x"),tt.addEventListener("refresh",G),Kt(Je,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Zl(c,!0),$t(Je,"resize",G),tt.removeEventListener("refresh",G),R.kill()},e.lockAxis=e.lockAxis!==!1,o=new It(e),o.iOS=Ki,Ki&&!h()&&h(1),Ki&&Ee.ticker.add(hi),$=o._dc,N=Ee.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:wp(h,h(),function(){return N.pause()})},onUpdate:zi,onComplete:$.vars.onComplete}),o};tt.sort=function(r){if(an(r))return Ke.sort(r);var e=Je.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Je.innerHeight}),Ke.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new It(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var e=r instanceof It?r:bS(r);return mn&&mn.target===e.target&&mn.kill(),Yr(e.target)&&(mn=e),e};tt.core={_getVelocityProp:nu,_inputObserver:Rp,_scrollers:Qe,_proxies:Ei,bridge:{ss:function(){ti||$r("scrollStart"),ti=rn()},ref:function(){return nn}}};gp()&&Ee.registerPlugin(tt);Go.registerPlugin(tt);class AS extends Vx{constructor(){super(),this.planetGroup=new _i,this.planetArray=[],this.RADIUS=600;const e=new Qh,t=document.querySelector(".progress");e.onProgress=function(o,l,c){t.textContent="Loading file: "+o+`.
Loaded `+l+" of "+c+" files.",console.log("Loading file: "+o+`.
Loaded `+l+" of "+c+" files.")},e.onLoad=function(){t.textContent="complete!",Go.to(t,{opacity:0,duration:3})},this.setHelpers(),this.earth=new Wx(e),this.mars=new Xx(e),this.venus=new Yx(e),this.pluto=new qx(e),this.planetArray.push(this.earth,this.mars,this.venus,this.pluto),this.setPlanetPositions();let n=!1,i=0;const s=document.querySelector(".desc-text"),a=document.querySelector(".desc-title");window.addEventListener("wheel",o=>{if(n)return;const l=o.deltaY>0?-1:1;i+=l*Math.PI/2,n=!0;const c=Go.timeline();c.to(this.planetGroup.rotation,{y:i,duration:1,onComplete:()=>{n=!1}}),c.to(".desc",{scale:0,opacity:0,duration:.2,onComplete:()=>{switch(Math.floor(Math.abs(i)%(Math.PI*2))){case 0:a.textContent="Earth",s.textContent="こんな美しい惑星ある？";break;case 1:a.textContent="Mars",s.textContent="地球のすぐ外側を公転してる";break;case 3:a.textContent="Venus",s.textContent="地球に最も近い惑星";break;case 4:a.textContent="Pluto",s.textContent="太陽から最も遠い天体";break}}},0),c.to(".desc",{scale:1,opacity:1,duration:.2,ease:"back"},.8)}),this.startRendering()}setHelpers(){this.scene.add(new Gx)}setPlanetPositions(){for(let e=0;e<this.planetArray.length;e++){const t=this.planetArray[e],n=(e+1)*(360/this.planetArray.length)*Math.PI/180;t.position.x=this.RADIUS*Math.sin(n),t.position.z=this.RADIUS*Math.cos(n),this.planetGroup.add(t)}this.scene.add(this.planetGroup)}onAnimate(){this.planetArray.forEach(e=>{e.update()})}}new AS;
