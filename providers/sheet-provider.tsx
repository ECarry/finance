"use client";

import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useEffect, useState } from "react";

const SheetProvider = () => {
  // const isMounted = useMountedState();

  // if (!isMounted) return null;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
    </>
  );
};

export default SheetProvider;
