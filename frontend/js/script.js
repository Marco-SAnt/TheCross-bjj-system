document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Obrigado pelo contato! Nossa equipe responderá em breve. OSS!");
    this.reset();
});

function trocarAba(idAba) {
    // Esconde todas as seções
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostra a selecionada
    document.getElementById(idAba).style.display = 'block';
    
    // Remove a classe ativa dos links e adiciona ao clicado
    document.querySelectorAll('.side-nav a').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function abrirModalNovoAluno() {
    document.getElementById('modalCadastroAluno').style.display = 'flex'; // Muda para flex para centralizar
}

function fecharModalCadastro() {
    document.getElementById('modalCadastroAluno').style.display = 'none';
    document.getElementById('formCadastroAluno').reset(); // Limpa o formulário ao fechar
}

// Fechar o modal clicando fora dele
window.onclick = function(event) {
    let modal = document.getElementById('modalCadastroAluno');
    if (event.target == modal) {
        fecharModalCadastro();
    }
}

// Lógica de envio do formulário (simulação)
document.getElementById('formCadastroAluno').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você coletaria os dados do formulário:
    const nome = document.getElementById('alunoNome').value;
    const email = document.getElementById('alunoEmail').value;
    const faixa = document.getElementById('alunoFaixa').value;
    const mensalidadePaga = document.getElementById('alunoMensalidadePaga').checked;

    console.log(`Novo aluno cadastrado: ${nome}, ${email}, Faixa: ${faixa}, Mensalidade Paga: ${mensalidadePaga}`);
    
    // No futuro, aqui você faria a chamada AJAX/Fetch para o seu Back-end Java
    
    alert(`Aluno ${nome} cadastrado com sucesso! (Simulação)`);
    fecharModalCadastro();
});