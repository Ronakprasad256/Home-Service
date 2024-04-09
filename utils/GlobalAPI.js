import { request, gql } from 'graphql-request'

const Master_URL = "https://api-ap-south-1.hygraph.com/v2/cluprv20f1xn907tbi9xbbj5e/master" 

const getSlider = async() => {
    const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
`
  const result = await request(Master_URL, query)
    return result 
}

const getCategory = async () => {
    const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
`
  const result = await request(Master_URL, query)
    return result 
}

export default {
  getSlider,
  getCategory
}