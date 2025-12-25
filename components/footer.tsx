export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-[920px] mx-auto px-4 py-8 mt-16 font-bricolage">
      <div className="border-t border-border pt-8">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div className="flex w-full items-center justify-between">
            <p>© {currentYear} Rupesh Chaudhary. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="mailto:chyrupesh828@gmail.com" className="hover:text-foreground transition-colors">
                Email
              </a>
              <a href="https://www.linkedin.com/in/rupesh-chaudhary-54a519261/" className="hover:text-foreground transition-colors">
                Linkedin
              </a>
              <a href="https://github.com/Rupe88" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
