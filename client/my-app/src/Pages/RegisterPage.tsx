import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <VStack
      color={"white"}
      bg={"blackAlpha.200"}
      h={"100vh"}
      justify={"center"}
      alignItems={"center"}
    >
      <VStack
        bg={"gray.700"}
        // h={["100%", "60vh", "65vh"]}
        w={["100%", "60vw", "70vw"]}
        p={10}
        borderRadius={10}
        justify="space-around"
      >
        <Text fontSize={"1.5em"}>Register Form </Text>

        <Input bg={""} placeholder="username" />
        <Input bg={""} placeholder="name" />
        <Input bg={""} placeholder="email" />
        <Input bg={""} placeholder="password" />
        <Input bg={""} placeholder="confirm password" />
        <Input bg={""} placeholder="phone number" />
        <Input bg={""} placeholder="commercial Record" />
        <RadioGroup>
          <HStack>
            <Radio value="PRIVIDER">PROVIDER</Radio>
            <Radio value="CLIENT">CLIENT</Radio>
          </HStack>
        </RadioGroup>

        <Button bg={"blue.400"} w="100%">
          Submit
        </Button>
        <HStack>
          <Text>Already have acount ? </Text>
          <Link to={`/login`}>Login</Link>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default RegisterPage;
