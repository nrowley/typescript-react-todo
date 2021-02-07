import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { MyContext } from "../../context";
import Todo from "../entities/Todo";

@ObjectType()
class DeletionResult {
  @Field(() => Boolean)
  deleted!: Boolean;
}

@Resolver()
export class TodosResolver {
  @Query(() => [Todo])
  getTodos(@Ctx() { em }: MyContext): Promise<Todo[]> {
    return em.find(Todo, {});
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg("title", () => String) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Todo | null> {
    const todo = em.create(Todo, { title, completed: false });
    await em.persistAndFlush(todo);

    return todo;
  }

  @Mutation(() => DeletionResult)
  async deleteTodo(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<DeletionResult> {
    try {
      const todo = await em.findOne(Todo, { id });
      if (todo) {
        await em.nativeDelete(Todo, { id });
        return {
          deleted: true,
        };
      } else {
        return {
          deleted: false,
        };
      }
    } catch {
      return {
        deleted: false,
      };
    }
  }

  @Mutation(() => Todo)
  async completeTodo(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<Todo | null> {
    const todo = await em.findOne(Todo, { id });
    if (todo) {
      //flip flop the completed status
      todo.completed = !todo.completed;
    }

    return todo;
  }
}
