import { useState, useEffect, useFetch } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const { data, isPending, Error } = useFetch( `http://localhost:8000`)


    return (
        <div className='home'>
            { Error && <div> { Error} </div>}
            { isPending && <div> Loading...</div>}
            {/* {blogs && <Bloglist blogs={blogs} title="Let's do it!" />} */}
        
        </div>
      );
}
 
export default Home;