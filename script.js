const addBtn = document.querySelector("#add-button");
const input = document.querySelector('input[type="text"]');
const container = document.querySelector(".app-container");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskBox = document.createElement('div');
  taskBox.classList.add('tasks');

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const taskP = document.createElement('p');
  taskP.textContent = taskText;
  taskP.style.color = 'black';

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = "✅";
  doneBtn.style.opacity = 0.5;
  doneBtn.addEventListener('click', ()=> {
    if (taskP.classList.contains('done')){
      taskP.classList.remove('done');
      doneBtn.style.opacity = 0.5;
    }
    else{
      taskP.classList.remove('red', 'blue', 'green');
      taskP.classList.add('done');
      [redBtn, blueBtn, greenBtn].forEach(btn => btn.style.opacity = 0.5);
      doneBtn.style.opacity = 1;

    }
});

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener('click', () => { 
taskBox.remove();
  });

  const redBtn = document.createElement('button');
  redBtn.innerHTML = '<span>🔴</span>';
  redBtn.style.opacity = 0.5;
  redBtn.addEventListener('click', () => { 
    if (taskP.classList.contains('red')){
      taskP.classList.remove('red');
      redBtn.style.opacity = 0.5;
    }
  else{
    taskP.classList.remove('red', 'blue', 'green', 'done');
    taskP.classList.add('red');
    [redBtn, blueBtn, greenBtn, doneBtn].forEach(btn => btn.style.opacity = 0.5);
    redBtn.style.opacity = 1;
  }
  });
 
  const blueBtn = document.createElement('button');
  blueBtn.innerHTML = '<span>🔵</span>';
  blueBtn.style.opacity = 0.5;
 blueBtn.addEventListener('click', () => {
  if(taskP.classList.contains('blue')){
    taskP.classList.remove('blue');
    blueBtn.style.opacity = 0.5;
  }
  else{
    taskP.classList.remove('red', 'blue', 'green' , 'done');
    taskP.classList.add('blue');
    [redBtn, blueBtn, greenBtn, doneBtn].forEach(btn => btn.style.opacity = 0.5);
    blueBtn.style.opacity= 1;
  }

 });

  const greenBtn = document.createElement('button');
  greenBtn.innerHTML = '<span>🟢</span>';
  greenBtn.style.opacity = 0.5; 
  greenBtn.addEventListener('click', ()=>{
    if (taskP.classList.contains('green')){
      taskP.classList.remove('green');
      greenBtn.style.opacity = 0.5;
    }
    else { 
      taskP.classList.remove('red', 'blue', 'green' , 'done');
      taskP.classList.add('green');
      [redBtn, blueBtn, greenBtn, doneBtn].forEach(btn => btn.style.opacity = 0.5);
      greenBtn.style.opacity = 1;
    }
  });

  const status = document.createElement('select');
  status.classList.add('select-status');
  status.innerHTML = `
    <option value="">--Select status--</option>
    <option value="not started">not started</option>
    <option value="pending">pending</option>
    <option value="in progress">in progress</option>
  `;
  const date = document.createElement('input');
  date.type = "date";
  date.classList.add('date');

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '📝';
  editBtn.addEventListener('click', ()=>{
    const editDiv = document.createElement('div');
    editDiv.classList.add ('edit-task');
    let taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.classList.add('task-input');
    taskInput.value = taskP.textContent;
    const saveBtn = document.createElement ('button');
    saveBtn.innerText = 'Save';
    saveBtn.classList.add('save-button');
    editDiv.append(taskInput, saveBtn);
    taskBox.replaceChild(editDiv, taskP);

  saveBtn.addEventListener('click', () => {
  taskP.textContent= taskInput.value;
  taskBox.replaceChild(taskP, editDiv);
  });
  taskInput.addEventListener('keypress', (e) =>{
  if (e.key === 'Enter'){
    saveBtn.click();
  }
});
  });

  buttons.append(doneBtn, deleteBtn, redBtn, blueBtn, greenBtn, status, date, editBtn);

  taskBox.append(buttons, taskP);

  container.append(taskBox);

  input.value = "";
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
if (e.key === 'Enter'){
  addTask();
}
});

