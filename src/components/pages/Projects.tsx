import React from 'react';
import { Users, MessageSquare, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Study Assistant",
      description: "An AI-powered study companion for students",
      tech: ["React", "Python", "TensorFlow"],
      members: 4,
      comments: 12,
      posted: "2 days ago",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "EcoTrack",
      description: "Sustainability tracking platform for campus",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      members: 3,
      comments: 8,
      posted: "5 days ago",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Campus Events App",
      description: "Mobile app for tracking university events",
      tech: ["React Native", "Firebase"],
      members: 2,
      comments: 5,
      posted: "1 week ago",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <button className="bg-[#FFCDB2] text-black px-6 py-2 rounded-lg hover:bg-[#FFB4A2] transition-colors">
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-zinc-800">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-black text-[#FFCDB2] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.members}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{project.comments}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{project.posted}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects