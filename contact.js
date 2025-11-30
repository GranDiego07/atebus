document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validaciones JS (3+): longitud nombre, email válido, captcha
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const captcha = grecaptcha.getResponse();

    if (name.length < 5) { // Mínimo para "nombres enmascarados"
        alert('El nombre enmascarado debe evocar misterio (mín. 5 caracteres)');
        return;
    }
    if (!email.includes('@') || !email.includes('.') || !email.includes('atebus')) { // Temático
        alert('Usa un engranaje de comunicación válido de Atebus');
        return;
    }
    if (captcha.length === 0) {
        alert('Verifica tu lealtad con el captcha revolucionario');
        return;
    }

    // Mostrar modal con datos
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalSubject').textContent = document.getElementById('subject').value;
    document.getElementById('modalMessage').textContent = document.getElementById('message').value;
    document.getElementById('successModal').style.display = 'flex';

    // Resetear
    this.reset();
    grecaptcha.reset();
});