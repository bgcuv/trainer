import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Montserrat",
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        fontFamily: "Montserrat",
        overflowX: "hidden",
      },
      "#__next": {
        height: "100%",
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
