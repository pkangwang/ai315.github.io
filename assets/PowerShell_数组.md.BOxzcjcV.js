import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.84TDCN6B.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PowerShell/数组.md","filePath":"PowerShell/数组.md"}'),h={name:"PowerShell/数组.md"},l=n(`<h2 id="创建数组" tabindex="-1">创建数组 <a class="header-anchor" href="#创建数组" aria-label="Permalink to &quot;创建数组&quot;">​</a></h2><p>有多种方式创建数组，如下示例所示：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$nums1 = 1,2,3     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用逗号分割元素</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$nums2 = 1..3    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  创建1~3的数组，元素是1 2 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$nums3 = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1,2,3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推荐使用@()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$strs1=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;hello&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 元素为字符串的数组</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;hello&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;world&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,1,2,3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 元素的类型不需要相同</span></span></code></pre></div><h2 id="读取文本文件到数组中" tabindex="-1">读取文本文件到数组中 <a class="header-anchor" href="#读取文本文件到数组中" aria-label="Permalink to &quot;读取文本文件到数组中&quot;">​</a></h2><p>上面几个例子是从无到有创建包含简单元素的数据，实际上，一个更常见的场景是从文本文件读入内容，即get-content命令。</p><p>get-content命令会读入文本内容，并返回一个数组，每一行就是一个元素。例如一个文本文件test.txt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hello</span></span>
<span class="line"><span>world</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $lines = (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get-content</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $lines</span></span></code></pre></div><h2 id="访问数组元素" tabindex="-1">访问数组元素 <a class="header-anchor" href="#访问数组元素" aria-label="Permalink to &quot;访问数组元素&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1,2,3,4,5,6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打印数组，分行输出 1 2 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 索引位置0也就是第1个元素 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最后一个元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 倒数第二个元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..4]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  第2到第5个元素  2 3 4 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,4]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  第2个和第5个元素  2 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..-1]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最后3个元素  4 5 6 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..-3]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  最后3个元素  6 5 4  ，注意与上一行的区别</span></span></code></pre></div><h2 id="修改数组" tabindex="-1">修改数组 <a class="header-anchor" href="#修改数组" aria-label="Permalink to &quot;修改数组&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1,2,3,4,5,6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr.SetValue(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">22,1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   将索引位置1的值改为22</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 22</span></span></code></pre></div><p>可以使用 += 运算符将元素添加到数组：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1..4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a += 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 2 3 4 5</span></span></code></pre></div><h2 id="数组的长度" tabindex="-1">数组的长度 <a class="header-anchor" href="#数组的长度" aria-label="Permalink to &quot;数组的长度&quot;">​</a></h2><p>使用数组的length和count属性得到数组的长度。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr = 1..9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr.length   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr.count </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   9</span></span></code></pre></div><p><strong>合并两个数组</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr1 = 1,2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr2 = 3,4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr = $arr1 + $arr2</span></span></code></pre></div><h2 id="迭代数组" tabindex="-1">迭代数组 <a class="header-anchor" href="#迭代数组" aria-label="Permalink to &quot;迭代数组&quot;">​</a></h2><p>使用foreach()函数迭代数组。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr = 1..9</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">foreach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $arr) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $element    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 依次输出1-9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="筛选数组" tabindex="-1">筛选数组 <a class="header-anchor" href="#筛选数组" aria-label="Permalink to &quot;筛选数组&quot;">​</a></h2><p>使用where{} 筛选数组，通过传递一个表达式，筛选出值为true或可以视为true的元素。</p><p>一般而言，如果表达式得到的结果是0，则视为false。</p><p>例如，筛选所有奇数元素：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0..9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).Where{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span></code></pre></div><p>这里<code>$_</code>指代每次遍历的元素。</p><p>再比如，筛选出非空元素：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;hi&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;there&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).Where({$_.Length})</span></span></code></pre></div>`,30),p=[l];function t(e,k,r,d,E,g){return a(),i("div",null,p)}const y=s(h,[["render",t]]);export{o as __pageData,y as default};
