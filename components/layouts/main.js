import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const description = "just a weeb who codes and makes some youtube videos about weeby stuff ヽ(ヅ)ノ";

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="nezutero" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="nezutero" />
                <meta name="og:title" content="nezutero" />
                <meta property="og:type" content="website" />
                <title>nezutero</title>
            </Head>
            <Container maxW="container.xl" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
