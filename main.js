const btnSuma = document.querySelector('.btnSuma');
const btnResta = document.querySelector('.btnResta');
const btnMulti = document.querySelector('.btnMulti');
const btnDiv = document.querySelector('.btnDiv');
const btnMod = document.querySelector('.btnMod');
const btnPow = document.querySelector('.btnPow');

function suma(a,b){
    return a + b;
}
function resta(a,b){
    return a - b;
}
function multiplicacion(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
function mod(a,b){
    return a % b;
}
function exp(a,b){
    return a ** b;
}
btnSuma.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = suma(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});

btnResta.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = resta(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});

btnMulti.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = multiplicacion(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});

btnDiv.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = division(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});

btnMod.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = mod(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});

btnPow.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("num1").value,10);
    const b = parseInt(document.getElementById("num2").value,10);
    const c = exp(a,b);
    document.getElementById("result").innerHTML = "Resultado: " + c;
});