import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, image, deployedLink, githubLink, description }) {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        className="w-full h-48 object-cover" 
        src={imageError ? "https://via.placeholder.com/400x300" : image} 
        alt={title}
        onError={handleImageError}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {deployedLink.includes('youtube.com') || deployedLink.includes('drive.google.com') 
              ? 'View Demo' 
              : 'Live Demo'}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;