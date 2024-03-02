import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.84TDCN6B.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux Shell/查找命令所在的位置——which和type命令.md","filePath":"Linux Shell/查找命令所在的位置——which和type命令.md"}'),h={name:"Linux Shell/查找命令所在的位置——which和type命令.md"},l=e(`<h2 id="which命令" tabindex="-1">which命令 <a class="header-anchor" href="#which命令" aria-label="Permalink to &quot;which命令&quot;">​</a></h2><p>which命令用于查找命令的路径，例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/bin/ls</span></span></code></pre></div><p>输入一个命令，shell会按照如下顺序查找：</p><ul><li>别名</li><li>shell保留字例如while case</li><li>函数</li><li>shell内置命令，例如cd、echo、exit、history等</li><li>path，这会根据path路径列表的顺序依次查找</li></ul><h2 id="type命令" tabindex="-1">type命令 <a class="header-anchor" href="#type命令" aria-label="Permalink to &quot;type命令&quot;">​</a></h2><p>type命令用于检查命令是否是shell自带命令，也就是说安装了这个shell就可以执行这个命令。与之相对的，外部命令是指系统安装的，与Shell无关的命令，一般情况下，一般用户执行的命令存放于/usr/bin/里面的，管理员命令存放于/usr/sbin里面。</p><p>如果输出一个路径则表示是系统命令，如下示例检测是Shell自带还是系统命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> builtin</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # cd是shell自带</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> awk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/awk</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 系统命令</span></span></code></pre></div>`,9),t=[l];function n(p,c,k,r,d,o){return a(),i("div",null,t)}const y=s(h,[["render",n]]);export{F as __pageData,y as default};
