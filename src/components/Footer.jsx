import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='mt-3 py-5 text-3xl w-100% h-auto bg-gray-400 flex'>
        <div className='mx-3 mt-3'>
        <ul>
          <li className='text-sm underline text-white pb-3'><Link to="/tictactoe" >
            Rate The Game
            </Link>
            </li>
          <p className='text-sm font-semibold italic's>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores iure aliquid ullam atque inventore exercitationem delectus dolores eaque? Autem, enim. Doloremque, voluptates totam in deleniti earum ipsam. Placeat, officia.
          </p>
        </ul>
        </div>

        <div className='mx-3 mt-3'>
        <ul>
          <li className='text-sm underline text-white pb-3'><Link to="/tictactoe" >
            Rate The Game
            </Link>
            </li>
          <p className='text-sm font-semibold italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores iure aliquid ullam atque inventore exercitationem delectus dolores eaque? Autem, enim. Doloremque, voluptates totam in deleniti earum ipsam. Placeat, officia.
          </p>
        </ul>
        </div>

        <div className='mx-3 mt-3'>
        <ul>
          <li className='text-sm underline text-white pb-3'><Link to="/tictactoe" >
            Rate The Game
            </Link>
            </li>
          <p className='text-sm font-semibold italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores iure aliquid ullam atque inventore exercitationem delectus dolores eaque? Autem, enim. Doloremque, voluptates totam in deleniti earum ipsam. Placeat, officia.
          </p>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
