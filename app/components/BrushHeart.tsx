export default function BrushHeart({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-red-500 ${className}`}
      style={{ transform: "rotate(-30deg)" }}
    >
      {/* Hand-drawn style paths */}
      <path d="M12.5 5.5C10 2.5 3 3.5 3 9.5c0 4 6 9 9.5 11.5" />
      <path d="M11.5 5.5C14 2.5 21 3.5 21 9.5c0 4 -6 9 -9.5 11.5" />
    </svg>
  );
}
