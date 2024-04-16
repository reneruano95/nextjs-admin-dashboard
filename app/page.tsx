import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-3xl font-bold">Main page</div>
      <Link
        href="/dashboard"
        className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 rounded"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
