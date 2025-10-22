import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ParticlesBackground from '../common/ParticlesBackground';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
