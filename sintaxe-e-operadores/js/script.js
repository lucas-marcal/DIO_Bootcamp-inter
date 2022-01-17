const resdiv = document.getElementById('res');
const btn = document.getElementById('check');


btn.addEventListener('click', check = () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    let restxt = `Os números ${num1} e ${num2}`
    restxt += num1===num2 ? " são iguais" : " não são iguais";
    restxt += `. Sua soma é ${num1+num2}, que é `;

    num1+num2>10 ? restxt += "maior que 10"
    : num1+num2==10 ? restxt += "exatamente 10"
    : restxt += "menor que 10";

    num1+num2>20 ? restxt += " e maior que 20."
    : num1+num2==20 ? restxt += " e exatamente 20."
    : restxt += " e menor que 20.";

    resdiv.innerHTML = `<div class="resposta"><p>${restxt}</p></div>`
});