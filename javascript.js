document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos personales e institución
    fetch('json/datos.json')
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

    // Cargar rutas disponibles (para propuesta.html o página principal)
    if (document.getElementById('rutas-container')) {
        fetch('json/rutas.json')
            .then(res => res.json())
            .then(rutas => {
                const container = document.getElementById('rutas-container');
                rutas.forEach(ruta => {
                    const card = document.createElement('div');
                    card.className = 'ruta-card';
                    card.innerHTML = `
                        <h3>${ruta.destino}</h3>
                        <p><strong>Salida:</strong> ${ruta.salida}</p>
                        <p><strong>Empresa:</strong> ${ruta.empresa}</p>
                        <button onclick="cargarHorario('${ruta.archivo}')">Ver horarios</button>
                    `;
                    container.appendChild(card);
                });
            });
    }
});

// Función para cargar un horario específico
function cargarHorario(archivo) {
    fetch(`js/${archivo}`)
        .then(res => res.json())
        .then(horario => {
            let html = `<h3>Horario - ${horario.ruta}</h3><table class="horario-table">`;
            html += `<tr><th>Día</th><th>Horas</th></tr>`;
            for (const [dia, horas] of Object.entries(horario.horarios)) {
                html += `<tr><td>${dia.replace('_', ' ')}</td><td>${horas.join(' • ')}</td></tr>`;
            }
            html += `</table>`;
            document.getElementById('horario-detalle').innerHTML = html;
        });
}