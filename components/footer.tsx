import { Center, Link, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function Footer() {
  return (
    <>
      <Divider orientation="horizontal" />
      <Center w={"100%"} pt={0}>
        <Link href="https://www.dannick.dev/" color={"teal.600"} isExternal>
          Dannick Liudzius
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;Built with Hasura
        backend.&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link
          href="https://github.com/daliudzius/rocket-conversion"
          color={"teal.600"}
          isExternal
        >
          Source code
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Center>
    </>
  )
}
