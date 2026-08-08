import { PHONE_CHROME, PHONE_CAMERA } from "@/lib/figma-assets";

// Composites the Figma iPhone mockup: screen image at bottom, optional overlay,
// the white dynamic-island backplate, phone chrome PNG on top, then the dynamic
// island (black pill + camera dot). All positions are percentages of the
// reference 400 × 815.067 Figma canvas so the mockup scales with its container.
//
// Percentages were derived from the canonical iPhone composite (Figma node
// 1481:3396): screen 17.5/400 = 4.375%, top 13.93/815.067 = 1.71%, etc.

type Props = {
  screen: string;
  overlay?: string;
  className?: string;
};

export default function PhoneMockup({ screen, overlay, className = "" }: Props) {
  return (
    <div className={`relative aspect-[400/815] ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={screen}
          alt=""
          aria-hidden="true"
          className="absolute object-cover"
          style={{
            left: "4.375%",
            top: "1.71%",
            width: "90.645%",
            height: "96.715%",
            borderRadius: "13.33%/6.54%",
          }}
        />
        {overlay && (
          <img
            src={overlay}
            alt=""
            aria-hidden="true"
            className="absolute object-cover"
            style={{
              left: "4.375%",
              top: "1.71%",
              width: "90.645%",
              height: "96.715%",
              borderRadius: "13.33%/6.54%",
            }}
          />
        )}
        <div
          className="absolute bg-white"
          style={{
            left: "27.5%",
            top: "3.19%",
            width: "44%",
            height: "4.66%",
            borderRadius: "12.95%/61%",
          }}
        />
        <img
          src={PHONE_CHROME}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div
        className="absolute overflow-hidden"
        style={{
          left: "35.36%",
          top: "3.22%",
          width: "28.92%",
          height: "4.11%",
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ borderRadius: "42%/145%" }}
        />
        <img
          src={PHONE_CAMERA}
          alt=""
          aria-hidden="true"
          className="absolute object-cover opacity-60"
          style={{
            left: "77.74%",
            top: "24.63%",
            width: "14.28%",
            height: "49.27%",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
