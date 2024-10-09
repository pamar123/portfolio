import React from 'react';

function Resume() {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript'
  ];
  
  const backEndSkills = [
    'Node.js',
    'Express',
    'MySQL',
  ];

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      
      <div className="mb-6">
        <a 
          href="/Resume.jpg" 
          download
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Front-End Proficiencies</h3>
          <ul className="list-disc list-inside">
            {frontEndSkills.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Back-End Proficiencies</h3>
          <ul className="list-disc list-inside">
            {backEndSkills.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <img 
          src="/resume.jpg" 
          alt="Resume Preview" 
          className="max-w-full h-auto shadow-lg rounded"
        />
      </div>
    </section>
  );
}

export default Resume;