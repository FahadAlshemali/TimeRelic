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
  Link,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { relative } from "path";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";

type Props = {};

const Hero = (props: Props) => {
  const router = useRouter();
  const user = useUser();
  return (
    <Box>
      {/* <Box
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
      ></Box> */}
      <Box>
        <Box
          style={{
            backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "bottom",
          }}
        >
          <Center>
            <Image
              src="https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/logo.png"
              width={[
                "100%", // base
                "50%", // 480px upwards
                "70%", // 768px upwards
                "30%", // 992px upwards
              ]}
              mt={[24, 4, 6, 8]}
            />
          </Center>
          <Center>
            
            <Stack
              fontSize={["2xl", "3xl", "3xl", "3xl"]}
              alignContent="center"
              textColor="white"
              alignItems="center"
              fontWeight="bold"
            >
              
               <Link
                href="/signUp"
                _hover={{
                  color: "gray.300",
                }}
                style={{
                  textDecoration: "none",
                }}
              >
              
                SignUp
              </Link>
              <Link
                href="/login"
                _hover={{
                  color: "gray.300",
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              <Link
                href="/About"
                _hover={{
                  color: "gray.300",
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                About
              </Link>
            </Stack>
          </Center>
          <footer className="  text-cyan-50  position absolute bottom-0 justify-end">
            &copy; {new Date().getFullYear()} TIME RELIC - All Rights Reserved
          </footer>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
