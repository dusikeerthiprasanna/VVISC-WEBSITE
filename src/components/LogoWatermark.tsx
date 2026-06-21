export default function LogoWatermark({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src="/vvisc_logo_transparent.png"
        alt=""
        className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-75 select-none"
        draggable={false}
      />
    </div>
  );
}
