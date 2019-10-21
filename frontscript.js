/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js":
/*!***************************************************************!*\
  !*** ./node_modules/@rebelstack-io/metaflux/dist/metaflux.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=47)}([function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,r=/^data:.+\,.+$/;function u(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var n=e,r=u(e);if(r){if(!r.path)return e;n=r.path}for(var o,a=t.isAbsolute(n),s=n.split(/\/+/),c=0,l=s.length-1;l>=0;l--)"."===(o=s[l])?s.splice(l,1):".."===o?c++:c>0&&(""===o?(s.splice(l+1,c),c=0):(s.splice(l,2),c--));return""===(n=s.join("/"))&&(n=a?"/":"."),r?(r.path=n,i(r)):n}function a(e,t){""===e&&(e="."),""===t&&(t=".");var n=u(t),a=u(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),i(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,i(a);var s="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=s,i(a)):s}t.urlParse=u,t.urlGenerate=i,t.normalize=o,t.join=a,t.isAbsolute=function(e){return"/"===e.charAt(0)||n.test(e)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var s=!("__proto__"in Object.create(null));function c(e){return e}function l(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function p(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}t.toSetString=s?c:function(e){return l(e)?"$"+e:e},t.fromSetString=s?c:function(e){return l(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=p(e.source,t.source);return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:p(e.name,t.name)},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!==(r=p(e.source,t.source))?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:p(e.name,t.name)},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=p(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:p(e.name,t.name)},t.parseSourceMapInput=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},t.computeSourceURL=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=u(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var s=r.path.lastIndexOf("/");s>=0&&(r.path=r.path.substring(0,s+1))}t=a(i(r),t)}return o(t)}},function(e,t){var n,r,u=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,c=[],l=!1,p=-1;function f(){l&&s&&(l=!1,s.length?c=s.concat(c):p=-1,c.length&&h())}function h(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(s=c,c=[];++p<t;)s&&s[p].run();p=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=d,u.addListener=d,u.once=d,u.off=d,u.removeListener=d,u.removeAllListeners=d,u.emit=d,u.prependListener=d,u.prependOnceListener=d,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(0),u=Object.prototype.hasOwnProperty,i="undefined"!=typeof Map;function o(){this._array=[],this._set=i?new Map:Object.create(null)}o.fromArray=function(e,t){for(var n=new o,r=0,u=e.length;r<u;r++)n.add(e[r],t);return n},o.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length},o.prototype.add=function(e,t){var n=i?e:r.toSetString(e),o=i?this.has(e):u.call(this._set,n),a=this._array.length;o&&!t||this._array.push(e),o||(i?this._set.set(e,a):this._set[n]=a)},o.prototype.has=function(e){if(i)return this._set.has(e);var t=r.toSetString(e);return u.call(this._set,t)},o.prototype.indexOf=function(e){if(i){var t=this._set.get(e);if(t>=0)return t}else{var n=r.toSetString(e);if(u.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},o.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},o.prototype.toArray=function(){return this._array.slice()},t.ArraySet=o},function(e,t,n){var r=n(18);t.encode=function(e){var t,n="",u=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&u,(u>>>=5)>0&&(t|=32),n+=r.encode(t)}while(u>0);return n},t.decode=function(e,t,n){var u,i,o=e.length,a=0,s=0;do{if(t>=o)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));u=!!(32&i),a+=(i&=31)<<s,s+=5}while(u);n.value=function(e){var t=e>>1;return 1==(1&e)?-t:t}(a),n.rest=t}},function(e,t,n){var r=n(4),u=n(0),i=n(3).ArraySet,o=n(17).MappingList;function a(e){e||(e={}),this._file=u.getArg(e,"file",null),this._sourceRoot=u.getArg(e,"sourceRoot",null),this._skipValidation=u.getArg(e,"skipValidation",!1),this._sources=new i,this._names=new i,this._mappings=new o,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=u.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(r){var i=r;null!==t&&(i=u.relative(t,r)),n._sources.has(i)||n._sources.add(i);var o=e.sourceContentFor(r);null!=o&&n.setSourceContent(r,o)}),n},a.prototype.addMapping=function(e){var t=u.getArg(e,"generated"),n=u.getArg(e,"original",null),r=u.getArg(e,"source",null),i=u.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=u.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[u.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[u.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var o=this._sourceRoot;null!=o&&(r=u.relative(o,r));var a=new i,s=new i;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var i=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=i.source&&(t.source=i.source,null!=n&&(t.source=u.join(n,t.source)),null!=o&&(t.source=u.relative(o,t.source)),t.originalLine=i.line,t.originalColumn=i.column,null!=i.name&&(t.name=i.name))}var c=t.source;null==c||a.has(c)||a.add(c);var l=t.name;null==l||s.has(l)||s.add(l)},this),this._sources=a,this._names=s,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=u.join(n,t)),null!=o&&(t=u.relative(o,t)),this.setSourceContent(t,r))},this)},a.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,i,o=0,a=1,s=0,c=0,l=0,p=0,f="",h=this._mappings.toArray(),m=0,d=h.length;m<d;m++){if(e="",(t=h[m]).generatedLine!==a)for(o=0;t.generatedLine!==a;)e+=";",a++;else if(m>0){if(!u.compareByGeneratedPositionsInflated(t,h[m-1]))continue;e+=","}e+=r.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(i=this._sources.indexOf(t.source),e+=r.encode(i-p),p=i,e+=r.encode(t.originalLine-1-c),c=t.originalLine-1,e+=r.encode(t.originalColumn-s),s=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-l),l=n)),f+=e}return f},a.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=u.relative(t,e));var n=u.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},function(e,t){!function(){"use strict";var t,n,r,u,i,o;function a(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(Math.floor((e-65536)/1024)+55296)+String.fromCharCode((e-65536)%1024+56320)}for(n={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/},t={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},r=[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],u=new Array(128),o=0;o<128;++o)u[o]=o>=97&&o<=122||o>=65&&o<=90||36===o||95===o;for(i=new Array(128),o=0;o<128;++o)i[o]=o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||36===o||95===o;e.exports={isDecimalDigit:function(e){return 48<=e&&e<=57},isHexDigit:function(e){return 48<=e&&e<=57||97<=e&&e<=102||65<=e&&e<=70},isOctalDigit:function(e){return e>=48&&e<=55},isWhiteSpace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&r.indexOf(e)>=0},isLineTerminator:function(e){return 10===e||13===e||8232===e||8233===e},isIdentifierStartES5:function(e){return e<128?u[e]:n.NonAsciiIdentifierStart.test(a(e))},isIdentifierPartES5:function(e){return e<128?i[e]:n.NonAsciiIdentifierPart.test(a(e))},isIdentifierStartES6:function(e){return e<128?u[e]:t.NonAsciiIdentifierStart.test(a(e))},isIdentifierPartES6:function(e){return e<128?i[e]:t.NonAsciiIdentifierPart.test(a(e))}}}()},function(e,t){},function(e,t){e.exports={identifier:"[a-zA-Z_]+[a-zA-Z0-9_]*",integer:"-?(?:0|[1-9][0-9]*)",qq_string:'"(?:\\\\["bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^"\\\\])*"',q_string:"'(?:\\\\['bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^'\\\\])*'"}},function(e,t,n){var r=n(40),u=n(8),i=n(36),o=n(29),a=function(){this.initialize.apply(this,arguments)};function s(e){return"[object String]"==Object.prototype.toString.call(e)}a.prototype.initialize=function(){this.parser=new i,this.handlers=new o},a.prototype.parse=function(e){return r.ok(s(e),"we need a path"),this.parser.parse(e)},a.prototype.parent=function(e,t){r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path");var n=this.nodes(e,t)[0];n.path.pop();return this.value(e,n.path)},a.prototype.apply=function(e,t,n){r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path"),r.equal(typeof n,"function","fn needs to be function");var u=this.nodes(e,t).sort(function(e,t){return t.path.length-e.path.length});return u.forEach(function(t){var r=t.path.pop(),u=this.value(e,this.stringify(t.path)),i=t.value=n.call(e,u[r]);u[r]=i},this),u},a.prototype.value=function(e,t,n){if(r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path"),arguments.length>=3){var u=this.nodes(e,t).shift();if(!u)return this._vivify(e,t,n);var i=u.path.slice(-1).shift();this.parent(e,this.stringify(u.path))[i]=n}return this.query(e,this.stringify(t),1).shift()},a.prototype._vivify=function(e,t,n){var u=this;r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path");var i=this.parser.parse(t).map(function(e){return e.expression.value}),o=function(t,n){var r=t.pop(),i=u.value(e,t);i||(o(t.concat(),"string"==typeof r?{}:[]),i=u.value(e,t)),i[r]=n};return o(i,n),this.query(e,t)[0]},a.prototype.query=function(e,t,n){return r.ok(e instanceof Object,"obj needs to be an object"),r.ok(s(t),"we need a path"),this.nodes(e,t,n).map(function(e){return e.value})},a.prototype.paths=function(e,t,n){return r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path"),this.nodes(e,t,n).map(function(e){return e.path})},a.prototype.nodes=function(e,t,n){if(r.ok(e instanceof Object,"obj needs to be an object"),r.ok(t,"we need a path"),0===n)return[];var u=this.parser.parse(t),i=this.handlers,o=[{path:["$"],value:e}],a=[];return u.length&&"root"==u[0].expression.type&&u.shift(),u.length?(u.forEach(function(e,t){if(!(a.length>=n)){var r=i.resolve(e),s=[];o.forEach(function(i){if(!(a.length>=n)){var o=r(e,i,n);t==u.length-1?a=a.concat(o||[]):s=s.concat(o||[])}}),o=s}}),n?a.slice(0,n):a):o},a.prototype.stringify=function(e){r.ok(e,"we need a path");var t="$",n={"descendant-member":"..{{value}}","child-member":".{{value}}","descendant-subscript":"..[{{value}}]","child-subscript":"[{{value}}]"};return(e=this._normalize(e)).forEach(function(e){if("root"!=e.expression.type){var r,u=[e.scope,e.operation].join("-"),i=n[u];if(r="string_literal"==e.expression.type?JSON.stringify(e.expression.value):e.expression.value,!i)throw new Error("couldn't find template "+u);t+=i.replace(/{{value}}/,r)}}),t},a.prototype._normalize=function(e){if(r.ok(e,"we need a path"),"string"==typeof e)return this.parser.parse(e);if(Array.isArray(e)&&"string"==typeof e[0]){var t=[{expression:{type:"root",value:"$"}}];return e.forEach(function(e,n){if("$"!=e||0!==n)if("string"==typeof e&&e.match("^"+u.identifier+"$"))t.push({operation:"member",scope:"child",expression:{value:e,type:"identifier"}});else{var r="number"==typeof e?"numeric_literal":"string_literal";t.push({operation:"subscript",scope:"child",expression:{value:e,type:r}})}}),t}if(Array.isArray(e)&&"object"==typeof e[0])return e;throw new Error("couldn't understand path "+e)},a.Handlers=o,a.Parser=i;var c=new a;c.JSONPath=a,e.exports=c},function(e,t,n){e.exports=n(9)},function(e,t,n){var r;(function(){var n=this,u=n._,i=Array.prototype,o=Object.prototype,a=Function.prototype,s=i.push,c=i.slice,l=i.concat,p=o.toString,f=o.hasOwnProperty,h=Array.isArray,m=Object.keys,d=a.bind,D=function(e){return e instanceof D?e:this instanceof D?void(this._wrapped=e):new D(e)};void 0!==e&&e.exports&&(t=e.exports=D),t._=D,D.VERSION="1.7.0";var g=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,u){return e.call(t,n,r,u)};case 4:return function(n,r,u,i){return e.call(t,n,r,u,i)}}return function(){return e.apply(t,arguments)}};D.iteratee=function(e,t,n){return null==e?D.identity:D.isFunction(e)?g(e,t,n):D.isObject(e)?D.matches(e):D.property(e)},D.each=D.forEach=function(e,t,n){if(null==e)return e;t=g(t,n);var r,u=e.length;if(u===+u)for(r=0;r<u;r++)t(e[r],r,e);else{var i=D.keys(e);for(r=0,u=i.length;r<u;r++)t(e[i[r]],i[r],e)}return e},D.map=D.collect=function(e,t,n){if(null==e)return[];t=D.iteratee(t,n);for(var r,u=e.length!==+e.length&&D.keys(e),i=(u||e).length,o=Array(i),a=0;a<i;a++)r=u?u[a]:a,o[a]=t(e[r],r,e);return o};var A="Reduce of empty array with no initial value";D.reduce=D.foldl=D.inject=function(e,t,n,r){null==e&&(e=[]),t=g(t,r,4);var u,i=e.length!==+e.length&&D.keys(e),o=(i||e).length,a=0;if(arguments.length<3){if(!o)throw new TypeError(A);n=e[i?i[a++]:a++]}for(;a<o;a++)n=t(n,e[u=i?i[a]:a],u,e);return n},D.reduceRight=D.foldr=function(e,t,n,r){null==e&&(e=[]),t=g(t,r,4);var u,i=e.length!==+e.length&&D.keys(e),o=(i||e).length;if(arguments.length<3){if(!o)throw new TypeError(A);n=e[i?i[--o]:--o]}for(;o--;)n=t(n,e[u=i?i[o]:o],u,e);return n},D.find=D.detect=function(e,t,n){var r;return t=D.iteratee(t,n),D.some(e,function(e,n,u){if(t(e,n,u))return r=e,!0}),r},D.filter=D.select=function(e,t,n){var r=[];return null==e?r:(t=D.iteratee(t,n),D.each(e,function(e,n,u){t(e,n,u)&&r.push(e)}),r)},D.reject=function(e,t,n){return D.filter(e,D.negate(D.iteratee(t)),n)},D.every=D.all=function(e,t,n){if(null==e)return!0;t=D.iteratee(t,n);var r,u,i=e.length!==+e.length&&D.keys(e),o=(i||e).length;for(r=0;r<o;r++)if(!t(e[u=i?i[r]:r],u,e))return!1;return!0},D.some=D.any=function(e,t,n){if(null==e)return!1;t=D.iteratee(t,n);var r,u,i=e.length!==+e.length&&D.keys(e),o=(i||e).length;for(r=0;r<o;r++)if(t(e[u=i?i[r]:r],u,e))return!0;return!1},D.contains=D.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=D.values(e)),D.indexOf(e,t)>=0)},D.invoke=function(e,t){var n=c.call(arguments,2),r=D.isFunction(t);return D.map(e,function(e){return(r?t:e[t]).apply(e,n)})},D.pluck=function(e,t){return D.map(e,D.property(t))},D.where=function(e,t){return D.filter(e,D.matches(t))},D.findWhere=function(e,t){return D.find(e,D.matches(t))},D.max=function(e,t,n){var r,u,i=-1/0,o=-1/0;if(null==t&&null!=e)for(var a=0,s=(e=e.length===+e.length?e:D.values(e)).length;a<s;a++)(r=e[a])>i&&(i=r);else t=D.iteratee(t,n),D.each(e,function(e,n,r){((u=t(e,n,r))>o||u===-1/0&&i===-1/0)&&(i=e,o=u)});return i},D.min=function(e,t,n){var r,u,i=1/0,o=1/0;if(null==t&&null!=e)for(var a=0,s=(e=e.length===+e.length?e:D.values(e)).length;a<s;a++)(r=e[a])<i&&(i=r);else t=D.iteratee(t,n),D.each(e,function(e,n,r){((u=t(e,n,r))<o||u===1/0&&i===1/0)&&(i=e,o=u)});return i},D.shuffle=function(e){for(var t,n=e&&e.length===+e.length?e:D.values(e),r=n.length,u=Array(r),i=0;i<r;i++)(t=D.random(0,i))!==i&&(u[i]=u[t]),u[t]=n[i];return u},D.sample=function(e,t,n){return null==t||n?(e.length!==+e.length&&(e=D.values(e)),e[D.random(e.length-1)]):D.shuffle(e).slice(0,Math.max(0,t))},D.sortBy=function(e,t,n){return t=D.iteratee(t,n),D.pluck(D.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index-t.index}),"value")};var E=function(e){return function(t,n,r){var u={};return n=D.iteratee(n,r),D.each(t,function(r,i){var o=n(r,i,t);e(u,r,o)}),u}};D.groupBy=E(function(e,t,n){D.has(e,n)?e[n].push(t):e[n]=[t]}),D.indexBy=E(function(e,t,n){e[n]=t}),D.countBy=E(function(e,t,n){D.has(e,n)?e[n]++:e[n]=1}),D.sortedIndex=function(e,t,n,r){for(var u=(n=D.iteratee(n,r,1))(t),i=0,o=e.length;i<o;){var a=i+o>>>1;n(e[a])<u?i=a+1:o=a}return i},D.toArray=function(e){return e?D.isArray(e)?c.call(e):e.length===+e.length?D.map(e,D.identity):D.values(e):[]},D.size=function(e){return null==e?0:e.length===+e.length?e.length:D.keys(e).length},D.partition=function(e,t,n){t=D.iteratee(t,n);var r=[],u=[];return D.each(e,function(e,n,i){(t(e,n,i)?r:u).push(e)}),[r,u]},D.first=D.head=D.take=function(e,t,n){if(null!=e)return null==t||n?e[0]:t<0?[]:c.call(e,0,t)},D.initial=function(e,t,n){return c.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},D.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:c.call(e,Math.max(e.length-t,0))},D.rest=D.tail=D.drop=function(e,t,n){return c.call(e,null==t||n?1:t)},D.compact=function(e){return D.filter(e,D.identity)};var y=function(e,t,n,r){if(t&&D.every(e,D.isArray))return l.apply(r,e);for(var u=0,i=e.length;u<i;u++){var o=e[u];D.isArray(o)||D.isArguments(o)?t?s.apply(r,o):y(o,t,n,r):n||r.push(o)}return r};D.flatten=function(e,t){return y(e,t,!1,[])},D.without=function(e){return D.difference(e,c.call(arguments,1))},D.uniq=D.unique=function(e,t,n,r){if(null==e)return[];D.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=D.iteratee(n,r));for(var u=[],i=[],o=0,a=e.length;o<a;o++){var s=e[o];if(t)o&&i===s||u.push(s),i=s;else if(n){var c=n(s,o,e);D.indexOf(i,c)<0&&(i.push(c),u.push(s))}else D.indexOf(u,s)<0&&u.push(s)}return u},D.union=function(){return D.uniq(y(arguments,!0,!0,[]))},D.intersection=function(e){if(null==e)return[];for(var t=[],n=arguments.length,r=0,u=e.length;r<u;r++){var i=e[r];if(!D.contains(t,i)){for(var o=1;o<n&&D.contains(arguments[o],i);o++);o===n&&t.push(i)}}return t},D.difference=function(e){var t=y(c.call(arguments,1),!0,!0,[]);return D.filter(e,function(e){return!D.contains(t,e)})},D.zip=function(e){if(null==e)return[];for(var t=D.max(arguments,"length").length,n=Array(t),r=0;r<t;r++)n[r]=D.pluck(arguments,r);return n},D.object=function(e,t){if(null==e)return{};for(var n={},r=0,u=e.length;r<u;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},D.indexOf=function(e,t,n){if(null==e)return-1;var r=0,u=e.length;if(n){if("number"!=typeof n)return e[r=D.sortedIndex(e,t)]===t?r:-1;r=n<0?Math.max(0,u+n):n}for(;r<u;r++)if(e[r]===t)return r;return-1},D.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=e.length;for("number"==typeof n&&(r=n<0?r+n+1:Math.min(r,n+1));--r>=0;)if(e[r]===t)return r;return-1},D.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),u=Array(r),i=0;i<r;i++,e+=n)u[i]=e;return u};var C=function(){};D.bind=function(e,t){var n,r;if(d&&e.bind===d)return d.apply(e,c.call(arguments,1));if(!D.isFunction(e))throw new TypeError("Bind must be called on a function");return n=c.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(c.call(arguments)));C.prototype=e.prototype;var u=new C;C.prototype=null;var i=e.apply(u,n.concat(c.call(arguments)));return D.isObject(i)?i:u}},D.partial=function(e){var t=c.call(arguments,1);return function(){for(var n=0,r=t.slice(),u=0,i=r.length;u<i;u++)r[u]===D&&(r[u]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},D.bindAll=function(e){var t,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(t=1;t<r;t++)e[n=arguments[t]]=D.bind(e[n],e);return e},D.memoize=function(e,t){var n=function(r){var u=n.cache,i=t?t.apply(this,arguments):r;return D.has(u,i)||(u[i]=e.apply(this,arguments)),u[i]};return n.cache={},n},D.delay=function(e,t){var n=c.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},D.defer=function(e){return D.delay.apply(D,[e,1].concat(c.call(arguments,1)))},D.throttle=function(e,t,n){var r,u,i,o=null,a=0;n||(n={});var s=function(){a=!1===n.leading?0:D.now(),o=null,i=e.apply(r,u),o||(r=u=null)};return function(){var c=D.now();a||!1!==n.leading||(a=c);var l=t-(c-a);return r=this,u=arguments,l<=0||l>t?(clearTimeout(o),o=null,a=c,i=e.apply(r,u),o||(r=u=null)):o||!1===n.trailing||(o=setTimeout(s,l)),i}},D.debounce=function(e,t,n){var r,u,i,o,a,s=function(){var c=D.now()-o;c<t&&c>0?r=setTimeout(s,t-c):(r=null,n||(a=e.apply(i,u),r||(i=u=null)))};return function(){i=this,u=arguments,o=D.now();var c=n&&!r;return r||(r=setTimeout(s,t)),c&&(a=e.apply(i,u),i=u=null),a}},D.wrap=function(e,t){return D.partial(t,e)},D.negate=function(e){return function(){return!e.apply(this,arguments)}},D.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},D.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},D.before=function(e,t){var n;return function(){return--e>0?n=t.apply(this,arguments):t=null,n}},D.once=D.partial(D.before,2),D.keys=function(e){if(!D.isObject(e))return[];if(m)return m(e);var t=[];for(var n in e)D.has(e,n)&&t.push(n);return t},D.values=function(e){for(var t=D.keys(e),n=t.length,r=Array(n),u=0;u<n;u++)r[u]=e[t[u]];return r},D.pairs=function(e){for(var t=D.keys(e),n=t.length,r=Array(n),u=0;u<n;u++)r[u]=[t[u],e[t[u]]];return r},D.invert=function(e){for(var t={},n=D.keys(e),r=0,u=n.length;r<u;r++)t[e[n[r]]]=n[r];return t},D.functions=D.methods=function(e){var t=[];for(var n in e)D.isFunction(e[n])&&t.push(n);return t.sort()},D.extend=function(e){if(!D.isObject(e))return e;for(var t,n,r=1,u=arguments.length;r<u;r++)for(n in t=arguments[r])f.call(t,n)&&(e[n]=t[n]);return e},D.pick=function(e,t,n){var r,u={};if(null==e)return u;if(D.isFunction(t))for(r in t=g(t,n),e){var i=e[r];t(i,r,e)&&(u[r]=i)}else{var o=l.apply([],c.call(arguments,1));e=new Object(e);for(var a=0,s=o.length;a<s;a++)(r=o[a])in e&&(u[r]=e[r])}return u},D.omit=function(e,t,n){if(D.isFunction(t))t=D.negate(t);else{var r=D.map(l.apply([],c.call(arguments,1)),String);t=function(e,t){return!D.contains(r,t)}}return D.pick(e,t,n)},D.defaults=function(e){if(!D.isObject(e))return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];for(var u in r)void 0===e[u]&&(e[u]=r[u])}return e},D.clone=function(e){return D.isObject(e)?D.isArray(e)?e.slice():D.extend({},e):e},D.tap=function(e,t){return t(e),e};var F=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof D&&(e=e._wrapped),t instanceof D&&(t=t._wrapped);var u=p.call(e);if(u!==p.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("object"!=typeof e||"object"!=typeof t)return!1;for(var i=n.length;i--;)if(n[i]===e)return r[i]===t;var o,a,s=e.constructor,c=t.constructor;if(s!==c&&"constructor"in e&&"constructor"in t&&!(D.isFunction(s)&&s instanceof s&&D.isFunction(c)&&c instanceof c))return!1;if(n.push(e),r.push(t),"[object Array]"===u){if(a=(o=e.length)===t.length)for(;o--&&(a=F(e[o],t[o],n,r)););}else{var l,f=D.keys(e);if(o=f.length,a=D.keys(t).length===o)for(;o--&&(l=f[o],a=D.has(t,l)&&F(e[l],t[l],n,r)););}return n.pop(),r.pop(),a};D.isEqual=function(e,t){return F(e,t,[],[])},D.isEmpty=function(e){if(null==e)return!0;if(D.isArray(e)||D.isString(e)||D.isArguments(e))return 0===e.length;for(var t in e)if(D.has(e,t))return!1;return!0},D.isElement=function(e){return!(!e||1!==e.nodeType)},D.isArray=h||function(e){return"[object Array]"===p.call(e)},D.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},D.each(["Arguments","Function","String","Number","Date","RegExp"],function(e){D["is"+e]=function(t){return p.call(t)==="[object "+e+"]"}}),D.isArguments(arguments)||(D.isArguments=function(e){return D.has(e,"callee")}),D.isFunction=function(e){return"function"==typeof e||!1},D.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},D.isNaN=function(e){return D.isNumber(e)&&e!==+e},D.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===p.call(e)},D.isNull=function(e){return null===e},D.isUndefined=function(e){return void 0===e},D.has=function(e,t){return null!=e&&f.call(e,t)},D.noConflict=function(){return n._=u,this},D.identity=function(e){return e},D.constant=function(e){return function(){return e}},D.noop=function(){},D.property=function(e){return function(t){return t[e]}},D.matches=function(e){var t=D.pairs(e),n=t.length;return function(e){if(null==e)return!n;e=new Object(e);for(var r=0;r<n;r++){var u=t[r],i=u[0];if(u[1]!==e[i]||!(i in e))return!1}return!0}},D.times=function(e,t,n){var r=Array(Math.max(0,e));t=g(t,n,1);for(var u=0;u<e;u++)r[u]=t(u);return r},D.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},D.now=Date.now||function(){return(new Date).getTime()};var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},S=D.invert(v),B=function(e){var t=function(t){return e[t]},n="(?:"+D.keys(e).join("|")+")",r=RegExp(n),u=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(u,t):e}};D.escape=B(v),D.unescape=B(S),D.result=function(e,t){if(null!=e){var n=e[t];return D.isFunction(n)?e[t]():n}};var b=0;D.uniqueId=function(e){var t=++b+"";return e?e+t:t},D.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var x=/(.)^/,_={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,k=function(e){return"\\"+_[e]};D.template=function(e,t,n){!t&&n&&(t=n),t=D.defaults({},t,D.templateSettings);var r=RegExp([(t.escape||x).source,(t.interpolate||x).source,(t.evaluate||x).source].join("|")+"|$","g"),u=0,i="__p+='";e.replace(r,function(t,n,r,o,a){return i+=e.slice(u,a).replace(w,k),u=a+t.length,n?i+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(e){throw e.source=i,e}var a=function(e){return o.call(this,e,D)},s=t.variable||"obj";return a.source="function("+s+"){\n"+i+"}",a},D.chain=function(e){var t=D(e);return t._chain=!0,t};var I=function(e){return this._chain?D(e).chain():e};D.mixin=function(e){D.each(D.functions(e),function(t){var n=D[t]=e[t];D.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),I.call(this,n.apply(D,e))}})},D.mixin(D),D.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=i[e];D.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],I.call(this,n)}}),D.each(["concat","join","slice"],function(e){var t=i[e];D.prototype[e]=function(){return I.call(this,t.apply(this._wrapped,arguments))}}),D.prototype.value=function(){return this._wrapped},void 0===(r=function(){return D}.apply(t,[]))||(e.exports=r)}).call(this)},function(e){e.exports={_args:[["escodegen@1.9.1","/home/pablolimo/rebelstack-projects/metaflux"]],_from:"escodegen@1.9.1",_id:"escodegen@1.9.1",_inBundle:!1,_integrity:"sha512-6hTjO1NAWkHnDk3OqQ4YrCuwwmGHL9S3nPlzBOUG/R44rda3wLNrfvQ5fkSGjyhHFKM7ALPKcKGrwvCLe0lC7Q==",_location:"/static-eval/escodegen",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"escodegen@1.9.1",name:"escodegen",escapedName:"escodegen",rawSpec:"1.9.1",saveSpec:null,fetchSpec:"1.9.1"},_requiredBy:["/static-eval"],_resolved:"https://registry.npmjs.org/escodegen/-/escodegen-1.9.1.tgz",_spec:"1.9.1",_where:"/home/pablolimo/rebelstack-projects/metaflux",bin:{esgenerate:"./bin/esgenerate.js",escodegen:"./bin/escodegen.js"},bugs:{url:"https://github.com/estools/escodegen/issues"},dependencies:{esprima:"^3.1.3",estraverse:"^4.2.0",esutils:"^2.0.2",optionator:"^0.8.1","source-map":"~0.6.1"},description:"ECMAScript code generator",devDependencies:{acorn:"^4.0.4",bluebird:"^3.4.7","bower-registry-client":"^1.0.0",chai:"^3.5.0","commonjs-everywhere":"^0.9.7",gulp:"^3.8.10","gulp-eslint":"^3.0.1","gulp-mocha":"^3.0.1",semver:"^5.1.0"},engines:{node:">=4.0"},files:["LICENSE.BSD","README.md","bin","escodegen.js","package.json"],homepage:"http://github.com/estools/escodegen",license:"BSD-2-Clause",main:"escodegen.js",maintainers:[{name:"Yusuke Suzuki",email:"utatane.tea@gmail.com",url:"http://github.com/Constellation"}],name:"escodegen",optionalDependencies:{"source-map":"~0.6.1"},repository:{type:"git",url:"git+ssh://git@github.com/estools/escodegen.git"},scripts:{build:"cjsify -a path: tools/entry-point.js > escodegen.browser.js","build-min":"cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",lint:"gulp lint",release:"node tools/release.js",test:"gulp travis","unit-test":"gulp test"},version:"1.9.1"}},function(e,t,n){var r=n(5).SourceMapGenerator,u=n(0),i=/(\r?\n)/,o="$$$isSourceNode$$$";function a(e,t,n,r,u){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==u?null:u,this[o]=!0,null!=r&&this.add(r)}a.fromStringWithSourceMap=function(e,t,n){var r=new a,o=e.split(i),s=0,c=function(){return e()+(e()||"");function e(){return s<o.length?o[s++]:void 0}},l=1,p=0,f=null;return t.eachMapping(function(e){if(null!==f){if(!(l<e.generatedLine)){var t=(n=o[s]||"").substr(0,e.generatedColumn-p);return o[s]=n.substr(e.generatedColumn-p),p=e.generatedColumn,h(f,t),void(f=e)}h(f,c()),l++,p=0}for(;l<e.generatedLine;)r.add(c()),l++;if(p<e.generatedColumn){var n=o[s]||"";r.add(n.substr(0,e.generatedColumn)),o[s]=n.substr(e.generatedColumn),p=e.generatedColumn}f=e},this),s<o.length&&(f&&h(f,c()),r.add(o.splice(s).join(""))),t.sources.forEach(function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=u.join(n,e)),r.setSourceContent(e,i))}),r;function h(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?u.join(n,e.source):e.source;r.add(new a(e.originalLine,e.originalColumn,i,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[o]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[o]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[u.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][o]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(u.fromSetString(r[t]),this.sourceContents[r[t]])},a.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),u=!1,i=null,o=null,a=null,s=null;return this.walk(function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(i===r.source&&o===r.line&&a===r.column&&s===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),i=r.source,o=r.line,a=r.column,s=r.name,u=!0):u&&(n.addMapping({generated:{line:t.line,column:t.column}}),i=null,u=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(i=null,u=!1):u&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},t.SourceNode=a},function(e,t){function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,u,i){if(u<i){var o=u-1;n(e,function(e,t){return Math.round(e+Math.random()*(t-e))}(u,i),i);for(var a=e[i],s=u;s<i;s++)t(e[s],a)<=0&&n(e,o+=1,s);n(e,o+1,s);var c=o+1;r(e,t,u,c-1),r(e,t,c+1,i)}}t.quickSort=function(e,t){r(e,t,0,e.length-1)}},function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,r,u){if(0===n.length)return-1;var i=function e(n,r,u,i,o,a){var s=Math.floor((r-n)/2)+n,c=o(u,i[s],!0);return 0===c?s:c>0?r-s>1?e(s,r,u,i,o,a):a==t.LEAST_UPPER_BOUND?r<i.length?r:-1:s:s-n>1?e(n,s,u,i,o,a):a==t.LEAST_UPPER_BOUND?s:n<0?-1:n}(-1,n.length,e,n,r,u||t.GREATEST_LOWER_BOUND);if(i<0)return-1;for(;i-1>=0&&0===r(n[i],n[i-1],!0);)--i;return i}},function(e,t,n){var r=n(0),u=n(15),i=n(3).ArraySet,o=n(4),a=n(14).quickSort;function s(e,t){var n=e;return"string"==typeof e&&(n=r.parseSourceMapInput(e)),null!=n.sections?new p(n,t):new c(n,t)}function c(e,t){var n=e;"string"==typeof e&&(n=r.parseSourceMapInput(e));var u=r.getArg(n,"version"),o=r.getArg(n,"sources"),a=r.getArg(n,"names",[]),s=r.getArg(n,"sourceRoot",null),c=r.getArg(n,"sourcesContent",null),l=r.getArg(n,"mappings"),p=r.getArg(n,"file",null);if(u!=this._version)throw new Error("Unsupported version: "+u);s&&(s=r.normalize(s)),o=o.map(String).map(r.normalize).map(function(e){return s&&r.isAbsolute(s)&&r.isAbsolute(e)?r.relative(s,e):e}),this._names=i.fromArray(a.map(String),!0),this._sources=i.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map(function(e){return r.computeSourceURL(s,e,t)}),this.sourceRoot=s,this.sourcesContent=c,this._mappings=l,this._sourceMapURL=t,this.file=p}function l(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e,t){var n=e;"string"==typeof e&&(n=r.parseSourceMapInput(e));var u=r.getArg(n,"version"),o=r.getArg(n,"sections");if(u!=this._version)throw new Error("Unsupported version: "+u);this._sources=new i,this._names=new i;var a={line:-1,column:0};this._sections=o.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=r.getArg(e,"offset"),u=r.getArg(n,"line"),i=r.getArg(n,"column");if(u<a.line||u===a.line&&i<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=n,{generatedOffset:{generatedLine:u+1,generatedColumn:i+1},consumer:new s(r.getArg(e,"map"),t)}})}s.fromSourceMap=function(e,t){return c.fromSourceMap(e,t)},s.prototype._version=3,s.prototype.__generatedMappings=null,Object.defineProperty(s.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),s.prototype.__originalMappings=null,Object.defineProperty(s.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),s.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},s.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},s.GENERATED_ORDER=1,s.ORIGINAL_ORDER=2,s.GREATEST_LOWER_BOUND=1,s.LEAST_UPPER_BOUND=2,s.prototype.eachMapping=function(e,t,n){var u,i=t||null;switch(n||s.GENERATED_ORDER){case s.GENERATED_ORDER:u=this._generatedMappings;break;case s.ORIGINAL_ORDER:u=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;u.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=r.computeSourceURL(o,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,i)},s.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var i=[],o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,u.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===e.column)for(var s=a.originalLine;a&&a.originalLine===s;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var c=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==c;)i.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return i},t.SourceMapConsumer=s,c.prototype=Object.create(s.prototype),c.prototype.consumer=s,c.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=r.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},c.fromSourceMap=function(e,t){var n=Object.create(c.prototype),u=n._names=i.fromArray(e._names.toArray(),!0),o=n._sources=i.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map(function(e){return r.computeSourceURL(n.sourceRoot,e,t)});for(var s=e._mappings.toArray().slice(),p=n.__generatedMappings=[],f=n.__originalMappings=[],h=0,m=s.length;h<m;h++){var d=s[h],D=new l;D.generatedLine=d.generatedLine,D.generatedColumn=d.generatedColumn,d.source&&(D.source=o.indexOf(d.source),D.originalLine=d.originalLine,D.originalColumn=d.originalColumn,d.name&&(D.name=u.indexOf(d.name)),f.push(D)),p.push(D)}return a(n.__originalMappings,r.compareByOriginalPositions),n},c.prototype._version=3,Object.defineProperty(c.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),c.prototype._parseMappings=function(e,t){for(var n,u,i,s,c,p=1,f=0,h=0,m=0,d=0,D=0,g=e.length,A=0,E={},y={},C=[],F=[];A<g;)if(";"===e.charAt(A))p++,A++,f=0;else if(","===e.charAt(A))A++;else{for((n=new l).generatedLine=p,s=A;s<g&&!this._charIsMappingSeparator(e,s);s++);if(i=E[u=e.slice(A,s)])A+=u.length;else{for(i=[];A<s;)o.decode(e,A,y),c=y.value,A=y.rest,i.push(c);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");E[u]=i}n.generatedColumn=f+i[0],f=n.generatedColumn,i.length>1&&(n.source=d+i[1],d+=i[1],n.originalLine=h+i[2],h=n.originalLine,n.originalLine+=1,n.originalColumn=m+i[3],m=n.originalColumn,i.length>4&&(n.name=D+i[4],D+=i[4])),F.push(n),"number"==typeof n.originalLine&&C.push(n)}a(F,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=F,a(C,r.compareByOriginalPositions),this.__originalMappings=C},c.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return u.search(e,t,i,o)},c.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},c.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",s.GREATEST_LOWER_BOUND));if(n>=0){var u=this._generatedMappings[n];if(u.generatedLine===t.generatedLine){var i=r.getArg(u,"source",null);null!==i&&(i=this._sources.at(i),i=r.computeSourceURL(this.sourceRoot,i,this._sourceMapURL));var o=r.getArg(u,"name",null);return null!==o&&(o=this._names.at(o)),{source:i,line:r.getArg(u,"originalLine",null),column:r.getArg(u,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},c.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e}))},c.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var u,i=e;if(null!=this.sourceRoot&&(i=r.relative(this.sourceRoot,i)),null!=this.sourceRoot&&(u=r.urlParse(this.sourceRoot))){var o=i.replace(/^file:\/\//,"");if("file"==u.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!u.path||"/"==u.path)&&this._sources.has("/"+i))return this.sourcesContent[this._sources.indexOf("/"+i)]}if(t)return null;throw new Error('"'+i+'" is not in the SourceMap.')},c.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},u=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",s.GREATEST_LOWER_BOUND));if(u>=0){var i=this._originalMappings[u];if(i.source===n.source)return{line:r.getArg(i,"generatedLine",null),column:r.getArg(i,"generatedColumn",null),lastColumn:r.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=c,p.prototype=Object.create(s.prototype),p.prototype.constructor=s,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=u.search(t,this._sections,function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn}),i=this._sections[n];return i?i.consumer.originalPositionFor({line:t.generatedLine-(i.generatedOffset.generatedLine-1),column:t.generatedColumn-(i.generatedOffset.generatedLine===t.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},p.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(r.getArg(e,"source"))){var u=n.consumer.generatedPositionFor(e);if(u)return{line:u.line+(n.generatedOffset.generatedLine-1),column:u.column+(n.generatedOffset.generatedLine===u.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var u=this._sections[n],i=u.consumer._generatedMappings,o=0;o<i.length;o++){var s=i[o],c=u.consumer._sources.at(s.source);c=r.computeSourceURL(u.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var l=null;s.name&&(l=u.consumer._names.at(s.name),this._names.add(l),l=this._names.indexOf(l));var p={source:c,generatedLine:s.generatedLine+(u.generatedOffset.generatedLine-1),generatedColumn:s.generatedColumn+(u.generatedOffset.generatedLine===s.generatedLine?u.generatedOffset.generatedColumn-1:0),originalLine:s.originalLine,originalColumn:s.originalColumn,name:l};this.__generatedMappings.push(p),"number"==typeof p.originalLine&&this.__originalMappings.push(p)}a(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),a(this.__originalMappings,r.compareByOriginalPositions)},t.IndexedSourceMapConsumer=p},function(e,t,n){var r=n(0);function u(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}u.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},u.prototype.add=function(e){!function(e,t){var n=e.generatedLine,u=t.generatedLine,i=e.generatedColumn,o=t.generatedColumn;return u>n||u==n&&o>=i||r.compareByGeneratedPositionsInflated(e,t)<=0}(this._last,e)?(this._sorted=!1,this._array.push(e)):(this._last=e,this._array.push(e))},u.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=u},function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},function(e,t,n){t.SourceMapGenerator=n(5).SourceMapGenerator,t.SourceMapConsumer=n(16).SourceMapConsumer,t.SourceNode=n(13).SourceNode},function(e,t,n){!function(){"use strict";var t=n(6);function r(e,t){return!(!t&&"yield"===e)&&u(e,t)}function u(e,t){if(t&&function(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"let":return!0;default:return!1}}(e))return!0;switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}}function i(e,t){return"null"===e||"true"===e||"false"===e||r(e,t)}function o(e,t){return"null"===e||"true"===e||"false"===e||u(e,t)}function a(e){var n,r,u;if(0===e.length)return!1;if(u=e.charCodeAt(0),!t.isIdentifierStartES5(u))return!1;for(n=1,r=e.length;n<r;++n)if(u=e.charCodeAt(n),!t.isIdentifierPartES5(u))return!1;return!0}function s(e,t){return 1024*(e-55296)+(t-56320)+65536}function c(e){var n,r,u,i,o;if(0===e.length)return!1;for(o=t.isIdentifierStartES6,n=0,r=e.length;n<r;++n){if(55296<=(u=e.charCodeAt(n))&&u<=56319){if(++n>=r)return!1;if(!(56320<=(i=e.charCodeAt(n))&&i<=57343))return!1;u=s(u,i)}if(!o(u))return!1;o=t.isIdentifierPartES6}return!0}e.exports={isKeywordES5:r,isKeywordES6:u,isReservedWordES5:i,isReservedWordES6:o,isRestrictedWord:function(e){return"eval"===e||"arguments"===e},isIdentifierNameES5:a,isIdentifierNameES6:c,isIdentifierES5:function(e,t){return a(e)&&!i(e,t)},isIdentifierES6:function(e,t){return c(e)&&!o(e,t)}}}()},function(e,t){!function(){"use strict";function t(e){if(null==e)return!1;switch(e.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"DebuggerStatement":case"DoWhileStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"IfStatement":case"LabeledStatement":case"ReturnStatement":case"SwitchStatement":case"ThrowStatement":case"TryStatement":case"VariableDeclaration":case"WhileStatement":case"WithStatement":return!0}return!1}function n(e){switch(e.type){case"IfStatement":return null!=e.alternate?e.alternate:e.consequent;case"LabeledStatement":case"ForStatement":case"ForInStatement":case"WhileStatement":case"WithStatement":return e.body}return null}e.exports={isExpression:function(e){if(null==e)return!1;switch(e.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"ConditionalExpression":case"FunctionExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"NewExpression":case"ObjectExpression":case"SequenceExpression":case"ThisExpression":case"UnaryExpression":case"UpdateExpression":return!0}return!1},isStatement:t,isIterationStatement:function(e){if(null==e)return!1;switch(e.type){case"DoWhileStatement":case"ForInStatement":case"ForStatement":case"WhileStatement":return!0}return!1},isSourceElement:function(e){return t(e)||null!=e&&"FunctionDeclaration"===e.type},isProblematicIfStatement:function(e){var t;if("IfStatement"!==e.type)return!1;if(null==e.alternate)return!1;t=e.consequent;do{if("IfStatement"===t.type&&null==t.alternate)return!0;t=n(t)}while(t);return!1},trailingStatement:n}}()},function(e,t,n){!function(){"use strict";t.ast=n(21),t.code=n(6),t.keyword=n(20)}()},function(e){e.exports={_args:[["estraverse@4.2.0","/home/pablolimo/rebelstack-projects/metaflux"]],_from:"estraverse@4.2.0",_id:"estraverse@4.2.0",_inBundle:!1,_integrity:"sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",_location:"/static-eval/estraverse",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"estraverse@4.2.0",name:"estraverse",escapedName:"estraverse",rawSpec:"4.2.0",saveSpec:null,fetchSpec:"4.2.0"},_requiredBy:["/static-eval/escodegen"],_resolved:"https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",_spec:"4.2.0",_where:"/home/pablolimo/rebelstack-projects/metaflux",bugs:{url:"https://github.com/estools/estraverse/issues"},description:"ECMAScript JS AST traversal functions",devDependencies:{"babel-preset-es2015":"^6.3.13","babel-register":"^6.3.13",chai:"^2.1.1",espree:"^1.11.0",gulp:"^3.8.10","gulp-bump":"^0.2.2","gulp-filter":"^2.0.0","gulp-git":"^1.0.1","gulp-tag-version":"^1.2.1",jshint:"^2.5.6",mocha:"^2.1.0"},engines:{node:">=0.10.0"},homepage:"https://github.com/estools/estraverse",license:"BSD-2-Clause",main:"estraverse.js",maintainers:[{name:"Yusuke Suzuki",email:"utatane.tea@gmail.com",url:"http://github.com/Constellation"}],name:"estraverse",repository:{type:"git",url:"git+ssh://git@github.com/estools/estraverse.git"},scripts:{lint:"jshint estraverse.js",test:"npm run-script lint && npm run-script unit-test","unit-test":"mocha --compilers js:babel-register"},version:"4.2.0"}},function(e,t,n){!function e(t){"use strict";var r,u,i,o,a,s,c,l,p;function f(e){var t,n,r={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],r[t]="object"==typeof n&&null!==n?f(n):n);return r}function h(e,t){this.parent=e,this.key=t}function m(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function d(){}function D(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function g(e,t){return(e===r.ObjectExpression||e===r.ObjectPattern)&&"properties"===t}function A(e,t){return(new d).traverse(e,t)}function E(e,t){var n;return n=function(e,t){var n,r,u,i;for(r=e.length,u=0;r;)t(e[i=u+(n=r>>>1)])?r=n:(u=i+1,r-=n+1);return u}(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),(n-=1)>=0&&(e.extendedRange[0]=t[n].range[1]),e}return(u=Array.isArray)||(u=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),a=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),s=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},r={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},o={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},i={Break:c={},Skip:l={},Remove:p={}},h.prototype.replace=function(e){this.parent[this.key]=e},h.prototype.remove=function(){return u(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},d.prototype.path=function(){var e,t,n,r,i;function o(e,t){if(u(t))for(n=0,r=t.length;n<r;++n)e.push(t[n]);else e.push(t)}if(!this.__current.path)return null;for(i=[],e=2,t=this.__leavelist.length;e<t;++e)o(i,this.__leavelist[e].path);return o(i,this.__current.path),i},d.prototype.type=function(){return this.current().type||this.__current.wrap},d.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},d.prototype.current=function(){return this.__current.node},d.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},d.prototype.notify=function(e){this.__state=e},d.prototype.skip=function(){this.notify(l)},d.prototype.break=function(){this.notify(c)},d.prototype.remove=function(){this.notify(p)},d.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=s:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=o,t.keys&&(this.__keys=function(e,t){var n,r,u,i=s(t);for(r=0,u=i.length;r<u;r+=1)e[n=i[r]]=t[n];return e}(a(this.__keys),t.keys))},d.prototype.traverse=function(e,t){var n,r,i,o,a,s,p,f,h,d,A,E;for(this.__initialize(e,t),E={},n=this.__worklist,r=this.__leavelist,n.push(new m(e,null,null,null)),r.push(new m(null,null,null,null));n.length;)if((i=n.pop())!==E){if(i.node){if(s=this.__execute(t.enter,i),this.__state===c||s===c)return;if(n.push(E),r.push(i),this.__state===l||s===l)continue;if(a=(o=i.node).type||i.wrap,!(d=this.__keys[a])){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=this.__fallback(o)}for(f=d.length;(f-=1)>=0;)if(A=o[p=d[f]])if(u(A)){for(h=A.length;(h-=1)>=0;)if(A[h]){if(g(a,d[f]))i=new m(A[h],[p,h],"Property",null);else{if(!D(A[h]))continue;i=new m(A[h],[p,h],null,null)}n.push(i)}}else D(A)&&n.push(new m(A,p,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===c||s===c)return},d.prototype.replace=function(e,t){var n,r,i,o,a,s,f,d,A,E,y,C,F;function v(e){var t,r,u,i;if(e.ref.remove())for(r=e.ref.key,i=e.ref.parent,t=n.length;t--;)if((u=n[t]).ref&&u.ref.parent===i){if(u.ref.key<r)break;--u.ref.key}}for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,s=new m(e,null,null,new h(C={root:e},"root")),n.push(s),r.push(s);n.length;)if((s=n.pop())!==y){if(void 0!==(a=this.__execute(t.enter,s))&&a!==c&&a!==l&&a!==p&&(s.ref.replace(a),s.node=a),this.__state!==p&&a!==p||(v(s),s.node=null),this.__state===c||a===c)return C.root;if((i=s.node)&&(n.push(y),r.push(s),this.__state!==l&&a!==l)){if(o=i.type||s.wrap,!(A=this.__keys[o])){if(!this.__fallback)throw new Error("Unknown node type "+o+".");A=this.__fallback(i)}for(f=A.length;(f-=1)>=0;)if(E=i[F=A[f]])if(u(E)){for(d=E.length;(d-=1)>=0;)if(E[d]){if(g(o,A[f]))s=new m(E[d],[F,d],"Property",new h(E,d));else{if(!D(E[d]))continue;s=new m(E[d],[F,d],null,new h(E,d))}n.push(s)}}else D(E)&&n.push(new m(E,F,null,new h(i,F)))}}else if(s=r.pop(),void 0!==(a=this.__execute(t.leave,s))&&a!==c&&a!==l&&a!==p&&s.ref.replace(a),this.__state!==p&&a!==p||v(s),this.__state===c||a===c)return C.root;return C.root},t.version=n(23).version,t.Syntax=r,t.traverse=A,t.replace=function(e,t){return(new d).replace(e,t)},t.attachComments=function(e,t,n){var r,u,o,a,s=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(o=0,u=t.length;o<u;o+=1)(r=f(t[o])).extendedRange=[0,e.range[0]],s.push(r);e.leadingComments=s}return e}for(o=0,u=t.length;o<u;o+=1)s.push(E(f(t[o]),n));return a=0,A(e,{enter:function(e){for(var t;a<s.length&&!((t=s[a]).extendedRange[1]>e.range[0]);)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),s.splice(a,1)):a+=1;return a===s.length?i.Break:s[a].extendedRange[0]>e.range[1]?i.Skip:void 0}}),a=0,A(e,{leave:function(e){for(var t;a<s.length&&(t=s[a],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),s.splice(a,1)):a+=1;return a===s.length?i.Break:s[a].extendedRange[0]>e.range[1]?i.Skip:void 0}}),e},t.VisitorKeys=o,t.VisitorOption=i,t.Controller=d,t.cloneEnvironment=function(){return e({})},t}(t)},function(e,t,n){(function(e){!function(){"use strict";var r,u,i,o,a,s,c,l,p,f,h,m,d,D,g,A,E,y,C,F,v,S,B,b,x,_;function w(e){return K.Statement.hasOwnProperty(e.type)}a=n(24),s=n(22),r=a.Syntax,i={"||":(u={Sequence:0,Yield:1,Await:1,Assignment:1,Conditional:2,ArrowFunction:2,LogicalOR:3,LogicalAND:4,BitwiseOR:5,BitwiseXOR:6,BitwiseAND:7,Equality:8,Relational:9,BitwiseSHIFT:10,Additive:11,Multiplicative:12,Unary:13,Postfix:14,Call:15,New:16,TaggedTemplate:17,Member:18,Primary:19}).LogicalOR,"&&":u.LogicalAND,"|":u.BitwiseOR,"^":u.BitwiseXOR,"&":u.BitwiseAND,"==":u.Equality,"!=":u.Equality,"===":u.Equality,"!==":u.Equality,is:u.Equality,isnt:u.Equality,"<":u.Relational,">":u.Relational,"<=":u.Relational,">=":u.Relational,in:u.Relational,instanceof:u.Relational,"<<":u.BitwiseSHIFT,">>":u.BitwiseSHIFT,">>>":u.BitwiseSHIFT,"+":u.Additive,"-":u.Additive,"*":u.Multiplicative,"%":u.Multiplicative,"/":u.Multiplicative};var k=7,I=1;function O(e,t){var n="";for(t|=0;t>0;t>>>=1,e+=e)1&t&&(n+=e);return n}function L(e){var t=e.length;return t&&s.code.isLineTerminator(e.charCodeAt(t-1))}function P(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function R(e,t){var n,r;function u(e){return"object"==typeof e&&e instanceof Object&&!(e instanceof RegExp)}for(n in t)t.hasOwnProperty(n)&&(u(r=t[n])?u(e[n])?R(e[n],r):e[n]=R({},r):e[n]=r);return e}function T(e,t){return 8232==(-2&e)?(t?"u":"\\u")+(8232===e?"2028":"2029"):10===e||13===e?(t?"":"\\")+(10===e?"n":"r"):String.fromCharCode(e)}function N(e,t){var n;return 8===e?"\\b":12===e?"\\f":9===e?"\\t":(n=e.toString(16).toUpperCase(),p||e>255?"\\u"+"0000".slice(n.length)+n:0!==e||s.code.isDecimalDigit(t)?11===e?"\\x0B":"\\x"+"00".slice(n.length)+n:"\\0")}function M(e){if(92===e)return"\\\\";if(10===e)return"\\n";if(13===e)return"\\r";if(8232===e)return"\\u2028";if(8233===e)return"\\u2029";throw new Error("Incorrectly classified character")}function j(e,t){if(!S)return Array.isArray(e)?function e(t){var n,r,u,i="";for(n=0,r=t.length;n<r;++n)u=t[n],i+=Array.isArray(u)?e(u):u;return i}(e):e;if(null==t){if(e instanceof o)return e;t={}}return null==t.loc?new o(null,null,S,e,t.name||null):new o(t.loc.start.line,t.loc.start.column,!0===S?t.loc.source||null:S,e,t.name||null)}function U(){return g||" "}function q(e,t){var n,r,u,i;return 0===(n=j(e).toString()).length?[t]:0===(r=j(t).toString()).length?[e]:(u=n.charCodeAt(n.length-1),i=r.charCodeAt(0),(43===u||45===u)&&u===i||s.code.isIdentifierPartES5(u)&&s.code.isIdentifierPartES5(i)||47===u&&105===i?[e,U(),t]:s.code.isWhiteSpace(u)||s.code.isLineTerminator(u)||s.code.isWhiteSpace(i)||s.code.isLineTerminator(i)?[e,t]:[e,g,t])}function $(e){return[c,e]}function G(e){var t;t=c,e(c+=l),c=t}function z(e,t){if("Line"===e.type){if(L(e.value))return"//"+e.value;var n="//"+e.value;return b||(n+="\n"),n}return F.format.indent.adjustMultilineComment&&/[\n\r]/.test(e.value)?function(e,t){var n,r,u,i,o,a,l,p;for(n=e.split(/\r\n|[\r\n]/),a=Number.MAX_VALUE,r=1,u=n.length;r<u;++r){for(i=n[r],o=0;o<i.length&&s.code.isWhiteSpace(i.charCodeAt(o));)++o;a>o&&(a=o)}for(void 0!==t?(l=c,"*"===n[1][a]&&(t+=" "),c=t):(1&a&&--a,l=c),r=1,u=n.length;r<u;++r)p=j($(n[r].slice(a))),n[r]=S?p.join(""):p;return c=l,n.join("\n")}("/*"+e.value+"*/",t):"/*"+e.value+"*/"}function W(e,t){var n,u,i,o,a,p,f,h,m,d,D,g;if(e.leadingComments&&e.leadingComments.length>0){if(o=t,b){for(t=[],h=(i=e.leadingComments[0]).extendedRange,m=i.range,(g=((D=B.substring(h[0],m[0])).match(/\n/g)||[]).length)>0?(t.push(O("\n",g)),t.push($(z(i)))):(t.push(D),t.push(z(i))),d=m,n=1,u=e.leadingComments.length;n<u;n++)m=(i=e.leadingComments[n]).range,g=(B.substring(d[1],m[0]).match(/\n/g)||[]).length,t.push(O("\n",g)),t.push($(z(i))),d=m;g=(B.substring(m[1],h[1]).match(/\n/g)||[]).length,t.push(O("\n",g))}else for(i=e.leadingComments[0],t=[],y&&e.type===r.Program&&0===e.body.length&&t.push("\n"),t.push(z(i)),L(j(t).toString())||t.push("\n"),n=1,u=e.leadingComments.length;n<u;++n)L(j(f=[z(i=e.leadingComments[n])]).toString())||f.push("\n"),t.push($(f));t.push($(o))}if(e.trailingComments)if(b)h=(i=e.trailingComments[0]).extendedRange,m=i.range,(g=((D=B.substring(h[0],m[0])).match(/\n/g)||[]).length)>0?(t.push(O("\n",g)),t.push($(z(i)))):(t.push(D),t.push(z(i)));else for(a=!L(j(t).toString()),p=O(" ",function(e){var t;for(t=e.length-1;t>=0&&!s.code.isLineTerminator(e.charCodeAt(t));--t);return e.length-1-t}(j([c,t,l]).toString())),n=0,u=e.trailingComments.length;n<u;++n)i=e.trailingComments[n],a?(t=0===n?[t,l]:[t,p]).push(z(i,p)):t=[t,$(z(i))],n===u-1||L(j(t).toString())||(t=[t,"\n"]);return t}function H(e,t,n){var r,u=0;for(r=e;r<t;r++)"\n"===B[r]&&u++;for(r=1;r<u;r++)n.push(D)}function V(e,t,n){return t<n?["(",e,")"]:e}function X(e){var t,n,r;for(t=1,n=(r=e.split(/\r\n|\n/)).length;t<n;t++)r[t]=D+c+r[t];return r}function K(){}function J(e){return j(e.name,e)}function Q(e,t){return e.async?"async"+(t?U():g):""}function Y(e){return e.generator&&!F.moz.starlessGenerator?"*"+g:""}function Z(e){var t=e.value;return t.async?Q(t,!e.computed):Y(t)?"*":""}function ee(e){var t;if(t=new K,w(e))return t.generateStatement(e,I);if(function(e){return K.Expression.hasOwnProperty(e.type)}(e))return t.generateExpression(e,u.Sequence,k);throw new Error("Unknown node type: "+e.type)}K.prototype.maybeBlock=function(e,t){var n,u,i=this;return u=!F.comment||!e.leadingComments,e.type===r.BlockStatement&&u?[g,this.generateStatement(e,t)]:e.type===r.EmptyStatement&&u?";":(G(function(){n=[D,$(i.generateStatement(e,t))]}),n)},K.prototype.maybeBlockSuffix=function(e,t){var n=L(j(t).toString());return e.type!==r.BlockStatement||F.comment&&e.leadingComments||n?n?[t,c]:[t,D,c]:[t,g]},K.prototype.generatePattern=function(e,t,n){return e.type===r.Identifier?J(e):this.generateExpression(e,t,n)},K.prototype.generateFunctionParams=function(e){var t,n,i,o;if(o=!1,e.type!==r.ArrowFunctionExpression||e.rest||e.defaults&&0!==e.defaults.length||1!==e.params.length||e.params[0].type!==r.Identifier){for((i=e.type===r.ArrowFunctionExpression?[Q(e,!1)]:[]).push("("),e.defaults&&(o=!0),t=0,n=e.params.length;t<n;++t)o&&e.defaults[t]?i.push(this.generateAssignment(e.params[t],e.defaults[t],"=",u.Assignment,k)):i.push(this.generatePattern(e.params[t],u.Assignment,k)),t+1<n&&i.push(","+g);e.rest&&(e.params.length&&i.push(","+g),i.push("..."),i.push(J(e.rest))),i.push(")")}else i=[Q(e,!0),J(e.params[0])];return i},K.prototype.generateFunctionBody=function(e){var t,n;return t=this.generateFunctionParams(e),e.type===r.ArrowFunctionExpression&&(t.push(g),t.push("=>")),e.expression?(t.push(g),"{"===(n=this.generateExpression(e.body,u.Assignment,k)).toString().charAt(0)&&(n=["(",n,")"]),t.push(n)):t.push(this.maybeBlock(e.body,9)),t},K.prototype.generateIterationForStatement=function(e,t,n){var i=["for"+g+"("],o=this;return G(function(){t.left.type===r.VariableDeclaration?G(function(){i.push(t.left.kind+U()),i.push(o.generateStatement(t.left.declarations[0],0))}):i.push(o.generateExpression(t.left,u.Call,k)),i=[q(i=q(i,e),o.generateExpression(t.right,u.Sequence,k)),")"]}),i.push(this.maybeBlock(t.body,n)),i},K.prototype.generatePropertyKey=function(e,t){var n=[];return t&&n.push("["),n.push(this.generateExpression(e,u.Sequence,k)),t&&n.push("]"),n},K.prototype.generateAssignment=function(e,t,n,r,i){return u.Assignment<r&&(i|=1),V([this.generateExpression(e,u.Call,i),g+n+g,this.generateExpression(t,u.Assignment,i)],u.Assignment,r)},K.prototype.semicolon=function(e){return!E&&32&e?"":";"},K.Statement={BlockStatement:function(e,t){var n,r,u=["{",D],i=this;return G(function(){var o,a,s,c;for(0===e.body.length&&b&&(n=e.range)[1]-n[0]>2&&("\n"===(r=B.substring(n[0]+1,n[1]-1))[0]&&(u=["{"]),u.push(r)),c=I,8&t&&(c|=16),o=0,a=e.body.length;o<a;++o)b&&(0===o&&(e.body[0].leadingComments&&(n=e.body[0].leadingComments[0].extendedRange,"\n"===(r=B.substring(n[0],n[1]))[0]&&(u=["{"])),e.body[0].leadingComments||H(e.range[0],e.body[0].range[0],u)),o>0&&(e.body[o-1].trailingComments||e.body[o].leadingComments||H(e.body[o-1].range[1],e.body[o].range[0],u))),o===a-1&&(c|=32),s=e.body[o].leadingComments&&b?i.generateStatement(e.body[o],c):$(i.generateStatement(e.body[o],c)),u.push(s),L(j(s).toString())||b&&o<a-1&&e.body[o+1].leadingComments||u.push(D),b&&o===a-1&&(e.body[o].trailingComments||H(e.body[o].range[1],e.range[1],u))}),u.push($("}")),u},BreakStatement:function(e,t){return e.label?"break "+e.label.name+this.semicolon(t):"break"+this.semicolon(t)},ContinueStatement:function(e,t){return e.label?"continue "+e.label.name+this.semicolon(t):"continue"+this.semicolon(t)},ClassBody:function(e,t){var n=["{",D],r=this;return G(function(t){var i,o;for(i=0,o=e.body.length;i<o;++i)n.push(t),n.push(r.generateExpression(e.body[i],u.Sequence,k)),i+1<o&&n.push(D)}),L(j(n).toString())||n.push(D),n.push(c),n.push("}"),n},ClassDeclaration:function(e,t){var n;return n=["class"],e.id&&(n=q(n,this.generateExpression(e.id,u.Sequence,k))),e.superClass&&(n=q(n,q("extends",this.generateExpression(e.superClass,u.Assignment,k)))),n.push(g),n.push(this.generateStatement(e.body,33)),n},DirectiveStatement:function(e,t){return F.raw&&e.raw?e.raw+this.semicolon(t):function(e){var t,n,r,u;for(u="double"===m?'"':"'",t=0,n=e.length;t<n;++t){if(39===(r=e.charCodeAt(t))){u='"';break}if(34===r){u="'";break}92===r&&++t}return u+e+u}(e.directive)+this.semicolon(t)},DoWhileStatement:function(e,t){var n=q("do",this.maybeBlock(e.body,I));return q(n=this.maybeBlockSuffix(e.body,n),["while"+g+"(",this.generateExpression(e.test,u.Sequence,k),")"+this.semicolon(t)])},CatchClause:function(e,t){var n,r=this;return G(function(){var t;n=["catch"+g+"(",r.generateExpression(e.param,u.Sequence,k),")"],e.guard&&(t=r.generateExpression(e.guard,u.Sequence,k),n.splice(2,0," if ",t))}),n.push(this.maybeBlock(e.body,I)),n},DebuggerStatement:function(e,t){return"debugger"+this.semicolon(t)},EmptyStatement:function(e,t){return";"},ExportDefaultDeclaration:function(e,t){var n,r=["export"];return n=32&t?33:I,r=q(r,"default"),r=w(e.declaration)?q(r,this.generateStatement(e.declaration,n)):q(r,this.generateExpression(e.declaration,u.Assignment,k)+this.semicolon(t))},ExportNamedDeclaration:function(e,t){var n,i=["export"],o=this;return n=32&t?33:I,e.declaration?q(i,this.generateStatement(e.declaration,n)):(e.specifiers&&(0===e.specifiers.length?i=q(i,"{"+g+"}"):e.specifiers[0].type===r.ExportBatchSpecifier?i=q(i,this.generateExpression(e.specifiers[0],u.Sequence,k)):(i=q(i,"{"),G(function(t){var n,r;for(i.push(D),n=0,r=e.specifiers.length;n<r;++n)i.push(t),i.push(o.generateExpression(e.specifiers[n],u.Sequence,k)),n+1<r&&i.push(","+D)}),L(j(i).toString())||i.push(D),i.push(c+"}")),e.source?i=q(i,["from"+g,this.generateExpression(e.source,u.Sequence,k),this.semicolon(t)]):i.push(this.semicolon(t))),i)},ExportAllDeclaration:function(e,t){return["export"+g,"*"+g,"from"+g,this.generateExpression(e.source,u.Sequence,k),this.semicolon(t)]},ExpressionStatement:function(e,t){var n,i;return 123===(i=j(n=[this.generateExpression(e.expression,u.Sequence,k)]).toString()).charCodeAt(0)||function(e){var t;return"class"===e.slice(0,5)&&(123===(t=e.charCodeAt(5))||s.code.isWhiteSpace(t)||s.code.isLineTerminator(t))}(i)||function(e){var t;return"function"===e.slice(0,8)&&(40===(t=e.charCodeAt(8))||s.code.isWhiteSpace(t)||42===t||s.code.isLineTerminator(t))}(i)||function(e){var t,n,r;if("async"!==e.slice(0,5))return!1;if(!s.code.isWhiteSpace(e.charCodeAt(5)))return!1;for(n=6,r=e.length;n<r&&s.code.isWhiteSpace(e.charCodeAt(n));++n);return n!==r&&"function"===e.slice(n,n+8)&&(40===(t=e.charCodeAt(n+8))||s.code.isWhiteSpace(t)||42===t||s.code.isLineTerminator(t))}(i)||C&&16&t&&e.expression.type===r.Literal&&"string"==typeof e.expression.value?n=["(",n,")"+this.semicolon(t)]:n.push(this.semicolon(t)),n},ImportDeclaration:function(e,t){var n,i,o=this;return 0===e.specifiers.length?["import",g,this.generateExpression(e.source,u.Sequence,k),this.semicolon(t)]:(n=["import"],i=0,e.specifiers[i].type===r.ImportDefaultSpecifier&&(n=q(n,[this.generateExpression(e.specifiers[i],u.Sequence,k)]),++i),e.specifiers[i]&&(0!==i&&n.push(","),e.specifiers[i].type===r.ImportNamespaceSpecifier?n=q(n,[g,this.generateExpression(e.specifiers[i],u.Sequence,k)]):(n.push(g+"{"),e.specifiers.length-i==1?(n.push(g),n.push(this.generateExpression(e.specifiers[i],u.Sequence,k)),n.push(g+"}"+g)):(G(function(t){var r,a;for(n.push(D),r=i,a=e.specifiers.length;r<a;++r)n.push(t),n.push(o.generateExpression(e.specifiers[r],u.Sequence,k)),r+1<a&&n.push(","+D)}),L(j(n).toString())||n.push(D),n.push(c+"}"+g)))),n=q(n,["from"+g,this.generateExpression(e.source,u.Sequence,k),this.semicolon(t)]))},VariableDeclarator:function(e,t){var n=1&t?k:6;return e.init?[this.generateExpression(e.id,u.Assignment,n),g,"=",g,this.generateExpression(e.init,u.Assignment,n)]:this.generatePattern(e.id,u.Assignment,n)},VariableDeclaration:function(e,t){var n,r,u,i,o,a=this;function s(){for(i=e.declarations[0],F.comment&&i.leadingComments?(n.push("\n"),n.push($(a.generateStatement(i,o)))):(n.push(U()),n.push(a.generateStatement(i,o))),r=1,u=e.declarations.length;r<u;++r)i=e.declarations[r],F.comment&&i.leadingComments?(n.push(","+D),n.push($(a.generateStatement(i,o)))):(n.push(","+g),n.push(a.generateStatement(i,o)))}return n=[e.kind],o=1&t?I:0,e.declarations.length>1?G(s):s(),n.push(this.semicolon(t)),n},ThrowStatement:function(e,t){return[q("throw",this.generateExpression(e.argument,u.Sequence,k)),this.semicolon(t)]},TryStatement:function(e,t){var n,r,u,i;if(n=["try",this.maybeBlock(e.block,I)],n=this.maybeBlockSuffix(e.block,n),e.handlers)for(r=0,u=e.handlers.length;r<u;++r)n=q(n,this.generateStatement(e.handlers[r],I)),(e.finalizer||r+1!==u)&&(n=this.maybeBlockSuffix(e.handlers[r].body,n));else{for(r=0,u=(i=e.guardedHandlers||[]).length;r<u;++r)n=q(n,this.generateStatement(i[r],I)),(e.finalizer||r+1!==u)&&(n=this.maybeBlockSuffix(i[r].body,n));if(e.handler)if(Array.isArray(e.handler))for(r=0,u=e.handler.length;r<u;++r)n=q(n,this.generateStatement(e.handler[r],I)),(e.finalizer||r+1!==u)&&(n=this.maybeBlockSuffix(e.handler[r].body,n));else n=q(n,this.generateStatement(e.handler,I)),e.finalizer&&(n=this.maybeBlockSuffix(e.handler.body,n))}return e.finalizer&&(n=q(n,["finally",this.maybeBlock(e.finalizer,I)])),n},SwitchStatement:function(e,t){var n,r,i,o,a,s=this;if(G(function(){n=["switch"+g+"(",s.generateExpression(e.discriminant,u.Sequence,k),")"+g+"{"+D]}),e.cases)for(a=I,i=0,o=e.cases.length;i<o;++i)i===o-1&&(a|=32),r=$(this.generateStatement(e.cases[i],a)),n.push(r),L(j(r).toString())||n.push(D);return n.push($("}")),n},SwitchCase:function(e,t){var n,i,o,a,s,c=this;return G(function(){for(n=e.test?[q("case",c.generateExpression(e.test,u.Sequence,k)),":"]:["default:"],o=0,(a=e.consequent.length)&&e.consequent[0].type===r.BlockStatement&&(i=c.maybeBlock(e.consequent[0],I),n.push(i),o=1),o===a||L(j(n).toString())||n.push(D),s=I;o<a;++o)o===a-1&&32&t&&(s|=32),i=$(c.generateStatement(e.consequent[o],s)),n.push(i),o+1===a||L(j(i).toString())||n.push(D)}),n},IfStatement:function(e,t){var n,i,o=this;return G(function(){n=["if"+g+"(",o.generateExpression(e.test,u.Sequence,k),")"]}),i=I,32&t&&(i|=32),e.alternate?(n.push(this.maybeBlock(e.consequent,I)),n=this.maybeBlockSuffix(e.consequent,n),n=e.alternate.type===r.IfStatement?q(n,["else ",this.generateStatement(e.alternate,i)]):q(n,q("else",this.maybeBlock(e.alternate,i)))):n.push(this.maybeBlock(e.consequent,i)),n},ForStatement:function(e,t){var n,i=this;return G(function(){n=["for"+g+"("],e.init?e.init.type===r.VariableDeclaration?n.push(i.generateStatement(e.init,0)):(n.push(i.generateExpression(e.init,u.Sequence,6)),n.push(";")):n.push(";"),e.test?(n.push(g),n.push(i.generateExpression(e.test,u.Sequence,k)),n.push(";")):n.push(";"),e.update?(n.push(g),n.push(i.generateExpression(e.update,u.Sequence,k)),n.push(")")):n.push(")")}),n.push(this.maybeBlock(e.body,32&t?33:I)),n},ForInStatement:function(e,t){return this.generateIterationForStatement("in",e,32&t?33:I)},ForOfStatement:function(e,t){return this.generateIterationForStatement("of",e,32&t?33:I)},LabeledStatement:function(e,t){return[e.label.name+":",this.maybeBlock(e.body,32&t?33:I)]},Program:function(e,t){var n,r,u,i,o;for(i=e.body.length,n=[y&&i>0?"\n":""],o=17,u=0;u<i;++u)y||u!==i-1||(o|=32),b&&(0===u&&(e.body[0].leadingComments||H(e.range[0],e.body[u].range[0],n)),u>0&&(e.body[u-1].trailingComments||e.body[u].leadingComments||H(e.body[u-1].range[1],e.body[u].range[0],n))),r=$(this.generateStatement(e.body[u],o)),n.push(r),u+1<i&&!L(j(r).toString())&&(b&&e.body[u+1].leadingComments||n.push(D)),b&&u===i-1&&(e.body[u].trailingComments||H(e.body[u].range[1],e.range[1],n));return n},FunctionDeclaration:function(e,t){return[Q(e,!0),"function",Y(e)||U(),e.id?J(e.id):"",this.generateFunctionBody(e)]},ReturnStatement:function(e,t){return e.argument?[q("return",this.generateExpression(e.argument,u.Sequence,k)),this.semicolon(t)]:["return"+this.semicolon(t)]},WhileStatement:function(e,t){var n,r=this;return G(function(){n=["while"+g+"(",r.generateExpression(e.test,u.Sequence,k),")"]}),n.push(this.maybeBlock(e.body,32&t?33:I)),n},WithStatement:function(e,t){var n,r=this;return G(function(){n=["with"+g+"(",r.generateExpression(e.object,u.Sequence,k),")"]}),n.push(this.maybeBlock(e.body,32&t?33:I)),n}},P(K.prototype,K.Statement),K.Expression={SequenceExpression:function(e,t,n){var r,i,o;for(u.Sequence<t&&(n|=1),r=[],i=0,o=e.expressions.length;i<o;++i)r.push(this.generateExpression(e.expressions[i],u.Assignment,n)),i+1<o&&r.push(","+g);return V(r,u.Sequence,t)},AssignmentExpression:function(e,t,n){return this.generateAssignment(e.left,e.right,e.operator,t,n)},ArrowFunctionExpression:function(e,t,n){return V(this.generateFunctionBody(e),u.ArrowFunction,t)},ConditionalExpression:function(e,t,n){return u.Conditional<t&&(n|=1),V([this.generateExpression(e.test,u.LogicalOR,n),g+"?"+g,this.generateExpression(e.consequent,u.Assignment,n),g+":"+g,this.generateExpression(e.alternate,u.Assignment,n)],u.Conditional,t)},LogicalExpression:function(e,t,n){return this.BinaryExpression(e,t,n)},BinaryExpression:function(e,t,n){var r,u,o,a;return(u=i[e.operator])<t&&(n|=1),r=47===(a=(o=this.generateExpression(e.left,u,n)).toString()).charCodeAt(a.length-1)&&s.code.isIdentifierPartES5(e.operator.charCodeAt(0))?[o,U(),e.operator]:q(o,e.operator),o=this.generateExpression(e.right,u+1,n),"/"===e.operator&&"/"===o.toString().charAt(0)||"<"===e.operator.slice(-1)&&"!--"===o.toString().slice(0,3)?(r.push(U()),r.push(o)):r=q(r,o),"in"!==e.operator||1&n?V(r,u,t):["(",r,")"]},CallExpression:function(e,t,n){var r,i,o;for((r=[this.generateExpression(e.callee,u.Call,3)]).push("("),i=0,o=e.arguments.length;i<o;++i)r.push(this.generateExpression(e.arguments[i],u.Assignment,k)),i+1<o&&r.push(","+g);return r.push(")"),2&n?V(r,u.Call,t):["(",r,")"]},NewExpression:function(e,t,n){var r,i,o,a,s;if(i=e.arguments.length,s=4&n&&!A&&0===i?5:1,r=q("new",this.generateExpression(e.callee,u.New,s)),!(4&n)||A||i>0){for(r.push("("),o=0,a=i;o<a;++o)r.push(this.generateExpression(e.arguments[o],u.Assignment,k)),o+1<a&&r.push(","+g);r.push(")")}return V(r,u.New,t)},MemberExpression:function(e,t,n){var i,o;return i=[this.generateExpression(e.object,u.Call,2&n?3:1)],e.computed?(i.push("["),i.push(this.generateExpression(e.property,u.Sequence,2&n?k:5)),i.push("]")):(e.object.type===r.Literal&&"number"==typeof e.object.value&&(o=j(i).toString()).indexOf(".")<0&&!/[eExX]/.test(o)&&s.code.isDecimalDigit(o.charCodeAt(o.length-1))&&!(o.length>=2&&48===o.charCodeAt(0))&&i.push(" "),i.push("."),i.push(J(e.property))),V(i,u.Member,t)},MetaProperty:function(e,t,n){var r;return(r=[]).push(e.meta),r.push("."),r.push(e.property),V(r,u.Member,t)},UnaryExpression:function(e,t,n){var r,i,o,a,c;return i=this.generateExpression(e.argument,u.Unary,k),""===g?r=q(e.operator,i):(r=[e.operator],e.operator.length>2?r=q(r,i):(c=(a=j(r).toString()).charCodeAt(a.length-1),o=i.toString().charCodeAt(0),(43===c||45===c)&&c===o||s.code.isIdentifierPartES5(c)&&s.code.isIdentifierPartES5(o)?(r.push(U()),r.push(i)):r.push(i))),V(r,u.Unary,t)},YieldExpression:function(e,t,n){var r;return r=e.delegate?"yield*":"yield",e.argument&&(r=q(r,this.generateExpression(e.argument,u.Yield,k))),V(r,u.Yield,t)},AwaitExpression:function(e,t,n){return V(q(e.all?"await*":"await",this.generateExpression(e.argument,u.Await,k)),u.Await,t)},UpdateExpression:function(e,t,n){return e.prefix?V([e.operator,this.generateExpression(e.argument,u.Unary,k)],u.Unary,t):V([this.generateExpression(e.argument,u.Postfix,k),e.operator],u.Postfix,t)},FunctionExpression:function(e,t,n){var r=[Q(e,!0),"function"];return e.id?(r.push(Y(e)||U()),r.push(J(e.id))):r.push(Y(e)||g),r.push(this.generateFunctionBody(e)),r},ArrayPattern:function(e,t,n){return this.ArrayExpression(e,t,n,!0)},ArrayExpression:function(e,t,n,r){var i,o,a=this;return e.elements.length?(o=!r&&e.elements.length>1,i=["[",o?D:""],G(function(t){var n,r;for(n=0,r=e.elements.length;n<r;++n)e.elements[n]?(i.push(o?t:""),i.push(a.generateExpression(e.elements[n],u.Assignment,k))):(o&&i.push(t),n+1===r&&i.push(",")),n+1<r&&i.push(","+(o?D:g))}),o&&!L(j(i).toString())&&i.push(D),i.push(o?c:""),i.push("]"),i):"[]"},RestElement:function(e,t,n){return"..."+this.generatePattern(e.argument)},ClassExpression:function(e,t,n){var r;return r=["class"],e.id&&(r=q(r,this.generateExpression(e.id,u.Sequence,k))),e.superClass&&(r=q(r,q("extends",this.generateExpression(e.superClass,u.Assignment,k)))),r.push(g),r.push(this.generateStatement(e.body,33)),r},MethodDefinition:function(e,t,n){return q(e.static?["static"+g]:[],"get"===e.kind||"set"===e.kind?[q(e.kind,this.generatePropertyKey(e.key,e.computed)),this.generateFunctionBody(e.value)]:[Z(e),this.generatePropertyKey(e.key,e.computed),this.generateFunctionBody(e.value)])},Property:function(e,t,n){return"get"===e.kind||"set"===e.kind?[e.kind,U(),this.generatePropertyKey(e.key,e.computed),this.generateFunctionBody(e.value)]:e.shorthand?"AssignmentPattern"===e.value.type?this.AssignmentPattern(e.value,u.Sequence,k):this.generatePropertyKey(e.key,e.computed):e.method?[Z(e),this.generatePropertyKey(e.key,e.computed),this.generateFunctionBody(e.value)]:[this.generatePropertyKey(e.key,e.computed),":"+g,this.generateExpression(e.value,u.Assignment,k)]},ObjectExpression:function(e,t,n){var r,i,o,a=this;return e.properties.length?(r=e.properties.length>1,G(function(){o=a.generateExpression(e.properties[0],u.Sequence,k)}),r||function(e){return/[\r\n]/g.test(e)}(j(o).toString())?(G(function(t){var n,s;if(i=["{",D,t,o],r)for(i.push(","+D),n=1,s=e.properties.length;n<s;++n)i.push(t),i.push(a.generateExpression(e.properties[n],u.Sequence,k)),n+1<s&&i.push(","+D)}),L(j(i).toString())||i.push(D),i.push(c),i.push("}"),i):["{",g,o,g,"}"]):"{}"},AssignmentPattern:function(e,t,n){return this.generateAssignment(e.left,e.right,"=",t,n)},ObjectPattern:function(e,t,n){var i,o,a,s,l=this;if(!e.properties.length)return"{}";if(s=!1,1===e.properties.length)e.properties[0].value.type!==r.Identifier&&(s=!0);else for(o=0,a=e.properties.length;o<a;++o)if(!e.properties[o].shorthand){s=!0;break}return i=["{",s?D:""],G(function(t){var n,r;for(n=0,r=e.properties.length;n<r;++n)i.push(s?t:""),i.push(l.generateExpression(e.properties[n],u.Sequence,k)),n+1<r&&i.push(","+(s?D:g))}),s&&!L(j(i).toString())&&i.push(D),i.push(s?c:""),i.push("}"),i},ThisExpression:function(e,t,n){return"this"},Super:function(e,t,n){return"super"},Identifier:function(e,t,n){return J(e)},ImportDefaultSpecifier:function(e,t,n){return J(e.id||e.local)},ImportNamespaceSpecifier:function(e,t,n){var r=["*"],u=e.id||e.local;return u&&r.push(g+"as"+U()+J(u)),r},ImportSpecifier:function(e,t,n){var r=e.imported,u=[r.name],i=e.local;return i&&i.name!==r.name&&u.push(U()+"as"+U()+J(i)),u},ExportSpecifier:function(e,t,n){var r=e.local,u=[r.name],i=e.exported;return i&&i.name!==r.name&&u.push(U()+"as"+U()+J(i)),u},Literal:function(e,t,n){var u;if(e.hasOwnProperty("raw")&&v&&F.raw)try{if((u=v(e.raw).body[0].expression).type===r.Literal&&u.value===e.value)return e.raw}catch(e){}return null===e.value?"null":"string"==typeof e.value?function(e){var t,n,r,u,i,o="",a=0,c=0;for(t=0,n=e.length;t<n;++t){if(39===(r=e.charCodeAt(t)))++a;else if(34===r)++c;else if(47===r&&p)o+="\\";else{if(s.code.isLineTerminator(r)||92===r){o+=M(r);continue}if(!s.code.isIdentifierPartES5(r)&&(p&&r<32||!p&&!d&&(r<32||r>126))){o+=N(r,e.charCodeAt(t+1));continue}}o+=String.fromCharCode(r)}if(i=(u=!("double"===m||"auto"===m&&c<a))?"'":'"',!(u?a:c))return i+o+i;for(e=o,o=i,t=0,n=e.length;t<n;++t)(39===(r=e.charCodeAt(t))&&u||34===r&&!u)&&(o+="\\"),o+=String.fromCharCode(r);return o+i}(e.value):"number"==typeof e.value?function(e){var t,n,r,u,i;if(e!=e)throw new Error("Numeric literal whose value is NaN");if(e<0||0===e&&1/e<0)throw new Error("Numeric literal whose value is negative");if(e===1/0)return p?"null":f?"1e400":"1e+400";if(t=""+e,!f||t.length<3)return t;for(n=t.indexOf("."),p||48!==t.charCodeAt(0)||1!==n||(n=0,t=t.slice(1)),r=t,t=t.replace("e+","e"),u=0,(i=r.indexOf("e"))>0&&(u=+r.slice(i+1),r=r.slice(0,i)),n>=0&&(u-=r.length-n-1,r=+(r.slice(0,n)+r.slice(n+1))+""),i=0;48===r.charCodeAt(r.length+i-1);)--i;return 0!==i&&(u-=i,r=r.slice(0,i)),0!==u&&(r+="e"+u),(r.length<t.length||h&&e>1e12&&Math.floor(e)===e&&(r="0x"+e.toString(16)).length<t.length)&&+r===e&&(t=r),t}(e.value):"boolean"==typeof e.value?e.value?"true":"false":e.regex?"/"+e.regex.pattern+"/"+e.regex.flags:function(e){var t,n,r,u,i,o,a,s;if(n=e.toString(),e.source){if(!(t=n.match(/\/([^/]*)$/)))return n;for(r=t[1],n="",a=!1,s=!1,u=0,i=e.source.length;u<i;++u)o=e.source.charCodeAt(u),s?(n+=T(o,s),s=!1):(a?93===o&&(a=!1):47===o?n+="\\":91===o&&(a=!0),n+=T(o,s),s=92===o);return"/"+n+"/"+r}return n}(e.value)},GeneratorExpression:function(e,t,n){return this.ComprehensionExpression(e,t,n)},ComprehensionExpression:function(e,t,n){var i,o,a,s,c=this;return i=e.type===r.GeneratorExpression?["("]:["["],F.moz.comprehensionExpressionStartsWithAssignment&&(s=this.generateExpression(e.body,u.Assignment,k),i.push(s)),e.blocks&&G(function(){for(o=0,a=e.blocks.length;o<a;++o)s=c.generateExpression(e.blocks[o],u.Sequence,k),o>0||F.moz.comprehensionExpressionStartsWithAssignment?i=q(i,s):i.push(s)}),e.filter&&(i=q(i,"if"+g),s=this.generateExpression(e.filter,u.Sequence,k),i=q(i,["(",s,")"])),F.moz.comprehensionExpressionStartsWithAssignment||(s=this.generateExpression(e.body,u.Assignment,k),i=q(i,s)),i.push(e.type===r.GeneratorExpression?")":"]"),i},ComprehensionBlock:function(e,t,n){var i;return i=q(i=q(i=e.left.type===r.VariableDeclaration?[e.left.kind,U(),this.generateStatement(e.left.declarations[0],0)]:this.generateExpression(e.left,u.Call,k),e.of?"of":"in"),this.generateExpression(e.right,u.Sequence,k)),["for"+g+"(",i,")"]},SpreadElement:function(e,t,n){return["...",this.generateExpression(e.argument,u.Assignment,k)]},TaggedTemplateExpression:function(e,t,n){var r=3;return 2&n||(r=1),V([this.generateExpression(e.tag,u.Call,r),this.generateExpression(e.quasi,u.Primary,4)],u.TaggedTemplate,t)},TemplateElement:function(e,t,n){return e.value.raw},TemplateLiteral:function(e,t,n){var r,i,o;for(r=["`"],i=0,o=e.quasis.length;i<o;++i)r.push(this.generateExpression(e.quasis[i],u.Primary,k)),i+1<o&&(r.push("${"+g),r.push(this.generateExpression(e.expressions[i],u.Sequence,k)),r.push(g+"}"));return r.push("`"),r},ModuleSpecifier:function(e,t,n){return this.Literal(e,t,n)}},P(K.prototype,K.Expression),K.prototype.generateExpression=function(e,t,n){var i,o;return o=e.type||r.Property,F.verbatim&&e.hasOwnProperty(F.verbatim)?function(e,t){var n;return j("string"==typeof(n=e[F.verbatim])?V(X(n),u.Sequence,t):V(X(n.content),null!=n.precedence?n.precedence:u.Sequence,t),e)}(e,t):(i=this[o](e,t,n),F.comment&&(i=W(e,i)),j(i,e))},K.prototype.generateStatement=function(e,t){var n,u;return n=this[e.type](e,t),F.comment&&(n=W(e,n)),u=j(n).toString(),e.type!==r.Program||y||""!==D||"\n"!==u.charAt(u.length-1)||(n=S?j(n).replaceRight(/\s+$/,""):u.replace(/\s+$/,"")),j(n,e)},x={indent:{style:"",base:0},renumber:!0,hexadecimal:!0,quotes:"auto",escapeless:!0,compact:!0,parentheses:!1,semicolons:!1},_={indent:{style:"    ",base:0,adjustMultilineComment:!1},newline:"\n",space:" ",json:!1,renumber:!1,hexadecimal:!1,quotes:"single",escapeless:!1,compact:!1,parentheses:!0,semicolons:!0,safeConcatenation:!1,preserveBlankLines:!1},t.version=n(12).version,t.generate=function(r,u){var i,a,s={indent:null,base:null,parse:null,comment:!1,format:{indent:{style:"    ",base:0,adjustMultilineComment:!1},newline:"\n",space:" ",json:!1,renumber:!1,hexadecimal:!1,quotes:"single",escapeless:!1,compact:!1,parentheses:!0,semicolons:!0,safeConcatenation:!1,preserveBlankLines:!1},moz:{comprehensionExpressionStartsWithAssignment:!1,starlessGenerator:!1},sourceMap:null,sourceMapRoot:null,sourceMapWithCode:!1,directive:!1,raw:!0,verbatim:null,sourceCode:null};return null!=u?("string"==typeof u.indent&&(s.format.indent.style=u.indent),"number"==typeof u.base&&(s.format.indent.base=u.base),u=R(s,u),l=u.format.indent.style,c="string"==typeof u.base?u.base:O(l,u.format.indent.base)):(l=(u=s).format.indent.style,c=O(l,u.format.indent.base)),p=u.format.json,f=u.format.renumber,h=!p&&u.format.hexadecimal,m=p?"double":u.format.quotes,d=u.format.escapeless,D=u.format.newline,g=u.format.space,u.format.compact&&(D=g=l=c=""),A=u.format.parentheses,E=u.format.semicolons,y=u.format.safeConcatenation,C=u.directive,v=p?null:u.parse,S=u.sourceMap,B=u.sourceCode,b=u.format.preserveBlankLines&&null!==B,F=u,S&&(o=t.browser?e.sourceMap.SourceNode:n(19).SourceNode),i=ee(r),S?(a=i.toStringWithSourceMap({file:u.file,sourceRoot:u.sourceMapRoot}),u.sourceContent&&a.map.setSourceContent(u.sourceMap,u.sourceContent),u.sourceMapWithCode?a:a.map.toString()):(a={code:i.toString(),map:null},u.sourceMapWithCode?a:a.code)},t.attachComments=a.attachComments,t.Precedence=R({},u),t.browser=!1,t.FORMAT_MINIFY=x,t.FORMAT_DEFAULTS=_}()}).call(this,n(2))},function(e,t,n){var r=n(25).generate;e.exports=function(e,t){t||(t={});var n={},u=function e(u,i){if("Literal"===u.type)return u.value;if("UnaryExpression"===u.type){var o=e(u.argument);return"+"===u.operator?+o:"-"===u.operator?-o:"~"===u.operator?~o:"!"===u.operator?!o:n}if("ArrayExpression"===u.type){for(var a=[],s=0,c=u.elements.length;s<c;s++){if((g=e(u.elements[s]))===n)return n;a.push(g)}return a}if("ObjectExpression"===u.type){var l={};for(s=0;s<u.properties.length;s++){var p=null===(A=u.properties[s]).value?A.value:e(A.value);if(p===n)return n;l[A.key.value||A.key.name]=p}return l}if("BinaryExpression"===u.type||"LogicalExpression"===u.type){if((c=e(u.left))===n)return n;var f=e(u.right);if(f===n)return n;var h=u.operator;return"=="===h?c==f:"==="===h?c===f:"!="===h?c!=f:"!=="===h?c!==f:"+"===h?c+f:"-"===h?c-f:"*"===h?c*f:"/"===h?c/f:"%"===h?c%f:"<"===h?c<f:"<="===h?c<=f:">"===h?c>f:">="===h?c>=f:"|"===h?c|f:"&"===h?c&f:"^"===h?c^f:"&&"===h?c&&f:"||"===h?c||f:n}if("Identifier"===u.type)return{}.hasOwnProperty.call(t,u.name)?t[u.name]:n;if("ThisExpression"===u.type)return{}.hasOwnProperty.call(t,"this")?t.this:n;if("CallExpression"===u.type){var m=e(u.callee);if(m===n)return n;if("function"!=typeof m)return n;var d=u.callee.object?e(u.callee.object):n;d===n&&(d=null);var D=[];for(s=0,c=u.arguments.length;s<c;s++){var g;if((g=e(u.arguments[s]))===n)return n;D.push(g)}return m.apply(d,D)}var A;if("MemberExpression"===u.type)return(l=e(u.object))===n||"function"==typeof l?n:"Identifier"===u.property.type?l[u.property.name]:(A=e(u.property))===n?n:l[A];if("ConditionalExpression"===u.type)return(o=e(u.test))===n?n:e(o?u.consequent:u.alternate);if("ExpressionStatement"===u.type)return(o=e(u.expression))===n?n:o;if("ReturnStatement"===u.type)return e(u.argument);if("FunctionExpression"===u.type){var E=u.body.body,y={};for(var s in Object.keys(t).forEach(function(e){y[e]=t[e]}),u.params.forEach(function(e){"Identifier"==e.type&&(t[e.name]=null)}),E)if(e(E[s])===n)return n;t=y;var C=Object.keys(t),F=C.map(function(e){return t[e]});return Function(C.join(", "),"return "+r(u)).apply(null,F)}if("TemplateLiteral"===u.type){var v="";for(s=0;s<u.expressions.length;s++)v+=e(u.quasis[s]),v+=e(u.expressions[s]);return v+=e(u.quasis[s])}if("TaggedTemplateExpression"===u.type){var S=e(u.tag),B=u.quasi,b=B.quasis.map(e),x=B.expressions.map(e);return S.apply(null,[b].concat(x))}return"TemplateElement"===u.type?u.value.cooked:n}(e);return u===n?void 0:u}},function(e,t){function n(e){return String(e).match(/^[0-9]+$/)?parseInt(e):Number.isFinite(e)?parseInt(e,10):0}e.exports=function(e,t,r,u){if("string"==typeof t)throw new Error("start cannot be a string");if("string"==typeof r)throw new Error("end cannot be a string");if("string"==typeof u)throw new Error("step cannot be a string");var i=e.length;if(0===u)throw new Error("step cannot be zero");if(u=u?n(u):1,t=t<0?i+t:t,r=r<0?i+r:r,t=n(0===t?0:t||(u>0?0:i-1)),r=n(0===r?0:r||(u>0?i:-1)),t=u>0?Math.max(0,t):Math.min(i,t),r=u>0?Math.min(r,i):Math.max(-1,r),u>0&&r<=t)return[];if(u<0&&t<=r)return[];for(var o=[],a=t;a!=r&&!(u<0&&a<=r||u>0&&a>=r);a+=u)o.push(e[a]);return o}},function(e,t,n){var r,u,i;!function(n,o){"use strict";u=[t],void 0===(i="function"==typeof(r=function(e){var t,n,r,u,i,o,a,s,c,l,p,f,h,m,d,D,g,A;function E(e,t){if(!e)throw new Error("ASSERT: "+t)}function y(e){return e>=48&&e<=57}function C(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function F(e){return"01234567".indexOf(e)>=0}function v(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0}function S(e){return 10===e||13===e||8232===e||8233===e}function B(e){return 64==e||36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||92===e||e>=128&&a.NonAsciiIdentifierStart.test(String.fromCharCode(e))}function b(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||92===e||e>=128&&a.NonAsciiIdentifierPart.test(String.fromCharCode(e))}function x(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}}function _(e){return"eval"===e||"arguments"===e}function w(e,t,n,r,u){var i;E("number"==typeof n,"Comment must have valid position"),g.lastCommentStart>=n||(g.lastCommentStart=n,i={type:e,value:t},A.range&&(i.range=[n,r]),A.loc&&(i.loc=u),A.comments.push(i),A.attachComment&&(A.leadingComments.push(i),A.trailingComments.push(i)))}function k(e){var t,n,r,u;for(t=p-e,n={start:{line:f,column:p-h-e}};p<m;)if(r=c.charCodeAt(p),++p,S(r))return A.comments&&(u=c.slice(t+e,p-1),n.end={line:f,column:p-h-1},w("Line",u,t,p-1,n)),13===r&&10===c.charCodeAt(p)&&++p,++f,void(h=p);A.comments&&(u=c.slice(t+e,p),n.end={line:f,column:p-h},w("Line",u,t,p,n))}function I(){var e,t,n,r;for(A.comments&&(e=p-2,t={start:{line:f,column:p-h-2}});p<m;)if(S(n=c.charCodeAt(p)))13===n&&10===c.charCodeAt(p+1)&&++p,++f,h=++p,p>=m&&H({},o.UnexpectedToken,"ILLEGAL");else if(42===n){if(47===c.charCodeAt(p+1))return++p,++p,void(A.comments&&(r=c.slice(e+2,p-2),t.end={line:f,column:p-h},w("Block",r,e,p,t)));++p}else++p;H({},o.UnexpectedToken,"ILLEGAL")}function O(){var e,t;for(t=0===p;p<m;)if(v(e=c.charCodeAt(p)))++p;else if(S(e))++p,13===e&&10===c.charCodeAt(p)&&++p,++f,h=p,t=!0;else if(47===e)if(47===(e=c.charCodeAt(p+1)))++p,++p,k(2),t=!0;else{if(42!==e)break;++p,++p,I()}else if(t&&45===e){if(45!==c.charCodeAt(p+1)||62!==c.charCodeAt(p+2))break;p+=3,k(3)}else{if(60!==e)break;if("!--"!==c.slice(p+1,p+4))break;++p,++p,++p,++p,k(4)}}function L(e){var t,n,r,u=0;for(n="u"===e?4:2,t=0;t<n;++t){if(!(p<m&&C(c[p])))return"";r=c[p++],u=16*u+"0123456789abcdef".indexOf(r.toLowerCase())}return String.fromCharCode(u)}function P(){var e,t;for(e=c.charCodeAt(p++),t=String.fromCharCode(e),92===e&&(117!==c.charCodeAt(p)&&H({},o.UnexpectedToken,"ILLEGAL"),++p,(e=L("u"))&&"\\"!==e&&B(e.charCodeAt(0))||H({},o.UnexpectedToken,"ILLEGAL"),t=e);p<m&&b(e=c.charCodeAt(p));)++p,t+=String.fromCharCode(e),92===e&&(t=t.substr(0,t.length-1),117!==c.charCodeAt(p)&&H({},o.UnexpectedToken,"ILLEGAL"),++p,(e=L("u"))&&"\\"!==e&&b(e.charCodeAt(0))||H({},o.UnexpectedToken,"ILLEGAL"),t+=e);return t}function R(){var e,n;return e=p,n=92===c.charCodeAt(p)?P():function(){var e,t;e=p++;for(;p<m;){if(92===(t=c.charCodeAt(p)))return p=e,P();if(!b(t))break;++p}return c.slice(e,p)}(),{type:1===n.length?t.Identifier:function(e){if(l&&x(e))return!0;switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e||"let"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}}(n)?t.Keyword:"null"===n?t.NullLiteral:"true"===n||"false"===n?t.BooleanLiteral:t.Identifier,value:n,lineNumber:f,lineStart:h,start:e,end:p}}function T(){var e,n,r,u,i=p,a=c.charCodeAt(p),s=c[p];switch(a){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:return++p,A.tokenize&&(40===a?A.openParenToken=A.tokens.length:123===a&&(A.openCurlyToken=A.tokens.length)),{type:t.Punctuator,value:String.fromCharCode(a),lineNumber:f,lineStart:h,start:i,end:p};default:if(61===(e=c.charCodeAt(p+1)))switch(a){case 43:case 45:case 47:case 60:case 62:case 94:case 124:case 37:case 38:case 42:return p+=2,{type:t.Punctuator,value:String.fromCharCode(a)+String.fromCharCode(e),lineNumber:f,lineStart:h,start:i,end:p};case 33:case 61:return p+=2,61===c.charCodeAt(p)&&++p,{type:t.Punctuator,value:c.slice(i,p),lineNumber:f,lineStart:h,start:i,end:p}}}return">>>="===(u=c.substr(p,4))?(p+=4,{type:t.Punctuator,value:u,lineNumber:f,lineStart:h,start:i,end:p}):">>>"===(r=u.substr(0,3))||"<<="===r||">>="===r?(p+=3,{type:t.Punctuator,value:r,lineNumber:f,lineStart:h,start:i,end:p}):(n=r.substr(0,2),s===n[1]&&"+-<>&|".indexOf(s)>=0||"=>"===n?(p+=2,{type:t.Punctuator,value:n,lineNumber:f,lineStart:h,start:i,end:p}):"<>=!+-*%&|^/".indexOf(s)>=0?(++p,{type:t.Punctuator,value:s,lineNumber:f,lineStart:h,start:i,end:p}):void H({},o.UnexpectedToken,"ILLEGAL"))}function N(){var e,n,r;if(E(y((r=c[p]).charCodeAt(0))||"."===r,"Numeric literal must start with a decimal digit or a decimal point"),n=p,e="","."!==r){if(e=c[p++],r=c[p],"0"===e){if("x"===r||"X"===r)return++p,function(e){var n="";for(;p<m&&C(c[p]);)n+=c[p++];0===n.length&&H({},o.UnexpectedToken,"ILLEGAL");B(c.charCodeAt(p))&&H({},o.UnexpectedToken,"ILLEGAL");return{type:t.NumericLiteral,value:parseInt("0x"+n,16),lineNumber:f,lineStart:h,start:e,end:p}}(n);if(F(r))return function(e){var n="0"+c[p++];for(;p<m&&F(c[p]);)n+=c[p++];(B(c.charCodeAt(p))||y(c.charCodeAt(p)))&&H({},o.UnexpectedToken,"ILLEGAL");return{type:t.NumericLiteral,value:parseInt(n,8),octal:!0,lineNumber:f,lineStart:h,start:e,end:p}}(n);r&&y(r.charCodeAt(0))&&H({},o.UnexpectedToken,"ILLEGAL")}for(;y(c.charCodeAt(p));)e+=c[p++];r=c[p]}if("."===r){for(e+=c[p++];y(c.charCodeAt(p));)e+=c[p++];r=c[p]}if("e"===r||"E"===r)if(e+=c[p++],"+"!==(r=c[p])&&"-"!==r||(e+=c[p++]),y(c.charCodeAt(p)))for(;y(c.charCodeAt(p));)e+=c[p++];else H({},o.UnexpectedToken,"ILLEGAL");return B(c.charCodeAt(p))&&H({},o.UnexpectedToken,"ILLEGAL"),{type:t.NumericLiteral,value:parseFloat(e),lineNumber:f,lineStart:h,start:n,end:p}}function M(){var e,n,r,u;return D=null,O(),e=p,n=function(){var e,t,n,r;E("/"===(e=c[p]),"Regular expression literal must start with a slash"),t=c[p++],n=!1,r=!1;for(;p<m;)if(e=c[p++],t+=e,"\\"===e)S((e=c[p++]).charCodeAt(0))&&H({},o.UnterminatedRegExp),t+=e;else if(S(e.charCodeAt(0)))H({},o.UnterminatedRegExp);else if(n)"]"===e&&(n=!1);else{if("/"===e){r=!0;break}"["===e&&(n=!0)}r||H({},o.UnterminatedRegExp);return{value:t.substr(1,t.length-2),literal:t}}(),r=function(){var e,t,n,r;t="",n="";for(;p<m&&b((e=c[p]).charCodeAt(0));)if(++p,"\\"===e&&p<m)if("u"===(e=c[p])){if(r=++p,e=L("u"))for(n+=e,t+="\\u";r<p;++r)t+=c[r];else p=r,n+="u",t+="\\u";V({},o.UnexpectedToken,"ILLEGAL")}else t+="\\",V({},o.UnexpectedToken,"ILLEGAL");else n+=e,t+=e;return{value:n,literal:t}}(),u=function(e,t){var n;try{n=new RegExp(e,t)}catch(e){H({},o.InvalidRegExp)}return n}(n.value,r.value),A.tokenize?{type:t.RegularExpression,value:u,lineNumber:f,lineStart:h,start:e,end:p}:{literal:n.literal+r.literal,value:u,start:e,end:p}}function j(){var e,t,n,r;return O(),e=p,t={start:{line:f,column:p-h}},n=M(),t.end={line:f,column:p-h},A.tokenize||(A.tokens.length>0&&(r=A.tokens[A.tokens.length-1]).range[0]===e&&"Punctuator"===r.type&&("/"!==r.value&&"/="!==r.value||A.tokens.pop()),A.tokens.push({type:"RegularExpression",value:n.literal,range:[e,p],loc:t})),n}function U(){var e;return O(),p>=m?{type:t.EOF,lineNumber:f,lineStart:h,start:p,end:p}:B(e=c.charCodeAt(p))?R():40===e||41===e||59===e?T():39===e||34===e?function(){var e,n,r,u,i,a,s,l,d="",D=!1;s=f,l=h,E("'"===(e=c[p])||'"'===e,"String literal must starts with a quote"),n=p,++p;for(;p<m;){if((r=c[p++])===e){e="";break}if("\\"===r)if((r=c[p++])&&S(r.charCodeAt(0)))++f,"\r"===r&&"\n"===c[p]&&++p,h=p;else switch(r){case"u":case"x":a=p,(i=L(r))?d+=i:(p=a,d+=r);break;case"n":d+="\n";break;case"r":d+="\r";break;case"t":d+="\t";break;case"b":d+="\b";break;case"f":d+="\f";break;case"v":d+="\v";break;default:F(r)?(0!==(u="01234567".indexOf(r))&&(D=!0),p<m&&F(c[p])&&(D=!0,u=8*u+"01234567".indexOf(c[p++]),"0123".indexOf(r)>=0&&p<m&&F(c[p])&&(u=8*u+"01234567".indexOf(c[p++]))),d+=String.fromCharCode(u)):d+=r}else{if(S(r.charCodeAt(0)))break;d+=r}}""!==e&&H({},o.UnexpectedToken,"ILLEGAL");return{type:t.StringLiteral,value:d,octal:D,startLineNumber:s,startLineStart:l,lineNumber:f,lineStart:h,start:n,end:p}}():46===e?y(c.charCodeAt(p+1))?N():T():y(e)?N():A.tokenize&&47===e?function(){var e,t;if(!(e=A.tokens[A.tokens.length-1]))return j();if("Punctuator"===e.type){if("]"===e.value)return T();if(")"===e.value)return!(t=A.tokens[A.openParenToken-1])||"Keyword"!==t.type||"if"!==t.value&&"while"!==t.value&&"for"!==t.value&&"with"!==t.value?T():j();if("}"===e.value){if(A.tokens[A.openCurlyToken-3]&&"Keyword"===A.tokens[A.openCurlyToken-3].type){if(!(t=A.tokens[A.openCurlyToken-4]))return T()}else{if(!A.tokens[A.openCurlyToken-4]||"Keyword"!==A.tokens[A.openCurlyToken-4].type)return T();if(!(t=A.tokens[A.openCurlyToken-5]))return j()}return r.indexOf(t.value)>=0?T():j()}return j()}if("Keyword"===e.type)return j();return T()}():T()}function q(){var e,r,u;return O(),e={start:{line:f,column:p-h}},r=U(),e.end={line:f,column:p-h},r.type!==t.EOF&&(u=c.slice(r.start,r.end),A.tokens.push({type:n[r.type],value:u,range:[r.start,r.end],loc:e})),r}function $(){var e;return p=(e=D).end,f=e.lineNumber,h=e.lineStart,D=void 0!==A.tokens?q():U(),p=e.end,f=e.lineNumber,h=e.lineStart,e}function G(){var e,t,n;e=p,t=f,n=h,D=void 0!==A.tokens?q():U(),p=e,f=t,h=n}function z(e,t){this.line=e,this.column=t}function W(){var e,t,n,r;return e=p,t=f,n=h,O(),r=f!==t,p=e,f=t,h=n,r}function H(e,t){var n,r=Array.prototype.slice.call(arguments,2),u=t.replace(/%(\d)/g,function(e,t){return E(t<r.length,"Message reference must be in range"),r[t]});throw"number"==typeof e.lineNumber?((n=new Error("Line "+e.lineNumber+": "+u)).index=e.start,n.lineNumber=e.lineNumber,n.column=e.start-h+1):((n=new Error("Line "+f+": "+u)).index=p,n.lineNumber=f,n.column=p-h+1),n.description=u,n}function V(){try{H.apply(null,arguments)}catch(e){if(!A.errors)throw e;A.errors.push(e)}}function X(e){if(e.type===t.EOF&&H(e,o.UnexpectedEOS),e.type===t.NumericLiteral&&H(e,o.UnexpectedNumber),e.type===t.StringLiteral&&H(e,o.UnexpectedString),e.type===t.Identifier&&H(e,o.UnexpectedIdentifier),e.type===t.Keyword){if(function(e){switch(e){case"class":case"enum":case"export":case"extends":case"import":case"super":return!0;default:return!1}}(e.value))H(e,o.UnexpectedReserved);else if(l&&x(e.value))return void V(e,o.StrictReservedWord);H(e,o.UnexpectedToken,e.value)}H(e,o.UnexpectedToken,e.value)}function K(e){var n=$();n.type===t.Punctuator&&n.value===e||X(n)}function J(e){var n=$();n.type===t.Keyword&&n.value===e||X(n)}function Q(e){return D.type===t.Punctuator&&D.value===e}function Y(e){return D.type===t.Keyword&&D.value===e}function Z(){var e;59===c.charCodeAt(p)||Q(";")?$():(e=f,O(),f===e&&(D.type===t.EOF||Q("}")||X(D)))}function ee(e){return e.type===u.Identifier||e.type===u.MemberExpression}function te(e,t){var n,r,u;return n=l,u=D,r=Se(),t&&l&&_(e[0].name)&&V(t,o.StrictParamName),l=n,d.markEnd(d.createFunctionExpression(null,e,[],r),u)}function ne(){var e,n;return n=D,(e=$()).type===t.StringLiteral||e.type===t.NumericLiteral?(l&&e.octal&&V(e,o.StrictOctalLiteral),d.markEnd(d.createLiteral(e),n)):d.markEnd(d.createIdentifier(e.value),n)}function re(){var e,n,r,u,i,a;return a=D,(e=D).type===t.Identifier?(r=ne(),"get"!==e.value||Q(":")?"set"!==e.value||Q(":")?(K(":"),u=me(),d.markEnd(d.createProperty("init",r,u),a)):(n=ne(),K("("),(e=D).type!==t.Identifier?(K(")"),V(e,o.UnexpectedToken,e.value),u=te([])):(i=[ge()],K(")"),u=te(i,e)),d.markEnd(d.createProperty("set",n,u),a)):(n=ne(),K("("),K(")"),u=te([]),d.markEnd(d.createProperty("get",n,u),a))):e.type!==t.EOF&&e.type!==t.Punctuator?(n=ne(),K(":"),u=me(),d.markEnd(d.createProperty("init",n,u),a)):void X(e)}function ue(){var e,n,r,a;if(Q("("))return function(){var e;return K("("),e=de(),K(")"),e}();if(Q("["))return function(){var e,t=[];e=D,K("[");for(;!Q("]");)Q(",")?($(),t.push(null)):(t.push(me()),Q("]")||K(","));return $(),d.markEnd(d.createArrayExpression(t),e)}();if(Q("{"))return function(){var e,t,n,r,a,s=[],c={},p=String;a=D,K("{");for(;!Q("}");)e=re(),t=e.key.type===u.Identifier?e.key.name:p(e.key.value),r="init"===e.kind?i.Data:"get"===e.kind?i.Get:i.Set,n="$"+t,Object.prototype.hasOwnProperty.call(c,n)?(c[n]===i.Data?l&&r===i.Data?V({},o.StrictDuplicateProperty):r!==i.Data&&V({},o.AccessorDataProperty):r===i.Data?V({},o.AccessorDataProperty):c[n]&r&&V({},o.AccessorGetSet),c[n]|=r):c[n]=r,s.push(e),Q("}")||K(",");return K("}"),d.markEnd(d.createObjectExpression(s),a)}();if(e=D.type,a=D,e===t.Identifier)r=d.createIdentifier($().value);else if(e===t.StringLiteral||e===t.NumericLiteral)l&&D.octal&&V(D,o.StrictOctalLiteral),r=d.createLiteral($());else if(e===t.Keyword){if(Y("function"))return function(){var e,t,n,r,u,i,a,s,c=null,p=[];s=D,J("function"),Q("(")||(e=D,c=ge(),l?_(e.value)&&V(e,o.StrictFunctionName):_(e.value)?(n=e,r=o.StrictFunctionName):x(e.value)&&(n=e,r=o.StrictReservedWord));u=Be(n),p=u.params,t=u.stricted,n=u.firstRestricted,u.message&&(r=u.message);a=l,i=Se(),l&&n&&H(n,r);l&&t&&V(t,r);return l=a,d.markEnd(d.createFunctionExpression(c,p,[],i),s)}();Y("this")?($(),r=d.createThisExpression()):X($())}else e===t.BooleanLiteral?((n=$()).value="true"===n.value,r=d.createLiteral(n)):e===t.NullLiteral?((n=$()).value=null,r=d.createLiteral(n)):Q("/")||Q("/=")?(r=void 0!==A.tokens?d.createLiteral(j()):d.createLiteral(M()),G()):X($());return d.markEnd(r,a)}function ie(){var e=[];if(K("("),!Q(")"))for(;p<m&&(e.push(me()),!Q(")"));)K(",");return K(")"),e}function oe(){var e,n;return n=D,function(e){return e.type===t.Identifier||e.type===t.Keyword||e.type===t.BooleanLiteral||e.type===t.NullLiteral}(e=$())||X(e),d.markEnd(d.createIdentifier(e.value),n)}function ae(){return K("."),oe()}function se(){var e;return K("["),e=de(),K("]"),e}function ce(){var e,t,n;return n=D,J("new"),e=function(){var e,t,n,r;r=D,e=g.allowIn,t=Y("new")?ce():ue(),g.allowIn=e;for(;Q(".")||Q("[");)Q("[")?(n=se(),t=d.createMemberExpression("[",t,n)):(n=ae(),t=d.createMemberExpression(".",t,n)),d.markEnd(t,r);return t}(),t=Q("(")?ie():[],d.markEnd(d.createNewExpression(e,t),n)}function le(){var e,n,r=D;return e=function(){var e,t,n,r,u;for(u=D,e=g.allowIn,g.allowIn=!0,t=Y("new")?ce():ue(),g.allowIn=e;;){if(Q("."))r=ae(),t=d.createMemberExpression(".",t,r);else if(Q("("))n=ie(),t=d.createCallExpression(t,n);else{if(!Q("["))break;r=se(),t=d.createMemberExpression("[",t,r)}d.markEnd(t,u)}return t}(),D.type===t.Punctuator&&(!Q("++")&&!Q("--")||W()||(l&&e.type===u.Identifier&&_(e.name)&&V({},o.StrictLHSPostfix),ee(e)||V({},o.InvalidLHSInAssignment),n=$(),e=d.markEnd(d.createPostfixExpression(n.value,e),r))),e}function pe(){var e,n,r;return D.type!==t.Punctuator&&D.type!==t.Keyword?n=le():Q("++")||Q("--")?(r=D,e=$(),n=pe(),l&&n.type===u.Identifier&&_(n.name)&&V({},o.StrictLHSPrefix),ee(n)||V({},o.InvalidLHSInAssignment),n=d.createUnaryExpression(e.value,n),n=d.markEnd(n,r)):Q("+")||Q("-")||Q("~")||Q("!")?(r=D,e=$(),n=pe(),n=d.createUnaryExpression(e.value,n),n=d.markEnd(n,r)):Y("delete")||Y("void")||Y("typeof")?(r=D,e=$(),n=pe(),n=d.createUnaryExpression(e.value,n),n=d.markEnd(n,r),l&&"delete"===n.operator&&n.argument.type===u.Identifier&&V({},o.StrictDelete)):n=le(),n}function fe(e,n){var r=0;if(e.type!==t.Punctuator&&e.type!==t.Keyword)return 0;switch(e.value){case"||":r=1;break;case"&&":r=2;break;case"|":r=3;break;case"^":r=4;break;case"&":r=5;break;case"==":case"!=":case"===":case"!==":r=6;break;case"<":case">":case"<=":case">=":case"instanceof":r=7;break;case"in":r=n?7:0;break;case"<<":case">>":case">>>":r=8;break;case"+":case"-":r=9;break;case"*":case"/":case"%":r=11}return r}function he(){var e,t,n,r,u;return u=D,e=function(){var e,t,n,r,u,i,o,a,s,c;if(e=D,s=pe(),0===(u=fe(r=D,g.allowIn)))return s;r.prec=u,$(),t=[e,D],o=pe(),i=[s,r,o];for(;(u=fe(D,g.allowIn))>0;){for(;i.length>2&&u<=i[i.length-2].prec;)o=i.pop(),a=i.pop().value,s=i.pop(),n=d.createBinaryExpression(a,s,o),t.pop(),e=t[t.length-1],d.markEnd(n,e),i.push(n);(r=$()).prec=u,i.push(r),t.push(D),n=pe(),i.push(n)}c=i.length-1,n=i[c],t.pop();for(;c>1;)n=d.createBinaryExpression(i[c-1].value,i[c-2],n),c-=2,e=t.pop(),d.markEnd(n,e);return n}(),Q("?")&&($(),t=g.allowIn,g.allowIn=!0,n=me(),g.allowIn=t,K(":"),r=me(),e=d.createConditionalExpression(e,n,r),d.markEnd(e,u)),e}function me(){var e,n,r,i,a;return e=D,a=D,i=n=he(),function(){var e;if(D.type!==t.Punctuator)return!1;return"="===(e=D.value)||"*="===e||"/="===e||"%="===e||"+="===e||"-="===e||"<<="===e||">>="===e||">>>="===e||"&="===e||"^="===e||"|="===e}()&&(ee(n)||V({},o.InvalidLHSInAssignment),l&&n.type===u.Identifier&&_(n.name)&&V(e,o.StrictLHSAssignment),e=$(),r=me(),i=d.markEnd(d.createAssignmentExpression(e.value,n,r),a)),i}function de(){var e,t=D;if(e=me(),Q(",")){for(e=d.createSequenceExpression([e]);p<m&&Q(",");)$(),e.expressions.push(me());d.markEnd(e,t)}return e}function De(){var e,t;return t=D,K("{"),e=function(){var e,t=[];for(;p<m&&!Q("}")&&void 0!==(e=xe());)t.push(e);return t}(),K("}"),d.markEnd(d.createBlockStatement(e),t)}function ge(){var e,n;return n=D,(e=$()).type!==t.Identifier&&X(e),d.markEnd(d.createIdentifier(e.value),n)}function Ae(e){var t,n,r=null;return n=D,t=ge(),l&&_(t.name)&&V({},o.StrictVarName),"const"===e?(K("="),r=me()):Q("=")&&($(),r=me()),d.markEnd(d.createVariableDeclarator(t,r),n)}function Ee(e){var t=[];do{if(t.push(Ae(e)),!Q(","))break;$()}while(p<m);return t}function ye(){var e,t,n,r,u,i,a;return e=t=n=null,J("for"),K("("),Q(";")?$():(Y("var")||Y("let")?(g.allowIn=!1,e=function(){var e,t,n;return n=D,e=$(),t=Ee(),d.markEnd(d.createVariableDeclaration(t,e.value),n)}(),g.allowIn=!0,1===e.declarations.length&&Y("in")&&($(),r=e,u=de(),e=null)):(g.allowIn=!1,e=de(),g.allowIn=!0,Y("in")&&(ee(e)||V({},o.InvalidLHSInForIn),$(),r=e,u=de(),e=null)),void 0===r&&K(";")),void 0===r&&(Q(";")||(t=de()),K(";"),Q(")")||(n=de())),K(")"),a=g.inIteration,g.inIteration=!0,i=ve(),g.inIteration=a,void 0===r?d.createForStatement(e,t,n,i):d.createForInStatement(r,u,i)}function Ce(){var e,t,n,r=[];for(n=D,Y("default")?($(),e=null):(J("case"),e=de()),K(":");p<m&&!(Q("}")||Y("default")||Y("case"));)t=ve(),r.push(t);return d.markEnd(d.createSwitchCase(e,r),n)}function Fe(){var e,t=[],n=null;return J("try"),e=De(),Y("catch")&&t.push(function(){var e,t,n;n=D,J("catch"),K("("),Q(")")&&X(D);e=ge(),l&&_(e.name)&&V({},o.StrictCatchVariable);return K(")"),t=De(),d.markEnd(d.createCatchClause(e,t),n)}()),Y("finally")&&($(),n=De()),0!==t.length||n||H({},o.NoCatchOrFinally),d.createTryStatement(e,[],t,n)}function ve(){var e,n,r,i,a=D.type;if(a===t.EOF&&X(D),a===t.Punctuator&&"{"===D.value)return De();if(i=D,a===t.Punctuator)switch(D.value){case";":return d.markEnd((K(";"),d.createEmptyStatement()),i);case"(":return d.markEnd(function(){var e=de();return Z(),d.createExpressionStatement(e)}(),i)}if(a===t.Keyword)switch(D.value){case"break":return d.markEnd(function(){var e,n=null;if(J("break"),59===c.charCodeAt(p))return $(),g.inIteration||g.inSwitch||H({},o.IllegalBreak),d.createBreakStatement(null);if(W())return g.inIteration||g.inSwitch||H({},o.IllegalBreak),d.createBreakStatement(null);D.type===t.Identifier&&(n=ge(),e="$"+n.name,Object.prototype.hasOwnProperty.call(g.labelSet,e)||H({},o.UnknownLabel,n.name));Z(),null!==n||g.inIteration||g.inSwitch||H({},o.IllegalBreak);return d.createBreakStatement(n)}(),i);case"continue":return d.markEnd(function(){var e,n=null;if(J("continue"),59===c.charCodeAt(p))return $(),g.inIteration||H({},o.IllegalContinue),d.createContinueStatement(null);if(W())return g.inIteration||H({},o.IllegalContinue),d.createContinueStatement(null);D.type===t.Identifier&&(n=ge(),e="$"+n.name,Object.prototype.hasOwnProperty.call(g.labelSet,e)||H({},o.UnknownLabel,n.name));Z(),null!==n||g.inIteration||H({},o.IllegalContinue);return d.createContinueStatement(n)}(),i);case"debugger":return d.markEnd((J("debugger"),Z(),d.createDebuggerStatement()),i);case"do":return d.markEnd(function(){var e,t,n;J("do"),n=g.inIteration,g.inIteration=!0,e=ve(),g.inIteration=n,J("while"),K("("),t=de(),K(")"),Q(";")&&$();return d.createDoWhileStatement(e,t)}(),i);case"for":return d.markEnd(ye(),i);case"function":return d.markEnd(be(),i);case"if":return d.markEnd(function(){var e,t,n;J("if"),K("("),e=de(),K(")"),t=ve(),Y("else")?($(),n=ve()):n=null;return d.createIfStatement(e,t,n)}(),i);case"return":return d.markEnd(function(){var e=null;J("return"),g.inFunctionBody||V({},o.IllegalReturn);if(32===c.charCodeAt(p)&&B(c.charCodeAt(p+1)))return e=de(),Z(),d.createReturnStatement(e);if(W())return d.createReturnStatement(null);Q(";")||Q("}")||D.type===t.EOF||(e=de());return Z(),d.createReturnStatement(e)}(),i);case"switch":return d.markEnd(function(){var e,t,n,r,u;if(J("switch"),K("("),e=de(),K(")"),K("{"),t=[],Q("}"))return $(),d.createSwitchStatement(e,t);r=g.inSwitch,g.inSwitch=!0,u=!1;for(;p<m&&!Q("}");)null===(n=Ce()).test&&(u&&H({},o.MultipleDefaultsInSwitch),u=!0),t.push(n);return g.inSwitch=r,K("}"),d.createSwitchStatement(e,t)}(),i);case"throw":return d.markEnd(function(){var e;J("throw"),W()&&H({},o.NewlineAfterThrow);return e=de(),Z(),d.createThrowStatement(e)}(),i);case"try":return d.markEnd(Fe(),i);case"var":return d.markEnd(function(){var e;return J("var"),e=Ee(),Z(),d.createVariableDeclaration(e,"var")}(),i);case"while":return d.markEnd(function(){var e,t,n;return J("while"),K("("),e=de(),K(")"),n=g.inIteration,g.inIteration=!0,t=ve(),g.inIteration=n,d.createWhileStatement(e,t)}(),i);case"with":return d.markEnd(function(){var e,t;l&&(O(),V({},o.StrictModeWith));return J("with"),K("("),e=de(),K(")"),t=ve(),d.createWithStatement(e,t)}(),i)}return(e=de()).type===u.Identifier&&Q(":")?($(),r="$"+e.name,Object.prototype.hasOwnProperty.call(g.labelSet,r)&&H({},o.Redeclaration,"Label",e.name),g.labelSet[r]=!0,n=ve(),delete g.labelSet[r],d.markEnd(d.createLabeledStatement(e,n),i)):(Z(),d.markEnd(d.createExpressionStatement(e),i))}function Se(){var e,n,r,i,a,s,f,h,A=[];for(h=D,K("{");p<m&&D.type===t.StringLiteral&&(n=D,e=xe(),A.push(e),e.expression.type===u.Literal);)"use strict"===c.slice(n.start+1,n.end-1)?(l=!0,r&&V(r,o.StrictOctalLiteral)):!r&&n.octal&&(r=n);for(i=g.labelSet,a=g.inIteration,s=g.inSwitch,f=g.inFunctionBody,g.labelSet={},g.inIteration=!1,g.inSwitch=!1,g.inFunctionBody=!0;p<m&&!Q("}")&&void 0!==(e=xe());)A.push(e);return K("}"),g.labelSet=i,g.inIteration=a,g.inSwitch=s,g.inFunctionBody=f,d.markEnd(d.createBlockStatement(A),h)}function Be(e){var t,n,r,u,i,a,s=[];if(K("("),!Q(")"))for(u={};p<m&&(n=D,t=ge(),i="$"+n.value,l?(_(n.value)&&(r=n,a=o.StrictParamName),Object.prototype.hasOwnProperty.call(u,i)&&(r=n,a=o.StrictParamDupe)):e||(_(n.value)?(e=n,a=o.StrictParamName):x(n.value)?(e=n,a=o.StrictReservedWord):Object.prototype.hasOwnProperty.call(u,i)&&(e=n,a=o.StrictParamDupe)),s.push(t),u[i]=!0,!Q(")"));)K(",");return K(")"),{params:s,stricted:r,firstRestricted:e,message:a}}function be(){var e,t,n,r,u,i,a,s,c,p=[];return c=D,J("function"),n=D,e=ge(),l?_(n.value)&&V(n,o.StrictFunctionName):_(n.value)?(i=n,a=o.StrictFunctionName):x(n.value)&&(i=n,a=o.StrictReservedWord),u=Be(i),p=u.params,r=u.stricted,i=u.firstRestricted,u.message&&(a=u.message),s=l,t=Se(),l&&i&&H(i,a),l&&r&&V(r,a),l=s,d.markEnd(d.createFunctionDeclaration(e,p,[],t),c)}function xe(){if(D.type===t.Keyword)switch(D.value){case"const":case"let":return function(e){var t,n;return n=D,J(e),t=Ee(e),Z(),d.markEnd(d.createVariableDeclaration(t,e),n)}(D.value);case"function":return be();default:return ve()}if(D.type!==t.EOF)return ve()}function _e(){var e,n;return O(),G(),n=D,l=!1,e=function(){var e,n,r,i=[];for(;p<m&&(n=D).type===t.StringLiteral&&(e=xe(),i.push(e),e.expression.type===u.Literal);)"use strict"===c.slice(n.start+1,n.end-1)?(l=!0,r&&V(r,o.StrictOctalLiteral)):!r&&n.octal&&(r=n);for(;p<m&&void 0!==(e=xe());)i.push(e);return i}(),d.markEnd(d.createProgram(e),n)}function we(){var e,t,n,r=[];for(e=0;e<A.tokens.length;++e)t=A.tokens[e],n={type:t.type,value:t.value},A.range&&(n.range=t.range),A.loc&&(n.loc=t.loc),r.push(n);A.tokens=r}(n={})[(t={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9}).BooleanLiteral]="Boolean",n[t.EOF]="<end>",n[t.Identifier]="Identifier",n[t.Keyword]="Keyword",n[t.NullLiteral]="Null",n[t.NumericLiteral]="Numeric",n[t.Punctuator]="Punctuator",n[t.StringLiteral]="String",n[t.RegularExpression]="RegularExpression",r=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="],u={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement"},i={Data:1,Get:2,Set:4},o={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictDuplicateProperty:"Duplicate data property in object literal not allowed in strict mode",AccessorDataProperty:"Object literal may not have data and accessor property with the same name",AccessorGetSet:"Object literal may not have multiple get/set accessors with the same name",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode"},a={NonAsciiIdentifierStart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),NonAsciiIdentifierPart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")},s={name:"SyntaxTree",processComment:function(e){var t,n;if(!(e.type===u.Program&&e.body.length>0)){for(A.trailingComments.length>0?A.trailingComments[0].range[0]>=e.range[1]?(n=A.trailingComments,A.trailingComments=[]):A.trailingComments.length=0:A.bottomRightStack.length>0&&A.bottomRightStack[A.bottomRightStack.length-1].trailingComments&&A.bottomRightStack[A.bottomRightStack.length-1].trailingComments[0].range[0]>=e.range[1]&&(n=A.bottomRightStack[A.bottomRightStack.length-1].trailingComments,delete A.bottomRightStack[A.bottomRightStack.length-1].trailingComments);A.bottomRightStack.length>0&&A.bottomRightStack[A.bottomRightStack.length-1].range[0]>=e.range[0];)t=A.bottomRightStack.pop();t?t.leadingComments&&t.leadingComments[t.leadingComments.length-1].range[1]<=e.range[0]&&(e.leadingComments=t.leadingComments,delete t.leadingComments):A.leadingComments.length>0&&A.leadingComments[A.leadingComments.length-1].range[1]<=e.range[0]&&(e.leadingComments=A.leadingComments,A.leadingComments=[]),n&&(e.trailingComments=n),A.bottomRightStack.push(e)}},markEnd:function(e,t){return A.range&&(e.range=[t.start,p]),A.loc&&(e.loc=new function(e,t,n,r){this.start=new z(e,t),this.end=new z(n,r)}(void 0===t.startLineNumber?t.lineNumber:t.startLineNumber,t.start-(void 0===t.startLineStart?t.lineStart:t.startLineStart),f,p-h),this.postProcess(e)),A.attachComment&&this.processComment(e),e},postProcess:function(e){return A.source&&(e.loc.source=A.source),e},createArrayExpression:function(e){return{type:u.ArrayExpression,elements:e}},createAssignmentExpression:function(e,t,n){return{type:u.AssignmentExpression,operator:e,left:t,right:n}},createBinaryExpression:function(e,t,n){var r="||"===e||"&&"===e?u.LogicalExpression:u.BinaryExpression;return{type:r,operator:e,left:t,right:n}},createBlockStatement:function(e){return{type:u.BlockStatement,body:e}},createBreakStatement:function(e){return{type:u.BreakStatement,label:e}},createCallExpression:function(e,t){return{type:u.CallExpression,callee:e,arguments:t}},createCatchClause:function(e,t){return{type:u.CatchClause,param:e,body:t}},createConditionalExpression:function(e,t,n){return{type:u.ConditionalExpression,test:e,consequent:t,alternate:n}},createContinueStatement:function(e){return{type:u.ContinueStatement,label:e}},createDebuggerStatement:function(){return{type:u.DebuggerStatement}},createDoWhileStatement:function(e,t){return{type:u.DoWhileStatement,body:e,test:t}},createEmptyStatement:function(){return{type:u.EmptyStatement}},createExpressionStatement:function(e){return{type:u.ExpressionStatement,expression:e}},createForStatement:function(e,t,n,r){return{type:u.ForStatement,init:e,test:t,update:n,body:r}},createForInStatement:function(e,t,n){return{type:u.ForInStatement,left:e,right:t,body:n,each:!1}},createFunctionDeclaration:function(e,t,n,r){return{type:u.FunctionDeclaration,id:e,params:t,defaults:n,body:r,rest:null,generator:!1,expression:!1}},createFunctionExpression:function(e,t,n,r){return{type:u.FunctionExpression,id:e,params:t,defaults:n,body:r,rest:null,generator:!1,expression:!1}},createIdentifier:function(e){return{type:u.Identifier,name:e}},createIfStatement:function(e,t,n){return{type:u.IfStatement,test:e,consequent:t,alternate:n}},createLabeledStatement:function(e,t){return{type:u.LabeledStatement,label:e,body:t}},createLiteral:function(e){return{type:u.Literal,value:e.value,raw:c.slice(e.start,e.end)}},createMemberExpression:function(e,t,n){return{type:u.MemberExpression,computed:"["===e,object:t,property:n}},createNewExpression:function(e,t){return{type:u.NewExpression,callee:e,arguments:t}},createObjectExpression:function(e){return{type:u.ObjectExpression,properties:e}},createPostfixExpression:function(e,t){return{type:u.UpdateExpression,operator:e,argument:t,prefix:!1}},createProgram:function(e){return{type:u.Program,body:e}},createProperty:function(e,t,n){return{type:u.Property,key:t,value:n,kind:e}},createReturnStatement:function(e){return{type:u.ReturnStatement,argument:e}},createSequenceExpression:function(e){return{type:u.SequenceExpression,expressions:e}},createSwitchCase:function(e,t){return{type:u.SwitchCase,test:e,consequent:t}},createSwitchStatement:function(e,t){return{type:u.SwitchStatement,discriminant:e,cases:t}},createThisExpression:function(){return{type:u.ThisExpression}},createThrowStatement:function(e){return{type:u.ThrowStatement,argument:e}},createTryStatement:function(e,t,n,r){return{type:u.TryStatement,block:e,guardedHandlers:t,handlers:n,finalizer:r}},createUnaryExpression:function(e,t){return"++"===e||"--"===e?{type:u.UpdateExpression,operator:e,argument:t,prefix:!0}:{type:u.UnaryExpression,operator:e,argument:t,prefix:!0}},createVariableDeclaration:function(e,t){return{type:u.VariableDeclaration,declarations:e,kind:t}},createVariableDeclarator:function(e,t){return{type:u.VariableDeclarator,id:e,init:t}},createWhileStatement:function(e,t){return{type:u.WhileStatement,test:e,body:t}},createWithStatement:function(e,t){return{type:u.WithStatement,object:e,body:t}}},e.version="1.2.2",e.tokenize=function(e,n){var r,u;r=String,"string"==typeof e||e instanceof String||(e=r(e));d=s,p=0,f=(c=e).length>0?1:0,h=0,m=c.length,D=null,g={allowIn:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1},A={},(n=n||{}).tokens=!0,A.tokens=[],A.tokenize=!0,A.openParenToken=-1,A.openCurlyToken=-1,A.range="boolean"==typeof n.range&&n.range,A.loc="boolean"==typeof n.loc&&n.loc,"boolean"==typeof n.comment&&n.comment&&(A.comments=[]);"boolean"==typeof n.tolerant&&n.tolerant&&(A.errors=[]);try{if(G(),D.type===t.EOF)return A.tokens;for($();D.type!==t.EOF;)try{$()}catch(e){if(D,A.errors){A.errors.push(e);break}throw e}we(),u=A.tokens,void 0!==A.comments&&(u.comments=A.comments),void 0!==A.errors&&(u.errors=A.errors)}catch(e){throw e}finally{A={}}return u},e.parse=function(e,t){var n,r;r=String,"string"==typeof e||e instanceof String||(e=r(e));d=s,p=0,f=(c=e).length>0?1:0,h=0,m=c.length,D=null,g={allowIn:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1},A={},void 0!==t&&(A.range="boolean"==typeof t.range&&t.range,A.loc="boolean"==typeof t.loc&&t.loc,A.attachComment="boolean"==typeof t.attachComment&&t.attachComment,A.loc&&null!==t.source&&void 0!==t.source&&(A.source=r(t.source)),"boolean"==typeof t.tokens&&t.tokens&&(A.tokens=[]),"boolean"==typeof t.comment&&t.comment&&(A.comments=[]),"boolean"==typeof t.tolerant&&t.tolerant&&(A.errors=[]),A.attachComment&&(A.range=!0,A.comments=[],A.bottomRightStack=[],A.trailingComments=[],A.leadingComments=[]));try{n=_e(),void 0!==A.comments&&(n.comments=A.comments),void 0!==A.tokens&&(we(),n.tokens=A.tokens),void 0!==A.errors&&(n.errors=A.errors)}catch(e){throw e}finally{A={}}return n},e.Syntax=function(){var e,t={};for(e in"function"==typeof Object.create&&(t=Object.create(null)),u)u.hasOwnProperty(e)&&(t[e]=u[e]);return"function"==typeof Object.freeze&&Object.freeze(t),t}()})?r.apply(t,u):r)||(e.exports=i)}()},function(e,t,n){var r=n(28),u=n(27),i=n(26),o=n(11).uniq,a=function(){return this.initialize.apply(this,arguments)};function s(e,t,u){var i=n(9),o=h(r.parse(t).body[0].expression,{"@":e.value}),a=u.replace(/\{\{\s*value\s*\}\}/g,o),s=i.nodes(e.value,a);return s.forEach(function(t){t.path=e.path.concat(t.path.slice(1))}),s}function c(e){return Array.isArray(e)}function l(e){return function(t,n,r,u){var i=t.value,o=t.path,a=[],s=function(t,i){c(t)?(t.forEach(function(e,t){a.length>=u||r(t,e,n)&&a.push({path:i.concat(t),value:e})}),t.forEach(function(t,n){a.length>=u||e&&s(t,i.concat(n))})):function(e){return e&&!(e instanceof Array)&&e instanceof Object}(t)&&(this.keys(t).forEach(function(e){a.length>=u||r(e,t[e],n)&&a.push({path:i.concat(e),value:t[e]})}),this.keys(t).forEach(function(n){a.length>=u||e&&s(t[n],i.concat(n))}))}.bind(this);return s(i,o),a}}function p(e){return function(t,n,r){return this.descend(n,t.expression.value,e,r)}}function f(e){return function(t,n,r){return this.traverse(n,t.expression.value,e,r)}}function h(){try{return i.apply(this,arguments)}catch(e){}}function m(e){return e=e.filter(function(e){return e}),o(e,function(e){return e.path.map(function(e){return String(e).replace("-","--")}).join("-")})}function d(e){var t=String(e);return t.match(/^-?[0-9]+$/)?parseInt(t):null}a.prototype.initialize=function(){this.traverse=l(!0),this.descend=l()},a.prototype.keys=Object.keys,a.prototype.resolve=function(e){var t=[e.operation,e.scope,e.expression.type].join("-"),n=this._fns[t];if(!n)throw new Error("couldn't resolve key: "+t);return n.bind(this)},a.prototype.register=function(e,t){if(!t instanceof Function)throw new Error("handler must be a function");this._fns[e]=t},a.prototype._fns={"member-child-identifier":function(e,t){var n=e.expression.value,r=t.value;if(r instanceof Object&&n in r)return[{value:r[n],path:t.path.concat(n)}]},"member-descendant-identifier":f(function(e,t,n){return e==n}),"subscript-child-numeric_literal":p(function(e,t,n){return e===n}),"member-child-numeric_literal":p(function(e,t,n){return String(e)===String(n)}),"subscript-descendant-numeric_literal":f(function(e,t,n){return e===n}),"member-child-wildcard":p(function(){return!0}),"member-descendant-wildcard":f(function(){return!0}),"subscript-descendant-wildcard":f(function(){return!0}),"subscript-child-wildcard":p(function(){return!0}),"subscript-child-slice":function(e,t){if(c(t.value)){var n=e.expression.value.split(":").map(d),r=t.value.map(function(e,n){return{value:e,path:t.path.concat(n)}});return u.apply(null,[r].concat(n))}},"subscript-child-union":function(e,t){var n=[];return e.expression.value.forEach(function(e){var r={operation:"subscript",scope:"child",expression:e.expression},u=this.resolve(r)(r,t);u&&(n=n.concat(u))},this),m(n)},"subscript-descendant-union":function(e,t,r){var u=this,i=[];return n(10).nodes(t,"$..*").slice(1).forEach(function(t){i.length>=r||e.expression.value.forEach(function(e){var n={operation:"subscript",scope:"child",expression:e.expression},r=u.resolve(n)(n,t);i=i.concat(r)})}),m(i)},"subscript-child-filter_expression":function(e,t,n){var u=e.expression.value.slice(2,-1),i=r.parse(u).body[0].expression;return this.descend(t,null,function(e,t){return h(i,{"@":t})},n)},"subscript-descendant-filter_expression":function(e,t,n){var u=e.expression.value.slice(2,-1),i=r.parse(u).body[0].expression;return this.traverse(t,null,function(e,t){return h(i,{"@":t})},n)},"subscript-child-script_expression":function(e,t){return s(t,e.expression.value.slice(1,-1),"$[{{value}}]")},"member-child-script_expression":function(e,t){return s(t,e.expression.value.slice(1,-1),"$.{{value}}")},"member-descendant-script_expression":function(e,t){return s(t,e.expression.value.slice(1,-1),"$..value")}},a.prototype._fns["subscript-child-string_literal"]=a.prototype._fns["member-child-identifier"],a.prototype._fns["member-descendant-numeric_literal"]=a.prototype._fns["subscript-descendant-string_literal"]=a.prototype._fns["member-descendant-identifier"],e.exports=a},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var u=e[r];"."===u?e.splice(r,1):".."===u?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return r.exec(e).slice(1)};function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,u=arguments.length-1;u>=-1&&!r;u--){var o=u>=0?arguments[u]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),u="/"===o(e,-1);return(e=n(i(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&u&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var u=r(e.split("/")),i=r(n.split("/")),o=Math.min(u.length,i.length),a=o,s=0;s<o;s++)if(u[s]!==i[s]){a=s;break}var c=[];for(s=a;s<u.length;s++)c.push("..");return(c=c.concat(i.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=u(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return u(e)[3]};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(1))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(e,r){var u=function(){var e={trace:function(){},yy:{},symbols_:{error:2,JSON_PATH:3,DOLLAR:4,PATH_COMPONENTS:5,LEADING_CHILD_MEMBER_EXPRESSION:6,PATH_COMPONENT:7,MEMBER_COMPONENT:8,SUBSCRIPT_COMPONENT:9,CHILD_MEMBER_COMPONENT:10,DESCENDANT_MEMBER_COMPONENT:11,DOT:12,MEMBER_EXPRESSION:13,DOT_DOT:14,STAR:15,IDENTIFIER:16,SCRIPT_EXPRESSION:17,INTEGER:18,END:19,CHILD_SUBSCRIPT_COMPONENT:20,DESCENDANT_SUBSCRIPT_COMPONENT:21,"[":22,SUBSCRIPT:23,"]":24,SUBSCRIPT_EXPRESSION:25,SUBSCRIPT_EXPRESSION_LIST:26,SUBSCRIPT_EXPRESSION_LISTABLE:27,",":28,STRING_LITERAL:29,ARRAY_SLICE:30,FILTER_EXPRESSION:31,QQ_STRING:32,Q_STRING:33,$accept:0,$end:1},terminals_:{2:"error",4:"DOLLAR",12:"DOT",14:"DOT_DOT",15:"STAR",16:"IDENTIFIER",17:"SCRIPT_EXPRESSION",18:"INTEGER",19:"END",22:"[",24:"]",28:",",30:"ARRAY_SLICE",31:"FILTER_EXPRESSION",32:"QQ_STRING",33:"Q_STRING"},productions_:[0,[3,1],[3,2],[3,1],[3,2],[5,1],[5,2],[7,1],[7,1],[8,1],[8,1],[10,2],[6,1],[11,2],[13,1],[13,1],[13,1],[13,1],[13,1],[9,1],[9,1],[20,3],[21,4],[23,1],[23,1],[26,1],[26,3],[27,1],[27,1],[27,1],[25,1],[25,1],[25,1],[29,1],[29,1]],performAction:function(e,n,r,u,i,o,a){u.ast||(u.ast=t,t.initialize());var s=o.length-1;switch(i){case 1:return u.ast.set({expression:{type:"root",value:o[s]}}),u.ast.unshift(),u.ast.yield();case 2:return u.ast.set({expression:{type:"root",value:o[s-1]}}),u.ast.unshift(),u.ast.yield();case 3:return u.ast.unshift(),u.ast.yield();case 4:return u.ast.set({operation:"member",scope:"child",expression:{type:"identifier",value:o[s-1]}}),u.ast.unshift(),u.ast.yield();case 5:case 6:break;case 7:u.ast.set({operation:"member"}),u.ast.push();break;case 8:u.ast.set({operation:"subscript"}),u.ast.push();break;case 9:u.ast.set({scope:"child"});break;case 10:u.ast.set({scope:"descendant"});break;case 11:break;case 12:u.ast.set({scope:"child",operation:"member"});break;case 13:break;case 14:u.ast.set({expression:{type:"wildcard",value:o[s]}});break;case 15:u.ast.set({expression:{type:"identifier",value:o[s]}});break;case 16:u.ast.set({expression:{type:"script_expression",value:o[s]}});break;case 17:u.ast.set({expression:{type:"numeric_literal",value:parseInt(o[s])}});break;case 18:break;case 19:u.ast.set({scope:"child"});break;case 20:u.ast.set({scope:"descendant"});break;case 21:case 22:case 23:break;case 24:o[s].length>1?u.ast.set({expression:{type:"union",value:o[s]}}):this.$=o[s];break;case 25:this.$=[o[s]];break;case 26:this.$=o[s-2].concat(o[s]);break;case 27:this.$={expression:{type:"numeric_literal",value:parseInt(o[s])}},u.ast.set(this.$);break;case 28:this.$={expression:{type:"string_literal",value:o[s]}},u.ast.set(this.$);break;case 29:this.$={expression:{type:"slice",value:o[s]}},u.ast.set(this.$);break;case 30:this.$={expression:{type:"wildcard",value:o[s]}},u.ast.set(this.$);break;case 31:this.$={expression:{type:"script_expression",value:o[s]}},u.ast.set(this.$);break;case 32:this.$={expression:{type:"filter_expression",value:o[s]}},u.ast.set(this.$);break;case 33:case 34:this.$=o[s]}},table:[{3:1,4:[1,2],6:3,13:4,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9]},{1:[3]},{1:[2,1],5:10,7:11,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,3],5:21,7:11,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,12],12:[2,12],14:[2,12],22:[2,12]},{1:[2,14],12:[2,14],14:[2,14],22:[2,14]},{1:[2,15],12:[2,15],14:[2,15],22:[2,15]},{1:[2,16],12:[2,16],14:[2,16],22:[2,16]},{1:[2,17],12:[2,17],14:[2,17],22:[2,17]},{1:[2,18],12:[2,18],14:[2,18],22:[2,18]},{1:[2,2],7:22,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,5],12:[2,5],14:[2,5],22:[2,5]},{1:[2,7],12:[2,7],14:[2,7],22:[2,7]},{1:[2,8],12:[2,8],14:[2,8],22:[2,8]},{1:[2,9],12:[2,9],14:[2,9],22:[2,9]},{1:[2,10],12:[2,10],14:[2,10],22:[2,10]},{1:[2,19],12:[2,19],14:[2,19],22:[2,19]},{1:[2,20],12:[2,20],14:[2,20],22:[2,20]},{13:23,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9]},{13:24,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],22:[1,25]},{15:[1,29],17:[1,30],18:[1,33],23:26,25:27,26:28,27:32,29:34,30:[1,35],31:[1,31],32:[1,36],33:[1,37]},{1:[2,4],7:22,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,6],12:[2,6],14:[2,6],22:[2,6]},{1:[2,11],12:[2,11],14:[2,11],22:[2,11]},{1:[2,13],12:[2,13],14:[2,13],22:[2,13]},{15:[1,29],17:[1,30],18:[1,33],23:38,25:27,26:28,27:32,29:34,30:[1,35],31:[1,31],32:[1,36],33:[1,37]},{24:[1,39]},{24:[2,23]},{24:[2,24],28:[1,40]},{24:[2,30]},{24:[2,31]},{24:[2,32]},{24:[2,25],28:[2,25]},{24:[2,27],28:[2,27]},{24:[2,28],28:[2,28]},{24:[2,29],28:[2,29]},{24:[2,33],28:[2,33]},{24:[2,34],28:[2,34]},{24:[1,41]},{1:[2,21],12:[2,21],14:[2,21],22:[2,21]},{18:[1,33],27:42,29:34,30:[1,35],32:[1,36],33:[1,37]},{1:[2,22],12:[2,22],14:[2,22],22:[2,22]},{24:[2,26],28:[2,26]}],defaultActions:{27:[2,23],29:[2,30],30:[2,31],31:[2,32]},parseError:function(e,t){if(!t.recoverable)throw new Error(e);this.trace(e)},parse:function(e){var t=this,n=[0],r=[null],u=[],i=this.table,o="",a=0,s=0,c=0,l=1,p=u.slice.call(arguments,1);this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var f=this.lexer.yylloc;u.push(f);var h=this.lexer.options&&this.lexer.options.ranges;function m(){var e;return"number"!=typeof(e=t.lexer.lex()||l)&&(e=t.symbols_[e]||e),e}"function"==typeof this.yy.parseError?this.parseError=this.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,D,g,A,E,y,C,F,v,S={};;){if(g=n[n.length-1],this.defaultActions[g]?A=this.defaultActions[g]:(null!==d&&void 0!==d||(d=m()),A=i[g]&&i[g][d]),void 0===A||!A.length||!A[0]){var B="";for(y in v=[],i[g])this.terminals_[y]&&y>2&&v.push("'"+this.terminals_[y]+"'");B=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(a+1)+": Unexpected "+(d==l?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(B,{text:this.lexer.match,token:this.terminals_[d]||d,line:this.lexer.yylineno,loc:f,expected:v})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+d);switch(A[0]){case 1:n.push(d),r.push(this.lexer.yytext),u.push(this.lexer.yylloc),n.push(A[1]),d=null,D?(d=D,D=null):(s=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,f=this.lexer.yylloc,c>0&&c--);break;case 2:if(C=this.productions_[A[1]][1],S.$=r[r.length-C],S._$={first_line:u[u.length-(C||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(C||1)].first_column,last_column:u[u.length-1].last_column},h&&(S._$.range=[u[u.length-(C||1)].range[0],u[u.length-1].range[1]]),void 0!==(E=this.performAction.apply(S,[o,s,a,this.yy,A[1],r,u].concat(p))))return E;C&&(n=n.slice(0,-1*C*2),r=r.slice(0,-1*C),u=u.slice(0,-1*C)),n.push(this.productions_[A[1]][0]),r.push(S.$),u.push(S._$),F=i[n[n.length-2]][n[n.length-1]],n.push(F);break;case 3:return!0}}return!0}},t={initialize:function(){this._nodes=[],this._node={},this._stash=[]},set:function(e){for(var t in e)this._node[t]=e[t];return this._node},node:function(e){return arguments.length&&(this._node=e),this._node},push:function(){this._nodes.push(this._node),this._node={}},unshift:function(){this._nodes.unshift(this._node),this._node={}},yield:function(){var e=this._nodes;return this.initialize(),e}},n={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var n,r,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),(r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in u)this[i]=u[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),i=0;i<u.length;i++)if((n=this._input.match(this.rules[u[i]]))&&(!t||n[0].length>t[0].length)){if(t=n,r=i,this.options.backtrack_lexer){if(!1!==(e=this.test_match(n,u[i])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,u[r]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,n,r){switch(n){case 0:return 4;case 1:return 14;case 2:return 12;case 3:return 15;case 4:return 16;case 5:return 22;case 6:return 24;case 7:return 28;case 8:return 30;case 9:return 18;case 10:return t.yytext=t.yytext.substr(1,t.yyleng-2),32;case 11:return t.yytext=t.yytext.substr(1,t.yyleng-2),33;case 12:return 17;case 13:return 31}},rules:[/^(?:\$)/,/^(?:\.\.)/,/^(?:\.)/,/^(?:\*)/,/^(?:[a-zA-Z_]+[a-zA-Z0-9_]*)/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:((-?(?:0|[1-9][0-9]*)))?\:((-?(?:0|[1-9][0-9]*)))?(\:((-?(?:0|[1-9][0-9]*)))?)?)/,/^(?:(-?(?:0|[1-9][0-9]*)))/,/^(?:"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*")/,/^(?:'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*')/,/^(?:\(.+?\)(?=\]))/,/^(?:\?\(.+?\)(?=\]))/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};function r(){this.yy={}}return e.lexer=n,r.prototype=e,e.Parser=r,new r}();t.parser=u,t.Parser=u.Parser,t.parse=function(){return u.parse.apply(u,arguments)},t.main=function(r){r[1]||(console.log("Usage: "+r[0]+" FILE"),e.exit(1));var u=n(7).readFileSync(n(30).normalize(r[1]),"utf8");return t.parser.parse(u)},void 0!==r&&n.c[n.s]===r&&t.main(e.argv.slice(1))}).call(this,n(1),n(31)(e))},function(e,t){yy.ast||(yy.ast=_ast,_ast.initialize())},function(e,t){},function(e,t,n){var r=n(8),u=n(7),i={lex:{macros:{esc:"\\\\",int:r.integer},rules:[["\\$","return 'DOLLAR'"],["\\.\\.","return 'DOT_DOT'"],["\\.","return 'DOT'"],["\\*","return 'STAR'"],[r.identifier,"return 'IDENTIFIER'"],["\\[","return '['"],["\\]","return ']'"],[",","return ','"],["({int})?\\:({int})?(\\:({int})?)?","return 'ARRAY_SLICE'"],["{int}","return 'INTEGER'"],[r.qq_string,"yytext = yytext.substr(1,yyleng-2); return 'QQ_STRING';"],[r.q_string,"yytext = yytext.substr(1,yyleng-2); return 'Q_STRING';"],["\\(.+?\\)(?=\\])","return 'SCRIPT_EXPRESSION'"],["\\?\\(.+?\\)(?=\\])","return 'FILTER_EXPRESSION'"]]},start:"JSON_PATH",bnf:{JSON_PATH:[["DOLLAR",'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()'],["DOLLAR PATH_COMPONENTS",'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()'],["LEADING_CHILD_MEMBER_EXPRESSION","yy.ast.unshift(); return yy.ast.yield()"],["LEADING_CHILD_MEMBER_EXPRESSION PATH_COMPONENTS",'yy.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: $1 }}); yy.ast.unshift(); return yy.ast.yield()']],PATH_COMPONENTS:[["PATH_COMPONENT",""],["PATH_COMPONENTS PATH_COMPONENT",""]],PATH_COMPONENT:[["MEMBER_COMPONENT",'yy.ast.set({ operation: "member" }); yy.ast.push()'],["SUBSCRIPT_COMPONENT",'yy.ast.set({ operation: "subscript" }); yy.ast.push() ']],MEMBER_COMPONENT:[["CHILD_MEMBER_COMPONENT",'yy.ast.set({ scope: "child" })'],["DESCENDANT_MEMBER_COMPONENT",'yy.ast.set({ scope: "descendant" })']],CHILD_MEMBER_COMPONENT:[["DOT MEMBER_EXPRESSION",""]],LEADING_CHILD_MEMBER_EXPRESSION:[["MEMBER_EXPRESSION",'yy.ast.set({ scope: "child", operation: "member" })']],DESCENDANT_MEMBER_COMPONENT:[["DOT_DOT MEMBER_EXPRESSION",""]],MEMBER_EXPRESSION:[["STAR",'yy.ast.set({ expression: { type: "wildcard", value: $1 } })'],["IDENTIFIER",'yy.ast.set({ expression: { type: "identifier", value: $1 } })'],["SCRIPT_EXPRESSION",'yy.ast.set({ expression: { type: "script_expression", value: $1 } })'],["INTEGER",'yy.ast.set({ expression: { type: "numeric_literal", value: parseInt($1) } })'],["END",""]],SUBSCRIPT_COMPONENT:[["CHILD_SUBSCRIPT_COMPONENT",'yy.ast.set({ scope: "child" })'],["DESCENDANT_SUBSCRIPT_COMPONENT",'yy.ast.set({ scope: "descendant" })']],CHILD_SUBSCRIPT_COMPONENT:[["[ SUBSCRIPT ]",""]],DESCENDANT_SUBSCRIPT_COMPONENT:[["DOT_DOT [ SUBSCRIPT ]",""]],SUBSCRIPT:[["SUBSCRIPT_EXPRESSION",""],["SUBSCRIPT_EXPRESSION_LIST",'$1.length > 1? yy.ast.set({ expression: { type: "union", value: $1 } }) : $$ = $1']],SUBSCRIPT_EXPRESSION_LIST:[["SUBSCRIPT_EXPRESSION_LISTABLE","$$ = [$1]"],["SUBSCRIPT_EXPRESSION_LIST , SUBSCRIPT_EXPRESSION_LISTABLE","$$ = $1.concat($3)"]],SUBSCRIPT_EXPRESSION_LISTABLE:[["INTEGER",'$$ = { expression: { type: "numeric_literal", value: parseInt($1) } }; yy.ast.set($$)'],["STRING_LITERAL",'$$ = { expression: { type: "string_literal", value: $1 } }; yy.ast.set($$)'],["ARRAY_SLICE",'$$ = { expression: { type: "slice", value: $1 } }; yy.ast.set($$)']],SUBSCRIPT_EXPRESSION:[["STAR",'$$ = { expression: { type: "wildcard", value: $1 } }; yy.ast.set($$)'],["SCRIPT_EXPRESSION",'$$ = { expression: { type: "script_expression", value: $1 } }; yy.ast.set($$)'],["FILTER_EXPRESSION",'$$ = { expression: { type: "filter_expression", value: $1 } }; yy.ast.set($$)']],STRING_LITERAL:[["QQ_STRING","$$ = $1"],["Q_STRING","$$ = $1"]]}};u.readFileSync&&(i.moduleInclude=u.readFileSync(34),i.actionInclude=u.readFileSync(33)),e.exports=i},function(e,t,n){var r=n(35),u=n(32),i=function(){var e=new u.Parser,t=e.parseError;return e.yy.parseError=function(){e.yy.ast&&e.yy.ast.initialize(),t.apply(e,arguments)},e};i.grammar=r,e.exports=i},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t,n){(function(e,r){var u=/%[sdj%]/g;t.format=function(e){if(!g(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,o=String(e).replace(u,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),s=r[n];n<i;s=r[++n])d(s)||!y(s)?o+=" "+s:o+=" "+a(s);return o},t.deprecate=function(n,u){if(A(e.process))return function(){return t.deprecate(n,u).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(u);r.traceDeprecation?console.trace(u):console.error(u),i=!0}return n.apply(this,arguments)}};var i,o={};function a(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),A(r.showHidden)&&(r.showHidden=!1),A(r.depth)&&(r.depth=2),A(r.colors)&&(r.colors=!1),A(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,e,r.depth)}function s(e,t){var n=a.styles[t];return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function c(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&v(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var u=n.inspect(r,e);return g(u)||(u=l(e,u,r)),u}var i=function(e,t){if(A(t))return e.stylize("undefined","undefined");if(g(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(D(t))return e.stylize(""+t,"number");if(m(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(i)return i;var o=Object.keys(n),a=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(n)),F(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return p(n);if(0===o.length){if(v(n)){var s=n.name?": "+n.name:"";return e.stylize("[Function"+s+"]","special")}if(E(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(C(n))return e.stylize(Date.prototype.toString.call(n),"date");if(F(n))return p(n)}var c,y="",S=!1,B=["{","}"];(h(n)&&(S=!0,B=["[","]"]),v(n))&&(y=" [Function"+(n.name?": "+n.name:"")+"]");return E(n)&&(y=" "+RegExp.prototype.toString.call(n)),C(n)&&(y=" "+Date.prototype.toUTCString.call(n)),F(n)&&(y=" "+p(n)),0!==o.length||S&&0!=n.length?r<0?E(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=S?function(e,t,n,r,u){for(var i=[],o=0,a=t.length;o<a;++o)x(t,String(o))?i.push(f(e,t,n,r,String(o),!0)):i.push("");return u.forEach(function(u){u.match(/^\d+$/)||i.push(f(e,t,n,r,u,!0))}),i}(e,n,r,a,o):o.map(function(t){return f(e,n,r,a,t,S)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,y,B)):B[0]+y+B[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,u,i){var o,a,s;if((s=Object.getOwnPropertyDescriptor(t,u)||{value:t[u]}).get?a=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(a=e.stylize("[Setter]","special")),x(r,u)||(o="["+u+"]"),a||(e.seen.indexOf(s.value)<0?(a=d(n)?l(e,s.value,null):l(e,s.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),A(o)){if(i&&u.match(/^\d+$/))return a;(o=JSON.stringify(""+u)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function h(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function d(e){return null===e}function D(e){return"number"==typeof e}function g(e){return"string"==typeof e}function A(e){return void 0===e}function E(e){return y(e)&&"[object RegExp]"===S(e)}function y(e){return"object"==typeof e&&null!==e}function C(e){return y(e)&&"[object Date]"===S(e)}function F(e){return y(e)&&("[object Error]"===S(e)||e instanceof Error)}function v(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function B(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(A(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;o[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else o[e]=function(){};return o[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=m,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=D,t.isString=g,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=A,t.isRegExp=E,t.isObject=y,t.isDate=C,t.isError=F,t.isFunction=v,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(38);var b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function(){var e=new Date,t=[B(e.getHours()),B(e.getMinutes()),B(e.getSeconds())].join(":");return[e.getDate(),b[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(37),t._extend=function(e,t){if(!t||!y(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(2),n(1))},function(e,t,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,u=0,i=Math.min(n,r);u<i;++u)if(e[u]!==t[u]){n=e[u],r=t[u];break}return n<r?-1:r<n?1:0}function u(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n(39),o=Object.prototype.hasOwnProperty,a=Array.prototype.slice,s="foo"===function(){}.name;function c(e){return Object.prototype.toString.call(e)}function l(e){return!u(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=g,f=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(i.isFunction(e)){if(s)return e.name;var t=e.toString().match(f);return t&&t[1]}}function m(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function d(e){if(s||!i.isFunction(e))return i.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function D(e,t,n,r,u){throw new p.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:u})}function g(e,t){e||D(e,!0,t,"==",p.ok)}function A(e,t,n,o){if(e===t)return!0;if(u(e)&&u(t))return 0===r(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(l(e)&&l(t)&&c(e)===c(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(u(e)!==u(t))return!1;var s=(o=o||{actual:[],expected:[]}).actual.indexOf(e);return-1!==s&&s===o.expected.indexOf(t)||(o.actual.push(e),o.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var u=E(e),o=E(t);if(u&&!o||!u&&o)return!1;if(u)return e=a.call(e),t=a.call(t),A(e,t,n);var s,c,l=F(e),p=F(t);if(l.length!==p.length)return!1;for(l.sort(),p.sort(),c=l.length-1;c>=0;c--)if(l[c]!==p[c])return!1;for(c=l.length-1;c>=0;c--)if(s=l[c],!A(e[s],t[s],n,r))return!1;return!0}(e,t,n,o))}return n?e===t:e==t}function E(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function y(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function C(e,t,n,r){var u;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),u=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!u&&D(u,n,"Missing expected exception"+r);var o="string"==typeof r,a=!e&&i.isError(u),s=!e&&u&&!n;if((a&&o&&y(u,n)||s)&&D(u,n,"Got unwanted exception"+r),e&&u&&n&&!y(u,n)||!e&&u)throw u}p.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return m(d(e.actual),128)+" "+e.operator+" "+m(d(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||D;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,u=h(t),i=r.indexOf("\n"+u);if(i>=0){var o=r.indexOf("\n",i+1);r=r.substring(o+1)}this.stack=r}}},i.inherits(p.AssertionError,Error),p.fail=D,p.ok=g,p.equal=function(e,t,n){e!=t&&D(e,t,n,"==",p.equal)},p.notEqual=function(e,t,n){e==t&&D(e,t,n,"!=",p.notEqual)},p.deepEqual=function(e,t,n){A(e,t,!1)||D(e,t,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,n){A(e,t,!0)||D(e,t,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,n){A(e,t,!1)&&D(e,t,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,n,r){A(t,n,!0)&&D(t,n,r,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,n){e!==t&&D(e,t,n,"===",p.strictEqual)},p.notStrictEqual=function(e,t,n){e===t&&D(e,t,n,"!==",p.notStrictEqual)},p.throws=function(e,t,n){C(!0,e,t,n)},p.doesNotThrow=function(e,t,n){C(!1,e,t,n)},p.ifError=function(e){if(e)throw e};var F=Object.keys||function(e){var t=[];for(var n in e)o.call(e,n)&&t.push(n);return t}}).call(this,n(2))},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,u="~";function i(){}function o(e,t,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var o=new function(e,t,n){this.fn=e,this.context=t,this.once=n||!1}(n,r||e,i),a=u?u+t:t;return e._events[a]?e._events[a].fn?e._events[a]=[e._events[a],o]:e._events[a].push(o):(e._events[a]=o,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(u=!1)),s.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(u?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=u?u+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,o=new Array(i);r<i;r++)o[r]=n[r].fn;return o},s.prototype.listenerCount=function(e){var t=u?u+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,r,i,o){var a=u?u+e:e;if(!this._events[a])return!1;var s,c,l=this._events[a],p=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),p){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,i),!0;case 6:return l.fn.call(l.context,t,n,r,i,o),!0}for(c=1,s=new Array(p-1);c<p;c++)s[c-1]=arguments[c];l.fn.apply(l.context,s)}else{var f,h=l.length;for(c=0;c<h;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),p){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,n);break;case 4:l[c].fn.call(l[c].context,t,n,r);break;default:if(!s)for(f=1,s=new Array(p-1);f<p;f++)s[f-1]=arguments[f];l[c].fn.apply(l[c].context,s)}}return!0},s.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,n,r){var i=u?u+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var o=this._events[i];if(o.fn)o.fn!==t||r&&!o.once||n&&o.context!==n||a(this,i);else{for(var s=0,c=[],l=o.length;s<l;s++)(o[s].fn!==t||r&&!o[s].once||n&&o[s].context!==n)&&c.push(o[s]);c.length?this._events[i]=1===c.length?c[0]:c:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=u?u+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=u,s.EventEmitter=s,e.exports=s},function(e,t,n){"use strict";const r=n(41),u=n(10);class i extends r{static clone(e,t,n){if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e);if(e.nodeType&&"function"==typeof e.cloneNode)return e.cloneNode(!0);void 0===t&&(t=[],n=[]);let r,u=t.length;for(r=0;r<u;r++)if(e===t[r])return n[r];if("[object Array]"==Object.prototype.toString.call(e)){let r=e.slice();t.push(e),n.push(r);let u=r.length;for(;u--;)r[u]=i.clone(r[u],t,n);return r}let o=Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__;o||(o=e.constructor.prototype);let a=Object.create(o);t.push(e),n.push(a);for(let r in e)a[r]=i.clone(e[r],t,n);return a}constructor(e,t,...n){super();let r,o=t||{},a=i.clone(e)||{},s=i.clone(a);n=n||[];const c=function(e){if(o[e.type]){let t=o[e.type](e,i.clone(a));t.newState&&(a=i.clone(t.newState)),this.emit(e.type,t,e)}else this.emit(e.type,e);e.cb&&"function"==typeof e.cb&&e.cb(a)};let l=function(e,t,n){return e?n?function(r){return next=n.bind(t,r),e}.bind(t):function(t){return next=c.bind(this,t),e}.bind(t):c.bind(this)};this.getState=function(e){return e?u.query(i.clone(s),e):i.clone(a)},this.getHandlers=function(){return o},this.addHandler=function(e,t){o[e]=t},this.dispatch=function(e){r(e)};let p=0;const f={getState:this.getState,dispatch:this.dispatch};do{l=l.bind(this),r=l(n[p],f,n[p+1])}while(++p<n.length)}}e.exports=i},function(e,t){e.exports={MetaShadowComponent:class extends window.HTMLElement{constructor(){super(),this.addListeners=this.addListeners.bind(this),this.render=this.render.bind(this)}connectedCallback(){this.root=this.shadowRoot||this.attachShadow({mode:"open"}),this.root.innerHTML=`\n\t\t<style>\n\t\t\t${this.styles.map(e=>`\n\t\t\t@import url("${e}");\n\t\t\t`).join("")}\n\t\t</style>\n\t\t`;const e=this.render();"string"==typeof e?this.root.innerHTML+=e:this.root.appendChild(e),this.addListeners()}}}},function(e,t){e.exports={MetaContainer:class extends window.HTMLElement{constructor(){if(super(),!this.render)throw new TypeError("render method is require for MetaContainers")}connectedCallback(){this.appendChild(this.render())}}}},function(e,t){e.exports={MetaBase:class extends window.HTMLElement{constructor(){super()}_appendContent(){const e=this.render();this.root?"string"==typeof e?this.root.innerHTML+=e:this.root.appendChild(e):"string"==typeof e?this.innerHTML+=e:this.appendChild(e)}}}},function(e,t,n){const{MetaBase:r}=n(45);e.exports={MetaComponent:class extends r{constructor(e=!1){if(super(),!this.render)throw new TypeError("render method required on MetaComponents");e&&(this.storage=e,this.mapStoreEvents()),this.render=this.render.bind(this),this.addListeners&&(this.addListeners=this.addListeners.bind(this))}connectedCallback(){this._appendContent(),this.addListeners&&this.addListeners()}handleStoreEvents(){if(this.storage)throw'MetaComponent.handleStoreEvents: This function expects to be overwritten by child object, otherwise do not pass "storage" object as argument to constructor.'}mapStoreEvents(){const e=this.handleStoreEvents();for(var t in e)e.hasOwnProperty(t)&&this.storage.on(t,e[t])}}}},function(e,t,n){const{MetaComponent:r}=n(46),{MetaContainer:u}=n(44),{MetaShadowComponent:i}=n(43),o=n(42);e.exports={MetaComponent:r,MetaContainer:u,MetaShadowComponent:i,Store:o}}])});

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "yak-header{\n\tdisplay: grid;\n\tcolor: inherit;\n}\n.yak-header-items {\n\tplace-self: center;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 6em;\n\twidth: 100%;\n}\n\n.user-options {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 35%;\n\tborder: 1px solid #d3d3d3;\n\tbackground-color: #d3d3d3;\n\ttext-align: center;\n\tbox-shadow: 0 0px 3px 1px #6666;\n\tborder-radius: 4px 0em 4px 4px;\n\tcolor: #666;\n}\n\n.user-options.green {\n\tbackground-color: #7bce7e;\n\tbox-shadow: 0 0px 3px 1px #5b9e5e;\n\tborder-color: #7bce7e;\n\tcolor: #000;\n}\n.user-options > span { \n\tcursor: pointer;\n}\n\n.user-options > span:hover { \n\tcolor: #fff !important; \n}\n\n.yak-header-items > span{\n\tpadding-left: 2vw;\n}\n\ndiv[class^=\"user-actions\"] {\n\tfont-size: 20px;\n\tplace-self: center;\n\tcursor: pointer;\n\tgrid-column-gap: 10px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n}\n.user-actions-re {\n\tcolor: #7bce7e;\n}\n\n.hide {\n\tdisplay: none;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/input/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/input/index.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "yak-input {\n\tgrid-area: 3 / 1;\n\tborder-radius: 4px;\n\tdisplay: grid;\n\tgrid-template-rows: 100%;\n\tbackground-color: rgba(0,0,0,.1);\n\tmargin-left: 0.5em;\n\tmargin-right: 0.5em;\n}\nyak-input[class^=\"focus\"] .yak-input-content {\n\tborder-radius: 4px;\n\tbox-shadow: 0px 0px 3px 2px rgba(24,144,255,0.6);\n\tbackground-color: #fff;\n}\n.yak-input-content{\n\tdisplay: grid;\n\tgrid-template-columns: 78% 22%;\n\theight: 100%;\n}\n.main-input {\n\tbackground-color: rgba(0,0,0,0);\n\tborder: none;\n\tborder-radius: 4px;\n\tpadding: 0 0 0 10px;\n\tcolor: #666;\n}\ninput {\n\tborder: none;\n}\ntextarea:focus, input:focus{\n\toutline: none;\n\tborder: none;\n}\ndiv[class^=\"yak-send\"] {\n\tborder-left: 1px solid #d3d3d3;\n\tdisplay: grid;\n\tcolor: #666;\n\tborder-radius: 0em 4px 4px 0em;\n}\n\ndiv[class^=\"yak-send\"] p {\n\tplace-self:center;\n\tmargin: 0;\n}\n\n.yak-send-disable {\n\tcursor: default;\n\tbackground-color: #d3d3d3;\n}\n\n.yak-send-enable {\n\tcursor: pointer;\n\tbackground-color: rgba(24,144,255,0.7);\n\tborder-left: 1px solid #1890ff;\n\tcolor: #fff !important;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/signup/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/signup/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "yak-signup {\n\tgrid-area: 2 / 1 / span 2;\n\tpadding: 1em;\n}\n\nyak-signup input {\n\tborder: 1px solid #666666;\n\tpadding: 1em;\n\tborder-radius: 2em;\n}\n\nyak-signup input:focus{\n\tborder: 1px solid rgba(24,144,255,0.7);\n}\n\nyak-signup > div {\n\tdisplay: grid;\n\theight: 100%;\n\tgrid-template-rows: 1fr 1fr 5fr 1fr;\n\tgrid-row-gap: 1em;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/viewer/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/viewer/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "yak-viewer {\n\tdisplay: grid;\n\toverflow: auto;\n\tpadding: 0.5em;\n\tgrid-area: 2 / 1;\n\tbackground-color: #fff;\n\tbox-shadow: inset 0px 0px 11px 2px rgba(0,0,0,.5);\n}\n.yak-viewer-list {\n\tplace-self: end center;\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tgrid-row-gap: 0.5em;\n\tmargin: 0.5em;\n}\ndiv[class^=\"yak-view-item\"] {\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tgrid-template-columns: auto;\n\twidth: 85%;\n\tpadding: 1em;\n\tcolor: #666;\n\tmax-width: 15em;\n}\n.yak-view-item-right{\n\tbackground-color: rgba(24,144,255,0.7);\n\tplace-self: center end;\n\tcolor: #fff !important;\n\tborder-radius: 1em 0em 1em 1em;\n}\n\n.yak-view-item-left{\n\tbackground-color: rgba(0,0,0,.1);\n\tplace-self: center start;\n\tborder-radius: 0em 1em 1em 1em;\n}\n\n.yak-view-from{\n\tfont-size: .8em;\n\tpadding-top: 0.2em;\n}\n.yak-view-msg {\n\tword-break: break-word;\n}\n\n.msg-itinerary > img {\n\twidth: 4em;\n\theight: auto;\n\tpadding: 1em;\n\tbackground: rgba(0, 0, 0, .5);\n\tborder-radius: 50%;\n}\n\n.msg-price {\n\tdisplay: grid;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/general.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,light);", ""]);
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// Module
exports.push([module.i, "/* FONT FAMILY ROBOTO */\n\nhtml, body {\n\theight: 100%;\n\tbackground-color: #f9f8f8;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Roboto;\n}\n#container {\n\twidth: 100%;\n\theight: 100%;\n\tjustify-self: center;\n\talign-self: center;\n\tdisplay: grid;\n\tgrid-template-rows: 2em 1fr 3em;\n\tpadding: 0em 0em 1em 0em;\n\tgrid-row-gap: 0.5em;\n\tborder-radius: 4px;\n\tborder: 1px solid #d3d3d3;\n}\n\nyak-main-container{\n\tdisplay: grid;\n\theight: 100%;\n}\n\n.no-border {\n\tborder: none !important;\n}\n\n.hide {\n\tdisplay: none !important;\n}\n\n.btn {\n\tplace-self: center;\n\tpadding: 1em;\n\tborder-radius: 2em;\n\tcursor: pointer;\n}\n\n.btn.primary {\n\tcolor: #fff;\n\tbackground-color: #1890ff;\n\tborder-color: #1890ff;\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,0.12);\n\t-webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);\n\tbox-shadow: 0 2px 0 rgba(0,0,0,0.045);\n}\n\n.btn.primary:hover {\n\tcolor: #fff;\n\tbackground-color: #40a9ff;\n\tborder-color: #40a9ff;\n}\n\n.tooltip {\n\tposition: relative;\n\tdisplay: inline-block;\n\tborder-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n\tvisibility: hidden;\n\twidth: 120px;\n\tbackground-color: black;\n\tcolor: #fff;\n\ttext-align: center;\n\tborder-radius: 6px;\n\tpadding: 5px 0;\n\t\n\t/* Position the tooltip */\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 100%;\n\tleft: 50%;\n\tmargin-left: -60px;\n}\n\n.tooltip:hover .tooltiptext {\n\tvisibility: visible;\n}\nyak-main-container {\n\tposition: relative;\n}\nyak-main-container #container {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n}\n\ndiv#yak-toggler {\n\tposition: fixed;\n\twidth: 70px;\n\theight: 70px;\n\tbottom: 10px;\n\tright: 10px;\n\tborder-radius: 50%;\n\tbackground-color: #407afc;\n\tcolor: #f9f8f8;\n\tdisplay: grid;\n\tz-index: 3;\n\tcursor: pointer;\n\tbox-shadow: 0 4px 10px 0 rgba(0,0,0,.04);\n}\n\ndiv#yak-toggler > * {\n\tplace-self: center;\n\tfont-size: 28px;\n}\n\ndiv#yak-chat-embended[is-popup] {\n\tposition: fixed;\n\tright: 1em;\n\tbottom: 1.6em;\n\twidth: 35% !important;\n\theight: 90vh !important;\n\tbackground: #fff;\n\tz-index: 1001;\n\tborder-radius: 4px;\n\tbox-shadow: 0 12px 20px 0 rgba(0,0,0,.15);\n\ttransition: opacity .5s ease-in;\n}\n\ndiv#yak-chat-embended[is-popup].hidden {\n\topacity: 0;\n\tvisibility: hidden;\n}\n\n@media only screen and (max-device-width: 800px) and (min-device-width: 300px) \n\tand (orientation: portrait) {\n\t\tdiv#yak-chat-embended[is-popup] {\n\t\t\twidth: unset !important;\n\t\t\tleft: 10px;\n\t\t\ttop: 30px;\n\t\t\tbottom: 30px;\n\t\t\theight: unset !important;\n\t\t}\n\t}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/header/index.css":
/*!*****************************************!*\
  !*** ./src/components/header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/header/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



class Header extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaComponent"] {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.headerContent = document.createElement('div');
		this.createHeaderContent();
		return this.headerContent;
	}
	/**
	 * create the header structure
	 */
	createHeaderContent () {
		this.headerContent.className = 'yak-header-items'
		const title = document.createElement('span');
		title.textContent = 'Yak Chat';
		this.headerContent.appendChild(title);
		this.createOptions(this.headerContent)
	}
	/**
	 * function that set the option type
	 * @param {HTMLAreaElement} box 
	 */
	createOptions (box) {
		try {
			switch (this.parentElement.className) {
				case 'simple-chatbox':
					box.appendChild(this.createUserActions(0));
					break;
				case 'register-chatbox':
					box.appendChild(this.createUserActions(1));
					break;
				default:
					break;
			}
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 * create the user icon for the users to sing-in/up or logout
	 * @param {Number} type 
	 */
	createUserActions (type) {
		const box = document.createElement('div');
		const icon = document.createElement('i');
		const shoppingIcon = document.createElement('i');
		const closeBtn = document.createElement('i');
		shoppingIcon.className = 'fa fa-shopping-cart'
		icon.className = 'fa fa-user';
		closeBtn.className = 'fa fa-times'
		if (type === 0) {
			box.className = 'user-actions-an'
		} else {
			box.className = 'user-actions-re';
			this.createRegisteredActions();
		}
		icon.addEventListener('click', () => {
			this.toggleSing();
		});
		shoppingIcon.addEventListener('click', () => {
			this.openShoppingCart();
		})
		closeBtn.addEventListener('click', () => {
			this.toggleChat();
		})
		box.append(icon, shoppingIcon, closeBtn);
		return box;
	}
	/**
	 * toggle chat in popup mode
	 */
	toggleChat() {
		document.querySelector('div#yak-chat-embended')
		.classList.toggle('hidden');
	}

	/**
	 * create the options for loged in users
	 */
	createRegisteredActions () {
		let actions;
		if (document.querySelector('.user-options')) {
			actions = document.querySelector('.user-options');
		} else {
			actions = document.createElement('div');
			actions.classList.add('hide', 'user-options', 'green');
			document.querySelector('#container').append(actions);
		}
		const logOut = document.createElement('span');
		logOut.innerHTML = 'Logout';
		actions.append(logOut);
	}
	/**
	 * toggle the options box
	 */
	toggleUserAction (box) {
		const actions = document.querySelector('.user-options')
		actions.style.top = box.offsetHeight + 'px';
		actions.style.left = (box.offsetLeft / 2) + 'px';
		if (actions.classList.contains('hide')) {
			actions.classList.remove('hide')
		} else {
			actions.classList.add('hide');
		}
	}
	/**
	 * toggle the sign in view
	 */
	toggleSing () {
		this.storage.dispatch({ type: 'SING-UP-REQ'});
	}
	/**
	 * open shopping cart view
	 */
	openShoppingCart () {
		try {
			const shoppingCart = document.querySelector('#tepago-area');
			shoppingCart.classList.toggle('hide')
		} catch (err) {
			alert('Bad shoppig cart configuaration');
		}
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
		};
	}
}

window.customElements.define('yak-header', Header);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/input/index.css":
/*!****************************************!*\
  !*** ./src/components/input/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/input/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/input/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



class yakInput extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaComponent"] {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
		this.createInput = this.createInput.bind(this);
		this.createButton = this.createButton.bind(this);
		this.handleSend = this.handleSend.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'yak-input-content';
		this.createButton();
		this.createInput();
		content.appendChild(this.input);
		content.appendChild(this.send);
		return content;
	}
	/**
	 * create the main input & handle
	 */
	createInput () {
		this.input = document.createElement('input');
		this.input.setAttribute('type', 'text');
		this.input.className = 'main-input';
		this.input.addEventListener('click', () => {
			this.className = 'focus';
		});
		this.input.addEventListener('focusout', () => {
			this.className = '';
		});
		this.input.addEventListener('keydown', this.handleInput)
	}
	/**
	 * create the send button & handle
	 */
	createButton () {
		this.send = document.createElement('div');
		this.send.className = 'yak-send-disable';
		const text = document.createElement('p');
		text.textContent = 'Send';
		this.send.appendChild(text);
		this.send.addEventListener('click', this.handleSend);
	}
	/**
	 * handle the input keypress event
	 * @param {Event} e 
	 */
	handleInput (e) {
		if (e.key === 'Enter') {
			this.handleSend();
		}
		const l = e.key === 'Backspace'
			? this.input.value.split('').length - 1
			: this.input.value.split('').length + 1;
		this.send.className = l <= 0
			? 'yak-send-disable'
			: 'yak-send-enable';
	}
	/**
	 * function handle, dispatch send message action
	 */
	handleSend () {
		const isLoading = global.storage.getState().Main.isLoading;
		if (this.input.value !== '' && !isLoading) {
			const msg = {
				message: btoa(this.input.value)
			}
			global.storage.dispatch({
				type: 'SEND-MESSAGE',
				msg: msg
			})
			this.input.value = '';
			this.send.className = 'yak-send-disable';
		}
	}
}

window.customElements.define('yak-input', yakInput);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/signup/index.css":
/*!*****************************************!*\
  !*** ./src/components/signup/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/signup/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/signup/index.js":
/*!****************************************!*\
  !*** ./src/components/signup/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/signup/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



class Signup extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaComponent"] {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		this.createInputs(content);
		
		return content;
	}
	/**
	 * @description create the sigup inputs
	 * @param {HTMLElement} box 
	 */
	createInputs (box) {
		const nameInput = document.createElement('input');
		const emailInput = document.createElement('input');
		const msgTextArea = document.createElement('input');
		nameInput.setAttribute('type', 'text');
		nameInput.setAttribute('placeholder', 'Name');
		emailInput.setAttribute('type', 'email');
		emailInput.setAttribute('placeholder', 'Email');
		msgTextArea.setAttribute('type', 'text');
		msgTextArea.setAttribute('placeholder', 'Message');
		const submit = document.createElement('div');
		submit.classList.add('btn', 'primary');
		submit.innerHTML = 'Submit';
		submit.addEventListener('click', () => {
			if (nameInput.value !== '' &&
				emailInput.value !== '') {
					global.storage.dispatch({
						type: 'SIGN-UP',
						email: emailInput.value,
						name: nameInput.value
					});
			}
		})
		box.append(nameInput, emailInput, msgTextArea, submit);
	}

}

window.customElements.define('yak-signup', Signup);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/viewer/index.css":
/*!*****************************************!*\
  !*** ./src/components/viewer/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/viewer/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/viewer/index.js":
/*!****************************************!*\
  !*** ./src/components/viewer/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/viewer/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);




class Viewer extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaComponent"] {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
		this.createMsgList = this.createMsgList.bind(this)
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.msgList = this.storage.getState().Main.list;
		this.listContent = document.createElement('div');
		global.TPGstorage.dispatch({
			type: 'CHANGE-VIEW',
			viewNumber: 1
		});
		this.createMsgList(this.msgList);
		return this.listContent;
	}
	/**
	 * create the messages list
	 */
	createMsgList (list) {
		this.listContent.innerHTML = '';
		this.listContent.className = 'yak-viewer-list';
		try {
			global.TPGstorage.dispatch({
				type: 'CLEAR-ITINERARY'
			});
			Object.keys(list).map((l, i) => {
				if (i !== 0) {
					const msgData = list[l][0].split('-');
					const isOperator = list[l].length > 1;
					const keyData = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parsemkey"])(l);
					const listItem = this.createTextMessage(isOperator, msgData, keyData)
					this.listContent.appendChild(listItem);
				}
			})
		} catch (er) {
			///
		}
		this.scrollTop = this.scrollHeight;
	}

	createTextMessage (isOperator, msgData, keyData) {
		const listItem =  document.createElement('div');
		if (keyData.tid === 0) {
			const msg = document.createElement('span');
			const from = document.createElement('span');
			listItem.className = !isOperator ? 'yak-view-item-right' : 'yak-view-item-left';
			msg.className = 'yak-view-msg';
			from.className = 'yak-view-from';
			msg.textContent = atob(msgData[1]);
			from.textContent = msgData[0] + ' ' + new Date(keyData.ts).toDateString()
			listItem.append(msg, from);
		} else {
			const msg = document.createElement('span');
			listItem.className = !isOperator ? 'yak-view-item-right' : 'yak-view-item-left';
			const msgObject = this.getItineraryMsgData(atob(msgData[1]));
			msg.innerHTML = `
			<div class="msg-itinerary">
				<img src="${this.getItineraryLogos(msgObject.icon)}">
				<h3>${ msgObject.title }</h3>
				<span>${ msgObject.description }</span>
			</div>
			<div class="msg-price">
				<span>Qty: ${ msgObject.qty }</span>
				<span>Price: $${ msgObject.price }</span>
				<span>Total: $${ msgObject.price * msgObject.qty }</span>
			</div>
			<span class = "msg-date">${msgData[0]} added to shopping cart - ${ new Date(keyData.ts).toDateString()}</spna>
			`;
			listItem.append(msg);
		}
		return listItem;
	}

	/**
	 * handle the toggle action to scroll down
	 */
	handleTogge () {
		if (this.storage.getState().Main.isOpen) {
			this.scrollTop = this.scrollHeight;
		}
	}
	/**
	 * get the icon url 
	 * @param {String} logoName 
	 */
	getItineraryLogos(logoName) {
		return `https://rebelstackio.github.io/tepagopro/src/assets/icons/itinerary/${logoName}.svg`
	}
	/**
	 * get the itinerary msg data
	 */
	getItineraryMsgData(raw) {
		const splited = raw.split('-');
		let description = splited[2];
		description.replace('\\n', '<br/>');
		const resp = {
			date: splited[0],
			title: splited[1],
			description,
			time: splited[3],
			icon: splited[4],
			qty: parseInt(splited[5]),
			price: parseFloat(splited[6])
		}
		global.TPGstorage.dispatch({
			type: 'ADD-ITINERARY-EXT',
			data: resp
		});
		return resp;
	}
	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'MSG-ARRIVE': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'FB-CONNECT': () => {
				this.msgList = this.storage.getState().Main.list;
				this.createMsgList(this.msgList);
			},
			'TOGGLE-CHAT': () => {
				this.handleTogge.bind(this)
			}
		};
	}
}

window.customElements.define('yak-viewer', Viewer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/containers/main-container/index.js":
/*!************************************************!*\
  !*** ./src/containers/main-container/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/general.css */ "./src/css/general.css");
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_general_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers */ "./src/handlers/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ "./src/components/input/index.js");
/* harmony import */ var _components_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/viewer */ "./src/components/viewer/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/signup */ "./src/components/signup/index.js");








class YakMainContainer extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaContainer"] {
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		this.content.className = 'simple-chatbox';
		this.input = document.createElement('yak-input');
		this.viewer = document.createElement('yak-viewer');
		this.header = document.createElement('yak-header');
		global.storage.on('TOGGLE-CHAT', this.handleMinEvent.bind(this));
		global.storage.on('SING-UP-REQ', this.handleSignEvent.bind(this));
		this.content.append(this.header, this.input, this.viewer);
		this.createSignUpForm();
		this.getParameters();
		return this.content;
	}
	/**
	 * API get client parameters
	 */
	getParameters () {
		const base = document.querySelector('#yak-chat-embended');
		this.applyStyles(base);
		var observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.applyStyles(base);
				}
			});
		});
		observer.observe(base, {
			attributes: true 
		});
		if (base.getAttribute('is-popup') !== null) {
			base.classList.add('hidden');
		}
	}
	/**
	 * aply the styles from the custom attributes
	 * @param {HTMLElement} base 
	 */
	applyStyles(base) {
		if (base.getAttribute('bg-color') !== null) {
			const bgColors = base.getAttribute('bg-color').split(',');
			// container background color
			this.content.style.background = bgColors[0];
			// msg container background  
			this.viewer.style.background = bgColors[1];
		}
		if (base.getAttribute('color') !== null) {
			//font color
			this.content.style.color = base.getAttribute('color');
		}
		if (base.getAttribute('is-popup') !== null) {
			this.createBubble(base);
		}
	}
	/**
	 * create a bubble toggler
	 */
	createBubble (base) {
		const bubble = document.querySelector('#yak-toggler') !== null 
			? document.querySelector('#yak-toggler')
			: document.createElement('div');
		bubble.innerHTML = ` <i class="fa fa-comment"></i> `;
		bubble.id = 'yak-toggler';
		document.body.appendChild(bubble);
		bubble.addEventListener('click', () => {
			base.classList.remove('hidden');
		});
	}
	/**
	 * @description create the sigup form by default has the class .hide
	 */
	createSignUpForm () {
		const signpup = document.createElement('yak-signup');
		signpup.classList.add('hide');
		global.storage.dispatch({ type: 'SING-ANONYMOUS' })
		this.content.appendChild(signpup);
	}
	/**
	 * @description hadle the toggle chat action
	 */
	handleMinEvent () {
		const isOpen = global.storage.getState().Main.isOpen;
		this.viewer.className = !isOpen ? 'hide' : 'show';
		this.input.className = !isOpen ? 'hide' : 'show';
		this.content.classList.toggle('no-border');
	}
	/**
	 * @description toggle between the sign-up and the message viewver
	 */
	handleSignEvent () {
		this.viewer.classList.toggle('hide');
		this.input.classList.toggle('hide');
		const signup = document.querySelector('yak-signup');
		signup.classList.toggle('hide');
		if (signup.classList.contains('hide')) {
			document.querySelector('.fa.fa-user-secret').className = 'fa fa-user';
		} else {
			document.querySelector('.fa.fa-user').className = 'fa fa-user-secret';
		}
	}
}

window.customElements.define('yak-main-container', YakMainContainer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/controllers/firebase/index.js":
/*!*******************************************!*\
  !*** ./src/controllers/firebase/index.js ***!
  \*******************************************/
/*! exports provided: singUpWithEmail, signInAnonymous, send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singUpWithEmail", function() { return singUpWithEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInAnonymous", function() { return signInAnonymous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");


/**
 * initialize app
 */
const app = firebase.initializeApp({ 
	apiKey: "AIzaSyAYzDrJanF6W6iO_TWxg3suaHz7lyBnih0",
	authDomain: "yakchat-20e2a.firebaseapp.com",
	databaseURL: "https://yakchat-20e2a.firebaseio.com",
	projectId: "yakchat-20e2a",
	storageBucket: "yakchat-20e2a.appspot.com",
	messagingSenderId: "yakchat-20e2a"
}, 'yakchat-frontscript');
// cloud functions
var functions = app.functions();
let threadRoute = '';

app.auth().onAuthStateChanged(function(user) {
	try {
		console.log('Connected',user.uid);
	} catch (er) {
		// ...
	}
});
/**
 * @description function for sing up with your email address, then stablish connection
 * @param {String} email
 * @param {String} iniMsg
 * @param {String} name
 */
function singUpWithEmail (email, name) {
	const hash = email.md5Encode();
	const d = document.location.host;
	//TODO: validate the email to not exist in this channel
	let handler = functions.httpsCallable('handleVisitor');
	handler({
		u: hash,
		d,
		m: email,
		n: name
	}).then(v => {
		threadRoute = v.data;
		listenRow(threadRoute);
		localStorage.setItem('yak-hash', hash);
		getMessages(threadRoute);
		global.storage.dispatch({type: 'SING-UP-REQ'})
		return v.data
	}).catch((err) => {
		console.log(err)
		return '';
	})
}
/**
 * @description function that stablish an anonymous connection with firebase
 */
async function signInAnonymous () {
	try {
		await app.auth().signInAnonymously();
		const route = await handleVisitor();
		getMessages(route);
		listenRow(route);
	} catch (er) {
		//
	}
}
/**
 * handle new visitor or conenct with visitor fingerprint
 */
async function handleVisitor() {
	let hash = localStorage.getItem('yak-hash');
	if (!hash) {
		hash = await Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getClientInfo"])();
		localStorage.setItem('yak-hash', hash);
	}
	const d = document.location.host;
	let handler = functions.httpsCallable('handleVisitor');
	return await handler({
		u: hash,
		d
	}).then(v => {
		threadRoute = v.data;
		return v.data
	}).catch(() => {
		return '';
	})
}
/**
 * @description get the messages and dispatch it
 * @param {String} route the firebase message route
 */
function getMessages (route) {
	app.database()
	.ref(route)
	.once('value').then((res) => {
		global.storage.dispatch({
			type: 'FB-CONNECT',
			msgList: res.val()
		})
	}).catch(err => {
		console.log(err)
	});
}
/**
 * @description listen to changes in database with the current thread
 * @param {String} route 
 */
function listenRow (route) {
	app.database().ref(route).limitToLast(1).on('child_added', function(snapshot) {
		global.storage.dispatch({
			type: 'MSG-ARRIVE',
			msg: {[snapshot.key]:snapshot.val()}
		})
	 });
}
/**
 * handle send with cloud function
 */
function send (msg) {
	if (threadRoute !== '') {
		let sendMessage = functions.httpsCallable('sendMessage');
		sendMessage({
			uid: localStorage.getItem('yak-hash'),
			msg: msg.message,
			type: 'AA', // text
			thread: threadRoute
		}).then(v => {
			//
		})
	}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/css/general.css":
/*!*****************************!*\
  !*** ./src/css/general.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/handlers/MainHandler.js":
/*!*************************************!*\
  !*** ./src/handlers/MainHandler.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/firebase */ "./src/controllers/firebase/index.js");


/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	list: {},
	isOpen: true,
	thread: undefined,
	isLoading: true
};

/* harmony default export */ __webpack_exports__["default"] = ({
	MainDefaultState,
	MainHandler: {
		'MSG-ARRIVE': (action, state) => {
			const newList = Object.assign({}, state.Main.list, action.msg)
			state.Main.list = newList;
			return { newState: state };
		},
		'TOGGLE-CHAT': (action, state) => {
			state.Main.isOpen = !state.Main.isOpen;
			return { newState: state }
		},
		'FB-CONNECT': (action, state) => {
			state.Main.list = action.msgList;
			state.Main.isLoading = false;
			return { newState: state }
		},
		'SEND-MESSAGE': (action, state) => {
			Object(_controllers_firebase__WEBPACK_IMPORTED_MODULE_0__["send"])(action.msg);
			return { newState: state }
		},
		'SING-ANONYMOUS': (action, state) => {
			Object(_controllers_firebase__WEBPACK_IMPORTED_MODULE_0__["signInAnonymous"])();
			return { newState: state }
		},
		'SIGN-UP': (action, state) => {
			const {email, name} = action
			Object(_controllers_firebase__WEBPACK_IMPORTED_MODULE_0__["singUpWithEmail"])(email, name);
			return { newState: state }
		}
	}
});


/***/ }),

/***/ "./src/handlers/index.js":
/*!*******************************!*\
  !*** ./src/handlers/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainHandler */ "./src/handlers/MainHandler.js");



const { MainDefaultState, MainHandler } = _MainHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

global.storage = new _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Store"](
	{Main: MainDefaultState},
	MainHandler
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_main_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/main-container */ "./src/containers/main-container/index.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);



String.prototype.md5Encode = function(){
	return md5__WEBPACK_IMPORTED_MODULE_1___default()(this)
}

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('yak-main-container');
	document.querySelector('#yak-chat-embended').appendChild(container);
})


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getClientInfo, parsemkey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientInfo", function() { return getClientInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsemkey", function() { return parsemkey; });
/**
 * @returns MD5 hash with the browser fingerprint
 */
async function getClientInfo () {
		const display = getScreenInfo();
		let lang = '!0';
		if (navigator.languages) {
			lang = navigator.languages.join(':');
		}
		let keyboard = '!0';
		if (navigator.keyboard) {
			await navigator.keyboard.getLayoutMap().then(res => {
				keyboard = res.size;
			})
		}
		const OS = navigator.oscpu || navigator.platform;
		let pluggins = getPluginsInfo();
		const devices = getDevices();
		const fullString = createInfoHash(display, lang, devices, keyboard, OS, pluggins);
		return fullString;
	}
	/**
	 * @description create md5 hash with the browser information
	 * @param {String} display screen info
	 * @param {String} langs langs info
	 * @param {String} devices 
	 * @param {String} keyboard 
	 * @param {String} con 
	 * @param {String} os 
	 * @param {String} plg 
	 */
	function createInfoHash (display, langs, devices, keyboard, os, plg) {
		return ([display, langs, devices, keyboard, os, plg].join(';')).split(' ').join('').md5Encode();
	}
	/**
	 * GET:
	 * 	LIST OF PLUGINS INSTALLED
	 */
	function getPluginsInfo () {
		try {
			let p = [];
			for (let x = 0; x < navigator.plugins.length; x++) {
				p.push(navigator.plugins[x].name);
			}
			return p.length > 0 ? p.join(':') : '!0';
		} catch (err) {
			return '!0';
		}
	}
	/**
	 * GET:
	 *	VIEWPORT SIZE,
	 *	VIEWPORT AVAILABLE SIZE,
	 *	COLOR DEPTH
	 */
	function getScreenInfo() {
		try {
			// viewport size
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			let hAvail = window.screen.availHeight;
			let wAvail = window.screen.availWidth;
			// color depth per pixel
			let colorDepht = window.screen.colorDepth;
			return [[w,h].join(':'),[wAvail,hAvail].join(':'),colorDepht].join(';');
		} catch (err) {
			return '!0';
		}
	}
	/**
	 * GET:
	 * 	JAVA_ENABLE,
	 * 	HARDWARE_CONCURRENCY,
	 * 	GAME_PADS,
	 * 	COOKIES ENABLE
	 */
	function getDevices () {
		try {
			let devices = [
				navigator.javaEnabled() ? 1 : 0,
				navigator.hardwareConcurrency,
				navigator.cookieEnabled ? 1 : 0
			];
			if (navigator.getGamepads) {
				const pads = navigator.getGamepads();
				for (let i = 0; i < pads.length; i++) {
					if (pads[i] !== null) {
						devices.push(pads[i].id);
					}
				}
			}
			return devices.join(':');
		} catch (ex) {
			return '!0';
		}
	}

/**
 * 
 * @param {String} value 
 * @param {Int32Array} digis 
 */
function base64 (value, digis) {
	if ( typeof(value) === 'number') {
		if (digis) {
			return base64.getChars(value, '').padStart(digis,'A');
		} else {
			return base64.getChars(value, '');
		}
	}
	if (typeof(value) === 'string') {
		if (value === '') { return NaN; }
		return value.split('').reverse().reduce(function(prev, cur, i) {
			return prev + base64.chars.indexOf(cur) * Math.pow(64, i);
		}, 0);
	}
}
base64.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
base64.getChars = function(num, res) {
	var mod = num % 64,
	remaining = Math.floor(num / 64),
	chars = base64.chars.charAt(mod) + res;
	if (remaining <= 0) { return chars; }
	return base64.getChars(remaining, chars);
};

	function parsemkey(base64safe) {
		// NOTE: returns object
		// TODO: validate base64safe
		return {
			thid: base64( base64safe.slice(0, 8) ),
			ts:  base64( base64safe.slice(8,16) ),
			tid:  base64( base64safe.slice(16,18) )
		};
	}

	/* harmony default export */ __webpack_exports__["default"] = ({
		getClientInfo: getClientInfo,
		parsemkey: parsemkey
	});

/***/ })

/******/ });
//# sourceMappingURL=frontscript.js.map