import { useState } from "react";

export default function Experience({exp,setExp,expList,setExpList}){
    
    const [showInp,setShowInp]=useState(true);
    const addNewExp=()=>{
        setExp({company:'',role:'',startDate:'',endDate:'',description:''});
        setShowInp(true);
    }
    
    return (<div>
    {showInp&& <>
        <h3>Experience</h3>
        <p>Company:</p>
        <input type='text'  className="   " placeholder='company' value={exp.company} onChange={(e)=>setExp({...exp,company:e.target.value})}/>
        <p>Role:</p>
        <input type='text'   className="   " placeholder='role' value={exp.role} onChange={(e)=>setExp({...exp,role:e.target.value})}/>
        <p>Start Date:</p>
        <input type='date'   className="   " placeholder='start date' value={exp.startDate} onChange={(e)=>setExp({...exp,startDate:e.target.value})}/>
        <p>End Date:</p>
        <input type='date'   className="   " placeholder='end date' value={exp.endDate} onChange={(e)=>setExp({...exp,endDate:e.target.value})}/>
        <p>Description:</p>
        <input type='text'  className="   "  placeholder='description' value={exp.description} onChange={(e)=>setExp({...exp,description:e.target.value})}/>
        <button className=" " onClick={()=>{
                setExpList([...expList, { ...exp }]); // Ensure a new copy is added
                setExp({ company: '', role: '', startDate: '', endDate: '', description: '' });
                setShowInp(false);
              
        }}>submit</button>
        
        </>}
        
        <>
            {
                expList.map((exp, index) => (
                    <div key={index}>
                      <h3>{exp.company}</h3>
                      <h4>{exp.role}</h4>
                      <p>{exp.startDate} - {exp.endDate}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))                  
            }
            <button className=" " onClick={addNewExp}>Add</button>
        </>
    </div>);
}