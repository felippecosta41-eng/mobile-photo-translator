import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-3 px-4 z-50">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-foreground">Pronta para começar?</p>
          <p className="text-xs text-muted-foreground">Faça o teste de 3 minutos hoje.</p>
        </div>
        <Button className="rounded-full px-5 gap-2">
          Faça o Teste Grátis
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StickyFooter;
