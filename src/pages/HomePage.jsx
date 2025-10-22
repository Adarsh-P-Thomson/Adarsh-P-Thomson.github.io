import LandingSection from '../components/home/LandingSection';
import SkillsSection from '../components/home/SkillsSection';
import HomeProjects from '../components/home/HomeProjects';
import ExperienceSection from '../components/home/ExperienceSection';
import HomeAchievements from '../components/home/HomeAchievements';
import CertificatesSection from '../components/home/CertificatesSection';
import FunSection from '../components/home/FunSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <div>
      <LandingSection />
      <div id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-lg p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text text-center">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
              I'm a passionate full-stack developer with a love for creating immersive digital experiences. 
              My journey in tech started with a fascination for how things work, and has evolved into a 
              career dedicated to building innovative solutions. When I'm not coding, you'll find me 
              exploring the latest tech trends, gaming, or diving into sci-fi worlds. I believe in the 
              power of technology to transform lives and create meaningful connections.
            </p>
          </div>
        </div>
      </div>
      <SkillsSection />
      <HomeProjects />
      <ExperienceSection />
      <HomeAchievements />
      <CertificatesSection />
      <FunSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
