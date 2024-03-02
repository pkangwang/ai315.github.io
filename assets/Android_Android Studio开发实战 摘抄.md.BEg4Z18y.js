import{_ as d,c as t,o as i,a2 as a}from"./chunks/framework.84TDCN6B.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Android/Android Studio开发实战 摘抄.md","filePath":"Android/Android Studio开发实战 摘抄.md"}'),e={name:"Android/Android Studio开发实战 摘抄.md"},l=a('<h2 id="api-level" tabindex="-1">API level <a class="header-anchor" href="#api-level" aria-label="Permalink to &quot;API level&quot;">​</a></h2><table><thead><tr><th>Android版本号</th><th>API level</th><th>发布时间</th></tr></thead><tbody><tr><td>Android 14</td><td>34</td><td>2023.10</td></tr><tr><td>Android 13</td><td>33</td><td>2022.10</td></tr><tr><td>Android 12</td><td>31、32</td><td>2021.10</td></tr><tr><td>Android 11</td><td>30</td><td>2020.9</td></tr><tr><td>Android 10</td><td>29</td><td>2019.8</td></tr><tr><td>Android 9</td><td>28</td><td>2018.8</td></tr></tbody></table><p>API level是Android面向开发者的一套接口代号。可能发布了新的系统版本，但是这一套接口并没有变化，所以就不必提供新的API，所以API level也不必改变。android的系统版本和API level之间并不是一一对应的。Android系统版本和API level是多对一的关系。Android系统版本是给Android用户看的，而API level是给应用程序开发者看的。</p><h2 id="app工程目录结构解析" tabindex="-1">app工程目录结构解析 <a class="header-anchor" href="#app工程目录结构解析" aria-label="Permalink to &quot;app工程目录结构解析&quot;">​</a></h2><p>app工程目录分两个层次，第一层是项目，另一层是模块，模块依附于项目，每个项目至少有一个模块。一般而言的“编译运行App”，指的是运行某个模块，而非运行某个项目，因为模块才对应实际的App。</p><p>某项目有两个分类，一个是app（代表app模块），另一个是Gradle Scripts。其中，app下面又有3个分类：</p><ul><li>mainfest子目录，下面只有一个XML文件，及AndroidManifest.xml，它是app的运行配置文件</li><li>java子目录，下面有3个com.example.myapplication的包，其中第一个包存放当前模块的java源码，后面两个包存放测试用的java代码</li><li>res子目录，存放当前模块的资源文件。res下面又有4个子目录： <ul><li>drawable：存放图形描述文件与图片文件</li><li>layout目录：存放App页面的布局文件</li><li>mipmap目录：存放app的启动图标</li><li>values目录：存放一些常量定义文件</li></ul></li></ul><p>Gradle Scripts下面主要是工程的编译配置文件，主要有:</p><ul><li>build.gradle 分为项目级与模块级，用于描述App工程的编译规则</li><li>proguard-rules.pro 该文件用于描述java代码的混淆规则</li><li>gradle.properties 该文件用于配置编译工程的命令行参数，一般无需改动</li><li>settings.gradle 该文件配置了需要编译哪些模块。</li><li>local.properties 项目的本地配置文件，它在工程编译时自动生成，用于描述开发者的环境配置，包括SDK的本地路径，NDK的本地路径等</li></ul><h2 id="编译配置文件" tabindex="-1">编译配置文件 <a class="header-anchor" href="#编译配置文件" aria-label="Permalink to &quot;编译配置文件&quot;">​</a></h2><p>该文件下有respositories 和dependencies两个节点，前者设置插件的网络仓库地址，后者设置gradle插件的版本号。由于插件仓库位于国外，因此可在respositores节点中设置阿里云的仓库地址。</p><p>AndroidManifest.xml指定了App的运行配置信息，它是一个XML描述文件。</p><p>根节点是manifest，package属性指定该App的包名。下有application节点，各属性如下：</p><ul><li>Android:allowBackup 是否运行应用备份</li><li>Android：icon 在手机屏幕上显示的图标</li><li>Android:label app在手机屏幕上显示的名称</li><li>Android:roundIcon 圆角图标</li></ul>',14),r=[l];function o(p,n,s,A,c,_){return i(),t("div",null,r)}const m=d(e,[["render",o]]);export{h as __pageData,m as default};
