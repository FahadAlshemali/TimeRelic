import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function signUp({}: Props) {
  return (
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
  );
}
