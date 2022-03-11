import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { unitHandler } from "../utils/helpers"
import { useState } from "react"

const UnitMenu = ({ data, setters }) => {
  const [unitsDomain, setUnitsDomain] = useState("Metric")
  const setterFuncs = { setUnitsDomain, ...setters }

  return (
    <Box display={{ sm: "flex" }}>
      <Heading fontSize={"2xl"} mb={4} ml={1}>
        SpaceX Rockets
      </Heading>
      <Spacer />
      <Box ml={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {unitsDomain}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => unitHandler("Metric", setterFuncs)}>
              Metric
            </MenuItem>
            {data.units?.map((unit) => (
              <MenuItem
                onClick={() => unitHandler(unit, setterFuncs)}
                key={unit.id}
              >
                {unit.domain}
              </MenuItem>
            ))}
            <MenuItem onClick={() => unitHandler(data.getXWing, setterFuncs)}>
              Star Wars
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default UnitMenu
