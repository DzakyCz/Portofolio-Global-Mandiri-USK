'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');

  const openShare = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const shareFacebook = () => {
    openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`);
  };

  const shareTwitter = () => {
    openShare(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title)}`
    );
  };

  const shareWhatsapp = () => {
    openShare(`https://wa.me/?text=${encodeURIComponent(`${title} ${getUrl()}`)}`);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; ignore.
    }
  };

  return (
    <div className="share-buttons">
      <span className="share-buttons-label">Bagikan</span>
      <div className="share-buttons-icons">
        <button
          type="button"
          className="share-icon share-icon-copy"
          onClick={copyLink}
          aria-label="Salin tautan"
        >
          {copied ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12.5 9 17l11-11" />
            </svg>
          ) : (
            <Image src="/Images/link.png" alt="" width={19} height={19} className="share-icon-copy-img" />
          )}
        </button>
        <button
          type="button"
          className="share-icon share-icon-facebook"
          onClick={shareFacebook}
          aria-label="Bagikan ke Facebook"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
          </svg>
        </button>
        <button
          type="button"
          className="share-icon share-icon-twitter"
          onClick={shareTwitter}
          aria-label="Bagikan ke Twitter"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.73 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.98C8.28 9.1 5.1 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.92 3.58-.71-.02-1.37-.22-1.96-.54v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.54-.03-.81-.08.55 1.71 2.14 2.95 4.02 2.99A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.56 21.5c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22-.77.34-1.6.57-2.47.67.89-.53 1.57-1.37 1.89-2.37Z" />
          </svg>
        </button>
        <button
          type="button"
          className="share-icon share-icon-whatsapp"
          onClick={shareWhatsapp}
          aria-label="Bagikan ke WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42a9.86 9.86 0 0 0 4.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.12a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.2.84.86-3.12-.2-.32a8.16 8.16 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.29-8.12 8.29Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
