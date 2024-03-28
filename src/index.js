document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.querySelector('form');

  newTaskForm.addEventListener('submit' , (e) => {
    
    e.preventDefault();
    
    const newToDo = e.target.querySelector("#new-task-description").value

    buildToDo(newToDo);

    newTaskForm.reset();
  })
});

function buildToDo (newToDo) {
  
  const taskList = document.createElement('li');
  
  const deleteFromList = document.createElement('button');

  deleteFromList.textContent = 'x';

  taskList.textContent = newToDo;
  
  taskList.appendChild(deleteFromList);

  document.querySelector('#tasks').appendChild(taskList);

  deleteFromList.addEventListener('click', deleteTask);
}

function deleteTask(e) {
  e.target.parentNode.remove();
}