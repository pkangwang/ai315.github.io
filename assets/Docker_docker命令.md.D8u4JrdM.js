import{_ as e,c as a,o as i,a2 as o}from"./chunks/framework.84TDCN6B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Docker/docker命令.md","filePath":"Docker/docker命令.md"}'),r={name:"Docker/docker命令.md"},t=o('<h2 id="docker-run命令" tabindex="-1">docker run命令 <a class="header-anchor" href="#docker-run命令" aria-label="Permalink to &quot;docker run命令&quot;">​</a></h2><ul><li>-d 后台启动，并返回容器ID。一般情况下容器都在后台运行，因为如果不再后台运行，一旦退出容器就会导致服务关闭。</li><li>-i 交互模式运行容器</li><li>-P 随机端口映射 容器内部端口映射到主机是随机端口</li><li>-p 指定端口映射，格式为 -p 主机端口:容器端口。如果端口一样，可以简写为-p 端口。</li><li>-t 为容器重新分配一个伪输入终端，通常与-i搭配：-it</li><li>--name 指定容器名称</li><li>-v 指定一个目录映射到本地某个文件夹。格式为 -v 宿主机文件夹:容器文件夹。</li></ul><h2 id="docker-build命令" tabindex="-1">docker build命令 <a class="header-anchor" href="#docker-build命令" aria-label="Permalink to &quot;docker build命令&quot;">​</a></h2><p>根据Dockerfile配置文件，创建一个镜像。</p><p>默认配置文件为项目目录下的Dockerfile文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker build -t 镜像名称:tag  .</span></span></code></pre></div><p>最后的. 表示将本目录下的文件打包成一个镜像，一定不能忽略。</p><h2 id="docker-image" tabindex="-1">docker image <a class="header-anchor" href="#docker-image" aria-label="Permalink to &quot;docker image&quot;">​</a></h2><p>查看本地镜像列表。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker image ls</span></span></code></pre></div><h2 id="docker-ps" tabindex="-1">docker ps <a class="header-anchor" href="#docker-ps" aria-label="Permalink to &quot;docker ps&quot;">​</a></h2><p>查看容器信息</p>',12),c=[t];function s(d,l,n,p,h,k){return i(),a("div",null,c)}const m=e(r,[["render",s]]);export{_ as __pageData,m as default};
