/*1. Escreva um programa em JavaScript que apresente uma caixa de alerta para o
usuário com uma informação qualquer.*/

alert("Hello!!");

/*2. Faça um programa em JavaScript em que o usuário clicará com o mouse sobre
um botão e em seguida uma mensagem de alerta será apresentada com uma
mensagem qualquer.
*/
function funcao1()
{
    alert("Eu sou um alert!");
}


/*3. Faça um programa JavaScript que receba 3 números informados pelo usuário e
em seguida apresente uma mensagem de alerta informando qual é o maior
número dentre os números informados*/

function maiorNumero(){

    let numero1 = parseFloat(prompt("Informe o primeiro número:"));
    let numero2 = parseFloat(prompt("Informe o segundo número:"));
    let numero3 = parseFloat(prompt("Informe o terceiro número:"));

    let maiorNumero = numero1;

    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
      }
      
      if (numero3 > maiorNumero) {
        maiorNumero = numero3;
      }

      
    alert("O maior número é " + maiorNumero);
}

/*4. Faça um programa JavaScript em que o usuário informará a sua idade e o
programa emitirá uma mensagem dizendo se o usuário é ou não menor de idade*/

let idade = parseInt(prompt("Informe sua idade:"));

if (idade < 18) {
  alert("Você é menor de idade.");
} else {
  alert("Você é maior de idade.");
}

/*5. Faça um programa JavaScript em que o usuário informará 3 números e o
programa calcula a média aritmética desses números.
*/

function media(){
    let numero1 = parseFloat(prompt("Informe o primeiro número:"));
    let numero2 = parseFloat(prompt("Informe o segundo número:"));
    let numero3 = parseFloat(prompt("Informe o terceiro número:"));

    let media = (numero1 + numero2 + numero3) / 3;
    
    alert("A média aritmética dos números informados é " + media);
}

/*6-Faça um programa JavaScript em que o usuário informará sua altura e peso e o
programa calcula o seu IMC. Utilize as TAGs: <input>, <button>, e <div>
em sua página. Use a <div> com um identificador e apresente nela o resultado
do cálculo do IMC.*/

function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = (peso / (altura * altura)).toFixed(2);

    var resultado = document.getElementById("resultadoIMC");
    resultado.innerHTML = "Seu IMC é: " + imc;
}

/*7-Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou
5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23. Faça um programa
JavaScript que encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/

function calcular() {
    var soma = 0;

    for (var i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }

    var resultado = document.getElementById("resultMUltiplos");
    resultado.innerHTML = soma;

}

/*8. Cada novo termo na sequência de Fibonacci é gerado adicionando os dois
termos anteriores. Começando com 0 e 1, os primeiros termos serão:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ( ... )
Considerando os termos da sequência de Fibonacci a partir dos pares 0 e 1,
cujos valores não excedam cinquenta mil, encontre a soma dos termos pares.*/

function gerarFibonacci() {
    let limit = 50000;
    let a = 0;
    let b = 1;
    let sum = 0;

    while (b <= limit) {
      let c = a + b;
      a = b;
      b = c;
      if (c % 2 === 0) {
        sum += c;
      }
    }

    document.getElementById("fibonacci").textContent = "A soma dos termos pares da sequência de Fibonacci até " + limit + " é " + sum + ".";
}

/*9. Listando os seis primeiros números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o
sexto primo é 13. Qual é o 1001º número primo? Faça um programa JavaScript
que apresente esse número para o usuário*/

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function calcularPrimo(){

    let count = 1;
    let num = 2;
  
    while (count < 1001) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
  
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `O 1001º número primo é ${num - 1}.`;
  }

  /*10.Crie um programa que exiba em uma tabela e destaque todos os números
primos que estão entre 0 e 200.*/
  
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function gerarTabela(){

    const tabela = document.getElementById("tabela");

    for (let i = 0; i <= 200; i++) {
      const row = tabela.insertRow(-1);
      const numero = row.insertCell(0);
      numero.innerHTML = i;
      const primo = row.insertCell(1);
      primo.innerHTML = isPrime(i) ? "Sim" : "Não";
      if (isPrime(i)) {
        row.style.backgroundColor = "yellow";
      }
    }
  }

/*11.Cálculo do Delta (Δ) de uma função de segundo grau.
Sabendo que:
a = 2, b = 8 e c = – 24
O valor de delta é dado pela seguinte expressão: Δ = b² – 4ac, em que a, b e c
são coeficientes da equação e Δ é delta.
Tomando o exemplo anterior, na equação 2x² + 8x – 24 = 0, delta vale:
Δ = b² – 4ac
Δ = 8² – 4*2*(– 24)
Δ = 64 + 192
Δ = 256
Crie um programa JavaScript que faça esse cálculo, mostrando o cálculo passo
a passo e o resultado final, a partir de números informados pelo usuário!*/


function calcularDelta() {
    let a = Number(document.getElementById("coef_a").value);
    let b = Number(document.getElementById("coef_b").value);
    let c = Number(document.getElementById("coef_c").value);
    let delta = Math.pow(b, 2) - 4*a*c;
    document.getElementById("passos").innerHTML = "Δ = b² - 4ac <br>";
    document.getElementById("passos").innerHTML += "Δ = " + b + "² - 4*" + a + "*" + c + "<br>";
    document.getElementById("passos").innerHTML += "Δ = " + Math.pow(b, 2) + " - " + 4*a*c + "<br>";
    document.getElementById("passos").innerHTML += "Δ = " + delta;
    document.getElementById("resultadoDelta").innerHTML = "O delta é: " + delta;
}

/*12.Dada uma sequência de caracteres, inverta o seu conteúdo e apresente ao
usuário o resultado invertido.*/

function inverterCaracteres() {

    let sequencia = document.getElementById("inputText").value;

    let resultado = "";
    for (let i = sequencia.length - 1; i >= 0; i--) {
        resultado += sequencia[i];
    }
    document.getElementById("resultInverter").innerHTML = "Resultado: " + resultado;
}

/*13. 1) Elaborar um programa que apresente o resultado de uma operação de
potenciação com números aleatórios, inteiros e positivos;
2) Apresente os números envolvidos na operação (base, expoente e
potência/resultado);
3) O exercício de deverá ser elaborado SEM o uso de função JavaScript
Math.pow();
Observação:
A potenciação (ou exponenciação) é uma operação onde um dado número é
multiplicado por ele mesmo, uma quantidade 'n' de vezes.
an = b
Onde:
a = base;
n = expoente;
b = potência. */
function calcularPotenciacao(){

    let base = Math.floor(Math.random() * 10) + 1;
		let expoente = Math.floor(Math.random() * 5) + 1;

		let potencia = 1;
		for (let i = 0; i < expoente; i++) {
			potencia *= base;
		}

		let resultado = document.getElementById("resultadoPotencia");
		resultado.innerHTML = `${base} elevado a ${expoente} é igual a ${potencia}.`;
}

/*14. 1) Elaborar um programa que apresente o resultado de uma operação de
potenciação usando os números 2 (dois) e 8 (oito) como base e expoente
respectivamente;
2) Apresente passo a passo os resultados, começando com o expoente em 0
(zero) até o expoente máximo (8);
3) O exercício de deverá ser elaborado SEM o uso de função JavaScript
Math.pow() ou do laço de repetição for();
4) Apresente a base e o expoente no formato padrão de potenciação (Ex: 32),
utilizando a TAG <sup>. */

function expoente(){
      const base = 2;
      const expoenteMaximo = 8;

      let resultado = 1;

      const tabelaResultados = document.getElementById("tabela-resultados");

      for (let expoente = 0; expoente <= expoenteMaximo; expoente++) {
        resultado *= base;

        const linha = document.createElement("tr");

        const celulaExpoente = document.createElement("td");
        const celulaOperacao = document.createElement("td");
        const celulaResultado = document.createElement("td");

        celulaExpoente.innerHTML = base + "<sup>" + expoente + "</sup>";
        celulaOperacao.innerHTML = `=  ${base}`;
        for (let i = 1; i < expoente; i++) {
          celulaOperacao.textContent += ` × ${base} `;
        }
        celulaResultado.textContent = resultado;

        linha.appendChild(celulaExpoente);
        linha.appendChild(celulaOperacao);
        linha.appendChild(celulaResultado);

        tabelaResultados.appendChild(linha);
      }

}

/*15*/

function calcularOperacao2(){
    const base = 2;
    const exponent = 8;
    let result = 1;

    for (let i = 0; i <= exponent; i++) {
      const potencia = `${base}<sup>${i}</sup> = ${result}`;
      const itemLista = document.createElement("li");
      itemLista.innerHTML = potencia;
      document.getElementById("resultadosPotenciacao").appendChild(itemLista);
      result *= base;
    }
}

/*16*/
function calcularPow(){
  const base = 2;
  const exponent = 8;
  const potenciasList = document.getElementById("potenciasPow");

  for (let i = 0; i <= exponent; i++) {
    const potencia = Math.pow(base, i);
    const item = document.createElement("li");
    item.innerHTML = `${base}<sup>${i}</sup> = ${potencia}`;
    potenciasList.appendChild(item);
  }
}

/*19*/

function ordenar() {
  const sequencia = document.getElementById("input").value;

  const ordenado = sequencia.split('').sort().join('');

  const resultado = document.getElementById("resultadoOrdenacao");
  resultado.innerHTML = `Sequência original: ${sequencia}<br>
                         Sequência ordenada: ${ordenado}`;
}


/*20*/

function inverter() {
  var entrada = document.getElementById("entrada").value;
  var resultado = entrada.split("").reverse().join("");
  document.getElementById("invert").innerHTML = "Sequência original: " + entrada + "<br> Sequência invertida: " + resultado;
}
  
