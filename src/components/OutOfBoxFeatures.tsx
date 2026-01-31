'use client';

import Image from "next/image";
import { useState } from "react";

const FALLBACK_EMOJIS = ['🌍', '💸', '📈', '💰', '🔗', '🚪', '⚖️', '🌐', '💎', '👤', '🎯'];

export default function OutOfBoxFeatures() {
  const [failedIcons, setFailedIcons] = useState<Set<number>>(new Set());

  const features = [
    { iconSrc: "/icons/icon-1.svg", title: 'Strug Solutions: Life no longer fits into one category', description: 'People are not just workers, buyers, sellers, or business owners. Most are all of these at once. Strug is built to reflect real life by allowing individuals and businesses to move fluidly across work, services, commerce, learning, mobility, and community without starting over each time.' },
    { iconSrc: "/icons/icon-2.svg", title: 'Trying to get ahead costs too much', description: 'Earning more often comes with higher fees, and saving money feels out of reach. Strug is built to reduce unnecessary costs so progress does not feel like a constant trade-off.' },
    { iconSrc: "/icons/icon-3.svg", title: 'Income has become unstable by design', description: 'Full-time work is harder to secure, and side income is often fragmented across platforms that take too much. Strug creates multiple, connected ways to earn, from on-demand work and freelancing to selling goods, offering services, and earning through everyday activity, so income is not tied to a single source.' },
    { iconSrc: "/icons/icon-4.svg", title: 'Costs keep rising while control disappears', description: 'People are paying more while having less say in pricing, fees, and outcomes. Strug restores balance by allowing pricing to be set openly in many verticals and by keeping platform fees capped and transparent, so value flows back to those doing the work.' },
    { iconSrc: "/icons/icon-5.svg", title: 'Effort is scattered across disconnected systems', description: 'Work, spending, hiring, marketing, and visibility usually live on separate platforms that do not support each other. Strug connects these actions so progress in one area strengthens the others, instead of forcing people to rebuild momentum repeatedly.' },
    { iconSrc: "/icons/icon-6.svg", title: 'Opportunity is uneven and often gated', description: 'Access to work, customers, or visibility is frequently reserved for those with scale, capital, or advertising budgets. Strug is designed to surface opportunity through participation and relevance, not paywalls or manipulation.' },
    { iconSrc: "/icons/icon-7.svg", title: 'Risk is placed on the wrong people', description: 'Individuals and small businesses are expected to commit time, money, or contracts before seeing any return. Strug lowers that risk by allowing people to engage when it makes sense, test opportunities, and step back without penalty.' },
    { iconSrc: "/icons/icon-8.svg", title: 'Local problems are shared globally', description: 'While laws, currencies, and customs differ, the underlying struggle is the same everywhere. Strug operates as a global system that adapts locally, allowing people and businesses to participate across borders without losing relevance at home.' },
    { iconSrc: "/icons/icon-9.svg", title: 'Everyday life produces value that goes unrewarded', description: 'Most platforms extract value without giving anything back. Strug changes this through its lifetime code system, allowing individuals, businesses, and institutions to earn continuously from normal activity without charging others more.' },
    { iconSrc: "/icons/icon-10.svg", title: 'People are tired of feeling disposable', description: 'Many feel like they can be replaced, ignored, or pushed aside by systems that do not see them. Strug is built to recognize effort and presence, so people feel seen and valued again.' },
    { iconSrc: "/icons/icon-11.svg", title: 'People want options, not instructions', description: 'Most systems tell people how to behave, what to charge, and when to act. Strug gives people room to decide for themselves without being forced into a single path.' },
  ];

  return (
    <section className="bg-[#ffffff] pt-6 md:pt-10 pb-12 md:pb-16">
      <div className="site-content">
        {/* Header — 13th ss: heading #111827, font-weight 700 */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-normal text-[#111827]">
            Built for real life, in every form
          </h2>
        </div>

        {/* Features Grid — pure white section, no borders/shadows on items; icon + text only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 md:gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              {/* Icon: dark blue rounded square, white symbol (or fallback emoji) */}
              <div className="w-12 h-12 mb-4 shrink-0 relative flex items-center justify-center rounded-xl bg-[#212F4B] overflow-hidden">
                {failedIcons.has(index) ? (
                  <span className="text-2xl" aria-hidden>{FALLBACK_EMOJIS[index]}</span>
                ) : (
                  <Image
                    src={feature.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain w-full h-full p-1"
                    unoptimized
                    onError={() => setFailedIcons((prev) => new Set(prev).add(index))}
                  />
                )}
              </div>
              <h3 className="text-xl font-normal text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
