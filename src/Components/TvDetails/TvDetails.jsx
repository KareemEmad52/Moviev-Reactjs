import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TvDetails() {


    let [tvDetails, setTVDetails] = useState()
    let { id } = useParams()
    let headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI3ZGU0Mzc1NmJmZjI1N2RmYjc2ZDYxODQ0ODc4OSIsInN1YiI6IjY1MzY2YmNjYWJkYWZjMDE0ZTdlNmYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7A4Qjtf8b5JT3-k3Rhjwm7ZaBjHrU6ZO4VsQEaoux4'
    }
    async function getTVDetails(id) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
            headers
        })
        setTVDetails(data)
    }

    useEffect(() => {
        getTVDetails(id)
    }, [])
    return <>
        <div className='vh-100 text-white'>
            <div className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        {<img className='w-100 p-5' src={`https://image.tmdb.org/t/p/original${tvDetails?.poster_path}`} />}
                    </div>
                    <div className="col-md-8">
                        <h3 className='h1 fw-lighter'>{tvDetails?.name}</h3>
                        <p className='h5 fw-lighter lead secondFontColor'>{tvDetails?.tagline}</p>
                        <div className='d-flex justify-content-start align-items-center'>

                        </div>
                        <p className='mt-3'>place of birth : {tvDetails?.place_of_birth}</p>
                        <p>popularity : {tvDetails?.popularity}</p>
                        <p>first air date : {tvDetails?.first_air_date}</p>
                        <p>last air date : {tvDetails?.last_air_date}</p>
                        <p className='my-4 secondFontColor h2 lead'>{tvDetails?.overview.split(' ').slice(0, 100).join(' ')}</p>
                    </div>
                </div>
            </div>

        </div></>
}
