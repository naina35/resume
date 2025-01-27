
import './App.css';
import Basic from './components/Basic';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Generate from './components/Generate';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
function App() {
  const [person,setPerson]=useState({fn:'',ln:'',pn:''});
  const[edu,setEdu]=useState({college:'',degree:'',branch:'',from:'',to:'',cgpa:''});
  const [skills,setSkills]=useState([]);
  const [experience,setExperience] = useState({company:'',role:'',startDate:'',endDate:'',description:''});
  const [experienceList,setExperienceList] = useState([]);
  const [dl,setDl]=useState(false);
  return (
    <>
      <Basic person={person} setPerson={setPerson}/><br/>
      <Education edu={edu}setEdu={setEdu}/><br/>
      <Skills skills={skills} setSkills={setSkills}/><br/>
      <Experience exp={experience} setExp={setExperience} expList={experienceList} setExpList={setExperienceList}/><br/>
      <br />
      <button onClick={()=>setDl(true)}> Generate pdf</button>
      { dl&& <>

      <PDFDownloadLink document={<Generate Basic={person} edu={edu} skills={skills} exp={experienceList} />} fileName="Resume.pdf">
  {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
</PDFDownloadLink>
<br/>
    </>}
      </>
  );
}

export default App;