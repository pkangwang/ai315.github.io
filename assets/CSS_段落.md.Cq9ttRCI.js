import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.84TDCN6B.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/段落.md","filePath":"CSS/段落.md"}'),p={name:"CSS/段落.md"},t=i(`<p>对于以文本为主的网页来说，最常见的就是段落了，包裹在<code>&lt;p&gt;&lt;/p&gt;</code>中。</p><p>一对标签中的内容就是一段，哪怕在源代码中换行，渲染出的页面也是没有换行的，任何换行、空白行渲染出来都只有一个空格。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;你以为的第一段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你以为的第二段</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你以为的第三段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>实际上，渲染出来是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>你以为的第一段 你以为的第二段 你以为的第三段</span></span></code></pre></div><p>要想将上面的内容分成真正的三段，只有使用三对<code>&lt;p&gt;&lt;/p&gt;</code>标签。</p>`,6),e=[t];function l(c,h,o,d,r,k){return n(),a("div",null,e)}const g=s(p,[["render",l]]);export{E as __pageData,g as default};
