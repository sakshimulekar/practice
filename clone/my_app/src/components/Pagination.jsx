import React, { useContext } from 'react'
import { AuthContext } from '../Context/Context'

const Pagination = () => {
    const {nbPages}=useContext(AuthContext)
    console.log(nbPages)
  return (
    <div>
      
    </div>
  )
}

export default Pagination
