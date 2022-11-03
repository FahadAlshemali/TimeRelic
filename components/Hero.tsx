import React from "react";
import {
  background,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Center,
  Img,
  Image,
  Spacer,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { relative } from "path";

type Props = {};

const Hero = (props: Props) => {
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
          <Center>
            <Image
              src="https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/logo.png"
              width={[
                "100%", // base
                "50%", // 480px upwards
                "70%", // 768px upwards
                "40%", // 992px upwards
              ]}
              mt={[24, 4, 6, 8]}
            />
          </Center>
          <Center>
            <Stack
              fontSize={["2xl", "3xl", "3xl", "3xl"]}
              alignContent="center"
              textColor="white"
            >
              <h1>SignUp</h1>
              <h1>Login</h1>
              <h1>About</h1>
            </Stack>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Hero;
