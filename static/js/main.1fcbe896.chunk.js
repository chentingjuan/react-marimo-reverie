(this["webpackJsonpreact-marimo-reverie"]=this["webpackJsonpreact-marimo-reverie"]||[]).push([[0],{12:function(t,i,o){},13:function(t,i,o){},17:function(t,i,o){"use strict";o.r(i);var e=o(1),r=o.n(e),n=o(5),s=o.n(n),a=(o(12),o(7)),c=(o(13),o(6)),h=o.n(c),u=o(2),d=o(3);function p(t){var i,o,e=t.windowWidth,r=t.windowHeight,n="a2ca3d-81bc3f-5fad41-3e954b-2d8950-1c7c54-48af7e".split("-").map((function(t){return"#"+t})),s=[],a=10,c=[],h=5;t.myCustomRedrawAccordingToNewPropsHandler=function(t){o=t},t.setup=function(){t.createCanvas(e,r),a=Math.floor(e*r/9e4),h=Math.floor(e*r/9e4),t.noStroke(),s=[];for(var o=0;o<a;o++)s.push(new p({position:f(),vector:t.constructor.Vector.random2D(),diameter:6*t.int(t.random(10,24)),color:n[Math.floor(t.random(n.length))]}));c=[];for(var u=0;u<h;u++)c.push(new l({position:f()}));i=new m},t.draw=function(){if(t.background("#DEF0F7"),t.frameCount%50===0){var e=f();c.push(new l({position:e}))}s.forEach((function(o){o.update(),o.draw(),o.chewing&&o.chewingTimer--,o.chewingTimer<=0&&(o.chewing=!1,o.chewingTimer=300),c.filter((function(t){return!t.eaten})).forEach((function(t){o.position.dist(t.position)<(o.diameter+t.diameter)/2&&(o.toSize(o.diameter+6),t.eaten=!0)})),i.diameter>18&&!o.chewing&&o.position.dist(i.position)<(o.diameter+i.diameter)/2&&(o.toSize(o.diameter+6),o.chewing=!0,i.toSize(i.diameter-6)),o.diameter>168&&(o.toSize(90),o.position.sub(10,0),s.push(new p({position:o.position.copy().add(20,0),vector:t.createVector(0,0),diameter:90,color:o.color})))})),c.filter((function(t){return!t.eaten})).forEach((function(t){t.draw(),i.position.dist(t.position)<(i.diameter+t.diameter)/2&&(i.toSize(i.diameter+6),t.eaten=!0)})),i.update(),i.draw(),o.setNumOfMarimos(s.length)};var p=function(){function i(t){Object(u.a)(this,i),this.position=t.position,this.vector=t.vector,this.diameter=t.diameter,this.color=t.color,this.chewing=!1,this.chewingTimer=300,this.matrix=b(this.color,this.diameter)}return Object(d.a)(i,[{key:"draw",value:function(){g(this.matrix,this.position)}},{key:"update",value:function(){var i=this;this.position.add(this.vector),t.frameCount%900===0&&this.vector.mult(.9),(this.position.x<=0||this.position.x>e)&&(this.vector.x=-1.3*this.vector.x),(this.position.y<=0||this.position.y>r)&&(this.vector.y=-1.3*this.vector.y),s.forEach((function(t){if(i!==t&&(i.position.dist(t.position),i.diameter,t.diameter,i.position.dist(t.position)<(i.diameter+t.diameter)/2.1)){var o=t.position.copy().sub(i.position);i.vector.sub(o.mult(.2).setMag(1)),t.vector.add(o.mult(.2).setMag(1))}}));var o=2.4;this.vector.x>o&&(this.vector.x=o),this.vector.x<-2.4&&(this.vector.x=-2.4),this.vector.y>o&&(this.vector.y=o),this.vector.y<-2.4&&(this.vector.y=-2.4)}},{key:"toSize",value:function(t){this.diameter=t,this.matrix=b(this.color,this.diameter)}}]),i}(),l=function(){function t(i){Object(u.a)(this,t),this.position=i.position,this.diameter=4,this.color="#fff",this.eaten=!1,this.matrix=b(this.color,this.diameter)}return Object(d.a)(t,[{key:"draw",value:function(){g(this.matrix,this.position)}}]),t}(),m=function(){function i(o){Object(u.a)(this,i),this.position=t.createVector(0,0),this.diameter=18,this.eatenable=!0,this.color="#219EBC",this.matrix=b(this.color,this.diameter)}return Object(d.a)(i,[{key:"draw",value:function(){g(this.matrix,this.position)}},{key:"update",value:function(){var i=t.mouseX-this.position.x;this.position.x+=.01*i;var o=t.mouseY-this.position.y;this.position.y+=.01*o}},{key:"toSize",value:function(t){this.diameter=t,this.matrix=b(this.color,this.diameter)}}]),i}(),f=function(){return t.createVector(t.random(0,e),t.random(0,r))},v=function(t,i,o){return function(t,i){return Math.sqrt(Math.pow(i,2)+Math.pow(t,2))}(t,i)<=o},w=function(t,i,o){return v(t,i,o)&&!(v(t+1,i,o)&&v(t-1,i,o)&&v(t,i+1,o)&&v(t,i-1,o)&&v(t+1,i+1,o)&&v(t+1,i-1,o)&&v(t-1,i-1,o)&&v(t-1,i+1,o))},b=function(i,o){for(var e,r=Math.ceil(o/6)/2,n=t.lerpColor(t.color("black"),t.color(i),.6),s=t.lerpColor(t.color("black"),t.color(i),.66),a=t.lerpColor(t.color("black"),t.color(i),.9),c=i,h=t.lerpColor(t.color("white"),t.color(i),.9),u=t.lerpColor(t.color("white"),t.color(i),.8),d=[],p=0,l=-(e=2*r%2==0?2*Math.ceil(r-.5)+1:2*Math.ceil(r))/2+1;l<=e/2-1;l++){d[p]=[],0;for(var m=-e/2+1;m<=e/2-1;m++)v(m,l,r)?!w(m,l,r)||w(m+(m>0?1:-1),l,r)&&w(m,l+(l>0?1:-1),r)?v(m+2,l+2,1)?d[p].push(u):v(m+2,l+2,r-7)?t.random()<.3?d[p].push(u):d[p].push(h):v(m+2,l+2,r-6)?d[p].push(h):v(m+2,l+2,r-4)?t.random()<.3?d[p].push(h):d[p].push(c):v(m+1,l+1,r-3)?d[p].push(c):v(m+1,l+1,r-2)?t.random()<.3?d[p].push(c):d[p].push(a):v(m+1,l+1,r-1)?d[p].push(a):d[p].push(s):d[p].push(n):d[p].push(null);p++}return d};function g(i,o){t.push(),t.translate(o.x,o.y);for(var e=0;e<i.length;e++)for(var r=0;r<i.length;r++)if(i[e][r]){var n=6*(r-i.length/2),s=6*(e-i.length/2);t.fill(i[e][r]),t.rect(n,s,6)}t.pop()}}var l=o(0);var m=function(){var t=Object(e.useState)(0),i=Object(a.a)(t,2),o=i[0],r=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"data-box",children:["Number of Marimos: ",o]}),Object(l.jsx)(h.a,{sketch:p,setNumOfMarimos:r})]})},f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(i){var o=i.getCLS,e=i.getFID,r=i.getFCP,n=i.getLCP,s=i.getTTFB;o(t),e(t),r(t),n(t),s(t)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.1fcbe896.chunk.js.map