import React from "react";

import {
  Box,
  Center,
  Text,
  Flex,
  Heading,
  Button,
  VStack,
  Textarea,
  HStack,
  Input
} from "@chakra-ui/react";

export default function form() {
  


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
    <VStack alignItems={'center'}>
         <Heading 
            fontWeight={300}
            fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
            lineHeight={'150%'} color={'#120f2d'}>please fill your request</Heading>
    </VStack>
        <VStack align={'start'} p={3}>
        
            
            <Textarea placeholder={'description'} bg={'#fff'} w={'80%'} ></Textarea>
           <Input type={"file"} padding={2}></Input>
        </VStack>

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
              Submit
            </Button>
            </Flex>
      </Box>

      
    </Center>
  );
}
