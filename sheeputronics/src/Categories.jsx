const categories = [
  {
    name: "Sensors & Transducers",
    image: "/Rectangle 21-4.png",
  },
  { name: "Resistors & Capacitors", image: "/Rectangle 14.png" },
  { name: "Diodes & Rectifiers", image: "/Rectangle 22-3.png" },
  { name: "Transistors & FETs", image: "/Rectangle 16-2.png" },
  { name: "LEDs & Displays", image: "/Rectangle 20-3.png" },
  { name: "Connectors & Cables", image: "/Rectangle 15-2.png" },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>/categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <button className="btn see-more">See more →</button>
    </section>
  );
};

export default Categories;
