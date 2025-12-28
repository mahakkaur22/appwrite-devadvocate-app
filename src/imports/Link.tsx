import svgPaths from "./svg-zbvms9ayof";
import imgAuthIcon from "../assets/auth.png";
import { imgGroup } from "./svg-o3uux";
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acacaf] text-[10px] tracking-[-0.18px] w-full">
        <p className="leading-[14px]">{text}</p>
      </div>
    </div>
  );
}

export default function Link() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.02)] relative rounded-[16px] size-full"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[9px] relative size-full">
          <div className="relative shrink-0 w-[546px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[8px] px-[12px] relative w-full">
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <div
                  className="max-w-[522px] relative shrink-0 size-[28px]"
                  data-name="Auth icon"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgAuthIcon}
                    />
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-name="Heading 3"
                >
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[18.8px] text-nowrap">
                    <p className="leading-[28px]">Auth</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]"
                data-name="Container"
              >
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[22px] not-italic relative shrink-0 text-[#acacaf] text-[0px] text-[15.999px] text-nowrap tracking-[-0.208px]">
                  <p className="mb-0">
                    Authenticate users securely with multiple login methods like
                  </p>
                  <p className="text-[#e4e4e7]">
                    Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[340px] relative rounded-[12px] shrink-0 w-[546px]"
            data-name="Container"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[32px] py-0 relative rounded-[inherit] size-full">
              <div
                className="absolute content-stretch flex flex-col inset-0 items-start"
                data-name="Image"
              >
                <div
                  className="content-stretch flex flex-col h-[340px] items-center justify-center overflow-clip px-[248.182px] py-[145.182px] relative shrink-0 w-[546px]"
                  data-name="image fill"
                >
                  <div
                    className="relative shrink-0 size-[49.636px]"
                    data-name="Component 1"
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 49.6364 49.6364"
                    >
                      <g clipPath="url(#clip0_4_4918)" id="Component 1">
                        <path
                          d="M49.6364 0V49.6364H0"
                          id="Vector"
                          stroke="var(--stroke-0, #444444)"
                          strokeDasharray="2.33 4.65"
                          strokeLinecap="square"
                          strokeOpacity="0.4"
                          strokeWidth="0.775568"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_4918">
                          <rect fill="white" height="49.6364" width="49.6364" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-[rgba(0,0,0,0.24)] inset-0 rounded-[12px]"
                data-name="Overlay"
              />
              <div
                className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0"
                data-name="Container"
              >
                <div
                  className="bg-[rgba(35,35,37,0.9)] content-stretch flex flex-col items-start p-[9px] relative rounded-[40px] shrink-0 w-[264px]"
                  data-name="Overlay+Border"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[40px]"
                  />
                  <div
                    className="bg-[#19191c] relative rounded-[32px] shrink-0 w-[246px]"
                    data-name="Background"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
                      <div
                        className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                          data-name="Container"
                        >
                          <LabelText text="Email" />
                          <div
                            className="bg-[#19191c] relative rounded-[8px] shrink-0 w-full"
                            data-name="Input"
                          >
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col items-start px-[13px] py-[9px] relative w-full">
                                <div
                                  className="relative shrink-0 w-[188px]"
                                  data-name="Container"
                                >
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative w-full">
                                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[15.99899959564209px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white tracking-[-0.216px]">
                                      <p className="leading-[15.999px]">
                                        walter@acme.dev
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[8px]"
                            />
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                          data-name="Container"
                        >
                          <LabelText text="Create Password" />
                          <div
                            className="bg-[#19191c] relative rounded-[8px] shrink-0 w-full"
                            data-name="Input"
                          >
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col items-start pb-[10px] pt-[9px] px-[13px] relative w-full">
                                <div
                                  className="relative shrink-0 w-[188px]"
                                  data-name="Container"
                                >
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.216px]">
                                      <p className="leading-[normal]">
                                        Your Password
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="absolute border border-[rgba(255,255,255,0.24)] border-solid inset-0 pointer-events-none rounded-[8px]"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-white content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full"
                          data-name="Button"
                        >
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#19191c] text-[12px] text-center text-nowrap tracking-[-0.216px]">
                            <p className="leading-[15.999px]">Sign up</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <div
                          className="basis-0 bg-[rgba(255,255,255,0.06)] grow h-px min-h-px min-w-px shrink-0"
                          data-name="Horizontal Divider"
                        />
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acacaf] text-[10px] text-center text-nowrap tracking-[-0.18px]">
                          <p className="leading-[14px]">or sign up with</p>
                        </div>
                        <div
                          className="basis-0 bg-[rgba(255,255,255,0.06)] grow h-px min-h-px min-w-px shrink-0"
                          data-name="Horizontal Divider"
                        />
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center justify-center px-px py-[9px] relative rounded-[8px] shrink-0 w-full"
                        data-name="Button"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[8px]"
                        />
                        <div
                          className="max-w-[214px] relative shrink-0 size-[16px]"
                          data-name="Google Icon"
                        >
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
                            <div
                              className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]"
                              data-name="image fill"
                            >
                              <div
                                className="overflow-clip relative shrink-0 size-[16px]"
                                data-name="Component 1"
                              >
                                <div
                                  className="absolute contents inset-0"
                                  data-name="Clip path group"
                                >
                                  <div
                                    className="absolute inset-[0.15%_-0.02%_0.14%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.023px] mask-size-[16px_16px]"
                                    data-name="Group"
                                    style={{ maskImage: `url('${imgGroup}')` }}
                                  >
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 16.0035 15.9542"
                                    >
                                      <g id="Group">
                                        <path
                                          d={svgPaths.p22c90480}
                                          fill="var(--fill-0, #4285F4)"
                                          id="Vector"
                                        />
                                        <path
                                          d={svgPaths.p36949600}
                                          fill="var(--fill-0, #34A853)"
                                          id="Vector_2"
                                        />
                                        <path
                                          d={svgPaths.p16b48000}
                                          fill="var(--fill-0, #F88909)"
                                          id="Vector_3"
                                        />
                                        <path
                                          d={svgPaths.p1f1e6280}
                                          fill="var(--fill-0, #FD2020)"
                                          id="Vector_4"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.999px] text-center text-nowrap text-white">
                          <p className="leading-[24px]">Google</p>
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
    </div>
  );
}
