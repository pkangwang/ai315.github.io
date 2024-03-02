import{_ as l,c as i,o as P,a2 as e}from"./chunks/framework.84TDCN6B.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/TCP IP.md","filePath":"Linux/TCP IP.md"}'),a={name:"Linux/TCP IP.md"},t=e('<h2 id="osi七层模型" tabindex="-1">OSI七层模型 <a class="header-anchor" href="#osi七层模型" aria-label="Permalink to &quot;OSI七层模型&quot;">​</a></h2><p>将网络分为几个层次，每个层次都有特定独立的功能，每层独立实现、互不干扰。这就是TCP/IP的基础——OSI七层网络协议。</p><ul><li>第一层 物理层</li></ul><p>由于网络传输介质只能传送0与1这种比特位，因此物理层必须定义所使用的传输设备的电压与信号灯，同时还必须了解数据帧转换成比特流的编码方式，最后连接实际传输介质并发送/接收比特信号。</p><ul><li>第二层 数据链路层</li></ul><p>这一层是比较特殊的一个层，因为其下层都是实体的定义，而其上层则是软件封装的定义。因此第二层又分为两个子层进行数据的转换操作。在偏硬件部分，主要负责的MAC（Media Access Control），我们称这个数据包裹为MAC数据帧（frame），MAC是网络接口设备所能处理的主要数据包裹，这也是最终被物理层编码成比特流的数据。MAC必须要经过通信协议来取得网络介质的使用权，目前最常使用的则是IEEE 802.3的以太网络协议。 至于偏向软件的部分则是由逻辑链路层（Logical Link Control，LLC）所控制，主要在多任务处理来自上层的数据包数据（packet）并转成MAC的格式，负责的工作包括信息交换、流量控制、失误问题的处理等。</p><ul><li>第三层 网络层</li></ul><p>这一层就是IP（Internet Protocol）层，即路由协议层。同时也定义出计算机之间的连接建立、终止与维持、数据包的传输路径选择等。</p><ul><li>第四层 传输层</li></ul><p>这一个分层定义了发送端与接收端的连接技术（如TCP、UDP技术），同时包括该技术的数据包格式、数据包的发送、流程的控制、传输过程的侦测检查与重新传送等，以确保各个资料数据包可以正确无误的到底目的端。</p><ul><li>第五层 会话层</li></ul><p>在这个层次当中主要定义了两个地址之间的连接信道的连接与中断，此外，也可建立应用程序之间的会话、提供其他加强型服务如网络管理、建立与断开、会话控制等。如果说传输层是在判断数据包是否可以正确的到达目标，那么会话层则是在确定网络服务建立连接的确认。</p><ul><li>第六层 表示层</li></ul><p>我们通过应用程序生成出来的数据格式不一定符合网络传输的标准编码格式，所以，在这个层次当中，主要的操作是：将来自本地端应用程序的数据格式转换（或者重新编码）为网络的标准格式，然后再交给下面的传输层等的协议来进行处理。所以，在这个层次上面主要定义的是网络服务（或程序）之间的数据格式的转换，包括数据的加解密也是在这个层次上处理。</p><ul><li>第七层 应用层</li></ul><p>应用层本身不属于应用程序所有，而是在定义应用程序如何进入该层的沟通接口，以将数据接收或发送给应用程序，并最终展示给用户。</p><h2 id="tcp-ip" tabindex="-1">TCP/IP <a class="header-anchor" href="#tcp-ip" aria-label="Permalink to &quot;TCP/IP&quot;">​</a></h2><p>不过，事实上，OSI七层协议只是一个参考的模型，目前并没有什么知名的操作系统严格按照OSI七层协议实现。不过，OSI七层模型可以认为是TCP/IP的简化模型，将原来的七层简化为四层，实际的互联网程序代码都是基于TCP/IP模型。OSI七层协议与TCP/IP协议的对应关系如下：</p><ul><li>将最底下两层（物理层和链路层）简化为一层——网络接口层</li><li>OSI的网络层还是对应TCP/IP的网络层</li><li>OSI的传输层还是对应TCP/IP的传输层</li><li>将最上三层（会话层、表示层、应用层）简化为一层——应用层</li></ul><p>TCP/IP每层的相关通信协议与标准如下：</p><ul><li>网络接口层：WAN、LAN、ARP</li><li>网络层：IP、ICMP</li><li>传输层：TCP、UDP</li><li>应用层：HTTP(s)、FTP、SMTP、POP3、NFS、SSH</li></ul><p>拿一个访问网页的例子来演示TCP/IP协议的工作：</p><ul><li>应用程序阶段：打开浏览器，在地址栏输入网址，按下回车。此时网址信息与相关数据会被浏览器打包成一个数据包，向下传给应用层。</li><li>应用层：由应用层提供的HTTP通信协议，将来自浏览器的数据封装起来，并给予一个应用层报头，再向传输层丢去。</li><li>传输层：由于HTTP为可靠连接，因此将该数据包丢入TCP封装内，并给予一个TCP封装的报头，向网络层丢去。</li><li>网络层：将TCP数据封装到IP数据包内，再给予一个IP报头（主要就是来源于目标的IP），向网络接口层丢去。</li><li>网络接口层：如果使用以太网络事，此时IP会依据CSMA/CD的标准，封装到MAC数据帧中，并给予MAC帧头，再转成比特流后，利用传输介质发送到远程主机上。</li><li>等到目的主机收到数据包后，再以相反的方向拆解开头，每次交给对应的层次进行分析，最后WWW服务器软件获知你想要的数据，再取得正确的资料后，又遵循上述流程，一层一层的封装起来，最后传送到你的浏览器上。</li></ul>',23),o=[t];function p(r,C,I,T,n,u){return P(),i("div",null,o)}const _=l(a,[["render",p]]);export{s as __pageData,_ as default};
