import { Link } from "@tanstack/react-router";

function MainNav() {
  return (
    <nav
      className="absolute top-12 flex w-full justify-center gap-12"
      style={{
        animation: "fadeIn 1s ease forwards",
        animationDelay: "0.5s",
        opacity: 0,
        animationFillMode: "forwards",
      }}
    >
      <Link to="/" className="nav-link">
        About
      </Link>
      <Link to="/" className="nav-link">
        Shop
      </Link>
      <Link to="/press-kit" className="nav-link">
        Press Kit
      </Link>
    </nav>
  );
}

export default MainNav;
