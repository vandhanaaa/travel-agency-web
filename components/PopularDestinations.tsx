
import Image from "next/image";
import { LOCATIONS } from "@/constants";

const PopularDestinations = () => {
  return (
    <section id="popular-destinations" className="locations-page">
      <h2 className="locations-heading">Popular Destinations</h2>
      <div className="locations-grid">
        {LOCATIONS.map((loc) => (
          <div key={loc.key} className="location-card group">
            {loc.image && (
              <div className="location-image">
                <Image src={loc.image} alt={loc.name} fill className="object-cover" />
              </div>
            )}
            <div className="p-4">
              <h3 className="location-title">{loc.name}</h3>
              {loc.description && <p className="location-desc">{loc.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
