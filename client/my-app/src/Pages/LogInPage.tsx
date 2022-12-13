import {
  Button,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const logIn = async () => {
    try {
      const request = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          position: "top",
          duration: 3000,
          status: "error",
        });
        return;
      }
      toast({
        title: data.message,
        position: "top",
        duration: 3000,
        status: "success",
      });

      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch {
      toast({
        title: "server error",
        position: "top",
        duration: 3000,
        status: "error",
      });
    }
  };
  return (
    <VStack bg="#E6E3E4" h={"74vh"} justify={"center"} align={"center"}>
      <VStack
        boxShadow={"2xl"}
        bg={useColorModeValue("#e6e3e4", "gray.900")}
        borderRadius={20}
        p={5}
      >
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Username :{" "}
          </Text>
          <Input
            bg={""}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            w={["30vw", "30vw", "20vw"]}
          />
        </HStack>
        <HStack m={8}>
          <Text fontSize={"1.3em"} fontWeight="700">
            Password :{" "}
          </Text>
          <Input
            bg={""}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            w={["30vw", "30vw", "20vw"]}
          />
        </HStack>
        <HStack>
          <Button
            borderRadius={20}
            bg={"#1A0202"}
            color="whiteAlpha.900"
            w={"10em"}
            mt="10"
            onClick={logIn}
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
