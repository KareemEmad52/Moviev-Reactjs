import React from 'react'
import MainSlider from '../Mainslider/MainSlider'
import FeaturedMovies from '../FeaturedMovies/FeaturedMovies'
import FeaturedPeople from '../FeaturedPeople/FeaturedPeople'
import logo from '../../Assets/image/favicon.ico'
import { Helmet } from 'react-helmet'

export default function Home() {


  return <>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Noxe</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href={logo} />
    </Helmet>


    <MainSlider />
    <FeaturedMovies />
    <FeaturedPeople />

  </>
}
