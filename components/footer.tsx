import { Center } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Center w={"100%"} pt={8}>
      <hr />
      Built with Hasura backend. |
      <a href="https://github.com/daliudzius/rocket-conversion">
        {" "}
        Source code{" "}
      </a>
      | Dannick Liudzius
    </Center>
  )
}
