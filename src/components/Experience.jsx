import {useState} from 'react';

export default function Experience(){
    const [experience,setExperience] = useState({company:'',role:'',startDate:'',endDate:'',description:''});
    const [experienceList,setExperienceList] = useState([]);
    const [showInp,setShowInp]=useState(true);
    const addNewExp=()=>{
        setExperience({company:'',role:'',startDate:'',endDate:'',description:''});
        setShowInp(true);
    }
    
    return (<>
    {showInp&& <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
        <h3>Experience</h3>
        <p>Company:</p>
        <input type='text'  className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='company' value={experience.company} onChange={(e)=>setExperience({...experience,company:e.target.value})}/>
        <p>Role:</p>
        <input type='text'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='role' value={experience.role} onChange={(e)=>setExperience({...experience,role:e.target.value})}/>
        <p>Start Date:</p>
        <input type='date'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='start date' value={experience.startDate} onChange={(e)=>setExperience({...experience,startDate:e.target.value})}/>
        <p>End Date:</p>
        <input type='date'   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='end date' value={experience.endDate} onChange={(e)=>setExperience({...experience,endDate:e.target.value})}/>
        <p>Description:</p>
        <input type='text'  className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none"  placeholder='description' value={experience.description} onChange={(e)=>setExperience({...experience,description:e.target.value})}/>
        <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={()=>{
            setExperienceList([...experienceList,experience]);
            setExperience({company:'',role:'',startDate:'',endDate:'',description:''});
            setShowInp(false);
        }}>submit</button>
        
        </div>}
        
        <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
            {
                experienceList.map((exp)=>{return <>
                    <h3>{exp.company}</h3>
                    <h4>{exp.role}</h4>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.description}</p>
                </>})
            }
            <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={addNewExp}>Add</button>
        </div>
    </>);
}