import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

function LogInPage() {
  return (
    <VStack bg="#E6E3E4" h={"74vh"} justify={"center"} align={"center"}>
      <VStack background="linear-gradient(180deg, #E6E3E4 0%, rgba(230, 227, 228, 0) 100%);">
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Username :{" "}
          </Text>
          <Input bg={""} w="20vw" />
        </HStack>
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Password :{" "}
          </Text>
          <Input bg={""} w="20vw" />
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
      </VStack>
    </VStack>
  );
}

export default LogInPage;
