// Summary Component
import React,{useState} from 'react';
import { Save ,Edit,FileText} from 'lucide-react';

export default function Summary({ summary, setSummary }) {
    const [isEditing, setIsEditing] = useState(true);
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Professional Summary
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
          <div>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Write a brief professional summary about yourself..."
            />
          </div>
        ) : (
          <p className="text-gray-700 leading-relaxed">{summary || 'No summary added yet.'}</p>
        )}
      </div>
    );
  }
  
  