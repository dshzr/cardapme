import "../styles/globals.css";
import theme from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
