import { CategoryTabs } from "./CategoryTabs";

export async function RegisterByCategory() {
  const response = await fetch(
    `${process.env.API_URL}/category`,
    {
      cache: "force-cache",
    }
  );
  const categories = await response.json();

  return <CategoryTabs categories={categories} />;
}
