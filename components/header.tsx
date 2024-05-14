import React from "react";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { UpdateIcon } from "@radix-ui/react-icons";
import WelcomeMsg from "./welecome-msg";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <UpdateIcon className="animate-spin text-slate-400 size-4" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};

export default Header;
