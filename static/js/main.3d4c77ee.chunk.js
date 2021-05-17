(this["webpackJsonpreact-marimo-reverie"]=this["webpackJsonpreact-marimo-reverie"]||[]).push([[0],{16:function(e,t,i){e.exports={TransitionMatchHOC:"TransitionMatchHOC_TransitionMatchHOC__2_G2D"}},22:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i.n(n),o=i(6),s=i.n(o),a=i(4),c=(i(22),i(3)),l=i(1),h=function(){return Object(n.useEffect)((function(){c.a.to("#loading-wrapper",{opacity:0,duration:1,delay:0,pointerEvents:"none"})})),Object(l.jsx)("div",{id:"loading-wrapper",children:"Marimo R\xeaverie"})},u=i(12),d=i(17),m=i(5),j="END_TRANSITION",p=r.a.createContext({SPA:{isTransitionDone:!0,dispatchTransitionType:function(){}}});function b(e,t){switch(t.type){case"START_TRANSITION":case"END_TRANSITION":return Object.assign({},e,{isTransitionDone:!0});default:return e}}var f=function(e){var t=e.children,i=Object(n.useReducer)(b,{isTransitionDone:!0}),r=Object(a.a)(i,2),o=r[0],s=r[1];return Object(l.jsx)(p.Provider,{value:{SPA:o,dispatchTransitionType:s},children:t})},O=function(e){var t=e.children,i=Object(d.a)(e,["children"]),n=r.a.useContext(p).SPA;return Object(l.jsx)(m.a,Object(u.a)(Object(u.a)({},i),{},{style:{pointerEvents:n?"default":"none"},children:t}))},v=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(O,{to:"/",children:"Marimo Reverie"})})},x=i.p+"static/media/sound-on.e2a611b6.svg",g=i.p+"static/media/question-mark.9224245e.svg",w=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)(O,{to:"/about",children:"About"}),Object(l.jsx)(O,{to:"/rules",children:Object(l.jsx)("img",{src:g})}),Object(l.jsx)(O,{to:"/",children:Object(l.jsx)("img",{src:x})})]})},y=function(){return Object(l.jsxs)("section",{className:"section-page home",children:[Object(l.jsx)(v,{}),Object(l.jsx)(O,{to:"/game",className:"btn-hl",children:"Play Game"}),Object(l.jsx)(w,{})]})},T=i.p+"static/media/real-picture.57f4429d.png",N=function(){return Object(l.jsxs)("section",{className:"section-page about",children:[Object(l.jsx)("h1",{className:"title",children:"About"}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("p",{children:"Marimo R\xeaverie is a web-browser game that connects to an actual marimo terrarium with sensors. The avatars of algae in cyberspace are constantly changing with their living environment in real time, floating around and competing with the player for generative nutrients in the browser window."}),Object(l.jsx)("img",{src:T,alt:"My Marimo"})]}),Object(l.jsx)("div",{className:"btn-wrapper",children:Object(l.jsx)(O,{to:"/",className:"btn btn-hl",children:"Got it"})})]})},C=function(){return Object(l.jsxs)("section",{className:"section-page rules",children:[Object(l.jsx)("h1",{className:"title",children:"The Rules"}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("p",{children:"You will need to compete with the algae for the nutrients floating in the window. The more nutrients you get, the bigger you will become."}),Object(l.jsx)("p",{children:"When the marimos get enough nutrients, they will split. The nutrients points will be regenerated all the time, so the game will become more and more difficult. When the marimos touch the player, the nutrients will be taken away, and the player will become smaller. I will feed the nutrition powder based on the score received by marimos."})]}),Object(l.jsx)("div",{className:"btn-wrapper",children:Object(l.jsx)(O,{to:"/",className:"btn btn-hl",children:"Got it"})})]})},S=i(15),M=i.n(S),k=i(8),E=i(9);function P(e){var t,i,n=e.windowWidth,r=e.windowHeight,o="a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map((function(e){return"#"+e})),s=[],a=10,c=[],l=5;e.myCustomRedrawAccordingToNewPropsHandler=function(e){i=e},e.setup=function(){e.createCanvas(n,r),e.noStroke(),a=Math.floor(n*r/9e4),l=Math.floor(n*r/9e4),setInterval((function(){i.started&&i.setTimer(i.timer+1)}),1e3),s=[];for(var j=0;j<a;j++)s.push(new h({position:m(),vector:e.constructor.Vector.random2D(),diameter:6*e.int(e.random(10,24)),color:o[Math.floor(e.random(o.length))]}));c=[];for(var p=0;p<l;p++)c.push(new u({position:m()}));t=new d},e.draw=function(){if(i.started){if(t.eateningTimer%10<5?e.background("#DEF0F7"):e.background("black"),e.frameCount%50===0){var n=m();c.push(new u({position:n}))}s.forEach((function(n){n.update(),n.draw(),n.chewing&&n.chewingTimer--,n.chewingTimer<=0&&(n.chewing=!1,n.chewingTimer=300),c.filter((function(e){return!e.eaten})).forEach((function(e){n.position.dist(e.position)<(n.diameter+e.diameter)/2&&(n.toSize(n.diameter+6),e.eaten=!0)})),t.diameter>6?!n.chewing&&n.position.dist(t.position)<(n.diameter+t.diameter)/2&&(n.toSize(n.diameter+6),n.chewing=!0,t.eatening=!0,t.toSize(t.diameter-6)):i.isGameOver(),n.diameter>168&&(n.toSize(90),s.push(new h({position:n.position.copy().add(20,0),vector:e.createVector(0,0),diameter:90,color:n.color})))})),c.filter((function(e){return!e.eaten})).forEach((function(e){e.draw(),t.position.dist(e.position)<(t.diameter+e.diameter)/2&&(t.toSize(t.diameter+6),e.eaten=!0)})),t.update(),t.draw(),t.eatening&&t.eateningTimer--,t.eateningTimer<=0&&(t.eatening=!1,t.eateningTimer=20),i.setNumOfMarimos(s.length)}};var h=function(){function t(e){Object(k.a)(this,t),this.position=e.position,this.vector=e.vector,this.diameter=e.diameter,this.color=e.color,this.chewing=!1,this.chewingTimer=300,this.dividing=!1,this.matrix=b(this.color,this.diameter)}return Object(E.a)(t,[{key:"draw",value:function(){f(this.matrix,this.position)}},{key:"update",value:function(){var t=this;this.position.add(this.vector),e.frameCount%900===0&&this.vector.mult(.9),(this.position.x<=0||this.position.x>n)&&(this.vector.x=-1.3*this.vector.x),(this.position.y<=0||this.position.y>r)&&(this.vector.y=-1.3*this.vector.y),s.forEach((function(e){if(t!==e&&(t.position.dist(e.position),t.diameter,e.diameter,t.position.dist(e.position)<(t.diameter+e.diameter)/2.1)){var i=e.position.copy().sub(t.position);t.vector.sub(i.mult(.2).setMag(1)),e.vector.add(i.mult(.2).setMag(1))}}));var i=2.4;this.vector.x>i&&(this.vector.x=i),this.vector.x<-2.4&&(this.vector.x=-2.4),this.vector.y>i&&(this.vector.y=i),this.vector.y<-2.4&&(this.vector.y=-2.4)}},{key:"toSize",value:function(e){this.diameter=e,this.matrix=b(this.color,this.diameter)}}]),t}(),u=function(){function e(t){Object(k.a)(this,e),this.position=t.position,this.diameter=4,this.color="#fff",this.eaten=!1,this.matrix=b(this.color,this.diameter)}return Object(E.a)(e,[{key:"draw",value:function(){f(this.matrix,this.position)}}]),e}(),d=function(){function t(i){Object(k.a)(this,t),this.position=e.createVector(0,0),this.diameter=18,this.color="#219EBC",this.eatening=!1,this.eateningTimer=20,this.matrix=b(this.color,this.diameter)}return Object(E.a)(t,[{key:"draw",value:function(){f(this.matrix,this.position)}},{key:"update",value:function(){var t=e.mouseX-this.position.x;this.position.x+=.01*t;var i=e.mouseY-this.position.y;this.position.y+=.01*i}},{key:"toSize",value:function(e){this.diameter=e,this.matrix=b(this.color,this.diameter)}}]),t}(),m=function(){return e.createVector(e.random(0,n),e.random(0,r))},j=function(e,t,i){return function(e,t){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))}(e,t)<=i},p=function(e,t,i){return j(e,t,i)&&!(j(e+1,t,i)&&j(e-1,t,i)&&j(e,t+1,i)&&j(e,t-1,i)&&j(e+1,t+1,i)&&j(e+1,t-1,i)&&j(e-1,t-1,i)&&j(e-1,t+1,i))},b=function(t,i){for(var n,r=Math.ceil(i/6)/2,o=e.lerpColor(e.color("black"),e.color(t),.6),s=e.lerpColor(e.color("black"),e.color(t),.66),a=e.lerpColor(e.color("black"),e.color(t),.9),c=t,l=e.lerpColor(e.color("white"),e.color(t),.9),h=e.lerpColor(e.color("white"),e.color(t),.8),u=[],d=0,m=-(n=2*r%2===0?2*Math.ceil(r-.5)+1:2*Math.ceil(r))/2+1;m<=n/2-1;m++){u[d]=[];for(var b=-n/2+1;b<=n/2-1;b++)j(b,m,r)?!p(b,m,r)||p(b+(b>0?1:-1),m,r)&&p(b,m+(m>0?1:-1),r)?j(b+2,m+2,1)?u[d].push(h):j(b+2,m+2,r-7)?e.random()<.3?u[d].push(h):u[d].push(l):j(b+2,m+2,r-6)?u[d].push(l):j(b+2,m+2,r-4)?e.random()<.3?u[d].push(l):u[d].push(c):j(b+1,m+1,r-3)?u[d].push(c):j(b+1,m+1,r-2)?e.random()<.3?u[d].push(c):u[d].push(a):j(b+1,m+1,r-1)?u[d].push(a):u[d].push(s):u[d].push(o):u[d].push(null);d++}return u};function f(t,i){e.push(),e.translate(i.x,i.y);for(var n=0;n<t.length;n++)for(var r=0;r<t.length;r++)if(t[n][r]){var o=6*(r-t.length/2),s=6*(n-t.length/2);e.fill(t[n][r]),e.rect(o,s,6)}e.pop()}}var I={userName:"",setUserName:function(){},userColor:"",setUserColor:function(){},userPlayedTime:"",setUserPlayedTime:function(){}},A=Object(n.createContext)(I),R=[{path:"/",Component:y},{path:"/about",Component:N},{path:"/rules",Component:C},{path:"/game",Component:function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),i=t[0],r=t[1],o=Object(n.useState)(0),s=Object(a.a)(o,2),c=(s[0],s[1]),h=Object(n.useState)(null),u=Object(a.a)(h,2),d=u[0],j=u[1],p=Object(n.useContext)(A),b=p.userName,f=p.setUserName,O=(p.userColor,p.setUserColor,p.userPlayedTime,p.setUserPlayedTime);return Object(l.jsxs)("section",{className:"section-page game",children:[Object(l.jsx)("div",{className:"data-box",children:Object(l.jsxs)("p",{children:["Timer: ",d]})}),Object(l.jsx)(M.a,{sketch:P,started:i,setNumOfMarimos:c,timer:d,setTimer:j,isGameOver:function(){O(d),Object(m.c)("/the-end")}}),i?null:Object(l.jsx)("div",{className:"modal-wrapper",children:Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{children:"Choose a color"}),Object(l.jsx)("input",{})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{children:"Enter your name"}),Object(l.jsx)("input",{defaultValue:b,onChange:function(e){return f(e.target.value)}})]}),Object(l.jsx)("a",{onClick:function(){return r(!0)},className:"btn-hl",children:"Ready"})]})})]})}},{path:"/the-end",Component:function(){var e=Object(n.useContext)(A),t=(e.userName,e.setUserName,e.userColor,e.setUserColor,e.userPlayedTime);e.setUserPlayedTime;return Object(l.jsxs)("section",{className:"section-page the-end",children:[" ",Object(l.jsx)(v,{}),Object(l.jsx)("span",{children:t}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Game Over"}),Object(l.jsx)(O,{to:"/game",className:"btn-hl",children:"Try Again"})]}),Object(l.jsx)(w,{})]})}}],U=i(33),D=i(0),_=i(16),z=i.n(_),F=function(e){var t=e.children,i=e.path,n=r.a.useContext(p).dispatchTransitionType;return Object(l.jsx)(m.b,{path:i,children:function(e){var i=e.match;return Object(l.jsx)(U.a,{in:null!==i,appear:!0,mountOnEnter:!0,unmountOnExit:!0,addEndListener:function(e,t){null!==i?(console.log("in"),n({type:"START_TRANSITION"}),c.a.to(e,{duration:.3,opacity:1,delay:.3,ease:D.b.easeInOut,onComplete:function(){n({type:j})}})):(console.log("out"),c.a.to(e,{opacity:0,duration:.3,ease:D.b.easeInOut,onComplete:function(){n({type:j}),t()}}))},children:Object(l.jsx)("div",{id:"wrap",className:z.a.TransitionMatchHOC,children:r.a.cloneElement(t,i)})})}})};var G=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),i=t[0],r=t[1],o=Object(n.useState)(""),s=Object(a.a)(o,2),c=s[0],u=s[1],d=Object(n.useState)(""),m=Object(a.a)(d,2),j=m[0],p=m[1],b=A.Provider,O={userName:i,setUserName:r,userColor:c,setUserColor:u,userPlayedTime:j,setUserPlayedTime:p};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(b,{value:O,children:Object(l.jsx)(f,{children:R.map((function(e,t){var i=e.path,n=e.Component;return Object(l.jsx)(F,{path:i,children:Object(l.jsx)(n,{})},t+i)}))})})]})},H=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,34)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),r(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root")),H()}},[[30,1,2]]]);
//# sourceMappingURL=main.3d4c77ee.chunk.js.map