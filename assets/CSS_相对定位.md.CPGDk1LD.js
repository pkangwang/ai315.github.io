import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.84TDCN6B.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/相对定位.md","filePath":"CSS/相对定位.md"}'),t={name:"CSS/相对定位.md"},l=p(`<p>相对定位相对较容易理解。相对于本来所在的位置进行偏移、</p><p>相对定位元素偏移到新位置后，其原来的位置会产生一片空白，并不会被填充。同时，相对定位元素偏移后也可能叠加在其它元素的上方。</p><p>需要说明的是，设置position:relative后，要至少设置top、left、right、bottom中的一个属性，如果都没有设置，就不会产生任何偏移，相当于没有设置position：relative。</p><p>要真正理解相对定位，重点在于相对定位的形成过程，而非呈现结果：</p><ul><li>元素在没有设置position的时候有一个初识位置。</li><li>设置了position:relative和偏移量后，相对自身进行了偏移。</li><li>原先的位置留下空白，不会被自动填充。</li><li>文档流元素的增减会改变该元素的初识位置，经过偏移之后位置也会改变。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
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
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,6),i=[l];function e(o,c,d,_,r,v){return a(),n("div",null,i)}const h=s(t,[["render",e]]);export{u as __pageData,h as default};
