import React from 'react'

const About: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-300">
      <h2 className="text-4xl font-bold mb-4">Title</h2>
      <p className="text-xl text-center">Subtitle</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Залишити заявку
      </button>
    </section>
  )
}

export default About
