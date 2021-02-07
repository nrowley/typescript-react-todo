import {
  Box,
  Button,
  FormLabel,
  Heading,
  Stack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import ColorMode from "./components/ColorMode";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <ColorMode align={"end"} />
      <Box maxW="400px" mx="auto" mt="10">
        <Heading maxW="400px" mb="10" mx="auto" textAlign="center">
          Create New Todo
        </Heading>
        <TodoForm />
      </Box>
    </div>
  );
}

export default App;
