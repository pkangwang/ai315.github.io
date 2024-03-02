import{_ as e,c as a,o as t,a2 as s}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"MongoDB/改.md","filePath":"MongoDB/改.md"}'),l={name:"MongoDB/改.md"},i=s('<ul><li>updateOne ： 只会更新满足匹配条件的<strong>第一个</strong>文档，如果找到了多个，将不会更新。</li><li><strong>updateMany</strong>： 推荐使用，更新满足条件的所有文档。因此，updateMany比updateOne更能满足开发者的真实意图。</li><li>replaceOne：用新文档完全替换匹配的文档。</li></ul><p>都接受两个参数：</p><ul><li>查询条件</li><li>更新后的文档</li></ul><p>例如把张三的年龄改一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>db.blog.users.updateMany({name: &#39;张三&#39;},  {$set : {age ： 39})</span></span></code></pre></div><h2 id="更新运算符" tabindex="-1">更新运算符 <a class="header-anchor" href="#更新运算符" aria-label="Permalink to &quot;更新运算符&quot;">​</a></h2><ul><li>$inc：递增</li><li>$set：修改为另一个值</li><li>$push：如果文档值为数组，将元素添加到数组末尾</li></ul><h2 id="upsert" tabindex="-1">upsert <a class="header-anchor" href="#upsert" aria-label="Permalink to &quot;upsert&quot;">​</a></h2><p>upsert方法很特殊。根据查询条件，通常有两种情况：</p><ul><li>如果可以找到至少一个匹配的文档，则进行正常的更新。</li><li>如果找不到任何匹配的文档，则根据查询条件和更新文档创建一个新的文档。</li></ul>',10),n=[i];function o(r,p,c,u,d,_){return t(),a("div",null,n)}const m=e(l,[["render",o]]);export{g as __pageData,m as default};
