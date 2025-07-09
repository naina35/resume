// Experience Component
import React, { useState } from 'react';
import { Plus,X,Briefcase } from 'lucide-react';

export default function Experience({ experience, setExperience }) {
    const [currentExp, setCurrentExp] = useState({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
    const [isAdding, setIsAdding] = useState(false);
  
    const addExperience = () => {
      if (currentExp.company && currentExp.role) {
        setExperience(prev => [...prev, { ...currentExp }]);
        setCurrentExp({ company: '', role: '', startDate: '', endDate: '', description: '' });
        setIsAdding(false);
      }
    };
  
    const removeExperience = (index) => {
      setExperience(prev => prev.filter((_, i) => i !== index));
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            Experience
          </h2>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
  
        {isAdding && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  value={currentExp.company}
                  onChange={(e) => setCurrentExp(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  value={currentExp.role}
                  onChange={(e) => setCurrentExp(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Job Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={currentExp.startDate}
                  onChange={(e) => setCurrentExp(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={currentExp.endDate}
                  onChange={(e) => setCurrentExp(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={currentExp.description}
                onChange={(e) => setCurrentExp(prev => ({ ...prev, description: e.target.value }))}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addExperience}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Experience
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
  
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-600 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {experience.length === 0 && (
            <p className="text-gray-500 text-center py-8">No experience added yet.</p>
          )}
        </div>
      </div>
    );
  }
  