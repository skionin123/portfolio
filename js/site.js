
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const page=document.body.dataset.page;document.querySelectorAll('.site-nav a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
