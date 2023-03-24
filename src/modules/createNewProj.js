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
    
    console.log(projTitleInput.value);
    
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