const hideMenu = () => {
    MenuWrap.classList.remove('active');
    one.classList.remove('active-menu');
    two.classList.remove('active-menu');
    three.classList.remove('active-menu');
    menuIconWrap.classList.remove('active-menu');
}
const nav_container_a_tags = document.querySelectorAll('.navcontainer a');

const menuLinks = [...document.querySelectorAll('navcontainer ul li a')];
menuLinks.forEach(a=> {
    a.addEventListener('click, hideMenu');
});







// 
const            nav_chbox = document.querySelector('input[id="nav"]');
const nav_container_a_tags = document.querySelectorAll('.nav-container a');
 
window.onload = () => {
  nav_container_a_tags.forEach(a_tag => {
    a_tag.addEventListener('click', () => {
      nav_chbox.checked = false;    
    })
  })  
}
