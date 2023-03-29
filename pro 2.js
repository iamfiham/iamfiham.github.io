const open_menu = document.querySelector('.open-menu');

const close_menu = document.querySelector('.close-menu');

const menu = document.querySelector('#menu');

const menu_items = document.querySelectorAll('.m-l');






function open(){
    menu.style.transform="translateY(120vh)";
    close_menu.style.transform="translateY(calc(120vh + 20px))"    
}


function close() {
   if (window.innerWidth <= 600) {
    
    menu.style.transform="translateY(0px)";
    close_menu.style.transform="translateY(0px)"; 
   }
   
}

open_menu.addEventListener('click',open);
close_menu.addEventListener('click',close);

menu_items.forEach((x)=>{x.addEventListener('click',close)});
