import './style.css';

const content = document.getElementById('content');

const header = document.createElement('h1');
header.textContent = 'Project Manager';
header.classList.add('projectHeader');

content.appendChild(header);