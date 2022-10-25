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
  AspectRatio,
  Image,
  Flex,
  Spacer,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Game({}: Props) {
  return (
    <Box position="relative">
      <Box>
        <Image
          src="https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/unknown.png"
          height={"100vh"}
          width={"100%"}
        />
      </Box>

      <Center
        textColor="white"
        position="absolute"
        bottom="0"
        left="0"
        height="450px"
        width="100%"
        pr="10"
        pl="10"
      >
        <Text
          fontSize="5xl"
          lineHeight={1}
          textAlign="center"
          fontWeight="semibold"
        >
          a Strang entity from outside of the cell put a key near the cell door
          on the light spot of that light ray then starts to vanish into the
          darkness while the white eyes are the last thing to disappear
        </Text>
        <Stack position="absolute" bottom="16"
        direction={['column', 'row']} spacing='24px'>
          <Button colorScheme="teal" size="lg">
            sdasdasdasdasd
          </Button>
          <Button colorScheme="teal" size="lg">
            Busdasdsadtton
          </Button>
          <Button colorScheme="teal" size="lg">
            Buasdasdsadtton
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
