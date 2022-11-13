import React, { useState, useEffect } from 'react';
import '../assets/css/PCGames.css';
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
                        <div className="item-container" key={i}>
                            <img className="item-img" src={item.image}/>
                            <div>
                                <h2 className="item-price">{item.price.symbol}{item.price.value}</h2>
                                <h2 className="item-title">{item.title}</h2>
                            </div>
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