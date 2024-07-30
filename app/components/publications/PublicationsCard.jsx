// developer-portfolio/app/components/publications/PublicationCard.jsx
// @flow strict
import Link from 'next/link';

function PublicationCard({ publication }) {
  return (
    <div className="border border-[#1d293a] bg-[#1b203e] rounded-lg p-4">
      {publication.cover_image && (
        <img src={publication.cover_image} alt={publication.title} className="w-full h-auto rounded-lg mb-2" />
      )}
      <h3 className="text-lg text-white font-medium">
        <Link href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
          {publication.title}
        </Link>
      </h3>
      <p className="text-sm text-[#d3d8e8]">{publication.description}</p>
    </div>
  );
}

export default PublicationCard;