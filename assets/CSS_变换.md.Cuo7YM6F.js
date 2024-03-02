import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.84TDCN6B.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/变换.md","filePath":"CSS/变换.md"}'),l={name:"CSS/变换.md"},i=p(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="平移" tabindex="-1">平移 <a class="header-anchor" href="#平移" aria-label="Permalink to &quot;平移&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        h1:hover {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transform: translateX(50px)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;h1&gt;Hello&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h2 id="变换汇总" tabindex="-1">变换汇总 <a class="header-anchor" href="#变换汇总" aria-label="Permalink to &quot;变换汇总&quot;">​</a></h2><p>translate(x, y) 向右向下平移</p><p>translateX(x) 向右平移</p><p>translateX(y) 向下平移</p><p>scale(x,y) x为宽的缩放比例，y为高的缩放比例</p><p>scaleX(x) 宽的缩放比例为x</p><p>scaleY(y) 高的缩放比例为y</p><p>rotate(ndeg) 顺时针旋转n度</p><p>rotateX(ndeg) 绕x轴旋转n度</p><p>rotateY(ndeg) 绕y轴旋转n度</p><p>skew(ndeg,mdeg) 绕x轴倾斜n度，绕y轴倾斜m度</p><p>skewX(ndeg) 绕x轴倾斜n度</p><p>skewY(ndeg) 绕y轴倾斜n度</p><h2 id="典型示例" tabindex="-1">典型示例 <a class="header-anchor" href="#典型示例" aria-label="Permalink to &quot;典型示例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        div{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            height: 100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            background-color: aquamarine;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            margin-bottom: 50px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .translate:hover {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transform: translate(50px, 50px)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .scale:hover {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transform: scale(2, 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .rotate:hover {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transform: rotate(45deg)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .skew:hover{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transform: skew(45deg)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;translate&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;scale&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;rotate&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;skew&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div>`,18),e=[i];function t(c,h,r,k,d,o){return a(),n("div",null,e)}const y=s(l,[["render",t]]);export{E as __pageData,y as default};
