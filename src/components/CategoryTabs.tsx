"use client";
import * as Tabs from "@radix-ui/react-tabs";

interface CategoryTabsProps {
  categories: any[];
}
export function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <Tabs.Root
      className="mt-8 box-border shadow-sm shadow-purple-300 rounded-t-md"
      defaultValue={categories[0].name}
    >
      <Tabs.List className="bg-teal-500 w-full text-white overflow-x-auto scrollbar-hide flex justify-start items-center rounded-t-md border-b border-mauve8">
        {categories?.map((category: any) => (
          <Tabs.Trigger
            key={category._id}
            className="p-4 text-center box-border data-[state=active]:font-bold  data-[state=active]:border-b-4 data-[state=active]:border-purple-700"
            value={category.name}
          >
            {category.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {categories?.map((category: any) => (
        <Tabs.Content key={category._id} className="p-4" value={category.name}>
          <h1>{category.description}</h1>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
