import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import style from './Style.module.css'

export default function PeopleDetails() {

    let [movieDetails, setMovieDetails] = useState()
    let { id } = useParams()
    let headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI3ZGU0Mzc1NmJmZjI1N2RmYjc2ZDYxODQ0ODc4OSIsInN1YiI6IjY1MzY2YmNjYWJkYWZjMDE0ZTdlNmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7A4Qjtf8b5JT3-k3Rhjwm7ZaBjHrU6ZO4VsQEaoux4'
    }
    async function getPeopleDetails(id) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`, {
            headers
        })
        setMovieDetails(data)
    }

    useEffect(() => {
        getPeopleDetails(id)
    }, [])

    return <>
        <div className='vh-100 text-white'>
            <div className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        {<img className='w-100 p-5' src={`https://image.tmdb.org/t/p/original${movieDetails?.profile_path}`} />}
                    </div>
                    <div className="col-md-8">
                        <h3 className='h1 fw-lighter'>{movieDetails?.name}</h3>
                        <p className='h5 fw-lighter lead secondFontColor'>{movieDetails?.also_known_as.slice(1,4).join(' ')}</p>
                        <div className='d-flex justify-content-start align-items-center'>
                            
                        </div>
                        <p className='mt-3'>place of birth : {movieDetails?.place_of_birth}</p>
                        <p>popularity : {movieDetails?.popularity}</p>
                        <p>brithday : {movieDetails?.birthday}</p>
                        <p className='my-4 secondFontColor h2 lead'>{movieDetails?.biography.split(' ').slice(0,100).join(' ')}</p>
                    </div>
                </div>
            </div>

        </div>
    </>
}



