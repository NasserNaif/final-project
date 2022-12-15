import { Box, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <HStack
      position={"fixed"}
      minW={"100vw"}
      bottom={0}
      p={"0.2vw"}
      bg={"#233142"}
      justify="space-between"
      borderTop={"1px solid black"}
      
    >
      <Text bgGradient='linear(to-l, #B1A777, #AB834C)'
        bgClip='text'>
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
