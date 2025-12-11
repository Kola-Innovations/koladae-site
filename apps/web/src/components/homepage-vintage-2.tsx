import React, { useState, useEffect } from "react";

export default function ArtistHomepageV2() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0D0D",
        color: "#FAF7F2",
        fontFamily: '"Space Grotesk", sans-serif',
        position: "relative",
        overflow: "hidden",
        cursor: "crosshair",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background: #E85D04;
          color: #0D0D0D;
        }
        
        /* Noise texture */
        .noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.4;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        
        /* Marquee animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .nav-link {
          color: #FAF7F2;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #E85D04;
        }
        
        .cta-btn {
          background: #E85D04;
          color: #0D0D0D;
          border: none;
          padding: 16px 32px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.02em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
        }
        
        .cta-btn:hover {
          background: #FAF7F2;
          transform: scale(1.02);
        }
        
        .outline-btn {
          background: transparent;
          color: #FAF7F2;
          border: 1px solid rgba(250, 247, 242, 0.3);
          padding: 16px 32px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .outline-btn:hover {
          border-color: #E85D04;
          color: #E85D04;
        }
        
        .display-text {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.03em;
        }
        
        .label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(250, 247, 242, 0.5);
        }
        
        /* Hover lift effect */
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* Noise overlay */}
      <div className="noise" />

      {/* Cursor follower accent */}
      <div
        style={{
          position: "fixed",
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(232, 93, 4, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
          filter: "blur(40px)",
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mixBlendMode: "difference",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          AURA◐
        </div>

        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#music" className="nav-link">
            Music
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#tour" className="nav-link">
            Tour
          </a>
          <a
            href="#"
            className="nav-link"
            style={{
              background: "#FAF7F2",
              color: "#0D0D0D",
              padding: "10px 20px",
              marginLeft: "20px",
            }}
          >
            Press Kit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          padding: "120px 40px 40px",
        }}
      >
        {/* Background image placeholder */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background:
              "linear-gradient(135deg, #2D1810 0%, #1A0F0A 50%, #0D0D0D 100%)",
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 0.3s",
          }}
        >
          {/* Image overlay effects */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0D0D0D 0%, transparent 30%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  border: "2px solid rgba(232, 93, 4, 0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  animation: "spin 20s linear infinite",
                }}
              >
                <span style={{ fontSize: "40px" }}>◐</span>
              </div>
              <span className="label">Hero Image</span>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "45%",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "#E85D04",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 600,
              color: "#0D0D0D",
            }}
          >
            NEW
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            maxWidth: "900px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
              animation: loaded ? "fadeUp 0.8s ease forwards" : "none",
              opacity: loaded ? 1 : 0,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#E85D04",
                borderRadius: "50%",
                animation: "pulse 2s ease infinite",
              }}
            />
            <span className="label">New Single Out Now</span>
          </div>

          <h1
            className="display-text"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              marginBottom: "8px",
              animation: loaded ? "fadeUp 0.8s ease forwards" : "none",
              animationDelay: "0.1s",
              opacity: loaded ? 1 : 0,
            }}
          >
            Golden
          </h1>
          <h1
            className="display-text"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: "#E85D04",
              fontStyle: "italic",
              marginLeft: "80px",
              animation: loaded ? "fadeUp 0.8s ease forwards" : "none",
              animationDelay: "0.2s",
              opacity: loaded ? 1 : 0,
            }}
          >
            Hour
          </h1>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "48px",
              animation: loaded ? "fadeUp 0.8s ease forwards" : "none",
              animationDelay: "0.4s",
              opacity: loaded ? 1 : 0,
            }}
          >
            <button className="cta-btn">▶ Play Now</button>
            <button className="outline-btn">Watch Video</button>
          </div>
        </div>

        {/* Bottom info bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            right: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: "60px" }}>
            <div>
              <span className="label">Latest Release</span>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "8px",
                  fontWeight: 500,
                }}
              >
                Dec 2024
              </p>
            </div>
            <div>
              <span className="label">Genre</span>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "8px",
                  fontWeight: 500,
                }}
              >
                Afro-R&B / Neo Soul
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {["Spotify", "Apple", "YouTube"].map((platform) => (
              <a
                key={platform}
                href="#"
                style={{
                  color: "rgba(250, 247, 242, 0.6)",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#E85D04")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(250, 247, 242, 0.6)")
                }
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section
        style={{
          padding: "30px 0",
          borderTop: "1px solid rgba(250, 247, 242, 0.1)",
          borderBottom: "1px solid rgba(250, 247, 242, 0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "24px",
                fontStyle: "italic",
                whiteSpace: "nowrap",
                marginRight: "60px",
                color: "rgba(250, 247, 242, 0.4)",
              }}
            >
              Now Streaming Everywhere ◐ Golden Hour ◐ 12 Tracks ◐
            </span>
          ))}
        </div>
      </section>

      {/* Music Section - Bento Grid */}
      <section
        id="music"
        style={{
          padding: "120px 40px",
        }}
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
            <span className="label">Discography</span>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                marginTop: "12px",
              }}
            >
              The{" "}
              <span style={{ fontStyle: "italic", color: "#E85D04" }}>
                Music
              </span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              color: "#E85D04",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            View All <span style={{ fontSize: "20px" }}>→</span>
          </a>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(2, 300px)",
            gap: "20px",
          }}
        >
          {/* Featured Album - Large */}
          <div
            className="hover-lift"
            style={{
              gridColumn: "span 7",
              gridRow: "span 2",
              background: "linear-gradient(145deg, #E85D04 0%, #B84A00 100%)",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                right: "-50px",
                fontSize: "400px",
                opacity: 0.1,
                fontFamily: '"Instrument Serif", serif',
              }}
            >
              ◐
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(13, 13, 13, 0.6)",
                }}
              >
                Latest Album
              </span>
              <h3
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "4rem",
                  fontWeight: 400,
                  color: "#0D0D0D",
                  marginTop: "16px",
                  lineHeight: 0.95,
                }}
              >
                Golden
                <br />
                <span style={{ fontStyle: "italic" }}>Hour</span>
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div>
                <p
                  style={{
                    color: "#0D0D0D",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  12 Tracks • 48 min
                </p>
              </div>
              <button
                style={{
                  background: "#0D0D0D",
                  color: "#FAF7F2",
                  border: "none",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Smaller albums */}
          <div
            className="hover-lift"
            style={{
              gridColumn: "span 5",
              background: "linear-gradient(145deg, #3D5C3D 0%, #1A2E1A 100%)",
              padding: "32px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                className="label"
                style={{ color: "rgba(250, 247, 242, 0.5)" }}
              >
                2022
              </span>
              <h3
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "2rem",
                  fontWeight: 400,
                  marginTop: "12px",
                }}
              >
                Midnight Garden
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "13px", opacity: 0.6 }}>10 Tracks</span>
              <span style={{ fontSize: "24px" }}>→</span>
            </div>
          </div>

          <div
            className="hover-lift"
            style={{
              gridColumn: "span 5",
              background: "linear-gradient(145deg, #5C4033 0%, #2D1F19 100%)",
              padding: "32px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                className="label"
                style={{ color: "rgba(250, 247, 242, 0.5)" }}
              >
                2020
              </span>
              <h3
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "2rem",
                  fontWeight: 400,
                  marginTop: "12px",
                }}
              >
                First Light
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "13px", opacity: 0.6 }}>8 Tracks</span>
              <span style={{ fontSize: "24px" }}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "120px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <span className="label">About</span>
          <h2
            className="display-text"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              marginTop: "16px",
              marginBottom: "32px",
            }}
          >
            Born from
            <br />
            <span style={{ color: "#E85D04", fontStyle: "italic" }}>soul</span>,
            <br />
            shaped by
            <br />
            <span style={{ color: "#E85D04", fontStyle: "italic" }}>
              silence
            </span>
            .
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(250, 247, 242, 0.7)",
              maxWidth: "480px",
              marginBottom: "24px",
            }}
          >
            Blending the warmth of classic R&B with contemporary production,
            creating music that feels like a late-night conversation with an old
            friend. Influences span from Stevie to Solange, from Sunday mornings
            to 3AM confessions.
          </p>

          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "48px",
            }}
          >
            {[
              { num: "3M+", label: "Streams" },
              { num: "50+", label: "Shows" },
              { num: "3", label: "Albums" },
            ].map((stat) => (
              <div key={stat.label}>
                <span
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: "3rem",
                    color: "#E85D04",
                  }}
                >
                  {stat.num}
                </span>
                <span
                  className="label"
                  style={{ display: "block", marginTop: "4px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div
          style={{
            aspectRatio: "4/5",
            background: "linear-gradient(145deg, #2D1810 0%, #0D0D0D 100%)",
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
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid rgba(232, 93, 4, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "32px", opacity: 0.3 }}>◐</span>
            </div>
            <span className="label">Press Photo</span>
          </div>

          {/* Decorative overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "200px",
              background:
                "linear-gradient(to top, #0D0D0D 0%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* Tour Section */}
      <section
        id="tour"
        style={{
          padding: "120px 40px",
          background: "#E85D04",
          color: "#0D0D0D",
        }}
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
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(13, 13, 13, 0.5)",
              }}
            >
              Live
            </span>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                marginTop: "12px",
              }}
            >
              Tour <span style={{ fontStyle: "italic" }}>2025</span>
            </h2>
          </div>
          <button
            style={{
              background: "#0D0D0D",
              color: "#FAF7F2",
              border: "none",
              padding: "16px 32px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            All Dates
          </button>
        </div>

        {[
          {
            date: "Jan 15",
            city: "Los Angeles",
            venue: "The Novo",
            status: "Low Tickets",
          },
          {
            date: "Jan 22",
            city: "New York",
            venue: "Brooklyn Steel",
            status: "On Sale",
          },
          { date: "Feb 03", city: "London", venue: "KOKO", status: "On Sale" },
          {
            date: "Feb 10",
            city: "Paris",
            venue: "La Cigale",
            status: "Sold Out",
          },
        ].map((show, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 1fr auto",
              gap: "40px",
              alignItems: "center",
              padding: "28px 0",
              borderTop: "1px solid rgba(13, 13, 13, 0.2)",
              cursor: "pointer",
              transition: "padding-left 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "20px")}
            onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
          >
            <span
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "1.5rem",
              }}
            >
              {show.date}
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              {show.city}
            </span>
            <span
              style={{
                opacity: 0.6,
              }}
            >
              {show.venue}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "10px 20px",
                background:
                  show.status === "Sold Out" ? "transparent" : "#0D0D0D",
                color:
                  show.status === "Sold Out"
                    ? "rgba(13, 13, 13, 0.4)"
                    : "#FAF7F2",
                border:
                  show.status === "Sold Out"
                    ? "1px solid rgba(13, 13, 13, 0.3)"
                    : "none",
              }}
            >
              {show.status}
            </span>
          </div>
        ))}
      </section>

      {/* Press Kit CTA */}
      <section
        style={{
          padding: "160px 40px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "500px",
            fontFamily: '"Instrument Serif", serif',
            opacity: 0.03,
            pointerEvents: "none",
          }}
        >
          ◐
        </div>

        <span className="label">For Media & Press</span>
        <h2
          className="display-text"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            margin: "24px 0 40px",
          }}
        >
          Press{" "}
          <span style={{ fontStyle: "italic", color: "#E85D04" }}>Kit</span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(250, 247, 242, 0.6)",
            maxWidth: "500px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          High-res photos, bio, logos, rider. Everything you need.
        </p>
        <button className="cta-btn">Download Press Kit</button>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "60px 40px",
          borderTop: "1px solid rgba(250, 247, 242, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            AURA◐
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            {["Instagram", "Twitter", "TikTok", "Spotify", "Apple Music"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(250, 247, 242, 0.5)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#E85D04")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(250, 247, 242, 0.5)")
                  }
                >
                  {link}
                </a>
              )
            )}
          </div>

          <span
            style={{
              fontSize: "13px",
              color: "rgba(250, 247, 242, 0.3)",
            }}
          >
            © 2024
          </span>
        </div>
      </footer>
    </div>
  );
}
