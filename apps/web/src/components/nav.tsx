import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/press-kit", label: "Press Kit" },
  { to: "/contact", label: "Reach Out" },
] as const;

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.8);
          font-size: 24px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        /* Hamburger button styles */
        .hamburger-line {
          display: block;
          width: 24px;
          height: 1px;
          background: white;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Desktop Nav - hidden on mobile */}
      <nav
        className="absolute left-0 right-0 top-12 z-20 hidden justify-center gap-12 sm:flex"
        style={{
          animation: "fadeIn 1s ease forwards",
          animationDelay: "0.5s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="nav-link">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger Button - visible only on mobile */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className="hamburger-line"
          style={{
            transform: isOpen ? "rotate(45deg) translateY(5px)" : "none",
          }}
        />
        <span
          className="hamburger-line"
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className="hamburger-line"
          style={{
            transform: isOpen ? "rotate(-45deg) translateY(-5px)" : "none",
          }}
        />
      </button>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    to={link.to}
                    className="mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainNav;
