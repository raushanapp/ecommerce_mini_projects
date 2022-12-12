import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ShopPage } from "./ShopPage";


export const MainRoute = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collections/all' element={<ShopPage/>} />

        </Routes>
    )
}