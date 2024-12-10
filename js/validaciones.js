document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario mientras validamos

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Validación de nombre de usuario
    const usernameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]+$/;
    if (!username) {
        errorMessage.textContent = "Nombre obligatorio.";
        return;
    }
    if (!usernameRegex.test(username)) {
        errorMessage.textContent = "Nombre inválido.";
        return;
    }
    if (username.length > 20) {
        errorMessage.textContent = "El nombre no puede tener más de 20 caracteres.";
        return;
    }

    // Validación de la contraseña
    const passwordRegex = /^[a-zA-Z0-9$%&/().]{8,16}$/;
    if (!password) {
        errorMessage.textContent = "La contraseña es obligatoria.";
        return;
    }
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/().";
        return;
    }

    // Si todo está bien, redirigir al portal
    errorMessage.textContent = "";
    alert("Acceso exitoso a CarbaShop");
    // Aquí iría la redirección, por ejemplo:
    // window.location.href = "main.html";
});

function limpiarFormulario() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error-message").textContent = "";
}
