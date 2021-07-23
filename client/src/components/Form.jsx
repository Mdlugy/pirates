import React, { useState } from "react"
import axios from 'axios';
import { navigate } from "@reach/router"
const Form = props =>{
    const [error,setError]=useState({})
    const [name,setName]= useState('')
    const [image,setimage]= useState('https://upload.wikimedia.org/wikipedia/commons/6/67/Anti-pirate.png')
    const[catchPhrase,setCatchPhrase]= useState('')
    const [peg,setPeg]=useState(false)
    const [hook,setHook]=useState(false)
    const [eyePatch,setPatch]=useState(false)
    const [treasure,setTreasure]= useState('')
    const [position,setPosition]= useState('')
    // if (props.from === "add"){}

    const onselectHandler=e =>{
        setPosition(e.target.value)
        console.log(position)
    }
    const pegHandler=e=>{
        if(e.target.value==='on'){
            setPeg(true)}
            else{setPeg(false)}

    }
    const hookHandler=e=>{
        console.log(e)
        if(e.target.value==='on'){
        setHook(true)}
        else{setHook(false)}
    }
    const patchhandler=e=>{
        if(e.target.value==='on'){
            setPatch(true)}
        else{setPatch(false)}
    }
    const handleSubmit =e=>{
        e.preventDefault();
        
        if(props.page ==='Add'){
            axios.post("http://localhost:8000/api/pirates/create", {
                name,
                image,
                treasure,
                catchPhrase,
                position,
                peg,
                eyePatch,
                hook
            })
            .then(res=> navigate("/pirates"))
            .catch(err=>setError(err.response.data.error.errors))

            
        }
        else if (props.page==='Update'){
            axios.put(`http://localhost:8000/api/pirates/update/${props.id}`, {
                name,
                image,
                treasure,
                catchPhrase,
                position
            })
            .then(navigate("/pirates"))
            .catch(err=>setError(err.response.data.error.errors))

        }
        }
        console.log(error)
    return(

        <form className="formWrapper" onSubmit= {handleSubmit}>
        <div className="container">
            <label htmlFor="name">Name</label><input onChange={(e)=>setName(e.target.value)}  type="text" name="name" />
                {error.name? <span className="text-danger">{error.name.message}<br/></span>:""}

            
            <label htmlFor="image">image link</label>
            <input onChange={(e)=>setimage(e.target.value)}  type="text" name="image" />


            <label htmlFor="treasure">Treasure chests:</label><input onChange={(e)=>setTreasure(e.target.value)}  type="number" name="treasure"/>
                {error.treasure? <span className="text-danger">{error.treasure.message}<br/></span>:""}

            <label htmlFor="catchPhrase">CatchPhrase</label><input onChange={(e)=>setCatchPhrase(e.target.value)}  type="text" name="catchPhrase" />
                {error.name? <span className="text-danger">{error.catchPhrase.message}<br/></span>:""}
        </div>
            <div className="container">
            
            <select onChange={onselectHandler}>
            <option value="" >Please select a position</option>
            <option value="Captain">Captain</option>
            <option value="First Mate">First Mate</option>
            <option value="Quarter Master">Quarter Master</option>
            <option value="Botswain">Botswain</option>
            <option value="Powder Monkey">Powder Monkey</option>
          </select>
          {error.name? <span className="text-danger">{error.position.message}<br/></span>:""}<br/>
          <label htmlFor="isPeg">Peg Leg</label><input type="checkbox" name="isPeg" onChange={pegHandler}/>
          <br/>
        <label htmlFor="isPatch">Eye Patch</label><input type="checkbox" name="isPatch" onChange={patchhandler}/>
        <br/>
<label htmlFor="isHook">Hook hand</label><input type="checkbox" name="isHook" onChange={hookHandler}/>
            <div><input type="submit" value="Submit" className="btn btn-info" /></div></div>

 
        </form>
    )
}
export default Form