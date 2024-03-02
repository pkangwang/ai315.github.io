import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/立执行函数.md","filePath":"JavaScript/立执行函数.md"}'),e={name:"JavaScript/立执行函数.md"},t=p(`<p>匿名立执行函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})()</span></span></code></pre></div><p>具名立执行函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(function log() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})()</span></span></code></pre></div><p>传参</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(function add(a, b) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(a + b)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})(1, 2)</span></span></code></pre></div>`,6),l=[t];function c(i,o,d,_,r,h){return n(),a("div",null,l)}const v=s(e,[["render",c]]);export{u as __pageData,v as default};
