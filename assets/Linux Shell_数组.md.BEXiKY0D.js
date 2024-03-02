import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/数组.md","filePath":"Linux Shell/数组.md"}'),p={name:"Linux Shell/数组.md"},i=e(`<p>新建数组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arr=(1 2 3 4 5)</span></span></code></pre></div><p>如果有其它语言的经验，那么可能会想到用如下方式打印出数组的所有元素，不过事实却令人失望：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ arr=(1 2 3 4 5)</span></span>
<span class="line"><span>$ echo $arr</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>只打印出了第一个值，这不是我们想要的。如果要显示整个数组内容，需要使用星号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ arr=(1 2 3 4 5)</span></span>
<span class="line"><span>$ echo \${arr[*]}</span></span>
<span class="line"><span>1 2 3 4 5</span></span></code></pre></div><p>数组默认从0开始索引，使用方括号获取索引位置的值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ arr=(1 2 3 4 5)</span></span>
<span class="line"><span>$ echo \${arr[2]}  # 输出3</span></span></code></pre></div><p>也可以使用子命令:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arr=($(ls))</span></span></code></pre></div><p>也可以使用seq命令:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arr=($(seq 5))</span></span>
<span class="line"><span># 等同于</span></span>
<span class="line"><span>arr=(1 2 3 4 5)</span></span></code></pre></div><h2 id="seq命令" tabindex="-1">seq命令 <a class="header-anchor" href="#seq命令" aria-label="Permalink to &quot;seq命令&quot;">​</a></h2><ul><li>seq 选项 首数 增量 尾数</li></ul><p>选项:</p><ul><li>-s 指定分隔字符串</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ seq -s &#39;#&#39; 5</span></span>
<span class="line"><span>1#2#3#4#5</span></span></code></pre></div><h2 id="获取数组长度" tabindex="-1">获取数组长度 <a class="header-anchor" href="#获取数组长度" aria-label="Permalink to &quot;获取数组长度&quot;">​</a></h2><p><code>\${#array[*]}或\${#array[@]}</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arr=(1 2 3 4 5)</span></span>
<span class="line"><span>echo \${#arr[@]}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arr=($(ls))</span></span>
<span class="line"><span>echo &quot;当前目录下有\${#arr[@]}个文件或子目录&quot;</span></span></code></pre></div><h2 id="数组的遍历" tabindex="-1">数组的遍历 <a class="header-anchor" href="#数组的遍历" aria-label="Permalink to &quot;数组的遍历&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for file in $(ls)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    echo \${file}  # 这里针对每个文件进行处理</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>筛选出特定后缀的文件:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for file in $(ls *.txt)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    echo \${file}  # 这里针对每个筛选处理的文件进行处理</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,25),l=[i];function t(c,o,d,h,r,u){return n(),a("div",null,l)}const b=s(p,[["render",t]]);export{v as __pageData,b as default};
