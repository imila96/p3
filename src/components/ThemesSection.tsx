import Image from 'next/image';

export default function ThemesSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/themes-editor.jpg"
            alt="A shot of the Index 101 theme editor, with an icon of a pen on top of it"
            fill
            className="object-cover"
          />
        </div>

        {/* Text side */}
        <div className="grid sm:place-content-center gap-y-4 p-8 md:p-10 lg:p-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Build even faster with no-code themes
            </h2>
            <div className="text-lg text-gray-700 opacity-80">
              Quickly launch a flash sale or test a new market with{' '}
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 hover:underline"
              >
                200+ pre-built themes
              </a>
              . Each comes with selling and conversion features built right in.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
