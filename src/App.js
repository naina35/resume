import React, { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import Summary from './components/summary';
import Experience from './components/Experience'
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Download } from 'lucide-react';
import ResumePDF from './components/Generate'
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function App() {
  const [basic, setBasic] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: ''
  });
  
  const [summary, setSummary] = useState('');
  
  const [education, setEducation] = useState({
    college: '',
    degree: '',
    branch: '',
    from: '',
    to: '',
    cgpa: ''
  });
  
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [showDownload, setShowDownload] = useState(false);

  const generatePDF = () => {
    setShowDownload(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume Builder</h1>
          <p className="text-gray-600">Create your professional resume with ease</p>
        </div>

        <div className="space-y-6">
          <BasicInfo basic={basic} setBasic={setBasic} />
          <Summary summary={summary} setSummary={setSummary} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
          <Projects projects={projects} setProjects={setProjects} />
          <Skills skills={skills} setSkills={setSkills} />
          
          <div className="text-center">
            <button
              onClick={generatePDF}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Generate Resume PDF
            </button>
          </div>

          {showDownload && (
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Resume is Ready!</h3>
                <PDFDownloadLink
                  document={
                    <ResumePDF
                      basic={basic}
                      summary={summary}
                      education={education}
                      experience={experience}
                      projects={projects}
                      skills={skills}
                    />
                  }
                  fileName="resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                >
                  {({ loading }) => (
                    <>
                      <Download className="w-5 h-5" />
                      {loading ? 'Generating PDF...' : 'Download PDF'}
                    </>
                  )}
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}