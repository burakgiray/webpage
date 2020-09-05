/*
  Highcharts JS v7.0.1 (2018-12-19)
 Tilemap module

 (c) 2010-2018 Highsoft AS

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:"function"===typeof define&&define.amd?define(function(){return k}):k("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(k){(function(d){var k=d.defined,v=d.noop,e=d.seriesTypes;d.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(d){var a=this,b=d?"show":"hide";a.visible=!!d;["graphic","dataLabel"].forEach(function(c){if(a[c])a[c][b]()})},
setState:function(e){d.Point.prototype.setState.call(this,e);this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}};d.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:e.column.prototype.pointAttribs,translateColors:function(){var d=this,a=this.options.nullColor,b=this.colorAxis,c=this.colorKey;this.data.forEach(function(f){var g=
f[c];if(g=f.options.color||(f.isNull?a:b&&void 0!==g?b.toColor(g,f):f.color||d.color))f.color=g})},colorAttribs:function(d){var a={};k(d.color)&&(a[this.colorProp||"fill"]=d.color);return a}}})(k);(function(d){var k=d.colorPointMixin,v=d.merge,e=d.noop,r=d.pick,a=d.Series,b=d.seriesType,c=d.seriesTypes;b("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,
pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(d.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;c.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=r(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,a=this.xAxis,c=this.yAxis,d=b.pointPadding||0,l=function(b,
a,c){return Math.min(Math.max(a,b),c)};this.generatePoints();this.points.forEach(function(g){var f=(b.colsize||1)/2,e=(b.rowsize||1)/2,u=l(Math.round(a.len-a.translate(g.x-f,0,1,0,1)),-a.len,2*a.len),f=l(Math.round(a.len-a.translate(g.x+f,0,1,0,1)),-a.len,2*a.len),m=l(Math.round(c.translate(g.y-e,0,1,0,1)),-c.len,2*c.len),e=l(Math.round(c.translate(g.y+e,0,1,0,1)),-c.len,2*c.len),h=r(g.pointPadding,d);g.plotX=g.clientX=(u+f)/2;g.plotY=(m+e)/2;g.shapeType="rect";g.shapeArgs={x:Math.min(u,f)+h,y:Math.min(m,
e)+h,width:Math.abs(f-u)-2*h,height:Math.abs(e-m)-2*h}});this.translateColors()},drawPoints:function(){var b=this.chart.styledMode?"css":"attr";c.column.prototype.drawPoints.call(this);this.points.forEach(function(a){a.graphic[b](this.colorAttribs(a))},this)},animate:e,getBox:e,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,alignDataLabel:c.column.prototype.alignDataLabel,getExtremes:function(){a.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;
a.prototype.getExtremes.call(this)}}),d.extend({haloPath:function(b){if(!b)return[];var a=this.shapeArgs;return["M",a.x-b,a.y-b,"L",a.x-b,a.y+a.height+b,a.x+a.width+b,a.y+a.height+b,a.x+a.width+b,a.y-b,"Z"]}},k))})(k);(function(d){var k=d.seriesType,v=d.pick,e=function(a,b,c){return Math.min(Math.max(b,a),c)},r=function(a,b,c){a=a.options;return{xPad:(a.colsize||1)/-b,yPad:(a.rowsize||1)/-c}};d.tileShapeTypes={hexagon:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return r(a,
3,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2-a,b.y1+a,"L",b.x3+a,b.y1+a,b.x4+1.5*a,b.y2,b.x3+a,b.y3-a,b.x2-a,b.y3-a,b.x1-1.5*a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,g=(a.colsize||1)/3,k=(a.rowsize||1)/2,q;this.generatePoints();this.points.forEach(function(a){var l=e(Math.floor(b.len-b.translate(a.x-2*g,0,1,0,1)),-b.len,2*b.len),f=e(Math.floor(b.len-b.translate(a.x-g,0,1,0,1)),-b.len,2*b.len),t=e(Math.floor(b.len-
b.translate(a.x+g,0,1,0,1)),-b.len,2*b.len),u=e(Math.floor(b.len-b.translate(a.x+2*g,0,1,0,1)),-b.len,2*b.len),m=e(Math.floor(c.translate(a.y-k,0,1,0,1)),-c.len,2*c.len),h=e(Math.floor(c.translate(a.y,0,1,0,1)),-c.len,2*c.len),n=e(Math.floor(c.translate(a.y+k,0,1,0,1)),-c.len,2*c.len),p=v(a.pointPadding,d),w=p*Math.abs(f-l)/Math.abs(n-h),w=b.reversed?-w:w,r=b.reversed?-p:p,p=c.reversed?-p:p;a.x%2&&(q=q||Math.round(Math.abs(n-m)/2)*(c.reversed?-1:1),m+=q,h+=q,n+=q);a.plotX=a.clientX=(f+t)/2;a.plotY=
h;l+=w+r;f+=r;t-=r;u-=w+r;m-=p;n+=p;a.tileEdges={x1:l,x2:f,x3:t,x4:u,y1:m,y2:h,y3:n};a.shapeType="path";a.shapeArgs={d:["M",f,m,"L",t,m,u,h,t,n,f,n,l,h,"Z"]}});this.translateColors()}},diamond:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return r(a,2,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2,b.y1+a,"L",b.x3+a,b.y2,b.x2,b.y3-a,b.x1-a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||
0,g=a.colsize||1,k=(a.rowsize||1)/2,q;this.generatePoints();this.points.forEach(function(a){var f=e(Math.round(b.len-b.translate(a.x-g,0,1,0,0)),-b.len,2*b.len),l=e(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),t=e(Math.round(b.len-b.translate(a.x+g,0,1,0,0)),-b.len,2*b.len),u=e(Math.round(c.translate(a.y-k,0,1,0,0)),-c.len,2*c.len),m=e(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),h=e(Math.round(c.translate(a.y+k,0,1,0,0)),-c.len,2*c.len),n=v(a.pointPadding,d),p=n*Math.abs(l-
f)/Math.abs(h-m),p=b.reversed?-p:p,n=c.reversed?-n:n;a.x%2&&(q=Math.abs(h-u)/2*(c.reversed?-1:1),u+=q,m+=q,h+=q);a.plotX=a.clientX=l;a.plotY=m;f+=p;t-=p;u-=n;h+=n;a.tileEdges={x1:f,x2:l,x3:t,y1:u,y2:m,y3:h};a.shapeType="path";a.shapeArgs={d:["M",l,u,"L",t,m,l,h,f,m,"Z"]}});this.translateColors()}},circle:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return r(a,2,2)},haloPath:function(a){return d.seriesTypes.scatter.prototype.pointClass.prototype.haloPath.call(this,
a+(a&&this.radius))},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,g=(a.rowsize||1)/2,k=a.colsize||1,q,l,r,v,t=!1;this.generatePoints();this.points.forEach(function(a){var f=e(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),h=e(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),n=d,p=!1;void 0!==a.pointPadding&&(n=a.pointPadding,t=p=!0);if(!v||t)q=Math.abs(e(Math.floor(b.len-b.translate(a.x+k,0,1,0,0)),-b.len,2*b.len)-f),l=Math.abs(e(Math.floor(c.translate(a.y+
g,0,1,0,0)),-c.len,2*c.len)-h),r=Math.floor(Math.sqrt(q*q+l*l)/2),v=Math.min(q,r,l)-n,t&&!p&&(t=!1);a.x%2&&(h+=l*(c.reversed?-1:1));a.plotX=a.clientX=f;a.plotY=h;a.radius=v;a.shapeType="circle";a.shapeArgs={x:f,y:h,r:v}});this.translateColors()}},square:{alignDataLabel:d.seriesTypes.heatmap.prototype.alignDataLabel,translate:d.seriesTypes.heatmap.prototype.translate,getSeriesPadding:function(){},haloPath:d.seriesTypes.heatmap.prototype.pointClass.prototype.haloPath}};d.wrap(d.Axis.prototype,"setAxisTranslation",
function(a){a.apply(this,Array.prototype.slice.call(arguments,1));var b=this,c=b.series.map(function(a){return a.getSeriesPixelPadding&&a.getSeriesPixelPadding(b)}).reduce(function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b},void 0)||{padding:0,axisLengthFactor:1},d=Math.round(c.padding*c.axisLengthFactor);c.padding&&(b.len-=d,a.apply(b,Array.prototype.slice.call(arguments,1)),b.minPixelPadding+=c.padding,b.len+=d)});k("tilemap","heatmap",{states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},
pointPadding:2,tileShape:"hexagon"},{setOptions:function(){var a=d.seriesTypes.heatmap.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));this.tileShape=d.tileShapeTypes[a.tileShape];return a},alignDataLabel:function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},getSeriesPixelPadding:function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this),d;if(!c)return{padding:0,axisLengthFactor:1};d=Math.round(a.translate(b?2*c.xPad:c.yPad,
0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}},translate:function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))}},d.extend({haloPath:function(){return this.series.tileShape.haloPath.apply(this,Array.prototype.slice.call(arguments))}},d.colorPointMixin))})(k)});
//# sourceMappingURL=tilemap.js.map
