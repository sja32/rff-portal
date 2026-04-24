import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1D1160]">Dashboard</h1>
            <p className="text-slate-600 mt-1">
              Welcome to RequestFlowForge. Secure. Approve. Deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card title="Pending Approvals" value="3" color="bg-yellow-500" />
            <Card title="Active Deployments" value="2" color="bg-[#00B5E2]" />
            <Card title="My Requests" value="5" color="bg-[#00788C]" />
            <Card title="Failed Jobs" value="1" color="bg-red-500" />
          </div>
        </main>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl p-6 shadow-lg text-white ${color}`}>
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}