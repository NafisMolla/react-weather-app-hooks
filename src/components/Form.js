import React, {useState} from "react";


function Form({setLocation}){
    const [value,setValue] = useState("");
    
    const handleSubmit = e =>{
        e.preventDefault();
        setLocation(value);
        setValue("")

    }
    
    
    return(
        <form onSubmit={handleSubmit} className="textStyles">
           <input type="text" placeholder="Type a city in Canada" value={value} onChange={ e => setValue(e.target.value)}/> 
        </form>

        
    );
}

export default Form;
