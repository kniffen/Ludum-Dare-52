// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"84Rv8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _info = require("./info");
var _update = require("./update");
var _updateDefault = parcelHelpers.interopDefault(_update);
var _render = require("./render");
var _renderDefault = parcelHelpers.interopDefault(_render);
var _inputHandler = require("./inputHandler");
var _tools = require("./tools");
var _seeds = require("./seeds");
const gameLoop = (timestamp)=>{
    _info.update();
    (0, _updateDefault.default)();
    (0, _renderDefault.default)();
    window.requestAnimationFrame(gameLoop);
};
window.requestAnimationFrame(gameLoop);

},{"./render":"9AS2t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./info":"lq2fP","./update":"keiGX","./inputHandler":"lvlGF","./tools":"1L0VW","./seeds":"5kW1D"}],"9AS2t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
function render() {
    if (!(0, _view.ctx)) return;
    (0, _view.ctx).clearRect(0, 0, (0, _view.width), (0, _view.height));
    (0, _view.ctx).font = "3rem Monospace";
    /* tiles */ for(let y = 0; y < (0, _view.rows); y++)for(let x = 0; x < (0, _view.columns); x++){
        const tile = (0, _gridDefault.default)[y][x];
        (0, _view.ctx).fillStyle = tile.background;
        (0, _view.ctx).fillRect(x * (0, _view.tileWidth), y * (0, _view.tileHeight), (0, _view.tileWidth), (0, _view.tileHeight));
        const stage = Math.floor(tile.stage);
        (0, _view.ctx).fillStyle = tile.stages[stage].color;
        (0, _view.ctx).fillText(tile.stages[stage].char, (0, _view.marginLeft) + x * (0, _view.tileWidth), (0, _view.marginTop) + y * (0, _view.tileHeight));
    }
    // Selector
    (0, _view.ctx).strokeStyle = "#FFFFFF";
    (0, _view.ctx).strokeRect((0, _grid.selectedCell).column * (0, _view.tileWidth), (0, _grid.selectedCell).row * (0, _view.tileHeight), (0, _view.tileWidth), (0, _view.tileHeight));
}
exports.default = render;

},{"./view":"1ce4O","./grid":"h2PC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ce4O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "ctx", ()=>ctx);
parcelHelpers.export(exports, "width", ()=>width);
parcelHelpers.export(exports, "height", ()=>height);
parcelHelpers.export(exports, "columns", ()=>(0, _grid.columns));
parcelHelpers.export(exports, "rows", ()=>(0, _grid.rows));
parcelHelpers.export(exports, "tileWidth", ()=>tileWidth);
parcelHelpers.export(exports, "tileHeight", ()=>tileHeight);
parcelHelpers.export(exports, "marginTop", ()=>marginTop);
parcelHelpers.export(exports, "marginLeft", ()=>marginLeft);
var _grid = require("./grid");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ratio = Math.ceil(window.devicePixelRatio);
if (!ctx) throw new Error("Unable to get canvas context");
ctx.font = "3rem Monospace";
const metrics = ctx.measureText("░");
const tileHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + 1;
const tileWidth = metrics.width;
const width = tileWidth * (0, _grid.columns);
const height = tileHeight * (0, _grid.rows);
const marginTop = metrics.actualBoundingBoxAscent;
const marginLeft = 0;
console.log(metrics);
canvas.width = width * ratio;
canvas.height = height * ratio;
canvas.style.width = width + "px";
canvas.style.height = height + "px";
ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

},{"./grid":"h2PC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2PC3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "columns", ()=>(0, _grid.columns));
parcelHelpers.export(exports, "rows", ()=>(0, _grid.rows));
parcelHelpers.export(exports, "selectedCell", ()=>(0, _selectedCellDefault.default));
var _grid = require("./grid");
var _selectedCell = require("./selectedCell");
var _selectedCellDefault = parcelHelpers.interopDefault(_selectedCell);
exports.default = (0, _grid.grid);

},{"./grid":"6xQGn","./selectedCell":"hKVn5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xQGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "columns", ()=>columns);
parcelHelpers.export(exports, "rows", ()=>rows);
parcelHelpers.export(exports, "grid", ()=>grid);
var _tiles = require("../tiles");
var _tilesDefault = parcelHelpers.interopDefault(_tiles);
const columns = 20;
const rows = 15;
const grass = (0, _tilesDefault.default)[(0, _tiles.TileType).Grass];
const grid = Array(rows).fill(0).map((n)=>Array(columns).fill(0).map((n)=>(0, _tiles.createTile)((0, _tiles.TileType).Grass, Math.floor(Math.random() * (grass.stages.length - 1 + 1) + 1))));

},{"../tiles":"9vUFP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vUFP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TileType", ()=>TileType);
parcelHelpers.export(exports, "createTile", ()=>createTile);
var _seeds = require("../seeds/seeds");
var _seedsDefault = parcelHelpers.interopDefault(_seeds);
let TileType;
(function(TileType) {
    TileType[TileType["Grass"] = 0] = "Grass";
    TileType[TileType["Wheat"] = 1] = "Wheat";
    TileType[TileType["Corn"] = 2] = "Corn";
    TileType[TileType["Carrot"] = 3] = "Carrot";
    TileType[TileType["Potato"] = 4] = "Potato";
    TileType[TileType["Beet"] = 5] = "Beet";
    TileType[TileType["CultivatedDirt"] = 6] = "CultivatedDirt";
})(TileType || (TileType = {}));
const tiles = {
    [TileType.Grass]: {
        name: "Grass",
        seed: null,
        growRate: 0.0001,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#435313"
            },
            {
                char: "░",
                color: "#7dc85a"
            },
            {
                char: "▒",
                color: "#7dc85a"
            },
            {
                char: "▓",
                color: "#7dc85a"
            }
        ]
    },
    [TileType.Wheat]: {
        name: "Wheat",
        seed: (0, _seedsDefault.default)[(0, _seeds.SeedId).Wheat],
        growRate: 0.0002,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#adbc10"
            },
            {
                char: "▒",
                color: "#cac712"
            },
            {
                char: "▓",
                color: "#ece822"
            }
        ]
    },
    [TileType.Corn]: {
        name: "Corn",
        seed: (0, _seedsDefault.default)[(0, _seeds.SeedId).Corn],
        growRate: 0.0005,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#5c7a0b"
            },
            {
                char: "░",
                color: "#8d8d0c"
            },
            {
                char: "░",
                color: "#ccdd13"
            }
        ]
    },
    [TileType.Carrot]: {
        name: "Carrot",
        seed: (0, _seedsDefault.default)[(0, _seeds.SeedId).Carrot],
        growRate: 0.0008,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#0b7a23"
            },
            {
                char: "▒",
                color: "#eb8f1e"
            }
        ]
    },
    [TileType.Potato]: {
        name: "Potato",
        seed: (0, _seedsDefault.default)[(0, _seeds.SeedId).Potato],
        growRate: 0.001,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#adbc10"
            },
            {
                char: "▒",
                color: "#adbc10"
            }
        ]
    },
    [TileType.Beet]: {
        name: "Beets",
        seed: (0, _seedsDefault.default)[(0, _seeds.SeedId).Beet],
        growRate: 0.0005,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#7b1c87"
            },
            {
                char: "░",
                color: "#b22424"
            }
        ]
    },
    [TileType.CultivatedDirt]: {
        name: "Cultivated Dirt",
        seed: null,
        growRate: 1,
        background: "#43260f",
        stages: [
            {
                char: "░",
                color: "#6e6e6e"
            }
        ]
    }
};
exports.default = tiles;
const createTile = (type, stage = 0)=>({
        ...tiles[type],
        type,
        stage
    });

},{"../seeds/seeds":"gq79F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gq79F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SeedId", ()=>SeedId);
parcelHelpers.export(exports, "setCurrentSeed", ()=>setCurrentSeed);
parcelHelpers.export(exports, "getCurrentSeed", ()=>getCurrentSeed);
parcelHelpers.export(exports, "addSeeds", ()=>addSeeds);
parcelHelpers.export(exports, "removeSeeds", ()=>removeSeeds);
parcelHelpers.export(exports, "onUpdate", ()=>onUpdate);
let SeedId;
(function(SeedId) {
    SeedId["Wheat"] = "wheat";
    SeedId["Corn"] = "corn";
    SeedId["Carrot"] = "carrot";
    SeedId["Potato"] = "potato";
    SeedId["Beet"] = "beet";
})(SeedId || (SeedId = {}));
const seeds = {
    [SeedId.Wheat]: {
        id: SeedId.Wheat,
        name: "Wheat",
        amount: 20
    },
    [SeedId.Corn]: {
        id: SeedId.Corn,
        name: "Corn",
        amount: 30
    },
    [SeedId.Carrot]: {
        id: SeedId.Carrot,
        name: "Carrot",
        amount: 5
    },
    [SeedId.Potato]: {
        id: SeedId.Potato,
        name: "Potato",
        amount: 10
    },
    [SeedId.Beet]: {
        id: SeedId.Beet,
        name: "Beets",
        amount: 5
    }
};
let currentSeed = seeds[SeedId.Wheat];
const setCurrentSeed = (seed)=>{
    currentSeed = seed;
};
const getCurrentSeed = ()=>currentSeed;
const callbacks = [];
const addSeeds = (seed, amount)=>{
    seed.amount += amount;
    callbacks.forEach((cb)=>cb(seed));
};
const removeSeeds = (seed, amount)=>{
    seed.amount -= amount;
    callbacks.forEach((cb)=>cb(seed));
};
const onUpdate = (cb)=>callbacks.push(cb);
exports.default = seeds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hKVn5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grid = require("./grid");
const selectedCell = {
    ref: (0, _grid.grid)[0][0],
    column: 0,
    row: 0
};
exports.default = selectedCell;

},{"./grid":"6xQGn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lq2fP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "update", ()=>update);
var _grid = require("../grid");
var _tools = require("../tools/tools");
var _toolsDefault = parcelHelpers.interopDefault(_tools);
const container = document.querySelector(".info");
const update = function() {
    container.innerText = `
  Crop: ${(0, _grid.selectedCell).ref.name}
  Allowed tools: ${(0, _toolsDefault.default).filter((tool)=>tool.usedOn.includes((0, _grid.selectedCell).ref.type)).map((tool)=>tool.name).join(", ")}
  Growth: ${(((0, _grid.selectedCell).ref.stage + 1) / (0, _grid.selectedCell).ref.stages.length * 100).toFixed()}%
  `;
};

},{"../grid":"h2PC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../tools/tools":"ii9ce"}],"ii9ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ToolId", ()=>ToolId);
var _tiles = require("../tiles");
let ToolId;
(function(ToolId) {
    ToolId[ToolId["Mower"] = 0] = "Mower";
    ToolId[ToolId["Cultivator"] = 1] = "Cultivator";
    ToolId[ToolId["Hoe"] = 2] = "Hoe";
    ToolId[ToolId["Sickle"] = 3] = "Sickle";
    ToolId[ToolId["SeedBag"] = 4] = "SeedBag";
})(ToolId || (ToolId = {}));
const tools = [
    {
        id: ToolId.Mower,
        char: "L",
        name: "Lawnmower",
        usedOn: [
            (0, _tiles.TileType).Grass
        ]
    },
    {
        id: ToolId.Cultivator,
        char: "w",
        name: "Cultivator",
        usedOn: Object.keys((0, _tiles.TileType)).map((i)=>Number(i))
    },
    {
        id: ToolId.Hoe,
        char: "7",
        name: "Hoe",
        usedOn: [
            (0, _tiles.TileType).Carrot,
            (0, _tiles.TileType).Potato,
            (0, _tiles.TileType).Beet
        ]
    },
    {
        id: ToolId.Sickle,
        char: "J",
        name: "Sickle",
        usedOn: [
            (0, _tiles.TileType).Wheat,
            (0, _tiles.TileType).Corn
        ]
    },
    {
        id: ToolId.SeedBag,
        char: "u",
        name: "Seed bag",
        usedOn: [
            (0, _tiles.TileType).CultivatedDirt
        ]
    }
];
exports.default = tools;

},{"../tiles":"9vUFP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keiGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
function update() {
    (0, _gridDefault.default).forEach((row)=>row.forEach((tile)=>{
            tile.stage += tile.growRate;
            if (tile.stage > tile.stages.length - 1) tile.stage = tile.stages.length - 1;
        }));
}
exports.default = update;

},{"./grid":"h2PC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvlGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _view = require("./view");
var _tools = require("./tools");
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
(0, _view.canvas).addEventListener("mousemove", (e)=>{
    const column = Math.floor(e.offsetX / (0, _view.tileWidth));
    const row = Math.floor(e.offsetY / (0, _view.tileHeight));
    (0, _grid.selectedCell).column = column > 0 && column < (0, _grid.columns) ? column : 0;
    (0, _grid.selectedCell).row = row > 0 && row < (0, _grid.rows) ? row : 0;
    (0, _grid.selectedCell).ref = (0, _gridDefault.default)[(0, _grid.selectedCell).row][(0, _grid.selectedCell).column];
    (0, _tools.currentTool).use();
});
(0, _view.canvas).addEventListener("mousedown", (e)=>{
    (0, _tools.currentTool).isActive = true;
    (0, _tools.currentTool).use();
});
(0, _view.canvas).addEventListener("mouseup", (e)=>{
    (0, _tools.currentTool).isActive = false;
});
(0, _view.canvas).addEventListener("mouseleave", (e)=>{
    (0, _tools.currentTool).isActive = false;
});

},{"./view":"1ce4O","./tools":"1L0VW","./grid":"h2PC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1L0VW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentTool", ()=>(0, _currentToolDefault.default));
var _selector = require("./selector");
var _tools = require("./tools");
var _toolsDefault = parcelHelpers.interopDefault(_tools);
var _currentTool = require("./currentTool");
var _currentToolDefault = parcelHelpers.interopDefault(_currentTool);
exports.default = (0, _toolsDefault.default);

},{"./selector":"9y9aF","./tools":"ii9ce","./currentTool":"hFLw6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9y9aF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tools = require("./tools");
var _toolsDefault = parcelHelpers.interopDefault(_tools);
var _currentTool = require("./currentTool");
var _currentToolDefault = parcelHelpers.interopDefault(_currentTool);
const container = document.querySelector(".tool-selector");
const title = document.createElement("h2");
const options = (0, _toolsDefault.default).map(({ id , char , name  })=>{
    const option = document.createElement("div");
    option.innerText = char;
    option.classList.add("tool");
    option.setAttribute("title", name);
    if ((0, _currentToolDefault.default).ref.id === id) option.classList.add("selected");
    option.addEventListener("click", (e)=>{
        const newTool = (0, _toolsDefault.default).find((tool)=>tool.id === id);
        if (newTool) {
            (0, _currentToolDefault.default).ref = newTool;
            title.innerText = `Tool: ${newTool.name}`;
        }
        options.forEach((option)=>option.classList.remove("selected"));
        option.classList.add("selected");
    });
    return option;
});
title.innerText = `Tool: ${(0, _currentToolDefault.default).ref.name}`;
container?.append(title, ...options);

},{"./tools":"ii9ce","./currentTool":"hFLw6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFLw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tools = require("./tools");
var _toolsDefault = parcelHelpers.interopDefault(_tools);
var _grid = require("../grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _tiles = require("../tiles");
var _seeds = require("../seeds");
var _tilesDefault = parcelHelpers.interopDefault(_tiles);
const currentTool = {
    ref: (0, _toolsDefault.default)[0],
    isActive: false,
    set: (id)=>(0, _toolsDefault.default).find((tool)=>tool.id === id),
    use: ()=>{
        if (!currentTool.isActive) return;
        const { column , row  } = (0, _grid.selectedCell);
        const crop = (0, _gridDefault.default)[row][column];
        const currentSeed = (0, _seeds.getCurrentSeed)();
        if (!currentTool.ref.usedOn.includes(crop.type)) return;
        switch(currentTool.ref.id){
            case (0, _tools.ToolId).Mower:
                crop.stage = 0;
                break;
            case (0, _tools.ToolId).Cultivator:
                if (crop.stage >= 1) break;
                (0, _gridDefault.default)[row][column] = (0, _tiles.createTile)((0, _tiles.TileType).CultivatedDirt);
                break;
            case (0, _tools.ToolId).SeedBag:
                if (currentSeed.amount <= 0) break;
                const tileType = Object.entries((0, _tilesDefault.default)).find(([key, value])=>value.seed?.id === currentSeed.id)?.[0];
                if (tileType) {
                    (0, _gridDefault.default)[row][column] = (0, _tiles.createTile)(Number(tileType));
                    (0, _seeds.removeSeeds)(currentSeed, 1);
                }
                break;
            case (0, _tools.ToolId).Hoe:
            case (0, _tools.ToolId).Sickle:
                if (!crop.seed || crop.stage < crop.stages.length - 1) break;
                (0, _seeds.addSeeds)(crop.seed, 2);
                (0, _gridDefault.default)[row][column] = (0, _tiles.createTile)((0, _tiles.TileType).Grass);
                break;
        }
    }
};
exports.default = currentTool;

},{"./tools":"ii9ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../grid":"h2PC3","../tiles":"9vUFP","../seeds":"5kW1D"}],"5kW1D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _selector = require("./selector");
var _seeds = require("./seeds");
var _seedsDefault = parcelHelpers.interopDefault(_seeds);
parcelHelpers.exportAll(_seeds, exports);
exports.default = (0, _seedsDefault.default);

},{"./selector":"16pR6","./seeds":"gq79F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16pR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tiles = require("../tiles");
var _tilesDefault = parcelHelpers.interopDefault(_tiles);
var _seeds = require("./seeds");
const container = document.querySelector(".seed-selector");
const title = document.createElement("h2");
const setTitle = (seed)=>{
    title.innerText = `Seed: ${seed.name} (${seed.amount})`;
};
(0, _seeds.onUpdate)((seed)=>{
    if (seed.id === (0, _seeds.getCurrentSeed)().id) setTitle(seed);
});
const options = Object.values((0, _tilesDefault.default)).filter((tile)=>tile.seed).map((tile)=>{
    const option = document.createElement("div");
    if (!tile.seed) return option;
    option.innerText = tile.stages[tile.stages.length - 1].char;
    option.classList.add("seed");
    option.setAttribute("title", tile.seed.name);
    option.style.color = tile.stages[tile.stages.length - 1].color;
    if ((0, _seeds.getCurrentSeed)().id === tile.seed.id) option.classList.add("selected");
    option.addEventListener("click", (e)=>{
        if (!tile.seed) return;
        (0, _seeds.setCurrentSeed)(tile.seed);
        setTitle(tile.seed);
        options.forEach((option)=>option.classList.remove("selected"));
        option.classList.add("selected");
    });
    return option;
});
setTitle((0, _seeds.getCurrentSeed)());
container?.append(title, ...options);

},{"../tiles":"9vUFP","./seeds":"gq79F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["84Rv8","jeorp"], "jeorp", "parcelRequiref993")

//# sourceMappingURL=index.b7a05eb9.js.map
