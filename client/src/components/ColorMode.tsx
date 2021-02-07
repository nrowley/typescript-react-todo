import { Stack, FormLabel, Switch, useColorMode, Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  align: String;
}

export default function ColorMode({}: Props): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Box mt="10px" ml="10px">
        <Stack direction="row">
          <FormLabel htmlFor="colorswitch">
            {colorMode === "light" ? "Dark" : "Light"}
          </FormLabel>
          <Switch
            name="colorswitch"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </Stack>
      </Box>
    </div>
  );
}
