import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";
import { NextComponentType } from "next";

import { useForm  } from 'react-hook-form'


const ContactFormComponent: NextComponentType = () => {

  const { handleSubmit, formState: { errors }, register } = useForm()
  const onSubmit = (data: any) => console.log(data)


  console.log(errors)
  
  
  
  
  
  return (
    <Box as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Heading color={"white"}>Get In Touch</Heading>
      <Box as={"form"} py={10}>
        <InputGroup py={1}>
          <Input {...register('name', {
            required: "Your name is required"
          })} color={"white"} borderRadius={0} placeholder={"Name"} />
        </InputGroup>

        <InputGroup py={1}>
          <Input {...register('email', {
            required: "Your email is required"
          })} color={"white"} borderRadius={0} placeholder={"Enter email"} />
        </InputGroup>

        <InputGroup py={1}>
          <Input {...register('mobile', {})} color={"white"} type={"number"} borderRadius={0} placeholder={"Mobile"} />
        </InputGroup>

        <InputGroup py={1}>
          <Textarea {...register('message', {})} color={"white"} borderRadius={0} placeholder={"Your Message"} />
        </InputGroup>
      </Box>
      <Box display={"flex"} w={"full"} justifyContent={"right"}>
        <Button type={'submit'} borderRadius={0} variant={"outline"} color={"white"}>
          Send
        </Button>
      </Box>
    </Box>
  );
};


export default ContactFormComponent;
