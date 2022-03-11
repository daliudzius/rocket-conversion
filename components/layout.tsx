import Header from "./header"
import Footer from "./footer"
import { Container, VStack } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <VStack spacing={6} w={"100%"}>
      <Header />
      <main>
        <Container maxW={"container.md"}>{children}</Container>
      </main>
      <Footer />
    </VStack>
  )
}
