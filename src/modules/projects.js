const projectFactory = (title, description, dueDate, priority, todos) => {
  let todos = [];
  return { title, description, dueDate, priority, todos };
};


export { projectFactory };