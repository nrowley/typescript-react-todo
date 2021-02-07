import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

interface Props {
  marginBottom: string;
}

type FormInputs = {
  todo: string;
};

type TodoType = {
  id: string;
  name: string;
};

export default function TodoForm({ marginBottom }: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<FormInputs>();
  const [todos, setTodos] = useState(new Array<TodoType>());

  const onSubmit = (data) => {
    setTodos((todos) => todos.concat({ id: uuidv4(), name: data.todo }));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Box mb={marginBottom}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.todo}>
          <FormLabel htmlFor="name">Todo:</FormLabel>
          <Input
            name="todo"
            id="todo"
            placeholder="todo"
            ref={register({
              required: {
                value: true,
                message: "You must enter a todo",
              },
            })}
          />
          <FormErrorMessage>
            {errors.todo && errors.todo.message}
          </FormErrorMessage>
        </FormControl>
        <Button w="100%" maxW="400px" mt="5px" type="submit">
          Add Todo
        </Button>
        <TodoList todos={todos} removeTodo={removeTodo} />
      </form>
    </Box>
  );
}
