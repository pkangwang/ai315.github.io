import{_ as i,c as e,o as n,m as t}from"./chunks/framework.84TDCN6B.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Git/最佳实践——使用git clone而不是git init.md","filePath":"Git/最佳实践——使用git clone而不是git init.md"}'),o={name:"Git/最佳实践——使用git clone而不是git init.md"},_=t("p",null,"由于大多数情况下我们是要将本地仓库推送到远程Github仓库，所以推荐先在Github初始化好仓库，然后拷贝仓库地址，使用git clone。因为这样在本地的.git文件夹内就已经包含了远程地址，之后在本地完成编辑和提交后直接使用git push就可以推送到克隆的那个仓库。",-1),s=t("p",null,"如果使用git init，就要事先使用git remote添加远程仓库，而且很容易造成本地仓库和远程仓库的冲突。",-1),c=t("p",null,"因此，推荐使用git clone而不是git init。",-1),a=[_,s,c];function l(r,g,d,p,h,m){return n(),e("div",null,a)}const G=i(o,[["render",l]]);export{f as __pageData,G as default};
