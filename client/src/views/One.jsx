import React, { useEffect, useState } from "react"
import axios from "axios"

const One = props => {
    const [Pirate,setPirate]= useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${props.id}`)
        .then(res => setPirate(res.data[0]))
        .catch(err => console.log(err))
    }, [props.id])
    
    const patchToggle=()=>{
        
        if(Pirate.eyePatch===true){
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                eyePatch:false
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
        else{
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                eyePatch:true
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
    }
    const hookToggle=()=>{
        
        if(Pirate.hook===true){
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                hook:false
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
        else{
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                hook:true
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
    }
    const pegToggle=()=>{
        
        if(Pirate.peg===true){
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                peg:false
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
        else{
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                peg:true
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err))

        }
    }
    return(

    <div >
        {Pirate?
        <div>
        <h1>{Pirate.name}</h1>
        <div className="onePirateWrapper">
        <div className="pirateContainer">
        <img style={{ maxWidth: "400px" }} src={Pirate.image} alt={Pirate.name} />
        <h2>{Pirate.catchPhrase}</h2>
        </div>
        <div className="statsContainer">
            <h2>About</h2>
        <div className="info">
            <p>Treasures:</p><p>{Pirate.treasure}</p>
        </div>
        <div className="info">
        <p>Peg Leg</p>
        {Pirate.peg? 
            <div><p>Yes</p><button onClick={pegToggle} style={{backgroundColor:"red"}}>No</button></div>
        :
            <div><p>No</p><button onClick={pegToggle}style={{backgroundColor:"green"}}>Yes</button></div>}
        </div>
        

        <div className="info">
        <p>Eye Patch</p>
        {Pirate.eyePatch? 
            <div><p>Yes</p><button onClick={patchToggle} style={{backgroundColor:"red"}}>No</button></div>
        :
            <div><p>No</p><button onClick={patchToggle} style={{backgroundColor:"green"}}>Yes</button></div>}
        </div>

        <div className="info">
        <p>Hook Hand</p>
        {Pirate.hook? 
            <div><p>Yes</p><button onClick={hookToggle} style={{backgroundColor:"red"}}>No</button></div>
        :
            <div><p>No</p><button onClick={hookToggle} style={{backgroundColor:"green"}}>Yes</button></div>}
        </div>
        <div className="info"></div>
        </div>
        </div>
        </div>
            : ""}
        
        </div>
    );
}
export default One