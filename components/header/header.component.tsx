import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "./navigation/navigation.component";

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  const bg_image =
    "https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974";

  return (
    <Box bg={"blackAlpha.700"} position={"relative"}>
      <Navigation />

      <Box {...styles.header_container}>
        <Box {...styles.container_padding}>
          <Heading size={'3xl'} color={'white'}>
            The Total{" "}
            <Box as={"span"} color={"green.500"}>
              Educational Experience
            </Box>
          </Heading>
          <Box w={"70%"} py={5}>
            <Text as={"p"} color={"white"}></Text>
          </Box>

          <HStack>
            <Button
              as={AnchorLink}
              href={"#about"}
              colorScheme={"green"}
              borderRadius={0}
            >
              BLS Certification
            </Button>
            <Button
              as={AnchorLink}
              href={"#contact"}
              borderRadius={0}
              variant="outline"
              colorScheme={"whiteAlpha"}
            >
              Contact Us
            </Button>
          </HStack>
        </Box>

        <Box
          bg={`url('${bg_image}')`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          zIndex={-1}
          top={0}
          left={0}
          right={0}
          bottom={0}
          position={"absolute"}
        />
      </Box>
    </Box>
  );
}

const styles = {
  header_container: {
    h: "60vh",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },

  container_padding: {
    py: { base: 20, md: 40 },
    px: { base: 10, md: 40, lg: 60 },
  },
};
