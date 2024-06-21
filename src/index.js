import { getProjects } from "./memory-manager";
import './style.css'

const content = document.getElementById('content');
const selectProjects = document.getElementById('select-project');

const loadDOM = () => {


    let projects = getProjects();

    for(let project of projects) {
        let option = document.createElement('option');
        option.textContent = project.name;
        selectProjects.appendChild(option);
    }

    for(let todo of projects[0].getTodos()) {
        let todoDiv = document.createElement('div');
        todoDiv.textContent = todo.printShort();
        content.appendChild(todoDiv);
    }
}

loadDOM();