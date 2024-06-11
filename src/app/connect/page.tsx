import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Mail } from "lucide-react";

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
            <Mail className="w-12 h-12" />
            <CardHeader>
              <CardTitle>Email</CardTitle>
              <CardDescription>
                <p>Receive an email every time a user submit their answer.</p>
              </CardDescription>
            </CardHeader>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Google Sheets</CardTitle>
            <CardDescription>
              <p>
                Send your data straight to Google Sheets. Automatically syncs as
                results come in.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Excel</CardTitle>
            <CardDescription>
              <p>
                Send your typeform responses to Excel Online. Turn feedbacks
                into graph s, support queries into workflows , and much more.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default ConnectPage;
