import PropTypes from "prop-types";
const Filter = ({ categories, onFilterChange }) => (
  <div className="filter-buttons">
    {categories.map((category) => (
      <button key={category} onClick={() => onFilterChange(category)}>
        {category}
      </button>
    ))}
    <button onClick={() => onFilterChange("all")}>All</button>
  </div>
);
Filter.propTypes = {
  categories: PropTypes.string.isRequired,
  onFilterChange: PropTypes.string.isRequired,
};

export default Filter;
