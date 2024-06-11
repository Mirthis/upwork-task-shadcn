import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Icon } from "lucide-react";

const KPICard = ({
  name,
  value,
  text,
  icon,
}: {
  name: string;
  value: string;
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default KPICard;
