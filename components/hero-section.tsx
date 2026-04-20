import { Button } from '@/components/ui/button';
import { Polaroid } from '@/components/polaroid/Polaroid';
import Link from 'next/link';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { Tooltip } from '@/components/ui/tooltip-card';

export default function HeroSection() {
  return (
    <section className="py-2 mt-6">
      <div className="space-y-4">
        <div className="space-y-4 font-bricolage">
          <h1 className="text-4xl font-bold text-foreground">Hello there!</h1>
          <div className="flex items-center gap-3 text-4xl font-bold">
            <span className="text-foreground">My name is</span>
            <div className="inline-flex items-center -ml-30 mr-43">
              <Polaroid className="w-[300px] h-[300px]" />
            </div>
            <EncryptedText
              text="Rupesh Chaudhary"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-white text-black"
              revealDelayMs={50}
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xl text-foreground font-medium">
            Full Stack Developer | Building Scalable SaaS Platforms
          </p>
          <p className="text-xl text-foreground">
            at{' '}
            <Tooltip content={<FloSoftwaresCard />}>
              <button
                type="button"
                className="font-medium underline decoration-dashed underline-offset-4 decoration-neutral-400 transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-sm px-0.5 active:text-foreground/80"
              >
                FloSoftwares
              </button>
            </Tooltip>
          </p>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-[600px]">
          I specialize in designing and delivering scalable software products,
          including white-label SaaS platforms used by high-growth clients.
          Passionate about building reliable, user-focused solutions that solve
          real-world problems.
        </p>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            Tech stack: <span className="text-foreground">Node.js</span> ·{' '}
            <span className="text-foreground">Bun</span> ·{' '}
            <span className="text-foreground">Express</span> ·{' '}
            <span className="text-foreground">Next.js</span> ·{' '}
            <span className="text-foreground">React</span> ·{' '}
            <span className="text-foreground">NestJS</span> ·{' '}
            <span className="text-foreground">Elysia.js</span> ·{' '}
            <span className="text-foreground">TypeScript</span> ·{' '}
            <span className="text-foreground">Docker</span> ·{' '}
            <span className="text-foreground">CI/CD</span> ·{' '}
            <span className="text-foreground">Linux</span>
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href="/contact">Book a free call</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const DigitalPathshalaCard = () => {
  return (
    <div>
      <img
        src="/logo/digital-pathsala.png"
        alt="Digital Pathshala"
        className="aspect-square w-full rounded-sm"
      />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">Digital Pathshala</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Nepal's Leading Technology Powerhouse Established in 2023, Digital
          Pathshala Nepal has been revolutionizing Nepal's digital landscape
          through comprehensive IT education, innovative software solutions, and
          government partnerships, making technology accessible to everyone
          across the nation.
        </p>
      </div>
    </div>
  );
};

const FloSoftwaresCard = () => {
  return (
    <div>
      <img
        src="/flosoft.jpg"
        alt="FloSoftwares"
        className="aspect-square w-full rounded-sm object-cover"
      />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">FloSoftwares</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Built and scaled a white-label SaaS product as a core business
          offering. Delivered with Next.js, React Native, and NestJS, with
          adoption among major LMS clients in Nepal.
        </p>
      </div>
    </div>
  );
};
