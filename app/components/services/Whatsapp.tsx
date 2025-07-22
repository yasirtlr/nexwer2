import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <section className='py-20'> 
    <div className='container'>
   <div className="bg-gray-100 p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Let’s Build Something Great Together</h3>
            <p className="text-gray-600">Have an idea? A problem to solve? A manual process to automate?</p>
          </div>
          <button className="flex items-center gap-2 text-white bg-green-500 px-5 py-3 rounded hover:bg-green-600">
            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
          </button>
        </div>
        </div>
        </section>
  )
}

export default Whatsapp