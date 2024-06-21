import { getProjects } from "./memory-manager";
import './style.css'

const content = document.getElementById('content');

const loadDOM = () => {

    while(content.firstChild) { content.removeChild(content.firstChild); }

    let projects = getProjects();

}