import{_ as a,c as s,o as n,a2 as l}from"./chunks/framework.84TDCN6B.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Office Skills/Windows Terminal.md","filePath":"Office Skills/Windows Terminal.md"}'),i={name:"Office Skills/Windows Terminal.md"},p=l(`<p>Windows Terminal 是一个全新的、流行的、功能强大的命令行终端工具。</p><p>具有如下特点：</p><ul><li>免费</li><li>自定义配置多种不同的Shell</li><li>多标签和多面板</li><li>自定义主题</li><li>支持背景图片和动图</li></ul><h2 id="快速启动" tabindex="-1">快速启动 <a class="header-anchor" href="#快速启动" aria-label="Permalink to &quot;快速启动&quot;">​</a></h2><p>Win + R打开运行，输入wt，点击“确定”即可启动Window Terminal。 <img src="https://img-blog.csdnimg.cn/img_convert/f3bcd66f85567d6f6f5d4f02e99f2c03.png" alt="快速启动wt"></p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>可以使用快捷键Ctrl + ,（逗号）打开设置标签页。或者先按Ctrl+Shift+P调出命令面板，输入设置，选择“打开设置”。</p><p>wt设置都保存在：</p><ul><li>defaults.json 默认的，在WindowsTerminal的安装目录下，不要修改这里面的内容</li><li>settings.json 用户设置文件，在<code>C:\\Users\\用户名\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState</code>中，我们主要修改这个文件，如果重新安装了或者在新的电脑上，则直接将使用文件替换即可。</li></ul><p>settings.json文件的主要格式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 一些软件层级的设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 各个配置的集合</span></span>
<span class="line"><span>&quot;profiles&quot;: </span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;defaults&quot;: </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            默认配置，用于下面的所有配置，可以被覆盖</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &quot;list&quot;: </span></span>
<span class="line"><span>        [</span></span>
<span class="line"><span>            { 配置1 },</span></span>
<span class="line"><span>            { 配置2 },</span></span>
<span class="line"><span>            { 配置3 },</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义快捷键</span></span>
<span class="line"><span>keybingdings:</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {...}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义配色方案</span></span>
<span class="line"><span>&quot;schemes&quot;:[{方案3},{方案2},{方案3}]</span></span></code></pre></div><p>在settings.json的profiles是一个数组，每个元素是一个对象，表示每种具体的配置。包括如下属性：</p><ul><li>name 配置的名称，中文会被编码为UTF格式，在wt命令中使用-p选项指定</li><li>guid 唯一识别符，这是为了方便软件区分，我们只需关注name即可。</li><li>commandline：字符串形式的可执行文件名，默认为&quot;cmd.exe&quot;</li><li>startingDirectory : 起始目录</li><li>source：基于另一个配置更改</li><li>elevate ： 是否以管理员身份运行，默认false</li><li>tabTitle ：标题，默认就是name</li><li>hidden 是否隐藏</li><li>font 字体，包含有子属性，主要有face字体名称，size字体大小</li><li>acrylicOpacity，不透明度，取值0-1</li><li>useAcrylic 是否开启毛玻璃效果</li><li>tabColor 标签颜色</li><li>foreground前景色，即字体颜色，默认白色</li><li>background 背景色</li><li>backgroundImage 背景图片路径或链接</li><li>backgroundImageOpacity 背景图片的不透明度</li><li>cursorColor 光标颜色</li><li>cursorShape 光标类型，一般设置为竖线bar</li><li>snapOnInput 是否开启嗅探输入</li></ul><h2 id="复制粘贴" tabindex="-1">复制粘贴 <a class="header-anchor" href="#复制粘贴" aria-label="Permalink to &quot;复制粘贴&quot;">​</a></h2><p>默认情况下，复制和粘贴分别绑定到 Ctrl + Shift + C 和 Ctrl + Shift + V，尽管 Ctrl + C 和 Ctrl + V 也可以。</p><p>注意：请警惕 Ctrl + C 可以终止 Linux 应用程序，因此建议使用 Shift。</p><h2 id="wt命令语法" tabindex="-1">wt命令语法 <a class="header-anchor" href="#wt命令语法" aria-label="Permalink to &quot;wt命令语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wt  选项  命令</span></span></code></pre></div><p>选项包括：</p><ul><li>-M，最大化启动终端</li><li>-F，全屏启动</li><li>-p 指定配置名称</li><li>-d 指定工作目录</li></ul>`,20),e=[p];function t(c,o,r,d,u,h){return n(),s("div",null,e)}const g=a(i,[["render",t]]);export{f as __pageData,g as default};
