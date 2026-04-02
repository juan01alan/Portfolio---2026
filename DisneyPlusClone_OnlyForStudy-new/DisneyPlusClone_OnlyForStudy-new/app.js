window.addEventListener('scroll', ()=>{
    let scroll = scrollY > window.innerHeight-30 ? true : false;
    console.log(scroll);
    const changes = [document.getElementById('tooglerbg'),document.getElementById('tooglerbt'), document.getElementById('tooglerlg')];
    if (scroll) {
        changes[0].style.background = 'black';
        changes[1].style.opacity = '1';
        changes[2].style.opacity = '1';
    }else{
        changes[0].style.background = 'transparent';
        changes[1].style.opacity = '0';
        changes[2].style.opacity = '0';
    }
});

document.querySelectorAll('.clickedOff').forEach(item =>{
item.addEventListener('click', ()=>{
    if (item.classList == 'clickedOff') {
        item.classList.add('Clicked');
    } else {
        item.classList.remove('Clicked');
    }
})});