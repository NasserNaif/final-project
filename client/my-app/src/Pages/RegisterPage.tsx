import {
  VStack,
  Text,
  HStack,
  Input,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
  useToast,
  background,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [commercialRecord, setCommercialRecord] = useState("");
  const [role, setRole] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const Save = async () => {
    try {
      if (password !== confirmpassword) {
        toast({
          title: "password didn't match",
          position: "top",
          duration: 3000,
          status: "error",
        });
      }

      const request = await fetch("/api/v1/login/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
          commercialRecord,
          phoneNumber,
          role,
          name,
        }),
      });
      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          position: "top",
          duration: 3000,
          status: "error",
        });
        return;
      }
      toast({
        title: data.message,
        position: "top",
        duration: 3000,
        status: "success",
      });

      navigate("/login");
    } catch {
      toast({
        title: "server error",
        position: "top",
        duration: 3000,
        status: "error",
      });
    }
  };
  return (
    <VStack
    marginBottom="10%"
      p={5}
      color={"black"}
      // h={"74vh"}
      justify={"center"}
      alignItems={"center"}
      
    >
      <VStack
        align={"start"}
        boxShadow={"2xl"}
        bg={useColorModeValue("#e6e3e4", "white.900")}
        borderRadius={20}
        p={20}
      >
              <Text fontSize='20px' as="b">please create your account:</Text>

        <Input
        placeholder="Username"
          bg={""}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          value={username}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Company name"
          bg={""}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Commercial record"
          onChange={(e) => setCommercialRecord(e.target.value)}
          bg={""}
          type="text"
          value={commercialRecord}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Email"
          bg={""}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Phone number"
          bg={""}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          value={phoneNumber}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Password"
          bg={""}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          w={["20vw", "25vw"]}
        />
        <Input
        placeholder="Confirm password"
          bg={""}
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          w={["20vw", "25vw"]}
        />

        <RadioGroup
          w={"50%"}
          onChange={setRole}
          value={role}
          justifyContent={"space-between"}
          bg="gray"
          borderRadius={20}

        >
          <HStack justify={"space-between"} w={"50%"} color={"white"} >
            <Radio value="CLIENT">CLIENT</Radio>
            <Radio value="PROVIDER">PROVIDER</Radio>
          </HStack>
        </RadioGroup>

        <HStack w="100%" justify={"center"} p={2}>
          <Button
             borderRadius={20}
             bg={"#233142"}
             color="whiteAlpha.900"
            w={"10em"}
            mt="10"
            onClick={Save}
            _hover={{
              bg: "white",
              textColor:"gray"}}
          >
            Register
          </Button>
        </HStack>
        <HStack>
          <Text>already have account ?</Text> <Link to={"/login"}>Sign in</Link>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default RegisterPage;
