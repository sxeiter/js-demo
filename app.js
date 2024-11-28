'use strict'

let ToDoList = {
  tasks: [],
  currentId: 0, 
  
  addTask(title, priority) {
    const newTask = {
      title,
      id: ++this.currentId, 
      priority
    };
    
    this.tasks.push(newTask);
    return newTask;
  },
  
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },
  
  updateTask(id, updates) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        Object.assign(this.tasks[i], updates);
        break;
      }
    }
  },
  
  sortTasks(field, order = 'asc') {
    const direction = order === 'desc' ? -1 : 1;
    
    this.tasks.sort((a, b) => {
      if (a[field] < b[field]) return -direction;
      if (a[field] > b[field]) return direction;
      return 0;
    });
  }
};