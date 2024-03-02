import{_ as i,c as l,o as s,a2 as a}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/选择器.md","filePath":"CSS/选择器.md"}'),t={name:"CSS/选择器.md"},n=a(`<h2 id="选择器汇总" tabindex="-1">选择器汇总 <a class="header-anchor" href="#选择器汇总" aria-label="Permalink to &quot;选择器汇总&quot;">​</a></h2><ul><li>元素选择器 <ul><li>标签选择器</li><li>类选择器</li><li>ID选择器</li><li>通配选择器</li></ul></li><li>关系选择器 <ul><li>包含选择器</li><li>子选择器</li><li>相邻选择器</li><li>兄弟选择器</li><li>分组选择器</li></ul></li><li>属性选择器</li><li>伪类选择器 <ul><li>结构伪类</li><li>否定伪类</li><li>状态伪类</li><li>目标伪类</li><li>动态伪类</li></ul></li><li>伪对象选择器</li></ul><p>否定选择：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#div1:not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:nth-child(n) 第n个子元素</p><p>第一个 :nth-child(n)</p><p>第二个 :nth-child(n)</p><p>特别的 第一个 first-child，</p><p>最后一个 last-child</p><p>奇数</p><p>:nth-child(odd)</p><p>:nth-child(2n+1)</p><p>偶数</p><p>:nth-child(even)</p><p>:nth-child(2n)</p><p>推而广之，n从0开始算，可以使用四则运算构建一个等差数列，以方便选出元素</p><p>倒数第n个</p><p>nth-last-child(2)</p>`,18),p=[n];function e(h,c,d,o,r,_){return s(),l("div",null,p)}const E=i(t,[["render",e]]);export{u as __pageData,E as default};
