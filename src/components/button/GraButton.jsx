import React from 'react'

function GraButton({name, className}) {
  return (
    <button className={`${className} text-black rounded-lg py-2 px-5 bg-gradient-to-r from-tOrange to-tBlue duration-300 hover:scale-110`}>
        {name}
    </button>
  )
}

export default GraButton