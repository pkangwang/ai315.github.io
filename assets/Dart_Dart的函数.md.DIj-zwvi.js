import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Dart/Dart的函数.md","filePath":"Dart/Dart的函数.md"}'),e={name:"Dart/Dart的函数.md"},t=p(`<h2 id="函数基础" tabindex="-1">函数基础 <a class="header-anchor" href="#函数基础" aria-label="Permalink to &quot;函数基础&quot;">​</a></h2><p>函数的一般定义方式为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>返回值类型 函数名称（参数列表）{</span></span>
<span class="line"><span>  执行代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函数的声明，参数类型可写可不写，但仍然建议写明参数类型。</p><p>如下示例表示传入一个String类型的参数，返回一个String类型的值，如果没有返回值，可以不写，或者写void。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String GetInfo(String name){</span></span>
<span class="line"><span>    return &quot;hi, $name&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PrintInfo(name){</span></span>
<span class="line"><span>    print(&quot;hi,$name&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函数的调用示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>print(GetInfo(&#39;张三&#39;));    // &quot;hi,张三&quot;</span></span></code></pre></div><h2 id="函数的简写" tabindex="-1">函数的简写 <a class="header-anchor" href="#函数的简写" aria-label="Permalink to &quot;函数的简写&quot;">​</a></h2><p>上面的函数，函数体内只包含一个表达式，所以也可以简写为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String GetInfo(name) =&gt; &quot;hi, $name&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(GetInfo(&quot;张三&quot;));  // hi,张三</span></span></code></pre></div><p>语法 =&gt; 表达式 是 { return 表达式; } 的简写， =&gt; 有时也称之为胖箭头语法。</p><p>注意：在 =&gt; 与 ; 之间的只能是 表达式 而非 语句。比如你不能将一个 if语句 放在其中，但是可以放置 条件表达式。</p><h2 id="命名可选参数" tabindex="-1">命名可选参数 <a class="header-anchor" href="#命名可选参数" aria-label="Permalink to &quot;命名可选参数&quot;">​</a></h2><p>函数可以有两种形式的参数：必要参数和可选参数。</p><p>必要参数的特点是“参数位置重要，名称任意”。参数不能多，不能少，实参与形参从左到右一一按位置对应，这是最基本的参数。一般函数参数个数数量较多，比如有几十个，按位置传递参数的方法容易出错，不现实。此时可使用命名参数。对于命名参数，参数位置无关紧要，名称重要。</p><p>必要参数定义在参数列表前面，可选参数则定义在必要参数后面。可选参数可以是命名的或位置的。</p><p>命名可选参数表示参数值可以赋值，也可以不赋值。需要注意的是，由于1.12以后得Dart版本默认启用了空安全，因此所有可以不赋值的参数类型都应该加上问号（？）表示参数可空，也就是允许调用时不赋值。</p><p>可以使用如下语法来定义包含命名参数的函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数名( 必要参数列表,{类型1?: 参数1, 类型2?: 参数2, …})</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 函数体</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对命名参数列表赋值时，可以不按顺序赋值，只要指定名称即可。这就是命名可选参数的好处，赋值语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数名(必要参数列表赋值, 命名参数1: 值1, 命名参数2: 值2, …);</span></span></code></pre></div><p>命名参数的示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PrintInfo(String name , {int? age, String? gender}) {</span></span>
<span class="line"><span>  print(&quot;姓名:$name,年龄:$age,性别:$gender&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main() {</span></span>
<span class="line"><span>  PrintInfo(&quot;张三&quot;,age:38); // 姓名:张三,年龄:38,性别:null</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>虽然命名参数是可选参数的一种类型，但是你仍然可以使用 @required 注解来标识一个命名可参数是必须提供值的参数，此时调用者则必须为该参数提供一个值，如下示例表示必须提供两个参数：name（必要参数）、age（命名可选参数）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PrintInfo(String name, {required int? age, String? gender}) {</span></span>
<span class="line"><span>  print(&quot;姓名:$name,年龄:$age,性别:$gender&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main() {</span></span>
<span class="line"><span>  // PrintInfo(&quot;张三&quot;); // 报错，age必须提供</span></span>
<span class="line"><span>  PrintInfo(&quot;张三&quot;, age: 38); // 姓名:张三,年龄:38,性别:null</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在Flutter组件的定义中，会大量使用命名可选参数，因此推荐养成使用命名可选参数的习惯。</p><p>特别注意，命名参数和位置参数只能放在必要参数的后面，而且命名参数和位置参数不能同时使用。</p><h2 id="位置可选参数" tabindex="-1">位置可选参数 <a class="header-anchor" href="#位置可选参数" aria-label="Permalink to &quot;位置可选参数&quot;">​</a></h2><p>位置参数表示该参数可以不提供值，如果提供值，必须按照定义的顺序依次提供。</p><p>使用中括号（[]） 将一系列参数包裹起来作为位置可选参数，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PrintInfo(String name, [int? age,String? gender]) {</span></span>
<span class="line"><span>    print(&quot;姓名:$name,年龄:$age,性别:$gender&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    PrintInfo(&quot;张三&quot;,38,&quot;男&quot;); </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>PrintInfo(&quot;张三&quot;,38,&quot;男&quot;);</span></span></code></pre></div><h2 id="参数的默认值" tabindex="-1">参数的默认值 <a class="header-anchor" href="#参数的默认值" aria-label="Permalink to &quot;参数的默认值&quot;">​</a></h2><p>可以用等于号（=）为函数的命名和位置可选参数定义默认值，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PrintInfo(String? name, {int? age = 30, String? gender = &quot;男&quot;} ) {</span></span>
<span class="line"><span>    print(&quot;姓名:$name,年龄:$age,性别:$gender&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    PrintInfo(&quot;张三&quot;);  // 姓名:张三,年龄:30,性别:男 (age和gender参数值没有提供，使用默认值)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="匿名函数" tabindex="-1">匿名函数 <a class="header-anchor" href="#匿名函数" aria-label="Permalink to &quot;匿名函数&quot;">​</a></h2><p>例如Future()接收一个匿名函数，表示异步执行该函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Future ((){</span></span>
<span class="line"><span>    print (&#39;我最后执行&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,38),i=[t];function l(o,c,r,d,u,h){return n(),s("div",null,i)}const b=a(e,[["render",l]]);export{v as __pageData,b as default};
