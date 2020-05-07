import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async users(
    @Args('id') id?: number,
    @Args('sortByField') sortByField = 'id',
    @Args('sortByDirection') sortByDirection = '',
    @Args('startsWithField') startsWithField?: string,
    @Args('startsWith') startsWith?: string,
  ) {
    return await this.userService.find(
      id,
      sortByField,
      sortByDirection,
      startsWithField,
      startsWith,
    );
  }

  @ResolveField()
  async posts(@Parent() user) {
    console.log('I NEED POSTS!', user);
    return [];
  }
}
