import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { ProductsList } from '../pages/products/ProductsList';

import {BreadCrumb} from '../components/ui/BreadCrumb'
import { Drawer } from '../components/ui/Drawer';
import Title from '../components/ui/Title';

import {NavBar} from '../components/ui/NavBar';
import { Kardex } from '../pages/kardex/Kardex';
import ProductNewContainer from '../pages/products/ProductNewContainer';
import { ProductDetail } from '../pages/products/ProductDetail';

export const DashboardRoutes = () => {
    return (
        <>
            <Router>

                <NavBar/>

                <div className="rounded-lg shadow drawer h-52 h-screen m-1 overflow-hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle"/> 

                    <div className="flex flex-col drawer-content bg-white p-5 overflow-hidden">

                        <Title/>
                        
                        <BreadCrumb/>

                        <Switch>
                            <Route exact path="/products" component={ProductsList} />

                            <Route exact path="/products/new" component={ProductNewContainer} />
                            
                            <Route exact path="/products/:id" component={ProductDetail}/>

                            <Route path="/products/:id/edit" component={ProductNewContainer}/>
                            
                            <Route exact path="/kardex" component={Kardex} />

                            <Redirect to="/products"></Redirect>
                        </Switch>

                    </div> 

                    <Drawer/>
                </div>

    
            </Router>
        </>
    )
}
