import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-md mx-auto flex items-center justify-between h-14 px-4">
        <span className="text-lg font-semibold text-foreground">MellowFlow</span>
        <Button size="sm" className="rounded-full px-4">
          Começar o Teste &gt;
        </Button>
      </div>
    </header>
  );
};

export default Header;
