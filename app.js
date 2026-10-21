const q=document.getElementById('q'),cards=[...document.querySelectorAll('.card')];
q.addEventListener('input',()=>{const t=q.value.trim().toLowerCase().replace(/^0+(?=\d)/,'');
  cards.forEach(c=>{const n=c.querySelector('.num').textContent.replace(/^0+/,'');
    c.style.display=!t||(/^\d+$/.test(t)?n===t:c.dataset.busca.includes(t))?'':'none'})});
const alvo=location.hash&&document.querySelector(location.hash.replace('#','#p').replace('#pp','#p'));
if(alvo){alvo.classList.add('alvo');alvo.scrollIntoView({block:'center'})}
