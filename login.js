// TROCAR ABA
const abaCliente = document.getElementById('abaCliente');
const abaAdmin = document.getElementById('abaAdmin');
const formCliente = document.getElementById('formCliente');
const formAdmin = document.getElementById('formAdmin');
const mensagemErro = document.getElementById('mensagemErro');

function mostrarAbaCliente() {
    abaCliente.classList.add('ativa');
    abaAdmin.classList.remove('ativa');
    formCliente.classList.remove('oculto');
    formAdmin.classList.add('oculto');
    mensagemErro.classList.add('oculto');
}

function mostrarAbaAdmin() {
    abaAdmin.classList.add('ativa');
    abaCliente.classList.remove('ativa');
    formAdmin.classList.remove('oculto');
    formCliente.classList.add('oculto');
    mensagemErro.classList.add('oculto');
}

abaCliente.addEventListener('click', mostrarAbaCliente);
abaAdmin.addEventListener('click', mostrarAbaAdmin);

// CREDENCIAIS DE TESTE
const contas = {
    cliente: {
        email: 'cliente@email.com',
        senha: 'senha123',
        destino: 'area-cliente.html'
    },
    admin: {
        email: 'admin@meusite.com',
        senha: 'admin123',
        destino: 'area-admin.html'
    }
};

// LOGIN CLIENTE
formCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailCliente').value;
    const senha = document.getElementById('senhaCliente').value;

    if (email === contas.cliente.email && senha === contas.cliente.senha) {
        localStorage.setItem('tipoUsuario', 'cliente');
        window.location.href = contas.cliente.destino;
    } else {
        mensagemErro.classList.remove('oculto');
    }
});

// LOGIN ADMIN
formAdmin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailAdmin').value;
    const senha = document.getElementById('senhaAdmin').value;

    if (email === contas.admin.email && senha === contas.admin.senha) {
        localStorage.setItem('tipoUsuario', 'admin');
        window.location.href = contas.admin.destino;
    } else {
        mensagemErro.classList.remove('oculto');
    }
});