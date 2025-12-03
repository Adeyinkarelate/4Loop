import React from 'react'
import Navbar from '../components/Navbar'
import EducationBanner from '../components/EducationBanner'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Countdown from '../components/CountDown'
import Team from '../components/Team'



const Home = () => {
  return (
    <div className='bg-black'>
      <Helmet>
        <title>Home | Adexbit's Tech Fusion Hub</title>
        <meta name="title" content="Home | Adexbit's Tech Fusion Hub" />
        <meta
          name="description"
          content=" Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />

        <meta name="og:title" content="Home | Adexbit's Tech Fusion Hub" />
        <meta
          name="og:description"
          content="Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />

        <meta
          name="keywords"
          content="Home page, Adexbit, Tech, Fusion Hub, Adexbit's,DevOp,Cloud Engineering, Learn Data Analytics, Learn Data science, Learn web development in Nigeria, Become a software engineer, frontend development, backend development, Learn HTML, Learn CSS, Learn JavaScript, Learn Python, Learn SQL,"
        ></meta>
      </Helmet>
      <Navbar /> 
      <EducationBanner/>
  {/* new course category section  */}
      <Countdown/> 
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
