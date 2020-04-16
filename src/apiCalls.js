export const apifetchBreweries = async () => {
  return await fetch('https://api.openbrewerydb.org/breweries?by_state=louisiana&sort=city, -city&by_type=micro&per_page=50')
    .then(response => response.json())
}
