const projectFactory = (title, description, dueDate, priority, todoArray) => {
  const todoArray = [];
  return { title, description, dueDate, priority, todoArray };
};


export { projectFactory };