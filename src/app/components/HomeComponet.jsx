'use client'
import Banner from "./Banner";
import { getMovieData } from "../libs/getmovies";
import { useState, useEffect } from "react";
import TestingComponent from "./TestingComponent";
import { modalState } from "../atom/ModalAtom";
import Modal from "./Modal";




import React from 'react'
import Row from "./Row";
import { useRecoilValue } from "recoil";

const HomeComponet = () => {
    const [movieData, setMovieData] = useState({
        netflixOriginals: [],
        trendingNow: [],
        topRated: [],
        actionMovies: [],
        comedyMovies: [],
        horrorMovies: [],
        romanceMovies: [],
        documentaries: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMovieData();
            setMovieData(data);
        };

        fetchData();
    }, []);

    const showModal = useRecoilValue(modalState)

    const movieRows = [
        { title: 'Trending Now', movie: movieData.trendingNow },
        { title: 'Top Rated', movie: movieData.topRated },
        { title: 'Action Thrillers', movie: movieData.actionMovies },
        { title: 'Comedy Movies', movie: movieData.comedyMovies },
        { title: 'Horror Movies', movie: movieData.horrorMovies },
        { title: 'Romance Movies', movie: movieData.romanceMovies },
        { title: 'Horror Movies', movie: movieData.horrorMovies },
        { title: 'Documentaries', movie: movieData.documentaries },



    ]

    return (
        <>
            <div>
                <Banner movieData={movieData.netflixOriginals} />
                <section className=" md:space-y-24">
                    {movieRows.map((movieRow) => {
                        return <Row title={movieRow.title} movies={movieRow.movie} key={movieRow.title} />
                    })}

                </section>

            </div>
            {showModal && <Modal />}
        </>
    )
}

export default HomeComponet

