import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import MyProjects from '@/components/MyProjects'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <MyProjects/>
      <Contact/>


    </div>
  )
}

export default page
