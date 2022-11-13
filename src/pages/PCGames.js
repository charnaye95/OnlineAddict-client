import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PCGames() {

    const [ PCGames, setPCGames ] = useState([])

    function getGames() {
        axios.get('http://localhost:5005/videogames/pc')
        .then((res) => {
            console.log(res.data);
            setPCGames(res.data);
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getGames();
    }, []);

  return (
    <div>
        <h1>PC Games</h1>
        {PCGames.length ? 
            <div>
                {PCGames.map((item, i) => {
                    return(
                        <div key={i}>
                            <img src={item.image}/>
                            <h2>{item.title}</h2>
                        </div>
                    )
                })}
            </div> 
            :
            <div>
                <h1>Loading Games</h1>
            </div> 
        }

    </div>
  )
}

export default PCGames