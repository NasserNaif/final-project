import { HStack, VStack, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const getStart = () => {
    navigate("/home");
  };
  return (
    <HStack bg="#E6E3E4" h={"77vh"} fontFamily="verdana">
      <VStack p={10} align="start">
        <VStack align="start" m={"30px 0 "}>
          <Text fontSize={"2em"}>Munagsat</Text>
          <Text fontSize={["1.1em", "1.3em"]}>
            Provides multipale services to private sector companies, which aim
            to facilitate operational procedures with private sector providers,
            while providing service level measurement tools, which aim to raise
            the efficiency of service performance.
          </Text>
        </VStack>

        <Button
          onClick={getStart}
          bg={" #233142"}
          color="white"
          w={"40"}
          borderRadius="20"
        >
          Get Start
        </Button>
      </VStack>
      <Image src="image/Logo.png" w={["20vw", "30vw"]} />
    </HStack>
  );
}

export default LandingPage;
