import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExcelIcon from "@/components/ui/icons/excel";
import GoogleSheetIcon from "@/components/ui/icons/google-sheet";
import { Input } from "@/components/ui/input";
import { Search, Mail, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import IntegrationCard from "@/components/connect/IntegrationCard";
import { MailIcon } from "@/components/ui/icons/mail";

const ConnectPage = () => {
  return (
    <div className="space-y-8">
      <div className="relative flex flex-row items-center justify-center">
        <Search className="absolute top-2 left-2 text-muted-foreground" />
        <Input placeholder="Search integrations" className="pl-10" />
      </div>
      <div className="space-y-4">
        <IntegrationCard
          title="Email"
          description="Receive an email every time a user submit their answer."
          icon={<MailIcon className="w-14 h-14" />}
          active={true}
        />
        <IntegrationCard
          title="Google Sheets"
          description="Send your data straight to Google Sheets. Automatically syncs as results come in."
          icon={<GoogleSheetIcon className="w-14 h-14" />}
          active={false}
        />
        <IntegrationCard
          title="Excel"
          description="Send your typeform responses to Excel Online. Turn feedbacks into graph s, support queries into workflows , and much more."
          icon={<ExcelIcon className="w-14 h-14" />}
          active={false}
        />
      </div>
    </div>
  );
};

export default ConnectPage;
