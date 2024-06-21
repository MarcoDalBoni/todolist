import Todo from './todo.js';
import Project from './project.js';

const projects = [
    new Project('Default'),
];

const getProjects = () => {
    return projects;
}

export {getProjects};
