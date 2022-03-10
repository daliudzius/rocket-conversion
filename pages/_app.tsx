import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../utils/apollo-client"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ChakraProvider resetCSS>
        <ApolloProvider client={client}>
          <Component {...pageProps} />{" "}
        </ApolloProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}
