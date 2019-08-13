
var cookie_vip_key="irV8jfnifwlj9o0Y";var cookie_vip_val="iGL4OvQbzTfToq5m";var key='doubi';var map={'juejin':'掘金','oschina':'开源中国','sjdbc':'Sharding-JDBC','jianshu':'简书','csdn':'CSDN','iteye':'iteye','cnblogs':'博客园','bilibili':'B 站'};function isVIP(){var vip=false;if(location.hostname.indexOf('vip')>=0){vip=true;}
if(!vip&&location.search.indexOf('vip')>=0){vip=true;}
if(vip){$.cookie(cookie_vip_key,cookie_vip_val,{expires:365,path:'/'});}
var cookieVIP=$.cookie(cookie_vip_key);if(cookieVIP===cookie_vip_val){return true;}
return false;}
function isToutiao(){var vip=false;if(!vip&&location.search.indexOf('toutiao')>=0){vip=true;}
if(vip){$.cookie('is_toutiao',vip,{expires:365,path:'/'});}
var cookieVIP=$.cookie('is_toutiao');if(cookieVIP==="true"){return true;}
return false;}
function getFrom(){var from='default';for(var item in map){if(location.search.indexOf(item)>=0){from=item;break;}}
if(from==='default'){from=$.cookie('from')||'default';}
$.cookie('from',from,{expires:365,path:'/'});return from;}
function isMobile(){if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){return true;}else if(/(Android)/i.test(navigator.userAgent)){return true;}else{return false;}}
function isDomainVIP(){return location.hostname.indexOf('vip')>=0;}
function getCount(){var count=$.cookie(key);if(!count){$.cookie(key,0,{expires:1,path:'/'});count=0;}else{count=parseInt(count);}
$.cookie(key,count,{expires:1,path:'/'});return count;}
function handleVIPURL(){if(isVIP()){return;}
var els=$('.post a');for(var i in els){var el=els[i];if(!el||!el.getAttribute){continue}
var timeStr=el.getAttribute('data-date');if(timeStr){var date=new Date(timeStr);if(date>new Date()){el.setAttribute('href','#');$(el).click(function(){var from=getFrom();var prefix='';var prefix2='';if(from&&map[from]){prefix='<span style="color: red">欢迎来自【'+map[from]+'】的同学</span>';prefix2='【'+map[from]+'】';}
var hour=new Date().getHours();var numbers=103+hour*5;var doubi=jqueryAlert({'title':'👼抱歉，该文章仅公众号可见，【扫一扫】关注公众号👼','width':'500','height':'560','modal':true,'content':prefix+'<span style="color: red">，今日'+prefix2+'已关注人数：'+numbers+'</span>'
+'<p style="color: red">关注后，欢迎加入【源码圈】微信群交流</p>'
+'<p style="color: red">一起看源码，读源码，提升技术！</p>'
+'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />','buttons':{'已关注，关闭窗口（公众号发送：【嘿嘿】查看文章）':function(){doubi.close();}}});});}}
if(el.getAttribute('title')==='友情链接'){el.remove();}}}
function handleAlert(){var count=getCount();var from=getFrom();var prefix='';var prefix2='';if(from&&map[from]){prefix='<span style="color: red">欢迎来自【'+map[from]+'】的同学</span>';prefix2='【'+map[from]+'】';}
var alertMax=1024;if(count<alertMax){var hour=new Date().getHours();var numbers=103+hour*5;function explode(){var doubi=jqueryAlert({'title':'👼每周六更新一篇源码解析，【扫一扫】关注公众号👼','width':'500','height':'580','modal':true,'content':prefix+'<span style="color: red">，今日'+prefix2+'已关注人数：'+numbers+'</span>'
+'<p style="color: red">关注后，欢迎加入【源码圈】微信群交流</p>'
+'<p style="color: red">一起看源码，读源码，提升技术！</p>'
+'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />'
+'<p style="color: blue">抱歉，该弹窗每天弹出 '+alertMax+' 次。</p>','buttons':{'已关注，关闭窗口（公众号发送：【口令】屏蔽弹窗）':function(){doubi.close();}}});$.cookie(key,count+1,{expires:1,path:'/'});}
setTimeout(explode,(count+1)*15000);};}
function removeCategoriesPageTitle(){try{var category=document.location.href.substring(document.location.href.lastIndexOf('/categories/')+'/categories/'.length).replace('/','');var els=$('.post a');for(var i in els){var el=els[i];if(!el||!el.getAttribute){continue}
el.setAttribute('title',el.getAttribute('title').replace(category,''));}}catch(e){}}
function renderMobile(){var els=$('.post');els.each(function(index,el){if(el.style.width==='20%'||el.style.width==='40%'||el.style.width==='30%'||el.style.width==='10%'){el.style.width='100%';var h1EL=$(el).find('h1');if(h1EL[0].innerHTML!=='&nbsp;'){return;}
var timeEL=$(el).find('time');if($.trim(timeEL[0].innerHTML).length===0){el.remove();return;}
$(el).find('h1:first').remove();}});}
function logVisitLog(){}
$(document).ready(function(){logVisitLog();isToutiao();$("a").each(function(a,b){if(b&&b.href){if(b.href.indexOf('union-click')>=0){b.onclick=function(){if(isToutiao()){alert("在微信中，搜索【芋道源码】\n 发送【头条"+"书单"+"】关键字。");}else{var doubi=jqueryAlert({'title':'扫码下方二维码，关注微信公众号【芋道源码】','width':'500','height':'560','modal':true,'content':'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />'
+'\n<p style="color: red">发送关键字：【书单】</p>'
+'\n<p style="color: red">可下载私人珍藏的电子书噢！！！</p>','buttons':{'已关注，关闭窗口（公众号发送：【书单】查看文章）':function(){doubi.close();}}});}
return false;};}
if(b.href.indexOf('wx://github')>=0){b.onclick=function(){var guanjianzi=b.href.substring(b.href.indexOf('wx://')+5);if(isToutiao()){alert("在微信中，搜索【芋道源码】\n 发送【头条"+guanjianzi+"】关键字。");}else{var doubi=jqueryAlert({'title':'扫码下方二维码，关注微信公众号【芋道源码】','width':'500','height':'560','modal':true,'content':'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />'
+'\n<p style="color: red">发送关键字：【'+guanjianzi+'】</p>'
+'\n<p style="color: red">增加中文注释不容易，希望多多关注我</p>','buttons':{'已关注，获得中文注释仓库':function(){doubi.close();}}});}
return false;};}
if(b.href.indexOf('https://v.qq.com/x/page/p0543tzm648.html')>=0){if(isVIP()){return true;}
b.onclick=function(){if(isToutiao()){alert("在微信中，搜索【芋道源码】\n 发送【头条biu】关键字。");}else{var doubi=jqueryAlert({'title':'扫码下方二维码，关注微信公众号【芋道源码】','width':'500','height':'560','modal':true,'content':'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />'
+'\n<p style="color: red">发送关键字：【biu】</p>'
+'\n<p style="color: red">可观看该视频！！！</p>','buttons':{'已关注，关闭窗口（公众号发送：【biu】查看文章）':function(){doubi.close();}}});}
return false;};}
if(b.href.indexOf('https://t.zsxq.com/NFuv3jq')>=0){b.onclick=function(){if(isToutiao()){alert("在微信中，搜索【芋道源码】\n 发送【头条星球】关键字。");}else{var doubi=jqueryAlert({'title':'扫码下方二维码，关注微信公众号【芋道源码】','width':'500','height':'560','modal':true,'content':'<img width="400" src="http://www.iocoder.cn/images/common/wechat_mp_simple.png" />'
+'\n<p style="color: red">发送关键字：【知识星球】</p>'
+'\n<p style="color: red">查看说明！！！</p>','buttons':{'已关注，关闭窗口（公众号发送：【知识星球】查看说明）':function(){doubi.close();}}});}
return false;};}}});removeCategoriesPageTitle();if(isDomainVIP()){var search=location.search;if(search&&search.length>0){search+='&vip';}else{search+='?vip';}
window.location.href='http://www.iocoder.cn'+location.pathname+search;return;}
var from=getFrom();if(isMobile()){$('#authorInfo').remove();$('.delete-at-mobile').remove();renderMobile();return;}
if(isVIP()){var tip=$('blockquote');if(tip.html&&tip.html()&&tip.html().indexOf&&tip.html().indexOf('关注')>0){tip.prev('p').remove();tip[0].remove();}
return;}
handleAlert();});