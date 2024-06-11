import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { ReactNode } from "react";

const IntegrationCard = ({
  title,
  description,
  active,
  icon,
}: {
  title: string;
  description: string;
  active: boolean;
  icon: ReactNode;
}) => {
  return (
    <Card className="flex flex-row items-center justify-between space-x-4">
      <CardHeader className="flex flex-row items-center space-x-4">
        {icon}
        <CardHeader className="p-0">
          <CardTitle className="flex flex-row items-center gap-x-2">
            {title}
            {active && (
              <Badge className="bg-emerald-50 hover:bg-emerald-50 flex flex-row shadow-none text-emerald-500 gap-x-1">
                Active
                <Check className="w-4 h-4 text-emerald-800" />
              </Badge>
            )}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </CardHeader>
      <CardContent className=" py-0">
        {!active && <Button>Connect</Button>}
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
