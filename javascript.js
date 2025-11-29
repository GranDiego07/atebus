// Cargar datos del autor e institución dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    fetch('js/data.json')
        .then(res => res.json())
        .then(data => {
            if (document.getElementById('author-name')) {
                document.getElementById('author-photo').src = data.author.photo;
                document.getElementById('author-name').textContent = data.author.name;
                document.getElementById('author-email').textContent = data.author.email;
                document.getElementById('author-description').textContent = data.author.description;
            }
            if (document.getElementById('institution-name')) {
                document.getElementById('institution-logo').src = data.institution.logo;
                document.getElementById('institution-name').textContent = data.institution.name;
                document.getElementById('institution-description').textContent = data.institution.description;
            }
        });
});