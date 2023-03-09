import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "ContaTudo Web",
  description: "By Maique Rosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="w-full lg:w-[1024px] lg:m-auto">{children}</div>
      </body>
    </html>
  );
}
