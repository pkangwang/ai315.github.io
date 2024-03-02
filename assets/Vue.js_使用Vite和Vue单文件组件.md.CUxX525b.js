import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Vue.js/使用Vite和Vue单文件组件.md","filePath":"Vue.js/使用Vite和Vue单文件组件.md"}'),i={name:"Vue.js/使用Vite和Vue单文件组件.md"},e=p(`<h2 id="使用vite作为vue编译工具" tabindex="-1">使用Vite作为Vue编译工具 <a class="header-anchor" href="#使用vite作为vue编译工具" aria-label="Permalink to &quot;使用Vite作为Vue编译工具&quot;">​</a></h2><p>使用Vite基本上就是使用下面这一行命令，所以只要记住这行命令即可：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  demo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre></div><p>终端会提示回答一些问题，根据实际情况回答即可。</p><p>然后依次运行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>此时Vite已经运行，会在终端输出一个地址，默认为<code>http://localhost:5173/</code>，在浏览器打开即可看到默认的起始页。</p><h2 id="单文件组件" tabindex="-1">单文件组件 <a class="header-anchor" href="#单文件组件" aria-label="Permalink to &quot;单文件组件&quot;">​</a></h2><p>为了提高开发和协作效率，需要更好的模块化、组件化，Vue提出了单文件组件的概念，就是将一些紧密相关的HTML元素写在一个.vue文件里面，定义好JavaScript逻辑、元素内容、局部样式。</p><p>单文件的大致架构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 这里写JavaScript逻辑</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;!--这里写HTML内容--&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* 这里写局部样式 */</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>将组件写好之后，需要在根组件App.vue中导入及使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>	import HelloWorld.vue from &#39;./components/HelloWorld.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;HelloWorld /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>作为最佳实践，推荐以下几点：</p><ul><li>组件始终放在components文件夹中。</li><li>在命名、导入、使用组件时均使用大驼峰命名法。</li><li>在VSCode中安装Volar插件以完善对Vue文件的支持：代码高亮和自动补全。</li></ul>`,15),t=[e];function l(h,c,o,d,r,k){return n(),a("div",null,t)}const F=s(i,[["render",l]]);export{u as __pageData,F as default};
