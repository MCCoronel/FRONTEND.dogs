export function temperamentFiltered(breeds, temperaments) {
  let temperamentBreeds = [];
  temperaments === "all"
    ? (temperamentBreeds = breeds)
    : (temperamentBreeds = breeds?.filter((breed) =>
        breed.Temperaments?.some((temp) => temperaments.includes(temp))
      ));

  return temperamentBreeds;
}

export function orderWeight(breeds, order) {
  if (order === "LowToHigh")
    return breeds
      ?.filter((breed) => breed.minWeight !== null)
      .sort((a, b) => a.minWeight - b.minWeight);

  if (order === "HighToLow")
    return breeds
      ?.filter((breed) => breed.minWeight !== null)
      .sort((a, b) => b.minWeight - a.minWeight);

  return breeds;
}

export function orderBreedsAlphabetically(breeds, order) {
  if (order === "A-Z") {
    return breeds?.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (order === "Z-A") {
    return breeds?.sort((a, b) => b.name.localeCompare(a.name));
  }

  return breeds;
}

export function filterOrigin(breeds, filter) {
  if (filter === "New breeds") {
    return breeds.filter((breed) => breed.db === true);
  }

  if (filter === "Breeds API") {
    return breeds.filter((breed) => breed.db === false);
  }

  return breeds;
}

export function filterAndOrder(breeds, configs) {
  let listFilteredAndOrdered = breeds;

  for (const key in configs) {
    const config = configs[key];

    switch (key) {
      case "temperamentsFilter":
        if (config.active) {
          listFilteredAndOrdered = temperamentFiltered(
            listFilteredAndOrdered,
            config.value
          );
        }
        break;

      case "originFilter":
        if (config.active) {
          listFilteredAndOrdered = filterOrigin(
            listFilteredAndOrdered,
            config.value
          );
        }
        break;

      case "order":
        if (config.active) {
          if (config.type === "weight") {
            listFilteredAndOrdered = orderWeight(
              listFilteredAndOrdered,
              config.value
            );
          } else {
            listFilteredAndOrdered = orderBreedsAlphabetically(
              listFilteredAndOrdered,
              config.value
            );
          }
        }
        break;

      default:
        break;
    }
  }

  return listFilteredAndOrdered;
}

export function paginatedbreeds(Page, value) {
  if (value === "next") {
    return Page + 1;
  }
  if (value === "prev") {
    return Page - 1;
  }

  Page = 1;
  return Page;
}
