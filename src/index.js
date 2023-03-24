import './style.css';

import { projectFactory } from './modules/projects';
import { createNewProj } from './modules/createNewProj';

projectFactory();
const content = document.getElementById('content');

const header = document.createElement('h1');
header.textContent = 'Project Manager';
header.classList.add('projectHeader');


const pageView = document.createElement('div');
pageView.classList.add('pageView');



const sideBar = document.createElement('div');
sideBar.classList.add('side-bar');
const newProjBtn = document.createElement('div');
newProjBtn.classList.add('newProjBtn');
newProjBtn.textContent = 'Add a new project';
newProjBtn.addEventListener('click', createNewProj);
sideBar.appendChild(newProjBtn);



const footer = document.createElement('div');
footer.classList.add('projectFooter');
const date = new Date().getFullYear();
footer.innerHTML = `<a href="https://github.com/SalamanderCtesiphon" class="footer-link">
<h5>Seamus Quixote  &#169;  <a href="https://www.theodinproject.com/" class="footer-link"> The Odin Project</a>  <span id="currentYear">${date}</span> </h5>
</a>`;
footer.classList.add('footer-link');




pageView.appendChild(sideBar);

content.appendChild(header);
content.appendChild(pageView);
content.appendChild(footer);
const chores = projectFactory('Chores', 'Daily chores that I have to do in order to not be a nigger.', '12/7/1941', 'low');

console.log(chores);
