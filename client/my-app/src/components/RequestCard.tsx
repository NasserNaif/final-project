import {
  Box,
  Center,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import React from "react";

function RequestCard() {
  return (
    <Center py="10px" mt="20px">
      <Box
        maxW={"745px"}
        w={"full"}
        bg={"#E6E3E4"}
        boxShadow={"2xl"}
        rounded={"2xl"}
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
            Company Name
          </Heading>
        </VStack>
        <VStack align={"start"}>
          <HStack
            align={"start"}
            mt={6}
            p={3}
            border={"1px"}
            w={"100%"}
            borderColor={"#000"}
            rounded={"2xl"}
          >
            <Text>
              has description has description has description has description
              has description has description has description has description
              has description has description has description has description
            </Text>
          </HStack>
          <Text></Text>
          <Button
            w={"250px"}
            bg={"#000"}
            color={"#fff"}
            _hover={{
              bg: "gray.700",
            }}
            leftIcon={<DownloadIcon />}
          >
            Download
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default RequestCard;
