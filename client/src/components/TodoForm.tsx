import React, { ReactElement } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Props {}

type FormInputs = {
  todo: string;
};

export default function TodoForm({}: Props): ReactElement {
  const { register, handleSubmit, watch, errors } = useForm<FormInputs>();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">Todo:</FormLabel>
          <Input
            name="todo"
            id="todo"
            placeholder="todo"
            ref={register({ required: true })}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <Button w="100%" maxW="400px" mt="5px" type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
}
