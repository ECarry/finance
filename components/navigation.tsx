"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";

import NavButton from "./nav-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 focus-visible:ring-offset-0 focus-visible:ring-transparent border-none outline-none focus:bg-white/30 transition text-white"
          >
            <HamburgerMenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map(({ href, label }) => (
              <Button
                key={href}
                onClick={() => onClick(href)}
                variant={pathname === href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map(({ href, label }) => (
        <NavButton
          key={href}
          href={href}
          label={label}
          isActive={pathname === href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
