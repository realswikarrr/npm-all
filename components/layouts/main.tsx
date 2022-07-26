import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import { ReactNode } from "react";
import Footer from "../footer";


type Props = {
    children: ReactNode,
    router: any
  };


const Main: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NPM ALL</title>
        <meta name="description" content="Swikar's Home Page" />
        <meta name="author" content="NPM ALL" />
        <meta name="author" content="swikarr_" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="NPM ALL" />
        <meta name="og:title" content="NPM ALL" />
        <meta property="og:type" content="website" />
        
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;