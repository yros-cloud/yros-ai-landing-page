import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-yros-dark-blue/80 backdrop-blur supports-[backdrop-filter]:bg-yros-dark-blue/60">
    <div className="container flex h-16 items-center">
      <div className="mr-4 flex">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <img
            src="/yros-logo.png" // ou .png/.ico conforme o seu caso
            alt="YROS Logo"
            className="h-32 w-auto"
          />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-2">
        <nav className="flex items-center">
          <Button variant="ghost" className="text-yros-light-grey hover:text-yros-white hover:bg-yros-grey/20">Login</Button>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
