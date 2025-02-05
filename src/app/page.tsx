import Header from "./components/Header"; // Import Header component
import IntroSection from "./components/IntroSection"; // Import IntroSection component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div
        style={{
          background: "linear-gradient(to right, black, grey)",
          color: "#B8860B",
        }}
        className="py-2"
      >
        <div className="container mx-auto flex items-center justify-center px-4">
          <p className="text-sm md:text-base flex items-center space-x-2 text-center">
            <span>
              Start your digital journey now and elevate your online presence
              to new heights!
            </span>
            <a
              href="/contact"
              style={{
                color: "white",
                borderBottom: "2px solid #B8860B",
              }}
              className="font-semibold hover:text-[#B8860B] pb-1"
            >
              Let&rsquo;s Connect!
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Intro Section */}
      <IntroSection />
    </div>
  );
}
