document.addEventListener("DOMContentLoaded",()=>{const e={name:null,phone:null,service:null},t=document.querySelector("#inform"),n=document.querySelectorAll("input[data-rule], select[data-rule]");let o,l;function a(e,n){t.innerText=e,t.style.color=n,t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},5e3)}document.querySelector('form[name="form"]').addEventListener("submit",t=>{if(t.preventDefault(),n.forEach((t,n)=>{switch(t.dataset.rule){case"name":(o=/^[A-Za-zА-Яа-яЁё]+$/g.test(t.value))?e.name=t.value.trim():(t.classList.add("js-form-invalid"),a("no send","tomato"));break;case"phone":l=t.value.replace(/[^\d]/g,""),(o=/^\d+$/.test(l))?e.phone=l:(t.classList.add("js-form-invalid"),a("no send","tomato"));break;case"service":o=/^[A-Za-zА-Яа-яЁё]+$/g.test(t.value),e.service=o?t.value:"no choice"}}),function(e){for(key in e)return null!==e[key]}(e)){const t=JSON.stringify(e);let o=new XMLHttpRequest;o.open("POST","/backend/write-db.php"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(t),o.onreadystatechange=function(){4==o.readyState&&200===o.status&&(a("send","green"),n.forEach(e=>{e.value=""}))}}}),baguetteBox.run("#gallery",{fullScreen:!1}),jQuery(function(e){e("#btnMenuOpen, #btnMenuClose").on("click",()=>{e(".menu-mobile__popup").slideToggle(160,()=>{e(".menu-mobile__popup").is(":hidden")?e("body").removeClass("body-pointer"):e("body").addClass("body-pointer")})}),e(document).on("click",t=>{e(t.target).closest(".menu-mobile").length||(e("body").removeClass("body-pointer"),e(".menu-mobile__popup").slideUp(300))}),e("#formSelect").niceSelect()})});