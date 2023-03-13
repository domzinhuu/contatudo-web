import Link from "next/link";

export default async function Home() {
  return (
    <div className="text-center flex flex-col gap-10">
      <h1 className="text-3xl">Imagine uma linda homepage aqui!</h1>
      <Link href="/dashboard">Vai para dashboard</Link>
    </div>
  );
}
