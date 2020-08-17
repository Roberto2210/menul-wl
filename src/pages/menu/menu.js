import React, { Component } from 'react';
import tacos from './encaabezado-v1.png'
import menu from './MENU TACOS.jpg'
import logo from './LOGO.png'

import orden from './Programas.svg'
import { Link } from 'react-router-dom';
import './mesa-1.css'
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const url="http://4523934ca65e.ngrok.io/api/v1/users";
const urld="http://4523934ca65e.ngrok.io/api/v1/users/";




class Menu extends Component {
  

  

  render(){
  
  return (
   
    <div className="App">
       <Link className="d-flex flex-column bd-highlight mb-3" to="/" id="boton-link">
    {/* <img id="encabezado" src={tacos} alt="Responsive image" /> */}
    </Link>


    {/* <div className="card" >
       
        <div className="card-body"> */}
         <img  src={menu} alt="Responsive image" />
   
        </div>
      // </div>

      // </div>
   )
   }
}
export default Menu;
