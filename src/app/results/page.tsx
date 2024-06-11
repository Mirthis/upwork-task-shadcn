import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Overview } from "@/app/(app)/examples/dashboard/components/overview";
// import { RecentSales } from "@/app/(app)/examples/dashboard/components/recent-sales";
import { CalendarDateRangePicker } from "@/components/ui/date--range-picker";
import { OverviewChart } from "@/components/results/OverviewChart";
import DataTable from "@/components/results/DataTable";
import KPICard from "@/components/results/KPICard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview" asChild>
                <CalendarDateRangePicker className="p-0" />
              </TabsTrigger>
              <TabsTrigger value="28days" disabled>
                28 days
              </TabsTrigger>
              <TabsTrigger value="14days" disabled>
                14 days
              </TabsTrigger>
              <TabsTrigger value="7days" disabled>
                7 days
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KPICard
                  name="Total Revenue"
                  value="$45,231.89"
                  text="+20.1% from last month"
                  icon={
                    <DollarSign className="text-muted-foreground h-5 w-5" />
                  }
                />
                <KPICard
                  name="Subscriptions"
                  value="+2350"
                  text="+180.1% from last month"
                  icon={<Users className="text-muted-foreground h-5 w-5" />}
                />
                <KPICard
                  name="Sales"
                  value="+12,234"
                  text="+19% from last month"
                  icon={
                    <CreditCard className="text-muted-foreground h-5 w-5" />
                  }
                />
                <KPICard
                  name="Active Now"
                  value="+573"
                  text="+201 since last hour"
                  icon={<Activity className="text-muted-foreground h-5 w-5" />}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <OverviewChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardContent>
                    <DataTable />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
