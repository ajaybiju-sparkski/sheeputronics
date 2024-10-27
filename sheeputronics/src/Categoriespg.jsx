import Navbar2 from "./Navbar2";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import "./index.css";

function Categoriespg() {
  return (
    <div className="categoriespg">
      <Navbar2 />
      <h2 className="sugg-product">/suggested for you!</h2>
      <ProductGrid />
      <div className="bestseller-div">
        <h2 className="bestseller-h2">/best sellers!</h2>
        <ProductGrid />
      </div>
      <hr className="footer-line"></hr>
      <Footer />
      <br></br>
    </div>
  );
}

export default Categoriespg;
