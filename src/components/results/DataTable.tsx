import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: 1,
    screens: "start",
    screenViews: "13",
    exists: "9",
    dropOffRate: "69%",
  },
  {
    id: 2,
    screens: "marketing-channels",
    screenViews: "6",
    exists: "3",
    dropOffRate: "50%",
  },
  {
    id: 1,
    screens: "start",
    screenViews: "13",
    exists: "9",
    dropOffRate: "69%",
  },
  {
    id: 2,
    screens: "marketing-channels",
    screenViews: "6",
    exists: "3",
    dropOffRate: "50%",
  },
  {
    id: 1,
    screens: "start",
    screenViews: "13",
    exists: "9",
    dropOffRate: "69%",
  },
  {
    id: 2,
    screens: "marketing-channels",
    screenViews: "6",
    exists: "3",
    dropOffRate: "50%",
  },
  {
    id: 1,
    screens: "start",
    screenViews: "13",
    exists: "9",
    dropOffRate: "69%",
  },
  {
    id: 2,
    screens: "marketing-channels",
    screenViews: "6",
    exists: "3",
    dropOffRate: "50%",
  },
  {
    id: 1,
    screens: "start",
    screenViews: "13",
    exists: "9",
    dropOffRate: "69%",
  },
  {
    id: 2,
    screens: "marketing-channels",
    screenViews: "6",
    exists: "3",
    dropOffRate: "50%",
  },
];

const DataTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">#</TableHead>
          <TableHead className="text-muted-foreground">Screens</TableHead>
          <TableHead className="text-muted-foreground">Screen Views</TableHead>
          <TableHead className="text-muted-foreground">Exits</TableHead>
          <TableHead className="text-muted-foreground">Droo-off rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, i) => (
          <TableRow key={`${i}-${item.id}`}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.screens}</TableCell>
            <TableCell>{item.screenViews}</TableCell>
            <TableCell>{item.exists}</TableCell>
            <TableCell>{item.dropOffRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
