import React from 'react';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import Apps from '../Apps/Apps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Ratings></Ratings>
            <Apps></Apps>
        </div>
    );
};

export default Home;