import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.84TDCN6B.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/webrtc.md","filePath":"Linux/webrtc.md"}'),e={name:"Linux/webrtc.md"},i=p(`<h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>web real-time communication，网页实时通信。主要用于视频通话。</p><p>RTCPeerConnection确保打开线路，打开媒体通道。</p><p>mediaDevices.getUserMedia处理摄像头、话筒、视频和声音。</p><p>RTCDataChannel数据通道的通信。</p><p>SDP，Session Description Protocol会话描述协议，用于在p2p协商时共享彼此的IP地址和端口，以及双方都能使用的音频和视频的编码信息。</p><p>ICE，穿透Nat建立点对点通信的方法，其中会用到STUN和TURN服务器。本地主机将包发送到stun服务器。stun服务器将请求的全球IP地址和端口返回给nat内部的主机。通过这两个步骤，就可以确保通信线路，并获取可以从外部进行通信的地址和端口。stun对于穿透nat必不可少。</p><h2 id="sdp" tabindex="-1">SDP <a class="header-anchor" href="#sdp" aria-label="Permalink to &quot;SDP&quot;">​</a></h2><p>SDP是基于文本的描述协议，描述了自己的媒体信息、能接受的媒体信息。SDP不是网络协议，而是一种在用户之间传递媒体信息所遵循的标准格式，就好比markdown标准一样，规定了标题怎么写、加粗怎么加，大家都按照这个语法写文件即可，这样别人也能看懂你的markdown源码。SDP文本可以附加在HTTP报文的body中传给对方。如下是一个SDP示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>v=0</span></span>
<span class="line"><span>o=- 2397106153131073818 2 IN IP4 127.0.0.1</span></span>
<span class="line"><span>s=-</span></span>
<span class="line"><span>t=0 0</span></span>
<span class="line"><span>a=group:BUNDLE video</span></span>
<span class="line"><span>a=msid-semantic: WMS gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS</span></span>
<span class="line"><span>m=video 9 UDP/TLS/RTP/SAVPF 96 97</span></span>
<span class="line"><span>c=IN IP4 0.0.0.0</span></span>
<span class="line"><span>a=rtcp:9 IN IP4 0.0.0.0</span></span>
<span class="line"><span>a=ice-ufrag:l5KU</span></span>
<span class="line"><span>a=ice-pwd:+Sxmm3PoJUERpeHYL0HW4/T9</span></span>
<span class="line"><span>a=ice-options:trickle</span></span>
<span class="line"><span>a=fingerprint:sha-256 7C:93:85:40:01:07:91:BE:DA:64:A0:37:7E:61:CB:9D:91:9B:44:F6:C9:AC:3B:37:1C:00:15:4C:5A:B5:67:74</span></span>
<span class="line"><span>a=setup:actpass</span></span>
<span class="line"><span>a=mid:video</span></span>
<span class="line"><span>a=sendrecv</span></span>
<span class="line"><span>a=rtcp-mux</span></span>
<span class="line"><span>a=rtcp-rsize</span></span>
<span class="line"><span>a=rtpmap:96 VP8/90000</span></span>
<span class="line"><span>a=rtcp-fb:96 goog-remb</span></span>
<span class="line"><span>a=rtcp-fb:96 transport-cc</span></span>
<span class="line"><span>a=rtcp-fb:96 ccm fir</span></span>
<span class="line"><span>a=rtcp-fb:96 nack</span></span>
<span class="line"><span>a=rtcp-fb:96 nack pli</span></span>
<span class="line"><span>a=rtpmap:97 rtx/90000</span></span>
<span class="line"><span>a=fmtp:97 apt=96</span></span>
<span class="line"><span>a=ssrc-group:FID 2527104241</span></span>
<span class="line"><span>a=ssrc:2527104241 cname:JPmKBgFHH5YVFyaJ</span></span>
<span class="line"><span>a=ssrc:2527104241 msid:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS c7072509-df47-4828-ad03-7d0274585a56</span></span>
<span class="line"><span>a=ssrc:2527104241 mslabel:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS</span></span>
<span class="line"><span>a=ssrc:2527104241 label:c7072509-df47-4828-ad03-7d0274585a56</span></span></code></pre></div><h2 id="ice-candidate-连接候选项" tabindex="-1">ICE Candidate（连接候选项） <a class="header-anchor" href="#ice-candidate-连接候选项" aria-label="Permalink to &quot;ICE Candidate（连接候选项）&quot;">​</a></h2><p>candidate中文翻译为候选人，顾名思义，在WebRTC中表示连接的候选方案，因为两个用户传输可以有多个候选方案，比如有两块网卡，那么每块网卡都对应一个候选项，再比如传输层可以是TCP，也可以是UDP。</p><p>ICE Candidate 主要分为以下三种类型：</p><ul><li>host 类型：即本机内网的 IP 和端口</li><li>srflx 类型：即本机 NAT 映射后的外网的 IP 和端口</li><li>relay 类型：即中继服务器的 IP 和端口</li></ul><p>一般由以下字段组成:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>IP: xxx.xxx.xxx.xxx       \\\\IP地址</span></span>
<span class="line"><span>  port: number              \\\\端口</span></span>
<span class="line"><span>  type: host/srflx/relay    \\\\类型</span></span>
<span class="line"><span>  priority: number          \\\\优先级</span></span>
<span class="line"><span>  protocol: UDP/TCP         \\\\传输协议</span></span>
<span class="line"><span>  usernameFragment: string  \\\\访问服务的用户名</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>如下是一个客户端的ICE candidate示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sdpMid: audio, sdpMLineIndex: 0, candidate:2213672593 1 udp 2122260223 30.2.228.19 51068 typ host</span></span>
<span class="line"><span>sdpMid: video, sdpMLineIndex: 1, candidate:2213672593 1 udp 2122260223 30.2.228.19 55061 typ host</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>sdpMid: audio, sdpMLineIndex: 0, candidate:3446803041 1 tcp 1518280447 30.2.228.19 9 typ host</span></span>
<span class="line"><span>sdpMid: video, sdpMLineIndex: 1, candidate:3446803041 1 tcp 1518280447 30.2.228.19 9 typ host</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>sdpMid: video, sdpMLineIndex: 1, candidate:150963819 1 udp 41885439 182.92.80.26 54400 typ relay raddr 42.120.74.91 rport 37714</span></span>
<span class="line"><span>sdpMid: audio, sdpMLineIndex: 0, candidate:150963819 1 udp 41885439 182.92.80.26 59241 typ relay raddr 42.120.74.91 rport 49618</span></span></code></pre></div><p>双方都会提供自己的candidates给对方，双方商量出一个最优的传输方案。</p><p>candidate与SDP协议一样，也只是一种信息交流所遵循的文本格式。</p><h2 id="stun服务器" tabindex="-1">STUN服务器 <a class="header-anchor" href="#stun服务器" aria-label="Permalink to &quot;STUN服务器&quot;">​</a></h2><p>STUN 服务器的目的就是为用户找到公网地址+端口，让用户可以使用这个公网地址+端口与其他用户进行通信。</p><p>STUN 是非常轻量级的，用户可以使用 docker 建立一个 STUN 服务器。STUN 服务器通常在 3478 端口上运行，TLS 端口为 5349。由于STUN搭建的成本低廉，所消耗的资源也不多，因此有许多免费的STUN服务器。</p><p><img src="https://pic2.zhimg.com/80/v2-93b9f67687ba717100d0ad3220697475_720w.webp" alt="STUN服务器"></p>`,24),l=[i];function t(c,d,r,o,h,u){return n(),s("div",null,l)}const b=a(e,[["render",t]]);export{P as __pageData,b as default};
