import{_ as e,c as t,o as a,a2 as s}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/Flutter状态管理.md","filePath":"Flutter/Flutter状态管理.md"}'),n={name:"Flutter/Flutter状态管理.md"},i=s(`<h2 id="为什么要用状态管理" tabindex="-1">为什么要用状态管理 <a class="header-anchor" href="#为什么要用状态管理" aria-label="Permalink to &quot;为什么要用状态管理&quot;">​</a></h2><ul><li>虽然使用setState可以让页面重绘，但是页面重绘是非常耗费系统资源的</li><li>flutter有有层级树，以至于一个页面的层级很深，因此数据是单向且单线传递的，如果要使用共享组件的数据时，会很麻烦。</li></ul><h2 id="inheritedwidget" tabindex="-1">InheritedWidget <a class="header-anchor" href="#inheritedwidget" aria-label="Permalink to &quot;InheritedWidget&quot;">​</a></h2><p>首先定义一个继承自inheritedWidget的类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Data extends inheritedWidget InheritedWidget{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5),l=[i];function r(d,p,o,c,_,h){return a(),t("div",null,l)}const m=e(n,[["render",r]]);export{g as __pageData,m as default};
