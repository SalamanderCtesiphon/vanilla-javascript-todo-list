import { projectFactory } from "./projects";

const projectArray = [];

const createNewProj = () => {
  const newProjBtn = document.querySelector('.newProjBtn');
  newProjBtn.style.display = 'none';

  
  const projTitleForm = document.createElement('form');
  const sideBar = document.querySelector('.side-bar');
  const projTitleLabel = document.createElement('label');
  const projTitleInput = document.createElement('input');
  const submitBtn = document.createElement('button');

  submitBtn.classList.add('newProjBtn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newProjBtn.style.display = 'flex';
    projTitleForm.style.display = 'none';
    const title = projTitleInput.value;

    const newProject = projectFactory(title);
    projectArray.push(newProject);
    const display = document.querySelector('.display');
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv');
    const projectTitle = document.createElement('h3');
    const addTodos = document.createElement('button');
    projectArray.forEach((project) => {      
      projectTitle.textContent = `${project.title}`;
      
      addTodos.addEventListener('click', (e) => {
        console.log(e);
      })
      addTodos.classList.add('newProjBtn');
      addTodos.textContent = 'add todos';
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(addTodos);
      display.appendChild(projectDiv);
  });
  });

  
 
  projTitleForm.classList.add('newProjForm');
  
  projTitleLabel.textContent = 'New Project Title:';
  submitBtn.textContent = "Submit";
  
  projTitleForm.appendChild(projTitleLabel);
  projTitleForm.appendChild(projTitleInput);
  projTitleForm.appendChild(submitBtn);
  sideBar.appendChild(projTitleForm);


};

export { createNewProj };
