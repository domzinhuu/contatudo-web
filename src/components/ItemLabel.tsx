interface ItemLabelProps {
  label: string;
  value: string;
  className?: string;
}

export default function ItemLabel({ className, label, value }: ItemLabelProps) {
  return (
    <div className={className}>
      <span>{label}:</span>
      <span className="font-bold text-sm lg:text-lg">{value}</span>
    </div>
  );
}
