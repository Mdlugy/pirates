import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"

const Pirates = props => {
    const [allPirates,setAllPirates]= useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
        .then(res => setAllPirates(res.data.sort((a, b) => a.name.localeCompare(b.name)))

        )
        .catch(err => console.log(err))
    },[])

    return(

    <div >
        <h1>this is the Pirates page</h1>
        {
            allPirates?
            allPirates.map((Pirate, i)=>{return<Card Pirate= {Pirate}/>}):""
        }
        
    </div>
    );
}
export default Pirates