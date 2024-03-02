import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const _=JSON.parse('{"title":"Dart的空安全","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/Dart的空安全.md","filePath":"Flutter/Dart的空安全.md"}'),t={name:"Flutter/Dart的空安全.md"},e=p(`<h1 id="dart的空安全" tabindex="-1">Dart的空安全 <a class="header-anchor" href="#dart的空安全" aria-label="Permalink to &quot;Dart的空安全&quot;">​</a></h1><p>先看下面的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>String str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main(){</span></span>
<span class="line"><span>  print(str);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果在其它语言中，可能会输出&quot;&quot;，表示编译器会默认将str赋值为一个空字符串，但是在Dart中会报错，Dart语言的逻辑是：</p><ol><li>如果变量没有赋初值，那么一概认为值为null，而不是&quot;&quot;、0、0.0等。</li><li>Dart默认开启空安全，也就是说，访问时必须是有值状态，而且还不能是null。</li><li>如果允许变量的值为null，可以在类型后面加个问号，表示该变量可空，不过并不推荐这样做。</li></ol><p>上面的代码有两种修改方式，第一种方式是赋予一个初始值，这也是推荐的做法，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String str = &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main(){</span></span>
<span class="line"><span>  print(str);   // &quot;&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第二种方式是在类型后面加一个问号表示该值可空：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String? str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main(){</span></span>
<span class="line"><span>  print(str);  // null</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>声明的变量如果没有显式赋值，默认全部是null。这和其它语言有不同之处，例如Java，如果声明一个整形变量而不赋值，那么这个变量的值为0。</p><p>只有赋值定义如int i= 0，其初始值才是0，否则int i的意思是i的默认值为null。</p><p>新版本的Dart默认启用空安全，double?表示可空的小数，double表示不可空的小数。</p><p>作为最佳实践，在每次声明变量时都要为其显示的赋予一个初始值，例如int i = 0 ，而不是int? i 。</p><h2 id="非空断言" tabindex="-1">非空断言 <a class="header-anchor" href="#非空断言" aria-label="Permalink to &quot;非空断言&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String? str;  // str是可空的</span></span>
<span class="line"><span>void main() {</span></span>
<span class="line"><span>print(str!.length);  // 报错，此时不能为空，但实际上此时为空值</span></span>
<span class="line"><span>str = &quot;Hello, world!&quot;;  // 现在赋予了一个非空值</span></span>
<span class="line"><span>print(str!.length);  // 告诉编译器在此时不能为空，实际上也不是空值</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15),l=[e];function i(o,r,c,d,u,h){return n(),s("div",null,l)}const v=a(t,[["render",i]]);export{_ as __pageData,v as default};
