import React from 'react';
import './home.css'
import colmena_logo from './colmena_logo.png'
import logo from './logo1.png'
import tacos from './encaabezado-v1.png'
import btnlocal from './BTNLOCAL.png'
import mensaje from './mensaje.svg'
import { Link } from 'react-router-dom';
import './carta.css'
import 'react-bootstrap/dist/react-bootstrap'

// import Navbar from '../nav/Navbar';



function Home() {

  return (

    <React.Fragment>

      <div class="container">
        <div class="row justify-content-center align-items-center minh-100">

        
        <img id="encabezado" src={tacos} alt="Responsive image" />


          <div id="carta" className="card" style={{width: '19rem'}}>
            <div className="card-body d-flex flex-column bd-highlight mb-3">
               <h5 className="card-title"></h5>
               <h6 className="card-subtitle mb-2 text-muted"></h6>
               <p className="card-text"></p>


         
          
              <br></br>
              <br></br>
              <Link className="d-flex flex-column bd-highlight mb-3" to="/mesa-1" id="boton-link">
               <button className="btn btn-form" id="btnlocal" ></button>
               </Link>
              <br></br>
              <br></br>
              <Link className="d-flex flex-column bd-highlight mb-3" to="/domicilio" id="boton-link">
               <button className="btn btn-form" id="btndomicilio" ></button>
               </Link>
              <br></br>
              <br></br>
              <Link className="d-flex flex-column bd-highlight mb-3" to="/domicilio" id="boton-link">
               <button className="btn btn-form" id="btncuenta" ></button>
               </Link>
              <br></br>
              <br></br>
              <Link className="d-flex flex-column bd-highlight mb-3" to="/menu" id="boton-link">
               <button className="btn btn-form" id="btnmenu" ></button>
               </Link>
               <a href="#" className="card-link"></a>
               <a href="#" className="card-link"></a>
            </div>
          </div>

         
     

      </div>
    </div>

      

  

    </React.Fragment>







  );

}

export default Home;