'use client';

export default function WaysToBuild() {
  const buildOptions = [
    {
      number: "1",
      title: "Build with custom templates",
      description: "Access a fully extensible and managed architecture that lets you quickly build a complex custom storefront with the full power of Index 101—all with zero infrastructure to maintain."
    },
    {
      number: "2",
      title: "Build with our React framework",
      description: "Our headless stack makes it easy to build immersive, fast storefronts that scale with React-based components and our global hosting solution."
    },
    {
      number: "3",
      title: "Build headless",
      description: "Get the flexibility your business needs by using Index 101's headless stack or bringing your own framework of choice."
    }
  ];

  return (
    <section className="grid grid-cols-full pb-0 text-white pt-8 gap-y-0 bg-[#071C52]">
      <div className="container mx-auto max-w-[1440px] px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-10 lg:col-span-8">
          <div className="text-left relative">
            <h2 className="text-sm tracking-tight font-bold uppercase leading-none pb-2 opacity-80">
              Ways to build
            </h2>
            <p className="text-4xl md:text-5xl font-bold mb-4">
              Choose how you want to build
            </p>
            <div className="text-lg md:text-xl opacity-80 pt-2">
              Whether you need a completely custom front-end and fully managed solution, 
              or would rather bring your own stack, Index 101 gives you options for how you build.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 mt-12">
        <ol className="space-y-8">
          {buildOptions.map((option, index) => (
            <li key={index} className="border-t border-white/20 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-6xl md:text-7xl font-bold opacity-20 min-w-[80px]">
                  {option.number}
                </span>
                <div className="flex-1">
                  <a href="#" className="group flex items-center gap-4 mb-4 hover:underline">
                    <span className="text-2xl md:text-3xl font-bold">
                      {option.title}
                    </span>
                    <svg 
                      fill="none" 
                      viewBox="0 0 20 20" 
                      height="24" 
                      width="24" 
                      className="rotate-180 shrink-0"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m4 13 6-6 6 6"
                      />
                    </svg>
                  </a>
                  <p className="text-base md:text-lg opacity-80">
                    {option.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
