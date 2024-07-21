const palavras = ["ilustração","gravura","imagem","figura","estampa","forma","contorno","recorte","traço","esboço","rabisco","rascunho","estilo","design","linha","estampado","representação","caracterização","retrato","criação","artista","designer","desenhista","papel","lápis","lapiseira","borracha","colorir","pintar","aquarela","giz","tinta","canetinha","pilot","marcador","caneta","brush","sketchbook","apontador","estilete"];
let palavraOculta = palavras[Math.floor(Math.random()*palavras.length)]// sorteie uma palavra
console.log(palavraOculta);
let divForca = document.querySelector("#palavra-oculta");
let letrasErradas = [];
let tentativasRestantes = 6;

let i = 0;
let resposta = "";
while(i < palavraOculta.length)
{
    let result = "_";
    resposta = resposta + result;
    i = i + 1;
}
divForca.innerHTML = resposta;
resposta = resposta.split('');//split passou a string para vetor


document.getElementById("adivinhar").addEventListener("click", function() {
    const letra = document.getElementById("letra").value.toLowerCase();
    if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)) {
        alert("Insira uma e somente uma letra por tentativa!");
        return;
    }
    if (palavraOculta.includes(letra)) {
        // Atualizar exibição da palavra oculta
        let i = 0;
        while(i < palavraOculta.length)
        {
            if(palavraOculta[i] == letra)
            {
                resposta[i] = letra;
            }
            i = i + 1;
        }
        divForca.innerHTML = resposta;
    } else {
        letrasErradas.push(letra);
        tentativasRestantes--;
        // Atualizar exibição das letras erradas e tentativas restantes
        let erradaAtua = document.querySelector("#letras-erradas");
        let tentaAtua = document.querySelector("#tentativas");
        erradaAtua.innerHTML = `Incorretas: ${letrasErradas}`;
        tentaAtua.innerHTML = `Chances: ${tentativasRestantes}`;
        /*if (tentativasRestantes==5){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/1.jpg";
        }
        if (tentativasRestantes==4){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/2.jpg";
        }
         else if (tentativasRestantes==3){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/3.jpg";
        } else if (tentativasRestantes==2){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/4.jpg";
        } else if (tentativasRestantes==1){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/5.jpg";
        } else if (tentativasRestantes==0){
            document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/6.jpg";
        }*/
        switch(tentativasRestantes)
        {
            case 5:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/1.jpg";
            break;
            case 4:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/2.jpg";
            break;
            case 3:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/3.jpg";
            break;
            case 2:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/4.jpg";
            break;
            case 1:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/5.jpg";
            break;
            case 0:document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/6.jpg";
        }
    }
    // Verificar se o jogador ganhou ou perdeu
    if(tentativasRestantes == 0)
    {
        document.querySelector("#imagem").src="https://file.garden/ZpwgixhnTG6Zm1rb/6.jpg";
        alert(`Perdeu, jogue novamente - Resposta: ${palavraOculta}`);
        location.reload();
    }
    let k = 0;
    let somatorio = 0;
    while(k < resposta.length)
    {
        if(resposta[k] == "_")
        {
            break;
        }
        else
        {
            somatorio = somatorio + 1;
        }
        k = k + 1;
    }
    if(somatorio == resposta.length)
    {
        alert(`Você ganhou! Parabéns - a palavra era: ${palavraOculta}`);
        location.reload();
    }
});
