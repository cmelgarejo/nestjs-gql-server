import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';
import { Post } from '../graphql';

@Resolver()
export class PostResolver {
  constructor(
    private postService: PostService,
    private userService: UserService,
  ) {}

  @Query()
  async posts(
    @Args('id') id?: number,
    @Args('sortByField') sortByField = 'id',
    @Args('sortByDirection') sortByDirection = '',
    @Args('startsWithField') startsWithField?: string,
    @Args('startsWith') startsWith?: string,
  ) {
    const posts = await this.postService.find(
      id,
      sortByField,
      sortByDirection,
      startsWithField,
      startsWith,
    );
    // Ugly, but ResolveField doesn't work!! :-(
    for (const p of posts) {
      (p as Post).user = (await this.getUser(p))[0];
    }
    return posts;
  }

  @ResolveField()
  async getUser(@Parent() post) {
    const { userId } = post;
    console.log(`Post: find user id ${userId}`);
    return await this.userService.find(userId);
  }
}
