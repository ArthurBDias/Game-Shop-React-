import axios from "axios"
const API_key = 'b36c2057f9e810360f8e3a13acc519d5'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 4000,
})

async function requestData(endpoint) {
    const data = await api.get(endpoint)
    return data.data
}

export default {
     MovieData: async() => {
        return [

            {
                Title: 'most popular now',
                data: await requestData(`/discover/movie?sort_by=popularity.desc&api_key=${API_key}`)
            },
            
            {
                Title: 'Highest rated movies:',
                data: await requestData(`/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API_key}`)
            },

            {
                Title: 'best movies from 2021:',
                data: await requestData(`/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=${API_key}`)
            },

            {
                Title: 'recently added',
                data: await requestData(`/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-09-22&api_key=${API_key}`)
            },
    
        ]
    
 
    }
}
