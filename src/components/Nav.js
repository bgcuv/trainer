import { Box, Heading, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Nav({ left, right }) {
  return (
    <>
      <Link href={`/${left}`}>
        <IconButton
          icon={<ArrowBackIcon />}
          position="absolute"
          bottom="8px"
          left="16px"
          bg="#fcefb4"
          color="blackAlpha.900"
        />
      </Link>
      <Link href={`/${right}`}>
        <IconButton
          icon={<ArrowForwardIcon />}
          position="absolute"
          bottom="8px"
          right="16px"
          bg="#fcefb4"
          color="blackAlpha.900"
        />
      </Link>
    </>
  );
}
