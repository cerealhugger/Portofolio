import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Scrollbar from '../components/Scrollbar'
import Projects from './Projects/Projects'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col p-8 min-h-[calc(100vh-64px)] pt-[64px]">

        <section id='home' className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-20 max-w-6xl mx-auto">
            <div className="w-80 h-80 rounded-full bg-gray-200 flex-shrink-0">
              {/* profile pic */}
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-6xl md:text-10xl lg:text-10xl font-playfair mb-4">
                Hi, my name is Elaine Zhu.
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                I'm a Junior at UCI, majoring in CS and minoring in bioinformatics. I'm also a Tech Fellow at Codepath, an ex-intern at Exozymes, and an ex-Outreach Committee Head at CareTech.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600">
              I’m passionate about bridging CS and biology. I’ve worked as a Tech Fellow at CodePath...
            </p>
          </div>
        </section>
        <Projects />


        <section id="notes" className="h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Notes</h2>
            <p className="text-gray-600"></p>
          </div>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600">Here are some things I’ve built recently...</p>
          </div>
        </section>

      </main>
      <Scrollbar />
    </div>
  )
}

export default Home
