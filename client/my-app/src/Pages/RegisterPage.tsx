import {
  VStack,
  Text,
  HStack,
  Input,
  Button,
  Radio,
  RadioGroup,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const submit = async () => {
    try {
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
      p={5}
      color={"black"}
      bg={"#E6E3E4"}
      // h={"74vh"}
      justify={"center"}
      alignItems={"center"}
    >
      <VStack
        align={"start"}
        // boxShadow={"2xl"}
        // bg={useColorModeValue("#e6e3e4", "gray.900")}
      >
        <Text>Username :</Text>
        <Input bg={""} type="text" value={username} w={["20vw", "35vw"]} />
        <Text>Company name :</Text>
        <Input bg={""} type="text" value={name} w={["20vw", "35vw"]} />
        <Text>Commercial record :</Text>
        <Input
          bg={""}
          type="text"
          value={commercialRecord}
          w={["20vw", "35vw"]}
        />
        <Text>Email :</Text>
        <Input bg={""} type="email" value={email} w={["20vw", "35vw"]} />
        <Text>Phone number :</Text>
        <Input bg={""} type="text" value={phoneNumber} w={["20vw", "35vw"]} />
        <Text>Password :</Text>
        <Input bg={""} type="password" value={password} w={["20vw", "35vw"]} />
        <Text>Confirm password :</Text>
        <Input
          bg={""}
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          w={["20vw", "35vw"]}
        />

        <RadioGroup w={"100%"} onChange={setRole} value={role} justifyContent={"space-between"}>
          <HStack justify={"space-between"}  w={"100%"}>
            <Radio value="CLIENT">CLIENT</Radio>
            <Radio value="PROVIDER">PROVIDER</Radio>
          </HStack>
        </RadioGroup>

        <HStack w="100%" justify={"center"} p={2}>
          <Button
            borderRadius={20}
            bg={"#1A0202"}
            color="whiteAlpha.900"
            w={"10em"}
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
