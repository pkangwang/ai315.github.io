import{_ as i,c as s,o as t,a2 as a}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"HTML/表单.md","filePath":"HTML/表单.md"}'),e={name:"HTML/表单.md"},l=a(`<p>制作一个表单至少需要三个元素： from、input、button。</p><h2 id="form元素" tabindex="-1">form元素 <a class="header-anchor" href="#form元素" aria-label="Permalink to &quot;form元素&quot;">​</a></h2><ul><li>action ： 数据发送的目的地，通常是一个URL。</li><li>method： 发送到服务器的方法，应该在 get 和 post 中二选一，如果不写，默认值为get。然而，大多数表单发送数据时需要使用post。</li><li>enctype： 浏览器发送到服务器的数据采用的编码方式。详情见下文。</li><li>autocomplete： 控制表单的自动完成。on表示开启，off表示关闭。</li><li>target ： 提交表单后服务器反馈的信息显示在哪里。默认情况下反馈信息会替换表单所在的原页面。可选值见下文。</li><li>name： 为表单设置一个独一无二的标识符。该属性与id不是一回事。</li></ul><p>表单的enctype编码方式有三种。</p><p>第一种编码方式是application/x-www-form-urlencoded，这是默认方式，也是最常使用的方式。它将每项数据的名值对以&amp;符号链接，组成一个新的字符串，这与URL链接的query部分的语法相同。这种方式的缺点是无法将文件上传。语法示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>name1=value1&amp;name2=value2</span></span></code></pre></div><p>第二种编码方式：multipart/form-data。它更为冗长，处理起来更复杂。这种编码方式用于将文件上传到服务器。</p><p>第三种编码方式是text/plain。这种编码要谨慎使用，因为没有正式的规范，在各个浏览器中的方式也不相同。</p><p>target属性指定提交表单后服务器反馈信息的显示位置，与a元素类似，该属性有如下值：</p><ul><li><code>_blank</code>： 服务器反馈信息显示在新窗口。</li><li><code>-parent</code>：服务器反馈信息显示在父窗框组中。</li><li><code>_self</code>：服务器反馈信息显示在当前窗口，这是默认行为。</li><li><code>-top</code>：服务器反馈信息显示在顶层窗口。</li><li><code>&lt;frame&gt;</code>：服务器反馈信息显示在指定窗框中。</li></ul><p>HTML4规定表单元素必须写在<code>&lt;form&gt;&lt;/form&gt;中</code>，在HTML5没有这个约束。只要为form设置了id属性，然后将其它地方的表单元素的form属性值设置为这个id属性值即可。示例如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Name:&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myform&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Reset&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在上面这个例子中，button元素写在了form的外面，但由于使用form属性指向了表单的id值，因此与将button直接写在<code>&lt;form&gt;&lt;/form&gt;</code>里面的效果一样。</p>`,13),p=[l];function n(o,h,r,k,d,c){return t(),s("div",null,p)}const m=i(e,[["render",n]]);export{g as __pageData,m as default};
