// MENU NO CELULAR
const botaoMenu = document.getElementById('botaoMenu');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});

// FECHAR MENU AO CLICAR NUM LINK
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
    });
});

// FORMULÁRIO
const form = document.getElementById('formContato');
const sucesso = document.getElementById('mensagemSucesso');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simula envio
    sucesso.classList.remove('oculto');
    form.reset();
    
    setTimeout(() => {
        sucesso.classList.add('oculto');
    }, 3000);
});