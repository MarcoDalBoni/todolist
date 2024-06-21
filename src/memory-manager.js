import Todo from './todo.js';
import Project from './project.js';

const defaultStep1 = new Todo(
    'default1',
    'first step of default project',
    new Date('2024-9-24'),
    'high',
    true
);

const defaultStep2 = new Todo(
    'default2',
    'second step of default project',
    new Date('2024-10-24'),
    'normal',
    true
);

const defaultStep3 = new Todo(
    'default3',
    'third step of default project',
    new Date('2024-11-24'),
    'low',
    false
);

const defaultProject = new Project('Default');
defaultProject.addTodo(defaultStep1);
defaultProject.addTodo(defaultStep2);
defaultProject.addTodo(defaultStep2);

const projects = [
    defaultProject,
];

const getProjects = () => {
    return projects;
}

export {getProjects};
