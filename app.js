let amigos = [];

const inputNome = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

inputNome.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const nome = inputNome.value.trim();

    if (nome === '') {
        alert('Digite um nome antes de adicionar.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputNome.value = '';
    inputNome.focus();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
