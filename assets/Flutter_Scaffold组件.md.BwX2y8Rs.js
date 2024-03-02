import{_ as a,c as n,o as s,a2 as p}from"./chunks/framework.84TDCN6B.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/Scaffold组件.md","filePath":"Flutter/Scaffold组件.md"}'),e={name:"Flutter/Scaffold组件.md"},l=p(`<p>Scaffold翻译成中文是脚手架，Scaffold组件的作用是“页面的脚手架”，在Flutter中，一个页面对应一个Scaffold组件。Scaffold组件属性如下表：</p><p>Scaffold的主要属性如下：</p><ul><li>appBar：页面的头部</li><li>body：页面的主体内容</li><li>BottomNavigationBar，页面的底部导航栏</li><li>floatingActionButton，通常位于右下角的悬浮按钮</li><li>drawer，左侧拉子页面</li><li>endDrawer，右侧拉子页面</li><li>leading：指定一个icon，点击进入左侧拉子页面</li><li></li></ul><p>注意，一个复杂的Scafflold组件定义的页面不仅仅是我们直接能看到的头部、中间和底部，左侧拉子页面和右侧拉子页面都算是scaffold组件的一部分。</p><h2 id="appbar头部" tabindex="-1">AppBar头部 <a class="header-anchor" href="#appbar头部" aria-label="Permalink to &quot;AppBar头部&quot;">​</a></h2><p>由leading、bottom、title、actions组成</p><p>属性如下：</p><ul><li>title：定义标题</li><li>leading：打开左侧拉子页面的按钮，通常为一个iconButton</li><li>centerTitle：title是否居中</li><li>actions：一个数组，通常包含多个iconButton元素，位于头部区域的右侧，从右向左排列。</li></ul><h2 id="侧拉页面drawer" tabindex="-1">侧拉页面drawer <a class="header-anchor" href="#侧拉页面drawer" aria-label="Permalink to &quot;侧拉页面drawer&quot;">​</a></h2><p>如果想要从屏幕上半部分向右滑动时打开一个侧拉子页面，就需要在Scaffold组件中定义drawer属性。</p><p>同时，除了手势操作外，还可以在标题栏设置一个按钮，点击这个按钮打开侧拉子页面，这可以通过leading属性指定。</p><p>上述讲解的示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Scaffold example (){</span></span>
<span class="line"><span>    return Scaffold (</span></span>
<span class="line"><span>    drawer:buildDawer (),</span></span>
<span class="line"><span>    leading: Icon(Icons.account_circle_rounded),</span></span>
<span class="line"><span>    body:Center(child:Text (&#39;侧拉子页面示例&#39;)),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Widget buildDrawer(){</span></span>
<span class="line"><span>    return Center(child:Text (&#39;这是侧拉子页面的内容&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>除了左侧拉子页面，还可以定义右侧拉子页面，这对应屏幕上方区域左滑手势，以及Scaffold组件的actions属性。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Scaffold example (){</span></span>
<span class="line"><span>    return Scaffold (</span></span>
<span class="line"><span>    drawer:buildEndDawer (),</span></span>
<span class="line"><span>    Actions: Icon(Icons.account_circle_rounded),</span></span>
<span class="line"><span>    body:Center(child:Text (&#39;右侧拉子页面示例&#39;)),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Widget buildDrawer(){</span></span>
<span class="line"><span>    return Center(child:Text (&#39;这是右侧拉子页面的内容&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="bottomnavigatebar底部导航菜单" tabindex="-1">bottomNavigateBar底部导航菜单 <a class="header-anchor" href="#bottomnavigatebar底部导航菜单" aria-label="Permalink to &quot;bottomNavigateBar底部导航菜单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Scaffold example (){</span></span>
<span class="line"><span>    return Scaffold (</span></span>
<span class="line"><span>        body:Center(child:Text (&#39;底部导航栏示例&#39;)),</span></span>
<span class="line"><span>        bottomNavigateBar:buildBottomNavigateBar,</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BottomNavigateBar buildBottomNavigateBar(){</span></span>
<span class="line"><span>    return BottomNavigateBar(</span></span>
<span class="line"><span>        items:[</span></span>
<span class="line"><span>            BottomNavigateBarItem(icon:Icons.home,lable:&#39;首页&#39;),</span></span>
<span class="line"><span>            BottomNavigateBarItem(icon:icons.message,label:&#39;消息&#39;),</span></span>
<span class="line"><span>            BottomNavigateBarItem(icon:icons.people,label:&#39;我的&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>BottomNavigateBar组件还有几个属性，如下：</p><ul><li>type，显示模式</li><li>currentIndex，选中的索引，从0开始</li><li>backgroundColor，导航栏的背景颜色</li><li>iconSize，图标的大小</li><li>onTap，点击事件</li><li>fixedColor，fixed模式下选择项的颜色</li><li>selectedItemColor，选中时图标与文字的颜色</li><li>unselectedItemColor，未选中时图标与文字的颜色</li></ul><p>属性type表示显示模式，为BottomNavigateBarType枚举类型，有两种值，fixed模式表示选中和未选中的图标和文字都会显示，shifting模式表示只有在选中该项时文字才可见，未选择的项的文字是隐藏的。</p><h2 id="appbar可滑动标签栏" tabindex="-1">appBar可滑动标签栏 <a class="header-anchor" href="#appbar可滑动标签栏" aria-label="Permalink to &quot;appBar可滑动标签栏&quot;">​</a></h2><p>appBar的title属性是Widget类型，这意味着可以自定义任意Windget。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>appBar:AppBar (</span></span>
<span class="line"><span>    tabs:[</span></span>
<span class="line"><span>        Tab(text:&#39;tab0&#39;),</span></span>
<span class="line"><span>        Tab(text:&#39;tab1&#39;),</span></span>
<span class="line"><span>        Tab(text:&#39;tab2&#39;),</span></span>
<span class="line"><span>        Tab(text:&#39;tab3&#39;),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    isScrollable:true,  //可滑动</span></span>
<span class="line"><span>),</span></span></code></pre></div>`,23),i=[l];function t(c,o,r,d,u,h){return s(),n("div",null,i)}const g=a(e,[["render",t]]);export{f as __pageData,g as default};
