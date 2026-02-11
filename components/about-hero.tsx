'use client';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-16">
      <div className="space-y-12">
        <div className="relative">
          <Image
            src="/aboutme.jpeg"
            alt="Rupesh Chaudhary"
            width={800}
            height={1000}
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/20 grayscale hover:grayscale-0 transition-all duration-500"
            priority
            draggable={false}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold font-bricolage text-foreground">
            About Me
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Hey! I'm{' '}
              <a
                className="text-foreground font-medium underline decoration-blue-500/30 underline-offset-4 hover:decoration-blue-500 transition-all"
                href="https://www.linkedin.com/in/rupesh-chaudhary-54a519261/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rupesh
              </a>
              . I build scalable web applications that solve real-world problems.
              My expertise revolves around backend systems with{' '}
              <span className="text-foreground font-medium">Node.js</span>,{' '}
              <span className="text-foreground font-medium">NestJS</span>, and{' '}
              <span className="text-foreground font-medium">PostgreSQL</span>,
              while leveraging <span className="text-foreground font-medium">Next.js</span> and
              <span className="text-foreground font-medium"> React Native</span> for seamless frontend experiences.
            </p>

            <p>
              My journey began early at <span className="text-foreground font-medium">Youth IT</span> and
              <span className="text-foreground font-medium"> MapMentors</span>, where I learned the ropes of professional development.
              Currently, I'm driving engineering efforts at <span className="text-foreground font-medium">Digital Pathshala</span> and
              <span className="text-foreground font-medium"> FloSoftwares</span>, building complex platforms like
              <span className="text-foreground font-medium"> Bhatbhate</span> (a ride-sharing app) and architecting robust microservices.
            </p>

            <p>
              Beyond the code, I'm passionate about <span className="text-foreground font-medium">system design</span>,
              cloud architecture, and open source. I thrive on breaking down complex requirements into efficient, maintainable software.
              Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
