export default function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="René Kühn Logo"
    >
      {/* Rising bars */}
      <rect x="4" y="28" width="8" height="16" fill="#c9a84c" />
      <rect x="16" y="18" width="8" height="26" fill="#c9a84c" />
      <rect x="28" y="10" width="8" height="34" fill="#c9a84c" />
      {/* Arrow tip */}
      <path d="M38 4 L44 10 L42 10 L42 20 L38 20 L38 10 L36 10 Z" fill="#c9a84c" />
    </svg>
  );
}
