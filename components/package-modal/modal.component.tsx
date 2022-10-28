import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ReactElement } from "react";
import Package from "./package-modal.component";

interface ModalProps {
  bg_image: string;
  package_name: string;
  overviews: string[];
  RenderComponent: (props: {
    onClick: (e?: any) => void;
    image_url: string;
    skill: string
    [key: string]: any;
  }) => ReactElement;
}

export default function PackageModal({
  overviews,
  bg_image,
  package_name,
  RenderComponent,
}: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickEvent = () => onOpen();

  return (
    <>
      {RenderComponent({ onClick: onClickEvent, image_url: bg_image, skill: package_name })}
      <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalCloseButton />
          <Package
            overviews={overviews}
            bg_image={bg_image}
            package_name={package_name}
          />
        </ModalContent>
      </Modal>
    </>
  );
}
