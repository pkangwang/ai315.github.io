import{_ as s,c as a,o as e,a2 as i}from"./chunks/framework.84TDCN6B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PowerShell/对象.md","filePath":"PowerShell/对象.md"}'),t={name:"PowerShell/对象.md"},p=i(`<p>在powershell中，一切皆对象。对象由三种类型的数据组成：对象类型、其方法和属性。</p><p>例如定义了一个字符串：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$str = &quot;hello,world&quot;</span></span></code></pre></div><p>使用如下命令查看该字符串对象的成员：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get-member</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $str</span></span></code></pre></div><p>这会输出字符串对象的所有属性和方法。</p><h2 id="筛选" tabindex="-1">筛选 <a class="header-anchor" href="#筛选" aria-label="Permalink to &quot;筛选&quot;">​</a></h2><p>Where-Object 脚本块使用特殊的变量<code>$_</code>来引用管道中的当前对象。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get-service</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> where-object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.Name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Match</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;^Wp.*&quot;}</span></span></code></pre></div>`,9),l=[p];function h(n,o,c,r,d,k){return e(),a("div",null,l)}const u=s(t,[["render",h]]);export{_ as __pageData,u as default};
