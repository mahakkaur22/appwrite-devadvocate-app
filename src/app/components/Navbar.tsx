import svgPaths from "../../imports/svg-7bhik06n45";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="backdrop-blur-[5px] backdrop-filter fixed top-0 left-0 right-0 z-50 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="min-h-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[3px] pt-0 px-6 md:px-12 lg:px-24 xl:px-[135px] relative w-full">
          <div className="mx-auto min-h-[70px] relative shrink-0 w-full" style={{ maxWidth: '100%' }}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-[0px_15.996px] items-start justify-between max-w-[inherit] min-h-[inherit] px-0 py-[15px] relative w-full">
              
              {/* Left Side - Logo & Nav */}
              <div className="content-stretch flex items-center relative self-stretch shrink-0">
                {/* Logo */}
                <div className="content-stretch flex flex-col items-start pl-0 pr-[32px] py-0 relative shrink-0">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="aspect-[130/23.63] content-stretch flex flex-col items-start overflow-clip relative shrink-0 cursor-pointer"
                  >
                    <div className="content-stretch flex flex-col h-[23.63px] items-center justify-center overflow-clip relative shrink-0 w-[130px]">
                      <div className="h-[23.636px] relative shrink-0 w-[130px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 23.6364">
                          <g clipPath="url(#clip0_6_3344)">
                            <path d={svgPaths.p256cbf00} fill="#EDEDF0" />
                            <path d={svgPaths.p22216880} fill="#EDEDF0" />
                            <path d={svgPaths.p9786880} fill="#EDEDF0" />
                            <path d={svgPaths.p9856c00} fill="#EDEDF0" />
                            <path d={svgPaths.p38af2200} fill="#EDEDF0" />
                            <path d={svgPaths.p31b76250} fill="#EDEDF0" />
                            <path d={svgPaths.p376b3580} fill="#EDEDF0" />
                            <path clipRule="evenodd" d={svgPaths.p2ab86300} fill="#EDEDF0" fillRule="evenodd" />
                            <path d={svgPaths.p3923df00} fill="#EDEDF0" />
                            <path d={svgPaths.p2470e280} fill="#FD356E" />
                            <path d={svgPaths.p1aa14f00} fill="#FD356E" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_3344">
                              <rect fill="white" height="23.6364" width="130" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">About</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollToSection('why-appwrite')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">Why Appwrite</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollToSection('technical-writing')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">Writing</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollToSection('community')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">Community</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollToSection('what-i-bring')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">What I Bring</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollToSection('work-approach')}
                      className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e7] text-[15.999px] text-nowrap hover:text-white transition-colors">
                        <p className="leading-[24px]">Approach</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Button */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Contact Me Button */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="content-stretch flex items-center justify-center min-h-[40px] px-[15px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                  style={{ backgroundImage: "linear-gradient(135.078deg, rgb(253, 53, 110) 0%, rgb(253, 53, 110) 61%, rgb(254, 82, 108) 100%)" }}
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.999px] text-center text-nowrap text-white">
                    <p className="leading-[24px]">Contact Me</p>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}