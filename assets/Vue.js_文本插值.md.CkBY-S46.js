import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Vue.js/文本插值.md","filePath":"Vue.js/文本插值.md"}'),t={name:"Vue.js/文本插值.md"},e=p(`<p>文本插值比较简单，就是使用双大括号将变量包裹住，vue会自动解析出该变量的值渲染到页面，如下示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    const a = 1</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span&gt;变量a的值是：&lt;/span&gt;{{ a }}</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>文本插值更强大的功能是可以使用任何JavaScript表达式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    const a = 1</span></span>
<span class="line"><span>    const str = &quot;hello,world&quot;</span></span>
<span class="line"><span>    const arr = [1,2,3]</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    {{ a }}</span></span>
<span class="line"><span>    {{ a + 1 }}</span></span>
<span class="line"><span>    {{a%2==0?&#39;偶数&#39; : &#39;奇数&#39; }}</span></span>
<span class="line"><span>    {{str.split(&quot;,&quot;)}}</span></span>
<span class="line"><span>    {{arr.map(x=&gt;x+1)}}</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,4),l=[e];function c(i,o,r,_,d,u){return n(),a("div",null,l)}const m=s(t,[["render",c]]);export{h as __pageData,m as default};
