document.addEventListener('DOMContentLoaded', function() {
    // Configuraciones globales
    let edit = false;

    // Probando si JS está funcionando
    console.log('JavaScript is working!');
    fetchTasks();

    // Ocultar inicialmente el contenedor de resultados de tareas
    document.getElementById('task-result').style.display = 'none';

    // Evento de keyup para búsqueda
    document.getElementById('search').addEventListener('keyup', function() {
        let searchValue = document.getElementById('search').value;
        if (searchValue) {
            // Crear objeto FormData para enviar el valor de búsqueda
            let formData = new FormData();
            formData.append('search', searchValue);

            // Realizar la solicitud Fetch a 'task-search.php'
            fetch('task-search.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())  // Leer la respuesta como texto
            .then(response => {
                if (response) {
                    let tasks = JSON.parse(response);  // Parsear la respuesta JSON
                    let template = '';

                    // Crear el HTML dinámicamente para mostrar las tareas
                    tasks.forEach(task => {
                        template += `
                            <li><a href="#" class="task-item">${task.name}</a></li>
                        `;
                    });

                    // Mostrar los resultados y actualizar el contenedor
                    document.getElementById('task-result').style.display = 'block';
                    document.getElementById('container').innerHTML = template;
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
