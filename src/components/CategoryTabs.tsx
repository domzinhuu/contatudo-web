/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const API_URL = "https://contatudo-api.onrender.com/api/v1/register/account";
interface CategoryTabsProps {
  categories: any[];
  defaultTab: string;
}

export function CategoryTabs({ categories, defaultTab }: CategoryTabsProps) {
  const [registers, setRegisters] = useState([]);
  const getCategoryId = (catName: string): string => {
    const catFound = categories.find((cat: any) => cat.name === catName);
    return catFound._id;
  };

  const getRegisterByCategory = async (catName: string) => {
    const categoryId = getCategoryId(catName);

    const registerResponse = await fetch(
      `${API_URL}/${"6403dbbee21a5e5629393ef7"}/category/${categoryId}`,
      {
        next: { revalidate: 60 * 5 },
      }
    );
    const regs = await registerResponse.json();
    setRegisters(regs);
  };

  useEffect(() => {
    console.log("entrou");
    getRegisterByCategory(defaultTab);
  }, []);

  return (
    <Tabs.Root
      onValueChange={getRegisterByCategory}
      className="mt-8 box-border shadow-sm shadow-purple-300 rounded-t-md"
      defaultValue={defaultTab}
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
          {registers.map((reg: any) => (
            <ItemDetail
              key={reg._id}
              title={reg.buyed}
              description={reg.spendingPlace}
              destak={reg.createdAt}
              value={reg.value}
            />
          ))}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
