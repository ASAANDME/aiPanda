!/**
 * Highcharts JS v11.4.3 (2024-05-22)
 *
 * (c) 2009-2024
 *
 * License: www.highcharts.com/license
*/function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/flowmap",["highcharts"],function(o){return t(o),t.Highcharts=o,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var o=t?t._modules:{};function e(t,o,e,i){t.hasOwnProperty(o)||(t[o]=i.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}e(o,"Series/FlowMap/FlowMapPoint.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o){let{seriesTypes:{mapline:{prototype:{pointClass:e}}}}=t,{pick:i,isString:s,isNumber:r}=o;return class extends e{isValid(){let t=!!(this.options.to&&this.options.from);return[this.options.to,this.options.from].forEach(function(o){t=!!(t&&o&&(s(o)||r(i(o[0],o.lat))&&r(i(o[1],o.lon))))}),t}}}),e(o,"Series/FlowMap/FlowMapSeries.js",[o["Series/FlowMap/FlowMapPoint.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o,e){let{series:{prototype:{pointClass:i}},seriesTypes:{column:s,map:r,mapline:n}}=o,{addEvent:a,arrayMax:l,arrayMin:h,defined:p,extend:f,isArray:d,merge:m,pick:u,relativeLength:c}=e;class g extends n{static getLength(t,o){return Math.sqrt(t*t+o*o)}static normalize(t,o){let e=this.getLength(t,o);return[t/e,o/e]}static markerEndPath(t,o,e,i){let s=c(i.width||0,this.getLength(o[0]-t[0],o[1]-t[1])),r=i.markerType||"arrow",[n,a]=this.normalize(o[0]-t[0],o[1]-t[1]),l=[];if("arrow"===r){let[i,r]=t;i-=n*s,r-=a*s,l.push(["L",i,r]),l.push(["L",e[0],e[1]]),[i,r]=o,i+=n*s,r+=a*s,l.push(["L",i,r])}if("mushroom"===r){let[i,r]=t,[h,p]=o,[f,d]=e,m=(h-i)/2+i,u=(p-r)/2+r;i-=n*s,r-=a*s,l.push(["L",i,r]),h+=n*s,p+=a*s,l.push(["Q",(f-m)*2+m,(d-u)*2+u,h,p])}return l}animate(t){let o=this.points;t||o.forEach(t=>{if(t.shapeArgs&&d(t.shapeArgs.d)&&t.shapeArgs.d.length){let o=t.shapeArgs.d,e=o[0][1],i=o[0][2];if(e&&i){let s=[];for(let t=0;t<o.length;t++){s.push([...o[t]]);for(let r=1;r<o[t].length;r++)s[t][r]=r%2?e:i}t.graphic&&(t.graphic.attr({d:s}),t.graphic.animate({d:o}))}}})}getLinkWidth(t){let o=this.options.width,e=t.options.weight||this.options.weight;if(t.options.weight=e,o&&!e)return o;let i=this.smallestWeight,s=this.greatestWeight;if(!p(e)||!i||!s)return 0;let r=this.options.minWidth;return(e-i)*(this.options.maxWidth-r)/(s-i||1)+r}autoCurve(t,o,e,i,s,r){let n={x:e-t,y:i-o},a={x:(e-t)/2+t,y:(i-o)/2+o},l={x:a.x-s,y:a.y-r},h=n.x*l.x+n.y*l.y,p=Math.atan2(n.x*l.y-n.y*l.x,h),f=180*p/Math.PI;return f<0&&(f=360+f),-(.7*Math.sin(p=f*Math.PI/180))}pointAttribs(t,o){let e=r.prototype.pointAttribs.call(this,t,o);return e.fill=u(t.options.fillColor,t.options.color,"none"===this.options.fillColor?null:this.options.fillColor,this.color),e["fill-opacity"]=u(t.options.fillOpacity,this.options.fillOpacity),e["stroke-width"]=u(t.options.lineWidth,this.options.lineWidth,1),t.options.opacity&&(e.opacity=t.options.opacity),e}translate(){this.chart.hasRendered&&(this.isDirtyData||!this.hasRendered)&&(this.processData(),this.generatePoints());let t=[],o=0,e=0;this.points.forEach(s=>{let r,n;let l=this.chart,h=l.mapView,p=s.options,f=()=>{s.series.isDirty=!0},m=t=>{let o=l.get(t);if(o instanceof i&&o.plotX&&o.plotY)return a(o,"update",f),{x:o.plotX,y:o.plotY}},c=t=>d(t)?{lon:t[0],lat:t[1]}:t;"string"==typeof p.from?r=m(p.from):"object"==typeof p.from&&h&&(r=h.lonLatToPixels(c(p.from))),"string"==typeof p.to?n=m(p.to):"object"==typeof p.to&&h&&(n=h.lonLatToPixels(c(p.to))),s.fromPos=r,s.toPos=n,r&&n&&(o+=(r.x+n.x)/2,e+=(r.y+n.y)/2),u(s.options.weight,this.options.weight)&&t.push(u(s.options.weight,this.options.weight))}),this.smallestWeight=h(t),this.greatestWeight=l(t),this.centerOfPoints={x:o/this.points.length,y:e/this.points.length},this.points.forEach(t=>{if(!this.getLinkWidth(t)){t.shapeArgs={d:[]};return}t.fromPos&&(t.plotX=t.fromPos.x,t.plotY=t.fromPos.y),t.shapeType="path",t.shapeArgs=this.getPointShapeArgs(t),t.color=u(t.options.color,t.series.color)})}getPointShapeArgs(t){let{fromPos:o,toPos:e}=t;if(!o||!e)return{};let i=this.getLinkWidth(t)/2,s=t.options,r=m(this.options.markerEnd,s.markerEnd),n=u(s.growTowards,this.options.growTowards),a=o.x||0,l=o.y||0,h=e.x||0,f=e.y||0,d=u(s.curveFactor,this.options.curveFactor),y=r&&r.enabled&&r.height||0;if(p(d)||(d=this.autoCurve(a,l,h,f,this.centerOfPoints.x,this.centerOfPoints.y)),y){y=c(y,4*i);let t=h-a,o=f-l,e=a+(t*=.5),s=l+(o*=.5),r=t,n=e+(t=o)*d,p=s+(o=-r)*d,[m,u]=g.normalize(n-h,p-f);m*=y,u*=y,h+=m,f+=u}let w=h-a,x=f-l,P=a+(w*=.5),M=l+(x*=.5),C=w;w=x,x=-C;let[L,b]=g.normalize(w,x),W=1+.25*Math.sqrt(d*d);L*=i*W,b*=i*W;let j=P+w*d,E=M+x*d,[k,A]=g.normalize(j-a,E-l);C=k,k=A,A=-C,k*=i,A*=i;let[S,v]=g.normalize(j-h,E-f);C=S,S=-v,v=C,S*=i,v*=i,n&&(k/=i,A/=i,L/=4,b/=4);let F={d:[["M",a-k,l-A],["Q",j-L,E-b,h-S,f-v],["L",h+S,f+v],["Q",j+L,E+b,a+k,l+A],["Z"]]};if(r&&r.enabled&&F.d){let t=g.markerEndPath([h-S,f-v],[h+S,f+v],[e.x,e.y],r);F.d.splice(2,0,...t)}let T=t.options.from,O=t.options.to,z=T.lat,D=T.lon,H=O.lat,R=O.lon;return z&&D&&(t.options.from=`${+z}, ${+D}`),H&&R&&(t.options.to=`${+H}, ${+R}`),F}}return g.defaultOptions=m(n.defaultOptions,{animation:!0,dataLabels:{enabled:!1},fillOpacity:.5,markerEnd:{enabled:!0,height:"40%",width:"40%",markerType:"arrow"},width:1,maxWidth:25,minWidth:5,lineWidth:void 0,tooltip:{headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.options.from} → {point.options.to}: <b>{point.options.weight}</b>"}}),f(g.prototype,{pointClass:t,pointArrayMap:["from","to","weight"],drawPoints:s.prototype.drawPoints,useMapGeometry:!0}),o.registerSeriesType("flowmap",g),g}),e(o,"masters/modules/flowmap.src.js",[o["Core/Globals.js"]],function(t){return t})});