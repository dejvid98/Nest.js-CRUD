import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body('task') task: string) {
    return this.tasksService.createTask(task);
  }

  @Delete()
  deleteTask(@Body('task') task: string) {
    return this.tasksService.deleteTask(task);
  }

  @Patch()
  updateTask(@Body('task') task: string, @Body('newTask') newTask: string) {
    return this.tasksService.updateTask(task, newTask);
  }
}
