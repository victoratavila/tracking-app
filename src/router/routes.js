import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Components/Home';
import TrackingSearchResult from '../Components/TrackingSearchResult'

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path = "/" exact element = { <Home/> } />
                <Route path = "/buscar/:code" element = { <TrackingSearchResult/> } />
            </Routes>
        </BrowserRouter >
    )
}

export default Router;