import Header from "./header"
import Footer from "./footer"
import { Box, Center, Container, VStack } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Box w={"100%"}>
      <Center>
        <VStack spacing={6} w={"container.md"}>
          <Header />
          <main>
            <Container maxW={"container.md"}>{children}</Container>
          </main>
          <Footer />
        </VStack>
      </Center>
    </Box>
  )
}
