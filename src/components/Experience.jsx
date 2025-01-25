import { useState } from "react";

export default function Experience({exp,setExp,expList,setExpList}){
    
    const [showInp,setShowInp]=useState(true);
    const addNewExp=()=>{
        setExp({company:'',role:'',startDate:'',endDate:'',description:''});
        setShowInp(true);
    }
    
    return (<>
    {showInp&& <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
        <h3>Experience</h3>
        <p>Company:</p>
        <input type='text'  className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='company' value={exp.company} onChange={(e)=>setExp({...exp,company:e.target.value})}/>
        <p>Role:</p>
        <input type='text'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='role' value={exp.role} onChange={(e)=>setExp({...exp,role:e.target.value})}/>
        <p>Start Date:</p>
        <input type='date'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='start date' value={exp.startDate} onChange={(e)=>setExp({...exp,startDate:e.target.value})}/>
        <p>End Date:</p>
        <input type='date'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='end date' value={exp.endDate} onChange={(e)=>setExp({...exp,endDate:e.target.value})}/>
        <p>Description:</p>
        <input type='text'  className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none"  placeholder='description' value={exp.description} onChange={(e)=>setExp({...exp,description:e.target.value})}/>
        <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={()=>{
                setExpList([...expList, { ...exp }]); // Ensure a new copy is added
                setExp({ company: '', role: '', startDate: '', endDate: '', description: '' });
                setShowInp(false);
              
        }}>submit</button>
        
        </div>}
        
        <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
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
            <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={addNewExp}>Add</button>
        </div>
    </>);
}