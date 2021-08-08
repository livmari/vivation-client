import { STRAPI_BASE_URL } from '@constants/urls'

/**
 * Takes the name of a single type and returns the json data contained within it from Strapi.
 * @param typeName { string }
 */
export const getStrapiSingleType = async (typeName: string) => {
  try {
    const res = await fetch([STRAPI_BASE_URL, typeName].join('/'))
    return res.json()
  } catch (error) {
    console.error(error.toString())
  }
}

/**
 * Takes a Strapi endpoint (+ optional queries) and returns the content as json.
 * @param endpoint { string }
 * @param queries { string }
 */
export const getStrapiCollection = async (
  /** The strapi endpoint (collection type, single type, etc). */
  endpoint: string,
  /** Optional query string for filtering data etc. */
  queries?: string
) => {
  try {
    const res = await fetch(
      [STRAPI_BASE_URL, endpoint, queries ?? ''].join('/')
    )
    return res.json()
  } catch (error) {
    console.error(error.toString())
  }
}

/**
 * Takes the id of an entry in a specific collection type and returns the entry.
 * @param collection { string }
 * @param id { string }
 */
export const getStrapiContentById = async (
  /** The name of the collection. */
  collection: string,
  /** The id of the specific entry in the collection. */
  id: string
) => {
  try {
    const res = await fetch([STRAPI_BASE_URL, collection, id].join(' '))
    return res.json()
  } catch (error) {
    console.error(error.toString())
  }
}
