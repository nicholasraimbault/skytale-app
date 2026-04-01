/* @ts-self-types="./skytale_mls_wasm.d.ts" */

/**
 * Create an MLS group with the given ID.
 * Stores the group globally — replaces any existing group.
 * @param {string} group_id
 * @returns {Promise<void>}
 */
export function create_group(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.create_group(ptr0, len0);
    return takeObject(ret);
}

/**
 * Decrypt hex-encoded ciphertext. Returns the plaintext string.
 * @param {string} ciphertext_hex
 * @returns {Promise<string>}
 */
export function decrypt(ciphertext_hex) {
    const ptr0 = passStringToWasm0(ciphertext_hex, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.decrypt(ptr0, len0);
    return takeObject(ret);
}

/**
 * Encrypt a plaintext string. Returns hex-encoded ciphertext.
 * @param {string} plaintext
 * @returns {Promise<string>}
 */
export function encrypt(plaintext) {
    const ptr0 = passStringToWasm0(plaintext, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.encrypt(ptr0, len0);
    return takeObject(ret);
}

/**
 * Get byte count from hex string.
 * @param {string} hex
 * @returns {number}
 */
export function hex_byte_count(hex) {
    const ptr0 = passStringToWasm0(hex, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.hex_byte_count(ptr0, len0);
    return ret >>> 0;
}

/**
 * Convert bytes to hex string.
 * @param {Uint8Array} bytes
 * @returns {string}
 */
export function to_hex(bytes) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.to_hex(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_export5(deferred2_0, deferred2_1, 1);
    }
}
import * as import1 from "./snippets/mls-rs-core-23c963e7771edd41/inline0.js"

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_2e59b1b37a9a34c3: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg___wbindgen_debug_string_dd5d2d07ce9e6c57: function(arg0, arg1) {
            const ret = debugString(getObject(arg1));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_49868bde5eb1e745: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_undefined_c0cca72b82b86f4d: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_81fc77679af83bc6: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_3c3b4f651835fbcb: function(arg0) {
            getObject(arg0)._wbg_cb_unref();
        },
        __wbg_call_d578befcc3145dee: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_crypto_dcec368a49b7eddb: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        }, arguments); },
        __wbg_decrypt_7252c8e34c7d2338: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = getObject(arg0).decrypt(getObject(arg1), getObject(arg2), getArrayU8FromWasm0(arg3, arg4));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_deriveBits_71a0d662d4bc391a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).deriveBits(getObject(arg1), getObject(arg2), arg3 >>> 0);
            return addHeapObject(ret);
        }, arguments); },
        __wbg_digest_db2f848451b71712: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).digest(getStringFromWasm0(arg1, arg2), getObject(arg3));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_encrypt_e988eb28444482c1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = getObject(arg0).encrypt(getObject(arg1), getObject(arg2), getArrayU8FromWasm0(arg3, arg4));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_exportKey_99bb9b98984e3a4e: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).exportKey(getStringFromWasm0(arg1, arg2), getObject(arg3));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_generateKey_2d7e8fadfbbeb0c8: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).generateKey(getObject(arg1), arg2 !== 0, getObject(arg3));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_getRandomValues_7ac591469f0834f8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_get_f96702c6245e4ef9: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_importKey_444a3b620c5933b8: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            const ret = getObject(arg0).importKey(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4), arg5 !== 0, getObject(arg6));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_importKey_e448ba9659684c36: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            const ret = getObject(arg0).importKey(getStringFromWasm0(arg1, arg2), getObject(arg3), getStringFromWasm0(arg4, arg5), arg6 !== 0, getObject(arg7));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_instanceof_Window_c0fee4c064502536: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_length_0c32cb8543c8e4c8: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_new_4f9fafbb3909af72: function() {
            const ret = new Object();
            return addHeapObject(ret);
        },
        __wbg_new_a560378ea1240b14: function(arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_new_from_slice_2580ff33d0d10520: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_new_typed_14d7cc391ce53d2c: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return __wasm_bindgen_func_elem_768(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return addHeapObject(ret);
            } finally {
                state0.a = 0;
            }
        },
        __wbg_new_with_length_1c0fb14ea44d1c09: function(arg0) {
            const ret = new Array(arg0 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_prototypesetcall_3e05eb9545565046: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
        },
        __wbg_queueMicrotask_abaf92f0bd4e80a4: function(arg0) {
            const ret = getObject(arg0).queueMicrotask;
            return addHeapObject(ret);
        },
        __wbg_queueMicrotask_df5a6dac26d818f3: function(arg0) {
            queueMicrotask(getObject(arg0));
        },
        __wbg_resolve_0a79de24e9d2267b: function(arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_set_6c60b2e8ad0e9383: function(arg0, arg1, arg2) {
            getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
        },
        __wbg_set_additional_data_52139a09b281ac86: function(arg0, arg1) {
            getObject(arg0).additionalData = getObject(arg1);
        },
        __wbg_set_hash_2e1fdd348d4f040e: function(arg0, arg1) {
            getObject(arg0).hash = getObject(arg1);
        },
        __wbg_set_hash_8c80a5ca779feb84: function(arg0, arg1) {
            getObject(arg0).hash = getObject(arg1);
        },
        __wbg_set_iv_ce6d8b0673118a9a: function(arg0, arg1) {
            getObject(arg0).iv = getObject(arg1);
        },
        __wbg_set_name_028fbd7d598ee6bd: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_name_118b646d7afe924f: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_name_2ec03cd0a9e83627: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_name_6e4a00a325ab67e6: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_name_7fd0cf0a90a8666a: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_name_8b1f00da9f63e982: function(arg0, arg1, arg2) {
            getObject(arg0).name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_named_curve_35af2efcfb623cee: function(arg0, arg1, arg2) {
            getObject(arg0).namedCurve = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_named_curve_a1fc05599d794859: function(arg0, arg1, arg2) {
            getObject(arg0).namedCurve = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_public_1dbec8266bcd69ee: function(arg0, arg1) {
            getObject(arg0).public = getObject(arg1);
        },
        __wbg_sign_05be0a439ea29eee: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            const ret = getObject(arg0).sign(getStringFromWasm0(arg1, arg2), getObject(arg3), getArrayU8FromWasm0(arg4, arg5));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_sign_681e47de9a9887e1: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).sign(getObject(arg1), getObject(arg2), getObject(arg3));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_static_accessor_GLOBAL_THIS_a1248013d790bf5f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_GLOBAL_f2e0f995a21329ff: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_SELF_24f78b6d23f286ea: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_WINDOW_59fd959c540fe405: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_subtle_6b7d3b117f3b8d57: function(arg0) {
            const ret = getObject(arg0).subtle;
            return addHeapObject(ret);
        },
        __wbg_then_00eed3ac0b8e82cb: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbg_then_a0c8db0381c8994c: function(arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_valueOf_e44fd798520e4277: function(arg0) {
            const ret = getObject(arg0).valueOf();
            return ret;
        },
        __wbg_verify_4a45632e1fe29f62: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = getObject(arg0).verify(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
            return addHeapObject(ret);
        }, arguments); },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 42, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1379);
            return addHeapObject(ret);
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
    };
    return {
        __proto__: null,
        "./skytale_mls_wasm_bg.js": import0,
        "./snippets/mls-rs-core-23c963e7771edd41/inline0.js": import1,
    };
}

function __wasm_bindgen_func_elem_1379(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_1379(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wasm_bindgen_func_elem_768(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_768(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_export4(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_export4(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('skytale_mls_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
