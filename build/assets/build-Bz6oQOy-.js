var se=Object.defineProperty;var oe=(b,u,x)=>u in b?se(b,u,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[u]=x;var g=(b,u,x)=>oe(b,typeof u!="symbol"?u+"":u,x);import{b as le,A as ue}from"./lib-C2qaLi0h.js";import{_ as ce}from"./preload-helper-Tcd9XBoB.js";let R,M,_e=(async()=>{const b=""+new URL("lightningcss_node-C18-A6e3.wasm",import.meta.url).href,u=0,x=9,L=10,N=13,k=22,W=1,z=2,q=4,Q=1024,j=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],o=[];class G{constructor(e){g(this,"scopes",[]);g(this,"referenceId",1);g(this,"references",new Map);g(this,"wrappedObjects",new WeakMap);g(this,"externalObjects",new WeakMap);g(this,"buffers",new Map);g(this,"instanceData",0);g(this,"pendingException",null);g(this,"_u32",new Uint32Array);g(this,"_i32",new Int32Array);g(this,"_u16",new Uint16Array);g(this,"_u64",new BigUint64Array);g(this,"_i64",new BigInt64Array);g(this,"_f64",new Float64Array);g(this,"_buf",new Uint8Array);this.id=o.length,o.push(this),this.instance=e,this.table=e.exports.__indirect_function_table,this.exports={},this.pushScope();let t=this.scopes[this.scopes.length-1],n=t.length;t.push(this.exports);try{this.instance.exports.napi_register_module_v1(this.id,n),this.instance.exports.napi_register_wasm_v1&&this.instance.exports.napi_register_wasm_v1(this.id,n)}finally{if(this.popScope(),this.pendingException){let a=this.pendingException;throw this.pendingException=null,a}}}destroy(){o[this.id]=void 0}getString(e,t=X(this.memory,e)){return U.decode(this.memory.subarray(e,e+t))}pushScope(){let e=this.scopes.length;return this.scopes.push([void 0,null,globalThis,!0,!1]),e}popScope(){this.scopes.pop();for(let[e,t]of this.buffers)e.byteLength&&t.byteLength&&e.set(t);this.buffers.clear()}get(e){return this.scopes[this.scopes.length-1][e]}set(e,t){this.scopes[this.scopes.length-1][e]=t}pushValue(e){let t=this.scopes[this.scopes.length-1],n=t.length;return t.push(e),n}createValue(e,t){if(typeof e=="boolean")return this.setPointer(t,e?3:4),u;if(typeof e>"u")return this.setPointer(t,0),u;if(e===null)return this.setPointer(t,1),u;if(e===globalThis)return this.setPointer(t,2),u;let n=this.pushValue(e);return this.setPointer(t,n),u}setPointer(e,t){return this.u32[e>>2]=t,u}get u32(){return this._u32.byteLength===0&&(this._u32=new Uint32Array(this.instance.exports.memory.buffer)),this._u32}get i32(){return this._i32.byteLength===0&&(this._i32=new Int32Array(this.instance.exports.memory.buffer)),this._i32}get u16(){return this._u16.byteLength===0&&(this._u16=new Uint16Array(this.instance.exports.memory.buffer)),this._u16}get u64(){return this._u64.byteLength===0&&(this._u64=new BigUint64Array(this.instance.exports.memory.buffer)),this._u64}get i64(){return this._i64.byteLength===0&&(this._i64=new BigInt64Array(this.instance.exports.memory.buffer)),this._i64}get f64(){return this._f64.byteLength===0&&(this._f64=new Float64Array(this.instance.exports.memory.buffer)),this._f64}get memory(){return this._buf.byteLength===0&&(this._buf=new Uint8Array(this.instance.exports.memory.buffer)),this._buf}getBufferInfo(e,t){if(this.buffers.has(e)){let a=this.buffers.get(e);return this.setPointer(t,a.byteOffset),a.byteLength}if(e instanceof ArrayBuffer){let a=this.copyBuffer(new Uint8Array(e));return this.setPointer(t,a.byteOffset),a.byteLength}if(e.buffer===this.instance.exports.memory.buffer)return this.setPointer(t,e.byteOffset),e.byteLength;let n=this.copyBuffer(new Uint8Array(e.buffer,e.byteOffset,e.byteLength));return this.setPointer(t,n.byteOffset),n.byteLength}copyBuffer(e){let t=this.instance.exports.napi_wasm_malloc(e.byteLength),n=this.memory;n.set(e,t);let a=n.subarray(t,t+e.byteLength);return this.buffers.set(e,a),a}createFunction(e,t){let n=this,a=n.table.get(e);return function(...i){let s=n.pushScope();try{let l=n.scopes[s],c=l.length;l.push({thisArg:this,args:i,data:t,newTarget:new.target});let _=a(n.id,c);return n.get(_)}finally{if(n.popScope(),n.pendingException){let l=n.pendingException;throw n.pendingException=null,l}}}}readPropertyDescriptor(e){let t=this.u32,n=t[e++],a=t[e++],i=t[e++],s=t[e++],l=t[e++],c=t[e++],_=t[e++],f=t[e++],p=n?this.getString(n):this.get(a),y=!!(_&W),m=!!(_&z),h=!!(_&q),d=!!(_&Q),w=s?this.createFunction(s,f):void 0,P=l?this.createFunction(l,f):void 0,D=i?this.createFunction(i,f):c?this.get(c):void 0,S={name:p,static:d,configurable:h,enumerable:m};return w||P?(S.get=w,S.set=P):D&&(S.writable=y,S.value=D),S}}const U=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),H=new TextDecoder("latin1"),$=new TextDecoder("utf-16"),J=new TextEncoder;class V{constructor(e,t,n,a){this.env=e,this.finalize=t,this.hint=n,this.data=a}}const v=new FinalizationRegistry(r=>{r.finalize&&r.finalize(r.env,r.data,r.hint)});class T{}const A=[];class K{constructor(e,t,n,a){this.env=e,this.fn=t,this.nativeFn=n,this.context=a,this.id=A.length,A.push(this)}}const B={napi_open_handle_scope(r,e){let t=o[r],n=t.pushScope();return t.setPointer(e,n)},napi_close_handle_scope(r,e){let t=o[r];return e!==t.scopes.length-1?N:(t.popScope(),u)},napi_open_escapable_handle_scope(r,e){throw new Error("not implemented")},napi_close_escapable_handle_scope(r,e){throw new Error("not implemented")},napi_escape_handle(r,e,t,n){throw new Error("not implemented")},napi_create_object(r,e){return o[r].createValue({},e)},napi_set_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t),l=a.get(n);return i[s]=l,u},napi_get_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t);return a.createValue(i[s],n)},napi_delete_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t),l=!1;try{l=delete i[s]}catch{}return n&&(a.memory[n]=l?1:0),u},napi_has_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t);return a.memory[n]=s in i?1:0,u},napi_has_own_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t);return a.memory[n]=i.hasOwnProperty(s)?1:0,u},napi_set_named_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(n),l=a.getString(t);return i[l]=s,u},napi_get_named_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.getString(t);return a.createValue(i[s],n)},napi_has_named_property(r,e,t,n){let a=o[r],i=a.get(e),s=a.getString(t);return a.memory[n]=s in i?1:0,u},napi_get_property_names(r,e,t){let n=o[r],a=n.get(e),i=Object.keys(a);return n.createValue(i,t)},napi_get_all_property_names(r,e,t,n,a,i){throw new Error("not implemented")},napi_define_properties(r,e,t,n){let a=o[r],i=a.get(e),s=n>>2;for(let l=0;l<t;l++){let c=a.readPropertyDescriptor(s);Object.defineProperty(i,c.name,c),s+=8}return u},napi_object_freeze(r,e){let t=o[r].get(e);return Object.freeze(t),u},napi_object_seal(r,e){let t=o[r].get(e);return Object.seal(t),u},napi_get_prototype(r,e,t){let n=o[r],a=n.get(e);return n.createValue(Object.getPrototypeOf(a),t)},napi_define_class(r,e,t,n,a,i,s,l){let c=o[r],_=c.createFunction(n,a);Object.defineProperty(_,"name",{value:c.getString(e,t),configurable:!0});let f=s>>2;for(let p=0;p<i;p++){let y=c.readPropertyDescriptor(f);y.static?Object.defineProperty(_,y.name,y):Object.defineProperty(_.prototype,y.name,y),f+=8}return c.createValue(_,l)},napi_create_reference(r,e,t,n){let a=o[r],i=a.referenceId++;return a.references.set(i,{value:a.get(e),refcount:t}),a.setPointer(n,i)},napi_delete_reference(r,e){return o[r].references.delete(e),u},napi_get_reference_value(r,e,t){let n=o[r],a=n.references.get(e);return n.createValue(a.value,t)},napi_reference_ref(r,e,t){let n=o[r],a=n.references.get(e);return a.refcount++,n.setPointer(t,a.refcount)},napi_reference_unref(r,e,t){let n=o[r],a=n.references.get(e);return a.refcount===0?x:(a.refcount--,n.setPointer(t,a.refcount))},napi_add_env_cleanup_hook(){return u},napi_remove_env_cleanup_hook(){return u},napi_add_async_cleanup_hook(){return u},napi_remove_async_cleanup_hook(){return u},napi_set_instance_data(r,e,t,n){let a=o[r];return a.instanceData=e,u},napi_get_instance_data(r,e){let t=o[r];return t.setPointer(e,t.instanceData)},napi_get_boolean(r,e,t){return o[r].setPointer(t,e?3:4)},napi_get_value_bool(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a?1:0,u},napi_create_int32(r,e,t){return o[r].createValue(e,t)},napi_get_value_int32(r,e,t){let n=o[r],a=n.get(e);return n.i32[t>>2]=a,u},napi_create_uint32(r,e,t){return o[r].createValue(e,t)},napi_get_value_uint32(r,e,t){let n=o[r],a=n.get(e);return n.setPointer(t,a)},napi_create_int64(r,e,t){return o[r].createValue(Number(e),t)},napi_get_value_int64(r,e,t){let n=o[r],a=n.get(e);return n.i64[t>>3]=a,u},napi_create_double(r,e,t){return o[r].createValue(e,t)},napi_get_value_double(r,e,t){let n=o[r],a=n.get(e);return n.f64[t>>3]=a,u},napi_create_bigint_int64(r,e,t){return o[r].createValue(BigInt.asIntN(64,e),t)},napi_get_value_bigint_int64(r,e,t,n){let a=o[r],i=a.get(e);return a.i64[t>>3]=i,n&&(a.memory[n]=BigInt.asIntN(64,i)===i?1:0),u},napi_create_bigint_uint64(r,e,t){return o[r].createValue(BigInt.asUintN(64,e),t)},napi_get_value_bigint_uint64(r,e,t,n){let a=o[r],i=a.get(e);return a.u64[t>>3]=i,n&&(a.memory[n]=BigInt.asUintN(64,i)===i?1:0),u},napi_create_bigint_words(r,e,t,n,a){let i=o[r],s=i.u64,l=n>>3,c=0n,_=0n;for(let f=0;f<t;f++){let p=s[l++];c+=p<<_,_+=64n}return c*=BigInt((-1)**e),i.createValue(c,a)},napi_get_value_bigint_words(r,e,t,n,a){let i=o[r],s=i.get(e),l=i.u32[n>>2];t&&(i.i32[t]=s<0n?1:0);let c=0;if(a){let _=(1n<<64n)-1n,f=i.u64,p=a>>3;for(s<0n&&(s=-s);c<l&&s!==0n;c++)f[p++]=s&_,s>>=64n}for(;s>0n;)c++,s>>=64n;return i.setPointer(n,c)},napi_get_null(r,e){return o[r].setPointer(e,1)},napi_create_array(r,e){return o[r].createValue([],e)},napi_create_array_with_length(r,e,t){return o[r].createValue(new Array(e),t)},napi_set_element(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(n);return i[t]=s,u},napi_get_element(r,e,t,n){let a=o[r],i=a.get(e)[t];return a.createValue(i,n)},napi_has_element(r,e,t,n){let a=o[r],i=a.get(e);return a.memory[n]=i.hasOwnProperty(t)?1:0,u},napi_delete_element(r,e,t,n){let a=o[r],i=a.get(e),s=!1;try{s=delete i[t]}catch{}return n&&(a.memory[n]=s?1:0),u},napi_get_array_length(r,e,t){let n=o[r],a=n.get(e);return n.setPointer(t,a.length)},napi_get_undefined(r,e){return o[r].setPointer(e,0)},napi_create_function(r,e,t,n,a,i){let s=o[r],l=s.createFunction(n,a);return Object.defineProperty(l,"name",{value:s.getString(e,t),configurable:!0}),s.createValue(l,i)},napi_call_function(r,e,t,n,a,i){let s=o[r],l=s.get(e),c=s.get(t),_=new Array(n),f=s.u32;for(let p=0;p<n;p++)_[p]=s.get(f[a>>2]),a+=4;try{let p=c.apply(l,_);return s.createValue(p,i)}catch(p){return s.pendingException=p,L}},napi_new_instance(r,e,t,n,a){let i=o[r],s=i.get(e),l=new Array(t),c=i.u32;for(let _=0;_<t;_++)l[_]=i.get(c[n>>2]),n+=4;try{let _=new s(...l);return i.createValue(_,a)}catch(_){return i.pendingException=_,L}},napi_get_cb_info(r,e,t,n,a,i){let s=o[r],l=s.get(e);s.setPointer(t,l.args.length);for(let c=0;c<l.args.length;c++)s.createValue(l.args[c],n),n+=4;return s.createValue(l.thisArg,a),s.setPointer(i,l.data),u},napi_get_new_target(r,e,t){let n=o[r],a=n.get(e);return n.createValue(a.newTarget,t)},napi_create_threadsafe_function(r,e,t,n,a,i,s,l,c,_,f){let p=o[r],y=e?p.get(e):void 0,m=_?p.table.get(_):void 0,h=new K(p,y,m,c);if(l){let d=p.table.get(l);v.register(h,new V(r,d,0,h.id))}return p.setPointer(f,h.id),u},napi_ref_threadsafe_function(){return u},napi_unref_threadsafe_function(){return u},napi_acquire_threadsafe_function(){return u},napi_release_threadsafe_function(r,e){return A[r]=void 0,u},napi_call_threadsafe_function(r,e,t){let n=A[r];n.env.pushScope();try{if(n.nativeFn){let a=n.fn?n.env.pushValue(n.fn):0;n.nativeFn(n.env.id,a,n.context,e)}else n.fn&&n.fn()}finally{n.env.popScope()}},napi_get_threadsafe_function_context(r,e){let t=A[r];return t.env.setPointer(e,t.context),u},napi_throw(r,e){let t=o[r];return t.pendingException=t.get(e),u},napi_throw_error(r,e,t){let n=o[r],a=new Error(n.getString(t));return a.code=e,n.pendingException=a,u},napi_throw_type_error(r,e,t){let n=o[r],a=new TypeError(n.getString(t));return a.code=e,n.pendingException=a,u},napi_throw_range_error(r,e,t){let n=o[r],a=new RangeError(n.getString(t));return a.code=e,n.pendingException=a,u},napi_create_error(r,e,t,n){let a=o[r],i=new Error(a.get(t));return i.code=a.get(e),a.createValue(i,n)},napi_create_type_error(r,e,t,n){let a=o[r],i=new TypeError(a.get(t));return i.code=a.get(e),a.createValue(i,n)},napi_create_range_error(r,e,t,n){let a=o[r],i=new RangeError(a.get(t));return i.code=a.get(e),a.createValue(i,n)},napi_get_and_clear_last_exception(r,e){let t=o[r],n=t.pendingException;return t.pendingException=null,t.createValue(n,e)},napi_is_exception_pending(r,e){let t=o[r];return t.memory[e]=t.pendingException?1:0,u},napi_fatal_exception(r,e){throw new Error("not implemented")},napi_fatal_error(r,e,t,n){throw new Error("not implemented")},napi_get_global(r,e){return o[r].setPointer(e,2)},napi_create_buffer(r,e,t,n){let a=o[r],i=a.instance.exports.napi_wasm_malloc(e);t&&a.setPointer(t,i);let s=typeof globalThis.Buffer<"u"?globalThis.Buffer.from(a.memory.buffer,i,e):a.memory.subarray(i,i+e);return a.createValue(s,n)},napi_create_buffer_copy(r,e,t,n,a){let i=o[r],s=i.instance.exports.napi_wasm_malloc(e);i.memory.set(i.memory.subarray(t,t+e),s),n&&i.setPointer(n,s);let l=typeof globalThis.Buffer<"u"?globalThis.Buffer.from(i.memory.buffer,s,e):buf;return i.createValue(l,a)},napi_create_external_buffer(r,e,t,n,a,i){let s=o[r],l=typeof globalThis.Buffer<"u"?globalThis.Buffer.from(s.memory.buffer,t,e):s.memory.subarray(t,t+e);if(n){let c=s.table.get(n);v.register(l,new V(r,c,a,t))}return s.createValue(l,i)},napi_get_buffer_info(r,e,t,n){let a=o[r],i=a.get(e),s=a.getBufferInfo(i,t);return a.setPointer(n,s)},napi_create_arraybuffer(r,e,t,n){let a=o[r],i=new ArrayBuffer(e);return t&&a.getBufferInfo(i,ptr),a.createValue(i,n)},napi_create_external_arraybuffer(r,e,t,n,a,i){return k},napi_get_arraybuffer_info(r,e,t,n){let a=o[r],i=a.getBufferInfo(a.get(e),t);return a.setPointer(n,i)},napi_detach_arraybuffer(r,e){let t=o[r].get(e);return typeof structuredClone=="function"&&structuredClone(t,{transfer:[t]}),u},napi_is_detached_arraybuffer(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a.byteLength===0?1:0,u},napi_create_typedarray(r,e,t,n,a,i){let s=o[r],l=j[e],c=s.get(n),_=new l(c,a,t);return s.createValue(_,i)},napi_create_dataview(r,e,t,n,a){let i=o[r],s=i.get(t),l=new DataView(s,n,e);return i.createValue(l,a)},napi_get_typedarray_info(r,e,t,n,a,i,s){let l=o[r],c=l.get(e);return l.setPointer(t,j.indexOf(c.constructor)),l.setPointer(n,c.length),l.getBufferInfo(c,a),l.createValue(c.buffer,i),l.setPointer(s,c.byteOffset)},napi_get_dataview_info(r,e,t,n,a,i){let s=o[r],l=s.get(e);return s.setPointer(t,l.byteLength),s.getBufferInfo(l,n),s.createValue(l.buffer,a),s.setPointer(i,l.byteOffset)},napi_create_string_utf8(r,e,t,n){let a=o[r],i=U.decode(a.memory.subarray(e,e+t));return a.createValue(i,n)},napi_get_value_string_utf8(r,e,t,n,a){let i=o[r],s=i.get(e);if(t==0)return i.setPointer(a,Y(s));let l=J.encodeInto(s,i.memory.subarray(t,t+n-1));return i.memory[t+l.written]=0,i.setPointer(a,l.written)},napi_create_string_latin1(r,e,t,n){let a=o[r],i=H.decode(a.memory.subarray(e,e+t));return a.createValue(i,n)},napi_get_value_string_latin1(r,e,t,n,a){let i=o[r],s=i.get(e);if(t==0)return i.setPointer(a,s.length);let l=i.memory,c=Math.min(s.length,n-1);for(let _=0;_<c;_++){let f=s.charCodeAt(_);l[t++]=f}return l[t]=0,i.setPointer(a,c)},napi_create_string_utf16(r,e,t,n){let a=o[r],i=$.decode(a.memory.subarray(e,e+t*2));return a.createValue(i,n)},napi_get_value_string_utf16(r,e,t,n,a){let i=o[r],s=i.get(e);if(t==0)return i.setPointer(a,s.length);let l=i.u16,c=t>>1,_=Math.min(s.length,n-1);for(let f=0;f<_;f++){let p=s.charCodeAt(f);l[c++]=p}return l[c]=0,i.setPointer(a,_)},napi_create_date(r,e,t){return o[r].createValue(new Date(e),t)},napi_get_date_value(r,e,t){let n=o[r],a=n.get(e);n.f64[t>>3]=a.valueOf()},napi_create_symbol(r,e,t){let n=o[r],a=n.get(e);return n.createValue(Symbol(a),t)},napi_coerce_to_bool(r,e,t){let n=o[r];return n.createValue(!!n.get(e),t)},napi_coerce_to_number(r,e,t){let n=o[r];return n.createValue(Number(n.get(e)),t)},napi_coerce_to_object(r,e,t){let n=o[r];return n.createValue(Object(n.get(e)),t)},napi_coerce_to_string(r,e,t){let n=o[r];return n.createValue(String(n.get(e)),t)},napi_typeof(r,e,t){let n=o[r],a=n.get(e);return n.setPointer(t,(()=>{switch(typeof a){case"undefined":return 0;case"boolean":return 2;case"number":return 3;case"string":return 4;case"symbol":return 5;case"object":return a===null?1:a instanceof T?8:6;case"function":return 7;case"bigint":return 9}})())},napi_instanceof(r,e,t,n){let a=o[r],i=a.get(e),s=a.get(t);return a.memory[n]=i instanceof s?1:0,u},napi_is_array(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=Array.isArray(a)?1:0,u},napi_is_buffer(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=(typeof globalThis.Buffer<"u"?globalThis.Buffer.isBuffer(a):a instanceof Uint8Array)?1:0,u},napi_is_date(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a instanceof Date?1:0,u},napi_is_error(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a instanceof Error?1:0,u},napi_is_typedarray(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=ArrayBuffer.isView(a)&&!(a instanceof DataView)?1:0,u},napi_is_dataview(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a instanceof DataView?1:0,u},napi_strict_equals(r,e,t,n){let a=o[r];return a.memory[n]=a.get(e)===a.get(t)?1:0,u},napi_wrap(r,e,t,n,a,i){let s=o[r],l=s.get(e);if(s.wrappedObjects.set(l,t),n){let c=s.table.get(n);v.register(l,new V(r,c,a,t))}return i?B.napi_create_reference(r,e,1,i):u},napi_unwrap(r,e,t){let n=o[r],a=n.get(e),i=n.wrappedObjects.get(a);return n.setPointer(t,i),u},napi_remove_wrap(r,e,t){let n=o[r],a=n.get(e),i=n.wrappedObjects.get(a);return v.unregister(a),n.wrappedObjects.delete(a),n.setPointer(t,i)},napi_type_tag_object(r,e,t){throw new Error("not implemented")},napi_check_object_type_tag(r,e,t){throw new Error("not implemented")},napi_add_finalizer(r,e,t,n,a,i){let s=o[r],l=s.get(e),c=s.table.get(n);return v.register(l,new V(r,c,a,t)),i?B.napi_create_reference(r,e,1,i):u},napi_create_promise(r,e,t){let n=o[r],a=new Promise((i,s)=>{n.createValue({resolve:i,reject:s},e)});return n.createValue(a,t)},napi_resolve_deferred(r,e,t){let n=o[r],{resolve:a}=n.get(e),i=n.get(t);return a(i),n.set(e,void 0),u},napi_reject_deferred(r,e,t){let n=o[r],{reject:a}=n.get(e),i=n.get(t);return a(i),n.set(e,void 0),u},napi_is_promise(r,e,t){let n=o[r],a=n.get(e);return n.memory[t]=a instanceof Promise?1:0,u},napi_run_script(r,e,t){let n=o[r],a=n.get(e),i=(0,eval)(a);return n.createValue(i,t)},napi_create_external(r,e,t,n,a){let i=o[r],s=new T;if(i.externalObjects.set(s,e),t){let l=i.table.get(t);v.register(s,new V(r,l,n,e))}return i.createValue(s,a)},napi_get_value_external(r,e,t){let n=o[r],a=n.get(e),i=n.externalObjects.get(a);return n.setPointer(t,i)},napi_adjust_external_memory(){return u}};function X(r,e){let t=0;for(;r[e]!==0;)t++,e++;return t}function Y(r){let e=0;for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n>=55296&&n<=56319&&t<r.length-1){let a=r.charCodeAt(++t);(a&64512)===56320?n=((n&1023)<<10)+(a&1023)+65536:t--}n&4294967168?n&4294965248?n&4294901760?n&4292870144||(e+=4):e+=3:e+=2:e++}return e}let C;function Z(r,e,t){C(r,e,t)}const O={None:0,Unwinding:1,Rewinding:2};function ee(r){let{instance:e,exports:t}=r,{asyncify_get_state:n,asyncify_start_unwind:a,asyncify_stop_unwind:i,asyncify_start_rewind:s,asyncify_stop_rewind:l}=e.exports,c=e.exports.napi_wasm_malloc(4104),_=c+8,f=c+8+4096;new Int32Array(r.memory.buffer,c).set([_,f]);function p(){if(n()!==O.None)throw new Error(`Invalid async state ${n()}, expected 0.`)}let y,m,h;return C=(d,w,P)=>{if(n()===O.Rewinding){l(),m!=null&&r.createValue(m,w),h!=null&&r.createValue(h,P),y=m=h=null;return}p(),y=r.get(d),a(c)},async function(d){p();let w=t.bundle(d);for(;n()===O.Unwinding;){i();try{m=await y}catch(P){h=P}p(),s(c),w=t.bundle(d)}return p(),w}}const F={Nesting:1,NotSelectorList:2,DirSelector:4,LangSelectorList:8,IsSelector:16,TextDecorationThicknessPercent:32,MediaIntervalSyntax:64,MediaRangeSyntax:128,CustomMediaQueries:256,ClampFunction:512,ColorFunction:1024,OklabColors:2048,LabColors:4096,P3Colors:8192,HexAlphaColors:16384,SpaceSeparatedColorNotation:32768,FontFamilySystemUi:65536,DoublePositionGradients:131072,VendorPrefixes:262144,LogicalProperties:524288,Selectors:31,MediaQueries:448,Colors:64512};let I,E,te;async function re(r){if(I)return;if(E){await E;return}r=r??new URL(""+new URL("lightningcss_node-C18-A6e3.wasm",import.meta.url).href,import.meta.url),(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=ie(r));let e;E=r.then(t=>ae(t,{env:{...B,await_promise_sync:Z,__getrandom_custom:(n,a)=>{let i=e.memory.subarray(n,n+a);crypto.getRandomValues(i)}}})).then(({instance:t})=>{t.exports.register_module(),e=new G(t),te=ee(e),I=e.exports}),await E}function ne(r){return I.transform(r)}async function ae(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(n){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await r.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(r,e);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}}async function ie(r){try{return(await ce(()=>import("./lib-C2qaLi0h.js").then(e=>e.i),[],import.meta.url)).readFileSync(r)}catch{return fetch(r)}}await re(b),R=async function(r){const e=await le({entrypoint:r.entrypoint,volume:r.volume});return ue(e.css).build(r.candidates)},M=async function(r,e=!1){const t=ne({filename:"main.css",code:new TextEncoder().encode(r),minify:e,sourceMap:!1,drafts:{customMedia:!0},nonStandard:{deepSelectorCombinator:!0},include:F.Nesting,exclude:F.LogicalProperties,targets:{safari:1049600},errorRecovery:!0});return{code:t.code,css:new TextDecoder().decode(t.code),warnings:t.warnings}}})();export{_e as __tla,R as b,M as o};
