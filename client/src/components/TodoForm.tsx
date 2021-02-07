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
import { GET_TODOS } from "../graphql/Queries";
import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { ADD_TODO, DELETE_TODO } from "../graphql/Mutations";
import { query } from "express";

interface Props {
  marginBottom: string;
}

type FormInputs = {
  title: string;
};

type TodoType = {
  id: string;
  name: string;
};

export default function TodoForm({ marginBottom }: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const [addTodo] = useMutation(ADD_TODO);
  const client = useApolloClient();

  const { register, handleSubmit, errors } = useForm<FormInputs>();

  const onSubmit = (data) => {
    addTodo({
      variables: { title: data.title },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  const removeTodo = (id: string) => {
    deleteTodo({
      variables: { id },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error...</Box>;

  var todos = data.getTodos;

  return (
    <Box mb={marginBottom}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.title}>
          <FormLabel htmlFor="name">Todo:</FormLabel>
          <Input
            name="title"
            id="title"
            placeholder="title"
            ref={register({
              required: {
                value: true,
                message: "You must enter a todo",
              },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <Button w="100%" maxW="400px" mt="10px" type="submit">
          Add Todo
        </Button>
        <TodoList todos={todos} removeTodo={removeTodo} />
      </form>
    </Box>
  );
}
