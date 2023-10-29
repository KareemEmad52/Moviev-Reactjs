import React, { useContext } from 'react'
import style from './Style.module.css'
import Slider from "react-slick";
import axios from 'axios';
import { useQuery } from 'react-query';
import { userContext } from '../UserContext/UserContext';


export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows : false,
        autoplay : true,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    let {headers} = useContext(userContext)

    function getLatestMovies() {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
            headers
        })
    }

    let { data } = useQuery('getLatestMovies', getLatestMovies)




    return <>
        <div className={`${style.mainDiv}`}>
            <div className="h-100">
                <div className="px-5">
                    <h3 className={`${style.heading}`}>OUR LATEST MOVIES </h3>
                    <Slider {...settings}>
                        {data?.data.results.map((movie) => <img alt={movie.title} key={movie.id} height={300} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />)}
                    </Slider>
                </div>
            </div>
        </div>
    </>
}
