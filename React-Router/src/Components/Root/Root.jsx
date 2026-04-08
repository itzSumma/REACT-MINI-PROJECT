import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./Root.css"
const Root = () => {
const navigation = useNavigation();
const isNavigating = Boolean(navigation.location);


    return (
        <div>
            <Header></Header>
            <div className='main-root'>
              <Sidebar></Sidebar> 

              {isNavigating && <span style={{color:"red"}}>Loading...</span>}
                <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;