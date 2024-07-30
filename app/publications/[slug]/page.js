// developer-portfolio/app/publications/[slug]/page.js
// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getPublication(slug) {

    // const publications = [
    //     {
    //         slug: "research-paper-title-1",
    //         title: "Research Paper Title 1",
    //         description: "Detailed description of the first research paper.",
    //         link: "https://link-to-your-paper-1.com",
    //         cover_image: "https://link-to-your-image-1.com/image.jpg",
    //         body_html: "<p>This is the full content of the first research paper.</p>"
    //     },
    //     {
    //         slug: "research-paper-title-2",
    //         title: "Research Paper Title 2",
    //         description: "Detailed description of the second research paper.",
    //         link: "https://link-to-your-paper-2.com",
    //         cover_image: "https://link-to-your-image-2.com/image.jpg",
    //         body_html: "<p>This is the full content of the second research paper.</p>"
    //     }
    // ];

    const publication = publications.find(pub => pub.slug === slug);
    if (!publication) {
        throw new Error('Publication not found');
    }
    return publication;
}

async function PublicationDetails({ params }) {
    const slug = params.slug;
    const publication = await getPublication(slug);

    return (
        <div className="p-4 lg:p-8">
            <h1 className="text-2xl font-bold text-white">{publication.title}</h1>
            <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
            <div className="mt-4">
                <img src={publication.cover_image} alt={publication.title} className="w-full h-auto rounded-lg" />
            </div>
            <div className="mt-4 text-gray-300" dangerouslySetInnerHTML={{ __html: publication.body_html }} />
            <div className="mt-6">
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                    Read more
                </a>
            </div>
        </div>
    );
}

export default PublicationDetails;