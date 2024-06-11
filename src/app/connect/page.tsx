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

const ConnectPage = () => {
  return (
    <div className="space-y-8">
      <div className="relative flex flex-row items-center justify-center">
        <Search className="h-4 w-4 absolute top-3 left-4 text-muted-foreground" />
        <Input placeholder="Search integrations" className="pl-10" />
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <Mail className="w-14 h-14" />
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-x-2">
                Email
                <Badge className="bg-emerald-50 hover:bg-emerald-50 flex flex-row shadow-none text-emerald-500 gap-x-1">
                  Active
                  <Check className="w-4 h-4 text-emerald-800" />
                </Badge>
              </CardTitle>
              <CardDescription>
                <p>Receive an email every time a user submit their answer.</p>
              </CardDescription>
            </CardHeader>
          </CardHeader>
        </Card>
        <Card className="flex flex-row items-center justify-between space-x-4">
          <CardHeader className="flex flex-row items-center space-x-4">
            <GoogleSheetIcon className="w-14 h-14" />
            <CardHeader>
              <CardTitle>Google Sheets</CardTitle>
              <CardDescription>
                <p>
                  Send your data straight to Google Sheets. Automatically syncs
                  as results come in.
                </p>
              </CardDescription>
            </CardHeader>
          </CardHeader>
          <CardContent className=" py-0">
            <Button>Connect</Button>
          </CardContent>
        </Card>
        <Card className="flex flex-row items-center justify-between space-x-4">
          <CardHeader className="flex flex-row items-center space-x-4">
            <ExcelIcon className="w-14 h-14" />
            <CardHeader>
              <CardTitle>Excel</CardTitle>
              <CardDescription>
                <p>
                  Send your typeform responses to Excel Online. Turn feedbacks
                  into graph s, support queries into workflows , and much more.
                </p>
              </CardDescription>
            </CardHeader>
          </CardHeader>
          <CardContent className=" py-0">
            <Button>Connect</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConnectPage;
