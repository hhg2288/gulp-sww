// Look at /templates/unminified/README.md before changing content here.
module.exports = {
  INSTALL_TPL_JS: `(function(){function a(){location.href="cache.html?redirect_url="+encodeURIComponent(location.href)}"https:"===location.protocol&&("serviceWorker"in navigator&&!navigator.serviceWorker.controller?navigator.serviceWorker.register("sw.js"):"applicationCache"in window&&(null!==localStorage?"1"!==localStorage.getItem("cached-by-gulp-sww")&&a():"#no-redirect"!==location.hash&&a()))})()`,
  SW_TPL_JS: `importScripts("sww.js");var version="$VERSION",worker=new self.ServiceWorkerWare;worker.use(new self.StaticCacher($FILES_TO_LOAD)),worker.use(new self.SimpleOfflineCache);var extraFiles=$HOOK;extraFiles.length&&importScripts(...extraFiles),worker.init();`,
  CACHE_TPL_JS: `(function(){function e(){2!==applicationCache.status&&3!==applicationCache.status&&4!==applicationCache.status&&5!==applicationCache.status||c();g--?(d&&clearTimeout(d),d=setTimeout(e,1E3)):c()}function c(){var b=new URLSearchParams(location.search.substring(1)),a=new URL(location.href);a.pathname=a.pathname.replace(/cache\.html$/,"/");b.has("debug")||(b.has("redirect_url")&&(a=new URL(b.get("redirect_url")||a)),null!==localStorage?localStorage.setItem("cached-by-gulp-sww","1"):a.hash="#no-redirect",
location.href=a.href)}if(!("URLSearchParams"in window)){var f=function(b){this.a=b.split("&").map(function(a){var b=a.indexOf("=");return-1===b?[a,""]:[a.substring(0,b),a.substring(b+1)]})};f.prototype.has=function(b){return this.a.some(function(a){return a[0]===b})};f.prototype.get=function(b){var a=null;this.a.some(function(c){return c[0]===b?(a=c[1],!0):!1});return null===a?null:decodeURIComponent(a)};window.URLSearchParams=f}if("https:"!==location.protocol||"serviceWorker"in navigator)return c();
var d=null,g=10;applicationCache.addEventListener("cached",c);applicationCache.addEventListener("checking",e);applicationCache.addEventListener("downloading",e);applicationCache.addEventListener("error",c);applicationCache.addEventListener("noupdate",c);applicationCache.addEventListener("obsolete",c);applicationCache.addEventListener("progress",e);applicationCache.addEventListener("updateready",c);d&&clearTimeout(d);d=setTimeout(e,250)})()`,
  CACHE_TPL_HTML: `<!doctype html><html manifest="manifest.appcache"><script defer async src="cache.js"></script><title>c</title>`
};
