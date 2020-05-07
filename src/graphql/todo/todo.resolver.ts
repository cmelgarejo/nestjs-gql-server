import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from '../graphql';
import { UserService } from '../user/user.service';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService,
    private readonly userService: UserService,
  ) {}

  @Query()
  async todos(
    @Args('id') id?: number,
    @Args('sortByField') sortByField = 'id',
    @Args('sortByDirection') sortByDirection = '',
    @Args('startsWithField') startsWithField?: string,
    @Args('startsWith') startsWith?: string,
  ) {
    const todos = await this.todoService.find(
      id,
      sortByField,
      sortByDirection,
      startsWithField,
      startsWith,
    );
    // Ugly, but ResolveField doesn't work!! :-(
    for (const t of todos) {
      (t as Post).user = (await this.getUser(p))[0];
    }
    return todos;
  }

  @ResolveField()
  async user(@Parent() todo: Todo) {
    const { userId } = todo;
    console.log(`Todo: find user id ${userId}`);
    return await this.userService.find(userId);
  }
}
