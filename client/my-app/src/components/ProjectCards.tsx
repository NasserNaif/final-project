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
  HStack
} from "@chakra-ui/react";

export default function Cards() {
  


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
          h={'50%'}
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
          <Text textAlign={"left"} letterSpacing={1.1} fontSize={"2xl"}>
            Project Name: </Text>
            <Text>Operation and maintenance</Text> 
          </HStack>
          <HStack>
          <Text className="textDesc" fontWeight={700}>
          Project Nunmer: </Text>
          <Text>235466483993</Text>
          </HStack>

          <HStack>
          <Text textAlign={"left"} fontWeight={700} >
            Company name: 
          </Text>
          <Text>Abdul Sami Al-Lamea</Text>
          </HStack>
          
          <HStack>
         <Text fontWeight={700}>Deadline for submitting offers: </Text>
          <Text>2024-02-12</Text>
         </HStack>
         <HStack>
         <Text fontWeight={700}>date and time of opening offers: </Text>
          <Text>2022-04-25</Text>
         </HStack>

         <HStack>
         <Text fontWeight={700}> description: </Text>
         <Text>maintenance of Tuwaiq Academy</Text>
         </HStack>
        </Stack>
      
      </Box>
      <Flex  justifyContent={'center'}
              alignItems={'center'}>
      <Button
              colorScheme={'gray.500'}
              bg={'#000'}
              mt={5}
             
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'gray.500',
              }}   >
              Apply
            
            </Button>
            </Flex>
      </Box>
    </Center>
  );
}
