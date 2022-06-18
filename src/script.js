const navMenu = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav-list');

navMenu.addEventListener('click',()=>{
    navList.classList.toggle('hidden');
    navList.classList.toggle('block');
})