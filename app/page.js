// developer-portfolio/app/page.js
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Publications from "./components/publications/Publications";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  // Define your publications array
  const publications = [
    {
      title: "Research Paper Title 1",
      description: "A brief description of the first research paper.",
      link: "https://link-to-your-paper-1.com",
      cover_image: "https://link-to-your-image-1.com/image.jpg" // Optional cover image
    },
    {
      title: "Research Paper Title 2",
      description: "A brief description of the second research paper.",
      link: "https://link-to-your-paper-2.com",
      cover_image: "https://link-to-your-image-2.com/image.jpg" // Optional cover image
    }
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Publications publications={publications} /> {/* Pass the publications array */}
      <ContactSection />
    </>
  );
}