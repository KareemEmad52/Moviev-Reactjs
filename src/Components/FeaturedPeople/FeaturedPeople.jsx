import React, { useContext } from 'react'
import style from './Style.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Puff } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { userContext } from '../UserContext/UserContext'

export default function FeaturedPeople() {

    let {headers} = useContext(userContext)

    function getTrendingPeople() {
        return axios.get(`https://api.themoviedb.org/3/trending/person/day?language=en-US`, {
            headers
        })
    }

    let {isError, data, isLoading } = useQuery('getTrendingPeople', getTrendingPeople)


    return <>
        {isLoading ? <div className='vh-100 w-100 d-flex py-5 justify-content-center align-items-center'>

            <Puff
                height="80"
                width="80"
                radius={1}
                color="#fff"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div> : <div className="container">
            <div className="row pt-5">
                <div className="col-md-4 text-white d-flex align-items-center">
                    <div>
                        <h3 className='h2 fw-lighter'>Trending People To Watch Right Now</h3>
                        <p className={`${style.secondFontColor} lead`}>most watched people by days</p>
                    </div>
                </div>
                {data?.data.results.map((people) => <div key={people.id} className={`col-md-2 text-white ${style.cursorPointer}`}>
                    <Link className={`${style.secondFontColor}`} to={`peopledetails/${people.id}`}>
                        <div className={`${style.innerDiv}`}>
                            <img className='w-100' alt={people.name} src={`https://image.tmdb.org/t/p/original${people.profile_path}`} />
                            <h4 className={`lead pt-1 text-white ${style.underlineNone}`}>{people.name}</h4>
                        </div>
                    </Link>
                </div>)}
                <div className="col-md-4 text-white d-flex align-items-center">
                    <div>
                        <h3 className='h2 fw-lighter'>Trending People To Watch Right Now</h3>
                        <p className={`${style.secondFontColor} lead`}>most watched people by days</p>
                    </div>
                </div>
            </div>
        </div>}


    </>
}
