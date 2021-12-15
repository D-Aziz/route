import React, { useState, useEffect } from 'react';

import{Button, InputGroup} from 'react-bootstrap'



const AddMovies = ({handleAdd}) => {
 const [Show, setShow] = useState(false)
 const [Movie, setMovie] = useState({
     name:"",
     description:"",
posterurl:"",
     backurl:"",
     rating:"",
 })
    return (
        <div>
            <div className="d-grid gap-2">
  <Button onClick={()=> setShow(!Show)} variant="primary" size="lg" active>
    Add Movie
  </Button>
   {Show?(
      <div className="modal-bg">
      <div className="modal-body"style={{position:"relative"}}>
      <i className="material-icons"
      style={{position:"absolute",left:"735px",top:"-45px",cursor:"pointer"}}onClick={()=> setShow(!Show)}>close</i>
        <input type="text" placeholder="Movie name" onChange={(e)=> setMovie({...Movie, name:e.target.value})} />
        <input type="text" placeholder="Movie Description" onChange={(e)=> setMovie({...Movie,description:e.target.value})}/>
        <input type="text" placeholder="Movie Image"onChange={(e)=> setMovie({...Movie, posterurl:e.target.value})} />
        <input type="text" placeholder="Movie Background" onChange={(e)=> setMovie({...Movie, backurl:e.target.value})}/>
        <input type="text" placeholder="movie Rate" onChange={(e)=> setMovie({...Movie, rating:e.target.value})}/>
           <button onClick={()=>handleAdd(Movie)}>Add</button>
          </div>
          </div>
     ):null}
</div>
        </div>
    )
}

export default AddMovies
