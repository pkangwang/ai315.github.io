import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/定位.md","filePath":"CSS/定位.md"}'),l={name:"CSS/定位.md"},t=p(`<ul><li>static | 没有定位，此时设置 top, bottom, left, right没有作用</li><li>relative | 相对于本来所在的位置</li><li>absolute | 相对已定位的父元素</li><li>fixed | 相对视口的定位</li><li>sticky | 粘性定位，表现随着用户的滚动情况而定。</li></ul><p>默认，表示元素在它应该的位置，没有定位。</p><h2 id="相对定位" tabindex="-1">相对定位 <a class="header-anchor" href="#相对定位" aria-label="Permalink to &quot;相对定位&quot;">​</a></h2><p>相对于本来所在的位置。</p><p>相对定位 (relative positioning) 让你能够把一个正常布局流 (normal flow) 中的元素从它的默认位置按坐标进行相对移动。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    .div {</span></span>
<span class="line"><span>        background: red;</span></span>
<span class="line"><span>        width: 300px;</span></span>
<span class="line"><span>        height: 300px;</span></span>
<span class="line"><span>        margin: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #p1 {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        left: 100px;</span></span>
<span class="line"><span>        top: 100px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;div&quot;&gt;第一个div&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div&quot;&gt;第二个div&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div&quot;&gt;</span></span>
<span class="line"><span>    &lt;p id=&quot;p1&quot;&gt;此段落相对于本来的位置向右偏移100px、向下偏移100px&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h2 id="绝对定位" tabindex="-1">绝对定位 <a class="header-anchor" href="#绝对定位" aria-label="Permalink to &quot;绝对定位&quot;">​</a></h2><p>这种定位相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<code>&lt;html&gt;</code>。</p><p>absolute通常也叫做绝对定位，是因为使用这种定位的元素往往会覆盖后面的元素，可以形象的理解为在HTML页面上新建一个图层。</p><p>绝对定位用于将元素移出正常布局流 (normal flow)，以坐标的形式相对于它的容器定位到 web 页面的任何位置。</p><p>打个很简单的比方，拿一张A4纸，在纸上某一个位置画一个符号，以后你在纸上再怎么写都改变不了这个符号在这个纸上的位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    .div1 {</span></span>
<span class="line"><span>        background: red;</span></span>
<span class="line"><span>        width: 300px;</span></span>
<span class="line"><span>        height: 300px;</span></span>
<span class="line"><span>        margin: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #p1 {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        left: 100px;</span></span>
<span class="line"><span>        top: 100px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div1&quot;&gt;</span></span>
<span class="line"><span>    &lt;p id=&quot;p1&quot;&gt;不管页面元素怎么增减，此段落的位置永远距离页面左边100px、右边100px&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h2 id="固定定位" tabindex="-1">固定定位 <a class="header-anchor" href="#固定定位" aria-label="Permalink to &quot;固定定位&quot;">​</a></h2><p>相对于视口位置，我们经常见到很多商城网站在顶部有一个悬浮导航栏，无论滑动条向下拉多远，这个导航栏一直存在与屏幕的顶部（假设不改变浏览器窗口大小和位置），我们一直看得见，这里就用了固定定位。</p><p>固定定位 (fixed positioning) 同绝对定位 (absolute positioning) 一样，将元素从文档流 (document flow) 当中移出了。而且还不受底下的页面滚动的影响。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>#div1{</span></span>
<span class="line"><span>    background-color: antiquewhite;</span></span>
<span class="line"><span>    width:50%;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#p1{</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    top: 0px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;div3&quot;&gt;</span></span>
<span class="line"><span>    &lt;p class=&#39;p3&#39;&gt;此段落相当于在电脑屏幕上新建了一个图层&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>使用常见的案例更容易理解固定定位：</p><ul><li>商城的导航栏，不论怎么滚动，导航栏永远处于屏幕的某个位置</li><li>长页面右下角通常有一个“一键回顶部”按钮，这个按钮永远都处于屏幕的右下角</li></ul><p><strong>三者的区别</strong></p><p>relative、absolute和fixed的区别简单来说就是：</p><ul><li>relative相对于自己本来的位置进行了偏移</li><li>absolute表现为距离页面（body）左上角的位置永远不会改变。</li><li>fixed表现为距离屏幕左上角的位置永远不会改变（假设不改变浏览器窗口的位置和大小）。</li></ul><p><strong>sticky 定位</strong></p><p>sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。</p><p>当页面规定没有超出目标区域时，它的行为就像 position:relative；当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。</p>`,24),i=[t];function e(c,o,d,g,r,u){return a(),n("div",null,i)}const b=s(l,[["render",e]]);export{v as __pageData,b as default};
