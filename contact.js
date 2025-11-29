document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validaciones JS (3+)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const captcha = grecaptcha.getResponse();

    if (name.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Ingresa un correo válido');
        return;
    }
    if (captcha.length === 0) {
        alert('Por favor completa el captcha');
        return;
    }

    // Mostrar modal con datos
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalSubject').textContent = document.getElementById('subject').value;
    document.getElementById('modalMessage').textContent = document.getElementById('message').value;
    document.getElementById('successModal').style.display = 'flex';

    // Resetear formulario y captcha
    this.reset();
    grecaptcha.reset();
});