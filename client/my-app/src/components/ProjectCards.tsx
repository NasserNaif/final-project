
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

export default function Cards(props: any) {
  return (
    <Center py="10px" mt="20px">
      <Box>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("#E6E3E4", "gray.900")}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          boxShadow={"dark-lg"}
          borderRadius={20}
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
            <HStack align={"start"}>
              <Text className="textDesc" fontWeight={700}>
                Company Name :{" "}
              </Text>
              <Text>{props.compname}</Text>
            </HStack>

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
            boxShadow={"dark-lg"}

            _hover={{
              bg: "gray.500",
            }}
            onClick={props.onClick}
          >
            {props.butten}
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
