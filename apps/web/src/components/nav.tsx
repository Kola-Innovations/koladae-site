import { Link } from "@tanstack/react-router";

function MainNav() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        className="absolute left-0 right-0 top-12 flex justify-center gap-12"
        style={{
          animation: "fadeIn 1s ease forwards",
          animationDelay: "0.5s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Shop
        </Link>
        <Link to="/press-kit" className="nav-link">
          Press Kit
        </Link>
      </nav>
    </>
  );
}

export default MainNav;
