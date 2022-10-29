import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Center,
  Divider,
  IconButton,
  Stack,
  HStack,
} from "@chakra-ui/react";

import * as Park from "@icon-park/react";
import {
  HeaderComponent,
  ContactFormComponent,
  AboutMeComponent,
  SkillComponent,
  ProjectComponent,
} from "../components";
import { Phone, PhoneTelephone } from "@icon-park/react";
import Header from "../components/header/header.component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TTEE - The Total Educational Experience</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Box
        position={"relative"}
        py={{ base: 10, md: 20 }}
        px={{ base: 10, md: 40, lg: 60 }}
        bg={"gray.100"}
        boxShadow={"xl"}
      >
        <SkillComponent />
        <Divider my={5} />
        <Box id={'about'}>
        <AboutMeComponent />
        </Box>
        

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
            <Park.Down size={32} />
          </Box>
        </Center>
      </Box>

      {/* <ProjectComponent /> */}

      <Box id="contact" bg={"blackAlpha.900"} py={10} px={{ base: 10, md: 40, lg: 60 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
          <ContactFormComponent />
          
          <Center>
          <Box>
            <Text color={'white'}>Contact Information</Text>
            <Heading size={'lg'} color={"white"}>Nadine Henry-Thomas</Heading>
            <Text color={"yellow"} fontWeight={"bold"}>
              {"AHA CPR Instructor".toUpperCase()}
            </Text>

            <HStack color={"white"} as={'a'} href={'tel:443-414-0807'}  alignItems={'center'} >
              <PhoneTelephone/>
              <Text  fontWeight={"medium"} color={"white"} >(443) 414-0807</Text>
            </HStack>
          </Box>
            {/* <Stack flexDirection={{ base: "row", lg: "column" }} gap={5}>
              <IconButton
                mt={2}
                size={"lg"}
                borderRadius={0}
                icon={<Park.Instagram size={28} />}
                aria-label={"Instagram"}
              />
              <IconButton
                size={"lg"}
                borderRadius={0}
                icon={<Park.InstagramOne size={28} />}
                aria-label={"LinkedIn"}
              />
              <IconButton
                size={"lg"}
                borderRadius={0}
                icon={<Park.Github size={28} />}
                aria-label={"Github"}
              />
            </Stack> */}
          </Center>
        </SimpleGrid>
      </Box>

      <Box as={"footer"} bg={"black"} p={5}>
        <Center>
          <Text color={"gray.500"}>
            All Rights Reserved by The Total Educational Experience ©2022
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Home;
