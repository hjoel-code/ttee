import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import MenuContainer from "../menu-container/menu-container.component";

interface DrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function DrawerContainer({
  isOpen,
  onOpen,
  onClose,
}: DrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <MenuContainer />
      </DrawerContent>
    </Drawer>
  );
}
