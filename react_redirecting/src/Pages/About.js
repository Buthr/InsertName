import React from 'react'
import { useNavigate } from "react-router-dom";

function About() {
        let navigate = useNavigate()
    ;  return (
        <div>
            Hey hey! Finally I did it eh!{" "}
        <button onClick={() =>{navigate("/Home")}}>{" "}
            Back to Home
          </button>
        </div>
      )
}
export default About;