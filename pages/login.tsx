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
import { useFormik } from "formik";
import { EmailIcon } from "@chakra-ui/icons";
import { useSessionContext, useUser } from "@supabase/auth-helpers-react";
import { createUSer } from "../utils/API";
import { useRouter } from "next/router";
import * as Yup from "yup";


type Props = {};

export default function test({}: Props) {
  const { supabaseClient } = useSessionContext();
  const router = useRouter();
  const user = useUser();
  const formik = useFormik({
    initialValues: {
      email:"",
      password: "",
    },
    
    onSubmit: async (values) => {
      const res = await supabaseClient.auth.signInWithPassword({ ...values });
      router.push("/situation/1");
    },
  });
  return (
    <Box style={{ position: "relative" }}>
      <Box
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
      ></Box>
      <Center>
        <Box
          style={{
            backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
            backgroundSize: "cover",
            width: "80%",
            height: "100vh",
            backgroundPosition: "center",
          }}
        >
          <Box
            backgroundColor={"white"}
            w={["full", "md"]}
            p={[8, 5]}
            mt={[20, "20vh"]}
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={12}
          >
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", "center"]} w="full">
                <Heading>Login</Heading>
              </VStack>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input
                  rounded="none"
                  variant="filled"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  rounded="none"
                  variant="filled"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </FormControl>

              <Button
                onClick={() => {
                  formik.handleSubmit();
                }}
                type="button"
                rounded="none"
                colorScheme="blackAlpha"
                w="full"
              >
                Login
              </Button>
            </VStack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
