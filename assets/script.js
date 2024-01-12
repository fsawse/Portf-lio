const teste = document.getElement("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    img.style.transform = 'translateX(${-idx * 400}px)';
}

setInterval(carrossel, 1800);