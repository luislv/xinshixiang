define(function(require){function e(e,a,n,r,s,i){return!!(e&&o(e)&&a&&n)&&void $.ajax({url:"/v1/user/add_reservation",type:"post",data:{mobile:e,code:a,reservation_id:n,content:r?"":JSON.stringify(r)},dataType:"json",success:function(e){s&&s(e)},error:function(e){t(e),i&&i(e)}})}function a(e){var a=require("widget/wxJsbridge/wxJsbridge"),o=$.extend({title:"新世相图书馆",desc:"我们终将改变潮流的方向",shareTimelineDesc:e.shareTimelineDesc?e.shareTimelineDesc:e.desc,image:"http://resource.bj.taooo.cc/_assets/thefair/library/images/share_icon_2.png",link:location.href,shareAppMessageSuccessCallback:null,shareAppMessageCancelCallback:null,shareTimelineSuccessCallback:null,shareTimelineCancelCallback:null},e);return new a({shareAppMessageTitle:o.title,shareAppMessageDesc:o.desc,shareAppMessageLink:o.link,shareAppMessageImgUrl:o.image,shareAppMessageType:o.type,shareAppMessageDataUrl:o.dataUrl,shareAppMessageSuccessCallback:o.shareAppMessageSuccessCallback,shareAppMessageCancelCallback:o.shareAppMessageCancelCallback,shareTimelineTitle:o.shareTimelineDesc?o.shareTimelineDesc:o.desc,shareTimelineLink:o.link,shareTimelineImgUrl:o.image,shareTimelineSuccessCallback:o.shareTimelineSuccessCallback,shareTimelineCancelCallback:o.shareTimelineCancelCallback})}function o(e){var a=new RegExp(/^1[3|4|5|7|8]\d{9}$/);return a.test(e)}function t(e,a,o){var o=!!n(o)||o;try{var t=JSON.parse(e.responseText),a=a?a:"weixin";4e4==t.code&&p({successCallback:function(){s("登录成功")},errorCallback:function(){s("登录失败")},loginMode:a}),o?s(t.message.text):""}catch(r){e&&e.responseText?o?s(e.responseText):"":(o?s("网络超时,请重试!"):"",console.log(e))}}function n(e){return"undefined"==typeof e}function r(e){return e&&"object"==typeof e&&!(e instanceof Array)}function s(e){setTimeout(function(){alert(e)},5)}function i(e,a){var o=$.extend({path:"activity",size:8,uploadUrl:"/v1/upload/image",successCallback:null,errorCallback:null,beforeUploadCallback:null,needReadImageExif:!0,needCompressCorrectImage:!1},a);if(e&&e.size>1024*o.size*1024)return s("请上传小于"+o.size+"M的图片文件"),!1;if(!e.type.match(/png|jpg|jpeg|gif/))return s("请上传png,jpg,jpeg,gif格式图片文件"),!1;if(o.beforeUploadCallback&&o.beforeUploadCallback.call(this,o),o.needCompressCorrectImage);else{var n=new FileReader;n.onload=function(e){var a=e.target.result;return a?($.ajax({type:"POST",url:o.uploadUrl,data:{image:a,path:o.path},dataType:"json",success:function(e){0!=e.code&&s(e.message.text),o.successCallback&&o.successCallback.call(this,e,a)},error:function(e){t(e),o.errorCallback&&o.errorCallback.call(this,e)}}),void delete n):(s("图片读取失败，请重试~"),!1)},n.readAsDataURL(e)}}function c(e,a){var o,t,n=e.replace(/[^\x00-\xff]/g,"**").length,r=2;if(n>a){for(o=0;o<e.length;){var s=e.charAt(o),i=s.replace(/[^\x00-\xff]/g,"**").length;if(r+=i,!(r<=a)){t=e.slice(0,o),t+="...";break}o++}return t}return e}function l(e,a,o){var t=e,n=e,r=0,s=parseInt(a);"object"==h(o)&&o.pureStr&&(r=t.match(/[\s|\n]/g)?t.match(/[\s|\n]/g).length:0),s+=r;var i=t.length,c=0,l="";if(i>s){for(var f=0;f<t.length;f++)if(c++,c>s){l=t.slice(0,f),l+="...";break}n=l}return"object"==h(o)&&o.replaceNewline&&(n=n.replace(/\n/g,"<br />")),n}function f(){wx.closeWindow()}function m(){wx.ready(function(){wx.hideOptionMenu()})}function u(){wx.ready(function(){wx.showOptionMenu()})}function d(e,a){if(e>=0){var o=$("body").scrollTop()-e;$("body").css({"-webkit-transition":"transform "+a+"s ease 0s","-moz-transition":"transform "+a+"s ease 0s","-ms-transition":"transform "+a+"s ease 0s","-o-transition":"transform "+a+"s ease 0s",transition:"transform "+a+"s ease 0s","-webkit-transform":"translate3d(0,"+o+"px,0)","-moz-transform":"translate3d(0,"+o+"px,0)","-ms-transform":"translate3d(0,"+o+"px,0)","-o-transform":"translate3d(0,"+o+"px,0)",transform:"translate3d(0,"+o+"px,0)"}),setTimeout(function(){$("body").css({"-webkit-transition":"transform 0s ease 0s","-moz-transition":"transform 0s ease 0s","-ms-transition":"transform 0s ease 0s","-o-transition":"transform 0s ease 0s",transition:"transform 0s ease 0s","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-ms-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}),$("body").scrollTop(e)},1e3*a)}}function p(e){var a=e&&e.loginMode?e.loginMode:"weixin";if("h5"==a);else if("weixin"==a||"mobile"==a){if("browser"!=x){var o=function(a){if("success"==a){if("appAndroid"==x){var o=location.hostname.match(/(\..+)/)[0],t=$.getCookie("tk"),n=$.getCookie("account"),r=$.getCookie("platform"),s=$.getCookie("expires")?$.getCookie("expires"):30,i=$.getCookie("domain")?$.getCookie("domain"):o;t&&$.setCookie("tk",t,s,"/",i),n&&$.setCookie("account",n,s,"/",i),r&&$.setCookie("platform",r,s,"/",i),alert(document.cookie)}e&&e.successCallback&&e.successCallback.call(this)}else e&&e.errorCallback&&e.errorCallback.call(this);window.location.href="taooweb://refreshWebView?url="+encodeURIComponent(location.href)};window.location.href="taooweb://login?login_mode="+a+"&cancel=false&callback="+encodeURIComponent(o)}}else console.log("需要登录")}function g(){if("browser"!=x){var e=function(e){window._X_THEFAIR_UA_APP=e};window.location.href="taooweb://getXThefairUa?callback="+encodeURIComponent(e)}}function h(e){var a=typeof e,o="";switch(a){case"undefined":o="undefined";break;case"string":o="string";break;case"number":o=isNaN(e)?"NaN":"number";break;case"object":o=null===e?"null":e instanceof Array?"array":"object";break;case"boolean":o="boolean"}return o}function b(e){var a=h(e),o=!1;switch(a){case"string":""===e&&(o=!0);break;case"number":0===e&&(o=!0);break;case"NaN":o=!0;break;case"null":o=!0;break;case"undefined":o=!0;break;case"array":0===e.length&&(o=!0);break;case"object":var t=0;for(var n in e)++t;0===t&&(o=!0);break;case"boolean":e===!1&&(o=!0)}return o}function v(e,a,n,r,i,c){var l=a?a:"/v1/sms/get_verify_code",e=e?e:"verifyCode",f=$.getCookie(e),m=0;f&&parseInt(f)>0&&($(".get-verify-code").addClass("active"),m=f,_loop=setInterval(function(){if(m--,m>0){var a=m/60/60/24;$(".get-verify-code").text("验证码("+m+")"),$.setCookie(e,m,a,"/")}else clearInterval(_loop),$(".get-verify-code").removeClass("active"),$(".get-verify-code").text("获取验证码");console.log(m)},1e3)),$(".get-verify-code").on("click",function(){if(!$(this).hasClass("active")){var a=$('input[name="mobile"]').val().trim();if(!o(a))return s("请输入正确的11位手机号"),!1;$(this).addClass("active"),m=f>0?f:60,_loop=setInterval(function(){if(m--,m>0){var a=m/60/60/24;$(".get-verify-code").text("验证码("+m+")"),$.setCookie(e,m,a,"/")}else clearInterval(_loop),$(".get-verify-code").removeClass("active"),$(".get-verify-code").text("获取验证码");console.log(m)},1e3);var u=$.extend({mobile:a},r);n&&(u.verify_type=n),$.ajax({url:l,type:"post",data:u,success:function(e){0==e.code||(clearInterval(_loop),$(".get-verify-code").removeClass("active"),$(".get-verify-code").text("获取验证码"),s(e.message.text)),i&&i.call(this,e)},error:function(e){clearInterval(_loop),$(".get-verify-code").removeClass("active"),$(".get-verify-code").text("获取验证码"),t(e),c&&c.call(this,data)}})}})}function k(e,a){wx&&e&&"array"==h(a)&&wx.previewImage({current:e,urls:a})}function C(){var e=navigator.userAgent.toLowerCase().match(/micromessenger/);return!!e}function y(e,a){var o={},t=$(e).offset(),n=e.offsetWidth,r=e.offsetHeight,s=t.top,i=t.left,c=a.pageY/Thefair.scale,l=a.pageX/Thefair.scale;return a.changedTouches&&(l=a.changedTouches[0].pageX/Thefair.scale,c=a.changedTouches[0].pageY/Thefair.scale),o.y=Math.max(0,Math.min(1,(s-c+r)/r)),o.x=Math.max(0,Math.min(1,(l-i)/n)),o}var x=Thefair.platform(),w=$(".hidden-x_thefair_ua-value").val();w=w?w:"","appAndroid"===x&&(w="",g(),setTimeout(function(){w=window._X_THEFAIR_UA_APP},100));var T={"h5.st.thefair.net.cn":!0,"h5.lo.thefair.net.cn":!0},_=location.host,M=!1;T[_]&&"mm"===$.getQueryString(location.href,"__mock_")&&(M=!0);var A=$.ajax;return $.ajax=function(e){var a=w,o=e.url;o+=o.match(/\?/)?"&_ajax_stamp_="+(new Date).getTime():"?_ajax_stamp_="+(new Date).getTime(),M&&!o.match(/^http/)&&(o="http://local.mock.api:3000/api"+o);var n={url:o,type:"post",dataType:"json",success:function(a){0==a.code||(4e4==a.code?p({successCallback:function(){s("登录成功")},errorCallback:function(){s("登录失败")},loginMode:e.loginMode?e.loginMode:"weixin"}):s(a.message.text))},error:function(e){t(e)}};if(a){var r={X_THEFAIR_UA:a};n.headers=r}e.type&&(n.type=e.type),e.dataType&&(n.dataType=e.dataType),e.data&&(n.data=e.data),e.success&&"function"==typeof e.success&&(n.success=function(a){4e4==a.code?p({successCallback:function(){s("登录成功")},errorCallback:function(){s("登录失败")},loginMode:e.loginMode?e.loginMode:"weixin"}):e.success(a)}),e.error&&"function"==typeof e.error&&(n.error=e.error),A(n)},{commonIsWechat:C(),commonReserveSubmit:e,commonSetWxShareContent:a,commonCheckMobileFormat:o,commonHandleAjaxError:t,commonUpLoadImage:i,commonHackAlert:s,commonSubStr:l,commonSubStrByChar:c,commonBodyScrollYSmooth:d,commonCloseWechatWebview:f,commonHideWechatOptionMenu:m,commonShowWechatOptionMenu:u,commonIsObject:r,commonRequireLogin:p,commonGetXThefairUaApp:g,commonVarTypeStr:h,commonEmpty:b,commonInitGetVerifyCode:v,commonWechatImgDisplay:k,commonGetEventPositionPercent:y}});