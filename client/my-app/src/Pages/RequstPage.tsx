import React, { useEffect, useState } from "react";

import {
  Box,
  Center,
  Flex,
  Heading,
  Button,
  Input,
  VStack,
  Textarea,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

export default function RequestPage() {
  interface IUser {
    id: string;
    username: string;
    role: string;
  }
  const [requestName, settName] = useState("");
  const [requestDiscription, setDiscription] = useState("");
  const [requestBudget, setBudget] = useState(0);

  const navigate = useNavigate();

  const { projectid } = useParams();
  const toast = useToast();


  console.log(projectid)
  const submmitRequest = async () => {
    try {
      const request = await fetch(`/api/v1/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          requestName: requestName,
          requestDiscription: requestDiscription,
          requestBudget: requestBudget,
          project_id: projectid,
        }),
      });

      console.log("hjhbhj", request);

      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top-left",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });

      navigate("/home");
    } catch {
      toast({
        title: "server error !",
        duration: 3000,
        position: "top",
        status: "error",
      });
    }
  };

  return (
    <Center py="10px" mt="20px">
      <Box
        maxW={"645px"}
        w={"full"}
        bg={"#E6E3E4"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <VStack alignItems={"center"}>
          <Heading
            fontWeight={300}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            lineHeight={"110%"}
            color={"#120f2d"}
          >
            please fill your request
          </Heading>
        </VStack>
        <VStack align={"start"} p={3}>
          <Input
            placeholder={"Subject"}
            value={requestName}
            onChange={(e) => settName(e.target.value)}
            bg={"#fff"}
            w={"60%"}
          ></Input>
          <Input
            placeholder={"Budget"}
            value={requestBudget}
            onChange={(e) => setBudget(Number(e.target.value))}
            bg={"#fff"}
            w={"60%"}
          ></Input>
          <Textarea
            placeholder={"description"}
            bg={"#fff"}
            w={"80%"}
            value={requestDiscription}
            onChange={(e) => setDiscription(e.target.value)}
          ></Textarea>
          <HStack p={4}>
            <Input type={"file"}></Input>
          </HStack>
        </VStack>

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            colorScheme={"gray.500"}
            bg={"#000"}
            mt={5}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "gray.500",
            }}
            onClick={submmitRequest}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
