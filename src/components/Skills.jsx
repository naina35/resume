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
        <div >
        <ul >
        {skills.map((skill)=>{return <li><p>{skill}</p></li>})}
        </ul>
        {showInp && <><input   className="" type='text' placeholder='new skill' value={skill} onChange={(e)=>setSkill(e.target.value)}/>
        <button className=" "
        onClick={submitSkill}>submit</button></>}
        <button className="" onClick={()=>{setShowInp(!showInp);setSkill('')}}>Add Skill</button>
        </div>
    );
}
