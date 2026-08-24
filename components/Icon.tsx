type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 22, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "hire":
    case "person":
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3.5 19c.7-4 2.6-6 5.5-6s4.8 2 5.5 6" />
          <path d="M17 8v6M14 11h6" />
        </svg>
      );
    case "pieces":
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <path d="M4 18V9M10 18V5M16 18v-8M22 18V3" />
          <path d="M2 21h21" />
        </svg>
      );
    case "debt":
    case "refresh":
      return (
        <svg {...common}>
          <path d="M20 7a8 8 0 1 0 1 7" />
          <path d="M20 2v5h-5" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M2.5 20c.5-4.3 2.4-6.5 5.5-6.5s5 2.2 5.5 6.5" />
          <path d="M14 14.5c3.7-.8 6.1 1 7 4.5" />
        </svg>
      );
    case "repo":
      return (
        <svg {...common}>
          <path d="M5 3h11a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1Z" />
          <path d="M7 17h12M8 7h7M8 11h5" />
        </svg>
      );
    case "estimate":
      return (
        <svg {...common}>
          <path d="M5 3h14v18H5z" />
          <path d="M8 7h8M8 11h3M8 15h2M14 14l1.5 1.5L19 12" />
        </svg>
      );
    case "change":
      return (
        <svg {...common}>
          <path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3" />
        </svg>
      );
    case "demo":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="m10 8 5 2.5-5 2.5V8ZM8 21h8M12 17v4" />
        </svg>
      );
    case "exit":
    case "continuity":
      return (
        <svg {...common}>
          <path d="M14 4h6v16h-6M10 8l4 4-4 4M14 12H3" />
        </svg>
      );
    case "contract":
      return (
        <svg {...common}>
          <path d="M6 3h9l3 3v15H6z" />
          <path d="M14 3v4h4M9 11h6M9 15h6M9 18h3" />
        </svg>
      );
    case "ip":
      return (
        <svg {...common}>
          <path d="M12 3 4 7v5c0 5 3.3 8 8 9 4.7-1 8-4 8-9V7l-8-4Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "access":
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="m11 12 8-8M16 4h3v3M14 9l2 2" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "release":
      return (
        <svg {...common}>
          <path d="M14 4c3-1 5-1 7-1 0 2 0 4-1 7l-6 6-6-6 6-6Z" />
          <path d="m8 10-4 1-2 3 6 1M14 16l-1 4-3 2-1-6" />
          <circle cx="16" cy="8" r="1.5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 3 3 5-6" />
        </svg>
      );
  }
}

