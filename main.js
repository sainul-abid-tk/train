let mainmoon=document.getElementById('mainmoon')
let train=document.getElementById('train')
let text=document.getElementById('text')

let secmoon=document.getElementById('secmoon')
let man=document.getElementById('man')
window.addEventListener('scroll',function(){
    const value=window.scrollY

    mainmoon.style.top=value*1+'px';
    train.style.left=value*1.6+'px';
    text.style.bottom=value*1.5+'px';
    secmoon.style.top=value*.3+'px';
    man.style.left=value*.9+'px';
})