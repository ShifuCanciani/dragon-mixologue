import Wrapper from "../assets/wrappers/ErrorPage"
import {Link, useRouteError} from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
   
        const error = useRouteError()
        console.log(error)
        if(error.status === 404){
            return <Wrapper>
                <div>
                    <img src={img} alt="not found" />
                    <h3>Ohhh!</h3>
                    <p>We can't find the drink or the page you are looking for</p>
                    <Link to='/'>Back to the bar</Link>
                </div>
            </Wrapper>
        }
  return (
    <Wrapper>
        <div>
            <h1>Something didn't mix well!</h1>
        </div>
    </Wrapper>)
  
}

export default Error
