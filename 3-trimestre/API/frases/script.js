async function API () {
    let resposta = await fetch(url);
    frase = await resposta.json();
    console.log(frase);
}

API();