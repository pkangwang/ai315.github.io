import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PowerShell/powershell的if语句.md","filePath":"PowerShell/powershell的if语句.md"}'),p={name:"PowerShell/powershell的if语句.md"},l=e(`<p>if语句以if关键字开头，后跟一对圆括号，其中写有条件。后跟一对花括号，其中写有满足条件时要执行的语句。如果语句比较简单，也可以省略花括号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(条件){</span></span>
<span class="line"><span>  # 执行语句</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>if-else的格式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(条件){</span></span>
<span class="line"><span>  # 执行语句</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>  # 不满足条件时的执行语句</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>if-elseif-else格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(条件1){</span></span>
<span class="line"><span>  # 执行语句</span></span>
<span class="line"><span>}elseif(条件2){</span></span>
<span class="line"><span>  # 不满足条件1但满足条件2执行的语句</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span> #所有条件都不满足执行的语句</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6),i=[l];function t(c,o,d,r,h,_){return n(),a("div",null,i)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
