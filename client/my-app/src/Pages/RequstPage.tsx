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
  Textarea,
  HStack
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function form() {
  


  return (
    <>
    <Button leftIcon={<AddIcon/>}
     bg={'#000'}
      color={'#fff'} 
      borderRadius={'3xl'}
      mt={5}
      ml={10}
      > New project</Button>
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
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'} color={'#120f2d'}>please fill your request</Heading>
    </VStack>
        <VStack align={'start'} p={3}>
        
            <Input placeholder={'Subject'} bg={'#fff'} w={'60%'}></Input>
            <Input placeholder={'Budget'} bg={'#fff'} w={'60%'}></Input>
            <Textarea placeholder={'description'} bg={'#fff'} w={'80%'} ></Textarea>
            <HStack p={4} >
                <Input type={'file'}></Input>
           
                </HStack>
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
    </>
  );
}
