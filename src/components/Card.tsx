import { title } from "process";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  colorClass?: string;
  title?: string;
}
export default function Card({ title, className, colorClass, children }: CardProps) {
  return (
    <div className={`rounded-md shadow-sm ${className}`}>
      {title ? (
        <div
          className={`h-[48px] flex items-center box-border p-4 rounded-t-md ${colorClass}`}
        >
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
      ) : null}

      <div className="p-4">{children}</div>
    </div>
  );
}
