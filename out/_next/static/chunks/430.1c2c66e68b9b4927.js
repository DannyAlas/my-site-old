"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{6430:function(c,b,a){a.r(b),a.d(b,{default:function(){return j}});var d=a(5893),e=a(7294),f=a(9477),g=a(9365),h=a(1217),i=a(1026),j=function(){var l=(0,e.useRef)(),a=(0,e.useState)(!0),m=a[0],r=a[1],b=(0,e.useState)(),c=b[0],s=b[1],j=(0,e.useState)(),t=(j[0],j[1]),n=(0,e.useState)(new f.Pa4(0,-0.5,0)),u=n[0],o=(0,e.useState)(new f.Pa4(50,10,25)),v=o[0],p=(0,e.useState)(new f.xsS),w=p[0],k=(0,e.useState)(),x=(k[0],k[1]),q=(0,e.useCallback)(function(){var a=l.current;if(a&&c){var b=a.clientWidth,d=a.clientHeight;c.setSize(b,d)}},[c]);return(0,e.useEffect)(function(){var d=l.current;if(d&&!c){var i=d.clientWidth,j=d.clientHeight,a=new f.CP7({antialias:!0,alpha:!0});a.setPixelRatio(window.devicePixelRatio),a.setSize(i,j),a.outputEncoding=f.knz,d.appendChild(a.domElement),s(a);var e=new f.cPb(5,i/j,1,100);e.position.copy(v),e.lookAt(u),t(e);var k=new f.Mig(16777215,1.5);w.add(k);var b=new g.z(e,a.domElement);b.autoRotate=!0,b.target=u,b.enableZoom=!1,b.autoRotateSpeed=.3,x(b),(function(b,c){var a=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},d=a.receiveShadow,e=a.castShadow;return new Promise(function(a,f){new h.E().load(c,function(f){var c=f.scene;c.name="pc",c.position.y=0,c.position.x=0,c.receiveShadow=d,c.castShadow=e,b.add(c),c.traverse(function(a){a.isMesh&&(a.castShadow=e,a.receiveShadow=d)}),a(c)},void 0,function(a){f(a)})})})(w,"/pc.glb",{receiveShadow:!0,castShadow:!1}).then(function(){o(),r(!1)});var m=null,n=0;function o(){if(m=requestAnimationFrame(o),(n=n<=100?n+1:n)<=100){var f,c=v,d=-Math.sqrt(1-Math.pow((f=n/120)-1,4))*Math.PI*2;e.position.y=5,e.position.x=c.x*Math.cos(d)+c.z*Math.sin(d),e.position.z=c.z*Math.cos(d)-c.x*Math.sin(d),e.lookAt(u)}else b.update();a.render(w,e)}return function(){console.log("unmount"),cancelAnimationFrame(m),a.dispose()}}},[]),(0,e.useEffect)(function(){return window.addEventListener("resize",q,!1),function(){window.removeEventListener("resize",q,!1)}},[c,q]),(0,d.jsx)(i.Oi,{ref:l,children:m&&(0,d.jsx)(i.j_,{})})}}}])