import { CloseIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  id: string;
  title: string;
  removeTodo(id: string): void;
}

export default function Todo({ id, title, removeTodo }: Props): ReactElement {
  return (
    <Box
      id={id}
      maxW="400px"
      w="100%"
      mt="5"
      padding="5"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box
        maxW="400px"
        w="100%"
        mt="5"
        textAlign="left"
        fontWeight="semibold"
        as="h4"
      >
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem colStart={0}>
            <Box>{title}</Box>
          </GridItem>
          <GridItem colEnd={4}>
            <Box>
              <CloseIcon color="red.700" onClick={() => removeTodo(id)} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
