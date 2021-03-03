const API_URL = 'https://graphql.fauna.com/graphql'
const API_KEY = process.env.API_KEY

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getT3PData() {
  const data = await fetchAPI(`
  query Model3P {
    TeslaModel3Performance {
      data {
        Art
        Typ
        Preis
        PreisproTag
        Beschreibung
        Tarif
        Inklusivkilometer
        _id
      }
    }
  }
    `)
  return data?.TeslaModel3Performance?.data
}

export async function getT3SRPData() {
  const data = await fetchAPI(`
  query Model3SRPlus {
    TeslaModel3SRPlus {
      data {
        Art
        Typ
        Preis
        PreisproTag
        Beschreibung
        Tarif
        Inklusivkilometer
        _id
      }
    }
  }
  
      `)
  return data?.Model3SRPlus?.data
}

export async function getTXData() {
  const data = await fetchAPI(`
  query ModelX {
    TeslaModelX {
      data {
        Art
        Typ
        Preis
        PreisproTag
        Beschreibung
        Tarif
        Inklusivkilometer
        _id
      }
    }
  }
      `)
  return data?.TeslaModelX?.data
}

export async function getT3SRPDataByArt(Art) {
  const data = await fetchAPI(
    `
    query TeslaModel3SRPlusbyArt($Art:String) {
        TeslaModel3SRPlusbyArt(Art: $Art) {
          data {
            Art
            Typ
            Preis
            PreisproTag
            Beschreibung
            Tarif
            Inklusivkilometer
            _id
          }
        }
      }
    `,
    {
      variables: {
        Art
      }
    }
  )
  return data?.TeslaModel3SRPlusbyArt.data
}

export async function getTXDataByArt(Art) {
  const data = await fetchAPI(
    `
    query TeslaModelXbyArt($Art:String) {
        TeslaModelXbyArt(Art: $Art) {
          data {
            Art
            Typ
            Preis
            PreisproTag
            Beschreibung
            Tarif
            Inklusivkilometer
            _id
          }
        }
      }
      `,
    {
      variables: {
        Art
      }
    }
  )
  return data?.TeslaModelXbyArt.data
}

export async function getT3PDataByArt(Art) {
  const data = await fetchAPI(
    `
      query TeslaModel3PerformancebyArt($Art:String) {
        TeslaModel3PerformancebyArt(Art: $Art) {
            data {
              Art
              Typ
              Preis
              PreisproTag
              Beschreibung
              Tarif
              Inklusivkilometer
              _id
            }
          }
        }
        `,
    {
      variables: {
        Art
      }
    }
  )
  return data?.TeslaModel3PerformancebyArt.data
}
