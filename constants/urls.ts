export const STRAPI_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'https://www.vivation-cms.herokuapp.com'
