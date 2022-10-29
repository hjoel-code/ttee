import { Box } from "@chakra-ui/react";
import React from "react";
import Instructor from "./instructor/instructor.component";

export default function InstructorsContainer() {
  const instructors = [
    {
      ext: "DNP, MSN-Ed, CMSRN, PCCN",
      name: "Nadine Henry-Thomas",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et aliquid modi aperiam quo distinctio consequatur iusto beatae soluta perspiciatis!",
      title: "AHA CPR Instructor",
      avatar:
        "https://images.unsplash.com/photo-1606596556957-f6566cc865a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    },
  ];
  return (
    <Box {...styles.container}>
      {instructors.map((instructor, key) => (
        <Instructor key={key} {...instructor} />
      ))}
    </Box>
  );
}

const styles = {
  container: {
    bg: "green.500",
    pt: 5,
    pb: { base: 20, lg: 10 },
    px: { base: 10, md: 40, lg: 60 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
