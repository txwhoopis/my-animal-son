const btnmenu = document.getElementById('btnmenu')
const navmenu = document.getElementById('navmenu')

btnmenu.addEventListener('click', () => {
    navmenu.classList.toggle('ativo');
})