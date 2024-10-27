const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">/sheeputronics</div>
      <div className="logo-img">
        <img src="Rectangle 2.png" alt="logo"></img>
      </div>
      <div className="nav-links">
        <a href="/" className="active">
          Explore
        </a>
        <a href="categories_btn">Categories</a>
        <a href="support_btn">Support</a>
      </div>
      <div className="nav-icons">
        <div className="icon-btn-1">
          <img src="/Vector.png"></img>
        </div>
        <div className="icon-btn-2">
          <img src="/Vector-2.png"></img>
        </div>
        <div className="icon-btn-3">
          <img src="/Vector-3.png"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
