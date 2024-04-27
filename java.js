const hideMenu = () => {
    MenuWrap.classList.remove('active');
    one.classList.remove('active-menu');
    two.classList.remove('active-menu');
    three.classList.remove('active-menu');
    menuIconWrap.classList.remove('active-menu');
}

const menuLinks = [...document.querySelectorAll('.wrapper ul li a')];
menuLinks.forEach(a=> {
    a.addEventListener('click, hideMenu');
});