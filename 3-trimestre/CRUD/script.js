class Livro {
    constructor(titulo, autor, anoPublicacao, id) {
        this.id = (id != undefined ? id : Livro.gerarId() );
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }

    static gerarId() {
        return Math.floor(Math.random() * 10000);
    }

    detalhes() {
        return `${this.id} - Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Disponível: ${this.disponivel ? "Sim" : "Não"}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
        this.carregarDados();
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.salvarDados();
    }

    listarLivros() {
        return this.livros.map(livro => livro.detalhes()).join('<br>');
    }

    atualizarLivro(id, novosDados) {
        const livro = this.livros.find(l => l.id === id);
        if (livro) {
            livro.titulo = novosDados.titulo || livro.titulo;
            livro.autor = novosDados.autor || livro.autor;
            livro.anoPublicacao = novosDados.anoPublicacao || livro.anoPublicacao;
            this.salvarDados();
        }
    }

    removerLivro(id) {
        this.livros = this.livros.filter(livro => livro.id !== id);
        this.salvarDados();
    }

    salvarDados() {
        localStorage.setItem('livros', JSON.stringify(this.livros));
    }

    carregarDados() {
        const dados = JSON.parse(localStorage.getItem('livros'));
        console.log(dados)
        if (dados.length != 0) {
            dados.forEach(element => {
                let book = new Livro (element.titulo, element.autor, element.anoPublicacao, element.id);
                this.livros.push(book);
            });
        }
    }
}

const biblioteca = new Biblioteca();

document.getElementById('add').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;

    if (titulo && autor && ano) {
        const livro = new Livro(titulo, autor, ano);
        biblioteca.adicionarLivro(livro);
        alert('Livro adicionado com sucesso!');
        atualizarListaLivros();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('att').addEventListener('click', () => {
    const id = parseInt(document.getElementById('ID').value);
    const titulo = document.getElementById('titulo2').value;
    const autor = document.getElementById('autor2').value;
    const ano = document.getElementById('ano2').value;

    const novosDados = { titulo, autor, anoPublicacao: ano };
    biblioteca.atualizarLivro(id, novosDados);
    alert('Livro atualizado com sucesso!');
    atualizarListaLivros();
});

document.getElementById('del').addEventListener('click', () => {
    const id = parseInt(document.getElementById('id3').value);
    biblioteca.removerLivro(id);
    alert('Livro removido com sucesso!');
    atualizarListaLivros();
});

function atualizarListaLivros() {
    const listaLivros = biblioteca.listarLivros();
    document.getElementById('livrosList').innerHTML = listaLivros || 'Nenhum livro cadastrado.';
}

// Carregar a lista de livros ao iniciar a página
atualizarListaLivros();
