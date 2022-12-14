import React from "react";

import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Flex,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Cards(props: any) {
  const navigate = useNavigate();
  const apply = (id: any) => {
    navigate(`/postrequset/${id}`);
  };
  return (
    <Center py="10px" mt="20px">
      <Box>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("#E6E3E4", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Flex
            h={"200px"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              h={"50%"}
              w={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                borderRadius="lg"
                src="https://c.top4top.io/p_2536bo6h41.png"
              />
            </Box>
          </Flex>
          <Stack>
            <HStack>
              <Text textAlign={"left"} letterSpacing={1.1} fontWeight={700}>
                Project Name:{" "}
              </Text>
              <Text>{props.projectname}</Text>
            </HStack>
            {/* <HStack align={"start"}>
              <Text className="textDesc" fontWeight={700}>
                Project ID:{" "}
              </Text>
              <Text>{props.projectNumber}</Text>
            </HStack> */}

            <HStack>
              <Text fontWeight={700}>Deadline for submitting offers: </Text>
              <Text>{props.dsubmit}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={700}>date and time of opening offers: </Text>
              <Text>{props.dOpen}</Text>
            </HStack>

            <HStack align={"start"}>
              <Text fontWeight={700}> description: </Text>
              <Text>{props.description}</Text>
            </HStack>
          </Stack>
        </Box>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            colorScheme={"red"}
            bg={"#233142"}
            mt={5}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "gray.500",
            }}
            onClick={() => apply(props.id)}
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
