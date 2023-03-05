"use client";

import dynamic from "next/dynamic";
import MenuMobile from "./MenuMobile";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Home, List, LogOut, PackagePlus } from "lucide-react";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

export default function Header() {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <div className="h-14 bg-white pl-4 flex items-center shadow-sm shadow-purple-400  w-full">
          <MenuMobile />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <div className="flex justify-between items-center h-14 bg-white  border-purple-700 pl-4 flex items-center shadow-sm shadow-purple-400  w-full">
          <h1 className="font-bold text-3xl text-teal-500">Conta tudo</h1>
          <NavigationMenu.Root className="w-3/5">
            <NavigationMenu.List className="flex items-center justify-end gap-12 px-4">
              <NavigationMenu.Item className="box-border flex justify-center items-center px-2 py-1 text-mauve11 transition-all rounded-lg hover:bg-teal-700 hover:text-white active:bg-teal-900">
                <NavigationMenu.Trigger className="flex gap-2 items-center">
                  <Home size={16} />
                  <span>Inicio</span>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="box-border flex justify-center items-center px-2 py-1 text-mauve11 transition-all rounded-lg hover:bg-teal-700 hover:text-white active:bg-teal-900">
                <NavigationMenu.Trigger className="flex gap-2 items-center">
                  <PackagePlus size={16} />
                  <span>Novo Registro</span>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="box-border flex justify-center items-center px-2 py-1 text-mauve11 transition-all rounded-lg hover:bg-teal-700 hover:text-white active:bg-teal-900">
                <NavigationMenu.Trigger className="flex gap-2 items-center">
                  <List size={16} />
                  <span>Categorias</span>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="box-border flex justify-center items-center px-2 py-1 text-mauve11 transition-all rounded-lg hover:bg-teal-700 hover:text-white active:bg-teal-900">
                <NavigationMenu.Trigger className="flex gap-2 items-center">
                  <LogOut size={16} />
                  <span>Sair</span>
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            {/* NavigationMenu.Content will be rendered here when active */}
            <NavigationMenu.Viewport />
          </NavigationMenu.Root>
        </div>
      </MediaQuery>
    </>
  );
}
