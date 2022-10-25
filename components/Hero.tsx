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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { relative } from "path";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Box style={{position:"relative"}}>
      <Box
        style={{
          backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          filter: "blur(5px)",
          position:"absolute",
          top:"0px",
          left:"0px",
          zIndex:"-1"
        }}
        >
        </Box>
        <Center>
          <Box
            style={{
              backgroundImage: `url(https://nipsxawvnjrdqkigovgl.supabase.co/storage/v1/object/public/workout/sadasdsad.jpeg)`,
              backgroundSize: "cover",
              width: "80%",
              height: "100vh",
              backgroundPosition: "center",
            }}
          ></Box>
        </Center>
    </Box>
  );
};

export default Hero;
