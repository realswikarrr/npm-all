import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { AppRouter } from "../backend/router";
import superjson from "superjson";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main";
import theme from "../lib/theme"

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
      <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = "/api/trpc";

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);