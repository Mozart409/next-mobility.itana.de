import React, { useLayoutEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Angebot = () => {
  const [DisplaySpecials, setDisplaySpecials] = useState(false)
  const [DisplayAngebote, setDisplayAngebote] = useState(false)
  const data = useStaticQuery(graphql`
    {
      ArtK: allHklJson(filter: { Typ: { eq: "1" }, Art: { eq: "K" } }) {
        edges {
          node {
            Art
            Inklusivkilometer
            Preis
            Preis_pro_Tag
            Tarif
            Typ
            Beschreibung
            id
          }
        }
      }
      ArtL: allHklJson(filter: { Typ: { eq: "1" }, Art: { eq: "L" } }) {
        edges {
          node {
            Art
            Inklusivkilometer
            Preis
            Preis_pro_Tag
            Tarif
            Typ
            Beschreibung
            id
          }
        }
      }
      ArtA: allHklJson(filter: { Typ: { eq: "1" }, Art: { eq: "A" } }) {
        edges {
          node {
            Art
            Inklusivkilometer
            Preis
            Preis_pro_Tag
            Tarif
            Typ
            Beschreibung
            id
          }
        }
      }
      ArtS: allHklJson(filter: { Typ: { eq: "1" }, Art: { eq: "S" } }) {
        edges {
          node {
            Art
            Inklusivkilometer
            Preis
            Preis_pro_Tag
            Tarif
            Typ
            Beschreibung
            id
          }
        }
      }
      ArtM: allHklJson(filter: { Typ: { eq: "1" }, Art: { eq: "M" } }) {
        edges {
          node {
            Art
            Inklusivkilometer
            Preis
            Preis_pro_Tag
            Tarif
            Typ
            Beschreibung
            id
          }
        }
      }
    }
  `)

  useLayoutEffect(() => {
    if (data.ArtS.edges.length === 0) {
      setDisplaySpecials(false)
    } else {
      setDisplaySpecials(true)
    }
    return () => {
      return setDisplaySpecials
    }
  }, [data])

  useLayoutEffect(() => {
    if (data.ArtA.edges.length === 0) {
      setDisplayAngebote(false)
    } else {
      setDisplayAngebote(true)
    }
    return () => {
      return setDisplayAngebote
    }
  }, [data])

  return (
    <div>
      <div className={`${DisplaySpecials ? `flex` : `hidden`} flex-col`}>
        <h2 className='mt-4 mb-2 font-bold text-itana-red'>Unsere Aktionen</h2>
        <div className='overflow-x-auto py-2 -my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block overflow-hidden min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'>
                    Specials
                  </th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.ArtS.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Tarif} mit {node.Inklusivkilometer}{' '}
                      Inklusivkilometern
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      <span className='font-semibold'>
                        {node.Preis_pro_Tag} €
                      </span>
                      <span> / Tag | Angebot für {node.Beschreibung}</span>
                    </td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={`${DisplayAngebote ? `flex` : `hidden`} flex-col`}>
        <h2 className='mt-4 mb-2 font-bold text-itana-red'>Unsere Angebote</h2>
        <div className='overflow-x-auto py-2 -my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block overflow-hidden min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'>
                    Specials
                  </th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.ArtA.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Tarif} mit {node.Inklusivkilometer}{' '}
                      Inklusivkilometern
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      <span className='font-semibold'>
                        {node.Preis_pro_Tag} €
                      </span>
                      <span> / Tag | Angebot für {node.Beschreibung}</span>
                    </td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <h2 className='mt-4 mb-2 font-bold text-itana-red'>Aktuelle Preise</h2>
        <div className='overflow-x-auto py-2 -my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block overflow-hidden min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'>
                    Kurzzeittarife
                  </th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.ArtK.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Tarif} mit {node.Inklusivkilometer}{' '}
                      Inklusivkilometern
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      <span className='font-semibold'>
                        {node.Preis_pro_Tag} €
                      </span>
                      <span> / Tag | Angebot für {node.Beschreibung}</span>
                    </td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
                {data.ArtM.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Inklusivkilometer} Zusatzkilometer kostet
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'></td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='mt-4'></div>
        <div className='overflow-x-auto py-2 -my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block overflow-hidden min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'>
                    Langzeittarife
                  </th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                  <th className='py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200'></th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.ArtL.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Tarif} mit {node.Inklusivkilometer}{' '}
                      Inklusivkilometern
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      <span className='font-semibold'>
                        {node.Preis_pro_Tag} €
                      </span>
                      <span> / Tag | Angebot für {node.Beschreibung}</span>
                    </td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
                {data.ArtM.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td className='py-2 px-0 text-sm font-medium leading-5 text-gray-900 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Inklusivkilometer} Zusatzkilometer kostet
                    </td>
                    <td className='py-2 px-0 text-sm leading-5 text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'></td>

                    <td className='py-2 px-0 text-sm leading-5 text-right text-gray-500 whitespace-normal border-b border-gray-200  md:px-6 md:py-4 lg:text-lg'>
                      {node.Preis} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Angebot
