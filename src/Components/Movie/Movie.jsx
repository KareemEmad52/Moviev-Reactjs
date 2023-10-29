import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import style from './Style.module.css'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'
import logo from '../../Assets/image/favicon.ico'
import { Helmet } from 'react-helmet'
import { userContext } from '../UserContext/UserContext'

export default function Movie() {


  let {headers} = useContext(userContext)
  let [movies, setMovies] = useState()
  let [isLoading, setIsLoading] = useState(false)


  async function getAllMovies(pageNum) {
    setIsLoading(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNum}`, {
      headers
    })
    setMovies(data?.results)
    setIsLoading(false)
  }


  async function searchMovies(name) {
    setIsLoading(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US`, {
      headers
    })
    setMovies(data?.results)
    setIsLoading(false)
  }




  useEffect(() => {
    getAllMovies(1)
  }, [])


  return <>


    <Helmet>
      <meta charSet="utf-8" />
      <title>Movie</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href={logo} />
    </Helmet>


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
      <input type="text" placeholder='Search by movie name...' className='form-control mt-2 w-75 mx-auto mb-0' onChange={(e) => {
        e.target.value == '' ? getAllMovies(1) : searchMovies(e.target.value)
      }} />
      <div className="row pt-4">
        {movies?.map((movie) => <div key={movie.id} className={`col-md-2 text-white ${style.cursorPointer}`}>
          <Link className={`${style.secondFontColor}`} to={`/moviesdetails/${movie.id}`}>
            <div className={`${style.innerDiv}`}>
              <div className={`${style.badge}`}>{movie.vote_average}</div>
              <img className='w-100' alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
              <h4 className={`lead pt-1 text-white ${style.underlineNone}`}>{movie.title}</h4>
            </div>
          </Link>
        </div>)}
      </div>

      <div className='w-100 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(1)} ><span aria-hidden="true">&laquo;</span></button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(1)}>1</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(2)}>2</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(3)}>3</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(4)}>4</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(5)}>5</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllMovies(3)}><span aria-hidden="true">&raquo;</span></button></li>
          </ul>
        </nav>
      </div>

    </div>}
  </>
}
