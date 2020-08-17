import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Comida from './pages/carta_de_comida/comida';
import Domicilio from './pages/domicilio/comida';
import Mesa1 from './pages/mesa-1/mesa-1'
import Menu from './pages/menu/menu'
import Menudomicilio from './pages/mesa1domicilio/mesa-1'

const  Router = () => {

    return(
        <Switch>

            <Route exact path='/mesa-1' component={Menudomicilio}/>
             <Route exact path='/menu' component={Menu}/>
             <Route exact path='/domicilio' component={Domicilio}/>
            <Route exact path='/comida' component={Comida}/>
            <Route exact path='/mesa-1' component={Mesa1}/>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
    
}

export default Router;