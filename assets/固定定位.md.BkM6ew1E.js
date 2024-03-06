import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"固定定位.md","filePath":"固定定位.md"}'),t={name:"固定定位.md"},e=p(`<h2 id="固定定位" tabindex="-1">固定定位 <a class="header-anchor" href="#固定定位" aria-label="Permalink to &quot;固定定位&quot;">​</a></h2><p>相对于视口位置，我们经常见到很多商城网站在顶部有一个悬浮导航栏，无论滑动条向下拉多远，这个导航栏一直存在与屏幕的顶部（假设不改变浏览器窗口大小和位置），我们一直看得见，这里就用了固定定位。</p><p>固定定位 (fixed positioning) 同绝对定位 (absolute positioning) 一样，将元素从文档流 (document flow) 当中移出了。而且还不受底下的页面滚动的影响。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>#div1{</span></span>
<span class="line"><span>    background-color: antiquewhite;</span></span>
<span class="line"><span>    width:50%;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#p1{</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    top: 0px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div3&quot;&gt;</span></span>
<span class="line"><span>    &lt;p class=&#39;p3&#39;&gt;此段落相当于在电脑屏幕上新建了一个图层&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>使用常见的案例更容易理解固定定位：</p><ul><li>商城的导航栏，不论怎么滚动，导航栏永远处于屏幕的某个位置</li><li>长页面右下角通常有一个“一键回顶部”按钮，这个按钮永远都处于屏幕的右下角</li></ul>`,6),l=[e];function i(o,c,d,_,r,h){return n(),a("div",null,l)}const m=s(t,[["render",i]]);export{g as __pageData,m as default};
