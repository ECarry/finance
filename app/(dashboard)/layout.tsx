import Header from "@/components/header";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default DashboardLayout;
