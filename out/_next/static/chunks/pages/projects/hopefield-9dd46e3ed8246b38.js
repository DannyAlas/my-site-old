(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),a=r(7294),s=r(4697);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,s=o(e,l);return a.createElement("img",c({width:r,height:t,ref:n,alt:i},s))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,l=e.fallback,h=e.src,f=e.srcSet,x=e.align,m=e.fit,p=e.loading,g=e.ignoreFallback,j=e.crossOrigin,b=o(e,u),v=null!=p||g||void 0===r&&void 0===l,y=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,c=e.onError,o=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),h=d[0],f=d[1];(0,a.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,a.useRef)(),m=(0,a.useCallback)((function(){if(r){p();var e=new Image;e.src=r,o&&(e.crossOrigin=o),t&&(e.srcset=t),l&&(e.sizes=l),n&&(e.loading=n),e.onload=function(e){p(),f("loaded"),null==i||i(e)},e.onerror=function(e){p(),f("failed"),null==c||c(e)},x.current=e}}),[r,o,t,l,i,c,n]),p=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,s.a)((function(){if(!u)return"loading"===h&&m(),function(){p()}}),[h,m,u]),u?"loaded":h}(c({},e,{ignoreFallback:v})),w=c({ref:n,objectFit:m,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==y?l||a.createElement(t.m$.img,c({as:d,className:"chakra-image__placeholder",src:r},w)):a.createElement(t.m$.img,c({as:d,src:h,srcSet:f,crossOrigin:j,loading:p,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},2769:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/hopefield",function(){return r(9605)}])},603:function(e,n,r){"use strict";r.d(n,{Et:function(){return d},HC:function(){return h},P4:function(){return u},Pg:function(){return f}});var t=r(5893),i=r(1664),a=r.n(i),s=r(5675),c=r.n(s),o=r(8527),l=r(917),u=function(e){var n=e.children,r=e.href,i=e.title,a=e.thumbnail;return(0,t.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(c(),{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(o.AB,{href:r,target:"_blank",children:(0,t.jsx)(o.xv,{mt:2,children:i})}),(0,t.jsx)(o.xv,{fontSize:14,children:n})]})})},d=function(e){var n=e.children,r=e.id,i=e.title,s=e.thumbnail;return(0,t.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(a(),{href:"/projects/".concat(r),passHref:!0,scroll:!1,children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(c(),{src:s,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(o.AB,{href:"/projects/".concat(r),children:(0,t.jsx)(o.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(o.xv,{fontSize:14,children:n})]})})})},h=function(e){var n=e.children,r=e.id,i=e.title,s=e.thumbnail;return(0,t.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(a(),{href:"/posts/".concat(r),passHref:!0,scroll:!1,children:(0,t.jsxs)(o.fG,{cursor:"pointer",children:[(0,t.jsx)(c(),{src:s,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(o.AB,{href:"/posts/".concat(r),children:(0,t.jsx)(o.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(o.xv,{fontSize:14,children:n})]})})})},f=function(){return(0,t.jsx)(l.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(2763),a=r(9008),s=r.n(a),c=r(603),o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title,a="".concat(r," - Daniel Alas");return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:a}),(0,t.jsx)("meta",{name:"twitter:title",content:a}),(0,t.jsx)("meta",{property:"og:title",content:a})]}),n,(0,t.jsx)(c.Pg,{})]})})}},3562:function(e,n,r){"use strict";var t=r(7297);function i(){var e=(0,t.Z)(["\n  text-align: justify;\n  padding-top: 1em;\n  padding-bottom: 1em;\n"]);return i=function(){return e},e}var a=r(5934).Z.p(i());n.Z=a},4662:function(e,n,r){"use strict";r.d(n,{Dx:function(){return l},WZ:function(){return u},h_:function(){return d}});var t=r(5893),i=r(1664),a=r.n(i),s=r(8527),c=r(4651),o=r(9876),l=function(e){var n=e.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(a(),{href:"/projects",passHref:!0,children:(0,t.jsx)(s.rU,{children:"Projects"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(o.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},u=function(e){var n=e.src,r=e.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:n,alt:r,mb:4})},d=function(e){var n=e.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:n})}},9605:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return l}});var t=r(5893),i=r(8527),a=r(9876),s=r(4662),c=r(3562),o=r(2857),l=!0;n.default=function(){return(0,t.jsx)(o.Z,{title:"Hopefield Neural Network",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(s.Dx,{children:["Hopefield Neural Network ",(0,t.jsx)(i.Ct,{children:"2022"})]}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(s.h_,{children:"Repository"}),(0,t.jsxs)(i.rU,{href:"https://github.com/DannyAlas/hopefeild-nn",children:["GitHub ",(0,t.jsx)(a.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(s.h_,{children:"Language"}),(0,t.jsx)("span",{children:"Python [Pygame], Jupyter Notebook"})]})]}),(0,t.jsx)(c.Z,{children:"In this project, I endeavored to create Hopfield neural network. These are a type of neural network designed to be capable of storing and retrieving many multitudes of memories. I created an implementation of a Hopfield network from scratch in a Python Jupiter Notebook. The network was trained on the MNIST handwritten dataset and used PyGame to visualize the output. I created two ways to test the capabilities of the network, firstly you can simply ask the network to draw a number. This will have the access all its memories regarding that number, and create a unique drawing of it. Secondly, you can input a scrambled up version of a number. This will have the network use it's memories of numbers to create a best guess for the original unscrambeled number."}),(0,t.jsx)(s.WZ,{src:"/images/projects/hopefield_prediction.webp",alt:"prediction"})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=2769,e(e.s=n);var n}));var n=e.O();_N_E=n}]);