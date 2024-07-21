//QUESTÃO 1
const lerConteudo = seletor => document.querySelector(seletor).value

/**
 * função que permite criar elementos HTML
 * @param {*} tagName - O nome do elemento HTML a ser criado
 * @param {*} seletorElemPai  - O nome do id pai
 * @param {*} conteudoTextual - O conteúdo textual digitado
 * @returns void
 */
const criarElemHTML = (tagName, seletorElemPai, conteudoTextual) => {
    //cria o elemento
    const obj = document.createElement(tagName)   
    //joga na árvore dom
    document.querySelector(seletorElemPai).appendChild(obj)
    //adiciona texto nele
    obj.textContent = conteudoTextual

}

const botao = document.querySelector("#adicionar")

botao.addEventListener("click", function()
{
    /*//pegar conteúdo textual do input
    //const entradaIPT = lerConteudo("#tarefa")
    //const entradaIPT = document.querySelector("#tarefa")//Pegando o elemento html - o id
    //jeito tosco de resolver
    //criar um elemento do li em #list-tarefas
    let elemLI = `<li>${entradaIPT.value}</li>`//Pegando o valor do id
    console.log(elemLI);
    //adicionar o novo elemento no dom (dentro da li)
    const tarefasUL = document.querySelector("#lista-tarefas")
    tarefasUL.innerHTML += elemLI
    //apagar o conteúdo textual do input
    entradaIPT.value = " ";// Trocando o valor por nada
    */
    const entrada = lerConteudo("#tarefa")//Pegar o conteúdo textual do input
    //criarElemHTML("li", "#lista-tarefas", entrada) //Criar um elemento HTML

    //Se valor digitado no input for vazio, sair da função
    if(entrada)//"" == false
    {
        //criar o li
        const objLI = document.createElement("li")
        //adicionar o texto li
        objLI.textContent = entrada
        //criar um link (a)
        const objA = document.createElement("a")
        //adicionar o texto do a
        objA.textContent = "Apagar"
        objA.href = "#"
        objLI.appendChild(objA)
        //adicionar na lista
        document.querySelector("#lista-tarefas").appendChild(objLI)

        //Apaga o conteúdo textual do input
        document.querySelector("#tarefa").value = ""
     }
     else
     {
        alert("Está vazio, mané!")
     }
})

const listaDeLinks = document.querySelector("#lista-tarefas")


listaDeLinks.addEventListener("click", function(evento)
{
    //console.log(evento)

    if(evento.target.nodeName == "A")
    {
        evento.target.parentElement.remove() //O elemento pai (parentElement) do elemento que eu apertei (evento.target) será removido (remove())
    }
})






//QUESTÂo 2
const produtos = [
    { nome: 'Laptop', preco: 1000, quantidade: 5 },
    { nome: 'Mouse', preco: 20, quantidade: 10 },
    { nome: 'Teclado', preco: 30, quantidade: 8 }
  ];
  
  
function calcularValorTotalEstoque(produtos) {
    // Sua implementação aqui
    let valorTotal;
    valorTotal= 0;
    let i;
    i = 0;
    while(i < 3)
    {
        let produto;
        produto = produtos[i].preco * produtos[i].quantidade;
        valorTotal = valorTotal + produto;
        i = i + 1;
    }
    return valorTotal;
}
  
  const valorTotal = calcularValorTotalEstoque(produtos);
  
  console.log('Valor total do estoque:', valorTotal);