const ramal = document.getElementById('ramal');

document.querySelector('.button1').onclick = () => {
    let x = Math.floor (Math.random () * 7 +1)
    switch(x) {
        case 1:   { ramal.innerHTML='Yes, You will have Good Fortune!!!'; break; }
        case 2:   { ramal.innerHTML='No, but you will got 1111$ every month'; break; }
        case 3:   { ramal.innerHTML='No, but you will got 1000$ this year'; break; }
        case 4:   { ramal.innerHTML='No, but you did good and there will be stranger invited you to join their space journey this year'; break; }
        case 5:   { ramal.innerHTML='No, but you will found flux capacitor this year'; break; }
        case 6:   { ramal.innerHTML='No, but you will got 999999$ this year'; break; }
        case 7:   { ramal.innerHTML='No, but someone will gave you a guitar and invited you to join the band'; }
    }
}

document.querySelector('.button').onclick = () => {
    
    ramal.innerHTML = '_____' ;
}
