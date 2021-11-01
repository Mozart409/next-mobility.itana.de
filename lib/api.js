const API_URL = 'https://graphql.fauna.com/graphql'
const API_KEY = process.env.API_KEY

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL, {
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

export async function get3LongRangeData() {
  const data = await fetchAPI(`
  query Model3LR {
    TeslaModel3LongRange {
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
  return data?.TeslaModel3LongRange?.data
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

export async function getT3LongRangeDataByArt(Art) {
  const data = await fetchAPI(
    `
      query TeslaModel3LongRangebyArt($Art:String) {
        TeslaModel3LongRangebyArt(Art: $Art) {
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
  return data?.TeslaModel3LongRangebyArt.data
}

export async function getT3PDataByLowestPrice(Art, Beschreibung) {
  const data = await fetchAPI(
    `
    query TeslaModel3PerformancebyLowestPrice($Art: String, $Beschreibung: String) {
      TeslaModel3PerformancebyLowestPrice(Art: $Art, Beschreibung: $Beschreibung) {
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
        Art,
        Beschreibung
      }
    }
  )
  return data?.TeslaModel3PerformancebyLowestPrice?.data[0]
}

export async function getT3SRDataByLowestPrice(Art, Beschreibung) {
  const data = await fetchAPI(
    `
    query TeslaModel3SRPlusbyLowestPrice($Art: String, $Beschreibung: String) {
      TeslaModel3SRPlusbyLowestPrice(Art: $Art, Beschreibung: $Beschreibung) {
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
        Art,
        Beschreibung
      }
    }
  )
  return data?.TeslaModel3SRPlusbyLowestPrice?.data[0]
}

export async function getTXDataByLowestPrice(Art, Beschreibung) {
  const data = await fetchAPI(
    `
    query TeslaModelXbyLowestPrice($Art: String, $Beschreibung: String) {
      TeslaModelXbyLowestPrice(Art: $Art, Beschreibung: $Beschreibung) {
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
        Art,
        Beschreibung
      }
    }
  )
  return data?.TeslaModelXbyLowestPrice?.data[0]
}

export async function getT3LongRangeDataByLowestPrice(Art, Beschreibung) {
  const data = await fetchAPI(
    `
    query TeslaModel3LongRangebyLowestPrice($Art: String, $Beschreibung: String) {
      TeslaModel3LongRangebyLowestPrice(Art: $Art, Beschreibung: $Beschreibung) {
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
        Art,
        Beschreibung
      }
    }
  )
  return data?.TeslaModel3LongRangebyLowestPrice?.data[0]
}
