export default class Todo {

    constructor(title, description, dueDate, priority, done) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
    }

    set title(value) { this._title = value; }

    get title() { return this._title; }

    set description(value) { this._description = value; }

    get description() { return this._description; }

    set dueDate(value) { this._dueDate = value; }

    get dueDate() { return this._dueDate; }

    set priority(value) { this._priority = value; }

    get priority() { return this._priority; }

    set done(value) { this._done = value; }

    get done() { return this._done; }

    setDone = () => { this._done = true; }

    printShort = () => { 
        return `${this.title}: due to 
        ${this.dueDate.getFullYear()}/${this.dueDate.getMonth()}/${this.dueDate.getDate()}`; 
    }
}