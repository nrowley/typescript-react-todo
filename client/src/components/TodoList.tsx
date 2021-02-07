import { Box } from "@chakra-ui/react";
import React, { Component, ReactElement, useState } from "react";
import Todo from "./Todo";

type todo = {
  id: string;
  title: string;
};

interface Props {
  todos: Array<todo>;
  removeTodo(id: string): void;
}

export default function TodoList({ todos, removeTodo }: Props): ReactElement {
  return (
    <Box mt="50px" maxW="400px" w="100%">
      {todos.map(({ id, title }) => (
        <Todo key={id} id={id} title={title} removeTodo={removeTodo} />
      ))}
    </Box>
  );
}
