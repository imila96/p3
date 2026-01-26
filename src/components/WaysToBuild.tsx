'use client';

export default function WaysToBuild() {
  const buildOptions = [
    {
      number: "1",
      title: "Individual Solutions",
      description: "We have built ways to earn, ways to get jobs or pick up shifts, ways to get affordable services at your price, and even ways to access other services that others charge too much for."
    },
    {
      number: "2",
      title: "Business Solutions",
      description: "We have built ways for businesses to reach customers, operate efficiently, and grow without being limited by size, budget, or complexity."
    }
  ];

  return (
    <section className="grid grid-cols-full pb-0 pt-0 gap-y-0 bg-[#F0F3F7] -mt-24">
      <div className="container mx-auto max-w-[1440px] px-4 grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 md:pt-16">
        <div className="md:col-span-10 lg:col-span-8">
          <div className="text-left relative">
            <h2 className="text-sm tracking-tight font-bold uppercase leading-none pb-2 text-[#4A5568]">
              Changing that
            </h2>
            <p className="text-4xl md:text-5xl font-bold mb-4 text-[#1A3A60]">
              We are building solutions that matter to you and only you.
            </p>
            <div className="text-lg md:text-xl text-[#4A5568] pt-2">
              Whether you are a business or an individual, we understand what you are going through. That is why we are building solutions around you to make your struggle less painful.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buildOptions.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#3C67A6] flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-white">{option.number}</span>
                </div>
                <a href="#" className="group flex items-center gap-2 hover:underline flex-1">
                  <span className="text-2xl md:text-3xl font-bold text-[#1A3A60]">
                    {option.title}
                  </span>
                  <svg 
                    fill="none" 
                    viewBox="0 0 20 20" 
                    height="20" 
                    width="20" 
                    className="rotate-180 shrink-0 text-[#4A5568]"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="m4 13 6-6 6 6"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
