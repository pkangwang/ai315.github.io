import{_ as a,c as s,o as e,a2 as p}from"./chunks/framework.84TDCN6B.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/HTTP.md","filePath":"Linux/HTTP.md"}'),t={name:"Linux/HTTP.md"},i=p(`<h2 id="报文结构" tabindex="-1">报文结构 <a class="header-anchor" href="#报文结构" aria-label="Permalink to &quot;报文结构&quot;">​</a></h2><p>请求和响应信息统称报文，结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>首部</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body</span></span></code></pre></div><p>首部每一行是一个键值对。</p><h2 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-label="Permalink to &quot;状态码&quot;">​</a></h2><ul><li>1字头 正在处理的信息</li><li>2字头 成功时的响应，常用的是200 OK</li><li>3字头 服务器给客户端的命令，例如重东西或缓存</li><li>4字头 当客户端发送的请求中存在异常内容时发送的响应码</li><li>5字头 当服务器内部发生错误时发送给客户端的状态码</li></ul><h2 id="url的结构" tabindex="-1">URL的结构 <a class="header-anchor" href="#url的结构" aria-label="Permalink to &quot;URL的结构&quot;">​</a></h2><p>常见URL路径的结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>协议://主机名/路径</span></span></code></pre></div><p>而完整的URL路径的结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>协议:// 用户:密码@主机名:端口/路径?查询#片段</span></span></code></pre></div><p><strong>方案</strong></p><p>主要包括：</p><ul><li>http</li><li>https</li><li>mailto</li><li>file</li><li>ftp</li></ul><p><strong>查询</strong></p><p>用户要搜索的关键词，语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>key1=value1&amp;key2=value2</span></span></code></pre></div><h2 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h2><p>Cookie是将网站信息保存在浏览器的一种结构，由服务器指示客户端（浏览器）保存数据。</p><p>例如服务器发送的报文：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Set-Cookie: key1=value1</span></span>
<span class="line"><span>Set-Cookie: key2=value2</span></span></code></pre></div><p>客户端就会存储起来，下次请求时可以带上：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Cookie: key1=value1</span></span>
<span class="line"><span>Cookie: key2=value2</span></span></code></pre></div><h2 id="认证" tabindex="-1">认证 <a class="header-anchor" href="#认证" aria-label="Permalink to &quot;认证&quot;">​</a></h2><p>如今大多数服务器需要登录，但通常的方式是只需要第一次登录，然后在一定的时间内免登陆。</p><p><strong>BASIC认证</strong></p><p>basic认证是最简单的认证方式，通过base64编码，因为base64可逆，所以服务器可以还原出来原来的用户名和密码。将还原出来的用户名和密码与数据库中进行对比。如下是对用户名和密码进行编码后的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>base64(用户名+&quot;:&quot;+密码)</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>base64(&#39;zhangsan&#39;+&#39;:&#39;+&#39;123456&#39;)  // emhhbmdzYW46MTIzNDU2</span></span>
<span class="line"><span>authorization: &quot;Basic emhhbmdzYW46MTIzNDU2&quot;</span></span></code></pre></div><p><strong>digest认证</strong></p><p>使用哈希函数。</p><h2 id="https-3" tabindex="-1">https/3 <a class="header-anchor" href="#https-3" aria-label="Permalink to &quot;https/3&quot;">​</a></h2><p>udp和tcp的区别：</p><ul><li>可靠的，需要进行三次我手</li><li>不可靠的，只负责发出去，不管有没有收到。</li></ul><p>http/2在与http同一层的tcp套接字上进行了实现，但google为了进一步提高通信速度，在udp套接字上提供了quic协议。</p>`,36),n=[i];function l(o,c,h,d,r,u){return e(),s("div",null,n)}const v=a(t,[["render",l]]);export{b as __pageData,v as default};