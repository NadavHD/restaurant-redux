import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <div className='d-flex justify-content-center waviy text-white'style={{marginTop:"400px"}} >
        <h1>404 ERROR PAGE!</h1>

      </div>
      <div className="d-flex justify-content-center">
          <Link to={'/'}><button className="btn btn-info btn-lg my-5"  onClick={() => {
          }}>Back to home</button></Link>
        </div>
    </div>
  )
}
export default Page404