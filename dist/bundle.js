import e from"../../../../../../../../../../src/router.js";function t(){const e=document.getElementById("liveAlertPlaceholder"),t=document.getElementById("liveAlertBtn");t&&t.addEventListener("click",(()=>{((t,n)=>{const i=document.createElement("div");i.innerHTML=[`<div class="alert alert-${n} alert-dismissible" role="alert">`,`   <div>${t}</div>`,'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),e.append(i),setTimeout((function(){i.remove()}),2e3)})("Who tf use whatsapp)","success")}))}document.addEventListener("DOMContentLoaded",(function(){!async function(){document.getElementById("header").innerHTML=await(await fetch("/src/view/header.html")).text(),document.getElementById("footer").innerHTML=await(await fetch("/src/view/footer.html")).text()}(),t(),e()}));