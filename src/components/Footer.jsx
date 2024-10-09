import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <a 
          href="https://github.com/pamar123" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/amarr--patell" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://stackoverflow.com/users/27695827/amar-patel" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          Stack Overflow
        </a>
      </div>
    </footer>
  );
}

export default Footer;