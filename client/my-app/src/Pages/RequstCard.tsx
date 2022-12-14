

import {
  Box,
  Center,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

export default function RequstCard(props: any) {
  
 
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
         <Heading 
            fontWeight={300}
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'} color={'#120f2d'}>Company Name</Heading>
    </VStack >
    <VStack align={'start'} pt={5}>
           <Text fontWeight={700}>{props.requestName}</Text>
           <Text fontWeight={600}>{props.requestBudget}</Text>
        <HStack align={'start'} mt={6} p={3} border={'1px'} w={'100%'} borderColor={'#000'}
        rounded={'2xl'}
        >
            <Text>{props.requestDiscription}
            </Text>
        </HStack>
       <Text></Text>
        <Button w={"250px"} bg={'#000'}color={'#fff'}
        _hover={{
            bg: 'gray.700',
          }}  
      
        leftIcon={<DownloadIcon/>} >Download</Button>
        
        <HStack p={12} w={"100%"}   justifyContent={'center'}>
            <Button bg={'#000'}color={'#fff'}
        _hover={{
            bg: 'gray.700',
          }}  >Accept</Button>

            <Button bg={'#000'}color={'#fff'}
        _hover={{
            bg: 'gray.700',
          }}  >Reject</Button>

        </HStack>
      
        </VStack>
      </Box>

      
    </Center>
        
  );
}
