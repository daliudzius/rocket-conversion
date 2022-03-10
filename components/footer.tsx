import { Center, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function Footer() {
  return (
    <Center w={"100%"} pt={8}>
      <hr />
      Built with Hasura backend. |{" "}
      <Link href="https://github.com/daliudzius/rocket-conversion" isExternal>
        Source code <ExternalLinkIcon mx="2px" />
      </Link>{" "}
      |{" "}
      <Link href="https://www.dannick.dev/" isExternal>
        @Dannick Liudzius
      </Link>
    </Center>
  )
}
