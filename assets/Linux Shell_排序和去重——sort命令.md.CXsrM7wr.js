import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/排序和去重——sort命令.md","filePath":"Linux Shell/排序和去重——sort命令.md"}'),i={name:"Linux Shell/排序和去重——sort命令.md"},e=p(`<p>可以使用sort命令对每行进行排序，默认每从第一个字符开始，比较ASCII值进行排序。</p><p>sort命令选项如下：</p><ul><li>-r ： 逆序</li><li>-f ： 不区分大小写</li><li>-n ： 以数字为依据</li></ul><h2 id="文本的排序" tabindex="-1">文本的排序 <a class="header-anchor" href="#文本的排序" aria-label="Permalink to &quot;文本的排序&quot;">​</a></h2><p>例如如下文本文件1.md：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>aa</span></span>
<span class="line"><span>abd</span></span>
<span class="line"><span>A</span></span>
<span class="line"><span>abc</span></span></code></pre></div><p>运行<code>sort 1.md</code>后输出如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>A</span></span>
<span class="line"><span>aa</span></span>
<span class="line"><span>abc</span></span>
<span class="line"><span>abd</span></span></code></pre></div><h2 id="数值的排序" tabindex="-1">数值的排序 <a class="header-anchor" href="#数值的排序" aria-label="Permalink to &quot;数值的排序&quot;">​</a></h2><p>假设一个文件2.md如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>111</span></span></code></pre></div><p>必须加上-n告诉以数值为依据，否则会当成字符串以ASCII逐字符比较。如下示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$  sort -n  2.md</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>111</span></span></code></pre></div><h2 id="删除重复行" tabindex="-1">删除重复行 <a class="header-anchor" href="#删除重复行" aria-label="Permalink to &quot;删除重复行&quot;">​</a></h2><p>删除重复行前先进行排序，然后使用管道传递给uniq命令即可。</p><p>如下文本文件3.md：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>A</span></span>
<span class="line"><span>B</span></span>
<span class="line"><span>A</span></span>
<span class="line"><span>A</span></span>
<span class="line"><span>B</span></span></code></pre></div><p>运行如下命令删除重复行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  sort</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uniq</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">B</span></span></code></pre></div>`,19),l=[e];function t(c,o,h,d,r,u){return n(),a("div",null,l)}const _=s(i,[["render",t]]);export{g as __pageData,_ as default};
