define([],function(){function r(e,r,i){i=i?i:3e3;var s=document.createElement("div");n++,s.classList.add("notify",e),s.innerText=r,document.getElementById("app").appendChild(s),n===1&&(t=0),setTimeout(function(){s.style.top=t+"px",s.style.opacity=1,s.style.left="0px",t+=10+s.offsetHeight},10),setTimeout(function(){n--;try{document.getElementById("app").removeChild(s)}catch(e){s=undefined}},i)}function i(t,n){t=t?t:e.success,r("success",t,n)}function s(t,n){t=t?t:e.error,r("error",t,n)}function o(t,n){t=t?t:e.info,r("info",t,n)}var e={success:"Действие успешно выполнено!",error:"Ошибка. Повторите действие еще раз."},t=0,n=0;return{success:i,err:s,inf:o}});