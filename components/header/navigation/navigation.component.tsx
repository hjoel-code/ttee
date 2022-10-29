import React from "react";

import {
  Box,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuFold } from "@icon-park/react";
import DrawerContainer from "./drawer-container/drawer.component";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DrawerContainer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box position={"absolute"} {...styles.navigation_container}>
        <HStack justifyContent={"space-between"}>
          <Heading color={"white"}>2T2E</Heading>
          {/* <Image src={"/logo.png"} width={10} /> */}
          <HStack color={"white"}>
            <IconButton
              onClick={onOpen}
              variant={"unstyled"}
              icon={<MenuFold size={32} />}
              aria-label={"Menu"}
            />
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

const styles = {
  navigation_container: {
    top: { base: 0, md: 10 },
    left: { base: 0, md: 40, lg: 60 },
    right: { base: 0, md: 60 },
    px: { base: 5, md: 5, lg: 10 },
    py: 2,
    bg: "whiteAlpha.300",
    rounded: { base: 0, md: 10 },
    boxShadow: "xl",
  },
};
