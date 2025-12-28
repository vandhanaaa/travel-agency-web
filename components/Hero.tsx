import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: "url('/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Journey to Explore the World</h1>
        <p className="hero-subtitle">Find your next adventure today.</p>
        <button className="hero-button">Discover More</button>
      </div>
    </section>
  );
};

export default Hero;

