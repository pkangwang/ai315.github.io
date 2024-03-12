import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/样式优先级和!important.md","filePath":"CSS/样式优先级和!important.md"}'),l={name:"CSS/样式优先级和!important.md"},n=t(`<h2 id="样式优先级" tabindex="-1">样式优先级 <a class="header-anchor" href="#样式优先级" aria-label="Permalink to &quot;样式优先级&quot;">​</a></h2><p>可以在多处为同一个元素多次设置样式，这需要基于某种规则进行优先级排序，优先级高的会覆盖掉优先级低的属性。CSS样式的优先级从高到底排序如下：</p><ul><li>元素内嵌样式： 使用style属性写在标签内。</li><li>文档内嵌样式： 定义在<code>&lt;style&gt;&lt;/style&gt;</code>中的样式。</li><li>外部样式： link元素的ref属性链接的样式。</li></ul><h2 id="important" tabindex="-1">!important <a class="header-anchor" href="#important" aria-label="Permalink to &quot;!important&quot;">​</a></h2><p>如果在属性值结尾带上!important标记，那么就表示此处的优先级最高。例如下面的例子中，根据优先级规则，h1标题的文本应该为蓝色，但是由于style中使用了!important，此时style中的那个属性优先级最高，最终结果为红色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:blue;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello,CSS&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,6),e=[n];function h(p,k,r,o,E,d){return a(),i("div",null,e)}const _=s(l,[["render",h]]);export{g as __pageData,_ as default};
