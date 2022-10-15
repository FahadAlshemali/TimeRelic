import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function test({}: Props) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          filter: "blur(5px)",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "-1",
        }}
      ></div>
      <Center>
        <div
          style={{
            backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
            backgroundSize: "cover",
            width: "80%",
            height: "100vh",
            backgroundPosition: "center",
          }}
        >
          <Box
            w={["full", "md"]}
            p={[8, 10]}
            mt={[20, "10vh"]}
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={10}
          >
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", "center"]} w="full">
                <Heading>Register</Heading>
              </VStack>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input rounded="none" variant="filled" />
              </FormControl>
              <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input rounded="none" variant="filled" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded="none" variant="filled" type="password" />
              </FormControl>
              <HStack w="full" justify="center">
                <Button variant="link" colorScheme="blue">
                  already have account ?
                </Button>
              </HStack>
              <Button rounded="none" colorScheme="blue" w="full">
                Register
              </Button>
            </VStack>
          </Box>
        </div>
      </Center>
    </div>
  );
}