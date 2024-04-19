import { Member, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Member[]> {
  // Fetch data from your API here.
  return [
    {
      id: "542e6d37",
      name: "Sarah",
      email: "sarah@example.com",
      role: "admin",
      status: "active",
      created_at: "2022-01-01",
      organization_id: "123",
    },
    {
      id: "9494168a",
      name: "John",
      email: "john@example.com",
      role: "user",
      status: "inactive",
      created_at: "2022-01-01",
      organization_id: "123",
    },
    {
      id: "087cc4d7",
      name: "Jane",
      email: "janedoe@example.com",
      role: "user",
      status: "active",
      created_at: "2022-01-01",
      organization_id: "123",
    },
    {
      id: "8c4d270b",
      name: "Jane",
      email: "jane.smith@example.com",
      role: "user",
      status: "active",
      created_at: "2022-01-01",
      organization_id: "123",
    },
  ];
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className=" flex flex-col flex-1">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
