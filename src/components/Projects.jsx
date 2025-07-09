// Projects Component
import { useState } from "react";
import { Code,Plus,X } from "lucide-react";
export default function Projects({ projects, setProjects }) {
    const [currentProject, setCurrentProject] = useState({
      title: '',
      techStack: [],
      features: [],
      githubLink: '',
      liveLink: ''
    });
    const [isAdding, setIsAdding] = useState(false);
    const [newTech, setNewTech] = useState('');
    const [newFeature, setNewFeature] = useState('');
  
    const addProject = () => {
      if (currentProject.title && currentProject.techStack.length > 0) {
        setProjects(prev => [...prev, { ...currentProject }]);
        setCurrentProject({ title: '', techStack: [], features: [], githubLink: '', liveLink: '' });
        setIsAdding(false);
      }
    };
  
    const removeProject = (index) => {
      setProjects(prev => prev.filter((_, i) => i !== index));
    };
  
    const addTechStack = () => {
      if (newTech.trim()) {
        setCurrentProject(prev => ({
          ...prev,
          techStack: [...prev.techStack, newTech.trim()]
        }));
        setNewTech('');
      }
    };
  
    const addFeature = () => {
      if (newFeature.trim()) {
        setCurrentProject(prev => ({
          ...prev,
          features: [...prev.features, newFeature.trim()]
        }));
        setNewFeature('');
      }
    };
  
    const removeTech = (index) => {
      setCurrentProject(prev => ({
        ...prev,
        techStack: prev.techStack.filter((_, i) => i !== index)
      }));
    };
  
    const removeFeature = (index) => {
      setCurrentProject(prev => ({
        ...prev,
        features: prev.features.filter((_, i) => i !== index)
      }));
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Projects
          </h2>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
  
        {isAdding && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
              <input
                type="text"
                value={currentProject.title}
                onChange={(e) => setCurrentProject(prev => ({ ...prev, title: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="My Awesome Project"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tech Stack</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTechStack()}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="React, Node.js, MongoDB..."
                />
                <button
                  onClick={addTechStack}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tech}
                    <button
                      onClick={() => removeTech(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="User authentication, Real-time chat..."
                />
                <button
                  onClick={addFeature}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="space-y-1">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-100 p-2 rounded">
                    <span className="flex-1">{feature}</span>
                    <button
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Link</label>
                <input
                  type="url"
                  value={currentProject.githubLink}
                  onChange={(e) => setCurrentProject(prev => ({ ...prev, githubLink: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://github.com/username/repo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Live Demo Link</label>
                <input
                  type="url"
                  value={currentProject.liveLink}
                  onChange={(e) => setCurrentProject(prev => ({ ...prev, liveLink: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://your-project.com"
                />
              </div>
            </div>
  
            <div className="flex gap-2">
              <button
                onClick={addProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Project
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
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <div className="mb-2">
                    <span className="text-sm text-gray-600">Tech Stack: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.features.length > 0 && (
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">Features:</span>
                      <ul className="list-disc list-inside mt-1 text-sm text-gray-700">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex gap-4 text-sm">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-gray-500 text-center py-8">No projects added yet.</p>
          )}
        </div>
      </div>
    );
  }
  
  