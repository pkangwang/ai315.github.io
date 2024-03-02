import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.84TDCN6B.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Dart/Dart面向对象.md","filePath":"Dart/Dart面向对象.md"}'),p={name:"Dart/Dart面向对象.md"},l=n(`<p>Dart中一切皆对象，每个对象都是一个类的实例，包括数值类型； 除了Null类之外，所有的类都继承自Object； Dart类中可以基于implement实现接口，且可以实现多个接口； Dart类中可以基于mixin继承，且可以实现多继承；</p><p>声明一个类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，始终建议类的实例成员赋初始值，如果不赋值，就需要定义构造函数，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People1{</span></span>
<span class="line"><span>    String name = &quot;&quot;;</span></span>
<span class="line"><span>    int age = 0;  // 都有初值，可以不写构造函数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class People2{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    People2(this.name,this.age);  // 没有初值，必须定义构造函数</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>与函数不同，构造函数不能具有返回类型。</p><p>构造函数，与类名称同名的方法，在实例化时，自动被调用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    String gender;</span></span>
<span class="line"><span>    People(String name; int age; String gender){</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>        this.gender = gender;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    People zs = People(&quot;张三&quot;, 38, &quot;男&quot;);</span></span>
<span class="line"><span>    print(&quot;姓名:\${zs.name},年龄：\${zs.age},性别：\${zs.gender}&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>构造函数可以简写为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    String gender;</span></span>
<span class="line"><span>    People(this.name, this.age, this.gender);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>也就是说，参数列表里面将<code>String name</code>写成<code>String this.name</code>，就相当于已经在函数体中写了<code>this.name=name</code>。</p><h2 id="命名式构造函数" tabindex="-1">命名式构造函数 <a class="header-anchor" href="#命名式构造函数" aria-label="Permalink to &quot;命名式构造函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    String gender;</span></span>
<span class="line"><span>    People.Gen(String name; int age; String gender){</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>        this.gender = gender;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>    // 支持终值语法糖：</span></span>
<span class="line"><span>    People.Gen(String this.name; int this.age; String this.gender);</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    People zs = People.Gen(&quot;张三&quot;, 38, &quot;男&quot;);</span></span>
<span class="line"><span>    print(&quot;姓名:\${zs.name},年龄：\${zs.age},性别：\${zs.gender}&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>命名式构造函数也支持简写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class People{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    String gender;</span></span>
<span class="line"><span>    People.Gen(this.name; this.age; this.gender);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    People zs = People.Gen(&quot;张三&quot;, 38, &quot;男&quot;);</span></span>
<span class="line"><span>    print(&quot;姓名:\${zs.name},年龄：\${zs.age},性别：\${zs.gender}&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="static" tabindex="-1">Static <a class="header-anchor" href="#static" aria-label="Permalink to &quot;Static&quot;">​</a></h2><p>对于所有支持面向对象的语言来说，默认情况下，在类中定义的成员不属于类本身，而是属于实例，类只是提供了一个模板而已。</p><p>static关键字用来指定静态成员，通过static修饰的属性是静态属性，通过static修饰的方法是静态方法。</p><p>使用static 关键字来实现类级别的变量和函数。</p><p>静态成员可以通过类名称直接访问(不需要实例化)。实例化是比较消耗资源的，声明静态成员，可以提高程序性能。</p><p>静态方法不能访问实例成员；但实例可以访问静态成员。</p><p>尤其要注意的是，静态方法中，不能使用this关键字。</p><p>不能使用this关键字，访问静态属性。</p><p>需要给到初始化值，否则需要再static后加上late关键字标识延迟赋值。</p><p>如果实例成员要访问静态属性，在类的内部，直接使用该静态属性名称，不能加上<code>this.</code>，在类的外部，使用<code>类.静态属性</code>的方式。例如：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> work </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;学习&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SeeBook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;一个学生在看书&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这个学生的工作是\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">work</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;学生的工作是\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">work</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> student </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    student.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SeeBook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>请注意，不能在外部直接修改静态属性。</p><p>静态方法只能访问静态成员。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> work </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;学习&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setWork</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newWork){work </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newWork;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;学生的工作是\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">work</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setWork</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;读书&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;学生的工作是\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">work</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 学生的工作是读书</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><p>this代表当前创建的实例。关于静态成员和实例成员的规则如下：</p><ul><li>实例成员可以访问静态成员、其它实例成员</li><li>静态成员不能访问实例成员，只能访问其它静态成员</li></ul><h2 id="getters和setters" tabindex="-1">Getters和Setters <a class="header-anchor" href="#getters和setters" aria-label="Permalink to &quot;Getters和Setters&quot;">​</a></h2><p>get和set专门用于读取和写入对象的属性，便于在读取属性或设置属性的值之前进行一些操作。每个属性都可以定义一个getter和setter。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    People</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name,age){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // age属性的getter：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // age属性的setter：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){print (设置失败：年龄不能为负数);}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main (){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    People</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> People</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;张三&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">38</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    print (people.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//38</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    people.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// s设置失败：年龄不能为负数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    people.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(people.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GetAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//40</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,35),t=[l];function e(h,k,r,d,E,g){return i(),a("div",null,t)}const y=s(p,[["render",e]]);export{o as __pageData,y as default};
