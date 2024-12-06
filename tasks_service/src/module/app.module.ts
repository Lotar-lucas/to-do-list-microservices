import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { PrismaService } from '../service/prisma.service';

@Module({
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {}
