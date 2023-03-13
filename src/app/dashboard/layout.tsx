"use client";

import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  console.log(path, "bolinha");
  return (
    <div className="relative">
      <Header />
      <div className="w-full lg:w-[1024px] lg:m-auto h-[100svh] sm:h-auto pt-[2rem]">
        {children}
      </div>
    </div>
  );
}
