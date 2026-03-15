export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Spine */}
      <rect x="0" y="0" width="5" height="26" rx="1.5" fill="#292524" />
      {/* Book body */}
      <rect x="3" y="0" width="19" height="26" rx="2" fill="#1c1917" />
      {/* Tick / checkmark in gold */}
      <path
        d="M8.5 13.5L11.5 16.5L18.5 9"
        stroke="#c4a030"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
