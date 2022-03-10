import Layout from "../components/layout"
import { client } from "../utils/apollo-client"
import Head from "next/head"
import { useState } from "react"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { GetData } from "../queries/qraphql"
import { metric } from "../utils/helpers"
import Upvotes from "../components/upvotes"
import UnitMenu from "../components/unit-menu"
import RocketGrid from "../components/rocket-grid"

const Index = ({ data }) => {
  const [unitsAbbrev, setUnitsAbbrev] = useState(metric)
  const [weightMultiplier, setWeightMultiplier] = useState(1)
  const [lengthMultiplier, setLengthMultiplier] = useState(1)
  const [costMultiplier, setCostMultiplier] = useState(1)

  const states = {
    unitsAbbrev,
    weightMultiplier,
    lengthMultiplier,
    costMultiplier,
  }

  const setters = {
    setUnitsAbbrev,
    setWeightMultiplier,
    setLengthMultiplier,
    setCostMultiplier,
  }

  return (
    <>
      <Head>
        <title>Rocket Conversion</title>
      </Head>
      <Layout>
        <Flex>
          <Stack>
            <UnitMenu data={data} setters={setters} />
            <RocketGrid rockets={data.rockets} states={states} />
          </Stack>
          <Stack mt={"20%"} ml={6}>
            <Upvotes />
            <Box></Box>
          </Stack>
        </Flex>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GetData,
  })

  return {
    props: {
      data,
    },
  }
}

export default Index
