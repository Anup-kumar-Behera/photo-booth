(this["webpackJsonpphoto-booth"]=this["webpackJsonpphoto-booth"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(2),i=c.n(a),r=(c(23),c.p,c(24),c(7)),o=c(16),l=c(12),d=c(13),j=c(18),h=c(17),m=c(14),b=c.n(m),u=c(3),f=c(6),O=c.n(f),p=c(15),x=c.n(p),g=c(1);O.a.setAppElement("#root");var v=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).count=0,n.ip_address=x()("public","ipv4"),n.capture=function(){var e=n.webcamRef.getScreenshot();n.setState((function(t){return{imgSrc:[].concat(Object(o.a)(t.imgSrc),[{img:e,date:new Date,deviceId:MediaDeviceInfo.deviceId}])}}))},n.remove=function(e){n.state.imgSrc.splice(n.state.imgSrc.indexOf(e),1),n.forceUpdateHandler()},n.modes=function(){n.state.count?n.setState({facingMode:"user",count:!1}):n.setState({facingMode:{exact:"environment"},count:!0})},n.handleModal=function(e){n.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{isModalOpen:!0})}))},n.state={imgSrc:[],count:!1,modalIsOpen:!1,facingMode:"user"},n.webcamRef=null,n.setRef=function(e){n.webcamRef=e},n}return Object(d.a)(c,[{key:"forceUpdateHandler",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsx)(b.a,{audio:!1,ref:this.setRef,height:400,width:500,videoConstraints:{facingMode:this.state.facingMode},screenshotFormat:"image/jpeg"})}),Object(g.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(g.jsx)("a",{className:"waves-effect waves-light btn-small b1",onClick:this.modes,children:Object(g.jsx)("span",{className:"material-icons",style:{marginTop:"4px"},children:"cached"})}),Object(g.jsx)("p",{className:"space"}),Object(g.jsx)("a",{className:"waves-effect waves-light btn-small b1",onClick:this.capture,children:Object(g.jsx)("span",{className:"material-icons",style:{marginTop:"4px"},children:"camera_enhance"})})]}),Object(g.jsx)(u.a,{children:Object(g.jsx)("div",{className:"flex-container scrollbar",children:this.state.imgSrc.map((function(t,c){return Object(g.jsxs)("div",{className:"show-image",children:[Object(g.jsx)("a",{href:t.img,children:Object(g.jsx)("img",{src:t.img,className:"rounded img border border-info",alt:""})}),Object(g.jsxs)("div",{className:"dropup",children:[Object(g.jsx)("a",{href:"#",className:"dropbtn",children:Object(g.jsx)("span",{className:"material-icons",children:"more_vert"})}),Object(g.jsxs)("div",{className:"dropup-content",children:[Object(g.jsx)("a",{href:t.img,download:"image 101",children:Object(g.jsx)("span",{className:"material-icons",children:"download"})}),Object(g.jsx)("a",{href:"#",onClick:function(){return e.remove(t)},children:Object(g.jsx)("span",{className:"material-icons",children:"delete"})}),Object(g.jsx)("a",{href:"#",onClick:function(){return e.handleModal(t)},children:Object(g.jsx)("span",{className:"material-icons",children:"info"})}),Object(g.jsx)("div",{className:"d-flex mx-auto",children:Object(g.jsxs)(O.a,{isOpen:e.state.isModalOpen,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return e.setState({isModalOpen:!1})},style:{content:{color:"black"}},className:"modal-content",children:[Object(g.jsxs)("p",{children:["Date & time:  ",Object(g.jsx)("strong",{children:t.date.toString()})]}),Object(g.jsxs)("p",{children:["Ip Address: ",Object(g.jsx)("strong",{children:e.ip_address})]}),Object(g.jsx)("button",{onClick:function(){return e.setState({isModalOpen:!1})},children:"Close"})]})})]})]})]},c)}))})})]})}}]),c}(n.Component);var N=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(v,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(u.b,{children:Object(g.jsx)(N,{})})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.ff693d7c.chunk.js.map