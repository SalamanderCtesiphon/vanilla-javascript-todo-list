import './style.css';

const content = document.getElementById('content');

const header = document.createElement('h1');
header.textContent = 'Project Manager';
header.classList.add('projectHeader');

const footer = document.createElement('div');
footer.classList.add('projectFooter');

const pageView = document.createElement('div');
pageView.classList.add('pageView');



content.appendChild(header);
content.appendChild(pageView);
content.appendChild(footer);
