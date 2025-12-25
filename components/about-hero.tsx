'use client';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-16">
      <div className="space-y-12">
        <div className="relative">
          <Image
            src="/about.jpeg"
            alt="Rupesh working in different environments"
            width={715}
            height={200}
            className="w-full h-48 object-cover rounded-lg user-select-none"
            priority
            draggable={false}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold font-bricolage text-foreground">
            About Me
          </h1>

          <div className="space-y-4 text-base leading-relaxed">
            <p className="text-foreground">
              Hey! I'm{' '}
              <a
                className="text-blue-600 font-medium"
                href="https://www.linkedin.com/in/rupesh-chaudhary-54a519261/"
              >
                Rupesh
              </a>
              . I build web applications that actually work and scale. Most of
              my time goes into crafting backend systems using{' '}
              <span className="text-blue-600 font-medium">Node.js</span>,{' '}
              <span className="text-blue-600 font-medium">Express</span>, and{' '}
              <span className="text-blue-600 font-medium">NestJS</span>, but I
              also enjoy working with{' '}
              <span className="text-blue-600 font-medium">Next.js</span> and
              <span className="text-blue-600 font-medium"> React</span> when I
              need to build something end-to-end.
            </p>

            <p className="text-foreground">
              My coding journey started pretty early. When I was in 12th grade
              (around 17-18), I did my first internship at{' '}
              <span className="font-medium">Youth IT</span>. That's where I got
              my hands dirty with real projects and learned how things actually
              work in the industry. Since then, I've worked at{' '}
              <span className="font-medium">MapMentors</span> building an LMS
              platform, and now I'm at{' '}
              <span className="font-medium">Digital Pathshala</span> here in
              <span className="font-medium"> Nepal</span>.
            </p>

            <p className="text-foreground">
              At Digital Pathshala, I work on both backend and frontend systems,
              collaborate with international CEOs, and build real-world apps like{' '}
              <span className="font-medium">Bhatbhate</span>—a ride-sharing app
              for Nepal.
            </p>

            <p className="text-foreground">
              I've been building applications using microservices architecture,
              which has been a game-changer for how I think about system design.
              Breaking down complex systems into smaller, independent services
              makes everything more maintainable and scalable. It's not just
              about writing code—it's about building systems that can grow.
            </p>

            <p className="text-foreground">
              I've also had the opportunity to work with amazing people at{' '}
              <span className="font-medium">Leapfrog Jury</span> and{' '}
              <span className="font-medium">Impress</span>. Working with CEOs and
              experienced leaders has taught me not just about code, but about
              building products that matter and thinking bigger picture.
            </p>

            <p className="text-foreground">
              When I'm not writing code, I'm usually exploring new tools,
              tinkering with side projects, or contributing to open source. I'm
              particularly interested in{' '}
              <span className="font-medium">microservices architecture</span>,
              <span className="font-medium"> API design</span>, and building
              systems that can handle real-world traffic. Always learning,
              always building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
