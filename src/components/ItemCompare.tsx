import { Minus, Plus, TrendingDown, TrendingUp } from "lucide-react";

interface ItemCompareProps {
  label: string;
  value: string;
  percentValue: string;
  isPositive: boolean;
  className?: string;
}

export default function ItemCompare({
  className,
  label,
  value,
  percentValue,
  isPositive,
}: ItemCompareProps) {
  return (
    <div className={className}>
      <span>{label}:</span>
      <div
        className={`flex items-center justify-end gap-4 ${
          isPositive ? "text-emerald-500" : "text-pink-600"
        }`}
      >
        <span className="font-bold text-sm lg:text-lg flex items-center">
          {value}
        </span>
        <span className="font-bold text-sm lg:text-lg flex justify-end items-center w-[64px]">
          {isPositive ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
          {percentValue}
        </span>
      </div>
    </div>
  );
}
