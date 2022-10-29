import { Box, Image } from "@chakra-ui/react";
import React from "react";

interface ImageProps {
  avatar: string;
}

export default function InstructorImage({ avatar }: ImageProps) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      py={5}
      pr={{ base: 0, lg: 20 }}
    >
      <Box borderRadius={"full"} bg={"white"} p={5} boxShadow={"xl"}>
        <Box
          w={40}
          h={40}
          overflow={"hidden"}
          display={"flex"}
          justifyContent={"center"}
          borderRadius={"full"}
          alignItems={"center"}
          boxShadow={"lg"}
        >
          <Image
            w={"full"}
            src={avatar}
            alt={"Instructor Image"}
          />
        </Box>
      </Box>
    </Box>
  );
}
