import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <HStack
      p={"4"}
      h={"7h"}
      bg={"#e6e3e4"}
      justify="space-between"
      align={"center"}
    >
      <HStack
        align={"center"}
        justify={"space-around"}
        w={["70%", "40em", "30em"]}
      >
        <Image src="/image/Logo.png" h={"3.8em"} />
        <Link to={"/home"}>
          <Text fontSize={"1.4em"}>Home</Text>
        </Link>

        <Link to={"/"}>
          <Text fontSize={"1.4em"}>project</Text>
        </Link>
        <Link to={"/"}>
          <Text fontSize={"1.4em"}>About</Text>
        </Link>
      </HStack>
      <HStack justify={"start"} align="start">
        <Button bg={"blue.500"} color="whiteAlpha.800">
          Log in{" "}
        </Button>
      </HStack>
    </HStack>
  );
}

export default Nav;
