import{_ as e,c as s,o as a,a2 as p}from"./chunks/framework.84TDCN6B.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"MongoDB/查.md","filePath":"MongoDB/查.md"}'),i={name:"MongoDB/查.md"},t=p('<ul><li>find：根据查询条件返回匹配到的所有文档。空的查询条件{}会返回集合所有内容。</li><li>findOne：找到第一个就返回而不再继续往后找了。</li></ul><p>参数列表：</p><ul><li>查询条件，可以0个、1个或多个</li><li>需要返回的键</li></ul><p>例如查找年龄为38的所有文档：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : 38})</span></span></code></pre></div><p>指定多个条件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : 38 , gender : &#39;男&#39;})</span></span></code></pre></div><p>默认返回所有键，但是有时候只想看其中的几个键，则可以在第二个参数指定，例如如下表示只看name和age两个键：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : 38 } , {name:1, age:0})</span></span></code></pre></div><p>这会返回匹配条件的文档的name、age、<code>_id</code>三个键，因为_id总是会被返回。</p><h2 id="查询条件" tabindex="-1">查询条件 <a class="header-anchor" href="#查询条件" aria-label="Permalink to &quot;查询条件&quot;">​</a></h2><p>数值日期比较</p><p>例如，返回30到39岁的用户：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : {$gte: 30, $lte:39} } , {name:1, age:0})</span></span></code></pre></div><p>这样就能找到30到39岁的所有用户。</p><p>比较运算符如下：</p><ul><li>$lt ：小于</li><li>$lte ： 小于等于</li><li>$gt ： 大于</li><li>$gte ： 大于等于</li><li>$ne： 不等于</li></ul><p>$in</p><p>例如，查询姓名为张三或李四或王五：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : $in ： [&#39;张三&#39;,&#39;李四&#39;,&#39;王五&#39;]})</span></span></code></pre></div><p>这会返回张三、李四、王五的记录。</p><p>与<code>$in</code>相反的是<code>$nin</code>，返回不在这个数组里面的记录：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find({age : $in ： [&#39;张三&#39;,&#39;李四&#39;]})</span></span></code></pre></div><p>这会返回除了张三、李四以外的所有记录。</p><p>$or</p><p>如果有两个条件是或的关系，那么可以用$or。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.find($or: [{age: 37}, {gender: &#39;男&#39;}])</span></span></code></pre></div><p>这会返回年龄为37岁或性别为男性的所有记录。</p>',28),n=[t];function l(o,d,c,g,h,r){return a(),s("div",null,n)}const v=e(i,[["render",l]]);export{b as __pageData,v as default};
