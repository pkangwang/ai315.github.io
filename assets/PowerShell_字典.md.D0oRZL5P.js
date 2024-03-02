import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.84TDCN6B.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PowerShell/字典.md","filePath":"PowerShell/字典.md"}'),p={name:"PowerShell/字典.md"},e=i(`<p>字典是一种键值对的映射，有些说法也叫哈希表。</p><p>使用@符号加花括号创建一个字典：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$dic=@{name=&#39;张三&#39;;age=39}</span></span>
<span class="line"><span>echo $data</span></span></code></pre></div><p>如下示例访问字典的元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>$dic[&#39;name&#39;]   # 括号加引号访问键的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$dic.name  # 直接使用点号访问键的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$dic.keys    # 返回所有键</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$dic.values   # 返回所有值</span></span></code></pre></div><p>如下示例对字典进行增删改查：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$data.add(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;c&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加键c，值为1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]=4   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加键d，值为4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$data.containskey(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查找哈希表的键是否存在</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$data.remove(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#根据键删除元素</span></span></code></pre></div>`,7),l=[e];function t(h,c,d,k,o,r){return n(),a("div",null,l)}const _=s(p,[["render",t]]);export{E as __pageData,_ as default};
