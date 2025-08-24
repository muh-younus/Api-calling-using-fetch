import React from 'react'

function Navbar() {
  return (
    <>
    
   <div className="flex justify-self-center gap-[100px] p-3 shadow-xl w-[950px] rounded">

    <div>
        <h1 className='text-xl font-bold'>Daily News</h1>
    </div>

    <ul className="flex justify-self-center gap-[50px]">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>News Letter</li>
        <li>
            <input type="text" placeholder='Search...' className='rounded-lg border-2 p-1'/>
        </li>
    </ul>
   </div>
    </>
  )
}

export default Navbar
