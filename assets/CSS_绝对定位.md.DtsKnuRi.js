import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/绝对定位.md","filePath":"CSS/绝对定位.md"}'),t={name:"CSS/绝对定位.md"},l=p(`<p>要真正理解绝对定位，就要理解绝对定位最终形成的结果：</p><ul><li>永远相对于容纳块保持恒定的偏移。</li><li>只要容纳块位置不变，不管容纳块的子元素如何增减，其位置不会改变。</li></ul><p>需要注意的是，至少要设置一个偏移量，否则position：absolute无效，相当于没有设置。</p><p>这种定位相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<code>&lt;html&gt;</code>。</p><p>absolute通常也叫做绝对定位，是因为使用这种定位的元素往往会覆盖后面的元素，可以形象的理解为在HTML页面上新建一个图层。</p><p>绝对定位用于将元素移出正常布局流 (normal flow)，以坐标的形式相对于它的容器定位到 web 页面的任何位置。</p><p>打个很简单的比方，拿一张A4纸，在纸上某一个位置画一个符号，以后你在纸上再怎么写都改变不了这个符号在这个纸上的位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
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
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,8),e=[l];function i(c,o,d,_,r,u){return a(),n("div",null,e)}const h=s(t,[["render",i]]);export{v as __pageData,h as default};
