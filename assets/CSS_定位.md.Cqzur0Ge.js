import{_ as t,c as e,o as i,a2 as l}from"./chunks/framework.84TDCN6B.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/定位.md","filePath":"CSS/定位.md"}'),o={name:"CSS/定位.md"},s=l("<ul><li>static | 没有定位，此时设置 top, bottom, left, right没有作用</li><li>relative | 相对于本来所在的位置</li><li>absolute | 相对已定位的父元素</li><li>fixed | 相对视口的定位</li><li>sticky | 粘性定位，表现随着用户的滚动情况而定。</li></ul><p>默认，表示元素在它应该的位置，没有定位。</p><p><strong>三者的区别</strong></p><p>relative、absolute和fixed的区别简单来说就是：</p><ul><li>relative相对于自己本来的位置进行了偏移</li><li>absolute表现为距离页面（body）左上角的位置永远不会改变。</li><li>fixed表现为距离屏幕左上角的位置永远不会改变（假设不改变浏览器窗口的位置和大小）。</li></ul><p><strong>sticky 定位</strong></p><p>sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。</p><p>当页面规定没有超出目标区域时，它的行为就像 position:relative；当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。</p>",8),a=[s];function _(r,p,n,c,d,f){return i(),e("div",null,a)}const m=t(o,[["render",_]]);export{S as __pageData,m as default};
