import{_ as s,c as a,o as t,a2 as n}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Java/基本数据类型.md","filePath":"Java/基本数据类型.md"}'),e={name:"Java/基本数据类型.md"},p=n(`<p><strong>var关键字</strong></p><p>Java中使用var关键字表示类型推断，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = 1 ;</span></span>
<span class="line"><span>// 等价于</span></span>
<span class="line"><span>int a = 1 ;</span></span></code></pre></div><p><strong>浮点数字面量</strong></p><p>浮点数分为double和float，带小数点的数为double类型，如果后面加一个f或F则为float类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>double  d = 3.14</span></span>
<span class="line"><span>float  f = 3.14f;</span></span></code></pre></div><p><strong>字符串</strong></p><p>字符串类型用String声明，字面量用双引号包裹：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String str = &quot;Hello,World!&quot;</span></span></code></pre></div><p>使用length方法得到String的长度：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String str = &quot;Hello,World!&quot;</span></span>
<span class="line"><span>System.out.println(str.length());</span></span></code></pre></div><p>使用isEmpty()方法测试长度是否为0：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String str = &quot;Hello,World!&quot;</span></span>
<span class="line"><span>System.out.println(str.isEmpty());</span></span></code></pre></div>`,13),i=[p];function l(o,c,d,r,g,h){return t(),a("div",null,i)}const _=s(e,[["render",l]]);export{v as __pageData,_ as default};
