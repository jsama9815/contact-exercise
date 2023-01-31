import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    description = '';
    level = LEVELS.NORMAL;
    completed = false;

    constructor(name, description, level, completed){
        this.name = name;
        this.description = description;
        this.level = level;
        this.completed = completed;
    }
}