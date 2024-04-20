"use client";

import { Row } from "@tanstack/react-table";
import Link from "next/link";
import { Ellipsis, FilePen, ListCollapse, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Data {
  id: string;
}

interface DataTableRowActionsProps<TData extends Data> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData & { id: string }>) {
  const handleDelete = () => {
    console.log("Delete", row.original.id);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Ellipsis className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[24px]">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={`/dashboard/users/${row.original.id}/edit`}
            className="flex"
          >
            <FilePen className="h-4 w-4 mr-2" />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/dashboard/users/${row.original.id}/`} className="flex">
            <ListCollapse className="h-4 w-4 mr-2" />
            <span>Details</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleDelete}>
          <Trash2 className="h-4 w-4 mr-2 text-red-500" />
          <span className="text-red-500">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
