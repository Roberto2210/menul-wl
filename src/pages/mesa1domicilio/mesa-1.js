import React, { Component } from 'react';
import tacos from './encaabezado-v1.png'
import logo from './LOGO.png'
import menu from './ICONO MENU.png'
import orden from './Programas.svg'
import { Link } from 'react-router-dom';
import './mesa-1.css'
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const url="http://4523934ca65e.ngrok.io/api/v1/users";
const urld="http://4523934ca65e.ngrok.io/api/v1/users/";




class Mesadomicilio extends Component {
  
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    Nombre: '', 
    Mesa: '',
    Bebida: '',
    Salsa: '',
    Numero_telefonico: '',
    Direccion:'',
    Referencia: '',
    Obserbaciones:'' ,
    Taco_de_res: '' ,
    Taco_de_pastor: '',
    Taco_de_puerco: '',
    Taco_de_tripa:'',
    Torta_de_res: '',
    Torta_de_pastor: '',
    Torta_de_puerco:'' ,
    Torta_de_tripa:'',
    tipoModal: '',
  }
}

sumar() {

  const precio =this.state.form.Taco_de_res * 5
}



peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form._id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(urld+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(urld+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  }).catch(error=>{
    console.log('Que onda',error.message);
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(users)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: users._id,
      Nombre: users.Nombre,
      Mesa: users. Mesa,
      Numero_telefonico: users. Numero_telefonico,
      Direccion: users.Direccion,
      Referencia: users.Referencia,
      Obserbaciones: users.Obserbaciones,
      Bebida: users.Bebida,
      Salsa: users.Salsa,
      Taco_de_res: users.Taco_de_res ,
      Taco_de_pastor: users.Taco_de_pastor,
      Taco_de_puerco: users.Taco_de_puerco,
      Taco_de_tripa: users.Taco_de_tripa,
      Torta_de_tripa: users.Torta_de_tripa,
      Torta_de_res: users.Tacos_de_res,
      Torta_de_pastor: users.Torta_de_pastor,
      Torta_de_puerco: users.Torta_de_puerco,
      
    }
  })

}

 

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
   
    <div className="App">
       <Link className="d-flex flex-column bd-highlight mb-3" to="/" id="boton-link">
    <img id="encabezado" src={tacos} alt="Responsive image" />
    </Link>
      
    {/* <br /><br /><br /> */}
       <div className="d-flex flex-nowrap">
           {/* <img id="icon-menu" className="d-flex justify-content-center order-2 p-2"  src={menu}/> */}
           {/* <img id="logo-mesa1" className="d-flex justify-content-center order-1 p-2 justify-content-center" style={{width: '170px'}}  src={logo}/> */}
       </div>

  <button  id="agregar"className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Orden</button>
  <br /><br />

  <div className="container">
  <div id="pedidos" className="card" style={{width: '20rem'}}>
        <div className="card-body">
          <h5 className="card-title">Orden</h5>

          
          
          <img id="" className=" justify-content-center" style={{width: '50%'}}  src={orden}></img>
         <p>Pide tu orden en la pratorma y sera tomado en cuenta tu pedido</p>
          
        </div>
      </div>
      </div>

  
  {this.state.data.map(users=>{
    return(
      // <body id="mesa-body">
      <div className="container">
  <div id="pedidos" className="card" style={{width: '20rem'}}>
        <div className="card-body">
          <h5 className="card-title">Orden</h5>
          <h6 className="card-subtitle mb-2 text-muted">{users.Nombre}</h6>

          <h3 id="subtitulo-comida">TACOS</h3>
          <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
          <p className="card-text p-2 bd-highlight order-1 p-2">Res:{users.Taco_de_res}</p>
          <p className="card-text p-2 bd-highlight order-2 p-2">Pastor:{users.Taco_de_pastor}</p>
          </div>

          <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
          <p className="card-text card-text p-2 bd-highlight order-1 p-2">Puerco:{users.Taco_de_puerco}</p>
          <p className="card-text card-text p-2 bd-highlight order-2 p-2">Tripa:{users.Taco_de_tripa}</p>
          </div>

          <h3 id="subtitulo-comida">TORTAS</h3>
          <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
          <p className="card-text card-text p-2 bd-highlight order-1 p-2">Res:{users.Torta_de_res}</p>
          <p className="card-text card-text p-2 bd-highlight order-2 p-2">Pastor:{users.Torta_de_pastor}</p>
          </div>

          <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
          <p className="card-text card-text p-2 bd-highlight order-1 p-2">Puerco:{users.Torta_de_puerco}</p>
          <p className="card-text card-text p-2 bd-highlight order-2 p-2">Tripa:{users.Torta_de_tripa}</p>
          </div>

          <h3 id="subtitulo-comida">ACOMPAÑADOS</h3>
          <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
          <p className="card-text card-text p-2 bd-highlight order-1 p-2">Acompañado:{users.Salsa}</p>
          <p className="card-text card-text p-2 bd-highlight order-2 p-2">Bebida:{users.Bebida}</p>
          </div>
    
          <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(users); this.setState({modalEliminar: true})}}>Eliminar</button>
        </div>
      </div>
      </div>
      // </body>
     
          )
        })}
    {/* <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tacos de Res</th>
          <th>Capital Bursatil (en millones de USD)</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(users=>{
          return(
            <tr>
          <td>{users._id}</td>
          <td>{users.Nombre}</td>
          <td>{users.Taco_de_res}</td>
          <td>{new Intl.NumberFormat("en-EN").format(users.capital_bursatil)}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(users); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(users); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </table> */}



    <Modal   isOpen={this.state.modalInsertar} id="tabla">
    <div className="card"style={{width: '100%'}} id="card-domicilio">
                <ModalHeader  style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div  className="form-group">
                  <div className="d-flex flex-nowrap">
                  {/* <img id="icon-menu" className="d-flex justify-content-center order-2 p-2"  src={menu}></img>
                <img id="logo-domicilio" className="d-flex justify-content-center order-1 p-2 justify-content-center" style={{width: '15%'}}  src={logo}></img> */}
                  </div>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="_id" id="_id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Nombre:</label>
                    <input className="form-control" type="text" name="Nombre" id="Nombre" onChange={this.handleChange} value={form?form.Nombre: ''}/>
                    <br />
                
                    <label htmlFor="nombre">Obserbaciones:</label>
                    <input className="form-control" type="text" name="Obserbaciones" id="Obserbaciones" onChange={this.handleChange} value={form?form.Obserbaciones: ''}/>
                    <br></br>
                    <div className="form-group row d-flex bd-highlight mb-1">
                    <h3 id="subtitulo-comida">TACOS</h3>
                    <h6 className="ml-auto p-2 bd-highlight boton">$5</h6>
                    </div>
                    <br/>
                    <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                    <label className="p-2 bd-highlight order-1 p-2" htmlFor="nombre">Res:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" type="number" name="Taco_de_res" id="Taco_de_res" onChange={this.handleChange} value={form?form.Taco_de_res: '' * 5}/>
                    <br />
                    <label className="p-2 bd-highlight order-3 p-2" htmlFor="capital_bursatil">Pastor:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" type="number" name="Taco_de_pastor" id="Taco_de_pastor" onChange={this.handleChange} value={form?form.Taco_de_pastor:''}/>
                    <br />
                    </div>

                   <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                    <label className="p2 bd-highlight order-1 p-2" htmlFor="nombre">Tripa:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" type="number" name="Taco_de_tripa" id="Taco_de_tripa" onChange={this.handleChange} value={form?form.Taco_de_tripa: ''}/>
                    <br />
                    <label className="p-2 bd-highlight order-3 p-2" htmlFor="nombre">Puerco:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" type="number" name="Taco_de_puerco" id="Taco_de_puerco" onChange={this.handleChange} value={form?form.Taco_de_puerco: ''}/>
                    <br />
                    </div>

                    <div className="form-group row d-flex bd-highlight mb-1">
                    <h3 id="subtitulo-comida">TORTAS</h3>
                    <h6 className="ml-auto p-2 bd-highlight boton">$25</h6>
                    </div>

                   <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                   <label className="p-2 bd-highlight order-1 p-2" htmlFor="nombre">Res:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" type="number" name="Torta_de_res" id="Torta_de_res" onChange={this.handleChange} value={form?form.Torta_de_res: ''}/>
                    <br />
                    <label className="p-2 bd-highlight order-3 p-2" htmlFor="capital_bursatil">Pastor</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-4 p-2"  type="number" name="Torta_de_pastor" id="Torta_de_pastor" onChange={this.handleChange} value={form?form.Torta_de_pastor:''}/>
                    <br />
                    </div>

                    <div className="form-group row d-flex bd-highlight mb-1 d-flex flex-nowrap" id="tacos">
                    <label className="-2 bd-highlight order-1 p-2" htmlFor="nombre">Tripa:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-2 p-2" type="number" name="Torta_de_tripa" id="Torta_de_tripa" onChange={this.handleChange} value={form?form.Torta_de_tripa: ''}/>
                    <br />
                    <label className="p-2 bd-highlight order-3 p-2" htmlFor="nombre">Puerco:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" type="number" name="Torta_de_puerco" id="Torta_de_puerco" onChange={this.handleChange} value={form?form.Torta_de_puerco: ''}/>
                  </div>
{/* 
                  <label className="p-2 bd-highlight order-3 p-2" htmlFor="nombre">Salsa:</label>
                    <input className="form-control ml-auto p-2 bd-highlight boton order-4 p-2" type="text" name="Salsa" id="Salsa" onChange={this.handleChange} value={form?form.Salsa: ''}/>
 */}

                  <h3 id="subtitulo-comida">ACOMPAÑADOS</h3>
                  <select class="form-control" name="Salsa" id="Salsa" onChange={this.handleChange} value={form?form.Salsa: ''}>
                      <option name="Salsa" id="Salsa"  value="Naturales">Naturales</option>
                      <option  name="Salsa"id="Salsa"  value="Salsa" >Salsa</option>
                      <option name="Salsa" value="Salsa,Cebolla">Salsa y Cebolla</option>
                      <option name="Salsa" value="Salsa, Cilantro">Salsa y Cilantro</option>
                      <option name="Salsa" value="Cebolla">Cebolla</option>
                      <option name="Salsa" value="Cebolla, Cilantro">Cebolla, Cilantro</option>
                      <option name="Salsa" value="Cilantro">Cilantro</option>
                      <option name="Salsa" value="Con Todo">Con Todo</option>
                  </select>
                  <br/>
                  <br/>
                 <br></br>
                 <br></br>
                 <br></br>
                  <h3 className="bebidas" id="subtitulo-comida-bebidas">BEBIDAS</h3>
                  <select class="form-control" name="Bebida" id="Bebida" onChange={this.handleChange}  value={form?form.Bebida: ''}>
                      <option name="Bebida" id="Bebida" value="CocaCola">CocaCola</option>
                      <option name="Bebida" id="Bebida" value="Pepsi">Pepsi</option>
                      <option name="Bebida" id="Bebida" value="Carrito">Carrito</option>
                  </select>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Ordenar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
                </div>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar la orden de {form && form.Nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Mesadomicilio;
