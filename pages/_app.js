import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
            <Analytics />
            <SpeedInsights />
        </ChakraProvider>
    );
}

export default Website;

