import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <HStack
      p={"4"}
      h={"7h"}
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
        {!localStorage.getItem("token") ? (
          <Button
            onClick={() => navigate("/login")}
            bg={"#233142"}
            color="whiteAlpha.800"
          >
            Log in{" "}
          </Button>
        ) : (
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            bg={"#233142"}
            color="white"
          >
            logout
          </Button>
        )}
      </HStack>
    </HStack>
  );
}

export default Nav;
