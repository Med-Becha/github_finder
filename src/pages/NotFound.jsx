import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='hero'>
        <div className='text-center '>
            <div className='max-w-lg'>
                <h1 className='text-3xl font-bold mb-8'>Oops!</h1>
            </div>
            <p className='text-1xl mb-8'>404 - Page not found!</p>
            <Link to='/' className='btn btn-primary btn-l'>
                <FaHome className='mr-2' />
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound