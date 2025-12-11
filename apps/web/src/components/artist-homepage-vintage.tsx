import { useState, useEffect } from "react";

export default function ArtistHomepageVintage() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1410",
        color: "#F5E6D3",
        fontFamily: '"EB Garamond", Georgia, serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Film grain overlay */
        .film-grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        /* Vignette overlay */
        .vignette {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(28, 20, 16, 0.6) 100%);
        }
        
        /* Butterfly animation */
        @keyframes flutter {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-8px) rotate(2deg) scale(1.02); }
          50% { transform: translateY(-4px) rotate(-1deg) scale(1); }
          75% { transform: translateY(-10px) rotate(1deg) scale(1.01); }
        }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes lineExpand {
          from { width: 0; }
          to { width: 80px; }
        }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          color: #F5E6D3;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C9A227;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: #C9A227;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .listen-btn {
          background: transparent;
          border: 1px solid #C9A227;
          color: #C9A227;
          padding: 12px 32px;
          font-family: inherit;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .listen-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #C9A227;
          transition: left 0.4s ease;
          z-index: -1;
        }
        
        .listen-btn:hover {
          color: #1C1410;
        }
        
        .listen-btn:hover::before {
          left: 0;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          letter-spacing: 0.02em;
          line-height: 1.1;
        }
        
        .body-text {
          font-family: 'EB Garamond', serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(245, 230, 211, 0.8);
          max-width: 480px;
        }
      `}</style>

      {/* Overlays */}
      <div className="film-grain" />
      <div className="vignette" />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrollY > 50 ? "rgba(28, 20, 16, 0.9)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
          transition: "all 0.4s ease",
          animation: loaded ? "fadeIn 1s ease forwards" : "none",
          opacity: loaded ? 1 : 0,
        }}
      >
        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "1.4rem",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "#C9A227",
          }}
        >
          ARTIST NAME
        </div>

        <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
          <a href="#music" className="nav-link">
            Music
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#tour" className="nav-link">
            Tour
          </a>
          <a href="#press" className="nav-link">
            Press Kit
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "0 48px",
        }}
      >
        {/* Background gradient warmth */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(210, 105, 30, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        {/* Decorative butterfly - subtle */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "18%",
            opacity: 0.12,
            animation: "flutter 8s ease-in-out infinite",
            fontSize: "120px",
            color: "#C9A227",
          }}
        >
          ✦
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "25%",
            right: "35%",
            opacity: 0.08,
            animation: "flutter 12s ease-in-out infinite 2s",
            fontSize: "60px",
            color: "#D2691E",
          }}
        >
          ❋
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Left - Text Content */}
          <div
            style={{
              animation: loaded ? "fadeSlideUp 1.2s ease forwards" : "none",
              opacity: loaded ? 1 : 0,
              animationDelay: "0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "1px",
                  background: "#C9A227",
                  animation: loaded ? "lineExpand 1s ease forwards" : "none",
                  animationDelay: "0.8s",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#C9A227",
                }}
              >
                New Album Out Now
              </span>
            </div>

            <h1
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ display: "block" }}>Golden</span>
              <span
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "#D2691E",
                }}
              >
                Hour
              </span>
            </h1>

            <p className="body-text" style={{ marginBottom: "48px" }}>
              A journey through warmth, memory, and the spaces between
              heartbeats. Twelve tracks woven from soul, silence, and the golden
              light of late afternoons.
            </p>

            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <button className="listen-btn">Listen Now</button>
              <a
                href="#tour"
                style={{
                  color: "rgba(245, 230, 211, 0.6)",
                  textDecoration: "none",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  transition: "color 0.3s ease",
                }}
              >
                View Tour Dates →
              </a>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div
            style={{
              position: "relative",
              animation: loaded ? "fadeSlideUp 1.2s ease forwards" : "none",
              opacity: loaded ? 1 : 0,
              animationDelay: "0.6s",
            }}
          >
            {/* Main image container */}
            <div
              style={{
                aspectRatio: "3/4",
                background:
                  "linear-gradient(145deg, #3D2314 0%, #2A1A12 50%, #1C1410 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                  radial-gradient(ellipse at 30% 20%, rgba(210, 105, 30, 0.3) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 80%, rgba(201, 162, 39, 0.2) 0%, transparent 40%)
                `,
                }}
              />

              {/* Image placeholder text */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "1px solid rgba(201, 162, 39, 0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "32px", opacity: 0.5 }}>✦</span>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(245, 230, 211, 0.4)",
                  }}
                >
                  Artist Portrait
                </span>
              </div>

              {/* Decorative frame corners */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  borderTop: "1px solid rgba(201, 162, 39, 0.4)",
                  borderLeft: "1px solid rgba(201, 162, 39, 0.4)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderBottom: "1px solid rgba(201, 162, 39, 0.4)",
                  borderRight: "1px solid rgba(201, 162, 39, 0.4)",
                }}
              />
            </div>

            {/* Floating album detail */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                background: "#D2691E",
                padding: "24px 32px",
                animation: "subtleFloat 6s ease-in-out infinite",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                  color: "rgba(28, 20, 16, 0.6)",
                }}
              >
                Available
              </span>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.1rem",
                  color: "#1C1410",
                }}
              >
                All Platforms
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            animation: "subtleFloat 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245, 230, 211, 0.4)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(201, 162, 39, 0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "160px 48px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "120px",
            alignItems: "center",
          }}
        >
          {/* Left - Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(135deg, #5C5C3D 0%, #3D2314 100%)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(245, 230, 211, 0.4)",
                  }}
                >
                  Editorial Photo
                </span>
              </div>
            </div>

            {/* Decorative element */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                zIndex: -1,
              }}
            />
          </div>

          {/* Right - Content */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#C9A227",
                }}
              >
                The Artist
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(201, 162, 39, 0.3)",
                }}
              />
            </div>

            <h2 className="section-title" style={{ marginBottom: "40px" }}>
              <span style={{ color: "rgba(245, 230, 211, 0.4)" }}>Where</span>
              <br />
              <span style={{ fontStyle: "italic" }}>Soul Meets</span>
              <br />
              <span style={{ color: "#D2691E" }}>Silence</span>
            </h2>

            <p className="body-text" style={{ marginBottom: "32px" }}>
              Born from the tradition of Motown and shaped by the raw intimacy
              of contemporary R&B, the music exists in the space between
              confession and celebration. Each note carries the weight of
              ancestry and the lightness of becoming.
            </p>

            <p className="body-text" style={{ marginBottom: "48px" }}>
              With influences spanning Stevie Wonder to Solange, the sound is
              both a homecoming and a departure—familiar enough to embrace, bold
              enough to transform.
            </p>

            <div
              style={{
                display: "flex",
                gap: "48px",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "#C9A227",
                    lineHeight: 1,
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245, 230, 211, 0.5)",
                  }}
                >
                  Albums
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "#C9A227",
                    lineHeight: 1,
                  }}
                >
                  50+
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245, 230, 211, 0.5)",
                  }}
                >
                  Live Shows
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "#C9A227",
                    lineHeight: 1,
                  }}
                >
                  2M+
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245, 230, 211, 0.5)",
                  }}
                >
                  Streams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section
        id="music"
        style={{
          padding: "120px 48px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(61, 35, 20, 0.3) 50%, transparent 100%)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "80px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A227",
              }}
            >
              Discography
            </span>
            <h2 className="section-title" style={{ marginTop: "16px" }}>
              <span style={{ fontStyle: "italic" }}>The</span> Collection
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {[
              { title: "Golden Hour", year: "2024", color: "#D2691E" },
              { title: "Midnight Garden", year: "2022", color: "#5C5C3D" },
              { title: "First Light", year: "2020", color: "#3D2314" },
            ].map((album, i) => (
              <div
                key={i}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    aspectRatio: "1",
                    background: `linear-gradient(145deg, ${album.color} 0%, #1C1410 100%)`,
                    marginBottom: "24px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(28, 20, 16, 0.4)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "1px solid #C9A227",
                        padding: "12px 24px",
                        color: "#C9A227",
                      }}
                    >
                      Play Album
                    </span>
                  </div>

                  {/* Butterfly watermark */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      fontSize: "24px",
                      opacity: 0.3,
                      color: "#C9A227",
                    }}
                  >
                    ✦
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    marginBottom: "4px",
                  }}
                >
                  {album.title}
                </h3>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "rgba(245, 230, 211, 0.5)",
                  }}
                >
                  {album.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section
        id="tour"
        style={{
          padding: "120px 48px",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(92, 92, 61, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translateY(-50%)",
          }}
        />

        <div
          style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "60px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#C9A227",
                }}
              >
                Live
              </span>
              <h2 className="section-title" style={{ marginTop: "8px" }}>
                Tour{" "}
                <span style={{ fontStyle: "italic", color: "#D2691E" }}>
                  2024
                </span>
              </h2>
            </div>
            <button className="listen-btn">All Dates</button>
          </div>

          {[
            {
              date: "Dec 15",
              city: "Los Angeles",
              venue: "The Wiltern",
              status: "few left",
            },
            {
              date: "Dec 18",
              city: "San Francisco",
              venue: "The Fillmore",
              status: "available",
            },
            {
              date: "Dec 22",
              city: "Chicago",
              venue: "Thalia Hall",
              status: "sold out",
            },
            {
              date: "Jan 5",
              city: "New York",
              venue: "Brooklyn Steel",
              status: "available",
            },
          ].map((show, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 1fr auto",
                gap: "40px",
                alignItems: "center",
                padding: "32px 0",
                borderBottom: "1px solid rgba(201, 162, 39, 0.15)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(210, 105, 30, 0.08)";
                e.currentTarget.style.paddingLeft = "20px";
                e.currentTarget.style.marginLeft = "-20px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.style.marginLeft = "0";
              }}
            >
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.3rem",
                }}
              >
                {show.date}
              </span>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.5rem",
                  fontWeight: 500,
                }}
              >
                {show.city}
              </span>
              <span
                style={{
                  color: "rgba(245, 230, 211, 0.6)",
                  fontSize: "0.95rem",
                }}
              >
                {show.venue}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  border:
                    show.status === "sold out"
                      ? "1px solid rgba(245, 230, 211, 0.3)"
                      : "1px solid #C9A227",
                  color:
                    show.status === "sold out"
                      ? "rgba(245, 230, 211, 0.4)"
                      : "#C9A227",
                }}
              >
                {show.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section
        id="press"
        style={{
          padding: "160px 48px",
          textAlign: "center",
          position: "relative",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(61, 35, 20, 0.2) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "300px",
            opacity: 0.03,
            color: "#C9A227",
            pointerEvents: "none",
          }}
        >
          ✦
        </div>

        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9A227",
          }}
        >
          For Media
        </span>
        <h2
          className="section-title"
          style={{
            marginTop: "16px",
            marginBottom: "24px",
          }}
        >
          Press <span style={{ fontStyle: "italic" }}>Kit</span>
        </h2>
        <p
          className="body-text"
          style={{
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          High-resolution photos, biography, logos, and technical rider.
          Everything you need for press coverage and event promotion.
        </p>
        <button className="listen-btn">Download Press Kit</button>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "80px 48px 40px",
          borderTop: "1px solid rgba(201, 162, 39, 0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "1.8rem",
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#C9A227",
                marginBottom: "24px",
              }}
            >
              ARTIST NAME
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(245, 230, 211, 0.5)",
                maxWidth: "300px",
                lineHeight: 1.7,
              }}
            >
              For booking inquiries and press requests, please reach out through
              the contact form or email directly.
            </p>
          </div>

          <div style={{ display: "flex", gap: "80px" }}>
            <div>
              <h4
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  color: "rgba(245, 230, 211, 0.6)",
                }}
              >
                Navigate
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {["Music", "About", "Tour", "Press"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "rgba(245, 230, 211, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A227")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(245, 230, 211, 0.8)")
                    }
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  color: "rgba(245, 230, 211, 0.6)",
                }}
              >
                Connect
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {["Instagram", "Twitter", "Spotify", "Apple Music"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        color: "rgba(245, 230, 211, 0.8)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#C9A227")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(245, 230, 211, 0.8)")
                      }
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "60px auto 0",
            paddingTop: "30px",
            borderTop: "1px solid rgba(201, 162, 39, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "rgba(245, 230, 211, 0.4)",
            }}
          >
            © 2024 Artist Name. All rights reserved.
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "rgba(201, 162, 39, 0.3)",
            }}
          >
            ✦
          </span>
        </div>
      </footer>
    </div>
  );
}
