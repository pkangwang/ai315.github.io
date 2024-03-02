import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/函数.md","filePath":"Linux Shell/函数.md"}'),p={name:"Linux Shell/函数.md"},l=e(`<h2 id="创建函数" tabindex="-1">创建函数 <a class="header-anchor" href="#创建函数" aria-label="Permalink to &quot;创建函数&quot;">​</a></h2><p>使用关键字:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function 函数名 {</span></span>
<span class="line"><span>    函数体</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第二种方式是不使用function关键字,但要带上括号,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数名(){</span></span>
<span class="line"><span>    函数体</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="调用函数" tabindex="-1">调用函数 <a class="header-anchor" href="#调用函数" aria-label="Permalink to &quot;调用函数&quot;">​</a></h2><p>要使用函数,直接写上函数名即可,不要带括号。</p><p>一个具体的示例如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Welcome {</span></span>
<span class="line"><span>    read -p &quot;你的名字:&quot; name</span></span>
<span class="line"><span>    echo &quot;你好,\${name}&quot; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Welcome</span></span></code></pre></div><h2 id="带参数的函数" tabindex="-1">带参数的函数 <a class="header-anchor" href="#带参数的函数" aria-label="Permalink to &quot;带参数的函数&quot;">​</a></h2><p>与脚本的参数一样，函数的参数不需要指定名称，而是使用$1 、$2指代。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Welcome{</span></span>
<span class="line"><span>  echo &quot;你好，$1&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Welcome 张三  #输出：你好，张三</span></span></code></pre></div><h2 id="函数的返回值" tabindex="-1">函数的返回值 <a class="header-anchor" href="#函数的返回值" aria-label="Permalink to &quot;函数的返回值&quot;">​</a></h2><p>函数使用echo返回值，这与常用的return习惯不太一样。注意，echo在函数体外是向终端输出内容，但在这里表示返回值，也就是说，分两种情况：</p><ul><li>如果有一个变量接住这个函数，此echo就失去了原有的作用——也就不会在终端输出值。</li><li>如果没有变量接住这个函数，那么echo就会在终端输出。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Welcome {</span></span>
<span class="line"><span>    echo &quot;你好，$1&quot;  # 此时不会在终端输出</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>out=$(Welcome)  # 变量接住了，没有输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Welcome 张三  # 没有变量接住，输出 你好，张三</span></span></code></pre></div>`,16),t=[l];function i(c,o,h,d,u,r){return n(),s("div",null,t)}const _=a(p,[["render",i]]);export{g as __pageData,_ as default};
