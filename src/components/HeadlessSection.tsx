export default function HeadlessSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-transparent py-16 md:py-24" id="content-1">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Build headless for ultimate control
          </h2>
          <p className="text-lg text-gray-700 opacity-80">
            Get the store and flexibility your business needs. Choose your own stack and use the tech you already love with no vendor lock-in, or launch in half the time using Index 101 headless stack.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1: Choose your own stack */}
          <div className="rounded-2xl p-8 bg-white shadow-md border border-black/10">
            <h3 className="text-2xl font-bold text-black mb-4">Choose your own stack</h3>
            <p className="text-base text-gray-700 opacity-80 mb-6">
              Use Index 101 Storefront API with your own framework and language, manage operations in Index 101 backend, or use your API-based ERP, CMS, and 3P integrations.
            </p>

            {/* Sub cards */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-black mb-2">Flexible architecture</h4>
                <p className="text-sm text-gray-600">
                  Build with React, Vue, Angular, or any framework you prefer while leveraging Index 101 powerful commerce engine.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-black mb-2">API-first approach</h4>
                <p className="text-sm text-gray-600">
                  Access comprehensive GraphQL and REST APIs to create custom shopping experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Use Index 101 headless stack */}
          <div className="rounded-2xl p-8 bg-white shadow-md border border-black/10">
            <h3 className="text-2xl font-bold text-black mb-4">Use Index 101 headless stack</h3>
            <p className="text-base text-gray-700 opacity-80 mb-6">
              Launch faster with our purpose-built React framework, and our global hosting solution optimized for commerce.
            </p>

            {/* Sub cards */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-black mb-2">React framework</h4>
                <p className="text-sm text-gray-600">
                  Pre-built commerce components, optimized data fetching, and best practices built right in.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-black mb-2">Global hosting</h4>
                <p className="text-sm text-gray-600">
                  Deploy your store at no extra cost. Or use your preferred hosting provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
