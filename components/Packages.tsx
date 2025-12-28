

import { samplePackages } from '@/constants'

const Packages = () => {
  return (
    <section id="services" className="packages-section">
      <h2 className="locations-heading text-center">Our Packages</h2>
      <div className="locations-grid">
        {samplePackages.map((pkg, idx) => (
          <div key={idx} className="package-card">
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-length">{pkg.length}</p>
            <p className="package-price">{pkg.price}</p>
            <p className="package-desc">{pkg.description}</p>
            <button className="package-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
