import React from 'react'
import { useNavigate } from "react-router-dom";

function Create() {
    let navigate = useNavigate()
;  return (
    <div>
        Create your new adventure!{" "}
    <button onClick={() =>{navigate("/Home")}}>{" "}
        Back to Home
      </button>
    </div>
  )
}

export default Create;
