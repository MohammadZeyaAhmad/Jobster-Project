import {Link} from 'react-router-dom'
import img from "../assets/images/not-found.svg"
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () => {
  return (
    <Wrapper className='full-page'><div>
      <img src={img} alt='not found'/>
      <h3>Oops! Page not found</h3>
      <p>we can't seem to find the page you are looking for</p>
      <Link to='/'>Go back to Home</Link>
      </div></Wrapper>
  )
}

export default Error