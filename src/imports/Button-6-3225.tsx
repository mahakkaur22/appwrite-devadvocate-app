import svgPaths from "./svg-8n7mebgp2a";
import { imgGradientBorder } from "./svg-j8vux";

export default function Button() {
  return (
    <div className="bg-[rgba(253,54,110,0.04)] relative rounded-[8px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[14px] py-[8px] relative size-full">
          <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[rgba(253,54,110,0.48)] inset-[0_0.17px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[8px] to-[rgba(253,54,110,0)]" data-name="Gradient+Border" style={{ maskImage: `url('${imgGradientBorder}')` }} />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-center text-nowrap">
            <p className="leading-[24px]">{`Appwrite in 100 seconds `}</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="Component 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="play">
                <path clipRule="evenodd" d={svgPaths.p2d9d0400} fill="var(--fill-0, #E4E4E7)" fillRule="evenodd" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute border border-[rgba(0,0,0,0)] border-solid inset-[0_0.17px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[8px]" data-name="Gradient+Border" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 248.83 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.665 0 0 1.7144 125.78 0)\\\'><stop stop-color=\\\'rgba(255,255,255,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgGradientBorder}')` }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-6px_10px_0px_rgba(253,54,110,0.08)]" />
    </div>
  );
}