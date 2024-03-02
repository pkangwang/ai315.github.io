import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/开始使用Flutter.md","filePath":"Flutter/开始使用Flutter.md"}'),p={name:"Flutter/开始使用Flutter.md"},t=e(`<p>首先，新增下面两个环境变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>变量名：PUB_HOSTED_URL   变量值：https://pub.flutter-io.cn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变量名：FLUTTER_STORAGE_BASE_URL   变量值：https://storage.flutter-io.cn</span></span></code></pre></div><p>然后去<a href="https://flutter.cn/docs/get-started/install/windows#get-the-flutter-sdk%E4%B8%8B%E8%BD%BDflutter" target="_blank" rel="noreferrer">Flutter中文文档</a> 下载sdk，并解压到不带空格的目录，将里面的bin文件夹路径添加到PATH。</p><p>使用<code>flutter create</code> 命令新建一个flutter项目。然后cd到该目录里面。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>flutter create demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd demo</span></span></code></pre></div><p>然后运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>flutter run -d edge</span></span></code></pre></div><p>此时等待数秒后会打开edge，并运行一个计数器应用。</p><p>lib/dart文件是项目的入口文件，我们可以改为自己的代码，如下是一个更简单的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>main() =&gt; runApp (HelloWorld ())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MaterailApp  HelloWorld(){</span></span>
<span class="line"><span>    return MaterailApp (</span></span>
<span class="line"><span>        title:&quot;Demo&quot;,</span></span>
<span class="line"><span>        home:HomePage (),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Scaffold Homepage (){</span></span>
<span class="line"><span>    return Scaffold (</span></span>
<span class="line"><span>        body:Text (&quot;hello,world&quot;),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10),l=[t];function i(c,o,r,d,u,h){return n(),a("div",null,l)}const m=s(p,[["render",i]]);export{g as __pageData,m as default};
