import LayoutWrapper from "@/components/layout-wrapper"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiGooglefonts,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPrisma
} from "react-icons/si"
import { BiSolidColor } from "react-icons/bi"
import { PointerHighlight } from "@/components/ui/pointer-highlight"

export default function ColophonPage() {
  return (
    <LayoutWrapper>
      <section className="py-16">
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground font-bricolage">Colophon</h1>
            <p className="text-muted-foreground">How this site is built and what powers it.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Core Stack</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <SiNextdotjs className="text-foreground" />
                  <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Next.js 16 (App Router)</a>
                </li>
                <li className="flex items-center gap-2">
                  <SiReact className="text-blue-500" />
                  <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">React 19</a>
                </li>
                <li className="flex items-center gap-2">
                  <SiTypescript className="text-blue-600" />
                  <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">TypeScript</a>
                </li>
                <li className="flex items-center gap-2">
                  <SiTailwindcss className="text-sky-500" />
                  <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Tailwind CSS 4</a>
                </li>
                <li className="flex items-center gap-2">
                  <BiSolidColor className="text-rose-500" />
                  <span>CSS variables (OKLCH)</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiNodedotjs className="text-green-600" />
                  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Node.js</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">UI Libraries</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Radix UI</a> (Accordion, Dialog, Dropdown, etc.)
                </li>
                <li>
                  <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">shadcn/ui</a> components
                </li>
                <li>
                  <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Lucide React</a> (Icons)
                </li>
                <li>
                  <a href="https://react-icons.github.io/react-icons" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">React Icons</a>
                </li>
                <li>
                  <a href="https://motion.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Motion</a> (Framer Motion)
                </li>
                <li>
                  <a href="https://vaul.emilkowal.ski" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Vaul</a> (Drawer component)
                </li>
                <li>
                  <a href="https://sonner.emilkowal.ski" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Sonner</a> (Toast notifications)
                </li>
                <li>
                  <a href="https://cmdk.paco.me" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">CMDK</a> (Command menu)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Forms & Validation</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://react-hook-form.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">React Hook Form</a>
                </li>
                <li>
                  <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Zod</a> (Schema validation)
                </li>
                <li>
                  <a href="https://github.com/react-hook-form/resolvers" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">@hookform/resolvers</a>
                </li>
                <li>
                  <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Web3Forms</a> (Contact form)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Data & Charts</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <SiMongodb className="text-green-600" />
                  <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">MongoDB</a>
                </li>
                <li className="flex items-center gap-2">
                  <SiPrisma className="text-blue-600" />
                  <a href="https://www.prisma.io" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Prisma ORM</a>
                </li>
                <li>
                  <a href="https://recharts.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Recharts</a> (Data visualization)
                </li>
                <li>
                  <a href="https://date-fns.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Date-fns</a> (Date utilities)
                </li>
              </ul>
            </div>

            <div className="space-y-3 md:col-span-2">
              <h2 className="text-xl font-semibold text-foreground">Typography</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-4 font-semibold text-foreground">Font</th>
                      <th className="text-left py-2 px-4 font-semibold text-foreground">Usage</th>
                      <th className="text-left py-2 px-4 font-semibold text-foreground">Source</th>
                      <th className="text-left py-2 px-4 font-semibold text-foreground">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground">Bricolage Grotesque</td>
                      <td className="py-3 px-4 text-muted-foreground">Headings</td>
                      <td className="py-3 px-4">
                        <a href="https://fonts.google.com/specimen/Bricolage+Grotesque" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Google Fonts</a>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bricolage text-lg text-foreground">Sphinx of black quartz</div>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground">Instrument Sans</td>
                      <td className="py-3 px-4 text-muted-foreground">Body text</td>
                      <td className="py-3 px-4">
                        <a href="https://fonts.google.com/specimen/Instrument+Sans" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Google Fonts</a>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-foreground">The quick brown fox jumps</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground">Bonbance Bold Condensed</td>
                      <td className="py-3 px-4 text-muted-foreground">Custom font</td>
                      <td className="py-3 px-4 text-muted-foreground">Local file</td>
                      <td className="py-3 px-4">
                        <div className="text-foreground" style={{ fontFamily: 'Bonbance Bold Condensed' }}>Custom Typography</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Utilities</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/lukeed/clsx" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">clsx</a> (Conditional classes)
                </li>
                <li>
                  <a href="https://github.com/dcastil/tailwind-merge" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">tailwind-merge</a> (Tailwind class merging)
                </li>
                <li>
                  <a href="https://cva.style" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">class-variance-authority</a> (CVA)
                </li>
                <li>
                  <a href="https://github.com/pacocoursey/next-themes" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">next-themes</a> (Theme switching)
                </li>
                <li>
                  <a href="https://www.embla-carousel.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Embla Carousel</a>
                </li>
                <li>
                  <a href="https://react-resizable-panels.vercel.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">React Resizable Panels</a>
                </li>
                <li>
                  <a href="https://input-otp.vercel.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Input OTP</a>
                </li>
                <li>
                  <a href="https://react-day-picker.js.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">React Day Picker</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Deployment & Analytics</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <SiVercel className="text-foreground" />
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Vercel</a> (Hosting)
                </li>
                <li className="flex items-center gap-2">
                  <SiVercel className="text-foreground" />
                  <a href="https://vercel.com/analytics" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Vercel Analytics</a>
                </li>
                <li>
                  <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Git</a> & {" "}
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">GitHub</a> (Version control)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Custom Components</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Custom Navbar with mobile menu</li>
                <li>Polaroid draggable photo interaction</li>
                <li>Animated aura gradient background</li>
                <li>Theme toggle with sound effects</li>
                <li>GitHub contribution graph</li>
                <li>Tilt card animations</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Inspiration & Credits</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  Polaroid interaction inspired by {" "}
                  <a href="https://marcbouchenoire.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Marc Bouchenoire</a>
                </li>
                <li>
                  Animated aurora gradient inspired by {" "}
                  <a href="https://marcbouchenoire.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Marc Bouchenoire</a>
                </li>
                <li>
                  GitHub contribution graph and tilt card from {" "}
                  <a href="https://www.popkit.dev/docs/overview" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Popkit</a>
                </li>
                <li>
                  Theme toggle with sound by {" "}
                  <a href="https://manishtamang.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Manish Tamang</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
