import { useMutation } from "@apollo/client"
import { IconButton, Center, VStack } from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons"
import { IncStars } from "../queries/qraphql"
import { useSubscription } from "@apollo/client"
import { SubStars } from "../queries/qraphql"
import { Text } from "@chakra-ui/react"

const VoteCount = () => {
  const { data, loading } = useSubscription(SubStars)
  return <Text fontSize={"xl"}>{!loading && data?.pages[0].upvotes}</Text>
}

const Upvotes = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(IncStars, {
    variables: {
      _inc: {
        upvotes: 1,
      },
    },
  })

  return (
    <Center>
      <VStack>
        <IconButton
          variant="ghost"
          color={"orange.400"}
          aria-label="Upvote"
          onClick={() => mutateFunction()}
          icon={<ArrowUpIcon boxSize={12} />}
        />
        <VoteCount />
      </VStack>
    </Center>
  )
}

export default Upvotes
