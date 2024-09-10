document.addEventListener('DOMContentLoaded', function() {

    let edit = false;

    console.log('JavaScript is working!');
    fetchTasks();

    document.getElementById('task-result').style.display = 'none';

    
    document.getElementById('search').addEventListener('keyup', function() {
        let searchValue = document.getElementById('search').value;
        if (searchValue) {
            
            let formData = new FormData();
            formData.append('search', searchValue);

            
            fetch('task-search.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())  
            .then(response => {
                if (response) {
                    let tasks = JSON.parse(response); 
                    let template = '';

                    
                    tasks.forEach(task => {
                        template += `
                            <li><a href="#" class="task-item">${task.name}</a></li>
                        `;
                    });

                    
                    document.getElementById('task-result').style.display = 'block';
                    document.getElementById('container').innerHTML = template;
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
