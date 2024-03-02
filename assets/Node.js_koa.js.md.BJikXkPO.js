import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Node.js/koa.js.md","filePath":"Node.js/koa.js.md"}'),p={name:"Node.js/koa.js.md"},o=e(`<p>Koa -- 基于 Node.js 平台的下一代 web 开发框架。Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const Koa = require(&#39;koa&#39;);</span></span>
<span class="line"><span>const app = new Koa();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(async ctx =&gt; {</span></span>
<span class="line"><span>  ctx.body = &#39;Hello World&#39;;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.listen(3000);</span></span></code></pre></div>`,2),t=[o];function c(l,i,_,d,r,h){return n(),a("div",null,t)}const k=s(p,[["render",c]]);export{m as __pageData,k as default};
