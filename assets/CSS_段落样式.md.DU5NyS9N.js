import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.84TDCN6B.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/段落样式.md","filePath":"CSS/段落样式.md"}'),t={name:"CSS/段落样式.md"},l=n(`<h2 id="段落对齐" tabindex="-1">段落对齐 <a class="header-anchor" href="#段落对齐" aria-label="Permalink to &quot;段落对齐&quot;">​</a></h2><h2 id="段落缩进" tabindex="-1">段落缩进 <a class="header-anchor" href="#段落缩进" aria-label="Permalink to &quot;段落缩进&quot;">​</a></h2><p>我们经常在书本看到，每个段落的第一行是空了两个汉字的，这叫做段落缩进，也叫首行缩进，使用text-indent。text-indent的取值单位与font-size类似，既可以是使用px作为绝对值，也可以使用em和百分号作为相对值。</p><p>不过，需要特别注意的是，这里的em和百分比没有等价关系，em是相对于本元素的font-size，而百分比不是的。</p><p>由于标准格式是首行缩进2个汉字，因此不要使用px和百分比，直接使用如下样式即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>text-indent: 2em;</span></span></code></pre></div><p>这样，不管文字大小怎么变换，首行始终是缩进2个汉字。</p><h2 id="文本对齐" tabindex="-1">文本对齐 <a class="header-anchor" href="#文本对齐" aria-label="Permalink to &quot;文本对齐&quot;">​</a></h2><p>如同文字编辑软件Word一样，文本对齐也是段落的基础设置，使用text-align，可取如下值：</p><ul><li>left：左对齐，默认</li><li>right： 右对齐</li><li>center ： 居中对齐</li><li>justify： 两端对齐</li></ul><h2 id="行距" tabindex="-1">行距 <a class="header-anchor" href="#行距" aria-label="Permalink to &quot;行距&quot;">​</a></h2><p>行距控制行之间的距离，使用line-height。如果属性值是纯数字，则表示几倍行距，例如1.5表示1.5倍行距。这里的倍数是相对于font-size的倍数，因此纯数字与em是等效的。也就是说，如果要设置2倍行距，下面两种方式是一样的：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2em;</span></span></code></pre></div><h2 id="单词间距和字符间距" tabindex="-1">单词间距和字符间距 <a class="header-anchor" href="#单词间距和字符间距" aria-label="Permalink to &quot;单词间距和字符间距&quot;">​</a></h2><p>word-spacing 表示单词间的距离。对于英文文本来说，就是单词与单词间的距离。而对于中文文本来说，是标点符号隔开的两小串文本之间的距离。</p><p>letter-spacing表示字符间的距离。对于英文文本来说，就是字母间的距离。对于中文文本来说，就是汉字间的距离。</p><p>基于上面两种分析，可以发现，对于中英文夹杂的文章来说，没有哪一种是可以兼顾的。</p><h2 id="处理空白和换行" tabindex="-1">处理空白和换行 <a class="header-anchor" href="#处理空白和换行" aria-label="Permalink to &quot;处理空白和换行&quot;">​</a></h2><p>默认情况下， 一段文本中，连续多个空格会被压缩成1个空格。同时，在一对<code>&lt;p&gt;</code>标签中永远只会输出一个段落，哪怕源代码中写了几段。</p><p>例如，下面两个段落在浏览器的呈现是一样的：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    空白测试          空白测试 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    换行测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    空白测试 空白测试 换行测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>第一个段落中，虽然有很多空白，虽然看似写了两段话，但是渲染结果与下面那个段落并无二致。</p><p>如果需要人为保留源码中的空白和换行，使用如下样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>white-space: pre;</span></span></code></pre></div><h2 id="文字渐变" tabindex="-1">文字渐变 <a class="header-anchor" href="#文字渐变" aria-label="Permalink to &quot;文字渐变&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">135</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        background-clip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;文字渐变示例&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>由于h1标题是块元素，会占用整行，此时渐变效果不太明显，所以将其设置为display:inline。</p><p>注意，某些浏览器可能不支持文字渐变。</p>`,28),h=[l];function p(e,k,d,E,r,g){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{o as __pageData,y as default};
