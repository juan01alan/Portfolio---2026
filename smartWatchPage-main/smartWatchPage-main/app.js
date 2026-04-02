const navbtn = document.querySelector('.navbtn');
const navbar = document.getElementById('navbar');
const itemsnavbar = document.querySelectorAll('.navbar ul li');

navbtn.addEventListener('click',()=>{
    if (navbar.style.left == '-110%') {
        navbar.style.left = '0%';
    } else {   
        navbar.style.left = '-110%';
    }
});

itemsnavbar.forEach((item)=>{
    item.addEventListener('click',()=>{
        navbar.style.left = '-110%';
})});