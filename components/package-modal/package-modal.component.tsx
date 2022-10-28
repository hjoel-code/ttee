import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Heading,
  Center,
  Text,
  List,
  ListItem
} from "@chakra-ui/react";
import React from "react";

interface PackageProps {
  overviews: string[];
  bg_image: string;
  package_name: string;
}

export default function Package({
  overviews,
  bg_image,
  package_name,
}: PackageProps) {
  return (
    <Box boxShadow={"dark-lg"} bg={"white"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Box position={"relative"}>
          <Image
            h={"full"}
            objectFit={"cover"}
            alt="Person doing CPR"
            src={bg_image}
          />
          <Box
            top={0}
            bottom={0}
            left={0}
            right={0}
            bg={"blackAlpha.800"}
            position={"absolute"}
            px={5}
          >
            <Center h={"full"}>
              <Box>
                <Heading color={"white"} size={"xl"}>
                  The Total{" "}
                  <Box as="span" color="green.600">
                    Educational Experience
                  </Box>
                </Heading>
                <Text fontWeight={"bold"} color={"yellow"}>
                  {package_name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>
        <Box p={5}>
          <Tabs colorScheme={"green"}>
            <TabList>
              <Tab>Program Overview</Tab>
              <Tab>Program Fees</Tab>
            </TabList>

            <TabPanels overflowY={"scroll"} h={"50vh"}>
              <TabPanel>
                <Heading size={"md"} as={"h3"}>
                  Program Overview
                </Heading>
                <Box>
                  <List>
                    {overviews.map((overview, index) => {
                      return <ListItem key={index}> {overview} </ListItem>;
                    })}
                  </List>
                </Box>
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
