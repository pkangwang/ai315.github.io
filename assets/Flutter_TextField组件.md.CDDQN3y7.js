import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.84TDCN6B.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/TextField组件.md","filePath":"Flutter/TextField组件.md"}'),p={name:"Flutter/TextField组件.md"},t=e(`<p>基本：TextField()</p><p>隐藏文本 obscureText : true</p><p>最大可输入1行 maxLines : 1</p><p>注意，如果设置输入文本不可见，那么最大只能输入1行，否则报错。</p><p>设置弹出的键盘类型KeyboardType，这是一个枚举类型TextInputType，可取值为 text（普通键盘）、number（ 数字键盘）。</p><p>输入文本对齐textAlign是枚举类型TextAlign，分为 center、left、right。</p><p>输入字数限制 maxLength，在输入框右下角会出现计数器。</p><p>输入行数限制，最大maxLines，最小minLines。</p><p>只允许输入数字：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>inputFormatters:[</span></span>
<span class="line"><span>   WhitelistingTextInputFormatter.digitsOnly</span></span>
<span class="line"><span>],</span></span></code></pre></div><p>通过正则表达式校验输入，下面这个例子只能输入字母：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>inputFormatters:[</span></span>
<span class="line"><span>   WhitelistingTextInputFormatter(RegExp (&quot;[a-zA-Z]&quot;))</span></span>
<span class="line"><span>],  //</span></span></code></pre></div><p>下面这个例子只能输入数字，r表示原始字符串：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>inputFormatters:[   </span></span>
<span class="line"><span>WhitelistingTextInputFormatter(RegExp (r&quot;\\d+&quot;))</span></span>
<span class="line"><span>],</span></span></code></pre></div><p>decorate属性配置边框，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>decoration: InputDecoration(</span></span>
<span class="line"><span>        border: OutlineInputBorder(),   //上下左右都有边框</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>如果要设置边框的弧度，可以：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>decoration: InputDecoration(</span></span>
<span class="line"><span>        border: OutlineInputBorder(</span></span>
<span class="line"><span>              borderRadius :  BorderRadius.all(Radius.circular(40)),   </span></span>
<span class="line"><span>        ),   </span></span>
<span class="line"><span>)</span></span></code></pre></div><p>上面的border是通用样式，还可以细分，enabledBorder设置激活时的样式，disabledBorder设置未激活的样式。</p><p>borderRadius设置弧度，borderSide设置边框样式。</p><p>如下例子是输入框激活的样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>decoration: InputDecoration(</span></span>
<span class="line"><span>	enabledBorder:  OutlineInputBorder(</span></span>
<span class="line"><span>		borderRadius: BorderRadius.all(Radius.circular(10)),</span></span>
<span class="line"><span>		borderSide: BorderSide (</span></span>
<span class="line"><span>			color: Colors.blueGrey,  // 边框颜色</span></span>
<span class="line"><span>			width: 2.0,  // 边框粗细</span></span>
<span class="line"><span>		)</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>要让文本框不可编辑，设置TextField组件的enabled值为false。</p><p>设置提示文本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>decoration: InputDecoration(</span></span>
<span class="line"><span>	hinText: &quot;请输入用户名&quot;,</span></span>
<span class="line"><span>	hinStyle: TextStyle(color: Colors.grey, fontSize: 12),</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>可以配置labelText，没有焦点时，labelText显示在TextField里面，有焦点或已输入内容时，labelText会移动到顶部边线上。</p><p>prefixIcon 显示文本前的图标，类型为Icon，是InputDecoration的参数。</p><p><strong>inputDecoration</strong></p><p>TextFiled的decoration的作用是定义边框样式，其值是一个inputDecoration类型。</p><p>inputDecoration的属性如下表：</p><ul><li>border：有无边框以及边框样式</li><li>hinText：提示文本</li><li>hintStyle：提示文本样式</li><li>labelText：未获取焦点时的显示文本，当获取焦点时，会消失或移动到顶部的border边线上</li></ul><p>inputDecoration的border属性用来定义边框类型，取值如下表所示：</p><ul><li>InputBorder.none：无边框</li><li>OutlineInputBorder：上下左右都有边框</li><li>UnderlineInputBorder：只有下边框，默认值</li></ul><p>例如下面示例实现边框四个角的弧度为40°：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>return TextFiled(</span></span>
<span class="line"><span>    decoration:OutlineInputBorder(</span></span>
<span class="line"><span>        borderRadius: BorderRadius.all(Radius.circular(40)),</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>);</span></span></code></pre></div>`,35),i=[t];function l(o,r,c,d,u,h){return n(),a("div",null,i)}const v=s(p,[["render",l]]);export{b as __pageData,v as default};
