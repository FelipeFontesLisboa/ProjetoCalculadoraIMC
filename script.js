const button = document.getElementById('button');

const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) => {
    if (imc> 40) return 'Obesidade Morbita';
    if (imc > 35) return 'Obesidade Severa';
    if (imc > 30) return 'Obesidade';
    if (imc > 25) return 'Sobrepeso';
    if (imc > 18) return 'Peso Ideal !';
    if (imc > 15) return 'Peso Top!';
    return 'Abaixo Do Peso Desnutrição';
}

const imcCalc = () => {
    const valorImc = ( + peso.value / (+altura.value * + altura.value)).toFixed(1);
    
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc)
