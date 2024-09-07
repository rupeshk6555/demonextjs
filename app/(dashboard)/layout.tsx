import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Include shared UI here e.g. a header or sidebar */}

      <Sidebar />

      <main className="flex h-full w-full flex-col px-9 py-7">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
