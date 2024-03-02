import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/变量内容的编辑.md","filePath":"Linux Shell/变量内容的编辑.md"}'),r={name:"Linux Shell/变量内容的编辑.md"},t=e('<ul><li><code>${变量#关键词}</code> 若变量内容从头开始的数据符合关键词，则将符合的最短数据删除</li><li><code>${变量##关键词}</code> 若变量内容从头开始的数据符合关键词，则将符合的最长数据删除</li><li><code>{变量%关键词}</code> 若变量内容从尾向前的数据符合关键词，则将符合的最短数据删除</li><li><code>{变量%%关键词}</code> 若变量内容从尾向前的数据符合关键词，则将符合的最长数据删除</li><li><code>{变量/旧字符串/新字符串}</code> 若变量内容符合旧字符串，则第一个旧字符串会被新字符串替换</li><li><code>{变量//旧字符串/新字符串}</code> 若变量内容符合旧字符串，则全部的旧字符串会被新字符串替换</li></ul><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>str=&quot;hello,hello,world&quot;</span></span>\n<span class="line"><span>echo ${str#h*o} # 输出 ,hello,world</span></span>\n<span class="line"><span>echo ${str##h*o}  # 输出 rld</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>echo ${str/hello/HELLO} # 输出 HELLO,hello,world</span></span>\n<span class="line"><span>echo ${str//hello/HELLO} # 输出 HELLO,HELLO,world</span></span></code></pre></div><h2 id="几种特殊的替换结构" tabindex="-1">几种特殊的替换结构 <a class="header-anchor" href="#几种特殊的替换结构" aria-label="Permalink to &quot;几种特殊的替换结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>${var:-string} </span></span>\n<span class="line"><span>${var:+string} </span></span>\n<span class="line"><span>${var:=string}</span></span>\n<span class="line"><span>${var:?string}</span></span></code></pre></div><p>1、${var:-string}和${var:=string}:若变量var为空，则用在命令行中用string来替换${var:-string}，否则变量var不为空时，则用变量var的值来替换${var:-string}；对于${var:=string}的替换规则和${var:-string}是一样的，所不同之处是${var:=string}若var为空时，用string替换${var:=string}的同时，把string赋给变量var： ${var:=string}很常用的一种用法是，判断某个变量是否赋值，没有的话则给它赋上一个默认值。</p><p>2、${var:+string}的替换规则和上面的相反，即只有当var不是空的时候才替换成string，若var为空时则不替换或者说是替换成变量 var的值，即空值。(因为变量var此时为空，所以这两种说法是等价的)</p><p>3、{var:?string}替换规则为：若变量var不为空，则用变量var的值来替换${var:?string}；若变量var为空，则把string输出到标准错误中，并从脚本中退出。我们可利用此特性来检查是否设置了变量的值。</p><p>补充扩展：在上面这五种替换结构中string不一定是常值的，可用另外一个变量的值或是一种命令的输出。</p>',9),i=[t];function l(p,o,c,d,h,v){return n(),s("div",null,i)}const $=a(r,[["render",l]]);export{_ as __pageData,$ as default};
