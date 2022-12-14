import React from "react";

import {
  Box,
  Center,
  Text,
  Button,
  VStack,
  HStack,
  Textarea,
  Input,
  Heading,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export default function form() {
  


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
    <VStack alignItems={'center'}>
         <Heading fontWeight={"700"} >Porfile</Heading>
    </VStack>
    <VStack align={'start'} p={6}>
        <Text fontWeight={"700"}>Company name</Text>
        <Text fontWeight={"700"}>Commercial record</Text>
        <Text fontWeight={"700"}>Email</Text>
        <Text fontWeight={"700"}>Phone number</Text>
        <Textarea 
        placeholder={'Summary'} 
        bg={'#fff'}> </Textarea>
        <Input type={'file'}></Input>
        
        <HStack pt={12} w={"100%"}   justifyContent={'center'}>
            <Button bg={'#000'}color={'#fff'}
        _hover={{
            bg: 'gray.700',
          }}  >Save</Button>

         
        </HStack>
      
        </VStack>
      </Box>

      
    </Center>
  );
}
