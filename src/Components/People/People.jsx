import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import style from './Style.module.css'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'
import logo from '../../Assets/image/favicon.ico'
import { Helmet } from 'react-helmet'
import { userContext } from '../UserContext/UserContext'

export default function People() {
  let [people, setPeople] = useState()
  let [isLoading, setIsLoading] = useState(false)
  let {headers} = useContext(userContext)



  async function getAllPeople(pageNum) {
    setIsLoading(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?language=en-US&page=${pageNum}`, {
      headers
    })
    setPeople(data?.results)
    setIsLoading(false)
  }


  async function searchPoeple(name) {
    setIsLoading(true)
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/person?query=${name}&include_adult=false&language=en-US&page=1`, {
      headers
    })
    setPeople(data?.results)
    setIsLoading(false)
  }




  useEffect(() => {
    getAllPeople(1)
  }, [])


  return <>

    <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
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
      <input type="text" placeholder='Search by People name...' className='form-control mt-2 w-75 mx-auto mb-0' onChange={(e) => {
        e.target.value == '' ? getAllPeople(1) : searchPoeple(e.target.value)
      }} />
      <div className="row pt-4">
        {people?.map((movie) => <div key={movie.id} className={`col-md-2 text-white ${style.cursorPointer}`}>
          <Link className={`${style.secondFontColor}`} to={`/peopledetails/${movie.id}`}>
            <div className={`${style.innerDiv}`}>
              <img className='w-100' alt={movie.name} src={`https://image.tmdb.org/t/p/original${movie.profile_path}`} />
              <h4 className={`lead pt-1 text-white ${style.underlineNone}`}>{movie.name}</h4>
            </div>
          </Link>
        </div>)}
      </div>

      <div className='w-100 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(1)} ><span aria-hidden="true">&laquo;</span></button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(1)}>1</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(2)}>2</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(3)}>3</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(4)}>4</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(5)}>5</button></li>
            <li class="page-item"><button class="page-link" onClick={() => getAllPeople(3)}><span aria-hidden="true">&raquo;</span></button></li>
          </ul>
        </nav>
      </div>

    </div>}
  </>
}
