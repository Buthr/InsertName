import React from 'react';

const SeriesCard = ({ series }) => {
    return (
        <div className="series">
           <div> 
             <p>{series.Year}</p>
        </div>
        <div> 
             <img src={series.Poster !== 'N/A' ? series.Poster : 'https://via.placeholder.com/400' } alt={series.Title}/>
        </div> 
            <div>
                <span>{series.Type}</span>
                 <h3>{series.Title}</h3>
             </div>
        </div>
    );
}

export default SeriesCard;