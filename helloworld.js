const url = 'https://restcountries.com/v2/all' // countries api
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    countries = data
    countries.forEach(country => {
            const languages = country.languages.map(item => item.name).join(", ");
            console.log(`country:${country.name} capital:${country.capital} languages:${languages} population${country.population}`)
    });
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('== async and await')
fetchData()

// const url = 'https://restcountries.com/v2/all' // countries api
//         const fetchData = async () => {
//           try {
//             const response = await fetch(url)
//             const data = await response.json()
//             countries = data
//             countries.forEach(country => {
//             const languages = country.languages.map(item => item.name).join(", ");
//             console.log(`country:${country.name} capital:${country.capital} languages:${languages} population:${country.population}`)
//             });
//             console.log(countries)
//           } catch (err) {
//             console.error(err)
//           }
//         }
//         console.log('== async and await')
//         fetchData()
