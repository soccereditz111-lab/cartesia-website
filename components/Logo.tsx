export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top yellow blocks */}
      <rect x="20" y="8" width="22" height="18" fill="#FFD600" />
      <rect x="78" y="8" width="22" height="18" fill="#FFD600" />
      {/* Upper orange */}
      <rect x="20" y="26" width="36" height="16" fill="#FFB300" />
      <rect x="64" y="26" width="36" height="16" fill="#FFB300" />
      {/* Middle orange bar */}
      <rect x="20" y="42" width="80" height="16" fill="#FF8A00" />
      {/* Lower red */}
      <rect x="20" y="58" width="22" height="16" fill="#FF4D00" />
      <rect x="49" y="58" width="22" height="16" fill="#FF4D00" />
      <rect x="78" y="58" width="22" height="16" fill="#FF4D00" />
      {/* Bottom red base */}
      <rect x="12" y="74" width="42" height="16" fill="#FF2D00" />
      <rect x="66" y="74" width="42" height="16" fill="#FF2D00" />
    </svg>
  )
}