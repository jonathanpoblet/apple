import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AirPods from '../screens/AirPods/AirPods';
import Cart from '../screens/Cart/Cart';
import Detail from '../screens/Detail/Detail';
import Home from '../screens/Home/Home';
import IPhone from '../screens/iPhone/iPhone';
import Mac from '../screens/Mac/Mac';

const Stack = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        path='/apple'
                        element={ <Home /> }
                    />
                    <Route
                        path='/mac'
                        element={ <Mac /> }
                    />
                    <Route
                        path='/iphone'
                        element={ <IPhone /> }
                    />
                    <Route
                        path='/airpods'
                        element={ <AirPods /> }
                    />
                    <Route
                        path='/cart'
                        element={ <Cart /> }
                    />
                    <Route
                        path='/detail'
                        element={ <Detail /> }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Stack;
