import React from 'react'
import { Button } from 'reactstrap'
import { Link } from  'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link  to="/" >
           <Button color="success" >Sign In </Button> 
           </Link>
           <Link  to="/signup">
           <Button color="primary" >Sign Up </Button> 
           </Link>
           <Link to="/dashboard">
           <Button  color="warning" >Dashboard </Button> 
           </Link>
        </div>
    )
}

export default Navbar;