import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async getTaskById(id: string) {
    // Lógica para obter a tarefa pelo ID
    return { id, name: 'Sample Task' };
  }
}
