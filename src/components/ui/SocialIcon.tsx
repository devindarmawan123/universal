interface SocialIconProps {
  id: string;
  className?: string;
}

export default function SocialIcon({ id, className }: SocialIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M6.4 17.6 4.5 21l3.5-1.9a8.4 8.4 0 1 0-1.6-1.5Z" />
          <path d="M9 9.6c0 3.6 3 6.6 6.6 6.6.4-1 .3-1.6-.1-1.9l-1.6-1a.7.7 0 0 0-.8.1l-.6.6a5.6 5.6 0 0 1-2.9-2.9l.6-.6a.7.7 0 0 0 .1-.8l-1-1.6c-.3-.4-.9-.5-1.9-.1Z" fill="currentColor" stroke="none" opacity="0.9" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 4v10.2a2.9 2.9 0 1 1-2.3-2.84" />
          <path d="M14 4c.3 2.1 1.8 3.7 4 4" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="3.5" />
          <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}
