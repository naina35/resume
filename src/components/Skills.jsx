import {useState} from 'react';

export default function Skills({skills,setSkills}){
    
    const [showInp,setShowInp]=useState(true);
    const [skill,setSkill]=useState('');

    const submitSkill=()=>{
        setSkills([...skills,skill]);
        setShowInp(!showInp);
        setSkill('');
    }
    return (
        <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
        <ul >
        {skills.map((skill)=>{return <li><p>{skill}</p></li>})}
        </ul>
        {showInp && <div ><input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" type='text' placeholder='new skill' value={skill} onChange={(e)=>setSkill(e.target.value)}/>
        <button className="border-2 border-lpurple text-lpurple py-2 px-4 rounded hover:bg-lpurple hover:text-gray-100"
        onClick={submitSkill}>submit</button></div>}
        <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={()=>{setShowInp(!showInp);setSkill('')}}>Add Skill</button>
        </div>
    );
}
