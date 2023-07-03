import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    const task1 = new Task();
    task1.id = 1;
    task1.name = 'Task 1';
    task1.dueDate = '2023-01-01';
    task1.status = 'NOT_STARTED';
    task1.description = 'Description 1';
    this.tasks.push(task1);
    return this.tasks;
  }

  createTask(name: string, dueDate: string, description?: string): Task {
    const task = new Task();
    task.id = this.tasks.length + 1;
    task.name = name;
    task.dueDate = dueDate;
    task.status = 'NOT_STARTED';
    task.description = description;
    this.tasks.push(task);
    return task;
  }
}
