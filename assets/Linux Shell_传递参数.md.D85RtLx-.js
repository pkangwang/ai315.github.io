import{_ as n,c as e,o as l,m as s,a,a2 as t}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/传递参数.md","filePath":"Linux Shell/传递参数.md"}'),p={name:"Linux Shell/传递参数.md"},i=s("ul",null,[s("li",null,[s("code",null,"$0"),a(" 第0个参数，即执行文件本身")]),s("li",null,[s("code",null,"$1"),a(" 第1个参数")]),s("li",null,[s("code",null,"$n"),a(" 第n个参数, n是正整数")]),s("li",{10:""},"注意, 如果参数过多, 达到了两位数,那么就要加花括号,例如 $"),s("li",null,[s("code",null,"$#"),a(" 表示脚本运行时携带的命令行参数的个数")]),s("li",null,[s("code",null,"$*"),a("变量会将所有的命令行参数视为一个单词, 该选项不常用")]),s("li",null,[s("code",null,"$@"),a("变量会将所有的命令行参数视为同一字符串中的多个独立的单词，以便你能通过for循环遍历,")])],-1),o=t(`<p>新建一个Shell脚本test.sh内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo  &quot;第0个参数也就是脚本名称是：$0&quot;</span></span>
<span class="line"><span>echo  &quot;第1个参数是：$1&quot;</span></span>
<span class="line"><span>echo  &quot;第2个参数是：$2&quot;</span></span>
<span class="line"><span>echo  &quot;参数个数为: $#&quot;</span></span>
<span class="line"><span>echo  &quot;参数列表为: $@&quot;</span></span></code></pre></div><p>$1表示该脚本的第一个参数，类似的 $2 、$3表示第2、3个参数，以此类推。</p><p>然后运行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ./test.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span></span></code></pre></div><p>输出如下结果:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第0个参数也就是脚本名称是：test.txt</span></span>
<span class="line"><span>第1个参数是：hello</span></span>
<span class="line"><span>第2个参数是：bash</span></span>
<span class="line"><span>参数个数为: 3</span></span>
<span class="line"><span>参数列表为: hello bash shell</span></span></code></pre></div>`,7),c=[i,o];function h(d,u,r,_,k,g){return l(),e("div",null,c)}const m=n(p,[["render",h]]);export{v as __pageData,m as default};
