import svgPaths from "./svg-7bhik06n45";

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">{children}</div>
    </div>
  );
}
type ItemBackgroundImageAndTextProps = {
  text: string;
};

function ItemBackgroundImageAndText({ text }: ItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[3px] pt-0 px-[96px] relative size-full">
          <div className="max-w-[1728px] min-h-[70px] relative shrink-0 w-full" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-[0px_15.996px] items-start justify-center max-w-[inherit] min-h-[inherit] px-0 py-[15px] relative w-full">
              <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start pl-0 pr-[32px] py-0 relative shrink-0" data-name="Link">
                  <div className="aspect-[130/23.63] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="appwrite">
                    <div className="content-stretch flex flex-col h-[23.63px] items-center justify-center overflow-clip relative shrink-0 w-[130px]" data-name="appwrite.svg fill">
                      <div className="h-[23.636px] relative shrink-0 w-[130px]" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 23.6364">
                          <g clipPath="url(#clip0_6_3344)" id="Component 1">
                            <path d={svgPaths.p256cbf00} fill="var(--fill-0, #EDEDF0)" id="Vector" />
                            <path d={svgPaths.p22216880} fill="var(--fill-0, #EDEDF0)" id="Vector_2" />
                            <path d={svgPaths.p9786880} fill="var(--fill-0, #EDEDF0)" id="Vector_3" />
                            <path d={svgPaths.p9856c00} fill="var(--fill-0, #EDEDF0)" id="Vector_4" />
                            <path d={svgPaths.p38af2200} fill="var(--fill-0, #EDEDF0)" id="Vector_5" />
                            <path d={svgPaths.p31b76250} fill="var(--fill-0, #EDEDF0)" id="Vector_6" />
                            <path d={svgPaths.p376b3580} fill="var(--fill-0, #EDEDF0)" id="Vector_7" />
                            <path clipRule="evenodd" d={svgPaths.p2ab86300} fill="var(--fill-0, #EDEDF0)" fillRule="evenodd" id="Vector_8" />
                            <path d={svgPaths.p3923df00} fill="var(--fill-0, #EDEDF0)" id="Vector_9" />
                            <path d={svgPaths.p2470e280} fill="var(--fill-0, #FD356E)" id="Vector_10" />
                            <path d={svgPaths.p1aa14f00} fill="var(--fill-0, #FD356E)" id="Vector_11" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_3344">
                              <rect fill="white" height="23.6364" width="130" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav - Main">
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="List">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
                      <div className="content-stretch flex items-center justify-between relative shrink-0" data-name="Button">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-center text-nowrap">
                          <p className="leading-[24px]">Products</p>
                        </div>
                        <div className="content-stretch flex flex-col items-center px-0 py-[5px] relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none scale-y-[-100%]">
                                <div className="h-[20px] relative w-[21.17px]" data-name="Component 3">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.17 20">
                                    <g id="Component 3">
                                      <path d={svgPaths.p340c8b80} fill="var(--fill-0, #E4E4E7)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ItemBackgroundImageAndText text="Docs" />
                    <ItemBackgroundImageAndText text="Pricing" />
                    <ItemBackgroundImageAndText text="Enterprise" />
                  </div>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-[417.54998779296875px] relative self-stretch shrink-0" data-name="Margin">
                <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] pl-[780.484px] pr-0 py-0 relative size-full">
                    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[15px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="star">
                                <path clipRule="evenodd" d={svgPaths.p2efbe900} fill="var(--fill-0, #ACACAF)" fillRule="evenodd" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <ContainerBackgroundImage>
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#acacaf] text-[15.999px] text-center text-nowrap">
                            <p className="leading-[24px]">Star on GitHub</p>
                          </div>
                        </ContainerBackgroundImage>
                        <div className="relative shrink-0 w-[36.86px]" data-name="Margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                            <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col items-center justify-center px-[4px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-center text-nowrap">
                                <p className="leading-[15.999px]">53K</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center min-h-[40px] px-[15px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link" style={{ backgroundImage: "linear-gradient(135.078deg, rgb(253, 53, 110) 0%, rgb(253, 53, 110) 61%, rgb(254, 82, 108) 100%)" }}>
                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <ContainerBackgroundImage>
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.999px] text-center text-nowrap text-white">
                            <p className="leading-[24px]">Start building for free</p>
                          </div>
                        </ContainerBackgroundImage>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}