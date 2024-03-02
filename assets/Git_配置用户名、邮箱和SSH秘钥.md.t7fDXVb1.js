import{_ as s,c as a,o as e,a2 as i}from"./chunks/framework.84TDCN6B.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Git/配置用户名、邮箱和SSH秘钥.md","filePath":"Git/配置用户名、邮箱和SSH秘钥.md"}'),t={name:"Git/配置用户名、邮箱和SSH秘钥.md"},p=i(`<h2 id="配置用户名和邮箱" tabindex="-1">配置用户名和邮箱 <a class="header-anchor" href="#配置用户名和邮箱" aria-label="Permalink to &quot;配置用户名和邮箱&quot;">​</a></h2><p>在以后提交到仓库的时候需要指定用户名和邮箱，这里提前进行全局设置，以后默认使用该身份。使用如下命令设置用户名和邮箱：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;姓名&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;邮箱&quot;</span></span></code></pre></div><h2 id="配置ssh秘钥" tabindex="-1">配置SSH秘钥 <a class="header-anchor" href="#配置ssh秘钥" aria-label="Permalink to &quot;配置SSH秘钥&quot;">​</a></h2><p>我们使用Git命令不可避免的要跟Github打交道。要将本地文件上传到Github的仓库，就需要身份鉴权，基于安全的考量，已经不推荐用户名密码的方式，而推荐SSH非对称秘钥的方式。</p><p>首先进入Bash环境，运行如下命令：</p><div class="language-ssh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ssh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ssh-keygen -t rsa -C &quot;自己的邮箱&quot;</span></span></code></pre></div><p>运行上述命令后，终端会问你几个问题以进一步完成秘钥文件的生成，其它的可以直接回车以同意默认设置，最重要的是秘钥文件名，默认是<code>C:\\Users\\用户名/.ssh/id_rsa</code>，秘钥文件一般放在家目录，名称可以随便取。如果已经存在同名的秘钥文件记得要修改以免覆盖其它秘钥文件。我们这里使用默认设置。</p><p>然后就会在家目录生成两个文件，文件的完整路径如下：</p><ul><li><code>C:\\Users\\username\\.ssh\\id_rsa</code> : 私钥</li><li><code>C:\\Users\\username\\.ssh\\id_rsa.pub</code> ： 公钥</li></ul><p>带有pub的是公钥文件，可以分发在网络上。另一个是私钥文件，一定不能泄露。</p><p>使用VSCode或记事本打开id_rsa.pub文件，内容只有一行，全选复制。</p><p>打开浏览器，输入<code>https://github.com/settings/keys</code> ，点击右边的<strong>New SSH Key</strong>，在Title文本框输入一些信息，在Key文本框粘贴我们刚刚复制好的公钥文本，点击<strong>Add SSH Key</strong>，至此ssh秘钥配置完成。</p><p>回到本地bash环境，运行如下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ssh -T git@github.com</span></span></code></pre></div><p>第一次运行上述命令可能会输出包含“The authenticity of host &#39;github.com (20.205.243.166)&#39; can&#39;t be established.”的错误信息，这是因为缺少known_hosts文件，手动输入<code>yes</code>再按回车即可创建known_hosts文件。</p><p>此时再次运行上述命令，会输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Hi 用户名! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><p>这表示我们的秘钥已经配置成功！</p><p>当然，第一次配置可能不会成功，遇到问题首先多尝试几次，然后将输出内容粘贴到搜索引擎以寻求其它实践者的经验。</p><p>另外，由于Github本身的不稳定性，有些时候可能需要一点科学方法才能连上。</p>`,21),n=[p];function h(o,l,c,d,r,u){return e(),a("div",null,n)}const _=s(t,[["render",h]]);export{k as __pageData,_ as default};
