import { useState, useEffect } from "react";
import { Center, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "@/components/Nav";

// moves: Forward Smash, Down Special,
// Forward Air
// arrows
// →⇉
const moves = [
  {
    buttons: "⇉ A",
    name: "Forward Smash",
  },
  {
    buttons: "⇉ B",
    name: "Side Special",
  },
  {
    buttons: "ZR or ZL",
    name: "Shield",
  },
  {
    buttons: "⇈ →",
    name: "Forward Air",
  },
  {
    buttons: "→",
    name: "Forward Tilt",
  },
];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function Home() {
  const [moveIndex, setMoveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let newIndex = random(0, moves.length);
      while (newIndex === moveIndex) {
        newIndex = random(0, moves.length);
      }
      setMoveIndex(newIndex);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Trainer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        gap={8}
        p={4}
        color="whiteAlpha.900"
        as="main"
        height="100%"
        bgGradient="linear(#191970, #9967A4, #C46E9D, #F48D86, #FEBC64, #FFDD5A)"
      >
        <Center>
          <Heading>Trainer</Heading>
        </Center>
        {moves[moveIndex].name}
      </Flex>
      <Nav left="tier-list" right="about" />
    </>
  );
}
