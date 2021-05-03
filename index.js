const menu = document.getElementById('menu');
const option = document.getElementById('option');
const close_menu =document.getElementById('close_menu');

function showMenu(){
    menu.classList.remove('menu-d');
    option.classList.remove('header-d');
}

function closeMenu(){
    menu.classList.add('menu-d');
    option.classList.add('header-d');
}

menu.onclick = showMenu;
close_menu.onclick = closeMenu;
