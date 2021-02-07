import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ColorMode from "./components/ColorMode";
import TodoForm from "./components/TodoForm";
import { ApolloProvider } from "@apollo/client";
import { client } from "./util/ApolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ColorMode align={"end"} />
        <Box maxW="400px" mx="auto" mt="10">
          <Heading maxW="400px" mb="10" mx="auto" textAlign="center">
            Create New Todo
          </Heading>
          <TodoForm marginBottom="10px" />
        </Box>
      </div>
    </ApolloProvider>
  );
}

export default App;
