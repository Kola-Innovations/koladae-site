import { siteConfig } from "@/config/site";
import { useState } from "react";

interface EmailSignupSocialsProps {
  buttonTitle?: string;
  placeholder?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  twitterUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  onSubmit?: (email: string) => void;
}

const styles = `
  .email-input {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 12px 20px;
    font-family: inherit;
    font-size: 13px;
    width: 280px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .email-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .email-input:focus {
    border-color: rgba(255, 255, 255, 0.6);
  }

  .email-btn {
    background: white;
    border: 1px solid white;
    color: black;
    padding: 12px 24px;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .email-btn:hover {
    background: transparent;
    color: white;
  }

  .social-icon {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
  }

  .social-icon:hover {
    color: white;
    transform: translateY(-2px);
  }
`;

export default function EmailSignupSocials({
  buttonTitle = "Join",
  placeholder = "Enter your email",
  instagramUrl = siteConfig.socials.instagram,
  tiktokUrl = siteConfig.socials.tiktok,
  twitterUrl = siteConfig.socials.twitter,
  spotifyUrl = siteConfig.socials.spotify,
  appleMusicUrl = siteConfig.socials.appleMusic,
  youtubeUrl = siteConfig.socials.youtube,
  onSubmit,
}: EmailSignupSocialsProps) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      console.log("Email submitted:", email);
    }
    setEmail("");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="flex w-full flex-col items-center gap-8">
        {/* Email Signup */}
        <form onSubmit={handleEmailSubmit} className="flex gap-0">
          <input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
          <button type="submit" className="email-btn">
            {buttonTitle}
          </button>
        </form>

        {/* Social & Streaming Icons */}
        <div className="flex items-center gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a href={instagramUrl} className="social-icon" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="18"
                  cy="6"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a href={tiktokUrl} className="social-icon" aria-label="TikTok">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a href={twitterUrl} className="social-icon" aria-label="Twitter">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20" />

          {/* Streaming Icons */}
          <div className="flex items-center gap-5">
            {/* Spotify */}
            <a href={spotifyUrl} className="social-icon" aria-label="Spotify">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>

            {/* Apple Music */}
            <a href={appleMusicUrl} className="social-icon" aria-label="Apple Music">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.635-1.93-1.638-.083-.65.106-1.2.587-1.635.326-.294.718-.472 1.14-.586.36-.097.728-.17 1.09-.26.273-.067.5-.2.604-.486a.942.942 0 00.06-.348V9.348a.477.477 0 00-.394-.5c-.12-.025-.243-.04-.366-.053l-3.07-.383c-.063-.008-.125-.02-.188-.024a.394.394 0 00-.453.37c-.005.058-.002.117-.002.176v7.69c0 .376-.047.746-.2 1.095-.263.598-.712.987-1.32 1.184-.372.12-.756.18-1.15.197-.728.03-1.376-.18-1.855-.753-.387-.463-.516-1.01-.413-1.603.132-.755.612-1.24 1.282-1.55.378-.175.78-.273 1.188-.345.28-.05.56-.104.84-.16.226-.046.417-.15.542-.358a.773.773 0 00.105-.403V7.178c0-.21.038-.403.196-.56a.722.722 0 01.4-.208c.238-.042.478-.074.718-.107l2.836-.352 2.394-.296c.075-.01.15-.023.224-.026.283-.012.478.168.503.45.005.057.003.114.003.17l.002 3.865z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href={youtubeUrl} className="social-icon" aria-label="YouTube">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
