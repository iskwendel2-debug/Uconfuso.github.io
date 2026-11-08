const formCad = document.getElementById('formCadastro');
const sucessoCad = document.getElementById('sucessoCad');
const erroCad = document.getElementById('erroCad');

formCad.addEventListener('submit', (e) => {
    e.preventDefault();
    erroCad.classList.add('oculto');

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(resp => resp.user.updateProfile({ displayName: nome }))
        .then(async (resp) => {
    const usuario = resp.user;
    await firebase.firestore().collection('usuarios').doc(usuario.uid).set({
        nome: usuario.displayName,
        email: usuario.email,
        dataCadastro: firebase.firestore.FieldValue.serverTimestamp()
    });
    sucessoCad.classList.remove('oculto');
    setTimeout(() => window.location.href = 'area-cliente.html', 2000);
})
        .catch(erro => {
            erroCad.classList.remove('oculto');
            if (erro.code === 'auth/email-already-in-use') {
                erroCad.textContent = '❌ Esse e-mail já está cadastrado!';
            } else if (erro.code === 'auth/weak-password') {
                erroCad.textContent = '❌ Senha precisa ter pelo menos 6 caracteres!';
            } else {
                erroCad.textContent = '❌ ' + erro.message;
            }
        });
});