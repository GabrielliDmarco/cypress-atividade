document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === 'password') {
            document.getElementById('message').innerText = 'Login bem-sucedido!';
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').innerText = 'Usuário ou senha inválidos!';
        }
    });
});
