import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <HStack
    
    p={"1vw"}
      // h="12vh"
      bg={"#E6E3E4"}
      justify="space-between"
      borderTop={"1px solid black"}
    >
      <Text>
        All rights reserved © 2022 - KSA <br /> Use Policy and Disclaimer |
        Privacy Policy | Report Corruption | Private Sector Feedback Platform
      </Text>
      <VStack>
        <Text>
          Contact Us
          <br /> Unified Number 1234567
        </Text>
        <HStack>
          <Image w={10} src="image/LinkedIn.png" />
          <Image w={10} src="image/Twitter.png" />
          <Image w={10} src="image/Youtube.png" />
        </HStack>
      </VStack>
      <Image w={"7em"} src="image/Vision.png" />
    </HStack>
  );
}

export default Footer;
