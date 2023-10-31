import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import style from './Style.module.css'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
import logo from '../../Assets/image/favicon.ico'
import { userContext } from '../UserContext/UserContext'
export default function TvShow() {


  let [tvShow, setTvShow] = useState()
  let [isLoading, setIsLoading] = useState(false)
  let {headers} = useContext(userContext)


  async function getAllTvShow(pageNum) {
    setIsLoading(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${pageNum}`, {
      headers
    })
    setTvShow(data?.results)
    setIsLoading(false)
  }


  async function searchPeople(name) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=1`, {
      headers
    })
    setTvShow(data?.results)
  }




  useEffect(() => {
    getAllTvShow(1)
  }, [])


  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tv Show</title>
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
      <input type="text" placeholder='Search by TV Show name...' className='form-control mt-2 w-75 mx-auto mb-0' onChange={(e) => {
        e.target.value == '' ? getAllTvShow(1) : searchPeople(e.target.value)
      }} />
      <div className="row pt-4">
        {tvShow?.map((tvShow) => <div key={tvShow.id} className={`col-md-2 text-white ${style.cursorPointer}`}>
          <Link className={`${style.secondFontColor}`} to={`/tvdetails/${tvShow.id}`}>
            <div className={`${style.innerDiv}`}>
              <img className='w-100' alt={tvShow.name} src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`} />
              <h4 className={`lead pt-1 text-white ${style.underlineNone}`}>{tvShow.name}</h4>
            </div>
          </Link>
        </div>)}
      </div>

      <div className='w-100 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(1)} ><span aria-hidden="true">&laquo;</span></button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(1)}>1</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(2)}>2</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(3)}>3</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(4)}>4</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(5)}>5</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllTvShow(3)}><span aria-hidden="true">&raquo;</span></button></li>
          </ul>
        </nav>
      </div>

    </div>}
  </>
}
