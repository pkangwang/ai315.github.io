import{_ as t,c as e,o as s,a2 as i}from"./chunks/framework.84TDCN6B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/OAuth.md","filePath":"Linux/OAuth.md"}'),a={name:"Linux/OAuth.md"},c=i(`<p>OAuth 是 Opne Authorizations的简写。</p><p>openid是微信用户在公众号appid下的唯一用户标识（appid不同，则获取到的openid就不同）</p><p><img src="https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f0708ca1c2b2ceb24b899a901f285?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto" alt="OAuth | 1200"></p><ul><li>AppID 应用ID</li><li>AppSecret 应用的密钥</li><li>Code 临时票据</li><li>返回access_token</li></ul><h2 id="github-授权" tabindex="-1">github 授权 <a class="header-anchor" href="#github-授权" aria-label="Permalink to &quot;github 授权&quot;">​</a></h2><p>打开<a href="https://github.com/settings/developers" target="_blank" rel="noreferrer">https://github.com/settings/developers</a> 注册一个OAuth应用。需要填写如下信息：</p><ul><li>Application Name：为应用取个名字。</li><li>homepageURL：主页地址</li><li>Authorization Callback URL为回调地址，当用户同意授权后，会回调该地址，并将授权码拼接到地址后面。</li><li></li></ul><p>注册完毕后会得到Client ID和Client Secret。</p><p>获取授权码请求路径 ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>GET  https://github.com/login/oauth/authorize?client_id=\${clientId}&amp;redirect_uri=\${redirect_uri}</span></span></code></pre></div><p>替换成应用的clientId和redirect_url。访问到授权服务器会重定向到redirect_url，并且在地址后面拼接授权码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>POST  https://github.com/login/oauth/access_token</span></span></code></pre></div><p>设置Accept: application/json。</p><p>带上body：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	code: 授权码</span></span>
<span class="line"><span>	client_id: your_client_id,</span></span>
<span class="line"><span>	client_secret: your_secret_id,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>得到Access Token，通过此令牌得到用户的信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Authorization: Bearer OAUTH-TOKEN</span></span>
<span class="line"><span>GET https://api.github.com/user</span></span></code></pre></div><h2 id="access-token" tabindex="-1">Access Token <a class="header-anchor" href="#access-token" aria-label="Permalink to &quot;Access Token&quot;">​</a></h2><p>最终的目的是获得一个Access Token，Access Token 唯一标识用户。</p><p>使用Refresh Token 获得一个新的Access Token。</p><p>三个地址：</p><ul><li>请求授权地址，例如 <code>授权服务器主机名/auth/login</code> 参数 client_id redict_id，请求后会打开授权页面</li><li>点击后，授权服务器返回的地址，即回调地址（携带Code）</li><li>请求回调地址，会得到Code</li><li>请求token地址，例如 <code>授权服务器主机名/auto/access_token</code> 参数Code + client_id + client_secret</li><li>获取Access_token</li><li>通过Access Token获取用户的OpenID</li></ul><h2 id="微信授权" tabindex="-1">微信授权 <a class="header-anchor" href="#微信授权" aria-label="Permalink to &quot;微信授权&quot;">​</a></h2><p>参考 ： <a href="https://blog.csdn.net/qq_36389060/article/details/124047449" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_36389060/article/details/124047449</a></p><p>获取 access_token 后可以进行哪些操作？</p><p>开发者可通过 OpenID 来获取用户基本信息</p><p><strong>Github授权登陆流程</strong></p><table><thead><tr><th>步骤</th><th>请求方式</th><th>请求URL</th><th>请求参数</th><th>返回内容</th></tr></thead><tbody><tr><td>1</td><td>GET</td><td><code>https://github.com/login/oauth/authorize</code></td><td>client-id</td><td>redict-url</td></tr><tr><td>2</td><td>GET</td><td><code>redict_url</code></td><td>无</td><td>request-code</td></tr><tr><td>3</td><td>POST</td><td><code>https://github.com/login/oauth/access_token</code></td><td>client-id、client-secret、request-code</td><td>access-token</td></tr><tr><td>4</td><td>GET</td><td><code>https://api.github.com/user</code></td><td>请求头中添加access-token</td><td>github-id、github-url等GitHub用户信息</td></tr></tbody></table><p><strong>微信授权登陆流程</strong></p><p>打开微信开发平台，地址：</p><ul><li>GET <code>https://open.weixin.qq.com/connect/qrconnect</code> | client-id | redict-url | 授权登陆微信的页面 |</li><li>| 2 | GET | <code>redict_url</code> | 无 | request-code | |</li><li>| 3 | POST | <code>https://api.weixin.qq.com/sns/oauth2/access_token</code> | appid、secret、request-code | access-token、refresh-token | |</li><li>| 4 | GET | <code>https://api.weixin.qq.com/sns/userinfo</code> | 请求头中添加access-token | 微信用户个人信息 | |</li><li>| 5 | GET | <code>https://api.weixin.qq.com/sns/oauth2/refresh_token</code> | appid、refresh-token | 新的access-token | |</li></ul>`,31),n=[c];function o(p,d,l,r,h,u){return s(),e("div",null,n)}const b=t(a,[["render",o]]);export{_ as __pageData,b as default};
