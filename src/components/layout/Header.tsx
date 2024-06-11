import { CircleUser, Eye, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import NavBarMenu from "./NavBarMenu";

const Header = () => {
  return (
    <header className="bg-background flex flex-row items-center justify-between  border-b border-border px-4">
      <Breadcrumb className="py-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">My Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">My new form</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <NavBarMenu />

      <div className="flex flex-row items-center gap-4 py-2 ">
        <Button variant="outline">
          <Eye />
        </Button>

        <Button>Publish</Button>

        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>
            <CircleUser />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
