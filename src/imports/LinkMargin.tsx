import svgPaths from "./svg-nmguhi5vi3";
import { imgGradientBorder, imgGradientBorder1 } from "./svg-nbmrr";

function ComponentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

export default function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative size-full" data-name="Link:margin">
      <div className="bg-[rgba(253,54,110,0.08)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[14px] shrink-0" data-name="Link">
        <ComponentBackgroundImage>
          <g id="sparkle">
            <path clipRule="evenodd" d={svgPaths.p17620f70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        </ComponentBackgroundImage>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.252px]">
            <p className="leading-[22px]">New</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-center px-[4px] py-0 relative shrink-0 w-[9px]" data-name="Margin">
          <div className="bg-[rgba(255,255,255,0.1)] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.252px]">
            <p className="leading-[22px]">Introducing Imagine</p>
          </div>
        </div>
        <ComponentBackgroundImage>
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p1e240d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        </ComponentBackgroundImage>
        <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[rgba(253,54,110,0.48)] inset-[0_0.44px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[14px] to-[rgba(253,54,110,0)]" data-name="Gradient+Border" style={{ maskImage: `url('${imgGradientBorder}')` }} />
        <div className="absolute border border-[rgba(0,0,0,0)] border-solid inset-[0_0.44px_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[14px]" data-name="Gradient+Border" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 237.56 30\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.182 0 0 1.2858 120.09 0)\\\'><stop stop-color=\\\'rgba(255,255,255,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgGradientBorder1}')` }} />
      </div>
    </div>
  );
}