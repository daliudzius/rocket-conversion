import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { w3cwebsocket } from "websocket"

const wsLink =
  typeof window === "undefined"
    ? null
    : new GraphQLWsLink(
        createClient({
          url: "wss://rocket-conversion.hasura.app/v1/graphql",
          webSocketImpl: w3cwebsocket,
          connectionParams: {
            headers: {},
          },
        })
      )

const httpLink = new HttpLink({
  uri: process.env.HASURA_GRAPHQL_URI,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    "x-hasura-role": process.env.HASURA_DEFAULT_ROLE,
  },
})

export const client = new ApolloClient({
  link: typeof window === "undefined" ? httpLink : wsLink,
  cache: new InMemoryCache(),
})
