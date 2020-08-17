import React, { useState }  from 'react';
import axios from 'axios'
import './platillos.css'
import logo from './LOGO.png'
import menu from './ICONO MENU.png'

import { Link } from 'react-router-dom';






function Domicilio() {
    

 


    const [Nombre, setNombre] = useState('');
    const [Numero_telefonico, setNumero_telefonico] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Referencia, setReferencia] = useState('');
    const [Obserbaciones, setObserbaciones] = useState('');
    const [Mesa, setMesa] = useState('');
    const [Taco_de_res, setTaco_de_res] = useState('');
    const [Taco_de_pastor, setTaco_de_pastor] = useState('')
    const [Taco_de_puerco, setTaco_de_puerco] = useState('')
    const [Taco_de_tripa, setTaco_de_tripa] = useState('')
    const [Torta_de_res, setTorta_de_res] = useState('')
    const [Torta_de_pastor, setTorta_de_pastor] = useState('')
    const [Torta_de_puerco, setTorta_de_puerco] = useState('')
    const [Torta_de_tripa, setTorta_de_tripa] = useState('')
    const [Bebida, setBebida] = useState('')
    const [Salsa, setSalsa] = useState('')
   


    
   

   const precio_taco_res = Taco_de_res *5;
   const precio_taco_pastor = Taco_de_pastor * 5;
   const precio_taco_puerco = Taco_de_puerco * 5;
   const precio_taco_tripa = Taco_de_tripa * 5;

   const precio_torta_res = Torta_de_res * 25;
   const precio_torta_pastor = Torta_de_pastor * 25;
   const precio_torta_puerco = Torta_de_puerco * 25;
   const precio_torta_tripa = Torta_de_tripa * 25;
   const prrecio_total = precio_taco_res + precio_taco_pastor + precio_taco_puerco + precio_taco_tripa + precio_torta_res + precio_torta_pastor + precio_torta_puerco + precio_torta_tripa;
   
   console.log(prrecio_total)
    

 

    const onChangeInput = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        const id = event.target.id;

 

        switch (id) {
            case 'Nombre':
                setNombre(event.target.valu) ;
                break;
            case 'Numero_telefonico':
                    setNumero_telefonico(event.target.valu) ;
                    break;
            case 'Direccion':
                setDireccion(event.target.value );
                break;
            case 'Referencia':
                setReferencia(event.target.value  );
                break;
            case 'Obserbaciones':
                setObserbaciones(event.target.value  );
                break;
            case 'Taco_de_res':
                    setTaco_de_res(event.target.value  );
                    break;
            case 'Taco_de_pastor':
                setTaco_de_pastor(event.target.value  );
                break;
            case 'Taco_de_puerco':
                    setTaco_de_puerco(event.target.value );
                break;
            case 'Taco_de_tripa':
                    setTaco_de_tripa(event.target.value );
                break;
            case 'Torta_de_res':
                    setTorta_de_res(event.target.value  );
                 break;
             case 'Torta_de_pastor':
                    setTorta_de_pastor(event.target.value  );
                 break;
             case 'Torta_de_puerco':
                    setTorta_de_puerco(event.target.value );
                break;
            case 'Torta_de_tripa':
                    setTorta_de_tripa(event.target.value );
                break;
            case 'Bebida':
                    setBebida(event.target.value );
                break;
                case 'Bebida':
                    setBebida(event.target.value );
                break;
             case 'Salsa':
                    setSalsa(event.target.value );
                break;
            default:
                break;
        }

    }

   

    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('SE SUBMITEO');

        const body = {
            Nombre: Nombre,
            Numero_telefonico: Numero_telefonico,
            Direccion: Direccion,
            Referencia: Referencia,
            Obserbaciones: Obserbaciones,
            Mesa: Mesa,
            Taco_de_res:Taco_de_res,
            Taco_de_pastor: Taco_de_pastor,
            Taco_de_puerco: Taco_de_puerco ,
            Taco_de_tripa: Taco_de_tripa ,
            Torta_de_res:Torta_de_res,
            Torta_de_pastor: Torta_de_pastor,
            Torta_de_puerco: Torta_de_puerco,
            Torta_de_tripa: Torta_de_res,
            Bebida: Bebida,
            Salsa: Salsa
        }

        axios.post('http://111191617958.ngrok.io/api/v1/users', body)
            .then((result) => {
                console.log(result.data);
                alert('Se creo tu orden puedes seguir ordenando tu siguente platillo ');
            }).catch((err) => {
                console.log(err);
                alert('No funciono');
            });
    }






    return (


        <React.Fragment>

            <body id="domicilio-body">
                
           

            <div className="container">
                {/* APPLICATION */}
                <div id="App" className="row pt-5">
                    <div className="col-md-4">
                        <div className="card"style={{width: '100%'}} id="card-domicilio">
                            {/* <div className="card-header">
                                <h4>Orden</h4>
                            </div> */}
                           
                            <section className="registro">
        <form className="m-5" onSubmit={onSubmitHandler} >
      
        <Link className="d-flex flex-column bd-highlight mb-3" to="/" id="boton-link">
        <div className="d-flex flex-nowrap">
            <img id="icon-menu" className="d-flex justify-content-center order-2 p-2"  src={menu}></img>
            {/* <h3 id="titulo-domicilio" className="orden-3 p-2 align-self-center">Domicilio</h3> */}
            <img id="logo-domicilio" className="d-flex justify-content-center order-1 p-2 justify-content-center" style={{width: '170px'}}  src={logo}></img>
           
            </div>
            </Link>
          
          



            <div className="form-group row d-flex bd-highlight mb-1">
           <h3 id="subtitulo-comida">TACOS</h3>
           <h6 className="ml-auto p-2 bd-highlight boton">$5</h6>
           </div>

            <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                <label  className="p-2 bd-highlight order-1 p-2 ">Res:</label>
                <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" id="Taco_de_res" onChange={onChangeInput} value={Taco_de_res} />
          
                <label className="p-2 bd-highlight order-3 p-2">Pastor:</label>
                <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" id="Taco_de_pastor" onChange={onChangeInput} value={Taco_de_pastor} />
                
            </div>

            <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                <label className="p-2 bd-highlight order-1 p-2" >Puerco:</label>
                <input type="number" className="form-control  p-2 bd-highlight boton order-2 p-2" id="Taco_de_puerco" onChange={onChangeInput} value={Taco_de_puerco} />
            
                <label className="p-2 bd-highlight order-3 p-2">Tripa:</label>
                <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" id="Taco_de_tripa" onChange={onChangeInput} value= {Taco_de_tripa}/>
            </div>


           <div className="form-group row d-flex bd-highlight mb-1">
           <h3 id="subtitulo-comida">TORTAS</h3>
           <h6 className="ml-auto p-2 bd-highlight boton">$25</h6>
           </div>

    <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
    <label  className="p-2 bd-highlight order-1 p-2">Res:</label>
    <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" id="Torta_de_res" onChange={onChangeInput} value={Torta_de_res} />


    <label className="p-2 bd-highlight order-3 p-2">Pastor:</label>
    <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" id="Torta_de_pastor" onChange={onChangeInput} value={Torta_de_pastor} />
</div>

<div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
    <label className="p-2 bd-highlight order-1 p-2" >Puerco:</label>
    <input type="number" className="form-control  p-2 bd-highlight boton order-2 p-2" id="Torta_de_puerco" onChange={onChangeInput} value={Torta_de_puerco} />



    <label className="p-2 bd-highlight order-3 p-2">Tripa:</label>
    <input type="number" className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" id="Torta_de_tripa" onChange={onChangeInput} value= {Torta_de_tripa}/>
</div>

<div className="form-group row d-flex bd-highlight mb-1">
           <h3 id="subtitulo-comida">ACOMPAÑALOS</h3>
         
           </div>

{/* <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos" >
<button type="button" className="btn btn-secondary"  id="btn-complemento"  onChange={onChangeInput} value={Salsa} >Salsa</button>
<button type="button" className="btn btn-secondary"  id="btn-complemento" onChange={onChangeInput} value={Torta_de_puerco}>Cilantro</button>
<button type="button" className="btn btn-secondary"  id="btn-complemento" onChange={onChangeInput} value={Torta_de_puerco}>Cebolla</button>


</div>

<div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
<button type="button" className="btn btn-secondary"  id="btn-complemento" onChange={onChangeInput} value={Torta_de_puerco}>Naturales</button>
<button type="button" className="btn btn-secondary"  id="btn-complemento" onChange={onChangeInput} value={Torta_de_puerco}>Con todo</button>


</div       > */}


<select class="form-control" id="Salsa" onChange={onChangeInput} value={Salsa}>
  <option value="Naturales">Naturales</option>
  <option value="Salsa">Salsa</option>
  <option value="Salsa,Cebolla">Salsa y Cebolla</option>
  <option value="Salsa, Cilantro">Salsa y Cilantro</option>
  <option value="Cebolla">Cebolla</option>
  <option value="Cebolla, Cilantro">Cebolla, Cilantro</option>
  <option value="Cilantro">Cilantro</option>
  <option value="Con Todo">Con Todo</option>

</select>

<br>
</br>
<br></br>
<br></br>



<h3 className="" id="subtitulo-bebidas">Bebidas</h3>



            
<select class="form-control" id="Bebida" onChange={onChangeInput} value={Bebida}>
  <option value="CocaCola">CocaCola</option>
  <option value="Pepsi">Pepsi</option>
  <option value="Carrito">Carrito</option>
</select>



<button className="btn btn-form" type="submit">Subir</button>

           

        </form>


        </section>

        



                                 
                        </div>
                    </div>

                    <div className="container col-md-4">
            <div className="card text-center mb-4">
        <div className="card-body ">

            <div className="form-group ">
                <label>Obserbaciones</label>
                <input type="text" id="input-ordenar" placeholder="Que los tacos de res sean con cebolla y cilantro y lo de pastor naturales" className="form-control" id="Obserbaciones" onChange={onChangeInput} value={Obserbaciones} />
            </div>

            <div className="form-group ">
                <label>Nombre</label>
                <input type="text" id="input-ordenar" className="form-control" id="Nombre" onChange={onChangeInput} value={Nombre} />
            </div>


            <div className="form-group ">
                <label>Numero telefonico:</label>
                <input type="text" id="input-ordenar" className="form-control" id="Numero_telefonico" onChange={onChangeInput} value={Numero_telefonico} />
            </div>

            <div className="form-group ">
                <label>Direccion:</label>
                <input type="text" id="input-ordenar" className="form-control" id="Direccion" onChange={onChangeInput} value={Direccion} />
            </div>

            <div className="form-group ">
                <label>Referencia</label>
                <input type="text" id="input-ordenar" className="form-control" id="Referencia" onChange={onChangeInput} value={Referencia} />
            </div>

            

      
          
          
        </div>
      </div>
      </div>

     
                    <div className="container col-md-4">
            <div className="card text-center mb-4">
        <div className="card-body ">
            
    <strong>Nombre</strong>:<p>{Nombre}</p>
    <strong>Mesa</strong>:<p>{Mesa}</p>
          <br />
          <h4>Tacos</h4>
          <strong>Tacos de Pastor</strong>:<p>{Taco_de_res}</p>
          <br />
          <strong>Tacos de Res</strong>:<p>{Taco_de_pastor}</p>
          <br />
          <strong>Tacos de Puerco</strong>:<p>{Taco_de_puerco}</p>
          <br />
          <strong>Tacos de Tripa</strong>:<p>{Taco_de_tripa}</p>
          <br/>    
            <strong>Torta de res</strong>:<p>{Torta_de_res}</p>
          <br/>
          <strong>Torta de pastor</strong>:<p>{Torta_de_pastor}</p>
          <br/>
          <strong>Torta de Puerco</strong>:<p>{Torta_de_puerco}</p>
          <br/>
          <strong>Torta de Tripa</strong>:<p> {Torta_de_tripa}</p>
          <br/>
          <strong>Cuenta a Pagar:</strong>:<p>${prrecio_total}</p>
          <br/>
      
         
        </div>
      </div>
      </div>
                    <div id="product-list" className="col-md-8" />



                </div>
            </div>

 
 

            </body >

        </React.Fragment>

    );



}

export default Domicilio;