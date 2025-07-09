import React, { useState } from 'react';
import { GraduationCap,Save,Edit } from 'lucide-react';

export default  function Education({ education, setEducation }) {
    const [isEditing, setIsEditing] = useState(true);
    const handleChange = (field, value) => {
      setEducation(prev => ({ ...prev, [field]: value }));
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Education
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
  
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
              <input
                type="text"
                value={education.college}
                onChange={(e) => handleChange('college', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange('degree', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Bachelor's/Master's"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Branch/Major</label>
              <input
                type="text"
                value={education.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <input
                type="text"
                value={education.from}
                onChange={(e) => handleChange('from', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2020"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <input
                type="text"
                value={education.to}
                onChange={(e) => handleChange('to', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2024"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CGPA/GPA</label>
              <input
                type="text"
                value={education.cgpa}
                onChange={(e) => handleChange('cgpa', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="3.8"
              />
            </div>
          </div>
        ) : (
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {education.degree} in {education.branch}
            </h3>
            <p className="text-gray-600 mb-1">{education.college}</p>
            <p className="text-gray-600">
              {education.from} - {education.to} | CGPA: {education.cgpa}
            </p>
          </div>
        )}
      </div>
    );
  }
  