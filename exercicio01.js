import PromptSync from "prompt-sync";
const prompt = PromptSync()

//Exercicio 01


function somar(valor1, valor2){
   return valor1 + valor2 
}

function subtrair(valor1, valor2){
    return valor1 - valor2
}

function multiplicar(valor1, valor2){
    return valor1 * valor2
}
function dividir(valor1, valor2){
    return valor1 / valor2
}

function calcular(valor1, valor2, escolha){
    switch(escolha){
        case `somar`:
            return somar(valor1,valor2)
            break
        case `subtrair`:
            return subtrair(valor1,valor2)
            break 
        case `multiplicar`:
            return multiplicar(valor1,valor2)
            break       
        case `dividir`:
            return dividir(valor1,valor2)
            break
        default:
            console.log(`Operacao invalida!`) 
            break    
    }
}
    const valor1 = Number(prompt(`Digite o primeiro valor: `))
    const valor2 = Number(prompt(`Digite o segundo valor: `))
    const escolha = prompt(`Digite a operacao que deseja efetuar(somar, subtrair, dividir ou multiplicar):`)
    const resultado = calcular(valor1, valor2, escolha)
    console.log(`O resultado da operacao de ${escolha} e ${resultado}`)


//Exercicio 02


    class Cliente {
        constructor(nome, telefone, renda, email) {
          this.nome = nome;
          this.telefone = telefone;
          this.renda = renda;
          this.email = email;
        }
      
        verificarCredito() {
          return new Promise((resolve, reject) => {
            if (this.renda > 2000) {
              resolve("Crédito aprovado");
            } else {
              reject("Crédito recusado");
            }
          });
        }
      }
      
      async function criarCliente() {
        const nome = prompt("Digite o nome do cliente: ");
        const telefone = prompt("Digite o telefone do cliente: ");
        const renda = parseFloat(prompt("Digite a renda do cliente: "));
        const email = prompt("Digite o e-mail do cliente: ");
      
        const cliente = new Cliente(nome, telefone, renda, email);
      
        try {
          const resultado = await cliente.verificarCredito();
          console.log(resultado);
        } catch (erro) {
          console.error(erro);
        }
      }
      
      criarCliente();
