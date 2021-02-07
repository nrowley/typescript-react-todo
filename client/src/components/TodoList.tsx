import { Box } from "@chakra-ui/react";
import React, { Component, ReactElement, useState } from "react";
import Todo from "./Todo";

type todo = {
  id: string;
  name: string;
};

interface Props {
  todos: Array<todo>;
  removeTodo(id: string): void;
}

export default function TodoList({ todos, removeTodo }: Props): ReactElement {
  return (
    <Box maxW="400px" w="100%">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          removeTodo={removeTodo}
        />
      ))}
    </Box>
  );
}
