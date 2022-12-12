import { Button, HStack, Input, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function LogInPage() {
  return (
    <VStack bg="#E6E3E4" h={"74vh"} justify={"center"} align={"center"}>
      <VStack boxShadow={"2xl"} bg={useColorModeValue("#e6e3e4","gray.900")} borderRadius={20} p={5}>
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Username :{" "}
          </Text>
          <Input bg={""} w={["30vw", "30vw", "20vw"]} />
        </HStack>
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Password :{" "}
          </Text>
          <Input bg={""} w={["30vw", "30vw", "20vw"]} />
        </HStack>
        <HStack>
          <Button
            borderRadius={20}
            bg={"#1A0202"}
            color="whiteAlpha.900"
            w={"10em"}
            mt="10"
          >
            Sign in
          </Button>
        </HStack>
        <HStack>
          <Text>you don't have account ? </Text>{" "}
          <Link to={"/register"}>Register</Link>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default LogInPage;
