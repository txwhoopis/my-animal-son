const btnmenu = document.getElementById('btnmenu');
const menuMobile = document.getElementById('menuMobile');

btnmenu.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
});
