export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Book body */}
      <rect width="20" height="24" rx="1.5" fill="#1c1917" />
      {/* Spine */}
      <rect x="0" y="0" width="3" height="24" rx="1.5" fill="#292524" />
      {/* Text lines */}
      <rect x="5.5" y="6.5" width="11" height="1.5" rx="0.75" fill="white" fillOpacity="0.28" />
      <rect x="5.5" y="10" width="7" height="1.5" rx="0.75" fill="white" fillOpacity="0.28" />
      {/* Score bar — gold accent */}
      <rect x="5.5" y="17" width="11" height="2.5" rx="1.25" fill="#c4a030" />
    </svg>
  );
}
