import {useState} from 'react';

export default function Education({edu,setEdu}){
    //college,degree,branch,from,to ,cgpa
    
    const [showInp,setShowInp]=useState(true);
    const handleClg=(e)=>{
        const edu2={...edu};
        edu2.college=e.target.value;
        setEdu(edu2);
    };
    const handleDeg=(e)=>{
        const edu2={...edu};
        edu2.degree=e.target.value;
        setEdu(edu2);
    };
    const handleBranch=(e)=>{
        const edu2={...edu};
        edu2.branch=e.target.value;
        setEdu(edu2);
    };
    const handleFrom=(e)=>{
        const edu2={...edu};
        edu2.from=e.target.value;
        setEdu(edu2);
    };
    const handleTo=(e)=>{
        const edu2={...edu};
        edu2.to=e.target.value;
        setEdu(edu2);
    };
    const handleCgpa=(e)=>{
        const edu2={...edu};
        edu2.cgpa=e.target.value;
        setEdu(edu2);
    };
    return (<>{showInp===true?(
            <div >
            <h3>Education</h3>
            <p>College:</p>
            <input   className=" " placeholder='College' value={edu.college} onChange={handleClg}/>
            <p>Degree:</p>
            <input   className=" " placeholder='Degree' value={edu.degree} onChange={handleDeg}/>
            <p>Branch</p>
            <input   className=" " placeholder='Branch' value={edu.branch} onChange={handleBranch}/>
            <p>From</p>
            <input   className=" " placeholder='2022' value={edu.from} onChange={handleFrom}/>
            <p>To</p>
            <input   className=" " placeholder='2026' value={edu.to} onChange={handleTo}/>
            <p>gpa:</p>
            <input   className=" " placeholder='7.5' value={edu.cgpa} onChange={handleCgpa}/>
            </div>):(
            <div>
            <p>{edu.college}</p>
            <p>{edu.degree}  {edu.branch}      {edu.from}-{edu.to}</p>
            <p>{edu.cgpa}</p>
            </div> )}
            <button className= "" onClick={()=>setShowInp(!showInp)}>{showInp?'Submit':'Reset'}</button></>
    );
}