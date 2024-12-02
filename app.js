ToDoList = {
  tasks: [],
  currentId: 0,

  addTask(title, priority) {
    const newTask = {
      title,
      id: ++this.currentId,
      priority,
    };

    this.tasks.push(newTask);
    return newTask;
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTask(id, updates) {
    let task = this.tasks.find(({ id: taskId }) => taskId === id);

    if (task) {
      Object.assign(task, updates);
    }
  },

  sortTasks(field, order = 'asc') {
    const direction = order === 'desc' ? -1 : 1;

    this.tasks.sort((a, b) => {
      if (a[field] < b[field]) return -direction;
      if (a[field] > b[field]) return direction;
      return 0;
    });
  },

  findTaskById(id) { 
    return this.tasks.find((task) => task.id === id); 
  },

  applyUpdates(id, updates) { 
    const task = this.findTaskById(id);

    if (task) {
      Object.assign(task, updates); 
    }

    return this; 
  },

  
  addNewTask(newTask) {
    this.addTask(newTask.name, null); 
    this.tasks[this.tasks.length - 1].description = newTask.description;
    this.tasks[this.tasks.length - 1].order = newTask.order;
    this.lastAddedTaskId = this.tasks[this.tasks.length - 1].id;
    return this; 
  },
};

const newTask = {
  id: 1,
  name: 'test',
  description: 'описание',
  order: 0
};

ToDoList.addNewTask(newTask); 
console.log(ToDoList.tasks); 
ToDoList.updateTask(1, { description: 'новое описание' }); 
ToDoList.deleteTask(1); 
