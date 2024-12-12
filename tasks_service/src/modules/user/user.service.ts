import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUserById(id: string) {
    // Lógica para obter o usuário pelo ID
    return { id, name: 'Sample User' };
  }
}
