const products = [
  {
    id: 1,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Sonic Sensor",
    description: "Used for sound control in devices, comes in different sizes.",
    price: "₹70",
    originalPrice: "₹140",
    rating: 5,
  },
  {
    id: 3,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Humidity Sensor",
    description:
      "Used for humidity and temperature control in devices, comes in different..",
    price: "₹101",
    originalPrice: "₹123",
    rating: 4.5,
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description_product">{product.description}</p>
              <p>
                <span className="original-price">{product.originalPrice}</span>
                {product.price}{" "}
              </p>
              <p>⭐ {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
