import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async healthcheck(): Promise<string> {
    return 'Application is running';
  }
}
