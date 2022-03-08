import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '7de6b9c9acmsh0862c7552063777p1755d1jsnd1c9211bc688'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7de6b9c9acmsh0862c7552063777p1755d1jsnd1c9211bc688'
          }
    })
}