document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-mobile-nav]');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});}
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
    items.forEach(item=>observer.observe(item));
  }else{items.forEach(item=>item.classList.add('is-visible'));}
  document.querySelectorAll('[data-quantity]').forEach(input=>input.addEventListener('change',()=>{if(Number(input.value)<1)input.value=1;}));
});