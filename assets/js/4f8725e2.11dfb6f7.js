"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[504],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2969:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);function a(e){let{children:n,color:t}=e;return r.createElement("span",{style:{backgroundColor:t,borderBottom:"3px solid var(--ifm-color-primary)",padding:"0 0 0.25rem 0",fontWeight:"bold"}},n)}},1125:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(2949),a=t(7294);function o(e){let{children:n,color:t}=e;const{colorMode:o}=(0,r.I)();return a.createElement("span",{style:{backgroundColor:t,borderBottom:"1px solid "+("dark"===o?" #fff":"#000"),padding:"0 0 0.25rem 0",fontWeight:800}},n)}},3808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));t(2969),t(1125);const o={sidebar_position:1,author:"Roy"},i="SSL \uc801\uc6a9 (nginx)",s={unversionedId:"ssl/2",id:"ssl/2",title:"SSL \uc801\uc6a9 (nginx)",description:"\ud574\ub2f9 \uc608\uc81c\ub294 cafe24\uc5d0\uc11c SSL \uc778\uc99d\uc11c\ub97c \ubc1c\uae09 \ubc1b\uc740 \ud6c4 \ubcc4\ub3c4 \uc11c\ubc84\uc5d0 \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.",source:"@site/docs/ssl/2.mdx",sourceDirName:"ssl",slug:"/ssl/2",permalink:"/wiki/docs/ssl/2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ssl/2.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Roy"},sidebar:"tutorialSidebar",previous:{title:"Secure Sockets Layer",permalink:"/wiki/docs/ssl/1"},next:{title:"SSL \uc801\uc6a9 (docker nginx)",permalink:"/wiki/docs/ssl/3"}},l={},c=[{value:"1. \uc778\uc99d\uc11c \ud569\uce58\uae30",id:"1-\uc778\uc99d\uc11c-\ud569\uce58\uae30",level:3},{value:"2. \ud0a4\ud30c\uc77c \uc554\ud638 \uc81c\uac70",id:"2-\ud0a4\ud30c\uc77c-\uc554\ud638-\uc81c\uac70",level:3},{value:"3. \uc778\uc99d\uc11c \ud30c\uc77c nginx \uc704\uce58\uc5d0 \ub450\uae30",id:"3-\uc778\uc99d\uc11c-\ud30c\uc77c-nginx-\uc704\uce58\uc5d0-\ub450\uae30",level:3},{value:"4. nginx \uc124\uc815 \ud30c\uc77c \uc218\uc815",id:"4-nginx-\uc124\uc815-\ud30c\uc77c-\uc218\uc815",level:3},{value:"5. nginx \uc7ac\uc2dc\uc791",id:"5-nginx-\uc7ac\uc2dc\uc791",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssl-\uc801\uc6a9-nginx"},"SSL \uc801\uc6a9 (nginx)"),(0,a.kt)("p",null,"\ud574\ub2f9 \uc608\uc81c\ub294 cafe24\uc5d0\uc11c SSL \uc778\uc99d\uc11c\ub97c \ubc1c\uae09 \ubc1b\uc740 \ud6c4 \ubcc4\ub3c4 \uc11c\ubc84\uc5d0 \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"1-\uc778\uc99d\uc11c-\ud569\uce58\uae30"},"1. \uc778\uc99d\uc11c \ud569\uce58\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat ssl.crt > cert.crt\necho   >> cert.crt\ncat chain_all_ssl.crt >> cert.crt\n")),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"-----END CERTIFICATE----------BEGIN CERTIFICATE-----",(0,a.kt)("br",null),"\n\uc778\uc99d\uc11c\ub97c \ud569\uce60 \ub54c \uc544\ub798\uc640 \uac19\uc774 \ubcd1\ud569\ub418\uc5b4\uc57c \ud558\ub294\ub370, \uc704\uc640 \uac19\uc774 \ub098\uc62c \uc218 \uc788\uc5b4 \uc904\ubc14\uafc8 \ucc98\ub9ac",(0,a.kt)("br",null),"\n-----END CERTIFICATE----",(0,a.kt)("br",null),"\n------BEGIN CERTIFICATE-----",(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"2-\ud0a4\ud30c\uc77c-\uc554\ud638-\uc81c\uac70"},"2. \ud0a4\ud30c\uc77c \uc554\ud638 \uc81c\uac70"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# key \ud30c\uc77c\uc758 passphrase \uc81c\uac70\nopenssl rsa -in ssl.key -out cert.key\n")),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ud0a4 \ud30c\uc77c\uc5d0 \uc554\ud638\ub97c \uc81c\uac70\ud558\uc9c0 \uc54a\uc73c\uba74 nginx\ub97c \uc7ac\uc2dc\uc791\ud560 \ub54c\ub9c8\ub2e4 password\ub97c \ub9e4\ubc88 \uc785\ub825\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"3-\uc778\uc99d\uc11c-\ud30c\uc77c-nginx-\uc704\uce58\uc5d0-\ub450\uae30"},"3. \uc778\uc99d\uc11c \ud30c\uc77c nginx \uc704\uce58\uc5d0 \ub450\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/nginx/ssl\nsudo mv ./cert.crt /etc/nginx/ssl/\nsudo mv ./cert.key /etc/nginx/ssl/\n")),(0,a.kt)("h3",{id:"4-nginx-\uc124\uc815-\ud30c\uc77c-\uc218\uc815"},"4. nginx \uc124\uc815 \ud30c\uc77c \uc218\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/nginx/conf.d/ssl.conf\nserver {\n    listen       443 ssl;\n    server_name  my_domain.com;\n\n    ssl_certificate /etc/nginx/ssl/cert.crt;\n    ssl_certificate_key /etc/nginx/ssl/cert.key;\n\n    location / {\n        proxy_pass      http://127.0.0.1:3000;\n    }\n}\n")),(0,a.kt)("h3",{id:"5-nginx-\uc7ac\uc2dc\uc791"},"5. nginx \uc7ac\uc2dc\uc791"),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"\ud544\uc218\ub294 \ud56d\ubaa9\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc7ac\uc2dc\uc791 \uc804\uc5d0 \uc778\uc99d\uc11c\uac00 \uc62c\ubc14\ub978\uc9c0 \ub610\ub294 nginx \uc124\uc815\uc774 \uc801\uc6a9\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Modulus \uac12\uc774 \ub3d9\uc77c\ud55c\uc9c0 \ud655\uc778\nopenssl x509 -noout -modulus -in cert.crt\nopenssl rsa -noout -modulus -in cert.key\n")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Modulus \uac12\uc774 \ub3d9\uc77c\ud558\ub2e4\uba74 \uc124\uc815 \ud30c\uc77c\uc774 \uc801\uc6a9\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\nnginx -t\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart nginx\n")))}d.isMDXComponent=!0}}]);