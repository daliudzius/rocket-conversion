export const abbrevNum = (value) => {
  let newValue = value
  const suffixes = ["", "K", "M", "B", "T"]
  let suffixNum = 0
  while (newValue >= 1000) {
    newValue /= 1000
    suffixNum++
  }

  newValue =
    newValue.toString().length > 2
      ? newValue.toPrecision(3)
      : newValue.toPrecision()

  newValue += suffixes[suffixNum]
  return newValue
}

export const unitHandler = (unit, setters) => {
  const {
    setUnitsDomain,
    setUnitsAbbrev,
    setWeightMultiplier,
    setLengthMultiplier,
    setCostMultiplier,
  } = setters

  if (unit === "Metric") {
    setUnitsDomain("Metric")
    setUnitsAbbrev({
      weight: "kg",
      length: "meters",
      cost: "USD",
    })
    setWeightMultiplier(1)
    setLengthMultiplier(1)
    setCostMultiplier(1)
  } else if (unit?.name) {
    setUnitsDomain("Star Wars")
    setUnitsAbbrev({
      weight: `${unit.name}s`,
      length: `${unit.name}s`,
      cost: "credits",
    })
    setWeightMultiplier(1)
    setLengthMultiplier(unit.length)
    setCostMultiplier(1.44)
  } else {
    setUnitsDomain(unit.domain)
    setUnitsAbbrev({
      weight: unit.unit,
      length: unit.unit,
      cost: unit.unit,
    })
    setWeightMultiplier(unit.mass_multiplier)
    setLengthMultiplier(unit.length_multiplier)
    setCostMultiplier(unit.cost_multiplier)
  }
}

export const metric = {
  weight: "kg",
  length: "m",
  cost: "USD",
}
