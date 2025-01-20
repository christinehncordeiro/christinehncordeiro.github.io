const filme = document.getElementById('filme');
const botão = document.getElementById('botao');
const resposta = document.getElementById('resposta')

async function PesquisarFilme (nome){
    const url = await fetch("https://omdbapi.com/?s=" + nome + "&page=1&apikey=ef424d95");
    let filmes = await url.json();

    console.log(filmes.Search)
    let filmesFiltrados = filmes.Search.map(function(filme) {
        return {
            titulo: filme.Title, 
            ano: filme.Year
        };
    }).filter(function(filme) {
                return filme.ano >= 2000;
            });

    filmesFiltrados.forEach(filme => {
        resposta.innerHTML += "<p> O filme " + filme.titulo + ", de "  + filme.ano + "</p>";
    });
}

botão.addEventListener("click", async () => {
    resposta.innerHTML = "";

    PesquisarFilme(filme.value)
})