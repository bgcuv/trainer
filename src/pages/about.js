import Head from "next/head";
import { Heading, Text, Flex, Box, Image, Center } from "@chakra-ui/react";

function Feature({ title, desc, ...rest }) {
  return (
    <Box
      p={1}
      borderWidth="0px"
      {...rest}
      minW="180px"
      border="0px,5px,0px,5px"
      padding="5px,0px,10px,0px"
    >
      <Center flexDirection={"column"}>
        <Heading fontSize="lg">{title}</Heading>
        <Text mt={1}>{desc}</Text>
        <Image {...rest} boxSize="25px" />
      </Center>
    </Box>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>Smash Camp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        height="100%"
        overflow="auto"
        as="main"
        color="whiteAlpha.900"
        bg="linear-gradient(#191970, #9967A4, #C46E9D, #F48D86, #FEBC64, #FFDD5A)"
      >
        <Heading
          as="h1"
          size="6xl"
          noOfLines={1}
          Text
          fontSize="6xl"
          color="tomato"
          textAlign="center"
        >
          About
        </Heading>
        <p>
          This app was developed by a team of dedicated, gamers from the Boys &
          Girls Club of the Umpqua Valley. The app was created to help Smash
          Bros. Ultimate players from around the world, regardless of skill,
          level up their game.
        </p>
        <br></br>
        <p>
          <b>Contact Us At:</b>
        </p>
        <p>Email@email.com</p>
        <br></br>
        <p>
          <b>Support Us</b>
        </p>
        <p>Help support our Club and this app by making a donation.</p>
        <br></br>
        <Flex gap={4} flexWrap="wrap">
          <Feature
            title="Money, Plz"
            fontSize="xs"
            desc="Help Fund our Project."
            src="https://cdn-icons-png.flaticon.com/512/3362/3362189.png"
          />
          <Feature
            fontSize="xs"
            title="Pizza, Plz"
            desc="Help Feed our Coders"
            src="https://cdn.icon-icons.com/icons2/2113/PNG/512/pizza_icon_131067.png"
          />
          <Feature
            fontSize="xs"
            title="Coffe, Plz"
            desc="Fuel our Coders"
            src="https://cdn-icons-png.flaticon.com/512/3127/3127336.png"
          />
        </Flex>
        <br></br>
        <br></br>
        <Box>
          <p>
            <b>Socials</b>
          </p>
          <p>Drop Us a Line</p>
          <Flex gap={4} flexWrap="wrap">
            <Feature src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
            <Feature src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" />
            <Feature src="https://www.freepnglogos.com/uploads/twitch-logo-transparent-32.png" />
            <Feature src="https://www.seekpng.com/png/full/807-8071516_transparent-youtube-play-logo-youtube-icon-blue-png.png" />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
