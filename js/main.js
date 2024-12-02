// Script principal
document.addEventListener('DOMContentLoaded', () => {
    // Éléments du DOM
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showLoginBtn = document.getElementById('showLogin');
    const showRegisterBtn = document.getElementById('showRegister');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    // Fonctions pour afficher/masquer les formulaires
    const showLogin = () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    };

    const showRegister = () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    };

    // Événements pour basculer entre les formulaires
    showLoginBtn.addEventListener('click', showLogin);
    showRegisterBtn.addEventListener('click', showRegister);
    switchToRegister.addEventListener('click', showRegister);
    switchToLogin.addEventListener('click', showLogin);

    // Gestion du formulaire de connexion
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        console.log('Tentative de connexion:', { email, password });
        // Ajoutez ici la logique de connexion
    });

    // Gestion du formulaire d'inscription
    document.getElementById('register').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas !');
            return;
        }

        console.log("Tentative d'inscription:", { name, email, password });
        // Ajoutez ici la logique d'inscription
    });
});
