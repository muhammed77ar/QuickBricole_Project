import React from 'react'
import { StyledSuccess } from '../styledComponent/seccess'
import { IoCloudDone } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Success() {
  return (
   <StyledSuccess>
      <div className="icon">
         <IoCloudDone style={{fontSize:'250',color:'#15b615b0',margin:'20px auto'}}/>
         <p>
          your account created successfully ,now you have to <Link to={'/login'}>Login</Link>
         </p>
      </div>
    </StyledSuccess> 
  )
}

export default Success