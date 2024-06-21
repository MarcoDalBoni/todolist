export default class Project {

    constructor(name) { 
        this.name = name;
        this.todolist = [];
    }

    set name(value) { this._name = value; }

    get name() { return this._name; }

    addTodo = (todo) => { this.todolist.push(todo); }

    removeTodo = (title) => { this.todolist = this.todolist.filter(todo => todo.title != title); }
    
    getTodos = () => { return this.todolist; }
}