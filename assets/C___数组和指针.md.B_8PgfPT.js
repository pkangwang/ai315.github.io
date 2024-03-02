import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"C++/数组和指针.md","filePath":"C++/数组和指针.md"}'),p={name:"C++/数组和指针.md"},t=e(`<ul><li>指针名称就是数组名称</li><li>数组的指针就是第一个元素的地址</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>int* p = a;  // </span></span>
<span class="line"><span>int* p = &amp;a[0]  //</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p+1 与 &amp;a[1] 等价</span></span>
<span class="line"><span>*(p+1) 与 a[1] 等价</span></span></code></pre></div>`,2),i=[t];function l(c,_,o,r,d,h){return n(),s("div",null,i)}const f=a(p,[["render",l]]);export{u as __pageData,f as default};
