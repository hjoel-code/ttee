import { Center, Box } from "@chakra-ui/react";
import { Down } from "@icon-park/react";
import React from "react";

export default function DiamondComponent() {
  return (
    <Center
      borderRadius={5}
      w={20}
      h={20}
      top={-10}
      left={{ base: 10, md: 60 }}
      transform={"rotate(45deg)"}
      bg={"gray.100"}
      position={"absolute"}
      boxShadow={"lg"}
    >
      <Box transform={"rotate(-45deg)"}>
        <Down size={32} />
      </Box>
    </Center>
  );
}
