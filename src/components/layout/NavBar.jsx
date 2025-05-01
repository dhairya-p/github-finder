import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function NavBar({title='Github Finder'}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className="flex-none px-2 mx-2 align-middle">
					<Link to='/' className='text-lg font-bold align-bottom text-white'>
						<FaGithub className='inline pr-2 text-3xl align-bottom'/>
						{title}
					</Link>
				</div>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to='/' className='btn btn-ghost btn-md rounded-btn'>
            HOME
          </Link>
        </div>
      </div>
			<div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to='/about' className='btn btn-ghost btn-md rounded-btn'>
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
	title: PropTypes.string
}

export default NavBar

