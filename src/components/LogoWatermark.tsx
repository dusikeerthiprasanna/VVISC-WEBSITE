export default function LogoWatermark({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src="/image_transparent.png"
        alt=""
        className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[700px] lg:h-[700px] object-contain opacity-[0.08] dark:opacity-[0.06] dark:invert select-none"
        draggable={false}
      />
    </div>
  );
}
