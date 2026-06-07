import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col">
      <div className="container mx-auto flex items-center">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full py-12 xl:py-16 gap-12 xl:gap-0">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
              Backend Developer
            </span>
            <h1 className="h1 mt-3 mb-6">
              Hi, I&apos;m <span className="text-accent">Giang Le</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed mb-9 max-w-[480px] mx-auto xl:mx-0">
              Senior backend engineer with 6+ years building scalable
              microservices, cloud-native infrastructure, and agentic AI systems
              in Golang.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a
                href="/assets/Le_Thanh_Giang_cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-10 h-10 border border-zinc-800 rounded flex items-center justify-center text-zinc-400 text-base hover:border-accent hover:text-accent transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
