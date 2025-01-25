import { useState } from 'react';

export default function Basic({person,setPerson}){
    
    const [input,setInput]=useState(true);
    return (<div>
        {input&&<>
        First Name: <input type="text" value={person.fn} onChange={(e)=>setPerson((p)=>({...p,fn:e.target.value}))}/>
        Last Name: <input type="text" value={person.ln} onChange={(e)=>setPerson((p)=>({...p,ln:e.target.value}))}/>
        Phone:<input type="text" value={person.pn} onChange={(e)=>setPerson((p)=>({...p,pn:e.target.value}))}/>
        </>
        }
        <button onClick={()=>{setInput(!input);}}>{input?'Submit':'Edit'}</button>
        <button onClick={()=>{setInput(true); setPerson({fn:'',ln:'',pn:''})}}>Reset</button>
        {!input&&
        <><h3>{person.fn} {person.ln}</h3>
        <p>{person.pn}</p>
        </>}
    </div>);


}