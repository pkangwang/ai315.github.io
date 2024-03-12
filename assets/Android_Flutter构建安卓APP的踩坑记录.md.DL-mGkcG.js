import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const m=JSON.parse('{"title":"Flutter构建安卓APP的踩坑记录","description":"","frontmatter":{},"headers":[],"relativePath":"Android/Flutter构建安卓APP的踩坑记录.md","filePath":"Android/Flutter构建安卓APP的踩坑记录.md"}'),p={name:"Android/Flutter构建安卓APP的踩坑记录.md"},l=e(`<h1 id="flutter构建安卓app的踩坑记录" tabindex="-1">Flutter构建安卓APP的踩坑记录 <a class="header-anchor" href="#flutter构建安卓app的踩坑记录" aria-label="Permalink to &quot;Flutter构建安卓APP的踩坑记录&quot;">​</a></h1><h2 id="gradle-构建时卡住" tabindex="-1">Gradle 构建时卡住 <a class="header-anchor" href="#gradle-构建时卡住" aria-label="Permalink to &quot;Gradle 构建时卡住&quot;">​</a></h2><p>当运行 flutter build apk 的时候会一直卡在“Running Gradle task &#39;assembleRelease&#39;...”，这表示flutter在下载一些资源，但是由于服务器在国外，所以会卡住。此时需要去两个文件里面将下载服务器改为国内的源。</p><p>在文件夹<code>项目目录\\android\\build.gradle</code>中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>buildscript {</span></span>
<span class="line"><span>    ext.kotlin_version = &#39;1.7.10&#39;</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        // 把下面这两行注释掉</span></span>
<span class="line"><span>        // google()</span></span>
<span class="line"><span>        // mavenCentral()</span></span>
<span class="line"><span>        // 添加下面三行</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/nexus/content/groups/public&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>allprojects {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        // 把下面这两行注释掉</span></span>
<span class="line"><span>        // google()</span></span>
<span class="line"><span>        // mavenCentral()</span></span>
<span class="line"><span>        // 添加下面三行</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/nexus/content/groups/public&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>flutter安装目录\\packages\\flutter_tools\\gradle\\flutter.gradle</code>，笔者的文件内容是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>def pathToThisDirectory = buildscript.sourceFile.parentFile</span></span>
<span class="line"><span>apply from: &quot;$pathToThisDirectory/src/main/groovy/flutter.groovy&quot;</span></span></code></pre></div><p>这个内容的意思是引导我们去另外一个文件，也就是<code>flutter安装目录packages\\flutter_tools\\gradle\\src\\main\\groovy\\flutter.groovy</code> 。大约在第79行开始，内容修改如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>repositories {</span></span>
<span class="line"><span>        // 把下面这两行注释掉</span></span>
<span class="line"><span>        // google()</span></span>
<span class="line"><span>        // mavenCentral()</span></span>
<span class="line"><span>        // 添加下面三行</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/nexus/content/groups/public&#39; }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>直接手动下载gradle最新版本，去<code>项目目录\\android\\gradle\\wrapper</code> 中，最后一行是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip</span></span></code></pre></div><p>这个地址下载缓慢，直接下载最新版本的gradle，然后引入本地的路径。笔者下载了gradle-8.5-all.zip，然后将该压缩包放在同目录（<code>项目目录\\android\\gradle\\wrapper</code>）下，然后将这一行改成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>distributionUrl=gradle-8.5-all.zip</span></span></code></pre></div><p>现在，gradle就可以正常构建apk了。</p>`,14),t=[l];function i(o,r,c,d,u,g){return n(),s("div",null,t)}const v=a(p,[["render",i]]);export{m as __pageData,v as default};
