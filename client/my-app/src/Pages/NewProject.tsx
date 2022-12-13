import React from "react";

import {
  Box,
  Center,
  Text,
  Flex,
  Heading,
  Button,
  Input,
  VStack,
  Textarea
} from "@chakra-ui/react";

export default function form() {
  


  return (
    <Center py="10px" mt="20px">
        
      <Box
        maxW={"745px"}
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
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'} color={'#120f2d'}>Create Project</Heading>
    </VStack>
        <VStack align={'start'} p={3}>
        
            <Input bg={"#FFF"} w={'50%'} placeholder={'Project Name'}></Input>
            <Text fontWeight={700} > Deadline for submitting offers</Text>
            <Input bg={"#FFF"} w={'50%'} type={'date'}></Input>
            <Text fontWeight={700} > Date and time of opening offers</Text>
            <Input bg={"#FFF"} w={'50%'} type={'date'}></Input>
            <Textarea placeholder={'description'} bg={'#fff'} w={'80%'} ></Textarea>
            

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
              Send
            </Button>
            </Flex>
      </Box>

      
    </Center>
  );
}
