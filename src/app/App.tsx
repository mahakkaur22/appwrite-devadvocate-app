import {
  Users,
  BookOpen,
  Heart,
  Mail,
  Twitter,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import Navbar from "./components/Navbar";
import MaskGroup from "../imports/MaskGroup";
import aboutMeImage from "../assets/aboutMe.png";
import communityImage from "../assets/communityImage.png";
import appwriteProductsImage from "../assets/appwriteProducts.png";

export default function App() {
  return (
    <div
      className="dark min-h-screen relative overflow-hidden"
      style={{ background: "#19191c" }}
    >
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient backgrounds with blur - matching Appwrite style */}
      <div className="absolute blur-[120px] filter inset-0 pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(253,54,110,0.25) 0%, rgba(253,54,110,0) 70%)",
            top: "-250px",
            right: "10%",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,103,254,0.2) 0%, rgba(123,103,254,0) 70%)",
            bottom: "-200px",
            left: "5%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(253,54,110,0.15) 0%, rgba(253,54,110,0) 70%)",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      <div
        className="relative px-6 md:px-12 lg:px-24 xl:px-[135px] py-20 md:py-28 mt-[70px]"
        style={{ maxWidth: "100%" }}
      >
        {/* Hero Section - Appwrite Style */}
        <section id="home" className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full relative"
                style={{
                  background: "rgba(253,54,110,0.12)",
                  border: "1px solid rgba(253,54,110,0.3)",
                }}
              >
                <span className="text-sm text-white relative z-10 flex items-center gap-2">
                  <span className="text-[#FD366E]">✦</span> Developer Advocate
                  Assignment
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-6xl md:text-7xl tracking-tight leading-[1.1]">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #FD366E 0%, #FEB0C5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Hi, I'm
                  </span>
                  <br />
                  <span style={{ color: "#e4e4e7" }}>Mahak</span>
                  <span style={{ color: "#FD366E" }}>_</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#acacaf] leading-relaxed max-w-lg">
                Developer Relations Engineer working at the intersection of
                engineering, product, and developer experience. I bridge the gap
                between complex technical systems and the developers who build
                with them.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Primary Button - Let's connect */}
                <a
                  href="https://www.linkedin.com/in/mahak-kaur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-[8px] px-6 py-3 transition-opacity hover:opacity-90"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FD356E 0%, #FD356E 61%, #FE526C 100%)",
                  }}
                >
                  <span className="text-white">Let's connect</span>
                </a>

                {/* Secondary Button - Reach me out */}
                <a
                  href="mailto:mahakkaurchhabra22@gmail.com"
                  className="relative rounded-[8px] px-6 py-3 transition-all hover:bg-[rgba(255,255,255,0.08)] flex items-center gap-2 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onClick={(e) => {
                    window.location.href =
                      "mailto:mahakkaurchhabra22@gmail.com";
                  }}
                >
                  <span className="text-[#e4e4e7]">Reach me out</span>
                  <span className="text-[#FD366E]">→</span>
                </a>
              </div>
            </div>

            {/* Right Column - Appwrite Console Mockup */}
            <div className="relative lg:ml-12">
              <div
                className="backdrop-blur-xl rounded-t-2xl overflow-hidden relative"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderBottom: "none",
                }}
              >
                {/* Console Header */}
                <div className="bg-[#1a1a1d] border-b border-[rgba(255,255,255,0.08)] px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-[#acacaf]">
                    <span className="text-white">●</span>
                    <span>appwrite</span>
                    <span>/</span>
                    <span>Acme Corp</span>
                    <span>/</span>
                    <span className="text-white">First Appwrite project</span>
                  </div>
                </div>

                {/* Console Body */}
                <div className="bg-[#0d0d12] p-6 min-h-[400px]">
                  <div className="space-y-6">
                    {/* Project Title */}
                    <div>
                      <h2
                        className="text-2xl mb-2"
                        style={{ color: "#e4e4e7" }}
                      >
                        Appwrite Project
                      </h2>
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] text-xs text-[#acacaf]">
                        <span>●</span> Project ID
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Bandwidth Chart */}
                      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4">
                        <div className="text-sm text-[#acacaf] mb-2">
                          Bandwidth
                        </div>
                        <div
                          className="text-2xl mb-4"
                          style={{ color: "#e4e4e7" }}
                        >
                          1.19{" "}
                          <span className="text-sm text-[#acacaf]">GB</span>
                        </div>
                        {/* Simple bar chart visualization */}
                        <div className="flex items-end gap-0.5 h-20">
                          {[
                            20, 40, 30, 50, 35, 60, 45, 70, 50, 65, 55, 75, 60,
                            80, 70, 85,
                          ].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t"
                              style={{
                                height: `${height}%`,
                                background: "#FD366E",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Requests Chart */}
                      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4">
                        <div className="text-sm text-[#acacaf] mb-2">
                          Requests
                        </div>
                        <div
                          className="text-2xl mb-4"
                          style={{ color: "#e4e4e7" }}
                        >
                          2K
                        </div>
                        {/* Simple line chart visualization */}
                        <div className="h-20 relative">
                          <svg
                            viewBox="0 0 100 50"
                            className="w-full h-full"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0,40 Q25,20 50,25 T100,15"
                              fill="none"
                              stroke="#7B67FE"
                              strokeWidth="2"
                            />
                            <path
                              d="M0,40 Q25,20 50,25 T100,15 L100,50 L0,50 Z"
                              fill="rgba(123,103,254,0.2)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                        <div className="text-xs text-[#acacaf] mb-1">
                          DATABASES
                        </div>
                        <div className="text-xl" style={{ color: "#e4e4e7" }}>
                          4
                        </div>
                        <div className="text-xs text-[#acacaf] mt-1">
                          Documents: 20
                        </div>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                        <div className="text-xs text-[#acacaf] mb-1">
                          STORAGE
                        </div>
                        <div className="text-xl" style={{ color: "#e4e4e7" }}>
                          8.0 <span className="text-sm text-[#acacaf]">MB</span>
                        </div>
                        <div className="text-xs text-[#acacaf] mt-1">
                          Buckets: 44
                        </div>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                        <div className="text-xs text-[#acacaf] mb-1">
                          AUTHENTICATION
                        </div>
                        <div className="text-xl" style={{ color: "#e4e4e7" }}>
                          4K
                        </div>
                        <div className="text-xs text-[#acacaf] mt-1">
                          Sessions: 20K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A bit about me Section */}
        <section id="about" className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className="backdrop-blur-[32px] rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(25,25,30,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
              }}
            >
              <h2
                className="text-4xl mb-8 tracking-tight"
                style={{ color: "#e4e4e7" }}
              >
                A bit about me
              </h2>

              <div className="space-y-5 text-[#acacaf] text-lg leading-relaxed">
                <p>
                  I'm Mahak, and I've been doing DevRel for about 3 years now.
                  Most of my time is spent sitting between engineering, product,
                  and community basically translating what developers actually
                  need into something product can work with, and what
                  engineering builds into something people can understand.
                </p>
                <p>
                  I've given talks, built communities (AI and SRE, both from
                  zero), strategized events, made demo videos, and written a ton
                  of technical content. But honestly? The best part of my job is
                  the feedback loop. Sitting with engineers to understand what
                  they shipped, talking to product about what developers keep
                  asking for, and turning that into content that helps people
                  build stuff. Sometimes that content even drives sales, which
                  is pretty cool.
                </p>
                <p>
                  That's DevRel to me, being the person who makes the product
                  better while helping developers actually use it.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[400px]">
              <div
                className="backdrop-blur-[32px] rounded-2xl overflow-hidden h-full"
                style={{
                  background: "rgba(25,25,30,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={aboutMeImage}
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Appwrite Section - Glassmorphism Card */}
        <section id="why-appwrite" className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-full min-h-[400px] lg:order-1">
              <div
                className="backdrop-blur-[32px] rounded-2xl overflow-hidden h-full"
                style={{
                  background: "rgba(25,25,30,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={appwriteProductsImage}
                  alt="Appwrite platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div
              className="backdrop-blur-[32px] rounded-2xl p-8 md:p-10 lg:order-2"
              style={{
                background: "rgba(25,25,30,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
              }}
            >
              <h2
                className="text-4xl mb-8 tracking-tight"
                style={{ color: "#e4e4e7" }}
              >
                Why Appwrite
              </h2>

              <div className="space-y-5 text-[#acacaf] text-lg leading-relaxed">
                <p>
                  I've had my eye on Appwrite for a while. What gets me is that
                  it's built for developers, not against them. Open-source, no
                  vendor lock-in, actually pleasant to use. That's not common.
                </p>
                <p>
                  This role caught my attention because it's focused on shipping
                  content, not just doing conference circuits. Look, I've done
                  talks and events they're fine. But the stuff that matters?
                  It's the docs someone finds at 2am. The tutorial that works on
                  the first try. The changelog that makes sense.
                </p>
                <p>
                  Here's what I think: DevRel for open-source is different. It's
                  not marketing theater. You're building a real feedback loop,
                  developers tell you what's broken, you work with engineering
                  to fix it, you document it well, and you build trust. That's
                  what makes this kind of work interesting, and that's what I
                  want to do more of.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Writing & Documentation Section */}
        <section id="technical-writing" className="mb-24 md:mb-32">
          <h2
            className="text-4xl mb-6 tracking-tight"
            style={{ color: "#e4e4e7" }}
          >
            Technical writing & documentation
          </h2>
          <p className="text-lg text-[#acacaf] mb-12 leading-relaxed">
            I write so people can actually build things. If someone follows my
            guide and gets stuck, I didn't do my job. Here's some recent stuff:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Podman vs Docker: Complete 2025 Comparison",
                description:
                  "In-depth guide for DevOps teams on choosing between containerization tools",
                url: "https://zenduty.com/blog/podman-vs-docker-complete-2025-comparison-guide-for-devops-teams/",
              },
              {
                title: "OpenTelemetry Collector Guide",
                description:
                  "Comprehensive walkthrough on implementing observability with OpenTelemetry",
                url: "https://zenduty.com/blog/opentelemetry-collector-guide/",
              },
              {
                title: "Performance Testing Guide",
                description:
                  "Complete guide to performance testing for mobile applications",
                url: "https://quashbugs.com/blog/performance-testing-guide",
              },
              {
                title: "AI in Mobile Testing: Challenges & Opportunities",
                description:
                  "Exploring how AI is transforming mobile app testing workflows",
                url: "https://quashbugs.com/blog/mobile-app-testing-ai-challenges-opportunities",
              },
              {
                title: "BDD Testing: Benefits & Best Practices",
                description:
                  "Practical guide to implementing Behavior-Driven Development in testing",
                url: "https://quashbugs.com/blog/bdd-testing-benefits-best-practices",
              },
              {
                title: "System Integration Testing for Mobile Apps",
                description:
                  "Best practices for integration testing in mobile development",
                url: "https://quashbugs.com/blog/system-integration-testing-mobile-apps",
              },
            ].map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="backdrop-blur-[32px] rounded-xl p-6 h-full transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "rgba(25,25,30,0.6)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg text-[#e4e4e7] group-hover:text-[#FD366E] transition-colors">
                      {article.title}
                    </h3>
                    <ExternalLink
                      className="w-4 h-4 flex-shrink-0 ml-2"
                      style={{ color: "#FD366E" }}
                    />
                  </div>
                  <p className="text-sm text-[#acacaf] leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Community Building & Events Section */}
        <section id="community" className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className="backdrop-blur-[32px] rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(25,25,30,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
              }}
            >
              <h2
                className="text-4xl mb-8 tracking-tight"
                style={{ color: "#e4e4e7" }}
              >
                Community building & events
              </h2>

              <div className="space-y-5 text-[#acacaf] text-lg leading-relaxed">
                <p>
                  I built Appstornauts (QA/testing community) and a DevOps/SRE
                  community from scratch. Not just "created a Discord server and
                  posted once" actually built them. People show up, help each
                  other, and stick around.
                </p>
                <p>
                  Got to 1,500+ members in two months. Completely organic no
                  paid anything, just events people wanted to attend and content
                  that was actually useful.
                </p>
                <p>
                  I've led event planning, organized meetups, given talks, and
                  figured out what makes developers actually engage. Spoiler:
                  it's not promotion, it's solving their problems.
                </p>
                <p>
                  The cool part? This fed directly back into product. Community
                  questions showed us product gaps. Technical content brought in
                  qualified leads. Demo videos turned into conversions. That's
                  when DevRel is working right.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[400px]">
              <div
                className="backdrop-blur-[32px] rounded-2xl overflow-hidden h-full"
                style={{
                  background: "rgba(25,25,30,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={communityImage}
                  alt="Community meetup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What I Bring to the Table Section */}
        <section id="what-i-bring" className="mb-24 md:mb-32">
          <div
            className="backdrop-blur-[32px] rounded-2xl p-8 md:p-12"
            style={{
              background: "rgba(25,25,30,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
            }}
          >
            <h2
              className="text-4xl mb-8 tracking-tight"
              style={{ color: "#e4e4e7" }}
            >
              What I bring to the table
            </h2>

            <div className="space-y-5 text-[#acacaf] text-lg leading-relaxed mb-10">
              <p>
                I don't just write docs and call it a day. I sit with
                engineering to understand what shipped, test the examples
                myself, and rewrite stuff until it makes sense. I don't just
                grow communities I listen to what people are struggling with and
                feed that to product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* How I work */}
              <div>
                <h3 className="text-2xl mb-6" style={{ color: "#e4e4e7" }}>
                  How I work
                </h3>
                <ul className="space-y-3 text-[#acacaf]">
                  <li className="flex gap-3">
                    <span style={{ color: "#FD366E" }}>→</span>
                    <span>
                      Work with engineering to get technical details and gather
                      their feedback
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#FD366E" }}>→</span>
                    <span>
                      Translate developer pain points into things product can
                      actually use
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#FD366E" }}>→</span>
                    <span>
                      Write content that solves real problems, not just explains
                      features
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#FD366E" }}>→</span>
                    <span>
                      Build community that drives adoption and surfaces product
                      feedback
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#FD366E" }}>→</span>
                    <span>
                      Track what content actually converts vs what just gets
                      clicks
                    </span>
                  </li>
                </ul>
              </div>

              {/* What you get */}
              <div>
                <h3 className="text-2xl mb-6" style={{ color: "#e4e4e7" }}>
                  What you get
                </h3>
                <ul className="space-y-3 text-[#acacaf]">
                  <li className="flex gap-3">
                    <span style={{ color: "#7B67FE" }}>✓</span>
                    <span>Docs people reference instead of avoid</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#7B67FE" }}>✓</span>
                    <span>
                      Content that drives education and qualified leads
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#7B67FE" }}>✓</span>
                    <span>
                      Community feedback that makes the product better
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#7B67FE" }}>✓</span>
                    <span>
                      Cross-team collaboration that improves developer
                      experience
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: "#7B67FE" }}>✓</span>
                    <span>Demo videos and tutorials that help people ship</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-[#acacaf] leading-relaxed mt-10">
              I'm not here to write marketing fluff. I want to make Appwrite
              easier to use, help developers ship faster, and build the feedback
              loops that make everything better.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Technical Writing",
                "Documentation",
                "Community Building",
                "Event Strategy",
                "Developer Support",
                "Product Feedback",
                "Public Speaking",
                "DevOps & SRE",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm text-[#e4e4e7]"
                  style={{
                    background: "rgba(253,54,110,0.08)",
                    border: "1px solid rgba(253,54,110,0.2)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work Section - Appwrite-style Cards */}
        <section id="work-approach" className="mb-24 md:mb-32">
          <h2
            className="text-4xl mb-12 tracking-tight text-center"
            style={{ color: "#e4e4e7" }}
          >
            How I Work as a Developer Advocate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Cross-functional collaboration */}
            <div
              className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-[9px]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Top content */}
                <div className="px-3 pt-2 pb-4 space-y-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(253,54,110,0.3) 0%, rgba(253,54,110,0.1) 100%)",
                      }}
                    >
                      <Users className="w-4 h-4" style={{ color: "#FD366E" }} />
                    </div>
                    <h3 className="text-[18.8px] text-[#e4e4e7]">
                      Cross-functional
                    </h3>
                  </div>

                  <div className="text-[16px] leading-[22px]">
                    <p className="text-[#acacaf] mb-0">
                      I work closely with{" "}
                      <span className="text-[#e4e4e7]">
                        product and engineering teams
                      </span>{" "}
                      to surface real developer pain points not assumptions.
                    </p>
                  </div>
                </div>

                {/* Visual section */}
                <div
                  className="h-[340px] rounded-xl overflow-hidden relative"
                  style={{ background: "rgba(0,0,0,0.24)" }}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(253,54,110,0.1)",
                        border: "1px solid rgba(253,54,110,0.3)",
                      }}
                    >
                      <Users
                        className="w-10 h-10"
                        style={{ color: "#FD366E" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Documentation as a product */}
            <div
              className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-[9px]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Top content */}
                <div className="px-3 pt-2 pb-4 space-y-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(123,103,254,0.3) 0%, rgba(123,103,254,0.1) 100%)",
                      }}
                    >
                      <BookOpen
                        className="w-4 h-4"
                        style={{ color: "#7B67FE" }}
                      />
                    </div>
                    <h3 className="text-[18.8px] text-[#e4e4e7]">
                      Documentation
                    </h3>
                  </div>

                  <div className="text-[16px] leading-[22px]">
                    <p className="text-[#e4e4e7] mb-0">
                      Great docs aren't just technically accurate
                      <span className="text-[#acacaf]">
                        they're empathetic, contextual, and structured for
                        progressive learning.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Visual section */}
                <div
                  className="h-[340px] rounded-xl overflow-hidden relative"
                  style={{ background: "rgba(0,0,0,0.24)" }}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(123,103,254,0.1)",
                        border: "1px solid rgba(123,103,254,0.3)",
                      }}
                    >
                      <BookOpen
                        className="w-10 h-10"
                        style={{ color: "#7B67FE" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Developer empathy */}
            <div
              className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-[9px]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Top content */}
                <div className="px-3 pt-2 pb-4 space-y-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(253,54,110,0.3) 0%, rgba(253,54,110,0.1) 100%)",
                      }}
                    >
                      <Heart className="w-4 h-4" style={{ color: "#FD366E" }} />
                    </div>
                    <h3 className="text-[18.8px] text-[#e4e4e7]">
                      Developer empathy
                    </h3>
                  </div>

                  <div className="text-[16px] leading-[22px]">
                    <p className="text-[#e4e4e7] mb-0">
                      I've debugged flaky tests,{" "}
                      <span className="text-[#acacaf]">
                        wrangled CI/CD pipelines, and integrated fragile APIs at
                        2 AM.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Visual section */}
                <div
                  className="h-[340px] rounded-xl overflow-hidden relative"
                  style={{ background: "rgba(0,0,0,0.24)" }}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(253,54,110,0.1)",
                        border: "1px solid rgba(253,54,110,0.3)",
                      }}
                    >
                      <Heart
                        className="w-10 h-10"
                        style={{ color: "#FD366E" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="contact" className="mb-24 md:mb-32">
          <div
            className="backdrop-blur-[32px] rounded-2xl p-8 md:p-12"
            style={{
              background: "rgba(25,25,30,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.04)",
            }}
          >
            <h2
              className="text-4xl mb-6 tracking-tight"
              style={{ color: "#e4e4e7" }}
            >
              Let's connect
            </h2>
            <p className="text-lg text-[#acacaf] mb-8">
              Want to talk about the role? Hit me up.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="mailto:mahakkaurchhabra22@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "rgba(253,54,110,0.04)",
                  border: "1px solid rgba(253,54,110,0.2)",
                }}
              >
                <Mail
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FD366E" }}
                />
                <div>
                  <div className="text-xs text-[#acacaf] mb-0.5">Email</div>
                  <div className="text-sm text-[#e4e4e7] group-hover:text-[#FD366E] transition-colors">
                    mahakkaur...
                  </div>
                </div>
              </a>

              <a
                href="https://x.com/Mahakkaur10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "rgba(253,54,110,0.04)",
                  border: "1px solid rgba(253,54,110,0.2)",
                }}
              >
                <Twitter
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FD366E" }}
                />
                <div>
                  <div className="text-xs text-[#acacaf] mb-0.5">Twitter/X</div>
                  <div className="text-sm text-[#e4e4e7] group-hover:text-[#FD366E] transition-colors">
                    @Mahakkaur10
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mahak-kaur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "rgba(253,54,110,0.04)",
                  border: "1px solid rgba(253,54,110,0.2)",
                }}
              >
                <Linkedin
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FD366E" }}
                />
                <div>
                  <div className="text-xs text-[#acacaf] mb-0.5">LinkedIn</div>
                  <div className="text-sm text-[#e4e4e7] group-hover:text-[#FD366E] transition-colors">
                    mahak-kaur
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/mahakkaur22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] group"
                style={{
                  background: "rgba(253,54,110,0.04)",
                  border: "1px solid rgba(253,54,110,0.2)",
                }}
              >
                <Github
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FD366E" }}
                />
                <div>
                  <div className="text-xs text-[#acacaf] mb-0.5">GitHub</div>
                  <div className="text-sm text-[#e4e4e7] group-hover:text-[#FD366E] transition-colors">
                    mahakkaur22
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-[rgba(255,255,255,0.06)] mt-20">
        <div className="px-6 md:px-12 lg:px-24 xl:px-[135px] py-8">
          <div className="mb-6">
            <p className="text-[#acacaf] leading-relaxed mb-4 text-center md:text-left">
              This page was intentionally designed to be simple and clear. No
              unnecessary flourishes, no marketing speak just a straightforward
              articulation of how I think about developer advocacy.
            </p>
            <p className="text-sm text-[#acacaf]/60 text-center md:text-left">
              Built for the Appwrite Developer Advocate assignment · December
              2025
            </p>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.04)] pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#acacaf]">
                Made for the Appwrite Developer Advocate position
              </p>
              <p className="text-sm text-[#acacaf]">
                Hosted on{" "}
                <span style={{ color: "#FD366E" }}>Appwrite Sites</span>,
                naturally
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}