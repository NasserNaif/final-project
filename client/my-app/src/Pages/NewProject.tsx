import React, { useState } from "react";

import {
  Box,
  Center,
  Text,
  Flex,
  Heading,
  Button,
  Input,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const [projectName, setProjectName] = useState("");
  const [projectDiscription, setProjectDisc] = useState("");
  const [deadLine, setDSubmmit] = useState("");
  const [deadLineOpningOffer, setDOpen] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const send = async () => {
    try {
      const request = await fetch(`/api/v1/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          projectDiscription,
          projectName,
          deadLine,
          deadLineOpningOffer,
        }),
      });

      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
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
        status: "error",
        position: "top",
      });
    }
  };

  return (
    <Center py="10px" mt="20px">
      <Box
        maxW={"650px"}
        w={"full"}
        bg={"#E6E3E4"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        boxShadow={"dark-lg"}
        borderRadius={20}
      >
        <VStack alignItems={"center"}>
          <Heading
            fontWeight={300}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            lineHeight={"110%"}
            color={"#120f2d"}
          >
            <Text margin={"20px"} fontSize='20px' as="b">Create Project</Text>
          </Heading>
        </VStack>
        <VStack align={"start"} p={3}>
          <Input
            bg={"#FFF"}
            w={"50%"}
            placeholder={"Project Name"}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          ></Input>
          <Text fontWeight={700}> Deadline for submitting offers</Text>
          <Input
            bg={"#FFF"}
            w={"50%"}
            type={"date"}
            value={deadLine}
            onChange={(e) => setDSubmmit(e.target.value)}
          ></Input>
          <Text fontWeight={700}> Date and time of opening offers</Text>
          <Input
            bg={"#FFF"}
            w={"50%"}
            type={"date"}
            value={deadLineOpningOffer}
            onChange={(e) => setDOpen(e.target.value)}
          ></Input>
          <Textarea
            placeholder={"description"}
            bg={"#fff"}
            w={"80%"}
            value={projectDiscription}
            onChange={(e) => setProjectDisc(e.target.value)}
          ></Textarea>
        </VStack>

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            borderRadius={20}
            color="whiteAlpha.900"
            bg={"#233142"}
            mt={5}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "white",
              textColor:"gray",

            }}
            onClick={send}
          >
            Send
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
