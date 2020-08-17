import React,  { useEffect, useState }  from 'react';
import axios from 'axios';
import './actualizar.css'

function Vender(props) {

    
   

        return(
            
            <main> 
            <div className="card fix" id="card">
                <img className="card-img-top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuJ1x9x1DQs5nY5BMBNNQG4griVYtICB7NiNXDR5NVu60SrAZb2sg&usqp=CAc" alt="Card image cap" />
                <div className="card-body">
                <p className="card-text">{props.Marca}</p>
                </div>
            </div>

            </main>
        )
    
    
}

export default  Vender;