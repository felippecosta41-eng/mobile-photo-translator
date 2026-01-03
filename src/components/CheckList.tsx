import { XCircle } from "lucide-react";

interface CheckListProps {
  items: string[];
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <div className="section-card">
      <h3 className="font-semibold text-lg mb-4 text-foreground">Isso soa familiar?</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="check-item">
            <XCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/90 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;
