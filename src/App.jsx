import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import "./index.css"

function App(){

          let [value,update]=useState(0);

          function handel(){
              console.log("button is clicked");
                    update(value+1);
          }

    return(
      <>
 
        <div className='container'>

            <div className='inner'>

            <h1 className='count'>{value}</h1>
           <button onClick={handel} className='button'>CLICK ME!</button>

            </div>
          

        </div>


      </>
    )

}

export default App