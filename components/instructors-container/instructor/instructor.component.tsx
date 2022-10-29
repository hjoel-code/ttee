import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import InstructorImage from "./instructor-image.component";

interface InstructorProps {
  avatar: string;
  about: string;
  title: string;
  name: string;
  ext: string;
}

export default function Instructor({
  avatar,
  about,
  title,
  name,
  ext,
}: InstructorProps) {
  return (
    <Box display={{ base: "block", lg: "flex" }} alignItems={'center'}>
      <InstructorImage avatar={avatar} />

      <Box textAlign={{ base: "center", lg: "unset" }}>
        <Heading color={"white"}>
          {name}{" "}
          <Box as={"span"} fontSize={"md"}>
            {ext.toUpperCase()}
          </Box>
        </Heading>
        <Text fontWeight={"bold"}>{title.toUpperCase()}</Text>
        <Text color={"white"}>{about}</Text>
      </Box>
    </Box>
  );
}
