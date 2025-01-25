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
            <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
            <h3>Education</h3>
            <p>College:</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='College' value={edu.college} onChange={handleClg}/>
            <p>Degree:</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='Degree' value={edu.degree} onChange={handleDeg}/>
            <p>Branch</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='Branch' value={edu.branch} onChange={handleBranch}/>
            <p>From</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='2022' value={edu.from} onChange={handleFrom}/>
            <p>To</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='2026' value={edu.to} onChange={handleTo}/>
            <p>gpa:</p>
            <input   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder='7.5' value={edu.cgpa} onChange={handleCgpa}/>
            </div>):(
            <div>
            <p>{edu.college}</p>
            <p>{edu.degree}  {edu.branch}      {edu.from}-{edu.to}</p>
            <p>{edu.cgpa}</p>
            </div> )}
            <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={()=>setShowInp(!showInp)}>{showInp?'Submit':'Reset'}</button></>
    );
}