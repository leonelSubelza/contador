const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const txtNumero = document.getElementById("numero");


const sumar = btnSumar.addEventListener('click', ()=>{
    const num = Number(txtNumero.innerHTML) + 1;
    txtNumero.innerHTML = num;

    if(num>0 && !txtNumero.classList.contains('positivo')){
        txtNumero.classList.remove('negativo');
        txtNumero.classList.add('positivo');
    }
    if(num==0){
        txtNumero.classList.remove('negativo');
        txtNumero.classList.remove('positivo');
        txtNumero.setAttribute('color', '#fff');
    }

    cambiarValor();
});

const restar = btnRestar.addEventListener('click', ()=>{
    const num = Number(txtNumero.innerHTML) - 1;
    txtNumero.innerHTML = num;
    
    

    if(num<0 && !txtNumero.classList.contains('negativo')){
        txtNumero.classList.remove('positivo');
        txtNumero.classList.add('negativo');
    }
    if(num==0){
        txtNumero.classList.remove('negativo');
        txtNumero.classList.remove('positivo');
        txtNumero.setAttribute('color', '#fff');
    }
    cambiarValor();
});

const cambiarValor = () => {
    txtNumero.classList.add('numero-cambiarValor');
    setTimeout( () => {
        txtNumero.classList.remove('numero-cambiarValor');
    },50);
};

