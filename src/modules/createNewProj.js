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
    const pageView = document.querySelector('.pageView');
    const projectDiv = document.createElement('div');
    const projectTitle = document.createElement('h3');
    projectArray.forEach((project) => {
      console.log(project.title);
      
      projectTitle.textContent = `${project.title}`;
      projectDiv.appendChild(projectTitle);
      pageView.appendChild(projectDiv);
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