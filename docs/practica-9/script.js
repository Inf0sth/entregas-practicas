document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (name === "" || !nameRegex.test(name)) {
        nameError.textContent = "Nombre inválido. Solo letras y espacios.";
        valid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Correo no válido.";
        valid = false;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        valid = false;
    }
    
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        valid = false;
    }
    
    if (valid) {
        const loader = document.getElementById("loader");
        const successMessage = document.getElementById("successMessage");
        loader.classList.remove("hidden");
        setTimeout(() => {
            loader.classList.add("hidden");
            successMessage.classList.remove("hidden");
            window.location.href = "https://inf0sth.github.io/entregas-practicas/practica-8/index.html";
        }, 5000);
    }
});