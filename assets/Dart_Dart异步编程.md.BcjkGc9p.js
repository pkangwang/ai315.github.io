import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.84TDCN6B.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Dart/Dart异步编程.md","filePath":"Dart/Dart异步编程.md"}'),p={name:"Dart/Dart异步编程.md"},l=n(`<h2 id="异步编程简介" tabindex="-1">异步编程简介 <a class="header-anchor" href="#异步编程简介" aria-label="Permalink to &quot;异步编程简介&quot;">​</a></h2><p>异步编程包括：</p><ul><li>Future</li><li>Async/Await</li><li>Stream</li><li>Isolate</li></ul><p>单线程：代码一次执行，也叫同步执行，缺点是如果碰到耗时的代码，就会租塞。</p><p>多线程：让一些代码在另一条时间线上执行。</p><p>事件循环：多线程也有缺点，开辟线程耗费资源，机器吃不消。线程的锁问题，多个线程共享内存时需要加锁，锁竞争反而会降低性能，还会造成死锁。单线程存在事件循环和事件队列，事件循环不断地从事件队列取出事件来执行。每当遇到耗时事件时，事件循环不会停下来等待，而是跳过耗时事件，继续执行之后的事件。基于事件的异步模型只适合I/O密集型耗时操作，因此这种异步往往用于网络服务器并发。如果是计算密集型的，应当利用处理器的多核来实现并行计算。</p><p>Dart有自己的线程机制：ISOlate。mian（）入口就是一个isolate。</p><h2 id="future" tabindex="-1">Future <a class="header-anchor" href="#future" aria-label="Permalink to &quot;Future&quot;">​</a></h2><p>Future有几种创建方法：</p><ul><li>Future()</li><li>Future.microtask(); 创建微任务队列</li><li>Future().sync(); 同步方法，立即执行</li><li>Future.value()</li><li>Future.delayed()</li><li>Future.error()</li></ul><p>Future支持匿名函数，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>main(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(&#39;我是主队列开始&#39;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Future ((){</span></span>
<span class="line"><span>        print (&#39;我最后执行&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Future.sync ((){</span></span>
<span class="line"><span>        print (&#39;我立即执行，跟普通函数没有区别&#39;);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    print(&#39;我是主队列结束&#39;);</span></span></code></pre></div><p>执行结果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>我是主队列开始</span></span>
<span class="line"><span>我立即执行，跟普通函数没有区别</span></span>
<span class="line"><span>我是主队列结束</span></span>
<span class="line"><span>我最后执行</span></span></code></pre></div><p><strong>注册回调</strong></p><p>Future往往需要一个回调方法取出Future类型中的值，可以使用then进行链式调用，取出每一步的值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>main(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Future future = Future.value(&#39;Future值为30&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    future.then((res){</span></span>
<span class="line"><span>        print(res);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="async-await" tabindex="-1">async/await <a class="header-anchor" href="#async-await" aria-label="Permalink to &quot;async/await&quot;">​</a></h2><p>async和await相当于future的语法糖，可以更简洁的编写异步代码。</p><p>当用async声明一个函数时，具有如下意义：</p><ul><li>会返回一个future对象</li><li>该方法会同步执行其中的方法直到遇到await，然后暂停执行</li><li>await任务完成后，下一行代码立即执行。</li></ul><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">imort </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dart:io&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doTask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 下面这个是耗时任务</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(seconds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    retutn  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;执行了耗时操作&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义一个方法用于包装</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doTask ();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 必须等待上面的await执行完毕后才能执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main (){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    print (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main start&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    test ();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    print (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main end&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>结果运行如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>main start</span></span>
<span class="line"><span>main end</span></span>
<span class="line"><span>执行了耗时操作</span></span></code></pre></div><p>注意，async不是异步，await才代表真正的异步。</p><h2 id="一个网络请求示例" tabindex="-1">一个网络请求示例 <a class="header-anchor" href="#一个网络请求示例" aria-label="Permalink to &quot;一个网络请求示例&quot;">​</a></h2><p>异步最常见的就是网络请求了。</p><p>先编辑pubspec.yaml文件，添加dio库。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dependencies:</span></span>
<span class="line"><span>    dio</span></span></code></pre></div><p>然后编写代码：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dio  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Future</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> future </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dio.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://locolhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请求文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    future.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((value){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;返回内容是\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,31),t=[l];function e(h,k,r,d,c,E){return i(),a("div",null,t)}const u=s(p,[["render",e]]);export{o as __pageData,u as default};
