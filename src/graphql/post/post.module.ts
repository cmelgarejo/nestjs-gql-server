import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver.ts';
import { PostService } from './post.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

@Module({
  imports: [UserModule],
  providers: [PostResolver, PostService, UserService],
})
export class PostModule {}
