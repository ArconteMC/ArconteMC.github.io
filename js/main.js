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


const $tiempo=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');
function Relojdigital(){
let f=new Date(),
dia= f.getDate(),
mes= f.getMonth()+1,
anio= f.getFullYear(),
diaSemana=f.getDay();
dia= ('0'+dia).slice(-2);
mes=('0'+mes).slice(-2)
let timeString= f.toLocaleTimeString();
$tiempo.innerHTML=timeString;
let semana=['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
let showSemana= (semana[diaSemana])
$fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`
}
setInterval(() =>{
Relojdigital()
},1000);