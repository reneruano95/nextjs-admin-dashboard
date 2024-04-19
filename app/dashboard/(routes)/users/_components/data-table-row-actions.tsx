import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FilePen, Trash2 } from "lucide-react";

interface Data {
  id: string;
}

interface DataTableRowActionsProps<TData extends Data> {
  row: Row<TData>;
}

function UpdateButton({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/users/${id}/edit`}>
      <Button variant="outline" size="icon">
        <FilePen className="h-5 w-5" />
      </Button>
    </Link>
  );
}

function DeleteButton({ id }: { id: string }) {
  const handleDelete = () => {
    console.log("Delete", id);
  };

  return (
    <Button variant="destructive" size="icon" onClick={handleDelete}>
      <Trash2 className="h-5 w-5" />
    </Button>
  );
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData & { id: string }>) {
  return (
    <div className="flex gap-2">
      <UpdateButton id={row.original.id} />
      <DeleteButton id={row.original.id} />
    </div>
  );
}
