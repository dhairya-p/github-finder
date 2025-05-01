import { Link } from "react-router-dom"

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the 
        {' '}
          React Front To Back 2022 Course by Traversy Media.
        
      </p>
      <p className='mb-4 text-2xl font-light'>
        Created by {' '}
        <strong className="text-pink-500 font-bold">
          Dhairya Patel
        </strong>
      </p>
      <Link to='/user/dhairya-p' className='btn btn-lg btn-outline btn-secondary my-2'>
        Check Out My Profile
      </Link>
    
      <p className='text-md text-gray-400 mt-10'>
        Layout By:
        <a className='text-white hover:font-medium' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
    
    </>
  )
}

export default About
