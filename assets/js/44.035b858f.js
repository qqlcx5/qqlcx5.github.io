(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{393:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),l={name:"bubblesEffect",props:{options:{type:Object,default:()=>({})},selectRef:{type:String,default:""}},setup(e){let t,n,l,o,c=Object(a.e)(null),s=Object(a.e)(null),i=[],r=Object(a.a)(()=>Object.assign({},{densety:.08},e.options));function d(){cancelAnimationFrame(s),o.clearRect(0,0,t,n);for(let e=0;e<i.length;e++)i[e].draw();s=requestAnimationFrame(d)}function u(){var a,o;const c=e.selectRef&&document.querySelector(e.selectRef);t=null!==(a=null==c?void 0:c.offsetWidth)&&void 0!==a?a:window.innerWidth||0,n=null!==(o=null==c?void 0:c.offsetHeight)&&void 0!==o?o:window.innerHeight||0,l.width=t,l.height=n}function h(){var e=this;function a(){e.pos.x=Math.random()*t,e.pos.y=n+100*Math.random(),e.alpha=.1+.3*Math.random(),e.alpha_change=2e-4+5e-4*Math.random(),e.scale=.2+.8*Math.random(),e.scale_change=.001*Math.random(),e.speed=.1+.5*Math.random()}e.pos={},a(),this.draw=function(){e.alpha<=0&&a(),e.pos.y-=e.speed,e.alpha-=e.alpha_change,e.scale+=e.scale_change,o.beginPath(),o.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),o.fillStyle="rgba(245,245,245,"+e.alpha+")",o.fill()}}return Object(a.c)(()=>{!function(){l=c.value,u(),o=l.getContext("2d");var e=t*r.value.densety;for(let t=0;t<e;t++){var n=new h;i.push(n)}d()}(),window.addEventListener("resize",()=>{u()})}),Object(a.d)(()=>{cancelAnimationFrame(s)}),{canvasRef:c}}},o=n(6),c=Object(o.a)(l,(function(){return(0,this._self._c)("canvas",{ref:"canvasRef",staticStyle:{position:"absolute",top:"0",left:"0"}})}),[],!1,null,null,null);t.default=c.exports}}]);