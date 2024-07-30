// developer-portfolio/app/components/publications/Publications.jsx
// @flow strict
import PublicationCard from './PublicationsCard'; // Ensure this path is correct

function Publications() {
  const publications = [
    {
      title: "An Empirical and Statistical Analysis of Regression Algorithms Used for Mental Fitness Prediction",
      description: "This study investigates the relationship between mental health indicators and mental fitness levels using diverse machine learning algorithms on a vast dataset.",
      link: "https://ieeexplore.ieee.org/document/10425084",
      // cover_image: "https://link-to-your-image-1.com/image.jpg" // Optional cover image
    },
    {
      title: "Your Voice, My Commands",
      description: "Advancements in General Artificial Intelligence (Gen AI) are evident in the application of Natural Language Processing (NLP) to enhance Command Line Interfaces (CLIs). This study introduces a pioneering system leveraging Meta’s Llama 2, tailored for kernel interface operations.",
      link: "https://drive.google.com/file/d/1ISodiE20lUj-7yITTZZVssAZpb40H47c/view",
      // cover_image: "https://link-to-your-image-2.com/image.jpg" // Optional cover image
    }
  ];

  return (
    <div id="publications" className="py-12"> {/* Removed background and border */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Publications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Increased gap */}
        {publications.map((publication, i) => (
          <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"> {/* Card styling */}
            <PublicationCard publication={publication} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;