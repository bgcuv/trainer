import {
  Box,
  Heading,
  IconButton,
  Center,
  Image,
  Link,
  Text,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smash Bros Ultimate Trainer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        p={4}
        color="whiteAlpha.900"
        as="main"
        height="100%"
        bgGradient="linear(#191970, #9967A4, #C46E9D, #F48D86, #FEBC64, #FFDD5A)"
      >
        <Center flexDirection="column">
          <Heading>Smash Bros Ultimate Trainer</Heading>
          <Text>
            This app is here to help you get better at Smash Bros Ultimate!
          </Text>
        </Center>
        <Image
          position="absolute"
          alt=""
          top="140px"
          left="-10px"
          height="240px"
          src="./portraits/full/bowser_jr.png"
        />
        <Image
          position="absolute"
          alt=""
          top="200px"
          right="-80px"
          height="300px"
          src="./portraits/full/kirby.png"
        />
        <Image
          position="absolute"
          alt=""
          top="400px"
          right="-80px"
          height="300px"
          src="./fighters/01/01.png"
        />
        <Image
          position="absolute"
          alt=""
          bottom="60px"
          left="-60px"
          height="300px"
          src="./fighters/25/01.png"
        />
        <Image alt="" height="300px" margin="auto" src="./fighters/40/01.png" />
        <Nav left={"about"} right={"tips"} />
      </Flex>
    </>
  );
}
