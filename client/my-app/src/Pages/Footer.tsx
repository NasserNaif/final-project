import { Box, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
<<<<<<< HEAD
    <Box position={"fixed"}
    minW={"100vw"}
    height={"12vh"}
    bottom={0}
    >
    <HStack
    
    p={"1vw"}
      h="12vh"
=======
    <HStack
      position={"fixed"}
      minW={"100vw"}
      bottom={0}
      p={"1vw"}
      bg={"#E6E3E4"}
>>>>>>> master
      justify="space-between"
      borderTop={"1px solid black"}
    >
      <Text>
        All rights reserved © 2022 - KSA <br /> Use Policy and Disclaimer |
        <Link>Privacy Policy</Link> |
        <Link>Report Corruption</Link>  |
        <Link>Private Sector Feedback Platform</Link> 
      </Text>
      <VStack>
        {/* <Text>
          Contact Us
          <br /> Unified Number 1234567
        </Text>
        <HStack>
          <Image w={6} src="image/LinkedIn.png" />
          <Image w={6} src="image/Twitter.png" />
          <Image w={6} src="image/Youtube.png" />
        </HStack> */}
      </VStack>
      <Image w={"5em"} src="image/Vision.png" />
    </HStack>
  );
}

export default Footer;
