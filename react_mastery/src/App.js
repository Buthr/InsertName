import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import SeriesCard from './SeriesCard';

const series = {
    "Title": "Midnight Mass",
    "Year": "2021",
    "imdbID": "tt2586634",
    "Type": "series",
    "Poster": "N/A"
}

// 439072b9

const API_URL = 'http://www.omdbapi.com?apikey=439072b9';

const App = () => {
    const [series, setSeries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchSeries = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setSeries(data.Search);

    }

    useEffect(() => {
        searchSeries('Midnight Mass')

    }, []); 
    return(
        <div className= "app">
            <h1>Are You Series?</h1>

            <div className="search">
                <input
                    placeholder="Search for series"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchSeries(searchTerm)}
                />    
            </div>
            {
                series?.length > 0
                    ? (
                        <div className="container">
                             {series.map((series) => (
                                 <SeriesCard series={series} />
                             ))}
                        </div>
                    ) : (
                        <div> className="empty">
                            <h2>no series found</h2>
                        </div>    
                     )}

        </div>    
    );
}

export default App;