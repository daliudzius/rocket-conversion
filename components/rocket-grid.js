import { Box, Divider, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import { abbrevNum } from "../utils/helpers"

const RocketGrid = ({ rockets, states }) => {
  const { unitsAbbrev, weightMultiplier, lengthMultiplier, costMultiplier } =
    states

  return (
    <SimpleGrid columns={[1, 2, 2]} spacing={8}>
      {rockets.map((rocket) => (
        <Box
          rounded={"md"}
          boxShadow={"dark-lg"}
          p={4}
          w={[72, 48, 72]}
          key={rocket.id}
        >
          <Flex direction={"column"}>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              {rocket?.name}
            </Text>
            <Divider my={4} />
            <Spacer />
            Cost Per Launch:
            <Text mb={4} fontWeight={"semibold"} fontSize={"xl"}>
              {abbrevNum(rocket?.cost_per_launch / costMultiplier)}{" "}
              {unitsAbbrev.cost}
            </Text>
            <Spacer />
            Diameter:
            <Text mb={4} fontWeight={"semibold"} fontSize={"xl"}>
              {abbrevNum(rocket?.diameter?.meters / lengthMultiplier)}{" "}
              {unitsAbbrev.length}
            </Text>
            <Spacer />
            Height:
            <Text mb={4} fontWeight={"semibold"} fontSize={"xl"}>
              {abbrevNum(rocket?.height?.meters / lengthMultiplier)}{" "}
              {unitsAbbrev.length}
            </Text>
            <Spacer />
            Weight:
            <Text mb={4} fontWeight={"semibold"} fontSize={"xl"}>
              {abbrevNum(rocket?.mass?.kg / weightMultiplier)}{" "}
              {unitsAbbrev.weight}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default RocketGrid
