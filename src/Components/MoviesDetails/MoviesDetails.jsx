import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import style from './Style.module.css'

export default function MoviesDetails() {

    let [movieDetails, setMovieDetails] = useState()
    let { id } = useParams()
    let headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI3ZGU0Mzc1NmJmZjI1N2RmYjc2ZDYxODQ0ODc4OSIsInN1YiI6IjY1MzY2YmNjYWJkYWZjMDE0ZTdlNmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7A4Qjtf8b5JT3-k3Rhjwm7ZaBjHrU6ZO4VsQEaoux4'
    }
    async function getMovieDetails(id) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
            headers
        })
        setMovieDetails(data)
    }

    useEffect(() => {
        getMovieDetails(id)
    }, [])

    return <>
            <div className="container pt-4  text-white">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        {<img className='w-100 p-5' src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`} />}
                    </div>
                    <div className="col-md-8">
                        <h3 className='h1 fw-lighter'>{movieDetails?.title}</h3>
                        <p className='h5 fw-lighter lead secondFontColor'>{movieDetails?.tagline}</p>
                        <div className='d-flex justify-content-start align-items-center'>
                            {movieDetails?.genres.map((badge) =>
                                <div className={`${style.catDiv} me-3`}>
                                    {badge.name}
                                </div>)}
                        </div>
                        <p className='mt-4'>Vote : {movieDetails?.vote_average}</p>
                        <p>Vote Count : {movieDetails?.vote_count}</p>
                        <p>popularity : {movieDetails?.popularity}</p>
                        <p>release date : {movieDetails?.release_date}</p>
                        <p className='my-4 secondFontColor h2 lead'>{movieDetails?.overview}</p>
                    </div>
                </div>
            </div>


    </>
}



