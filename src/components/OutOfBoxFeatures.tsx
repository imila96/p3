export default function OutOfBoxFeatures() {
  const features = [
    {
      icon: '🌍',
      title: 'Strug Solutions: Life no longer fits into one category',
      description: 'People are not just workers, buyers, sellers, or business owners. Most are all of these at once. Strug is built to reflect real life by allowing individuals and businesses to move fluidly across work, services, commerce, learning, mobility, and community without starting over each time.',
    },
    {
      icon: '💸',
      title: 'Trying to get ahead costs too much',
      description: 'Earning more often comes with higher fees, and saving money feels out of reach. Strug is built to reduce unnecessary costs so progress does not feel like a constant trade-off.',
    },
    {
      icon: '📈',
      title: 'Income has become unstable by design',
      description: 'Full-time work is harder to secure, and side income is often fragmented across platforms that take too much. Strug creates multiple, connected ways to earn, from on-demand work and freelancing to selling goods, offering services, and earning through everyday activity, so income is not tied to a single source.',
    },
    {
      icon: '💰',
      title: 'Costs keep rising while control disappears',
      description: 'People are paying more while having less say in pricing, fees, and outcomes. Strug restores balance by allowing pricing to be set openly in many verticals and by keeping platform fees capped and transparent, so value flows back to those doing the work.',
    },
    {
      icon: '🔗',
      title: 'Effort is scattered across disconnected systems',
      description: 'Work, spending, hiring, marketing, and visibility usually live on separate platforms that do not support each other. Strug connects these actions so progress in one area strengthens the others, instead of forcing people to rebuild momentum repeatedly.',
    },
    {
      icon: '🚪',
      title: 'Opportunity is uneven and often gated',
      description: 'Access to work, customers, or visibility is frequently reserved for those with scale, capital, or advertising budgets. Strug is designed to surface opportunity through participation and relevance, not paywalls or manipulation.',
    },
    {
      icon: '⚖️',
      title: 'Risk is placed on the wrong people',
      description: 'Individuals and small businesses are expected to commit time, money, or contracts before seeing any return. Strug lowers that risk by allowing people to engage when it makes sense, test opportunities, and step back without penalty.',
    },
    {
      icon: '🌐',
      title: 'Local problems are shared globally',
      description: 'While laws, currencies, and customs differ, the underlying struggle is the same everywhere. Strug operates as a global system that adapts locally, allowing people and businesses to participate across borders without losing relevance at home.',
    },
    {
      icon: '💎',
      title: 'Everyday life produces value that goes unrewarded',
      description: 'Most platforms extract value without giving anything back. Strug changes this through its lifetime code system, allowing individuals, businesses, and institutions to earn continuously from normal activity without charging others more.',
    },
    {
      icon: '👤',
      title: 'People are tired of feeling disposable',
      description: 'Many feel like they can be replaced, ignored, or pushed aside by systems that do not see them. Strug is built to recognize effort and presence, so people feel seen and valued again.',
    },
    {
      icon: '🎯',
      title: 'People want options, not instructions',
      description: 'Most systems tell people how to behave, what to charge, and when to act. Strug gives people room to decide for themselves without being forced into a single path.',
    },
  ];

  return (
    <section className="bg-navy-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-off-white mb-6">
            Built for real life, in every form
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-off-white mb-3">{feature.title}</h3>
              <p className="text-base text-text-off-white opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
