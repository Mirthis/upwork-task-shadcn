import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ConnectPage = () => {
  return (
    <div className="space-y-8">
      <div className="relative flex flex-row items-center justify-center">
        <Search className="h-4 w-4 absolute top-3 left-4 text-muted-foreground" />
        <Input placeholder="Search integrations" className="pl-10" />
      </div>
      <div className="space-y-4">
        <Card>
          <CardContent>Email</CardContent>
        </Card>
        <Card>
          <CardContent>Goolge Sheets</CardContent>
        </Card>
        <Card>
          <CardContent>Excel</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConnectPage;
