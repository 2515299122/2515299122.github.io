if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const c=e=>i(e,t),o={module:{uri:t},exports:a,require:c};s[t]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(n(...e),a)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/first.css",revision:"a1a35f52ddbd528d79ebfad8f3d55944"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/style.css",revision:"05a7f8833a900663b069a8cc505b9f65"},{url:"js/app.7a2c825e.js",revision:"7a2c825eba3f2495f5c0f48cbe70482e"},{url:"js/plugins/aplayer.js",revision:"dbe5eea968969672c52022ed895192a0"},{url:"js/plugins/parallax.js",revision:"8bf0ab10d50243ae87016af576642cdc"},{url:"js/plugins/rightMenu.js",revision:"d9437285263079b1158df42384235b71"},{url:"js/plugins/rightMenus.js",revision:"80d861b1e0937ebecf188793f3705a3a"},{url:"js/plugins/tags/contributors.js",revision:"aec8045335d2753a39a48c34fb019662"},{url:"js/plugins/tags/friends.js",revision:"f372da57b83083859f60ce19b736a695"},{url:"js/plugins/tags/sites.js",revision:"76bf19b80414fbce774acddabf6b1d3e"},{url:"js/search/hexo.js",revision:"8594665377e48c3b406b0149264ebf2d"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"404.html",revision:"214f968e80ae1346e9aed0b70a2bf665"},{url:"about/index.html",revision:"ba8c70934dc1d5526d238c28282aebfd"},{url:"/",revision:"index-20231209070410483"},{url:"archives/",revision:"archives-20231209070410483"},{url:"about/",revision:"about-20231209070410483"},{url:"categories/",revision:"categories-20231209070410483"},{url:"tags/",revision:"tags-20231209070410483"},{url:"friends/",revision:"friends-20231209070410483"}],{}),e.registerRoute(/^https:\/\/unpkg\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.cdn\.zzko\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/gcore\.jsdelivr\.net/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/bu\.dusays\.com/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=maps/service-worker.js.map
