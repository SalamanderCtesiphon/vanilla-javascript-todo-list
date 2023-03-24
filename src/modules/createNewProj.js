const createNewProj = () => {
  const newProjBtn = document.querySelector('.newProjBtn');
  newProjBtn.style.display = 'none';

  
  const projTitleForm = document.createElement('form');
  const sideBar = document.querySelector('.side-bar');
  const projTitleLabel = document.createElement('label');
  const projTitleInput = document.createElement('input');
  const submitBtn = document.createElement('button');
 
  projTitleForm.classList.add('newProjForm');
  
  projTitleLabel.textContent = 'New Project Title:';
  submitBtn.textContent = "Submit";
  
  projTitleForm.appendChild(projTitleLabel);
  projTitleForm.appendChild(projTitleInput);
  projTitleForm.appendChild(submitBtn);
  sideBar.appendChild(projTitleForm);
};

export { createNewProj };