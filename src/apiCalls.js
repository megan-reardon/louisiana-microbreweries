export const apifetchBreweries = async () => {
  return await fetch('https://api.openbrewerydb.org/breweries?by_state=louisiana&sort=name, -name&by_type=micro&per_page=50')
    .then(response => response.json())
}
