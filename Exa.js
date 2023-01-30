// Definir toutes les variables 
const todoList = document.querySelector('.list-group');
const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');

// Charger tous les ecouteurs d'evenements
allEventListners();

//Fonctions de tous les auditeurs d'evenements
function allEventListners() {
    //Ajouter un evenement a faire
    form.addEventListener('submit', addTodo);
    // Supprimer et terminer l'evenement todo

    todoList.addEventListener('click', removeTodo);
    //Effacer ou supprimer toutes les taches
    clearBtn.addEventListener('click', clearTodoList);
    //Rechercher un evenement a faire
}


// Ajouter une fonction d'element de tache
function addTodo(e) {
    if (todoInput.value !== '') {
        // Creer un element li
        const li = document.createElement('li');
        // Ajouter une classe
        li.className = 'list-group-item';
        // Creer un element d'etendue
        const span = document.createElement('span');
        //Ajouter une classe
        span.className = 'todo-text';
        //Creer un noeud de texte et l'ajouter a la portee
        span.appendChild(document.createTextNode(todoInput.value));
        // Ajouter span a li
        li.appendChild(span);
        // Ajouter li a ul (todoList)
        todoList.appendChild(li);
        // Ajouter une icone complete et supprimer
        console.log(span)
        li.innerHTML = `<li class="list-group-item">
        <i class="far fa-square done-icon"></i>
        <i class="far fa-check-square done-icon"></i>
        <span class="todo-text">`+todoInput.value+`</span>
        <i class="fas fa-pen" style="cursor: pointer; color=yellow; align-text=right;"></i>
        <i class="far fa-trash-alt"></i>
        </li>`;
        
    } 
    else {
        alert('Please add todo');
    }

    e.preventDefault();
    todoInput.value = '';
}

// Supprimer et terminer la fonction d'element todo
function removeTodo(e) {
    // Supprimer la tache
    if (e.target.classList.contains('fa-trash-alt')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.remove();
        }
        
    }

    //Complete todo
    if (e.target.classList.contains('todo-text')) {
        e.target.parentElement.classList.toggle('done');
    }
    if (e.target.classList.contains('done-icon')) {
        e.target.parentElement.classList.toggle('done');
    }
   

}

// Fonction d'ajout de taches
function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const allItem = document.querySelectorAll('.list-group-item');
    for (let task of allItem) {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'flex';
        } 
        else {
            task.style.display = 'none';
        }
    };
}