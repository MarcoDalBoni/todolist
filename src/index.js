import { getProjects } from "./memory-manager";
import './style.css'

const projects = getProjects();
const todos = document.getElementById('todos');
const selectProjects = document.getElementById('select-project');
selectProjects.addEventListener('change', () => {
    loadTodos(selectProjects.value);
})

const loadDOM = () => {


    for(let project of projects) {
        let option = document.createElement('option');
        option.textContent = project.name;
        option.value = project.name;
        selectProjects.appendChild(option);
    }

    loadTodos('Default');
}

const loadTodos = (projectName) => {

    while(todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }

    let project = projects.filter((proj) => proj.name == projectName)[0];

    for(let todo of project.getTodos()) {
        let todoDiv = document.createElement('div');
        todoDiv.textContent = todo.printShort();
        todoDiv.classList.add('todo-div')
        todoDiv.classList.add(todo.priority)
        todos.appendChild(todoDiv);
    }
}

loadDOM();