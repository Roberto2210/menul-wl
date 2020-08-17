import React, { useState }  from 'react';
import axios from 'axios'

function Carta() {

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
          <strong>Torta de Tripa</strong>:<p>{Torta_de_tripa}</p>
          <br/>
          <strong>Cuenta a Pagar:</strong>:<p>${prrecio_total}</p>
          <br/>
      
          <a href="#" className="btn btn-danger" name="delete">Delete</a>
        </div>
      </div>
      </div> 
    )

}

export default Carta;