export default function HeadlessSection() {
  return (
    <section className="bg-[#F0F3F7] py-16 md:py-24" id="content-1">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A60] mb-6">
            Businesses are doing everything right and still falling behind
          </h2>
          <p className="text-lg text-[#4A5568]">
            Rising costs, fragmented platforms, and limited reach make it harder than ever to grow. Strug changes this by giving businesses direct access to demand across one unified system, without forcing new tools, contracts, or ways of operating.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1: Growth is no longer linear */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Video Section - Above heading */}
            <div className="relative min-h-[200px] mb-6 rounded-lg overflow-hidden bg-white shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/videos/headless-left-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h3 className="text-2xl font-bold text-[#1A3A60] mb-4">Growth is no longer linear</h3>
            <p className="text-base text-[#4A5568] mb-6">
              Businesses can do everything right and still see diminishing returns. Strug changes this by letting businesses participate in multiple types of demand through one presence, allowing growth to come from opportunity rather than constant reinvestment.
            </p>

            {/* Sub cards */}
            <div className="space-y-4">
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Demand is unpredictable and hard to plan for</h4>
                <p className="text-sm text-[#4A5568]">
                  Seasonality, short notice needs, and shifting consumer behavior make forecasting difficult. Strug allows businesses to respond to demand as it appears, instead of locking into rigid schedules, inventory, or commitments.
                </p>
              </div>
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Expansion usually means risk</h4>
                <p className="text-sm text-[#4A5568]">
                  Entering new categories or markets often requires upfront spend and operational change. Strug allows businesses to participate without restructuring, testing new opportunities without putting the core business at risk.
                </p>
              </div>
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Scale usually means giving something up</h4>
                <p className="text-sm text-[#4A5568]">
                  Growth often comes at the cost of margins, control, or flexibility. Strug allows small businesses to take on more work, when it makes sense, without changing how the business already runs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Visibility without advertising dependency */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Video Section - Above heading */}
            <div className="relative min-h-[200px] mb-6 rounded-lg overflow-hidden bg-white shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/videos/headless-right-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h3 className="text-2xl font-bold text-[#1A3A60] mb-4">Visibility without advertising dependency</h3>
            <p className="text-base text-[#4A5568] mb-6">
              Most businesses are forced to pay repeatedly just to be seen. Strug changes this by placing businesses directly into active customer demand across multiple verticals, allowing visibility to come from participation rather than ongoing ad spend.
            </p>

            {/* Sub cards */}
            <div className="space-y-4">
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Cash flow breaks businesses, not lack of demand</h4>
                <p className="text-sm text-[#4A5568]">
                  Relying on a single platform, location, or audience limits growth. Strug gives businesses access to customers across services, on-demand work, bookings, and commerce through one presence, expanding reach without multiplying tools or effort.
                </p>
              </div>
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Test</h4>
                <p className="text-sm text-[#4A5568]">
                  Many businesses do the work but wait weeks or months to get paid, creating pressure even when revenue exists. Strug shortens that gap by structuring transactions and payouts directly through the platform, helping businesses turn completed work into usable cash faster.
                </p>
              </div>
              <div className="p-4 bg-[#F0F3F7] rounded-lg">
                <h4 className="font-bold text-[#1A3A60] mb-2">Marketing that rewards activity, not spend</h4>
                <p className="text-sm text-[#4A5568]">
                  Traditional marketing favors the biggest budgets, not the best businesses. Strug ties exposure to real engagement and transactions, allowing businesses to grow through performance, participation, and customer interaction rather than paid promotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
