import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as a,t as m}from"./assets/vendor-1e54b975.js";const c=document.querySelector("#vimeo-player"),r=new a(c),o="videoplayer-current-time",i=m(({seconds:e})=>{localStorage.setItem(o,e)},1e3);r.on("timeupdate",i);const t=localStorage.getItem(o);t&&r.setCurrentTime(t).catch(e=>{console.error("Error setting current time:",e)});
//# sourceMappingURL=commonHelpers2.js.map
