"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1" />
  </svg>
);

interface PdfDownloadButtonProps {
  filename?: string;
}

export default function PdfDownloadButton({
  filename = "koladae-press-kit.pdf",
}: PdfDownloadButtonProps) {
  const accentColor = "#c4956a";
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      // Dynamic import to avoid SSR issues
      const { pdf } = await import("@react-pdf/renderer");
      const { default: PressKitPdf } = await import("./PressKitPdf");

      const blob = await pdf(<PressKitPdf />).toBlob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={handleDownload}
        className="group flex items-center gap-3 border-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider shadow-xl backdrop-blur-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderColor: accentColor,
          color: accentColor,
        }}
        whileHover={{
          backgroundColor: accentColor,
          color: "black",
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : <DownloadIcon />}
        <span>{isLoading ? "Generating..." : "Download PDF"}</span>
      </motion.button>
    </div>
  );
}
