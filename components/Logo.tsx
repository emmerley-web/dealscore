export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Page edges — medium grays so they read on white backgrounds */}
      <rect x="6" y="2" width="17" height="25" rx="2" fill="#78716c" />
      <rect x="5" y="1" width="17" height="25" rx="2" fill="#a8a29e" />
      {/* Front cover */}
      <rect x="3" y="0" width="18" height="26" rx="2" fill="#1c1917" />
      {/* Spine */}
      <rect x="0" y="0" width="5" height="26" rx="1.5" fill="#292524" />
      {/* Spine shadow line */}
      <rect x="4.5" y="0" width="1" height="26" fill="#000" fillOpacity="0.2" />
      {/* Gold checkmark */}
      <path
        d="M8 13.5L11 17L19 9"
        stroke="#c4a030"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
