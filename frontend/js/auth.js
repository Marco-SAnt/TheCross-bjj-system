function autenticar() {
    const email = document.getElementById('email').value.toLowerCase();
    
    // Simulação simples de rotas
    if (email.includes('admin') || email.includes('professor')) {
        window.location.href = 'dashboard-admin.html';
    } else if (email !== "") {
        window.location.href = 'dashboard-aluno.html';
    } else {
        alert("Por favor, insira um e-mail.");
    }
}