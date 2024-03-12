import{_ as t,c as e,o as d,a2 as a}from"./chunks/framework.84TDCN6B.js";const b=JSON.parse('{"title":"Text组件","description":"","frontmatter":{},"headers":[],"relativePath":"Flutter/Text组件.md","filePath":"Flutter/Text组件.md"}'),s={name:"Flutter/Text组件.md"},n=a(`<h1 id="text组件" tabindex="-1">Text组件 <a class="header-anchor" href="#text组件" aria-label="Permalink to &quot;Text组件&quot;">​</a></h1><p>基本使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Text (&#39;文本内容&#39;)</span></span></code></pre></div><p>Text组件有几个属性，如下：</p><table><thead><tr><th>属性</th><th>解释</th></tr></thead><tbody><tr><td>textAlign</td><td>文字对齐方式</td></tr><tr><td>textDirection</td><td>文字方向</td></tr><tr><td>style</td><td>文字样式，TextStyle类型</td></tr><tr><td>softWrap</td><td>是否换行</td></tr><tr><td>overflow</td><td>如果文字超出了行数限制，超出部分的显示方式</td></tr></tbody></table><p>overflow的值为TextOverflow枚举类型，取值如下表：</p><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>TextOverflow.clip</td><td>超出部分直接裁剪，不显示</td></tr><tr><td>TextOverflow.fade</td><td>超出部分以透明渐变方式结尾</td></tr><tr><td>TextOverflow.ellipsis</td><td>超出部分以省略号方式结尾</td></tr><tr><td>TextOverflow.visible</td><td>超出部分照常显示</td></tr></tbody></table><h2 id="text组件的样式textstyle" tabindex="-1">Text组件的样式TextStyle <a class="header-anchor" href="#text组件的样式textstyle" aria-label="Permalink to &quot;Text组件的样式TextStyle&quot;">​</a></h2><p>TextStyle常用属性如下表：</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td>Color</td><td>文本的颜色</td></tr><tr><td>backgroundColor</td><td>Color</td><td>Text文本的背景色</td></tr><tr><td>fontSize</td><td>double</td><td>字体大小</td></tr><tr><td>fontWeight</td><td>FontWeight</td><td>字体粗细</td></tr><tr><td>fontStyle</td><td>FontStyle</td><td>字体样式，如斜体</td></tr><tr><td>letterSpacing</td><td>double</td><td>文字之间的间隔</td></tr><tr><td>wordSpacing</td><td>double</td><td>单词之间的间隔</td></tr><tr><td>textBaseline</td><td>TextBaseline</td><td>文本对齐基线</td></tr><tr><td>height</td><td>double</td><td>文本的高度</td></tr><tr><td>\`shadows</td><td>List&lt;ui.Shadow&gt;\`</td><td>字体阴影</td></tr><tr><td>decoration</td><td>TextDecoration</td><td>装饰线，如下划线、删除线</td></tr><tr><td>decorationColor</td><td>Color</td><td>装饰线的颜色</td></tr><tr><td>decorationStyle</td><td>TextDecorationStyle</td><td>装饰线的样式，如波浪线、实线、虚线</td></tr><tr><td>decorationThickness</td><td>double</td><td>装饰线的粗硒</td></tr><tr><td>fontFamily</td><td>String</td><td>字体设置</td></tr></tbody></table><h2 id="richtext组件" tabindex="-1">RichText组件 <a class="header-anchor" href="#richtext组件" aria-label="Permalink to &quot;RichText组件&quot;">​</a></h2><p>RichText组件可以实现一段文字中有多种文字风格，也就是富文本。基本使用代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>RichText buildRichText(){</span></span>
<span class="line"><span>    return RichText(</span></span>
<span class="line"><span>        text:TextSpan(</span></span>
<span class="line"><span>            children:[</span></span>
<span class="line"><span>                TextSpan(text:&#39;文字片段1&#39;,style:TextStyle(color:Colors.blue)),</span></span>
<span class="line"><span>                TextSpan(text:&#39;文字片段2&#39;,style:TextStyle(color:Colors.red)),</span></span>
<span class="line"><span>                TextSpan(text:&#39;文字片段3&#39;,style:TextStyle(color:Colors.orange)),</span></span>
<span class="line"><span>        ],),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13),r=[n];function l(o,i,p,c,h,x){return d(),e("div",null,r)}const u=t(s,[["render",l]]);export{b as __pageData,u as default};
