import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header>
      <Flex
        w={"md"}
        h={20}
        py={2}
        px={3}
        rounded={"md"}
        alignItems={"center"}
        boxShadow={"lg"}
      >
        {!session && (
          <>
            <Spacer />
            <Text>You are not signed in</Text>
            <Spacer />
            <Button>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </Button>
          </>
        )}
        {session?.user && (
          <>
            {session.user.image && session.user.name && (
              <Avatar name={session.user.name} src={session.user.image} />
            )}
            <Spacer />
            <Stack spacing={1} align={"center"}>
              <Text>Signed in as </Text>
              <Text fontWeight={"semibold"}>
                {session.user.email ?? session.user.name}
              </Text>
            </Stack>
            <Spacer />
            <Button>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </Button>
          </>
        )}
      </Flex>
    </header>
  )
}
