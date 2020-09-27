import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(task: string) {
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(task: string) {
    const filteredTasks = this.tasks.filter(tasks => tasks !== task);
    this.tasks = [...filteredTasks];
    return filteredTasks;
  }

  updateTask(task: string, newTask: string) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks[taskIndex] = newTask;
    return this.tasks;
  }
}
