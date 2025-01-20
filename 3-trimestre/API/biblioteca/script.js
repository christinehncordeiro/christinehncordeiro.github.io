const botãoAdicionar = document.getElementById("Adicionar");
const botãoEmprestar = document.getElementById("Emprestar");

const disponiveis = document.getElementById("Disponiveis");
const emprestados = document.getElementById("Emprestados");

const resposta = document.getElementById("resposta");

biblioteca = [];

class Livro {
    constructor (titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidade = true;
        this.qtdEmprestado = 0;
    }
}

function Adicionar (titulo, autor, disponivel, emprestimo) {
    const livrinho = new Livro(titulo, autor, disponivel, emprestimo);
    biblioteca.push(livrinho)
}

function Emprestar (titulo, autor) {
    biblioteca.find(livro => {
        if((livro.titulo == titulo && livro.autor == autor) && livro.disponibilidade) {
            livro.disponibilidade = false;
            livro.qtdEmprestado = livro.qtdEmprestado + 1;
        }
    });
}

function listaDisponiveis (array) {
    let disponivel = array.filter(livro => {
        return livro.disponibilidade == true;
    })

    disponivel.forEach(livro => {
        console.log("oi")
        resposta.innerHTML += "<p>Título " + livro.titulo + ", do autor " + livro.autor + ". Está " + livro.disponibilidade + " para disponivel e foi emprestado " + livro.qtdEmprestado + " vezes</p>"
    });
}

function listaEmprestados (array) {
    let titulosEmprestados = array.filter(livro => {
        return livro.disponibilidade == false;
    })

    titulosEmprestados = titulosEmprestados.map(livro => {
        return livro.titulo;
    })

    titulosEmprestados.forEach(livro => {
        resposta.innerHTML += "<p>Título " + livro + "</p>"
    });
}

let títuloAdicionar = document.getElementById("títuloAdicionar");
let autorAdicionar = document.getElementById("autorAdicionar");
let títuloEmprestar = document.getElementById("títuloEmprestar");
let autorEmprestar = document.getElementById("autorEmprestar");

botãoAdicionar.addEventListener("click", () => {
    Adicionar(títuloAdicionar.value, autorAdicionar.value);
    console.log(biblioteca)
    alert("Adicionado!")
    resposta.innerHTML = "";
});

botãoEmprestar.addEventListener("click", () => {
    Emprestar(títuloEmprestar.value, autorEmprestar.value);
    console.log(biblioteca)
    alert("Emprestado!")
    resposta.innerHTML = "";
});

disponiveis.addEventListener("click", () => {
    resposta.innerHTML = "";
    listaDisponiveis(biblioteca);
});

emprestados.addEventListener("click", () => {
    resposta.innerHTML = ""
    listaEmprestados(biblioteca);
});