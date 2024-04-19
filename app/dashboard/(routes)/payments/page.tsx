import { Payment, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "542e6d37",
      amount: 500,
      status: "paid",
      email: "sarah@example.com",
      date: "2022-01-01",
    },
    {
      id: "9494168a",
      amount: 250,
      status: "paid",
      email: "john@example.com",
      date: "2022-01-01",
    },
    {
      id: "087cc4d7",
      amount: 1000,
      status: "refunded",
      email: "janedoe@example.com",
      date: "2022-01-01",
    },
    {
      id: "8c4d270b",
      amount: 750,
      status: "pending",
      email: "jane.smith@example.com",
      date: "2022-01-01",
    },
  ];
}

export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
