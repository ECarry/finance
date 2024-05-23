"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import Chart, { ChartSkeleton } from "./chart";
import SpendingPie, { SpendingPieSkeleton } from "./spending-pie";

const DataCharts = () => {
  const { data, isLoading } = useGetSummary();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        {isLoading ? <ChartSkeleton /> : <Chart data={data?.days} />}
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        {isLoading ? (
          <SpendingPieSkeleton />
        ) : (
          <SpendingPie data={data?.categories} />
        )}
      </div>
    </div>
  );
};

export default DataCharts;
