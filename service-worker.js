"use strict";var precacheConfig=[["/kanji-dictionary/index.html","5467cd46a2445120d5a259230f755512"],["/kanji-dictionary/static/css/main.e2319c91.css","596890b3592236df3cc5f94710a3b15e"],["/kanji-dictionary/static/js/main.1df6f9cb.js","be375642bc735415358a7e0a72fb9f72"],["/kanji-dictionary/static/media/about-dark.242e3824.svg","242e38249a1751bd51d7474baf70c29d"],["/kanji-dictionary/static/media/about.415cbcb8.svg","415cbcb8919cbd257d39946545c1bc96"],["/kanji-dictionary/static/media/back-arrow.53118c3a.svg","53118c3a15ee486d087b3abcfe3d5e9d"],["/kanji-dictionary/static/media/calligraphy-dark.8c2a8f02.svg","8c2a8f025a1883c223d7187c828fb577"],["/kanji-dictionary/static/media/calligraphy.b45fefa9.svg","b45fefa94afc1cc44aaa7a1bb075e527"],["/kanji-dictionary/static/media/jigsaw-dark.0e27e67b.svg","0e27e67b0cae74160923ee0def9e92ff"],["/kanji-dictionary/static/media/jigsaw.5cdb4ed9.svg","5cdb4ed975011f91c8246b451fa3f480"],["/kanji-dictionary/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/kanji-dictionary/static/media/translate-dark.d8843e92.svg","d8843e9295a9c391f1e62930ce8afd3e"],["/kanji-dictionary/static/media/translate.8e598994.svg","8e598994842d7155706a0cc5ff4a6f76"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/kanji-dictionary/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});