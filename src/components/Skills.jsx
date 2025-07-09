import React, { useState } from 'react';
import { Code ,X} from 'lucide-react';
export default function Skills({ skills, setSkills }) {
    const [newSkill, setNewSkill] = useState('');
  
    const addSkill = () => {
      if (newSkill.trim() && !skills.includes(newSkill.trim())) {
        setSkills(prev => [...prev, newSkill.trim()]);
        setNewSkill('');
      }
    };
  
    const removeSkill = (index) => {
      setSkills(prev => prev.filter((_, i) => i !== index));
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600" />
          Skills
        </h2>
  
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a skill..."
          />
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
  
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="text-blue-600 hover:text-blue-800"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        
        {skills.length === 0 && (
          <p className="text-gray-500 text-center py-8">No skills added yet.</p>
        )}
      </div>
    );
  }
  