import React from 'react'
import Navbar from '../components/Navbar'
import CourseCategorySection from '../components/CourseCategorySection'
import EducationBanner from '../components/EducationBanner'



const Home = () => {
  return (
    <div>
      <Navbar /> 
      <EducationBanner/>
      <CourseCategorySection />
    </div>
  )
}

export default Home
