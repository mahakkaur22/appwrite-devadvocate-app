import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "../../imports/svg-7bhik06n45";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      
      // Close mobile menu after clicking
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="backdrop-blur-[5px] backdrop-filter fixed top-0 left-0 right-0 z-50 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="min-h-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[3px] pt-0 px-6 md:px-12 lg:px-24 xl:px-[135px] relative w-full">
          <div className="mx-auto min-h-[70px] relative shrink-0 w-full" style={{ maxWidth: '100%' }}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-[0px_15.996px] items-center justify-between max-w-[inherit] min-h-[inherit] px-0 py-[15px] relative w-full">
              
              {/* Logo */}
              <div className="content-stretch flex items-center relative shrink-0">
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

              {/* Desktop Navigation - Hidden on mobile/tablet */}
              <div className="hidden xl:flex content-stretch items-center gap-[32px] relative shrink-0">
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

              {/* Right Side - CTA Button & Mobile Menu Toggle */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Contact Me Button - Hidden on small screens, shown on md+ */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hidden md:flex content-stretch items-center justify-center min-h-[40px] px-[15px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                  style={{ backgroundImage: "linear-gradient(135.078deg, rgb(253, 53, 110) 0%, rgb(253, 53, 110) 61%, rgb(254, 82, 108) 100%)" }}
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.999px] text-center text-nowrap text-white">
                    <p className="leading-[24px]">Contact Me</p>
                  </div>
                </button>

                {/* Mobile Menu Toggle Button - Show only on xl and below */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-[#e4e4e7]" />
                  ) : (
                    <Menu className="w-6 h-6 text-[#e4e4e7]" />
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-[70px] left-0 right-0 backdrop-blur-xl border-t border-[rgba(255,255,255,0.1)]"
             style={{ background: 'rgba(25,25,28,0.95)' }}>
          <div className="px-6 md:px-12 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">About</p>
            </button>

            <button 
              onClick={() => scrollToSection('why-appwrite')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">Why Appwrite</p>
            </button>

            <button 
              onClick={() => scrollToSection('technical-writing')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">Writing</p>
            </button>

            <button 
              onClick={() => scrollToSection('community')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">Community</p>
            </button>

            <button 
              onClick={() => scrollToSection('what-i-bring')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">What I Bring</p>
            </button>

            <button 
              onClick={() => scrollToSection('work-approach')}
              className="w-full text-left py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
            >
              <p className="text-[#e4e4e7] text-[16px] font-medium">Approach</p>
            </button>

            {/* Contact Me Button in Mobile Menu */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 flex items-center justify-center min-h-[44px] px-[15px] py-[10px] relative rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity" 
              style={{ backgroundImage: "linear-gradient(135.078deg, rgb(253, 53, 110) 0%, rgb(253, 53, 110) 61%, rgb(254, 82, 108) 100%)" }}
            >
              <p className="text-white text-[16px] font-medium">Contact Me</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}