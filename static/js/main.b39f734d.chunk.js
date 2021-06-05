(this["webpackJsonpreact-marimo-reverie"]=this["webpackJsonpreact-marimo-reverie"]||[]).push([[0],{19:function(e,t,s){e.exports={TransitionMatchHOC:"TransitionMatchHOC_TransitionMatchHOC__2_G2D"}},26:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(2),r=s.n(i),n=s(8),a=s.n(n),o=(s(26),s(3)),c=s(0),l=function(){return Object(i.useEffect)((function(){o.a.to("#loading-wrapper",{duration:1,delay:3,opacity:0,pointerEvents:"none"}),o.a.to(".loader",{duration:1,delay:2,opacity:0})}),[]),Object(c.jsx)("div",{id:"loading-wrapper",children:Object(c.jsxs)("div",{className:"loader",children:[Object(c.jsx)("span",{children:"M"}),Object(c.jsx)("span",{children:"a"}),Object(c.jsx)("span",{children:"r"}),Object(c.jsx)("span",{children:"i"}),Object(c.jsx)("span",{children:"m"}),Object(c.jsx)("span",{children:"o"}),Object(c.jsx)("span",{children:"_"}),Object(c.jsx)("span",{children:"R"}),Object(c.jsx)("span",{children:"\xea"}),Object(c.jsx)("span",{children:"v"}),Object(c.jsx)("span",{children:"e"}),Object(c.jsx)("span",{children:"r"}),Object(c.jsx)("span",{children:"i"}),Object(c.jsx)("span",{children:"e"})]})})},u=s(16),h=s(21),d=s(4),p=s(5),m="END_TRANSITION",j=r.a.createContext({SPA:{isTransitionDone:!0,dispatchTransitionType:function(){}}});function b(e,t){switch(t.type){case"START_TRANSITION":case"END_TRANSITION":return Object.assign({},e,{isTransitionDone:!0});default:return e}}var f=function(e){var t=e.children,s=Object(i.useReducer)(b,{isTransitionDone:!0}),r=Object(p.a)(s,2),n=r[0],a=r[1];return Object(c.jsx)(j.Provider,{value:{SPA:n,dispatchTransitionType:a},children:t})},v=s(7),x=v.basepath,g=function(e){var t=e.children,s=e.to,i=Object(h.a)(e,["children","to"]),n=r.a.useContext(j).SPA,a=Object(d.d)();return Object(c.jsx)(d.a,Object(u.a)(Object(u.a)({},i),{},{to:x+s,state:{prevPath:a.pathname},style:{pointerEvents:n?"default":"none"},children:t}))},O=s(6),y=s.n(O),w=s.p+"static/media/clock.53cecabe.svg",C=function(e){var t=Math.floor(e/3600)%60,s=Math.floor(e/60)%60,i=e%60;return"".concat(t<10?"0".concat(t):t,":").concat(s<10?"0".concat(s):s,":").concat(i<10?"0".concat(i):i)},N=function(e){return Object(c.jsxs)("header",{className:e.mode,children:[Object(c.jsxs)(g,{to:"/",className:"logo",children:[" ",Object(c.jsx)("span",{children:"Marimo"}),Object(c.jsx)("span",{children:"R\xeaverie"})]}),-1!==e.time?Object(c.jsxs)("div",{className:"time",children:[Object(c.jsx)("img",{src:w,alt:""}),Object(c.jsx)("span",{children:C(e.time)})]}):null]})};N.propTypes={mode:y.a.string,time:y.a.number},N.defaultProps={mode:"normal",time:-1};var T=N,k=s.p+"static/media/sound-on.e2a611b6.svg",P=s.p+"static/media/question-mark.9224245e.svg",S=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)(g,{to:"/about",children:"About"}),Object(c.jsx)(g,{to:"/rules",children:Object(c.jsx)("img",{src:P})}),Object(c.jsx)(g,{to:"/",children:Object(c.jsx)("img",{src:k})})]})},M=function(){return Object(c.jsxs)("section",{className:"section-page home",children:[Object(c.jsx)(T,{}),Object(c.jsx)(g,{to:"/game",className:"btn btn-hl",children:"Play Game"}),Object(c.jsx)(S,{})]})},E=s.p+"static/media/real-picture.57f4429d.png",D=function(){var e=Object(d.d)();return Object(c.jsxs)("section",{className:"section-page about",children:[Object(c.jsx)("h1",{className:"title",children:"About"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{children:"Marimo R\xeaverie is a web-browser game that connects to an actual marimo terrarium with sensors. The avatars of algae in cyberspace are constantly changing with their living environment in real time, floating around and competing with the player for generative nutrients in the browser window."}),Object(c.jsx)("img",{src:E,alt:"My Marimo"})]}),Object(c.jsx)("div",{className:"btn-wrapper",children:e.state?Object(c.jsx)("a",{onClick:function(){return Object(d.c)(-1)},className:"btn btn-hl",children:"Got it"}):Object(c.jsx)(g,{to:"/",className:"btn btn-hl",children:"Got it"})})]})},I=function(){var e=Object(d.d)();return Object(c.jsxs)("section",{className:"section-page rules",children:[Object(c.jsx)("h1",{className:"title",children:"The Rules"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{children:"You will need to compete with the algae for the nutrients floating in the window. The more nutrients you get, the bigger you will become."}),Object(c.jsx)("p",{children:"When the marimos get enough nutrients, they will split. The nutrients points will be regenerated all the time, so the game will become more and more difficult. When the marimos touch the player, the nutrients will be taken away, and the player will become smaller. I will feed the nutrition powder based on the score received by marimos."})]}),Object(c.jsx)("div",{className:"btn-wrapper",children:e.state?Object(c.jsx)("a",{onClick:function(){return Object(d.c)(-1)},className:"btn btn-hl",children:"Got it"}):Object(c.jsx)(g,{to:"/",className:"btn btn-hl",children:"Got it"})})]})},U=s(14),_=s.n(U),A=s(20),R=s(11),F=s(12);function z(e){var t=e.windowWidth,s=e.windowHeight,i="a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map((function(e){return"#"+e})),r=[],n=10,a=[],o=5,c=50,l=null,u=[],h={},d=null,p=null,m=3,j=!1;e.myCustomRedrawAccordingToNewPropsHandler=function(e){h.clickedStart!==e.clickedStart&&e.clickedStart&&b(),h=e},e.setup=function(){e.frameRate(30),e.createCanvas(t,s),e.noStroke();var a=t*s;n=Math.floor(a/9e4),o=Math.floor(a/9e4),c=Math.floor(4e7/a);for(var u=0;u<n;u++)r.push(new f({position:O(),vector:e.constructor.Vector.random2D(),diameter:6*e.int(e.random(10,24)),color:i[Math.floor(e.random(i.length))]}));l=new g};var b=function(){console.log("starttedd"),m=3,p=setInterval((function(){if(m>1)m--;else{clearInterval(p);for(var e=0;e<o;e++)a.push(new v({position:O()}));d=setInterval((function(){h.setTime((function(e){return e+1}))}),1e3/60),j=!0}}),1e3)};e.draw=function(){if(j&&l.eateningTimer%10>5?e.background("black"):e.background("#DEF0F7"),j&&e.frameCount%c===0){var i=O();a.push(new v({position:i}))}r.forEach((function(t,s){if(t.update(),t.draw(),r.forEach((function(e,i){if(s>i&&y(e.position,t.position,e.diameter,t.diameter)){var r=t.position.copy().sub(e.position);e.vector.sub(r.mult(.2).setMag(1)),t.vector.add(r.mult(.2).setMag(1))}})),a.filter((function(e){return!e.eaten})).forEach((function(e){y(t.position,e.position,t.diameter,e.diameter)&&(t.toSize(t.diameter+6),e.eaten=!0)})),j)if(l.diameter>6){if(y(t.position,l.position,t.diameter,l.diameter)){t.toSize(t.diameter+6),l.eatening=!0,l.toSize(l.diameter-6);var i=t.position.copy().sub(l.position);l.acceleration.sub(i.mult(6)),t.vector.add(i.mult(.1).setMag(1))}}else clearInterval(d),h.isGameOver();if(t.diameter>=192){var n=new f({position:t.position.copy().add(20,0),vector:e.createVector(0,0),diameter:0,color:t.color});t.dividingCount=-8,n.dividingCount=8,r.push(n)}if(e.random()<.01){var o=t.diameter/2,c=e.random(-o,o);u.push(new x({position:t.position.copy().add(c),vector:e.createVector(0,e.random(-.5,-5)),diameter:6*e.floor(e.random(1,3)),opacity:e.random(.1,1)}))}})),a.filter((function(e){return!e.eaten})).forEach((function(e){e.draw(),y(l.position,e.position,l.diameter,e.diameter)&&(l.toSize(l.diameter+6),e.eaten=!0)})),u.forEach((function(e){e.draw(),e.update()})),u=u.filter((function(e){return e.position.y>-s/2})),l.update(),l.draw(),l.eatening&&l.eateningTimer--,l.eateningTimer<=0&&(l.eatening=!1,l.eateningTimer=25),j||(e.push(),e.textSize(100),e.text(m,t/2,s/2),e.pop())};var f=function(){function i(e){Object(R.a)(this,i),this.position=e.position,this.vector=e.vector,this.diameter=e.diameter,this.color=e.color,this.dividingCount=0,this.matrix=N(this.color,this.diameter)}return Object(F.a)(i,[{key:"draw",value:function(){k(this.matrix,this.position)}},{key:"update",value:function(){this.position.add(this.vector),e.frameCount%900===0&&this.vector.mult(.9),0!==this.dividingCount&&(this.dividingCount>0?(this.toSize(this.diameter+12),this.dividingCount--):(this.toSize(this.diameter-12),this.dividingCount++)),(this.position.x<=0||this.position.x>t)&&(this.vector.x=-1.3*this.vector.x),(this.position.y<=0||this.position.y>s)&&(this.vector.y=-1.3*this.vector.y);var i=2.4;this.vector.x>i&&(this.vector.x=i),this.vector.x<-2.4&&(this.vector.x=-2.4),this.vector.y>i&&(this.vector.y=i),this.vector.y<-2.4&&(this.vector.y=-2.4)}},{key:"toSize",value:function(e){this.diameter=e,this.matrix=N(this.color,this.diameter)}}]),i}(),v=function(){function e(t){Object(R.a)(this,e),this.position=t.position,this.diameter=4,this.color="#6B705C",this.eaten=!1,this.matrix=T(this.color,this.diameter)}return Object(F.a)(e,[{key:"draw",value:function(){k(this.matrix,this.position)}}]),e}(),x=function(){function e(t){Object(R.a)(this,e),this.position=t.position,this.vector=t.vector,this.diameter=t.diameter,this.color="rgba(255, 255, 255, ".concat(t.opacity,")"),this.matrix=T(this.color,this.diameter)}return Object(F.a)(e,[{key:"draw",value:function(){k(this.matrix,this.position)}},{key:"update",value:function(){this.position.y+=this.vector.y}}]),e}(),g=function(){function t(s){Object(R.a)(this,t),this.position=e.createVector(0,0),this.vector=e.createVector(0,0),this.acceleration=e.createVector(0,0),this.diameter=18,this.color="black",this.eatening=!1,this.eateningTimer=25,this.matrix=N(this.color,this.diameter)}return Object(F.a)(t,[{key:"draw",value:function(){k(this.matrix,this.position)}},{key:"update",value:function(){h.userColor!==this.color&&(this.color=h.userColor,this.matrix=N(this.color,this.diameter)),this.vector.add(this.acceleration),this.acceleration.mult(.9);var t=e.mouseX-this.position.x,s=e.mouseY-this.position.y;if(e.abs(t)<6&&e.abs(s)<6&&e.abs(this.vector.x)<6&&e.abs(this.vector.y)<6)this.position.x=e.mouseX,this.position.y=e.mouseY;else{var i=e.createVector(t,s);this.vector.add(i.setMag(180)).mult(.03),this.position.add(this.vector)}j&&h.setUserPath((function(t){return[].concat(Object(A.a)(t),[{x:e.mouseX,y:e.mouseY}])}))}},{key:"toSize",value:function(e){this.diameter=e,this.matrix=N(this.color,this.diameter)}}]),t}(),O=function(){return e.createVector(e.random(0,t),e.random(0,s))},y=function(t,s,i,r){var n=(i+r)/2;return e.abs(t.x-s.x)<=n&&e.abs(t.y-s.y)<=n&&t.dist(s)<n},w=function(e,t,s){return function(e,t){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))}(e,t)<=s},C=function(e,t,s){return w(e,t,s)&&!(w(e+1,t,s)&&w(e-1,t,s)&&w(e,t+1,s)&&w(e,t-1,s)&&w(e+1,t+1,s)&&w(e+1,t-1,s)&&w(e-1,t-1,s)&&w(e-1,t+1,s))},N=function(t,s){for(var i=Math.ceil(s/6)/2,r=e.lerpColor(e.color("black"),e.color(t),.6),n=e.lerpColor(e.color("black"),e.color(t),.66),a=e.lerpColor(e.color("black"),e.color(t),.9),o=t,c=e.lerpColor(e.color("white"),e.color(t),.9),l=e.lerpColor(e.color("white"),e.color(t),.8),u=2*i%2===0?2*Math.ceil(i-.5)+1:2*Math.ceil(i),h=[],d=0,p=-u/2+1;p<=u/2-1;p++){h[d]=[];for(var m=-u/2+1;m<=u/2-1;m++)w(m,p,i)?!C(m,p,i)||C(m+(m>0?1:-1),p,i)&&C(m,p+(p>0?1:-1),i)?w(m+2,p+2,1)?h[d].push(l):w(m+2,p+2,i-7)?e.random()<.3?h[d].push(l):h[d].push(c):w(m+2,p+2,i-6)?h[d].push(c):w(m+2,p+2,i-4)?e.random()<.3?h[d].push(c):h[d].push(o):w(m+1,p+1,i-3)?h[d].push(o):w(m+1,p+1,i-2)?e.random()<.3?h[d].push(o):h[d].push(a):w(m+1,p+1,i-1)?h[d].push(a):h[d].push(n):h[d].push(r):h[d].push(null);d++}return h},T=function(e,t){for(var s=Math.ceil(t/6)/2,i=2*s%2===0?2*Math.ceil(s-.5)+1:2*Math.ceil(s),r=[],n=0,a=-i/2+1;a<=i/2-1;a++){r[n]=[];for(var o=-i/2+1;o<=i/2-1;o++)w(o,a,s)?r[n].push(e):r[n].push(null);n++}return r},k=function(t,s){e.push(),e.translate(s.x,s.y);for(var i=0;i<t.length;i++)for(var r=0;r<t.length;r++)if(t[i][r]){var n=6*(r-t.length/2),a=6*(i-t.length/2);e.fill(t[i][r]),e.rect(n,a,6)}e.pop()}}var G=["#219EBC","#FFB703","#DC2F02","#560BAD"],V={userName:"",setUserName:function(){},userColor:"",setUserColor:function(){},userPlayedTime:-1,setUserPlayedTime:function(){},userPath:[],setUserPath:function(){}},H=Object(i.createContext)(V),$=function(e){var t=e.children,s=Object(i.useState)(""),r=Object(p.a)(s,2),n=r[0],a=r[1],o=Object(i.useState)(G[0]),l=Object(p.a)(o,2),u=l[0],h=l[1],d=Object(i.useState)(-1),m=Object(p.a)(d,2),j=m[0],b=m[1],f=Object(i.useState)([]),v=Object(p.a)(f,2),x={userName:n,setUserName:a,userColor:u,setUserColor:h,userPlayedTime:j,setUserPlayedTime:b,userPath:v[0],setUserPath:v[1]};return Object(c.jsx)(H.Provider,{value:x,children:t})},B=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),s=t[0],r=t[1],n=Object(i.useState)(0),a=Object(p.a)(n,2),o=(a[0],a[1]),l=Object(i.useContext)(H),u=l.userName,h=l.setUserName,m=l.userColor,j=l.setUserColor,b=l.userPlayedTime,f=l.setUserPlayedTime,x=(l.userPath,l.setUserPath);return Object(i.useEffect)((function(){f(0),x([])}),[]),Object(c.jsxs)("section",{className:"section-page game",children:[Object(c.jsx)(T,{mode:"game",time:b}),Object(c.jsx)(_.a,{sketch:z,clickedStart:s,setNumOfMarimos:o,time:b,setTime:f,setUserPath:x,userColor:m,isGameOver:function(){Object(d.c)(v.basepath+"/the-end")}}),s?null:Object(c.jsx)("div",{className:"modal-wrapper",children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{children:"Select a color"}),Object(c.jsx)("div",{className:"select-items",children:G.map((function(e){return Object(c.jsx)("div",{style:{backgroundColor:e},onClick:function(){return j(e)},className:e===m?"select-item active":"select-item"})}))})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{children:"Enter your name"}),Object(c.jsx)("input",{defaultValue:u,onChange:function(e){return h(e.target.value)}})]}),Object(c.jsx)("div",{className:"btn-wrapper",children:Object(c.jsx)("a",{onClick:function(){return r(!0)},className:"btn btn-hl",children:"Ready"})})]})})]})};function W(e){var t=e.windowWidth,s=e.windowHeight,i={},r=0;e.myCustomRedrawAccordingToNewPropsHandler=function(e){i=e},e.setup=function(){e.createCanvas(t,s),e.noStroke(),r=0},e.draw=function(){e.fill(i.userColor),r<i.userPath.length&&(e.circle(i.userPath[r].x,i.userPath[r].y,3),r++)}}var Y=function(){var e=Object(i.useContext)(H),t=(e.userName,e.setUserName,e.userColor),s=(e.setUserColor,e.userPlayedTime),r=(e.setUserPlayedTime,e.userPath);return Object(c.jsxs)("section",{className:"section-page the-end",children:[" ",Object(c.jsx)(T,{time:s}),r.length?Object(c.jsx)(_.a,{sketch:W,userPath:r,userColor:t}):null,Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"Game Over"}),Object(c.jsx)(g,{to:"/game",className:"btn btn-hl",children:"Try Again"})]}),Object(c.jsx)(S,{})]})},J=v.basepath,L=[{path:J+"/",Component:M},{path:J+"/about",Component:D},{path:J+"/rules",Component:I},{path:J+"/game",Component:B},{path:J+"/the-end",Component:Y}],X=s(37),q=s(1),K=s(19),Q=s.n(K),Z=function(e){var t=e.children,s=e.path,i=r.a.useContext(j).dispatchTransitionType;return Object(c.jsx)(d.b,{path:s,children:function(e){var s=e.match;return Object(c.jsx)(X.a,{in:null!==s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,addEndListener:function(e,t){null!==s?(i({type:"START_TRANSITION"}),o.a.to(e,{duration:.3,opacity:1,delay:.3,ease:q.b.easeInOut,onComplete:function(){i({type:m})}})):o.a.to(e,{opacity:0,duration:.3,ease:q.b.easeInOut,onComplete:function(){i({type:m}),t()}})},children:Object(c.jsx)("div",{id:"wrap",className:Q.a.TransitionMatchHOC,children:r.a.cloneElement(t,s)})})}})};var ee=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)($,{children:Object(c.jsx)(f,{children:L.map((function(e,t){var s=e.path,i=e.Component;return Object(c.jsx)(Z,{path:s,children:Object(c.jsx)(i,{})},t+s)}))})})]})},te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),r(e),n(e),a(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ee,{})}),document.getElementById("root")),te()},7:function(e){e.exports=JSON.parse('{"name":"react-marimo-reverie","version":"0.1.0","private":true,"homepage":"http://chentingjuan.github.io/react-marimo-reverie","_homepage":"./","basepath":"/react-marimo-reverie","dependencies":{"@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@reach/router":"^1.3.4","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.11.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.5.2","file-loader":"6.1.1","fs-extra":"^9.0.1","gsap":"^3.6.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","node-sass":"^5.0.0","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.3","react-dom":"^17.0.2","react-p5-wrapper":"^2.4.0","react-refresh":"^0.8.3","react-transition-group":"^4.4.1","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.1","webpack-manifest-plugin":"2.2.0","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest","plugin:react-pug/all"],"plugins":["react-pug"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"babel-plugin-transform-react-pug":"^7.0.1","eslint-plugin-react-pug":"^0.8.4","gh-pages":"^3.1.0"},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"/Users/juan/Projects/react-marimo-reverie/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"],"plugins":["transform-react-pug"]}}')}},[[34,1,2]]]);
//# sourceMappingURL=main.b39f734d.chunk.js.map