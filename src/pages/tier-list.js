import Head from "next/head";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Image,
  Box,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Nav from "../components/Nav";

const characters = [
  {
    name: "Bayonetta",
    image: "./portraits/full/bayonetta.png",
    difficulty: 2,
    strength: 3,
  },
  {
    name: "Bowser",
    image: "./portraits/full/bowser.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Bowser Jr.",
    image: "./portraits/full/bowser_jr.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Captain Falcon",
    image: "./portraits/full/captain_falcon.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Chrom",
    image: "./portraits/full/chrom.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Cloud",
    image: "./portraits/full/cloud.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Corrin",
    image: "./portraits/full/corrin.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Daisy",
    image: "./portraits/full/daisy.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Dark Pit",
    image: "./portraits/full/dark_pit.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Dark Samus",
    image: "./portraits/full/dark_samus.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Diddy Kong",
    image: "./portraits/full/diddy_kong.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Donkey Kong",
    image: "./portraits/full/donkey_kong.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Dr. Mario",
    image: "./portraits/full/dr_mario.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Duck Hunt",
    image: "./portraits/full/duck_hunt.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Falco",
    image: "./portraits/full/falco.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Fox",
    image: "./portraits/full/fox.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ganondorf",
    image: "./portraits/full/ganondorf.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Greninja",
    image: "./portraits/full/greninja.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ice Climbers",
    image: "./portraits/full/ice_climbers.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ike",
    image: "./portraits/full/ike.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Incineroar",
    image: "./portraits/full/incineroar.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Inkling",
    image: "./portraits/full/inkling.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Isabelle",
    image: "./portraits/full/isabelle.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Jigglypuff",
    image: "./portraits/full/jigglypuff.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ken",
    image: "./portraits/full/ken.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "King Dedede",
    image: "./portraits/full/king_dedede.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "King K Rool",
    image: "./portraits/full/king_k_rool.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Kirby",
    image: "./portraits/full/kirby.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Link",
    image: "./portraits/full/link.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Little Mac",
    image: "./portraits/full/little_mac.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Lucario",
    image: "./portraits/full/lucario.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Lucas",
    image: "./portraits/full/lucas.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Lucina",
    image: "./portraits/full/lucina.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Luigi",
    image: "./portraits/full/luigi.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Mario",
    image: "./portraits/full/mario.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Marth",
    image: "./portraits/full/marth.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Mega Man",
    image: "./portraits/full/mega_man.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Meta Knight",
    image: "./portraits/full/meta_knight.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Mewtwo",
    image: "./portraits/full/mewtwo.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Mr. Game and Watch",
    image: "./portraits/full/mr_game_and_watch.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ness",
    image: "./portraits/full/ness.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Olimar",
    image: "./portraits/full/olimar.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Pac Man",
    image: "./portraits/full/pac_man.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Palutena",
    image: "./portraits/full/palutena.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Peach",
    image: "./portraits/full/peach.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Pichu",
    image: "./portraits/full/pichu.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Pikachu",
    image: "./portraits/full/pikachu.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Piranha Plant",
    image: "./portraits/full/piranha_plant.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Pit",
    image: "./portraits/full/pit.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Pokemon Trainer",
    image: "./portraits/full/pokemon_trainer.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Richter",
    image: "./portraits/full/richter.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ridley",
    image: "./portraits/full/ridley.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Rob",
    image: "./portraits/full/rob.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Robin",
    image: "./portraits/full/robin.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Rosalina and Luma",
    image: "./portraits/full/rosalina_and_luma.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Roy",
    image: "./portraits/full/roy.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Ryu",
    image: "./portraits/full/ryu.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Samus",
    image: "./portraits/full/samus.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Sheik",
    image: "./portraits/full/sheik.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Shulk",
    image: "./portraits/full/shulk.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Simon",
    image: "./portraits/full/simon.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Snake",
    image: "./portraits/full/snake.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Sonic",
    image: "./portraits/full/sonic.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Toon Link",
    image: "./portraits/full/toon_link.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Villager",
    image: "./portraits/full/villager.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Wario",
    image: "./portraits/full/wario.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Wii Fit Trainer",
    image: "./portraits/full/wii_fit_trainer.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Wolf",
    image: "./portraits/full/wolf.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Yoshi",
    image: "./portraits/full/yoshi.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Young Link",
    image: "./portraits/full/young_link.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Zelda",
    image: "./portraits/full/zelda.png",
    difficulty: 1,
    strength: 1,
  },
  {
    name: "Zero Suit Samus",
    image: "./portraits/full/zero_suit_samus.png",
    difficulty: 1,
    strength: 1,
  },
];

export default function TierList() {
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
        <Flex direction="column" p={4} color="whiteAlpha.900">
          <Center>
            <Heading size="3xl">Tier List</Heading>
          </Center>
          <Stack gap={4} p={4}>
            {characters.map((character) => {
              return (
                <Card
                  bg={"gray.700"}
                  maxW="max-content"
                  color="whiteAlpha.900"
                  key={character.name}
                >
                  <CardHeader py={2}>{character.name}</CardHeader>
                  <CardBody py={2}>
                    <Image
                      height="100px"
                      width="200px"
                      src={`${character.image}`}
                      alt={character.name}
                      objectFit="cover"
                    />
                  </CardBody>
                  <CardFooter py={2}>
                    <Flex direction="column">
                      <Flex alignItems="center" gap={2}>
                        <Text>Strength: </Text>
                        <HStack alignItems="center" h="100%" w="100%">
                          {Array.from(Array(character.strength)).map((star) => {
                            return <StarIcon boxSize={4} key={star} />;
                          })}
                        </HStack>
                      </Flex>
                      <Flex alignItems="center" gap={2}>
                        <Text>Difficulty: </Text>
                        <HStack alignItems="center" h="100%" gap={1}>
                          {Array.from(Array(character.difficulty)).map(
                            (star) => {
                              return <StarIcon boxSize={4} key={star} />;
                            }
                          )}
                        </HStack>
                      </Flex>
                    </Flex>
                  </CardFooter>
                </Card>
              );
            })}
          </Stack>
        </Flex>
      </Box>
      <Nav left="tips" right="trainer" />
    </>
  );
}
