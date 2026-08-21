
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const page=document.body.dataset.page;document.querySelectorAll('.site-nav a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Graphic design gallery filters + lightbox
const designFilters=[...document.querySelectorAll('[data-design-filter]')];
const designCards=[...document.querySelectorAll('.design-card[data-cat]')];
if(designFilters.length&&designCards.length){
  designFilters.forEach(btn=>btn.addEventListener('click',()=>{
    designFilters.forEach(x=>x.classList.remove('on'));btn.classList.add('on');
    const f=btn.dataset.designFilter;
    designCards.forEach(card=>card.classList.toggle('is-hidden',f!=='all'&&card.dataset.cat!==f));
  }));
}
const lightbox=document.getElementById('designLightbox');
if(lightbox&&designCards.length){
  const img=lightbox.querySelector('img'),cap=lightbox.querySelector('.design-lightbox-caption'),close=lightbox.querySelector('.design-lightbox-close');
  const shut=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  designCards.forEach(card=>card.addEventListener('click',()=>{
    img.src=card.dataset.full||card.querySelector('img').src;
    img.alt=card.querySelector('img').alt||'Design preview';
    const b=card.querySelector('b')?.textContent||'',s=card.querySelector('small')?.textContent||'';cap.textContent=[b,s].filter(Boolean).join(' · ');
    lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }));
  close.addEventListener('click',shut);lightbox.addEventListener('click',e=>{if(e.target===lightbox)shut()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))shut()});
}


// v5: keep navigation stable across pages and viewport changes.
window.addEventListener('resize',()=>{
  if(window.innerWidth>760 && nav){
    nav.classList.remove('open');
    if(toggle){toggle.setAttribute('aria-expanded','false');toggle.innerHTML='<i class="fa-solid fa-bars"></i>'}
  }
});
