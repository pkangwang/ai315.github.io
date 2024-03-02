import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.84TDCN6B.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/动画.md","filePath":"CSS/动画.md"}'),p={name:"CSS/动画.md"},l=i(`<h2 id="过渡" tabindex="-1">过渡 <a class="header-anchor" href="#过渡" aria-label="Permalink to &quot;过渡&quot;">​</a></h2><p>过渡表示当某个属性发生<strong>变化</strong>时，应该在一定的时间内以动画的形式展现。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        .fade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: font-size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ease-in</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;悬浮在此文本上方观看字体逐渐变大&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h2><p>为某个属性定义一个动画帧：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>@keyframes frame1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    from {font-size:10px;}</span></span>
<span class="line"><span>    to {font-size:100px;}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p{</span></span>
<span class="line"><span>    animation:frame1 2s infinite linear;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;观看此文本逐渐变大的动画&lt;/p&gt;</span></span></code></pre></div><p><strong>动画的控制</strong></p><ul><li>animation-name | 动画名称</li><li>animation-duration | 播放时长</li><li>animation-delay | 延迟时间</li><li>animation-direction | 方向，默认正向，反向为reverse</li><li>animation-timing-function | 速度函数</li></ul><p>一般情况下，将几个属性合在一起写，如同上述的例子一样。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>animation : 动画名称  时长  延迟  方向  是否重复  速度函数</span></span></code></pre></div><p>主要的速度函数如下：</p><ul><li>linear | 动画从开始到结束的速度是相同的</li><li>ease | 默认值，动画以低速开始，然后加快，在结束前变慢</li><li>ease-in | 动画以低速开始</li><li>ease-out | 动画以低速结束</li><li>ease-in-out | 动画以低速开始，并以低速结束</li><li>cubic-bezier(n, n, n, n) | 使用 cubic-bezier() 函数来定义动画的播放速度，参数的取值范围为 0 到 1 之间的数值</li></ul><p><strong>动画的组合</strong></p><p>动画的组合分为两种：属性的组合和关键帧的组合。</p><p>可以将强关联的属性组合起来，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>@keyframes frame1{</span></span>
<span class="line"><span>    from:{width:10px; height:10px; background: lightgrey;}</span></span>
<span class="line"><span>    to:{width:200px; height:200px; background: blue;}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>div{</span></span>
<span class="line"><span>    animation: frame1 3s infinite ease-in-out;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;&lt;/div&gt;</span></span></code></pre></div><p>也可以将多个关键帧组合，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>animation: frame1 3s infinite ease-in-out , frame2 3s  infinite ease-in-out</span></span></code></pre></div>`,18),t=[l];function e(h,k,c,d,r,o){return n(),a("div",null,t)}const y=s(p,[["render",e]]);export{E as __pageData,y as default};
