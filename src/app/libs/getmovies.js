import request from "../../../utils/request"


export const getMovieData = async () => {
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
    ] = await Promise.all([
        fetch(request.fetchNetflixOriginals).then((res) => res.json()),
        fetch(request.fetchTrending).then((res) => res.json()),
        fetch(request.fetchTopRated).then((res) => res.json()),
        fetch(request.fetchActionMovies).then((res) => res.json()),
        fetch(request.fetchComedyMovies).then((res) => res.json()),
        fetch(request.fetchHorrorMovies).then((res) => res.json()),
        fetch(request.fetchRomanceMovies).then((res) => res.json()),
        fetch(request.fetchDocumentaries).then((res) => res.json()),
    ])



    return {

        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,

    }

}


