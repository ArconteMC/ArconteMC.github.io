

const mainNav = document.getElementById('main-nav');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', ()=> {
    mainNav.classList.toggle('nav--show');
});

window.addEventListener('resize', ()=>{
    if(mainNav.classList.contains('nav--show')){
        mainNav.classList.remove('nav--show');
    mariMenu.classList.remove('nav--show');('main-menu--show');
    }
});




let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});


